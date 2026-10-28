# Test results for the home redesign

**Final tested commit:** `182389d` on branch `design/home-start-experience`. Commits after it change only files under `docs/design/home-2026-10-22/`.
**Baseline:** `main` 9a5b297.

Two people ran every result below on `182389d` itself: the implementer (04, "Guard entry fix and first-visit suite") and the independent reviewer (06, "Final re-check (182389d)"). Each used their own server. No earlier run is reused. Results for the earlier candidate `595ef01` are in the "Final re-review (595ef01)" section of 06.

## Suites

| Suite | Implementer | Independent reviewer |
|---|---|---|
| `node verification/check-content.js --all` | 0 failures, 6 warnings (same as `main`) | 0 failures, 6 warnings |
| `node verification/check-writing.js` | 0 / 0 | 0 / 0 |
| `node verification/check-instructional-copy.js` | 28 passed | 28 passed |
| `verification/path.py` (Learning Path) | 148 passed | 148 passed |
| `verification/path-a11y.py` + `path-contrast.js`, now with the browse home in three saved states | 36 runs, 0 violations, 0 contrast failures | 36 runs, 0 violations |
| `verification/path-headers.py` | 48 passed | 48 passed |
| `verification/skills-recovery.py` (UX-002, short writing) | 67 passed | 67 passed |
| `verification/writing-recovery.py` (UX-001) | 75 passed | 75 passed |
| `verification/guard.py`, run plainly with fresh storage and no launcher | 110 passed, exit 0 | 110 passed |
| `verification/first-visit.py` (new) | 124 passed | 124 passed |

## The guard timeout (owner's request)
- **What happened.** Run plainly, `guard.py` stopped at check 9.1, `fill("#skill-search")`, with a timeout.
- **Reproduced on both versions.** The independent reviewer reproduced it on `main` (line 241, exit 1) and on the candidate before the fix.
- **Cause.** The guard assumed the test entry. Since the Learning Path, a fresh visitor sees the choice screen, but guard assumes the browse home. This is not an app regression. Full investigation: `09-guard-entry-investigation.md`.
- **Fix, test side only.** `guard.py` now seeds `pp.path.v1 = {mode:'browse',introduced:true}` at entry, and only when that key is missing.
- **No assertion was changed.** Against `main`, all 109 `ok(` lines and all 110 check names are byte-identical. The only other change: on a crash, guard now prints the results it gathered so far.
- **The fix still catches real breakage.** With a deliberately broken pass label, guard reported 108 passed and 2 failed. With search broken, it crashed with exit 1 and printed its partial results.

## First visit, verified separately
`first-visit.py` never seeds a mode, and every scenario starts from empty storage. It covers:
- the choice screen at all seven viewports (no horizontal scroll, targets of at least 44px)
- loading state, keyboard order, Enter and Space
- blocked and full storage
- the welcome-back panel for families with saved work
- direct links on a first visit
- both start choices, which must save only what they should

The independent reviewer planted seven app breakages in scratch copies, and each one made the suite fail. The reviewer also judged three checks weaker than the rest:
- 3.3 proves only that a forced click on a disabled button does nothing.
- One clause of 8.15 is lenient.
- 4.11 to 4.14 lock in current routing behaviour (see 05, item 14).

## Other checks by the independent reviewer
- **State sweep:** 14 states at 7 viewports, 98 combinations, 0 issues. Storage is unchanged on load, contrast is no lower than 4.64:1, and axe reports 0 violations.
- **Behaviour checks:** 266 of 266 pass. They include "Opens at" claims against the step that actually opens, and mode switching with drafts (every key except `pp.path.v1` byte-identical).
- **Keyboard:** the focus ring measures 6.9 to 7.21:1, and every activation works.
- **Coverage ledger:** `07-coverage-ledger.csv`, with rows tagged `[182389d]`.

## Viewports
320×568, 390×844, 844×390, 768×1024, 1024×768, 1366×768 and 1920×1080. These are Chromium viewport simulations, with touch emulation at the phone sizes.

## Acceptance limits, not verified
- Real iPhone, iPad and Android devices.
- Safari and Firefox.
- Screen readers. ARIA was checked structurally only.
- Native zoom and 200% text.
- The real Google Fonts. They are blocked in the sandbox, so fallback fonts were rendered.
- Parent and child acceptance. **"A parent understands it in about twenty seconds" is a design goal. It has not been tested with any parent.**
