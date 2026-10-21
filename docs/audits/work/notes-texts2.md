# PP-003 notes: slice "texts2" (3.T.T.2, 3.T.T.3, 3.T.T.4, 3.T.RA)

Checked 2026-10-20 against the live build (manifest "Peach Prep 2.1.0"; lessons T-T2, T-T34, T-RA, T-TS; sets R-INF-01/02, R-OPN-01, R-POE-01, R-LIT-01/02, W-REV-01, PT-1; tasks W-TASK-01/02). The counts come from loading the manifest's files in Node (vm sandbox with stub `PP.addLesson/addSet/addTask`), not from guessing. I solved every practice and test item in the four slice lessons and in the five TS lessons that carry slice codes. I also read the slice items in the mixed sets and PT-1.

## Rows and totals
- There are 13 rows. Grade 3 has no 3.T.T.3.b (standards.js and the blueprint both list only 3.T.T.3 (a) and (c)).
- VERIFIED COMPLETE: 9. PARTIAL: 4 (3.T.T.2.a, 3.T.T.2.d, 3.T.T.4.b, 3.T.RA.1.b). MISSING / INCORRECT / UNVERIFIED: 0.
- Severity: Critical 0, High 0, Medium 3 (2.a, 4.b, RA.1.c), Low 7, None 3.
- assessment_status comes from the blueprint (Aug 2025). Interpreting: 3.T.T.2 (a, b, c), 3.T.T.3 (a), 3.T.T.4 (a), 3.T.RA.1 (a, b), 3.T.RA.2 (a, b). Constructing: 3.T.T.2 (d), 3.T.T.3 (c), 3.T.T.4 (b), 3.T.RA.1 (c). The site's `tested` flag agrees on all 13 rows.
- The ALD text is the third (Proficient) column of the DRAFT Oct 2025 ALDs. Note that the ALDs say "a topic" or "a provided topic" where the standard says "self-selected topic". So the site's use of provided passages for RA.1 fits the test.

## Do the writing expectations make the child actually write?
Yes, all four do.
- **3.T.T.2.d:** a free-text informational paragraph box (T-T2.js:701-711), with a 5-item checklist.
- **3.T.T.3.c:** a free-text opinion paragraph box (T-T34.js:249-258) and two full extended writing tasks. Each task has 2 sources, the provided reasons, a planner, a 16-row draft with spell-check off, the official Writer's Checklist, a parent 3-trait 8-point rubric and a model essay.
- **3.T.T.4.b:** a free-text poem box, at least 2 stanzas (T-T34.js:614-624).
- **3.T.RA.1.c:** a free-text two-source summary box (T-RA.js:457-467). Both writing tasks also require using both sources in the child's own words.
- **3.T.RA.1.a** (Interpreting) also has a write box where the child picks a topic and writes three questions.

How the writing boxes work (skills.js:571-602):
- They appear on the Try It Yourself panel.
- Text is saved only on the device (`pp.skwrite.<key>`).
- A grown-up reads it against the checklist. Nothing is machine-scored. This is honest and appropriate.

Writing-task count: 2 tasks in js/data/tasks. Both are opinion tasks, and both carry `std` 3.T.T.3.c and 3.T.RA.1.c (W-TASK-01.js:91, W-TASK-02.js:94). No task targets 3.T.T.2.d or 3.T.T.4.b. This matches the test: the GaDOE rubric scores an opinion essay that "should include opinion and expository techniques".

## Practice Test 1 items on slice codes
| Code | PT-1 items | Points |
|---|---|---|
| 3.T.T.2.a | PT-1-8, PT-1-10 | 3 |
| 3.T.T.2.b | PT-1-13, PT-1-14 | 4 |
| 3.T.T.2.d | PT-1-17, PT-1-18 | 3 |
| 3.T.RA.1.b | PT-1-17 (shared with 2.d) | (2) |
| 3.T.RA.2.a | PT-1-3, -7, -10, -14 | 7 (shared) |
| 2.c, 3.a, 3.c, 4.a, 4.b, RA.1.a, RA.1.c, RA.2.b | none | 0 |

The PT-1 header says this itself: opinion text, poem and paired texts are left for PT-2/PT-3, which do not exist yet. So there is only one practice test, and it never shows the child a paired-text set, an opinion passage or a poem in test conditions. The blueprint gives Techniques 16 Interpreting points and Research & Analysis 6. This is not a per-row failure, because each skill is covered in its lesson and mixed sets, but it is the biggest gap for a mock test in this slice.

## PARTIAL rows

### 3.T.T.2.a (Medium)
The expectation's main verb is "describe techniques used to present and design expository texts", and the "including" clause names main idea and key details.
- Main idea and key details: fully taught and tested in two lessons (3.T.T.2.a and TS-DESC), plus R-INF-01/02 and PT-1.
- "Present" techniques (description structure, detail clue words): covered by TS-DESC.
- "Design" techniques: not taught or tested in either 2.a lesson. These include headings, text boxes, photos with captions and diagrams. Headings and one "Did You Know?" box exist only in R-INF-01 and PT-1 p2, and the items on them are tagged 3.T.SS.1.a.
- Visuals: there are none anywhere. R-INF-01.js states "The site shows no pictures, so there is no caption".

Under the spec's rule (a visual taught only in words is at most PARTIAL), this is PARTIAL. I did not rate it High because the "including" components are fully covered and text features also sit under 3.T.SS.1.a (another agent's slice).

Fix: add a short "how the article is built" part with an inline SVG labeled diagram or a captioned picture, plus 2 practice and 2 test items asking how a heading, box or diagram helps the reader.

### 3.T.T.2.d (Low)
Every part is taught and the child writes a real paragraph. The exception is "illustrations": it gets one sentence in teach (T-T2.js:639, "A picture or diagram can also help explain a fact") and nothing else. The write box is text-only.

The standard lists illustrations as one option ("facts, definitions, details, or illustrations"), so this does not strictly need a visual. That is why I rated it Low and not Medium. Definitions are practiced (SK-TT2d-P2) and required in the write box, but not tested. There is also no DOK 3 item.

### 3.T.T.4.b (Medium)
"To achieve an intended effect" is taught (teach point 1, write checklist line 5), but all 10 items judge only "rhymes in the right place and makes sense". The ALD Developing level already expects applying a technique "to produce poetry that achieves an intended effect". Fix: add an item where every option rhymes and only one creates the named feeling.

### 3.T.RA.1.b (Low)
The selected-response skill the test assesses is fully covered. What is missing:
- Any digital source. The pairs are print plus personal communication. "Website" is named in teach only.
- Hands-on research. There is no write box or activity, only a parent tip.
- Credibility, which is handled in 3.T.RA.2.b.

## Item flaws found while solving
1. **SK-RA1c-T3 (T-RA.js:573-584), Medium.** The keyed answers are correct but are verbatim source sentences, and one is a minor detail. The same lesson teaches "Use your own words. Do not copy whole sentences" and "Leave out tiny details". The item rewards the opposite of the lesson. Fix: paraphrase the two correct options into big-idea sentences.
2. **Reused passage titles with different text, Low.** "From Egg to Butterfly" (T-T2.js:274 vs T-RA.js:470), "The Long Trip South" (T-T2.js:497 is about hummingbirds, T-RA.js:477 is about monarchs) and "Tiny Flyers" (T-T2.js:490 vs T-RA.js:484) each name two different texts. The RA.1.c write prompt sends the child back to "The Long Trip South" by name. A child who did 3.T.T.2.c first may think of the hummingbird text. Retitle one of each pair.
3. **The RA.1.c write card renders on the Try It Yourself panel, outside the player, Low.** The two sources it asks the child to reread are visible only inside a practice or try question. Consider showing the passages, or a "Show the sources" button, in the write card.
4. **TS-CC tags 3.T.T.2.c (T-TS.js:617), Low.** It compares two animals inside one passage, which is 3.T.SS.1.a compare/contrast structure, not integrating two texts. It inflates the apparent 2.c coverage. Drop the tag.
5. **3.T.T.3.c write prompt (T-T34.js:250), Low.** It says "Start with your opinion". The standard and the rubric want the topic introduced first. Add "Introduce the topic".
6. **3.T.T.4.a, Low.** 3 of 5 test items are DOK 1. The term "rhyme scheme" appears only in a glossary parenthetical.

There were no wrong keys, no items with two defensible answers, and no giveaways within a test in the slice lessons. Items I checked closely:
- SK-TT4b-T5, P5 (rhyme positions)
- SK-TT4a-T1 (dropdown indexes map to "2" and "4")
- SK-TT2c-T1/T2
- SK-RA1b-P1/T1/T4 ("both sources" facts confirmed in passage text)
- SK-TT3a-T5
- SK-TSDESC-T3
- R-INF-02-6/-7 (refuge and Native American facts confirmed at R-INF-02.js:32, 54, 68, 94)
- R-POE-01-q1 (Fireflies is AABB)

## Diagrams, graphics and visual information
No expectation in this slice strictly requires a visual. Two touch it:
- **3.T.T.2.a**, through the "design" of expository text.
- **3.T.T.2.d**, through "illustrations".

The site has no image support in any passage. `index.html` uses role="img" only on the score box, and the player has no image rendering. So both are taught in words only, and I have recorded this in those rows.

The "draw" clues (webs, flow charts, Venn diagrams in T-T2.js clues) are suggestions for paper work. They are not on-screen graphics.

## What I did not check
- I did not run the gates (check-content, readability, guard). I did not open the site in a browser, so the panels are not checked on screen. I did not start a server on 8442.
- I did not diff the official_wording against the 2023 standards PDF; another agent owns that. Note: the standards.js header says "wording paraphrased".
- I did not find GaDOE's "K-12 Text Techniques: Grade-Level Resource", which the rubric cites as the list of grade-level expository and opinion techniques. Two web searches on 2026-10-20 did not find it. So whether grade 3 "expository techniques" formally includes text features and graphics is UNVERIFIED. Searches tried: `Georgia "Text Techniques" grade-level resource ELA K-12 expository techniques grade 3 georgiastandards.org` and `"Text Techniques" "Grade-Level Resource" Georgia ELA`.
- I read only the slice-coded items in R-LIT-01/02, R-INF-01 and PT-1, not every item in those sets.
- I did not review the writing tasks' model essays or rubric notes in depth beyond the std tags, prompts, planner and evidence lists.
