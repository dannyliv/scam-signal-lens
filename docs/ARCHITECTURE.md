# Architecture

Scam Signal Lens separates private capture from public replay.

```text
Frozen public corpus
       |
       v
Node-only recorder -> validated allowlisted provider answers -> private recording journal
       |                                                        |
       |                                                        v
       |                                             strict replay/export validation
       |                                                        |
       v                                                        v
private local analysis                                   static browser modules
                                                                 |
                                                                 v
                                                     browser replay, no live calls
```

The recorder projects each corpus row to the four observed model-input fields. Labels, titles, rationales, provenance references, and filenames do not enter model requests. Pass A records bounded signal and context answers. Pass B asks for evidence only for eligible signals. Deterministic policy code derives the concern state from validated Pass A answers.

Each private run has an immutable configuration containing the corpus hash, question hash, policy hash, segmentation version, requested model, declared attempt cap, and source-content hash for the recorder and relevant core behavior. The journal reserves an attempt before it begins. Its capture session history preserves source revision, session boundaries, and measured active duration. A reserved attempt without an outcome remains unknown after interruption.

The browser verifier uses canonical JSON and Web Crypto. It recreates the input projection, segmentation, two-pass requests, answer allowlists, evidence eligibility, and deterministic policy before accepting a replay record. A modified input, request hash, response shape, model identifier, evidence selection, or derived result is unavailable.

The public application uses compiled same-origin modules. It does not fetch recording JSON at runtime, expose a provider client, or make inference requests.
