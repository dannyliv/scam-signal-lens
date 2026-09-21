import { randomBytes } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const cases = [
  ['TYPESAFE_API_KEY', randomBytes(24).toString('hex')],
  ['VITE_RELEASE_TEST_SECRET', randomBytes(24).toString('hex')]
];

for (const [name, canary] of cases) {
  const result = spawnSync('pnpm', ['build:web'], {
    cwd: root,
    encoding: 'utf8',
    env: { ...process.env, [name]: canary }
  });
  const output = `${result.stdout}\n${result.stderr}`;
  if (result.status === 0) throw new Error(`Browser build accepted prohibited environment variable ${name}.`);
  if (output.includes(canary)) throw new Error(`Browser build reflected a private test canary for ${name}.`);
  if (!output.includes(name)) throw new Error(`Browser build rejected ${name} without identifying the unsafe variable name.`);
}

console.log('Verified that Vite refuses credential-bearing and suspicious public environment names without reflecting runtime canaries.');
