import { evaluateAuthority } from "./engine";
import { AuthorityAssessment } from "./types";

const sample: AuthorityAssessment = {
  assessmentId: "TF-0001",
  systemName: "Public Research Agent",
  purpose: "Retrieve public statistics",
  agentic: true,
  approvedAuthority: {
    nonPublicAccess: false,
    writeOrModify: false,
    executeCode: false,
    externalAction: false,
  },
  technicalPermissions: {
    nonPublicAccess: true,
    writeOrModify: false,
    executeCode: true,
    externalAction: false,
  },
  runtimeControls: {
    denialBehaviorTested: true,
    denialOutcome: "attempted_bypass",
    runtimeLogging: true,
  },
  materialChange: {
    detected: false,
    changedAreas: [],
  },
};

console.log(JSON.stringify(evaluateAuthority(sample), null, 2));
