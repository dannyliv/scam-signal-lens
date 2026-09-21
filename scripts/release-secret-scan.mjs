import { access, mkdtemp, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const scanner = process.env.GITLEAKS_BIN || 'gitleaks';
const expectedVersion = '8.30.1';

function execute(args) {
  return new Promise((resolveCommand, reject) => {
    const child = spawn(scanner, args, { cwd: root, stdio: ['ignore', 'pipe', 'pipe'] });
    let output = '';
    child.stdout.on('data', (chunk) => { output += String(chunk); });
    child.stderr.on('data', (chunk) => { output += String(chunk); });
    child.on('error', reject);
    child.on('close', (code) => code === 0 ? resolveCommand(output) : reject(new Error(`secret scan failed for ${args[0]}`)));
  });
}

try {
  await access(resolve(root, 'apps', 'web', 'dist'));
  const version = (await execute(['version'])).trim();
  if (version !== expectedVersion) throw new Error(`gitleaks ${expectedVersion} is required; found ${version || 'none'}`);
  const reports = await mkdtemp(resolve(tmpdir(), 'scam-signal-lens-gitleaks-'));
  const shared = ['--config', '.gitleaks.toml', '--redact=100', '--no-banner', '--report-format', 'json'];
  await execute(['dir', ...shared, '--report-path', resolve(reports, 'working-tree.json'), root]);
  await execute(['git', ...shared, '--report-path', resolve(reports, 'index.json'), '--staged', root]);
  await execute(['git', ...shared, '--report-path', resolve(reports, 'history.json'), '--log-opts=--all', root]);
  await execute(['dir', ...shared, '--report-path', resolve(reports, 'dist.json'), resolve(root, 'apps', 'web', 'dist')]);
  await rm(reports, { recursive: true, force: true });
  console.log('Verified redacted working-tree, index, history, and distribution secret scans.');
} catch (error) {
  const message = error instanceof Error ? error.message : 'secret scan failed';
  process.stderr.write(`${message}\n`);
  process.exitCode = 1;
}
