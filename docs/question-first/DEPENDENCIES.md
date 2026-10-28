# Dependencies and merge order (trial run 2026-10-27)

## Branch graph (verified with `git merge-base`)
- `origin/develop` = 66e536b (Peach Prep 2.1). It is far behind: the content branch is 349 commits ahead, `feature/question-first` 278.
- PR #5 homepage = `origin/design/home-start-experience`, tip 07d978f. That tip is an ancestor of BOTH `content/standards-practice` and `feature/question-first`, so merging PR #5 adds nothing that these two do not already carry. It can merge first (or not at all as a separate step) without conflict.
- `feature/question-first` branched from the content branch at 9eba382 and is 5 commits ahead of it there. The content branch has since moved 73 commits ahead (tip 05520cf at the trial).
- The question-first work reads lesson data only (no edits under `js/data/lessons/`) and edits no content file, so lessons authored on the content branch work with it unchanged.

## Recommended order
1. PR #5 homepage (already contained in the next two).
2. `content/standards-practice` (its own gate; it also fixes the two baseline test failures, see below).
3. `feature/question-first` merged or rebased on top, with the one resolution and one regeneration below. Reverse order should also work (the same guard.py hunks would conflict from the other side; not tested), but content first means the question-first merge result can be tested against the real content, which is the state that ships.

## The trial merge (scratch worktree only, nothing pushed)
Merged `origin/content/standards-practice` (05520cf) into `feature/question-first` (493cb50 plus the uncommitted leak work). Result: one conflicting file, no other textual conflicts.

| File | Result |
|---|---|
| `verification/guard.py` | CONFLICT, two hunks, both in section 14. Test 14.0 (form B outside the chain: the check that the last practice set leads to the check set) and test 14.3 (Try It Yourself leads to the form the site picks). Both branches independently fixed the same tests for core lessons. Resolution: take the content branch's version of both hunks (it computes `TRY14` and `PTS14` from the fixture lesson and starts the third core set directly; it also uses the lesson's real point total). Everything else in guard.py from this branch (Teach Me instead of the hint and Show me how buttons, tag test, 11.1, 8.1) merged automatically and is kept. |
| `verification/path.py`, `verification/review.py`, `verification/check-content.js`, `verification/versioning.py`, `js/data/accepted.js` | merged automatically; no manual edit. The brief named `js/skills.js` recordTest/bestText and `js/data/accepted.js` as risk areas: `js/skills.js` is not changed by the content branch at all, and `accepted.js` changed only its list. |
| `verification/teach-leaks.json` | not a conflict, but must be regenerated after the merge: `node verification/teach-leaks.js --write`. The content branch brings 77 core lessons (1155 items); 509 items leak (404 before). `qf.py` Q2c fails until the list is regenerated; that is the intended behaviour. |

## Suites in the merged scratch tree (frozen copy)
| Suite | Result |
|---|---|
| check-content --all | PASS, 0 failures, 83 warnings |
| check-writing / instructional-copy | 0 failures / 28 passed |
| path.py | 160 passed, 0 failed (the 9 baseline failures are fixed by the content branch) |
| versioning.py | 72 passed, 0 failed (baseline N.1 fixed by the content branch) |
| path-headers, first-visit, practice-own, review | 48/48, 124/124, 74/74, 29/29 |
| qf.py | 62 passed, 0 failed (with the regenerated allowlist) |
| path-a11y | 12 runs, 0 problems |
| skills-recovery, writing-recovery | exit 0 |
| guard.py | 121 passed, 0 failed |

## What else depends on what
- Question-first needs from content: nothing beyond the existing lesson shape (`core`, `similar`, `addons`, `hints`, `how`, `why`).
- Content needs from question-first: nothing. Lessons that are converted but not yet independently accepted still open in the new flow; the review status is independent of the engine.
- `verification/teach-leaks.json` and `docs/question-first/COVERAGE-LEDGER.md` are per content snapshot: regenerate both after any content merge (`node verification/teach-leaks.js --write`, `node verification/coverage-ledger.js --ids`).
