# Scam Signal Lens

Scam Signal Lens is a static replay interface for inspecting recorded scam-signal analyses of two email benchmark corpora. It is a teaching and evaluation tool. It does not authenticate senders, inspect destinations, determine whether a message is safe, or provide live analysis.

The public source is [dannyliv/scam-signal-lens](https://github.com/dannyliv/scam-signal-lens), and the recorded replay is deployed at [dannyliv.github.io/scam-signal-lens](https://dannyliv.github.io/scam-signal-lens/). The public interface is v1.1: Replay, Data samples, Results, and Methodology over the same checked-in recordings. It does not add provider calls or captures. Tag `v1.0.0` still resolves to application commit `16bda35284dc311b9fca48d17c264d241a38aac3`. Pages deploys `main`; the live source immediately before this closeout was `c033886b6741b97f108017ead8a520b4078321d3`.

## Local verified evaluation

The fixed `policy-v1` concern policy is evaluated separately for AI Email 200 and the English-question SpaPhish recording. The Spanish-question SpaPhish recording uses `policy-v1-es-exp` (YES 0.70) and is reported on its own row. These are recorded replay results, not live provider calls or a claim that a signal probability is a phishing probability.

| Corpus | Rows | TP | FP | TN | FN | Precision | Recall | F1 | Accuracy | Specificity | False-positive rate | Evidence coverage |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| AI Email 200 | 200 | 92 | 0 | 100 | 8 | 100.00% | 92.00% | 95.83% | 96.00% | 100.00% | 0.00% | 436 of 782 eligible signals, 55.75% |
| SpaPhish v5 public projection | 499 | 43 | 3 | 247 | 206 | 93.48% | 17.27% | 29.15% | 58.12% | 98.80% | 1.20% | 460 of 1,357 eligible signals, 33.90% |
| SpaPhish v5 [Spanish Input Questions] | 499 | 58 | 6 | 244 | 191 | 90.63% | 23.29% | 37.06% | 60.52% | 97.60% | 2.40% | 421 of 1,337 eligible signals, 31.49% |

Recorded concern counts by source label. Alert is `strong_warning_signs`. These counts are separate from the confusion matrix above.

| Corpus | Source label | Alert | Verify first | Few warning signs | Abstain | Unavailable |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| AI Email 200 | Phishing | 92 | 8 | 0 | 0 | 0 |
| AI Email 200 | Benign | 0 | 40 | 60 | 0 | 0 |
| SpaPhish v5 public projection | Phishing | 43 | 183 | 23 | 0 | 0 |
| SpaPhish v5 public projection | Benign | 3 | 119 | 128 | 0 | 0 |
| SpaPhish v5 [Spanish Input Questions] | Phishing | 58 | 165 | 26 | 0 | 0 |
| SpaPhish v5 [Spanish Input Questions] | Benign | 6 | 126 | 118 | 0 | 0 |

The SpaPhish result is a user-authorized public 499-row projection of a source 500-row capture. `SPAPHISH-088` had an accepted Pass A but no accepted Pass B after the bounded diagnostic budget, so it is excluded only from the public projection. The source-run totals remain source-scoped. The Spanish Input Questions row is a separate recording of that same 499-email public subset, asked in Spanish under `policy-v1-es-exp`. See the [dataset documentation](docs/DATASETS.md), [model card](docs/MODEL_CARD.md), and [release report](docs/RELEASE_REPORT.md).

## Recorded replay evidence

The release evidence includes desktop, tablet, and mobile views for both corpora, including a completed warning case and a completed hard-negative case in each view. The [release report](docs/RELEASE_REPORT.md) lists those screenshots. Recorded replays: [AI Email](docs/media/ai200-recorded-replay-1440.webm) and [SpaPhish](docs/media/spaphish499-recorded-replay-1440.webm). The deployed root and SpaPhish hash route returned HTTP 200 during release verification.

## Key-free local verification

The normal web build uses only committed public inputs and recordings. It must run without a provider key.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm test
pnpm typecheck
pnpm recording:verify
pnpm build
pnpm check:action-pins
pnpm check:boundaries
pnpm check:artifact
```

The build output is `apps/web/dist`. The release workflow uploads that directory only.

## Quick start: private capture

The key-free checks above are the path for most readers. GitHub Pages replays those committed recordings. That demo is key-free: the browser has no key field, no provider client, and no live inference. Private capture is a separate Node process. Its journal stays outside this repository and is not published to Pages.

Install dependencies with the key-free steps, then build the recorder. Command details are in [setup](docs/SETUP.md) and [recording](docs/RECORDING.md). Key handling is in [security](docs/SECURITY.md).

```sh
pnpm build:recorder
export TYPESAFE_API_KEY
node tools/capture/dist/main.js smoke \
  --dataset data/corpora/ai-email-200-v1.json \
  --out /absolute/private-capture-smoke \
  --run-id review-smoke \
  --example AIB001
unset TYPESAFE_API_KEY
```

Assign `TYPESAFE_API_KEY` in that shell before the export, or let an owner credential facility place it in that shell. The recorder reads `process.env.TYPESAFE_API_KEY` and throws `TYPESAFE_API_KEY is required by the private capture process` when the variable is missing. Unset it when the process finishes. Never commit a key. Do not place it in an environment file, source file, shell history, CI setting, or browser variable.

`--out` is an absolute directory outside this repository. The recorder rejects a path inside the repository.

The command above smokes one row of the bundled English corpus. `record` uses the same flags on that file or on `data/corpora/spaphish-v5.json`. See [Use your own API key](#use-your-own-api-key), [Use your own data](#use-your-own-data), and [Tune policy, thresholds, and questions](#tune-policy-thresholds-and-questions). [Setup](docs/SETUP.md) and [recording](docs/RECORDING.md) have the full commands. Public export accepts a complete verified capture of an allowlisted frozen corpus only. It does not publish `analyze` output or a corpus you author, and it does not call the provider.

## Use your own API key

The Node recorder in `tools/capture` reads `process.env.TYPESAFE_API_KEY` for that process. Assign it in the shell before the `export` in the quick start, or let an owner credential facility place it in that shell, then `unset TYPESAFE_API_KEY`. Never commit a key. Commands and key rules: [setup](docs/SETUP.md), [recording](docs/RECORDING.md), [security](docs/SECURITY.md).

GitHub Pages replays the committed recordings. It has no key field and does not call the provider.

## Use your own data

`smoke` and `record --dataset` load a corpus through `validateCorpusEnvelope` in [`packages/core/src/schema.ts`](packages/core/src/schema.ts). Mirror [`data/corpora/ai-email-200-v1.json`](data/corpora/ai-email-200-v1.json). `analyze --input-file` is one message. [`tools/capture/src/main.ts`](tools/capture/src/main.ts) calls `projectModelInput({ input: raw })`, so the file is the inner object:

```json
{ "channel": "email", "subject": "Enrollment window reminder", "body": "The benefits portal is open through Friday.", "userContext": "" }
```

`--language` is `en` or `es`, and `--acknowledge-provider-upload true` is required. The journal dataset id is `private-input-v1`. Corpus rows must use `channel` `"email"`. `projectModelInput` also allows `sms`, `chat`, and `social_dm` on that one-message file. Limits in [`packages/core/src/input.ts`](packages/core/src/input.ts) are UTF-16 code units: body 8000, subject 300, `userContext` 2000.

[Setup](docs/SETUP.md) and [recording](docs/RECORDING.md) have the commands. `pnpm evaluate` and `pnpm build:public-data -- … --final` accept frozen capture sources only. Your file and an `analyze` journal stay private. Pages stays the recorded replay.

## Tune policy, thresholds, and questions

Policy, thresholds, questions, the model, input limits, the endpoint, the attempt cap, and segmentation are not CLI flags. The recorder does not read a model flag. `record` does accept `--recover-from` and, with it, `--changed-example`; those flags are in [recording](docs/RECORDING.md) and do not retune policy. A parent whose policy hash, question-bundle hash, model, segmentation, or attempt cap differs raises `recovery_inference_config_mismatch`.

A source edit needs `pnpm build:recorder` (that runs `pnpm build:core`, then compiles the recorder) and a new absolute `--out` plus a new `--run-id`. Reusing an output directory raises `existing capture run configuration is immutable` when the policy hash, question-bundle hash, model, segmentation version, attempt cap, dataset, recovery lineage, or source-content hash differs.

| Param | Module | Affects | Rebuild / recapture |
| --- | --- | --- | --- |
| `YES` 0.8, `NO` 0.2 | [`packages/core/src/policy.ts`](packages/core/src/policy.ts) | `signalStatus`: at or above `YES` indicated, at or below `NO` not indicated, strictly between them uncertain | Source edit. New `--out` and `--run-id`. `policySha256` changes even if `POLICY_VERSION` stays `policy-v1`. |
| `CHOICE_CONFIDENCE_FLOOR` 0.65, `CHOICE_WINNER_PROBABILITY_FLOOR` 0.7 | `policy.ts` | A contextual choice counts only when confidence and winner probability both clear the floors | Same as `YES` / `NO` |
| H1–H5 in `derivePolicy` | `policy.ts` | Any match is alert `strong_warning_signs`. H1: `credential_request`. H2: `advance_fee_or_refund_trap`. H3: `payment_request` plus `unusual_payment_routing`, `verification_bypass`, or `unrealistic_reward`. H4: `remote_access_request` plus `urgency_pressure` or `verification_bypass`, unless the route is `independently_established` at both floors. H5: `sensitive_data_request` on `sender_supplied` at both floors plus `urgency_pressure` or `authority_claim`. | Same as `YES` / `NO` |
| `POLICY_VERSION` `policy-v1` | `policyFingerprint()` in `policy.ts` | Bound with the numbers and rule ids `H1`–`H5` into `policySha256` | Same as `YES` / `NO` |
| `policy-v1-es-exp`, `YES` 0.70 | [`packages/core/src/policy-es-exp.ts`](packages/core/src/policy-es-exp.ts) | Spanish-question SpaPhish replay only. `NO` and the choice floors stay at the baseline values. | Source edit. New run. Baseline `policy-v1` recordings keep YES 0.80. |
| `signalDefinitions`, Pass A/B | [`packages/core/src/questions.ts`](packages/core/src/questions.ts) | Twelve Noul signals plus `message_role` and `request_route`. Pass B when a signal is above `NO`, unless subject or body has more than 64 segments (`candidate_limit`). Scope `synthetic_sanitized` only for dataset id `ai-email-200-v1`; otherwise `source_messages`, including `analyze`. Question-bundle hash is the Pass A `questions` object and omits message text. | Source edit. New run. Question-bundle hash changes. |
| `REQUESTED_MODEL` `jev-1.13.0` | `questions.ts`, and the same literal in [`tools/capture/src/main.ts`](tools/capture/src/main.ts) (analyze manifest, recovery config, smoke/record config) | Model on the request and the run. Response `model` must match. Keep the copies equal. | Source edit. New run. No model flag. |
| `INPUT_LIMITS`, channels | [`packages/core/src/input.ts`](packages/core/src/input.ts) | Limits and channels in [Use your own data](#use-your-own-data) | Changing the constants is a source edit and a new run. Your file is data only. |
| Corpus envelope | `validateCorpusEnvelope` in [`packages/core/src/schema.ts`](packages/core/src/schema.ts) | `version` `"1.0.0"`, object `metadata`, `examples` with unique `id`, language `en` or `es`, email `input`, `groundTruth.label` `phishing` or `benign`, `labelSource` `synthetic_author` or `source_dataset`. Example: [`data/corpora/ai-email-200-v1.json`](data/corpora/ai-email-200-v1.json). | New `--dataset` file. Schema changes are a source edit. |
| `TYPESAFE_API_KEY` | `process.env` in `tools/capture/src/main.ts` | Auth for that capture process. Missing key throws `TYPESAFE_API_KEY is required by the private capture process`. | Shell or owner credential facility, then unset. Not a source edit. |
| `TYPESAFE_SYSTEMONE_ENDPOINT` | [`tools/capture/src/typesafe-http.ts`](tools/capture/src/typesafe-http.ts) | `https://api.typesafe.ai/v1/systemone` | Source edit. No endpoint flag. New run. |
| `declaredAttemptCap` | [`tools/capture/src/record.ts`](tools/capture/src/record.ts) | Run cap `eligibleRows * 2 * 3`. `analyze` uses one row, so the cap is 6. Stored as `declaredHttpAttemptCap`. | Source edit. No cap flag. New run. |
| `SEGMENTATION_VERSION` `intl-segmenter-sentence-v1` | [`packages/core/src/segmentation.ts`](packages/core/src/segmentation.ts) | `segmentInput` uses `Intl.Segmenter` for the example language | Source edit. New run. |

If no H rule matches, a role or route below a choice floor whose winner is `mixed_or_unclear` or `mixed_or_unknown` is `not_enough_evidence`. `verify_first` covers an uncertain review signal (`credential_request`, `sensitive_data_request`, `unusual_payment_routing`, `verification_bypass`, `advance_fee_or_refund_trap`, `analyzer_instruction`), an indicated `verification_bypass` or `analyzer_instruction`, an indicated `payment_request`, `sensitive_data_request`, or `remote_access_request` that is not independently established at both floors, or a role or route below a floor. Otherwise the concern is `few_warning_signs`. The eval alert is `strong_warning_signs`. See [evaluation](docs/EVALUATION.md).

Checked-in AI Email and English-question SpaPhish replays stay on frozen `policy-v1`. The Spanish-question SpaPhish replay stays on `policy-v1-es-exp` (`YES` 0.70). `verifyReplayRecord` in [`packages/core/src/replay.ts`](packages/core/src/replay.ts) resolves each recording by its policy hash and question-bundle hash, and also checks segmentation version and model, so `pnpm recording:verify` rejects a replay after one of those bindings moves. Pages keeps the deployed replay.

## Scope

The primary benchmark corpora are kept separate:

- `ai-email-200-v1`: 200 original English emails, with 100 dataset-author benign labels and 100 dataset-author phishing labels.
- `spaphish-v5`: 499 Spanish emails from a frozen 500-row selection, with 250 upstream benign labels and 249 upstream phishing labels after one documented post-capture evidence exclusion.
- `spaphish-v5-es-questions`: the same 499 Spanish emails, recorded with Spanish signal questions under `policy-v1-es-exp` (YES 0.70).

Dataset labels are annotations, not findings by the application. The synthetic set is constructed, and neither corpus establishes real-world prevalence, sender identity, safety, calibration, or detection performance. See [dataset documentation](docs/DATASETS.md) and the [scope addendum](docs/SCOPE-ADDENDUM.md).

## Boundaries

The browser receives only bundled, reviewed public data and replays a matching recorded result when one is available. It has no key entry field, provider client, or live inference path. The recorder is Node-only and lives outside the web dependency graph. It accepts `TYPESAFE_API_KEY` only for a private capture process and writes its private output outside this repository before reviewed public records are promoted.

See [setup](docs/SETUP.md), [recording](docs/RECORDING.md), [evaluation](docs/EVALUATION.md), [security](docs/SECURITY.md), [deployment](docs/DEPLOYMENT.md), [privacy](docs/PRIVACY.md), [release process](docs/RELEASE.md), and [third-party notices](docs/THIRD_PARTY_NOTICES.md).

## License

The [MIT license](LICENSE) covers original project code only. It does not relicense the SpaPhish material, provider outputs, trademarks, or third-party documentation. See [third-party notices](docs/THIRD_PARTY_NOTICES.md).
