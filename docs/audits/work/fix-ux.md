# PP-003 fix log: ux (UX and functional defects D1-D17)

Agent: ux. Worktree: /home/claude/pp-fix. Port: 8456 (server stopped by PID afterwards).
Date: 2026-10-20. Source of the defects: `docs/audits/PP-003-UX-FUNCTIONAL-AUDIT.md` (Phase G).
No lesson, passage or item text was changed. The one data edit is the point value of R-POE-01-q8, which the lead assigned (X3).

**Evidence:** everything is in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/uxfix/`. It is outside the repo.
- **Scripts:**
  - `d1.py`: every step transition.
  - `rest.py`: D2-D17.
  - `flows.py`: navigation regressions.
  - `g12.py`: guard section 12 on its own.
- **Logs:**
  - `d1-before.log.txt` and `d1-after.log.txt`.
  - `rest-before.log.txt` and `rest-after.log.txt`.
  - `g12-baseline.log.txt`: the new guard section 12 run against the unfixed baseline in /home/claude/peach-prep. 0 of 9 pass there, so every new check catches its defect.
  - `guard-full.log.txt`.
- **Screenshots and PDFs:** named `*-before.png`, `*-after.png` and `d14-*.pdf`.

**Gates after all changes:**
- `node verification/check-content.js --all` gives PASS (0 failures, 8 warnings). The 8 warnings are the same clue-word warnings as before; none are mine.
- `python3 verification/readability.py` exits 0.
- `node verification/check-writing.js` gives 0 failures and 0 warnings.
- `node --check` passes on every edited JS file.
- The full `python3 verification/guard.py http://localhost:8456/` result is at the end of this file.

---

## D1 (High). "Next: …" and the step tabs landed below the step heading
- **Deficiency:**
  - `go()` measured `#sk-steps`, which is `position:sticky; top:0`. Once stuck, its rect top is 0, so the page moved only 4 px.
  - Before the fix, 154 of 312 transitions left the step heading above the screen. The 312 cover every Next and every tab-to-tab change, from the bottom of the step, on 4 lessons at 320, 390, 768 and 1366.
  - Example: at 320, 3.T.T.1.b Learn It, then "Next: Watch Me" put the heading at y=−1845.
- **Why it matters:** a child pressing Next on a phone starts reading the new step in the middle, usually at its last example.
- **Files:**
  - `js/skills.js`: new `landOnStep()`, called from `go()`. It measures from `#sk-panel`, which never sticks, and subtracts the sticky bar's height plus 8 px: `top = panel.top + scrollY − barHeight − 8`. It scrolls whenever `scrollY > top`.
  - `css/styles.css`: `.sk-panel{scroll-margin-top:84px}`.
- **Verification:** `d1.py` was run on 3.T.T.1.b (reading quiz), a GUM end-punctuation lesson (grammar quiz), 3.F.F.1.b (hands-on fluency) and 3.F.H.4.b (hands-on trace). It covers every Next button and every ordered tab pair, at 320/390/768/1366.
  - **After:** 0 of 312 not visible. All 312 have the heading top within 40 px below the bar bottom.
  - **Example after:** 320, Learn It, Next: heading top 81, bar bottom 73.
  - **Screenshots:** `d1-{before,after}-next-watch-{w}.png` and `d1-{before,after}-tab-test-{w}.png`.
  - **Guard 12.1** checks this at 390 and 1366 for every Next on 3.T.T.1.b and 3.F.F.1.b, plus one tab press.
- **Limits:** Chromium emulation only. Real iOS Safari sticky behaviour was not tested.

## D2 (Medium). Category-card jump hid the heading under the sticky search bar
- **Deficiency:** at 768 and 1366 the category title landed at y=14, under the sticky `.skill-tools` (0-96). At 390 "Writing" landed at −10.
- **Files:**
  - `js/skills.js` (category card click): scrolls to the section top minus the sticky tools height (only when the bar is sticky) minus 12 px. It uses smooth scrolling unless `prefers-reduced-motion` is set.
  - `css/styles.css`: fallback `.cat-sec{scroll-margin-top:110px}` at ≥640 px.
- **Verification:** after the fix the title top is 110 at 768 and 1366 (bar bottom 96), and 14 at 390 for both Grammar and Writing (`rest-after.log.txt`, `d2-grammar-{w}-after.png`).

## D3 (Medium). Phone search results started off-screen
- **Deficiency:** after typing "comma", the first result was at y=708 on a 640 px screen (320).
- **Files:** `js/skills.js` `init()`, search input. Below 640 px, when the query is not empty, the page scrolls so the search box is 8 px from the top. Wider screens are unchanged, because the bar is sticky there.
- **Verification:**
  - 320: first result now at y=420-499 of 640, with the search box at y=8.
  - 390: first result at 342.
  - Screenshots: `d3-search-{320,390}-{before,after}.png`.
- **Not done:** the audit's other option was to put the filter row behind a "Filters" toggle. With the box scrolled to the top, the results are already on screen without a keyboard showing. A real on-screen keyboard was not tested.

## D4 (Medium). Dead Back press after the in-page Back on sets, essays and sections
- **Deficiency:** the in-page Back replaced the activity's history entry with a copy of the page before it.
  - **Before:** Mixed → Reading → set → ← Back gave `#reading`, then phone Back gave `#reading` again.
  - **Before:** the section's own ← Back gave `#mixed`, then phone Back gave `#mixed` again.
  - **Before:** essay from Home → ← Back gave Home, then phone Back gave Home again.
- **Files:** `js/app.js`.
  - `setHash()` now pushes `{ppFrom: <address it was opened from>}` with every new entry.
    - A replace keeps `ppFrom` (the entry before has not changed).
    - Routing keeps the entry's state as it is.
  - New `stepBackTo(hash)`: when `history.state.ppFrom` equals the return address, it calls `history.back()` instead of replacing.
  - `back()` now uses it for every kind of return target (section, home, clues, habits, parents, skill). It replaces the old skill-only `pushed` flag.
  - `openMixed()` (the section's Back) and `goHome()` from an activity also use it.
  - `route()` takes a `pendingReturn`, so a stepped-back parent guide keeps its open standards and scroll position, and focus goes to the page title.
  - **Reload case:** after a reload or a direct address, `returnTo` is null (new `booted` flag). If `ppFrom` is known, Back steps back to it. Otherwise it falls back to the skill's matching step (practice, try or test) or the section.
- **Verification:** after the fix (`rest-after.log.txt`, `flows.py`):
  - set: `#reading`, then phone Back gives `#mixed`.
  - section Back: `#mixed`, then phone Back gives the previous page.
  - essay: Home, then phone Back gives the page before Home.
  - **Regressions checked:**
    - skill practice ← Back still lands on the skill step, with one Back.
    - Parent guide → set → Back returns to "Every standard" (guard 4.5).
    - A test in progress still asks "Leave this test?". Cancel stays, OK returns to the Test step.
    - The Home button from a skill-opened player replaces as before.
    - A directly loaded `#play/R-LIT-01/practice` Back goes to `#reading`. A directly loaded `#play/SK:…:y/try` Back goes to the skill's Try step.
  - Guard 12.2 covers all three dead presses.

## D5 (Medium). Forward or reload restarted a finished practice or test at question 1
- **Deficiency:**
  - Done screen → Back → Forward restarted the practice at Q1, stage "work", pos 0. Reload on the done screen did the same.
  - Results → Back → Forward opened a fresh test. Reload on the results did the same.
- **Files:**
  - `js/app.js`: new `PP_APP.markDone(info)`. It merges `ppDone: {set, mode, …}` into the current `#play` history entry's state. This is history state only; localStorage is not touched. `route()` sends a `#play` entry with `ppDone` for the same set to `PP_PLAYER.finished()` instead of `start()`.
  - `js/engine/player.js`:
    - `practiceDone()` and `submit()` call `markDone`. The test stores `got/max` for the message.
    - New `finished()` shows the new `#stage-again` panel:
      - title "You already finished this practice" or "You already turned in this test";
      - for a test, "Your score was 7 of 7 points";
      - buttons "Take the test again" / "Start the practice again" and "Back to the skill" / "Back to the list".
    - Start again replaces the entry with `{ppFrom}` only, which drops `ppDone`.
    - `showStage` knows "again".
  - `index.html`: the `#stage-again` panel.
- **Stored progress:** unchanged. The finished screen records nothing. Guard 12.3 compares `pp.progress.v1` before and after the Forward/reload, for both practice and test, and they are identical.
- **Verification:** after the fix:
  - Back → Forward on done gives stage "again".
  - Reload on done gives "again".
  - Back → Forward on results gives "again".
  - Reload on results gives "again", with "Your score was 7 of 7 points".
  - Start again gives stage "work", pos 0.
  - Screenshots: `d5-forward-{practice,test}-1366-{before,after}.png`.
  - Guard 12.3.
- **Limits:**
  - The review ("See my answers") is not restored after a reload, because answers are not stored. The screen says a new test starts at question 1.
  - An unfinished practice still restarts at Q1 on Forward or reload. That is unchanged and not a "finished" case.

## D6 (Medium). Writing card and on-test totals
- **Re-check:** the ring/list part was already fixed by another agent. The ring is "0/10" and the card says "· +2 essays" (aria-label: "Plus 2 essay tasks, scored by a grown-up"). The only remaining mismatch was "0 of 74" on the progress line against "76 skills match." on the "On the test" filter.
- **Files:** `js/skills.js`.
  - `buildList()`: the count line counts essays apart, as "74 skills and 2 essay tasks match."
  - `buildProgress()`: adds "The 2 essay tasks are scored by a grown-up, so they are not counted here."
- **Verification:** `rest-after.log.txt` D6 line. The filter now reads "74 skills and 2 essay tasks match.", which agrees with "0 of 74" plus the sentence about the essays.

## D7 (Medium). Focus lost after a correct Check
- **Deficiency:** `check()` hid the focused Check button, so `document.activeElement` became BODY.
- **File:** `js/engine/player.js` `check()`. When the item is solved, focus moves to `#q-next`. `#q-feedback` is a polite live region, so "That's right!" is still announced.
- **Related:** in `help()`, when the third hint disables the focused Help me button, focus moves to that hint (tabindex −1) instead of BODY.
- **Verification:** before, BODY. After, `q-next`, and a second Enter moves to question 2 (guard 12.4).

## D8 (Medium). Damaged essay storage broke the essay screen
- **Deficiency:**
  - `{"plan":null,…}` threw "Cannot read properties of null (reading 'opinion')".
  - `{"checks":{…}}` threw "data.checks.indexOf is not a function".
  - In both cases the tabs stopped working.
- **Files:**
  - `js/writing.js` `load()`: keeps only fields of the right type:
    - `plan` and `scores` must be plain objects (string plan values, finite number scores);
    - `draft` must be a string;
    - `checks` must be an array of integers.
    - A value that is not an object (for example `"hello"` or `[1,2]`) loads as empty.
  - The same guard went on the skill writing activity in `js/skills.js` `renderWrite()`, and on the progress loader (`load()`). A non-object progress value now loads as `{}` instead of throwing on the first save. Valid saved data loads exactly as before.
- **Verification:** before, two page errors. After, 0 errors for null fields, wrong types, `"hello"` and `[1,2]`, and every essay tab works. Typing in the plan saves (guard 12.5).

## D9 (Medium). The skip link did not move focus, and it changed the address
- **Deficiency:**
  - After Enter, `activeElement` was BODY.
  - The link also pushed `#main`. On a skill page that address is not a page, so a Back or a reload would show Home.
- **File:** `js/app.js` `init()`. Clicking `.skip` now runs `preventDefault()` and focuses the visible screen's `h1`; every screen's h1 already has `tabindex="-1"`. The `#main` address is treated as Home without a "not found" note (D16).
- **Verification:**
  - Before: BODY, hash `#main`.
  - After: from Home, focus is `H1#home-title` and the hash is "". From the skill page, focus is `H1#sk-title` and the hash stays `#skill/3.T.T.1.b/learn` (guard 12.6).

## D10 (Low). Fluency prompt and result off-screen on phones
- **Files:**
  - `js/skills.js` `renderFluency()`:
    - A new `.flu-prompt` ("Grown-up: tap the last word read.") sits inside the sticky clock row and shows at time-up. The row stays sticky while a word is being picked (`is-picking`).
    - At time-up, focus goes to the prompt, not word 1.
    - After the last word is tapped, the result is scrolled into view and focused. The "too short" message is handled the same way.
  - `css/styles.css`: `.flu-prompt`, and the sticky rule now also applies to `.is-picking`.
- **Verification:**
  - Before, at 320: the prompt was at y=−1552, the result at 982 of 640, and focus was on word 1 ("The").
  - After, at 320: the prompt is at y=54-105 and focused, and the result is at y=0 and focused. 390 behaves the same.
  - Screenshots: `d10-{timeup,result}-{320,390}-{before,after}.png`.
  - Guard 9.12 and 11.12-11.14 still pass (fluency maths unchanged).
- **Observation, not changed:** while reading, the sticky clock row and the sticky step bar both sit at `top:0`. The clock row covers the step tabs, and their edges show beside it (`flu-timeup-320-desktopctx.png`). This was the same before the fix.

## D11 (Low). "Not quite… press Help me" stayed after Help
- **File:** `js/engine/player.js` `help()` clears a "try" feedback box after adding the hint.
- **Verification:** before, "Not quiteTry again, or press Help me for a hint." After, null. Guard 3.1-3.3 (every item) still pass.

## D12 (Low). Contrast
- **Files:** `css/styles.css`.
  - `--right` changed from #1E8A52 to #17703F. "On the test" badges go from 3.93 to 5.51.
  - `--peach-deep` changed from #B4531F to #A0471A. Peach labels on the peach tint go from 4.41 to 5.43, `.ex-label` on the sky tint from 4.49 to 5.52, and white text on the up-next button is 6.16.
  - `.cat-writing --c` set to the same #A0471A.
  - `.flu-w.is-past` changed from #A99C8C to #7A6E60 (2.69 to 4.97). It is still lighter than body text, so the de-emphasis remains.
- **Verification:** the audit's contrast scan on the parent guide (all standards open), skill Learn It, Watch Me, essay, player and Home finds 0 non-disabled text below AA (`rest-after.log.txt` has no D12 lines; before, 7 kinds).
- **Not changed:**
  - `.trace-row` grey (#9AA8BC, 2.41) is the deliberate "trace over me" guide on a tracing sheet. The letters are a drawing target, not text to read.
  - `.btn:disabled` is exempt under WCAG 1.4.3.

## D13 (Low). Small targets
- **Files:** `css/styles.css`.
  - `.flu-w`: padding 6 px on each side and `min-width:24px`.
  - `.std-practice a` (parent-guide external links): `inline-flex` with `min-height:44px`.
  - `.write-checklist li`: `min-height:44px`. The label fills the row (`flex:1; min-height:44px`).
  - `.clue-toggle` and `.five-min summary` raised from 40 to 44 px. `.skip` gets `min-height:44px`.
- **Verification:** the audit's target scan at 390 and 1366 on the fluency practice, parent standards (all open), the 3.T.C.1.c try writing activity, 3.T.T.1.b (details open) and the 3.T.T.1.b practice player. Before: skip 42, flu-w 14 px wide, parent links 20, checkbox rows 26, clue toggle 40, summary 40. After: none listed.

## D14 (Low). Print leftovers
- **File:** `css/styles.css` `@media print`.
  - Hides `#tabs, .wtabs, .ptabs, .panel-actions, .q-controls, .clue-toggle, .skip, .notfound`.
  - The player prints both the passage pane and the question pane at every width, and the passage pane loses its sticky/scroll box.
- **Verification:**
  - Print media emulated with `page.pdf`.
  - Before, at 1366: q-controls printed. At 390: only the passage printed, plus the tabs. The essay printed `.wtabs` and the parent guide printed `.ptabs`.
  - After: tabs and controls are hidden. At 390 both the passage and the question print.
  - PDFs: `d14-*-{before,after}.pdf`. Page 1 of the 390 player PDF was rendered to `p390-1.png`.
- **Not changed:** the essay still prints only the active step panel (what is on screen). Real browser print dialogs were not tested.

## D15 (Low). Tab semantics
- **Files:**
  - `js/pp.js`: new `PP.tablist(list)` and `PP.syncTabs(list)`. They give a roving tabindex (only the selected tab is a Tab stop) and Left/Right/Home/End keys that click and focus a tab. A MutationObserver keeps the tabindex in step with `aria-selected`.
  - `index.html`:
    - `aria-controls` on every tab.
    - `role="tabpanel"` and `aria-labelledby` on `#sk-panel`, `#passage-pane`, `#item-pane` (new id) and the essay panels.
    - `aria-labelledby` on the parent panels.
    - Ids on the essay and parent tabs.
  - `js/skills.js`: step tabs get `id="sk-tab-<step>"` and `aria-controls="sk-panel"`. The panel's `aria-labelledby` follows the step. A pending (no-lesson) page drops the tabpanel role.
  - `js/engine/player.js`, `js/writing.js`, `js/parents.js`: call `PP.tablist`.
- **Verification:**
  - Before, for all four lists: no `aria-controls`, every tab a Tab stop, ArrowRight did nothing.
  - After: 1 Tab stop, every `aria-controls` points at a `role=tabpanel`, ArrowRight selects and focuses the next tab. On the step tabs, End goes to Test, and Tab then reaches "Take the test".
  - Guard 12.7.
- **Limits:**
  - Not tested with a real screen reader.
  - At ≥980 px the player tabs are hidden and both panes show. The panes keep `role=tabpanel`, labelled by the hidden tabs.

## D16 (Low). Bad routes
- **Deficiency:** `#skill/NOPE`, `#play/NOPE/test`, `#write/NOPE`, `#foo`, `#skill/`, `#play/` and `#%E0%A4%A` showed Home and kept the bad address.
- **Files:**
  - `js/app.js` `route()`: when nothing matches, it shows Home, replaces the address with the bare page and shows "That page wasn't found, so here is the home page." (`#home-notfound`, `role=status`). `show()` hides the note on the next screen change.
  - The skill branch no longer calls `decodeURIComponent` unguarded.
  - `#main` (the skip link's target) goes Home without the note.
  - `index.html` (the note) and `css/styles.css` (`.notfound`).
- **Verification:** all 7 bad addresses now give screen home, hash "" and the note shown. No page errors. Guard 12.8.

## D17 (Low). Leftover nits
- **320 placeholder:**
  - The placeholder is now "Find a skill: pronoun, B3, 3.T.T.1".
  - The search box padding is 14 px at ≤360 px.
  - Before, it needed 295 px and had 250. After the text change alone it needed 252 against 250; the padding change closes that gap.
  - The audit's truncation scan (`ph.py`) now reports that the placeholder fits at both 320 and 390.
- **Grown-up check-off:**
  - Once checked, the "Mark as checked by a grown-up" button is hidden and the checkboxes are disabled. The "✓ Checked by a grown-up" line stays.
  - Before: the button stayed visible but disabled, and the boxes stayed editable. After: the button is hidden and the boxes are disabled.
  - Guards 9.13 and 11.11 still pass.
- **Second trace button indented at ≤390:** `.go-card .btn + .btn{margin-left:8px}` is replaced by `.go-card.trace .btn{margin:4px 8px 4px 0}`. At 320 both buttons now start at x=33 (before: 33 and 41).
- **Skill results after a pass:**
  - "Back to the skill" now comes first, as the primary button, and "Practice this set" becomes a soft button.
  - The DOM order changes too, so keyboard order matches.
  - After a fail, the old order is kept.
- **Not changed:**
  - **Trace letter size vs line size:** matching the guide font's own ruling to the blank lines needs the font's metrics measured and the sheet redesigned. That is a design task, not a quick fix.
  - **Pass mark ceil(80%):** the page states the number. SPEC wording updated (X2).
  - **Parent-guide tab clicks push history:** the audit called this defensible, and it is left as is.

---

## X1. Dead "Coming soon" fallback in `js/app.js`
- All four sections have content, so the "Coming soon" card branch and the `#section-soon` panel could never show.
- **Removed:**
  - the branch in `buildHome()`. A section with nothing in it is now simply not shown.
  - the `#section-soon` code in `openSection()`.
  - the `#section-soon` element in `index.html`.
  - the `.is-soon`, `.soon-label` and `.soon-panel` CSS.
- Guard 1.1b still finds 4 section cards.

## X2. `docs/SPEC.md` §8 (line 284)
- "Mastered = at least 80% of the test's points." is now "Passed the skill check = at least ceil(80%) of the check's points, stored as `mastered`." That matches `passMark()` in `js/skills.js`.

## X3. R-POE-01-q8 point value
- **Deficiency:** a choose-two `ms` item worth 1 point. Every other choose-two item on the site is worth 2: R-LIT-01-q8, R-LIT-02-q4, the PT-1, R-INF-02, W-REV-01 and W-REV-02 ones. The engine's partial credit (1 of 2 for half the right answers and at most one wrong) only applies when `points === 2`.
- **File:** `js/data/sets/R-POE-01.js`. `points: 1` changed to `points: 2` on R-POE-01-q8. The stem, choices, clue and why are unchanged.
- **Set total:** R-POE-01 goes from 10 to 11 points (8 items).
- **Guard expectations:** checks 2.1-2.4 compute each item's points from the data, so no constant changed. The section card's "N questions · N points" line is computed too.
- **Not mine to update:** `docs/audits/PP-003-ASSESSMENT-ALIGNMENT.md` line 104 still lists R-POE-01 at 10 points and a 6/2 one-point/two-point split. That is an audit record, so I left it. The lead should note it if the table is meant to be current.

## Guard section 12 (new, `verification/guard.py`)
| Check | What it covers |
|---|---|
| 12.1 | D1. At 390 (mobile) and 1366, every Next on 3.T.T.1.b and 3.F.F.1.b, and one tab press from the bottom of Learn It. The heading is visible and no more than 40 px below the bar (unless the page is too short to scroll). |
| 12.2 | D4. Set → ← Back → phone Back; section ← Back → phone Back; essay from Home → ← Back → phone Back. None is a dead press. |
| 12.3 | D5. Forward and reload on a finished practice, and reload on test results, show the "again" stage. Start again starts at question 1. Progress is byte-identical. |
| 12.4 | D7. Focus is on Next after a correct Check, and Enter moves on. |
| 12.5 | D8. Four kinds of damaged essay storage: no errors, all tabs work, the plan saves. |
| 12.6 | D9. Skip-link focus and the address, on Home and on a skill. |
| 12.7 | D15. Tab semantics and arrow keys on the step, essay and parent tabs. |
| 12.8 | D16. Bad routes. |

Against the unfixed baseline (/home/claude/peach-prep, served briefly on 8456), section 12 gives 0 passed and 9 failed (`g12-baseline.log.txt`). Against this worktree, it gives 9 passed and 0 failed.

## Full guard run
(see below)
