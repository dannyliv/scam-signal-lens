# Setup

The default workflow is key-free. It validates the replay application and never runs the private recorder.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm test
pnpm typecheck
pnpm build
pnpm check:action-pins
pnpm check:boundaries
pnpm check:artifact
```

`pnpm build` produces `apps/web/dist`. Run the artifact check after each production build.

The private recorder is intentionally outside this setup path. It needs an owner-provisioned `TYPESAFE_API_KEY` in the capture process environment, and it writes private capture output to an absolute directory outside the repository. Export `TYPESAFE_API_KEY` in the shell for that process, or let an owner credential facility place it in that shell, then `unset TYPESAFE_API_KEY`. Never place a provider key in an environment file, source file, command history, issue, build setting, or browser variable.

Do not run capture commands in CI. CI, the static build, and Pages deployment must remain key-free.

## Private capture and review

Run the key-free checks before the recorder. `pnpm build:recorder` writes `tools/capture/dist/main.js`. The recorder reads `TYPESAFE_API_KEY` from that process environment and throws `TYPESAFE_API_KEY is required by the private capture process` when the variable is absent. It uploads the selected message text to `https://api.typesafe.ai/v1/systemone`. The requested model is `jev-1.13.0`. Keep output in an absolute directory outside this repository. Use a separate output directory for each run id. An existing directory keeps its original configuration.

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

Private arbitrary-input analysis requires an explicit acknowledgement because it uploads the selected input:

```sh
node tools/capture/dist/main.js analyze \
  --input-file /absolute/private-input.json \
  --language en \
  --acknowledge-provider-upload true \
  --out /absolute/private-analysis-output \
  --run-id private-review
```

Evaluate a full private `record` of the frozen AI Email corpus without calling the provider. This command rejects `analyze` output, a `smoke` directory, and a corpus whose manifest does not match a frozen capture source:

```sh
pnpm evaluate -- \
  --corpus data/corpora/ai-email-200-v1.json \
  --records /absolute/private-capture-ai-email-200 \
  --out /absolute/private-evaluation-output
```

Public export is intentionally final-only. It requires a complete verified capture for exactly one frozen corpus and writes compiled modules, not browser-fetched JSON:

```sh
pnpm build:public-data -- \
  --corpus data/corpora/ai-email-200-v1.json \
  --records /absolute/private-capture-ai-email-200 \
  --out apps/web/src/generated/records/ai-email-200-v1 \
  --final
```

The command rejects a partial run, `analyze` output, a corpus that is not an allowlisted frozen corpus, a failed evidence pass, an unexpected record, a duplicate ID, or a mismatched corpus or configuration hash. Run it separately for each frozen corpus after review. It does not call the provider. There is no other public export path.

After the 200-row AI Email corpus and the authorized 499-row SpaPhish public projection are exported, run `pnpm recording:verify` to load and verify every generated replay, then `pnpm build:demo`. Run `pnpm check:release` only from the clean public publication staging tree, where its redacted history scan can succeed.
