# Contributing

Open an issue before a substantial change so the replay, privacy, and data boundaries can be reviewed. Keep changes focused and include tests that exercise the behavior they add or change.

Do not contribute credentials, real messages, private capture output, authenticated transport, raw upstream downloads, environment dumps, or generated build artifacts. Do not modify a frozen corpus, prompt, policy, model selection, segmentation, source-content hash, or attempt cap after a capture has begun. Such a change requires a new reviewed capture configuration.

Run the relevant key-free checks before proposing a change:

```sh
pnpm test
pnpm typecheck
pnpm build
pnpm check:action-pins
pnpm check:boundaries
pnpm check:artifact
```

Public recording generation is final-only. A partial capture may be evaluated privately for diagnosis, but cannot be promoted into browser modules or release evidence.
