import { SIGNAL_IDS, type Concern, type ContextualChoice, type SignalId } from "./types.js";

export const NO = 0.2;
export const YES = 0.8;
export const CHOICE_CONFIDENCE_FLOOR = 0.65;
export const CHOICE_WINNER_PROBABILITY_FLOOR = 0.7;
export const POLICY_VERSION = "policy-v1";

export type PolicyFingerprint = {
  policyVersion: string;
  no: number;
  yes: number;
  choiceConfidenceFloor: number;
  choiceWinnerProbabilityFloor: number;
  strongWarningRules: readonly string[];
};

/** The complete fixed policy configuration that is bound into every baseline recording. */
export function policyFingerprint(): PolicyFingerprint {
  return {
    policyVersion: POLICY_VERSION,
    no: NO,
    yes: YES,
    choiceConfidenceFloor: CHOICE_CONFIDENCE_FLOOR,
    choiceWinnerProbabilityFloor: CHOICE_WINNER_PROBABILITY_FLOOR,
    strongWarningRules: ["H1", "H2", "H3", "H4", "H5"],
  };
}

export type PolicyInput = { signals: Partial<Record<SignalId, number>>; messageRole: ContextualChoice; requestRoute: ContextualChoice };
export type PolicyResult = { policyVersion: string; concern: Concern; triggeredRuleIds: string[]; contextWarnings: string[] };

export function derivePolicy(input: PolicyInput, fingerprint: PolicyFingerprint = policyFingerprint()): PolicyResult {
  const yesThreshold = fingerprint.yes;
  const noThreshold = fingerprint.no;
  const confidenceFloor = fingerprint.choiceConfidenceFloor;
  const winnerFloor = fingerprint.choiceWinnerProbabilityFloor;
  const atLeast = (value: number | undefined, threshold: number) => (value ?? 0) >= threshold;
  const uncertain = (value: number | undefined) => value !== undefined && value > noThreshold && value < yesThreshold;
  const contextual = (value: ContextualChoice, choice: string) => value.choice === choice && value.confidence >= confidenceFloor && value.probability >= winnerFloor;
  const lowContextual = (value: ContextualChoice) => value.confidence < confidenceFloor || value.probability < winnerFloor;
  for (const [id, probability] of Object.entries(input.signals)) if (!Number.isFinite(probability) || probability! < 0 || probability! > 1) throw new Error(`invalid signal probability: ${id}`);
  const yes = (id: SignalId) => atLeast(input.signals[id], yesThreshold);
  const isUncertain = (id: SignalId) => uncertain(input.signals[id]);
  const established = contextual(input.requestRoute, "independently_established");
  const senderSupplied = contextual(input.requestRoute, "sender_supplied");
  const routeUnknownWinner = input.requestRoute.choice === "mixed_or_unknown";
  const roleMixedWinner = input.messageRole.choice === "mixed_or_unclear";
  const rules: string[] = [];

  if (yes("credential_request")) rules.push("H1");
  if (yes("advance_fee_or_refund_trap")) rules.push("H2");
  if (yes("payment_request") && (yes("unusual_payment_routing") || yes("verification_bypass") || yes("unrealistic_reward"))) rules.push("H3");
  if (yes("remote_access_request") && (yes("urgency_pressure") || yes("verification_bypass")) && !established) rules.push("H4");
  if (yes("sensitive_data_request") && senderSupplied && (yes("urgency_pressure") || yes("authority_claim"))) rules.push("H5");

  const warnings: string[] = [];
  if (lowContextual(input.messageRole)) warnings.push("message_role_low_confidence");
  if (lowContextual(input.requestRoute)) warnings.push("request_route_low_confidence");
  if (contextual(input.messageRole, "educational_or_quoted") && yes("credential_request")) warnings.push("role_feature_conflict");

  if (rules.length > 0) return { policyVersion: fingerprint.policyVersion, concern: "strong_warning_signs", triggeredRuleIds: rules, contextWarnings: warnings };
  if ((lowContextual(input.messageRole) || lowContextual(input.requestRoute)) && (roleMixedWinner || routeUnknownWinner)) return { policyVersion: fingerprint.policyVersion, concern: "not_enough_evidence", triggeredRuleIds: [], contextWarnings: warnings };
  const reviewSignals: SignalId[] = ["credential_request", "sensitive_data_request", "unusual_payment_routing", "verification_bypass", "advance_fee_or_refund_trap", "analyzer_instruction"];
  const requestedSensitiveAction = yes("payment_request") || yes("sensitive_data_request") || yes("remote_access_request");
  if (reviewSignals.some(isUncertain) || yes("verification_bypass") || yes("analyzer_instruction") || (requestedSensitiveAction && !established) || lowContextual(input.messageRole) || lowContextual(input.requestRoute) || warnings.includes("role_feature_conflict")) {
    return { policyVersion: fingerprint.policyVersion, concern: "verify_first", triggeredRuleIds: [], contextWarnings: warnings };
  }
  return { policyVersion: fingerprint.policyVersion, concern: "few_warning_signs", triggeredRuleIds: [], contextWarnings: warnings };
}

export function signalStatus(probability: number, yes = YES, no = NO): "indicated" | "uncertain" | "not_indicated" {
  if (!Number.isFinite(probability) || probability < 0 || probability > 1) throw new Error("signal probability must be in [0,1]");
  if (probability >= yes) return "indicated";
  if (probability <= no) return "not_indicated";
  return "uncertain";
}

export { SIGNAL_IDS };
