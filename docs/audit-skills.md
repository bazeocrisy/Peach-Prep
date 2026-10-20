# Screen audit: skill list and skill pages

Audited on 2026-10-20 against build "Peach Prep 1.0.0", served with `node verification/serve.js . 8351`. I used Playwright (Python) with Chromium at 320x640, 390x844 and 1366x900. Touch was on for the phone widths. Google Fonts were blocked, as required. No site files were changed. Screenshots are in `(screenshots kept outside the repo) `.

**Counts: 1 MUST, 9 SHOULD, 14 NIT.**

## What I covered

- **Home list:** top, the middle of the grammar chart group, the habits section (closed and open) and the bottom, at all three widths.
- **Search:** "comma", "Comma", " comma ", "3.T.T.1", "3.L.GC.1", "pronoun", "reflexive", "cursive" and a word with no matches.
- **Filters:** All, On the test and Not mastered. Each one renders (147 rows, 69 rows, 147 rows). The empty-search message shows correctly.
- **Skill steps:** all four steps for 3.T.T.1.b, 3.L.GC.1:M:use-reflexive-pronouns, 3.T.T.3.c, 3.F.F.1.c, 3.F.H.4.a and 3.F.H.3.a, plus the habit page K-12.P.EICC.3.c. Each was shot at all three widths, and Learn was shot both before and after every step was revealed.
- **Full runs through the UI:** a full practice of 3.T.T.1.b at each width (one wrong answer, then Help twice, then all correct, to the "Great work!" screen). A full test at each width: one miss gave 6 of 7, then a retake gave 7 of 7, through to results, review and "Show me how". A practice of 3.L.GC.1:M:use-reflexive-pronouns, then "Take the skill test", then results.
- **Fluency timer:** run with a faked clock. Three words were tapped as missed and the last word was picked, which gave 148 wcpm and 98%. I also used the grown-up check-off to mark the skill mastered.
- **Writing box:** text and checkboxes survive a reload. Escape inside the textarea does not leave the page.
- **Navigation:** history.back from mid-practice, mid-test (both accepting and cancelling the prompt), from a skill, and from home. Home from the player. Esc on the skill page.
- **Reload:** 11 URLs, including encoded and unencoded `:` codes, a habit URL with `/test`, a bad code, a bad step, `#mixed` and `#play/...`.
- **Keyboard:** Tab order on the skill page, and Enter on the step tabs and on "Show the next step".
- **Print:** emulated print media with `print-trace` set, saved to PDF and rasterised. Also a "Ctrl+P" print without the class.

**What works:** No sideways page scroll at any width on any screen I checked, including the trace sheet at 320. Reloading every skill URL lands on the right skill and step. A test in progress always asks before it is thrown away, both from Home and from the phone's Back button. Esc inside the writing box is ignored. The print button prints only the sheet, on 2 pages. Back to all skills lands on and focuses the row you came from, and the row shows its new ✓ Mastered status. The only console errors are the blocked Google Fonts.

---

## MUST

### M1. On a phone, "Next: …" drops the child in the middle or at the end of the next step

`go()` re-renders the panel but does not scroll to its top (js/skills.js 214-222). Focusing `#sk-panel` does not scroll because part of the panel is already on screen, and `scrollIntoView({block:"nearest"})` on the sticky tab does nothing. So the page stays at the old scroll position, which is the bottom of the previous step.

- At 390, 3.T.T.3.c: Teach, then "Next: Learn with examples". The page stays at scrollY 1400. The "Learn: let's do it together" heading is 935 px above the screen, and the child sees **Example 3 of 3** first, skipping examples 1 and 2. → `nav-next-learn-landing-390.png`
- At 320, 3.T.T.1.b: same result. The heading is 655 px above the screen. → `nav-next-learn-landing-320.png`
- At 390, Learn then "Next: Practice" lands on the writing checklist. "Start practice", "Your turn to write" and the prompt are all off-screen. → `nav-next-practice-landing-390.png`
- At 1366 it lands acceptably (`nav-next-learn-landing-1366.png`), so only phones are affected.

An 8-year-old will not scroll up to find example 1. They will tap "Show the next step" on example 3, or go straight to "Next: Practice". This breaks the Teach → Learn → Practice → Test path on the main device.

---

## SHOULD

### S1. Phone Back needs two presses after finishing a practice or test

Both "Back to the skill" buttons (`done-back` and `res-back`) call `PP_APP.back()`. That uses `replaceState` to put the skill page in place of the `#play/...` history entry. The skill entry that was pushed before the player is still there, so history now holds the same skill URL twice. The first phone Back after a practice or test appears to do nothing. The same thing happened at all three widths (log: "history.back after practice→skill → `#skill/3.T.T.1.b/practice`, still the skill screen"). A second Back is needed to reach the list.

### S2. After Practice → "Take the skill test" → results → "Back to the skill", phone Back restarts the practice from Q1, and the skill opens on the wrong step

- `done-test` starts the test while the player is already open. That pushes `#play/…:t/test` on top of `#play/…:p/practice` and does not update `returnTo`, so `returnTo` still says step "practice".
- "Back to the skill" then opens the skill on **Practice**, not Test. The child does not see the "✓ Mastered!" / best-score box they just earned. → `reflexive-after-results-back-390.png`
- The next phone Back goes to `#play/SK:…:p/practice`, and `route()` starts that finished practice again from question 1 (log "E history.back #1 → player"). It looks like "the app made me do it again".

### S3. Tapping a step tab while scrolled down hides the step heading under the sticky tab bar

At 320, scrolled to the bottom of Teach, tapping "Test" leaves the "Test: show what you know" heading at y=25, under the 74 px sticky `.steps` bar. Only the body text shows. → `nav-tab-test-landing-320.png`. This is the same root cause as M1 (no scroll-to-top that allows for the sticky bar), but it is milder.

### S4. Fluency timer: the clock and "Stop early" scroll away, and time-up jumps the page away from where the reader stopped

At 320 and 390 a passage is 1,600 to 1,900 px long.

- While the grown-up follows along and taps missed words, the clock and Stop button are 180 to 430 px above the screen. They cannot see the time or stop early without scrolling up. → `fluency-reading-390.png`, `fluency-reading-320.png`
- At 0:00 the "Time! … tap the last word" message appears off-screen. `stop()` then calls `words[0].focus()`, which scrolls the page **up to the first word**. At 320 it moved from y=1448 to y=905. The grown-up now has to scroll back down to find the last word read. → `fluency-time-up-390.png`

Suggested fix: make the timer row sticky, and don't move focus (or focus the clock or message rather than word 1).

### S5. 3.F.F.1.c tells you to use passage 5 or 6, but Passage 1 is pre-selected

The instructions say "Use passage 5 or 6 … it leaves passages 1 to 4 new for the speed check". However, `load(0)` selects Passage 1. A parent who taps Start straight away uses up a speed-check passage. → `skill-FF1c-practice-390.png`, `skill-FF1c-practice-1366.png`. Pre-select passage 5 for the "practiced" activity, or show only 5 and 6.

### S6. On a phone, the home search and filters take up too much of the screen

- The sticky `.skill-tools` bar is 132 px tall at 320 and 390, because the filter buttons wrap to two lines. That is 21% of a 640 px screen. → `home-scrolled-sticky-320.png`
- Group and strand headings scroll under the bar, and they are not sticky themselves. A child scrolling 41 grammar-chart rows loses track of which section they are in. → `home-grammar-mid-320.png`
- Typing "comma" shows **no results on screen**. The list starts below the fold (`search-comma-320.png`), and on a real phone the keyboard covers even more. There is also no visible or announced count ("5 skills match").

### S7. Printing from the browser menu prints the whole page, with the step bar over the sheet

The print rule only applies when the print button adds `body.print-trace`. A parent who uses the browser's own Print (Ctrl+P, or Share → Print on a phone) gets a 3-page printout with the nav, the instructions and the sticky Teach/Learn/Practice/Test bar printed **on top of** the tracing sheet. → `print-ctrlp-pdf-1.png`, `print-ctrlp-pdf-2.png`, `print-ctrlp-pdf-3.png`. Compare the correct button output in `print-trace-pdf-1.png` and `print-trace-pdf-2.png`. Add a plain `@media print` rule that hides `.bar`, `.steps` and similar on skill pages, or makes `.steps` `position:static`.

### S8. Opening a skill marks it "Started" and ticks Teach, even if the child read nothing

`renderTeach` calls `mark(cur,"taught")` on render. Tapping a row by mistake turns it to "◐ Started" on the list and ticks Teach. Parents use these marks to track real work, so this inflates progress. Separately, the "Not mastered" filter forces the habits section open and lists all 53 habits plus the classroom-only skills. That gives 147 rows, the same as All, on a fresh device. → `filter-todo-390.png`. "Not mastered" is more useful if it means test skills not mastered yet.

### S9. Printed trace letters are small, and their size doesn't match the empty writing lines

On paper, the grey trace letters are about 34 px tall (`clamp(…, 6.4vw, 2.1rem)`), in their own guide font. The empty practice lines below them are 62 px tall with a different midline. The child traces at one size and copies at another. The printout also has no title saying which letters or skill it is (only Name/Date). → `print-trace-pdf-1.png`, `trace-sheet-320.png`, `trace-sheet-1366.png`

---

## NIT

1. **Truncated brand:** at 320 the skill-page top bar brand shrinks to "Pe…". Hide it under 360 px or drop it. → `skill-TT1b-teach-320.png`
2. **Truncated placeholder:** the search placeholder is cut off at 320 and 390 ("try pronoun or 3.1"). → `home-top-320.png`
3. **Identical code labels:** all 41 grammar-chart rows show the same label, "3-5.L.GC.1 · Master/Reinforce/…", so it doesn't help tell rows apart. → `home-grammar-mid-1366.png`
4. **Habits toggle wording:** it says "Show the 53 everyday habits" even when the section is open.
5. **No disclosure chevrons:** `display:flex` on `summary` removes the marker for the habits toggle and for "Georgia's wording". Nothing tells the user they can be tapped. → `home-habits-closed-390.png`
6. **Small word buttons:** the fluency word buttons are 39 px tall, and short words like "a" and "I" are about 15 to 20 px wide (206 targets under 44 px). This matters on a phone. → `fluency-reading-320.png`
7. **Wrong heading on activity pages:** the fluency and tracing Practice steps still say "Practice: you try, with help". Neither has hints. → `skill-FH4a-practice-320.png`
8. **Indented second button:** at 320, "We practiced this today" wraps under "Print this practice sheet" but keeps its 8 px left margin (`.go-card .btn + .btn`). → `skill-FH4a-practice-320.png`
9. **Check-off after mastery:** the button stays as a grey "Mark this skill mastered", and the checkboxes can still be changed, but unticking does nothing. Change the label to "Mastered ✓". → `fluency-checkoff-mastered-320.png`
10. **Pass mark is above 80%:** `Math.ceil(max*0.8)` means 6 of 7 is needed, which is 86%. The brief says 80%. The page states the exact number, so this is a consistency note rather than a bug. → `skill-TT1b-test-320.png`
11. **Step tab semantics:** the step tabs have `role="tab"` but no `aria-controls`, no `role="tabpanel"` on `#sk-panel`, and no arrow-key movement (ArrowRight does nothing). Tab order itself is logical: title → 4 tabs → panel controls → Next → "Georgia's wording" → top bar.
12. **Skill test results buttons:** after a pass, the main button is "Practice this set". "Back to the skill" would be the natural next step, and "set" is wording from the old section cards. → `test-results-390.png`
13. **Stale feedback in practice:** after a wrong Check and then Help, the old "Not quite… press Help me" box stays under the new hints. → `practice-q1-help2-390.png`
14. **Small checklist rows, bad URLs:** checklist rows are 40 px tall, under the site's own 44 px rule. Also, `#skill/NOPE` shows Home but leaves the bad URL in the address bar.

---

## Screenshot index ((screenshots kept outside the repo) )

- **Home:** `home-top-{320,390,1366}`, `home-grammar-mid-*`, `home-habits-closed-*`, `home-habits-open-*`, `home-bottom-*`, `home-scrolled-sticky-*`, `home-after-mastery-*`
- **Search and filters:** `search-comma-*`, `search-comma-list-*`, `search-empty-*`, `filter-{all,test,todo}-*`
- **Skill steps:** `skill-{TT1b,reflexive,TT3c,FF1c,FH4a,FH3a}-{teach,learn-start,learn,practice,test}-{320,390,1366}`, `skill-habit-EICC3c-*`
- **Practice and test runs:** `practice-q1-{passage,question,wrong,help2}-*`, `practice-q*-solved-390`, `practice-done-*`, `test-q1-*`, `test-confirm-*`, `test-results-*`, `test-review-*`, `test-after-back-skill-*`, `test-pass-results-*`, `test-pass-skill-*`, `reflexive-practice-done-390`, `reflexive-test-results-390`, `reflexive-after-results-back-390`
- **Navigation:** `nav-next-learn-landing-{320,390,1366}`, `nav-next-practice-landing-390`, `nav-tab-test-landing-{320,1366}`, `reload-play-test-url-390`, `mixed-390`, `kbd-focus-step-tab-{390,1366}`
- **Activities:** `fluency-reading-*`, `fluency-time-up-*`, `fluency-result-*`, `fluency-checkoff-all-*`, `fluency-checkoff-mastered-*`, `write-box-filled-320`
- **Print:** `trace-sheet-{320,1366}`, `print-trace-emulated-{320,1366}`, `print-trace-pdf-{1,2}`, `print-ctrlp-pdf-{1,2,3}`
