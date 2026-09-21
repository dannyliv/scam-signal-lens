import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const generated = resolve(root, 'apps', 'web', 'src', 'generated', 'records');
const datasets = [
  ['ai-email-200-v1', 'data/corpora/ai-email-200-v1.json'],
  ['spaphish-v5', 'data/corpora/spaphish-v5.json']
];

for (const [datasetId, corpusRelativePath] of datasets) {
  const corpus = JSON.parse(await readFile(resolve(root, corpusRelativePath), 'utf8'));
  const expected = new Set(corpus.examples.map((example) => `record-${example.id}.ts`));
  expected.add('record-loader.ts');
  const directory = resolve(generated, datasetId);
  const entries = await readdir(directory, { withFileTypes: true });
  const actual = new Set(entries.filter((entry) => entry.isFile()).map((entry) => entry.name));
  if (entries.some((entry) => !entry.isFile()) || actual.size !== expected.size || [...actual].some((name) => !expected.has(name))) {
    throw new Error(`${datasetId}: generated public replay modules must contain exactly the enrolled records and record-loader.ts`);
  }
  const loader = await readFile(resolve(directory, 'record-loader.ts'), 'utf8');
  for (const required of ['verifyReplayRecord', 'acceptVerifiedRecord', 'acceptVerifiedRun', `"datasetId": "${datasetId}"`]) {
    if (!loader.includes(required)) throw new Error(`${datasetId}: generated record loader is missing ${required}`);
  }
}

console.log('Verified complete generated replay modules for both frozen public corpora.');
