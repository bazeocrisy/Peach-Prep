# B1 review 1A: 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d

**Role:** independent content reviewer 1A (blind solver). I did not write these lessons. I read the author log (B1-b1a-author-log.md) only after my blind answers were saved.
**Focus:** the blind solve, alignment with the official wording, and leakage, both inside sets and into form A and form B. I also verified the cultural facts in the 3.T.T.1.d passages.
**Scope:** `js/data/lessons/T-T1.js`, the 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d blocks: `core` (fifteen items each), `similar` (three each), `addons`, the new passages, `teach` and `learn`. I read `practice`, `test` and `testB` to check separation.
**Read-only:** I changed no lesson or code files and ran no git. This is the only file I wrote. My scripts and answer files are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/r1A/`.

## 1. Blind solve

- **Method.**
  - `r1A/load.js` loads T-T1.js through a stub `PP.addLesson`.
  - Before solving, I printed only the field *names* and value *shapes* of each core and similar item (for example `choices:[{text,correct}]x4`), so I could write the stripper. I printed no values.
  - `r1A/blind.js` prints, for each lesson:
    - the passages that core and similar items use;
    - every core item in set order, with each `{ref}` resolved from `practice`;
    - every similar item.
  - Choices, Part A and Part B choices, hot-text targets, order steps, match rows and dropdown options are shuffled with seed 20261022. The script prints no `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception`. No item in these lessons has a `figure`.
  - The output is `r1A/blind-3.T.T.1.{a,b,d}.txt`. My answers are `r1A/answers-{a,b,d}.json`, saved before any comparison.
  - `r1A/cmp.js` pulls the keys out of the loaded data and compares them (`r1A/cmp-out.txt`).
- **Result: 54 of 54 agree (100%).** That is 45 core items plus nine similar items. Each item is scored on its full key: both parts of an EBSR, every slot, every match row and the full order.
- **Disclosure: the solve was fully blind.** Unlike B0, I did not open the lesson source before saving my answers, so the eight `{ref}` items (1.a P4 and P5; 1.b P7, P4 and P5; 1.d P4 and P5) were solved blind as well. Before solving, my only contact with these lessons was one grep that printed the line numbers of the `PP.addLesson(` calls.
- **Close calls while solving** (each one is still defensible):
  - 1.a C09: whether the first note's *words* "start the mystery" (the author's flag 2).
  - 1.b C08: the wool idea (¶4:3) against the wrapping action (¶5:1).
  - 1.b C09: whether "Bryce tells Ana she was right" proves the solution or only praises it.
  - 1.d C07: "staying up until midnight for the very first time" is a good trap for Haruto.
  - 1.d C13: whether Wanjiru's *daily* walk counts as moving the animals "when the season changes".

## 2. Checks across the three lessons

- **One defensible answer.** Every item has exactly one, and no key is wrong. For the author's flags:
  - 1.a C14 key 2: Lily "raced the water up the beach, laughing" clearly shows a feeling.
  - 1.b C14: Ana works out that heat melts the ice, and she blocks the heat.
  - 1.b C08: "Ana thought hard" is a fair distractor ("thinking with no content").
  - 1.d C04: "the best ride of the day" settles "The Red Sled" as a single day.
- **Alignment with the official wording** (standards.js, p. 32; it matches gadoe/standards-3-5.txt lines 911–924):
  - **3.T.T.1.a, "Explain how narrative techniques are used to present ideas, design texts, and convey information about characters, setting, and plot."** All parts are present:
    - dialogue: P5, C08, C11, C12;
    - action: C05, C07, C15;
    - description of setting and character: C03, C04, C06;
    - plot: C05, C09, C11 to C13;
    - "design texts": C10, C13, C14.
  - **3.T.T.1.b, "Explain how characters, setting, problem, and solution function in the plot."** Setting, problem and solution are well covered, and the items test function, not naming. *Characters* is thin (SHOULD-B3).
  - **3.T.T.1.d, "Compare and contrast two or more characters, settings, central messages, or events within texts across diverse cultures."** All four comparands appear in every set, and "two or more" is covered by C13. "Across diverse cultures" is the strongest part: sets 2 and 3 compare customs and ways of life, not only places.
- **Points.** Every choose-two item is worth 2:
  - ms: 1.a C14 and C15, 1.b C09, 1.d C13;
  - EBSR with Part B pick 2: 1.b C07, 1.d P4 and C07;
  - hot text with two answers: 1.d C12.
  - The totals are 22 (1.a), 21 (1.b) and 24 (1.d), as the author log says.
  - 1.b P4 (an order item worth 2) and C10 (an order item worth 1, exact only) are both legal under SPEC §5.
- **DOK.** No item is labelled DOK 1. The labels are reasonable, with three generous ones that behave like DOK 1:
  - 1.b C06: the "oven" sentence;
  - 1.d C06: the same phrase, "the last night of the year", is in the first paragraph of both stories;
  - 1.b C13: one-word cues in each row.
- **Grade 3.** The new passages are 156–180 words. Nothing is kindergarten-like. The weakest content is the distractors noted below, not the texts.
- **Passage-to-answer agreement.** It holds everywhere. 1.a p5's "rocky pool" on Tybee Island is a small factual stretch (NOTE-A5).
- **Distinct items.** No two items in any of the fifteen differ only by names or numbers. The closest pairs differ in at least two ways (text and domain):
  - 1.b P4 and C10 (two order items);
  - 1.a C08 and S02;
  - 1.d C08 and Together P3.
  - The real problem is a similar item whose *choices* copy its core item (SHOULD-B1).
- **Formats and variety.** Each lesson has at most six mc items and at least three technology-enhanced formats, and meets the §4.4 verb minimums. 1.d uses four context domains, the minimum.
- **Leakage into form A and form B.**
  - **The scans:**
    - a six-word n-gram scan (`r1A/ngram.js`) of every new passage, stem, prompt and choice against every string in js/data/lessons, sets and tasks;
    - a keyword scan of the names and motifs (`r1A` command log).
  - **The result:** no shared key fact with any form A or form B passage, Practice Test, mixed set or other lesson's check. The only six-word hits are shared directions.
  - **Motif overlaps, none of them a key fact:**
    - "Desmond" and a "mural" also appear in a 3.T.C.2.a similar item;
    - a shark book from the library appears in an L-VOC-01 stem;
    - the "a bigger sign does not fix the real problem" structure is shared with a new TS-PS Watch Me (NOTE-B4).
  - The checks' own passages (1.a p2 and p3, 1.b p2, 1.d p3 and p4) are never used by a core or similar item.
- **Browser.** I served the site on port 8741 and loaded `#play/SK:<k>:p`, `:y`, `:y2` and `:y3` for all three lessons at 390 px. There were no page errors and no horizontal scroll (scrollWidth 390). The start overlay ("Where would you like to start?") covered the player, so I did not drive the hint buttons in the browser. The ladder audit below is done from the data.
- **check-content.js --all:** PASS, 0 failures. Its warnings for these lessons are the expected "N of 15 core items have no similar item" (1.a: 8, 1.b: 10, 1.d: 7) and two that were already there.

## 3. Findings: 3.T.T.1.a "Story clues: dialogue, description and actions"

### MUST

**MUST-A1. P5 (core 1.2, the addon ladder): hints 1 and 2 give the key, and hint 3 removes two choices.**
- **Evidence:**
  - There are four targets. Two are Abuela's lines (¶3:2 and ¶3:3), and two are Mateo's: "Abuela!" (¶2:1, when he is scared) and the key (¶6:2).
  - h2 says: "Think about how Mateo feels **by the end of the night**. Then find a line he says that matches that feeling." Mateo speaks only twice, and only one of those lines is at the end. A child can name the key from h2 alone.
  - h3 then rules out both Abuela lines at once, which is more than one distractor, leaving "Abuela!" against the key.
- **Fix:**
  - h2: "First find the lines that Mateo says. For each one, ask how he feels at that moment."
  - h3: rule out one line only. For example: "'Abuela!' is Mateo calling out right after the room goes dark. Ask how he feels then." Do not mention the paragraph 3 lines.

**MUST-A2. C12: hint 2 points to the only paragraph that holds the Part B key, and it describes the Part A key.**
- **Evidence:**
  - h2 says: "Read paragraph 6 to see what Lily does **and what happens because of it**."
  - The Part B choices come from ¶4:2, ¶5:1, ¶6:3 and ¶7:4. Only the key is in ¶6.
  - "What happens because of it" is the Part A key ("…so she gets to see the crab come out"). The ladder audit fails at h1+h2.
- **Fix:**
  - h2: "Find Dad's words in paragraph 5. Ask what he wants Lily to think about, and then read on."
  - h3: rule out one *earlier* Part B choice with its reason, such as "Lily reached for the rock" (it happens before Dad speaks). That rehearses the item's own misconception.

### SHOULD

**SHOULD-A1. C03: hint 2 restates the key.**
- The prompt already quotes "as a girl". h2 then asks "when in her life Abuela first sang this song", which is the key's idea ("from her own childhood").
- **Fix:** take the quotation out of the prompt ("What does the last sentence of paragraph 4 tell the reader about Abuela?"). Make h2 "Look closely at the words after 'used to sing'." The item then asks the child to interpret the phrase, rather than match it to a synonym.

**SHOULD-A2. C11: hint 3 settles both slots.**
- Slot 1: once "picky" is ruled out, "kind" stands against "impatient", and nothing in the text supports "impatient".
- Slot 2: "find what is on the table at the start and what is on it at the end" points straight to "the last muffin gets sold".
- §4.5 allows h3 to complete *one* slot.
- **Fix:** keep the slot 1 sentence about "picky" and drop the table scaffold. Alternatively, replace "impatient" with a misreading the text invites, such as "joking", since she speaks with a smile.

**SHOULD-A3. C13: hints 2 and 3 together leave only the key.**
- h2 contrasts low tide (¶1) with the waves rolling in (¶7).
- h3 rules out the storm and then sends the child to "what Dad and Lily do right after this sentence", which is "Time to go".
- The two choices left (Lily is afraid, how the crab built its home) have no support, so only the key remains.
- **Fix:** end h3 after ruling out the storm, with a neutral question: "What does the tide coming back mean for the beach?" Better still, give the item one stronger distractor, such as "It shows that the crab is about to come out of its home again."

**SHOULD-A4. C14: hint 1 points to where the keys are.**
- h1 says "look at the same part of each story, like the beginning or the ending". The two keys are exactly the beginning and the ending, and h2 then repeats "first paragraph and last paragraph".
- h1 must not point to a location (§4.5 rule 1).
- **Fix:** h1: "A sentence about both stories must be true for each one. Check every sentence against both." Keep the location in h2.

**SHOULD-A5. S01's `like` list is not honest.** S01 asks which sentence describes the setting. Its closest core item is **C06** (choose the description sentence), which has no similar item. C04 (add a describing sentence) is a different task.
- **Fix:** `like: ["SK-TT1a-C06", "SK-TT1a-P4"]`.

### NOTE

1. **C09** (author flag 2) is defensible. The note *appearing* starts the mystery, and its words give the next step. Partial credit allows one miss, and the misconception line covers it.
2. **C06's hint 3** rules out tiptoeing, but h2 has already limited the search to paragraph 1, where tiptoeing is not. Rule out the "favorite room" sentence instead, which is in paragraph 1 and is about Nadia's feeling.
3. **Weak distractors:**
   - C05: "picture the weather";
   - C10: "trying to hide from Nadia" and "Caleb likes trains";
   - C07 Part A: "bored".
   - None is absurd, but each can be dismissed without reading. Replace one per item with a misreading.
4. **Within-set chains in set 2.** C08's `how` and `why` ("he knew where every note was") and C09's `how` ("Mr. Webb's words explain who has been hiding the notes") restate ¶6, which C10 relies on. The passage says this outright, so it is not a giveaway.
5. **p5, "a rocky pool" on Tybee Island.** Tybee's tide pools are mostly sandbar pools at low tide ([crazyfamilyadventure.com](https://www.crazyfamilyadventure.com/low-tide-family-fun-at-tybee-island)). Rocks are found mainly at the groins and the north-end jetty.
   - Optional: "a pool among the rocks of the jetty".
   - The crab and the tide details are right: the tide covers the pools when it comes back in.
6. **Frame twins with the checks** (format practice only, no shared facts, mostly older than this batch):
   - core 1.1 P4 and form A T6 have the same prompt and columns;
   - C06, form A T4 and form B TB4 have the same "Which sentence uses description…" frame;
   - C12 Part B and form B TB3 Part B have the same "result of the words" frame.
7. **Learn It and Watch Me.** `teach` now covers every task the fifteen ask for (show versus tell, a detail about a character, a detail as a plot clue, comparing two stories). No Watch Me example models an author's-purpose question about a describing detail (C10, C13) or a comparison of how two texts are built (C14). Optional: add one.

## 4. Findings: 3.T.T.1.b "Story elements: characters, setting, problem and solution"

### MUST

**MUST-B1. C09: hint 2 isolates both keys.**
- **Evidence:** h2 says "Read the last two paragraphs. Choose two." The two keys are the only choices drawn from ¶6–7. The three distractors come from ¶2 (supplies), ¶3 (windowsill) and ¶5 (wrapping).
- **Fix:** replace the "supplies" distractor with an end-of-story detail that is *not* proof for this team: "At the lunch bell, the other teams have only cups of water." That detail comes from ¶6. Then h2 can still name the last two paragraphs.

**MUST-B2. C10: hint 3 settles the only hard step, which leaves only the key.**
- **Evidence:**
  - Two steps are fixed by plain story order: the windowsill cube comes first and the lunch bell comes last.
  - The only real decision is the wrapping against the shady corner, which happen in the same paragraph.
  - h3 says: "The sock cannot go into the shady corner until the cube is inside it." That decides it, so nothing is left to think about.
- **Fix:** make the item worth 2 points with five steps, adding "The first cube melts into a puddle" and "Ana says wool might keep the heat out". Then let h3 place one *outer* step. With four steps, h3 should place the first step only.

**MUST-B3. P5 (core 1.3) repeats the keys of the Together items on the same passage** (04 §6 rule 7 and rule 12).
- **Evidence:** P5's four rows are setting, problem, solution and character. Together, which comes right before core set 1, has already given three of them, each with a walk-through that shows the answer:
  - P1: "in a garden behind Grandma Bea's house" is the setting;
  - P2: "Rabbits are eating the tomatoes at night" is the problem;
  - P3: the wire sentence is the solution.
  - As a result, P5 is recall of Together answers, and its "Right on the first try" status overstates independent work.
- **Fix (lead decision):** either
  - move P5 into Together, and replace core 1.3 with a function item on p1 (for example, "Why does the author have Jada check the garden 'first thing' the next morning?"); or
  - revise P5's rows to details Together does not name (for example "Tiny footprints cross the soft dirt" as the problem, or "the shed" as part of the setting).

### SHOULD

**SHOULD-B1. S01 copies C04's choices almost word for word.**
- Compare C04 "He is a helper whose actions make the solution possible / main character, the problem is his own / causes the problem by… / part of the setting, like…" with S01 "He is a helper who makes the solution possible / main character, the problem is his own / causes the problem by… / part of the setting, like…".
- S01 is offered after Show me how on C04, which has just shown the answer. So S01 is answered by recall.
- **Fix:** keep the scene, but change the frame and the wording of the key. For example: "Why does the author include Mr. Cole in the story?", with the key "Without him, Ms. Diaz could not finish the job."

**SHOULD-B2. C15's key echoes the passage.**
- The key says "Leo's lemonade stand is **hidden** behind his house". The passage title is "The **Hidden** Peach Stand", and ¶1 says the trees "**hid** it".
- A child who matches surface words picks the key, which is exactly the misconception the item targets.
- **Fix:** "Leo's lemonade stand is set up behind his house, where nobody walks by, so he moves his table out to the sidewalk."

**SHOULD-B3. The *characters* component is thin against the official wording.**
- C04 is the only item about what a character does in the plot. C08 is tagged CHAR, but it asks for the idea, which is the solution. P5's character row only names Grandma Bea.
- Sets 2 and 3 have no item about a character's job, so a child who stops after set 1 has practised it once.
- **Fix:** turn one set 3 item into a character-function item on p4. For example: "Why is Malia, not Dre, the one who finds the real problem?", or "What part does Grandpa Joe play in the plot?"

**SHOULD-B4. C06 has three distractors that the text never hints at, and hint 2 gives the key.**
- Paragraph 1 is one sentence ("Room 6 felt like an oven"). The distractors (dark, crowded, noisy) have no hook in the story, which breaks §6 rule 5.
- h2 ("picture what Room 6 is like that day") then leaves only "hot".
- **Fix:** use distractors the passage invites. For example:
  - "The sun is so bright on the windowsill that the cube cannot be seen" (¶3);
  - "The teams get only one ice cube each" (a misreading of ¶2);
  - "The room has no fresh air, so the ice cannot breathe" (Bryce's idea in ¶3).

**SHOULD-B5. C04 has a weak distractor and is cued by `teach`.**
- "He is part of the setting, like the community pool" is absurd for grade 3.
- Teach point 1 uses the key's own words ("a helper might make the solution possible").
- **Fix:** replace the setting distractor with "He is the main character, because he is the one who fixes the problem". That is the named misconception. Reword the teach point slightly, for example "some characters help fix the trouble".

### NOTE

1. **C11:** the slot 1 distractor "the sign is painted in the wrong color" is weak. Slot 2 is good, because "leave by noon" borrows "by noon" from ¶2.
2. **C13:** each row has a one-word cue (rain and water; couch and heavy; 7:30 and on time). It is a fair transfer item, but treat its DOK 2 as generous.
3. **Within-set chains.**
   - Set 2: C09's choices and C10's steps name the sock as the solution, which helps C08 if the child goes back with Previous.
   - Set 3: C11's key (the trees hide the stand) supports C15's reasoning.
   - Both are inherent to sharing a passage, and the author flagged them (flag 7). They are acceptable.
4. **Cross-lesson motif.** The new TS-PS Watch Me 3 (the Clayton food bank: "a bigger sign would work only if…") has the same structure as p4: a sign fails, and the real cause is found. TS-PS and this lesson share 3.T.T.1.b. No fact is shared, but the lead may want one of them changed so the two lessons do not rehearse the same twist.
5. **Facts.** Fort Valley is in Peach County, which bills itself as the peach capital, and July falls within the Georgia peach season ([islands.com](https://www.islands.com/1969767/fort-valley-georgia-peach-capital-world-getaway-orchards-scenic-farms), [exploregeorgia.org](https://exploregeorgia.org/fort-valley/agritourism/farmers-markets/lane-southern-orchards)).
6. **S02's `like`.** S02's `like` includes C06, but S02 asks why Mia moves her boat, not how the setting makes the task harder. Keep C07 and drop C06.

## 5. Findings: 3.T.T.1.d "Compare two stories"

### MUST

**MUST-D1. C12: hint 2 isolates the key in each story.**
- **Evidence:** h2 says "Look in the middle of each story, **once the sheep are on the move**."
  - In p7, the targets are ¶3:1 (the ger), ¶4:3 (the saddle) and ¶5:2 (the key). Only the key comes once the sheep move.
  - In p8, the targets are ¶3:1 (the hike up), ¶5:2 (the key) and ¶6:3 (the grin at the barn). "Middle" leaves only the key.
- **Fix:** add one tempting target from the moving part of each story that is *not* the child guiding: p8 ¶5:4 "One by one, the other sheep followed." and p7 ¶6:2 "The sheep spread out to eat." Then h2 can stay. Or rewrite h2 as "Ask which sentences show the child making the sheep go somewhere."

**MUST-D2. C15: hint 2 points to the paragraph that holds the only matching Part B option.**
- **Evidence:** h2 says "…and paragraph 3 of Bataa's story". The Part B choices come from ¶3:2 (the key), ¶4:3, ¶6:1 and ¶6:2.
- **Fix:** h2: "Read the first paragraph of each story. What kind of home does each family have, and does it stay in one place?" Drop the paragraph 3 pointer.

**MUST-D3. P4 (core 1.1, the addon ladder): hint 2 isolates both Part B keys.**
- **Evidence:** h2 says "Read the last paragraph of each story. Choose one sentence from each story for Part B." The two keys are the only Part B choices from the last paragraphs. The others come from p1 ¶3, p2 ¶2 and p2 ¶1.
- **Fix:** h2: "Find the moment each main character changes. Then look at what happens after the change." In h3, rule out one Part B sentence, such as "Lucy held the rope tight" (it comes before she changes).

**MUST-D4. P5 (core 1.2) is answered by Together P3 almost word for word** (04 §6 rule 7).
- **Evidence:**
  - Together P3, which comes right before set 1 and shows its answers, has the rows "Food goes to waste because it is not shared" (Kofi) and "Playing alone turns out to be no fun" (Lucy).
  - P5's key is "Kofi sees his fruit go to waste, but Lucy finds that sledding alone is no fun."
- **Fix (lead decision):** either
  - revise P3's two "only" rows to other details, for example "A neighbor makes the main character something to eat" (Kofi) and "Snow covers the hill" (Lucy); or
  - replace core 1.2 with an item Together does not answer.

### SHOULD

**SHOULD-D1. C11: hint 3 settles both slots.**
- Ruling out "the middle of winter" leaves slot 2 with "steep mountains in early fall" against "flat, grassy land in the spring". The second is obviously the other story's setting.
- h3 then sends the child to Bataa's first paragraph, which says "wide, grassy land" word for word. That is the slot 1 key.
- **Fix:** keep only the winter sentence in h3, and end with "Which choice that is left matches Ingrid's story?"

**SHOULD-D2. C04 Part B: only the key carries a time word.**
- "Flies buzzed around the tree", "Her brother gave Kofi a whistle…" and "Kofi smiled" cannot support any Part A answer about time, so Part B is found by looking for the time word.
- **Fix:** replace one of them with a time-bearing misreading, such as "Kofi ate mangoes for breakfast, lunch and dinner." (Read alone, it suggests a single day.)

**SHOULD-D3. C08: hint 2 points to the hardest row.**
- "…and at who is with each child" points to the only "Both stories" row, the grandparent. h3 then settles the bell row, and the two rows left are trivial.
- **Fix:** h2: "Look at what each family does near midnight." Leave the grandparent row for the child.

**SHOULD-D4. C05 has two absurd distractors.**
- "Kofi has just one mango left, but Lucy has many sleds" and "Kofi's mangoes belong to Ama, but Lucy's sled belongs to Ben" contradict the first sentence of each story.
- After h3 rules out "old and worn", only the key stands.
- **Fix:** use distractors that half-fit. For example:
  - "Kofi keeps food that will spoil, but Lucy keeps a sled that will break" (the second half is wrong);
  - "Both keep something that was a gift" (no support).

**SHOULD-D5. Learn It does not model time as part of the setting.**
- C04 (how long each story lasts) and C11 (the season) depend on "when", but teach point 2 asks only "Where does it happen?"
- **Fix:** point 2 should say "Where and when does it happen, and how much time goes by?"

### NOTE

1. **C07 Part B formatting.** Four choices are bare dialogue sentences, but "She checked the clock on the wall again and again." is wrapped in quotation marks. The odd one stands out. Wrap all five the same way, as 1.a C07 does.
2. **C06** is a lookup. The two titles in the prompt, and the phrase "the last night of the year" in ¶1 of both stories, give it away. It is acceptable as a set opener, but its DOK 2 label is generous.
3. **C10:** h2 already excludes the fireworks choice (after midnight), and h3 rules it out again. Let h3 rule out the clock instead.
4. **C07 and C10** (author flag 6). C10's prompt quotes Grandma's answer to Haruto's "why" question. That helps C07 only if the child goes back with Previous. It is acceptable.
5. **A pattern shared with form A.**
   - Both set 3 stories end with a grown-up praising the child ("Good work, herder"; "You found the bell sheep all by yourself"). Form A's T1 key is "Each one praises the main character near the end".
   - C14's h2 also directs the child to "what a grown-up says to the child".
   - No fact is shared, but the lead may want one of the endings varied so set 3 does not rehearse the T1 key logic.
6. **Teach example.** The teach example's lesson ("sharing helps others") is set 1's P4 key. This came before B1 and is a light cue only.
7. **`like` mappings** are honest. S02 covers C04 and C11 only in part.

### Cultural facts checked (3.T.T.1.d passages p5 to p8, Watch Me 3, and C13)

| Claim in the text | Verdict | Source |
|---|---|---|
| Danes jump off chairs at midnight on New Year's Eve (p5) | Confirmed. VisitDenmark: "Jumping off the sofa or a chair at the stroke of midnight to bring good luck." CPH Post: "The idea is to be mid-air when the year turns." Mom's gloss ("leave the old year behind and land in the new one… hope it will be a good year") is a fair child-level reading of both | [visitdenmark.com](https://www.visitdenmark.com/denmark/things-do/winter/new-years-eve), [cphpost.dk](https://cphpost.dk/?p=156491) |
| Fireworks in Copenhagen at midnight (p5, "over the harbor") | Confirmed: big private and public fireworks, "particularly in Copenhagen". "Over the harbor" is plausible, not a specific claim | [cphpost.dk](https://cphpost.dk/?p=156491), [visitcopenhagen.com](https://www.visitcopenhagen.com/copenhagen/this-is-copenhagen/seasons/new-years-in-copenhagen) |
| Soba is eaten on New Year's Eve; long noodles stand for a long life; soba is made from buckwheat (p6) | Confirmed. "The long noodles represent the wish to live a long life." "…the noodles are long and thin, and eating them symbolizes a long life." | [keihan.co.jp](https://www.keihan.co.jp/travel/en/sightseeing/seasonal-events/new-year/), [gov-online.go.jp](https://gov-online.go.jp/eng/publicity/book/hlj/html/201312/201312_08_en.html) |
| Near midnight, a huge temple bell is rung and people take turns; Haruto pulls "the thick rope" (p6) | Confirmed. "Some temples allow visitors to take turns striking the bell". "Worshippers take turns to strike the bell in the run-up to midnight". The bell is struck with a suspended wooden beam (shumoku), which is swung by its rope, so "pull the thick rope" is accurate | [keihan.co.jp](https://www.keihan.co.jp/travel/en/sightseeing/seasonal-events/new-year/), [mlit.go.jp](https://www.mlit.go.jp/tagengo-db/en/R3-00025.html) |
| A Mongolian ger is a round tent of wooden poles and thick felt; it is taken apart and moved; the move from a winter camp to spring pasture; an old truck (p7) | Confirmed. "a circular wooden frame… a thick felt cover"; it "can be dismantled… and carried away". Families move "each season", and spring camps are chosen where "grass grows relatively early". Possessions are moved "nowadays in a truck". "Every spring" is true, though herders move more than once a year; the text does not claim otherwise | [worldwildlife.org](https://www.worldwildlife.org/stories/the-home-and-life-of-mongolian-nomadic-herders), [mongolian-ways.com](https://www.mongolian-ways.com/travel-blog/the-nomads-of-mongolia) |
| Norwegian sheep graze in the mountains in summer and are gathered in September, with helpers; some sheep wear bells so people can find them (p8) | Confirmed. The sauesanking is "early in September", with "several colleagues, family members and friends". "The tinkling of sheep bells is a very common part of summer in the Norwegian mountains"; the bells are there so farmers can "find them". "The others follow the bell sheep" (leader ewes wearing the bell) is plausible herding lore that I did not confirm from a source. It is told as Grandma's saying, which is acceptable | [blogs.transparent.com](https://blogs.transparent.com/norwegian/?p=1455), [sciencenorway.no](https://sciencenorway.no/agriculture-animal-kingdom-forskningno/how-annoying-is-it-for-sheep-to-wear-a-bell-all-summer-long/1555310) |
| A rangoli powder pattern is drawn by the door at Diwali to welcome guests (Watch Me 3) | Confirmed, a widely documented doorstep welcome custom | [britannica.com](https://www.britannica.com/art/rangoli) |
| In Kenya, the dry season dries streams and herders walk goats to water (C13 stem) | Generic and accurate; no specific claim | none needed |

No passage misrepresents a culture or reduces it to a stereotype. Each custom is explained by a family member and given its meaning, which is what C10 tests.

## 6. Ladder audit summary

I ran the ladder audit (§4.5) on all 54 items. Items not listed passed.

| Lesson | Fails, MUST | Too strong, SHOULD |
|---|---|---|
| 1.a | P5 (h2 and h3), C12 (h2) | C03 (h2), C11 (h3 settles both slots), C13 (h2+h3), C14 (h1 location) |
| 1.b | C09 (h2), C10 (h3) | C06 (h2, with weak distractors) |
| 1.d | P4 (h2), C12 (h2), C15 (h2) | C08 (h2+h3), C11 (h3 settles both slots) |

**The common fault in B1.** The B0 fault (h3 echoing the key) is mostly gone; every h3 now rules out one distractor and ends neutrally. The B1 fault is **hint 2 naming a paragraph where the key is the only option**. It occurs in hot text, ms and EBSR Part B, where the choices carry their locations. Before naming a paragraph in h2, the author should check that at least one distractor also comes from it.

`how` steps are accurate on all 54 items, and each ends with the answer and the reason for it.

## 7. Verdicts

| Lesson | Keys | Verdict | To clear |
|---|---|---|---|
| **3.T.T.1.a** | 18/18 confirmed | **CHANGES REQUIRED** | MUST-A1 and MUST-A2 (hint text only) |
| **3.T.T.1.b** | 18/18 confirmed | **CHANGES REQUIRED** | MUST-B1 (one distractor), MUST-B2 (h3, or a five-step order), MUST-B3 (lead decision on P5 against Together) |
| **3.T.T.1.d** | 18/18 confirmed | **CHANGES REQUIRED** | MUST-D1 (two added targets or a new h2), MUST-D2 and MUST-D3 (hint text), MUST-D4 (lead decision on Together P3 against P5) |

- **Strengths.** The passages are original and right for grade 3. The 3.T.T.1.d pairs are a real strength for "across diverse cultures": the custom-meaning item (C10) and the way-of-life item (C15) go beyond comparing places. There is no leakage into form A or form B.
- **Re-review.** After the fixes, a hint-only re-review is enough for the text-only MUSTs. Items whose choices or targets change (1.b C09 and C10; 1.d C12; any revised P5 or Together P3) need a blind re-solve of those items only.
