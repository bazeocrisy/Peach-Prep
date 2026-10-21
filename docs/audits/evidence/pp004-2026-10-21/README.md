# Frozen PP-004 audit evidence

Tested repository code and harness: `f1f79791fe7215915821a3fc6d165f131231a143`.

The canonical project gates are:

```sh
node verification/serve.js . 8350
node verification/check-content.js --all
node verification/check-writing.js
python3 verification/readability.py
python3 verification/guard.py http://127.0.0.1:8350/
```

Install a working Playwright browser before the last command. In this Work runtime, the normal browser download failed. `run-guard.py` is the exact external launcher used with Playwright 1.49.1 and packaged Chromium 131.0.6778.0. It supplies an executable/flags and launches a fresh browser for each later page instead of disposing contexts in one single-process browser. It does not edit the repository harness, test conditions, application or lesson content. Its paths are specific to this run and must be adjusted before reuse. `browser-old-args.json` records the flags. No browser binaries or downloaded dependency trees are included here.

- `guard-final.log`: streamed assertion completions followed by the harness's own final output. Do not add the streamed counts to the final counts: those are the same assertions.
- `content.log`, `writing.log`, `readability.log`: fresh static gates. Trailing spaces in the captured readability output were removed for repository formatting; results and other text are unchanged.
- `focused-browser.py`, `focused-browser.log`, `focused-browser-results.json`: 100 final-change checks at 320/390/768/1366 pixels. Each viewport uses its own fresh browser. The script is specific to this runtime's executable paths.
- `frozen-inventory.json`: manifest-loaded lesson/form inventory, independently extracted in Node.
- `verify-sources.py`: accepts a repository root and the official PDF folder to reproduce normalized wording/page and code checks. The GUM cells are still checked visually.
- `source-reconciliation.json`: normalized wording/page results, excluded later-grade placeholders, GUM counts and source PDF SHA-256 hashes.
- `report-inventory.json`: 49 source-report paths/hashes at the tested commit, before this documentation-only audit addition.
- `gap-check-*.png` and `writing-score-*.png`: eight browser screenshots, four widths.

Official source PDF binaries are not included in this evidence folder. Use the supplied handoff ZIP and check its PDFs against `source-reconciliation.json` before claiming a new source audit.
