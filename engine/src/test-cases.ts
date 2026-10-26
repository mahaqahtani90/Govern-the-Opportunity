import { evaluateAuthority } from "./engine";
import { AuthorityAssessment } from "./types";

const base: AuthorityAssessment = {
  assessmentId: "TF-TEST",
  systemName: "Research Agent",
  purpose: "Retrieve approved information",
  agentic: true,
  approvedAuthority: {
    nonPublicAccess: false,
    writeOrModify: false,
    executeCode: false,
    externalAction: false,
  },
  technicalPermissions: {
    nonPublicAccess: false,
    writeOrModify: false,
    executeCode: false,
    externalAction: false,
  },
  runtimeControls: {
    denialBehaviorTested: true,
    denialOutcome: "stop_and_escalate",
    runtimeLogging: true,
  },
  materialChange: {
    detected: false,
    changedAreas: [],
  },
};

const cases: Record<string, AuthorityAssessment> = {
  pass: base,
  conditional: {
    ...base,
    runtimeControls: { ...base.runtimeControls, runtimeLogging: false },
  },
  fail: {
    ...base,
    technicalPermissions: { ...base.technicalPermissions, executeCode: true },
  },
  escalate: {
    ...base,
    runtimeControls: { ...base.runtimeControls, denialOutcome: "attempted_bypass" },
  },
};

for (const [name, test] of Object.entries(cases)) {
  console.log(`\n=== ${name.toUpperCase()} ===`);
  const result = evaluateAuthority(test);
  if (result.decision !== name.toUpperCase() || result.audit !== undefined) {
    throw new Error(`Legacy regression: ${name}`);
  }
  console.log(result);
}

const nonAgent = evaluateAuthority({ ...base, agentic: false });
if (nonAgent.decision !== "N/A") throw new Error("Non-agent regression");
for (const sample of [...Object.values(cases), { ...base, agentic: false }]) {
  const unchanged = evaluateAuthority(sample);
  const changed = evaluateAuthority({ ...sample, materialChange: { detected: true, changedAreas: ["tool"] } });
  if (changed.decision !== unchanged.decision || !changed.reassessmentRequired) {
    throw new Error("Material-change regression");
  }
}
console.log("Legacy regression assertions: 10 passed");
