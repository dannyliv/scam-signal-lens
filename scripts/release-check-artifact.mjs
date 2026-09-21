import { lstat, readdir, readFile } from 'node:fs/promises';
import { resolve, relative } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const artifact = resolve(process.argv[2] ?? resolve(root, 'apps', 'web', 'dist'));
const expected = resolve(root, 'apps', 'web', 'dist');
if (artifact !== expected) throw new Error('Artifact inspection only accepts apps/web/dist.');

const allowedArtifactPath = /^(?:index\.html|assets\/[A-Za-z0-9._-]+\.(?:js|css|png|jpe?g|webp|avif|svg|ico|woff2?|ttf|otf))$/i;
const forbiddenContent = [
  /\bTYPESAFE_API_KEY\b/,
  /https:\/\/api\.typesafe\.ai\b/i,
  /authorization\s*:/i,
  /\bBearer\s+[A-Za-z0-9._~+\/-]{12,}/,
  /(?:VITE_)?(?:[A-Z][A-Z0-9_]*)(?:KEY|TOKEN|SECRET|PASSWORD|CREDENTIAL)\s*[:=]/
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    const stat = await lstat(path);
    if (stat.isSymbolicLink()) throw new Error(`Deployment artifact must not contain symlinks: ${relative(root, path)}`);
    if (stat.isDirectory()) result.push(...await walk(path));
    else if (stat.isFile()) result.push(path);
    else throw new Error(`Deployment artifact contains a non-regular file: ${relative(root, path)}`);
  }
  return result;
}

const files = await walk(artifact);
if (!files.some((file) => relative(artifact, file) === 'index.html')) throw new Error('Deployment artifact has no index.html.');
const failures = [];
for (const file of files) {
  const artifactPath = relative(artifact, file);
  if (!allowedArtifactPath.test(artifactPath)) failures.push(`${artifactPath}: unexpected deployment artifact path`);
  const content = (await readFile(file)).toString('utf8');
  for (const pattern of forbiddenContent) if (pattern.test(content)) failures.push(`${artifactPath}: forbidden provider credential or transport content`);
}
const html = await readFile(resolve(artifact, 'index.html'), 'utf8');
if (!/http-equiv=["']Content-Security-Policy["']/i.test(html) || !/default-src\s+'self'/i.test(html) || !/connect-src\s+'none'/i.test(html)) {
  failures.push('index.html: missing required static CSP with default-src self and connect-src none');
}
if (/src=["']\/src\//i.test(html)) failures.push('index.html: references unbuilt source files');
if (failures.length) throw new Error(failures.join('\n'));
console.log(`Verified ${files.length} allowlisted static artifact file(s), including all-file credential scans and CSP.`);
