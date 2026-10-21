# PP-004 gapfix log (agent "gapfix", port 8491)

Date: 2026-10-20. Worktree: /home/claude/pp-fix. No git commands were run.
Inputs: pp004-gapreview-AB.md (standards and instruction) and pp004-gapreview-C.md (cold-solve).
Files edited:
- js/data/lessons/T-C.js (3.T.C.1.b and 3.T.C.2.c blocks only)
- js/data/lessons/T-RA.js (3.T.RA.1.b block only)
- js/data/lessons/L-GC2.js (3.L.GC.2.a block only; 3.L.GC.2.b was not touched)
- js/data/lessons/F-PF.js (SK-FF1a-P6 `why` only)
- assets/figures/tc1b-frog-webpage.svg (edited)
- assets/figures/tc1b-monarch-video.svg (new)
- assets/figures/ra1b-web-pumpkin.svg and ra1b-web-moon.svg (edited)

Official wording (standards-3-5.txt, May 2023; page numbers from the reviewers' form-feed count):
- 3.T.C.1.b (p. 26): "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect."
- 3.T.C.2.c (p. 27): "With adult support, identify the context in which a text is written (e.g., time period, individual, situational)."
- 3.T.RA.1.b (p. 37): "Conduct research by locating, gathering, selecting, and organizing information from multiple credible sources, including print, digital, and personal communication, about a self-selected topic."
- 3.L.GC.2.a (p. 19): "Distinguish between correctly structured simple, compound, and complex sentences."
- 3.F.F.1.a (p. 9): "Increase sight word vocabulary by reading regularly and irregularly spelled words in isolation and context with accuracy and automaticity."

## Structural limits found (check-content.js)
These limits shaped three of the fixes:
- Watch Me must have 2–3 examples.
- Each Watch Me example must have 2–4 steps.
- Practice must have 4–7 items.

So I could not *add* a fourth Watch Me example or an eighth practice item. In both places I replaced or reordered instead, as explained below.

---

## 3.T.C.1.b

### AB SHOULD 1 / brief: no check item on auditory or spoken features: FIXED
- **Deficiency:** "auditory" features were taught (pt 7, Fig 2) and practiced (P10), but no check item assessed them.
- **Change:**
  - Added **SK-TC1b-T9** (mc, 1 pt, DOK 2, `passages: []`) with a new figure, `assets/figures/tc1b-monarch-video.svg`. The figure is a video still of a monarch hanging under a leaf in the rain, with a caption bar that reads `[rain tapping]` / `NARRATOR: They wait for the rain to stop.`
  - The child must apply both caption-line conventions: brackets name a sound, and `NAME:` marks a speaker.
  - The distractors are the two real misreadings: "the narrator says the words 'rain tapping'" and "the monarchs are tapping". The third distractor confuses the caption line with a link.
- **Removed SK-TC1b-T1** (mc, 1 pt, DOK 1, "which heading tells why birds avoid monarchs").
  - **Why T1 was the weakest:** it is the only DOK 1 item in the check, and it mirrors P1 in format. It can also be answered by surface matching: "stay away" in the prompt matches "warns birds to stay away" in the section.
  - **Heading use is still in the check:** T3 and T7 point the child to sections by their headings. Heading location is still taught (pt 1), modeled (WM1) and practiced with hints (P1).
  - **Why I kept T2 instead:** T2 is the only check item on text boxes, a feature named in the lesson title.
- **Result:** the check is still 6 items and 8 points (T2 1, T3 2, T8 2, T9 1, T7 1, T6 1), verified from the live `PP.byId`. The 80% mastery line is unchanged at 7/8.
- **Figure:** viewBox 320 wide, text at 22 units. The alt text gives both caption lines and does not name the answer's meaning.

### AB SHOULD 2 / brief: no Watch Me and no Together item on digital features: FIXED by moving P10 into Together (the brief's alternative)
- **First attempt:** I added a Watch Me example 4 (the frog web page, a caption line plus a pop-up). check-content failed it with "learn needs 2-3 worked examples", so I removed it.
- **Change:** practice order is now P1, P8, P9, **P10**, P4, P5, P6.
  - **Together (hints on):** heading, caption, spoken cue, and web page (sound caption plus link).
  - **Try:** bold, diagram, and the feature-job match.
  - Bold is still modeled (WM2) and practiced (P4, now in Try).
- **Verified:** the live sets are `:p` = P1 P8 P9 P10 and `:y` = P4 P5 P6.
- **Remaining:** digital features still have no Watch Me example. Learn It example 2 walks through every web feature with a numbered note. Adding a 4th Watch Me example needs the lead to raise the 2–3 limit, or to replace WM1.

### AB SHOULD 3 / brief: T8 blank 2 could be answered without the figure: FIXED
- **Blank 2:** now reads "To find out which flowers people can plant for monarchs, a reader should {tap the underlined words at the bottom | tap the Bees tab at the top | read the open box next to the word}".
  - The key is the link, which only the figure shows says "Next page: Monarch gardens".
  - "Bees tab" is now a lure (bees and flowers), not the key.
- **Blank 1:** dropped "without leaving this page", which echoed the teach wording (AB quality note).
- **`why`:** rewritten for the new key.

### C NIT / brief: P10 alt text says "three lines" but lists two: FIXED
- It now reads "a dark bar with two caption lines: [water rushing], then NARRATOR: The water spills over the dam."

### C SHOULD / brief: the P4 `why` leaked into P6: FIXED
- **P4 `why`:** now "Bold print tells the reader the word matters, and the glossary tells what it means."
- **P6 row 3:** now "makes one word stand out from the words around it". It no longer repeats P4's key wording ("important word ... glossary").
- **P6 `why`:** updated to match.
- **Check:** the P4 key and `why` share no distinctive wording with any P6 row.

### AB NOTE 2 and NOTE 3 / brief: frog gloss "tongue" and the bugs/insects wording: FIXED
- **Fig 2 (`tc1b-frog-webpage.svg`):**
  - The gloss now reads "tongue: the soft part inside the mouth that can move". The old gloss, "the soft part of the mouth", could also describe the cheeks or palate.
  - The article line now says "Frogs catch insects", which matches example 1.
- **Layout:** the pop-up box is 3 lines high, and the link and badges moved down. The viewBox is now 300×628.
- **Alt text:** the teach example alt is updated.
- **Render:** checked at 320 px (`scratchpad/gapfix/tc1b-frog-webpage.png`). No text overflow.

### Extra (pre-existing warning): SK-TC1b-T2 clue: FIXED
- The clue shared the word "fact" with the key only, which triggered a check-content warning.
- The clue now reads "Read only the words in the box. What does it tell you that the paragraphs do not?" The warning is gone.

---

## 3.T.C.2.c

### AB SHOULD 5 / brief: "Note in a box:" was rendered as plain words: FIXED for all 5 items; NOT FIXABLE in the 2 Watch Me examples
- **Engine facts:**
  - The engine's only real text-box block is a passage paragraph whose first sentence starts with `"Box: "` (SPEC §5; `player.js` `renderPassages` → `aside.passage-box`).
  - Item `stem` lines (`player.js` lines 179–186) and Watch Me `show` lines (`skills.js` `lines()`) render every string as a plain `<p>`.
  - Only `Cursive:` and `**bold**` are special there. I may not edit the engine.
- **Items: FIXED.** I moved the five short texts into two new passages, so each note now renders as a real box:
  - **p3 "Three Short Texts" (practice, 113 words):** sections "Dr. Ruiz's Field Notebook", "A Note from the Bus Driver" and "A Sign for Field Day". Each has a heading, a `Box:` about the writer or situation, then the text.
  - **p4 "Two Short Texts" (check, 142 words):** sections "Keeping Turtle Nests Safe" and "A Note to a Neighbor".
  - **Why two passages, not five:**
    - Keeping practice and check texts separate follows SPEC §8 ("the test uses different passages").
    - Each passage is over the 100-word short-passage warning.
    - The lesson gets only 2 new "Passage N" tags instead of 5.
  - **Items changed:** SK-TC2c-P6, P8 and P9 now use `passages: ["p3"]`, and T7 and T6 use `passages: ["p4"]`. Each `stem` was removed. Each prompt now starts with `Read "<section heading>."` so the child knows which text to read.
  - The texts, choices, keys and whys are word-for-word unchanged.
  - **Rendered:** at 1366 the passage shows three green boxes under their headings (`scratchpad/gapfix/SK-TC2c-P6-1366.png`). The same holds at 390 for P6, P8, P9, T6 and T7.
- **Watch Me (WM2 and WM3): NOT FIXED.**
  - **Reason:** there is no box block for `show` lines, and engine files are outside my assignment.
  - **Done instead:** I changed the label from "Note in a box:" to "Text box:". That is the site's existing Watch Me convention for a text box (T-T2.js WM, and the C.1.b teach example). I changed the steps from "Read the note in the box" to "Read the text box".
  - **For the lead:** a small engine change would let `stem` and `show` lines starting with `Box: ` render as `aside.passage-box`. That change would fix these two fully.

### C SHOULD and the brief: DOK
- **SK-TC2c-T4:** 3 → 2. The answer is stated in 7.2, and only a small inference is needed.
- **SK-TC2c-P4:** 3 → 2. Part A comes almost directly from 6.1–6.2, and the prompt gives the 1928 farm context. Part B is a quote match.
- **SK-TC2c-T3:** 3 → 2. Part A is close to literal (5.2) plus a simple then-and-now comparison. Part B is a quote match.
- The lesson now has no DOK 3 items. None of these three asks for reasoning beyond a supported inference.

### AB NOTE 4 (P7 blurs situational context with purpose): NOT CHANGED
- **Reason:** this is not a quick, clear-cut fix. Learn It pt 4 defines situational context as "what was happening ... A storm, a holiday or a big change can be the reason a text was written". A birthday gift arriving is something that was happening and that prompted the letter, so the key is defensible.
- Situational context is also covered by WM2 (drought), P9 (rain) and T6 (hurricane), which are all outside circumstances.

### AB NOTE 6 (parent note on the Proficient panel): NOT CHANGED
- **Reason:** that panel is generated from alds.js / skills.js, which are outside my assigned files.

---

## 3.T.RA.1.b

### AB SHOULD 4, C SHOULD (credibility) / brief: FIXED (teach, Watch Me, Together and check)
- **Teach:**
  - Added new point 3: "Choose credible sources. A credible source is one you can trust because people who know the facts made it, like a library book, a museum or science center, a park ranger or a scientist. Check who made a web page. If anyone can post on it, if no name is given, or if it is mostly ads, it is not a strong source."
  - Added the word **credible** ("can be trusted, because people who know the facts made it"). It uses the "trustworthy" wording of 3.T.RA.2.b.
  - The test tip now lists "choose the source you can trust most".
  - Point 4 now says "Ads, news and links in those boxes".
- **Watch Me 3:**
  - The site is now "Pine Hollow Nature Center", not "Backyard Bird Club". The side box reads "Gift shop sale: ...".
  - Step 1 now models checking who made the page. I merged it with the old step 1 to stay within the 4-step limit.
  - The answer and the `write` example use the new site name.
  - The `write` prompt and checklist now say "places you can trust" and "sources I can trust".
- **Parent line:** adds "Who made this page? Can we trust it?" and cross-links the skill "Is this a good source?" (3.T.RA.2.b).
- **Credible-looking web pages (all invented):**
  - **p5:** "Maple County Extension Office". Byline: "Another source: a web page from a county extension office, where plant scientists help people grow food". The ad box became "News: Fall Festival tickets ... county fairgrounds".
  - **p6:** "Riverbend Science Museum". Byline: "Another source: a web page from a science museum, written by its space scientists". The ad box became "Museum news: Sign up for Summer Camp today! Build robots and make new friends."
  - Both header SVGs were redrawn with a two-line site name (viewBox 320×220, text 21–25 units). I re-rendered them, and they read clearly at 390.
  - The P6 / T6 `why` text, and the P7 / T7 "Where I found it" stems, use the new names.
  - **Effect on items:** none on keys. The P6 option "Fall Festival tickets are on sale now!" and the T6 row "Sign up for Summer Camp today!" are unchanged text. They are still off-topic, and are no longer labelled "Ad:" (this also answers AB's note that the "Ad:" label made those rows trivial).
- **New Together item SK-RA1b-P8** (mc, 1 pt, DOK 2, standalone): "Nia wants one more source about what pumpkin plants need. Which source can she trust the MOST?"
  - Key: a garden guide by plant scientists who help farmers.
  - Foils: an anonymous post on a game site, a store ad selling seeds, and a cartoon.
  - **It replaces SK-RA1b-P2**, because practice cannot exceed 7 items. P2 ("How bees help pumpkins") was the weakest: C's NIT notes its key reaches bees only by inference. Organizing by note-card heading is still practiced in P4 and checked in T3.
  - **Order:** P1, **P8**, P3, P6 | P4, P5, P7. Together `:p` = P1 P8 P3 P6 (verified live).
- **New check item SK-RA1b-T8** (mc, 1 pt, DOK 2, standalone): Page A is "The Moon" from the Lakeside Space Center, written by its space scientists. Page B is "Moon Chat", where anyone can post, the writer gave no name, and the page is full of game ads. The prompt is "Which page should Kofi use, and why?"
  - Key: "Page A, because scientists who study space wrote it."
  - Foils:
    - Page B, because more posts mean more facts.
    - Page B, because of the games.
    - Page A, because Page B is not about the moon (false by the stem).
  - **It replaces SK-RA1b-T2** (1 pt, "why footprints last" note card). T2 overlapped with T3, so organizing by heading is still checked by T3 (2 pts).
- **Check:** T1 2, T8 1, T3 2, T5 1, T6 2, T7 1 = **9 points, 6 items**, the same size as before (verified live).
- **Weak-source contrast:** this is kept inside the new items (Page B; the anonymous post), as the brief allowed.

### C SHOULD / brief: "PASSAGE 3/4" vs "Source 1/2" mismatch: FIXED
- **SK-RA1b-T1 columns:** now `"Our Moon" only` / `"A Talk at the Science Center" only` / `Both sources`. The `why` names the sources by title.
- **SK-RA1b-T5:** now reads `Kofi's note from "Our Moon" ... Which fact from "A Talk at the Science Center" ...`. The clue and `why` were updated to match.
- **SK-RA1b-P1 columns:** now `"How Pumpkins Grow" only` / `"A Visit with Farmer Ruiz" only` / `Both sources`, with the `why` updated.
- **p3/p4 bylines:** the numbers are dropped ("A page from a science book", "A student's notes from a talk"). No item refers to the moon sources by number any more, so the pane tag "Passage 3/4" no longer conflicts with a byline.
- **p1/p2 bylines:** these keep "Source 1/2". They display as Passage 1/2, so the numbers match, and P3 and P5 use them.
- **p5/p6 bylines:** these no longer say "Source 3" (AB NOTE 7).
- **Rendered:** T1 at 390 shows the long column label wrapping cleanly inside its button (`SK-RA1b-T1-390.png`).

### C SHOULD / brief: DOK of SK-RA1b-T5: FIXED (3 → 2)
- The task is to pick the fact from the second source that extends a given note. That is skill/concept work.
- P5 stays at DOK 3, because the child chooses a source and judges the reason for it.

### AB NOTE 1 / brief: moon "five months by car": FIXED
- p6 now says "A car driving day and night at highway speed, about 60 miles per hour, would need more than five months to get there."
- Arithmetic: 239,000 / 60 ≈ 3,983 h ≈ 166 days ≈ 5.5 months.
- The T7 foil ("A car would need more than five months to drive there.") is unchanged and still true but irrelevant.

---

## 3.L.GC.2.a

### AB SHOULD 6 / brief: no complex sentence keyed in Together: FIXED
- **Change:** practice order is now P1, P2, P3, **P4**, P7, P9, P8.
  - **Together:** complete sentence, fragment/run-on match, compound (P3), and **complex (P4, the "After" dropdown)**. Each sentence type is now the keyed answer in Together.
  - **Try:** all three in-draft items (P7 run-on, P9 complex, P8 fragment fix). This moves from single sentences to sentences inside a text.
- **Verified live:** `:p` = P1 P2 P3 P4 and `:y` = P7 P9 P8.

### C SHOULD / brief: P7 `why` leaked into P9: FIXED
- Cut "Sentence 3 also has two whole thoughts, but they are joined correctly with a comma and and."
- Replaced it with "None of the other sentences has two whole thoughts crammed together with nothing between them." This explains the distractors without saying sentence 3 is compound.

### C SHOULD / brief: DOK of SK-GC2a-T2: FIXED (3 → 2)

### C NIT (P8 prompt names sentence 5 as a fragment, and P9 offers 5 as a distractor): NOT CHANGED
- **Reason:** it only helps a child who goes back with "Previous question". It is low risk, as C says, and P9's clue already teaches the idea.

### AB NOTE 8 (T6 → T8 distractor): NOT CHANGED
- **Reason:** AB rated it acceptable.

---

## 3.F.F.1.a

### C NIT / brief: SK-FF1a-P6 `why` tense: FIXED
- Now reads "\"Yesterday I was a deer\" would mean the writer was a deer, which does not make sense."

---

## Not in scope / for the lead
- **AB NOTE 9:** pp004-research.md is stale (the standards.js wording, the pumpkin record). That is another agent's log, so I did not edit it.
- **AB NOTE 10:** guard.py was not run. That is the lead's job before merging.
- **Engine request:** support `Box: ` in item `stem` and Watch Me `show` lines. That would complete the C.2.c box fix for WM2 and WM3.
- **Engine/limit request (optional):** allow 4 Watch Me examples, if the lead wants a web page Watch Me in 3.T.C.1.b.
- **Invented names:** Maple County Extension Office, Riverbend Science Museum, Lakeside Space Center and Pine Hollow Nature Center are invented generic names. I did not search the web for real organisations with the same names. Each one is used only as a generic site header, with no logo, branding or domain.

## Verification
- **Gates, run from /home/claude/pp-fix:**
  - `node verification/check-content.js --all` → **PASS (0 failures, 6 warnings)**. None of the warnings is from these lessons. The pre-existing SK-TC1b-T2 warning is fixed, and the new P8 warning ("why does not quote the answer") was fixed before the final run.
  - `python3 verification/readability.py` → new passages C.2.c p3 113 words (FK about 0.3, short notes) and p4 142 words (FK about 3.2). RA.1.b p5 is 167 words and p6 is 130.
  - `node verification/check-writing.js` → 0 failures, 0 warnings.
- **Live sets** (Playwright, `PP.byId`) for all five lessons: the Together/Try/Check membership and point totals match what this log says. The full listing is in the shots run output.
- **Rendering:**
  - Ran `scratchpad/gapfix/shots.py` (adapted from gapAB) on port 8491 at 390×844 and 1366×900.
  - Covered: the Learn It page and Watch Me (all steps revealed) for the five lessons, plus every changed item, with the passage pane at 390. The items were TC1b P10, P4, P6, T8, T9; TC2c P6, P8, P9, T7, T6; RA1b P1, P8, P6, P7, T1, T8, T5, T6; GC2a P4, P7; FF1a P6.
  - Result: **no page errors, and scrollWidth was never wider than the viewport.** I looked at T9 (390), C.2.c P6 (1366), RA1b T1 (390) and the p5 passage (390), plus the three changed SVGs at 320.
  - Screenshots are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/gapfix/`.
  - The server was stopped by its PID.
- **Shuffled-choice blind check (self-check only, NOT an independent review):**
  - Ran `gapC/blind.js` and saved the output to `scratchpad/gapfix/blind.txt` and `keys.txt`.
  - I solved the new and changed items from the shuffled output: SK-TC1b-T9, T8 (both slots), P6; SK-RA1b-P8, T8, T1, T5; SK-TC2c-P6.
  - All matched the keys, and I found no second defensible answer.
  - Caveat: I wrote these items, so this solve is not independent. An independent re-solve of T9, RA1b-P8 and RA1b-T8 is recommended.
  - Known weakness: in T9 the key is the longest choice, though only slightly longer than foil D. RA1b-P8 and T8 are easy at grade 3, which is acceptable for an evaluate-the-source item.
