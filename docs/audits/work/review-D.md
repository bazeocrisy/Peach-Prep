# PP-003 Phase F review D: accessibility and child UX

- **Reviewer:** D (accessibility and child-UX specialist). Independent; I did not read reviews A-C or rely on the fix log's numbers.
- **Build:** /home/claude/pp-fix, branch pp-003-fixes at f2119ef ("Peach Prep" build string unchanged). Read-only; the only file written in the repo is this one.
- **Date:** 2026-10-20.
- **Server:** `node verification/serve.js . 8464`, PID 28711, stopped with `kill 28711` at the end (port confirmed closed).
- **Tooling:** Python Playwright with headless Chromium. Google Fonts blocked (fallback fonts). 320x640 and 390x844 with `is_mobile` and `has_touch` (taps via `page.tap`); 768x1024 with touch; 1366x900 desktop. Fluency timer driven with Playwright's fake clock.
- **Evidence:** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revD/`
  - Logs: `kbd`, `kbd2`, `nav`, `hist`, `d1`, `scan-320`, `scan-390`, `scan-768-1366`, `figs`, `figs2`, `svgcontrast`, `hero`, `flu`, `grown`, `print`, `misc` (each `.log.txt`).
  - Scripts: `revD/scripts/*.py`.
  - Screenshots: `scan-*-{w}.png` (full page, every screen x 4 widths), `fig-320-*.png`, `contact-figs-320.png`, `flu-*-{w}.png`, `grown-*-{w}.png`, `notyet-results-*.png`, `again-*.png`, `notfound-*.png`, `pass-results-*.png`.
  - PDFs: `print-*-{390,1366}.pdf`, page renders `print-*-390-N.png`, `contact-print-390.png`.

Severities: **MUST** (wrong, misleading or broken), **SHOULD** (weak but not wrong), **NOTE**.

---

## 1. Findings

### RD-1. MUST. Fluency result lands under the sticky step bar and is hidden while focused
- **Screen / width:** skill 3.F.F.1.b (and 3.F.F.1.c) Practice, fluency timer, after the grown-up taps the last word. All four widths.
- **Selector:** `.flu-result` (focused), covered by `#sk-steps` (`.steps{position:sticky;top:0;z-index:2}`).
- **Evidence (`flu.log.txt`, `flu-result-390.png`):**
  - 320: result box y=0-102, step bar y=0-73 (top 73 px of the result covered).
  - 390: result box y=0-48 under a bar of 0-73: **the "120 words correct per minute · 99% accuracy" line is fully hidden**. The first visible line is "A typical third grader…".
  - 768 and 1366: result y=0-48 under a bar of 0-64: fully hidden.
  - `document.activeElement` is `P.flu-result` in every case. A focused element fully obscured by author content fails WCAG 2.2 SC 2.4.11 (AA).
- **Why it matters:** this is the one number the grown-up came for. The D10 fix log says "the result is at y=0 and focused", which is true, but y=0 is behind the bar. D10 is therefore only partly fixed.
- **Source:** `js/skills.js:895` `big.scrollIntoView({ block: "start" })`.
- **Fix:** give `.flu-result` (and `.flu-out .go-best`) `scroll-margin-top` equal to the step bar's height plus 8 px (as `.sk-panel` already has 84 px), or scroll with the same maths as `landOnStep()`: `scrollTo(0, big.getBoundingClientRect().top + scrollY - el("sk-steps").offsetHeight - 8)`. Add a guard check: the result's top must be ≥ the bar's bottom.

### RD-2. SHOULD. Focus falls to `<body>` after "Mark as checked by a grown-up"
- **Screen / width:** skill Check step, 3.F.F.1.b and 3.F.H.4.a, all widths (keyboard at 768/1366, tap at 320/390).
- **Selector:** `#sk-grownup-check`.
- **Evidence (`grown.log.txt`):** after Enter, `focus= BODY`. The button is hidden, the "✓ Checked by a grown-up on October 20, 2026." line appears, but nothing announces it (no live region, no focus move).
- **Source:** `js/skills.js:1016` `save(); render();` rebuilds the panel.
- **Fix:** after `render()`, focus the new `.go-done` line (`tabIndex=-1`), the same pattern D7 used for Help me.

### RD-3. SHOULD. Focus falls to `<body>` after the third "Show me how" in the test review
- **Screen / width:** test results, "See my answers", any wrong item. 390 and 1366.
- **Selector:** `#res-review .show-how`.
- **Evidence (`kbd2.log.txt`):** "show-how 3: focus= BODY disabled= True". The third press disables the focused button.
- **Source:** `js/engine/player.js:475`.
- **Fix:** when `step >= 3`, set `ans.tabIndex = -1` and `ans.focus()` (the revealed "The answer: …" line). This is the D7 defect class, which was fixed for Check and Help me but not here.

### RD-4. SHOULD. A practice or try set can be run as a scored "Test" by address, and passing records the skill as passed
- **Screen / width:** player, any width. Route `#play/SK:<key>:p/test` or `#play/SK:<key>:y/test`.
- **Evidence (`misc.log.txt`):** after clearing storage, `#play/SK:3.T.C.1.b:p/test` shows the "Test" tag. Answering its 4 practice items and turning it in shows "✓ Passed! You passed the skill check" and stores `{"3.T.C.1.b":{"mastered":true,"best":{"got":4,"max":4},"passBy":"test",…}}`. The real check (`:t`) has 6 items.
- **Reachability:** typed or edited address only. I found no in-app path to it. That is why this is SHOULD, not MUST; the stored record is still wrong when it happens.
- **Source:** `js/engine/player.js:494` (and `:524`) closes only the opposite case (`:t` forced to test).
- **Fix:** in `start()` and `finished()`, when `set.kind === "skill"`, force the mode from the part: `p` → practice, `y` → try, `t` → test. Ignore the hash mode. Or have `recordTest` ignore any set whose `part !== "t"`. (Out of my UX remit; flag to the mastery reviewer.)

### RD-5. SHOULD. Tablet and desktop search results still start off-screen
- **Screen / width:** Home, typing in `#skill-search` without scrolling first. 768 and 1366.
- **Evidence (`scan-768-1366.log.txt`, `scan-search-768.png`):**
  - 768: search box at y=746, first result at y=1003 of a 1024 px screen (21 px visible).
  - 1366: box at y=659, first result at y=890 of 900.
  - On a 768 tablet with an on-screen keyboard the results are fully hidden.
  - The D3 fix runs only below 640 px (`js/skills.js:1064-1067`). At 320 and 390 it works: first result at y=420 (320) and 342 (390), box at y=8.
- **Fix:** run the same scroll at every width when the box is lower than about 40% of the viewport. At ≥640 px, subtract nothing, since the tools bar becomes sticky at the top anyway.

### RD-6. SHOULD. Feedback live region is still un-hidden and filled in the same tick
- **Screen:** player, `#q-feedback` (`aria-live="polite"`). All widths.
- **Evidence:** `js/engine/player.js:233-244` `setFeedback()` clears the region, sets `hidden=false` and adds the text in one tick. When it is cleared it goes back to `display:none`. The Phase G audit listed this under "Future". It is unchanged.
- **Extra:** on a correct Check, focus now moves to `#q-next` in the same tick (D7 fix). Some screen readers speak the focus change and drop the pending polite message, so "That's right!" may never be heard. I could not verify this without a real screen reader.
- **Fix:** keep `#q-feedback` always rendered (empty when idle, visually collapsed with `min-height:0`). Write the text only after the region exists. After a correct Check, either delay `q-next.focus()` by about 100 ms, or give `#q-next` `aria-describedby="q-feedback"` so the verdict is read with the button.

### RD-7. SHOULD. Fluency result announcement is long and doubled
- **Screen:** fluency, after the last word is tapped.
- **Selector:** `.flu-out` (`aria-live="polite"`, `js/skills.js:795`).
- **Evidence (`flu.log.txt`):**
  - The whole result is injected into the live region. That covers about 90 words of norms text plus the full "Grown-up observed" form (4 legends and 10 option labels).
  - Focus is also moved to `.flu-result` at the same moment, so the headline is read twice and then followed by a long run of form labels.
- **Fix:** take `aria-live` off `.flu-out`. Rely on the focus move to `.flu-result` (fixed per RD-1), or put only the one-line headline into a small separate `role=status` element.

### RD-8. SHOULD. Missed words in the fluency text have no programmatic state
- **Screen:** fluency while reading.
- **Selector:** `.flu-w.is-miss`.
- **Evidence:** a tapped word gets `is-miss` (strike-through, peach tint, outline; not colour-only, 4.6:1). It has no `aria-pressed` and no label change: `{'pressed': None, 'label': None}`. A grown-up using a screen reader cannot tell which words are marked.
- **Fix:** set `aria-pressed` on every word button and toggle it in `tap()` (`js/skills.js:820-823`).

### RD-9. SHOULD. Alt text on three figure items does the elimination work the sighted child must do
- **Items:**
  - SK-SS1a-T4 (`js/data/lessons/T-SS.js:227`, a test item): "…There are no people, fires, trees or roads in the picture."
  - SK-TC1b-P8 (`js/data/lessons/T-C.js:316`): "…There is no water in the picture."
  - SK-V3a-P6 (`js/data/lessons/L-V3.js:152`): "…rests on the thick wooden part of the tree, between the roots and the branches."
- **Evidence:**
  - The "no people, fires, trees or roads" list maps one-to-one onto the three wrong captions (workers/fire, forests, towns/roads).
  - "No water" rules out the tail, lodge and dam captions.
  - "The thick wooden part of the tree" is a paraphrase of the keyed answer, "the thick main stem of a tree".
  - A sighted child gets none of this as text; they must look and infer. An alt text should be equivalent to the image, not to the answer key.
- **Fix:** describe what is shown and stop. For example, "A gopher tortoise sitting on sandy ground in front of the round opening of a tunnel dug into a mound of sand." and "A ladder leaning against a tree. The top of the ladder rests on the tree's thick wooden middle. Labels point to a branch and the roots." Drop the "There is/are no…" sentences.
- **What is fine:** every other alt is present, non-empty, specific, and matches the visible labels. That includes the graph values, map labels, diagram labels and life-cycle order.

### RD-10. SHOULD. "Not yet" screen mixes vocabulary and contradicts its own advice
- **Screen / width:** skill test results after a fail, all widths (`notyet-results-390.png`).
- **Evidence:**
  - The message says "Go back to Watch Me or Practice Together, then try the skill check again **on another day**."
  - The buttons are "Practice this set" (primary), "See my answers", "**Take the test again**" and "Back to the skill".
  - For an 8-year-old:
    - "Practice this set" does not obviously mean "Practice Together".
    - "skill check" and "test" name the same thing on one screen.
    - "Take the test again" invites the immediate retry the text advises against.
  - The "You already turned in this test" screen after a failed test (`again-test-320.png`) also leads with a primary "Take the test again". It does not say whether the score passed.
- **Fix:**
  - For skill sets, label `#res-practice` "Practice Together again" and `#res-again` "Take the skill check again".
  - After a fail, consider hiding "Take the test again" or moving it last.
  - On the again-screen for a skill test, add "That was not a pass yet." or "That was a pass." from `info.got >= passMark(info.max)`.

### RD-11. SHOULD. "That page wasn't found" note gets no focus and may not be announced
- **Screen / width:** Home after a bad address. All widths (`notfound-390.png`).
- **Evidence (`kbd2.log.txt`):**
  - The note is visible (390: y=362-435; 1366: y=281-329), has `role=status`, and is unhidden during the first route.
  - `activeElement` is BODY, both on load and after an in-app hash change to `#play/NOPE/test`.
  - A status region that appears with its text already in it is often not announced.
- **Fix:** in `route()` (`js/app.js:259`), after un-hiding, give the note `tabindex=-1` and focus it. Or focus `#home-title` and set the note's text after a 50 ms delay so the live region fires.

### RD-12. NOTE. Remaining small targets (site rule: 44 px)
- `.flu-obs input[type=number]` (self-corrections) is 77x40 at all widths (`css/styles.css:633`). Add `min-height:44px`.
- `summary.std-ald-head` "Where the support is in the sources" (essay, Score tab) is 22 px tall at 390, 768 and 1366 (43 px at 320). 22 px is also under the WCAG 2.5.8 24 px minimum. Give it `min-height:44px; display:flex; align-items:center` like the other summaries (`js/writing.js:160`).
- Parent-guide source links ("Grade 3 Writer's Checklist", the blueprint, rubric, samplers, Experience Online) are 19-20 px tall on the Test and Essay tabs. They sit in source lines and lists with spacing, so the 2.5.8 spacing or inline exception arguably applies. They also open a new tab with no warning.

### RD-13. NOTE. Sticky clock row overlaps the sticky step bar while reading
- **Screen:** fluency, phone widths (`flu-timeup-320.png`).
- **Evidence:** `.flu-ctl` (z-index 4, 0-112 px at 320) sits over `#sk-steps` (0-73). The bar's edges peek out beside it as stray marks. This is cosmetic, and the fix log already noted it.
- **Fix:** while `.is-reading`/`.is-picking`, set `#sk-steps{visibility:hidden}` or offset `.flu-ctl{top:<bar height>}`.

### RD-14. NOTE. Grown-up check has no undo, and the disabled button gives no reason
- `#sk-grownup-check` is disabled until every box is ticked. No text says why. Add `aria-describedby` to "Tick every line to turn this on."
- Once marked, the boxes are locked and there is no undo short of resetting all progress. A short "Undo" for the same day would be kind to a mis-tap.

### RD-15. NOTE. Print leftovers
- **Phone-only instruction in print:** the player prints the phone instruction "New passage. Read it, then tap Question." (`print-player-tc1b-t-390-1.png`). Hide `#passage-note` in `@media print`.
- **What is fine:** both panes print, and tabs, controls and result buttons are hidden. Figures print whole (`break-inside:avoid` keeps the frog figure on one page) and none are broken.
- **"For grown-ups" box:** hidden in skill-page print. That may be intended; say so in SPEC if it is.

### RD-16. NOTE. Home rows show the same ✓ for a scored pass and a grown-up check
- The home row's `aria-label` says "Checked by a grown-up", but the visible row shows only "✓", the same mark as a passed skill check. The parent guide says the two are "kept apart".
- **Fix:** a visible variant (for example "✓ grown-up") would match that claim for sighted parents.

---

## 2. What I measured and found working

- **Responsive layout:** no horizontal overflow on any of the 37 screens and states scanned at 320, 390, 768 and 1366. Screens covered: Home, search, every 3.T.T.1.b step, 3.T.C.1.b Learn and Watch, 3.L.V.3.a Watch, 3.F.F.1.b and 3.F.H.4.a Practice and Check, 3.T.C.1.c Try writing, player in "Not quite", hints, right, passage and figure-test states, "Not yet" results, review, again, clues, habits, mixed, section, all parent tabs, all essay tabs, and not found.
- **Contrast (computed from styles):**
  - 0 non-disabled text below AA anywhere, apart from the deliberate trace-guide grey (`.trace-row` #9AA8BC, 2.41:1; a drawing target).
  - The hero gradient, pixel-sampled, gives a 5th-percentile of 5.6:1 or better for the white and #E7EEF8 text at every width.
  - The focus ring (#1B4FA8, 3 px) is 6.4-7.7:1 against every background it sat on.
- **New figures:**
  - All 16 SVGs load at every width.
  - **Label text contrast, pixel-sampled under each `<text>`:** lowest 13.86:1 ("roots" on the soil tint); all other labels are 17.1-18.9:1.
  - **Effective label size at 320:** 14.8-16.7 px. At 390: 19.4-21.9 px.
  - **Not colour-only:** bars carry numbers, the peanut-farm key uses hatching, the river is striped, labels have leader lines and life-cycle steps are numbered.
  - **Alt text:** every `img.pp-fig-img` has non-empty alt (58-301 characters). Captions with "Figure N." are present where the lesson calls for them.
- **Keyboard:**
  - Logical tab order on Home and the skill page. Skip link moves focus to the screen's `h1` and leaves the address alone.
  - Arrow, Home and End keys work on the step, player, essay and parent tabs, with a single Tab stop each and valid `aria-controls` to `role=tabpanel`.
  - Escape leaves a skill.
  - A full practice set can be done keyboard-only. Wrong → Help ×3 moves focus to the last hint; right → focus on Next; Enter → next question with focus on the prompt.
  - Test confirm and results are reachable. Results focus the title.
- **Navigation:**
  - All 42 routes direct-load and reload to the same screen with no console errors. The 7 bad routes go Home with the note and a cleaned address.
  - Back and Forward chains (`hist.log.txt`):
    - set ← Back then Back → `#mixed` → Home;
    - section ← Back then Back → Home;
    - essay ← Back then Back → leaves the app (correct, no dead press);
    - done → Back → Forward → "You already finished this practice";
    - reload on done or results → the "again" stage;
    - "Start the practice again" → Q1;
    - test in progress Back → "Leave this test?"; Cancel stays, OK lands on the Test step.
- **Step landing (D1):** 348 transitions on 4 lessons x 4 widths (every Next, every tab pair, from the bottom of the step). 0 left the heading above the bar or more than 40 px below it.
- **Touch targets:** none under 44 px on Home, skill steps, player (all states), results, clues, habits, mixed, section and parent standards. Fluency words are at least 24 px wide and 47 px tall. Passage picker, observation-form radios and checklist rows are 44-55 px.
- **Fluency flow (fake clock):**
  - Start works.
  - Tap a word marks a miss; a second tap clears it and counts a self-correction (pre-filled "1" in the form).
  - Time-up shows "Time!" and the "Grown-up: tap the last word read." prompt in the sticky row (y=54-105 at 320), with focus on it.
  - The maths shows 121 read, 1 miss, 120 wcpm, 99%.
  - Observation radios and the number field all have names and legends. They save to the reading, show in "Recent readings" and survive a reload.
  - A read under 30 s gives the "too short" note, focused and on screen.
- **Grown-up check:** button disabled until all lines are ticked. Marking hides the button, locks the boxes, shows the dated line and "This is a grown-up's observation, not a scored skill check.", and marks the step tab "Check, done". It survives a reload. The Home row `aria-label` says "Checked by a grown-up".
- **Readability of the new screen text** (Flesch-Kincaid, same heuristic as `verification/readability.py`):
  - "Not yet…": 2.0
  - "You already finished…": 4.5
  - "You already turned in…": 1.5
  - "That page wasn't found…": 0.1
  - "Passed!": about 0
  - "too short": 3.7
- **Print:**
  - The skill page with a figure has no bar, steps or Next button, and the figure is kept whole.
  - The player prints passage and question at 390 and 1366, with no tabs or controls.
  - The clue sheet fits on 1 page.
  - "Not yet" results print without buttons.

## 3. Historical defects re-tested (Phase G list), my measurements

| ID | Verdict | My evidence |
|---|---|---|
| D1 | FIXED | 0 of 348 bad (`d1.log.txt`). |
| D2 | FIXED | 768 and 1366: heading top 110-111, sticky bar bottom 96. 320 and 390: bar not sticky, heading at 14. |
| D3 | FIXED on phones; SHOULD at ≥640 | 320: first result at 420/640; 390: 342/844. 768 and 1366 still off-screen (RD-5). |
| D4 | FIXED | Set, section and essay chains have no dead press. |
| D5 | FIXED | Forward or reload on done and results gives "again". Start again gives Q1. |
| D6 | FIXED | "0 of 74 … The 2 essay tasks are scored by a grown-up…"; filter "74 skills and 2 essay tasks match."; Writing card "0/10 · +2 essays". |
| D7 | FIXED for Check and Help; same class remains | Focus goes to Next after a correct Check. Remaining at Show me how (RD-3) and the grown-up check (RD-2). |
| D8 | FIXED | null fields, wrong types, `"hello"`, `[1,2]` and invalid JSON all give 0 errors, and all essay tabs work. |
| D9 | FIXED | Skip link focuses `H1#home-title` / `H1#sk-title`; the hash is unchanged. |
| D10 | PARTLY FIXED | The time-up prompt is fixed. The result is hidden under the step bar (RD-1, MUST). |
| D11 | FIXED | After Help, the "Not quite" feedback is gone (`kbd.log.txt`, help1-3). |
| D12 | FIXED | 0 AA failures in the scans; the badge/peach/is-past colours were re-checked. |
| D13 | MOSTLY FIXED | Fluency words, parent standards links, checklist rows, clue toggle, summary and skip are all fixed. New stragglers in RD-12. |
| D14 | MOSTLY FIXED | Tabs and controls hidden, both panes print. Leftover passage note (RD-15). The essay printing only its active panel was not re-checked by me. |
| D15 | FIXED | Roving tabindex, arrows and `aria-controls` work on all four tab lists. |
| D16 | FIXED (focus SHOULD) | All 7 bad routes are handled. Focus and announcement in RD-11. |
| D17 | FIXED where claimed | Placeholder needs 252 of 258 at 320. Trace buttons both at x=33. After a pass, "Back to the skill" is primary and first. Check-off button hidden and boxes disabled. Trace letter/line size and ceil(80%) were knowingly left. |

## 4. Not tested / limits

- **Not tested:**
  - Real screen readers (VoiceOver, TalkBack, NVDA, JAWS). Live-region and focus-announcement conclusions (RD-6, RD-7, RD-11) come from DOM and ARIA inspection only.
  - Real iOS Safari or Android Chrome. Chromium emulation does not reproduce Safari's sticky, `100vh`, on-screen keyboard, swipe-back or print behaviour.
  - Real on-screen keyboards (RD-5 would be worse with one).
  - The real `window.print()` dialog. I used print emulation with `page.pdf` (Letter).
  - The fluency timer in real time (fake clock only).
  - 200% zoom or text-only zoom, Windows forced colours, and `prefers-reduced-motion` in effect.
  - Google Fonts were blocked, so live wrapping may differ slightly.
- **Partly tested:**
  - Figures were checked on all 16 SVGs in every place they render (teach, Watch Me, passage pane, question stem), except the armadillo, which I reviewed only as a standalone SVG for contrast and alt.
  - Full end-to-end flows ran on 3.T.T.1.b, 3.T.C.1.b, 3.L.V.3.a, 3.F.H.3.a, 3.F.F.1.b and 3.F.H.4.a, plus R-LIT-01 and W-TASK-01. Other skills were not opened at every width.
  - Contrast was checked on solid backgrounds by computed style, and on gradients and SVGs by pixel sampling. Images inside passages other than the 16 figures do not exist.

## 5. Verdict

**PASS WITH ONE MUST.** The UX fixes D1-D17 hold up under independent measurement: navigation, keyboard, tabs, contrast and touch targets are now solid, and the new figures are legible at 320, high-contrast (13.9:1 or better) and not colour-only. One MUST blocks a clean pass:

- **RD-1:** the fluency result headline is hidden under the sticky step bar while focused, at every width. This is a one-line fix plus a guard check.

The other items should be fixed but do not block:

- the leftover focus losses (RD-2, RD-3);
- the address-only practice-as-test mastery path (RD-4);
- tablet search (RD-5);
- live-region reliability (RD-6, RD-7);
- the fluency miss state (RD-8);
- answer-leaning alt text on three items (RD-9);
- the "Not yet" wording (RD-10);
- not-found focus (RD-11).
