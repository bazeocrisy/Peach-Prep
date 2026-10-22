# 06 · Independent QA and accessibility review: home redesign

**Reviewer:** independent QA and accessibility agent. I did not build this. I was read-only for code and did not use the implementer's screenshots or logs as evidence; every result below comes from my own runs.
**Candidate:** `cd18ef4` on `design/home-start-experience` (`git rev-parse HEAD` = `cd18ef45b3570ea7eb3122a4ac1825fa97555f1c`). The working tree was clean apart from this review's files. Label: "Peach Prep 2.2.0-rc (PP-003)".
**Baseline for comparison:** `main` `9a5b297`, served from a temporary `git worktree` in the scratchpad on port 8621. The worktree was removed afterwards.
**Candidate server:** `node verification/serve.js . 8620`.
**Browser:** Playwright Chromium 1194 (headless). Phones (320×568, 390×844, 844×390) used `is_mobile` and `has_touch`. Google Fonts requests were blocked, as in every suite, so the text used fallback fonts.
**Evidence:** 29 compressed screenshots in [`qa/`](qa/), and the coverage ledger [`07-coverage-ledger.csv`](07-coverage-ledger.csv) with 396 rows. The raw JSON and scripts are in the scratchpad, `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/qa/` (`states.json`, `flows.json`, `keyboard.json`, `axe-cc.json`, `scripts/`).

## Verdict

**Not ready for owner review yet.** One MUST finding remains: QA-01, where the "every lesson checked" message is white on white and cannot be seen. It is a one-line CSS fix. After it is fixed and the D3 state is rechecked, the candidate is ready for owner review. The SHOULD items (QA-02 to QA-06) are real weaknesses, but none of them loses data or misleads about learning. The lead can fix them or record why they were deferred.

Apart from QA-01, the redesign behaves well:
- Every state landed on the correct screen at all seven viewports.
- No render wrote to storage.
- Switching modes lost nothing.
- Every "Opens at" claim matched the step that actually opened.
- Blocked and corrupt storage never crashed the app.
- All regression suites passed.
- The page has one clear primary action per state, and the honesty rules hold.

---

## 1. What I ran (all on the candidate)

| Check | Result |
|---|---|
| `node verification/check-content.js --all` | PASS: 0 failures, the same 6 warnings |
| `node verification/check-writing.js` | PASS: 0 failures, 0 warnings |
| `node verification/check-instructional-copy.js` (COPY-001) | PASS: 28 assertions |
| `python3 verification/path.py http://localhost:8620/ <scratch>` | PASS: 148/148 |
| `AXE_PATH=…/axe.min.js python3 verification/path-a11y.py …` | PASS: 12/12 runs, 0 violations. This suite covers only the choice, intro and path screens, not the browse home |
| `python3 verification/path-headers.py …` | PASS: 48/48 |
| `python3 verification/skills-recovery.py` (UX-002 and short writing) | PASS: 67/67 |
| `python3 verification/writing-recovery.py` (UX-001) | PASS: 75/75 |
| **Full guard**, run with my own scratch copy of `launch-ux-regression.py` (`scratchpad/qa/qa-guard-fixture.py`). Only the port, browser path and output folder are arguments. The fixture string, browser flags and assertions are byte-identical. The output went to the scratchpad, so no committed evidence was touched | PASS: **110/110, exit 0** |
| `git diff 9a5b297 cd18ef4` on `js/writing.js`, `js/pp.js`, `js/engine/*` and `js/data/lessons/*` | Empty. The UX-001, UX-002 code paths, INS-001 and the COPY-001 engine strings are untouched |
| INS-001 read in `L-V3.js` | The `SK-V3a-TB1` "why" still compares buckets picked (eight in week 3, four in week 4) |
| UX-001 through the new home navigation (my own script) | With `setItem` throwing, unsaved short writing in `3.T.SS.1.b` survived: ← back, the path or browse home, header "Browse lessons", a search, then reopening the lesson. The notice showed and there were no errors. Tested in both modes |
| `verification/` folder diff against the baseline | Empty. No test was weakened |

I did **not** re-run `guard.py` directly without the fixture. The implementer reports that it stops at 9.1 on both the baseline and the candidate; I have not verified that.

### State × viewport matrix (`scripts/states.py`): 14 states × 7 viewports = 98 combinations

All storage seeds use the real formats from `js/skills.js` and `js/path.js`:
- `pp.progress.v1` records with `taught`, `learned`, `practiced`, `tried`, `tries`, `best`, `bestMax`, `mastered`, `passedAt`, `passBy`, `passForm`, `lastPassAt` and `attempts[]`, plus `_ui.lastCat`
- grown-up records with `passBy:"grownup"` and `checks`
- `pp.path.v1 {mode, introduced, bookmark{key,step}, finished, habits}`
- `pp.task.W-TASK-01 {plan, draft, checks, scores}`
- `pp.skwrite.<key> {text, checks}`

The states were:
- **A:** first visit.
- **B:** saved work but no mode (seven lessons with saved work, plus an essay and a short-writing draft).
- **C1 to C8:** path mode, with the bookmark at a normal step (Practice Together), at the check, on hands-on Practice, on a hands-on Check, on an essay task, on a drifted lesson, with the path completed, with no bookmark, and with an invalid step.
- **D1 to D3:** browse mode, with no lessons started, with lessons started, and with every lesson passed.

For each combination I checked:
- **Landing screen:** 98/98 correct.
- **Storage:** I compared the full `localStorage` before and after a fresh load. 98/98 were byte-identical, so render writes nothing.
- **Horizontal overflow:** none.
- **Clipped text:** none.
- **Visible `.btn-primary` count:** exactly one in 91 of 98. D3 has none by design (QA-01).
- **Targets:** every visible control on the home screens is at least 44×44 px. Path checkboxes were measured by their label.
- **Computed text contrast:** measured on every visible text node, against the effective solid background. QA-01 is the only failure. The lowest otherwise was 5.38:1 on the choice and path screens and 4.64:1 on browse.
- **axe-core 4.10.2:** tags `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa` and `best-practice`.
- **Copy scan:** forbidden claims and numerals in prose.

---

## 2. Findings

### QA-01 · MUST · The "every lesson checked" message is invisible (white on white)

- **Steps:**
  1. Seed browse mode with every lesson passed: 95 scored passes and 4 grown-up checks.
  2. Load `/`.
- **Observed:**
  - The Up next card shows only the eyebrow "Every lesson checked". It is followed by a large blank area.
  - The sentence "Every lesson has a passed skill check or a grown-up check on this device. Come back to a few each week to keep them fresh." is present but drawn as `rgb(255,255,255)` on a white panel, a contrast of **1:1**.
  - This happens at all seven viewports.
- **Cause:** `css/styles.css:504` `.un-done{color:#fff;…}` was written for the old navy hero. The new `.next-panel` is white.
- **Automated checks missed it.** With axe `color-contrast` enabled, the node is reported only as "incomplete", not as a violation. It was caught by the computed-style check and by looking at the screenshots.
- **Evidence:** `qa/qa-D3-browse-allpassed-390x844-MUST.png`, `qa/qa-D3-browse-allpassed-1366x768-MUST.png`; `states.json` → `contrast.fails`.
- **Fix:** in the redesign block, add `.next-panel .un-done{color:var(--ink)}` (or the panel's body colour), or delete the legacy rule. Then recheck D3 at all seven viewports. Also consider giving this state one action, for example a soft "See lessons marked review" button. Right now the card holds a single sentence and has no action.

### QA-02 · SHOULD · Blocked storage: the notice now sits lower, beside a line that contradicts it

- **Steps:**
  1. Make `window.localStorage` throw (a `SecurityError` getter).
  2. Load `/`.
- **Observed:**
  - The "Saving is unavailable … will last only for this visit" notice now comes **after both choice cards**, directly below the new line "You can switch anytime. **Your progress stays.**" When saving is unavailable, that line is untrue.
  - The notice's top position moved from 878 to 1076 px at 390×844, and from 484 to 748 px at 1366×768, which is the bottom edge of the viewport.
  - On a phone, a parent makes the choice before ever seeing the notice.
- **What works:** the notice does appear on every home screen (choose, intro, path and browse) at 320, 390 and 1366, with no errors. This was true for both the throwing-getter case and the quota (`setItem` throws) case.
- **Evidence:** `qa/qa-storage-blocked-choose-390x844.png`, `qa/qa-storage-blocked-browse-390x844.png`; `flows.json` → area `storage`.
- **Fix:**
  - Hide or replace the "Your progress stays." line when `PP_PATH.storageOK()` is false.
  - Render the `.path-storage` notice above the choice cards. Keep the element and its text, because `path.py` checks it.

### QA-03 · SHOULD · On the browse home, search and the lesson list are much further down

| Viewport | Baseline: search top / first row / page height (px) | Candidate |
|---|---|---|
| 320×568 | 1360 / 1711 / 12154 | **2365 / 2678 / 14524** |
| 390×844 | 1245 / 1548 / 10872 | **2126 / 2413 / 12465** |
| 844×390 | 745 / 971 / 6423 | **1678 / 1888 / 7796** (search is 4.3 screens down) |
| 1366×768 | 729 / 929 / 5417 | **1420 / 1604 / 6378** |

The "Choose a lesson" card promises "Search by word, lesson number or Georgia code…". After choosing it, a parent lands on Up next, the started lessons, the progress panel, the category cards, the explainer and the support row before reaching search. The implementer put the support row above search on purpose (04 §5) to keep it from being buried. The cost is that the main tool of this mode is buried instead.

- **Evidence:** `qa/qa-D2-browse-started-390x844.png`, `qa/qa-browse-search-short-844x390.png`, and the `scripts/listpos.py` output.
- **Fix:** any one of these:
  - put a "Find a lesson" search field (or a skip link to `#skill-search`) directly under the Up next card
  - move the explainer and support row below the list, with an anchor link near the top
  - collapse the progress panel to a single line with a disclosure

### QA-04 · SHOULD · The legend's marks do not look like the marks it explains

- **In the lesson list:**
  - a passed check is a white ✓ in a green disc
  - a grown-up check is a **purple filled pill**, "✓ grown-up"
  - "review" is a **purple outlined pill**
- **In "What the marks mean"** every mark is plain green text.
- **"Step done" and "Passed the skill check" use the identical green ✓**, so only the words tell them apart.
- **"◐ Started"** renders as a tiny sliver with the fallback font. It is the same glyph the list uses, so it should be checked again with the real fonts.

The wording keeps passed, grown-up checks, started and coverage clearly apart, which meets the brief. Only the visual key fails.

- **Evidence:** `qa/qa-D2-legend-open-390x844.png` (legend); for the list, the B3 "✓ grown-up" pill in `scratchpad/qa/shots/list-marks-390.png`.
- **Fix:** build each legend mark with the same classes the list uses (`.sl-done`, `.sl-done.by-grownup`, `.sl-review`, `.sl-started`). Show "Step done" as it appears on the step bar.

### QA-05 · SHOULD · Empty space in the "Choose a lesson" card on tablet and desktop

The two cards are stretched to equal height, and the browse card's button sits at the bottom. The gap between the last line of text and the button is:

| Viewport | Empty gap |
|---|---|
| 1366 and 1920 | 162 px |
| 1024 | 165 px |
| 768 | **275 px** |

The secondary card looks half-finished next to the full Learning Path card.

- **Evidence:** `qa/qa-A-first-visit-1366x768-full.png`, `qa/qa-A-first-visit-768x1024.png`, and the ledger rows "layout probes".
- **Fix:** fill the space with something useful, for example a non-functional preview of the three filters, or two or three example searches as chips that open the list already filtered. Or place the button straight after the text and let the cards differ in height. At 768 the cards could stack, as they do on phones.

### QA-06 · SHOULD · Welcome-back links send passed lessons to the skill check

- **Steps:**
  1. Seed state B.
  2. The welcome box lists "B3 · Reading accurately", "D1 · Story elements" and "E1 · Story clues".
- **What the links open:**
  - B3 is grown-up checked. Its link opens at **Check**.
  - E1 has a passed scored check. Its link opens at **Test Your Knowledge**.
  - D1 correctly opens at Practice Together.
- **Why it is wrong:**
  - `firstOpenStep` falls back to the last step when every step is done, so a returning child is dropped straight into a test.
  - The links are in catalog order, so lessons already passed can take up all three slots ahead of the lessons actually in progress.
- **What is fine:** the accessible names say "Opens at …", and that wording was accurate in every case. Mode and storage were unchanged afterwards.
- **Evidence:** `qa/qa-B-saved-no-mode-390x844.png`; `flows.json` → area `welcome-back`.
- **Fix:**
  - List lessons with status `started` first, as browse D already does with `startedLessons("started")`.
  - Open passed lessons at Learn It, or show them only in the count.

### QA-07 · NOTE · An essay bookmark says "step 1 of 4", but the essay has five tabs
The path card says "Opens at: 1. Read (step 1 of 4)". The task has the tabs 1. Read, 2. Plan, 3. Write, 4. Check and For parents. "Of 4" is defensible, because the child steps are numbered one to four, but it does not match what the parent sees. Either write "1. Read, the first of four steps" or leave it as it is and record the reasoning. (`qa/qa-C4-path-essay-1366x768.png`)

### QA-08 · NOTE · The drift link comes before the primary button and competes with it
"Suggested next on the path: …" is underlined bold blue and wraps to four lines at 320 px. It is also the first Tab stop on the card, ahead of "Continue the Learning Path". Put it after the button in the DOM, or make it smaller. (`qa/qa-C3b-path-handson-check-320x568.png`, `qa/qa-C5-path-drift-390x844.png`)

### QA-09 · NOTE · The wordmark is hidden under 400 px on the path screen only
At 390 and 320 the path header shows only the peach icon, with "Lessons" and "Parents". The choice and browse headers still show "Peach Prep". The name is still read by screen readers, but the visual identity changes between screens. (`qa/qa-C1-path-step-390x844.png` compared with `qa/qa-A-first-visit-390x844.png`)

### QA-10 · NOTE · axe best-practice `landmark-complementary-is-top-level` on `aside.path-alongside`
This appeared on every path state at every viewport. It is **present on the baseline as well** (checked on 8621). It is not WCAG-tagged. A fix is to use `<section aria-labelledby>` instead of `<aside>` inside `<main>`.

### QA-11 · NOTE · The sticky search partly covers rows focused with Shift+Tab
I tabbed backwards through 30 list rows. The sticky bar partly covered the focused row in 10 of 30 stops at 1366×768 and 2 of 30 at 768×1024. On the baseline it was 12 of 30 at both sizes, so the redesign made this slightly better. A row is never entirely hidden, so this passes WCAG 2.2 2.4.11 (AA). A fix is `scroll-padding-top` on `html`, set to the bar's height, at the widths where search is sticky. Search is correctly **not** sticky at heights under 560 px (844×390, 1366×500, 568×320) or below 640 px wide.

### QA-12 · NOTE · State B misses families who saved only writing
State B reads `pp.progress.v1` only. A family whose only saved work is an essay draft (`pp.task.*`) or short writing sees the first-visit screen, with no welcome-back line. Their drafts are safe; only the greeting is missing. The implementer documented this (04 §5).

### QA-13 · NOTE · The primary action is below the first screen in some states

| State and viewport | Where the primary sits |
|---|---|
| A at 320×568 | "Start the Learning Path" ends at 824 px |
| B at every viewport | The welcome-back box pushes the choice cards down |
| C4 (essay) at 320×568 | Below the first screen |

At 844×390, A's and C's primaries are both visible in the first screen, as the brief requires.

### QA-14 · NOTE · Accessible names do not include some visible text (label-in-name)
The axe experimental rule `label-content-name-mismatch` flags 106 nodes on the browse home: category cards and list rows. Example: the visible "Reading | 1/24 | Next: D1 Story elements" against the name "Reading. 1 of 24 lessons passed or checked by a grown-up. Next: D1, Story elements: …". Every name begins with the visible name, so speech commands like "click Reading" work. The aria-label pattern predates this redesign. The candidate improved the wording, which no longer says "checks passed".

### QA-15 · NOTE · Small items
- **Search label.** Search has no visible label, only a placeholder. The label is visually hidden. This predates the redesign.
- **Hyphen wrap.** "Hands-on lessons checked by a grown-up" wraps as "grown-" / "up" at 390. Use a non-breaking hyphen.
- **Small text.** `.sl-done` ✓ (12.8 px, an icon in a 22 px disc) and the build badge are under 14 px. They are glyph and label exceptions, not prose.
- **`#main` route.** With no saved mode, a reload at `#main` lands on the lesson catalog, not the choice screen. This predates the redesign (`route()`).

### QA-16 · NOTE · Test tooling
- **`path-a11y.py` misses the browse home.** It covers only the choice, intro and path screens. The browse home, where QA-01 is, has no automated contrast suite. Extend `path-contrast.js` to `#screen-home`, including the D3 state.
- **axe `color-contrast` does run in this Chromium.** The `path-a11y.py` header says it crashes the packaged renderer. It ran in 98 of 98 combinations here. Even so, it reported QA-01 only as "incomplete", so keep the computed-style check as well.

---

## 3. Area-by-area results

### First-use choices (`flows.json`: first-use and mode-switch, at 390×844, 1366×768 and 844×390)
- **Start the Learning Path.** The intro opens and `mode` stays unsaved until Start. The intro shows exactly one primary.
- **"See the whole path".** It opens Phase 1 and moves focus to its summary.
- **Start ("Start with D1 · Story elements").** It saves `{mode:"path", introduced:true}` and moves focus to `#path-next`. The new card reads "Start this lesson", **not** "Continue", which is correct.
- **Choose a lesson.** It saves `mode:"browse"` and focus lands on `#home-title`.
- **Round trip.** I started in path mode, with drafts for both essay tasks, short writing, `pp.dev`, a bookmark, finished ticks and habits. Then I went through:
  1. header "Browse lessons", which kept the mode
  2. a reload at `#browse`, which stayed on browse
  3. "Back to the Learning Path"
  4. "Switch learning mode", where the choice reads "Back to the Learning Path"
  5. Choose a lesson, which switched the mode to browse
  6. a reload at the root, which went to browse
  7. "Back to the Learning Path"
  8. Continue

  Result: **every key except `pp.path.v1` was byte-identical**, and `finished`, `habits` and `bookmark` were unchanged inside `pp.path.v1`. Continue still opened Try It Yourself.

### Continue and "Opens at" (C states, at 390 and 1366)

| State | Card says | What actually opened |
|---|---|---|
| C1 | Practice Together (step 3 of 5) | Practice Together |
| C2 | Test Your Knowledge (step 5 of 5), plus "The skill check starts fresh each time." | Test Your Knowledge |
| C3 | hands-on Practice (step 3 of 4) | Practice. The real step bar has four steps |
| C3b | Check (step 4 of 4) | Check |
| C4 | 1. Read, plus "saved plan and draft open with it" | 1. Read, and the draft loaded |
| C5 | Try It Yourself (step 4 of 5) | Try It Yourself |
| C8 (invalid step) | Learn It (step 1 of 5) | Learn It |

- **Drift link (C5).** It opened E3 at Learn It and moved the bookmark there.
- **Continue wording.** "Continue" appears only when the bookmark is on the card's lesson. C7, with no bookmark, reads "Start this lesson" and opens at Learn It.
- **Completed path (C6).** It shows "does not establish mastery of every standard", and its only primary is "Browse lessons".
- **Browse D2.** The Up next card ("Already started: it opens at Watch Me") opened Watch Me. All three "Lessons already started" buttons opened their stated step. Opening them wrote nothing to storage.

### Browsing (all seven viewports)
- **Search.** "pronoun", "D3", "3.T.T.1" and "essay" return results, with counts in words ("Four lessons match.").
- **Empty results.** "zzqx" gives "No lessons match "zzqx". Try a shorter word…". The same query with the Not-passed filter gives "…with this filter. Choose All…". In D3, the "Not passed yet" filter gives its own message.
- **Clear search and filters.** It restores the list and focuses search.
- **Reload.** It resets search and filter to All and stays on the browse screen.
- **Filters.** They sit on one row at every width, at least 44 px tall.
- **Category cards.** They scroll to their section. Rings line up at 1024 and wider.
- **Back and Forward.** They move between the home and the lesson at the right hash.
- **Direct links.** I opened 22 routes in each of three modes (66 loads):

  | Routes | Result |
  |---|---|
  | `#choose`, `#path`, `#browse` | Open their screens |
  | `#skill/…/practice`, `#skill/…/test` (hands-on) | Open the lesson at that step |
  | `#skill/…/bogus` | Learn It |
  | `#play/…:p`, `#play/…:t` | The player |
  | `#write/W-TASK-01` | The essay task |
  | `#parents`, `/standards`, `/plan` | The parent guide tabs |
  | `#clues`, `#habits`, `#mixed`, `#reading` | Their screens |
  | `#skill/NOPE`, `#write/NOPE`, `#no-such-page`, malformed `%E0%A4%A` | The catalog, with the visible not-found note |

  None of the 66 loads produced a page error.

### Blocked and corrupt storage
- **Throwing `localStorage` getter, and `setItem` quota errors** (320, 390 and 1366): the notice appears on choose, intro, path and browse. Lessons open. There are no errors. Placement is QA-02.
- **Corrupt data** (390 and 1366):
  - invalid JSON in every key
  - wrong types (`[1,2]`, `"str"`, `null`)
  - malformed nested records (UX-002 style, including `__proto__`, string records and a numeric bookmark key)
  - a bookmark to an unknown lesson
  - malformed browse progress with an unknown `lastCat`

  Every case landed on a sensible screen, opened a lesson, switched steps and produced no page error.

### Keyboard
- **Tab order.** I took 45 Tab stops on each of A, B, C5 and D2, at 390 and 1366, with no touch emulation. The order follows the visual order. The only oddity is the drift link coming before the primary (QA-08).
- **Starting focus.** On load, focus is on the screen's H1, so the first Tab goes to the primary. The skip link and header come after one full cycle. This is the existing focus pattern.
- **Focus ring.** It is a 3 px `#1B4FA8` outline with a 3 px offset on every stop. Measured against the background just outside the element, it is **6.9:1 to 7.69:1**. On the navy primary the ring sits outside the button, against white, at 7.69:1. No stop lacked a visible indicator.
- **Activation.** All of these worked at both widths:
  - Enter on the choice button
  - Space on Start
  - Enter on Continue
  - Escape back to the path
  - Enter on the "How a lesson works" summary
  - Enter on header Browse lessons
  - Space on a filter, which sets `aria-pressed`
  - Space on the legend, which stays open while typing in search
  - Enter on a support link

### Automated accessibility checks (axe-core 4.10.2, injected from the scratchpad)
- **Main run:** WCAG 2 A/AA, 2.1 A/AA, 2.2 AA and best-practice, on the visible screen, 98 combinations. 0 WCAG violations. The only best-practice result is QA-10, which also occurs on the baseline.
- **Second run:** `color-contrast`, `target-size` and `link-in-text-block`, on every state and viewport, with every `<details>` on the screen opened. 0 violations. "Incomplete" results:
  - the legend glyphs, which I verified manually at 6.13:1
  - `.un-done`, which is QA-01
- **Rules I disabled, and why:**
  - **`region`** (best-practice) in the main run, because the `.screen` sections sit inside `<main>`. I ran it separately on A, C1 and D2: 0 violations.
  - **`color-contrast`** in the main run only, to keep that run fast. It ran in full in the second run.
- **Not run:** the experimental rules. `label-content-name-mismatch` was run by hand once (QA-14).

### Honesty and copy
- **Forbidden words.** No "continue where you left off" and no "resume". "Mastery" and "place" appear only in negations: "not proof of mastery", "not mastery scores", "does not establish mastery", "does not place your child". "Master" appears only in Georgia's chart label.
- **Number words.** In prose, counts below ten are words ("seven lessons", "four more", "One passed skill is", "plus two essays", "Four lessons match", "four to six questions", "seven days"). The numerals left are in stats ("2 of 74", "0 of 101"), ratios, 80%, step numbers and codes.
- **Progress legend.** It keeps started, step done, passed the skill check, checked by a grown-up, review, category ring and activities finished as separate entries, and says standards coverage describes the site, not the child. The visual mismatch is QA-04.
- **Step counts.** Every "step N of M" matched the real step bar. The only exception is the essay's "of 4" (QA-07).

---

## 4. Design quality, honestly assessed

- **Hierarchy.** Clearly better than the baseline.
  - On the baseline browse home, two navy and peach primaries compete ("Up next" and "Follow the Learning Path"). The baseline choice screen is two equal cards under the vague heading "How would you like to learn?".
  - In the candidate, every state has one primary (QA-01 aside).
  - The path's "Next on your Learning Path" card is the strongest thing on its screen and says exactly what will open.
- **First visit.** A parent gets a plain hero, a "Recommended" tag, three honest bullets and the five-step explainer (open by default).
- **Phone layout.** The cards stack cleanly. Nothing scrolls sideways at 320 px.
- **Visual balance.** Weaker than the hierarchy.
  - The "Choose a lesson" card is half empty at 768 px and wider (QA-05).
  - The D3 card is blank (QA-01).
  - The browse home is now about 15% taller, and its main tool, search, is a long way down (QA-03).
  - The legend reads as a column of green text rather than a key to the marks (QA-04).
- **Twenty-second test (my judgement, not a family test).**
  - **First visit:** a busy parent can tell what the site is, that the path is suggested and not a placement, and where to press, all within the first screen at 390×844 and wider. Small phones (320×568) need one scroll.
  - **Returning path family:** the next action is immediately clear.
  - **Returning browse family:** Up next is clear. A parent who wants a specific lesson has to scroll past several panels.
  - **Saved-work family:** the welcome-back box helps, but its links can start a test (QA-06).
- **Compared with `before/`.** The three screens now share a header, width, card style and type scale, and look like one product. The implementer removed the baseline hero's white-on-peach button, which their documents report as 3.00:1. I did not measure the baseline hero myself. The candidate's lowest computed text contrast is 4.64:1, and it is 5.38:1 on the choice and path screens.

## 5. What I could not test
- Real devices: iPhone, iPad and Android.
- Safari and WebKit, and Firefox. Only Chromium was used.
- Screen readers: VoiceOver, TalkBack and NVDA. Accessible names were checked through the DOM and axe only.
- Native pinch zoom, browser text zoom at 200% and OS large-text settings.
- The real web fonts (Poppins and Nunito), which were blocked. Line wraps, the "◐" glyph and button widths may differ slightly in production.
- Physical touch accuracy and viewing distance.
- Parent and child use: no family has tried this.
- Guard run directly without the fixture. I did not rerun it; the implementer's claim stands unverified.

---

## Final re-review (595ef01)

**Candidate:** `595ef011fb5b065f1096dc2473c78631c5da5a7a` (`git rev-parse HEAD`). The working tree was clean.
**Code changed since the first review (`7d05b59..595ef01`):** `index.html`, `css/styles.css`, `js/app.js`, `js/path.js`, `js/skills.js`.
**Code not changed (confirmed by `git diff 9a5b297 595ef01`, which is empty):**
- `js/writing.js`, `js/pp.js`, `js/engine/*` and `js/data/lessons/*`
- `verification/`

**How I checked.** I did not rely on the "After QA" section of 04. I read the diff, then re-ran everything:
- the 14 × 7 sweep
- 266 behaviour checks
- keyboard
- axe, plus my computed-contrast measurement with every home `<details>` open
- every regression suite
- the full guard
- a new targeted script for each finding (`scratchpad/qa/scripts/recheck.py`)

The server ran on 8620 and the results are in `scratchpad/qa/final/`. Ten new screenshots are named `qa/qa-final-*.png`.

### Finding by finding

| ID | Status | Evidence |
|---|---|---|
| **QA-01 MUST** | **FIXED** | The D3 (all passed) text is dark on white at all seven viewports. The computed-contrast check found 0 failures, with the screen's lowest ratio at 4.64:1. The card now has one soft action, "Mixed practice and practice tests", and no primary, which is correct. The leftover hero rules were deleted; a grep for `.hero`, `.btn-ghost`, `.un-label` and `.hero-title` finds no uses left in the HTML or JS. See `qa/qa-final-QA01-allpassed-390x844.png` and `qa/qa-final-QA01-allpassed-1366x768.png`. |
| QA-02 | **FIXED** | With storage blocked, the notice now sits above the choice cards and is fully in the first view. Its top is at 288 px (390×844), 289 px (1366×768) and 158 px (844×390). "You can switch anytime. Your progress stays." is hidden when storage is blocked and visible otherwise. On the browse home the notice sits above Up next. Blocked and quota storage gave no page errors. See `qa/qa-final-QA02-storage-blocked-choose-390x844.png`. |
| QA-03 | **PARTLY** | Search top with my D2 seed is in the table below. The "How a lesson works" link opens and focuses the explainer at the bottom, and "Parent guide" goes to `#parents`. Both are 44 px tall. Search is now 325 to 707 px higher than in cd18ef4, but still 225 to 556 px lower than on main, mostly on phones. The implementer's figures came from a different seed; mine has three "already started" buttons. **I accept this as is.** The brief's order is followed and the help links are reachable near the top. I downgrade it to a NOTE. |
| QA-04 | **FIXED** | The legend builds each mark with the same code the lesson list uses: "◐ Started", the green step disc, "✓ passed", "✓ grown-up", "review", a real ring and the leaf tick. "Step done" (a disc) and "Passed the skill check" (a "✓ passed" pill) now differ in both shape and words, and every mark carries a word. The row aria-labels did not change (checked: "…Passed the skill check. Review suggested."). **New NOTE (QA-17):** a screen reader hears each legend term's word twice, for example "Started Started" and "✓ passed Passed the skill check". See `qa/qa-final-QA04-legend-390x844.png` and `qa/qa-final-QA04-list-marks-390x844.png`. |
| QA-05 | **FIXED** | From 640 px wide, the "Choose a lesson" card is as tall as its content. The space is 24 px above its button and 21 px below at 768, 1024, 1366 and 1920. The new category chips are static list items. **NOTE (QA-18):** the chips look a little like buttons (filled tiles with a coloured edge), so a parent may tap them. See `qa/qa-final-QA05-first-visit-1366x768-full.png`. |
| QA-06 | **FIXED** | In state B the in-progress lessons come first (D1, J3, N2). When a family has only passed lessons, B3, E1 and N1 each opened at **Learn It**, never at a check, and each aria-label said so. Mode and storage were unchanged after using the links. See `qa/qa-final-QA06-saved-work-390x844.png`. |
| QA-07 | **FIXED** | The card says "Opens at: 1. Read (tab 1 of 5)", which matches the five real tabs. The saved draft loaded. |
| QA-08 | **FIXED** | The tab order is `#path-next` and then `#path-suggested`, at 390 and 1366. The drift link is smaller and sits below the button. The drift link still opens E3 at Learn It and moves the bookmark. |
| QA-09 | **FIXED** | "Peach Prep" shows on the path screen at every width: 92 px wide at 320 and 390, with no sideways scroll. The header buttons are 44 px tall. See `qa/qa-final-QA08-09-path-drift-320x568.png`. |
| QA-10 | **FIXED** | axe (WCAG plus best-practice) finds 0 violations on the whole path document. The `.path-alongside` class stays, so path.py still passes. |
| QA-11 | **FIXED** | Shift+Tab through 30 list rows leaves 0 partly covered at both 768×1024 and 1366×768. Before, it was 2 and 10. |
| QA-12 | **FIXED** | A family with only an essay draft sees "saved work on one essay", and the link opens the task with the draft loaded. A family with only short writing sees "one lesson", which opens at Learn It. A blank short-writing draft, or corrupt `pp.task`/`pp.skwrite` JSON, shows no welcome box and gives no errors. With storage blocked the screen falls back to state A with no errors. **Small NOTE:** the essay link's aria-label reads "…skate park?. Your saved draft opens with it."; drop the full stop after the question mark. |
| QA-13 | **NOT FIXED: reason accepted** | The primary is still below the first screen for A at 320×568, for B at every viewport, and for D3, which has no primary by design. C4 at 320 is now in view. The implementer's reason holds. The bullets that push the button down are the brief's honesty content. B's welcome box is the purpose of that state. At 844×390, which the brief names, the A and C primaries are in the first screen. |
| QA-14 | **NOT FIXED: reason accepted** | axe still flags 106 nodes with the experimental `label-content-name-mismatch` rule. Every accessible name starts with the visible label, so voice control works. Guard 9.8 and 11.11 assert these labels. Changing them is reasonable future work, not a blocker. |
| QA-15 | **PARTLY: reasons accepted** | "grown-up" now stays on one line in the progress rows and the legend. The list's ✓ is now a 14 px pill, so the only text under 14 px is the build badge. The visually hidden search label and the `#main` route predate the redesign and are recorded for 05. |
| QA-16 | **NOT FIXED in the repository: reason accepted** | Editing `verification/` was outside the implementer's brief. **Lead action:** add `#screen-home`, including the all-passed state, to `path-a11y.py`'s contrast run. Also correct its header, which says axe `color-contrast` crashes the browser. It ran in 98 of 98 combinations here, and I ran it again in this round. |

Search top on the browse home, in px:

| Viewport | main 9a5b297 | cd18ef4 | 595ef01 |
|---|---|---|---|
| 320×568 | 1360 | 2365 | 2007 |
| 390×844 | 1245 | 2126 | 1801 |
| 844×390 | 745 | 1678 | 971 |
| 768×1024 | not measured | not measured | 1316 |
| 1024×768 | not measured | not measured | 1067 |
| 1366×768 | 729 | 1420 | 1042 |
| 1920×1080 | not measured | not measured | 1042 |

### Regression sweep on 595ef01

- **14 states × 7 viewports (98 combinations).** All 98 had no issues:
  - correct landing screen
  - every storage key byte-identical before and after a fresh load
  - no sideways scroll or clipping
  - no targets under 44 px
  - no computed-contrast failures (lowest 5.38:1 on the choice and path screens, 4.64:1 on browse)
  - no axe violations, WCAG or best-practice
  - no page errors
  - no numerals in prose

  Every state has exactly one primary, except D3, which has none by design.
- **Second axe run.** `color-contrast`, `target-size` and `link-in-text-block`, with every home `<details>` open: 0 violations. The only "incomplete" results are the legend's `.step-n` and `.lg-box`, white ✓ on green (#17703F is 6.13:1). A separate computed-contrast run with details open found 0 failures for A, D2 and D3 at 320 and 1366.
- **Behaviour checks: 266 of 266 passed.** They covered:
  - every "Opens at" claim against the step that actually opened, in C1 to C8 and on browse D2
  - the drift link
  - Continue wording only with a bookmark
  - the welcome-back links
  - first-use Start and Choose a lesson
  - the mode-switching round trip, with drafts for both essays, short writing, `pp.dev`, a bookmark, finished ticks and habits: **every key except `pp.path.v1` byte-identical, and `finished`, `habits` and `bookmark` unchanged inside it**, at 390×844, 1366×768 and 844×390
  - search, filters, empty results, clearing, reload, sticky search, and Back/Forward at all seven viewports
  - 66 direct-link loads in three modes, with no page errors
  - blocked and quota storage at 320, 390 and 1366
  - five kinds of corrupt storage at 390 and 1366
- **Keyboard.** I took 45 Tab stops on each of A, B, C5 and D2, at 390 and 1366. Every stop has a visible 3 px ring, at 6.9:1 to 7.21:1 against its surroundings. The ten activation checks (Enter and Space on choices, Start, Continue, Escape, the explainer, header Browse lessons, a filter, the legend, and a support link) all passed at both widths. The new help links are 44 px tall and work.
- **Layout probes.** There is no overflow at any of the nine sizes. Search is sticky only at 640 px wide and 560 px tall or more. Category rings line up at 1024 and wider.
- **Regression suites, run by me:**

  | Suite | Result |
  |---|---|
  | content | 0 failures, 6 warnings |
  | writing | 0 failures, 0 warnings |
  | copy | 28 |
  | `path.py` | 148/148 |
  | `path-a11y.py` | 12/12 runs, 0 violations |
  | `path-headers.py` | 48/48 |
  | `skills-recovery.py` | 67/67 |
  | `writing-recovery.py` | 75/75 |
  | **Full guard** through my scratch fixture launcher (`qa-guard-fixture.py`, output to the scratchpad) | **110/110, exit 0** |

### New items found in this round (all NOTE)
- **QA-17:** each legend term is read twice by screen readers ("Started Started"). Give the legend mark `aria-hidden="true"`; the term next to it already names it.
- **QA-18:** the five category chips in "Choose a lesson" look tappable but do nothing. Make them plainer (no fill), or make each one open the list scrolled to that category.
- **QA-19:** in the list, the passed mark lost its `title` tooltip (`passLabel`). The word "passed" now covers the meaning, so this is cosmetic.

No new MUST or SHOULD issue was introduced by the fixes.

### Still not tested
- Real devices: iPhone, iPad and Android.
- Safari and WebKit, and Firefox.
- Screen readers: VoiceOver, TalkBack and NVDA.
- Native pinch zoom and 200% text zoom.
- The real web fonts, which were blocked.
- Parent and child use.
- `guard.py` run directly without the fixture.

### Verdict for 595ef01

**READY FOR OWNER REVIEW.** No MUST items remain.
- QA-01 is fixed.
- QA-02 and QA-04 to QA-12 are fixed.
- QA-03 is partly fixed and accepted as a NOTE.
- QA-13 to QA-16 remain open with reasons I accept. QA-16 needs a small change by the lead in `verification/`.
- The three new items (QA-17 to QA-19) are NOTEs.

This verdict covers Chromium emulation only. It is not device, Safari, screen-reader or family acceptance. Those still have to be done before merge approval.
