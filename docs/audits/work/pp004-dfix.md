# PP-004 fix log: dfix (UX and accessibility review fixes)

- **Agent:** dfix, the only code-editing agent at this point. Worktree /home/claude/pp-fix, branch `pp-003-fixes`. No git commands run.
- **Source of findings:** docs/audits/PP-004-UX-ACCESSIBILITY.md (Agent D). Finding IDs below (U-n, F-n) are that file's.
- **Server:** `node verification/serve.js . 8502` (PID in the scratchpad `dfix/serve.pid`), stopped by PID at the end.
- **Evidence folder:** /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/dfix/
  - `probe.py`: one Playwright script that reproduces every finding below. It was run on the unchanged build (`probe-before.json`) and on the fixed build (`probe-after.json`). The same script, the same widths, the same taps.
  - Screenshots `*-before.png` / `*-after.png`, plus `top-320-{check,try,writing}-after.png` and `watch-tc2c-390-viewport-after.png` (from `shots.py`).
  - `g16.py`: guard section 16 run on its own while writing it. `guard-full.log`: the full guard run.
- **Official requirement:** these are accessibility and screen-quality fixes, not standards content. The requirement cited is WCAG 2.2 (1.3.1 Info and Relationships, 2.4.7/2.4.11 Focus Visible / Not Obscured, 2.5.8 Target Size) and the site's own rules in `css/styles.css` ("Every control is at least 44px tall", "Colour is never the only signal"). No GaDOE standards wording, item key, scoring rule or stored-progress field was changed.

## Reproduced before fixing (probe-before.json)

| Finding | Before (measured on this build) |
|---|---|
| U-1 | Watch Me and passage `aside.passage-box`: `role` null, `aria-label` null; Chromium a11y tree: an unnamed `complementary` with the paragraph. Box tint rgb(232,244,236) vs "Answer:" box rgb(233,246,239), nearly identical greens. |
| U-2 | 320 px: "Skill check" needs 102 px, has 85, clipped; "Try it yourself" 124/85; "Writing task" 115/85; "Practice" 85/85 and still 3 px over the edge. |
| U-3 | `.score-steps > summary`: `display:flex`, no `::marker`, no `::before`. |
| U-4a | Watch Me "Show the next step" (focused) below the screen: 3.T.C.2.c 1 of 9 taps at 320 and 390; 3.L.V.3.a 1 of 9 at 390, 2 of 9 at 768; example at 390: button y=871-917 on an 844 px screen. |
| U-4b | Wrong Check on SK:3.T.C.1.b practice/try: Check (focused) and Help me below the screen at 320, 390 and 768 (e.g. 390: y=844-890 on 844). |
| U-5 | "Where the support is in the sources" summary 22 px tall at 768 and 1366 (43 at 320). Fluency self-corrections input 77x40. |
| U-6.1 | Print media: `#passage-note` display:block; essay Score tab prints "Start this task over". |
| U-6.4 | `.skill-search:focus`: outline none, 3 px #EDF3FD halo. |
| U-6.5 | After a category card jump, focus stays on the card (390: y=-880, off-screen); next Tab goes to the next card. |
| U-6.6 | `#q-bar` on a 4-item set: 0%, 25%, 50%, 75%. |
| U-6.7 | Set titles "Test", "Test (form A)", "Test (form B)" vs step "Test Your Knowledge" vs tag "Skill check". |
| U-6.8 | W-REV-01-5 `why`: "Paragraph 2 is about…" on a draft with no paragraph numbers. |
| F-2 | SK-TC1b-P10 alt: "It shows a dam of sticks with water spilling over it." The drawing is a stick pile on flat water. |
| F-3 | Form B Figure 1 alt (3.L.V.3.a p3): "The vent is a round opening at the very top of the balloon", close to SK-V3a-TB5's key "an opening at the very top of the envelope". |

## Changes

### 1. U-1 (MUST) Text boxes named for screen readers, and drawn unlike the green Answer box
- **Deficiency:** a text box was marked only by its green tint and border. SK-TC1b-T2 (scored, form A of 3.T.C.1.b) asks "How does the text box add to the article?", and 3.T.C.2.c Watch Me steps say "Read the text box". A screen-reader user heard the box text run on with no boundary or name. The Watch Me box also looked like the green "Answer:" box next to it.
- **Requirement:** WCAG 2.2 SC 1.3.1 Info and Relationships; the stylesheet rule "Colour is never the only signal".
- **Files:**
  - `js/engine/player.js`: new `textBox()` (exposed as `PP.textBox`). It returns `<aside class="passage-box" role="note" aria-label="Text box">` with a `p.para-body` that starts with `<span class="sr">Text box: </span>`. The passage renderer (the `isBox` branch, formerly ~line 84) now uses it; the sentence spans and their `data-ref`s are unchanged, and the hidden span sits outside them, so hot-text, clue highlighting and refs are unaffected.
  - `js/skills.js` `lines()`: the "Box: " lines in Learn It / Watch Me examples use the same `PP.textBox()`.
  - `css/styles.css` `.passage-box`: blue tint `--sky-tint` (#EDF3FD), `--sky-edge` border and a 5 px `--sky` (#1B4FA8) left edge, instead of the leaf green. This also separates text boxes from the green "That's right!" feedback in the player.
- **Decision (documented):** I used both `role="note"` + `aria-label` and the hidden lead-in. Some screen readers do not announce a note's name in browse mode; the lead-in is read in reading order by all of them. The cost is that some readers may say "Text box" twice. No visible "Text box" label was added, because Milestones passages do not label their text boxes and items such as SK-SS1a-P5 / R-INF-01 ask the child to recognise the box.
- **Verification:**
  - After: every box has `role: note`, `label: Text box`; the a11y snapshot reads `note "Text box": paragraph: "Text box: A monarch can taste with its feet…"`.
  - Contrast of body text #16304F on the new tint: 12.0:1 (was 11.84:1). The left edge is #1B4FA8 on white, about 7.7:1 (non-text, ≥3:1).
  - Screenshots `watch-tc2c-390-before.png` / `-after.png`, `passage-box-390-before.png` / `-after.png`, `watch-tc2c-390-viewport-after.png` (blue box with a thick left edge above the steps; green Answer box below).
  - Guard 16.1 and 16.2 (below).
- **Remains:** not tested with a real screen reader (NVDA, JAWS, VoiceOver, TalkBack). Print keeps the 5 px edge; whether the browser prints the tint depends on the print settings.

### 2. U-2 (SHOULD) Mode tag no longer truncated at 320
- **File:** `css/styles.css`, after `.bar-tag span`: `.bar-tag{overflow:visible;white-space:normal}`, `.bar-tag span{max-width:100%}`; at ≤360 px the pill uses .8rem, line-height 1.2, 3px 8px padding and a 12 px radius so a two-line tag still looks like a tag. The labels themselves are unchanged ("Skill check", "Try it yourself", "Writing task", "Practice", "Test").
- **Verification:** at 320, every tag fits: "Skill check" 83/85, "Try it yourself" 83/85, "Practice" 71/73, "Writing task" 83/85, none clipped (`probe-after.json`). `top-320-try-after.png` shows "Try it / yourself" on two lines between Back and Home. Guard 16.3 at 320/360/375/390.
- **Remains:** the bar is about 7 px taller at ≤360 px when the tag wraps.

### 3. U-3 (SHOULD) Disclosure marker on "How to score this trait, step by step"
- **File:** `css/styles.css` (PP-004 writing block): `.score-steps > summary` keeps flex and its 44 px height, adds `list-style:none`, hides the WebKit marker, and adds the site's existing `▸` / `▾` (`[open]`) `::before`, the same pattern as `.five-min`, `.sk-official` and `.habit-group`.
- **Verification:** after: `::before` content "▸", height 44. `score-steps-390-after.png`.

### 4. U-4 (SHOULD) The focused button stays on screen
- **Files:**
  - `js/engine/player.js`: new `reveal(topEl, bottomEl)` (exposed as `PP.reveal`). It scrolls by the least amount needed (instant, not smooth) so that the new content's top and the next action's bottom are both on screen, below a sticky `.steps` bar if there is one. If both cannot fit, the top of the new content wins.
  - `check()`: on a wrong (or partly wrong) answer it calls `reveal(#q-feedback, the controls row)`, so "Not quite" and Check/Help me are on screen.
  - `js/skills.js` `renderLearn()`: after each "Show the next step" tap, `PP.reveal(new step, button)`. After the last step, the answer gets focus with `preventScroll` and then `PP.reveal(last step, answer)`.
- **Verification (same taps as before):**
  - Watch Me: 0 of 9 off-screen for 3.L.V.3.a and 3.T.C.2.c at 320, 390, 768 and 1366 (was up to 2 of 9).
  - Wrong Check: 0 bad positions on every question of SK:3.T.C.1.b practice and try at 320/390/768/1366 (was 2-3 per run). `wrong-check-390-before.png` / `-after.png`.
- **Remains:** a right answer still moves focus to Next (unchanged; it is already scrolled into view by `focus()`).

### 5. U-5 (SHOULD) Two small targets from PP-003 RD-12
- **File:** `css/styles.css`:
  - `.evidence-key > summary{display:list-item;min-height:44px;padding:11px 0;margin:4px 0}`. This keeps the native triangle, as before.
  - `.flu-obs input[type=number]` gains `min-height:44px`.
- **Verification:** "Where the support is in the sources": 44 px at 390/768/1366 and 65 at 320 (it wraps). Self-corrections input 77x44.

### 6. U-6 NOTEs done
1. **Print** (`css/styles.css`, first `@media print`): `#passage-note,#w-score .btn{display:none !important}`. After: print media `#passage-note` display none; no visible button in `#w-score`.
2. **Search focus** (`css/styles.css`): `.skill-search:focus` now uses `outline:3px solid var(--sky)` with offset 2px, keeps the pill radius, and drops the pale halo. After: "solid 3px rgb(27,79,168)". `search-focus-1366-before.png` / `-after.png`.
3. **Category card jump** (`js/skills.js` `buildCards`): after the scroll, the section's `h2.cat-title` gets `tabindex=-1` and focus with `preventScroll`. After: focus on the H2 at y=110 (1366, under the 96 px sticky tools), y=14 (390), y=110 (768). The next Tab goes to the first skill row in that section.
4. **Progress bar** (`js/engine/player.js` `renderItem`): width is `(i+1)/total`, matching "Question i of n". After, on a 4-item set: 25%, 50%, 75%, 100%. Guard does not test this width.
5. **One name for the check** (`js/skills.js` `addLesson`): the set titles are now "Skill check" (one form), "Skill check (form A)" and "Skill check (form B)". They were "Test", "Test (form A)" and "Test (form B)". The step name "Test Your Knowledge" and the tag "Skill check" are unchanged. `guard.py` and `check-content.js` contain no copy of these titles; I checked with grep, and only guard 13.2's `tag != "Test"` touches this area, which is the player tag and is unaffected. **For the lead:** `docs/SPEC.md:310` still says "Test (form A)" / "Test (form B)". SPEC is not in my assignment, so I did not edit it.
6. **W-REV-01-5** (`js/data/sets/W-REV-01.js`): the `why` now says "The second paragraph (sentences 2 to 6) is about…", not "Paragraph 2". I checked the draft: paragraph 2 is sentences (2)-(6).

### 7. F-2 (SHOULD) Beaver web page alt matches the drawing
- **Files:**
  - `js/data/lessons/T-C.js` SK-TC1b-P10 `figure.alt`: "It shows a dam of sticks with water spilling over it." becomes "It shows a pile of sticks in the water."
  - `assets/figures/tc1b-beaver-webpage.svg`: the `<title>` now says the video "shows a pile of sticks in the water", and the source comment no longer claims spilling water.
- **No give-away:** P10's blanks are about the "[water rushing]" caption line and the link. The new alt says nothing about either beyond the visible text it already quoted.
- **Remains (not changed, flagged):** the visible narrator caption inside the SVG still reads "The water spills over the dam", which the still does not show. It is the video's narration, not a description of the still, and the item does not depend on it. Redrawing the still as a dam was out of scope for a conservative overnight change.

### 8. F-3 (NOTE) Balloon alt no longer echoes TB5's key
- **Files:**
  - `js/data/lessons/L-V3.js` (3.L.V.3.a p3 Figure 1 alt)
  - `assets/figures/v3a-b-balloon-parts.svg` `<title>`
- **Change:** both now describe the labels and what they point to: "The label vent points to a small dashed circle at the very top of the balloon. The label envelope points to the big balloon. …"
- **Effect:** the alt no longer says "opening" (TB5's key is "an opening at the very top of the envelope") and no longer defines "envelope". A non-sighted child gets what a sighted child sees: a label and a dashed circle at the top. Paragraph 6 ("opens the vent… hot air escapes") still supports the inference.
- TB5's `why` (shown only after answering) is unchanged.

## Guard tests added (verification/guard.py, new section 16, before 7.1)
- **16.1:** For every set whose passages contain a "Box: " paragraph (19 sets), and every lesson with a "Box: " line in Learn It or Watch Me (1 lesson), it renders the box and checks:
  - the count matches the data
  - every box is `role=note`, named "Text box", with a first-child `.sr` "Text box: " that is visually hidden
  - all boxes share one look, whose tint differs from the `.learn-answer` tint, with text contrast ≥4.5:1 and a left edge ≥3 px
- **16.2:** On SK-TC1b-T2, Chromium's accessibility snapshot of the one visible box contains `note "Text box"` and "Text box: A monarch".
- **16.3:** At 320/360/375/390, the mode tag for practice, try, skill check, mixed-set test and the writing task is not clipped: the span is inside its `.bar-tag` box and neither has horizontal overflow. All five labels must be seen.
- **Do they catch the defect?** On the pre-fix build the probe measured `role:null`/`label:null` and clipped tags, which 16.1-16.3 reject. I did not re-run the guard against a reverted copy.

## Gates (run from /home/claude/pp-fix after all edits)
- `node verification/check-content.js --all`: **PASS (0 failures, 6 warnings)**. The 6 warnings are clue-overlap warnings on SK-V3b-T1, SK-TT1a-T5, SK-TT1d-P1 and SK-TT1e-T5, which I did not touch. Other PP-004 logs also record 6 warnings.
- `python3 verification/readability.py`: ran; no failures reported (it is a report). My text edits are a `why` string and alt text, not passages.
- `node verification/check-writing.js`: **0 failures, 0 warnings**.
- `node --check js/skills.js js/engine/player.js`: OK.
- Section 16 alone (`g16.py`): 3 passed, 0 failed.
- Full guard `python3 verification/guard.py http://localhost:8502/`: see the result line below.

FULL_GUARD_RESULT_PLACEHOLDER

## What I did not do
- No real screen reader, iOS Safari or Firefox; Chromium only.
- U-6.2 (sticky fluency clock row over the step bar), U-6.3 (reason for the disabled "Mark as checked" button), U-6.9 (19-20 px parent-guide source links), F-4 (narrow teach-card figures) and F-6 (river through the Atlanta dot): not in my assignment, not changed.
- The visible narrator caption in the beaver SVG (see 7).
- `docs/SPEC.md:310` still uses the old set titles (lead to update).
