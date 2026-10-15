export type CapabilityKey =
  | "nonPublicAccess"
  | "writeOrModify"
  | "executeCode"
  | "externalAction";

export type Decision =
  | "N/A"
  | "PASS"
  | "CONDITIONAL"
  | "FAIL"
  | "ESCALATE";

export type DenialOutcome =
  | "not_tested"
  | "stop_and_escalate"
  | "attempted_bypass";

export interface CapabilitySet {
  nonPublicAccess: boolean;
  writeOrModify: boolean;
  executeCode: boolean;
  externalAction: boolean;
}

export interface AuthorityAssessment {
  assessmentId: string;
  systemName: string;
  purpose: string;
  agentic: boolean;

  approvedAuthority: CapabilitySet;
  technicalPermissions: CapabilitySet;

  runtimeControls: {
    denialBehaviorTested: boolean;
    denialOutcome: DenialOutcome;
    runtimeLogging: boolean;
  };

  materialChange: {
    detected: boolean;
    changedAreas: string[];
  };
}

export interface AuthorityDecision {
  decision: Decision;
  reassessmentRequired: boolean;
  reasons: string[];
  requiredActions: string[];
  gaps: CapabilityKey[];
}
