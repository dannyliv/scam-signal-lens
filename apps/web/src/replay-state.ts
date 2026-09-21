export type ReplayEvent = { seq: number; kind: 'request_started' | 'request_finished' | 'pass_skipped' | 'example_completed'; pass?: 'A' | 'B' | null; elapsedMs?: number };
export function replayStatus(events: ReplayEvent[], cursor: number) {
  const safeCursor = Math.max(0, Math.min(cursor, events.length));
  const revealed = events.slice(0, safeCursor);
  return { cursor: safeCursor, complete: safeCursor === events.length, revealed, completedExamples: revealed.filter((event) => event.kind === 'example_completed').length, requestEvents: revealed.filter((event) => event.kind === 'request_finished').length };
}
