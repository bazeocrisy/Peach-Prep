# Test results for the home redesign

**Candidate:** `595ef01` on branch `design/home-start-experience`.
**Baseline:** `main` 9a5b297.

Commits after `595ef01` change only files under `docs/design/home-2026-10-22/`.

All results below were run on `595ef01` itself. Earlier results (PR #4 and before) are not reused.

## Existing suites

Two people ran the suites independently: the implementer and the independent reviewer. Each used their own server and scratch launcher.

| Suite | Implementer (04 "After QA") | Independent reviewer (06 "Final re-review") |
|---|---|---|
| `node verification/check-content.js --all` | 0 failures, 6 warnings (same as before) | 0 failures, 6 warnings |
| `node verification/check-writing.js` | 0 / 0 | 0 / 0 |
| `python3 verification/readability.py` | identical to baseline | ran |
| `node verification/check-instructional-copy.js` | 28 passed | 28 |
| `verification/path.py` (Learning Path) | 148 passed | 148/148 |
| `verification/path-a11y.py` + `path-contrast.js` | 12/12 runs, 0 violations | 12/12 |
| `verification/path-headers.py` | 48 passed | 48/48 |
| `verification/skills-recovery.py` (UX-002, short writing) | 67 passed | 67/67 |
| writing recovery (UX-001) | 75 passed | 75/75 |
| `verification/guard.py`, full run via the browse-mode fixture launcher | 110 passed, exit 0 | 110/110, exit 0 |

**Note on the guard.** `guard.py` assumes the browse home. Run on its own, it stops at check 9.1, because the site now opens the first-visit choice screen. The implementer reports that this happens on `main` too. The reviewer did not re-confirm it. Both full runs used a scratch copy of `launch-ux-regression.py` that seeds browse mode. No file in `verification/` was changed, and no test was weakened.

## New checks for this redesign
- **Implementer behaviour script:** 214 checks.
- **Independent reviewer:**
  - **State sweep:** 14 states × 7 viewports = 98 combinations. Each one checked:
    - the right landing screen
    - no storage writes on load
    - no horizontal scroll
    - targets of at least 44px
    - text contrast (lowest 4.64:1)
    - axe (no violations)
    - no page errors
  - **Behaviour checks:** 266. These cover:
    - every "Opens at" claim against the step that actually opens
    - mode switching with drafts (all keys except `pp.path.v1` byte-identical, and that key keeps its bookmark, ticks and habits)
    - 66 direct-link loads
    - blocked, full and corrupt storage
    - keyboard focus (ring 6.9–7.21:1) and Enter/Space activation
- **Coverage ledger:** `07-coverage-ledger.csv` (410 rows for `595ef01`).

## Viewports
320×568, 390×844, 844×390, 768×1024, 1024×768, 1366×768, 1920×1080. All are Chromium viewport simulation, with touch emulation on the phone sizes.

## Not verified
- Real iPhone, iPad or Android devices.
- Safari and Firefox.
- Screen readers. ARIA was checked structurally only.
- Native zoom and 200% text.
- The real Google Fonts. They are blocked in the sandbox, so fallback fonts were rendered.
- Parent and child acceptance.
