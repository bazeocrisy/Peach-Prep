# PP-003 fix log: agent "texts"

Worktree /home/claude/pp-fix, 2026-10-20. Official wording below is from js/data/standards.js (Georgia K-12 ELA Standards 2023, as recorded in PP-003-STANDARDS-MATRIX.csv). ALD wording is from the Grade 3 ELA ALDs, October 2025, **DRAFT** (scratchpad/gadoe/2ba6c680-GM_ALDs_Gr3_ELA.txt).

Verification common to every entry below:
- `node verification/check-content.js --all`: PASS, 0 failures.
  - At my first run there were 35 warnings. On the final run there were 9, because other agents' work in the same tree also changes the count.
  - None of the warnings, then or now, come from items I added or changed. My first run showed two new clue-overlap warnings (SK-RA1c-T3 "tiny", SK-TT4b-P6 "slow"). I fixed both by rewording.
- `python3 verification/readability.py`: runs clean (exit 0). It measures passages only, and I changed no passage text, only titles.
- Browser, my own port 8453 (server stopped afterwards). I loaded the teach, learn, practice, try and test steps of all six skill pages at 375px. There were no page errors and no sideways scroll.
- I played every Practice Together, Try It Yourself and Test set of the six lessons through the real player in test mode. I used the guard's CORRECT/WRONG injectors. Each set scored full marks all right and 0 all wrong at 1366px, and full marks all right at 320px with no sideways scroll.
- I solved every new item myself and checked giveaways against every other item in the same set (details per entry).
- Not done: the full `guard.py` run (about 20 minutes); the lead's gate. No independent second reviewer has read these items.

---

## 1. 3.T.T.1.b: test was mostly name-only, and setting function was never taught
- **Deficiency:** About 7 of 10 test items across 3.T.T.1.b and TS-PS only ask the child to *identify* a story element. How the setting affects the plot was never taught or asked.
- **Why it matters:** "Identify a characteristic of plot" is the Beginning ALD. Proficient asks the child to explain how the elements *function*. A child could reach "mastered" without showing the Proficient skill.
- **Official requirement:** 3.T.T.1.b "Explain how characters, setting, problem, and solution function in the plot." ALD Proficient (DRAFT): "Explain how characters, setting, problem, and/or solution function in the plot."
- **File:** js/data/lessons/T-T1.js, 3.T.T.1.b block only.
- **Correction:**
  - teach.points: added a point: "Story parts work together to make things happen. Ask: How does the place or the time change what happens? How does the problem make the character act?..."
  - learn: added a third Watch Me example (new campsite text, not used anywhere else). It shows how the faraway setting makes the problem harder and pushes the character to the solution.
  - **SK-TT1b-T2** replaced. It was "What problem does Omar have?" (name-only). It now asks: "The story begins on a Thursday afternoon. Why does this time matter to the plot?" This tests setting function (time), DOK 2.
  - **SK-TT1b-T4** replaced. It was "Which words best describe the setting at the start?" (name-only). It now asks: "Omar sets the book on top of his shoes. How does this event affect the end of the story?" This tests event function, DOK 2.
  - The test stays at 5 items and 7 points. There are now 3 function items (T2, T3, T4) and 2 identification items (T1, T5). The problem is still identified in T5's match row.
  - **SK-TT1b-P7** added to practice: "The rabbits come into the garden at night. How does that part of the setting affect what Jada does?" (DOK 2). This is the practice model for the new setting-function test item.
    - I placed it after P3 on purpose. Its prompt and feedback point toward a gate-blocking fix, which would give away P3 (the solution sentence) if it came first. P2 (the problem) and P6 also come before it.
    - Practice is now 7 items, split 4 Together (P1, P2, P6, P3) and 3 Try (P7, P4, P5).
- **Giveaway check:**
  - T2's key ("due on Friday") does not answer T3 (how he finds it), T4 (shoes) or T5's rows.
  - T4's key ("returns the book on time") does not reveal T3's Part A or Part B.
  - P7's prompt reveals that rabbits come at night (the P2 answer), but P7 comes after P2, and P5 already did the same thing before my change.
  - SK-TT1b-P6 does not touch P7: its feedback mentions only that the tomatoes were eaten.
- **Remaining limitations:**
  - The TS-PS lesson (T-TS.js) still has identification-heavy items. It was outside my assignment.
  - The teach block now has 7 points, above SPEC §8's guideline of "3-5". It already had 6 before, and the checker does not flag it.
  - The 3.T.T.1.b lesson lists 3.T.SS.1.a in `codes`, but no item is tagged with it. I left this unchanged (noted in notes-texts1).

## 2. 3.T.T.4.b: no item on "achieve an intended effect"
- **Deficiency:** All 10 items judged only rhyme placement and sense. None asked which choice creates a feeling or effect.
- **Why it matters:** The standard and the ALD both name "achieve an intended effect". The lesson taught it (teach point 1, write checklist) but never checked it.
- **Official requirement:** 3.T.T.4.b "Apply poetic techniques to produce poetry that uses rhyme in at least two stanzas to achieve an intended effect." ALD (DRAFT): "...to achieve an intended effect."
- **File:** js/data/lessons/T-T34.js, 3.T.T.4.b block only.
- **Correction:**
  - **SK-TT4b-P6** (practice, Try, DOK 2): every choice rhymes with "low". Only "And drift to sleep, so soft and slow." creates the calm, sleepy feeling the writer wants. This is about word choice and sound.
  - **SK-TT4b-T6** (test, DOK 2): every choice rhymes with "top". Only "Then whoosh! We zoom down, flip and drop!" makes a roller coaster feel fast and exciting. This is about a sound word plus action verbs.
  - teach.tip: added one sentence saying that effect questions may have all-rhyming choices.
  - Practice is now 6 items (3 Together / 3 Try; it was 3 / 2). The test is now 6 items and 8 points.
- **Giveaway check:** T6 shares no words or ideas with T1-T5, which are all about rhyme placement. P6 and T6 use different texts.
- **Remaining limitations:** Neither new item tests line breaks. Both items are 1-point DOK 2.

## 3. 3.T.RA.1.c: SK-RA1c-T3 rewarded copying and a tiny detail
- **Deficiency:** Both keys were source sentences copied word for word, and one was a minor detail. This contradicted the lesson's own teaching ("Use your own words", "Leave out tiny details").
- **Why it matters:** The item taught the opposite of the skill.
- **Official requirement:** 3.T.RA.1.c "Summarize researched, relevant, and accurate information from at least two credible sources..."
- **File:** js/data/lessons/T-RA.js, 3.T.RA.1.c block only.
- **Correction:** I rewrote **SK-RA1c-T3** (ms, pick 2, 2 pts, DOK 3).
  - The new prompt asks for sentences that are true to the sources, tell an important idea, *and* use her own words.
  - Keys (paraphrased big ideas):
    - "Hummingbirds are very small birds that fly in amazing ways, like hovering in place." (Source 1)
    - "A mother hummingbird builds a small, soft nest where she lays her eggs." (Source 2)
  - Distractors:
    - "Many weigh less than a nickel." This is true but is a tiny detail copied verbatim from Source 1. It is the direct test of the lesson's rule.
    - An opinion.
    - Two statements the sources contradict: they stay in Georgia all year; they eat only seeds.
- **Giveaway check:**
  - The keys do not together form T1's key ("nest in Georgia in summer and go south in winter"). The old Source 2 key about the sea crossing came closer to it.
  - The Source 1 key mentions hovering, which also appears in T1's distractor "can hover in one spot". This is a mild overlap that confirms a Source 1 fact; it does not reveal T1's answer. I judged it acceptable.
- **Remaining limitations:** The write card still renders outside the player, without the sources (notes-texts2 flaw 3). That was not in scope.

## 4. 3.T.C.2.c: "individual" and "situation" never practiced or tested
- **Deficiency:** All 10 items turned on time period. Individual and situation were taught (teach point 3, Watch Me 2, example) but never checked.
- **Why it matters:** The expectation names three context types, and the blueprint lists it as assessed (3.T.C.2 a, c).
- **Official requirement:** 3.T.C.2.c "With adult support, identify the context in which a text was written (time period, individual, situation)." ALD (DRAFT): no Proficient descriptor; at Distinguished, "Identify the context in which a text is written."
- **File:** js/data/lessons/T-C.js, 3.T.C.2.c block only. I re-read the file before each edit; I did not touch 3.T.C.1.b.
- **Correction:**
  - **SK-TC2c-P6** (practice, Try, DOK 2), *individual*: a scientist's field notes. "Why are Dr. Ruiz's notes full of numbers and short facts?" Key: she is a scientist recording exact counts. One distractor is a time-period trap ("She wrote long ago...").
  - **SK-TC2c-T6** (test, DOK 2), *situation*: a note Marcus wrote on moving day. "How does knowing Marcus's situation help you understand his note?" Key: he is moving away, so he says goodbye and asks the class to keep in touch. Distractors are a time-period trap and two wrong readings of who he is.
  - Both use stems with a "Note in a box" context, not the 1928 or 1954 passages, so neither depends on time period.
  - Practice is now 6 items (3 / 3). The test is now 6 items and 9 points.
- **Giveaway check:**
  - T6 shares nothing with T1-T5, which are about the 1954 TV diary. I deliberately kept "phone" out of T6 so it does not echo T5's "life today" rows.
  - P6 shares nothing with P1-P5 (the 1928 letter).
- **Remaining limitations:** Individual is practiced but not tested, and situation is tested but only modeled in Watch Me, not practiced. One item each was the smallest fix that closes the gap.

## 5. 3.T.SS.1.b: no test item depended on audience
- **Deficiency:** No lesson test item turned on who will read the text.
- **Why it matters:** The standard says "suited to purpose and audience".
- **Official requirement:** 3.T.SS.1.b "Design texts using a variety of structures and features suited to purpose and audience." ALD (DRAFT): "Design a text using a variety of text structure(s) and features, according to purpose and audience."
- **File:** js/data/lessons/T-SS.js, 3.T.SS.1.b block only. I re-read the file before editing; I did not touch 3.T.SS.1.a.
- **Correction:** Added **SK-SS1b-T6** (test, DOK 2, passage p2).
  - Prompt: Priya's draft becomes a poster for kindergarten children just learning to read.
  - Key: "a big picture for each thing kids can do there, with one or two easy words under it".
  - Each distractor is a feature that would suit a *different* reader: an hours chart (grown-ups), a long history paragraph, a shelf map (older readers). So the audience is what decides the answer.
  - The test is now 6 items and 7 points.
- **Giveaway check:** I avoided "fun" and "activities", so T6 does not echo T2's key ("Fun Events for Kids"). It does not reveal T1 (audiobooks), T3 (caption), T4 (order) or T5.
- **Remaining limitations:** The auditor also suggested a test item that requires a non-sequence structure (compare or cause/effect). That was not in my assignment and is still open. SK-SS1b-T1 still really tests 3.T.SS.1.d.

## 6. 3.T.T.2.d: no DOK 3 item
- **Deficiency:** Every item was DOK 1-2.
- **Why it matters:** The standard is about developing a topic. Judging which addition best develops it, and why, is the higher-order part of the skill.
- **Official requirement:** 3.T.T.2.d "Apply expository techniques to introduce a topic, develop it with facts, definitions, details, or illustrations, and provide a concluding statement or section."
- **File:** js/data/lessons/T-T2.js, 3.T.T.2.d block only. I re-read the file before editing; I did not touch 3.T.T.2.a.
- **Correction:** Added **SK-TT2d-T6** (test, mc, DOK 3, passage p2).
  - Prompt: "Kenji can add only ONE more sentence... Which choice would best develop his topic, and why?" Each choice pairs a sentence, where it goes, and a reason.
  - Key: add a definition of "mammal" after sentence 1, because it tells what a key word means.
  - Distractors:
    - An on-topic fact placed in the wrong paragraph, with a bad reason ("any new fact makes a draft better").
    - An off-topic owl sentence.
    - An opinion.
  - The child has to weigh the content, the placement and the justification, which is why I rated it DOK 3. It is also the first *test* check of "definitions", which the auditor noted was practiced but not tested.
  - The test is now 6 items and 7 points.
- **Giveaway check:** None of the choices points to sentence 8, which is T2's answer. T6 does not echo T1's or T5's key or T4's sentences.
- **Remaining limitations:** "Illustrations" are still taught in words only, because the site has no image support.

## 7. Small fix: PT-1-12 missing space
- **File:** js/data/sets/PT-1.js.
- **Correction:** In the PT-1-12 `why`, "fall.How" became "fall. How". The checker passes. The file was changed by someone else after my edit; I re-checked and my fix is still present.

## 8. Small fix: reused passage titles
- **Deficiency:** "From Egg to Butterfly", "The Long Trip South" and "Tiny Flyers" each named two different texts: one in T-T2.js (3.T.T.2.b / 2.c) and one in T-RA.js (3.T.RA.1.c).
- **Correction:** I renamed the T-RA.js copies, so the T-T2 passages, items and feedback keep their titles. All edits are in the 3.T.RA.1.c block:
  - p1 is now "A Monarch Grows Up".
  - p2 is now "Monarchs Fly to Mexico".
  - p3 is now "Hummingbirds Up Close".
  - The write prompt now reads: Reread "A Monarch Grows Up" and "Monarchs Fly to Mexico".
  - No item in the RA.1.c block cited the old titles. The items say "Source 1" / "Source 2".
- **Verification:** A grep over js/, verification/ and *.json shows that each of the three old titles now appears only in T-T2.js, and each new title appears only in T-RA.js.
- **Remaining limitation:** T-C.js (3.T.C.1.b, another agent's block) has a section *heading* "A Long Trip South" inside a monarch article. It is not the same title string, so I left it alone. The lead may want to check it.
