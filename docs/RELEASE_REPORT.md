# Release report

This report records the V1 public release. Source repository: [dannyliv/scam-signal-lens](https://github.com/dannyliv/scam-signal-lens). Pages deployment: [dannyliv.github.io/scam-signal-lens](https://dannyliv.github.io/scam-signal-lens/).

Tag `v1.0.0` is application commit `16bda35284dc311b9fca48d17c264d241a38aac3`. The [CI workflow](https://github.com/dannyliv/scam-signal-lens/actions/runs/35552766198) succeeded for that commit, and the [Pages workflow](https://github.com/dannyliv/scam-signal-lens/actions/runs/35552863086) deployed it. Documentation commit `c033886b6741b97f108017ead8a520b4078321d3` then became the live Pages source through [CI](https://github.com/dannyliv/scam-signal-lens/actions/runs/35553206616) and [Pages](https://github.com/dannyliv/scam-signal-lens/actions/runs/35553206611). That documentation revision does not change the recorded benchmark. The tag stays on the application commit. Pages deploys later `main` commits, including this closeout, through the same workflow.

## Verified recorded replay evaluations

The public-artifact verifier loaded the actual dataset index, each corpus, every generated replay, and both generated runs. It recomputed corpus hashes, replay and projection hashes, replay-derived policy output, accepted-stage anchors, evaluation rows, and evaluation summaries. The fixed policy version is `policy-v1`.

| Corpus | Published rows | Confusion matrix | Precision | Recall | F1 | Accuracy | Specificity | False-positive rate | Evidence coverage |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| AI Email 200 | 200 | 92 TP, 0 FP, 100 TN, 8 FN | 100.00% | 92.00% | 95.83% | 96.00% | 100.00% | 0.00% | 436 of 782, 55.75% |
| SpaPhish v5 public projection | 499 | 43 TP, 3 FP, 247 TN, 206 FN | 93.48% | 17.27% | 29.15% | 58.12% | 98.80% | 1.20% | 460 of 1,357, 33.90% |

Specificity is `TN / (TN + FP)` among decided benign rows: 100/100 for AI Email and 247/250 for SpaPhish. Recorded concern by source label, from the same verified evaluations:

| Corpus | Source label | Alert | Verify first | Few warning signs | Abstain | Unavailable |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| AI Email 200 | Phishing | 92 | 8 | 0 | 0 | 0 |
| AI Email 200 | Benign | 0 | 40 | 60 | 0 | 0 |
| SpaPhish v5 public projection | Phishing | 43 | 183 | 23 | 0 | 0 |
| SpaPhish v5 public projection | Benign | 3 | 119 | 128 | 0 | 0 |

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
| Clean public release gate | Passed in clean public staging with the pinned scanner, including working-tree, index, history, and distribution secret scans. The static artifact contained 707 files. |
| Browser replay QA | Local QA covered verified dynamic loaders, accepted Pass A and B anchors, queue controls, keyboard tabs, reduced motion, 200% page scale, Spanish hash reload, filters, Compare, Learn, inert URLs, no external resources, and no console errors. Deployed-site verification confirmed the AI Email and SpaPhish hash routes, no console errors or external application resources, and inert message URLs. |
| Retained screenshots | Desk, warning, and hard-negative views at desktop, tablet, and mobile for both corpora. See the screenshot table below. |
| Recorded replay videos | [AI Email replay](media/ai200-recorded-replay-1440.webm) and [SpaPhish replay](media/spaphish499-recorded-replay-1440.webm). |
| CSP, network, and tamper checks | Passed locally and on the deployed site. The deployed root and SpaPhish hash route returned HTTP 200. The browser inspection found no external application resources, and tamper coverage rejects a forged serialized verification flag plus derived and request tampering. |
| Production gzip measurements | Initial HTML, CSS, and entry JavaScript total 85,028 gzip bytes as a sum of built files. Entry JavaScript is 81.81 kB gzip. The AI and SpaPhish loader chunks are 57.48 kB and 142.41 kB gzip, respectively; corpus and individual replay chunks are lazy. The complete static artifact totals 3,561,572 gzip bytes as a sum of built files. These are file-gzip measurements, not network-transfer measurements. |
| Public deployment metadata | Tag `v1.0.0` at `16bda35284dc311b9fca48d17c264d241a38aac3`, with [CI](https://github.com/dannyliv/scam-signal-lens/actions/runs/35552766198) and the superseded [Pages deployment](https://github.com/dannyliv/scam-signal-lens/actions/runs/35552863086). Live Pages source immediately before this closeout: `c033886b6741b97f108017ead8a520b4078321d3`, [Pages](https://github.com/dannyliv/scam-signal-lens/actions/runs/35553206611), [Pages URL](https://dannyliv.github.io/scam-signal-lens/). |

The capture source revisions and hashes above are private-recording provenance. They are distinct from the public deployment commits and tag.

## Screenshot evidence

These shots are from the built static replay. No new provider capture was run. Warning cases are recorded `strong_warning_signs` on a phishing source label. Hard-negative cases are recorded `few_warning_signs` on a benign source label, matching the existing AI Email desktop hard-negative. Mobile warning and hard-negative shots use the Signals panel, which is the analysis view at that width. Desk shots leave playback unstarted.

| View | AI Email 200 | SpaPhish v5 public projection |
| --- | --- | --- |
| Desk desktop | [1440×1000](media/ai200-desk-1440x1000.png) | [1440×1000](media/spaphish499-desk-1440x1000.png) |
| Desk tablet | [1024×768](media/ai200-desk-1024x768.png) | [1024×768](media/spaphish499-desk-1024x768.png) |
| Desk mobile | [390×844](media/ai200-desk-390x844.png) | [390×844](media/spaphish499-desk-390x844.png) |
| Warning, `AIP001` / `SPAPHISH-015` | [desktop](media/ai200-warning-complete-1440x1000.png), [tablet](media/ai200-warning-complete-1024x768.png), [mobile](media/ai200-warning-complete-390x844.png) | [desktop](media/spaphish499-warning-complete-1440x1000.png), [tablet](media/spaphish499-warning-complete-1024x768.png), [mobile](media/spaphish499-warning-complete-390x844.png) |
| Hard negative, `AIB001` / `SPAPHISH-008` | [desktop](media/ai200-hard-negative-complete-1440x1000.png), [tablet](media/ai200-hard-negative-complete-1024x768.png), [mobile](media/ai200-hard-negative-complete-390x844.png) | [desktop](media/spaphish499-hard-negative-complete-1440x1000.png), [tablet](media/spaphish499-hard-negative-complete-1024x768.png), [mobile](media/spaphish499-hard-negative-complete-390x844.png) |

## V1 closeout

The screenshot gap is closed in the table above. There is no screenshot waiver.

Private workspace package versions remain `0.1.0`. They are not the public release identifier. The public identifier remains git tag `v1.0.0`.

`recording:publish` duplicated `build:public-data` and had no callers, so the alias is removed. `scripts/release-check-public-recordings.mjs` duplicated a narrower file-layout check and had no callers, so it is removed. The release gate remains `pnpm check:public-recordings`.
