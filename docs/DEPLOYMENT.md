# Deployment

GitHub Pages deployment is limited to `main`. The workflow installs frozen dependencies, runs the key-free verification gates, requires complete generated replay modules for the 200-row AI Email corpus and authorized 499-row SpaPhish public projection, builds the static application, and uploads only `apps/web/dist`.

The public-recording gate requires exactly one compiled module per enrolled public record plus a verified loader for each corpus. The current source contains complete modules for the 200-row AI Email corpus and the authorized 499-row SpaPhish public projection. The gate remains a release block for any missing, tampered, or integrity-failing replay.

After a successful deployment, verify the deployed routes after a hard reload, static CSP, absence of application network requests, replay tamper failure, and the final artifact and source hashes. Record the actual workflow, Pages URL, source revision, capture provenance, and browser evidence in the release report. No deployment has been certified by this document.
