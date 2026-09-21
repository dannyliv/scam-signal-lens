import { describe, expect, it } from "vitest";

import { canonicalJson, sha256Web } from "../src/canonical-json.js";
import { projectModelInput } from "../src/input.js";
import { evaluateDataset } from "../src/evaluation.js";
import { derivePolicy, NO, YES } from "../src/policy.js";
import { buildPassARequest } from "../src/questions.js";
import { segmentInput } from "../src/segmentation.js";
import { verifyReplayRecord } from "../src/replay.js";
import { policyFingerprint } from "../src/policy.js";
import { validateChoice } from "../src/schema.js";

describe("model input projection", () => {
  it("keeps only the four observed input fields and normalizes CRLF", () => {
    const input = projectModelInput({
      id: "hidden",
      title: "hidden",
      authorLabel: "phishing",
      input: {
        channel: "email",
        subject: "Hello\r\nthere",
        body: "Pay\r\nnow",
        userContext: "Existing\r\nthread",
      },
    } as unknown as { input: { channel: unknown; subject: unknown; body: unknown; userContext: unknown } });

    expect(input).toEqual({
      channel: "email",
      subject: "Hello\nthere",
      body: "Pay\nnow",
      userContext: "Existing\nthread",
    });
    expect(JSON.stringify(input)).not.toContain("hidden");
    expect(JSON.stringify(input)).not.toContain("phishing");
  });

  it("rejects empty and oversized text instead of truncating", () => {
    expect(() => projectModelInput({ input: { channel: "email", subject: null, body: "", userContext: "" } })).toThrow("body");
    expect(() => projectModelInput({ input: { channel: "email", subject: null, body: "x".repeat(8001), userContext: "" } })).toThrow("8000");
  });
});

describe("canonical JSON", () => {
  it("sorts object keys, preserves arrays, and rejects non-finite numbers", async () => {
    expect(canonicalJson({ z: [2, 1], a: { y: true, b: "x" } })).toBe('{"a":{"b":"x","y":true},"z":[2,1]}');
    await expect(sha256Web({ b: 1, a: 2 })).resolves.toBe(await sha256Web({ a: 2, b: 1 }));
    expect(() => canonicalJson({ value: Number.NaN })).toThrow("finite");
  });
});

describe("segmentation", () => {
  it("stores UTF-16 offsets that reproduce the exact substring", () => {
    const input = { channel: "email" as const, subject: "Hi 😀.", body: "First. Second!", userContext: "" };
    const segments = segmentInput(input, "en");
    for (const segment of segments) {
      const source = input[segment.source];
      expect(source.slice(segment.start, segment.end)).toBe(segment.text);
    }
  });
});

describe("questions and policy", () => {
  it("builds pass A without source labels and applies strong-warning precedence at exact boundaries", () => {
    const request = buildPassARequest({ channel: "email", subject: null, body: "Pay", userContext: "" }, "en");
    expect(JSON.stringify(request)).not.toContain("phishing");
    expect(Object.keys(request.questions)).toHaveLength(14);

    const result = derivePolicy({
      signals: { credential_request: YES, urgency_pressure: NO },
      messageRole: { choice: "informational", confidence: 1, probability: 1 },
      requestRoute: { choice: "no_sensitive_action", confidence: 1, probability: 1 },
    });
    expect(result.concern).toBe("strong_warning_signs");
    expect(result.triggeredRuleIds).toEqual(["H1"]);
  });

  it("keeps an uncertain sensitive signal in verify-first", () => {
    const result = derivePolicy({
      signals: { sensitive_data_request: (NO + YES) / 2 },
      messageRole: { choice: "active_request", confidence: 1, probability: 1 },
      requestRoute: { choice: "sender_supplied", confidence: 1, probability: 1 },
    });
    expect(result.concern).toBe("verify_first");
  });

  it("abstains when a low-confidence contextual winner is mixed or unknown", () => {
    const result = derivePolicy({
      signals: {},
      messageRole: { choice: "mixed_or_unclear", confidence: 0.64, probability: 0.69 },
      requestRoute: { choice: "no_sensitive_action", confidence: 1, probability: 1 },
    });
    expect(result.concern).toBe("not_enough_evidence");
  });

  it("abstains when either choice is low-confidence and the other winner is unknown", () => {
    const result = derivePolicy({
      signals: {},
      messageRole: { choice: "informational", confidence: 0.64, probability: 0.69 },
      requestRoute: { choice: "mixed_or_unknown", confidence: 1, probability: 1 },
    });
    expect(result.concern).toBe("not_enough_evidence");
  });
});

describe("evaluation", () => {
  it("computes strong-warning binary metrics without treating valid alternatives as benign", () => {
    const report = evaluateDataset("fixture", [
      { id: "a", label: "phishing", concern: "strong_warning_signs", evidenceEligible: 2, evidenceSelected: 1 },
      { id: "b", label: "phishing", concern: "verify_first", evidenceEligible: 0, evidenceSelected: 0 },
      { id: "c", label: "benign", concern: "strong_warning_signs", evidenceEligible: 1, evidenceSelected: 1 },
      { id: "d", label: "benign", concern: "few_warning_signs", evidenceEligible: 1, evidenceSelected: 0 },
    ]);
    expect(report.confusion).toEqual({ tp: 1, fp: 1, tn: 1, fn: 1 });
    expect(report.metrics.precision.value).toBe(0.5);
    expect(report.metrics.recallAmongDecided.value).toBe(0.5);
    expect(report.metrics.falsePositiveRate.value).toBe(0.5);
    expect(report.metrics.wholeCorpusAlertRecall).toEqual({ value: 0.5, numerator: 1, denominator: 2 });
    expect(report.coverage.classified).toBe(4);
  });

  it("returns null for undefined metric denominators", () => {
    const report = evaluateDataset("fixture", []);
    expect(report.metrics.precision.value).toBeNull();
    expect(report.metrics.precision.denominator).toBe(0);
    expect(report.metrics.falsePositiveRate.value).toBeNull();
  });

  it("does not count unavailable analysis as capture-complete", () => {
    const report = evaluateDataset("fixture", [{ id: "missing", label: "phishing", concern: null, evidenceEligible: 0, evidenceSelected: 0 }]);
    expect(report.coverage.captureComplete.value).toBe(0);
  });
});

describe("replay integrity", () => {
  it("reconstructs a recorded result and rejects derived or request tampering", async () => {
    const input = { channel: "email" as const, subject: null, body: "hello", userContext: "" };
    const passARequest = buildPassARequest(input, "en");
    const answers: Record<string, unknown> = {};
    for (const [id, question] of Object.entries(passARequest.questions)) {
      answers[id] = question.type === "noul"
        ? { type: "noul", noul: 0 }
        : id === "message_role"
          ? { type: "choice", choice: "informational", probabilities: { active_request: 0, informational: 1, educational_or_quoted: 0, mixed_or_unclear: 0 }, confidence: 1 }
          : { type: "choice", choice: "no_sensitive_action", probabilities: { independently_established: 0, sender_supplied: 0, no_sensitive_action: 1, mixed_or_unknown: 0 }, confidence: 1 };
    }
    const passA: any = { requestSha256: await sha256Web(passARequest), capturedAt: "2026-09-20T00:00:00.000Z", elapsedMs: 4, successfulAttemptElapsedMs: 4, attemptCount: 1, response: { model: "jev-1.13.0", answers, usage: { input_tokens: 1, output_tokens: 1 } } };
    const record: any = {
      schemaVersion: "1.0.0", exampleId: "fixture", inputSha256: await sha256Web(input), questionBundleSha256: await sha256Web(passARequest.questions), segmentationVersion: "intl-segmenter-sentence-v1", questionScope: "synthetic_sanitized", policySha256: await sha256Web(policyFingerprint()), requestedModel: "jev-1.13.0", segments: segmentInput(input, "en"), passA, passB: null, evidencePassStatus: "not_needed", processingElapsedMs: 5,
      derived: { concern: "few_warning_signs", triggeredRuleIds: [], contextWarnings: [], evidence: Object.fromEntries(Object.keys(answers).filter((id) => !["message_role", "request_route"].includes(id)).map((id) => [id, { status: "not_requested", segmentId: null }])), adviceTemplateIds: [] },
    };
    await expect(verifyReplayRecord(record, input, "en")).resolves.toEqual(record.derived);
    record.passA.requestSha256 = "0".repeat(64);
    await expect(verifyReplayRecord(record, input, "en")).rejects.toThrow("Pass A request hash");
    record.passA.requestSha256 = await sha256Web(passARequest);
    record.derived.concern = "strong_warning_signs";
    await expect(verifyReplayRecord(record, input, "en")).rejects.toThrow("derived replay result");
  });
});


describe("choice probability total validation", () => {
  const options = ["a", "b"] as const;
  const answer = (a: unknown, b: unknown, choice = "a") => ({ type: "choice", choice, probabilities: { a, b }, confidence: 0.5 });

  it("permits only hundredths-grid total residuals through the bounded exception", () => {
    expect(() => validateChoice(answer(0.99, 0), options)).not.toThrow();
    expect(() => validateChoice(answer(1, 0.01), options)).not.toThrow();
    expect(() => validateChoice(answer(0.98, 0), options)).toThrow("sum to one");
    expect(() => validateChoice(answer(1, 0.02), options)).toThrow("sum to one");
    expect(() => validateChoice(answer(0.995, 0), options)).toThrow("sum to one");
  });

  it("preserves strict totals, epsilon boundaries, and all non-total validation", () => {
    const preserved = answer(0.99, 0);
    expect(() => validateChoice(preserved, options)).not.toThrow();
    expect(preserved.probabilities).toEqual({ a: 0.99, b: 0 });
    expect(() => validateChoice(answer(1 - 2 ** -20, 0), options)).not.toThrow();
    expect(() => validateChoice(answer(1 - 2 ** -19, 0), options)).toThrow("sum to one");
    expect(() => validateChoice(answer(-0.01, 1.01), options)).toThrow("finite probability");
    expect(() => validateChoice({ type: "choice", choice: "a", probabilities: { a: 1 }, confidence: 0.5 }, options)).toThrow("option set");
    expect(() => validateChoice(answer(0, 1, "a"), options)).toThrow("maximal");
  });
});
