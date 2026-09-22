import { CHOICE_CONFIDENCE_FLOOR, CHOICE_WINNER_PROBABILITY_FLOOR, NO, type PolicyFingerprint } from "./policy.js";

/** Spanish-question experiment. Baseline recordings stay on policy-v1 at YES 0.8. */
export const YES_ES_EXP = 0.7;
export const POLICY_VERSION_ES_EXP = "policy-v1-es-exp";

export function policyFingerprintEsExp(): PolicyFingerprint {
  return {
    policyVersion: POLICY_VERSION_ES_EXP,
    no: NO,
    yes: YES_ES_EXP,
    choiceConfidenceFloor: CHOICE_CONFIDENCE_FLOOR,
    choiceWinnerProbabilityFloor: CHOICE_WINNER_PROBABILITY_FLOOR,
    strongWarningRules: ["H1", "H2", "H3", "H4", "H5"],
  };
}
