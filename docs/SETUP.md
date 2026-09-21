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

The private recorder is intentionally outside this setup path. It needs an owner-provisioned `TYPESAFE_API_KEY`, accepts it only in its capture process, and writes private capture output to an absolute directory outside the repository. Never place a provider key in an environment file, source file, command history, issue, build setting, or browser variable.

Do not run capture commands in CI. CI, the static build, and Pages deployment must remain key-free.

## Private capture and review

Run the key-free checks before the recorder. The recorder reads an owner-provisioned key from its process environment or credential facility. It uploads the selected message text to the hosted provider. Keep its output in an absolute directory outside this repository.

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

Private arbitrary-input analysis requires an explicit acknowledgement because it uploads the selected input:

```sh
node tools/capture/dist/main.js analyze \
  --input-file /absolute/private-input.json \
  --language en \
  --acknowledge-provider-upload true \
  --out /absolute/private-analysis-output \
  --run-id private-review
```

Evaluate a private capture without calling the provider:

```sh
pnpm evaluate -- \
  --corpus data/corpora/ai-email-200-v1.json \
  --records /absolute/private-capture-output \
  --out /absolute/private-evaluation-output
```

Public export is intentionally final-only. It requires a complete verified capture for exactly one frozen corpus and writes compiled modules, not browser-fetched JSON:

```sh
pnpm build:public-data -- \
  --corpus data/corpora/ai-email-200-v1.json \
  --records /absolute/private-capture-output \
  --out apps/web/src/generated/records/ai-email-200-v1 \
  --final
```

The command rejects a partial run, private analysis, failed evidence pass, unexpected record, duplicate ID, or mismatched corpus/configuration hash. Run it separately for each frozen corpus after review. It does not call the provider.

After the 200-row AI Email corpus and the authorized 499-row SpaPhish public projection are exported, run `pnpm recording:verify` to load and verify every generated replay, then `pnpm build:demo`. Run `pnpm check:release` only from the clean public publication staging tree, where its redacted history scan can succeed.
