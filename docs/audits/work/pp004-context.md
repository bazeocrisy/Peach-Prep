# PP-004 · agent "context" · 3.T.C.1.b and 3.T.C.2.c

Worktree /home/claude/pp-fix (branch pp-003-fixes). Port 8482 (server stopped by PID). No git commands run.
Files edited: `js/data/lessons/T-C.js` (only the 3.T.C.1.b and 3.T.C.2.c lesson blocks), new `assets/figures/tc1b-frog-webpage.svg`, `tc1b-beaver-webpage.svg` and `tc1b-monarch-webpage.svg`, and this file. I read T-C.js right before each edit. Another agent was editing the 3.T.C.1.c block of the same file at the same time; I did not touch it.

## Official wording (verified on the PDF page images, not only the text extraction)
Source: "Georgia's K-12 English Language Arts Standards: Foundations, Language, Texts, & Practices, Grades 3-5", approved May 2023.
- **3.T.C.1.b** (PDF p. 26, footer "3-5 ELA Standards | 26"): "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect."
- **3.T.C.2.c** (PDF p. 27, footer "| 27"): "With adult support, identify the context in which a text is written (e.g., time period, individual, situational)."

Prior findings read: review-A RA-4, RA-5, RA-16, RA-17; review-B RB-10, RB-11, RB-23, RB-25; review-C RC-5, RC-8, RC-9, RC-11, RC-12; review-E (RA-4 bold untested, fix-texts §4 open, RE-3); fix-visuals V-2; fix-review rows RA-4, RA-5, RC-12; fix-texts §4.

---

## 1. 3.T.C.1.b: bold print taught and demonstrated, but not checked

- **Deficiency:** bold was practiced (SK-TC1b-P4) but never on the check (RA-4, review-E). The teach point and Watch Me 2 said only "bold = important, look in the glossary". They did not say what bold adds to meaning.
- **Official requirement:** 3.T.C.1.b, "...describe how they contribute to the overall purpose and effect" (p. 26).
- **Changes (T-C.js, 3.T.C.1.b):**
  - Teach point 2 now says that bold marks a key word that often names the big idea of its section. The sentences around the word tell what it means, and the glossary confirms it.
  - Learn It example 1 note: "tongue is in bold because it is a key word: it names what a frog uses to catch its food."
  - Watch Me 2 is rewritten. A four-sentence cactus paragraph with a bold **stem**, plus the glossary line. Its 4 steps: bold signals a key word, read the nearby sentences, check the glossary, then put it together into the big idea (the cactus lives through dry months because its stem stores water).
  - Passage p2, paragraph "A Long Trip South": "In the fall, many monarchs fly south to stay warm." is now "Each fall, many monarchs **migrate**." followed by "They fly south to a warmer place for the winter." The other sentences in the paragraph are unchanged, so the SK-TC1b-T3 Part B quotes still resolve. No hot-text item targets p2.
  - **New SK-TC1b-T7** (check, mc, 1 pt, DOK 2): "What would the glossary most likely say about the bold word [migrate]?" Key: "migrate: to move to a far-away place when the season changes". Each distractor is a plausible misreading:
    - "to change from a caterpillar into a butterfly": a different section
    - "to stop on the way and drink nectar from flowers": a detail from the same section
    - "to stay in one warm place all through the year": the opposite
    To answer, the child has to use the bold signal (key word, glossary entry) and the section around the word, not a recalled definition.
- **Replaced item (check stays at 6 items):** **SK-TC1b-T5** is removed. It asked which heading fits the first paragraph. It was the weakest item: headings are already checked by SK-TC1b-T1 and practiced by SK-TC1b-P1, so T5 was a second heading item. Points stay the same (both are 1 point).
- **Verification:** check-content PASS. Rendered T7 at 390 and 1366: the stem shows **migrate** in bold, and the 390 passage pane shows **migrate** in bold in paragraph 4. Choice lengths are evened out, so the key is not the only long choice. Watch Me 2 rendered at 390 with all steps revealed.
- **Remaining:** none known.

## 2. 3.T.C.1.b: digital and audio features were only described in words

- **Deficiency:** link, play button and sound were described in stems (old SK-TC1b-P7 and SK-TC1b-T4). The child never saw a screen feature (RA-4).
- **Official requirement:** 3.T.C.1.b "...digital, auditory, spoken ... modes" (p. 26).
- **Design:** static, original line-art web page mocks, not a media player. Each mock has a browser frame, menu tabs (the current tab has a thick border and bold text, not only color), a search box, a video with a play button, a caption line, a dotted word with an open pop-up glossary box, and an underlined link. Links are underlined, so color is not the only cue. All text is 22 units in a 300- or 320-unit viewBox, which gives at least 14.5px on a 320px phone.
- **Changes:**
  - Teach point 6 is rewritten (screen features: menu tabs, search box, play button, pop-up box, link). New teach point 7 covers sound features: the caption line, [brackets] for a sound, NAME: for who is talking, and the spoken-mode cues from the old point 6, kept word for word.
  - `teach.example` became `teach.examples` (2). The new example 2 is "Text features on a web page about frogs" with **`tc1b-frog-webpage.svg`** (Figure 2). Its six numbered badges are explained one by one in the note.
  - **SK-TC1b-P7 removed and replaced by SK-TC1b-P10** (Try It Yourself, dropdown, 2 pts, DOK 2), using **`tc1b-beaver-webpage.svg`**.
    - "In the caption line, the words [water rushing] tell the reader {what sound plays in the video | what words the narrator says | what the beaver is building}."
    - "The underlined words at the bottom will {open a page about beaver lodges | play the video about the dam | tell what the word dam means}."
    - This also closes the RC-8 note: the old P1 `why` gave away the content of the old P7.
  - **SK-TC1b-T4 removed and replaced by SK-TC1b-T8** (check, dropdown, 2 pts, DOK 2), using **`tc1b-monarch-webpage.svg`**.
    - "To learn what hatches means without leaving this page, a reader should {read the open box next to the word | tap the Butterflies tab at the top | tap the underlined words at the bottom}."
    - "To find a page about bees, a reader should {tap the Bees tab at the top | ...}."
    - Both slots need the figure: the child has to see that a Bees tab exists, that the link goes to "Monarch gardens", and that the pop-up is on the page. T4 and T8 are both 2 points, so the check total stays 8.
  - I first wrote "chrysalis" as the monarch pop-up word. I changed it to "hatches" because it hinted at the SK-TC1b-T3 Part B key. I did not use the word "migrate" anywhere in the mocks.
- **Accessible equivalents:**
  - Each figure's alt text names every tab, the search box, the heading, the play button, each caption line word for word, the dotted word and its pop-up text, and the link text.
  - The alt text never says what a feature does ("a dark bar with ... [water rushing]", not "a sound effect"). The answers still have to be worked out.
  - The SVG `<title>`s are neutral.
- **Coverage now:**
  - Teach: menu tabs, search box, play button, caption line (sound and narration), pop-up glossary, link, and spoken cues.
  - Practice: the caption line with a sound in brackets, the link (P10), and spoken cues (P9).
  - Check: the pop-up glossary and menu tabs (T8).
  - The search box is taught only.
- **Verification:**
  - Each SVG rendered on its own at 198/220px and 380px. I fixed two problems: the pop-up text ran past its box, and the dotted underline was misplaced.
  - P10 and T8 rendered in the player at 390 (passage and question panes) and at 1366.
  - The teach page rendered at 390 and 1366.
  - No horizontal overflow and no page errors. The only console errors were Google Fonts proxy refusals, which are external.
- **Remaining:** practice is at the 7-item cap, so the search box has no item. The text-feature items in the mixed sets (R-INF-01-6, PT-1-12) are outside my files.

## 3. 3.T.C.2.c: individual and situational context not taught explicitly, not in both practice halves, and individual context not checked

- **Deficiency:**
  - Teach mixed "who wrote it and what was happening" into one point. There was no worked example of individual context.
  - Practice had individual context only in Try (P6) and no situational item.
  - The check had situational context (T6) but no individual-context item (RA-5, review-E, fix-texts §4).
- **Official requirement:** 3.T.C.2.c "...identify the context in which a text is written (e.g., time period, individual, situational)" (p. 27).
- **Teach (T-C.js, 3.T.C.2.c):**
  - `big` now says "when, where, who and why".
  - The points name three kinds of context: time period; individual context (who the writer is: background, job, experiences); and situational context (what was happening when or where the text was written).
  - New words: "individual context" and "situational context".
  - The example is relabeled "A note with situational context", and its note now names the situation.
  - The tip now mentions the writer's job and life.
  - The parent line adds "Who made it? What was going on at the time?"
- **Worked examples (Watch Me):**
  - Example 2 (ranger sign) now names the situation explicitly. One step says that "The sign alone does not say why. The situation does."
  - **New Watch Me 3, individual context:** "Mr. Banks has been a firefighter for 20 years" and his smoke-alarm note. Its steps show how his job explains his strong warning and why readers can trust it.
- **Practice (7 items, so Together = 4 and Try = 3):**
  - **Together:**
    - SK-TC2c-P1 (time period)
    - SK-TC2c-P2 (time period)
    - **new SK-TC2c-P7** (situational, mc, DOK 2, on the Ella letter): "What was happening in Ella's life that led her to write this letter?" Key: Hattie had sent a birthday book and Ella wanted to thank her. Distractors: moving to Atlanta (she only hopes to visit), Papa needed Hattie's help to plow, hurt eyes.
    - SK-TC2c-P6 (individual, Dr. Ruiz), moved up from Try.
  - **Try:**
    - SK-TC2c-P4 (EBSR)
    - **new SK-TC2c-P8** (individual, mc, DOK 2): a school bus driver of 15 years writes for the newsletter. "Why can Ms. Greene be so sure...?"
    - **new SK-TC2c-P9** (situational, mc, DOK 2): Leo's field-day sign. "Meet in the gym" gives no reason; the box gives the overnight rain.
- **Removed practice items:**
  - **SK-TC2c-P5** (DOK 3, "Why does it help to know when Ella wrote this letter?"). Its `why` ("helps you understand why Ella thinks Hattie is lucky") gave away the SK-TC2c-P4 Part A key in the same set, and it repeated the oil-lamp and electricity point of P2.
  - **SK-TC2c-P3** (ms, "two details show life long ago"). It was a third time-period item on the same letter. Time period is still practiced by P1, P2 and P4 and checked by T1 to T5.
- **Check (6 items, 9 points, unchanged total):**
  - **New SK-TC2c-T7** (individual, EBSR, 2 pts, DOK 2). The passage is a short, original first-person piece by a sea-turtle nest keeper of 30 years who grew up near the Georgia coast.
  - **Part A:** "Why does Grace know so much about what baby sea turtles need?" Distractors:
    - learned it from the magazine (she writes for it)
    - a beach visitor (she teaches visitors)
    - "studied turtles as a girl" (the text says "When I was a girl, I did not know that")
  - **Part B:** the box detail about her 30-year job. The Part B choices are written as plain descriptions, not quotes, because the passage is in a stem; the checker validates quoted Part B choices only against passages. I evened out choice lengths after the 390 render showed the keys were longest.
  - SK-TC2c-T6 (situational, hurricane) is kept. It was already fixed for RA-5.
- **Replaced check item:** **SK-TC2c-T5** (match: diary versus life today) is removed. It was the weakest item, and it leaked: its row "Most TVs show pictures in full color → Life today" signals the SK-TC2c-T3 Part A key ("black and white, not color"). It also re-asked T3's contrast. Both are 2 points, so the total stays 9.
- **No cross-item giveaways:**
  - P7's `why` does not mention Hattie's city lights (the P4 key).
  - T7 (turtles) and T6 (hurricane) share no answer content.
- **Verification:**
  - check-content PASS. readability: the passages are unchanged (p1 4.3, p2 3.6).
  - Rendered at 390 and 1366: P7, P6, P8, P9, T7, the Learn It page and Watch Me with all steps revealed. No overflow.
  - The built sets were confirmed in the browser: `:p` = P1, P2, P7, P6; `:y` = P4, P8, P9; `:t` = T1, T2, T3, T4, T7, T6, 9 points.
- **Remaining:**
  - The lesson title is still "When, where and why a text was written". I left it alone to keep the catalog stable. The skill page subtitle ("With help, tells when and where...") comes from a file I do not own. The lead may want to add "who" to both.
  - SK-TC2c-T4 (Grandma does not have a TV) is rated DOK 3, but its answer is stated in the text. It is probably DOK 2. I did not change it because it was not in scope.

## Gates (run from /home/claude/pp-fix after the last edit)
- `node verification/check-content.js --all`: PASS, 0 failures, 10 warnings.
  - Eight warnings are the existing baseline (including SK-TC1b-T2 "fact").
  - Two are new and come from SK-TC1c-P1 in the 3.T.C.1.c block, which belongs to another agent.
  - None comes from my items.
- `python3 verification/readability.py`: runs clean. The 3.T.C.1.b p2 passage is 158 words, FK about 3.4.
- `node verification/check-writing.js`: 0 failures, 0 warnings.
- `verification/guard.py` (the 20-minute full run) was **not** run. The lead's final run should cover it. The item-ID removals could matter to any guard step that names the removed IDs; I found no reference to them in js/, verification/ or index.html.

## Item ID summary
- Added: SK-TC1b-P10, SK-TC1b-T7, SK-TC1b-T8, SK-TC2c-P7, SK-TC2c-P8, SK-TC2c-P9, SK-TC2c-T7.
- Removed: SK-TC1b-P7, SK-TC1b-T4, SK-TC1b-T5, SK-TC2c-P3, SK-TC2c-P5, SK-TC2c-T5.
- Changed: SK-TC1b teach (points 2, 6 and new 7; examples), Watch Me 2, passage p2; SK-TC2c teach, Watch Me 2, new Watch Me 3, parent line, practice order (P6 moved into Together).
- Check totals unchanged: 3.T.C.1.b is 6 items and 8 points; 3.T.C.2.c is 6 items and 9 points. Stored `pp.progress.v1` meaning is untouched, and no new RE-3 mismatch is introduced.
- The matrix rows for 3.T.C.1.b and 3.T.C.2.c should be updated by whoever owns the matrix.
