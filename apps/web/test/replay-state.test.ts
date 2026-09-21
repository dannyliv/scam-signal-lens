import { describe, expect, it } from 'vitest';
import { replayStatus } from '../src/replay-state';
import { exactEvidenceSegment, revealStage } from '../src/replay-details';
import { revealedPassARows } from '../src/replay-metrics';
import { isVerifiedExample, type CoreRecord } from '../src/verified-replay';

const events = [
  { seq: 1, captureSessionId: 'capture-1', exampleId: 'a', kind: 'request_started' as const, pass: 'A' as const },
  { seq: 2, captureSessionId: 'capture-1', exampleId: 'a', kind: 'request_finished' as const, pass: 'A' as const, outcome: 'success' as const, elapsedMs: 25 },
  { seq: 3, captureSessionId: 'capture-1', exampleId: 'a', kind: 'example_completed' as const, outcome: 'success' as const }
];
const anchors = { passA: { captureSessionId: 'capture-1', seq: 2 }, passB: { captureSessionId: 'capture-1', seq: 4 }, complete: { captureSessionId: 'capture-1', seq: 5 } };

describe('recorded replay state', () => {
  it('only exposes a bounded prefix while playback is incomplete', () => {
    expect(replayStatus(events, 2)).toMatchObject({ cursor: 2, complete: false, requestEvents: 1, completedExamples: 0 });
    expect(replayStatus(events, 99)).toMatchObject({ cursor: 3, complete: true, completedExamples: 1 });
  });
  it('fails closed for a forged serialized approval flag', () => {
    expect(isVerifiedExample({ verified: true, events })).toBe(false);
  });
  it('reveals recorded outputs only at their matching pass boundary', () => {
    expect(revealStage(events.slice(0, 1), anchors)).toEqual({ passA: false, evidence: false, complete: false });
    expect(revealStage([...events, { seq: 4, captureSessionId: 'capture-1', exampleId: 'a', kind: 'request_finished', pass: 'B', outcome: 'success' }, { seq: 5, captureSessionId: 'capture-1', exampleId: 'a', kind: 'example_completed', outcome: 'success' }], anchors)).toEqual({ passA: true, evidence: true, complete: true });
  });
  it('does not reveal a recovered pass from an earlier transport-success event', () => {
    const failedThenRecovered = [
      { seq: 7, captureSessionId: 'parent', exampleId: 'a', kind: 'request_finished' as const, pass: 'B' as const, outcome: 'success' as const },
      { seq: 8, captureSessionId: 'parent', exampleId: 'a', kind: 'example_completed' as const, outcome: 'schema_error' as const },
      { seq: 1, captureSessionId: 'recovery', exampleId: 'a', kind: 'request_finished' as const, pass: 'B' as const, outcome: 'success' as const }
    ];
    const recovered = { passA: { captureSessionId: 'parent', seq: 2 }, passB: { captureSessionId: 'recovery', seq: 1 }, complete: { captureSessionId: 'recovery', seq: 2 } };
    expect(revealStage(failedThenRecovered.slice(0, 2), recovered).evidence).toBe(false);
    expect(revealStage(failedThenRecovered, recovered).evidence).toBe(true);
    expect(revealStage(failedThenRecovered, recovered).complete).toBe(false);
  });
  it('only highlights an exact stored segment from its declared source field', () => {
    const example = { id: 'x', datasetId: 'x', title: 'x', language: 'en' as const, input: { channel: 'email' as const, subject: 'Notice', body: 'Please confirm the invoice.', userContext: '' }, groundTruth: { label: 'phishing' as const, labelSource: 'synthetic_author' as const }, provenance: {} };
    const record: CoreRecord = { requestedModel: 'test', segments: [{ id: 'b1', source: 'body', start: 7, end: 14, text: 'confirm' }], passA: { capturedAt: '2026-01-01T00:00:00.000Z', successfulAttemptElapsedMs: 1, attemptCount: 1, response: { answers: {} } }, passB: null, derived: { concern: 'alert', triggeredRuleIds: [], contextWarnings: [], evidence: { credential_request: { status: 'selected', segmentId: 'b1' } }, adviceTemplateIds: [] } };
    expect(exactEvidenceSegment(record, example, 'credential_request')?.text).toBe('confirm');
    expect(exactEvidenceSegment({ ...record, segments: [{ ...record.segments[0]!, text: 'wrong' }] }, example, 'credential_request')).toBeNull();
  });
  it('keeps transport-only, failed, and unavailable rows out of prefix metrics', () => {
    const rows = [
      { id: 'a', label: 'phishing' as const, concern: 'strong_warning_signs' as const, evidenceEligible: 0, evidenceSelected: 0 },
      { id: 'b', label: 'benign' as const, concern: 'few_warning_signs' as const, evidenceEligible: 0, evidenceSelected: 0 },
      { id: 'c', label: 'phishing' as const, concern: null, evidenceEligible: 0, evidenceSelected: 0 }
    ];
    const shown = [
      { seq: 1, captureSessionId: 'x', exampleId: 'a', kind: 'request_finished' as const, pass: 'A' as const, outcome: 'success' },
      { seq: 2, captureSessionId: 'x', exampleId: 'a', kind: 'example_completed' as const, outcome: 'success' },
      { seq: 3, captureSessionId: 'x', exampleId: 'b', kind: 'example_completed' as const, outcome: 'timeout' },
      { seq: 4, captureSessionId: 'x', exampleId: 'c', kind: 'example_completed' as const, outcome: 'success' }
    ];
    expect(revealedPassARows(rows, shown, { a: { passA: { captureSessionId: 'x', seq: 2 } }, b: { passA: { captureSessionId: 'recovery', seq: 2 } }, c: { passA: { captureSessionId: 'recovery', seq: 1 } } }).map((row) => row.id)).toEqual(['a']);
  });
  it('withholds evidence and completion coverage until their accepted anchors', () => {
    const rows = [{ id: 'a', label: 'phishing' as const, concern: 'strong_warning_signs' as const, evidenceEligible: 2, evidenceSelected: 1, evidence: { selected: 1, low_confidence: 1 }, captureComplete: true }];
    const anchorsByExample = { a: { passA: { captureSessionId: 'x', seq: 2 }, passB: { captureSessionId: 'x', seq: 4 }, complete: { captureSessionId: 'x', seq: 5 } } };
    const passAOnly = [{ seq: 2, captureSessionId: 'x', exampleId: 'a', kind: 'request_finished' as const, pass: 'A' as const, outcome: 'success' }];
    expect(revealedPassARows(rows, passAOnly, anchorsByExample)).toEqual([{ ...rows[0], evidenceEligible: 0, evidenceSelected: 0, evidence: {}, captureComplete: false }]);
    const complete = [...passAOnly, { seq: 4, captureSessionId: 'x', exampleId: 'a', kind: 'request_finished' as const, pass: 'B' as const, outcome: 'success' }, { seq: 5, captureSessionId: 'x', exampleId: 'a', kind: 'example_completed' as const, outcome: 'success' }];
    expect(revealedPassARows(rows, complete, anchorsByExample)).toEqual(rows);
  });
});
