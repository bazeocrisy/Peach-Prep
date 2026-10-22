# B1 review 1B: 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d

**Role:** independent content reviewer 1B (blind solver). I did not write these lessons. I read the author log (B1-b1a-author-log.md) only after my blind answers were saved.
**Scope:** `js/data/lessons/T-T1.js`, the 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d blocks: `core` (fifteen items each), `similar` (S01 to S03 each), `addons`, the new passages, `teach` (Learn It) and `learn` (Watch Me). I also read Together, `test` and `testB` to check separation.
**Focus:** the blind solve, instructional quality and grade suitability, every hint ladder read in order as a struggling child, `how` quality, the teaching sequence (Learn It, Watch Me, Together, the fifteen, the check), and passage repetition.
**Read-only:** I changed no lesson or code files. This is the only file I wrote. I ran no git.

## 1. Blind solve

- **Method.** All scripts and outputs are in `scratchpad/r1B/`.
  - `load.js` loads T-T1.js through a stub `PP.addLesson`.
  - `blind.js` prints, for each of the three lessons, every passage that a core or similar item uses, then every core item in set order (resolving `{ref}` from `practice`) and every similar item. Choices, targets, order steps, match rows and dropdown options are shuffled with seed 19790722. It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception` or `like`. The outputs are `blind-3.T.T.1.a.txt`, `blind-3.T.T.1.b.txt` and `blind-3.T.T.1.d.txt`. None of these items has a figure, so there was no alt text to print.
  - My answers are in `answers.json`, saved before any comparison.
  - `cmp.js` pulls the keys out of the loaded data and compares them (sets for ms, hot text and EBSR Part B; row maps for match).
- **Result: 54 of 54 agree (100%).** That is 45 core items and nine similar items.
- **Was it fully blind? Yes.** Before saving my answers, I had not opened the raw lesson source or the author log. The only thing I printed from the data beforehand was a list of item ids and types and the names of fields, with no item content. The refs (1.a P4 and P5; 1.b P7, P4 and P5; 1.d P4 and P5) were also unseen, so all 54 count as blind. B0-review-1, which I read as the model, covers only 3.T.T.1.c.
- **Close calls while solving** (each still defensible):
  - 1.a C09: "Look under the dictionary…" is tempting as "Starts the mystery"; the word "next" in the note settles it.
  - 1.b C09: "Bryce tells Ana she was right" is weaker proof than the frozen cube, but the only other option that fits the outcome is the plan itself.
  - 1.b C14: "figures out what is causing the problem" fits Malia better than Ana (NOTE-6).
  - 1.d C13: "A change in the season helps decide when the animals move" needs the reader to accept that Wanjiru's dry season sends the goats to a far water hole. Yes, it fits.
  - 1.d C14: "Kim's goat wins a blue ribbon" has pride in it, but no job she was trusted with.

## 2. Item checks (summary)

- **One defensible answer.** Every item has one. No key is wrong.
- **Alignment** with the official wording in `standards.js` (p. 32, matching `gadoe/standards-3-5.txt` lines 911–917):
  - **3.T.T.1.a**, "Explain how narrative techniques are used to present ideas, design texts, and convey information about characters, setting, and plot." This is covered well: dialogue, action and description, each tied to character, setting or plot, plus "design" items (C04, C10, C13, C14). C15 (show, don't tell) fits "convey information about characters".
  - **3.T.T.1.b**, "Explain how characters, setting, problem, and solution function in the plot." The items weight *function* over naming, as the matrix asks. Only P5 is a naming item. Proof of the solution has three items (C05, C09, C12) while the character role has two (C04, C08); see SHOULD-9.
  - **3.T.T.1.d**, "Compare and contrast two or more characters, settings, central messages, or events within texts across diverse cultures." All four elements appear, there is a three-text item (C13), and culture is treated as practices and meanings (C08, C10, C15), not only as places.
- **Points.** Every choose-two item is worth 2. Order follows SPEC §5: 1.b P4 (2 points) and C10 (1 point, exact only) are both valid. Totals: 1.a 22, 1.b 21, 1.d 24.
- **DOK.** No item is DOK 1. DOK 3 counts are four (1.a), five (1.b) and nine (1.d). These are generous in two places: 1.a C10 (find the clue) and 1.d C06 (an identical phrase in both first paragraphs) behave like DOK 2.
- **Formats and variety.** mc is used six times in each lesson (the maximum). There are at least four technology-enhanced formats per lesson. Task-verb minimums are met.
- **Grade 3.** The passages are 156–180 words and FK 1.8–3.4. Nothing is kindergarten-like. A few items are easy for grade 3: 1.a C03, 1.a C04, 1.b C06, 1.b C13 and 1.d C06 (SHOULD-2, SHOULD-8).
- **Passage-to-answer agreement.** Agrees everywhere.
- **Distinctness.** Under §6, every pair of items differs in at least two of text, component, task and domain. The nearest frames are 1.b C09 and C12 ("which shows the problem is (fully) solved"), and 1.b P4 and C10 (two order items with the same h2). Both pairs are discussed below.
- **Separation.** No core or similar item uses a check passage (check-content rule 8 passes), and no hint, `how` or `why` names a form A or form B character or key. Motif-level echoes are in SHOULD-12 and NOTE-3.
- **Gates.** `node verification/check-content.js --all` gives PASS with 0 failures. The only warnings in these lessons are the similar-coverage warnings (8, 10 and 7 uncovered core items) and two older ones (SK-TT1a-T5, SK-TT1d-P1). Together is P1–P3 (1.a), P1, P2, P6 and P3 (1.b), and P1–P3 (1.d).
- **Smoke test (port 8742).** For all three lessons, `PP_SKILLS.open(k,'try')` shows the three-set picker and the "Fifteen questions…" line. In set 1, all three hints step through to "No more hints" on every item, with no page errors.

## 3. Hint ladders (read in order, as a struggling child)

Each ladder was checked against the audit in 04 §4.5, applied cumulatively as in B0:
- (a) with only h1 and h2, and no choices, can the child write down the key?
- (b) after h1 to h3, is only the key left?
- (c) does any hint echo the key's words?

"Left" counts the options still standing after h2's range and h3's elimination.

### 3.T.T.1.a

| Item | Left after h3 | Result |
|---|---|---|
| P4 (ref, match) | h3 fills one row of four (allowed) | pass |
| P5 (ref, hot text) | 2 of 4 | pass (h3 removes the two Abuela lines, which h1 had already set aside) |
| C03 | 3 of 4 | pass, but h2 telegraphs the key (SHOULD-2) |
| C04 | 3 of 4 | pass |
| C05 | 3 of 4 | pass |
| C06 | 3 of 5 | pass. h3 rules out "tiptoed", which h2 (paragraph 1) had already excluded, so h3 does no work (SHOULD-6) |
| C07 | 3 of 4 (A); Part B neutral | pass |
| C08 | 3 of 4 | pass |
| **C09** | h2 alone solves it | **fail (MUST-1)** |
| C10 | 3 of 4 | h2 pairs the two pieces of evidence that make up the inference (SHOULD-3) |
| C11 | slot 1: 2 of 3; slot 2: effectively given | SHOULD-4 |
| **C12** | Part B: h2 leaves 1 | **fail (MUST-2)** |
| C13 | 3 of 4 | pass |
| **C14** | 3 of 5 for pick 2, one of them obviously false | **fail (MUST-3)** |
| C15 | 4 of 5 for pick 2 | pass |
| S01 | 3 of 4 | pass |
| S02 | 3 of 4 | pass |
| S03 | 3 of 4 | pass |

### 3.T.T.1.b

| Item | Left after h3 | Result |
|---|---|---|
| P7 (ref) | 3 of 4 | pass |
| **P4 (ref, order)** | h2 alone solves it | **fail (MUST-7)** |
| P5 (ref, match) | h3 fills one row of four | pass (but see SHOULD-10) |
| C04 | 3 of 4 | pass |
| **C05** | h1 states the key | **fail (MUST-4)** |
| C06 | 3 of 4; h2 lets the child write "the room is hot" | SHOULD-8 |
| C07 | 3 of 4 (A); 4 of 5 in Part B's range, pick 2 | pass |
| C08 | 3 of 5 | pass, but its `how` leaks C09 (MUST-6) |
| **C09** | h2 alone leaves exactly the two keys | **fail (MUST-5)** |
| **C10 (order)** | h2 and h3 together fix the whole order | **fail (MUST-7)** |
| C11 | slot 1: 2 of 3; slot 2 is a literal quote that h2 locates | SHOULD-8 |
| C12 | 3 of 5 | pass |
| C13 (match) | h3 fills one row of three | pass (an easy item, NOTE-7) |
| C14 | 3 of 4 | pass |
| C15 | 3 of 4 | pass, but the key echoes the title (SHOULD-11) |
| S01 | 3 of 4 | pass (but SHOULD-13) |
| S02 | 3 of 4; h1 and h2 let the child write the key | SHOULD-14 |
| S03 | 3 of 4 | pass |

### 3.T.T.1.d

| Item | Left after h3 | Result |
|---|---|---|
| **P4 (ref)** | Part B: h2 alone leaves exactly the two keys | **fail (MUST-8)** |
| P5 (ref) | 3 of 4 | pass |
| C03 | slot 1: 2 of 3; slot 2 pointed to its paragraph | pass (borderline) |
| C04 | 3 of 4 (A); Part B is the only option with a time word | pass (SHOULD-15) |
| C05 | 3 of 4 | pass |
| C06 | 3 of 4; h2 leads to an identical phrase in both first paragraphs | SHOULD-8 |
| C07 | 3 of 4 (A); h2 "find every question each child asks" is a model h2 | pass |
| C08 | h3 fills one row of four | pass |
| C09 | 3 of 4 | pass |
| C10 | 3 of 4 | pass; h3 is redundant with h2 (SHOULD-6) |
| C11 | slot 2: 2 of 3 | pass |
| **C12** | h2 and h3 leave exactly the two keys | **fail (MUST-9)** |
| C13 | 4 of 5 for pick 2 | pass |
| C14 | 3 of 4 | pass (but SHOULD-12) |
| C15 | 3 of 4 (A); Part B: h2's paragraph holds only the key | SHOULD-15 |
| S01 | 3 of 4; h2 (last sentences) lets the child write the key | SHOULD-14 |
| S02 | 3 of 4 | pass |
| S03 | 3 of 4 | pass |

## 4. Findings

### MUST

**MUST-1. 1.a C09: hint 2 gives a position rule that solves the match.**
- **Evidence.** The columns are Starts the mystery / Gives Nadia her next step / Solves the mystery. h2 says "Find where each detail comes in the story: near the start, in the middle or near the end." Start, middle and end map one to one onto the three columns. A child who only finds paragraph positions gets all four rows right (the note slides out in ¶2, the notes in ¶3 and ¶4, Mr. Webb in ¶6) without thinking about plot function. h3 then fills one more row.
- **Fix.** h2: "For each detail, ask what Nadia knows, or what she does, right after it." Keep h3 as written.

**MUST-2. 1.a C12: hint 2 points to the only Part B option in its paragraph, and describes it.**
- **Evidence.** h2: "Read paragraph 5. Then read paragraph 6 to see what Lily does and **what happens because of it**." Of the four Part B options, only the key ("After a while, the crab crept out…") is in paragraph 6. "What happens because of it" describes the key. With h1 and h2 and no choices, a child can write "the crab came out", which is both the Part B key and the second half of the Part A key.
- **Fix.** h2: "Read what Dad says. Then follow what Lily does after she hears him." Do not name paragraph 6 or say "what happens because of it". Optionally add a paragraph 6 distractor that is not a result, such as "She lay on her stomach and watched instead." It is an action, not the result the question asks for. That would need a recheck, because it is arguably a result of Dad's words; if in doubt, leave it out.

**MUST-3. 1.a C14: hints 1 and 2 name the two story parts the keys are about, and hint 3 is spent on a choice hint 2 already excluded.**
- **Evidence.**
  - h1, which should be strategy only and must not point to a location (§4.5 rule 1): "look at the same part of each story, **like the beginning or the ending**".
  - h2: "Reread the first paragraph and the last paragraph of each story."
  - The two keys are exactly "begins by describing the place" and "ends with an action that shows how the main character feels".
  - After h2, only C ("ends with a brand-new problem"), D and E are about beginnings or endings, and C is plainly false.
  - h3 rules out the "hides something" choice, which is about the middle and was already excluded. So the ladder effectively leaves the two keys and one weak distractor.
- **Fix.**
  - h1: "To compare how two stories are written, look at the same part in each one. A sentence must be true for both."
  - h2: "Take one sentence at a time. Check it against 'The Note in the Book', then against 'Tide Pool Morning'."
  - h3: rule out C with a reason ("Nadia gets a new book at the end, not a new problem") and leave A, B, D and E.

**MUST-4. 1.b C05: hint 1 states the key.**
- **Evidence.**
  - The item asks why the author includes "The footprints stopped right at the wire" (paragraph 5, near the end).
  - h1: "**Near the end of a story, an author often gives proof that the solution worked.**"
  - The key: "It **proves** that the wire kept the rabbits out of the garden."
  - With h1 and no choices, a child can write the key. The wording comes from Teach point 3, but a strategy reminder must not decide the item.
- **Fix.** h1: "Ask what this sentence tells you about the rabbits, and compare it with what the footprints showed before." Leave the "proof" idea to `how`.

**MUST-5. 1.b C09: hint 2 narrows the five choices to the two keys.**
- **Evidence.** h2: "Read the last two paragraphs. Choose two." Only C (the cube is still frozen at the bell, ¶6) and D (Bryce says she was right, ¶7) come from paragraphs 6 and 7. The other three come from ¶2, ¶3 and ¶5.
- **Fix.** h2: "Find the part of the story after the plan is carried out. Choose two." That keeps E (wrapping the cube, ¶5) in range, which is the misconception the item targets. h3 already rules out E, so change h3 to rule out A instead: "The windowsill cube is the first try, and it melts."

**MUST-6. 1.b set 2: C08's `how` and `why` give away one of C09's keys.**
- **Evidence.**
  - C08 (question 3) `how4` and `why` say "'You were right about the sock' comes after the idea worked".
  - C09 (question 4) asks for the TWO details that show the problem has been solved. "Bryce tells Ana that she was right about the sock" is one of its keys.
  - A child who presses Show me how on C08 arrives at C09 with half the answer labelled. This is the leak type of B0 MUST-3.
- **Fix.** In C08 `how4` and `why`, say only that the line "comes at the end of the story, after the cube is unwrapped, so it is not the idea itself". Do not say that it shows the idea worked.

**MUST-7. 1.b P4 and C10 (order): hint 2 turns ordering into sorting by paragraph number, and on C10 hint 3 fixes the only remaining pair.**
- **Evidence.**
  - Both items use the same h2: "Find each event in the story, and notice which paragraph it is in."
  - In P4, the four events are in ¶2, ¶3, ¶4 and ¶5, so h2 alone gives the full order.
  - In C10, the events are in ¶3, ¶5, ¶5 and ¶6. h3 ("The sock cannot go into the shady corner until the cube is inside it") settles the only tie. After h3, the child has nothing left to decide.
- **Fix.**
  - P4 h2: "Ask which event is the trouble, which one explains it, which one fixes it, and which one shows how it turned out."
  - C10 h2: "Ask which event is the try that fails, which ones carry out the new plan, and which one shows the result."
  - C10 h3: keep the sock reasoning but drop the paragraph cue, or replace it with "The windowsill cube is the try that fails, so it cannot come after the new plan."
  - Consider making C10 a 2-point item, so that a near miss earns partial credit, as P4 does.

**MUST-8. 1.d P4 (ref): hint 2 narrows Part B to exactly the two keys.**
- **Evidence.** h2: "Read the last paragraph of each story. Choose one sentence from each story for Part B." The Part B options from the last paragraphs are exactly the two keys ("Sharing his mangoes had filled his days with friends." and "It was the best ride of the day."). The other three are from ¶1–¶3. This addon is new in B1, so it is in scope.
- **Fix.** h2: "Find the part of each story after the main character changes. Choose one sentence from each story." Then add a distractor from that part that is not evidence of the lesson. For example, "Kofi smiled." is in ¶5 but shows only a feeling, so it is a real test; swap it in for "Flies buzzed around the tree."

**MUST-9. 1.d C12 (hot text, pick 2): hints 2 and 3 leave exactly the two keys.**
- **Evidence.**
  - h2: "Look in the middle of each story, **once the sheep are on the move**."
  - Of the six targets, "on the move" leaves out taking the ger apart (¶3), the hike up (¶3, before the sheep are found) and the grin (the end).
  - The targets left are "Bataa sat up tall in the saddle." and the two keys. h3 then rules out the saddle sentence.
  - The ladder therefore ends with only the keys standing.
- **Fix.**
  - h2: "In each story, find the part where the child is with the sheep."
  - h3: rule out the grin ("Grinning shows how Ingrid feels; it does not move any sheep").
  - That leaves the saddle and hike sentences as live distractors.

### SHOULD

**SHOULD-1. 1.a teaching sequence: Watch Me does not model the hardest tasks of the fifteen.**
- Teach (Learn It) mentions every task in one line each, which is good. But the three Watch Me examples model only these:
  - setting from description (also practised by Together P1);
  - character from words and actions (also practised by Together P3);
  - dialogue moves the plot.
- Nothing worked through models these, which carry three of the four DOK 3 items:
  - "why did the author include this detail" (C10, C13);
  - comparing how two texts are built (C14);
  - choosing a showing sentence (C04, C15).
- **Fix:** replace the first Watch Me (fog on the lake), which duplicates Together P1, with a short "why is this detail here?" example in which a describing detail turns out to be a clue or a signal. Add one sentence to its steps on checking a claim against both of two texts.

**SHOULD-2. 1.a C03 is a near-literal paraphrase, and h2 telegraphs it.**
- **Evidence:**
  - The stem quotes "a song she used to sing as a girl in Puerto Rico", and the key is "sharing a song from her own childhood". The item is a vocabulary step ("as a girl" means childhood).
  - h2 ("Think about when in her life Abuela first sang this song") lets the child write "when she was a girl" without the choices.
  - The distractors (guitar lessons, a TV song, a trip) are weak.
- **Fix:** ask what the detail shows about how Abuela *feels* about the song, or why the author includes it (she shares something she loves from her own childhood to make the dark night special). Use distractors drawn from the text: "She wants Mateo to stop being scared of storms", "She misses the show the storm took", "She is tired of the noise of the storm". Change h2 to "Reread paragraphs 3 and 4. What is Abuela trying to do for Mateo?"

**SHOULD-3. 1.a C10: hint 2 hands the child both halves of the inference.**
- **Evidence.** h2: "Reread the second note in paragraph 4. Then reread paragraph 5." The note ("the person who loves sharks the most") and the shark tie are the whole inference. With h1 and h2 the child can write "the tie shows he is the shark lover, so he wrote the notes". It is also why C10 reads as DOK 2, not 3.
- **Fix.** h2: "Reread paragraph 5. What does Nadia do right after she notices the tie?" That leaves the link to the note for the child to make.

**SHOULD-4. 1.a C11 (dropdown): hint 3 works on both slots, and practically completes slot 2.**
- **Evidence.**
  - h3 rules out "picky" for slot 1.
  - h3 then says "For the second blank, find what is on the table at the start and what is on it at the end". One muffin, then an empty table with SOLD OUT, is the key.
  - §4.5 rule 3 allows completing one of two slots, not both.
- **Fix:** keep the slot 1 elimination and drop the slot 2 sentence. Alternatively, keep a neutral slot 2 cue: "For the second blank, ask what changes after she pays."

**SHOULD-5. 1.b teaching sequence: proof that the problem is solved is assessed three times but modelled nowhere.**
- C05, C09 and C12 all ask for proof that the fix worked. Transfer of a solution's reason (C15) and comparing two solutions (C14) are also not modelled. Teach points 3 and 5 name these ideas in one line each.
- The Watch Me examples are:
  - a Somebody-Wanted-But-So-Then summary;
  - naming a setting, which repeats Together P1;
  - the campsite with no buns (setting and problem).
- **Fix:** replace the setting Watch Me (the snowy bus) with "How do you know the problem is fixed?" Use a short story with a first sign of progress and a later sign that it is fully fixed. Step through why the first is not enough.

**SHOULD-6. Some hint 3s do no work, because the choice they rule out was already outside hint 2's range.**
- These are 1.a C06 (tiptoed, outside ¶1), 1.a C14 (see MUST-3) and 1.d C10 (fireworks, after midnight, which h2 had already excluded).
- On these, the struggling child's third press gives nothing new.
- **Fix:** rule out a choice that is still in range. In 1.a C06, rule out "The school library was Nadia's favorite room": it tells how she feels about the room, not how it sounds. In 1.d C10, rule out "Grandpa wobbles on his chair": it happens, but it explains nothing.

**SHOULD-7. Similar bank coverage (as B0 RS-1).** 1.a has eight uncovered core items, 1.b ten and 1.d seven. The lead's warning-level decision applies. The worst gaps are on the hardest items:
- 1.a C10, C13 and C14 (design and compare);
- 1.b C05, C09, C12 and C15 (proof and transfer);
- 1.d C12, C13 and C15.
A later revision should add similar items for those first.

**SHOULD-8. Items whose answer is a literal lookup that hint 2 locates.**
- **1.b C06.** h2 ("picture what Room 6 is like") leads to "felt like an oven". The three distractors (dark, crowded, noisy) have no support at all, so the item is "find the one supported choice". **Fix:** use text-based distractors that misuse the setting:
  - "The class has only foil and a sock, so the teams have nothing cold to use" (supplies, not setting);
  - "The lunch bell is far away, so the teams must wait all day" (a stretch on time).
- **1.b C11, slot 2.** The key ("the peaches will get soft and spoil") is a near-verbatim quote of ¶2, which h2 names. **Fix:** h2 for blank 2: "Find what Grandpa is worried about." Do not give the paragraph.
- **1.d C06.** h2 ("Read the first paragraph of each story") lands on the identical phrase "the last night of the year" in both, and the second title also says it. **Fix:** h2: "Find when each story happens, and check that your answer fits both." Relabel the item DOK 1–2.

**SHOULD-9. 1.b C09 and C12 share a stem frame.** "Which TWO details show that the problem has been solved?" and "Which sentence best shows that the problem has been fully solved?" use the same frame and close key logic (an outcome rather than the plan). They differ in text, format and the "partial progress" twist, so they pass §6 by a narrow margin. With C05 also on proof, a third of the set is on one component, while the character role has two items. **Fix (optional):** turn C12 into an explain item, such as "Why is the blue truck not enough to show the problem is solved?", or move one proof item to the character's job (who causes, who helps).

**SHOULD-10. 1.b set 1: two refs contradict or leak into P5.**
- **Contradiction.** P7 (question 1) calls "the rabbits come into the garden at night" "that part of the setting". P5 (question 3) asks the child to sort "Rabbits squeeze under the gate at night." as the **Problem**. A child who has just been told that the night rabbits are setting will be tempted to put it under Setting.
- **Leak.** P4's `how4` and `why` (question 2) label the wire step "solution" ("problem, cause, solution, result"). That gives P5's Solution row.
- **Fix:**
  - Change the P5 row to "Rabbits eat half of the tomatoes" (rule 12 lets a reused item be revised).
  - End P4's `how4` at "…every tomato is still on its vine (paragraph 5)", without naming the story parts.

**SHOULD-11. 1.b C15: the key shares surface words with the passage title.** The misconception the item targets is "matching by a shared thing, like a sign". But the key, "Leo's lemonade **stand** is **hidden** behind his house…", shares *hidden* and *stand* with "The **Hidden** Peach **Stand**", so a surface matcher picks the key. **Fix:** "Leo sets up his lemonade table in the backyard, where nobody walks by, so he carries it out to the sidewalk."

**SHOULD-12. Passage repetition.**
- **1.b p1 and p4 are the same story.** In each:
  - a grandparent's Georgia produce is under threat (tomatoes, peaches);
  - a first fix fails or is missing;
  - a child works out the cause and fixes it;
  - the grandparent rewards the child with the produce and praise ("the first red tomato" / "the last two peaches. 'Best helpers in Georgia'").
- **Selling food appears three times in 1.b's fifteen:** the peach stand, the taco truck (C04) and the lemonade stand (C15).
- **The child reads 1.b p1 eight times** (four Together items and four core items). The author log flags this.
- **1.d's new pairs end with a grown-up affirming the child.** Three of the four new passages do it: "It is your family's bell, too", "Good work, herder" and "You found the bell sheep all by yourself". The 1.d form A key is "Each one praises the main character near the end". C14's h2 ("look at what a grown-up says to the child…") rehearses exactly that move.
- **Fix:**
  - Give 1.b p4 a non-family helper and a non-produce reward, or recast C04 and C15 away from food stands.
  - In 1.d, end p8 on Ingrid's own action (for example, closing the gate behind the last sheep) instead of Grandma's praise.
  - Change C14's h2 to "Ask what each child is given to do, and how the child feels after doing it."

**SHOULD-13. 1.b S01 copies C04's choice set.** S01 has the same four roles as C04, in near-identical words (main character, causes the problem, a helper who makes the solution possible, part of the setting). The key wording is also nearly the same ("He is a helper (whose actions) make(s) the solution possible"). A child who has just pressed Show me how on C04 can answer S01 from memory, which defeats its purpose as a fresh try. **Fix:** keep the component but change the role, or the wording and the distractors. For example, make Mr. Cole the one who *causes* the problem, or have S01 ask "Why is Mr. Cole important to how the story ends?"

**SHOULD-14. Similar-item hint 2s that let the child write the key.**
- **1.b S02.** h2 ("Find Mia's first fix. What happens to that boat?") leads to "it tipped, too", which is the key.
- **1.d S01.** h2 ("Read the last sentence of each story") yields "it flies away / they keep it", which is the key.
- **Fix:**
  - 1.b S02 h2: "Find the problem and each try."
  - 1.d S01 h2: "Find what each child does with the animal."

**SHOULD-15. EBSR Part B options that hint 2 or a single feature gives away.**
- **1.d C15.** h2 names "paragraph 3 of Bataa's story". The Part B key is the only option from ¶3. This is less severe than MUST-2: ¶3 has two sentences, so the audit's part (a) is not quite met.
  - **Fix:** h2: "Read the first paragraph of each story, and find where Bataa's family packs up."
  - Or add the other ¶3 sentence ("The whole family took the ger apart.") as an option and pick 2. It is also correct, so this would make Part B a "choose TWO", which is fine.
- **1.d C04.** The Part B key is the only option that has a time word, so Part B tests nothing. The author log asks about this.
  - **Fix:** replace "Kofi smiled." with "That afternoon, his neighbor Ama brought him a bowl of warm groundnut soup." It has a time word but, alone, does not show more than one day.
  - Or use "In the hot season, it grew more fruit than anyone could count." It names a season, not a span of days.

### NOTE

1. **Facts checked** (sources below).
   - **Confirmed:**
     - Danish New Year's Eve: jumping off a chair at midnight, and fireworks.
     - Toshikoshi soba: the long noodles stand for long life. Joya no kane: some temples let visitors take turns striking the bell.
     - Norway: sheep are gathered from mountain pasture in early September (sauesanking), and sheep on summer grazing wear bells, now including e-bells.
     - The Mongolian ger: a wooden frame with felt covers, made to be taken apart and moved. Herders move between seasonal camps, including in spring, and today often use trucks.
     - Fort Valley, Georgia, is the "Peach Capital".
   - **Not separately fetched:** groundnut soup in Ghana, rangoli at Diwali and the welcome lei. These are standard knowledge and pre-existing or Watch Me content.
2. **Tybee Island "rocky pool".** Tybee's beaches are sand. Its tide pools are on sandbars, and the hard surfaces are buried groins and pier pilings (Sherpa Guides). "A rocky pool no bigger than a bathtub" with a rock the crab hides under is a small stretch. **Optional fix:** "a tide pool on the sandbar", with the crab tucked under "a clump of oyster shells". The items do not depend on rock: change "rock" to "shell clump" in p5 ¶4–¶5, C12 and their `how`.
3. **Motif echoes of other lessons' check passages** (not key facts, so not leaks):
   - Animals found by their bells in 1.d p8, and goats returning with jingling bells in 1.a form B, "The Open Gate".
   - Sitting still so an animal comes out in 1.a p5, and Ravi sitting still for the kingfisher in 1.d form A.
   - A gate keeping animals out in 1.b p1, and a gate left open in 1.a form B.
4. **Names reused across nearby lessons:**
   - Jada (1.a C15, 1.b p1);
   - Leo (1.b Teach example and 1.b C15; also 1.c);
   - Mateo (1.a p1, 1.d form A);
   - Mia (1.b S02, 1.d S02).
   It is harmless, but distinct names help children keep stories apart.
5. **Grandparents** guide the child in 1.a p1, 1.b p1 and p4, 1.d p5, p6 and p8, and the 1.a form B story. Consider one sibling, coach or neighbour in a later revision.
6. **1.b C14 key wording.** "A child figures out what is causing the problem, then fixes that cause" fits Malia exactly. It fits Ana only if heat counts as "the cause" and the wool as the fix for heat. That is defensible, as the `how` says. A tighter wording would be: "In both, a child works out why the first try failed and picks a fix that deals with that reason."
7. **1.b C13 is easy.** Each setting maps to its problem by a single word (couch and heavy; no rain and water; 7:30 and on time). Its own misconception line warns against matching by one word. It is acceptable for grade 3, but one less obvious row would raise it, such as "a campsite on an island where the ferry stops at dark".
8. **Chains within sets that I accept.**
   - 1.d C07 → C10. C07's keys are the "why" questions, and C10's key is Mom's answer. No hint, `how` or `why` in C07 states that answer. This answers the author's question 6.
   - 1.a C13 → C14. C13's h2 compares p5's first and last paragraphs, which nudges toward C14's "begins by describing the place" for one of the two stories.
   - 1.d C03 → P4 via Previous. C03's stem says "Both main characters decide to share".
   - 1.b C11 → C14 → C15, as the author log describes.
   None of these gives a key.
9. **`how` quality.** I read all 54 `how` lists. Every one is accurate and has two to four steps. Every one ends with the answer and a reason, and nearly all add a misconception line taken from the lesson's `coach.mixup` or from the item. The only leak is MUST-6. The only position-like wording is 1.a P4's "So: dialogue, action, description, action", which is correct because match rows are not shuffled (items.js renders `rows` in order).
10. **`like` mappings** are honest: each similar item really mirrors the component and task of the core items it names. The one stretch is 1.a S03 → C09: S03 is single-detail mc, while C09 is a four-row match, though the component (plot function) is the same.
11. **Grade 3 vocabulary** is supported where needed: *ewe*, *soba*, *ger* and *dialogue* are all glossed in the text or in Teach.

## 5. Teaching sequence (Learn It → Watch Me → Together → the fifteen → check)

| Lesson | Learn It | Watch Me | Together | Fifteen | Check | Verdict |
|---|---|---|---|---|---|---|
| 1.a | Five points cover every task, including show versus tell, design and comparing | Three examples: setting, character, plot. They do not cover design or comparing | P1–P3: setting, feeling from the body, words show character | Adds plot function, design and comparing | Forms A and B: feelings, setting, words moving the plot | Ramp is sound. Watch Me misses the DOK 3 tasks (SHOULD-1) |
| 1.b | Five points: character jobs, proof, root cause | SWBST, naming a setting, setting and problem | P1, P2, P6, P3: naming setting, problem, clue word, solution sentence | Mostly function; proof assessed three times | Form A: character, problem, solution | Watch Me 2 duplicates Together P1, and proof is not modelled (SHOULD-5) |
| 1.d | Five points: alike and different, same parts, customs mean, three stories | Three examples: characters and settings, shared lesson, customs | P1–P3: alike, settings different, match | Adds time span, three texts, way of life, lesson transfer | Form A: praise, settings, message, problems | Best of the three. Time span (C04) and lesson transfer (C14) are not modelled; one sentence in Teach point 2 ("when includes how long the story lasts") would close C04 |

## 6. Sources

- [VisitDenmark, New Year's Eve](https://www.visitdenmark.com/denmark/things-do/winter/new-years-eve): jumping off a chair at midnight, and fireworks.
- [Keihan, New Year in Japan](https://www.keihan.co.jp/travel/en/sightseeing/seasonal-events/new-year/index.html): "The long noodles represent the wish to live a long life"; "Some temples allow visitors to take turns striking the bell."
- [Norwegian Language Blog, Sauesanking](https://blogs.transparent.com/norwegian/sauesanking/): sheep gathered in early September.
- [NIBIO, E-bells for insight into outfield grazing](https://nibio.no/en/about-eng/research-matters/division-of-survey-and-statistics/research-matters-survey-and-statistics-2023/e-bells-for-insight-into-outfield-grazing): bells on sheep on mountain pasture.
- [UNESCO, Traditional craftsmanship of the Mongol Ger](https://ich.unesco.org/en/RL/traditional-craftsmanship-of-the-mongol-ger-and-its-associated-customs-00872): wooden frame and felt covers, made to be dismantled and carried.
- [Mongolia Trips, Nomadic transhumance](https://www.mongolia-trips.com/tour/nomadic-transhumance-the-journey-to-summer-pastures): seasonal migration from the spring camp, gers taken down, a truck used.
- [Sherpa Guides, Tybee Island South Beach](https://sherpaguides.com/georgia/coast/northern_coast/tybee_south_beach.html): sand bars, buried groins and pilings, crabs at low tide.
- [Crazy Family Adventure, Low tide at Tybee](https://www.crazyfamilyadventure.com/low-tide-family-fun-at-tybee-island): tide pools on the sandbar.
- [Islands.com, Fort Valley "Peach Capital of the World"](https://www.islands.com/1969767/fort-valley-georgia-peach-capital-world-getaway-orchards-scenic-farms).
- Blocked: en.wikipedia.org/wiki/Yurt (the permission request timed out). The UNESCO page covers the same fact.

## 7. Verdicts

All 54 keys are confirmed by a fully blind solve (54 of 54). The passages are original and suitable for grade 3, and the cultural facts check out. The items align with the official wording, and the points are correct. Every MUST is a text-only fix to a hint, a `how` or a `why`. No key changes, and no item needs re-solving after the fixes. One exception: if the optional new distractors in MUST-2, MUST-8 or SHOULD-15 are added, those items need a recheck.

| Lesson | Verdict | Blocking findings |
|---|---|---|
| **3.T.T.1.a** | **CHANGES REQUIRED** | MUST-1 (C09), MUST-2 (C12), MUST-3 (C14) |
| **3.T.T.1.b** | **CHANGES REQUIRED** | MUST-4 (C05), MUST-5 (C09), MUST-6 (C08 → C09 leak), MUST-7 (P4, C10) |
| **3.T.T.1.d** | **CHANGES REQUIRED** | MUST-8 (P4), MUST-9 (C12) |

After the fixes, a hint-only re-review is enough. It should:
- rerun the cumulative ladder audit on every changed item;
- rerun the same-set leakage check on 1.b set 1 and set 2;
- re-solve blind any item whose choices change.
The SHOULDs, especially SHOULD-1, SHOULD-5 and SHOULD-12, are strongly recommended but do not block release.
