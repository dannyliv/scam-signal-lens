import { readdir, readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const workflows = resolve(root, '.github', 'workflows');
const approved = new Map([
  ['actions/checkout', 'd23441a48e516b6c34aea4fa41551a30e30af803'],
  ['actions/setup-node', '249970729cb0ef3589644e2896645e5dc5ba9c38'],
  ['actions/configure-pages', '983d7736d9b0ae728b81ab479565c72886d7745b'],
  ['actions/upload-pages-artifact', '7b1f4a764d45c48632c6b24a0339c27f5614fb0b'],
  ['actions/deploy-pages', 'd6db90164ac5ed86f2b6aed7e0febac5b3c0c03e']
]);

const entries = await readdir(workflows, { withFileTypes: true });
const files = entries.filter((entry) => entry.isFile() && /\.ya?ml$/i.test(entry.name)).map((entry) => resolve(workflows, entry.name));
if (files.length === 0) throw new Error('No workflow files found.');

const failures = [];
for (const file of files) {
  const text = await readFile(file, 'utf8');
  for (const [index, line] of text.split(/\r?\n/).entries()) {
    const match = line.match(/^\s*uses:\s*([^@\s]+)@([^\s#]+)(?:\s*#.*)?$/);
    if (!match) continue;
    const [, action, revision] = match;
    if (!/^[0-9a-f]{40}$/i.test(revision)) {
      failures.push(`${file}:${index + 1} must use a full commit SHA`);
      continue;
    }
    if (approved.get(action) !== revision) failures.push(`${file}:${index + 1} is not an approved official action pin`);
  }
}

if (failures.length) throw new Error(failures.join('\n'));
console.log(`Verified ${files.length} workflow file(s) with full official action pins.`);
