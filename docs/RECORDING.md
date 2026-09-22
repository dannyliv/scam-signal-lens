# Private recording

Recording is a private, owner-run process. It sends the selected corpus text to TypeSafe at `https://api.typesafe.ai/v1/systemone` and must never run in CI or from the browser. Keep the output at an absolute directory outside this repository. The requested model is `jev-1.13.0`.

Build the recorder with `pnpm build:recorder` before the commands below. That script writes `tools/capture/dist/main.js`. Export `TYPESAFE_API_KEY` in the shell for that process, or let an owner credential facility place it in that shell, then `unset TYPESAFE_API_KEY`. The process reads `process.env.TYPESAFE_API_KEY` and throws `TYPESAFE_API_KEY is required by the private capture process` when the variable is missing. Do not place the key in a command, source file, environment file, CI setting, generated module, or shell history.

```sh
pnpm build:recorder
export TYPESAFE_API_KEY

node tools/capture/dist/main.js smoke \
  --dataset data/corpora/ai-email-200-v1.json \
  --out /absolute/private-capture-smoke \
  --run-id review-smoke \
  --example AIB001

node tools/capture/dist/main.js record \
  --dataset data/corpora/ai-email-200-v1.json \
  --out /absolute/private-capture-ai-email-200 \
  --run-id review-ai-email-200
unset TYPESAFE_API_KEY
```

`record` also accepts `--recover-from <parent-private-output>`. Add `--changed-example <id>` when one example input changed. The parent must be a different absolute directory outside the repository. Those flags are valid on `record` only. Reusing an `--out` directory keeps that run's configuration. A changed run id, corpus, question bundle, policy, model, segmentation, attempt cap, recovery lineage, or source-content hash is rejected with `existing capture run configuration is immutable`.

The same `smoke` and `record` flags accept `data/corpora/spaphish-v5.json`. Use a separate output directory and an id from that file, such as `SPAPHISH-001`. A new recording of that checked-in 499-row public projection is private output. `pnpm evaluate` and public export accept the original frozen source capture for SpaPhish, not that new run.

The checked-in `spaphish-v5-es-questions` modules are a separate public replay of that same 499-email projection. They use Spanish signal questions and `policy-v1-es-exp` with YES at 0.70, beside the English-question SpaPhish replay. The private capture directory stays outside this repository. The recorder still posts to `https://api.typesafe.ai/v1/systemone`.

Arbitrary local analysis is separate and requires explicit acknowledgement because it uploads the selected text:

```sh
node tools/capture/dist/main.js analyze \
  --input-file /absolute/private-input.json \
  --language en \
  --acknowledge-provider-upload true \
  --out /absolute/private-analysis-output \
  --run-id private-review
```

A capture manifest binds the dataset, question bundle, policy, model, segmentation, source-content hash, request hashes, event history, sessions, and configured attempt cap. Public export accepts only complete validated records from an allowlisted frozen corpus. It rejects arbitrary analysis, incomplete enrollment, retained failed evidence passes, duplicate IDs, unlisted JSON artifacts, and mismatched hashes.

Thresholds, questions, and the other source constants are listed in [Tune policy, thresholds, and questions](../README.md#tune-policy-thresholds-and-questions). None of them is a recorder flag. An edit needs `pnpm build:recorder` and a new `--out` directory and `--run-id`, because an existing run directory keeps its configuration.

The published SpaPhish corpus is the single documented exception to source-corpus cardinality. The source capture selected 500 rows before inference. `SPAPHISH-088` had a valid Pass A but no accepted Pass B after the authorized diagnostic budget, so publication authorization excluded it from the derived 499-row public projection. The exporter binds that projection to the source manifest, source dataset and configuration hashes, the excluded ID, and its planned Pass B request hash. It exports no event or replay for the excluded row, leaves the private source capture unchanged, and keeps source-run attempts, sessions, and elapsed time explicitly source-scoped.
