# B3 review: b3b's lessons 3.T.T.3.a and 3.T.RA.1.a

**Role.** I am an independent content reviewer and did not write these lessons. I read the author log only after my blind answers were saved.

**Scope.**
- js/data/lessons/T-T34.js, the 3.T.T.3.a block: passages p3 and p4, `core` (fifteen items), `similar` S01 to S15, and `addons` for P1 to P6.
- js/data/lessons/T-RA.js, the 3.T.RA.1.a block: teach, the Watch Me examples, `parent`, passages p3 and p4, `core` (fifteen items), `similar` S01 to S15, and `addons` for P1 to P5.
- I read `practice`, `test`, the mixed sets and the other lessons only to check separation and reuse. Other RA blocks belong to other authors, and I did not review them.

**Read-only.** I wrote only this file plus scratch files under scratchpad/b3rev-b/. I ran no git commands, and the server on port 8821 is stopped.

**Timing note.** While I was reviewing, the author added SK-TT3a-S04 to S15 and SK-RA1a-S04 to S15 (files dated 05:49). The coordinator asked me to include them, so they are reviewed here.

I checked that nothing else changed. Every stem, choice, target, row and slot of the 42 items I had already printed is identical; the only differences were in shuffle order. For the hint and how strings I cite below, I re-checked the text against the current files. Line numbers refer to the current files.

## 1. Blind solve

**Method.**
- scratchpad/b3rev-b/load.js loads both files through a stub `PP.addLesson`.
- blind.js prints, for both lessons:
  - every passage used by core or similar items
  - every core item in set order, resolving each `{ref}` from `practice`
  - every similar item
  - the Together items (practice minus the refs)
- Choices, targets, free-standing options, order steps, match rows and dropdown options are shuffled with seed 20261023.
- It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample`, `criteria` and `like`, including those nested inside partA, partB, slots and rows.
- Output files:
  - first pass: blind-v1.txt
  - after the new similar items: blind.txt
  - display-to-source index map: blindmap.json, which is never printed
- My answers are in answers.json (41 items) and answers2.json (23 new similar items). Both were saved before comparison.
- cmp.js and cmp2.js map my answers back through the index map and compare them with the keys. The results are in cmp.txt and cmp2.txt.

**Result: 64 of 64 agree (100%).**

| Group | Items | Agree |
|---|---|---|
| 3.T.T.3.a core | 15 (including refs P4, P5 and P6) | 15 |
| 3.T.T.3.a similar | S01 to S15 | 15 |
| 3.T.T.3.a Together | P1 to P3 | 3 |
| 3.T.RA.1.a core | 14 scored (C14 is `cr`, judged separately) | 14 |
| 3.T.RA.1.a similar | 14 scored (S10 is `cr`) | 14 |
| 3.T.RA.1.a Together | P1 to P3 | 3 |

- cmp.js first reported SK-RA1a-C05 as different. That was a script artefact: free-standing hottext `options` are keyed by index (`answer: [0,1]`). My two picks are exactly those options.

**How blind it was.**
- I did not open either lesson source, the author log or the author's scratch folder (scratchpad/b3b/) before answers.json was saved. That includes the reused Try items P4, P5 and P6 (TT3a) and P4 and P5 (RA1a), so the refs are blind too. This differs from B0, where the refs were not.
- The new similar items were solved after I had read the lesson source. I knew the lesson's logic and the core keys, but not their own keys.
- My first browser run displayed the new item IDs and their `like` lists, but no choices or keys.
- I count all 64 as blind to their own keys. The 23 new items were solved by a less naive solver.

**Close calls while solving** (all still defensible):
- TT3a C08 Part B: "Sam had never played before he joined our team" is a strong second choice (SHOULD-4).
- TT3a C15, TT3a S10, RA1a C15 and RA1a S15 were easy once the obvious opinions were set aside (SHOULD-3).

## 2. Findings

### MUST

**MUST-1. SK-TT3a-C06 gives away SK-TT3a-C07 (set 2, items 1 → 2).** T-T34.js:221-261.
- C07 asks for the TWO facts among five ideas. The three non-keys are:
  - "Sitting on the bench for a whole game is no fun."
  - "Everyone knows that playing is more fun than watching."
  - "The best players should play the most so the team can win."
- C06, which comes immediately before C07 in the same set, labels all three as opinions:
  - C06 hint 3 (line 229): "'Some people say the best players should play the most' is an opinion …"
  - C06 how step 4 (line 235): "'Sitting on the bench for a whole game is no fun' and 'Everyone knows that playing is more fun than watching' are opinions too …"
  - C06 `why` (line 238) repeats both.
- A child who opens C06's hints or Show me how, or reads the `why` on solving, reaches C07 with every distractor already called an opinion. Only the two keys are left.
- The author log says, "No `how` or `why` states a later item's key." That is literally true, but the giveaway works by elimination, and the log's whole-ladder rule counts that.
- **Fix.** In C06, describe those three sentences without naming their fact/opinion status, for example "a detail about one game", "what other people say" and "a smaller idea, not what the whole piece is about".
  - Alternative: give C07 opinion distractors that C06 does not discuss, for example "Kids join the league to learn and have fun" or a new opinion line added to p3.
  - Either way, re-check C07's hint 3.

**MUST-2. SK-TT3a-P5 (core 1.2, a reused Try item): hint 2 sorts the choices by paragraph, and only the keys are in paragraph 3.** The prompt is at T-T34.js:143 and the addon is at T-T34.js:866-870.
- The prompt says: "Paragraph 3 gives the reason that lots of people would come on Saturdays."
- Addon hint 2 says: "For each detail, find it in the passage and see which reason it sits with."
- Where each choice sits:

  | Choice | Paragraph |
  |---|---|
  | story time full (key) | 3 |
  | computers in use (key) | 3 |
  | mom's hours | 2 |
  | three brothers | 4 |
  | "closed on Saturdays now" | 1 |

- Hint 2 plus the prompt therefore leaves only the keys. This is the exact pattern banned by the rule added after B1: "check that at least one wrong choice also comes from that paragraph."
- Hint 3 then removes "closed now", and hint 1 ("it must show that people really came") rules out the mom and the brothers. After the full ladder, nothing but the keys is live.
- The author's table says "After H2: all 5", which I disagree with.
- **Fix.** Replace one distractor with a paragraph-3 sentence that is not evidence for the reason. For example, replace "The library is closed on Saturdays now" with "Mr. Grant works at the library." (p1:3:3).
  - Then retarget hint 3 to rule out the mom's hours, which belong to the busy-families reason.
  - Also reword hint 2 so it does not invite a location sort, for example: "For each detail, ask: does it show that people really came when the library was open on Saturdays?"
  - P5 is a reused Try item, but §6 rule 12 says reused items must meet the same bar.

**MUST-3. SK-RA1a-S08: factual error on koala sleep.** T-RA.js:651.
- The stem says koalas "sleep up to 18 hours a day".
- National Geographic says koalas "may sleep for 18 to 22 hours". "Up to 18" understates the maximum.
- It is not the item's key, but it is a false statement in text a child reads.
- **Fix.** Change it to "they sleep 18 to 22 hours a day" or "they sleep about 20 hours a day".

### SHOULD

**SHOULD-1. p4 "A Weather Station for Our School" closely mirrors the mixed set R-OPN-01 ("Let's Grow a School Garden!").** The passage is at T-T34.js:87-94; R-OPN-01 is js/data/sets/R-OPN-01.js:31, 50 and 55-56.
- Reason 1 is almost word for word: "First, a garden would help us learn science." becomes "First, a weather station would help us learn science."
- The counterargument has the same shape: "a garden would be too much work for the teachers", answered by parents offering to help, becomes "too hard to take care of", answered by the high school club offering to show them how.
- The ending is the same: ask the principal, "this spring".
- R-OPN-01 asks, "Some people think a garden would be too much work. Select the sentence in which Maya answers these people." C13 rehearses that exact logic on a near twin.
- The topic and the key facts differ, so I rate this SHOULD rather than MUST. But §4.3 rule 4 forbids paraphrasing a mixed-set passage, and p4 is close to a reskin of R-OPN-01's frame. The lead may escalate it.
- **Fix.**
  - Reword reason 1, for example "Next, we could check our own weather records instead of guessing."
  - Change the worry and the answer to something that is not "too much work, and helpers have offered". For example: "Some people say it would get broken at recess. But the field behind the gym is fenced, and no one plays there." Avoid cost, which is the form A (p2) counterargument.
  - Drop "this spring" and the principal from the ending.
  - Adjust C12 and C13 to match.

**SHOULD-2. Hint 3 leaves the key as the only choice with the surface cue the item warns about.** This affects SK-TT3a-C10 (T-T34.js:314-335) and SK-TT3a-S11 (T-T34.js:692).
- In C10, hint 3 removes the nine o'clock choice. After that, the key is the only choice left that starts "Another reason is …".
- The item's own misconception line is "thinking a sentence is a reason because it starts with Another reason". A child can now pick the key by that label alone.
- S11 does the same with "bright colors".
- **Fix.** In hint 3, rule out the "Another fact …" choice (C10: 16 teams; S11: old maps) instead. That leaves two "Another reason" starters live.

**SHOULD-3. Hint 3 removes the only other checkable fact, so hint 1's test ("can be checked") then picks the key.** This affects:
- SK-TT3a-C15 (T-T34.js:424)
- SK-TT3a-S10 (T-T34.js:669)
- SK-RA1a-C15 (T-RA.js:457)
- SK-RA1a-S15 (T-RA.js:811)

In each item, hint 3 rules out the one distractor that is a fact but off-target:
- TT3a: "three parks", "cafeteria tables"
- RA1a: the yes/no "Did people long ago …" question

What is left is the key plus opinion distractors, and hint 1 has just said strong evidence (or a research question) is a fact you can check. The "Everyone knows" and "Who is the best" traps keep one distractor live for a child with that misconception, so each item still has two live choices. The author's own table agrees ("key, 'Everyone knows'"). But the real discrimination these items test is relevance, and hint 3 removes it.
- **Fix.** Have hint 3 rule out the plain "I think" or "Is … nicer" opinion instead. That keeps the off-target fact live.

**SHOULD-4. SK-TT3a-C08 Part B has a close second.** T-T34.js:262-291.
- Both "My friend Sam had never played before he joined our team" and "In our last game, Sam scored his first goal" are needed to show that Sam got better. The key, the goal, is defensible as the outcome, but a strong reader will hesitate.
- The new S12 avoids this well: "walked at recess" only tells what the kids did.
- **Fix.** Replace the "never played" distractor with "Last fall, our coach gave us all the same time to play" (p3:2:2). That keeps a paragraph-2 distractor for hint 2.

**SHOULD-5. Learn It / Watch Me never models the "design" component, though many items test it.** T-T34.js:27-58.
- 02-coverage-matrix itself lists design as "taught+practised+assessed", not modelled.
- Items that need it:
  - the counterargument: C05, C09, C13, S02, S06, S13, S15
  - the ending: P6, C13
  - the opening: C11, S08
- Only teach point 5 states it, in one sentence.
- The log says the fifteen need nothing that "teach point 5 … and the three Watch Me examples do not model", but none of the Watch Me examples models it.
- **Fix.** Within the limit of three, either extend Watch Me 3 or replace Watch Me 2 (fact vs opinion is already practised in Together P3 and taught in point 4) with a short worked example: "Some people say X. But Y.", showing what the reply must answer.

**SHOULD-6. Hottext items whose free-standing `options` form a connected text lose their order.** This affects SK-RA1a-S05 (T-RA.js:577) and SK-TT3a-S14 (T-T34.js:769).
- js/engine/items.js:330-331 shuffles free-standing options once per sitting.
- RA S05 calls them "a short text he found", but the child never sees that text in order, and "Then the others run into their burrows" loses its antecedent.
- TT3a S14's "Their teacher said …" depends on the Room 3 sentence.
- Both remain solvable, but the passage meaning depends on an order the child cannot see.
- **Fix.** Either show the text in order in `stem` and keep the options, or make each option self-contained, for example "Room 3's teacher said …".

**SHOULD-7. Absurd distractors in dropdown slot 2.** This affects SK-RA1a-C02 (T-RA.js:190) and SK-RA1a-S06 (T-RA.js:609).
- The slot-2 distractors are "look the cutest of all bugs" and "look the scariest of all animals".
- After hint 3 removes the other off-topic option, the only option left besides the key is one no grade-3 child would choose, so slot 2 is effectively settled. That is within "at most one blank settled", but §6 rule 5 says "None is absurd".
- **Fix.** Use a plausible opinion or off-topic choice, for example "make the sweetest honey of all" for C02 and "shed their old skin" for S06.

**SHOULD-8. The clarifying-question items echo the key in the stem.** This affects SK-RA1a-C04 (T-RA.js:208) and SK-RA1a-S01 (T-RA.js:488).
- C04's stem says "She did not know what pollen is", and the key is "What is pollen, and what does it look like?".
- S01's stem says "She did not know what kind of thing a fossil is", and the key is "What exactly is a fossil …?".
- The child can match words, and hint 2 ("find the word she did not know") then has nothing to do. This is the Ltexts-5 pattern (§6 rule 5).
- **Fix.** Use "She did not understand one word in that sentence." and let the child find the word. Consider adding a choice that asks about a different word in the sentence.

**SHOULD-9. The SK-RA1a-C14 `cr` sample models a weak second question.** T-RA.js:437.
- The sample's follow-up, "Do big cats, like lions, purr too?", is a yes-or-no question. Teach point 2 says to prefer question words over yes/no questions.
- It also does not grow out of the answer to the first question ("How does a cat make its purring sound?").
- Criterion 3 checks only the first question, so the sample passes, but it is the one model a grown-up will compare against.
- The S10 sample ("What is the slider?") is good.
- **Fix.** Use, for example: "Now I want to know: what part of a cat's throat moves when it purrs?"
- **Self-selection is otherwise honest.**
  - C14 and S10 have no `points`, and the engine scores `cr` as 0/0. The browser showed "Written and checked against the list", never "right".
  - The `parent` line and the block comment say that a grown-up checks the self-chosen topic and questions, and that the site never scores them.
  - No selected-response item claims to show self-selection.

**SHOULD-10. SK-RA1a-C06 is locating, not question-generating.** T-RA.js:256.
- The task is "Which TWO sentences answer Jamal's question?". That is 3.T.RA.1.b ("locating … information"), not 3.T.RA.1.a ("generate questions … formulating additional questions").
- With P5 and C12, three of the fifteen are "does the text answer it", and C06 is the one with no question-formulating step.
- **Fix.** Re-aim C06 so the child chooses the question the article leaves open, or the question Jamal should ask next after finding his answer. Keep p3.

**SHOULD-11. SK-RA1a-S07 shares a topic with another lesson.** T-RA.js:624.
- S07's topic, "how bread dough rises", is the content of a T-T2 cause-effect item (T-T2.js:1251: yeast → gas → bubbles → dough rises).
- S07 does not state the yeast fact, but the brief says "Do not reuse a topic … that another lesson already uses."
- **Fix.** Pick another everyday-science topic, after the usual grep.

**SHOULD-12. p4 (RA1a) blood sentence: wrong actor.** T-RA.js:112.
- The text says: "Doctors use something in it to check that medicines and shots are free of harmful germs."
- USFWS says drug companies use LAL from the blood to test that drugs, vaccines and devices are free of bacterial toxins. Smithsonian says the same about "companies".
- **Fix.** "People who make medicines use something in it to check that medicines and shots are safe from germs."

### NOTE

**3.T.T.3.a**
- **N1. Together clue (pre-existing): SK-TT3a-P1.** In Together mode the clue is help 1 (player.js:528). "Look for clue words like I think and should" fits only p1:1:3 among the six targets. RA1a-P1's clue does the same: cross out the yes/no questions, then check the topic. Both are guided items, and the engine's help 2 and help 3 narrow and walk through anyway. If they are touched later, soften the clue.
- **N2. Together P3 → core P6 (set 1).** P3 classifies "Saturday is the best day of the week for a trip to the library" (the first sentence of the last paragraph) as an opinion. That supports P6's key, "say her opinion again". This is partial and from the pre-existing split. The author log lists the related Together P2 → P4 note.
- **N3. P6 (pre-existing).** The prompt quotes only the paragraph's second sentence as "the last paragraph". "Please ask the town …" also echoes the key's "ask readers to do something".
- **N4. Key pairs joined by a pronoun.** In S01 ("By June, their teacher said …") and S14 ("Their teacher said …"), the second key depends on the first, so the pair reads as a set.
- **N5. Near-clones in the similar bank.**
  - S06 and S15 share one frame (the last two paragraphs, "Which TWO things …").
  - S04 and S12 share another (an EBSR asking which reason a story supports).
  - S05 and S13 reuse C03's and C09's choice frames.
  - S02 answers a travel worry, like C05.
  - This is acceptable for a bank meant to mirror its core items, and each has a new topic.
- **N6. C09 DOK 3** is arguable; it reads as DOK 2.
- **N7. C12.** After hint 3, one live distractor is left: the reason sentence. That passes.

**3.T.RA.1.a**
- **N8. S02 `like`** still lists C11. S02 is a single-choice dig-deeper item, and C11 orders a chain. Now that C11 has S14, drop C11 from S02.like.
- **N9. C11 and S14.** The order can be worked out mostly from what each question assumes (spring, then eggs, then red knots). DOK 3 is generous, but the article check is still needed.
- **N10. S14 fact.** "Later, the whole family flies all the way to the far south" goes beyond the sources I found. Reed College's page says parents and juveniles fly "the first leg" together, and Maine IF&W says young fledge and leave the colony. Suggest "Later, the terns fly all the way to the far south."
- **N11. p4 age.** "More than 400 million years" matches Smithsonian (ancestors about 445 million years ago). USFWS says appearance has been unchanged for 350 million years, and NJ DRBC says "more than 300". This is acceptable.
- **N12. The author log's RA1a format tally** says mc ×6. I count five: P4, C04, C08, C09 and C10. That is still within the limit.
- **N13. Write checklist.** It still does not ask for a clarifying question. I agree with the author's reason (stored checklist indexes) for leaving it, and it should be listed for the lead.

## 3. Per-item ladder audit (choices still live after hint 3; the clue equals hint 1 on every core item)

**3.T.T.3.a core**

| Item | After H3 | Verdict |
|---|---|---|
| P4 | A: key, story time, noisy brothers. B: key, brothers sentence (H2 names "paragraphs", plural: 2 and 4) | pass |
| P5 | keys only (H2 location sort plus prompt) | **MUST-2** |
| C03 | key, "Marcus uses facts", "no reasons" | pass |
| P6 | key, "new reason", (cost) | pass (N3) |
| C05 | slot 1: all 3. Slot 2: bus, "best day" (the named misconception) | pass |
| C06 | key, "no fun", "Everyone knows", First reason, topic sentence | pass, but see MUST-1 for C07 |
| C07 | 2 keys, "Everyone knows", "should play the most", until C06's ladder is counted | **MUST-1** |
| C08 | A: key, "keep playing", "no fun". B: all 4 | pass (SHOULD-4) |
| C09 | key, "only to win" (the author agrees) | pass, minimum |
| C10 | key, Ana, 16 teams | **SHOULD-2** |
| C11 | slot 1: key, "most important reason". Slot 2: all 3 | pass |
| C12 | 2 keys, reason sentence | pass (N7) |
| C13 | 2 keys, "club wants its own", "steps" | pass |
| C14 | row 3 nearly settled. Rows 2 and 4 open | pass (one row) |
| C15 | key, "Everyone knows" | **SHOULD-3** |

**3.T.T.3.a similar**
- These pass: S01, S02, S03, S04, S05, S06, S07, S08, S09, S12, S13 and S15.
- S10 and S11 have the same issue as C15 and C10 (SHOULD-3 and SHOULD-2).
- S14 passes on its ladder (two keys plus the First and Next reason sentences) but has SHOULD-6.

**3.T.RA.1.a core**

| Item | After H3 | Verdict |
|---|---|---|
| P5 | 2 keys, queen's size, build hives | pass |
| C02 | slot 1: all 3. Slot 2: key plus an absurd option, so it is settled | **SHOULD-7** |
| P4 | key, queen, "Do worker bees dance" | pass |
| C04 | key, "how carry", "every flower" | pass on the ladder, **SHOULD-8** (stem echo) |
| C05 | 2 keys, first train in Georgia, ticket cost | pass |
| C06 | 2 keys, "Some people hold their breath", diaphragm | pass (weak). **SHOULD-10** |
| C07 | 2 keys, horses (it cites the article's dogs and cats, so H2 keeps it), sleeping | pass |
| C08 | key, yawning, rude | pass |
| C09 | key, "best player", "Does a basketball bounce" | pass |
| C10 | key, two "Leo's …" choices | pass |
| C11 | last step fixed. Three left to order | pass (one step) |
| C12 | slot 1: key, "read paragraph 2 again". Slot 2: all 3 | pass |
| C13 | CCC row settled. Three open | pass (one row) |
| C14 | `cr`. H3 gives a starter only | pass (SHOULD-9 on the sample) |
| C15 | 2 keys, "nicer", "best quilt maker" | **SHOULD-3** |

**3.T.RA.1.a similar**
- These pass: S01 (but SHOULD-8), S02, S03, S04, S07 (ladder), S08 (ladder), S09, S11, S12, S13 and S14.
- S05 has SHOULD-6, S06 has SHOULD-7, S08 has MUST-3, and S15 has SHOULD-3.
- S10 (`cr`) is good.

**Points and DOK.**
- Every choose-two item is 2 points.
- The four-step order items (C11 and S14) are 2 points.
- The `cr` items carry no points.
- DOK 1 count: 0 in both lessons. DOK 3 count: 5 in TT3a and 5 in RA1a.
- mc count: 5 in each lesson, within the limit of 6.

**`like` mappings.** Each S04 to S15 `like` names only items with the same component and task, and every core item now has a similar item of its own. The only loose mapping is S02 → C11 (N8).

## 4. Topic and key-fact reuse (Step 3)

**What I searched.** I grepped all of js/data: lessons, sets, tasks, habits, standards and alds. The terms were:
- horseshoe, hiccup, diaphragm, vocal cords, stitches/108, CCC, arctic fox/sheds, weather station, rain gauge
- pen pal, dog park, submarine, fossil, quilt, bounce, train wheel/rails, red knot, kickball, purr, pollen
- Saturday, bench/playing time, walk after dinner, field trip, Cedar Bluff, Stone Creek, Brookside, 400 students
- pufferfish, meerkat, koala, geyser, wood frog/freeze solid, arctic tern, grist mill, corn husk, zipper, dough
- jobs chart, reading tent, block party, bike lane, climbing wall, pajama, walking track
- plus broader terms: weather, soccer, basketball, train, leash, cooks, lunch, museum, baseball, pitcher, library, bees

**What I found.**
- Every new topic appears only inside these two blocks, except:
  - **R-OPN-01**, which mirrors p4's frame (SHOULD-1)
  - **T-T2's yeast/bread-dough item**, which shares S07's topic (SHOULD-11)
- Other hits are incidental words: a quilt in GUM sentences, purr in poems, "sheds" for caterpillar skin, a basketball history pair in T-T2, "The Blue Pitcher" in PT-1, and the 400 students of Oak Street School in T-TS.
- No form A passage (TT3a p2 trees, RA1a p2 owls) is reused, and no check key is pre-answered.
- Tests reuse skills, not content. TT3a T6 ("why paragraph 4": answer people who disagree) is skill-level practice of C09 and C13, not a content leak.
- Neither lesson has a form B.

## 5. Facts (Step 4): verified on the web

| Claim | Where | Verdict | Sources |
|---|---|---|---|
| Horseshoe crabs: more than 400 million years, before dinosaurs; related to spiders and scorpions; blue blood used to test medicines; spring spawning at night; females dig nests; thousands of tiny green eggs; red knots eat them to fuel the trip north | RA p4, C11, C12 | Correct, except "Doctors use" (SHOULD-12). Age figures vary by source (N11) | [Smithsonian](https://www.smithsonianmag.com/blogs/national-zoo-conservation-biology-institute/2022/06/07/10-incredible-horseshoe-crab-facts/), [USFWS fact sheet](https://fws.gov/rivers/sites/default/files/documents/Horseshoecrab.pdf), [NJ DRBC](https://www.nj.gov/drbc/basin/living/horseshoe-crabs.html) |
| Hiccups: the diaphragm contracts on its own, the vocal cords close and make the "hic", eating fast, fizzy drinks and excitement are triggers, most stop in minutes, and why we hiccup is unknown | RA p3 | Correct | [Mayo Clinic](https://newsnetwork.mayoclinic.org/discussion/mayo-clinic-minute-what-causes-hiccups/), [Live Science](https://livescience.com/why-we-hiccup.html) |
| Dogs and cats can hiccup | RA p3 | Correct for cats (fetched). The dog pages were blocked (see below); several veterinary search results say dogs and puppies hiccup | [Catster (vet)](https://catster.com/ask-the-vet/cat-hiccups); blocked: [Yahoo vet article](https://www.yahoo.com/lifestyle/dogs-hiccups-veterinarian-sound-stop-110008416.html), [Royal Kennel Club](https://www.royalkennelclub.com/health-and-dog-care/health-dog-care/health/health-and-care/a-z-of-health-and-care-issues/why-does-my-puppy-have-hiccups), [Adoptapet](https://www.adoptapet.com/blog/health/puppy-hiccups) |
| A baseball has 108 stitches that help grip | RA S02 | Correct ("108 double stitches"; the seams "provide various levels of grip") | [Library of Congress blog](https://blogs.loc.gov/loc/2018/03/baseballs-the-heart-of-the-matter/) |
| CCC bridge builders, 1936, young workers, cut stone | RA C13 (invented park and sign) | Plausible and consistent. The CCC ran 1933-1942 with young men "mostly between 18 and 25", and did "hand cut stone work on the bridges". Georgia state park work is documented. Local quarrying was not confirmed, but the sign is fictional | [NPS](https://www.nps.gov/fone/learn/historyculture/civilian-conservation-corps.htm), [SaportaReport](https://saportareport.com/georgia-parks-and-forests-are-a-lasting-legacy-of-fdrs-new-deal/main-slider/nge/), [Blue Ridge Country (Fort Mountain)](https://blueridgecountry.com/travel/walking-fort-mountain-state-park/) |
| Arctic fox: thick white winter coat; sheds in spring; short brown summer coat | RA Watch Me 3 | Correct for the white phase (a blue phase also exists, which is fine to omit) | [Alaska Dept. of Fish and Game](https://www.adfg.alaska.gov/static/education/wns/arctic_fox.pdf) |
| Weather station; plastic-bottle rain gauge read daily | TT3a p4 | Reasonable. The bottle rain gauge read each day is a standard school activity, and schools set up their own weather stations | [Science Sparks](https://www.science-sparks.com/weather-make-a-rain-gauge/), [NYC DEP lesson](https://www.nyc.gov/assets/dep/downloads/pdf/environment/education/4-recording-weather-climate.pdf) |
| Wood frogs freeze solid and thaw in spring | RA S12 | Correct ("freeze solid for up to eight months … no heartbeat") | [NPS Gates of the Arctic](https://www.nps.gov/gaar/learn/nature/wood-frog-page-2.htm) |
| Arctic terns nest in the far north in summer; chicks hatch after about three weeks; the family flies south | RA S14 | Nesting and the three weeks are correct (incubation 20-24 days). "The whole family flies all the way" is overstated (N10) | [Maine IF&W](https://www.maine.gov/IFW/docs/endangered/arctictern_46_47.pdf), [Reed College](https://reed.edu/biology/professors/srenn/pages/teaching/web_2006/SeyramButameFolder/Webpages/Ontogeny.html) |
| Koalas sleep "up to 18 hours a day"; they eat eucalyptus; they live in Australia | RA S08 | **Wrong on sleep: it is 18-22 hours (MUST-3).** The rest is correct | [National Geographic](https://www.nationalgeographic.com/animals/mammals/k/koala/) |
| Meerkat guard stands on a high spot while others dig; it barks at a hawk; the others run to burrows; groups are called mobs | RA S05 | Correct. The source names eagles and falcons; hawks are commonly listed as aerial predators | [San Diego Zoo](https://animals.sandiegozoo.org/node/106) |
| Pufferfish puff up by gulping water fast; the puffed, spiky shape deters predators; many are poisonous | RA S04 | Correct. "Too big … to swallow" is the common explanation | [EarthSky](https://earthsky.org/earth/lifeform-of-the-week-puffer-fish/) (the Brown University news page failed to fetch) |
| A geyser is a hot spring that sometimes erupts; hot rock heats the water into steam; steam pushes the water through a narrow opening | RA S11 | Correct at grade-3 level ("a constriction in the geyser conduit") | [USGS YVO](https://www.usgs.gov/observatories/yvo/news/yellowstones-active-hydrothermal-system-whats-hot-water) |
| A sea once covered part of Georgia, and fish fossils are found there | RA S01 | Correct ("flood the entire southeastern half of the state"; sharks and bony fish) | [New Georgia Encyclopedia](https://www.georgiaencyclopedia.org/articles/science-medicine/paleontology-of-the-coastal-plain-province/) |

The bee facts in RA p1 are pre-existing and were not part of B3, so I did not re-check them.

## 6. Author log (Step 5)

**Verified and agreed.**
- **Gates.** I re-ran `node verification/check-content.js --all`: PASS, 0 failures, and no warnings for either lesson. I re-ran `readability.py`: the figures match (TT3a p3 has 179 words, not 180).
- **Self-selection.** It is handled honestly, as stated.
- **Similar items.** The coverage map in the addendum matches my own in-order browser run item for item. The addendum's claim that no existing item changed matches my content comparison.
- **The five cross-item notes.**
  - P2 → P4 (both lessons), P4 `why` → P5 and C02 → P4 (RA): acceptable. Each still leaves at least two live choices.
  - C03 H3 → P6: acceptable, because "new reason" stays live.

**Disagreed or missed.**
- The log missed C06 → C07 (MUST-1). Its sentence "No `how` or `why` states a later item's key" holds only for direct statements, not for elimination.
- For P5, "After H2: all 5" is wrong (MUST-2).
- For C02 slot 1, the log counts "cutest" as live. It is not (SHOULD-7).
- The log says "No teaching change" is needed for 3.T.T.3.a, because Watch Me covers what the fifteen need. Watch Me does not model design (SHOULD-5).
- For bread dough (S07), the log calls it "incidental". It is the same topic as a T-T2 item (SHOULD-11).
- The RA1a mc tally is wrong (N12).

**Open items.**
- I agree with leaving the write checklist unchanged for now (N13).
- The facts the log listed as not web-checked are now checked (section 5). One is an error (MUST-3) and two are inaccuracies (SHOULD-12, N10).

## 7. Browser check (Step 6)

**Setup.** `node verification/serve.js . 8821`, Playwright Chromium, 320×568 (touch, mobile). Scripts and logs are in scratchpad/b3rev-b/: browser.py and browser.log, and inorder.py and inorder.log.

**Pass A: correct answers.** On all 30 core items, I entered the key and pressed **Check my answer** with a real click. Results:
- "That's right" on all 29 selected-response items.
- For C14 (`cr`), it showed "One good answer …" with the status "Written and checked against the list", and never "right".

**Pass B: one sitting, all fifteen in order, per lesson** (the coordinator's request). I pressed Start, then for each item:
1. tapped the Question tab
2. entered a wrong answer and pressed Check ("Not quite")
3. pressed **Give me a hint** three times: "Hint 1 of 3" to "Hint 3 of 3", every hint text shown, and the button ended at "No more hints"
4. pressed **Show me how**: the numbered steps from `how` appeared, and the status became "Answer shown"
5. pressed **Try a similar question**: an "Extra question" opened, with this core item in its `like`; I entered its key and Check said right (S10, the `cr`, showed its sample)
6. pressed Next ("Go on to question n" or "Finish this set"), then "Go on to set 2" or "Go on to set 3"

**Result.**
- All 30 items came up in the core order.
- **"Try a similar question" appeared on all 30**, each time with a different similar item. The pairings match the author's coverage map.
- Both runs ended at "Set 3 finished".
- No horizontal scroll at any step, including the set picker.
- No page errors.
- The only console error on each page was "Failed to load resource: net::ERR_FAILED" for fonts.googleapis.com. The test harness aborts that request on purpose (`q.route("**/fonts.g*/**", abort)` in verification/practice-own.py), so it is not a site error.

The server is stopped.

## 8. Verdicts

- **3.T.T.3.a: CHANGES REQUIRED.**
  - MUST-1: C06's hint 3, how and why give away C07.
  - MUST-2: P5's hint 2 plus the prompt leave only the keys.
  - Also recommended: SHOULD-1 to SHOULD-6 (R-OPN-01 paraphrase, the C10/S11 and C15/S10 ladders, C08 Part B, Watch Me for design, S14 order).
- **3.T.RA.1.a: CHANGES REQUIRED.**
  - MUST-3: the S08 koala fact (a one-line fix).
  - Also recommended: SHOULD-3 and SHOULD-6 to SHOULD-12 (C15/S15 ladders, S05 order, absurd dropdown options, stem echo, the C14 sample, C06 alignment, the S07 topic, "Doctors use").
  - Otherwise strong. The clarifying component is now taught, modelled and practised, and the self-selected-topic part is honestly adult-checked and never scored.
