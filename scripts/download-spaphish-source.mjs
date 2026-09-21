import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const outputDir = resolve(root, 'data/sources/spaphish-v5');
const files = [
  { name: 'Spaphish dataset - DiB.csv', url: 'https://data.mendeley.com/public-files/datasets/hz2d6gz7pc/files/f796c8e2-3768-4c2d-8b73-48f0d7771de5/file_downloaded', sha256: '656b2245d58da72d640680e5c2a168673a130b38607f2a427c773bbb167e995e' },
  { name: 'dataset_schema.json', url: 'https://data.mendeley.com/public-files/datasets/hz2d6gz7pc/files/eb378c47-8c13-44d2-afef-328cb1a03a43/file_downloaded', sha256: '51d501037e05f2dd117f8d46c4131d08971fa1f21b220bcc401670741605cdba' },
  { name: 'README.txt', url: 'https://data.mendeley.com/public-files/datasets/hz2d6gz7pc/files/6c446cb1-0094-43dd-85cc-09b9860f2d5e/file_downloaded', sha256: 'ce44b6c86de0873f8b5d8baf4aaeb1a1710916e81966b97bbc549cfd294ab7ca' }
];

for (const file of files) {
  const response = await fetch(file.url);
  if (!response.ok) throw new Error(`Download failed for ${file.name}: ${response.status}`);
  const content = Buffer.from(await response.arrayBuffer());
  const actual = createHash('sha256').update(content).digest('hex');
  if (actual !== file.sha256) throw new Error(`SHA-256 mismatch for ${file.name}: ${actual}`);
  await mkdir(outputDir, { recursive: true });
  await writeFile(resolve(outputDir, file.name), content);
  console.log(`${file.name} ${actual}`);
}
