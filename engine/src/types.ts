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
  governance?: GovernanceContext;

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
  audit?: GovernanceAudit;
  decision: Decision;
  reassessmentRequired: boolean;
  reasons: string[];
  requiredActions: string[];
  gaps: CapabilityKey[];
}


/** Labels are defined by the organization; no ordering or job titles are implied. */
export interface DecisionRight {
  id: string;
  decisionType: string;
  riskCategory: string;
  residualRisk: string;
  requiredAuthority: string;
  escalationTarget: string;
  withinAppetite: boolean;
  outsideAppetiteDecision: "FAIL" | "ESCALATE";
  requiredControls: string[];
  requiredEvidence: string[];
}

/** Trusted configuration, supplied separately from the assessment. */
export interface AuthorityPolicy {
  id: string;
  version: string;
  assignments: { principalId: string; authorities: string[] }[];
  decisionRights: DecisionRight[];
  hardBoundaries: { id: string; description: string; overrideAllowed: false }[];
}

export interface GovernanceContext {
  decisionType: string;
  decisionOwner: string;
  riskOwner: string;
  businessOwner?: string;
  riskCategory: string;
  inherentRisk: string;
  residualRisk: string;
  rationale: string;
  treatment: string;
  controls: { id: string; applied: boolean }[];
  evidence: { id: string; reference: string; valid: boolean }[];
  boundaryChecks: { boundaryId: string; violated: boolean }[];
  expectedBenefit: string;
  potentialHarm: string;
  affectedStakeholders: string[];
  impactSeverity?: string;
  impactDistribution?: string;
}

/** Detached snapshot: the result's decision/reasons/actions complete this record. */
export interface GovernanceAudit {
  timestamp: string;
  assessment: AuthorityAssessment;
  policy?: AuthorityPolicy;
  matchedRightId?: string;
  currentAuthority: string[];
  requiredAuthority?: string;
  authoritySatisfied: boolean;
  withinAppetite?: boolean;
  escalationTarget?: string;
  overrideAllowed: false;
  legacyDecision: Decision;
}
