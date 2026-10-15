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
  console.log(evaluateAuthority(test));
}
