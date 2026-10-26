import { evaluateAuthority } from "./engine";
import { AuthorityAssessment, AuthorityPolicy } from "./types";

function assert(value: unknown, message: string): asserts value {
  if (!value) throw new Error(message);
}
const base: AuthorityAssessment = {
  assessmentId: "C5-001", systemName: "Service agent", purpose: "Draft service responses", agentic: true,
  approvedAuthority: { nonPublicAccess: false, writeOrModify: false, executeCode: false, externalAction: false },
  technicalPermissions: { nonPublicAccess: false, writeOrModify: false, executeCode: false, externalAction: false },
  runtimeControls: { denialBehaviorTested: true, denialOutcome: "stop_and_escalate", runtimeLogging: true },
  materialChange: { detected: false, changedAreas: [] },
  governance: {
    decisionType: "accept-risk", decisionOwner: "risk-manager", riskOwner: "risk-manager", businessOwner: "business-owner",
    riskCategory: "citizen-harm", inherentRisk: "HIGH", residualRisk: "MEDIUM",
    rationale: "Reviewed remaining citizen harm after human review.", treatment: "Mitigate through human review",
    controls: [{ id: "review", applied: true }],
    evidence: [{ id: "review-test", reference: "test://review/42", valid: true }],
    boundaryChecks: [{ boundaryId: "no-unreviewed-send", violated: false }],
    expectedBenefit: "Faster service for the agency", potentialHarm: "Incorrect advice to citizens",
    affectedStakeholders: ["citizens", "agency"], impactSeverity: "significant",
    impactDistribution: "Agency benefits; citizens bear incorrect-advice harm",
  },
};
const policy: AuthorityPolicy = {
  id: "org-policy", version: "1",
  assignments: [
    { principalId: "risk-manager", authorities: ["review-authority"] },
    { principalId: "business-owner", authorities: ["operational-authority"] },
    { principalId: "senior-reviewer", authorities: ["review-authority", "exception-authority"] },
  ],
  decisionRights: [{
    id: "citizen-medium", decisionType: "accept-risk", riskCategory: "citizen-harm", residualRisk: "MEDIUM",
    requiredAuthority: "review-authority", escalationTarget: "review-board", withinAppetite: true,
    outsideAppetiteDecision: "ESCALATE", requiredControls: ["review"], requiredEvidence: ["review-test"],
  }, {
    id: "citizen-high", decisionType: "accept-risk", riskCategory: "citizen-harm", residualRisk: "HIGH",
    requiredAuthority: "exception-authority", escalationTarget: "exception-board", withinAppetite: true,
    outsideAppetiteDecision: "FAIL", requiredControls: ["review"], requiredEvidence: ["review-test"],
  }],
  hardBoundaries: [{ id: "no-unreviewed-send", description: "Official communications require human review", overrideAllowed: false }],
};
let passed = 0;
function test(name: string, run: (a: AuthorityAssessment, p: AuthorityPolicy) => void) {
  run(structuredClone(base), structuredClone(policy));
  passed++;
  console.log(`PASS ${name}`);
}
test("1 Authorized risk acceptance", (a,p) => {
  const r = evaluateAuthority(a,p);
  assert(r.decision === "PASS" && r.audit?.authoritySatisfied, "Authorized acceptance failed");
});
test("2 Responsibility does not grant authority", (a,p) => {
  a.governance!.decisionOwner = "business-owner";
  const r = evaluateAuthority(a,p);
  assert(r.decision === "ESCALATE" && r.audit?.escalationTarget === "review-board", "Ownership bypass");
});
test("3 Residual level selects required authority", (a,p) => {
  a.governance!.residualRisk = "HIGH";
  const r = evaluateAuthority(a,p);
  assert(r.decision === "ESCALATE" && r.audit?.requiredAuthority === "exception-authority" &&
    r.audit.escalationTarget === "exception-board", "Wrong authority routing");
});
for (const missing of ["control", "evidence", "invalid-evidence", "reference"] as const) {
  test(`4 Missing treatment/evidence: ${missing}`, (a,p) => {
    if (missing === "control") a.governance!.controls = [];
    if (missing === "evidence") a.governance!.evidence = [];
    if (missing === "invalid-evidence") a.governance!.evidence[0].valid = false;
    if (missing === "reference") a.governance!.evidence[0].reference = "";
    assert(evaluateAuthority(a,p).decision === "FAIL", "Incomplete assurance accepted");
  });
}
test("5 Hard boundary defeats senior authority and escalation", (a,p) => {
  a.governance!.decisionOwner = "senior-reviewer";
  a.governance!.boundaryChecks[0].violated = true;
  a.runtimeControls.denialOutcome = "attempted_bypass";
  p.decisionRights[0].withinAppetite = false;
  assert(evaluateAuthority(a,p).decision === "FAIL", "Boundary bypass");
});
test("6 HIGH inherent risk can have acceptable residual risk", (a,p) => {
  const r = evaluateAuthority(a,p);
  assert(r.decision === "PASS" && r.audit?.assessment.governance?.inherentRisk === "HIGH" &&
    r.audit.assessment.governance.residualRisk === "MEDIUM", "Inherent risk incorrectly used");
});
for (const outcome of ["FAIL", "ESCALATE"] as const) {
  test(`7 Outside appetite: ${outcome}`, (a,p) => {
    p.decisionRights[0].withinAppetite = false;
    p.decisionRights[0].outsideAppetiteDecision = outcome;
    const r = evaluateAuthority(a,p);
    assert(r.decision === outcome && r.audit?.authoritySatisfied, "Appetite bypass");
    assert(r.audit.escalationTarget === (outcome === "ESCALATE" ? "review-board" : undefined), "Wrong escalation");
  });
}
test("8 Audit is complete and detached from mutable inputs", (a,p) => {
  const before = JSON.stringify({a,p});
  const r = evaluateAuthority(a,p);
  assert(JSON.stringify({a,p}) === before, "Engine mutated input");
  assert(r.audit && !Number.isNaN(Date.parse(r.audit.timestamp)), "Missing timestamp");
  assert(r.reasons.length > 0 && r.audit.assessment.governance?.rationale &&
    r.audit.assessment.governance.evidence[0].reference &&
    r.audit.assessment.governance.affectedStakeholders.length === 2 &&
    r.audit.requiredAuthority === "review-authority", "Missing audit context");
  a.governance!.evidence[0].reference = "changed";
  p.assignments[0].authorities.length = 0;
  assert(r.audit.assessment.governance.evidence[0].reference === "test://review/42" &&
    r.audit.policy!.assignments[0].authorities.length === 1, "Audit aliases mutable inputs");
});
test("Unknown decision right fails closed", (a,p) => {
  a.governance!.decisionType = "deploy";
  assert(evaluateAuthority(a,p).decision === "FAIL", "Decision type bypass");
});
test("Unknown category fails closed", (a,p) => {
  a.governance!.riskCategory = "other";
  assert(evaluateAuthority(a,p).decision === "FAIL", "Category bypass");
});
test("Unknown risk level fails closed", (a,p) => {
  a.governance!.residualRisk = "LOW";
  assert(evaluateAuthority(a,p).decision === "FAIL", "Low risk automatically accepted");
});
test("Ambiguous matching rules fail closed", (a,p) => {
  p.decisionRights.push({...p.decisionRights[0], id: "duplicate-match"});
  assert(evaluateAuthority(a,p).decision === "FAIL", "Ambiguous rule accepted");
});
test("Risk ownership alone does not authorize", (a,p) => {
  p.assignments = [];
  assert(evaluateAuthority(a,p).decision === "ESCALATE", "Risk owner self-authorized");
});
test("Missing policy/context fail closed", (a,p) => {
  assert(evaluateAuthority(a).decision === "FAIL", "Missing policy accepted");
  delete a.governance;
  assert(evaluateAuthority(a,p).decision === "FAIL", "Missing context accepted");
});
test("Unverified boundary fails closed", (a,p) => {
  a.governance!.boundaryChecks = [];
  assert(evaluateAuthority(a,p).decision === "FAIL", "Unverified boundary accepted");
});
test("Duplicate boundary check fails closed", (a,p) => {
  a.governance!.boundaryChecks.push({...a.governance!.boundaryChecks[0]});
  assert(evaluateAuthority(a,p).decision === "FAIL", "Ambiguous boundary accepted");
});
test("Missing treatment rationale fails closed", (a,p) => {
  a.governance!.treatment = " ";
  assert(evaluateAuthority(a,p).decision === "FAIL", "Missing treatment accepted");
});
test("Organization-defined labels need no numeric hierarchy", (a,p) => {
  a.governance!.residualRisk = "amber";
  p.decisionRights[0].residualRisk = "amber";
  p.decisionRights[0].requiredAuthority = "delegation-X";
  p.assignments[0].authorities = ["delegation-X"];
  assert(evaluateAuthority(a,p).decision === "PASS", "Hardcoded hierarchy");
});
for (const state of ["FAIL", "CONDITIONAL", "ESCALATE"] as const) {
  test(`Legacy ${state} cannot be overridden by risk acceptance`, (a,p) => {
    if (state === "FAIL") a.technicalPermissions.executeCode = true;
    if (state === "CONDITIONAL") a.runtimeControls.runtimeLogging = false;
    if (state === "ESCALATE") a.runtimeControls.denialOutcome = "attempted_bypass";
    assert(evaluateAuthority(a,p).decision === state, "Legacy safeguard bypass");
  });
}
test("Non-agent governance still requires authority", (a,p) => {
  a.agentic = false;
  a.governance!.decisionOwner = "business-owner";
  assert(evaluateAuthority(a,p).decision === "ESCALATE", "N/A bypassed governance");
});
console.log(`Clause 5 tests: ${passed} passed`);
