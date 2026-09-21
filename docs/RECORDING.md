# Private recording

Recording is a private, owner-run process. It sends the selected corpus text to the hosted provider and must never run in CI or from the browser. Keep the output at an absolute directory outside this repository.

The built recorder exposes these commands:

```sh
node tools/capture/dist/main.js smoke \
  --dataset data/corpora/ai-email-200-v1.json \
  --out /absolute/private-capture-output \
  --run-id review-smoke \
  --example AIB001

node tools/capture/dist/main.js record \
  --dataset data/corpora/ai-email-200-v1.json \
  --out /absolute/private-capture-output \
  --run-id review-ai-email-200
```

The provider credential is provisioned only to that process. Do not place it in a command, source file, environment file, CI setting, generated module, or shell history.

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

The published SpaPhish corpus is the single documented exception to source-corpus cardinality. The source capture selected 500 rows before inference. `SPAPHISH-088` had a valid Pass A but no accepted Pass B after the authorized diagnostic budget, so publication authorization excluded it from the derived 499-row public projection. The exporter binds that projection to the source manifest, source dataset and configuration hashes, the excluded ID, and its planned Pass B request hash. It exports no event or replay for the excluded row, leaves the private source capture unchanged, and keeps source-run attempts, sessions, and elapsed time explicitly source-scoped.
