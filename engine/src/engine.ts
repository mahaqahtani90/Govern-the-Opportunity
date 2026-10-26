import {
  AuthorityAssessment,
  AuthorityDecision,
  CapabilityKey,
  AuthorityPolicy,
  GovernanceAudit,
} from "./types";

const LABELS: Record<CapabilityKey, string> = {
  nonPublicAccess: "Non-public access",
  writeOrModify: "Write / modify",
  executeCode: "Code / command execution",
  externalAction: "External / irreversible action",
};

const KEYS: CapabilityKey[] = [
  "nonPublicAccess",
  "writeOrModify",
  "executeCode",
  "externalAction",
];

function evaluateCapabilityAuthority(
  input: AuthorityAssessment
): AuthorityDecision {
  const reasons: string[] = [];
  const requiredActions: string[] = [];
  const gaps: CapabilityKey[] = [];

  if (!input.agentic) {
    return {
      decision: "N/A",
      reassessmentRequired: input.materialChange.detected,
      reasons: ["System is not agentic or tool-using."],
      requiredActions: [],
      gaps: [],
    };
  }

  for (const key of KEYS) {
    if (!input.approvedAuthority[key] && input.technicalPermissions[key]) {
      gaps.push(key);
      reasons.push(`${LABELS[key]} exceeds approved AI authority.`);
      requiredActions.push(
        `Remove or constrain ${LABELS[key].toLowerCase()} permission, or obtain explicit governance approval before use.`
      );
    }
  }

  if (input.runtimeControls.denialOutcome === "attempted_bypass") {
    reasons.unshift(
      "Agent attempted to bypass an explicit authority or access boundary."
    );
    requiredActions.unshift(
      "Stop the run, preserve evidence, and escalate for governance/security review."
    );
    return {
      decision: "ESCALATE",
      reassessmentRequired: input.materialChange.detected,
      reasons,
      requiredActions,
      gaps,
    };
  }

  if (gaps.length > 0) {
    return {
      decision: "FAIL",
      reassessmentRequired: input.materialChange.detected,
      reasons,
      requiredActions: [
        ...requiredActions,
        "Re-run the authority assessment after permissions are corrected.",
      ],
      gaps,
    };
  }

  if (!input.runtimeControls.denialBehaviorTested) {
    reasons.push("Denial behavior has not been tested.");
    requiredActions.push(
      "Test that an explicit denial leads to Stop → Escalate."
    );
  }

  if (!input.runtimeControls.runtimeLogging) {
    reasons.push("Runtime action logging is not enabled.");
    requiredActions.push(
      "Enable logging for material agent actions before production use."
    );
  }

  if (
    input.runtimeControls.denialBehaviorTested &&
    input.runtimeControls.denialOutcome !== "stop_and_escalate"
  ) {
    reasons.push("Denial test did not demonstrate Stop → Escalate.");
    requiredActions.push(
      "Correct and re-test boundary behavior before production use."
    );
  }

  if (reasons.length > 0) {
    return {
      decision: "CONDITIONAL",
      reassessmentRequired: input.materialChange.detected,
      reasons,
      requiredActions,
      gaps,
    };
  }

  return {
    decision: "PASS",
    reassessmentRequired: input.materialChange.detected,
    reasons: [
      "Technical permissions do not exceed approved authority.",
      "Denial behavior is tested and runtime logging is enabled.",
    ],
    requiredActions: input.materialChange.detected
      ? ["Reassess the system because a material change was detected."]
      : [],
    gaps,
  };
}


/** Clause 5 is opt-in; calls without governance and policy retain v0.3 behavior. */
export function evaluateAuthority(
  input: AuthorityAssessment,
  policy?: AuthorityPolicy,
): AuthorityDecision {
  const baseline = evaluateCapabilityAuthority(input);
  const context = input.governance;
  if (!context && !policy) return baseline;

  const assignments = policy?.assignments.filter(a => a.principalId === context?.decisionOwner) ?? [];
  const currentAuthority = assignments.flatMap(a => a.authorities);
  const matches = policy?.decisionRights.filter(r =>
    r.decisionType === context?.decisionType &&
    r.riskCategory === context?.riskCategory &&
    r.residualRisk === context?.residualRisk) ?? [];
  const right = matches.length === 1 ? matches[0] : undefined;
  const audit: GovernanceAudit = {
    timestamp: new Date().toISOString(),
    assessment: structuredClone(input),
    policy: policy ? structuredClone(policy) : undefined,
    matchedRightId: right?.id,
    currentAuthority: [...currentAuthority],
    requiredAuthority: right?.requiredAuthority,
    authoritySatisfied: !!right && currentAuthority.includes(right.requiredAuthority),
    withinAppetite: right?.withinAppetite,
    overrideAllowed: false,
    legacyDecision: baseline.decision,
  };
  const result = (decision: AuthorityDecision["decision"], reason: string, action?: string) => ({
    ...baseline,
    decision,
    reasons: [...baseline.reasons, reason],
    requiredActions: [...baseline.requiredActions, ...(action ? [action] : [])],
    audit,
  });
  if (!context || !policy) {
    return result("FAIL", "Governance context and trusted authority policy are both required.");
  }
  // Boundaries take precedence over all acceptance and escalation paths.
  for (const boundary of policy.hardBoundaries) {
    const checks = context.boundaryChecks.filter(c => c.boundaryId === boundary.id);
    if (boundary.overrideAllowed !== false || checks.length !== 1 || checks[0].violated !== false) {
      return result("FAIL", `Hard boundary ${boundary.id} is violated, unverified, or misconfigured.`,
        "Resolve the hard boundary; risk acceptance cannot override it.");
    }
  }
  if (context.boundaryChecks.some(c => c.violated || !policy.hardBoundaries.some(b => b.id === c.boundaryId))) {
    return result("FAIL", "A reported boundary is violated or absent from the trusted policy.");
  }
  const nonempty = (value: string) => typeof value === "string" && value.trim().length > 0;
  const uniqueIds = (values: string[]) => values.every(nonempty) && new Set(values).size === values.length;
  if (![policy.id, policy.version, context.decisionType, context.decisionOwner, context.riskOwner,
    context.riskCategory, context.inherentRisk, context.residualRisk, context.rationale,
    context.treatment, context.expectedBenefit, context.potentialHarm].every(nonempty) ||
    context.affectedStakeholders.length === 0 || !context.affectedStakeholders.every(nonempty) ||
    !uniqueIds(policy.decisionRights.map(r => r.id)) ||
    !uniqueIds(policy.hardBoundaries.map(b => b.id)) ||
    !uniqueIds(policy.assignments.map(a => a.principalId)) ||
    !uniqueIds(context.controls.map(c => c.id)) || !uniqueIds(context.evidence.map(e => e.id))) {
    return result("FAIL", "Governance context or policy identifiers are incomplete or ambiguous.");
  }
  if (!right) {
    return result("FAIL", "Exactly one decision right must match decision type, category, and residual risk.",
      "Configure an unambiguous decision right before accepting risk.");
  }
  if (![right.requiredAuthority, right.escalationTarget].every(nonempty) ||
    typeof right.withinAppetite !== "boolean" ||
    !["FAIL", "ESCALATE"].includes(right.outsideAppetiteDecision) ||
    !uniqueIds(right.requiredControls) || !uniqueIds(right.requiredEvidence)) {
    return result("FAIL", "The matching decision right is incomplete or invalid.");
  }
  const missingControls = right.requiredControls.filter(id =>
    !context.controls.some(c => c.id === id && c.applied === true));
  const missingEvidence = right.requiredEvidence.filter(id =>
    !context.evidence.some(e => e.id === id && e.valid === true && nonempty(e.reference)));
  if (missingControls.length || missingEvidence.length) {
    return result("FAIL", `Required controls/evidence missing or invalid: ${[...missingControls, ...missingEvidence].join(", ")}.`,
      "Complete treatment and provide valid evidence before risk acceptance.");
  }
  // Risk acceptance cannot promote an existing capability/control failure to PASS.
  if (!["PASS", "N/A"].includes(baseline.decision)) {
    if (baseline.decision === "ESCALATE") audit.escalationTarget = right.escalationTarget;
    return result(baseline.decision, "Existing capability and runtime-control requirements remain binding.");
  }
  if (!right.withinAppetite) {
    if (right.outsideAppetiteDecision === "ESCALATE") audit.escalationTarget = right.escalationTarget;
    return result(right.outsideAppetiteDecision, "Residual risk is outside configured appetite/tolerance.",
      right.outsideAppetiteDecision === "ESCALATE" ? `Escalate to ${right.escalationTarget}.` : "Reduce residual risk before resubmission.");
  }
  if (!audit.authoritySatisfied) {
    audit.escalationTarget = right.escalationTarget;
    return result("ESCALATE", `Decision-maker lacks required authority: ${right.requiredAuthority}.`,
      `Escalate to ${right.escalationTarget}.`);
  }
  return result("PASS", "Residual risk is within configured appetite and accepted by an authorized decision-maker.");
}
