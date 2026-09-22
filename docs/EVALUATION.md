# Evaluation

Evaluate each corpus separately. Do not merge their counts, timings, confusion matrices, or claims.

```sh
pnpm evaluate -- \
  --corpus data/corpora/ai-email-200-v1.json \
  --records /absolute/private-capture-ai-email-200 \
  --out /absolute/private-evaluation-output
```

The evaluator makes no provider request. It accepts a private `record` whose manifest matches a frozen capture source. The AI Email command above matches the frozen AI Email source. It rejects `analyze` output, a `smoke` directory, and a manifest whose dataset id, hash, or expected count does not match a frozen capture source. For an accepted manifest, it verifies configuration bindings, checks every available replay record with the core verifier, and writes JSON, CSV, and readable reports. A verifier-valid Pass A record remains in a private report when Pass B evidence failed, and its CSV row has `capture_complete=false`. Missing or invalid Pass A records are unavailable.

The preregistered positive classification is `strong_warning_signs`. `verify_first` and `few_warning_signs` are non-positive outcomes. `not_enough_evidence` is an abstention. Conditional precision, recall, F1, accuracy, specificity, and false-positive rate use decided valid analyses. Whole-corpus alert recall divides true positives by all enrolled phishing rows, and whole-corpus benign alert rate divides false positives by all enrolled benign rows. A zero denominator is represented as `null`.

Reports keep Pass A timing, Pass B timing, completed-example processing time, HTTP attempt timing, failures, retries, sessions, and whole-run elapsed time distinct. A report from an incomplete run is diagnostic output, not a publishable benchmark result.
