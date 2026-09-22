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

## Private capture with your own API key

The key-free checks above are the path for most readers. This section is a private Node recorder run with your own TypeSafe key. It uploads selected message text and writes a private journal. It does not authenticate senders, inspect destinations, or determine whether a message is safe. Command details and privacy limits are in [setup](docs/SETUP.md), [recording](docs/RECORDING.md), and [security](docs/SECURITY.md).

Install dependencies with the key-free steps, then build the recorder. `pnpm build:recorder` compiles `tools/capture/dist/main.js`. The web build does not produce that file.

```sh
pnpm build:recorder
```

Set `TYPESAFE_API_KEY` in the environment of that process before you start it. The recorder reads `process.env.TYPESAFE_API_KEY` and throws `TYPESAFE_API_KEY is required by the private capture process` when the variable is missing. Keep the key out of this repository, an environment file, shell history, command output, a browser variable, CI, and issues.

Use an absolute `--out` directory outside this repository. The recorder resolves the path and throws `private capture output must be outside the repository` when the directory is inside it. Give each run id its own output directory. An existing directory keeps its original run configuration, and a changed run id, corpus, question bundle, policy, model, segmentation, attempt cap, recovery lineage, or source-content hash is rejected with `existing capture run configuration is immutable`.

The recorder uploads the selected input to `https://api.typesafe.ai/v1/systemone`. The requested model is `jev-1.13.0`. The CLI has no model flag. Do not run capture in CI.

### Bundled corpus

`smoke` records one example. `record` walks every example. `--example` must be an id in the corpus file; a missing or unknown id throws `no selected corpus example`.

```sh
node tools/capture/dist/main.js smoke \
  --dataset data/corpora/ai-email-200-v1.json \
  --out /absolute/private-capture-smoke \
  --run-id review-smoke \
  --example AIB001

node tools/capture/dist/main.js record \
  --dataset data/corpora/ai-email-200-v1.json \
  --out /absolute/private-capture-ai-email-200 \
  --run-id review-ai-email-200
```

The same flags accept `data/corpora/spaphish-v5.json`. Use another output directory and an id from that file, such as `SPAPHISH-001`:

```sh
node tools/capture/dist/main.js smoke \
  --dataset data/corpora/spaphish-v5.json \
  --out /absolute/private-capture-spaphish-smoke \
  --run-id review-smoke-es \
  --example SPAPHISH-001
```

`record` can continue from another private directory with `--recover-from <parent-private-output>`. Add `--changed-example <id>` when one example input changed. The parent must be a different absolute directory outside the repository. Those flags are valid on `record` only. See [recording](docs/RECORDING.md).

### Your own corpus

Point `--dataset` at a JSON file that passes `validateCorpusEnvelope` in `packages/core/src/schema.ts`. Mirror `data/corpora/ai-email-200-v1.json`.

`validateCorpusEnvelope` requires:

- `version` is `"1.0.0"`.
- `metadata` is a JSON object.
- `examples` is an array of unique string `id`s.
- each `language` is `en` or `es`.
- `input.channel` is `"email"`.
- `input.subject` is a string or `null`.
- `input.body` and `input.userContext` are strings.
- `groundTruth.label` is `phishing` or `benign`.
- `groundTruth.labelSource` is `synthetic_author` or `source_dataset`.

The `CorpusExample` type and the bundled files also include `datasetId`, `title`, and `provenance`. Use one string `datasetId` on every example. Question scope is `synthetic_sanitized` when that id is `ai-email-200-v1`. Every other id uses `source_messages`. Keep `ai-email-200-v1` and `spaphish-v5` for the bundled files. A different file that reuses those ids will not match the frozen corpus hashes.

During capture, `projectModelInput` rejects an empty body, a body longer than 8000 UTF-16 code units, a subject longer than 300, or `userContext` longer than 2000. It normalizes CRLF to LF. Optional `groundTruth.rationale` is allowed by the type and is not model input.

```json
{
  "version": "1.0.0",
  "metadata": {},
  "examples": [
    {
      "id": "example-1",
      "datasetId": "my-email-corpus",
      "title": "Example",
      "language": "en",
      "input": {
        "channel": "email",
        "subject": null,
        "body": "hello",
        "userContext": ""
      },
      "groundTruth": {
        "label": "benign",
        "labelSource": "synthetic_author"
      },
      "provenance": {}
    }
  ]
}
```

Pass that file to `smoke` or `record` with the same flags as the bundled corpora, and keep the file outside the repository. A corpus you author stays private. Local evaluation and public export stay limited to the frozen corpora named in `scripts/build-public-data.ts`, as described below.

### One private input

`analyze` reads one JSON file and projects it with `projectModelInput`. The file is the model input, with `channel`, `subject`, `body`, and `userContext`. `channel` may be `email`, `sms`, `chat`, or `social_dm`. The length limits above apply. Other properties on that object are dropped before the request. `--language` is `en` or `es`. `--acknowledge-provider-upload true` is required because the command uploads that input.

```json
{
  "channel": "email",
  "subject": null,
  "body": "hello",
  "userContext": ""
}
```

```sh
node tools/capture/dist/main.js analyze \
  --input-file /absolute/private-input.json \
  --language en \
  --acknowledge-provider-upload true \
  --out /absolute/private-analysis-output \
  --run-id private-review
```

The written manifest uses `datasetId` `private-input-v1`. Keep the input file and the output directory outside this repository.

### Local evaluation

`pnpm evaluate` does not call the provider. It checks a capture manifest against a frozen capture source. A full `record` of `data/corpora/ai-email-200-v1.json` is the command in [setup](docs/SETUP.md) and [evaluation](docs/EVALUATION.md):

```sh
pnpm evaluate -- \
  --corpus data/corpora/ai-email-200-v1.json \
  --records /absolute/private-capture-ai-email-200 \
  --out /absolute/private-evaluation-output
```

That command rejects `analyze` output, a one-example `smoke` directory, and a corpus whose id, hash, or expected count is not the frozen capture source. `data/corpora/spaphish-v5.json` is the 499-row public projection. A new recording of that file is private output; the evaluator's SpaPhish source is the original 500-row capture, which is not this checked-in file. A report from an incomplete run is diagnostic output.

### What stays unavailable

The browser and the Pages site replay bundled recordings. They have no key field, provider client, or live inference path.

Public export writes compiled modules only for a complete verified capture of an allowlisted frozen corpus, and only with `--final`:

```sh
pnpm build:public-data -- \
  --corpus data/corpora/ai-email-200-v1.json \
  --records /absolute/private-capture-ai-email-200 \
  --out apps/web/src/generated/records/ai-email-200-v1 \
  --final
```

`analyze` output cannot be promoted through this command. A corpus you author cannot be promoted through it without first freezing that corpus into the allowlist in `scripts/build-public-data.ts`. This repository has no other public export command. The command does not call the provider. Run it separately for each frozen corpus after review, as described in [setup](docs/SETUP.md).

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
