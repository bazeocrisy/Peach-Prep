# UX audit corrections and release verification

Date: October 21, 2026 (America/New_York).

Scope: correct the four confirmed findings from the [read-only instructional UX audit](https://github.com/bazeocrisy/Peach-Prep/blob/audit/instructional-ux-2026-10-21/docs/audits/ux-2026-10-21/README.md). The owner subsequently authorized implementation, agent collaboration and merge without waiting for further routine confirmation. Accounts, backend storage, placement and curriculum expansion remain outside scope.

## Corrections

| Finding | Final behavior |
|---|---|
| UX-001: failed storage loses reopened writing | Extended tasks and short-writing activities preserve their newest unsaved text/checklists during this page visit. Extended tasks also preserve plans and parent scores. Separate tasks/lessons stay separate. Unsaved work takes precedence over stale disk data; clean caches still honor valid disk updates/clearing. Failed reads retain cached work. Notices explain failed saving and copying work before reload/close; unsaved changes get unload protection. Successful persistence clears the failure notice. |
| UX-002: malformed nested progress blocks a tab | Invalid lesson record values recover as empty records. Valid neighboring objects, scores, dates and histories are preserved. The progress map has no prototype; unsafe property names are excluded. Recovery does not award a scored pass or enable Retained. This is record validation, not universal validation of every possible corrupt field. |
| INS-001: unsupported graph explanation | SK-V3a-TB1 now explains fewer buckets picked, comparing eight with four. It does not infer pecans remaining. The correct answer and point value are unchanged. |
| COPY-001: instructional counts below ten | Try introductions, blank-test confirmation, practice completion and matching-row prose use number words below ten. One-question grammar is singular. Scores, points, codes, percentages and numbered navigation keep numerals. The parent coaching heading says “five minutes.” |

There are no new questions or changes to scoring thresholds, answer keys, alternate-form policy or feature-flag defaults.

## Review and tests

Three implementation agents divided writing recovery, progress/short-writing recovery, and instructional copy. A fourth agent independently tested the combined result and reviewed all six application diffs. The root agent inspected the changes and ran integration checks on the frozen application source. These are Codex agents, not external GaDOE reviewers or trained writing scorers.

| Verification | Result |
|---|---|
| Extended writing recovery | 75 passed, zero failed |
| Progress and short-writing recovery | 67 passed, zero failed |
| Instructional-copy runtime functions | 28 assertions passed |
| Independent combined review | 87 passed, zero failed; no uncaught page errors |
| Existing Learning Path integration | 148 passed, zero failed |
| Original question-player guard | PENDING; merge is held until this run finishes successfully |
| Content checker | Zero failures; six existing clue-overlap warnings |
| Writing checker | Zero failures; zero warnings |
| JavaScript syntax / whitespace | Passed for all six changed application files |

The independent reviewer approved the corrections, contingent on the root integration result. See [independent review](INDEPENDENT-REVIEW.md) and [machine-readable results](independent-review-results.json). Original historical audits remain historical; their tests are not mislabeled as new runs.

The focused cases cover blocked storage getters, failed reads with working writes, quota/write failures, stale persisted drafts, successful recovery and reload, task/lesson/mode isolation, reset cancel/accept, multi-task unload protection, malformed records and neighboring history, no invented pass, practice/test address handling, and scored A/B rotation.

The new warning and long writing were checked at 320×568, 390×844, 844×390, 768×1024, 1024×768, 1366×768 and 1920×1080 without horizontal page overflow. [Phone recovery screenshot](writing-recovery-390.png) and [desktop recovery screenshot](writing-recovery-1366.png) show the implemented state. Selected answers in engine tests are supplied fixtures; this is not a new blind solve of all content.

## Environment and reproduction

Browser checks use packaged Chromium 131 with Playwright 1.49.1, headless viewport simulation, system fallback fonts and GPU disabled. They do not constitute actual iPhone/iPad/Android/Safari, screen-reader speech, native browser zoom, physical viewing distance or parent/child learning-outcome acceptance. The original audit's remaining actual-device/family checks remain open.

The original guard's assertions are unchanged. [The launcher](../../../verification/launch-ux-regression.py) supplies the packaged browser and fresh-browser isolation. It sets a browse preference fixture because the older home journey predates first-visit mode selection; the separate path suite verifies first visits. No assertion is weakened or skipped. Each script starts a static server in its own command environment.

```bash
node verification/check-instructional-copy.js
node verification/check-content.js --all
node verification/check-writing.js
python3 verification/writing-recovery.py
python3 verification/skills-recovery.py
python3 verification/ux-release-review.py
python3 verification/launch-ux-regression.py path
python3 verification/launch-ux-regression.py guard
```

Python requires Playwright and a compatible `CHROMIUM_PATH`; the focused writing test also accepts `CHROMIUM_ARGS`. The committed launchers document this environment's flags. All browser storage changes are isolated test fixtures, not production user data.

## Persistence boundary

When browser storage is unavailable, this correction protects work within the current page visit; it cannot preserve memory after the page is reloaded, the tab/browser is closed or the browser process is discarded. The notice and unload protection explain that boundary and direct families to keep a copy. Browser close prompts are subject to browser policy. Normal storage continues saving locally, without accounts or cross-device sync.

## Release status

Application source is frozen for verification. Merge is pending the original guard result. No separate deployment is initiated by these verification scripts. GitHub Pages may update automatically after an owner-authorized merge; deployment must be checked separately from the merge result.
