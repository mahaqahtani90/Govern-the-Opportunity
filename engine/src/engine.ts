import {
  AuthorityAssessment,
  AuthorityDecision,
  CapabilityKey,
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

export function evaluateAuthority(
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
