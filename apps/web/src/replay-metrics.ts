import type { EvaluationRow, ReplayAnchor, ReplayEvent } from './verified-replay';

type PrefixAnchors = { passA: ReplayAnchor; passB?: ReplayAnchor | null; complete?: ReplayAnchor };

/** Pass A unlocks concern metrics. Evidence and capture completion unlock only at their own recorded anchors. */
export function revealedPassARows(rows: readonly EvaluationRow[], events: readonly ReplayEvent[], anchorsByExample: Readonly<Record<string, PrefixAnchors>>) {
  const anchorSeen = (anchor: ReplayAnchor | undefined) => anchor !== undefined && events.some((event) => event.captureSessionId === anchor.captureSessionId && event.seq === anchor.seq);
  return rows.flatMap((row) => {
    const anchors = anchorsByExample[row.id];
    if (!anchors || !anchorSeen(anchors.passA) || row.concern === null) return [];
    const complete = anchorSeen(anchors.complete);
    const evidence = anchors.passB === null ? complete : anchorSeen(anchors.passB);
    return [{
      ...row,
      captureComplete: complete,
      evidenceEligible: evidence ? row.evidenceEligible : 0,
      evidenceSelected: evidence ? row.evidenceSelected : 0,
      evidence: evidence ? row.evidence : {}
    }];
  });
}
