# PP-004 form B review, Agent C, round 5 (independent, blind)

Reviewer: Agent C5. Date: 2026-10-21. Worktree: /home/claude/pp-fix (read-only for me; this file is the only one I wrote in the repo).
Port used: 8508 (server started, then stopped by PID).
I did not read any other review file, formB log or fix log at any point.

## Scope
- Every `testB` in the live manifest, found by script: 13 lessons, 67 items.
  3.T.SS.2.a, 3.T.T.1.a, 3.T.T.1.c, TS-CE, 3.T.T.2.a, 3.T.T.2.b, 3.T.T.4.a, 3.T.RA.2.a, 3.L.GC.2.b,
  3.L.GC.1:M:form-and-use-irregular-plural-nouns, 3.L.GC.1:M:form-and-use-the-past-tense-of-irregular-verbs, 3.L.V.2.a, 3.L.V.3.a.
- Recently changed: SK-TC1b-P10 (beaver web-page figure), PT-1-8, PT-1-13.
- All of PT-1 (24 items) for cues in both directions.
- **Items solved blind: 92** (67 form B + SK-TC1b-P10 + 24 PT-1).

## Method (position-bias control)
All scripts are in /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revC5/.
1. `load.js` loads the manifest's lesson and set files into a mock `PP`. `blind.js` printed every scope item with choices, dropdown options, hot-text targets, order steps and match rows shuffled by a seeded LCG (seed 5505), with passage text, figure path and alt text, and NO `correct`, `answer`, `why`, `clue` or hint (`blind.txt`; a grep showed "correct"/"answer" only inside prompts).
2. `figs.py` rendered the 5 figures used (tt2a-b-tree-trunk, v3a-b-balloon-parts, v3a-b-pecan-graph, tc1b-beaver-lodge, tc1b-beaver-webpage) to PNG via Playwright (`png/`). I looked at each one before answering.
3. I solved all 92 items from `blind.txt` + PNGs only and saved `answers.json` before extracting any key. I had not opened the lesson source for these items.
4. `compare.js` then extracted keys by script and compared. I sanity-checked the comparator by planting 5 wrong answers (mc, ms, dropdown, match); it caught all 5.
5. Only after that did I dump each lesson in full (`lessons.js`: teach, Watch Me, practice, form A, form B with keys and whys), compute points/codes/DOK, 5-gram overlap of form B against everything else in its lesson, and a targeted reuse check of tested target words (`targets.js`).
6. `render.py` / `renderpt.py`: every form B item (67) and every PT-1 item (24) rendered at 390x844 and 1366x900 via `PP_PLAYER.start(id,'test')`, checking for horizontal overflow and page errors; 390 screenshots in `shots/`. I did not submit answers through the UI (the author's job per the form B brief); scoring was checked by the key comparison above.
7. Gates (read-only runs): `node verification/check-content.js --all` -> PASS, 0 failures, 6 warnings (1 in scope: PT-1-14 clue shares "bright" with key). `python3 verification/readability.py`: all new form B prose passages FK 2.2-4.2.

## Agreement
**92 / 92 = 100%** (form B 67/67, SK-TC1b-P10 1/1, PT-1 24/24). No key disagreements.
Note: my blind dump had no on-screen labels, so the SK-TT4a-TB2 agreement is a true blind solve; on screen that item is given away (RC5-1).

## Structural checks (script output)
| Lesson | A pts / B pts | A DOK | B DOK | Codes same | B passages new |
|---|---|---|---|---|---|
| 3.T.SS.2.a | 6 / 6 | 2,2,3,2,2 | 2,2,3,2,2 | yes | p3 only |
| 3.T.T.1.a | 8 / 8 | 2,2,3,2,3,2 | same | yes | p3 only |
| 3.T.T.1.c | 7 / 7 | 2,2,2,3,2 | same | yes | p3 only |
| TS-CE (3.T.SS.1.a + 3.T.T.2.b) | 6 / 6 | 2,2,2,1,2 | same | yes | p3 only |
| 3.T.T.2.a | 8 / 8 | 2,3,2,2,2,2 | same | yes | p3 only |
| 3.T.T.2.b | 7 / 7 | 2,2,3,2,3 | same | yes | p3 only |
| 3.T.T.4.a | 7 / 7 | 2-pt dd 1,1,2,2,1 | ms 1,1,2,2,1 | yes | p3, p4 |
| 3.T.RA.2.a | 6 / 6 | 2,3,3,2 | same | yes | p3 only |
| 3.L.GC.2.b | 7 / 7 | 2,2,2,2,2 | same | yes | p3 (+2 standalone) |
| irregular plurals | 7 / 7 | 1,2,1,1,2 | 1,2,1,2,2 | yes | standalone |
| irregular verbs | 7 / 7 | 1,2,1,2,2 | same | yes | standalone |
| 3.L.V.2.a | 7 / 7 | 2,1,2,2,2 | same | yes | p3 (+2 standalone) |
| 3.L.V.3.a | 7 / 7 | all 2 | all 2 | yes | p3 (+1 standalone) |

No form B item names a practice or form A passage. 5-gram overlap with the rest of each lesson is only prompt boilerplate ("This question has two parts...", "Choose the word that correctly completes the sentence") plus one opening phrase ("Every Saturday") in the GC2b draft.

## Findings

### RC5-1  MUST  SK-TT4a-TB2 gives its answer away on screen
- js/data/lessons/T-T34.js:608. Prompt: "Choose the line that begins the second stanza of 'Firefly Night.'"
- Evidence: hot-text options built from poem refs are labelled by `visibleLabel` (js/engine/items.js:73, `hotLabel`; js/pp.js `visibleLabel` returns "stanza N, line M" for `lines` passages). At 390 and 1366 the options read "“FIREFLY NIGHT”, STANZA 2, LINE 1 / Then blink, blink, blink, a tiny light" etc. (screenshot shots/3.T.T.4.a-2-390.png). The label states the answer.
- Fix: make TB2 a hot text with free-standing `options: [...]` and `answer: [i]` (the engine shows those without labels and shuffles them), or an `mc` whose choices are the five lines as quoted text. Keep the same five lines, points 1, DOK 1. (Optional engine follow-up for the lead: `check-content.js` could warn when a poem hot-text prompt names a stanza or line position.)

### RC5-2  SHOULD  SK-GUM3-2-TB4 reuses a tested target word and a Watch Me sentence
- js/data/lessons/L-GUM3.js:341, row "Two deer drank from the cool creek." (key: Correct).
- Evidence: Watch Me 2 is "We saw two ____ at the edge of the woods. (deer)", answer "We saw two deer...". Practice SK-GUM3-2-P3 has a "deer" row (Stays the same), and teach lists "one deer, two deer". A child can mark this row from memory of the Watch Me sentence.
- Fix: use an unchanging plural not taught in this lesson, e.g. "Five trout swam under the little bridge." or "Two bison rested in the tall grass." (both stay the same in the plural).

### RC5-3  SHOULD  SK-V3a-TB1 is a near-isomorph of form A SK-V3a-T8 (and of Watch Me 2)
- js/data/lessons/L-V3.js:261.
- Evidence: A-T8: one sentence ("Attendance ... was highest in spring") + a 4-bar horizontal graph with title and axis words, + "Read the sentence and look at the graph. What does attendance mean?" with "the number of ... who/that ..." choices. B-TB1: the same frame ("harvest was biggest in week 3", 4 bars, longest bar, "Read the sentences and look at the graph. What does harvest mean?", "the number of people who help on a farm" / "the number of trees that grow on a farm"). Watch Me 2 ("June had the most precipitation") is the same frame again. Only the nouns change, which the form B brief says is not acceptable. It is answerable, accurate and the figure is correct, so this is not a MUST.
- Fix: keep the graph-as-context requirement (3.L.V.3.a names graphs) but change the reasoning step, for example a word that needs the trend, not the biggest bar: "Our pecan harvest **dwindled** after week 3" with bars 3, 8, 5, 2, asking what dwindled means (became smaller little by little); distractors "stayed the same", "grew bigger", "was picked faster".

### RC5-4  SHOULD  PT-1-13: one row is a surface word match
- js/data/sets/PT-1.js:435. Row "A leaf has a lot of green chlorophyll inside it." -> column "The leaf looks green." The repeated word "green" answers the row with no reading, and with each effect used once that also narrows the other three rows. The rest of the item (recently changed) is accurate and keyed correctly.
- Fix: replace that row/column pair with one that needs the article, e.g. row "The days get shorter in the fall." -> column "The tree slows down its food making." (paragraph 6).

### RC5-5  NOTE  SK-TSCE-TB5 re-tests form A's answer word
- js/data/lessons/T-TS.js:462. TB5 asks what "Since" signals; form A SK-TSCE-T5's answer is "since" (as a swap for because), and practice P6 lists "Since" as a clue word. The item still requires knowing that since introduces a cause, which is the skill, so I rate it NOTE. Optional fix: ask about "so" in paragraph 4 or "As a result" in paragraph 2 (an effect follows), which also varies the answer direction from form A.

### RC5-6  NOTE  SK-TSCE-TB2 `why` is loose
- js/data/lessons/T-TS.js:436. The why says "In the other sentences the cause comes first: ... and big storms." "During big storms, huge waves crash onto the beach." has no clue word and is not a cause-then-effect sentence in the same sense. Suggest: "The sentence about storms has no clue word, so it does not tell a cause and an effect."

### RC5-7  NOTE  SK-GUM3-2-TB2 garden-path choice
- js/data/lessons/L-GUM3.js:324, choice "The elves in our class play wore pointy green hats." A third grader can read "play" as the verb. Suggest "In our class play, the elves wore pointy green hats."

### RC5-8  NOTE  SK-RA2a-TB4 unexplained speaker
- js/data/lessons/T-RA.js:924. "Mr. Reed says ..." Mr. Reed is not in the story (the teacher is Ms. Ortiz). Form A uses a peer ("Leo says"). Suggest "A classmate, Reed, says ..." or "Mr. Reed, a reader, says ...".

### RC5-9  NOTE  SK-GC2b form B draft repeats form A's frame
- js/data/lessons/L-GC2.js:317 (p3 "Saturdays at the Bakery") vs p2 "Saturday at the Market": both are habitual present-tense "Every Saturday" drafts with one past-tense slip as the TB1/T1 answer. The sentences and setting are new, and TB4 adds a correct cross-time row ("Last year ... was ..., but now she is ...") that form A lacks, so this is not renaming. Varying the frame (a past-tense trip draft with one present slip) would make the form more independent.

### RC5-10  NOTE  Minor in-form position cue, SK-TT1a-TB4
- js/data/lessons/T-T1.js:258. The only option labelled "paragraph 7" is the answer to "how the setting has changed by the end of the story". The content also makes it plain, so this is not a giveaway. Could add a second late distractor (p3:6:1 "Imani laughed and latched the gate tight.").

### RC5-11  NOTE  DOK drift, irregular plurals
- Form B match TB4 is DOK 2 (sentence judgment) where form A T4 is DOK 1 (word-to-plural). Justified by the task; total mix is 1,2,1,2,2 vs 1,2,1,1,2. Acceptable.

### RC5-12  NOTE  SK-V3a p3 simplification
- js/data/lessons/L-V3.js:100. "The balloon drifts wherever the wind pushes it." Pilots do steer somewhat by changing height to catch winds blowing other ways (SKYbrary, below). The preceding sentence, "A pilot cannot steer a balloon the way a driver steers a car," is accurate, and no item depends on the simplification. Optional: "The balloon mostly drifts wherever the wind pushes it."

### RC5-13  NOTE  PT-1 cross-item cues (checked both directions; none decisive)
- PT-1-14 Part B distractor quotes "The chlorophyll in its leaves breaks down, and the tree stops making more.", which is the source of PT-1-10's key C. It is a verbatim passage sentence and does not say it explains yellow and orange, so no new information.
- PT-1-6's key ("Aunt Bea treats it as a problem she can solve by making a new pitcher") and PT-1-7's key quote ("A chipped pitcher is a small problem...") point the same way; neither states the central message.
- PT-1-8's key (changes inside leaves as trees get ready for winter) overlaps the ideas in PT-1-11 D and PT-1-12 D, but each of those is answerable only from its own section.
- PT-1-2 stem and PT-1-7 B-C quote the same sentence (p1:4:3); harmless.
- check-content warning: PT-1-14 clue shares "bright" only with the key. Clues are not shown in test mode, so this only matters on review screens.
- PT-1-8 (changed): the key is the only choice that covers color change, leaf drop and getting ready for winter; A-C are single-section details. PASS.

### SK-TC1b-P10 (beaver web-page figure)  no defects
- js/data/lessons/T-C.js:347. The figure (rendered) matches its alt text: tabs (Beavers selected), heading "Busy Builders", video with a play button, caption lines "[water rushing]" and "NARRATOR: The dam slows the rushing water.", the line "Beavers use sticks and mud.", and the link "Next page: Beaver lodges". The keys "what sound plays in the video" / "open a page about beaver lodges" are each the only answer the picture supports. The why teaches the bracket convention. It parallels form A T8/T9 (monarch web page and video caption) in skill but uses a different page and different words, which is appropriate for practice. The beaver-lodge figure (p1) also matches its alt text: dry room above the waterline, tunnel to a door under water.

### Rendering
- 67 form B items and 24 PT-1 items rendered at 390 and 1366: no horizontal overflow and no page errors. The only console error was a Google Fonts request blocked by this sandbox's proxy.
- EBSR prompts that begin "Part A:"/"Part B:" (PT-1-7, -14) are not doubled on screen (items.js strips the prefix).
- Cosmetic, out of scope: a form B passage is headed "PASSAGE 3" because it shares the lesson's one passage list.

## Grammar
I read every form B passage, stem, choice and why, and PT-1's items. No grammar errors found. RC5-7 is a readability (parse) issue, not an error.

## Facts checked (2026-10-21)
- Sea oats are protected by law in Georgia, and picking them is illegal; they trap blowing sand and build dunes; their roots form a lattice that holds the sand; dunes reduce storm waves. https://coastalgadnr.org/sea-oats (Georgia DNR Coastal Resources). Verified.
- Pony Express: began April 3, 1860; St. Joseph to Sacramento; stations 10-15 miles apart; a rider covered 75-100 miles; first mail took 10 days; ended October 26, 1861 after the telegraph. https://about.usps.com/who/profile/history/pdf/pony-express.pdf. Telegraph finished October 24, 1861, so the Express closed two days later; about 19 months; horse change in about two minutes; the stagecoach took about 25 days (more than three weeks). https://www.history.com/articles/10-things-you-may-not-know-about-the-pony-express. Verified.
- Tree trunk: the outer bark protects and keeps moisture in; the inner bark (phloem) carries food; the sapwood carries water up to the leaves; the heartwood is the "central, supporting pillar". https://www.fs.usda.gov/learn/trees/anatomy-of-tree. "One ring = one year" is standard annual-ring knowledge (the FS page says the cambium adds wood annually). Thick bark protects against fire: https://longleafalliance.org/what-is-longleaf/the-ecosystem/built-by-fire (search result; not fetched in full).
- Leaves: chlorophyll makes food and looks green; yellow and orange pigments are present all season but masked; reds are made in the fall; sunny days followed by cool nights make the reds brighter; an abscission layer forms between the twig and the leaf. https://extension.unh.edu/node/5736. Sweetgum turns red, purple, yellow or orange: https://plants.ces.ncsu.edu/plants/liquidambar-styraciflua/common-name/sweetgum-tree. Leaf drop helps conserve water for winter: https://ncdnaday.org/2018/11/natures-methods-for-surviving-winter/. Fallen leaves adding nutrients to the soil is standard knowledge and was not separately fetched.
- Owls (PT-1-17): the facial disc directs sound to the ears; asymmetric ear openings help locate sounds. https://www.reconnectwithnature.org/headlines/news/nature-curiosity-how-do-birds-hear. Tube-shaped fixed eyes (a distractor) were not fetched; this is well known.
- Hot-air balloon: the parachute vent is in the top of the envelope and opening it makes the balloon descend; flights are usually early morning, in more stable air. https://www.skybrary.aero/articles/hot-air-balloon-awareness (see RC5-12 on steering).
- Pecans: the Georgia harvest runs from about the end of October through November. https://fieldreport.caes.uga.edu/news/georgia-growers-eyeing-nations-top-pecan-harvest
- Mandu are Korean dumplings (filled; meat and vegetable fillings are common). https://en.wikipedia.org/wiki/Mandu_(food). "Halmoni" = grandmother (Korean 할머니): not separately fetched; I rely on general knowledge here.
- Standards wording was checked against the official grade 3-5 text (scratchpad gadoe/standards-3-5.txt) for 3.T.RA.2.a (p38), 3.T.SS.2.a (p30), 3.L.V.3.a (p23), 3.L.V.2.a (p22), 3.T.SS.1.c (p29) and 3.L.V.3.c (p23). The rest were read from js/data/standards.js `official` fields.
- Not fact-dependent: the poems, the stories, the student drafts and the grammar items.

## Verdicts
| Form | Verdict |
|---|---|
| 3.T.SS.2.a form B | PASS |
| 3.T.T.1.a form B | PASS (NOTE RC5-10) |
| 3.T.T.1.c form B | PASS |
| TS-CE form B | PASS (NOTES RC5-5, RC5-6) |
| 3.T.T.2.a form B | PASS |
| 3.T.T.2.b form B | PASS |
| 3.T.T.4.a form B | **FAIL** (MUST RC5-1) |
| 3.T.RA.2.a form B | PASS (NOTE RC5-8) |
| 3.L.GC.2.b form B | PASS (NOTE RC5-9) |
| 3.L.GC.1:M irregular plural nouns form B | PASS WITH SHOULDS (RC5-2; NOTES RC5-7, RC5-11) |
| 3.L.GC.1:M irregular past-tense verbs form B | PASS |
| 3.L.V.2.a form B | PASS |
| 3.L.V.3.a form B | PASS WITH SHOULDS (RC5-3; NOTE RC5-12) |
| SK-TC1b-P10 | PASS |
| PT-1 (incl. PT-1-8, PT-1-13) | PASS WITH SHOULDS (RC5-4; NOTE RC5-13) |

## Second independent review status
This file is an independent, blind review of all 13 form B checks in their current (final) version, done without reading any earlier review, formB log or fix log. Whether it is the *second* independent review of each form depends on an earlier first review that I deliberately did not read, so I cannot confirm that from my own evidence. If a first independent review exists for each form, then with this review all 13 form B checks (3.T.SS.2.a, 3.T.T.1.a, 3.T.T.1.c, TS-CE, 3.T.T.2.a, 3.T.T.2.b, 3.T.T.4.a, 3.T.RA.2.a, 3.L.GC.2.b, irregular plural nouns, irregular past-tense verbs, 3.L.V.2.a, 3.L.V.3.a) have now had their second independent review. 3.T.T.4.a fails it and needs a fix and a re-review of SK-TT4a-TB2.
