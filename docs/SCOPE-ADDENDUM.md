# Scope Addendum: Two Email Benchmark Demos

This addendum supersedes only the portions of the original Scam Signal Lens specification that conflict with the approved current scope.

## Primary demos

The product has exactly two primary benchmark demos.

| Dataset ID | Contents | Language | Label source |
| --- | --- | --- | --- |
| `ai-email-200-v1` | 100 benign and 100 phishing authored emails | English | Synthetic author labels |
| `spaphish-v5` | A 499-row public projection from a deterministic, pre-inference 500-row selection: 250 benign and 249 phishing rows after the authorized post-capture exclusion of `SPAPHISH-088` | Spanish | Source-dataset labels |

Each corpus is evaluated and displayed independently. The application must never merge their counts, confusion matrices, latencies, or claims.

The existing `demo-25-v1` corpus remains byte-for-byte unchanged as a provenance and regression fixture. It is not a primary UI mode and does not determine the primary-demo dataset counts.

## Superseded original restrictions

The original exact-25 public-demo requirement, synthetic-only public-data restriction, recording allowlist, and English-only restriction are amended only to support the two datasets above. The external selection was fixed at 500 rows before inference. After capture, publication authorization excluded only `SPAPHISH-088` because its Pass B remained unavailable. The 499-row projection preserves the pre-inference selection and records the source run, excluded ID, input hash, and planned Pass B request hash in a public ledger. All other replay, integrity, security, provenance, and disclosure requirements remain in force.

The Spanish corpus remains in its original language. It is a separate Spanish benchmark, not evidence of English performance. The synthetic dataset remains a constructed teaching and evaluation set, not a representative real-world benchmark.

## Capture scale and completeness

Before any capture, data preparation must inventory every row for emptiness, malformed structure, duplicates, and size limits. It must record a public exclusion ledger. If a documented bounded-public-size amendment becomes necessary, it must be based on this inventory, recorded before inference, and never selected from model outcomes.

Each dataset has a declared HTTP attempt cap before capture:

`eligible rows × 2 possible passes × 3 maximum attempts per pass`

The cap is immutable for that run. A changed corpus, question bundle, model, policy, segmentation, or cap creates a new capture configuration. Completed valid responses with matching configuration are immutable and resume may only fill missing or failed stages.

## Measurement and evaluation

Store actual monotonic HTTP attempt durations, successful pass duration, complete-example processing duration, and whole-run duration as distinct values. Do not invent per-question timing and do not call request wall time pure inference latency.

The preregistered positive classification is `strong_warning_signs`. `verify_first` and `few_warning_signs` are valid non-strong-warning outcomes, not benign determinations. `not_enough_evidence` is an abstention and missing or invalid Pass A is unavailable. Abstentions and unavailable rows are excluded from the decided confusion matrix and conditional metrics, but remain visible in whole-corpus coverage and label tables.

Each dataset reports TP, FP, TN, FN; precision, recall, F1, accuracy, specificity, and false-positive rate among decided valid analyses; all-concern states by source label; abstentions; unavailable records; evidence coverage; failures; retries; and visible individual errors. It also reports headline whole-corpus alert recall as `TP / all enrolled phishing rows`, alongside decision coverage, so abstention cannot inflate the detection yield. False positives include both decided-benign false-positive rate `FP / (FP + TN)` and whole-corpus benign alert rate `FP / all enrolled benign rows`. A metric with a zero denominator is `null`.

Do not tune thresholds against final evaluation outputs, suppress failed cases, combine metrics, or overwrite model results with source labels.

## Public artifact contract

Published recordings contain only validated public input, public-safe provenance, request/configuration hashes, actual timestamps and measurements, allowlisted model answers, usage, deterministic segments/evidence, and derived policy output. They contain no key, headers, raw request transport, environment data, private paths, or recorder-only code.

The static build loads public data as same-origin compiled modules or chunks. It must not use browser fetch for JSON because production CSP sets `connect-src 'none'`. The UI must label every run as recorded replay with no live API calls.
