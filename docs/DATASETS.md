# Dataset preparation and provenance

Scam Signal Lens has two primary benchmark corpora. They are evaluated and reported separately. Neither corpus represents real world prevalence, sender authentication, or a safety guarantee.

## AI Email 200

`data/corpora/ai-email-200-v1.json` contains 200 original English email examples: 100 dataset-author benign labels and 100 dataset-author phishing labels. Labels and rationales are separate from model input. The corpus includes email adaptations of the 25 original seed scenarios, identified through `provenance.originalSeedIds`. The exact seed fixture is preserved without modification at `data/provenance/demo-25-original.json`.

The authored corpus includes difficult benign examples such as routine urgent notices, invoices, requested sign in codes, password change notices, and quoted scam education. It also contains distinct phishing examples involving credential requests, advance fees, refund fraud, remote access, payment rerouting, and verification bypassing. All newly authored senders and destinations are fictional or inert. This constructed corpus is a teaching and benchmark asset, not a representative sample of real email.

## SpaPhish v5 source selection and public projection

`data/corpora/spaphish-v5.json` is a 499-email public projection of a frozen 500-email SpaPhish v5 selection: 250 upstream label 0 rows mapped to benign and 249 upstream label 1 rows mapped to phishing. The corpus preserves original Spanish subject and body text with CRLF changed to LF, except for one credential-like password-reset token value replaced by an inert marker. The public ledger at `data/provenance/spaphish-v5-redactions.json` identifies the row and field without retaining the value. The application does not translate, linkify, fetch, or otherwise act on message destinations. `userContext` is empty for every source row.

After capture, SPAPHISH-088 had a valid Pass A but no accepted Pass B after the authorized diagnostic request budget. It is excluded from the public projection by explicit publication authorization. `data/provenance/spaphish-v5-public-499-exclusion.json` binds the source and published corpus hashes, the excluded ID and input hash, and the planned Pass B request hash. The source capture remains a 500-example run, so its attempts, sessions, and elapsed time are source-run measurements rather than 499-example measurements.

The upstream release is [SpaPhish: A Spanish Dataset for Phishing and Psychological Pattern Detection, version 5](https://data.mendeley.com/datasets/hz2d6gz7pc/5), DOI `10.17632/hz2d6gz7pc.5`, by Lazaro Bustio-Martinez and listed contributors. The release page and stored license evidence identify the release as [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This project modifies the release by selecting a deterministic 500-row source subset before inference, normalizing CRLF to LF in public input fields, redacting one credential-like token value, omitting all source columns except the original subject and body plus provenance, and deriving the documented 499-row public projection after capture.

The original CSV contains 1,395 rows. Before selection, preparation excludes 17 rows whose normalized body length exceeds 8,000 UTF-16 code units. No source body is truncated. The public ledger in `data/provenance/spaphish-v5-selection-manifest.json` lists every excluded source record ID, source CSV row, normalized length, and reason. The remaining eligibility pools contain 648 benign and 730 phishing rows.

Selection was frozen before any model request. It ranks eligible rows independently per upstream label by SHA-256 of `scam-signal-lens-spaphish-v5-balanced-500-2026-09-20:<label>:<source hash>`, then selected the lowest 250 from each label. The manifest records source counts, eligibility counts, full selection ranks, selected input hashes, and source CSV hash. The later single-record public exclusion is recorded separately with its capture outcome and authorization, rather than hidden as a selection change.

Source-file download URLs and expected SHA-256 values are held in `data/sources/spaphish-v5/manifest.json`. Run `node scripts/download-spaphish-source.mjs` to retrieve the CSV, schema, and README. The downloader verifies each hash before it writes a file. Raw downloaded source files are local preparation inputs and should not be staged unless a reviewer explicitly approves their inclusion under the upstream license.

## Privacy and labels

SpaPhish says that its release was manually anonymized by its creators. This project retains only the source rows chosen by the frozen selection and does not make independent claims that the release has no residual personal information. Source labels are dataset annotations, not findings by this application. Neither source labels nor provenance are model input.

The application code license does not relicense either corpus, upstream SpaPhish material, or recorded provider outputs. See the source attribution and license notices in the application for the applicable terms.
