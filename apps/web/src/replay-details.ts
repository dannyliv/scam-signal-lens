import type { CorpusExample } from './generated/dataset-index';
import type { CoreRecord, ReplayAnchor, ReplayEvent } from './verified-replay';

export type RevealStage = { passA: boolean; evidence: boolean; complete: boolean };

function containsAnchor(events: readonly ReplayEvent[], anchor: ReplayAnchor | null) {
  return anchor !== null && events.some((event) => event.captureSessionId === anchor.captureSessionId && event.seq === anchor.seq);
}
export function revealStage(events: readonly ReplayEvent[], anchors: { passA: ReplayAnchor; passB: ReplayAnchor | null; complete: ReplayAnchor }): RevealStage {
  return { passA: containsAnchor(events, anchors.passA), evidence: containsAnchor(events, anchors.passB), complete: containsAnchor(events, anchors.complete) };
}

export function exactEvidenceSegment(record: CoreRecord, example: CorpusExample, signalId: string) {
  const evidence = record.derived.evidence[signalId];
  if (!evidence || evidence.status !== 'selected' || !evidence.segmentId) return null;
  const segment = record.segments.find((item) => item.id === evidence.segmentId);
  if (!segment) return null;
  const source = segment.source === 'subject' ? example.input.subject ?? '' : example.input[segment.source];
  if (!Number.isInteger(segment.start) || !Number.isInteger(segment.end) || segment.start < 0 || segment.end < segment.start || segment.end > source.length) return null;
  if (source.slice(segment.start, segment.end) !== segment.text) return null;
  return segment;
}

export function readableAdvice(templateId: string) {
  const guidance: Record<string, string> = {
    avoid_sender_route: 'Do not use the contact route supplied in the message.',
    verify_independently: 'Verify the request through a contact method you already trust.',
    pause_before_payment: 'Pause before sending money or changing payment details, then verify the request independently.',
    protect_credentials: 'Do not share passwords, recovery codes, or verification codes from an email request.',
    decline_remote_access: 'Do not install remote-access software or grant screen control because of an unsolicited message.',
    report_suspicious: 'Use your organization’s established reporting channel if the request remains suspicious.'
  };
  return guidance[templateId] ?? 'Review the request through an independent, trusted channel before acting.';
}
