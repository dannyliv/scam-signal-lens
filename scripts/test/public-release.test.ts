import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { execFile } from 'node:child_process';
import { describe, expect, it } from 'vitest';
import { sha256Web } from '@scam-signal-lens/core';
import { parseManifest, publicEvents, replayAnchors, runProjection, validateRecoveryRecord, verifyManifestConfig } from '../build-public-data.js';

const root = resolve(import.meta.dirname, '../..');
const corpusPath = resolve(root, 'data/corpora/ai-email-200-v1.json');
const spaCorpusPath = resolve(root, 'data/corpora/spaphish-v5.json');

async function fixtureManifest(overrides: Record<string, unknown> = {}) {
  const directory = await mkdtemp(resolve(tmpdir(), 'scam-signal-lens-public-release-'));
  const corpus = JSON.parse(await readFile(corpusPath, 'utf8'));
  const config = {
    datasetId: 'ai-email-200-v1',
    datasetSha256: 'c67f3bc7a4c16be626fe26ed2bcf56658d44286e12b75ed098d3eb6ecb30ed7c',
    questionBundleSha256: 'a'.repeat(64),
    policySha256: 'b'.repeat(64),
    requestedModel: 'jev-test',
    segmentationVersion: 'segments-v1',
    sourceContentSha256: 'c'.repeat(64),
    declaredHttpAttemptCap: 1200
  };
  const manifest = {
    schemaVersion: '1.0.0',
    runId: 'test-run',
    ...config,
    actualHttpAttemptCount: 0,
    runWallElapsedMs: 0,
    runWallMeasurement: 'sum_completed_sessions',
    unknownInterruptedSessionCount: 0,
    expectedCount: corpus.examples.length,
    completedCount: 0,
    configSha256: await sha256Web(config),
    captureSessions: [],
    records: [],
    failures: [],
    ...overrides
  };
  await writeFile(resolve(directory, 'manifest.json'), `${JSON.stringify(manifest)}\n`);
  return directory;
}

async function exportAttempt(records: string, final = false) {
  await mkdtemp(resolve(tmpdir(), 'scam-signal-lens-public-output-'));
  const args: string[] = ['tsx', 'scripts/build-public-data.ts', '--corpus', corpusPath, '--records', records, '--out', resolve(root, 'apps/web/src/generated/records-test')];
  if (final) args.push('--final');
  return new Promise<{ stdout: string; stderr: string }>((done, fail) => {
    execFile('pnpm', args, { cwd: root, encoding: 'utf8' }, (error, stdout, stderr) => error ? fail(Object.assign(error, { stdout, stderr })) : done({ stdout, stderr }));
  });
}

async function evaluationAttempt(records: string) {
  const output = await mkdtemp(resolve(tmpdir(), 'scam-signal-lens-private-evaluation-'));
  const args: string[] = ['tsx', 'scripts/evaluate-recording.ts', '--corpus', corpusPath, '--records', records, '--out', output];
  return new Promise<{ stdout: string; stderr: string }>((done, fail) => {
    execFile('pnpm', args, { cwd: root, encoding: 'utf8' }, (error, stdout, stderr) => error ? fail(Object.assign(error, { stdout, stderr })) : done({ stdout, stderr }));
  });
}

describe('public recording release gates', () => {
  it('rejects a private capture manifest before projection', async () => {
    const records = await fixtureManifest({ datasetId: 'private-input-v1' });
    await expect(exportAttempt(records, true)).rejects.toMatchObject({ stderr: expect.stringContaining('frozen public corpus') });
  });

  it('rejects duplicate manifest enrollment before reading records', async () => {
    const records = await fixtureManifest({ records: [
      { exampleId: 'AIB001', inputSha256: 'd'.repeat(64), passARequestSha256: 'e'.repeat(64), passBRequestSha256: null, recordSha256: 'f'.repeat(64), events: [] },
      { exampleId: 'AIB001', inputSha256: 'd'.repeat(64), passARequestSha256: 'e'.repeat(64), passBRequestSha256: null, recordSha256: 'f'.repeat(64), events: [] }
    ] });
    await expect(exportAttempt(records, true)).rejects.toMatchObject({ stderr: expect.stringContaining('duplicate manifest record ID') });
  });

  it('rejects a final publication with missing enrolled recordings', async () => {
    const records = await fixtureManifest();
    await expect(exportAttempt(records, true)).rejects.toMatchObject({ stderr: expect.stringContaining('complete frozen capture') });
  });

  it('rejects a private JSON artifact that is not enrolled by the manifest', async () => {
    const records = await fixtureManifest();
    await writeFile(resolve(records, 'private-snapshot.json'), '{"must_not_publish":true}\n');
    await expect(evaluationAttempt(records)).rejects.toMatchObject({ stderr: expect.stringContaining('nonallowlisted JSON record artifact') });
  });

  it('anchors only the final successful retry and requires a successful completion', () => {
    const record = { exampleId: 'fixture', passA: { attemptCount: 1, successfulAttemptElapsedMs: 10, capturedAt: '2026-09-20T00:00:03.000Z' }, passB: { attemptCount: 2, successfulAttemptElapsedMs: 14, capturedAt: '2026-09-20T00:00:06.000Z' } } as any;
    const events = [
      { seq: 1, captureSessionId: 'first', exampleId: 'fixture', pass: 'A', attempt: 1, kind: 'request_finished', at: '2026-09-20T00:00:02.000Z', offsetMs: 2, elapsedMs: 10, outcome: 'success' },
      { seq: 1, captureSessionId: 'recovery', exampleId: 'fixture', pass: 'B', attempt: 1, kind: 'request_finished', at: '2026-09-20T00:00:04.000Z', offsetMs: 4, elapsedMs: 9, outcome: 'success' },
      { seq: 2, captureSessionId: 'recovery', exampleId: 'fixture', pass: 'B', attempt: 2, kind: 'request_finished', at: '2026-09-20T00:00:05.000Z', offsetMs: 5, elapsedMs: 14, outcome: 'success' },
      { seq: 3, captureSessionId: 'recovery', exampleId: 'fixture', pass: null, attempt: null, kind: 'example_completed', at: '2026-09-20T00:00:07.000Z', offsetMs: 7, outcome: 'success' }
    ] as any;
    expect(replayAnchors(record, events)).toEqual({ passA: { captureSessionId: 'first', seq: 1 }, passB: { captureSessionId: 'recovery', seq: 2 }, complete: { captureSessionId: 'recovery', seq: 3 } });
    expect(() => replayAnchors(record, events.slice(0, -1))).toThrow('completion event anchor');
  });

  it('accepts a same-millisecond completion when its validated session sequence follows the accepted stage', () => {
    const record = { exampleId: 'fixture', passA: { attemptCount: 1, successfulAttemptElapsedMs: 10, capturedAt: '2026-09-20T00:00:03.000Z' }, passB: null } as any;
    const events = [
      { seq: 4, captureSessionId: 'session', exampleId: 'fixture', pass: 'A', attempt: 1, kind: 'request_finished', at: '2026-09-20T00:00:03.000Z', offsetMs: 3, elapsedMs: 10, outcome: 'success' },
      { seq: 5, captureSessionId: 'session', exampleId: 'fixture', pass: null, attempt: null, kind: 'example_completed', at: '2026-09-20T00:00:03.000Z', offsetMs: 3, outcome: 'success' }
    ] as any;
    expect(replayAnchors(record, events)).toEqual({ passA: { captureSessionId: 'session', seq: 4 }, passB: null, complete: { captureSessionId: 'session', seq: 5 } });
  });

  it('allows event sequence resets between sessions and rejects them within one session', () => {
    const event = (captureSessionId: string, seq: number) => ({ seq, captureSessionId, exampleId: 'fixture', pass: 'A', attempt: 1, kind: 'request_finished', at: '2026-09-20T00:00:00.000Z', offsetMs: 0, elapsedMs: 1, outcome: 'success' });
    expect(publicEvents([event('one', 1), event('two', 1)], 'fixture')).toHaveLength(2);
    expect(() => publicEvents([event('one', 2), event('one', 1)], 'fixture')).toThrow('event sequence');
  });

  it('keeps the reviewed SpaPhish redaction limited to the recorded input token value', async () => {
    const corpus = JSON.parse(await readFile(spaCorpusPath, 'utf8'));
    const ledger = JSON.parse(await readFile(resolve(root, 'data/provenance/spaphish-v5-redactions.json'), 'utf8'));
    const selection = JSON.parse(await readFile(resolve(root, 'data/provenance/spaphish-v5-selection-manifest.json'), 'utf8'));
    const redaction = ledger.redactions[0];
    const example = corpus.examples.find((candidate: { id: string }) => candidate.id === redaction.exampleId);
    expect(ledger.redactions).toHaveLength(1);
    expect(corpus.examples).toHaveLength(499);
    expect(corpus.examples.filter((candidate: { groundTruth: { label: string } }) => candidate.groundTruth.label === 'benign')).toHaveLength(250);
    expect(corpus.examples.filter((candidate: { groundTruth: { label: string } }) => candidate.groundTruth.label === 'phishing')).toHaveLength(249);
    expect(corpus.examples.some((candidate: { id: string }) => candidate.id === 'SPAPHISH-088')).toBe(false);
    expect(example.input.body).toContain(redaction.replacement);
    expect(await sha256Web(example.input)).toBe(redaction.newInputSha256);
    expect(selection.selectedInputSha256[redaction.sourceRecordId]).toBe(redaction.newInputSha256);
  });

  it('binds an explicit unchanged-input recovery null lineage into the manifest configuration hash', async () => {
    const records = await fixtureManifest();
    const raw = JSON.parse(await readFile(resolve(records, 'manifest.json'), 'utf8'));
    raw.recoveryLineage = null;
    raw.configSha256 = await sha256Web({
      datasetId: raw.datasetId, datasetSha256: raw.datasetSha256, questionBundleSha256: raw.questionBundleSha256,
      policySha256: raw.policySha256, requestedModel: raw.requestedModel, segmentationVersion: raw.segmentationVersion,
      sourceContentSha256: raw.sourceContentSha256, declaredHttpAttemptCap: raw.declaredHttpAttemptCap, recoveryLineage: null
    });
    await expect(verifyManifestConfig(parseManifest(raw))).resolves.toBeUndefined();
  });

  it('keeps unaccepted inherited history while constraining recovery stage anchors', async () => {
    const inherited = 'parent', current = 'recovery';
    const passA = { requestSha256: 'a'.repeat(64), capturedAt: '2026-09-20T00:00:01.000Z', elapsedMs: 5, successfulAttemptElapsedMs: 5, attemptCount: 1, response: {} };
    const manifest = (imports: any[], changedInput: any = null) => ({
      recoveryLineage: { inheritedSessionIds: [inherited], imports, changedInput },
      captureSessions: [{ captureSessionId: inherited }, { captureSessionId: current }]
    });
    const entry = (events: any[]) => ({ exampleId: 'AIB001', recordSha256: 'r'.repeat(64), events });
    const currentAnchors = { passA: { captureSessionId: current, seq: 2 }, passB: null, complete: { captureSessionId: current, seq: 3 } };
    const inheritedFailure = { captureSessionId: inherited, seq: 1, exampleId: 'AIB001', pass: 'A', attempt: 1, kind: 'request_finished', at: '2026-09-20T00:00:00.000Z', offsetMs: 0, outcome: 'validation_failed' };
    const currentEvents = [{ ...inheritedFailure, captureSessionId: current, seq: 2, outcome: 'success' }, { captureSessionId: current, seq: 3, exampleId: 'AIB001', pass: null, attempt: null, kind: 'example_completed', at: '2026-09-20T00:00:02.000Z', offsetMs: 2, outcome: 'success' }];
    await expect(validateRecoveryRecord(manifest([{ exampleId: 'AIB001', completedRecordSha256: null, passASha256: null, snapshotSha256: 's'.repeat(64) }]) as any, entry([inheritedFailure, ...currentEvents]) as any, { exampleId: 'AIB001', inputSha256: 'i'.repeat(64), passA } as any, currentAnchors)).resolves.toBeUndefined();

    const inheritedPassAnchor = { captureSessionId: inherited, seq: 2 };
    const inheritedUnacceptedBFailure = { captureSessionId: inherited, seq: 3, exampleId: 'AIB002', pass: 'B', attempt: 1, kind: 'request_finished', at: '2026-09-20T00:00:02.000Z', offsetMs: 2, outcome: 'validation_failed' };
    const importedPassA = await sha256Web(passA);
    await expect(validateRecoveryRecord(manifest([{ exampleId: 'AIB002', completedRecordSha256: null, passASha256: importedPassA, snapshotSha256: 's'.repeat(64) }]) as any, { ...entry([inheritedUnacceptedBFailure]), exampleId: 'AIB002' } as any, { exampleId: 'AIB002', passA } as any, { passA: inheritedPassAnchor, passB: null, complete: { captureSessionId: current, seq: 4 } })).resolves.toBeUndefined();
  });

  it('rejects changed-input recovery data that retains any parent event', async () => {
    const parentInput = 'p'.repeat(64), recoveryInput = 'q'.repeat(64);
    const manifest = { recoveryLineage: { inheritedSessionIds: ['parent'], imports: [], changedInput: { exampleId: 'SPAPHISH-397', parentInputSha256: parentInput, recoveryInputSha256: recoveryInput } }, captureSessions: [{ captureSessionId: 'parent' }, { captureSessionId: 'recovery' }] };
    await expect(validateRecoveryRecord(manifest as any, { exampleId: 'SPAPHISH-397', events: [{ captureSessionId: 'parent' }] } as any, { exampleId: 'SPAPHISH-397', inputSha256: recoveryInput } as any, { passA: { captureSessionId: 'recovery', seq: 1 }, passB: null, complete: { captureSessionId: 'recovery', seq: 2 } })).rejects.toThrow('superseded');
  });

  it('binds every public run projection field and compiles a loader at its generated depth', async () => {
    const projection = runProjection({ runId: 'fixture' }, [{ id: 'AIB001' }], { datasetId: 'fixture' }, [{ seq: 1 }], { AIB001: { passA: { captureSessionId: 's', seq: 1 } } });
    expect(await sha256Web(projection)).not.toBe(await sha256Web(runProjection(projection.run, projection.rows, projection.evaluation, [{ seq: 2 }], projection.anchorsByExample)));
    const fixtureDirectory = resolve(root, 'apps/web/src/generated/records/__release-fixture__');
    await mkdir(fixtureDirectory, { recursive: true });
    const loaderPath = resolve(fixtureDirectory, 'record-loader.ts');
    await writeFile(loaderPath, [
      "import { sha256Web } from '@scam-signal-lens/core';",
      "import type { CorpusExample } from '../../dataset-index';",
      "import { acceptVerifiedRecord, acceptVerifiedRun } from '../../../verified-loader-bridge';",
      "export const run = { datasetId: 'fixture', expectedCount: 0, completedCount: 0, failures: [] };",
      "export const rows: readonly unknown[] = []; export const evaluation = { datasetId: 'fixture' }; export const events: unknown[] = []; export const anchorsByExample = {};",
      "export const runProjectionSha256 = await sha256Web({ run, rows, evaluation, events, anchorsByExample });",
      "export async function fixture(example: CorpusExample) {",
      "  const digest = await sha256Web({ run: {}, rows: [], evaluation: {}, events: [], anchorsByExample: {} });",
      "  acceptVerifiedRecord({ example, record: {} as any, events: [], replayAnchors: { passA: { captureSessionId: 's', seq: 1 }, passB: null, complete: { captureSessionId: 's', seq: 2 } }, recordSha256: digest, provenance: { capturedAt: '2026-09-20T00:00:00.000Z' } });",
      "  return acceptVerifiedRun({ manifest: {}, evaluation: {}, rows: [], events: [], anchorsByExample: {} });",
      "}",
      "export async function loadRun() { if (run.completedCount !== run.expectedCount || run.failures.length !== 0 || rows.length !== run.expectedCount || evaluation.datasetId !== run.datasetId || Object.keys(anchorsByExample).length !== run.expectedCount || await sha256Web({ run, rows, evaluation, events, anchorsByExample }) !== runProjectionSha256) return null; return acceptVerifiedRun({ manifest: run, evaluation, rows: rows as any, events: events as any, anchorsByExample }); }"
    ].join('\n'));
    try {
      await new Promise<void>((done, fail) => execFile('pnpm', ['--filter', '@scam-signal-lens/web', 'exec', 'tsc', '-p', 'tsconfig.json', '--noEmit'], { cwd: root, encoding: 'utf8' }, (error, stdout, stderr) => error ? fail(new Error(stdout + stderr)) : done()));
      const loader = await import(`${loaderPath}?release-tamper=${Date.now()}`) as { loadRun: () => Promise<unknown>; events: unknown[] };
      expect(await loader.loadRun()).not.toBeNull();
      loader.events.push({ tampered: true });
      await expect(loader.loadRun()).resolves.toBeNull();
    } finally {
      await rm(fixtureDirectory, { recursive: true, force: true });
    }
  });
});
