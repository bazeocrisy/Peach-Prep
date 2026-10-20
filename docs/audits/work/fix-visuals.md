# PP-003 fix log: visuals (agent "visuals", port 8451)

Date: 2026-10-20. Worktree: /home/claude/pp-fix. No git commands run.

Official wording below is quoted from `js/data/standards.js` as recorded in `docs/audits/PP-003-STANDARDS-MATRIX.csv` (Georgia K-12 ELA Standards, 2023). All four codes are listed as assessed in Interpreting Texts in the GaDOE Grade 3 ELA Assessment Blueprint, August 2025 (`scratchpad/gadoe/7bf55d31-GM_Gr3_ELA_Blueprint.txt`; SPEC §2).

Screenshots and print previews: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/visuals/`.

---

## V-1. Engine: figures and bold words

- **Deficiency:** the site could not show any image or bold print. `docs/SPEC.md` said "The site shows no images". Diagrams, captions, maps, graphs and bold words could only be described in words ("Imagine a diagram ...").
- **Why it matters:** four assessed expectations name visual features (3.T.C.1.b, 3.L.V.3.a, 3.T.T.2.a, 3.T.SS.1.a). Without visuals they can only be PARTIAL (matrix rows; notes-texts1.md, notes-texts2.md, notes-language.md).
- **Requirement:** see V-2 to V-5.
- **Files changed:**
  - `js/engine/player.js` (rendering only; `start()` untouched): new `rich()` (renders `**word**` as `<strong class="pp-bold">`), `figure()` / `figures()` (a `<figure>` with `<img alt>`, optional bold "Figure N." label and caption), exported as `PP.rich`, `PP.figure`, `PP.figures`. `renderPassages` renders `passage.figures[{after:k}]` after raw block k, without changing paragraph numbers or refs; passage and box sentences go through `rich()`. `renderItem` shows `item.figure` in the stem box. `addClueMarks` skips a sentence that contains a bold word (so the bold is not wiped).
  - `js/skills.js` (example rendering only): `lines()` renders `**bold**`; the Learn It example and Watch Me example render `ex.figure` inside the example box.
  - `css/styles.css`: appended block "PP-003: figures and bold words": white figure box, image `width:100%; max-width:380px`, no-break in print, `max-width:9cm` in print, tighter padding at ≤420px.
  - `verification/check-content.js`: `checkFigures()` / `checkSvg()` for passage figures, item figures, teach and learn example figures. FAILS: missing file, `src` not `assets/figures/<name>.svg|png`, alt text under 5 words, `after` out of range, figures on a poem, an SVG with a script or outside link, unmatched `**`, and `**` inside a hot-text target. WARNS: SVG text below 14px at the narrowest drawn width (198px in a Learn It example, 220px elsewhere, measured in Chromium at 320px). `passageText()` strips `**` so EBSR quote checks still work.
  - `docs/SPEC.md`: new §5e "Figures and bold words" (format, placement table, bold rules, figure rules, checker rules); the §5 "The site shows no images" sentence now points to §5e.
  - `assets/figures/`: 13 new original SVG files (listed in V-2 to V-5).
- **Verification:**
  - `node verification/check-content.js --all`: PASS, 0 failures, 8 warnings. Baseline (/home/claude/peach-prep) had 10 warnings. None of the 8 is from my items; I removed the old SK-TC1b-T3 "order" warning.
  - Negative test on a scratch copy: a missing file, empty alt, `after: 70`, an unmatched `**` and a bold hot-text target each gave the expected FAIL (5 failures).
  - `python3 verification/readability.py`: runs; no passage is above grade 4.5. Passage word counts and FK are unchanged by the figures, because figures are not in `paragraphs`.
  - Playwright, all at 320, 390, 768 and 1366px: every new or changed item and example (list in V-2 to V-5). Checks: every figure image loaded (`naturalWidth > 0`), has alt, and `scrollWidth <= innerWidth` (no sideways scroll). Result: 0 problems. Drawn widths at 320px: 198px (Learn It), 225px (question stem), 228px (Watch Me), 240px (passage). The smallest SVG text is 21–22 viewBox units, which is 14.0–16.8px at those widths. Screenshots: `<name>-<width>.png`, `<name>-q-<width>.png` (question pane) and `<name>-p-<width>.png` (passage pane), plus `el-*-320.png` crops.
  - Print: `print-tc1b-passage.pdf` (+ `print-tc1b-1.png`, `-2.png`) prints the beaver passage with Figure 1, its caption and the bold word, and the figure is not split across pages. `print-tt2a-teach.pdf` prints the camel Learn It example.
- **Remaining limitations / for the lead:**
  - **`verification/serve.js` does not know `.svg`** and serves it as `application/octet-stream`, so `<img>` SVGs show as broken images through the harness server. GitHub Pages serves `image/svg+xml`, so the live site is fine. I could not edit serve.js (not in my file list), so I tested with `python3 -m http.server 8451` from the worktree. **The lead must add `".svg": "image/svg+xml"` to `TYPES` in serve.js before the guard run**, or any figure check run through serve.js will see broken images.
  - The `guard.py` run used the Python server (see V-6).
  - Captions and alt text are not counted by readability.py.
  - Only `src` images are supported. I did not add HTML tables or CSS bar graphs; the graph is an SVG.
  - Bold is not allowed in hot-text target sentences, because `items.js` (not mine) prints them raw in the review. The checker enforces this.

## V-2. 3.T.C.1.b text features (High)

- **Deficiency:** diagrams were imagined in words (SK-TC1b-P5, SK-TC1b-T3). Bold was described as "(The word stem is in bold.)". Captions were never practiced or tested.
- **Official requirement:** 3.T.C.1.b "Identify common text features in print, digital, auditory, spoken, and visual modes and explain how they contribute to purpose and effect." DRAFT ALD (Oct 2025), Proficient: "Determine common text features [in] various text modes and describe how they contribute to the overall purpose and/or effect."
- **File:** `js/data/lessons/T-C.js`, 3.T.C.1.b block only (the 3.T.C.2.c block was not touched).
- **Corrections:**
  - Teach: the old picture/caption/diagram point is now two points (captions can tell what a picture cannot show; a diagram has labels with lines, and figure numbers match pictures to words). The example has a real bold **tongue** and a real captioned picture (`tc1b-frog.svg`, "Figure 1. A green frog waits on a lily pad."). The tip now mentions captions.
  - Watch Me 2: **stem** is now really bold. New Watch Me 3: a labeled plant diagram with a caption (`tc1b-plant-parts.svg`) and "How do the caption and the labels help the reader?"
  - Passage p1: **lodge** is in bold (p1:5:1). Figure 1, "Inside a beaver lodge" (`tc1b-beaver-lodge.svg`), is a cross-section with the labels "dry room" and "door under water".
  - Passage p2: Figure 1, "The life cycle of a monarch" (`tc1b-monarch-cycle.svg`, numbered 1–4 with arrows), and Figure 2, a monarch on a flower with the caption "A monarch rests in a Georgia garden on its long trip south." (`tc1b-monarch-flower.svg`).
  - **SK-TC1b-P2 removed and replaced by SK-TC1b-P8** (caption practice, DOK 2, item figure `tc1b-beaver-tree.svg`: "Which caption best fits the picture?"). Practice is capped at 7 by SPEC §8 and the checker, so I could not add an item. P2 was a second heading-meaning item; headings are still practiced (P1) and tested (T1, T5). P8 sits second, so it is in Practice Together with hints.
  - SK-TC1b-P4 (bold): now refers to the real bold **lodge** in passage p1. The stem shows "**lodge**" in bold, followed by the glossary entry.
  - SK-TC1b-P5 (diagram): the "Imagine" stem is removed; the prompt is now "Look at Figure 1 ...". Targets are now p1:3:1, p1:3:2, p1:5:3, p1:5:4, p1:9:2. p1:5:1 was dropped because it now holds a bold word; the answer is unchanged (p1:5:3, p1:5:4). The diagram has only those two labels, so the answer is unambiguous.
  - SK-TC1b-T3 (diagram, EBSR): the "Imagine" stem is removed and the item now uses the real Figure 1. The clue was reworded; it no longer shares "order" with the key.
  - **New SK-TC1b-T6** (caption purpose, 1 pt, DOK 2): "What does the caption tell the reader that the picture alone does not show?" The key is "where the monarch is and where it is going". Each distractor is visible in the picture or absent from the caption. The test is now 6 items and 8 points.
- **Verification:**
  - The checker passes.
  - Rendered at all 4 widths (tc1b-teach, tc1b-learn, tc1b-P8, P4, P5, T3, T6 in both panes).
  - Keys checked by reading each figure. The lodge labels match exactly the two answer sentences. The tree picture has no water, so only the chewing caption fits. In the cycle, 1–4 and the arrows give the order.
  - No cross-item leak: T6's choices do not answer T1–T5, and Figure 2's caption repeats only what the heading "A Long Trip South" already says.
- **Remaining limitations:**
  - The bold word is practiced (P4) but not tested; the test is at the 6-item cap.
  - Digital and auditory modes are still described in words (P7, T4). There is no audio or video.
  - The test figures are in passage p2, which the test also uses. Practice uses p1 and an item figure, so they do not overlap.

## V-3. 3.L.V.3.a context clues, including images and graphs (High)

- **Deficiency:** images and graphs as context were never taught or tested (there was only a parent note).
- **Official requirement:** 3.L.V.3.a "Use context within and beyond a sentence, including images and graphs, to determine or clarify unknown and multiple-meaning words and phrases."
- **File:** `js/data/lessons/L-V3.js`.
- **Corrections:**
  - New teach point: "Pictures, captions, charts and graphs can show what a word means. ..." (how to read the caption, labels, title and axis words).
  - `teach.example` became `teach.examples`. The definition-clue example is kept, and the old Watch Me "utensils" example-clue sentence moved here, with a note. This keeps the example-clue model, because Watch Me is capped at 3.
  - Watch Me 2 is now a graph example: the sentence "June had the most rainfall." with a bar graph `v3a-rainfall-graph.svg`. The title, the axis words "inches of rain" and the values are printed on the bars, so the graph does not rely on color.
  - **SK-V3a-P6** (multiple-meaning "trunk") was rewritten to need the picture: "Grandpa leaned the ladder against the trunk." The sentence alone could mean a car trunk. The labeled picture (`v3a-tree-ladder.svg`) shows the ladder against a tree trunk. The key is "the thick main stem of a tree". It stays in Try It Yourself.
  - Passage p2 gets Figure 1, a labeled heron (`v3a-heron.svg`: long neck, sharp beak, long legs) with the caption "A heron hunts for fish in the shallow water."
  - **SK-V3a-T3 (cautious) removed and replaced by SK-V3a-T7** (dropdown, 1 pt, DOK 2): "Paragraph 3 names herons, but the words do not tell what a heron is. Use Figure 1 ...". The key is "a tall bird that wades in water". The test is capped at 6. "Context beyond a sentence" is still tested by T2 and T5.
- **Verification:**
  - The checker passes.
  - Rendered at 4 widths (v3a-teach, v3a-learn, v3a-P6, v3a-T7).
  - T7 does not reveal T2's Part B. It names paragraph 3, but not the sentence; its `why` does not quote the T2 sentences. The caption says "hunts", not "lives".
- **Remaining limitations:** graphs are taught (Watch Me) but the practice and test items use labeled pictures, not graphs. A graph item would need to replace another capped item.

### V-3b. Choose-two items worth 1 point (SK-V3b-P6, SK-V3c-P5)

- **Deficiency:** both are `ms` "choose TWO" items with `points: 1`. Under SPEC §5, a 1-point `ms` scores exact-only. Every other `ms` item on the site (88 of them in lessons) is 2 points, with partial credit: 1 point for at least half the keys and at most one wrong choice.
- **Correction:** both are now `points: 2`, so they score like the other choose-two items. Both are practice items, so no test total or mastery threshold changes. The engine and SPEC needed no change.
- **Verification:**
  - The checker passes.
  - The player header shows "2 points" for both at all 4 widths.

## V-4. 3.T.T.2.a design of expository texts (Medium)

- **Deficiency:** the "design" half (headings, text boxes, photos/captions, diagrams) was not taught or assessed in the lesson.
- **Official requirement:** 3.T.T.2.a "Describe techniques used to present and design expository texts, including facts and key details that support the main idea." DRAFT ALD (Oct 2025), Proficient: "Describe the technique(s) used to present and design expository text(s). ..."
- **File:** `js/data/lessons/T-T2.js`, 3.T.T.2.a block only.
- **Corrections:**
  - New teach point on design: heading, text box, photo or drawing with a caption, diagram with labels.
  - New word "diagram".
  - A second teach example, "how the article is designed": a heading, a text box and a captioned, labeled camel diagram (`tt2a-camel.svg`: hump, long eyelashes, wide flat feet). It ties to the camel main-idea example.
  - The tip mentions design questions.
  - Passage p1: Figure 1, "Wax cells in a honeycomb" (`tt2a-honeycomb.svg`; labels egg, honey, pollen; honey and pollen are shown by pattern as well as color).
  - Passage p2: Figure 1, "The parts of an armadillo" (`tt2a-armadillo.svg`; labels long nose, sharp claws, bony plates, "bands that let the shell bend"; the head plate is drawn so it matches paragraph 3).
  - **New SK-TT2a-P6** (mc, DOK 2, Practice Together): how the diagram helps with paragraphs 3–4.
  - **New SK-TT2a-P7** (dropdown, 2 pts, DOK 2, Try It Yourself): what the caption tells and what the labels tell.
  - Practice is now 7 items: Together is P1, P2, P3, P6; Try is P4, P5, P7.
  - **New SK-TT2a-T6** (mc, 1 pt, DOK 2): "Which fact does the reader learn ONLY from the diagram?" The key ("bands ... let it bend") appears only in the figure label. The distractors (bony plates, shell on the head, short strong legs) are all in paragraphs 2–3. I deliberately avoided claw/nose distractors, because they would give away T3's keys. The test is now 6 items and 8 points.
- **Verification:**
  - The checker passes.
  - Rendered at 4 widths (tt2a-teach, P6, P7, T6 in both panes).
  - Fact check (my knowledge; no web source fetched):
    - nine-banded armadillos have flexible bands between the front and rear shields and a bony head shield;
    - honeycomb cells hold eggs/brood, honey and pollen;
    - a camel's hump stores fat.
- **Remaining limitations:**
  - The lesson title is still "Main idea and key details". I did not rename it, in case other pages or tests key on the title.
  - The design part has no Watch Me example, because Watch Me is capped at 3.

## V-5. 3.T.SS.1.a map (Medium)

- **Deficiency:** Watch Me 3 described a map in words ("a map of Georgia with the river drawn in blue").
- **Official requirement:** 3.T.SS.1.a "Describe how texts are arranged using text features (e.g., maps, captions) and organizational structures (e.g., cause/effect), referring to chapters or sections."
- **File:** `js/data/lessons/T-SS.js`, 3.T.SS.1.a lesson, Watch Me 3 only.
- **Correction:**
  - The words-only map is replaced by `ss1a-georgia-river.svg`: an original simplified outline of Georgia plotted from approximate state-border coordinates. It labels Alabama and Florida, the north-Georgia mountains, a dot for Atlanta, and the Chattahoochee drawn as a thick striped line (so it does not rely on blue alone).
  - The caption is "The Chattahoochee River in Georgia", and the alt text describes the path.
  - The steps now tell the child to find these on the map.
- **Verification:** rendered at 4 widths (ss1a-learn).
- **Remaining limitations:**
  - The map is schematic. The border and river points are approximate, from my own knowledge, not traced from a source map.
  - No practice or test item uses the map (scope was the Watch Me example only). SK-SS1a-P6 and SK-SS1a-T4 still describe a map and a photo in words. A follow-up could convert them now that the engine supports figures.
  - Chapters are still not addressed (matrix note).

## V-6. Gates

- **check-content:** `node verification/check-content.js --all` gives PASS (0 failures, 8 warnings, none from my items).
- **readability:** `python3 verification/readability.py` runs; no passage is flagged.
- **guard:** `python3 verification/guard.py http://localhost:8451/` was run against the Python static server; the result is in the report to the lead.
