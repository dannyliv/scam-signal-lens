# Deployment

GitHub Pages deployment is limited to `main`. The workflow installs frozen dependencies, runs the key-free verification gates, requires complete generated replay modules for the 200-row AI Email corpus and authorized 499-row SpaPhish public projection, builds the static application, and uploads only `apps/web/dist`.

V1 deployed successfully from public commit `16bda35284dc311b9fca48d17c264d241a38aac3`, also resolved by tag `v1.0.0`, through the [Pages workflow](https://github.com/dannyliv/scam-signal-lens/actions/runs/35552863086). The live site is [https://dannyliv.github.io/scam-signal-lens/](https://dannyliv.github.io/scam-signal-lens/). The root and SpaPhish hash route returned HTTP 200 during release verification.

The public-recording gate requires exactly one compiled module per enrolled public record plus a verified loader for each corpus. The current source contains complete modules for the 200-row AI Email corpus and the authorized 499-row SpaPhish public projection. The gate remains a release block for any missing, tampered, or integrity-failing replay.

Release verification checked the deployed routes after hard reload, static CSP, absence of external application resources, inert message URLs, and verified replay loading. Tamper coverage rejects a forged serialized verification flag plus derived and request tampering. The [release report](RELEASE_REPORT.md) records the workflow, deployment revision, capture provenance, and browser evidence.
