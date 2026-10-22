# B1 re-review (b1a): 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d

**Role:** independent re-reviewer. I did not write these lessons and I did not write either earlier review (B1-review-1A.md, B1-review-1B.md).
**Scope:** `js/data/lessons/T-T1.js`, the 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d blocks: core, similar, addons (Together), teach, learn, and the passages they use. I also read `test` and `testB` to check separation. 3.T.T.1.c was not touched or reviewed.
**Rules applied:** REVIEWER-BRIEF.md, CONTENT-BRIEF.md, 04-content-plan.md §4 and §6, and the "Rule added after the B1 reviews" section of AUTHOR-BRIEF.md.
**Read-only:** this is the only file I wrote in the repo. My scratch files are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1a/`. I ran no git and started no server.
**Order of work:** blind re-solve, saved; then the earlier reviews; then the full lesson data; then steps 2 and 3; then the author log's §8 "Fixes after B1 review", read last.

## 1. Blind re-solve

**Method**
- `rr-b1a/load.js` loads T-T1.js through a stub `PP.addLesson`.
- Before solving, `struct.js` and `keys.js` printed only item ids, types, passage ids and titles, and field *names*. They printed no item content.
- `rr-b1a/blind.js` prints only the requested items and the passages they use, with every `{ref}` resolved from `practice`.
  - Choices, Part A and Part B choices, hot-text targets, order steps, match rows and dropdown options are shuffled with seed 777123.
  - It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception`.
  - None of these items has a figure.
- Output: `rr-b1a/blind.txt`. My answers are in `rr-b1a/answers.json` (copied to `answers.saved.json`), and my close calls are in `rr-b1a/solve-notes.txt`. Both were saved before any key was extracted.
- `rr-b1a/cmp.js` extracts the keys from the loaded data and compares. Each item is scored on its full key: both EBSR parts, every slot, every match row and the full order.

**Items re-solved (29)**
- 1.a: C03, C12, C13, C15.
- 1.b: C04, C06, C09–C15, P5, S01. Every item on the new p4 "The Back Row" (C11, C12, C14, C15) is in that list.
- 1.d: C04, C05, C06, C12, P3, P4, plus every item on p5–p8 (C06–C15).

**Result: 29 of 29 agree (100%).**

**How blind was it?** Fully blind for keys.
- I had not opened the lesson source, the earlier reviews or the author log before saving my answers.
- What I did know beforehand:
  - the item ids, formats and passage titles (from the structure print and from the assignment message, which named "The Back Row");
  - that these items had been changed after review, which tells me where to look harder but not what the answers are.
- Limit: I re-solved only the 29 items listed, not all 54. The other 25 rest on the two earlier fully blind solves (54 of 54 each).

**Close calls while solving** (each key is still defensible):
- **1.b C04.** "He is the main character, because he is the one who fixes the problem" is arguable. In this stem, Ms. Lin does nothing and Amir is the only character who acts (SHOULD-B1).
- **1.b C09.** "At the lunch bell, the other teams have only cups of water" is a good new distractor. I rejected it because it shows contrast, not that this team's problem is solved.
- **1.d P4 Part B.** "Lucy pulled the sled over to her friends" (she shares) against "It was the best ride of the day" (life gets better). The key is defensible, because the lesson asks for "better".
- **1.d C12.** "One by one, the other sheep followed." is a good near miss.

## 2. Earlier MUSTs and SHOULDs: are they fixed?

The verdicts below come from the lesson data, not from the author's account.

### MUSTs

| Earlier finding | Item | Status |
|---|---|---|
| 1A MUST-A1 | 1.a P5 h2/h3 | **Changed as 1A prescribed, but the ladder still ends on the key.** See MUST-A1 below |
| 1A MUST-A2, 1B MUST-2 | 1.a C12 | Fixed. h2 names no paragraph and does not describe the key; h3 rules out one choice per part |
| 1B MUST-1 | 1.a C09 | Fixed. h2 no longer maps start/middle/end onto the columns; h3 settles one row |
| 1B MUST-3, 1A SHOULD-A4 | 1.a C14 | Fixed. h1 names no location; h3 rules out a choice that is still in range |
| 1A MUST-B1, 1B MUST-5 | 1.b C09 | Fixed. The h2 range now holds the wrap step and the other teams' water, and three choices stay live after h3 |
| 1A MUST-B2, 1B MUST-7 | 1.b C10, P4 | Fixed. Both h2s are now functional, and each h3 places only the first step. C10 has five steps and is worth 2 points |
| 1A MUST-B3 | 1.b P5 vs Together | **Not fixed.** The rows were reworded, but they are still the setting and problem that Together answered. See MUST-B1 below |
| 1B MUST-4 | 1.b C05 | Fixed. h1 no longer states "proof" |
| 1B MUST-6 | 1.b C08 → C09 | Fixed. The `how4` and `why` no longer say the line shows that the idea worked |
| 1A MUST-D1, 1B MUST-9 | 1.d C12 | Fixed. Two sheep-acting targets were added. There is a residual h3 issue (SHOULD-D3) |
| 1A MUST-D2 | 1.d C15 | Fixed. h2 no longer names ¶3. The new h2 has its own problem (SHOULD-D2) |
| 1A MUST-D3, 1B MUST-8 | 1.d P4 | **h2 fixed, but the giveaway moved to h1 and `clue`.** See MUST-D1 below |
| 1A MUST-D4 | 1.d Together P3 vs P5 | Fixed. P3's rows no longer answer P5 |

### SHOULDs

**3.T.T.1.a**
- **Fixed:**
  - 1A A1 / 1B 2 (C03: the prompt is unquoted and the distractors now come from the text);
  - 1A A2 / 1B 4 (C11: h3 now settles only blank 1);
  - 1A A3 (C13: a new crab distractor, and h3 ends neutrally);
  - 1A A5 (S01 `like`);
  - 1B 1 (Watch Me 1 now models "why is this detail here?" and comparing two texts);
  - 1B 6 (C06 h3 now rules out a choice that is still in range).
- **Changed but not cleared:** 1B 3 (C10). The h2 fix is good, but h3 now supplies the same inference link and removes the only strong distractor (SHOULD-A1).

**3.T.T.1.b**
- **Fixed:**
  - 1A B1 / 1B 13 (S01 is a new frame);
  - 1A B2 / 1B 11 (C15 title echo, gone with the new passage);
  - 1A B3 / 1B 9 (the new C12 is a character-function item);
  - 1A B4 / 1B 8 (C06 distractors);
  - 1A B5 (C04 distractor and teach point 1);
  - 1B 5 (Watch Me 2 now models proof);
  - 1B 10 (the P7/P5 contradiction and the P4 `how` leak);
  - 1B 12 (p4 is a new story with no family and no produce; there are no food stands);
  - 1B 14 (S02).
- **Carried over:** 1B 8, C11 slot 2. The passage is new, but the new C11 slot 2 has the same flaw: a near-verbatim key that h2 locates (MUST-B2).
- **Partly addressed:** 1B 5 asked for transfer and solution comparison to be modelled as well; only proof was added (SHOULD-B3).

**3.T.T.1.d**
- **Fixed:**
  - 1A D1 (C11 h3; there is a residual issue in SHOULD-D4);
  - 1A D2 / 1B 15 (C04 Part B now has a time-bearing distractor);
  - 1A D3 (C08 h2);
  - 1A D4 (C05 distractors);
  - 1A D5 (teach point 2 now covers "when" and Watch Me 1 models it);
  - 1B 6 (C10 h3);
  - 1B 8 (C06 h2);
  - 1B 12 (the endings no longer rehearse form A T1);
  - 1B 14 (S01 h2);
  - 1B 15 (C15 h2).
- **The 1B 12 fix created a new issue:** the new C14 h2 states the lesson (SHOULD-D1).

**Not addressed (warning level, the lead's call as in B0):** 1B SHOULD-7, the similar bank coverage. 1.a has 8 uncovered core items, 1.b has 10 and 1.d has 7.

## 3. Checks across the three lessons

- **Keys.** Every key is defensible, with one answer per item (§1).
- **Alignment with the official wording** (standards.js p. 32) is unchanged from B1 and still holds.
  - 1.b's *characters* component is no longer thin: C04, C12 and S01 cover it.
- **Points.** Every choose-two item is worth 2, and every order item with four or more steps is worth 2 (1.b P4 and C10). There is no DOK 1 in core. Script check:

  | Lesson | Core points | DOK 3 items | mc items |
  |---|---|---|---|
  | 1.a | 22 | 4 | 6 |
  | 1.b | 23 | 5 | 6 |
  | 1.d | 24 | 9 | 6 |

- **Gates.**
  - `node verification/check-content.js --all`: PASS, 0 failures. In these lessons the warnings are only similar-coverage warnings and the two older ones (SK-TT1a-T5, SK-TT1d-P1).
  - `python3 verification/readability.py`: the new 1.b p4 is 178 words, FK 2.0. The revised 1.a p5 is 171 words, FK 1.9. p6–p8 in 1.d are 158–176 words, FK 2.6–3.4. All are in range.
- **Separation from form A and form B.**
  - No core or similar item uses a check passage.
  - A six-word n-gram scan (`rr-b1a/ngram.js`) checked every core, similar, Together, teach and learn string against every form A and form B string and check passage in js/data/lessons. Its only hits are shared directions ("This question has two parts…", "Match each detail to the story it is true for", "Choose the sentence in the passage") and shared strategy wording ("Description helps you picture…").
  - The scan found no shared fact or key.
  - The form A T1 pattern in 1.d ("praises the main character near the end") is gone from p6–p8.
- **Facts.** The revised p5 is now "a tide pool on the sandbar" with oyster shells, which fits Tybee:
  - [crazyfamilyadventure.com](https://www.crazyfamilyadventure.com/low-tide-family-fun-at-tybee-island): "tide pools that were in the sandbar area";
  - [Sherpa Guides](https://sherpaguides.com/georgia/coast/northern_coast/tybee_south_beach.html): sandbars at low tide with "hermit, blue, and spider crabs", and oysters on the pier supports.
  - The new 1.b p4 makes no factual claims.
  - The cultural facts in 1.d p5–p8 are unchanged from B1 and were verified there with sources (1A §5).

## 4. Findings: 3.T.T.1.a

### MUST

**MUST-A1. Together/core 1.2, P5 (hot text, addon ladder): h2 plus h3 leave only the key.**
- **Evidence.**
  - There are four targets: two Abuela lines (¶3:2, ¶3:3), "Abuela!" (¶2:1) and the key (¶6:2).
  - h2 says: "First find the lines that Mateo says. For each one, ask how he feels at that moment." That leaves two targets.
  - h3 then sets up "Abuela!" for rejection: "'Abuela!' is Mateo calling out right after the room goes dark. Ask how he feels then…" After h3, only the key is left.
  - This is 1A's own prescribed fix. The cause is structural: Mateo has only two lines of dialogue in p1.
- **Fix.** Stop h2 from narrowing to Mateo's lines, and let h3 remove one Abuela line instead.
  - h2: "Read the lines in paragraphs 2, 3 and 6. For each one, ask who says it and how that person feels."
  - h3: "'Well, the storm took our show' is Abuela talking, so it tells how she feels, not Mateo. Check each line that is left."
  - Three targets then stay live, and the child still has to judge "Abuela!" against the key.

### SHOULD

**SHOULD-A1. C10 (core 2.5): h3 removes the only strong distractor and supplies the inference.**
- **Evidence.**
  - h3 rules out "It shows what Mr. Webb wears to work every single day". That is the strongest distractor and the item's named misconception.
  - h3 then adds: "Then think back to what the second note told Nadia to look for." That is the second half of the inference, the half 1B SHOULD-3 removed from h2.
  - The two choices left ("trying to hide from Nadia", "Caleb likes trains") can be dismissed without reading, so the item is effectively settled.
- **Fix.** Either change is enough:
  - h3 rules out "hide" ("Mr. Webb grins and answers Nadia's question, so he is not hiding") and ends neutrally ("Ask what the tie has to do with the notes");
  - or replace "Caleb likes trains" with a misreading the text invites, such as "It shows that Mr. Webb likes the same books Nadia likes".
- This is the one of the three weak-distractor items that needs a change (§7.2).

**SHOULD-A2. Together P1 labels core 1.1's description row** (new rule: Together must not pre-answer set 1).
- **Evidence.**
  - Together P1 asks "What does the **description** in paragraph 1 help the reader understand?", and its h1 tells the child to look at "the sound words and the weather words".
  - Core 1.1 (P4, match) has one Description row: "Thunder boomed over Atlanta, and rain beat against the apartment windows." That is the first sentence of paragraph 1.
  - So Together has already labelled the only Description row. The other three rows sort by quotation marks or "someone doing something".
- **Fix.** Reword Together P1 to "What do the details in paragraph 1 help the reader understand?", and change its h1 to "Ask what the sound words and the weather words help you picture." Keep the term "description" out of it.

**SHOULD-A3. Together P2 h2 isolates both Part B keys** (new rule on hint 2 and the Part B location).
- **Evidence.** h2 says "Read paragraph 2. Choose two sentences for Part B." The only Part B choices from ¶2 are the two keys. The distractors come from ¶1:3, ¶5:1 and ¶5:2. The brief's literal "at least two Part B choices" is met, but its first clause ("at least one wrong choice also comes from that paragraph") is not.
- **Fix.** h2: "Read paragraphs 1 and 2. Choose two sentences for Part B." That brings in "The whole room went dark." (¶1:3), the setting-not-feeling distractor the misconception names.

### NOTE

1. **C03.** h3 rules out "homesick", the best distractor. The two left (she misses the TV show; louder than the thunder) are hooked in the text, so three choices stay live and the item passes. h2's "Then ask who is listening now" nudges toward "with Mateo", but only mildly.
2. **C13.** h3's closing question ("What does the tide coming back mean for the beach?") settles the first step (the tide is coming in). The child still has to infer that the visit is ending. That is within the new limit of one step.
3. **Weak distractors on C05 and C07** (Step 3): no change is needed. See §7.2.
4. **Within-set chains I accept.** C09's R2 row ("Ask the person who loves sharks the most") feeds C10's inference. C13's `how3` ("Lily races the water") touches C14's ending key. Neither states a later key.
5. **Teaching.** Learn It and Watch Me now model every task the fifteen ask for (§7.3).

## 5. Findings: 3.T.T.1.b

### MUST

**MUST-B1. Core 1.3, P5 (match), is still answered by Together, and its Problem row contradicts the lesson's own coaching** (1A MUST-B3; new rule: Together must not give the same setting or problem answers).
- **Evidence.**
  - **Setting row**, "summer mornings in Macon". Together P1 (setting) has already been walked through in its `how1`: "Paragraph 1 says Grandma Bea grows tomatoes behind her house in Macon."
  - **Problem row**, "Half of the little tomatoes are gone." Together P2 (problem) has already been walked through: its `how1` says "half the tomatoes are gone", and its key is "Rabbits are eating the tomatoes at night".
  - **Character rows** (Jada, Grandma Bea) are naming only.
  - **The contradiction.** Together P2's misconception and the lesson's `coach.mixup` both say "A common mix-up is naming the first thing that happens. The problem is what the rest of the story is about fixing." P5 then scores "Half of the little tomatoes are gone", the first thing that goes wrong, as the Problem. A child who learned Together's lesson is pulled toward Setting or toward leaving the row unsorted.
  - The author log (§8.1) says "No row is now answered by Together P1 to P3". That is true of the wording, not of the answers.
  - The result is that core 1.3 is recall plus a naming task, in a lesson whose official verb is "explain how … function".
- **Fix (needs a blind re-solve).** Either option works:
  - Replace core 1.3 with a function item on p1 that Together does not touch. For example: "Why does the author say the dirt is *soft* in paragraph 2?" Key: soft dirt holds footprints, which show who has been taking the tomatoes. This is a setting detail that enables the clue, and it is distinct from P7 (time of day) and C05 (proof).
  - Or move P5 into Together and add the replacement to core.

**MUST-B2. C11 (core 3.1, dropdown): the hints settle both blanks, and blank 2's h2 lands on the only sentence that holds its key** (new hint 2 and hint 3 rules; this repeats 1B SHOULD-8 on the new passage).
- **Evidence.**
  - Blank 2's key, "the play is that same night", is a near-verbatim copy of ¶3:1, "The play was that same night".
  - h2 for blank 2 says "ask what is happening later that day", which leads only to that sentence. Neither distractor ("the fans are about to break down", "the first graders have to go home soon") comes from the text.
  - h3 rules out "the actors do not know their lines yet" for blank 1. That leaves the key against "the first graders keep talking during the play", which has no support.
  - So h2 settles blank 2 and h3 settles blank 1: the whole item.
- **Fix.** Both changes are needed:
  - Replace blank 1's unsupported distractor with one the text invites: "the actors are not shouting loudly enough". It is tempting after ¶3:2 and refuted by ¶3:3 and ¶4:3. h3 can then rule out "do not know their lines" without settling blank 1.
  - Make h2's blank-2 clause neutral: "For the second blank, look for a time clue in the story." The story has several ("At the last practice", "that same night", "That night").

### SHOULD

**SHOULD-B1. C04 (core 1.4): the stem does not establish who the main character is, so the named misconception is arguable** (new rule: definitions must match the edge cases).
- **Evidence.**
  - Teach defines the main character as "the one the story is mostly about".
  - In the stem, Ms. Lin only "had lost her voice". The children grow restless, and Amir is the only character who acts.
  - `how4` rests on "The story is about Ms. Lin's story hour", but that is not shown.
  - My blind solve flagged the distractor "He is the main character, because he is the one who fixes the problem" as defensible.
  - Compare 1.b C12 (Malia finds the cause, Mr. Oduya helps) and S01 (Ms. Reyes tries, Mr. Cole helps): in both, the main character acts first, so the edge case is clean there.
- **Fix.** Give Ms. Lin a goal and a try. For example: "Ms. Lin wanted to read the new dragon book to the children, but when she opened it, only a whisper came out." Keep the rest of the stem.

**SHOULD-B2. S01 (similar): h3 removes the only plausible distractor.**
- **Evidence.** h3 rules out "He is the one who filled the bag too full". The two left ("shows the reader how messy the park is", "explains why the leaves fell off the trees") have no hook in the stem.
- **Fix.** Either change is enough:
  - Have h3 rule out "messy park" instead.
  - Replace one weak distractor with a role misconception, such as "He is the main character, because the bag gets into the truck when he helps."

**SHOULD-B3. Teaching: transfer of a solution's reason (C15) and comparing two solutions (C14) are still not modelled** (carried over from 1B SHOULD-5).
- **Evidence.**
  - Watch Me now models proof (the newspaper and the sprinkler), which is good.
  - Teach point 5 ends "ask what is really causing the problem", which supports C11 and C14 in part.
  - Nothing models "find a new story whose fix works for the same reason" (C15, DOK 3).
- **Fix** (within the limits): add one sentence to teach point 5: "To tell whether two fixes work for the same reason, say what each fix changes, not what it looks like." This is non-blocking.

### NOTE

1. **1.b p1 is read eight times** (Step 3). My call is in §7.1. It is acceptable once MUST-B1 is fixed.
2. **C04 and C12 share a prompt.** Both ask "What part does X play in the plot?", with the same distractor frame (main character because…, causes the problem by…). They differ in text, format and domain, so they pass §6. Consider rewording one prompt, for example C12: "Why does the author include Mr. Oduya in the story?". S01 already uses that frame, so pick a different one if you change C12.
3. **C11 blank 2 and form A T2** share reasoning (a deadline makes time short: "the play is that same night" and "the book is due on Friday"). That is skill rehearsal, not a shared fact.
4. **Set 3 chains.** C11's and C12's `how` say that Malia finds the cause, which supplies half of C14's reasoning. This is inherent to the shared passage, as accepted in B1.
5. **New p4 "The Back Row"** suits grade 3. It has a non-family helper and no reward of produce. One defensible fix depends on the cause (moving away from the fans). C12's Part B meets the new rule: h2 names ¶5, and ¶5 holds two Part B choices.
6. **C10** is now five steps and 2 points. Its h3 places the first step only. Pass.
7. **C09** after the fix: three of five choices stay live after h3. Pass.

## 6. Findings: 3.T.T.1.d

### MUST

**MUST-D1. P4 (core 1.1, addon ladder): the Part B giveaway moved from h2 to h1 and `clue`** (1A MUST-D3 / 1B MUST-8 not cleared; §4.5 rule 1: h1 must not point to a location).
- **Evidence.**
  - h1 and `clue` both say: "Look at how each story ends, after the main character changes."
  - The Part B choices from the endings are exactly the two keys: Kofi ¶5:4 and Lucy ¶5:3.
  - The new distractor "Lucy pulled the sled over to her friends" is ¶4:1, before the ending.
  - h2 is now good: "the moment each main character changes" lands on that distractor. But h1 has already sent the child to the keys.
- **Fix.**
  - h1 and `clue`: "A lesson for both stories must fit Kofi AND Lucy. Ask what each main character learns, then check it against both stories."
  - Keep h2 and h3 as they are.

### SHOULD

**SHOULD-D1. C14 (core 3.4): h2 states the lesson, and with h3 only the key is left.**
- **Evidence.**
  - h2 says "Ask what each child is given to do, and how the child feels after doing it." That is both halves of the key lesson: trusted with a real job, then proud.
  - That framing rules out Kim's ribbon (no job is given) and Lena's ducks (no feeling). h3 rules out Jalen's move. Only Tomás is left.
  - This h2 is 1B's suggested fix for the form A echo. It removed the echo but over-scaffolds.
- **Fix.** h2: "Reread the part where each child is handed a job, and the last paragraph of each story." That says where to look, and leaves the lesson for the child to say.

**SHOULD-D2. C15 (core 3.5): h2 names the contrast that is the Part A key.**
- **Evidence.** h2 asks: "Read the first paragraph of each story. Where does each family live, and **does that place stay put?**" The key is "carries its home along when it moves, but Ingrid's family stays on one farm". The only live Part A distractor is the reversed "never moves / moves every spring".
- **Fix.** Drop the last clause: "Read the first paragraph of each story. What kind of home does each family have?"

**SHOULD-D3. C12 (core 3.2, hot text): h3 rules out a target h2 already excluded, and its closing question removes both new distractors at once.**
- **Evidence.**
  - h2 ("the part where the child is with the sheep") already excludes "That night, Ingrid fell asleep…", which is the target h3 rules out.
  - h3 then asks "is the child the one moving the sheep, or are the sheep doing something on their own?" That disarms ¶6:2 and ¶5:4, the two targets added to fix MUST-D1.
  - That leaves the key alone in p8, and the key against "sat up tall in the saddle" in p7. It settles one story and most of the other.
- **Fix.** h3: "Sitting up tall in the saddle shows how Bataa feels; no sheep move. Check each other sentence against the question." That removes one target that is still in range.

**SHOULD-D4. C11 (core 3.1, dropdown): blank 1's key is copied word for word from a paragraph h2 names, and h3 settles blank 2.**
- **Evidence.**
  - Blank 1's key is "wide, grassy land in the spring". p7 ¶1 reads "Every spring … the wide, grassy land", and h2 says "Read the first paragraph of each story."
  - The new paragraph rule is met in the letter, because blank 1's distractor "steep mountains in early fall" comes from p8 ¶1, which h2 also names. In effect, though, h2 settles blank 1 and h3 settles blank 2.
- **Fix.** Paraphrase blank 1's key, for example "open grassland in the spring". Or make h2 "Find the place and the season in each story."

**SHOULD-D5. S03 (similar): h2 lets the child write the key** (the same pattern 1B SHOULD-14 fixed in S01).
- **Evidence.** h2 says "Read the last sentence of each story." Both last sentences contain "says … sorry" and the repair ("play together again", "draw a new picture together"), which is the key.
- **Fix.** h2: "Find the trouble in each story, then what each main character does about it."

### NOTE

1. **Set 1 cueing of P4's lesson.**
   - Together P1 ("both refuse to share") and P3 ("the main character decides to share", in both stories) lead into P4's "Sharing with others can make life better".
   - The teach example's lesson is "sharing helps others" (1A NOTE-6).
   - None of these gives the answer, so this is not a pre-answer under the new rule. If the teach example is ever revised, give it a non-sharing lesson.
2. **P4 Part B.** The new distractor "Lucy pulled the sled over to her friends" is strong and defensible, and its `how4` explains it well.
3. **C06** is still close to a lookup: the second title is "…the Last Night". As a set opener, DOK 2 is acceptable.
4. **S03's `like` includes C14.** S03 is a shared-lesson item, while C14 transfers a lesson to a new story. That is a stretch. Keep C09 and P4, and drop C14.
5. **Lesson transfer (C14)** is modelled only by teach point 3. That is acceptable (§7.3).
6. **Within-set chains I accept.** C07 → C10 (as in B1). C12's distractor "The whole family took the ger apart" sits next to C15's Part B key, but no `how` or `why` states C15's answer.

## 7. Step 3 calls

### 7.1 Is it acceptable that 1.b p1 is read eight times?

**The count is acceptable; the current content is not.**
- Rereading a 130-word grade-3 story is not the problem. Repeated reading is normal practice, and Together is meant to sit on a known text.
- The test is whether each core item on p1 asks for work that Together has not already shown:
  - **P7** (how time of day shapes the fix) and **C05** (proof) pass.
  - **P5** fails (MUST-B1).
  - **P4** (order) is borderline. Together's `how`s narrate the whole sequence: P2 `how1`–`how2`, then P6, then P3 `how1`–`how3`. With the new functional h2 it is a fair warm-up, so I leave it as a NOTE.
- Once P5 is replaced by a function item that Together does not touch, eight reads is acceptable. The lead can still drop a ref if they want fewer.

### 7.2 Are the weak distractors on 1.a C05, C07 and C10 weak enough to require changes?

- **C05: no.** "Jamal is the strongest kicker" (judging the character, not the plot) and "the kick wins the game" (the ball "sailed over the goal") are both live misreadings. Only "picture the weather" is weak. After h3, two choices remain live.
- **C07: no.** Part A keeps "annoyed that someone wrote in a book", which has a mild hook, and Part B's four choices are all real sentences from the story. "Bored" is weak, but one weak distractor of three is within the bar.
- **C10: yes.** The distractors on their own would pass. The problem is that h3 removes the only strong one ("what he wears every day") and hands over the inference, so nothing is left to decide. See SHOULD-A1. Changing either the h3 target or one distractor fixes it.

### 7.3 Do Learn It and Watch Me now model what the fifteen require?

- **1.a: yes.**
  - Watch Me 1 (paw prints and red yarn) models "why the author describes a detail" (C10, C13) and comparing two texts by testing one sentence against each (C14).
  - Teach point 2 models show versus tell (C04, C15).
  - Watch Me 2 and 3 cover character and plot.
- **1.b: mostly.**
  - Proof is now modelled (Watch Me 2), and setting causing a problem is modelled (Watch Me 3, teach point 5).
  - Character jobs (C04, C12) rest on one line of teach point 1. That is thin but adequate.
  - Solution transfer (C15) and solution comparison (C14) are not modelled (SHOULD-B3, non-blocking).
- **1.d: yes.**
  - Time as part of the setting is now in teach point 2 and Watch Me 1, step 4 (C04, C11).
  - Customs and their meanings are in Watch Me 3 (C10, C15). Three-story comparison is in teach point 5 (C13).
  - Lesson transfer (C14) is in teach point 3 only, which is acceptable.

## 8. Hint 2 and hint 3 audit (all core, similar and Together items)

I applied §4.5 cumulatively, plus the new rules:
- (a) Can the child write the key from h1 and h2 alone?
- (b) After h3, is only the key left?
- (c) Does any hint echo the key?
- (d) Does h2 name a place where no wrong choice sits?
- (e) Does h3 settle more than one blank or step?

Items not listed below passed.

| Lesson | Fails (MUST) | Too strong (SHOULD) | Light (NOTE) |
|---|---|---|---|
| 1.a | P5 (b) | C10 (b), Together P2 (d) | C03 (h3 spends itself on the best distractor), C13 (h3 settles one step), Together P1 (h2 lets the child write "a storm") |
| 1.b | P5 (Together overlap), C11 (d) + (e) | S01 (b) | Together P1 (h3 leaves only weak choices; DOK 1 warm-up) |
| 1.d | P4 (h1 location) | C11 (h2 and h3 settle both blanks), C12 (b), C14 (a) + (b), C15 (a), S03 (a) | none |

- `how` accuracy: I read every `how` in the three lessons. Each is accurate and ends with the answer and its reason.
- No `why` or `how` states the answer to a later item in its set; the 1.b C08 → C09 leak is gone.
- Nothing in core, similar or Together leaks into test or testB.

## 9. Verdicts

| Lesson | Re-solved keys | Verdict | To clear |
|---|---|---|---|
| **3.T.T.1.a** | 4 of 4 | **CHANGES REQUIRED** | MUST-A1 (P5 ladder, hint text only) |
| **3.T.T.1.b** | 11 of 11 | **CHANGES REQUIRED** | MUST-B1 (replace or move P5; the replacement needs a blind re-solve), MUST-B2 (C11: one distractor plus h2 wording; re-solve C11) |
| **3.T.T.1.d** | 14 of 14 | **CHANGES REQUIRED** | MUST-D1 (P4 h1 and `clue`, text only) |

- **Strengths.** The fixes are real and mostly well done.
  - Ten of the thirteen earlier MUST rows in §2 are cleared. Two of those ten (1.d C12 and C15) leave a residual SHOULD.
  - The new 1.b p4 and the 1.d endings remove the repeated storyline and the form A echo.
  - Watch Me now models proof (1.b) and "why this detail" plus comparing two texts (1.a).
  - The blind solve found no ambiguous key.
- **What keeps recurring.** A hint fix that moves the giveaway instead of removing it:
  - 1.d P4: from h2 to h1;
  - 1.a C10: from h2 to h3;
  - 1.a P5: h2 and h3 together.
- **Before resubmitting, the author should rerun the cumulative audit on the whole ladder, including `clue`, not just the hint named in the finding.**
- **Next re-review.**
  - Hint-only check: 1.a P5 and C10; 1.d P4, C11, C12, C14, C15 and S03.
  - Blind re-solve: the new 1.b core 1.3, 1.b C11, and 1.b C04 if its stem changes.
  - The SHOULDs are strongly recommended. SHOULD-A2, A3 and B3 do not block release.
