# PP-003 fix log: final (review-D and review-E follow-ups)

- **Agent:** final. Date: 2026-10-20. Worktree /home/claude/pp-fix. Port 8458 (`node verification/serve.js . 8458`, stopped by PID at the end).
- **Inputs:** docs/audits/work/review-D.md (RD-*) and review-E.md (RE-*).
- **Files changed:** js/skills.js, js/engine/player.js, js/app.js, js/parents.js, index.html, css/styles.css, js/data/lessons/T-SS.js, js/data/lessons/T-C.js, js/data/lessons/L-V3.js, js/data/sets/L-VOC-01.js, assets/figures/v3a-heron.svg, assets/figures/v3a-tree-ladder.svg, assets/figures/tc1b-beaver-tree.svg, assets/figures/ss1a-tortoise-burrow.svg, verification/guard.py (9.5 label, new section 13).
- **Not touched:** docs/audits/*.csv and docs/audits/PP-003-*.md (lead's files).
- **Evidence (scratch, not in the repo):** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/final/`: `repro.py`, `repro-before.txt`, `repro-after.txt`, `misc.py`, `heron-compare.png` (before | after), `figs3.png`, `row-grownup-320.png`, `guard.log`.
- **Requirement sources.** The UX items are accessibility requirements, not GaDOE ones. WCAG 2.2 success criteria are quoted by number from review-D. I tried to fetch https://www.w3.org/TR/WCAG22/ on 2026-10-20 and the request was not approved in time, so the SC wording is **UNVERIFIED by me today**. The content items rely on the site's own rules in docs/SPEC.md (§5 points, §5e figures).

Every entry below was reproduced in Chromium before the fix (`repro-before.txt`) and re-measured after it (`repro-after.txt`), unless the entry says otherwise.

---

## RD-1 (MUST): fluency result hidden under the sticky step bar
- **Deficiency:** after the last word is tapped, `.flu-result` was scrolled to y=0 behind `#sk-steps` and focused there.
- **Reproduced:** result top/bottom vs. bar bottom: 320 → 0–102 vs 73; 390 → 0–75 vs 73; 768 → 0–48 vs 64; 1366 → 0–48 vs 64. Focus was on `.flu-result` each time.
- **Why it matters:** this is the one number the grown-up came for. A focused element hidden by author content fails WCAG 2.2 SC 2.4.11, Focus Not Obscured (Minimum) (UNVERIFIED today, see above).
- **Fix (js/skills.js `finish()`):** replaced `big.scrollIntoView({block:"start"})` with a scroll to `resultTop - stickyBarHeight - 8`. The bar height is measured only when the bar is `position: sticky`. Focus still moves to the result with `preventScroll`.
- **Verified:** result at 81–183 (320), 81–156 (390), 72–120 (768 and 1366), always below the bar bottom (73 / 64), with focus on `.flu-result`. Guard **13.1** covers all four widths.
- **Limits:** Chromium emulation only. iOS Safari sticky behaviour was not tested.

## RD-2: focus fell to `<body>` after "Mark as checked by a grown-up"
- **Reproduced:** focus = BODY after Enter on `#sk-grownup-check` (3.F.H.4.a).
- **Fix (js/skills.js `renderCheck`):** after `save(); render();`, the new `.go-done` line ("✓ Checked by a grown-up on …") gets `tabIndex=-1` and focus.
- **Verified:** focus = `P.go-done`. Guard **13.6**.

## RD-3: focus fell to `<body>` after the third "Show me how"
- **Reproduced:** focus = BODY after the third press (the button disables itself).
- **Fix (js/engine/player.js `buildReview`):** on step 3, if the button had focus, the revealed "The answer: …" line gets `tabIndex=-1` and focus.
- **Verified:** focus = `P.review-answer`, which is visible. Guard **13.6**.

## RD-4: a practice or try set could run as a scored check and store a pass
- **Reproduced:** `#play/SK:3.T.C.1.b:p/test` showed the "Test" tag. Four correct answers stored `{"mastered":true,"best":{"got":4,"max":4},"passBy":"test",…}`.
- **Why it matters:** only the lesson's check (`:t`) is a skill check. A pass from 4 practice items is a false record.
- **Fix (js/engine/player.js):** new `skillMode(set, mode)`, used in both `start()` and `finished()`:
  - `:t` always runs as a test (unchanged).
  - `:p` or `:y` opened with mode `test` runs as practice (`:p`) or try (`:y`).
  - The address is rewritten to `/practice` or `/try`.
  - Practice never calls `recordTest`, so no pass, `tries` or `best` can be stored.
- **Verified:** mode = practice, tag "Practice", hash `#play/SK:3.T.C.1.b:p/practice`, progress `null` after finishing. Guard **13.2** runs both `:p/test` and `:y/test` to the end and asserts no `mastered`, `tries` or `best`.
- **Guard knock-on:** the first full guard run failed in section 4. It ran every set, including the `:p` and `:y` sets, in test mode, which is exactly the path this fix closes. Changes:
  - Section 4 now runs only the sets that can be tests: all non-skill sets plus every `:t`.
  - 4.2 and 4.3 use the first test-capable set (`s0t`). Before, they used `PP.sets[0]`, which is `SK:3.T.C.1.a:p`.
  - Practice-item scoring is still covered by section 3.
- **Limits:** `afterTest` itself still records whatever set reaches it. No route reaches it with a non-`:t` set now.

## RD-5: search results off-screen at 768 and 1366
- **Reproduced:** 768: box y=746, first result 1003 of 1024. 1366: box 659, first result 890 of 900.
- **Fix (js/skills.js `init`):**
  - Phones (<640 px) are unchanged: the box is scrolled to y=8.
  - From 640 px, when the sticky `.skill-tools` bar sits below 40% of the screen (or above the top), the page scrolls so that the bar reaches the top.
  - Once the bar is stuck at the top, later keystrokes do not move the page.
- **Verified:** 320: first result 420/640; 390: 342/844 (both unchanged). 768: box 24, first result 281/1024. 1366: box 125, first result 356/900. 1366 cannot scroll further on a short filtered list; the result is still well in view.
- **Limits:** no real on-screen keyboard was tested.

## RD-6: feedback live region shown and filled in the same tick
- **Reproduced (by code reading, as reviewer D did):** `setFeedback()` un-hid `#q-feedback` (aria-live) and filled it in one tick. On a correct Check, focus also moved to `#q-next` in the same tick.
- **Fix:**
  - index.html: removed `aria-live` from `#q-feedback`, which is now the visual box only.
  - index.html: added `<p id="q-say" class="sr" role="status" aria-live="polite">`. It is always rendered and visually hidden with the existing `.sr` class.
  - player.js `setFeedback()`: clears `#q-say`, then fills it 150 ms later with the label and text. That is after the box appears and after the focus move to Next. Re-rendering the same feedback object does not re-announce it.
- **Verified (DOM):**
  - Wrong Check: `#q-say` is "" at once, then "Not quite Try again, or press Help me for a hint." after 250 ms.
  - Right Check: "" at once, then "That's right! The answer is …" after 250 ms, with focus on `q-next`.
  - Next clears it.
- **Limits:** no real screen reader (VoiceOver, NVDA, TalkBack) was used.

## RD-7: fluency result announced long and twice
- **Reproduced:** `.flu-out` had `aria-live="polite"` and received about 90 words of norms plus the whole observation form. Focus also moved to the headline.
- **Fix:** removed `aria-live` from `.flu-out`. The announcement now comes only from the focus move to `.flu-result`, the one-line headline ("N words correct per minute · N% accuracy (N missed of N)"). The "too short" note is also focused, so it is still announced.
- **Verified:** `.flu-out` has no `aria-live`. Guard **13.1** asserts this.

## RD-8: missed words had no programmatic state
- **Reproduced:** a tapped word had `aria-pressed` null and no label.
- **Fix:** each `.flu-w` button starts with `aria-pressed="false"`. `tap()` sets it to true or false along with `is-miss`, so a second tap (a self-correction) clears it.
- **Verified:** a tapped word has `aria-pressed="true"`. Guard **13.1** checks that every word carries the attribute.

## RD-9: figure alt text did the elimination work
- **Deficiency and official rule:** SPEC §5e requires alt text that is equivalent to the image. Three item alts listed what is absent, or paraphrased the key.
- **Changes:**
  - **SK-SS1a-T4** (T-SS.js, test): removed "There are no people, fires, trees or roads in the picture." Removed "dug" (the key's word). It now reads: "A drawing of a gopher tortoise sitting on sandy ground, right in front of the dark, round opening of a tunnel in a mound of sand."
  - **SK-TC1b-P8** (T-C.js): removed "There is no water in the picture."
  - **SK-V3a-P6** (L-V3.js): "rests on the thick wooden part of the tree, between the roots and the branches" (a paraphrase of the key "the thick main stem of a tree") is now "The top of the ladder touches the tree a little below its lowest branch."
  - The SVG `<title>`s, which show if a file is opened directly, had the same problem. They are fixed in tc1b-beaver-tree.svg ("A beaver chews through the trunk of a small tree", the key verbatim), v3a-tree-ladder.svg ("the thick wooden part") and ss1a-tortoise-burrow.svg ("it dug").
- **Checked all others:** all 16 figure alts in the lesson and set files, and all 16 SVG titles:
  - The graphs, maps, diagrams, life cycle, frog and monarch alts describe what is drawn and do not rule out choices.
  - The heron passage alt names "a tall bird … in shallow water". That is what the drawing shows, and its visible caption says the same, so I left it.
- **Verified:** the new alts were compared with renders of the SVGs (`figs3.png`). The ladder top does sit just below the branches. Guard **13.3** walks every figure object in every lesson and set (16 alts) and every SVG title (16). It fails on "there is/are no …", "not in the picture" and "no X, Y or Z in the …" lists. I confirmed that the regex flags both old sentences.
- **Limits:** the guard check is a pattern check. A paraphrase of a key (like the old ladder alt) still needs human review.

## RD-10: "Not yet" screen vocabulary
- **Reproduced:** the text said "…try the skill check again on another day". The buttons were "Practice this set" and "Take the test again".
- **Fix:**
  - **Fail message** (skills.js `afterTest`): "…then try the skill check again after you practice." The immediate-retake button no longer contradicts it.
  - **Lesson-check results** (player.js): `#res-practice` is "Practice Together" (it opens `SK:<k>:p`, which is Practice Together). `#res-again` is "Take the skill check again". Practice-test and set results keep "Practice this set" and "Take the test again".
  - **Skill page button:** "Take the skill check" / "Take the skill check again" (was "Take the test…").
  - **Practice done screen:** button "Take the skill check" and text "take the skill check" (was "skill test").
  - **Confirm stage for lesson checks:** "turn in your skill check" and "Turn in my skill check".
  - **Player tag for lesson checks:** "Skill check".
  - **"Already turned in" screen for lesson checks:**
    - Title: "You already turned in this skill check".
    - It now says "That was a pass." or "That was not a pass yet. Practice first, then try again." (ceil 80%, the same rule as `passMark`).
    - The button reads "Take the skill check again".
  - **Guard 9.5** now expects "skill check" in the done-screen button.
  - The parent guide (js/parents.js) wording for review is updated (see RE-11).
- **Verified:** buttons after a fail are ["Practice Together", "See my answers", "Take the skill check again", "Back to the skill"] and the text has no "another day". Guard **13.6**.
- **Limits:** the button order is unchanged. "Practice Together" stays primary after a fail.

## RD-11: "That page wasn't found" note not focused
- **Reproduced:** `activeElement` = BODY after `#nope`.
- **Fix (js/app.js `route`):** after un-hiding `#home-notfound`, it gets `tabIndex=-1` and focus. It keeps `role=status`.
- **Verified:** `activeElement.id` = `home-notfound`. Guard **13.6**. Guard 12.8 still passes.

## RE-3 (E SHOULD): old best score shown against a resized check
- **Reproduced:** a seeded 2.1 pass `{best:{got:6,max:7}}` on 3.T.C.1.b (now 8 points) read "✓ Passed the skill check. Best score: 6 of 7." under "6 questions, 8 points".
- **Fix (js/skills.js):**
  - `recordTest` now stores **`bestMax`** (the check's point total) whenever it writes a new `best`. It is a new, additive field. Existing `best` and `max` values are never altered, and render writes nothing.
  - New `bestText()` decides how the best score is shown:
    - `bestMax` (or, without it, `best.max`) equals today's total → "Best score: g of m."
    - `bestMax` is set but the check has changed since → "Best score: g of m (on an earlier version of this check)."
    - No `bestMax`, and `best` does not fit today's total → no score. Passed: "✓ Passed the skill check (on an older version of this check)." Not passed: "Your best score so far was on an older version of this check. Need N of M to pass."
- **Verified:** the seeded record reads "✓ Passed the skill check (on an older version of this check)." with no "6 of 7", and stored data is byte-identical before and after rendering. A new all-correct try stores `bestMax` and shows "Best score: M of M.". Guard **13.4**, on the first lesson whose check is 6+ points.
- **Limits:** a legacy best that happens to have the same max as today's check is still shown as before. It cannot be told apart from a current one, and it is the same number of points.

## RE-7 (E NOTE): stray line on the heron
- **Reproduced:** rendered v3a-heron.svg. A straight 2.5 px line ran from the eye up and to the right past the head and read as a second beak (`heron-compare.png`, left).
- **Fix:** replaced `M120 34 L150 26` with a thin, filled, tapered plume that droops back from the head (`M128 36 Q150 38 168 54 Q148 45 129 42 Z`).
- **Verified:** render (`heron-compare.png`, right). It reads as a crest feather behind the head. Labels, beak and alt are unchanged. check-content's figure checks pass.

## RE-8 (E NOTE): SK-SS1a-P7 DOK
- **Deficiency:** a table-of-contents lookup ("which chapter tells how baby sea turtles get from their nest to the water") is locating information, so DOK 1, not DOK 2.
- **Fix:** `dok: 2` → `dok: 1` (T-SS.js). It is a practice item, so no test total changes.

## RE-1 (E NOTE): L-VOC-01-4, the only 1-point match item
- **Measured:** a script loaded every live set and lesson and found 134 match items. The 3-row ones: 9 at 2 points and only L-VOC-01-4 at 1 point (3 rows, each column used once).
- **Fix:** `points: 1` → `points: 2` (js/data/sets/L-VOC-01.js). Under SPEC §5's match rule, a one-to-one 3-row item now gives 2 for all right and 1 for one mix-up, like the other nine. L-VOC-01 grows by 1 point.
- **Lead:** docs/audits CSV and MD rows that quote L-VOC-01's point total (if any) need updating. I did not edit them.

## RE-11 (E NOTE): every legacy pass shows "review" on the same day
- **Deficiency:** `reviewDue()` fell back to `firstSeenPassedAt`, which the migration stamps with the upgrade day. Seven days after the update, every 2.1 pass would show "review" at once.
- **Fix (js/skills.js):**
  - `reviewDue()` and the review sentence use only `lastPassAt` or `passedAt`. An undated legacy pass gets no date-based review. It still gets one after a dated try that did not pass, and it gets dates once it is passed again.
  - Removed the "(or since this device first noticed the pass)" clause.
  - The parent guide sentence now reads "…‘review’ 7 days after a dated pass, or when the last try did not pass."
  - `firstSeenPassedAt` is still written by the migration (stored data unchanged), but nothing reads it for review.
- **Verified:** guard **13.5**: a legacy record first seen 10 days ago has no row badge and `reviewDue` is false. Guards 11.7, 11.9 and 11.10 still pass.

## RD-16 (RD NOTE): Home rows used the same ✓ for both kinds of pass
- **Fix:** a grown-up check now shows a plum pill "✓ grown-up" (css `.sl-done.by-grownup`: auto width, 11 px radius). A scored pass keeps the green round "✓". The `aria-label` already said "Checked by a grown-up".
- **Verified:** `row-grownup-320.png`. At 320 the pill is 88×22 px and there is no sideways scroll. White on #6A4CD0 is about 5.9:1 (computed, not pixel-sampled).

---

## Gates
- `node verification/check-content.js --all`: **PASS, 0 failures, 8 warnings.** These are the same 8 clue-overlap warnings review-E listed; none is on an item I changed.
- `python3 verification/readability.py`: exit 0, no passage flagged. I changed no passage text.
- `python3 verification/guard.py http://localhost:8458/` (full run): **95 passed, 0 failed, exit 0.**
  - That is the 89 from review-E plus 13.1-13.6. 4.1 now runs only test-capable sets; see RD-4.
  - The first full run stopped in section 4 because of RD-4; that was fixed in the guard as described.
  - Log: `scratchpad/final/guard.log`.
- Server PID 2403 stopped with `kill` at the end.

## Not done / for the lead
- RD-12 to RD-15 (target sizes, sticky clock overlap, grown-up undo, print leftovers) were not in my assignment and are not fixed.
- RE-2 (.pyc tracked), RE-4 (matrix snapshot), RE-5/6 (doc noise), RE-9, RE-10 and RE-12 were not assigned to me.
- docs/audits rows that describe the old labels ("Take the test again", "Practice this set"), RE-3 or RE-11 behaviour, or L-VOC-01's points may need a line from the lead.
- No real screen reader or real mobile browser was used.
