# Evidence index and reproduction

Read the [audit report](README.md) first. The [defect register](defect-register.csv), [device matrix](device-state-matrix.csv), [screen/state ledger](screen-state-coverage.csv), [instructional objectives](instructional-objectives.csv), [item coverage](question-coverage.csv), [carried content notes](carried-content-notes.csv), and [reused report hashes](reused-evidence.csv) provide reviewable tables.

[Download raw audit evidence](evidence/audit-data.zip). Extract its `evidence/` directory here to restore the JSON files referenced by the report. It contains source inventory, per-observation geometry/target candidates, axe and separate contrast results, transition assertions, model-reveal/fluency/keyboard logs, storage fixtures/results, asset hashes, and execution logs. JSON files are compressed to keep the branch practical; they are not omitted passing/failing cases.

## Confirmed defect evidence

| Finding | Evidence |
|---|---|
| UX-001 unsaved writing loss | [Before leaving](evidence/UX-001-before-leaving.png), [after reopening](evidence/UX-001-after-return.png), `defect-proofs.json` and `storage.json` inside archive |
| UX-002 damaged progress tab error | [Tab remains on Learn](evidence/UX-002-tab-blocked.png), `defect-proofs.json` and `storage.json` inside archive |
| INS-001 graph reasoning | `source-inventory.json` → sets → `SK:3.L.V.3.a:tB` → `SK-V3a-TB1` → why; exact source string and unchanged prior review cited in report |
| COPY-001 instructional count | [Story elements Try screen](evidence/copy-try-320.png), `extras.json`; finish/practiceDone source locations in report |

## Representative observations

- [First-time choice](evidence/choose-320.png)
- [Learning Path introduction](evidence/path-intro-390.png)
- [Incorrect two-part question](evidence/state-ebsr-incorrect-320.png)
- [Incorrect matching question](evidence/state-match-incorrect-320.png)
- [Submitted-test review](evidence/state-test-review-320.png)
- [Writing at landscape-phone height](evidence/writing-W-TASK-01-write-844.png)
- [Desktop source panel keyboard follow-up](evidence/keyboard-source-desktop.png)
- [Fluency result](evidence/fluency-result-320.png)

Screenshots are selected representative evidence, not screenshots of every ledger row. Most are full-page captures; they do not demonstrate physical viewing distance. Wrong/right response fixtures can update engine responses without synchronizing selection decoration, so those screenshots establish feedback/layout, not how a learner selected an answer. The dedicated storage/copy proofs use real input/tab actions.

## Reproduce

Application baseline: main commit `5e977364d5d205d827c4fd097ac3048d07bc8da2`. The audit branch adds files only under this audit directory. Use an isolated browser profile; the tests intentionally seed/clear fixture localStorage.

Dependencies used: Python Playwright1.49.1, packaged Chromium131, Node, `@sparticuz/chromium@131.0.1`, and axe-core (version recorded in `tool-versions.json` in archive). Set `CHROMIUM_PATH` to a compatible executable and `AXE_PATH` to `axe.min.js` for your environment. The packaged renderer's special launch flags/environment are in `scripts/runtime.py`; normal browser installations may not need these flags. Browser differences must be reported rather than silently equated with this run.

From the repository root, with dependencies importable:

```bash
python3 docs/audits/ux-2026-10-21/scripts/baseline.py
python3 docs/audits/ux-2026-10-21/scripts/screens.py
python3 docs/audits/ux-2026-10-21/scripts/states.py
python3 docs/audits/ux-2026-10-21/scripts/supplement.py
python3 docs/audits/ux-2026-10-21/scripts/branches.py
python3 docs/audits/ux-2026-10-21/scripts/final_checks.py
python3 docs/audits/ux-2026-10-21/scripts/extras.py
python3 docs/audits/ux-2026-10-21/scripts/defect_proofs.py
```

Each script starts its own local static server and terminates it. Run scripts sequentially on a normal host; this environment isolated concurrent command network namespaces. Reproduction writes audit output files only; it never changes application code. `screens.py` exports the inventory needed by later scripts. Its DOM-driven bulk traversal is geometry evidence only. Timer fast-forward is simulated elapsed time; touch is mobile emulation; none is actual-device acceptance.

The archive manifest hashes identify all included raw files. Historical PP-003/PP-004 report paths remain in their original locations. Their results are reused under the explicit source/version boundaries in the audit report.
