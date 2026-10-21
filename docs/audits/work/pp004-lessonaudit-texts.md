# PP-004 lesson-quality audit: slice "texts"

Auditor role: Agent B, independent instructional-quality review. **Read-only.** No repo file was edited except this report.

## Scope and method
- **Files:** js/data/lessons/T-C.js, T-SS.js, T-T1.js, T-TS.js, T-T2.js, T-T34.js and T-RA.js.
- **Skipped (being rewritten):** 3.T.C.1.b, 3.T.C.2.c and 3.T.RA.1.b.
- **Lessons audited:** 31. The brief estimated about 39, but these files register 34 lessons, and 3 of them are skipped.
- **How I read them:** I dumped each lesson with a script, run by loading each file in a `vm` sandbox with a mock `PP.addLesson`. Each dump has teach, learn, practice (split into Together and Try exactly as `js/skills.js` splits it, ceil(n/2)) and test items.
- **Test items:** I dumped them a second time **without keys** and solved every one before reading its key.
- **Objectives:** I checked them against `gadoe/standards-3-5.txt`, grade 3 column, pp. 20-27 of the PDF. The skill page shows the standard text from `standards.js` labelled "(paraphrased)" (`js/skills.js:557`), so a difference in wording is not by itself a defect.
- **Hints:** `clue` is shown only in practice. Test mode is unaided (`js/engine/player.js:114`).

**Result of solving the test items:** I found no wrong keys. Every test item I solved matched its key. One item has a second answer that a careful reader could defend (Ltexts-14).

## Counts
| | Lessons |
|---|---|
| STRONG | 22 |
| ADEQUATE | 9 |
| WEAK | 0 |

| | Findings |
|---|---|
| MUST | 2 |
| SHOULD | 15 |
| Total | 17 |

## Lesson table

| Key | Verdict | Findings |
|---|---|---|
| 3.T.C.1.a | STRONG | none |
| 3.T.C.1.c | ADEQUATE | Ltexts-1 |
| 3.T.C.2.a | ADEQUATE | Ltexts-2 |
| 3.T.SS.1.a | STRONG | (see Ltexts-11, cross-lesson leak into TS-CC) |
| 3.T.SS.1.b | ADEQUATE | **Ltexts-3 (MUST)** |
| 3.T.SS.1.c | STRONG | none |
| 3.T.SS.1.d | STRONG | Ltexts-4 |
| 3.T.SS.2.a | STRONG | none |
| 3.T.SS.2.b | STRONG | Ltexts-5 |
| 3.T.T.1.a | STRONG | none |
| 3.T.T.1.b | STRONG | Ltexts-6 |
| 3.T.T.1.c | STRONG | none |
| 3.T.T.1.d | STRONG | Ltexts-7 |
| 3.T.T.1.e | STRONG | none |
| TS-SEQ | ADEQUATE | Ltexts-8 |
| TS-CE | ADEQUATE | Ltexts-9 |
| TS-PS | ADEQUATE | **Ltexts-10 (MUST)** |
| TS-CC | ADEQUATE | Ltexts-11, Ltexts-12 |
| TS-DESC | STRONG | none (T4 is literal recall, minor) |
| 3.T.T.2.a | STRONG | none |
| 3.T.T.2.b | STRONG | none |
| 3.T.T.2.c | STRONG | (see Ltexts-15, overlap with RA.1.c) |
| 3.T.T.2.d | STRONG | none |
| 3.T.T.3.a | STRONG | none |
| 3.T.T.3.c | ADEQUATE | Ltexts-13 |
| 3.T.T.4.a | STRONG | none |
| 3.T.T.4.b | STRONG | none |
| 3.T.RA.1.a | STRONG | none |
| 3.T.RA.1.c | ADEQUATE | Ltexts-14, Ltexts-15, Ltexts-16 |
| 3.T.RA.2.a | STRONG | none |
| 3.T.RA.2.b | STRONG | Ltexts-17 |

Common strengths:
- The language is grade 3 throughout.
- Watch Me steps really think aloud.
- Every `why` names the answer and explains why each wrong answer fails.
- Test passages are distinct from the practice passages in every lesson.
- Paired-text lessons (T.1.d, T.2.c) require a detail from each text.

## Findings

### Ltexts-1: SHOULD. 3.T.C.1.c: practice never tests fit to the audience
- **Where:** SK-TC1c-P1 to P5 (`T-C.js`, lesson at line 201).
- **Evidence:** Official 3.T.C.1.c (p. 20): "Create multimodal texts, using features of pre-selected modes for a specific purpose and audience."
  - All five practice items ask only whether a picture, caption, label or sound matches the slide's topic.
  - Kenji's stated audience (classmates) is never used.
  - Audience appears only in the test (SK-TC1c-T4, line 629). So the test checks a part of the standard that practice never taught.
- **Fix:** Turn one practice item into an audience item. For example: "Kenji's classmates do not know the word 'peg.' Which feature would help them most?" The key would be a labelled diagram, with distractors that fit the topic but not this audience.

### Ltexts-2: SHOULD. 3.T.C.2.a: "point of view" is used in two senses, and narrative person is not this standard
- **Where:** teach points 4-5 and words "first person"/"third person" (`T-C.js:655`); SK-TC2a-P4 (line 753); SK-TC2a-T1 (line 776).
- **Evidence:** Official 3.T.C.2.a (p. 21): "Describe different perspectives of the narrator or speakers and distinguish them from their own." Grade 4 is "compare and contrast the perspectives..."
  - Neither grade names first or third person.
  - Teach defines point of view as "how the narrator thinks and feels." T1 then asks "From which point of view is this story told?", meaning first or third person.
  - So 1 of 5 test items, and 1 of 5 practice items, assess grammatical person, not perspective.
  - Also, no item uses a speaker (poem), and the official text names "speakers."
- **Fix:**
  - Reword T1 to "Who is telling this story?". The same choices still work.
  - Rename the teach words to "told by a character (I)" and "told by an outsider (he, she)" so that "point of view" keeps one meaning.
  - Optionally swap P4 for a short speaker stanza: "How does the speaker feel about the snow?"

### Ltexts-3: MUST. 3.T.SS.1.b: a planted error was left in the test passage, and it contradicts two keys
- **Where:** passage p2 "The Pine Hill Library", sentence 8 (`T-SS.js:328`); SK-SS1b-T2 (line 395); SK-SS1b-T5 (line 426).
- **Evidence:** Sentence 8, "Kids can also borrow audiobooks to listen to in the car.", is a borrowing fact inside the "special activities" paragraph (sentences 6-9).
  - It was the target of SK-SS1b-T1, which was removed in PP-003 (fix-review.md RA-8, review-E.md). The sentence stayed.
  - T2's `why` says "Borrowing is the topic of sentences 3 to 5," and keys "Fun Events for Kids" over sentences 6-9.
  - T5's key says Priya used paragraphs "so each paragraph tells about one part of the library."
  - A child who notices sentence 8 sees that both claims are false about the text. The text now teaches the opposite of the lesson: a paragraph that drifts.
- **Fix:** Replace sentence 8 with an activity. For example: "(8) On Wednesdays, kids can join a building-block club." This keeps the numbering and keeps T6's "avoid the word 'fun'" constraint (fix-texts.md:98). No key changes.

### Ltexts-4: SHOULD. 3.T.SS.1.d: every intruder sentence is blatantly off topic
- **Where:** SK-SS1d-P4, P5, T1 (`T-SS.js:782`); W1.
- **Evidence:** Teach point 3 says "A sentence about something else does not belong, even if it uses some of the same words." But every intruder has nothing to do with the topic:
  - a red truck
  - spaghetti
  - a puppy
  - a brother learning to drive (T1)

  Only P1, grandma's bird feeder, is close to the topic. The near-topic case the teach point promises is never tested.
- **Fix:** Make T1's intruder near the topic. For example, in the races paragraph: "(5) My brother says the high school has a real track." It is about racing, but not about Field Day morning.

### Ltexts-5: SHOULD. 3.T.SS.2.b: T5 gives the answer away
- **Where:** SK-SS2b-T5 (`T-SS.js:1205`).
- **Evidence:** The prompt asks for the simile "that shows how proud he felt." Only one option contains the word "proud" ("as proud as a peacock"). The item can be answered by matching words, with no knowledge of similes.
- **Fix:** Make every option a feeling simile that does not use the word. For example: "as proud as a peacock" / "as cool as a cucumber" / "as quiet as a mouse", with the prompt "shows that he felt pleased with himself." Or use one of the slot texts "puffed up like a peacock" / "shy as a mouse" / "busy as a bee".

### Ltexts-6: SHOULD. 3.T.T.1.b: T5 match is a trivial 2-point item
- **Where:** SK-TT1b-T5 (`T-T1.js:417`).
- **Evidence:**
  - There are 3 rows and 3 columns, and each column is used exactly once.
  - The rows are "Omar's dad" (the only person), "The book is not anywhere" and "Omar finds the book".
  - It is DOK 1 work worth 2 points of the 8.
- **Fix:** Add a Setting column and a fourth row ("Thursday afternoon at Omar's house"). Or make a row less obvious (character: "Lina, who has not seen the book").

### Ltexts-7: SHOULD. 3.T.T.1.d: T1 gives away T3
- **Where:** SK-TT1d-T1 (`T-T1.js:812`); SK-TT1d-T3 (line 832).
- **Evidence:** T1's key is "Each one uses what makes him different to help." T3 Part A's key is "What makes you different can also make you special." A child who reads T1 has the lesson for T3 handed to them.
- **Fix:** Change T1 to compare a different element, such as how the problem is solved or the main characters' actions, without stating the "difference = strength" idea. Or move the trait comparison into T4.

### Ltexts-8: SHOULD. TS-SEQ: in T5, Part B repeats the Part A key word for word
- **Where:** SK-TSSEQ-T5 (`T-TS.js:192`).
- **Evidence:** Part A key: "so the butter will melt in the pan first." Part B key: "Grandpa set the pan in the hot oven **so the butter would melt**."
  - Part A's answer is quoted directly. The item is labelled DOK 3 but is matching.
  - It is also a "why" (cause) item inside the sequence lesson.
- **Fix:** Turn it into a sequence-reasoning item: "Why must the butter go in the oven BEFORE Keisha pours the batter?" Key: the batter is poured "on top of the melted butter" (p2:4:2). Use Part B choices that do not repeat Part A.

### Ltexts-9: SHOULD. TS-CE: T1 calls a procedural step a cause
- **Where:** SK-TSCE-T1 (`T-TS.js:365`).
- **Evidence:** The first link, "Beavers chew through small trees" leading to "Beavers pile sticks...", is a sequence of steps, not cause and effect.
  - The `why` claims "Each event causes the next one."
  - In a lesson whose purpose is to separate cause and effect from sequence, this blurs the distinction.
- **Fix:** Start the chain at "Beavers pile sticks, rocks and mud across a stream" (dam). Add "The water backs up and spreads out" so there are still 4 steps. Every link then rests on a passage clue ("As a result", "since").

### Ltexts-10: MUST. TS-PS: the teaching puts "but" on the wrong side of the try
- **Where:** teach point 2 (`T-TS.js:437`); SK-TSPS-P2 clue (line 513).
- **Evidence:** Both say "The word but often comes **right before** a try that failed."
  - In every example and passage, "but" comes **after** the try and introduces the failure. In the lesson's own model: "They TRIED stacking them in a pile, BUT the pile fell over."
  - A child who follows the rule reads the sentence after "but" as the try. In SK-TSPS-T2 and P2 that sentence is the failure.
  - P2's clue then says "Find the first try, then check the sentence after it," which contradicts its own first sentence.
- **Fix:**
  - Teach point: "The word but often comes right after a try. It tells you the try did not work."
  - P2 clue: "In a problem-and-solution story, but often shows that a try failed. Find the first try, then check the sentence after it."

### Ltexts-11: SHOULD. TS-CC: test content was already taught in another lesson's Watch Me
- **Where:** SK-TSCC-T2 (`T-TS.js:772`) and passage p2 "Alligator or Crocodile?"; 3.T.SS.1.a W2 (`T-SS.js:74`).
- **Evidence:** 3.T.SS.1.a Watch Me models exactly "an alligator's snout is wide and rounded, while a crocodile's snout is long and pointed."
  - TS-CC's test asks this same contrast.
  - Both lessons are keyed to 3.T.SS.1.a, so a child who did SS.1.a can answer from memory, not from the text.
- **Fix:** Change SS.1.a W2 to a different pair, such as "Honeybees and wasps" or "Rabbits and hares". Leave the TS-CC passage alone.

### Ltexts-12: SHOULD. TS-CC: two test items are literal recall, not compare and contrast
- **Where:** SK-TSCC-T5 (`T-TS.js:811`, "What can you see when a crocodile shuts its mouth?"); SK-TSCC-T4.
- **Evidence:** T5 is a one-detail lookup. T4 asks for the single "Both" sentence in paragraph 1. Neither requires the structure skill (sorting alike and different) at test level. Practice P3 (sort into columns) does require it.
- **Fix:** Replace T5 with a match item: Alligator only / Crocodile only / Both, with rows for snout, visible teeth, salty water and nests on land. Keep T4.

### Ltexts-13: SHOULD. 3.T.T.3.c: the student never has to supply a reason
- **Where:** teach point 2 (`T-T34.js:201`); WRITE prompt; all items.
- **Evidence:** Official 3.T.T.3.c (p. 26): "state an opinion about the topic, **supply reasons** to support the opinion with linking words."
  - Teach point 2 says the Milestones task "usually gives you the reasons."
  - The rubric does say "provided reasons" (GM_Rubric_Gr3.txt:65-84). But that is how the test scores essays, not what the standard asks students to learn.
  - The WRITE task also supplies both reasons. No step asks the child to generate one, so the lesson teaches to the rubric, not the standard.
- **Fix:**
  - Keep the rubric note, and add one teach sentence: "When you write on your own, you think of the reasons yourself."
  - Change the WRITE prompt to "use these two reasons, or think of one of your own."
  - Optionally add a practice item: "Which is a reason that supports the opinion?"

### Ltexts-14: SHOULD. 3.T.RA.1.c: in T4, a careful reader can defend a second sentence
- **Where:** SK-RA1c-T4 (`T-RA.js:586`).
- **Evidence:** The key ("My aunt has a red bird feeder...") is clearly best. But the lesson's own teach points say "Leave out tiny details" and "Do not copy whole sentences."
  - The option "Many people hang feeders with sugar water to greet them" is a minor detail about people, nearly copied from Source 2, paragraph 4, sentence 3.
  - A child who applies the teach points could defend it.
  - The `why` only says "The other sentences tell facts from the two sources," which does not rule it out on the lesson's own criteria.
- **Fix:** Replace that option with a big-idea sentence in the student's own words (e.g., "Each fall, hummingbirds fly far south for the winter."). Then only the aunt sentence breaks a summary rule.

### Ltexts-15: SHOULD. 3.T.RA.1.c: the test passages repeat a 3.T.T.2.c practice set
- **Where:** RA.1.c test passages p3/p4 (hummingbirds) and SK-RA1c-T2 (`T-RA.js:562`); 3.T.T.2.c practice p1/p2 and SK-TT2c-P4.
- **Evidence:** The two pairs share most of their facts:
  - "less than a nickel"
  - named for the hum
  - hover, fly backward
  - nectar plus insects and spiders
  - eat many times a day because of energy
  - eat extra before the trip
  - cross the Gulf/sea without stopping
  - sugar-water feeders

  RA1c-T2 ("Why hummingbirds eat so much": add the pre-trip fact) is the same reasoning as TT2c-P4 (energy for flying plus energy for the trip). A child who did 3.T.T.2.c meets this test already rehearsed.
- **Fix:** Give RA.1.c a new test topic, for example two sources on sea turtles or on Georgia's state bird, the brown thrasher. Keep the item formats.

### Ltexts-16: SHOULD. 3.T.RA.1.c: T1 and T3 disagree about whether the nest is a "detail"
- **Where:** SK-RA1c-T1 (`T-RA.js:552`); SK-RA1c-T3 (line 573).
- **Evidence:** T1's `why` rejects "A hummingbird mother builds a nest about the size of a walnut shell" as "one detail." T3 then keys "A mother hummingbird builds a small, soft nest where she lays her eggs" as telling "an important idea... a big idea from one source." The two lessons in one check contradict each other. T3 is solvable only by eliminating the other options.
- **Fix:** In T3, replace option b with a sentence that is clearly a big idea from Source 2. For example: "Hummingbirds spend summer in Georgia, fly south in fall, and return in spring."

### Ltexts-17: SHOULD. 3.T.RA.2.b: credibility is judged only from obvious labels
- **Where:** all of SK-RA2b-P1-P5 and T1-T5.
- **Evidence:** Every item is a list in a stem. The credible option is always labelled with an expert-sounding name (scientist, museum, aquarium, college). The weak options are always an ad, a guess, a comic or a kid's story.
  - Official 3.T.RA.2.b (p. 27): "Determine what makes a source credible and relevant and identify examples."
  - Only T5 asks *what makes* a source weak, and it is the same "guess" template as P5.
  - No item shows a source excerpt whose wording the child must judge, and no item asks for a reason.
- **Fix:** Replace one test item with a short excerpt comparison. Two 2-sentence excerpts on one topic, one with checkable facts and a named expert, one with "everyone knows" and exaggeration. Ask "Which is more trustworthy, and why?" as an EBSR.

## MUST list
1. **Ltexts-3.** 3.T.SS.1.b, passage p2 sentence 8 (`T-SS.js:328`). A leftover planted error that contradicts the keys and `why`s of SK-SS1b-T2 and SK-SS1b-T5. Replace sentence 8 with an activity sentence.
2. **Ltexts-10.** TS-PS teach point 2 (`T-TS.js:437`) and the SK-TSPS-P2 clue (line 513). They say "but" comes right before the failed try, but it comes after the try and introduces the failure. Reword both.

## Weakest lessons
1. **TS-PS.** It has a wrong teaching rule (MUST).
2. **3.T.SS.1.b.** The test passage contradicts two keys (MUST).
3. **3.T.RA.1.c.** It has three SHOULDs: an answer a careful reader could defend in T4, contradictory "detail" feedback between T1 and T3, and test content rehearsed in 3.T.T.2.c.
4. **3.T.C.2.a.** It uses "point of view" in two senses, and part of its check is on grammatical person rather than perspective.
5. **TS-CC.** Two test items are recall, and its key contrast is pre-taught in 3.T.SS.1.a.
