import { access, readFile } from 'node:fs/promises';
import { extname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const webRoot = resolve(root, 'apps', 'web');
const coreRoot = resolve(root, 'packages', 'core', 'src');
const publicDataRoot = resolve(root, 'data', 'corpora');
const allowedRoots = [webRoot, coreRoot, publicDataRoot];
const sourceExtensions = ['.ts', '.tsx', '.js', '.mjs', '.cjs', '.json', '.html', '.css'];
const forbidden = [
  { pattern: /(?:from\s*|import\s*\()\s*['"][^'"]*(?:tools\/capture|@scam-signal-lens\/capture|private-output|capture-staging|test\/mocks)[^'"]*['"]/i, label: 'recorder, private output, or test mock import' },
  { pattern: /\bTYPESAFE_API_KEY\b/, label: 'provider key name' },
  { pattern: /\bprocess\.env\./, label: 'process environment access' },
  { pattern: /(?:from\s*|import\s*\()\s*['"](?:node:)?(?:fs|child_process|net|tls|http|https|crypto)['"]/, label: 'Node runtime module import' },
  { pattern: /https:\/\/api\.typesafe\.ai\b/i, label: 'provider endpoint' },
  { pattern: /authorization\s*:/i, label: 'authorization header' }
];
const prohibitedEnvironmentNames = new Set(['TYPESAFE_API_KEY', 'JEV_API_KEY', 'TYPESAFE_TOKEN', 'TYPESAFE_SECRET']);
const failures = [];
const visited = new Set();

function isWithin(path, directory) {
  return path === directory || path.startsWith(`${directory}/`);
}

function isAllowed(path) {
  return allowedRoots.some((directory) => isWithin(path, directory));
}

async function existingFile(path) {
  try {
    await access(path);
    return path;
  } catch {
    return null;
  }
}

async function resolveImport(specifier, importer) {
  if (specifier === '@scam-signal-lens/core') return resolve(coreRoot, 'index.ts');
  if (specifier.startsWith('@scam-signal-lens/')) {
    failures.push(`${importer}: unsupported workspace import ${specifier}`);
    return null;
  }
  if (!specifier.startsWith('.')) {
    if (specifier.startsWith('node:')) failures.push(`${importer}: Node runtime import ${specifier}`);
    return null;
  }
  const raw = resolve(importer, '..', specifier);
  const candidates = [raw, ...sourceExtensions.map((extension) => `${raw}${extension}`)];
  if (extname(raw) === '.js') candidates.push(`${raw.slice(0, -3)}.ts`, `${raw.slice(0, -3)}.tsx`);
  for (const candidate of candidates) {
    if (await existingFile(candidate)) return candidate;
  }
  failures.push(`${importer}: cannot resolve local browser import ${specifier}`);
  return null;
}

async function inspect(path) {
  if (visited.has(path)) return;
  visited.add(path);
  if (!isAllowed(path)) {
    failures.push(`${path}: browser import escapes approved roots`);
    return;
  }
  const source = await readFile(path, 'utf8');
  for (const rule of forbidden) if (rule.pattern.test(source)) failures.push(`${path}: forbidden ${rule.label}`);
  if (/\bimport\s*\((?!\s*['"])/.test(source)) failures.push(`${path}: nonliteral dynamic import is not allowed in browser source`);
  const imports = [...source.matchAll(/(?:import|export)\s+(?:[^'"()]*?\s+from\s+)?['"]([^'"]+)['"]|\bimport\s*\(\s*['"]([^'"]+)['"]\s*\)/g)];
  for (const match of imports) {
    const resolved = await resolveImport(match[1] ?? match[2], path);
    if (resolved) await inspect(resolved);
  }
}

for (const name of Object.keys(process.env)) {
  if (prohibitedEnvironmentNames.has(name) || /^VITE_.*(?:KEY|SECRET|TOKEN|PASSWORD|CREDENTIAL)/i.test(name)) failures.push(`prohibited build environment variable name: ${name}`);
}

const html = await readFile(resolve(webRoot, 'index.html'), 'utf8');
const entry = html.match(/<script[^>]+type=["']module["'][^>]+src=["']([^"']+)["']/i)?.[1];
if (!entry) failures.push('apps/web/index.html: missing module entry script');
else {
  const resolved = await resolveImport(`.${entry}`, resolve(webRoot, 'index.html'));
  if (resolved) await inspect(resolved);
}

if (failures.length) throw new Error(failures.join('\n'));
console.log(`Verified ${visited.size} reachable browser modules and public data files have no recorder, provider, credential, or Node-runtime dependency.`);
