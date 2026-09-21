export type FrozenCaptureConfig = { datasetSha256: string; questionSha256: string; policySha256: string; requestedModel: string; segmentSha256: string };
export type StoredCaptureConfig = FrozenCaptureConfig & { completed: boolean };
export type StagedPassA<T> = FrozenCaptureConfig & { exampleId: string; passA: T; completed: false };

export function resumeEligible(expected: FrozenCaptureConfig, stored: StoredCaptureConfig): boolean {
  return stored.completed && expected.datasetSha256 === stored.datasetSha256 && expected.questionSha256 === stored.questionSha256 && expected.policySha256 === stored.policySha256 && expected.requestedModel === stored.requestedModel && expected.segmentSha256 === stored.segmentSha256;
}

export function resumePassAEligible<T>(expected: FrozenCaptureConfig, stored: StagedPassA<T>): boolean {
  return stored.datasetSha256 === expected.datasetSha256 && stored.questionSha256 === expected.questionSha256 && stored.policySha256 === expected.policySha256 && stored.requestedModel === expected.requestedModel && stored.segmentSha256 === expected.segmentSha256;
}

export type FrozenExampleConfig = FrozenCaptureConfig & { exampleId: string; inputSha256: string; passARequestSha256: string; passBRequestSha256: string | null };
export type PersistedPassA<T> = FrozenExampleConfig & { passA: T; completed: false };
export async function runTwoPass<TA, TB>(options: {
  config: FrozenExampleConfig;
  load: () => Promise<PersistedPassA<TA> | null>;
  save: (stage: PersistedPassA<TA>) => Promise<void>;
  passA: () => Promise<TA>;
  passB: (passA: TA) => Promise<TB>;
}): Promise<{ passA: TA; passB: TB; reusedPassA: boolean }> {
  const staged = await options.load();
  const equal = (candidate: PersistedPassA<TA>) => candidate.exampleId === options.config.exampleId && candidate.inputSha256 === options.config.inputSha256 && candidate.passARequestSha256 === options.config.passARequestSha256 && candidate.passBRequestSha256 === options.config.passBRequestSha256 && resumePassAEligible(options.config, candidate);
  const passA = staged === null ? await options.passA() : equal(staged) ? staged.passA : (() => { throw new Error("persisted_pass_a_config_mismatch"); })();
  if (staged === null) await options.save({ ...options.config, passA, completed: false });
  const passB = await options.passB(passA);
  return { passA, passB, reusedPassA: staged !== null };
}

export function declaredAttemptCap(eligibleRows: number): number {
  if (!Number.isInteger(eligibleRows) || eligibleRows <= 0) throw new Error("eligible row count must be positive");
  return eligibleRows * 2 * 3;
}

export function assertAttemptBudget(attemptsUsed: number, cap: number): void {
  if (!Number.isInteger(attemptsUsed) || !Number.isInteger(cap) || attemptsUsed < 0 || cap <= 0 || attemptsUsed > cap) throw new Error("capture HTTP attempt cap exceeded");
}

export class AttemptBudget {
  private used = 0;
  constructor(readonly cap: number, initialUsed = 0) { assertAttemptBudget(initialUsed, cap); this.used = initialUsed; }
  consume(): number {
    if (this.used >= this.cap) throw new Error("attempt_cap_exceeded");
    this.used++;
    return this.used;
  }
  count(): number { return this.used; }
}
