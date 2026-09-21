# Scam Signal Lens contributor guide

## Boundaries

- `apps/web` is a static replay client. It may import browser-safe core code and generated public modules only.
- `tools/capture` is Node-only. It is the only code permitted to send a provider request.
- Do not add a provider key, a key-entry field, authenticated transport, environment helper, or provider endpoint to the web application.
- Public recording modules may contain only allowlisted replay data, public corpus input, validated events, and public provenance.
- Keep provider responses untrusted until the strict core schema accepts them. Do not save rejected raw responses, request headers, provider error bodies, or credentials.

## Capture rules

- Capture outputs must be outside this repository. They are private until export validation succeeds.
- A capture run binds corpus, question bundle, policy, segmentation, requested model, attempt cap, and recorder/core source-content digest. Do not resume under changed configuration.
- Preserve valid Pass A data when Pass B is unavailable. Do not fabricate evidence, timing, or provider answers.
- Store actual attempt measurements and session history. An interrupted reserved attempt has an unknown outcome.
- The local `analyze` command requires explicit acknowledgement that selected text is uploaded to the provider.

## Data and evaluation

- Keep the English and Spanish benchmark reports separate.
- Source labels, model outputs, deterministic policy, and authored guidance are distinct data.
- Do not alter corpus membership, prompts, thresholds, or policy after capture begins to improve outcomes.
- Treat missing or invalid recordings as unavailable. Do not convert them to benign outcomes.

## Verification

Run the relevant tests, build the recorder after capture changes, and keep key-free build paths free of provider credentials. Coordinate before Git mutations or changes across team-owned paths.
