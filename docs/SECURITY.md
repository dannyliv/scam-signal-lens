# Security boundaries

The public application is a static replay. It has no provider client, credential field, message upload path, or live inference route. Production CSP sets `connect-src 'none'`, so bundled replay data must load through local compiled modules rather than browser JSON fetches.

The recorder is Node-only. It receives a provider credential only in the private capture process, from `TYPESAFE_API_KEY` in that process environment, and writes its output to an absolute path outside the repository. Export the variable for that process and unset it afterward. Do not place the provider key in an environment file, source file, shell history, CI setting, or browser variable. The credential, authenticated transport, environment dumps, private paths, and raw capture journals are prohibited from source and deployment artifacts. Private capture output is not part of the Pages upload.

Release checks enforce the browser import graph, reject provider-like build variables, scan every deployed artifact file for credential or provider transport material, and require the static CSP. The Pages workflow runs key-free and uploads only `apps/web/dist`.

Before release, run `pnpm check:secrets` with the pinned scanner. It scans the working tree, staged files, reachable history, and distribution artifact with redacted output, including generic and provider-specific credential rules. It does not read a credential from a keychain or environment. A final public export verifies frozen corpus membership, configuration and source-content hashes, record hashes, request bindings, strict public event shapes, and browser-safe replay verification before it writes modules.

Report a security issue without posting credentials, private messages, or capture output in a public issue. Until a dedicated private reporting channel exists, use the repository's available moderation channel and disclose only the minimum needed to coordinate a fix.
