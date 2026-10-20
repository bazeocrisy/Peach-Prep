# PP-003 Phase G: UX and functional baseline audit

- **Build audited:** "Peach Prep 2.1.0" (the `build` string in `js/data/manifest.js`), from the working tree of branch `pp-003-audit` (based on main 66e536b). No site files were changed.
- **Date:** 2026-10-20.
- **Server:** `node verification/serve.js . 8410`, stopped at the end of the audit.
- **Tooling:** Python Playwright 1.56 with headless Chromium. Google Fonts requests were blocked, so the fallback fonts were used. The local cursive fonts did load.
- **Viewports:**
  - 320x640 and 390x844: `is_mobile=True`, `has_touch=True`.
  - 768x1024 (tablet): touch on, not mobile.
  - 1366x900: desktop.
- **Screenshots, PDFs and run logs:** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/ux/`. The logs are `a_home`, `b_skill`, `c_nav`, `d_act`, `e_misc` and `g_kbd`, each ending in `.log.txt`. Scripts are in `.../scratchpad/uxscripts/`. These files are outside the repo.

**Ratings:**
- **Critical:** blocks or corrupts the core learning path.
- **High:** a child regularly lands in the wrong place or loses work.
- **Medium:** a real usability or accessibility cost.
- **Low:** polish.
- **Future:** not a defect today.

---

## 1. Summary (prioritised)

| # | Rating | Finding | Status of historical issue |
|---|---|---|---|
| D1 | **High** | "Next: …" and the step tabs still open the next step part-way down the page. The step heading sits above the screen at every width, including 1366. | STILL PRESENT |
| D2 | **Medium** | Category-card jump at 768 and 1366: the category heading lands under the sticky search bar. | new |
| D3 | **Medium** | On phones, search results start below the visible screen while typing. At 320 the first result is at y=686 on a 640 px screen. | STILL PRESENT (different form) |
| D4 | **Medium** | A dead Back press after leaving a mixed-practice set or an essay with the in-page Back button. | STILL PRESENT for sets and tasks (FIXED for skills) |
| D5 | **Medium** | Forward, or reload, on a finished practice or test restarts it at question 1. | STILL PRESENT (Forward/reload only) |
| D6 | **Medium** | The Writing card ring says 0/10, but the list has 12 rows. The 2 essays are never counted. Home's "0 of 74 on the test" disagrees with the "On the test" filter (76). | STILL PRESENT |
| D7 | **Medium** | Keyboard focus is lost (falls to `<body>`) after a correct Check, because the focused Check button is hidden. | new |
| D8 | **Medium** | Corrupted essay storage (`plan: null`) throws, and the essay screen stops working. | new |
| D9 | Medium | The skip link does not move focus. | new |
| D10 | Low | Fluency: "Time! tap the last word" and the result appear off-screen on phones. Focus jumps to word 1. | partly FIXED |
| D11 | Low | "Not quite… press Help me" stays on screen after Help is pressed. | STILL PRESENT |
| D12 | Low | Several contrast misses: 3.93:1 on "On the test" badges (parent guide), and 4.41:1 on peach labels. | new |
| D13 | Low | Small targets: fluency words 9-23 px wide, parent-guide external links 20 px tall, checklist rows 26 px tall at ≥640, clue toggle and summaries 40 px tall. | partly FIXED |
| D14 | Low | Print still includes the player and essay tabs and the result buttons. Practice-set print shows the passage only. | mostly FIXED |
| D15 | Low | Tabs have `role="tab"` but no `aria-controls`, no `tabpanel` and no arrow keys. | STILL PRESENT |
| D16 | Low | Bad hash routes silently show Home and keep the bad URL. | STILL PRESENT |
| D17 | Low | Leftover nits: 320 search placeholder truncated, check-off button stays "Mark this skill mastered (disabled)", second trace button indented, trace letter size ≠ line size, pass mark is ceil(80%), "Practice this set" leads the skill results. | STILL PRESENT |

Fixed since the 1.0 audit (`docs/audit-skills.md`):
- Back after a skill practice or test now takes 1 press.
- The results "Back to the skill" button lands on the Test step.
- Opening a lesson no longer marks it started.
- The fluency clock is sticky.
- 3.F.F.1.c now defaults to passage 5.
- Ctrl+P on skill pages hides the bar and the step tabs.
- Truncated top-bar brand and step labels.
- The phone search bar no longer sticks.
- Fluency word height is now 47 px.
- Activity step headings now read "Practice".

---

## 2. Historical problems re-checked

| Historical problem | Verdict | Evidence |
|---|---|---|
| Next-step navigation opens halfway down the next lesson | **STILL PRESENT** | 3.T.T.1.b, scrolled to the bottom of Learn It, then "Next: Watch Me". The "Watch Me" heading top is −1245 at 320 (scrollY 1702), −766 at 390, −119 at 768 and −144 at 1366. All are above the screen (`b_skill.log.txt`, `nav-next-watch-landing-{w}.png`). Cause: `go()` in `js/skills.js` ~398 reads `el("sk-steps").getBoundingClientRect().top`. `.steps` is `position:sticky;top:0`, so once it is stuck its rect top is 0. The computed target becomes `scrollY − 4`, and the page moves only 4 px. |
| Back needing multiple presses | **FIXED for skills; STILL PRESENT for sets and essays** | Clean path, home → D1 → Practice → Try → Test → results → "Back to the skill": the first browser Back lands on Home at 390 and 1366 (`c_nav.log.txt`). However, Mixed → Reading → R-LIT-01 practice → in-page "← Back" gives `#reading`, and the next browser Back gives `#reading` again, a dead press. Essay from Home, then "← Back": Home, and the next Back is Home again. |
| Completed practice restarts unexpectedly | **FIXED on the main path; STILL PRESENT via Forward/reload** | "Back to the skill" no longer leaves a practice entry behind. But on the "Great work!" screen, browser Back then Forward gives `#play/SK:3.T.T.1.b:p/practice` at pos 0, stage "work" (restarted). Reload on the done screen also restarts at Q1. After results, Back then Forward ×2 opens a fresh test. |
| Step headings hidden under the sticky step bar | **STILL PRESENT on phones** | A tab press from a scrolled step leaves the heading above or under the bar: 390 Practice→Test heading at −98 to −73 with the bar at 0-73; 320 Watch Me (y=600)→Try heading at −139. At 768 and 1366 the heading is clear only because the shorter page clamps scrollY. Same root cause as row 1. `nav-tab-test-landing-{w}.png`, `nav-tab-try-landing-{w}.png`. |
| Fluency clock scrolling out of view | **FIXED** | While reading, scrolled to word 150, `.flu-ctl` is `position:sticky` at top 0 (36 at 1366) and shows "0:55" (`fluency-reading-{w}.png`). |
| Timed reading jumping to the wrong place | **Mostly FIXED** | At time-up the page moves 46 px (320: y 2490→2444), and the word being read stays on screen (word 150 at y=296). Two leftovers: focus goes to word 1 (`preventScroll` keeps the view, but a screen reader starts at "The"), and the "Grown-up: now tap the last word" line is at y=−1553 (320) and −660 (390), off-screen. Only the sticky clock reads "Time!". See D10. |
| Wrong default fluency passage | **FIXED** | 3.F.F.1.c opens with "Passage 5: true" ("The Backyard Campout"). 3.F.F.1.b opens with Passage 1, which matches its instructions. |
| Large search/filter controls hiding content on phones | **Overlay FIXED; results still hidden (D3)** | `.skill-tools` is `position:static` below 640 px (132 px tall at 320 and 390), so it no longer covers the list. But after tapping the search box and typing "comma", the first result is at y=686 on a 640 px screen (320), and at 732 of 844 (390) before any on-screen keyboard. |
| Print including navigation or clipped content | **Mostly FIXED** | With print media emulated and saved by `page.pdf`, the skill page and trace sheet hide `.bar` and `.steps` (`print-skill-teach-390.pdf`, `print-trace-1366.pdf`). Ctrl+P and the Print button both give 2 pages. Nothing was clipped (the sticky passage pane rule only applies at ≥980 px, and print width is 816 px). Leftovers are in D14: the player prints "Read the passage / Question", the essay prints its tabs, results print 4 action buttons. |
| Merely opening a lesson marks it started | **FIXED (with a caveat)** | After opening D1, `pp.progress.v1` is `null`, and the row stays `is-new` on Home. The caveat: any step change away from Learn It (Next or a tab) writes `taught:true`, which shows "◐ Started" even if the child jumped straight to Test. Low; product decision. |
| Small touch targets | **Mostly FIXED** | Home, skill, player, clue sheet, habits, mixed and sections have no target under 44 px, apart from the skip link (42). Remaining items are listed in D13. |
| Truncated labels | **Mostly FIXED** | No `text-overflow` clipping on any screen at 320. The top-bar brand is hidden ≤420 px, and the step tabs show short names ("Learn/Watch/Practice/Try/Test") with full `aria-label`s. One leftover: the 320 search placeholder needs 295 px and has 250 ("…B3 or 3.T.T.1" is cut). |
| Stale practice feedback carried into the next item | **FIXED across items; STILL PRESENT within an item** | On the next item, `#q-feedback` is hidden and `#q-help-steps` is empty at all widths, for all 3 practice and 3 try items. Within one item, after a wrong Check and then Help, the "NOT QUITE / Try again, or press Help me for a hint." box stays under "Hint 1 of 3" (D11). |
| Inaccurate mastery/progress displays | **STILL PRESENT (Writing card); ring vs list otherwise consistent** | The Writing card ring is `0/10`, but its list shows 12 rows (2 are essays). `catStats()` filters `lessons[k]`, so `task:` entries are dropped. Even after a draft, the essay row is "Started" and the ring stays 0/10. After mastering D1, the Reading ring is 1/24 and the row is `is-mastered`, so they agree. The home bar says "0 of 74 skills that are on the test", while the "On the test" filter lists 76 (74 lessons + 2 essays). |

---

## 3. Current defects

### D1. High: "Next" and step tabs land below the step heading
- **Where:** skill page, all widths (worst at 320 and 390). Selector `#sk-steps` (sticky), `#sk-panel .panel-h`. `js/skills.js` `go()`.
- **Evidence:** see §2 row 1. A child who presses "Next: Watch Me" at the bottom of Learn It on a phone sees the last Watch Me example first.
- **Fix:** compute the target from a non-sticky anchor:

  ```js
  const top = el("sk-panel").getBoundingClientRect().top + scrollY - el("sk-steps").offsetHeight - 8;
  ```

  Always `scrollTo(0, top)` when `scrollY > top`, and give `#sk-panel` `scroll-margin-top` equal to the bar height.

### D2. Medium: category-card jump hides the category heading at 768 and 1366
- **Where:** Home, `.cat-card` click to `#cat-<id>`. `.skill-tools` is sticky (74 px) at ≥640, while `.cat-sec{scroll-margin-top:12px}`.
- **Evidence:** at 768 the Grammar section top is 12 px, under a sticky bar that spans 0-74. Only "…each skill says so." shows (`home-card-grammar-768.png`).
- **Fix:** set `scroll-margin-top` to about 90 px at ≥640.

### D3. Medium: phone search results start off-screen
- **Where:** Home `#skill-search` at 320 and 390. The 5 category cards and the home links push the search box down, and the 132 px wrapped tools block pushes the results further.
- **Evidence:** first result at y=686 of 640 (320) and 732 of 844 (390) with no keyboard showing (`search-typed-comma-{w}.png`). The count "5 skills match." is `role=status`, so assistive tech does hear it.
- **Fix:** on input, scroll so the search box sits at the top, or move the count and results directly under the box. On phones, put the filter row on one line, or behind a "Filters" toggle.

### D4. Medium: dead Back press after the in-page Back on sets and essays
- **Where:** `#player-back`, `#done-back`, `#res-back` for non-skill sets; `#write-back`. `js/app.js` `back()`: `replaceNext=true`, then `openSection()` or `setHash("")` replaces the activity entry with a copy of the entry before it.
- **Evidence:**
  - set practice, then ← Back: `#reading`, and browser Back gives `#reading` again;
  - essay from Home, then ← Back: Home, and Back gives Home again (`c_nav.log.txt`, `e_misc.log.txt`).
- **Fix:** do what the skill path already does. When the previous entry is the return target, call `history.back()` instead of replacing.

### D5. Medium: Forward or reload restarts a finished activity
- **Where:** `#play/...` routes. `route()` always calls `PP_PLAYER.start()` at pos 0.
- **Evidence:** done screen, Back, Forward: practice at Q1. Reload on the done screen gives Q1. After results, Back, Forward ×2: a fresh test.
- **Fix:** when an activity finishes, `replaceState` the `#play` entry with the skill or section hash. Alternatively, keep a "finished" flag in `sessionStorage` and route a finished `#play` entry to the skill step.

### D6. Medium: Writing card count leaves out the essays; on-test totals disagree
- **Where:** Home `.cat-card.cat-writing .cc-ring-n` and `#home-progress`. `catStats()` and `buildProgress()` in `js/skills.js`.
- **Evidence:** ring `0/10`, list 12 rows, 2 essay rows; progress line "0 of 74", filter count 76.
- **Fix:** either count essays in the ring (for example, done = a parent score has been entered), or label the ring "10 skills + 2 essays". Use the same denominator for the progress line and the filter.

### D7. Medium: focus lost after a correct Check
- **Where:** player, practice and try modes, all widths. `check()` hides `#q-check` while it has focus.
- **Evidence:** at 1366, after a correct Check, `document.activeElement` is `BODY` (`g_kbd.log.txt`). A keyboard user has to Tab from the top of the page. A screen-reader user loses their place.
- **Fix:** after a correct Check, move focus to `#q-next`, or to `#q-feedback` with `tabindex=-1`.

### D8. Medium: corrupted essay storage breaks the essay screen
- **Where:** `#write/W-TASK-01` with `pp.task.W-TASK-01 = {"draft":null,"plan":null,...}`.
- **Evidence:** pageerror "Cannot read properties of null (reading 'opinion')". The writing tabs stop responding.
- **Other storage cases behave well:** invalid JSON in all three keys, `"hello"`, `[1,2]` and `null` values in progress, and `localStorage` throwing on access all render Home, skill, essay and skill-writing with no errors.
- **Fix:** in `writing.js` `load()`, check each field's type (`plan`/`scores` objects, `draft` string, `checks` array) before merging.

### D9. Medium: skip link does not move focus
- **Where:** `.skip` to `#main`. `<main>` has no `tabindex`, so after Enter, `activeElement` is `BODY`.
- **Fix:** add `tabindex="-1"` to `#main`, or focus the visible screen's `h1` on activation.

### D10. Low: fluency instructions and result are off-screen on phones
- **Where:** `.flu-say` and `.flu-out` in `renderFluency()`.
- **Evidence:**
  - At time-up, "Grown-up: now tap the last word…" is at y=−1553 (320). Only the sticky clock says "Time!".
  - After the last word is tapped, the result box is at y=982 of 640 (320) and 1225 of 844 (390) (`fluency-time-up-*`, `fluency-result-*`).
  - Focus moves to word 1.
- **Fix:**
  - Put `.flu-say` inside the sticky `.flu-ctl` row.
  - After `finish()`, `scrollIntoView` the result and focus it.
  - Focus the clock or message at time-up, not word 1.

### D11. Low: stale "Not quite" text under the hints
- **Where:** `#q-feedback` after Help. `help()` does not clear the feedback.
- **Evidence:** `practiceD1-q1-wrong-help-{w}.png`.
- **Fix:** call `setFeedback(null)` in `help()` when `fb.kind === "try"`.

### D12. Low: contrast below WCAG AA 4.5:1 (computed from computed styles)
| Selector | Colours | Ratio | Screen |
|---|---|---|---|
| `.std-badge.is-reading/.is-writing/.is-both` ("On the test") | #1E8A52 on #E9F6EF, 12 px bold | 3.93 | Parent guide, Every standard (69 badges) |
| `.clue-h`, `.prompt-label`, `.bar-tag span` ("Practice", "Writing task") | #B4531F on #FDEEE4 | 4.41 | Skill Learn It, essay, player bar |
| `.teach-example .ex-label` | #B4531F on #EDF3FD | 4.49 | Learn It examples |
| `.flu-w.is-past` (words after the last word read) | #A99C8C on #FFF | 2.69 | Fluency result. Intentional de-emphasis; still unreadable for some readers. |
| `.trace-row` | #9AA8BC on #FFF | 2.41 | Trace sheet. Intentional "trace me" grey; non-text exemption arguable. |
| `.btn:disabled` | #8C7F70 on #ECE6DE | 3.15 | Disabled buttons (exempt) |

The hero gradient was sampled from screenshots. The worst sample was 4.84:1, so it passes.

**Fix:** darken `--right` to about #17703F for badges, and `--peach-deep` to about #A0471A.

### D13. Low: remaining small targets
- **Fluency word buttons:** 47 px tall, but 21 of 206 are narrower than 24 px (minimum 9 px, e.g. "a", "I"). Add horizontal padding of about 6 px.
- **Parent guide "Where to practice" external links:** 20 px tall (`#std-list a`). Make them `display:inline-flex; min-height:44px`.
- **Checkbox rows:** `.write-checklist li` rows (skill check-off and skill writing checklist) are 26 px tall at 768 and 1366 for single-line labels (min-height 40 on the li, but the label is smaller). Make the label the full-row target.
- **Elements at 40-42 px:** `.clue-toggle` (40), `.five-min summary` (40), `.skip` (42).

### D14. Low: print leftovers
- **Player:** prints the "Read the passage / Question" tabs (`#tabs`), and below 980 px only the passage pane, because `data-pane` hides the question (`print-player-390.pdf`, `print-player-1366.pdf`).
- **Results:** print 4 action buttons (`print-results-1366.pdf`).
- **Essay:** prints `.wtabs` and only the active panel.
- **Parent guide:** prints `.ptabs`.
- **Fix:** add `#tabs, .wtabs, .ptabs, .panel-actions, .q-controls` to the `@media print` hide list, and show both panes in print.

### D15. Low: tab semantics
- **Where:** `#sk-steps`, `#tabs`, `.wtabs`, `.ptabs`. They use `role=tab` with no `aria-controls`, and the panels have no `role=tabpanel` (except the parent guide's). ArrowRight does nothing.
- **Fix:** add the missing attributes and roving `tabindex` with arrow keys, or drop `role=tab` and use `aria-current` on plain buttons.

### D16. Low: bad routes
- `#skill/NOPE`, `#play/NOPE/test`, `#write/NOPE`, `#foo`, `#skill/`, `#play/` and `#%E0%A4%A` all show Home with the bad hash left in the address bar. There are no errors.
- `#skill/<code>/bogus` is normalised to the code's page, and `#parents/bogus` to `#parents`.
- **Fix:** replace the hash with `""` and show a one-line "That page wasn't found" note.

### D17. Low: leftover nits
- The 320 search placeholder is truncated.
- After a grown-up check-off, the button stays "Mark this skill mastered" (disabled), and the checkboxes stay editable.
- At ≤390, "We practiced this today" is indented 8 px under "Print this practice sheet" (`.go-card .btn + .btn`).
- Trace letters (row 47 px at 390) and blank lines (34 px) differ in size.
- The pass mark `Math.ceil(0.8·max)` means 6 of 7 (86%). The page states the number, so this is a consistency note only.
- Skill results lead with "Practice this set" even after a pass.
- Each parent-guide tab click pushes a history entry, so Back walks through the tabs. That is defensible, but noted.

### Future
- **Visual questions:** there are none. No item or passage contains `img`, `svg`, `canvas` or `figure` (DOM check on the player and PT-1, and a grep of `js/data`). If text-feature items with images are added, they need `alt` text and print checks.
- **Screen reader announcements:**
  - `#q-feedback` and `#q-help-steps` are `aria-live=polite`, and so are the Watch Me steps, fluency `.flu-say`/`.flu-out` and the essay word count.
  - `#q-feedback` toggles `hidden` and changes its content in the same tick. Some screen-reader and browser pairs skip live regions that were `display:none`. Keeping the region always rendered (empty when idle) is safer.
  - The results score box has `role=img` with an `aria-label` ("You scored 6 of 7 points.").

---

## 4. What works (verified)

- **No horizontal overflow** on any screen checked at 320, 390, 768 or 1366: Home, all skill steps, player, results, clues, habits, mixed, sections, parent guide tabs, essay and trace sheet.
- **Reload:** all 37 tested routes reload to the same screen and hash with no console errors. These include encoded and raw `:` codes, `#play/...` for p/y/t/sets/PT-1, `#write/W-TASK-01` and every `#parents/<tab>`.
- **Test in progress:** browser Back, in-page Back and Escape all ask "Leave this test?". Cancel stays on the test, and OK leaves to the skill's Test step.
- **Search:** "comma" (5), "B3" (1), "3.T.T.1" (6), "pronoun" (6), "essay" (3) and a no-match term (empty message shown) all behave. The filters give All 101, On the test 76, Not mastered 99 (habits no longer included).
- **Keyboard:**
  - Logical Tab order on Home: up-next, 5 cards, 4 links, search, 3 filters, then rows.
  - Skill page order: 5 step tabs, page controls, Next, Teach-it summary.
  - Every stop shows a 3 px blue `:focus-visible` outline.
  - Enter and Space operate the rows, tabs, choices (`aria-pressed`) and Check. Escape on a skill returns Home.
- **Skill writing activity (3.T.C.1.c):** text and checkboxes survive a reload. The essay draft survives a reload, and the word and paragraph count updates.
- **Practice and test engine:**
  - Practice Together shows Help at once.
  - Try It Yourself hides Help until the first wrong try.
  - The test gives no feedback, then confirm, results (6 of 7, "You mastered this skill!"), review and "Show me how" through 3 steps to the answer.
  - Mastery writes `{mastered:true,best:{6,7}}`, and Home shows ✓ with Reading ring 1/24.
- **Multi-passage practice test (PT-1, 24 items):** "New passage. Read it, then tap Question." appears 3 times, at passage changes only. On phones the passage tab opens first.
- **Fluency maths:** 151 words read with 1 miss in 60 s gives 150 wcpm and 99%, with the fall norm 83 cited.

---

## 5. Not tested / limits

- **Not tested:**
  - Real screen readers (VoiceOver, TalkBack, NVDA, JAWS). Live-region behaviour was inferred from ARIA attributes only.
  - Real iOS Safari or Android Chrome. Chromium mobile emulation does not reproduce Safari's sticky, `100vh`, on-screen keyboard or print behaviour.
  - A real on-screen keyboard. The D3 results-off-screen problem is worse with one.
  - The real `window.print()` dialog. Print was checked by emulating print media and `page.pdf`, which is the same as Ctrl+P layout but not the browser's own print settings.
  - Real touch gestures (pinch-zoom, swipe-back). Taps were emulated.
  - Text zoom or 200% browser zoom, Windows High Contrast / forced colours, and `prefers-reduced-motion` in effect.
  - Google Fonts (blocked), so Poppins and Nunito metrics may wrap slightly differently live.
  - The fluency timer under real time. It was driven with Playwright's fake clock.
- **Partly tested:** only 3.T.T.1.b was run end to end through all five steps at all four widths. The other skills were spot-checked (3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.3.a, 3.T.C.1.c, the reflexive pronoun skill, the habit page), along with R-LIT-01, PT-1 and W-TASK-01. Not every one of the 101 entries was opened at every width.
- **Contrast:** checked automatically on text over solid backgrounds. Gradient areas were sampled by pixel, and text inside images was not covered (there is none).
