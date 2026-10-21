# PP-003 test results

## Runs

| Run | Commit | check-content | readability | check-writing | guard.py (browser) |
|---|---|---|---|---|---|
| Baseline (`main`, v2.1.0) | 66e536b | PASS: 0 failures, 9 warnings | PASS: every passage at FK 4.5 or below | not run | **63 passed, 0 failed** |
| Final (`pp-003-fixes`) | 44482e3 | PASS: 0 failures, 8 warnings | PASS: every passage at FK 4.5 or below | 0 failures, 0 warnings | **95 passed, 0 failed** |

The commits after 44482e3 change only files under `docs/audits/`.

**How to reproduce**, from the repo root:
1. Start the local server: `node verification/serve.js . 8350`
2. `node verification/check-content.js --all`
3. `python3 verification/readability.py`
4. `node verification/check-writing.js`
5. `python3 verification/guard.py http://localhost:8350/` (headless Chromium through Playwright; about 20–30 minutes)

The 8 remaining check-content warnings are clue-wording notes on items no PP-003 change touched. Each is either a clue on a check item, which the child sees only after turning the check in, or one already judged not to be a giveaway.

**Independent runs.** The fix agents and reviewers ran the full guard on their own servers:
- mastery: 81/81
- visuals: 81/81
- ux: 89/89
- reviewer E: 89/89
- final: 95/95

## New automated checks added in PP-003

### check-content.js
- Every figure file exists. Alt text has at least 5 words. SVGs contain no script or external link. Label text is at least 14 px at phone width (warning). `**bold**` markup is balanced.
- Every catalog key resolves to a lesson or task. There are no duplicate catalog keys.
- Every lesson code exists in standards.js.
- GUM Master/Reinforce rows are tested in writing only, matching the blueprint.
- No legacy `status` field remains.
- A blueprint table: every expectation the blueprint lists is present, with a consistent tested flag.
- Foundations rows are classroom-only and Practices rows are embedded.
- Every standard on the test has a lesson with practice and check items, so the meta description stays true.

### guard.py

| Section | What it covers |
|---|---|
| §11 (11.1–11.18) | Opening a lesson writes nothing; the hint loophole is closed; the new evidence fields; a 2.1 record loads intact; "Review suggested"; the answers-seen flag; the grown-up check label; fluency home-practice labels and observations; no leftover "mastered" wording; the not-a-Milestones-score lines; cursive word spacing |
| §12 | Regression tests for UX fixes D1 (heading visible after Next at 390 and 1366), D4, D5, D7, D8 and D9. On the old code these fail 0/9; on the fixed code they pass 9/9 |
| §13 | Fluency result visible and announced once; missed words expose `aria-pressed`; practice and try sets can never record a pass; figure alt text and SVG titles do not list what is absent; `bestMax`; review only after a dated pass; focus and wording fixes |

## Content totals

The same script was run on both commits: `scratchpad/inventory/quick.js`, run from the repo root.

| | Baseline | Final |
|---|---|---|
| Standards entries | 147 | 147 |
| On the test | 69 | 69 |
| Lessons | 99 | 99 |
| Practice Together items | 289 | 293 |
| Try It Yourself items | 212 | 218 |
| Skill-check items (points) | 478 (647) | 484 (653) |
| Mixed and practice-test sets: items (points) | 147 (198) | 147 (202) |
| Writing tasks | 2 | 2 |
| Figures | 0 | 16 |

Every skill check has 4 to 6 items; reviewer E confirmed this. Practice Test 1 has 24 items and 31 points. No "choose two" item is worth 1 point.

## Limits of this evidence (please read)
- **The checks prove structure, not learning.** Schema checks and simulated browser tests do not establish that a child learns from a lesson. Only real use can show that.
- **Every browser test ran in headless Chromium.** None used a real iPhone, Safari or Android, a real on-screen keyboard, the browser's real print dialog, browser zoom, forced colours, or reduced motion. Google Fonts were blocked in the sandbox, so fallback fonts were used.
- **No real screen reader was used.** The announcement fixes (RD-6, RD-7, RD-11) were checked from the ARIA and DOM only.
- **The fluency timer ran on a fake clock.**
- **Facts were checked from reviewer knowledge.** Word-root meanings, animal facts and the Georgia map were checked from reviewer knowledge plus a few web sources. Two etymology sites refused automated fetches.
- **The cold-solves can't be fully blind to answer position.** The correct choice is stored first in the data; the site shuffles choices on screen. Reviewer C noted this.
