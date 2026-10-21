# PP-004 UX and accessibility review (Agent D, independent)

- **Reviewer:** Agent D, accessibility and screen-quality reviewer. I worked read-only. The only repo file I wrote is this one. I did not read the other PP-004 reviewers' conclusions before testing. I read the change logs only to find what was new.
- **Build:** /home/claude/pp-fix (branch `pp-003-fixes`, PP-004 working tree, manifest build "Peach Prep 2.2.0-rc (PP-003)"). Date 2026-10-20.
- **Server:** `node verification/serve.js . 8498`, PID 17370. I stopped it with `kill 17370` and confirmed the port was closed (curl returned 000).
- **Tooling:**
  - Python Playwright with headless Chromium.
  - Viewports and input:
    - 320x640 and 390x844: `is_mobile` + `has_touch`, with real taps through `locator.tap()`.
    - 768x1024: touch.
    - 1366x900: mouse and keyboard.
  - Fonts: Google Fonts requests were blocked. Poppins (regular, medium, light) is installed locally, so headings render in Poppins with a synthesized 800 weight. Nunito falls back to a system sans.
  - The fluency timer was driven with Playwright's fake clock.
- **Evidence folder:** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revD4/`
  - Scripts: `scripts/*.py`, `scripts/figdump.js`, `scripts/drafts.js`.
  - Logs:
    - `figs.log.txt`, `svgtext.log.txt` (+ `figs.json`, `svgtext.json`)
    - `scan-320-390.log.txt`, `scan-768-1366.log.txt`
    - `journey-{320,390,768,1366}.log.txt`
    - `hist.log.txt`, `kbd.log.txt`, `kbd2.log.txt`, `flu.log.txt`, `print.log.txt`, `misc.log.txt`, `quick2.log.txt`, `grown.log.txt`, `routes.log.txt`, `dd.log.txt`, `solvetest.log.txt`
  - Screenshots:
    - figures: `fig-{w}-<figure>.png` (26 x 4), `svg-<figure>-320.png`, `contact-figs-320-{0,1,2}.png`
    - journey: `j-*-{w}.png`
    - full-page scans: `scan-*-{w}.png`
    - others: `watch-tc2c-{w}.png`, `trait-card-{w}.png`, `wrong-check-{w}.png`, `draft-*-{w}.png`, `cursive-*`, `flu-*-{w}.png`
  - PDFs: `print-*-{390,1366}.pdf`.
- **Answer automation:** many steps answer items through `SOLVE_JS`, which sets the response object to the key. I validated it on all 1,218 items in 313 sets: every one scores full marks (`solvetest.log.txt`). In the journeys, multiple-choice items were answered with real taps or clicks. The other types used SOLVE_JS, and then the real Check, Next and Help buttons.

Severities: **MUST** (wrong, misleading or broken for some users), **SHOULD** (weak but works), **NOTE**.

---

## Part 1. The 26 figures

### How I measured
- **Use:** each figure's use comes from the live lesson data (`scripts/figdump.js`) and from the player at run time. Every figure is referenced exactly once.
- **Rendering:** I loaded each figure in context (teach card, Watch Me card, passage pane or item stem) at every width. I recorded `complete && naturalWidth > 0`, the rendered width, and whether it was clipped by its container.
- **Label size:** each SVG was rendered at its real 320 px in-context width. I took every `<text>` element's computed font size and scaled it by rendered width / viewBox width. That gives the effective CSS px.
- **Overlap and clipping:** I intersected the bounding boxes of all pairs of `<text>` elements, and checked each `<text>` against the SVG bounds.
- **Contrast:** I hid the text and screenshotted at 2x. I took the pixels under each label's box and computed WCAG contrast of the label fill against the dominant background, plus the 5th percentile.
- **Accuracy:** I checked the drawings by eye against sources where accuracy matters (sources listed after the table).
- **Answerability and alt text:** I read every item that uses each figure, with its key, and compared the alt text with what a sighted child actually sees.

### Results at a glance
- All 26 load at all 4 widths. None is broken, clipped or wider than its box, and there is no horizontal page scroll.
- The smallest label anywhere at 320 px is **14.5 px**: the frog web page and the notes table, which sit in the narrow teach card. Every other label is 14.8 px or more. At 390 every label is at least 19 px.
- No label overlaps another and none is cut off.
- The lowest label contrast is **6.39:1**: white "Extension Office" on green. Almost all labels are 13.9-18.9:1. Non-text strokes are #111 or other dark colours, at 3:1 or better against their fills.
- No figure relies on colour alone:
  - Graphs print their values on the bars.
  - The peanut key is hatched and the river is striped.
  - The current web tab has a thick border and bold text, and links are underlined.
  - Life-cycle stages are numbered, and the honeycomb cells use patterns (wavy, dotted, egg).
- **Alt text:** every alt is present and specific. PP-003 RD-9 is fixed: none of the old "There is no water/people…" elimination sentences remain. One alt describes something the drawing does not show (F-2 below), and one borderline alt echoes a key (F-3 below).

Rendered widths are in px at 320 / 390 / 768 / 1366. "Min label" is the effective size at 320 px. "Contrast" is the lowest label.

| # | Figure | Where used | Accuracy | Relevance | Labels @320: min, overlap, clip | Answerable from figure | Alt text (describes / gives away?) | Contrast | Not colour-only | Renders (320/390/768/1366) |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | ra1b-notes-table | 3.T.RA.1.b Learn It, example 2 | Frog facts correct (eggs in water, tadpoles hatch, gills, legs and tail). | Models a notes table with a source column. | 14.5 px, none, none | n/a (teach) | Reads every cell. OK | 14.9:1 | Text only | 198/268/300/300 OK |
| 2 | ra1b-web-moon | 3.T.RA.1.b passage p6 header (check items) | Invented museum; date 14 Apr 2026, before today. | "Where I found it" row and source credibility. | 15.8, none, none | Yes (site name, date) | Names site, menu, date. Gives nothing away | 11.2:1 | Current tab bold + underlined | 240/310/340/340 OK |
| 3 | ra1b-web-pumpkin | 3.T.RA.1.b passage p5 header (P7 and others) | Invented extension office; 8 Sep 2026. | Same as #2. | 15.8, none, none | Yes | OK | 6.39:1 (white on green) | Bold + underline | 240/310/340/340 OK |
| 4 | ss1a-georgia-river | 3.T.SS.1.a Watch Me 3 | Matches Britannica (see Sources): rises in NE Georgia mountains, flows SW, then forms the GA-AL line. The line runs through the Atlanta dot rather than past it (NOTE F-6). | Map as a text feature. | 16.0, none, none | n/a (Watch Me) | Accurate, matches drawing | 17.1:1 | Striped river, N arrow | 228/298/380/380 OK |
| 5 | ss1a-peanut-map | SK-SS1a-P6 (Try) | South/southwest = Coastal Plain, where peanuts are grown (New Georgia Encyclopedia). | What the map adds beyond the words. | 15.8, none, none | Yes (key + hatched area) | "striped area in the south and southwest … key says peanut farms": equivalent to the picture | 17.1:1 | Hatched + key | 225/295/380/380 OK |
| 6 | ss1a-tortoise-burrow | SK-SS1a-T4 (check) | Gopher tortoise at a sand-mound burrow; plausible. | Choose a caption. | no text | Yes (only the burrow caption fits) | Plain description; RD-9 "no people, fires…" removed | n/a | n/a | 225/295/380/380 OK |
| 7 | tc1b-beaver-lodge | 3.T.C.1.b passage p1, Fig. 1 (P5) | Dry room above water, entrance below water: matches Forestry and Land Scotland leaflet. | Diagram labels → sentences (P5). | 16.5, none, none | Yes | OK | 18.9:1 | Leader lines | 240/310/380/380 OK |
| 8 | tc1b-beaver-tree | SK-TC1b-P8 (Together) | Teeth in notch, chips; fine. | Choose a caption. | 15.5, none, none | Yes | Plain description; "no water" sentence removed | 18.9:1 | Leader lines | 225/295/380/380 OK |
| 9 | tc1b-beaver-webpage | SK-TC1b-P10 (Together) | The video still shows a stick mound sitting on flat water. It reads as a lodge, and no water "spills over" it (SHOULD F-2). | Caption line + link. | 15.5, none, none | Yes (both blanks need the caption bar and the link) | Says "a dam of sticks with water spilling over it", which is not drawn | 9.6:1 | Bold + border tab, underlined link | 225/295/380/380 OK |
| 10 | tc1b-frog-webpage | 3.T.C.1.b Learn It, example 2 (Fig. 2) | Gloss "the soft part inside the mouth that can move" is OK. | Six numbered digital features. | **14.5** (narrow teach card), none, none | n/a | Lists all six parts. OK. Long (~600 chars) but fine | 7.5:1 | Numbers, border, underline | 198/268/380/380 OK |
| 11 | tc1b-frog | 3.T.C.1.b Learn It, example 1 (Fig. 1) | Fine. "At night" is in the caption only, by design (the note says the caption adds when). | Picture + caption. | no text | n/a | OK | n/a | n/a | 198/268/380/380 OK |
| 12 | tc1b-monarch-cycle | 3.T.C.1.b passage p2, Fig. 1 (T3) | Egg → caterpillar → chrysalis → butterfly → egg. Correct. | Diagram shows order. | 16.5, none, none | Yes | Order and numbers given; equivalent | 18.9:1 | Numbers + arrows | 240/310/380/380 OK |
| 13 | tc1b-monarch-flower | 3.T.C.1.b passage p2, Fig. 2 (T6) | Fine. Monarchs pass through Georgia on the fall migration. | Caption adds where. | no text | Yes (picture shows the flower; caption gives place and trip) | "Sitting on top of a flower" lets a reader rule out one wrong choice, exactly as the picture does. OK | n/a | n/a | 240/310/380/380 OK |
| 14 | tc1b-monarch-video | SK-TC1b-T9 (check) | Monarch sheltering under a leaf in rain; plausible. | Auditory caption line. | 15.5, none, none | Yes | Gives both caption lines (the visible text). OK | 16.7:1 | Text | 225/295/380/380 OK |
| 15 | tc1b-monarch-webpage | SK-TC1b-T8 (check) | Fine. | Pop-up gloss + link. | 15.5, none, none | Yes (both blanks need the figure) | Equivalent to visible text | 7.5:1 | Bold + border tab, underline | 225/295/380/380 OK |
| 16 | tc1b-plant-parts | 3.T.C.1.b Watch Me | Correct. | Labels. | 16.7, none, none | n/a | OK | 13.9:1 ("roots" on soil) | Leader lines | 228/298/380/380 OK |
| 17 | tt2a-armadillo | 3.T.T.2.a passage p2 (T6) | Bony plates, flexible bands, long nose, claws: correct. About 7 bands drawn (NOTE). | Fact only in the diagram (T6). | 15.8, none, none | Yes (the bands label) | Repeats the visible label text. OK | 18.9:1 | Leader lines | 240/310/380/380 OK |
| 18 | tt2a-b-tree-trunk (form B) | 3.T.T.2.a passage p3 (TB6) | Bark, inner bark, sapwood, heartwood, outside in: matches Arbor Day Foundation (cambium omitted, fine at grade 3). "Each ring = 1 year" is the normal case; LTRR notes missing and false rings (NOTE). | Which question the diagram answers. | 16.5, none, none | Yes (the note is only in the figure) | Repeats the visible note. OK | 18.9:1 | Labels + dashed rings | 240/310/380/380 OK |
| 19 | tt2a-camel | 3.T.T.2.a Watch Me | Hump, long eyelashes, wide flat feet: correct. | Diagram detail. | 16.7, none, none | n/a | OK | 18.9:1 | Leader lines | 228/298/380/380 OK |
| 20 | tt2a-honeycomb | 3.T.T.2.a passage p1 (P6, P7) | Six-sided cells; egg, honey, pollen: correct. | Diagram supports paragraphs 3-4. | 16.5, none, none | Yes | OK | 18.9:1 | Wavy, dotted, egg patterns | 240/310/380/380 OK |
| 21 | v3a-b-balloon-parts (form B) | 3.L.V.3.a passage p3 (TB5) | Vent at the very top of the envelope, burner with flame, basket: matches the Balloon Museum ("parachute valve at the very top"). | Picture as a context clue for "vent". | 16.5, none, none | Yes (label "vent" at a dashed top opening) | "The vent is a round opening at the very top of the balloon" is close to the key "an opening at the very top of the envelope" (NOTE F-3) | 18.9:1 | Dashed outline + label | 240/310/380/380 OK |
| 22 | v3a-b-pecan-graph (form B) | SK-V3a-TB1 | Values 3/6/8/4; bar lengths proportional (about 16 px per bucket). November harvest matches UGA ("late October through November"). | Graph as a context clue for "harvest". | 14.8, none, none | Yes | Gives values; fine (the graph shows them) | 18.9:1 | Values on bars | 225/295/380/380 OK |
| 23 | v3a-heron | 3.L.V.3.a passage p2 (T7) | Tall wading bird, neck, beak, legs: correct. | Picture as a context clue for "heron". | 16.5, none, none | Yes (the caption also helps) | "a heron, a tall bird": the picture shows exactly that. OK | 18.9:1 | Leader lines | 240/310/380/380 OK |
| 24 | v3a-rainfall-graph | 3.L.V.3.a Watch Me | Values match the alt. | Graph as context. | 16.0, none, none | n/a | OK | 18.9:1 | Values on bars | 228/298/380/380 OK |
| 25 | v3a-tree-ladder | SK-V3a-P6 (Try) | Fine; the trunk is deliberately unlabelled. | Picture as a context clue for "trunk". | 16.5, none, none | Yes | Plain; RD-9 paraphrase removed | 18.9:1 | Leader lines | 225/295/380/380 OK |
| 26 | v3a-visitors-graph | SK-V3a-T8 (check) | Values 20/50/40/30; proportional. | Graph as a context clue for "attendance". | 14.8, none, none | Yes | Equivalent | 18.9:1 | Values on bars | 225/295/380/380 OK |

### Sources checked for figure accuracy (all 2026-10-20)
- **Chattahoochee River:** Britannica, https://www.britannica.com/print/article/107962. "Rises from several headstreams in the Blue Ridge Mountains in northeastern Georgia", flows southwest, and south of West Point marks the Georgia-Alabama boundary.
- **Peanuts:** New Georgia Encyclopedia, https://www.georgiaencyclopedia.org/articles/business-economy/peanuts/. "Peanut production in Georgia is concentrated in the Coastal Plain."
- **Pecans:** UGA CAES Field Report, https://fieldreport.caes.uga.edu/news/georgia-growers-eyeing-nations-top-pecan-harvest/. "Georgia's harvest usually starts around the end of October and runs through November."
- **Hot-air balloon:** Balloon Museum, https://balloonmuseum.com/how-do-hot-air-balloons-work/. Envelope, burners, basket; "the parachute valve at the very top of the balloon".
- **Tree trunk layers:** Arbor Day Foundation, https://www.arborday.org/trees/treeGuide/anatomy.cfm. Outer bark, inner bark (phloem), cambium, sapwood, heartwood.
- **Tree rings:** Univ. of Arizona LTRR, https://www.ltrr.arizona.edu/skeletonplot/ringanomalies.htm. "One tree ring is grown each year", with missing and false rings as exceptions.
- **Beaver lodge:** Forestry and Land Scotland leaflet, https://forestryandland.gov.scot/media/hhalblyo/web8-argyll-beaver-centre-beaver-leaflet.pdf. "Can only be accessed by underwater tunnels … built above water level".
- **Not checked against a source, judged by eye only:** the monarch life cycle, camel, heron, honeycomb, armadillo and plant parts (common textbook facts), and the gopher tortoise.

### Figure findings
- **F-1 (MUST, see U-1):** text boxes are visual-only. This affects the passage and Watch Me boxes, not the SVGs.
- **F-2. SHOULD. The beaver web page alt describes water spilling over a dam, but the drawing shows neither.**
  - **Location:** `assets/figures/tc1b-beaver-webpage.svg`. Alt in `js/data/lessons/T-C.js` (SK-TC1b-P10).
  - **Evidence:** in `fig-768-tc1b-beaver-webpage.png`, the video still is a brown trapezoid of sticks on level water. That looks like the lodge in Fig. 1. There is no spill or flow; only a small ")" wave mark.
  - **Impact:** the item does not depend on recognising the dam, so it is still answerable. But the alt is not equivalent to the image, and the video caption "The water spills over the dam" is not what the picture shows.
  - **Fix:** either redraw the still as a long low wall across a stream, with water falling over its top edge, or change the alt to "It shows a pile of sticks in the water."
- **F-3. NOTE. The balloon alt nearly states TB5's key.** The alt says "The vent is a round opening at the very top of the balloon", and the key is "an opening at the very top of the envelope". A sighted child sees a "vent" label on a dashed circle and must infer that it is an opening. Paragraph 6 ("opens the vent") supports the inference, so this is borderline. **Fix:** "A label, vent, points to a small dashed circle at the very top of the balloon."
- **F-4. NOTE. Teach-card figures are narrow on phones.**
  - **Where:** at 320 px the Learn It example figures are only 198 px wide, 62% of the screen. `.teach-card` and `.teach-example` padding stack up, while item figures get 225 px and passage figures 240 px.
  - **Effect:** the frog web page and the notes table land at exactly 14.5 px label size, the minimum in the site.
  - **Fix:** at ≤420 px, drop the `.teach-example` side padding around `.ex-body .pp-figure`, as is already done for `.q-stem`.
- **F-5. NOTE.** The tree-ring caveat and the armadillo band count are simplifications. They are acceptable for grade 3; no change needed.
- **F-6. NOTE.** On the river map the line runs through the Atlanta dot. The alt and text say the river flows "past" Atlanta. A 4-6 px offset would match.

---

## Part 2. Screens

### 2.1 Findings

#### U-1. MUST. Text boxes are not identifiable without sight, and a scored check item asks about "the text box"
- **Selectors:**
  - `#passage-pane-body aside.passage-box` (`js/engine/player.js:84`)
  - `#sk-panel .learn-card aside.passage-box` (new in PP-004: `js/skills.js:655`, "Box: " lines in Watch Me)
- **Evidence:**
  - The box has no role, no accessible name and no text label (`misc.log.txt`, "WatchMe text boxes": `label: None, role: None`).
  - Chromium's accessibility tree has 0 complementary landmarks on the Watch Me page. The `<aside>` sits inside a `div` or `article`, so it is exposed as a generic container. A screen-reader user hears the box text run straight on with no boundary.
  - Boxes are used by:
    - SK-TC1b-T2: "How does the text box add to the article?" (check, scored)
    - 3.T.C.2.c Watch Me 2 and 3, whose steps say "Read the text box"
    - about 20 other "Box:" lines in T-C, T-RA, L-V3, T-SS and R-INF-01
- **Why MUST:** which text is the text box is conveyed only by the green tint and border (WCAG 1.3.1 Info and Relationships). For a child or parent using a screen reader, T2 depends on information they cannot get.
- **Fix:** in both places, add `role="note"` and `aria-label="Text box"` to the aside. Or prepend `<span class="sr">Text box: </span>`; the `.sr` class already exists.
- **Second, visual point:** the Watch Me box uses the same pale green as the `.learn-answer` "Answer:" box (`watch-tc2c-390.png`). On the 3.T.C.2.c page a child sees two similar green boxes that mean different things. Give the box its own tint, or the small "Text box" label above.

#### U-2. SHOULD. The player mode tag is cut off on 320 px phones
- **Selector:** `.bar-tag` (`css/styles.css:59-61`: `overflow:hidden; text-overflow:ellipsis; white-space:nowrap`). The column is 85 px wide at 320.
- **Evidence (`quick2.log.txt`, `crop-scan-player-test-figure-320.png`):**

  | Tag text | Width needed | Width available |
  |---|---|---|
  | "Skill check" | 117 px | 85 |
  | "Try it yourself" | 139 px | 85 |
  | "Writing task" | 130 px | 85 |
  | "Practice" | 100 px | 85 |

  - On screen it reads "Skill chec" with the pill border cut. The ellipsis does not show, because the pill `span` is inline-block inside the clipped `p`.
  - At 390 px and wider, all tags fit.
- **Fix:** below 360 px, either let the tag wrap (`white-space:normal; font-size:.8rem`), shorten the labels ("Check", "Try", "Essay"), or move the tag under the title.

#### U-3. SHOULD. The new "How to score this trait, step by step" panels have no disclosure marker
- **Selector:** `#w-score details.score-steps > summary.std-ald-head`. The rule `.score-steps > summary{display:flex}` (`css/styles.css:656`) removes the `::marker` triangle.
- **Evidence:**
  - `trait-card-390.png` shows a bold line with a peach left bar and no arrow. It looks like a heading.
  - Every other summary on the tab ("Where the support is in the sources", "Grown-ups: show a model essay…") keeps its triangle.
  - Keyboard Enter does toggle the panel, so it works. It is just not discoverable, and it hides the new scoring steps, score levels and "What to say to your child".
- **Fix:** use `display:list-item` with padding instead of flex, or add `summary::before{content:"▸ "}` with `[open] > summary::before{content:"▾ "}`.

#### U-4. SHOULD. Buttons that keep focus are pushed below the screen
- **(a) Watch Me "Show the next step"** (`#sk-panel .learn-next`, `js/skills.js:726`).
  - Each tap inserts a step above the button and does not scroll.
  - Times the focused button (or the final `P.learn-answer`) ended below the viewport (`misc.log.txt`):

    | Lesson | 320 | 390 | 768 | 1366 |
    |---|---|---|---|---|
    | 3.L.V.3.a | 0 of 9 | 1 of 9 | 2 of 9 | 3 of 9 |
    | 3.T.C.2.c | 1 of 9 | 2 of 9 | 1 of 9 | 0 of 9 |

  - Example: 390, button at y=871-917 on an 844 px screen.
  - A child tapping through has to hunt for the button. A keyboard user's focus is off-screen.
  - **Fix:** after appending a step, call `b.scrollIntoView({block:"nearest"})`, or `ans.scrollIntoView({block:"nearest"})` at the end.
- **(b) Wrong answer in Practice/Try** (`#q-check`, `#q-help`, `js/engine/player.js:311`).
  - The "Not quite" box appears above the buttons.
  - At 390, after a wrong Check on 3.T.C.1.b question 3: feedback at y=733-829 is visible, but **Check (focused) and Help me are both at y=845-891**, below the 844 px screen (`quick2.log.txt`). At 320, Check is at 641-687 on a 640 screen.
  - In Try mode the feedback says "Help me is now on", but the button is off-screen.
  - **Fix:** in `check()` on a wrong answer, call `(el("q-help").hidden ? el("q-check") : el("q-help")).scrollIntoView({block:"nearest"})`.

#### U-5. SHOULD (carried over from PP-003 RD-12, not fixed). Two targets are still under 44 px
- `summary.std-ald-head` "Where the support is in the sources" (essay Plan and Score tabs, `js/writing.js:184`):
  - 22 px tall at 390, 768 and 1366 (43 px at 320).
  - It is also under the WCAG 2.5.8 minimum of 24 px.
  - Fix: give it the same `min-height:44px; display:list-item; padding` as `.model-sum`.
- Fluency self-corrections `input[type=number]` (`css/styles.css:633`):
  - 77x40 at all widths (`flu.log.txt`).
  - Fix: add `min-height:44px`.

#### U-6. NOTE. Small, remaining or minor items
1. **"New passage" note in print** (RD-15, not fixed). `print-player-tc1b-t-390.pdf` still prints the "New passage…" note. The essay Score tab print includes the "Start this task over" button. Hide `#passage-note` and `#w-score .btn` in `@media print`.
2. **Sticky clock row over the step bar while reading** (RD-13, not fixed). `.flu-ctl` (0-112 px) overlaps `#sk-steps` (0-73 px) at 320 (`flu-timeup-320.png`). Cosmetic.
3. **Disabled "Mark as checked by a grown-up" has no reason** (RD-14, not fixed). `aria-describedby` is still null.
4. **Weak focus indicator on the home search box.** `.skill-search:focus` uses a 1 px border change plus a 3 px #EDF3FD halo, about 1.1:1 against the page. Every other control uses the 3 px #1B4FA8 outline (6.4-7.7:1). Use the global `:focus-visible` outline.
5. **Focus stays on a category card after it jumps to its section** (`.cat-card`, all widths). The heading lands correctly: 14 px at phone widths, 110 px under the 96 px sticky bar on tablet and desktop. But the next Tab goes to the next card, not into the section. Consider focusing the section `h2` (`tabindex=-1`).
6. **The question progress bar never reaches 100%.** `#q-bar` is `i/total`, so the last question shows 88% of 8. "Question 8 of 8" is correct. Use `(i+1)/total`, or leave as is.
7. **Three names for one thing.**
   - On one flow a child sees "Test Your Knowledge" (step tab), "Test (form A)" (player title), "Skill check" (tag) and "skill check" (results).
   - The "(form A)/(form B)" suffix is grown-up information shown in the child's title.
   - Consider "Skill check" everywhere, and putting the form letter only in the grown-ups note.
8. **W-REV-01-5 `why` says "Paragraph 2" about a student draft.** Drafts show no paragraph numbers, by design: sentences are numbered "(1)…" (`js/pp.js:88`). All 26 draft passages number every sentence (`scripts/drafts.js`), and no item prompt cites a paragraph number on a draft. Only this one feedback string does. Say "the second paragraph (sentences 2 to 6)".
9. **Parent-guide source links are 19-20 px tall** (Test and Essay tabs). They sit in lists and lines, so the 2.5.8 inline exception arguably applies.

### 2.2 What was tested and passed

**Home, categories, search, filters** (`scan-*.log.txt`)
- No horizontal overflow on any of about 45 screens and states at any width.
- No body text below AA. The only flagged items are the deliberate trace-guide grey (2.41:1, a drawing target) and hero text that the DOM check cannot measure.
- I re-measured the hero by pixel sampling (`misc.log.txt`): the title is 7.0:1 or better, the subtitle 6.1:1 or better and "Up next" 5.3:1 or better at the 5th percentile. The "Peach Prep" brand line samples include the orange logo dot, so its low percentile is not a text problem; at 768 and 1366 it is 7.5:1.
- Filters set `aria-pressed` and the counts are coherent:

  | Filter | Shown |
  |---|---|
  | All | 101 rows |
  | On the test | 74 skills + 2 essays |
  | Not passed yet | 99 |
- Search:
  - "comma" puts the first result on screen at every width: 320 at y=420/640, 390 at 342/844, 768 at 478/1024, 1366 at 379/900.
  - "zzqq" shows "No skills match…".
  - The count is `role=status`.
- Category jumps land the section heading on screen at every width.

**Full lesson journey, 3.L.V.3.a, at each width** (`journey-{w}.log.txt`, `j-*.png`), starting from Home search and a tap on the row:
1. **Learn It → Next → Watch Me:** the heading lands just under the sticky bar (heading top − bar bottom = 8-35 px). Focus is on the panel, and the "Learn It, done" tab updates.
2. **Watch Me:** 9 taps; the answer gets focus; the Watch Me tab shows ✓.
3. **Practice Together** (4 items):
   - A wrong first answer gives "Not quite", which is spoken through `#q-say` 150 ms later.
   - Help ×3 moves focus to the last hint.
   - A right answer moves focus to Next, and the verdict is spoken.
4. **Done screen:**
   - "3 of 4 right on your first try", which is correct.
   - Browser Back goes to the skill page. Forward shows "You already finished this practice" (no restart).
5. **Try It Yourself:**
   - The Help me unlock message appears after one wrong try.
   - The done screen offers "Take the skill check".
6. **Form A** (`SK:3.L.V.3.a:t`, title "· Test (form A)"):
   - Submitted with half wrong: 4 of 7.
   - "Not yet…" with Practice Together as the primary button.
7. **Review:** "See my answers" shows 3 missed. "Show me how" ×3 leaves focus on `P.review-answer` (RD-3 fixed).
8. **Retake:** "Take the skill check again" opened **`SK:3.L.V.3.a:tB`**, title "· Test (form B)", first item SK-V3a-TB1, hash `#play/SK:3.L.V.3.a:tB/test`. Confirmed at all 4 widths.
9. **Form B result:** 7 of 7, "✓ Passed!", with "Back to the skill" as primary.
10. **Back on the skill page:**
    - The test card says "The next check is form A", "Passed … Best score: 7 of 7" and "passed on try 2, on form B".
    - All 5 tabs are marked done.
    - Stored: `attempts` forms [A, B], `passForm:"B"`, `mastered:true`. Existing fields are unchanged.
11. **Home:** "1 of 74 skills that are on the test have a passed skill check", and the row's aria-label is "Passed the skill check".
12. No console errors at any width.

**Parent guide** (`misc.log.txt`, `scan-parents-*`)
- The Every-standard tab shows "147 of 147 standards shown".
- 106 rows carry "Georgia's official wording (standards p. N): "…"". Every one has a page number. The other 41 are Grammar-chart rows with their level line, and none says "paraphrased".
- The skill page `#sk-official` shows the same line, plus the DRAFT ALD caveat and "Passing a Peach Prep skill check is not a Milestones score…".
- Arrow, End and Home keys work on the parent tabs, and the hash follows. No overflow, low-contrast text or small targets on the opened standards list.
- I did not re-verify the wording itself against the PDF; that is the standards reviewer's job.

**Writing task, new examples and scoring steps** (`misc.log.txt`, `scan-essay-*`)
- Score tab heading order: h2 → 3 trait `legend`s → h3 "Example: 2/4/6 of 8 points".
- The examples' `<details>` asks for confirmation first. Cancel keeps it closed and OK opens it. Focus stays on the summary. The "examples scored by Peach Prep… not official GaDOE anchor papers" line and the "home score… not an official Georgia Milestones score" line are both present.
- Keyboard Enter toggles the step-by-step panels. The only defect is the missing marker (U-3).
- **Malformed saved data:** these seeds produced no page errors, and every tab rendered:
  - `{"plan":null}`
  - `{"plan":null,"draft":null,"checks":"x","scores":[1]}`
  - `not json`
  - `[]`
  - `{"plan":{"opinion":5},"scores":{"purpose":"3"}}`
- With `plan:null` plus a real draft, the plan field works, saves and survives a reload, and the draft is kept (`quick2.log.txt`).

**Fluency** (`flu.log.txt`, `flu-*-{w}.png`)
- After Start, the instructions line is on screen at every width (320: y=313-466 of 640; 1366: y=708-759 of 900).
- Missed words now carry `aria-pressed` (RD-8 fixed).
- At time-up the prompt sits in the sticky row and has focus.
- **The result now lands below the step bar:** 320 at 81 vs bar 73, 390 at 81 vs 73, 768 and 1366 at 72 vs 64 (RD-1 fixed). It is focused and is no longer a live region (RD-7 fixed).
- The observation form is all ≥44 px apart from U-5. It saves and survives a reload.
- A short read under 30 s gives the focused "too short" note.

**Grown-up Check (3.F.F.1.b, 3.F.H.4.a)** (`grown.log.txt`)
- After marking, focus moves to `P.go-done` (RD-2 fixed).
- The Home row shows a visible "✓ grown-up" (RD-16 fixed).

**Cursive**
- 3.F.H.4.a and 3.F.H.4.b Practice pages render trace rows in the bundled "PP Cursive Guides" font.
- The 3.F.H.3.a reading items render the "PP Cursive" font (loaded).
- The practice sheet prints on 2 pages (`print-cursive-fh4a-*.pdf`).

**Mixed practice** (`misc.log.txt`)
- `#mixed` → Reading → R-LIT-01 practice runs 8 items, and the done screen offers "Try it as a test". The test runs with the "Test" tag.
- In-page Back returns to the section with focus on its h1, and browser Back/Forward walks mixed → home → mixed → section (`hist.log.txt`).

**Back, Forward, reload, invalid routes** (`hist.log.txt`, `routes.log.txt`, 4 widths)
- No dead Back presses.
- Done → Back → Forward and reload both give the "already finished/turned in" screen, never a silent restart.
- A Back mid-test asks "Leave this test?". Cancel stays and OK leaves.
- **Invalid routes:**
  - Go Home with the note focused and the address cleared: `#write/NOPE`, `#skill/%E0%A4%A`, `#reading/x`, `#play/`, `#skill/`, `#skill/NOPE`, `#play/NOPE/test` (in-app).
  - Fall back to the nearest valid screen: `#parents/nope` → parents; `#skill/3.L.V.3.a/nope` → Learn It.
  - Mode forced to the set's own mode: `:p/test` → practice, `:t/try` → check, `:tB/practice` → check.

**Keyboard and focus** (`kbd.log.txt`, `kbd2.log.txt`, `dd.log.txt`)
- **Skip link:** moves focus to the h1 and leaves the address alone.
- **Tab order:** logical on Home and the skill page.
- **Arrow keys:** Arrow/Home/End work on the step, player, essay and parent tabs, each with a single tab stop and valid `aria-controls`.
- **Escape:** leaves a skill.
- **Full practice set keyboard-only:** works at 1366, 768 and 390.
- **Web-page dropdown items** (P10, T8): the long options render as 52-76 px button groups labelled "Blank 1"/"Blank 2", and are reachable in order.
- **Focus ring:** 3 px #1B4FA8 on every control, apart from the search box (U-6.4).

**Announcements**
- `#q-say` speaks the verdict after a 150 ms delay (RD-6 fixed).
- Watch Me step lists are `aria-live=polite`.
- Search count is `role=status`.
- The not-found note is focused.
- The fluency status line is polite and the clock is `aria-live=off`.

**Touch targets:** no control under 44 px on Home, the skill steps, the player (all states and item types sampled), results, review, clues, habits, mixed, section or the parent standards list, apart from U-5.

**Print** (`print.log.txt`, 390 and 1366)
- The skill pages, player, results, clue sheet, Watch Me text boxes, parent guide, essay Score tab and a draft passage print with no step bar, top bar or step Next buttons.
- Figures are whole and none is broken.

### 2.3 PP-003 regressions re-tested

| PP-003 issue | Verdict | Evidence |
|---|---|---|
| Hidden headings after Next | FIXED | Every Next in the 4 journeys: heading 8-35 px under the bar, never under it. |
| Dead Back presses | FIXED | `hist.log.txt`, 4 widths, 7 chains. |
| Completed activities restarting | FIXED | Forward or reload → "You already finished/turned in…". |
| Phone search hidden | FIXED | First result on screen at 320 and 390. The tablet and desktop case (RD-5) is fixed too. |
| Lost focus | FIXED for the PP-003 cases (Help ×3, Show me how ×3, grown-up check, not-found). | New cases: U-4. |
| Essay crash from `plan:null` | FIXED | 5 malformed seeds, 0 errors. |
| Fluency instructions off-screen / result under bar | FIXED | See Fluency above. |
| Dashboard counts | CONSISTENT | Seeded 3 passes, of which 1 is a grown-up check on a Foundations skill. Home says "2 of 74 on the test"; the cards say Foundations 1/10, Reading 1/24, Vocabulary 1/10; "Not passed yet" is 96 = 99 − 3; the review-due line appears. |
| Broken SVGs | NONE | 26/26 load at 4 widths; no broken `<img>` on 11 routes. |
| Progress indicator consistency | CONSISTENT | Step tabs, Home rows (✓, ✓ review, ✓ grown-up), cards and the stored record agree. `#q-bar` never reaches 100% (U-6.6). |
| Small targets | MOSTLY FIXED | 2 left (U-5). |
| Announcements | FIXED | See Announcements above. |

### 2.4 What I could not test
- **No real screen reader** (NVDA, JAWS, VoiceOver, TalkBack). Announcements were judged from DOM live regions, focus moves and Chromium's accessibility tree. Whether "That's right!" is actually spoken after the focus move is unverified.
- **No real devices, iOS Safari or Firefox.** Only Chromium. I did not cover on-screen keyboards covering the search results or fields, the real tap-highlight behaviour, pinch zoom, or browser text-size settings (SVG labels do not grow with text size, only with page zoom).
- **Fonts:** Google Fonts were blocked. Poppins was the local copy, with a synthesized 800 weight, so the real ExtraBold may be slightly wider. That would make U-2 slightly worse, not better. Nunito body text rendered in a fallback, so wrapping may differ a little.
- **Print** was checked through Chromium `page.pdf` only, not a physical printer or Safari print.
- **Forced colours / Windows High Contrast and `prefers-reduced-motion`** were not tested.
- **Content wording:** I did not check the official-wording strings against the PDF, the example essays' scores or the item keys beyond the figure items. Those belong to the other PP-004 reviewers.
