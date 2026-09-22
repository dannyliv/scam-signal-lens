# Scam Signal Lens

Scam Signal Lens is a static replay interface for inspecting recorded scam-signal analyses of two email benchmark corpora. It is a teaching and evaluation tool. It does not authenticate senders, inspect destinations, determine whether a message is safe, or provide live analysis.

The public source is [dannyliv/scam-signal-lens](https://github.com/dannyliv/scam-signal-lens), and the recorded replay is deployed at [dannyliv.github.io/scam-signal-lens](https://dannyliv.github.io/scam-signal-lens/). The public interface is v1.1: Replay, Data samples, Results, and Methodology over the same checked-in recordings. It does not add provider calls or captures. Tag `v1.0.0` still resolves to application commit `16bda35284dc311b9fca48d17c264d241a38aac3`. Pages deploys `main`; the live source immediately before this closeout was `c033886b6741b97f108017ead8a520b4078321d3`.

## Local verified evaluation

The fixed `policy-v1` concern policy is evaluated separately for each corpus. These are recorded replay results, not live provider calls or a claim that a signal probability is a phishing probability.

| Corpus | Rows | TP | FP | TN | FN | Precision | Recall | F1 | Accuracy | Specificity | False-positive rate | Evidence coverage |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| AI Email 200 | 200 | 92 | 0 | 100 | 8 | 100.00% | 92.00% | 95.83% | 96.00% | 100.00% | 0.00% | 436 of 782 eligible signals, 55.75% |
| SpaPhish v5 public projection | 499 | 43 | 3 | 247 | 206 | 93.48% | 17.27% | 29.15% | 58.12% | 98.80% | 1.20% | 460 of 1,357 eligible signals, 33.90% |

Recorded concern counts by source label. Alert is `strong_warning_signs`. These counts are separate from the confusion matrix above.

| Corpus | Source label | Alert | Verify first | Few warning signs | Abstain | Unavailable |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| AI Email 200 | Phishing | 92 | 8 | 0 | 0 | 0 |
| AI Email 200 | Benign | 0 | 40 | 60 | 0 | 0 |
| SpaPhish v5 public projection | Phishing | 43 | 183 | 23 | 0 | 0 |
| SpaPhish v5 public projection | Benign | 3 | 119 | 128 | 0 | 0 |

The SpaPhish result is a user-authorized public 499-row projection of a source 500-row capture. `SPAPHISH-088` had an accepted Pass A but no accepted Pass B after the bounded diagnostic budget, so it is excluded only from the public projection. The source-run totals remain source-scoped. See the [dataset documentation](docs/DATASETS.md), [model card](docs/MODEL_CARD.md), and [release report](docs/RELEASE_REPORT.md).

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

The command above smokes one row of the bundled English corpus. `record` walks that file, and the same flags accept `data/corpora/spaphish-v5.json`. For other data, point `--dataset` at a corpus JSON that passes `validateCorpusEnvelope` in `packages/core/src/schema.ts` (mirror `data/corpora/ai-email-200-v1.json`), or use `analyze` with `--input-file` and `--acknowledge-provider-upload true` for one message. Those commands upload the selected text. The requested model is `jev-1.13.0`. Thresholds, signal questions, input limits, and that model id are source edits, described in [Editing policy, thresholds, and inputs](#editing-policy-thresholds-and-inputs). [Setup](docs/SETUP.md) and [recording](docs/RECORDING.md) cover `record`, `analyze`, local evaluation, and public export. Public export accepts a complete verified capture of an allowlisted frozen corpus only. It does not publish `analyze` output or a corpus you author, and it does not call the provider.

## Editing policy, thresholds, and inputs

You can run a private capture with your own TypeSafe key and your own data. The key is the process environment variable `TYPESAFE_API_KEY` on the Node recorder in `tools/capture`, as in the quick start above. Own datasets go through `smoke` or `record --dataset`, or through `analyze --input-file` for one message. The browser and the Pages site stay recorded replay: they have no key field, no live analysis, and no policy editor.

Thresholds, signal questions, input limits, and the model id are constants in source. The recorder has no flag that changes them.

### Thresholds and alert policy

[`packages/core/src/policy.ts`](packages/core/src/policy.ts) fixes `policy-v1`:

- `YES` is `0.8`. `signalStatus` calls a probability at or above it indicated.
- `NO` is `0.2`. A probability at or below it is not indicated. A value strictly between the two is uncertain.
- `CHOICE_CONFIDENCE_FLOOR` is `0.65` and `CHOICE_WINNER_PROBABILITY_FLOOR` is `0.7`. A contextual choice counts when its confidence and its winning probability both clear those floors.
- `POLICY_VERSION` is `"policy-v1"`. `policyFingerprint()` binds that version, the four numbers above, and strong-warning rule ids `H1` through `H5`. Capture stores `policySha256` as the SHA-256 of that object. Changing a threshold changes the hash even when the version string stays `"policy-v1"`.

`derivePolicy` checks the strong-warning rules first. Any match yields concern `strong_warning_signs`, and `triggeredRuleIds` lists the matching rules:

- **H1:** `credential_request` is indicated.
- **H2:** `advance_fee_or_refund_trap` is indicated.
- **H3:** `payment_request` is indicated, and at least one of `unusual_payment_routing`, `verification_bypass`, and `unrealistic_reward` is indicated.
- **H4:** `remote_access_request` is indicated, `urgency_pressure` or `verification_bypass` is indicated, and the request route is not `independently_established` at both choice floors.
- **H5:** `sensitive_data_request` is indicated, the route is `sender_supplied` at both choice floors, and `urgency_pressure` or `authority_claim` is indicated.

When no H rule matches, and message role or request route is below a choice floor while a winning choice is `mixed_or_unclear` (role) or `mixed_or_unknown` (route), the concern is `not_enough_evidence`. The next path is `verify_first` when a review signal is uncertain (`credential_request`, `sensitive_data_request`, `unusual_payment_routing`, `verification_bypass`, `advance_fee_or_refund_trap`, or `analyzer_instruction`), when `verification_bypass` or `analyzer_instruction` is indicated, when `payment_request`, `sensitive_data_request`, or `remote_access_request` is indicated and the route is not independently established at both floors, or when message role or request route is below a choice floor. Otherwise the concern is `few_warning_signs`.

The same function can attach context warnings `message_role_low_confidence`, `request_route_low_confidence`, and `role_feature_conflict`. The last of those is recorded when an `educational_or_quoted` role clears both floors and `credential_request` is indicated, which is already H1.

Evaluation uses `strong_warning_signs` as the alert positive class. `verify_first` and `few_warning_signs` are non-alerts. `not_enough_evidence` is an abstention. See [evaluation](docs/EVALUATION.md).

### Signal questions and the question bundle

[`packages/core/src/questions.ts`](packages/core/src/questions.ts) holds `signalDefinitions` (twelve Noul signals), `buildPassARequest`, and `buildPassBRequest`. Pass A also asks the choice questions `message_role` and `request_route`. Pass B asks which subject or body segment supports a signal only when that signal's Pass A probability is above `NO`. If the subject or the body has more than 64 segments, Pass B records `candidate_limit` and sends no evidence request.

Each example language is `en` or `es`. `corpusScope` is `synthetic_sanitized` or `source_messages`. The synthetic scope says that sanitized example domains are not a risk signal. The source-message scope says to judge destination and sender-route claims from the supplied text. On `smoke` and `record`, an example whose `datasetId` is `ai-email-200-v1` uses `synthetic_sanitized`. Every other dataset id uses `source_messages`. `analyze` always uses `source_messages`. `buildPassARequest` defaults Spanish to source messages and English to the synthetic scope when a caller omits the scope. The recorder passes the dataset-id scope explicitly. Use one `datasetId` and one language in a corpus file. The question-bundle hash is the SHA-256 of the Pass A `questions` object. That object omits the message text. On `smoke` and `record` it is built from a fixed fingerprint state, the first example's language, and the scope selected from that example's `datasetId`. `analyze` uses the same fingerprint state, `--language`, and `source_messages`.

`REQUESTED_MODEL` in that file is `jev-1.13.0`. Pass A and Pass B send that id, and a provider response is accepted only when its `model` field equals `REQUESTED_MODEL`. [`tools/capture/src/main.ts`](tools/capture/src/main.ts) also writes the literal `jev-1.13.0` into the run config in three places (the `analyze` manifest, the recovery config, and the `record`/`smoke` config). Those copies have to stay equal to `REQUESTED_MODEL`. The recorder has no model flag.

### Single-message inputs

[`packages/core/src/input.ts`](packages/core/src/input.ts) exports `projectModelInput` and `INPUT_LIMITS`. The function reads a carrier shaped `{ input: { channel, subject, body, userContext } }` and drops every other field. Channels are `email`, `sms`, `chat`, and `social_dm`. Limits are UTF-16 code units: body 8000, subject 300, `userContext` 2000. The body must be non-empty. Subject may be `null`. CRLF is normalized to LF. Text over a limit is rejected.

`analyze --input-file` JSON-parses the file and passes it to `projectModelInput({ input: raw })` in [`tools/capture/src/main.ts`](tools/capture/src/main.ts). The file on disk is the inner object. `main.ts` adds the carrier:

```json
{
  "channel": "email",
  "subject": "Enrollment window reminder",
  "body": "The benefits portal is open through Friday.",
  "userContext": ""
}
```

`--language` is `en` or `es`, and `--acknowledge-provider-upload true` is required because the selected text is uploaded. The journal uses dataset id `private-input-v1`. Evaluation and public export leave that journal out. A `smoke` or `record` file uses `channel` `"email"` on every row: `validateCorpusEnvelope` accepts only that channel. Projection then applies the length limits, so an envelope that passes the schema can still fail at capture when a field is empty or too long.

### Corpus datasets

`smoke` and `record --dataset` load the file through `validateCorpusEnvelope` in [`packages/core/src/schema.ts`](packages/core/src/schema.ts). Mirror [`data/corpora/ai-email-200-v1.json`](data/corpora/ai-email-200-v1.json). The envelope needs `version` `"1.0.0"`, an object `metadata`, and `examples`. Each example needs a unique string `id`, `language` of `en` or `es`, `input.channel` `"email"`, `subject` as a string or `null`, string `body` and `userContext`, and `groundTruth.label` of `phishing` or `benign` with `labelSource` of `synthetic_author` or `source_dataset`. The checked-in file also includes `title` and `provenance`. Labels, titles, and provenance are not model input. Give a custom file its own `datasetId`. `pnpm evaluate` and public export recognize the frozen capture sources: the checked-in AI Email file, and the original 500-row SpaPhish source capture described in [recording](docs/RECORDING.md). The checked-in `spaphish-v5.json` is the 499-row public projection.

### Other capture parameters

The recorder has no flag for the endpoint, the attempt cap, or the segmentation version.

- The provider URL is `TYPESAFE_SYSTEMONE_ENDPOINT` in [`tools/capture/src/typesafe-http.ts`](tools/capture/src/typesafe-http.ts): `https://api.typesafe.ai/v1/systemone`.
- The run-wide HTTP attempt cap is `declaredAttemptCap` in [`tools/capture/src/record.ts`](tools/capture/src/record.ts): eligible rows × 2 × 3, sized for two passes and up to three HTTP tries on each pass. `analyze` uses one row, so its cap is 6. The run stores it as `declaredHttpAttemptCap`.
- `record` accepts `--recover-from <parent-private-output>` and, when one example input changed, `--changed-example <id>`. [Recording](docs/RECORDING.md) describes those flags. Recovery requires the parent policy hash, question-bundle hash, model, segmentation version, and attempt cap to match the current recorder. A mismatch raises `recovery_inference_config_mismatch`.
- Segmentation is `SEGMENTATION_VERSION` (`intl-segmenter-sentence-v1`) in [`packages/core/src/segmentation.ts`](packages/core/src/segmentation.ts). `segmentInput` uses `Intl.Segmenter` with the example language.

### After an edit

Edit the source, then rebuild before the next capture:

```sh
pnpm build:recorder
```

`pnpm build:recorder` runs `pnpm build:core` and then compiles the recorder. `pnpm build:core` alone rebuilds the package the verifier and the web app import. Run the quick start commands with a new absolute `--out` directory and a new `--run-id`. An existing output directory keeps the configuration it was created with. A changed policy hash, question-bundle hash, model, segmentation version, attempt cap, dataset, recovery lineage, or source-content hash is rejected with `existing capture run configuration is immutable`. The source-content hash covers the recorder and core behavior files listed in `tools/capture/src/main.ts`.

`pnpm evaluate` still accepts only a manifest whose dataset id, corpus hash, and expected count match a frozen capture source, as [evaluation](docs/EVALUATION.md) describes. A custom corpus, `analyze`, and `smoke` do not match. `pnpm build:public-data -- … --final` still accepts only a complete verified capture of an allowlisted frozen corpus. A private run on your own data, or a run after a policy or question edit, is not a Pages update.

Editing `policy.ts` changes `policyFingerprint()` and the source-content hash. Editing `questions.ts` changes the question-bundle hash, and editing `REQUESTED_MODEL` also changes the model id the requests send. Editing `SEGMENTATION_VERSION` changes the segmentation binding. Those files, plus the rest of the list in `tools/capture/src/main.ts`, are part of the source-content hash. `verifyReplayRecord` in [`packages/core/src/replay.ts`](packages/core/src/replay.ts) checks the policy hash, the question-bundle hash, the segmentation version, and the model against the core that is running. After one of those bindings moves, `pnpm recording:verify` rejects the checked-in replays. Those replays remain the frozen `policy-v1` capture. Pages keeps serving the deployed replay.

## Scope

The primary benchmark corpora are kept separate:

- `ai-email-200-v1`: 200 original English emails, with 100 dataset-author benign labels and 100 dataset-author phishing labels.
- `spaphish-v5`: 499 Spanish emails from a frozen 500-row selection, with 250 upstream benign labels and 249 upstream phishing labels after one documented post-capture evidence exclusion.

Dataset labels are annotations, not findings by the application. The synthetic set is constructed, and neither corpus establishes real-world prevalence, sender identity, safety, calibration, or detection performance. See [dataset documentation](docs/DATASETS.md) and the [scope addendum](docs/SCOPE-ADDENDUM.md).

## Boundaries

The browser receives only bundled, reviewed public data and replays a matching recorded result when one is available. It has no key entry field, provider client, or live inference path. The recorder is Node-only and lives outside the web dependency graph. It accepts `TYPESAFE_API_KEY` only for a private capture process and writes its private output outside this repository before reviewed public records are promoted.

See [setup](docs/SETUP.md), [recording](docs/RECORDING.md), [evaluation](docs/EVALUATION.md), [security](docs/SECURITY.md), [deployment](docs/DEPLOYMENT.md), [privacy](docs/PRIVACY.md), [release process](docs/RELEASE.md), and [third-party notices](docs/THIRD_PARTY_NOTICES.md).

## License

The [MIT license](LICENSE) covers original project code only. It does not relicense the SpaPhish material, provider outputs, trademarks, or third-party documentation. See [third-party notices](docs/THIRD_PARTY_NOTICES.md).
