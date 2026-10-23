# B2 independent re-review: 3.T.T.2.a, 3.T.T.2.b and 3.T.T.2.c

**Reviewer:** B2 re-reviewer T2. I did not write these lessons, and I did not review them before.
**Date:** 2026-10-22/23
**Source reviewed:**
- `js/data/lessons/T-T2.js`: the 2.a, 2.b and 2.c blocks, after the §10 fixes in `B2-b2a-author-log.md`;
- `assets/figures/tt2-c-fire-station.svg` and `tt2-c-bike.svg`.

**Scratch work:** `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/b2rr-t2/`. It holds:
- `blind.js`, `blind.txt` and `blindmap.json`;
- `answers.json`, `notes-blind.txt`, `saved-at.txt`, `cmp.js` and `cmp.txt`;
- `neg/`, a negative control for the comparer;
- `full-*.txt`, `ngram.js`, `ng5.txt` and `ladder-independent.txt`;
- `pw.py`, `pw2.py`, `pw-result.json`, `shots/`, and the two figure PNGs.

**Read-only.** This file is the only repo file I wrote. I ran no git. The server on port 8797 was stopped at the end.

## Verdicts

| Lesson | Blind agreement | MUST | SHOULD | Verdict |
|---|---|---|---|---|
| 3.T.T.2.a | 21/21 | 3 (C03, C09, C12) | 3 | **CHANGES REQUIRED** |
| 3.T.T.2.b | 23/23 | 2 (S01, S02) | 3 | **CHANGES REQUIRED** |
| 3.T.T.2.c | 23/23 | 0 | 2 | **ACCEPTED** (SHOULDs recommended) |

- **Keys.** Every key is correct and defensible.
- **Earlier findings.** Every MUST from B2-review-T2-1 and T2-2 is cleared.
- **New MUSTs.** These are five findings that neither earlier review raised:
  - one cross-lesson leak (2.a C03);
  - two hints that echo or paraphrase the key (2.a C09, C12);
  - two similar items whose hint 2 points straight at the key (2.b S01, S02).

## 1. Blind solve

**Method.**
- My own Node loader (`load.js`) evaluates T-T2.js with a stub `PP.addLesson`.
- Before solving, I printed only field names and types, never values (`shape.js`, `shape2.js`).
- `blind.js` prints the passages, with paragraph and sentence numbers and figure alt text. It then prints every Together item, every core item (resolving each `{ref}`) and every similar item.
- It shuffles choices, Part A and Part B choices, dropdown options, match rows and order steps with a seeded LCG. Hot-text targets stay in passage order, as on screen.
- The printout has no `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `like` or addons. Nested fields were stripped too: the printer builds each line from `text` and `options` only.
- I saved my answers (`answers.json`, with notes in `notes-blind.txt`) before I opened any key, the source of any item, the author log or either earlier review. Then `cmp.js` mapped my answers back through the saved permutation.
- **Negative control.** Four answers altered on purpose were all caught as disagreements (`neg/`), so the comparer works.

**Result: 67 of 67 agree (100%).** That is 45 core, 9 similar and 13 Together items.

| Lesson | Core | Similar | Together |
|---|---|---|---|
| 2.a | 15/15 | 3/3 | 3/3 |
| 2.b | 15/15 | 3/3 | 5/5 |
| 2.c | 15/15 | 3/3 | 5/5 |

**How blind was it?** Fully blind on keys. Three caveats, none of which touches a key:
1. My assignment brief named facts to check ("the Brooklyn Bridge story", "chipmunks", "the basketball net cord", "the Ferris 'doubted' line"). So I knew some topics and one prompt word before solving.
2. I knew the lesson titles.
3. The shape probe showed that 2.c has no `testB`.

**Close calls noted before the comparison:**
- 2.c C05 blank 1: "dried" is in both texts only through p6's single word "dried sweetgrass". It is defensible.
- 2.c C08: "Plastic bottles are recycled along with cans" rests on p7 "cans and bottles" plus "sort out the plastic". It is defensible.
- 2.a C06: "A fire station is a busy building" is a good distractor.

## 2. Findings

**Severity rule used, kept consistent with the two earlier reviews:**
- **MUST:**
  - a hint quotes or paraphrases the key, or points to the only place that holds it (the post-B1 rule); or
  - the item shares a key fact or passage with another lesson.

  Earlier MUST precedents: R2 MUST-2c-2 (hint 2 echoes "not only cans"), R1 M5 (hints leave only the key), and R1 M1 to M4 (topic and key-fact reuse).
- **SHOULD:** a hint leads the reasoning, or a distractor is too weak, but the child still has to draw the conclusion. Earlier SHOULD precedent: R2 SHOULD-2a-2 on C09's old hint 2.

### MUST

**MUST-1. 2.a C03 (Saturday market, unstated main idea). Reuses another lesson's practice item and a mixed-set passage.**
- **Evidence:**
  - C03's stem: "On Saturdays, the empty lot on Pecan Street fills up early. Farmers set up tables of **peaches, beans and fresh eggs**. A baker sells warm bread, and **a man plays the fiddle** by the gate. Neighbors bring their own bags…" Its key is "a busy market where neighbors shop and visit".
  - 3.T.SS.1.d SK-SS1d-P4 (T-SS.js:1243) has the rows "The Saturday farmers market is a busy place." (keyed Topic sentence), "Farmers sell **peaches, beans and fresh eggs**." and "Shoppers crowd around every table."
    - That is the same setting, a 5-word match, and the **same key fact**, keyed as the main idea, in a closely related skill (topic sentence).
  - Mixed set L-GRM-03-6 (L-GRM-03.js:101-107) is a Saturday market with peaches, "**A man plays the fiddle** near the bread table" and "We all walked home with full bags."
    - C03 lifts its fiddle player, as C03's tempting distractor, and its setting.
  - §4.3 rule 4 forbids sharing the key fact of another lesson's practice passage, or using any part of a mixed-set passage.
  - The §10.3 topic search did not include this item, because it was not changed in the fix round. Neither earlier review caught it.
- **Fix:**
  - Give C03 a new setting with no farmers, market, peaches or fiddle. For example, a school's field-day stations, or a neighborhood cleanup morning. Grep `js/data` for the setting and its nouns before choosing.
  - Keep the unstated-main-idea task and a one-sentence detail as the tempting distractor.
  - Check that the new setting does not collide with S03 (community garden) or C13 (concert).

**MUST-2. 2.a C09 (Figure 1, the pole). Hint 3 names the key's distinctive word and leaves only the key.**
- **Evidence:**
  - Hint 3: "The kitchen is on the top floor… Now use what the article says about **where the gear waits**: why would landing in that spot help?"
  - The key is "so firefighters land right next to their **gear** and the truck". It is the only choice that mentions gear.
  - After hint 3, the other two choices are not live. "Land outside on the street" is contradicted by the figure, where the pole is inside. "The pole stays far away from the truck" is contradicted by the figure.
  - The log's §10.2 lists the street and far-from-truck choices as live after hint 3. I disagree: hint 3 hands over the reason, so nothing else is a real candidate.
  - R2 rated the old hint 2 ("what is closest to where the pole ends") a SHOULD. The new hint 3 goes further, because it names the gear.
- **Fix:**
  - Hint 3 rules out the kitchen and stops there: "…so the pole cannot drop anyone next to it. Check the other choices against the labels on the bottom floor."
  - Optionally, strengthen one distractor so the figure alone does not settle it, for example "so firefighters land right next to the big doors".

**MUST-3. 2.a C12 (kudzu jelly). Hint 2 paraphrases both clauses of the key.**
- **Evidence:**
  - The key is "The jelly fact is **only in the text box**, and **no section is about it**."
  - Hint 2: "Find where the article tells about the flowers. **Notice how that part looks on the page**, and **check whether any other part of the article tells about jelly**."
  - A reader who has hints 1 and 2 but not the choices can write down the key. That fails the §4.5 ladder audit.
  - After hint 3 removes "never tells about flowers", the two remaining distractors ("jelly is made from fruit", "only a heading can tell the main idea") are not about location, so neither is live.
- **Fix:**
  - Hint 2 becomes location-only: "Find every place in the article that tells about kudzu flowers."
  - Optionally, replace "Only a heading can tell the main idea" with a stronger misreading, for example "The jelly fact is in the last part of the article, so it is only a detail."

**MUST-4. 2.b S01 (similar, tree seedling). Hint 2 names the two steps of the key's swap.**
- **Evidence:**
  - The key is "Move step 3 before step 2…".
  - Hint 2: "Look at **steps 2 and 3**. Ask what is in the hole at each step."
  - No distractor involves steps 2 and 3. One moves step 4, one moves step 1, and one leaves the steps alone. So hint 2 points to the only place that holds the key, and hint 3, which rules out moving step 1, is redundant.
  - A similar item is reviewed like a core item (04 §4.7).
- **Fix:**
  - Hint 2 becomes generic: "Act out the steps in order, one at a time, and stop at the first step you could not do."
  - Hint 3 stays.

**MUST-5. 2.b S02 (similar, brick street). Hint 2 points to the one sentence that holds the key.**
- **Evidence:**
  - Hint 2: "Find the sentence that begins with So. Then read **the sentence just before it**."
  - That sentence ("After every rain, wagons sank deep in the mud, and farmers could not bring their crops to town") is the key, nearly word for word. No distractor comes from it.
  - This breaks the post-B1 rule: "Hint 2 must not point to the one paragraph or sentence that holds the key."
- **Fix:**
  - Hint 2: "Find the sentence that tells what the town did. Then look before it and after it for the reason." The after-sentence (new shops) then becomes a live distractor.
  - Hint 3 stays.

### SHOULD

**SHOULD-1. 2.a C05 and C08. Hint 2 asks the question whose answer is the key; after hint 3 only the key is live.**
- **C05:**
  - Hint 2: "…reread the last sentence and ask the same question [what it tells a gardener to do]." The answer, "nothing", is the key's reason.
  - The distractor "It is the main idea, so it cannot also be a detail" is contradicted by the stem, which states Grandpa's main idea. So it is not live. The log's §10.2 counts it as live.
  - **Fix:**
    - Hint 2: "Read all four tips one at a time."
    - Replace the dead distractor with the lesson's own named misconception: "It is not true, so it cannot be a key detail."
- **C08:**
  - Hint 2: "…read the last paragraph, which sums up the article, and notice which facts it talks about." This leads straight to "the article's point does not need them".
  - The log's §10.2 says all four choices are live after hint 2.
  - **Fix:** Hint 2: "Read the text box. Then read the headings and notice what each section is about."

**SHOULD-2. 2.a C04 (heading for paragraph 2).**
- Hint 2 ("A good heading has to fit all three, not just one") removes "Laying Eggs All Day", and hint 3 removes "Working Together".
- "Thousands of Bees" is not in paragraph 2, so it is not a real candidate. The ladder therefore leaves only the key.
- **Fix:** Hint 2 becomes location-only ("Reread paragraph 2."). Keep hint 3.

**SHOULD-3. 2.a C10 slot 2 and 2.b C04: absurd distractors.**
- 2.a C10: "a key detail, because it tells where the firefighters sleep". The author declined this in §10.4.
- 2.b C04: "Move step 3 to the beginning, because you should test your voice before you make the phone". In addition, C04's hint 3 ("ask whether the string would stay in the cups") poses the key's reason, so after hint 3 only the key and "leave the steps as they are" remain.
- **Fix:**
  - Replace each with a plausible misreading. For C04, for example: "Move step 2 after step 4, because the knots must be tied before the string goes through the holes."
  - Shorten C04's hint 3 to the step-1 ruling-out.

**SHOULD-4. 2.b C05 (Brooklyn Bridge).**
- Hint 2 ("Find each thing that went wrong… Then find what happened because of it") restates the key's frame ("Each problem led to a next step").
- After hint 3, the remaining distractor ("Washington got sick, so the leaders decided they did not need a bridge") is contradicted by the bridge opening. So only the key is live.
- **Fix:**
  - Hint 2: "List the events in the order the text tells them."
  - Add a plausible wrong chain, for example "Ice led John Roebling to get hurt, and the bridge opening led Emily to help."

**SHOULD-5. 2.b C10 (how people could tell the wheel was safe).**
- Hint 2 ("Look at what happens after the wheel starts turning") removes the one tempting distractor, "He showed the planners how strong steel parts would hold it together", by location alone.
- After hint 3, only "It had 36 cars…" remains beside the key, and it is not a real reason.
- **Fix:** Hint 2: "Reread paragraphs 4 to 6. Which sentences tell about the wheel itself?" That keeps the steel-parts sentence live.

**SHOULD-6. 2.c C04 (why sweetgrass suits baskets).**
- "It grows in sandy soil, so the baskets can carry sand without leaking" is not plausible to a grade 3 reader.
- With hint 3 removing the smell choice, only the key and the palmetto/never-dried choice remain.
- **Fix:** Use a cross-text misreading, for example "Its pink tops are soft, so they make the basket's handle."

**SHOULD-7. 2.c S02 (similar, polar bear).**
- Hint 2 ("Text 1 tells what the fur looks like. Text 2 tells what a seal does when it **sees something coming**") restates both halves of the key ("…a watching seal may not see the bear coming").
- **Fix:** Hint 2: "Find one fact about the bear in Text 1 and one fact about the seal in Text 2."

### NOTE

- **N1. 2.b C13** is still a near-literal lookup ("so the glue can grip"), and hint 2 sends the child to paragraph 4. It was relabelled DOK 2 per R2. That is acceptable.
- **N2. 2.c C05.** The prompt says the note "has two mistakes", which removes "only 'Sweetgrass'" from both blanks before any hint. With hint 3 settling blank 2, blank 1 is a two-way choice. That is acceptable, but "may have mistakes" would make it a real check.
- **N3. Bike topic in two sibling lessons:** 2.a C14 (bike parts figure) and 2.b p5 (patch a bike tube). The key facts differ, and the lead kept the bike tube in 2.b. Acceptable, but a non-bike object for C14's figure would remove the overlap.
- **N4. Recycling bins.** TS-DESC `similar` SK-TSDESC-S02 (blue = paper, green = glass, yellow = cans) and 2.c p8 (blue = cans and bottles, green = compost) use colour-coded bins with conflicting colour meanings. No key fact is shared; I agree with R2 NOTE-2.
- **N5. Pre-existing overlaps, outside this batch:**
  - 2.a p1 bees against T-RA "Busy Honeybees" (shared sentences; T-RA asks "What shape is each wax cell?") and F-FH;
  - 2.b p1 monarchs against T-RA "A Monarch Grows Up" (milkweed, birds);
  - 2.c p1 and p2 hummingbirds against the T-SS draft.
  
  These are for the PP-004 follow-up.
- **N6. 2.b p5 is FK 1.9.** R1 called this moot because p5 was to be replaced, but the lead kept it. The log's §10.4 does not list it as an unaddressed finding. Consider raising it to about FK 2.5 to 3.
- **N7. Sweetgrass wording.** The revised sentence is accurate and suitable for grade 3. The sources say rice "plantations" (the Georgia Encyclopedia adds indigo and cotton). "Rice plantations" would be more exact than "rice farms" and is still grade-appropriate.
- **N8. Together hint ladders.**
  - In Practice Together (non-own mode), `help()` still shows `clue`, then the engine's narrowing, then `why` (player.js:528-530). The authored addon `hints` are rendered only in own mode (player.js:270, 486-491).
  - So the addons on Together items P1, P2, P6 (2.a), P1–P3, P5 and P6 (2.b) and P1–P5 (2.c) are not shown in Together today. They matter only on the refs used in core, and I audited those.
  - 2.a Together P6's addon hint 2 states P7's slot 1 key; this is R2 NOTE-5. It is moot while Together does not render addon hints.
- **N9. Fire-station figure.** The "street" label has no leader line; R1 noted this, and §10.4 declined it. It is acceptable: the road is drawn right below the label.
- **N10. Similar on the last item of a set.** On 2.b C05 (set 1, position 5), Similar, then "Finish this set", returns to the set's end screen, "End of set 1". The player state still reports C05, which is correct behaviour.

## 3. Whole-ladder audit (choices left after each hint)

"Live" follows AUTHOR-BRIEF: a choice the hints' logic rules out is not live. The clue is not rendered in own mode (player.js:270 `hintsOf` uses `hints` when present), so for core and similar items only hints 1 to 3 are counted. K = key.

| Item | After h1 | After h2 | After h3 | Settles more than one blank, or leaves only the key? |
|---|---|---|---|---|
| 2.a P4 (match, 4 rows) | 4 open | 4 open | 3 open | no |
| 2.a P7 (2 slots) | 3 / 3 | 3 / 3 | slot 1: K, ¶2-main-idea; slot 2: K, queen-eggs | no |
| 2.a C03 | 3 | 3 | K, farmers | no (but MUST-1) |
| 2.a C04 | 4 | K, Thousands, Working Together | K, Thousands (not in ¶2) | **only K** (SHOULD-2) |
| 2.a C05 | 4 | K, is-main-idea (dead), not-about-tomatoes | K | **only K** (SHOULD-1) |
| 2.a C06 (pick 2) | 6 | 6 | busy-building, 2 K, (doors and pole are one-section) | no |
| 2.a P3 (pick 2) | 5 | 5 | 2 K + thousands (weak) | near; acceptable (R2 fix made) |
| 2.a C08 | 4 | K, dressed | K | **only K** (SHOULD-1) |
| 2.a C09 | 4 | 4 | K | **only K** (MUST-2) |
| 2.a C10 (2 slots) | 3 / 3 | slot 1: K, box | slot 1: K, box; slot 2: K, fun-fact | no (SHOULD-3 distractor) |
| 2.a C11 | 6 | 6 | K, 1:3, 3:3, 5:1, 1:1 | no |
| 2.a C12 | 4 | K | K | **only K** (MUST-3) |
| 2.a C13 | 4 | 4 | K, backward, both-ready | no |
| 2.a C14 | 3 | 3 | K, chain-and-pedal | no |
| 2.a P5 (ebsr) | A 4, B 5 | A 4, B 5 | A: K, five-eyes, eat-honey; B: open | no |
| 2.a S01 / S02 / S03 | 4 / 5 / 4 | 4 / 5 / 4 | K + 2 / 2 K + beak, quack / K, backward, both | no |
| 2.b P4 (2 slots) | 3 / 3 | 3 / 3 | slot 1 settled; slot 2: 2 | settles one blank only |
| 2.b C02 | 5 | 5:1, 5:3, 5:4, 6:1 | 5:1, 5:3 | no (R2 NOTE-6) |
| 2.b C03 (pick 3) | 6 | 6 | 5 | no |
| 2.b C04 | 4 | 4 | K, leave-as-is | near (SHOULD-3) |
| 2.b C05 | 4 | 4 | K | **only K** (SHOULD-4) |
| 2.b C06, C11 (order) | open | open | first step or one pair fixed | no |
| 2.b C07 (ebsr) | A 4, B 4 | ¶2 holds 2 Part B choices | A: K, before-Paris, Ferris-already | no |
| 2.b C08 (match) | 4 | 4 | 3 open | no |
| 2.b C09 | 4 | 4 | K, instead-of-tower, riders-scared | no |
| 2.b C10 | 5 | 5:1, 5:3, 6:1 | K, 5:3 (weak) | near (SHOULD-5) |
| 2.b C12 | 3 | 3 | K, pump | no |
| 2.b C13 | 4 | 4 | K, bubbles, tire | near (N1) |
| 2.b C14 | 4 | 4 | K, holes-first, bakes | no |
| 2.b C15 | 4 | 4 | K, backward, both-steps | no |
| 2.b S01 | 4 | K | K | **only K** (MUST-4) |
| 2.b S02 | 4 | K | K | **only K** (MUST-5) |
| 2.b S03 | 4 | 4 | K, cold-spoon, wooden-spoon | no |
| 2.c C01 (one per passage) | all | all | p1: K, 3:2; p2: K, 3:1, 3:3 | no |
| 2.c C02 | 4 | 4 | K, feeders, eat-besides-nectar | no |
| 2.c C03 | 4 | 4 | K, long-time, sandy | no |
| 2.c C04 | 4 | 4 | K, palmetto (sandy is absurd) | near (SHOULD-6) |
| 2.c C05 | 2 / 2 | 2 / 2 | blank 1: 2; blank 2 settled | settles one blank only |
| 2.c C06 (2 slots) | 3 / 3 | 3 / 3 | 2 / 3 | no |
| 2.c C07 (match) | 5 | 5 | 4 open | no |
| 2.c C08 (pick 2) | 5 | 4 | 2 K, sheets, blocks | no |
| 2.c C09 (order) | open | open | first step fixed | no |
| 2.c C10 (ebsr) | A 4, B 4 | A 4, B 4 | A: K, energy, aluminum | no (hint 2 is the strategy, not a location) |
| 2.c C11 (ebsr) | A 4, B 5 | each passage holds 2 or more Part B choices | A: K, soccer-ball, fans | no |
| 2.c C12 (2 slots) | 3 / 3 | 3 / 3 | slot 2: K, open-net | no |
| 2.c C13 | 4 | 4 | K, ran-faster | no |
| 2.c C14 | 4 | 4 | K, cold-gym, hoop-and-net | no |
| 2.c C15 | 4 | 4 | K, 8:15-only | no |
| 2.c S01 / S02 / S03 | 4 / 4 / 4 | 4 / K-ish / 4 | K + 2 / K, holes / K + 2 | S02 near (SHOULD-7) |

**Within-set and Together pre-answers.**
- The changed sets are clean.
  - 2.c set 2: C07's how does not quote the bottles or truck sentences that C08 keys, and C09 does not carry C10's food-scraps key.
  - 2.a set 3: C11's how lists the three sections but does not state C12's key.
- **Together against set 1:**
  - 2.a P1 and P2 no longer name the queen paragraph (R1 S3 fix confirmed).
  - 2.b Together P1 (stage order) and P5 (cause/effect match) do not give P4's "so/because", C02's "hangs upside down" or C03's time words.
  - 2.c Together does not mention Georgia, blurred wings or sweetgrass.

**Leaks into test and testB:**
- 2.a test uses p2 (armadillo) and testB uses p3 (tree trunk); 2.b test uses p2 (water cycle) and testB uses p3 (Pony Express). No core or similar item uses these passages, and the n-gram scan shows no content match.
- Frame matches with a different passage are acceptable: 2.a C10 against TB4; 2.c C07 against T2 (R2 NOTE-9).
- 2.c has no testB. That is by design (inventory: `current_testB` = 0).

**Topic search** (`ngram.js`, 5- and 6-grams of all lesson text against every other lesson, set and task, plus a grep of 36 topic terms):
- New topics with **no** hit elsewhere: Brooklyn/Roebling, kudzu, Ferris/Eiffel, Pony Express, sweetgrass/Gullah, chipmunk, Cedar Avenue, yeast (R-LIT-02 has only dumpling dough), Naismith.
- Hits:
  - C03 (MUST-1);
  - recycling bins (N4);
  - bike (N3);
  - pre-existing bees, monarch and hummingbird overlaps (N5);
  - the T-TS comments recording that fire stations and the bike tube stay in T-T2 (confirmed: T-TS.js:453, 3021, 3188).
- Everything else is instruction boilerplate.

## 4. Fact verification

| Claim | Verdict | Source |
|---|---|---|
| **Brooklyn Bridge (2.b C05).** Only boats crossed in the 1860s | Confirmed: "the only travel between the two cities was by a number of ferry lines" | https://en.wikipedia.org/wiki/Brooklyn_Bridge |
| Ice stopped the boats in some winters, so leaders decided on a bridge | Supported: the East River froze repeatedly, and after the 1866–67 winter "a public outcry … led ultimately to the construction of the Brooklyn Bridge" | https://oldsaltblog.com/when-new-york-harbor-froze/ |
| John Roebling hurt in an accident and died before building began | Confirmed: a ferry crushed his foot (June 1869), he died of tetanus the next month, and construction began January 2, 1870 | https://en.wikipedia.org/wiki/Brooklyn_Bridge ; https://en.wikipedia.org/wiki/Emily_Warren_Roebling |
| Washington very sick from working deep under the river, had to stay in his room | Confirmed: caisson disease from the caissons; he directed work "through a telescope from his bedroom" | same |
| Emily carried his instructions to the workers | Confirmed: she "relayed information from Washington to his assistants" | https://en.wikipedia.org/wiki/Emily_Warren_Roebling |
| Opened 1883; Emily first to ride across | Confirmed: opened May 24, 1883; she was "the first to cross the bridge by carriage" | same |
| **The first fire hoses were made of leather (2.a p4 box)** | Confirmed: Jan van der Heyden's sewn leather hose, patented 1671. Horse-drawn apparatus confirmed too | https://www.ffam.org/the-development-of-fire-hose/ |
| **Yeast eats sugar, gives off gas; bubbles make dough rise; baking leaves holes (2.b C14)** | Confirmed | https://www.microbehunter.com/why-does-bread-have-holes-the-science-behind-yeast-and-bread-rising/ |
| **Chipmunks: cheek pouches, food stored in the burrow, sleep much of the winter and wake to eat (2.c S01)** | Confirmed: they "sleep much of the winter, waking periodically to eat" stored food | https://www.pa.gov/agencies/pgc/wildlife/discover-pa-wildlife/chipmunk.html |
| **Community garden (2.a S03): March soil prep, rabbit fence, August tomatoes, peppers and okra** | Fictional local setting; seasonally plausible for Georgia. No real place or person | — |
| **Recycling cans (2.c p7/p8):** cans compacted into bales or cubes; shredded and melted; rolled into thin sheets; made into new cans; back on the shelf in about 60 days; much less energy (95%) | Confirmed. The magnet that pulls out steel cans was not on the two pages I fetched; R1 confirmed it from Every Can Counts | https://www.canpack.com/insights/the-aluminum-can-recycling-process-turning-used-cans-into-new-possibilities/ ; https://wastecare.com/articles-info/aluminum-recycling-process.htm ; https://everycancounts.co.uk/can-recycling/ (R1) |
| **Sweetgrass (2.c p5/p6), the plant:** sandy coastal soils; clumps as tall as a third grader; pink plumes in late summer | Confirmed: dunes and coastal sandy soils; clumps 3–4 ft; blooms August–December, purplish to pink | https://plants.ces.ncsu.edu/plants/muhlenbergia-sericea/common-name/sweet-grass/ ; https://www.nrcs.usda.gov/plant-materials/news/sweetgrass |
| Revised wording: "Along the coasts of Georgia and South Carolina, many Gullah Geechee families…" | Confirmed: Geechee is the Georgia islanders and Gullah the South Carolina islanders; the Gullah coast runs from Sandy Island, SC to Amelia Island, FL | https://www.georgiaencyclopedia.org/articles/arts-culture/geechee-and-gullah-culture/ |
| Revised wording: "their ancestors were taken from West Africa and forced to work as enslaved people on rice farms" | Accurate: "enslaved on island plantations to grow rice, indigo, and cotton"; "descendants of enslaved West Africans"; fanner baskets for winnowing rice. See N7 on "plantations" | same; https://www.thehenryford.org/explore/blog/the-sweetgrass-basket--an-african-american-tradition |
| Coils sewn with palmetto; large baskets take weeks; dried grass used; skill passed down | Confirmed: "a single basket could take weeks or even months" | The Henry Ford (above); NRCS (above) |
| Dried sweetgrass smells like fresh hay | Not re-verified (NRCS gives a "fresh, corn silk fragrance" for the leaves). R1 confirmed it from Britannica | https://www.britannica.com/art/sweetgrass-basket (R1) |
| **Basketball net cord (2.c p10):** closed nets, someone pulled a cord to let the ball out, then open nets | Confirmed: some early closed nets had "an attached cord" that was pulled to force the ball out; the net was opened at the bottom in 1912 | https://core77.com/posts/21821/the-design-of-basketball-part-1-the-role-of-new-england-snow-and-poor-equipment-design-21821 ; https://en.wikipedia.org/wiki/Net_(basketball) |
| Ladder to get the ball out of the peach basket | Confirmed (core77). National Geographic says a person was "stationed at each end" to retrieve it; consistent | core77 (above); https://www.nationalgeographic.com/history/article/basketball-only-major-sport-invented-united-states-how-it-was-created |
| Backboard added to keep balcony fans away; hoop 10 ft | Confirmed: "introduced in 1895 in order to prevent fans sitting in balconies from interfering" | https://kids.britannica.com/students/article/basketball/273121 |
| Peach baskets on the balcony rail, soccer ball, no running with the ball | Confirmed | National Geographic (above) |
| **Ferris "Many people doubted his plan. They said a wheel that big would fall down" (2.b p4)** | **Accurate.** "Daniel Burnham and his team thought the idea to be unsafe"; organisers first called it "dangerous, undignified, and unrealistic". "Fall down" is a fair grade-3 rendering of "unsafe", and R1 cites visitors' fears that it would topple | https://en.wikipedia.org/wiki/Ferris_Wheel_(1893) ; https://retrospectjournal.com/2022/11/27/round-and-round-went-the-great-big-wheel-the-history-of-an-eponymous-fairground-ride/ |
| Ferris details: built winter 1892–93; test June 9, opened June 21, 1893; 264 ft (taller than 20 stories); 36 cars of up to 60 | Confirmed | https://en.wikipedia.org/wiki/Ferris_Wheel_(1893) |

**Unreachable:** `en.wikipedia.org/wiki/Sweetgrass_basket` (url_not_found). An earlier `curl` attempt (403 from the proxy) was abandoned, per the coordinator.

## 5. Earlier findings: confirmation

I checked each item against the current data, not against the log.

**B2-review-T2-1:**

| Finding | Status |
|---|---|
| M1 (station dog) | Cleared. The box is now horses and leather hoses, and no dog appears |
| M2 (library S03) | Cleared. S03 is a community garden, `like: [C13]` |
| M3 (Garrett Morgan) | Cleared. Brooklyn Bridge, with no other hit on the site |
| M4 (bike tube) | Kept per the lead. TS-SEQ now uses a different procedure (T-TS.js:453) |
| M5 (C01) | Cleared. "State" removed, 6 targets, hint 3 rules out the hover sentence only |
| M6 (C03) | Cleared. The "very long time" distractor is in both texts, hint 2 is a search strategy, and "bends" is gone |
| M7 (C05) | Cleared. "and how it is dried" removed |
| M8 (hint 2 in the ebsr, now C10) | Cleared |
| M9 (truck word search) | Cleared. Replaced by the C08 ms |
| M10 (C06 row 3) | Cleared. The row is now "cans are recycled instead of thrown away", explicit in both texts |
| S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12 | All made. Bike chain leader at (107,189), verified in the SVG and the render; "cord" in p10 |
| Notes | "Laughed" changed to "doubted"; "smell lasts many years" deleted; 2.b C10 and C13 relabelled DOK 2 |

**B2-review-T2-2:**

| Finding | Status |
|---|---|
| MUST-2a-1, MUST-2b-1, MUST-2c-1 to MUST-2c-4 | Cleared, as above. The old C09 (can and energy) was removed and set 2 reordered |
| SHOULD-2a-1 | Done. S03 maps to set 3 |
| SHOULD-2a-2 | Done, with one caveat: C09's hint 2 was fixed, but the new hint 3 names the gear (MUST-2). P3's hint 3 ends neutral; C13's absurd distractor was replaced |
| SHOULD-2a-3 | Done |
| SHOULD-2b-1 | Done. Yeast |
| SHOULD-2b-2 | Done. C12 option shortened; C13 is DOK 2 |
| SHOULD-2c-1 | Done |
| SHOULD-2c-2 | Done. Old C14 replaced |
| SHOULD-2c-3 | Done. DOK 2 |
| SHOULD-2c-4 | Done. New C06 and C14 |
| SHOULD-2c-5 | Done. Chipmunk S01, new hint 2 |
| NOTE-7 | Done. "Check the two choices that are left" |
| NOTE-8 | Partly done: S01 is "Fixing a Flat Tire"; C10 slot 2 declined |

**The §10 author log.** Every listed fix is present in the data, and I found no claim of a fix that was not made. Five points are inaccurate or incomplete:
1. §10.2 overstates live choices for 2.a C05 (after hint 3), C08 (after hint 2) and C09 (after hint 3). See SHOULD-1 and MUST-2.
2. §10.3's topic search did not cover the unchanged new item C03 (MUST-1). The post-B1 rule asks for every topic.
3. §10.4 omits R1's FK 1.9 note on 2.b p5 (N6).
4. **Gates claim, confirmed:** `check-content.js --all` gives PASS, 0 failures, with the same similar-coverage warnings (2.a 11, 2.b 10, 2.c 6).
5. **Readability claim, confirmed:** `readability.py` gives FK 1.9 to 4.4.

## 6. Browser check (port 8797, 320×568)

**Setup.** Server: `node verification/serve.js . 8797`. Script: `b2rr-t2/pw.py`; results: `b2rr-t2/pw-result.json`; screenshots: `b2rr-t2/shots/`. Each lesson ran in a fresh browser context. **All 45 core items** were exercised as follows:
1. Opened the Passage tab, then the Question tab.
2. Made a wrong answer (a real click on a wrong choice for mc and ms) and pressed Check my answer.
3. Took hints 1 to 3.
4. Pressed Show me how.
5. Where a similar item applies, opened Try a similar question, took a hint, solved it, and pressed Next.

| Check | 2.a | 2.b | 2.c |
|---|---|---|---|
| Check my answer on a wrong answer gives "Not quite. Try again, or ask for a hint." | 15/15 | 15/15 | 15/15 |
| Hints 1–3 show the authored `hints[0..2]` in order; the button ends disabled; no `.is-hint` outline | 15/15 | 15/15 | 15/15 |
| Show me how lists every `how` step plus "The answer…"; status "Answer shown" | 15/15 | 15/15 | 15/15 |
| Try a similar question visible exactly when an unused `like` match exists; opens "Extra question (not one of the fifteen)"; Similar hidden on it; solved; Next returns to the following core item | P4→S02→P7, C04→S01→C05, C13→S03→C14 | C04→S01→C05, C05→S02→end of set 1 (N10), C14→S03→C15 | C01→S01→C02, C02→S03→C03, C04→S02→C05 |
| Horizontal scroll (passage view, question view, after Show me how, similar item) | none | none | none |
| Console errors | none from the site | none | none |

The only console error in each run was `net::ERR_TUNNEL_CONNECTION_FAILED`, which is the blocked Google Fonts request in the sandbox, not site code.

**Figures.** Rendered to PNG (`b2rr-t2/tt2-c-fire-station.svg.png`, `tt2-c-bike.svg.png`) and viewed.
- **Fire station:**
  - The pole runs from the bunk room down through the floor and ends right beside the gear rack, and the gear rack is beside the truck. That matches C09 and the alt text.
  - The kitchen is upstairs; the truck faces the dashed big doors; the road is outside.
  - The "street" label floats without a leader (N9).
- **Bike:**
  - Seat, handlebars, brake lever, pedal and chain are all labelled, and the chain leader now ends on the lower chain run.
  - There is no rider. That matches C14 and the alt text.
- Neither figure shows a person.

## 7. Required actions, in short

1. **2.a C03:** new setting, not a market, with a topic grep (MUST-1).
2. **2.a C09:** hint 3 stops after ruling out the kitchen (MUST-2).
3. **2.a C12:** hint 2 becomes location-only (MUST-3).
4. **2.b S01:** generic hint 2 (MUST-4).
5. **2.b S02:** hint 2 no longer points to the key sentence (MUST-5).
6. **Recommended:** SHOULD-1 to SHOULD-7.
7. **Afterwards:** a short blind re-check of the five MUST items only.
