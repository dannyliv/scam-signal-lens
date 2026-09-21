# Model card and recorded benchmark status

## Intended use

Scam Signal Lens examines supplied email text for bounded concern signals and presents recorded evidence where a validated replay exists. It does not authenticate a sender, verify a destination, establish safety, or make an automated fraud decision.

The public application replays recorded Jev signal outputs through the fixed `policy-v1` concern policy. It performs no live analysis and has no provider credential path.

## Inputs and outputs

The private recorder receives channel, subject, body, and recipient-provided context. It uses a fixed signal-question bundle followed by bounded evidence-selection questions. The public replay retains validated answer fields, model identifier, actual capture measurements, deterministic segments and evidence, and derived policy output.

Author and source-dataset labels are not model input. They are used only for the separate evaluations below.

## Verified recorded evaluations

Each corpus was verified independently by loading every generated replay, rechecking record and projection hashes, rerunning browser-safe replay verification, and recomputing the evaluation. The positive class is `strong_warning_signs` under `policy-v1`.

| Corpus | Rows | TP | FP | TN | FN | Precision | Recall | F1 | Accuracy | False-positive rate | Evidence coverage |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| AI Email 200 | 200 | 92 | 0 | 100 | 8 | 100.00% | 92.00% | 95.83% | 96.00% | 0.00% | 436 of 782 eligible signals, 55.75% |
| SpaPhish v5 public projection | 499 | 43 | 3 | 247 | 206 | 93.48% | 17.27% | 29.15% | 58.12% | 1.20% | 460 of 1,357 eligible signals, 33.90% |

Both public evaluations have complete analysis, decision, and accepted-capture coverage for their published rows: 200 of 200 for AI Email and 499 of 499 for SpaPhish. The results must not be pooled. The English corpus is authored and synthetic, while the Spanish corpus is source-derived and has different language and label provenance.

## Capture and projection provenance

AI Email has a complete 200-row recorded source run with 401 HTTP attempts of a 1,200-attempt cap across two sessions. The measured source-run wall elapsed time is 68,748.8855 ms.

SpaPhish began as a frozen, pre-inference 500-row source selection. The source run completed 499 rows with 1,093 HTTP attempts of a 3,000-attempt cap across two sessions and a measured source-run wall elapsed time of 190,270.903167 ms. `SPAPHISH-088` had an accepted Pass A but no accepted Pass B after the authorized diagnostic budget. Publication authorization excluded only that row from the public projection. The 499 retained recordings are complete, and the source run remains a 500-row provenance record. Its attempts and elapsed time are not 499-row-only measurements.

One SpaPhish message, `SPAPHISH-397`, was redacted before recovery because its source text contained a credential-like password-reset token. The redaction ledger records the changed field and input hashes without retaining the value. Recovery lineage binds the changed input and preserves the earlier private source capture without rewriting it. The exclusion ledger binds the source and published corpus hashes, the excluded ID, and the planned Pass B request hash.

Two smoke runs, with four smoke HTTP attempts, and eight diagnostic calls are excluded from benchmark metrics and source-run counts. Four diagnostic HTTP outcomes are recorded separately from the benchmark. Cache accounting for the diagnostic work is unknown and is not used in the reported metrics.

## Limitations

The system only sees supplied text and context. It cannot verify identities, websites, payment destinations, attachment safety, or external events. Signal probabilities concern individual requested signals. They are not phishing probabilities and do not establish general model accuracy.

The reported evaluations are descriptive benchmark results for these datasets. They do not establish real-world prevalence, sender identity, safety, calibration, or detection performance. No policy, threshold, or prompt was tuned after these final evaluation results. Missing Pass A is unavailable, and an abstention is not a benign result. The public datasets have no remaining missing Pass A or abstentions, but those states remain distinct in the evaluation contract.
