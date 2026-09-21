export type PrivateValidationDiagnostic = {
  pass: "A" | "B";
  envelopeObject: boolean;
  envelopeExactKeys: boolean;
  modelMatch: boolean;
  usageExactKeys: boolean;
  usageNonnegativeIntegers: boolean;
  expectedQuestionCount: number;
  actualQuestionCount: number | null;
  answerIdSetMatch: boolean;
  failedExpectedQuestionIds: Array<{ id: string; failed: string[] }>;
  choiceSummary: { count: number; invalidNumericValueCount: number; finiteRangeCount: number; strictSumCount: number; gridSumCount: number; winnerPresentCount: number; winnerMaximalCount: number };
};

type Expected = Record<string, { type: "noul" | "choice"; options?: readonly string[] }>;
const object = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === "object" && !Array.isArray(value);
const same = (left: string[], right: readonly string[]) => left.length === right.length && left.every((value, index) => value === right[index]);
const finite = (value: unknown) => typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 1;
const grid = (value: number) => Math.abs(value * 100 - Math.round(value * 100)) <= 1e-9;

export function inspectProviderValidation(pass: "A" | "B", value: unknown, expected: Expected, requestedModel: string): PrivateValidationDiagnostic {
  const output: PrivateValidationDiagnostic = { pass, envelopeObject: object(value), envelopeExactKeys: false, modelMatch: false, usageExactKeys: false, usageNonnegativeIntegers: false, expectedQuestionCount: Object.keys(expected).length, actualQuestionCount: null, answerIdSetMatch: false, failedExpectedQuestionIds: [], choiceSummary: { count: 0, invalidNumericValueCount: 0, finiteRangeCount: 0, strictSumCount: 0, gridSumCount: 0, winnerPresentCount: 0, winnerMaximalCount: 0 } };
  if (!object(value)) return output;
  output.envelopeExactKeys = same(Object.keys(value).sort(), ["answers", "model", "usage"]);
  output.modelMatch = value.model === requestedModel;
  const usage = object(value.usage) ? value.usage : null;
  output.usageExactKeys = usage !== null && same(Object.keys(usage).sort(), ["input_tokens", "output_tokens"]);
  output.usageNonnegativeIntegers = output.usageExactKeys && Number.isInteger(usage!.input_tokens) && (usage!.input_tokens as number) >= 0 && Number.isInteger(usage!.output_tokens) && (usage!.output_tokens as number) >= 0;
  const answers = object(value.answers) ? value.answers : null;
  if (!answers) return output;
  const ids = Object.keys(expected).sort(); const actual = Object.keys(answers).sort();
  output.actualQuestionCount = actual.length; output.answerIdSetMatch = same(actual, ids);
  for (const id of ids) {
    const definition = expected[id]!; const answer = object(answers[id]) ? answers[id] : null; const failed: string[] = [];
    if (definition.type === "noul") {
      const exact = answer !== null && same(Object.keys(answer).sort(), ["noul", "type"]);
      if (!exact) failed.push("exact_keys");
      if (!(exact && answer!.type === "noul")) failed.push("type");
      if (!(exact && answer!.type === "noul" && finite(answer!.noul))) failed.push("finite_range");
    } else {
      output.choiceSummary.count++;
      const exact = answer !== null && same(Object.keys(answer).sort(), ["choice", "confidence", "probabilities", "type"]);
      const probabilities = exact && object(answer!.probabilities) ? answer!.probabilities : null;
      const expectedOptions = [...(definition.options ?? [])].sort(); const actualOptions = probabilities ? Object.keys(probabilities).sort() : [];
      const options = probabilities !== null && same(actualOptions, expectedOptions);
      if (!exact) failed.push("exact_keys"); if (!(exact && answer!.type === "choice")) failed.push("type"); if (!options) failed.push("option_set"); if (!(exact && finite(answer!.confidence))) failed.push("confidence_range");
      const values = probabilities ? Object.values(probabilities) : []; const numerics = values.filter((item): item is number => typeof item === "number" && Number.isFinite(item));
      const numericComplete = probabilities !== null && numerics.length === values.length;
      output.choiceSummary.invalidNumericValueCount += values.length - numerics.length;
      const range = options && numericComplete && numerics.every(finite); if (range) output.choiceSummary.finiteRangeCount++; else failed.push("probability_range");
      const sum = numericComplete ? numerics.reduce((total, item) => total + item, 0) : null; const residual = sum === null ? null : Math.abs(sum - 1);
      const strict = range && residual !== null && residual <= 1e-6; if (strict) output.choiceSummary.strictSumCount++;
      const gridSum = range && residual !== null && numerics.every(grid) && residual <= 0.0100001; if (gridSum) output.choiceSummary.gridSumCount++;
      if (!(strict || gridSum)) failed.push("probability_sum");
      const winner = exact && typeof answer!.choice === "string" && probabilities !== null && Object.hasOwn(probabilities, answer!.choice); if (winner) output.choiceSummary.winnerPresentCount++; else failed.push("winner_present");
      const maximum = numericComplete && numerics.length > 0 ? Math.max(...numerics) : null; const maximal = winner && maximum !== null && (probabilities![answer!.choice as string] as number) >= maximum - 1e-12; if (maximal) output.choiceSummary.winnerMaximalCount++; else failed.push("winner_maximal");
    }
    if (failed.length) output.failedExpectedQuestionIds.push({ id, failed });
  }
  return output;
}
