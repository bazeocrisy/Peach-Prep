# PP-003 fix log: review findings (agent "review-fix", port 8457)

Date: 2026-10-20. Worktree: /home/claude/pp-fix. No git commands run. Files edited: js/data/lessons/{L-V12,L-V3,T-C,T-T1,T-T2,T-T34,T-SS,T-TS,T-RA,L-GC2,F-FH}.js, js/data/site.js (wording), assets/figures/ (4 edited, 3 new SVGs), this log. Also js/data/sets/PT-1.js (one word in the blurb). Not edited: catalog.js (not needed), js/skills.js, player.js, app.js, parents.js, writing.js, css, guard.py, index.html.

Sources: review-A.md, review-B.md, review-C.md; the rubric text `scratchpad/gadoe/de84ed03-GM_Rubric_Gr3.txt`; Writer's Checklist `ce3c8549-GM_Checklist_Gr3.txt`; standard wording from `js/data/standards.js`.

## Verification (after all edits)

- `node verification/check-content.js --all`: PASS, 0 failures, 8 warnings. These are the same 8 pre-existing clue-overlap warnings, none from my items.
- `python3 verification/readability.py`: runs. No passage text changed. The highest score is 3.L.V.3.d p1 at FK 4.5 (unchanged).
- Test sizes are unchanged (4–6 items per lesson). The test point totals are unchanged except where noted. Practice stays within 7 items.
- Playwright, port 8457, at 390 and 1366 px. The server was stopped by its PID (27468), and curl afterwards returned 000.
  - Rendered: Learn It and Watch Me (all steps revealed) for the 11 changed lessons, and 21 changed items inside their real sets. At 390 px, each Together/Try item was also rendered after a wrong answer, Help me, and then the right answer with its `why`.
  - Result: 0 page errors and no horizontal scroll at either width.
  - Contact sheets for the 9 changed or new SVGs: `sheet1.png` and `sheet2.png`.
  - Screenshots are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revfix/`. They are named `<item>-q-<w>.png`, `<item>-wronghelp-390.png`, `<item>-right-390.png`, `<lesson>-teach|learn-<w>.png` and `<lesson>-learn-all-<w>.png`.
  - I viewed these myself: the T8 roots item, the attendance graph item, the peanut map (390 and 1366), the tortoise item, the hurricane note item, the trunk item, the precipitation Watch Me, the camel Watch Me, the spoken-feature item, the 3.L.V.2.a Learn It, and both sheets.
  - The sticky step bar overlaps the middle of full-page screenshots. That is a capture artifact, not a layout bug.
- Giveaway re-check (by reading every practice and test list of the changed lessons):
  - No test item reveals another test item's answer, in either direction.
  - In practice, I removed two cues. RC-1: P6's `why` no longer names P7's labels. SK-TT2d-P6: an apple distractor that echoed P3's key sentence was changed to popcorn.
  - One residual cue is accepted: RC-10's new SK-TT2a-P5 `why` mentions five eyes. It comes after P4, and it concerns paragraph 4's main idea, not P4's "jobs" main idea.
- Etymology checks for the new SK-V2c-T8, all checked 2026-10-20:
  - portion: Latin *portio*, "share, part", related to *pars*, not *portare*. https://etymologist.ai/word/portion ; https://ftp.latin-dictionary.net/definition/30980/portio-portionis
  - portrait: Old French *portraire*, from Latin *protrahere*, "draw forth", not *portare*. https://etymologist.ai/word/portrait
  - passport: French *passeport*, *passer* + *port* (port, harbor). https://www.wiktionary.com/wiki/passport
  - porter, in the carrier sense: Late Latin *portator*, from *portare*, "to carry". The doorkeeper sense is a separate word from *porta*. https://dictionary.dogonews.com/definitions/porter
  - transport: *trans-* + *portare*. Search-result title at https://etymologist.ai/word/transport (page not opened).
  - UNVERIFIED, because the fetches were refused (permission not answered): etymonline.com/word/{portion,portrait,passport,porter} and en.wiktionary.org/wiki/{portion,portrait,porter,transport}.
  - airport (air + port, harbor) is used only in teaching text. It rests on general knowledge and the lead's brief, and I did not verify it externally.
  - "sport" is avoided everywhere.

---

## MUST findings

### RB-1 / RA-6 / RC-3 · SK-V2c-T8 can be answered by letter-spotting: **fixed**
- **Deficiency:** only the two keys contained "port", and the premise was false.
- **Official requirement:** 3.L.V.2.c "Build words using common roots, root words, and affixes". DRAFT ALD (Proficient): "Construct words using common roots, root words, and affixes."
- **File:** L-V12.js.
- **Correction:**
  - New prompt: "Every word below has the letters port. The root port means "carry." In which TWO words is port the root that means carry?"
  - Choices: transport and porter (the keys), plus portion, portrait and passport (the distractors). That is 5 choices, still 2 points, ms pick 2.
  - The new `why` gives the meaning of each word. The etymology claims are listed above.
  - New clue: "Think about what each whole word means. Does carry fit that meaning?"
- **Teaching added so the item is fair:**
  - The 3.L.V.2.c Learn It root example has a new line: "Look-alike: airport. Here port means a harbor for planes, not carry."
  - Its note now says: "If carry does not fit the meaning, the letters port are a look-alike."
- **Limitation:** passport's port (harbor/gate) is a real root, just not *portare*. The `why` says exactly that.

### RB-2 · SK-V3a-T7 `why` has false reasoning, and "wades" is untaught: **fixed**
- **File:** L-V3.js.
- **Correction:**
  - The key option is now "a tall bird that hunts in shallow water" (it was "…wades in water").
  - New `why`: "Figure 1 shows a sharp beak, a long neck and two long legs standing in shallow water. Fish and plants do not have beaks or legs, so a heron is a tall bird. The caption tells what the bird does: it hunts for fish in the shallow water."
  - The clue now says "living thing" instead of "animal", so it does not give away that a heron is not a plant.

---

## Review A

| ID | Status | Change (files, item IDs) |
|---|---|---|
| RA-1 | fixed | T-SS.js. **SK-SS1a-P6** now uses a real map (new `ss1a-peanut-map.svg`: Georgia outline, north arrow, Atlanta dot, a striped south/southwest area keyed "peanut farms"). It asks what the map shows that the words do not; key "which part of Georgia the peanut farms are in" (the article never says where). **SK-SS1a-T4** now has an item figure (new `ss1a-tortoise-burrow.svg`: a tortoise at a tunnel opening in a sand mound, no labels), and its `why` cites the picture. **New SK-SS1a-P7** (DOK 2): a table of contents for an original book, *Georgia's Sea Turtles*; "In which chapter…?"; key Chapter 3. The teach "Features" point now mentions the table of contents and chapters. Practice is 7 items (Together P1–P4, Try P5–P7). The test is unchanged at 5 items, 6 points. |
| RA-2 | fixed | L-V3.js. **SK-V3a-T1** (wetland, DOK 1) is removed and replaced by **SK-V3a-T8** (DOK 2, 1 point, standalone): the sentence "Attendance at the swamp's nature center was highest in spring." plus a new graph `v3a-visitors-graph.svg` (horizontal bars, title "People Who Came to the Nature Center", axis "number of people", values on the bars). Key: "the number of people who come to a place". The distractors (weather, ticket price, animals) are not on the graph. The test is still 6 items, 7 points. Limitation: a definition-clue ("which is") item is no longer tested; it is practiced in P4 and taught in Learn It. |
| RA-3 | fixed | T-T2.js, 3.T.T.2.d. Teach point 2 now reads "A picture or diagram with a caption can also help explain a fact. Choose one that shows the facts in that part of your writing." New checklist line: "If a picture would help explain a fact, I drew it and labeled it." **New SK-TT2d-P6** (Try, DOK 2): which picture with a caption best helps readers understand sentences 4–5 of the peanut draft. The key is a labeled diagram of the plant above and below ground. The choices are described in words; no figure, so the key is not given away. Practice is 6 (split 3/3 unchanged). |
| RA-4 | fixed (spoken); not fixed: bold in test | T-C.js. The screen point now covers spoken mode: "In a talk or a read-aloud, the speaker's voice does the job of bold print…" (teach stays at 6 points). **SK-TC1b-P3** (text-box purpose) is replaced by **SK-TC1b-P9** (Together, DOK 2): a ranger's talk says "Now, listen closely. This next part is important."; key "to tell listeners that the next fact matters a lot". The text box is still practiced (P6 match row), taught, and tested (T2). Bold is not tested: the test is at its 6-item cap and I left it, as RA-4 allows. |
| RA-5 | fixed | T-C.js, **SK-TC2c-T6** rewritten. The note "We have to leave tonight. Please feed my fish, Goldie, until we get back!" alone could be a trip. The box (a hurricane heading for the Georgia coast, beach families told to leave) gives the real reason. Distractors: fun trip (note-only reading), moving away ("until we get back" rules it out), sick fish. The name changed from Marcus to Imani. Still 1 point, DOK 2. |
| RA-6 | fixed | = RB-1. |
| RA-7 | fixed | L-V12.js, 3.L.V.2.c `write`. Prompt: "Pick one base word (help, care or hope) or one root (port means carry, graph means write). Build at least three new words by adding a prefix, a suffix or another word part…" Checklist: "…from one base word or root." |
| RA-8 | fixed | T-SS.js. **SK-SS1b-T1** (the "belongs in a different paragraph" item, really 3.T.SS.1.d) is removed. It is replaced by **SK-SS1b-T7** (mc, DOK 2): Priya wants a paragraph to help readers choose between the town library and their school library; which plan fits? Key: compare. This tests a non-sequence structure chosen for a job. The test is still 6 items, 7 points. |
| RA-9 | fixed | T-T1.js. `codes: ["3.T.T.1.b", "3.T.SS.1.a"]` is removed, so the lesson now claims only 3.T.T.1.b. No item carried evidence for 3.T.SS.1.a. lessonFor("3.T.SS.1.a") resolves to the T-SS lesson key directly; the catalog is unaffected. |
| RA-10 | fixed | T-TS.js, TS-CC. `codes` is now `["3.T.SS.1.a"]`, and `std` on SK-TSCC-P3, P6, T2 and T5 is now `["3.T.SS.1.a"]`. Consumers checked: `lessonFor("3.T.T.2.c")` returns the T-T2 lesson keyed "3.T.T.2.c" (direct key hit). catalog.js lists "3.T.T.2.c" under Information, which points to that same lesson. guard.py has no TS-CC or 3.T.T.2.c expectation; its line 245 coverage check is still satisfied by the 3.T.T.2.c lesson. No other JS references it. |
| RA-11 | fixed | site.js:82 now uses the exact rubric bullet: "Uses mostly complete sentences and a variety of sentence structures to strengthen clarity and coherence." |
| RA-12 | fixed | Chosen wording (the rubric says "the provided reasons" throughout Trait 2; the Checklist says "provide reasons"). site.js:78: "Gives reasons that support the opinion. The rubric calls them the provided reasons, so the writing task usually gives the reasons; the writer supports each one with information from the sources." T-T34.js:201: "Give reasons. The Milestones rubric calls them the provided reasons, so the writing task usually gives you the reasons. Your job is to explain each one…" The task files already say "provided reasons". js/writing.js:4 is a code comment and was left. |
| RA-13 | not fixed: optional, and the sentence is in parents.js (UX's file) | See Needs JS/UI edit. |
| RA-14 | not fixed: standards.js and the matrix are not my files | The lead or meta agent must check the four GUM R rows against the official K-12 GUM chart, or mark them UNVERIFIED. |
| RA-15 | fixed (verified; no edit needed) | In `ss1a-georgia-river.svg`, the river polyline below Atlanta uses the outline's own west-border vertices, from (60.0,159.3) to the Florida corner (74.9,280.8). The render shows it on the border down to the Florida line. I added a north arrow (RB-18). |
| RA-16 | fixed for SK-TC1b-P5 (now DOK 2, = RC-5); not fixed for SK-TT2d-T6 | T6 is borderline. Reviewer B (RB-24) judged the DOK 3 reasoning sound, so I left it. |
| RA-17 | not fixed: skills.js | See Needs JS/UI edit. |
| RA-18 | fixed | T-RA.js, 3.T.RA.1.c `write`. Added: "Or choose your own topic, find two sources about it with a grown-up, and summarize those." |
| RA-19 | not fixed: a note; no source in hand | Root grade level stays UNVERIFIED. |
| RA-20 | fixed (site.js duplicate); no change needed (rest) | site.js:106: the two near-identical hands-on sentences are now one: "A few hands-on skills (reading aloud, cursive) have Learn It, Watch Me, Practice and a grown-up Check instead of a scored skill check." The SK-TT1b-P7 note is handled by RB-15. The listening question stays UNVERIFIED. |
| RA §4: 3.L.GC.2.c (complex-sentence agreement) | fixed | L-GC2.js. Teach point 5 adds: "A long sentence can have two parts, joined by a word like when or because. Each part has its own subject and verb, and each pair must agree: When the bell rings, the students line up." **New SK-GC2c-P7** (Try, dropdown, 2 points, DOK 2): "When the twins {get} home from school, their dog {runs} to the door." Practice is 7 (Together 4 / Try 3). The test is unchanged (5 items), because a test item would only have repeated the practice. |

## Review B

| ID | Status | Change |
|---|---|---|
| RB-1 | fixed | See MUSTs. |
| RB-2 | fixed | See MUSTs ("wades" removed). |
| RB-3 | fixed | `v3a-tree-ladder.svg`: the "trunk" label and its leader are removed (only "branch" and "roots" remain), and the plain white "apple" circles are removed. "Apple" is gone from the SVG title and the item alt text; the alt now says the ladder rests on the thick wooden part between the roots and the branches. **SK-V3a-P6** new clue: "The sentence alone could fit more than one meaning. Look at the picture. What is the ladder leaning on? Which meaning matches that?" The `why` was updated to match. |
| RB-4 | fixed | 3.L.V.2.a: the example now reads "telephone = tele + phone. Tele means far. Phone comes from phon, which means sound." 3.L.V.2.c point 4: "…tele (far) + phone = telephone, a tool that brings sound from far away." The headphones example is removed. The parent line now says "phonics", not "headphones". |
| RB-5 | fixed | 3.L.V.2.a: the six roots moved out of the paragraph into a list in the example "Roots to know". Each root is on its own line with an example word not used in that lesson's items: portable, autograph, television, phonics, rupture, spectacles. The point now refers to the list. Teach stays at 5 points (the base-word point was merged; see RB-6). |
| RB-6 | fixed | 3.L.V.2.a point 1: "The base word (also called the root word) is a whole English word you know." Point 4: "A common root is an old word part from Latin or Greek with its own meaning, like spect (look). Some roots are also words, like port, but in a long word, use the root's meaning." The `words` glossary entries were rewritten to match. |
| RB-7 | fixed | The 2.a parent line adds: "Not every word with the letters port uses this root: in airport, port means a harbor for planes, not carry. If carry does not fit the meaning, it is a look-alike, just like uncle and ready." The 2.c parent line adds: "If a word only looks like it has port, like airport, talk about why carry does not fit." "Sport" is not used (the lead's instruction). |
| RB-8 | fixed | The autograph Watch Me show and answer now read "a person's own name, written by that person". In the export example, "goods" is now "things out to sell in another country". |
| RB-9 | fixed | L-V3.js Watch Me 2 now targets an unknown word the graph explains: "June had the most precipitation." The SVG title is now "Rain in Our Garden" (it was "Rainfall…"), and the alt was updated. Step 1 is now "Read the title. It tells what the graph measures…". Answer: "Precipitation means rain, or other water like snow, that falls from the sky." |
| RB-10 | fixed | T-C.js Learn It frog caption: "A green frog waits on a lily pad in a Georgia pond at night." The note adds: "The picture shows the frog and the lily pad. The caption adds two things the picture cannot show: where (a Georgia pond) and when (at night)." |
| RB-11 | fixed | `tc1b-monarch-cycle.svg`: the leaf is now asymmetric, with a midrib and a stalk. The egg is a small pale-yellow oval near the leaf edge, not centered, so it no longer reads as an eye. A thin leader line now runs from "1 egg" to the egg. |
| RB-12 | fixed | T-T2.js 3.T.T.2.a. The camel design example moved from Learn It into **Watch Me 2** as a 3-step think-aloud: heading, then caption and labels, then text box. The earthworm "not a key detail" Watch Me became Learn It example 2, so its content is kept. Watch Me stays at 3 examples. |
| RB-13 | fixed | The SK-TT2a-P7 `why` now quotes the labels exactly: "cell with an egg," "honey" and "pollen". `tt2a-honeycomb.svg`: the five white ovals are replaced by one cream rice-shaped egg, tilted, with a thin brown outline, in the labeled cell. The other plain cells are empty. |
| RB-14 | fixed | `tt2a-armadillo.svg`: the snout is now a tapered point reaching x=314, and the "long nose" leader ends on the tip. |
| RB-15 | fixed | SK-TT1b-P7 clue: "Read paragraph 3 again. When do the rabbits come? Then look at the kind of fix Jada makes in paragraph 4. Why would that kind of fix be a good idea at that time?" (Story paragraphs have no headings, so the numbers match the display.) |
| RB-16 | fixed | T-T1.js: "a deadline" is now "not having enough time". I did not use "a time when something is due", because it would echo T2's "due the next day". The Clue-words point and the Somebody-Wanted-But-So-Then point are merged, so teach is 6 points. |
| RB-17 | fixed | T-T34.js 3.T.T.4.b Watch Me 2 has a 4th step: "Some questions name a feeling, and then every choice may rhyme. Listen to the words. If the poet wants a cozy feeling, soft, warm and snug sound cozy, but crash and bang do not." |
| RB-18 | fixed | `ss1a-georgia-river.svg` has a bold "N" with an up-arrow in the top-right corner. The Watch Me 3 alt now mentions the arrow, and step 2 says "The arrow shows that the top of the map is north." The new peanut map also has a north arrow. |
| RB-19 | not fixed: skills.js, index.html, parents.js | See Needs JS/UI edit. |
| RB-20 | partly fixed | F-FH.js parent: "national middle numbers" is now "typical grade 3 scores". The skills.js parts are in Needs JS/UI edit. |
| RB-21 | partly fixed | F-FH.js `how` (item 3): "If the reader fixes a word on their own, tap it a second time: it counts as correct and as a self-correction. When the minute is over, ask, "What was it mostly about?"" This also covers item 1 at the instruction level. The observeForm wording (items 1 and 2) is in Needs JS/UI edit. |
| RB-22 | fixed | F-FH.js check line: "(If there were no mistakes, try a harder passage or a page of a chapter book. If there are still none, check this line.)" |
| RB-23 | fixed | SK-TC1b-P5 is now DOK 2 (= RC-5). |
| RB-24 | not fixed: optional NOTE | SK-TT2d-T6 is left as is. The key is still the single best choice. |
| RB-25 | fixed (PT-1 capitals); rest needs no change | Positive findings. js/data/sets/PT-1.js blurb: "A SHORTENED practice test" is now "A shortened practice test" (the title already said "(shortened)"). The "on their own" wording in parents.js:238 is in Needs JS/UI edit. |

## Review C

| ID | Status | Change |
|---|---|---|
| RC-1 | fixed | SK-TT2a-P6. Key: "It shows the six-sided shape of the wax cells that the workers build." The label sentence is removed from the `why`. Clue: "Read the caption. Then find the paragraph that talks about the same thing." P6 no longer hands over P7's slot answer. |
| RC-2 | fixed | SK-TT2a-P3. Distractor D is now "The queen lays hundreds of eggs in one day." `Why`: "The queen details are not about workers, and thousands of bees is not a job." Five eyes now appears only in P4 and P5. |
| RC-3 | fixed | = RB-1. I used look-alikes that contain "port" instead of RC-3's transform/painter, because "port"-containing distractors force the child to use meaning and not spelling, which is the lead's preferred design. |
| RC-4 | fixed | The trunk label and its leader line are removed (RB-3), so no leader can point at the ladder. |
| RC-5 | fixed | SK-TC1b-P5 and SK-TC1b-T3 are now `dok: 2`. The 3.T.C.1.b test now has no DOK 3 item, which is an honest rating. |
| RC-6 | fixed | SK-TT4a-P2 is now `points: 2` (choose-two hot text). It is practice only, so no test total changed. |
| RC-7 | not fixed: a NOTE for the lead; R-POE-01 was not touched by me | The change of R-POE-01-q8 from 1 to 2 points predates my work and is not logged by its author. |
| RC-8 | partly fixed | SK-TT2a-P1 `why`: "Paragraph 1 says this" is removed. The other four cues are left. The reviewer judged them acceptable, because the facts are plain in the passages and they are practice re-teaching. |
| RC-9 | no change needed | A NOTE. There is no key leak. |
| RC-10 | fixed | SK-TT2a-P5 `why`: "Paragraph 4 does say a honeybee has five eyes, but that one fact is not about gathering food or making honey, so it does not support the main idea." |
| RC-11 | fixed (P4); not applicable (P3) | The SK-TC1b-P4 `why` adds: "Bold does not mark a book title, a new spelling or a loud voice." SK-TC1b-P3 was replaced by P9 (RA-4). |
| RC-12 | fixed | SK-TC2c-P6. Distractor B is now "She was writing to a friend, so she kept her note short and fun." The `why` was updated: "The notes are not written to a friend…". |

---

## Needs JS/UI edit (for the lead, after the UX agent is done)

I verified each "old" string against the worktree file at the time of writing. The UX agent may have changed some of them since then.

1. **RB-19: fail message.** js/skills.js:1056, in `afterTest`.
   - Old: `"To pass the skill check, score " + passMark(max) + " or more. Go back to Watch Me or Practice Together, then try the check again another day."`
   - New: `"Not yet, and that's OK. Learning takes a few tries. Go back to Watch Me or Practice Together, then try the skill check again on another day. (You need " + passMark(max) + " or more points to pass.)"`
2. **RB-19: grown-up note label.** js/skills.js:710.
   - Old: `"Passed on try " + r.passTry + "."`
   - New: `"For grown-ups: passed on try " + r.passTry + "."`
   - Also js/skills.js:711. Old: `"Passed after seeing the answers on an earlier try."` New: `"For grown-ups: passed after seeing the answers on an earlier try."`
3. **RB-19: one child-facing name.** js/skills.js:699.
   - Old: `set ? "Test Your Knowledge" : "Check: show a grown-up"`
   - New: `set ? "Test Your Knowledge (the skill check)" : "Check: show a grown-up"`
   - index.html:191. Old: `Take the test again` New: `Take the skill check again`. Only if this button is used solely for skill checks; it is also used for sets and practice tests, so the lead should decide.
4. **RB-19: parent guide.** js/parents.js:235.
   - Old: `"Test: no hints. Results are in points, by skill, and each missed question has Show me how."`
   - New: `"Test (the skill check at the end of each skill, and the practice tests): no hints. Results are in points, by skill, and each missed question has Show me how."`
5. **RB-25: parent guide.** js/parents.js:238.
   - Old: `scored at least 80% of the points on their own, one time`
   - New: `scored at least 80% of the points with no hints, one time`
6. **RB-20: fluency jargon.** js/skills.js:781.
   - Old: `"A home practice tool, not a formal test or screener. Teachers use calibrated passages and more than one reading for that, so treat these numbers as a rough guide."`
   - New: `"A home practice tool, not a school reading test. Schools use passages that are checked for difficulty and more than one reading, so treat this number as a rough guide."`
7. **RB-20: fluency jargon.** js/skills.js:879.
   - Old: `"For this one reading, that is at or above the grade 3 middle."` New: `"For this one reading, that is at or above the typical grade 3 score."`
   - Old: `"For this one reading, that is close to the grade 3 middle. Keep practicing."` New: `"For this one reading, that is close to the typical grade 3 score. Keep practicing."`
   - Old: `"For this one reading, that is below the grade 3 middle. Rereading…"` New: `"For this one reading, that is below the typical grade 3 score. Rereading…"`
   - Optional: move `A.goalSource` ("the 50th percentile, or median, of national grade 3 norms … Hasbrouck and Tindal, 2017") from the sentence at skills.js:877–878 into a separate small `note` paragraph.
8. **RB-21 (1): retell prompt.** js/skills.js:946.
   - Old: `"Could your child tell what it was mostly about?"`
   - New: `"Ask: \"What was it mostly about?\" Could your child tell you?"`
9. **RB-21 (2): self-correction count.** js/skills.js:944.
   - Old: `"counted from your second taps; change it if needed"`
   - New: `"We counted the words you tapped twice. Change the number if needed."`
10. **RB-21 (3): pre-reading instruction.** Done in F-FH.js `how` (my file). The during-reading line at skills.js:836 already says "tap it again: it counts as correct and as a self-correction", so the two now agree. No JS edit is needed.
11. **RA-17 (optional): skill page.** js/skills.js, near :438, where the ALD block is labelled.
    - For codes whose expectation appears only in the Distinguished column (for example 3.T.C.2.c "context"), add the line: `"This skill appears only in the Distinguished column of the DRAFT ALDs."`
    - This needs a per-code flag. I did not determine the full list of such codes.
12. **RA-13 (optional): spelling claim.** js/parents.js:61.
    - Old: `"Spelling still counts in the essay's Language Usage and Conventions trait."`
    - New: `"The essay's conventions trait points to the Foundations standards for spelling, and the Writer's Checklist asks students to fix spelling."`
    - catalog.js:9 has the same idea. I left it, because the lead said to edit catalog.js only if needed, and the wording there is defensible (RA-13 "acceptable").

13. **RB-25: shouty capitals on the results note.** js/engine/player.js:414.
    - Old: `"This was a SHORTENED practice test: "`
    - New: `"This was a shortened practice test: "`

## Other notes for the lead

- New figure files:
  - `assets/figures/ss1a-peanut-map.svg`
  - `assets/figures/ss1a-tortoise-burrow.svg`
  - `assets/figures/v3a-visitors-graph.svg`
- Edited figure files: `tc1b-monarch-cycle.svg`, `tt2a-armadillo.svg`, `tt2a-honeycomb.svg`, `ss1a-georgia-river.svg`, `v3a-tree-ladder.svg`, `v3a-rainfall-graph.svg`. All are original line art. Text is 21–22 units in a 300–320 viewBox; the checker has no new size warnings.
- Removed item IDs: SK-V3a-T1, SK-TC1b-P3, SK-SS1b-T1.
- New item IDs: SK-V3a-T8, SK-TC1b-P9, SK-SS1a-P7, SK-SS1b-T7, SK-TT2d-P6, SK-GC2c-P7.
- guard.py and the other JS do not reference any of the removed IDs (grep).
- The matrix rows for 3.T.T.2.c (TS-CC), 3.T.T.1.b (codes), 3.L.V.3.a (graphs now practiced and tested), 3.T.SS.1.a (map, caption, chapters), 3.T.C.1.b (spoken mode) and 3.T.T.2.d (illustrations) should be updated by whoever owns the matrix.
- I did not run guard.py (about 20 minutes, and it was not requested).
