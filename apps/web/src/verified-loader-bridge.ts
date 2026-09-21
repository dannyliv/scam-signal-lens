import type { CorpusExample } from './generated/dataset-index';
import { verifiedReplayRegistry, type VerifiedExample, type VerifiedRun } from './verified-replay';

/**
 * This module is the only UI-side acceptance bridge. Generated loaders must call
 * it only after their browser verifier has checked the artifact and manifest.
 * Views receive opaque values and can only ask whether they were accepted.
 */
export function acceptVerifiedRecord(value: Omit<VerifiedExample, 'example'> & { example: CorpusExample }): VerifiedExample {
  return verifiedReplayRegistry.acceptExample(value);
}

export function acceptVerifiedRun(value: VerifiedRun): VerifiedRun {
  return verifiedReplayRegistry.acceptRun(value);
}
