# B2 re-review 2: TS-SEQ, TS-DESC, TS-CE and TS-CC

**Role:** independent final reviewer. I wrote none of these lessons and none of the earlier B2 TS reviews. I had not seen these lessons before this pass.
**Scope:** the TS-SEQ, TS-DESC, TS-CE and TS-CC blocks of `js/data/lessons/T-TS.js`. TS-PS is out of scope and was not reviewed.
**Read-only:** I wrote only this file and scratch files under `scratchpad/b2rr-ts2/`. I ran no git and started no server.

## 1. Blind solve

**Method**
- `b2rr-ts2/load.js` loads T-TS.js through a stub `PP.addLesson`.
- `b2rr-ts2/blind.js` (seeded LCG, seed 20261023) prints only the changed items named in the brief:
  - TS-SEQ C02, C04, C06, C08, C10
  - TS-DESC C04, C08, C10, C11, C14, S01, S02, P5, P6, plus every item on passage p3 (C06, C07, C09)
  - TS-CE P1, C09, C12
  - TS-CC P5, C02, C07, C12, S03
- It prints the passages, stems, prompts and shuffled choices, Part A/B choices, hot-text targets, order steps, dropdown options and match rows. It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample` and `criteria`, including the nested `partA`/`partB`/`slots`/`rows` fields. It also flags any field it does not recognise; there were none.
- The shuffle map went to `blindmap.json`, which I did not open. I saved `answers.json` and only then ran `cmp.js` (`cmp.txt`).

**Result: 25 of 25 agree (100%).**

**How blind it was (honest note)**
- Before solving I saw:
  - the first 1,500 characters of T-TS.js: the TS-SEQ header, clue words and coach text, but no items
  - the last 600 characters: TS-DESC form A item T5, which is a test item outside the solve
  - item field names (no values), and the engine code for hot text and hints
  - one example of each item type from T-T1.js, another lesson
  - the file names in the earlier reviewer's `b2rr-ts/` folder. I opened only its `load.js`, a three-line loader.
- I did not open the lesson source for these items, the author logs or any review until `answers.json` was saved.
- The printout showed the `like` field on similar items. That is metadata, not a key.
- So the solve was blind. It covered only the 25 changed items, not all fifteen per lesson. No item was hard, which matches the earlier finding that these sets sit at the easy end of grade 3.

## 2. A player fact the ladder audit depends on

- **Core and similar items:** `player.js` `hintsOf()` shows `hints[0..2]` and never shows the `clue`.
- **Together items:** `help()` shows the `clue`, then the engine's narrowing step, then the `why` with the answer.
- **Refs:** a core lesson's Together set is `practice` minus the core refs (check-content prints SEQ P1–P3 and P6; CE P1–P3 and P6; CC P1–P4; DESC P1–P4).
  - So a ref's own `clue` is never shown at all. DESC P5's clue ("…Pick the clue word that adds a detail") still names the key's job, but it is moot (NOTE-9).
- I checked the clue too, as the author brief asks. The live ladder for core and similar items, though, is hints 1–3. For Together items it is the clue.

## 3. Whole-ladder audit

I printed every core, similar and Together item with its key, clue, hints and choices (`ladder-<lesson>.txt`), and listed the live choices after each hint. "Live" follows the brief: a choice that the hints' logic rules out is dead, even if no hint names it.

The table lists only items that fail, or that differ from the author's own live count. Every other core and similar item has at least two live choices per part or blank after hint 3, and no hint settles more than one blank.

| Item | Live after hint 3 | Author log says | Verdict |
|---|---|---|---|
| CC C12 | key only | key and "kayak, closed on top" | **MUST-1** |
| CC C03 (ref P6) | the two keys only | not re-checked (unchanged) | **MUST-2** |
| SEQ C02 | key only in practice: "last step" was never live, and "first step" is refuted by hint 2 and by Together P1 | key and "first step" | SHOULD-1 |
| SEQ S03 | key only once hint 2's year is worked out | not re-checked (unchanged) | SHOULD-3 |
| SEQ C04 | key and the "lump" distractor. The ladder passes, but set 1 item 1 (P4) already shows the lump forming before the buttermilk is poured | same, disclosed in §10.2 | NOTE-1 |
| CC C02 | keys and "where they live" (three for pick two). Hint 3's logic ("seen on a frog sitting still") also removes dry, bumpy skin | keys, dry skin and "where they live" | passes; NOTE-2 |
| CC S03 | key and "the puffy coat… very warm". Hint 3 only repeats hint 1 | same | passes; NOTE-3 |
| DESC C06 Part B | key only. Hint 3's "only one section, so a detail" logic removes the three section-detail sentences. Part A keeps two (key, "drive to a park") | not listed | passes the "at most one part settled" rule; NOTE-6 |
| CE C07 | because, so that | (unchanged) | passes, as in re-review 1 NOTE-3 |

**Earlier items in a set, and Together items.** I ran a 4-gram scan from each core key back to the earlier items' prompt, why, how and hints, and to the Together prompt, clue and why for set 1 (`leaks.js`). I read every hit. None states a later key. The distractor-only and echo links are NOTE-4.

**Test and testB.** No core or similar item uses a form A or form B passage. SEQ, DESC and CC use p2 for form A. CE uses p2 for form A and p3 for form B. The six-gram scan finds only schema boilerplate and the taught rule "the sentence tells the effect first" (NOTE-7). One cross-lesson check-rehearsal risk is SHOULD-2.

**Cross-lesson topics.** I grepped all of `js/data/lessons/*.js`, `js/data/sets` and `js/data/tasks`:
- seahorse or sea horse: T-TS only
- gym closet, dodgeball, foam ball: T-TS only
- butter-making (buttermilk, heavy cream, whipped cream): T-TS only. "Butter" elsewhere is a list word, "buttery" or a GUM fragment.
- wagon kitchens, cattle drive: T-TS only. Other "wagon" hits are phonics, GUM and two "long ago… wagons" boxes (NOTE-8).
- One key-frame overlap matters: "bony plates" and the armadillo check (SHOULD-2).

## 4. Findings

### MUST

**MUST-1. TS-CC C12: hint 3 echoes the key and leaves only the key.**
- Key: "a canoe, because it has room for more people and gear."
- Hint 1, "A fact true of both cannot help you choose", removes "a canoe, because both boats are moved with paddles."
- Hint 3: "A paddle with two blades does not change **how many people or bags a boat can hold**, so that reason does not help her."
  - That states the deciding test in the key's own terms ("room for more people and gear").
  - By the same test, the last distractor, "a kayak, because most kayaks are closed on top", is dead: a closed top does not let a boat hold more.
- Nothing is left but the key. This is the B0 reviews' commonest fault: hint 3 echoes the key.
- The b2c §10 claim that the closed-top choice stays live is not supported once hint 3's logic is applied.
- **Fix** (keeps two real-but-irrelevant differences live):
  - Hint 1: "To choose between two things, use a difference that matters for the job." Drop the "true of both" sentence here.
  - Hint 3: "Both boats are moved with paddles, so that fact cannot help her choose. Check each choice that is left against the article."
  - Live after hint 3: the key, the two-blade paddle and the closed top. The child must still judge which difference matters for three people and a tent.

**MUST-2. TS-CC C03 (ref P6, unchanged): after hint 3, only the two keys are left.**
- Choices:
  - keys: "Both are amphibians." and "They eat lots of insects…"
  - distractors: "A frog has smooth, wet skin.", "Toads usually walk or take small hops." and "Their legs are not the same, either."
- Hint 1, "To be alike, a fact must be true of both animals", removes both one-animal sentences by its own logic.
- Hint 3 then rules out "Their legs are not the same, either." That is the only strong distractor: it is about both animals, but it tells a difference.
- That leaves exactly the two keys for a pick-two item. This is the same pattern as re-review 1 MUST-3 (SEQ C08).
- **Fix:** keep hint 1. Have hint 3 rule out a one-animal sentence instead: "'A frog has smooth, wet skin' is about only one animal, so it cannot show how they are alike. Check each sentence that is left."
  - Live after hint 3: the two keys and "Their legs are not the same", which is the item's named misconception.
  - Update the `how` if it mentions the order of the rule-outs. It does not today.

### SHOULD

**SHOULD-1. TS-SEQ C02: the prompt is fixed, but the item still comes down to the key.**
- The re-review 1 SHOULD-1 fix (the new prompt) is in place.
- "It tells the last step, so you know when the butter is ready to eat" has no pull from the start. Paragraph 1 is plainly the opening.
- "It tells the first step, so you know how to start shaking the cream" is refuted three ways:
  - Hint 2 says to compare paragraph 1 with paragraph 2's first sentence, which begins "First,".
  - Together P1's `why` (shown in Together) says "Paragraph 2 starts that step with the clue word First."
  - C01 hint 3 (set 1 item 1) says pouring "happens in paragraph 2, before any shaking."
- Hint 3 removes "what can go wrong".
- This is a distractor-quality problem rather than a hint that states the answer, so it is a SHOULD.
- **Fix:** replace the "last step" choice with a live near-miss tied to paragraph 1's opening question. For example: "It asks a question, so you know the passage will explain why cream turns into butter." The passage never explains why.

**SHOULD-2. TS-DESC C14: the seahorse key mirrors the key of 3.T.T.2.a form A item T1.**
- C14 key: "A seahorse has a body that helps it stay safe and get food in the sea."
- T-T2.js 3.T.T.2.a form A, T1 ("What is this article mostly about?", armadillo p2) key: "how an armadillo's body helps it find food and stay safe."
- That passage also uses "bony plates" for safety, as C14's sentence 4 does. Its T3 key ("body helps it find food") and T4 ("does NOT support the main idea") are the same frames as DESC C12 and S03.
- TS-DESC carries code 3.T.T.2.a, and C14's `std` includes it, so this is practice for that same check.
- Why it is not a MUST:
  - The animal and the facts differ, so §4.3 rule 4's "key fact" is not shared.
  - T1's key is stated outright in the armadillo passage's first and last paragraphs.
  - The risk is answer-pattern rehearsal, not new information.
- The cactus fix (re-review 1 MUST-1) avoided the Watch Me fact but landed on the check's main-idea wording.
- **Fix:** give the seahorse paragraph a big idea other than "stay safe and get food".
  - For example, "A seahorse's body is made for life among sea plants": the tail grips the plants, the color matches them, and the snout reaches between them for tiny shrimp.
  - Drop or replace the bony-plates sentence.
  - Keep "has to hide from crabs" as the near-miss, and re-check that two choices stay live after hint 3.

**SHOULD-3. TS-SEQ S03 (similar, unchanged): hint 2 names the misplaced sentence, and its arithmetic then settles the item.**
- Hint 2: "Find the sentence that has no year. Work out what year it is talking about." That is sentence 3, the one to move.
- Once 1960 is worked out, the other sentence 3 choice, "Move sentence 3 so it comes right after sentence 4" (after 2001), is plainly wrong. Hint 3 removes "Move sentence 5".
- This is the same weakness re-review 1 raised as SHOULD-2 for C10.
- **Fix:** change that distractor to "Move sentence 3 so it comes right after sentence 2." That puts 1960 after 1968, a near-miss. The child must then compare 1960 with 1968, not just find 1960.

### NOTE

1. **SEQ C04.** The new "lump forms after the buttermilk is poured off" distractor clears the ladder (key plus that choice). But C01 (ref P4, set 1 item 1) lists "Hear a thump when a yellow lump forms" before "Pour off the buttermilk". So a child who has just done C01 can rule it out. Any wrong-order reason in this item will be refuted by C01's step list, so this is inherent and acceptable. The author disclosed it (b2b §10.2).
2. **CC C02.** It passes with three live choices for pick two. The b2c log counts "dry, bumpy skin" as live, but hint 3's own reason (skin can be seen on an animal sitting still) applies to it equally. The margin rests on "where they live".
3. **CC S03.** It passes. Hint 3 ("A hood and a zipper are on both coats, as hint 1 says") adds no new scaffold. It could instead prompt the child to restate tomorrow's weather, without testing the choices.
4. **Earlier-item and Together links (distractors or echoes, not keys):**
   - SEQ C06's `why` lists "First, Next, Over thousands of years and After a very long time". That names C08's two keys alongside two of its distractors, without sorting them.
   - CE C08's frame ("came first and led to all of the others") comes before C09's key wording ("shows how one led to another").
   - CC Together P1's `why` ("Each of the other choices is true of only one of the animals") covers "Both live far from ponds". That weakens Like in C01 (P5).
   - CE Together P3's `why` models exactly the "effect first, cause after because" reasoning that C04 then tests on a new sentence.
   - DESC Together P1's `why` (feet are for moving) and P4's distractors (diving, draining) pre-sort C01's distractors. The author disclosed this.
   - DESC C08's `how` calls the wagon kitchens a fun fact before C10. This was disclosed and cannot be removed.
5. **CE C09.** It passes with the key and "compares the signals of long ago with traffic lights today", which paragraph 5 supports enough to be live. MUST-4 from re-review 1 is cleared.
6. **DESC C06.** Part B's key, "But inside, it holds a whole kitchen on wheels", shares "holds a whole kitchen" with Part A's key. Hint 3's one-section logic leaves Part B settled. Part A keeps two live, so the item meets the rule, but Part B is weak.
7. **Taught rule shared with a check `why`.** CE C04's and S01's `why` say "The sentence tells the effect first and the cause after the clue word because." CE form A T2's `why` says the same. That is the skill, not an answer, and it predates this round.
8. **"Long ago… wagons" fun facts.** DESC p3's "Long ago, kitchens on wagons fed cowboys on long cattle drives." joins two similar boxes:
   - T-SS.js "Long ago, the first bookmobiles were wagons pulled by horses."
   - T-T2.js "Long ago, horses pulled fire wagons…"
   All three are fun facts in headed descriptions. The facts differ, so rule 4 is not broken. It is a repeated distractor archetype worth varying in later batches.
9. **Clues on refs are never shown.** DESC P5's clue names the key's job, and the b2c log says CC P5's clue is "shown in Together". Both are refs, so neither clue reaches the child (§2). That is harmless today, but it matters if a ref ever goes back to Together.
10. **cr items show `points` undefined** (CE C11, CC C15). check-content passes, and these items are not auto-scored. No action.

## 5. Earlier review: cleared or not

| Re-review 1 finding | Status (live data) |
|---|---|
| MUST-1 DESC C14 cactus | **Cleared** (seahorse; the topic is unique across lessons, sets and tasks). New issue: SHOULD-2 |
| MUST-2 SEQ C04 | **Cleared.** The key and the lump distractor stay live. Residual: NOTE-1 |
| MUST-3 SEQ C08 | **Cleared.** Hint 1 uses "then and after that". Hint 2 covers every target. After hint 3: the two keys, First, Next and "not done yet" |
| MUST-4 CE C09 | **Cleared** (NOTE-5) |
| MUST-5 CE C12 | **Cleared.** Four live: the two keys and the two with-fire effects |
| MUST-6 CC P5 | **Cleared.** Hint 2 is neutral, and Unlike and Like stay live after hint 3 |
| SHOULD-1 SEQ C02 | Done in form (prompt). **Not cleared in substance** (SHOULD-1 above) |
| SHOULD-2 SEQ C10 | **Cleared.** "3 after 1" replaces "3 after 5" |
| SHOULD-3 SEQ C06 hint 2 | **Cleared** |
| SHOULD-4 DESC P6 | **Cleared.** Hint 3 rules out "large bird", and "flies low over the waves" is a live near-miss |
| SHOULD-5 DESC C11 | **Cleared.** Four live for pick two |
| SHOULD-6 CC C02 | **Cleared** (NOTE-2) |
| SHOULD-7 CC C07 | **Cleared.** Part A: key, "own age" and "math but not read". Part B: key and slates |
| SHOULD-8 CC C12, S03 | S03 **cleared** (NOTE-3). C12's new hint 3 creates **MUST-1** |
| SHOULD-9 DESC p3 food-truck history | **Cleared** |
| SHOULD-10 DESC S02 recycling | **Cleared** (gym closet; `like` is C07 only) |
| NOTE-6 DESC S01 | **Done.** The roots are now a live near-miss part |
| NOTE-7 CE S01 DOK | **Done** (DOK 2) |
| §6 DESC P5 `std` | **Done** (`["3.T.SS.1.a"]`) |
| §6 DESC C04 "pictures" distractor | **Done** (young pelicans' brown heads, which is true: §6) |
| NOTE-1 CE P1 Together clue | **Done.** The new clue names no paragraph, clue word or choice. All four choices stay live after it |

**Are the logs accurate?**
- Every concrete change claimed in b2b §10 and b2c §10 is present in the data:
  - wordings, distractors and `like`
  - the seahorse grep
  - the DOK and `std` edits
  - CC C07 how step 4 ("tells a different difference")
  - DESC p3's FK of 3.6 at 172 words
- Three live-choice claims are overstated:
  - b2c on CC C12: the closed top is not live (MUST-1)
  - b2b on SEQ C02: "first step" is not live (SHOULD-1)
  - b2c on CC C02: dry skin is not live (NOTE-2)
- b2c's statement that CC P5's clue is "shown in Together" is wrong in a harmless way (NOTE-9).
- Neither log hides an unaddressed finding. Each lists its open items with reasons.

**Items the authors left unchanged.**
- I judged every unchanged core and similar item in the four lessons through the same ladder.
- Two need work: CC C03 (MUST-2) and SEQ S03 (SHOULD-3).
- The rest pass. That includes CE C07 ("so that" stays a real trap) and SEQ C14 (the key echoes step 4, accepted in re-review 1).

## 6. Facts checked on the web

| Claim | Verdict | Source |
|---|---|---|
| Seahorses hold on to underwater plants with their tails rather than fight the current (C14 sentence 2: "curly tail wraps around seaweed") | Correct | [Chesapeake Bay Foundation, lined seahorses](https://www.cbf.org/blogs/save-the-bay/2022/01/miniature-marvels-lined-seahorses.html) |
| Seahorses change color to blend in (sentence 3) | Correct | [Project Seahorse FAQs](https://projectseahorse.org/saving-seahorses/seahorse-faqs/); [CBF](https://www.cbf.org/blogs/save-the-bay/2022/01/miniature-marvels-lined-seahorses.html) |
| Bony plates make seahorses a meal many animals skip (sentence 4) | Correct. Adults "are presumed to have few predators due to… unappetizing bony plates and spines" | [Project Seahorse FAQs](https://projectseahorse.org/saving-seahorses/seahorse-faqs/) |
| The snout sucks up tiny shrimp like a straw (sentence 5) | Correct in grade-3 terms. Prey is sucked "through a tubular snout"; it is mostly small crustaceans such as amphipods | [Project Seahorse FAQs](https://projectseahorse.org/saving-seahorses/seahorse-faqs/); [CBF](https://www.cbf.org/blogs/save-the-bay/2022/01/miniature-marvels-lined-seahorses.html) ("tiny crustaceans, which they vacuum up their tubular snouts") |
| Crabs prey on seahorses (C14 distractor B) | Correct | [Project Seahorse FAQs](https://projectseahorse.org/saving-seahorses/seahorse-faqs/) |
| Butter in a jar: cream near room temperature; fill the jar about half full; whipped cream after a few minutes; the fat separates from the liquid; pour it off; rinse the butter in cold water | Correct | [Popular Science, How to make your own butter](https://www.popsci.com/how-to-make-your-own-butter/) |
| "You will hear a thump"; the thin liquid is buttermilk; rinse under cold water | Correct ("you'll suddenly hear a lump of butter thumping around in the jar") | [Frugal Fun for Boys and Girls, butter in a jar](https://frugalfun4boys.com/how-to-make-butter-in-a-jar/) |
| "Long ago, kitchens on wagons fed cowboys on long cattle drives" | Correct. Goodnight converted an Army wagon into a mobile kitchen in 1866, and the cook made three hot meals a day on the drive | [NPS, The Chuckwagon](https://www.nps.gov/places/the-chuckwagon.htm); search result: [Texas Trail of Fame, Chuckwagon](https://www.texastrailoffame.org/inductees/chuckwagon) |
| Young brown pelicans have brown heads, and adults have white ones (DESC C04 distractor) | Correct. Immature birds are "dark brown overall"; adult heads are white, with a yellowish crown | [USGS Patuxent, brown pelican ID tips](https://www.mbr-pwrc.usgs.gov/id/framlst/Idtips/h1260id.html); [Audubon guide](https://www.audubon.org/bird-guide-api/1470) ("almost entirely grayish-brown above") |
| Venus flytrap: native to North and South Carolina; wet, acidic, sandy soil; trigger hairs on the inner leaf surface (S01) | Correct | [Kew, Venus flytrap](https://www.kew.org/plants/venus-flytrap); [NC Wetlands factsheet](https://www.ncwetlands.org/wp-content/uploads/NCWetlands.org-carnivorous-plant-factsheet.pdf) |
| "Its roots hold it in the sandy soil" (S01 distractor) | Acceptable. The sources describe thin, shallow roots that take in water. Anchoring is ordinary root function, but none of the fetched sources says it. No key depends on it | [How to grow a Venus flytrap (UFSCar PDF)](https://www.lbmm.ufscar.br/arquivos/how_to_grow_a_venus_flytrap.pdf); [Dr. Matt Lynch](https://www.drmattlynch.com/?p=15563) |
| "Named after a goddess from old stories" (S01 distractor) | Correct (Venus) | [Etymonline, Venus fly-trap](https://www.etymonline.com/word/Venus%20fly-trap) |

The All About Birds ID page (allaboutbirds.org/guide/Brown_Pelican/id) was blocked by a permission timeout and was not used.

## 7. Gates (read-only)

| Gate | Result |
|---|---|
| `node verification/check-content.js --all` | **PASS, 0 failures, 25 warnings** (exit 0). For these four lessons the only warnings are the accepted similar-coverage notices: SEQ 9, CE 10, CC 9 and DESC 10 core items without a similar item. The Together lists it prints match §2 |
| `python3 verification/readability.py` | Exit 0, nothing flagged (no "above grade 4.5"). I matched rows to lessons by word count. SEQ: p1 2.0, p2 3.4, p3 3.2, p4 4.1. CE: 3.2, 3.5, 2.7, 4.3, 4.0, 3.6. CC: 2.4, 4.3, 4.4, 3.9, 4.1. DESC: 3.3, 2.2, 3.6 (p3, 172 words), 3.2 |

## 8. Verdicts

| Lesson | Verdict | Blocking findings | Recommended |
|---|---|---|---|
| **TS-SEQ** | **ACCEPTED** | none | SHOULD-1 (C02 distractor), SHOULD-3 (S03 distractor) |
| **TS-DESC** | **ACCEPTED** | none | SHOULD-2 (C14 big idea mirrors the 3.T.T.2.a form A T1 key) |
| **TS-CE** | **ACCEPTED** | none | none |
| **TS-CC** | **CHANGES REQUIRED** | MUST-1 (C12 hint 3), MUST-2 (C03/P6 hint 3) | none |

Every key is right, and every item has one defensible answer. All passages are within FK 4.5, and nothing leaks into test or testB. Both MUSTs are single-hint edits. MUST-1 also moves one sentence from hint 1 to hint 3.

## 9. Round 2 re-check

**Scope:** the TS-CC MUST fixes (b2c §11) and the SEQ/DESC SHOULD fixes (b2b §11). I re-read the live data, not only the logs. I regenerated `b2rr-ts2/ladder-*.txt` from T-TS.js as last saved at 05:25:34. I wrote nothing outside this file and `b2rr-ts2/`, and ran no git. These items had been seen already, so this round is a ladder and correctness check, not a blind solve.

### 9.1 TS-CC

**CC C12 (MUST-1): cleared.**
- Hint 1 (and the clue) is now strategy only: "To choose between two things, use a difference that matters for the job."
- Hint 3 now carries the "true of both" rule-out: "Both boats are moved with paddles, so that fact cannot help her choose. Check each choice that is left against the article."
- The key-echoing test ("how many people or bags a boat can hold") is gone from every hint.
- Live choices:
  - after hint 1: all four
  - after hint 2: all four (it lists Ms. Grant's needs and points to the difference paragraphs, but names nothing)
  - after hint 3: the key, "a kayak, because its paddle has a blade at each end" and "a kayak, because most kayaks are closed on top"
- Both kayak reasons are real differences from the article. Nothing in the ladder says which difference matters, so judging that is still the child's work. The key is unchanged and correct.

**CC C03, ref P6 (MUST-2): cleared.**
- Hint 3 now rules out "A frog has smooth, wet skin" instead of "Their legs are not the same, either".
- Live choices (pick two):
  - after hint 1: the two keys and "Their legs are not the same, either". Hint 1's both-rule removes the two one-animal sentences.
  - after hint 2: the same three
  - after hint 3: the same three
- "Their legs…" stays live: it is about both animals but tells a difference, which is the named misconception.
- Hint 1's "check who a word like they means" applies to both "They eat…" and "Their legs…", so it does not single out a key.
- Hint 3 now names a choice that hint 1 has already removed, so it adds no new scaffold. Harmless.

**CC C02 (corrected claim): accurate.** b2c §11 now gives three live choices after hint 3: the two keys and "where they live" (p1:4:2). It no longer counts dry, bumpy skin. That matches NOTE-2. The item passes, narrowly.

**Log check (b2c §11).** Both changes are in the data as described. The three corrections to §10 (C12, C02 and the P5 clue "shown in Together") are accurate. The unaddressed NOTEs (Together P1 `why`, S03 hint 3) are listed with reasons.

### 9.2 TS-SEQ and TS-DESC

**SEQ C02 (SHOULD-1): cleared.**
- "It tells the last step…" is replaced by "It asks a question, so you know the passage will explain why cream turns into butter."
- Paragraph 1 does open with a question ("Did you know you can make butter in a jar?"), but the passage tells how, never why. So this is a real near-miss, and the key stays the only defensible answer.
- Live choices:
  - after hint 1: all four
  - after hint 2: the key, the question choice and "what can go wrong". "First step" is out once paragraph 2's "First," is seen.
  - after hint 3: the key and the question choice
- How step 4 explains the near-miss. The `why` does not mention it, which is optional.
- The corrected §10.1 claim in b2b §11 is accurate.

**SEQ S03 (SHOULD-3): cleared. The stem is correct and has exactly one valid fix.**
- The author was right that my suggested distractor was a no-op in the old stem: sentence 3 already came right after sentence 2. My error.
- The new stem order is: (1) 1950; (2) 1968; (3) 2001; (4) "Ten years after it opened" = 1960; (5) Today. Each claim is self-consistent:
  - two classrooms, then six more
  - the gym in 1968
  - the old gym became a library in 2001
- I brute-forced all 20 single moves ("move sentence a right after sentence b") plus every move to the front. Only "Move sentence 4 so it comes right after sentence 1" gives time order (1950, 1960, 1968, 2001, today). That is the key.
- Live choices:
  - after hint 2: the key and "4 after 2" (1960 after 1968), plus "5 after 1" until Today is placed
  - after hint 3: the key and "4 after 2", which needs the 1960 against 1968 comparison
- The how and why match the new numbering.
- New NOTE-11: "Move sentence 4 so it comes right after sentence 2" is word for word C10's key, in the same lesson. A child copying the C10 pattern would pick the wrong answer. That makes it a stronger distractor, not a giveaway. Acceptable.

**DESC C14 (SHOULD-2): cleared. The key is defensible and echoes no check item.**
- Stem details:
  - (2) the tail wraps around sea grass
  - (3) the skin matches the plants
  - (4) the tall, thin shape looks like a plant stem
  - (5) the snout reaches between the leaves for shrimp
- Key: "A seahorse's body is made for life among the plants of the sea."
  - Every detail ties a body part to the plants, so the key fits all four.
  - "Has to hide from crabs…" fits (3) and (4) only, and the paragraph never mentions crabs.
  - "The curly tail is the most useful part" is one detail and makes a claim the paragraph does not.
  - One defensible answer.
- Live choices after hint 3 (which rules out the hatching sentence): the key, the hiding near-miss and the tail choice.
- The how and why match the new details.
- **Check-item echo.** I scanned the correct choices of every form A and form B item in all of `js/data/lessons/*.js` for body, made for, built for, plants, sea grass and seahorse (`b2rr-ts2/chk-keys.js`). Four keys match a word. Only 3.T.T.2.a T1 ("how an armadillo's body helps it find food and stay safe") is near the old wording. The new key shares none of its content: no food, no safety, no bony plates.
- A frame-level likeness remains: the armadillo passage opens "An armadillo's body is made for digging and for staying safe". That is the same "X's body is made for…" pattern that TS-DESC's own pelican passage uses ("built for catching fish"). It is the description structure the lesson teaches, so it is a NOTE, not a finding.
- "Sea grass", "seagrass", "sea plants" and "made for life" occur in no other lesson, set or task.
- **Facts:**
  - The tail holds on to underwater grasses: [CBF](https://www.cbf.org/blogs/save-the-bay/2022/01/miniature-marvels-lined-seahorses.html).
  - Color change and hiding among seagrass blades: [Project Seahorse FAQs](https://projectseahorse.org/saving-seahorses/seahorse-faqs/); [BBC Wildlife, "Seahorses hide among blades of seagrass"](https://discoverwildlife.com/animal-facts/fish/why-do-seahorses-look-like-horses).
  - The upright body blends with upright seagrass blades: [NBC News, study co-author Peter Teske](https://www.nbcnews.com/id/wbna30600080) ("the upright sea grass blades would have improved their camouflage").
  - The snout sucks in minute crustaceans: [BBC Wildlife](https://discoverwildlife.com/animal-facts/fish/why-do-seahorses-look-like-horses); [CBF](https://www.cbf.org/blogs/save-the-bay/2022/01/miniature-marvels-lined-seahorses.html).
  - "Reaches between the leaves" is a reasonable grade-3 rendering. No source says it in those words, and no key depends on it.

**Log check (b2b §11).** All three changes are in the data as described. The S03 "no other single move works" claim is confirmed by brute force.

### 9.3 Gates after round 2

| Gate | Result |
|---|---|
| `check-content.js --all` | **PASS, 0 failures, 26 warnings.** The four lessons show only the accepted similar-coverage notices (SEQ 9, CE 10, CC 9, DESC 10). The extra warning against §7 is the migration count line (75 lessons instead of 76), outside these lessons |
| `readability.py` | No passage flagged. No passage text changed this round; C14 and S03 are stems |

### 9.4 Verdicts after round 2

| Lesson | Verdict | Open items |
|---|---|---|
| **TS-SEQ** | **ACCEPTED** | NOTEs only |
| **TS-DESC** | **ACCEPTED** | NOTEs only |
| **TS-CE** | **ACCEPTED** | NOTEs only (unchanged this round) |
| **TS-CC** | **ACCEPTED** | NOTEs only. MUST-1 and MUST-2 are cleared |

The verdicts in §8 are superseded by this table.
