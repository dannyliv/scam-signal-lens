# Release report

This report records local pre-deployment evidence. A public repository, GitHub Pages deployment, workflow run, and Pages URL have not been verified yet.

## Verified recorded replay evaluations

The public-artifact verifier loaded the actual dataset index, each corpus, every generated replay, and both generated runs. It recomputed corpus hashes, replay and projection hashes, replay-derived policy output, accepted-stage anchors, evaluation rows, and evaluation summaries. The fixed policy version is `policy-v1`.

| Corpus | Published rows | Confusion matrix | Precision | Recall | F1 | Accuracy | False-positive rate | Evidence coverage |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |
| AI Email 200 | 200 | 92 TP, 0 FP, 100 TN, 8 FN | 100.00% | 92.00% | 95.83% | 96.00% | 0.00% | 436 of 782, 55.75% |
| SpaPhish v5 public projection | 499 | 43 TP, 3 FP, 247 TN, 206 FN | 93.48% | 17.27% | 29.15% | 58.12% | 1.20% | 460 of 1,357, 33.90% |

Both published evaluations have complete analysis, decision, and accepted-capture coverage. The corpora are evaluated independently and must not be pooled.

## Capture provenance and measurements

| Corpus | Source scope | Sessions | HTTP attempts | Wall elapsed measurement | Publication scope |
| --- | --- | ---: | --- | --- | --- |
| AI Email 200 | 200 selected rows | 2 | 401 of cap 1,200 | 68,748.8855 ms, sum of completed sessions | 200 of 200 rows |
| SpaPhish v5 | 500 rows selected before inference | 2 | 1,093 of cap 3,000 | 190,270.903167 ms, sum of completed sessions | 499 of 499 rows |

| Corpus | Run ID | Published corpus SHA-256 | Source hash and capture times |
| --- | --- | --- | --- |
| AI Email 200 | `v1-recovery-e45371-ai-email-200` | `c67f3bc7a4c16be626fe26ed2bcf56658d44286e12b75ed098d3eb6ecb30ed7c` | Source content `4ec57705ad495410663b63f5222812be99d8ef04f89752093f40149557bdf1b5`. Sessions: 2026-09-20T23:42:43.683Z to 2026-09-20T23:43:50.860Z, then 2026-09-21T00:56:44.037Z to 2026-09-21T00:56:45.609Z. |
| SpaPhish v5 public projection | `v1-recovery-e45371-spaphish-500` | `6ad2512824f99d1f926fecb2d41d7b76f9308c31258767b823d142a48c9e6c1b` | Source corpus `d190e6c672ea5c2c0fa298d9595a058d05e84380305b2242c87b8f8e6b1f2421`, source manifest `047ca812546848ed58ed34dbf495fdb454842bbef9bf42bded0df4103fe9e470`, source configuration `05d85523fa09eb45639fc872e3bae88fdb8f17f689cc140bf51af81dbd66f637`. Sessions: 2026-09-20T23:43:50.967Z to 2026-09-20T23:46:39.902Z, then 2026-09-21T00:57:14.229Z to 2026-09-21T00:57:35.564Z. |

The SpaPhish source run completed 499 of its original 500 selected rows. `SPAPHISH-088` had a valid Pass A and no accepted Pass B after the authorized diagnostic budget. User authorization produced a 499-row public projection that excludes only that ID. The public projection lineage binds source manifest, source corpus, and source configuration hashes to the published corpus and exclusion ledger. Source attempts, sessions, and elapsed time include the original 500-row effort and must not be presented as 499-row-only measurements.

`SPAPHISH-397` was redacted before recovery because its source message included a credential-like password-reset token. The redaction ledger preserves field-level provenance and input hashes without retaining the value. Recovery lineage records that changed input while leaving the earlier private source capture unchanged.

Two smoke runs, with four smoke HTTP attempts, and eight diagnostic calls are excluded from benchmark counts and metrics. Four diagnostic HTTP outcomes are separately recorded. Cache accounting for the diagnostic work is unknown and is not used in these measurements.

## Local release-gate evidence

| Evidence | Status |
| --- | --- |
| Generated replay integrity | Passed locally with `pnpm recording:verify` for 200 AI Email and 499 SpaPhish public replays. |
| Unit and release tests | Passed locally: 28 core tests, 7 UI tests, and 12 release tests. |
| Typecheck and production build | Passed locally with no provider credential. |
| Action pins, browser boundary, and static artifact checks | Passed locally. |
| Targeted current-artifact secret scans | Passed locally for generated recordings, public corpora, and built static output. A clean public staging history, index, working-tree, and distribution scan remains required before publication. |
| Browser replay QA | Passed locally for verified dynamic loaders, accepted Pass A and B anchors, queue controls, keyboard tabs, reduced motion, 200% page scale, Spanish hash reload, filters, Compare, Learn, inert URLs, no external resources, and no console errors. |
| Retained screenshots | [AI Email desktop](media/ai200-desk-1440x1000.png), [tablet](media/ai200-desk-1024x768.png), and [mobile](media/ai200-desk-390x844.png); [SpaPhish desktop](media/spaphish499-desk-1440x1000.png). |
| Recorded replay videos | [AI Email replay](media/ai200-recorded-replay-1440.webm) and [SpaPhish replay](media/spaphish499-recorded-replay-1440.webm). |
| CSP, network, and tamper checks | Passed locally. The browser inspection found no external application resources, and tamper coverage rejects a forged serialized verification flag plus derived and request tampering. Post-deploy verification remains pending. |
| Production gzip measurements | Pending release-evidence capture from the final public staging build. |
| Source revision, deployment revision, Pages workflow, and Pages URL | Pending public staging, deployment, and post-deploy verification. |

Do not substitute private diagnostic output, an unavailable replay, or a local build for the pending browser and deployment evidence.
