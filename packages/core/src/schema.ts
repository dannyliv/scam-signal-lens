import { SIGNAL_IDS, type ChoiceAnswer, type CorpusEnvelope, type ModelInput, type NoulAnswer, type PublicProviderResponse, type Segment } from "./types.js";

const isObject = (value: unknown): value is Record<string, unknown> => typeof value === "object" && value !== null && !Array.isArray(value);
const exactKeys = (value: Record<string, unknown>, keys: readonly string[], name: string) => {
  const actual = Object.keys(value).sort(); const expected = [...keys].sort();
  if (actual.length !== expected.length || actual.some((key, index) => key !== expected[index])) throw new Error(`${name} has unexpected fields`);
};
const finiteProbability = (value: unknown, name: string): number => {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0 || value > 1) throw new Error(`${name} must be a finite probability`);
  return value;
};

export function validateCorpusEnvelope(value: unknown, expectedDatasetId?: string): asserts value is CorpusEnvelope {
  if (!isObject(value) || value.version !== "1.0.0" || !isObject(value.metadata) || !Array.isArray(value.examples)) throw new Error("invalid corpus envelope");
  const ids = new Set<string>();
  for (const example of value.examples) {
    if (!isObject(example) || typeof example.id !== "string" || ids.has(example.id)) throw new Error("corpus IDs must be unique strings");
    ids.add(example.id);
    if (expectedDatasetId !== undefined && example.datasetId !== expectedDatasetId) throw new Error("unexpected dataset ID");
    if (example.language !== "en" && example.language !== "es") throw new Error("unsupported language");
    const input = example.input;
    if (!isObject(input) || input.channel !== "email" || (input.subject !== null && typeof input.subject !== "string") || typeof input.body !== "string" || typeof input.userContext !== "string") throw new Error("invalid email input");
    const truth = example.groundTruth;
    if (!isObject(truth) || (truth.label !== "phishing" && truth.label !== "benign") || (truth.labelSource !== "synthetic_author" && truth.labelSource !== "source_dataset")) throw new Error("invalid ground truth");
  }
}

export function validateNoul(value: unknown): asserts value is NoulAnswer {
  if (!isObject(value) || value.type !== "noul" || Object.prototype.hasOwnProperty.call(value, "confidence")) throw new Error("invalid Noul answer");
  exactKeys(value, ["type", "noul"], "Noul answer");
  finiteProbability(value.noul, "noul");
}

export function validateChoice(value: unknown, expectedOptions: readonly string[]): asserts value is ChoiceAnswer {
  if (!isObject(value) || value.type !== "choice" || typeof value.choice !== "string" || !isObject(value.probabilities)) throw new Error("invalid Choice answer");
  exactKeys(value, ["type", "choice", "probabilities", "confidence"], "Choice answer");
  finiteProbability(value.confidence, "choice confidence");
  const actual = Object.keys(value.probabilities).sort();
  const expected = [...expectedOptions].sort();
  if (actual.length !== expected.length || actual.some((option, index) => option !== expected[index])) throw new Error("Choice option set differs from request");
  const probabilities = Object.entries(value.probabilities).map(([option, probability]) => [option, finiteProbability(probability, `choice probability ${option}`)] as const);
  const total = probabilities.reduce((sum, [, probability]) => sum + probability, 0);
  const residual = Math.abs(total - 1);
  const hundredthsGrid = probabilities.every(([, probability]) => Math.abs(probability * 100 - Math.round(probability * 100)) <= 1e-9);
  if (residual > 1e-6 && !(hundredthsGrid && residual <= 0.0100001)) throw new Error("Choice probabilities must sum to one");
  if (!Object.prototype.hasOwnProperty.call(value.probabilities, value.choice)) throw new Error("Choice winner missing from probabilities");
  const largest = Math.max(...probabilities.map(([, probability]) => probability));
  if (finiteProbability(value.probabilities[value.choice], "choice winner probability") < largest - 1e-12) throw new Error("Choice winner must have maximal probability");
}

export function validatePublicProviderResponse(value: unknown, expected: Record<string, { type: "noul" | "choice"; options?: readonly string[] }>): asserts value is PublicProviderResponse {
  if (!isObject(value) || typeof value.model !== "string" || !isObject(value.answers) || !isObject(value.usage)) throw new Error("invalid provider response envelope");
  exactKeys(value, ["model", "answers", "usage"], "provider response");
  exactKeys(value.usage, ["input_tokens", "output_tokens"], "provider usage");
  const answerKeys = Object.keys(value.answers).sort();
  const expectedKeys = Object.keys(expected).sort();
  if (answerKeys.length !== expectedKeys.length || answerKeys.some((key, index) => key !== expectedKeys[index])) throw new Error("provider answer set differs from request");
  for (const key of expectedKeys) {
    const definition = expected[key]!;
    if (definition.type === "noul") validateNoul(value.answers[key]);
    else validateChoice(value.answers[key], definition.options ?? []);
  }
  for (const tokenField of ["input_tokens", "output_tokens"] as const) {
    const tokens = value.usage[tokenField];
    if (typeof tokens !== "number" || !Number.isInteger(tokens) || tokens < 0) throw new Error("invalid provider usage");
  }
}

export function allowlistedProviderResponse(value: unknown, expected: Record<string, { type: "noul" | "choice"; options?: readonly string[] }>): PublicProviderResponse {
  validatePublicProviderResponse(value, expected);
  const answers: PublicProviderResponse["answers"] = {};
  for (const [id, definition] of Object.entries(expected)) {
    const answer = value.answers[id]!;
    answers[id] = definition.type === "noul"
      ? { type: "noul", noul: (answer as NoulAnswer).noul }
      : { type: "choice", choice: (answer as ChoiceAnswer).choice, probabilities: { ...(answer as ChoiceAnswer).probabilities }, confidence: (answer as ChoiceAnswer).confidence };
  }
  return { model: value.model, answers, usage: { input_tokens: value.usage.input_tokens, output_tokens: value.usage.output_tokens } };
}

export function validateSegments(input: ModelInput, segments: Segment[]): void {
  const sources: Record<Segment["source"], string | null> = { subject: input.subject, body: input.body, userContext: input.userContext };
  const ids = new Set<string>();
  for (const segment of segments) {
    const source = sources[segment.source];
    if (ids.has(segment.id) || source === null || !["subject", "body", "userContext"].includes(segment.source) || !Number.isInteger(segment.start) || !Number.isInteger(segment.end) || segment.start < 0 || segment.end <= segment.start || segment.end > source.length || source.slice(segment.start, segment.end) !== segment.text) throw new Error("invalid stored segment");
    ids.add(segment.id);
  }
}

export function signalAnswerKeys(): readonly string[] { return SIGNAL_IDS; }
