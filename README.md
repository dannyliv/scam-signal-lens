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

The command above smokes one row of the bundled English corpus. `record` walks that file, and the same flags accept `data/corpora/spaphish-v5.json`. For other data, point `--dataset` at a corpus JSON that passes `validateCorpusEnvelope` in `packages/core/src/schema.ts` (mirror `data/corpora/ai-email-200-v1.json`), or use `analyze` with `--input-file` and `--acknowledge-provider-upload true` for one input accepted by `projectModelInput` in `packages/core/src/input.ts`. Those commands upload the selected text. The requested model is `jev-1.13.0`. [Setup](docs/SETUP.md) and [recording](docs/RECORDING.md) cover `record`, `analyze`, local evaluation, and public export. Public export accepts a complete verified capture of an allowlisted frozen corpus only. It does not publish `analyze` output or a corpus you author, and it does not call the provider.

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
