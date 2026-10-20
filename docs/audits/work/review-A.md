# PP-003 Phase F review A: standards specialist

Reviewer: A (standards). Date: 2026-10-20. Worktree: /home/claude/pp-fix (diff against main 66e536b). I edited no repo file except this one. I started no server and ran no git command except reading the diff.

## Sources and method

- GaDOE sources (owner uploads, `scratchpad/gadoe/`): Blueprint (Aug 2025), the DRAFT ALDs (Oct 2025), the Writer's Checklist (2026) and the 8-point rubric (Aug 2026). I also viewed blueprint page 1 as an image (`gadoe/img/bp-1.png`) and rendered DRAFT ALD pages 9-10 from the PDF to confirm the column for the 3.L.V.3 bullets on page 10. They are in the third column, which is Proficient.
- Standard wording: `js/data/standards.js`, dumped in Node.
- Every changed lesson: I dumped the full teach, learn, passages, practice and test data in Node (scripts in `scratchpad/revA/`). I read every item and solved every new or changed item myself. I rendered all 13 new SVGs in Chromium to check the keys that depend on a figure (`scratchpad/revA/figs.png`).
- Metadata: `js/data/site.js`, `js/parents.js`, `js/skills.js`, `js/data/sets/PT-1.js`, `js/data/catalog.js` and `index.html`. I also computed the tested-flag tallies, the test-item counts per lesson, and whether every on-test standard has a lesson with test items.
- `node verification/check-content.js --all`: PASS, 0 failures, 8 warnings (clue-overlap only).

What I did not check:
- I rendered no page in the site's player. Only the SVG files were rendered.
- I did not run guard.py.
- I did not open the GaDOE URLs or the K-12 GUM chart, which is not among the uploaded sources.
- I did not re-solve the unchanged items of unchanged lessons, except the 13 lessons I spot-checked in §4.
- I did not check the L-VOC-02/03 items beyond the point change.

---

## 1. Findings

No MUST findings. I found nothing wrong against the GaDOE sources in the changed content: no wrong key, no content beyond grade 3 that conflicts with the standard, and no false test claim.

### RA-1 · SHOULD · 3.T.SS.1.a: the map and caption are still words-only in practice and test; chapters are still missing
- **Where:** SK-SS1a-P6 (`js/data/lessons/T-SS.js:165`) and SK-SS1a-T4 (`T-SS.js:211`).
- **Evidence:**
  - The only real map is the Watch Me example (`T-SS.js:84`).
  - P6 still asks about a map that is only described in words ("The author wants to add a map of Georgia ..."). T4 still asks for a caption for an imagined photo ("add a photo of a gopher tortoise sitting at the opening of its tunnel").
  - No item refers to a chapter.
  - The standard says "text features (e.g., maps, captions) ... referring to chapters or sections".
  - The engine now supports `item.figure` (fix-visuals V-1), so the "no images" limitation no longer applies.
- **Fix:**
  - Give P6 an original map figure (for example, south Georgia with shaded peanut-farm counties) and ask what the map shows that the words do not.
  - Give T4 an `item.figure` (a tortoise at its burrow).
  - Add one table-of-contents item ("In which chapter would you look to find ...?").

### RA-2 · SHOULD · 3.L.V.3.a: graphs are modeled but never practiced or tested
- **Where:** Watch Me 2 (`js/data/lessons/L-V3.js:49`). All practice and test items: P1-P7, T1, T2, T4-T7.
- **Evidence:**
  - The standard says "including images and graphs". Images are now taught, practiced (SK-V3a-P6, `L-V3.js:148`) and tested (SK-V3a-T7, `L-V3.js:200`).
  - The graph appears only in Watch Me 2 and in teach point 6 (`L-V3.js:13`).
  - fix-visuals V-3 states this limitation itself.
- **Fix:** Practice is at the 7-item cap and the test at the 6-item cap. Replace SK-V3a-T1 (wetland, DOK 1, a plain "which is" definition clue that P4 already practices) with a graph item, for example a bar graph titled "Visitors to the Swamp Each Season" where the axis words define an unknown word in the paragraph. Optionally swap a practice item for a graph item too.

### RA-3 · SHOULD · 3.T.T.2.d: illustrations are still taught in one sentence only, and the fix log's reason is now stale
- **Where:** `js/data/lessons/T-T2.js:687` ("A picture or diagram can also help explain a fact."). Also `docs/audits/work/fix-texts.md` §6.
- **Evidence:**
  - The standard says "develop it with facts, definitions, details, or illustrations".
  - No practice or test item asks which illustration or diagram develops a fact.
  - fix-texts §6 says this is "because the site has no image support". That stopped being true once V-1 added figures. The audit's recommended fix (a picture-with-caption choice) was not made; a DOK 3 definition item (SK-TT2d-T6) was added instead.
- **Fix:** Add one item: "Which picture with a caption would best help readers understand sentences 10-12?" Use two or three small `item.figure` choices, or describe the choices and show one figure. Add a write-checklist line: "Draw and label a picture if it helps explain a fact."

### RA-4 · SHOULD · 3.T.C.1.b: the spoken mode is absent, digital and auditory are simulated in words, and bold is not tested
- **Where:** teach point 6 (`js/data/lessons/T-C.js:209`), SK-TC1b-P7 (`T-C.js:364`), SK-TC1b-T4 and SK-TC1b-P4.
- **Evidence:**
  - The standard names "print, digital, auditory, spoken, and visual modes".
  - Nothing in the lesson addresses spoken-text features (a speaker's emphasis, pauses or voice in a talk or read-aloud).
  - The speaker button and link are described in stems. That is acceptable for a selected-response test, but it is still words-only.
  - The bold word is now real and practiced (P4) but not tested.
- **Fix:** Add a teach point and one practice item on a spoken feature. Example: a transcript of a ranger's talk where the ranger says "Listen closely. This part is important." Ask what that spoken signal does for listeners. Bolding in the test can wait.

### RA-5 · SHOULD · 3.T.C.2.c: the new situation item can be answered without the context box
- **Where:** SK-TC2c-T6 (`js/data/lessons/T-C.js:1027`).
- **Evidence:**
  - The note itself says "I will miss our class reading corner. Please ask everyone to write to me at my new house!" That alone shows Marcus is leaving.
  - The box ("moved from Georgia to Ohio. The moving truck had just left.") adds almost nothing the note does not already say. The item therefore checks little about using context.
  - The "individual" component is practiced (SK-TC2c-P6, `T-C.js:956`) but not tested. "Situation" is tested but not practiced.
- **Fix:** Rewrite the note so its meaning depends on the box. For example, a note that says "We have to leave tonight. Please take care of Goldie until we get back!" with a box that says it was written during a hurricane evacuation. Ask why the writer leaves so suddenly.

### RA-6 · SHOULD · 3.L.V.2.c: the new test item can be solved by spotting the letters "port"
- **Where:** SK-V2c-T8 (`js/data/lessons/L-V12.js:937`).
- **Evidence:** The prompt says "building words on the root port". Exactly two of the six choices contain the string "port" (transport, porter), and those are the keys. A child can get 2 points without knowing that port means carry.
- **Fix:** Add look-alike distractors that contain "port" or "por" but not *portare*, such as **portion** (Latin *portio*, "share") or **porcupine** (Latin *porcus*). Then ask "Which TWO words have to do with carrying?" The child must use the meaning, not the spelling.

### RA-7 · SHOULD · 3.L.V.2.c: the write activity does not include the new root component
- **Where:** `js/data/lessons/L-V12.js:846` ("Pick one base word: help, care or hope.").
- **Evidence:** The standard says "Build words using common roots, root words, and affixes", and this is the Constructing Texts expectation. The production activity still builds only from base words.
- **Fix:** Use a prompt like "Pick one base word (help, care or hope) or one root (port = carry, graph = write)."

### RA-8 · SHOULD · 3.T.SS.1.b: a test item is mis-coded (pre-existing, not changed in this phase)
- **Where:** SK-SS1b-T1 (`js/data/lessons/T-SS.js:370`).
- **Evidence:** "Select the sentence that belongs in a different paragraph" tests 3.T.SS.1.d ("Craft related sentences into clear, cohesive paragraphs"), but it has no `std` field, so it defaults to 3.T.SS.1.b. The matrix noted this too.
- **Fix:** Set `std: ["3.T.SS.1.d"]` and add a 3.T.SS.1.b item. Or rewrite T1 as a structure choice for a non-sequence job (compare or cause/effect), which the audit also asked for.

### RA-9 · SHOULD · 3.T.T.1.b: the lesson's `codes` claim 3.T.SS.1.a with no tagged item (pre-existing)
- **Where:** `js/data/lessons/T-T1.js:208` (`codes: ["3.T.T.1.b", "3.T.SS.1.a"]`).
- **Evidence:** No practice or test item in the lesson carries `std` 3.T.SS.1.a, so the claimed coverage has no evidence. It was noted in notes-texts1 and left unchanged in this phase.
- **Fix:** Tag SK-TT1b-P6 (the clue word *Then*) with `std: ["3.T.T.1.b", "3.T.SS.1.a"]`, or drop the code.

### RA-10 · SHOULD · TS-CC still claims 3.T.T.2.c
- **Where:** `js/data/lessons/T-TS.js:617`.
- **Evidence:** The matrix (3.T.T.2.c row) found that TS-CC compares two animals inside one passage, which is not "information from two texts". It recommended removing 3.T.T.2.c from `codes`. That was not done.
- **Fix:** Change it to `codes: ["3.T.SS.1.a"]`.

### RA-11 · SHOULD · site.js rubric paraphrase understates Trait 3
- **Where:** `js/data/site.js:82`.
- **Site:** "Uses mostly complete sentences with some variety."
- **Rubric (Trait 3, 2 points):** "Uses mostly complete sentences and a variety of sentence structures to strengthen clarity and coherence". "Some ... limited variety" is the 1-point wording.
- **Fix:** "Uses mostly complete sentences and a variety of sentence structures, so the writing is clear."

### RA-12 · NOTE · "provided reasons": the lesson and the parent guide say it differently
- **Where:**
  - `js/data/lessons/T-T34.js:201`: "On the Milestones writing task, you are given the reasons."
  - `js/data/site.js:78`: "The prompt may give the reasons; either way, the writer supports each reason with information from the sources."
- **Sources:**
  - The rubric's Trait 2 score descriptions say "elaborating on the provided reasons" (3 points) and "the provided reason(s)" (2 and 1 points), and the bullets say "Supports the provided reasons" and "Elaborates ... on provided reasons".
  - But the first bullet is "Provides reasons that effectively support the stated opinion", and the Checklist says "provide reasons that support my opinion."
- Neither site sentence is false. The rubric mostly supports the lesson's version.
- **Fix:** Use one wording site-wide, for example "The prompt usually gives the reasons (the rubric says 'provided reasons'). Your job is to explain each one ..."

### RA-13 · NOTE · The spelling claim is an inference; acceptable
- **Where:** `js/parents.js:61` ("Spelling still counts in the essay's Language Usage and Conventions trait.") and `js/data/catalog.js:9`.
- **Sources:**
  - The rubric's Trait 3 footnote: "Note: Spelling expectations are outlined in the K–5 Foundations Domain as part of the Phonics Big Idea."
  - The Checklist: "correct any errors in spelling, capitalization, punctuation, usage, or grammar."
- The rubric never says in so many words that spelling is scored, but the footnote only makes sense if conventions include spelling. The reading is defensible.
- **Optional fix:** "The essay's conventions trait points to the Foundations standards for spelling, and the Writer's Checklist asks students to fix spelling."

### RA-14 · SHOULD · Four GUM "R" rows are flagged as on the test, but no source in hand supports that
- **Where:** `js/data/standards.js`, rows `3.L.GC.1:R:use-nouns-and-verbs-to-form-complete-thoughts-in`, `...form-and-use-singular-and-plural-nouns-in-speech`, `...use-interrogatives-to-ask-questions-in-speech` and `...capitalize-the-first-word-of-a-sentence-and-the-`. Each is `tested: "writing"`.
- **Evidence:**
  - The DRAFT ALD 3.L.GC.1 table lists 3 Beginning, 11 Developing and 8 Proficient bullets.
  - The 8 Proficient bullets match the site's 8 M rows exactly. The 14 Beginning and Developing bullets match 14 of the site's 18 R rows.
  - These four rows appear in no ALD column. The matrix itself writes "Not listed in any column of the DRAFT ALD".
  - Their R level comes from the K-12 GUM chart, which is not among the uploaded sources. fix-meta M1 also lists "the 4 extra R rows" as unverified.
  - The GUM-to-writing retag is correct per the blueprint ("3.L.GC.1* GUM" appears only in the Constructing Texts column; footnote: "skills that are assessed will come from the Master and Reinforce levels in the GUM chart"). But "on the test" for these four rows depends on the GUM chart level, which no one has verified.
- **Fix:** Verify the four rows against the official K-12 GUM chart (grade 3 column), and record the URL and the date checked. Until then, mark the matrix assessment_status for these rows UNVERIFIED.

### RA-15 · NOTE · The schematic Georgia map does not quite match its own text
- **Where:** `assets/figures/ss1a-georgia-river.svg` (rendered).
- **Evidence:**
  - The Watch Me text and alt say the river "runs south along the border between Georgia and Alabama".
  - In the drawing, the striped river runs a few pixels inside the west border and stops short of the Florida line. In reality the lower Chattahoochee is the GA-AL border down to Florida.
  - fix-visuals V-5 says the map is approximate.
- **Fix:** Run the lower river segment on the border line itself down to the Florida corner.

### RA-16 · NOTE · Two DOK ratings are generous
- SK-TC1b-P5 (`T-C.js:347`) is rated DOK 3, but matching a diagram's two labels to two sentences is DOK 2.
- SK-TT2d-T6 (`T-T2.js:875`) is rated DOK 3. It is borderline, because three of the four "reasons" are plainly bad ("any new fact makes a draft better"; an opinion; an owl sentence).
- These labels feed the site's DOK claims, not scoring.

### RA-17 · NOTE · The skill page shows no ALD text about context for 3.T.C.2.c
- **Where:** `js/skills.js:438`.
- **Evidence:** The skill page shows the 3.T.C.2 Proficient bullets ("Describe different perspectives of the narrator or speakers."), labelled "for all of 3.T.C.2". The only ALD text about context is at Distinguished ("Identify the context in which a text is written ."). A parent on the 3.T.C.2.c page sees no level description of context. The labelling is honest, so this is not wrong.
- **Fix (optional):** For codes whose expectation appears only at Distinguished, add "This skill appears only in the Distinguished column of the DRAFT ALDs."

### RA-18 · NOTE · The matrix missed "self-selected topic" for 3.T.RA.1.c
- **Where:** `js/data/lessons/T-RA.js:458` (the write prompt fixes the topic to the monarch sources).
- **Evidence:** standards.js: "Summarize ... from at least two credible sources about a self-selected topic." The ALD says only "about a topic", and Milestones cannot test self-selection, so this does not change the status.
- **Fix:** Add to the write prompt: "Or choose your own topic and two sources with a grown-up."

### RA-19 · NOTE · Root grade-level is unverified
- The DRAFT ALD (Proficient) says "Deconstruct word(s) ... when the tested common root, root word, or affix is on grade-level".
- No uploaded source lists which roots count as grade 3. port, graph, tele, phon, rupt, spect, scope, micro-, auto-, trans- and e-/ex- are common grade 3-4 roots, but that is my judgement. Treat their grade level as UNVERIFIED.
- The meanings are correct: port = carry (*portare*), graph = write, tele = far, phon = sound, rupt = break, spect = look. The fixer rightly left out airport and passport (*portus*, *porta*).

### RA-20 · NOTE · Minor content notes (no change required)
- **SK-TT1b-P7** (`T-T1.js:338`): the key ("No one is awake to chase the rabbits") rests on an unstated but reasonable inference. The test item SK-TT1b-T2 (`T-T1.js:381`) is the stronger setting-function evidence.
- **Blueprint column headers:** they read "Reading/Listening/Viewing" and "Writing/Speaking/Creating", while `parents.js:41` says "Interpreting Texts (reading, 34 points)". That is a fair simplification. Whether grade 3 Milestones has listening items is UNVERIFIED from the sources in hand (no other source mentions listening).
- **Duplicate sentence:** `site.js:106` (plan step 2) contains two near-identical sentences about hands-on skills. This is outside my lane; it is the UX agent's file.

---

## 2. Changed lessons against the standards (task 1) and recommended matrix status (task 2)

"Covered" here means taught, plus at least one practiced or tested item, the bar the domain auditors used for VERIFIED COMPLETE (for example 3.T.T.1.c "thoughts", which is practiced but not tested).

| Code | Audit gap | Now (evidence) | Conflict, scope or coding problems | Recommended status | Still open |
|---|---|---|---|---|---|
| 3.T.C.1.b | Diagrams imagined; captions never practiced or tested; bold not rendered | Real diagram (P5, T3 use Figure 1; keys match the lodge labels "dry room" / "door under water" and the 1-4 cycle). Caption practiced (P8) and tested (T6; I solved it against the figure: the wings and flower are visible, place and trip are caption-only). Bold is real (P4). | None. P5 is rated DOK 3 (RA-16). | **PARTIAL** (severity down from High to Low) | Spoken mode; digital and auditory only described; bold not tested (RA-4) |
| 3.T.C.2.c | Individual and situation never checked | Individual practiced (P6); situation tested (T6) | T6 hardly needs the box (RA-5). The ALD has this only at Distinguished; the standard says "with adult support" (no conflict). | **VERIFIED COMPLETE**, Low | Individual not tested; situation not practiced; T6 weak |
| 3.T.SS.1.a | Map and caption words-only; chapters missing | A real map in Watch Me 3 only | Map schematic (RA-15) | **PARTIAL**, Medium | Map and caption in P6 and T4 still words-only; chapters (RA-1). The TS-CC and T.1.b code issues (RA-9, RA-10) |
| 3.T.SS.1.b | No test item turned on audience | SK-SS1b-T6: audience (kindergartners) decides the feature; key unique | T1 is mis-coded as SS.1.b (RA-8) | **VERIFIED COMPLETE**, Low | A non-sequence structure is only practiced (P5 match), not tested |
| 3.T.T.1.b | Test mostly identification; setting function never taught | New teach point and Watch Me 3; P7 (setting); T2 (time drives plot); T4 (event drives ending). The test now has 3 function items out of 5. | None in the lesson. Codes claim SS.1.a with no item (RA-9). | **VERIFIED COMPLETE**, Low | TS-PS is still identification-heavy (not in scope) |
| 3.T.T.2.a | The "design" half was absent | Teach point and camel diagram example; P6, P7 (caption vs labels), T6 (fact only in the diagram label; distractors all in paragraphs 2-3, checked) | None | **VERIFIED COMPLETE**, Low | Headings and text boxes are taught in the example only; design items are diagram-only. Lesson title still says only "Main idea" |
| 3.T.T.2.d | Illustrations; definitions not tested; no DOK 3 | Definitions now tested (T6). DOK 3 claimed (generous, RA-16). | None | **PARTIAL**, Low | Illustrations (RA-3) |
| 3.T.T.4.b | "Intended effect" never checked | P6 (calm) and T6 (excitement): every choice rhymes, so only effect decides. Keys solved. | None | **VERIFIED COMPLETE**, Low | None material |
| 3.T.RA.1.c | T3 keyed copied sentences and a tiny detail | T3 keys are paraphrased big ideas, and the copied tiny detail ("Many weigh less than a nickel.") is now a distractor. The source titles are no longer shared with T-T2. | Mild: T3's distractor "stay in Georgia all year long" restates the opposite of T1's key. It comes after T1, so it gives nothing away in order. | **VERIFIED COMPLETE**, Low (was Medium) | Self-selected topic (RA-18) |
| 3.L.V.2.a | Common roots never taught; mis- untaught | Roots teach point and word entry; telephone and telescope examples; P6 (spectator), P7 (transport); T6 (inspect); mis- in P5 and T4. Meanings correct (RA-19). | None. Base word "(also called a root word)" matches the standard's "root words" vs "common roots". | **VERIFIED COMPLETE**, Low | No root word inside a passage; root grade level unverified |
| 3.L.V.2.c | Building from roots never taught or tested | Teach point and port examples; Watch Me autograph; P6 (erupt), P7 (portable, interrupted); T7 (microphone); T8 (port) | T8 is solvable by spelling (RA-6) | **VERIFIED COMPLETE**, Low | Write box has no root (RA-7); T8 weak |
| 3.L.V.3.a | Images and graphs never taught or tested | Teach point; Watch Me graph; P6 (trunk needs the picture); T7 (heron from the figure) | None | **PARTIAL**, Medium (was High) | Graphs: not practiced or tested (RA-2) |
| 3.L.V.3.b | P6 was a choose-two worth 1 point | Now 2 points, consistent with SPEC §5 and the other 88 choose-two items. Practice only, so no mastery effect. | None | **VERIFIED COMPLETE**, None | None |
| 3.L.V.3.c | P5 was a choose-two worth 1 point | Same as 3.L.V.3.b | None | **VERIFIED COMPLETE**, None | None |

I found no grade-4+ scope that conflicts with a grade 3 standard. The roots are named in Georgia's grade 3 standard ("common roots"). No changed lesson teaches anything that contradicts its standard text in standards.js or the DRAFT ALD.

---

## 3. Metadata checks (task 3)

| Claim | Site text | Source text | Verdict |
|---|---|---|---|
| GUM M/R = writing | standards.js: 8 M and 18 R rows `tested:"writing"`; 15 I/C rows `"no"`; GC.2.a reading; GC.2.b-d writing | Blueprint p.1: Constructing column "3.L.GC.1* GUM / 3.L.GC.2 (b, c, d)"; Interpreting column "3.L.GC.2 (a)"; footnote "*3.L.GC.1 skills that are assessed will come from the Master and Reinforce levels in the GUM chart." | **Matches.** The four extra R rows are unverified (RA-14). |
| All other tested flags | 3.T reading 19 / writing 10; 3.L.V matches the blueprint letter by letter, with 3.L.V.3.e as writing | Blueprint p.1, including the typo "5.L.V.3 (e)" | **Matches.** The typo note in site.js claims is correct. |
| DRAFT ALD label | skills.js:438 "GaDOE's DRAFT Achievement Level Descriptors, October 2025 ... may revise them after standard setting in late fall 2026"; parents.js:68, :154, :158 ("same draft"); site.js `sources.alds` "DRAFT ..." | ALD title page "DRAFT Achievement Level Descriptors", "EFFECTIVE 2025-2026 SCHOOL YEAR", p.2: "subject to revisions during the standard setting process" | **Matches.** grep finds no ALD display without "DRAFT". "Late fall 2026" comes from GaDOE Insights per fix-meta; I did not re-fetch it (UNVERIFIED by me). |
| Points and items | 60 / 49 / 41 / 8 field test; rows 28/28, 12/24, 1/8, 8/0; IT 33/34, CT 16/26 | Blueprint p.2 table, same numbers | **Matches.** |
| Claim cells | "about 6 for Context with Structure & Style, 16 ..., 6 ..., 6 for Language"; CT "6 ..., 8 for Techniques and Research & Analysis together ..., 12 for Language" | Blueprint p.1 image: merged cells IT 6 / 16 / 6 / 6 (total 34); CT 6 / 8 (Techniques and R&A merged) / 12 (total 26) | **Matches.** The "(inside the writing task)" over-reach is gone. |
| Item types | parents.js:46 "Technology-enhanced questions (1- and 2-point) include: drag-and-drop, drop-down, evidence-based ..., match, reorder, hot text highlight, multiple-part, multiple-select"; :48 says Peach Prep lacks drag-and-drop and other multiple-part | Blueprint footnote 1, attached to both the 1-point SR/TE and the 2-point TE rows, same 8 variants | **Matches.** |
| Rubric traits | Trait maxima 3/3/2; the Trait 1 and Trait 2 bullets | Rubric pp.1-3 | **Matches**, except that Trait 3 "some variety" understates "a variety of sentence structures" (RA-11) |
| Provided reasons | site.js:78 "The prompt may give the reasons" | Rubric "elaborating on the provided reasons"; bullet "Provides reasons"; Checklist "provide reasons" | **Defensible.** Inconsistent with T-T34.js:201 (RA-12). |
| Condition codes | site.js rubricNote lists the 7 codes and "sits in the rubric's 0 column" | Rubric footnotes: "Blank, Copied, Too Limited to Score, Non-English/Foreign Language, Off Topic, Offensive, and Illegible/Incomprehensible"; "0*" column | **Matches.** |
| Spelling | parents.js:61, catalog.js:9 | Rubric Trait 3 footnote; Checklist item 11 | **Defensible inference** (RA-13) |
| DOK | levels 3-6 / 24-36 / 12-21 / 8 points; "(likely the writing task)" | Blueprint p.2 | **Matches**; the hedge is labelled. |
| Skill check size | parents.js:238 "4 to 6 questions" | Node count of live lessons: test lengths are 4 (×2), 5 (×82), 6 (×11), and 0 (×4 hands-on) | **True.** |
| Meta description | "a lesson with practice and a skill check for every tested standard" | Node check: 69 of 69 on-test codes have a lesson with practice and test items | **True.** |
| PT-1 "shortened" | Title "Practice Test 1 (shortened)"; blurb "24 ... questions worth 31 points, with no essay. The real Grade 3 test has 60 points, including an 8-point essay." player.js:402 computes n and max from the set | Node: 24 items, 31 points. Blueprint p.2: 60 points; "8-point Extended Writing Task" | **Matches.** "Essay" for the extended writing task is supported by the opinion Checklist and rubric. |

---

## 4. Whole-matrix rescan (task 4)

### Spot-checks of VERIFIED COMPLETE rows (13 rows, every item read and keys solved)

| Row | Agree? | Notes |
|---|---|---|
| 3.T.C.1.a | Yes | Keys correct (T1 inform; T5 persuade + students). |
| 3.T.C.2.a | Yes | "Distinguish from one's own" is a "reader might see it differently" proxy (T3, T5); fair for selected response. |
| 3.T.SS.1.c | Yes | P6 (because/since), T4 and T5 keys correct. |
| 3.T.SS.2.a | Yes | Simile, metaphor and idiom each tested; keys correct. |
| 3.T.T.1.c | Yes | Traits, motive, feelings and message all tested. |
| 3.T.T.2.b | Yes | Historical-events component only in R-INF-02, as the auditor said. |
| 3.T.T.2.c | Yes (for the lesson) | TS-CC tag still wrong (RA-10). |
| 3.T.T.3.c | Yes, Low | See RA-12. The write prompt "Start with your opinion" matches the Checklist ("introduce my opinion on a topic"). |
| 3.T.RA.2.b | Yes | Credible and relevant both tested; T3 three-way match correct. |
| 3.L.V.3.d | Yes, Low | "Check spelling" is weak (P5 and T5 need no lookup), as the auditor said. |
| 3.L.GC.2.c | Yes, Low | Agreement in a complex sentence (ALD Developing, which the ALD intro says Proficient includes) is not in the lesson. It appears once, in L-GRM-03-7 ("The puppies in the pet store window {bark} at everyone who walks by."). Add one lesson item. |
| 3.L.GC.1:M:use-hyphens-to-divide-words-at-line-breaks | Yes | All splits checked (pic-nic; la-dder, silv-er and napk-in wrong; mon-key, so monk-ey is wrong). |
| 3.L.GC.1:M:use-collective-and-abstract-nouns | Yes | swarm/family, audience/crew and band keys correct. |

### Components or ratings the domain auditors missed or under-weighted
1. **3.T.RA.1.c: "self-selected topic".** Not in the components column (RA-18). Status unchanged.
2. **Four GUM R rows.** Assessment status should be UNVERIFIED until the GUM chart is checked (RA-14). The matrix records "Not listed in any column of the DRAFT ALD" but still labels them "GUM Master/Reinforce – assessed".
3. **3.L.GC.2.c: complex-sentence agreement.** Marked "not specifically tested". It is tested once, in L-GRM-03-7, so the rating stands. It is still a lesson gap.
4. **3.T.C.1.b: "spoken" mode.** The auditor did list it as not addressed. This phase left it open (RA-4).
5. **Blueprint "Listening/Viewing" headers.** No row considers listening. UNVERIFIED whether grade 3 has listening items (RA-20).

I found no VERIFIED COMPLETE row in my sample that should drop to PARTIAL.

---

## 5. Verdicts per changed lesson

| Lesson | Verdict |
|---|---|
| 3.T.C.1.b | PASS WITH SHOULDS (RA-4) |
| 3.T.C.2.c | PASS WITH SHOULDS (RA-5) |
| 3.T.SS.1.a | PASS WITH SHOULDS (RA-1, RA-15) |
| 3.T.SS.1.b | PASS WITH SHOULDS (RA-8) |
| 3.T.T.1.b | PASS WITH SHOULDS (RA-9) |
| 3.T.T.2.a | PASS |
| 3.T.T.2.d | PASS WITH SHOULDS (RA-3) |
| 3.T.T.4.b | PASS |
| 3.T.RA.1.c | PASS |
| 3.L.V.2.a | PASS |
| 3.L.V.2.c | PASS WITH SHOULDS (RA-6, RA-7) |
| 3.L.V.3.a | PASS WITH SHOULDS (RA-2) |
| 3.L.V.3.b (points change) | PASS |
| 3.L.V.3.c (points change) | PASS |
| Metadata (standards.js GUM, DRAFT labels, site.js and parents.js claims, PT-1 label) | PASS WITH SHOULDS (RA-11, RA-14) |
