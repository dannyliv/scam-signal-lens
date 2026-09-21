# Release process

## Status

This document defines release gates. Local recorded-artifact and benchmark evidence is recorded in [the release report](RELEASE_REPORT.md). A deployment URL, workflow result, browser evidence, and final public-staging secret-scan result are still pending.

## Required gates

1. Review the selected public recordings and their provenance. Do not publish a missing, fabricated, or integrity-failing recording as a recorded analysis.
2. In a clean public publication staging tree without `TYPESAFE_API_KEY`, run `pnpm check:release`. It runs the tests, types, build, action-pin, boundary, key-free-build, generated-recording, artifact, and redacted secret-scan gates. `pnpm recording:verify` loads every committed generated replay through the browser verifier, recomputes every public run projection digest and evaluation, and rejects a missing or incomplete corpus. The key-free-build gate injects runtime-only canaries into credential-like variables and requires Vite to reject them without reflecting their values. Do not run the history scan against private local history that intentionally retains excluded source material.
3. Confirm that the Pages artifact is exactly `apps/web/dist`. The artifact check permits only the reviewed static file layout, scans every emitted file for provider transport or credential material, rejects unexpected JSON and source maps, and requires a static CSP with `connect-src 'none'`.
4. Review the workflow diff. CI has read-only repository permission, runs `pnpm check:public-recordings` against committed generated artifacts, and never invokes capture. Pages runs only from `main`, uses immutable full-SHA pins for official actions, does not persist checkout credentials, and deploys only the artifact produced by its build job. Browser interaction checks remain a manual release gate.
5. Before publishing, install the pinned scanner listed in `scripts/release-secret-scan.mjs` and run `pnpm check:secrets`. It performs redacted scans of the working tree, staged index, reachable Git history, and `apps/web/dist`, using default rules plus the provider credential rule in `.gitleaks.toml`. Do not stage machine-local journals, private capture output, raw authenticated transport, or raw upstream source downloads.
6. Run desktop, tablet, and mobile browser checks. Capture a warning case and a hard-negative case in each required view, then record screenshots from the actual application. Record a short replay video for each of the two real recorded datasets only after a matching verified recording exists.
7. In a browser, verify the static CSP, no automatic off-origin application requests, replay integrity failure after a controlled recording or input tamper, and all release routes after a hard reload. Do not treat an unavailable recording as a replay success.
8. Measure and record production asset gzip sizes from the actual build, alongside the command output and commit used for measurement.
9. After a deployment succeeds, record the actual source SHA, deployed SHA, workflow run, Pages URL, artifact check result, capture provenance, measured evaluation output, and browser verification. Do not fill in those fields beforehand.

## Pages configuration

Enable GitHub Pages with the custom Actions workflow for the repository before expecting the deploy job to succeed. The build uses the project-site base path configured by the web application. The deployment job receives the Pages-specific permissions and reports its actual URL from the deployment action.

Use a reviewed earlier commit as a rollback target. A rollback still requires a successful deployment and a post-deploy verification of the actual target.
