# B2 re-review: TS-SEQ, TS-DESC, TS-CE and TS-CC (plus TS-PS S03)

**Role:** independent re-reviewer. I wrote none of these lessons and neither earlier B2 TS review.
**Scope:** `js/data/lessons/T-TS.js`, the TS-SEQ, TS-DESC, TS-CE and TS-CC blocks: core, similar, Together items with their addons, passages, teach and learn. At the coordinator's request I also covered one item from the TS-PS block, S03 (§8). I edited nothing else in TS-PS.
**Read-only:** the only files I wrote are this review and scratch files under `scratchpad/b2rr-ts/`. I ran no git and started no server.

## 1. Blind solve

**Method**
- `b2rr-ts/load.js` loads T-TS.js through a stub `PP.addLesson`.
- `b2rr-ts/blind.js` uses seed 777313. It prints every passage used, every Together item, every core item in set order (resolving each `{ref}`) and every similar item.
  - Choices, Part A/B choices, hot-text targets, order steps and dropdown options are shuffled.
  - It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample` or `criteria`.
  - The shuffle maps went to `blindmap.json`, which I did not open.
- I saved my answers in `answers.json` at 18:26, before any comparison. `cmp.js` then compared them with the keys (`cmp.txt`).

**Disclosure: how blind the solve was**
- My first Together list assumed the old ceil(n/2) split. Reading `js/skills.js` showed that a core lesson's Together set is "practice minus the core refs". That added four items: SEQ P6, DESC P4, CE P6 and CC P4.
  - I solved those four blind in a second pass: `blind2.js`, seed 424242, `answers2.json`.
  - That pass came after I had seen the SEQ ladder dump, which does not include those four items.
- Before solving, I saw only these things:
  - item type shapes (field names, no values)
  - the SEQ passage titles
  - the coordinator's task text, which says that SEQ P4 changed and that DESC C11, S03 and C04 reuse 3.T.T.2.a frames
  - scratchpad file names left by other reviewers. I opened none of them.
- I never opened the lesson source, the author logs or the reviews before both answer files were saved.

**Result: 86 of 86 auto-scored items agree (100%).**
- That covers 16 Together items, 58 auto-scored core items and 12 similar items.
- My written answers to the two `cr` items (CE C11 and CC C15) meet every criterion.
- No item was hard. This matches R1 NOTE-14: the sets sit at the easy end of grade 3.

## 2. Gates (read-only)

| Gate | Result |
|---|---|
| `check-content.js --all` | PASS, 0 failures. These lessons show only the accepted "N of 15 core items have no similar item" warnings (SEQ 9, DESC 9, CE 10, CC 9) |
| `readability.py` | Every passage is at FK 4.5 or below. SEQ: p1 2.0, p2 3.4, p3 3.2, p4 4.1 (147 words). DESC: 3.3, 2.2, 3.9, 3.2. CE: 3.2, 3.5, 2.7, 4.3, 4.0, 3.6. CC: 2.4, 4.3, 4.4, 3.9, 4.1. I matched the rows to lessons by word count, because several lessons share the code 3.T.SS.1.a. The script exits 0 even when it flags a passage, as R1 NOTE-13 said; nothing is flagged now |
| Own test / testB leak | Clean. I searched topics (cobbler, live oak, beaver, dunes or sea oats, alligator or crocodile) and ran a six-word n-gram scan against form A and form B and their passages. The only hits are shared directions and lesson phrasing. "Oak" comes only from Oak Street and "a bench under an oak tree" (DESC C15). That is not the live-oak passage's key fact |

**A player fact that affects the ladder audit.**
- In Practice Together (non-`own` mode), `player.js` `help()` shows the `clue`, then the engine's narrow step, then `why` with the answer outlined.
- So the addon `hints` and `how` on Together items are never shown. Only refs that run in the own sets use addons.
- In own mode, `hintsOf()` shows `hints` instead of the clue.
- So for Together items the live ladder is the clue plus `why`. For core and similar items it is hints 1 to 3. Findings on Together addon hints are therefore NOTEs.

## 3. Whole-ladder audit (every item)

For each item I read the clue, hints 1 to 3 and the choices together, and listed which choices stay live after each hint (`ladder-<lesson>.txt`). The table lists only items where my judgement differs from "two or more live after hint 3, and no hint settles more than one blank". Every other item passes.

| Item | Live after the ladder | Verdict |
|---|---|---|
| SEQ C04 | key only | MUST-2 |
| SEQ C08 | the two keys only | MUST-3 |
| CE C09 | key only | MUST-4 |
| CE C12 | the two keys only | MUST-5 |
| CC P5 (ref, core 1.1) | key only | MUST-6 |
| SEQ C02 | key plus two choices that the stem contradicts | SHOULD-1 |
| SEQ C10 | key plus one choice that hint 2's date list makes plainly wrong | SHOULD-2 |
| DESC P6 (ref, core 1.1) | keys plus "Georgia's coast" and "large bird", neither of which has a reason | SHOULD-4 |
| DESC C11 | keys only, because hint 2's "or one look" removes both look distractors | SHOULD-5 |
| DESC C14 | key plus "pots" and "seed", which are weak | folded into MUST-1 |
| DESC S01 | keys plus "named after a goddess" and "windowsills", which are weak | NOTE-6 |
| CC C02 | keys plus "eat insects", a likeness, so weak | SHOULD-6 |
| CC C07 Part A | key plus "own age", which hint 2 resolves | SHOULD-7 |
| CC C12, CC S03 | key only, because hint 3's closing test decides it | SHOULD-8 |
| CE C07 | because, so that | passes (earlier MUST cleared, NOTE-3) |
| Together SEQ P1, SEQ P6, CE P1, DESC P2, DESC P4 | clue (or addon) leaves only the key | NOTE-1 (legacy Together ladder) |

Every EBSR item passes the B1 rule: each place a hint names holds at least two Part B choices. No dropdown has hint 3 settling more than one blank.

## 4. Findings

### MUST

**MUST-1. TS-DESC C14 (cactus) shares the key fact and the main idea of 3.T.C.1.b's Watch Me (04 §4.3 rule 4).**
- T-C.js line 252, 3.T.C.1.b `learn`: "A cactus can live where it does not rain for months. It stores water in its thick **stem**…" The modelled big idea is "a cactus lives through dry months because its thick stem stores water."
- C14's detail is "Its thick, green stem stores water, like a canteen." Its key is "A cactus has a body that is built to save water in a dry desert."
- Rule 4 says never to share the key fact of a Watch Me example.
- C14's remaining distractors are also weak once hint 3 removes "spines": pots is off-topic, and the seed sentence is a sequence.
- **Fix:**
  - Use a different "built for" subject that no lesson uses. Grep first: cactus, camel, duck, owl, armadillo, pelican and pine are all taken.
  - Make one distractor a plausible single-detail main idea, so that two choices stay live after hint 3.

**MUST-2. TS-SEQ C04: the ladder still leaves only the key. R1 MUST-10 and R2 MUST-5 are cleared in form but not in substance.**
- Choices: (key) "starting step, but no buttermilk until after the shaking"; "does not matter much"; "is not a time clue word"; "at the same time as the shaking".
- Hint 2: "Ask what the word First would tell a reader about this step." The answer is "that it is the starting step", which is the key's first clause.
- Hint 3 rules out "not a time clue word". It then asks "is that really what the word First tells a reader?" The other two choices state meanings that First never has, so nothing is left but the key.
- Set 1 item 1.1 (P4, the order item) has already established that pouring off the buttermilk comes after the shaking.
- **Fix:** make a second choice that also reads First as "the starting step" but gives a wrong reason. For example: "First would mean this is the starting step, but the butter must be spread on toast before the buttermilk is poured off." End hint 3 with "Check each reason against the order of paragraphs 2 to 5."

**MUST-3. TS-SEQ C08: the ladder leaves only the two keys.**
- Hint 1 names "first and next" as order words, which removes the First and Next targets.
- Hint 3 removes Finally.
- Hint 2 says to read the sentences that start with a time word, which excludes "The water is not done yet."
- Only the two keys are left.
- **Fix:** in hint 1, use example words that are not targets ("like then and after that"). Keep the Finally rule-out in hint 3.

**MUST-4. TS-CE C09: the ladder leaves only the key.**
- Hint 2 asks what because, as a result and so "tell you about how the happenings connect". That rules out "time order, but they do not affect each other".
- Hint 3 rules out the how-to choice. Its tail, "against the whole article, not just the last paragraph", is aimed at the comparison choice, whose only support is paragraph 5. So that choice goes too.
- **Fix:** end hint 3 at "…so it is not a how-to. Check each choice that is left against the article."

**MUST-5. TS-CE C12: hint 3's closing test settles both keys.**
- Hint 3 rules out lightning, then asks "is it something that happened without fires, or with them?"
- The two remaining distractors (sunlight reached the floor; the young pines grew tall) are the with-fire effects from paragraph 3. They are the item's misconception, and that question removes them.
- **Fix:** keep the lightning rule-out and end with "Check each choice that is left against the chain you drew."

**MUST-6. TS-CC P5 (ref, core 1.1): hint 2 decides between the two options that hint 3 leaves.**
- Hint 2: "Does it say they live in the same kind of place?" The answer is no, which rules out Like.
- Hint 3 rules out Because. Only Unlike is left.
- R1 SHOULD-11's swap of Finally for Like was right, but the new hint 2 undoes it.
- **Fix:** hint 2 "Find where the passage tells where frogs and toads live." Drop the yes/no question.

### SHOULD

**SHOULD-1. TS-SEQ C02: the stem contradicts two distractors, and hint 3 removes the third.**
- The prompt says paragraph 1 comes "before any of the steps". That rules out "It tells the first step" and "It tells the last step".
- Hint 3 rules out the only remaining plausible distractor, "what can go wrong".
- **Fix:** ask "Why does the author begin with paragraph 1?" and keep hint 3 as it is.

**SHOULD-2. TS-SEQ C10: hint 3 removes two distractors at once.**
- "Sentence 5 starts with Today, so it already belongs at the end" rules out both "Move 5 after 2" and "Move 3 after 5". Only "Move 2 after 4" is left against the key, and hint 2's date list makes it plainly wrong.
- R2 NOTE-3 called this tight.
- **Fix:** replace "Move sentence 3 so it comes right after sentence 5" with "Move sentence 3 so it comes right after sentence 1".

**SHOULD-3. TS-SEQ C09: an earlier item in set 2 gives away slot 2.**
- C06 (2.1) has the prompt "Put the steps in the order they happen as water carves a cave". Its hint 2 says "Paragraphs 2 through 5 tell the process from start to finish."
- C09 (2.4) slot 2's key is "Paragraphs 2 through 4 … tell the steps that turn rainwater into a cave."
- Teach point 5 ("Each paragraph or section can have its own job, such as asking a question…") also states slot 1's key, though that is teaching and so a NOTE.
- **Fix:** C06 hint 2 "Find each step in the article and note its paragraph."

**SHOULD-4. TS-DESC P6 (ref, core 1.1): hint 3 removes the only plausible distractor.**
- "Its feet work like paddles" is ruled out. The two left, "You can see it on Georgia's coast" and "The brown pelican is a large bird", give no reason to pick them for "how a pelican catches fish".
- Together P1's `why` (shown in Together) has also already shown that the paddles are for moving, not for food.
- **Fix:** hint 3 rules out "large bird". Alternatively, replace "Georgia's coast" with a near-miss such as "Its pouch looks like a big bag."

**SHOULD-5. TS-DESC C11: hint 2's "or one look" pre-sorts the named misconception.**
- Hint 2: "does it tell about the whole glove, or only one part or one look?"
- That removes "A baseball glove may look like a big leather hand", which is the misconception line (picking the hook), and "Gloves come in many colors".
- With hint 3 (the pocket), only the keys remain.
- **Fix:** "…does it tell about the whole glove, or only one part of it?"

**SHOULD-6. TS-CC C02: hint 2 does the item's sorting.**
- "For each sentence, ask: is this about how they look, how they move, where they live, or how they are alike?" is the whole task.
- **Fix:** "Go through paragraphs 2 to 4 one sentence at a time. Choose two."

**SHOULD-7. TS-CC C07: hint 2 asks the key's own contrast.**
- "Who was in the room with a child in 1900, and who is in the room with a child today?" decides Part A.
- **Fix:** "Reread paragraphs 2 and 3."

**SHOULD-8. TS-CC C12 and S03: hint 3's closing test settles the item.**
- C12: "does its reason fit what she needs?"
- S03: "does its reason fit a warm, rainy day?"
- After hint 1 ("a fact true of both cannot help you choose"), the remaining distractors are true but irrelevant, and that closing test removes them.
- **Fix:** keep the rule-out and end with "Check each choice that is left against the article (or the box)."

**SHOULD-9. TS-DESC p3 and C08: a C08 key overstates history.**
- "The first food trucks in America were wagons that carried food to cowboys on long cattle drives."
- History.com calls chuck wagons "the most direct ancestor" of the food truck. It puts urban pushcarts in the same post-Civil War era, and it puts the first motorized food trucks in the 1950s.
- The Texas Trail of Fame credits Goodnight with the chuck wagon concept (1866), but notes that other mobile kitchens already existed.
- **Fix:** "Long ago, kitchens on wagons fed cowboys on long cattle drives." It stays a fun fact, so C08 keeps its key.

**SHOULD-10. TS-DESC S02 (recycling bins) reuses a 3.T.T.2.c topic and contradicts it.**
- T-T2.js (3.T.T.2.c) has a recycling center and color-coded bins at Oak Hill School: "The blue Recycle bin is for cans and plastic bottles."
- DESC S02 has "Blue bins hold paper… yellow bins take metal cans."
- **Fix:** give S02 another sorted place, for example a lost-and-found with labelled boxes. Grep all lessons first.

### NOTE

1. **Together ladders (legacy).** SEQ P1's clue ("find the time clue word that starts the steps"), SEQ P6's clue (WHEN versus WHERE, and all three distractors are "where" phrases), CE P1's clue ("find as a result and read the effect") and DESC P2's prompt (EXAMPLE versus "For example") each leave only the key. This is the engine's guided ladder, which reveals the answer at step 3 by design. The addon hints for DESC P4 also leave only the key, but the player never shows them.
2. **The R1 MUST-6 fix (CC P2 hint 3) edited text that Together never shows.** The visible Together ladder (clue and `why`) never quoted "Both are amphibians", so the finding is cleared either way.
3. **CE C07.** After hint 3, because and "so that" remain. "So that" is a real smooth-sounding trap, and the misconception line names it. Hint 1's rule decides between them, but that rule is the skill being practised. Acceptable.
4. **Earlier items that pre-eliminate a later item's distractor (not its key).**
   - DESC C08's how3 (cowboy wagons are "a fun fact") removes a C10 distractor.
   - DESC C07's how places the sink under "Keeping Food Cold and Clean" ahead of C08.
   - CC C06's how ("paragraph 1 uses both…") removes C07's "learned math but not read" distractor.
   - CC C07's how4 ("Slates are about writing") comes just before C10, whose key is "use both for writing". This is the closest of the five.
   - SEQ C11's how lists 1837, 1843 and 1845 ahead of C13.
   None of these states a later key, but C07 to C10 is worth a word change.
5. **SEQ C14.** The key ("Each cut goes through every layer…") restates step 4's own sentence ("Each cut goes through all the layers at once"). It is the only choice the box states, so word-matching can find it. Acceptable, because the item asks for the reason the directions give.
6. **DESC S01.** After hint 3, the two remaining distractors (the goddess name and windowsills) are weak. Consider a near-miss part, for example "Its roots hold it in the sandy soil."
7. **CE S01 is DOK 3, but its twin C04 was relabelled DOK 2.** It is the same task, so relabel S01 as DOK 2.
8. **Legacy Together frames match own-form frames.** CC P4 matches CC form A T3 ("What does the word but show here?"). DESC P2 matches DESC T2 ("give an EXAMPLE"). CE P3 matches CE T2 ("Which part is the CAUSE?"). All of these predate the expansion (T-TS.orig.js, 20 October). They rehearse frames, not answers.
9. **CE C13 row 2** ("A choice people made changed what happened later" → both). This is defensible: Morgan's decision, and people putting out fires.
10. **Small wording.** Food trucks "have a small oven and a deep fryer" is generic, not universal. Real snowflakes have six sides, while this fold makes eight. Neither affects a key.

## 5. Earlier findings: cleared or not

I checked every MUST and SHOULD in B2-review-TS-1 (R1) and B2-review-TS-2 (R2) against the live data.

| Finding | Status |
|---|---|
| R1 MUST-1 (SEQ p4 FK 4.7) | Cleared. Now 4.1 |
| R1 MUST-2 (hotel at Terminus) | Cleared. Now "houses and a store", matching Thrasher's 1839 store |
| R1 MUST-3 (Morgan in TT2b-C05) | Cleared. T-T2.js no longer mentions Morgan or traffic signals |
| R1 MUST-4 (bike tube) | Cleared. SEQ C14 is now the paper snowflake. No bike tube or patch text remains in TS-SEQ |
| R1 MUST-5 / R2 SHOULD-3 (fire-engine overlap; repeated TT2a frames for C02 and C13) | Cleared. DESC p3 is the food truck, CC p5 is the sweeper and snowplow, and no fire or Dalmatian text remains. C02 and C13 are re-framed |
| R1 MUST-6 (CC P2 hint 3) | Cleared (see NOTE-2) |
| R1 MUST-7 (CE P1 brain link) | Cleared. The `why`, hint 2 and how no longer mention the brain |
| R1 MUST-8 / R2 MUST-2 (CE C03 hint 2) | Cleared |
| R1 MUST-9 / R2 MUST-3 (CE C06) | Cleared. Hint 2 names paragraphs 1 to 4, and hint 3 is neutral |
| R1 MUST-10 | CE C07 cleared (NOTE-3). SEQ C14, SEQ S02, CC S02 and CE S02 cleared. **SEQ C04 not cleared (MUST-2)** |
| R1 MUST-11 (DESC C15 hint 1) | Cleared |
| R1 SHOULD-1 to SHOULD-13 | Cleared: C08 prompt, C07 Part B, C04 distractor, S02 stem, S01 out of order, p4 history, DESC C09 hint 1, C11 how, C13 re-framed, P4 `why`, CC P5 options, CC C04 hint 2, DESC S01 flytrap. The CC P5 ladder has a new problem (MUST-6) |
| R1 SHOULD-14 (Watch Me) | Cleared. SEQ newspaper, DESC museum and CC backpack examples are grade 3. CC Watch Me 1 models choosing by a difference that matters, which C12 and S03 ask for |
| R2 MUST-1 (CE C04, S01 hint 1) | Cleared |
| R2 MUST-4 (CE C07; CC C09) | Cleared. C07 uses "so that". In C09, sentence 3 is "Also," and sentence 4 is "In addition,", so slot 1 is a real choice |
| R2 MUST-5 (SEQ C04, C14) | C14 cleared. **C04 not cleared (MUST-2)** |
| R2 MUST-6 (DESC C05 hint 2) | Cleared |
| R2 SHOULD-1 to SHOULD-8 | Cleared: CC teach point 1, DESC teach point 5, the p5 pair, DESC Together P3 re-aimed at paragraph 3, S02 stem, CE C09 hint 1, CE P5 hint 2, C06 how3, and the 1837 wording |

**Do the logs claim anything that was not done?** Every concrete fix in b2b §9 and b2c §9 is present in the data, and the FK values they report match the gate. I checked these specifically:
- SEQ S02 relabelled DOK 2
- CE C04 relabelled DOK 2
- `std` added to CE P5 and CC P5
- DESC P5 left without `std`, as b2b §9.3 says
- CE S02's `like` changed to C06 only

Two log claims are judgements that I dispute:
- b2b §9.2 says that for every changed item "at least two choices… are still open after hint 3". SEQ C04 and C08 fail that (MUST-2, MUST-3).
- b2c §9 says "every ladder below was re-read as a whole". CE C09 and C12 (MUST-4, MUST-5) and CC P5 (MUST-6) still leave only the key.

Neither log hides an unaddressed finding. Each lists its open items with reasons.

## 6. Decisions

**TS-SEQ P4, changed under the same id: still the same item in substance. Keeping the id is right.**
- Only the fifth step changed, from "Spread the butter on toast." to "Rinse the butter in cold water.".
  - It is the same task: order five butter steps from p1.
  - It has the same component, format and points (2), and the same key order, indexes 0 to 4.
  - The new step is still the last one, from paragraph 5.
  - The change stops Together P2, whose key is "Finally, spread…", from pre-answering it.
- **What saved data keys on practice item ids.** I read js/skills.js, js/engine/player.js, js/engine/items.js and js/practice.js.
  - `pp.practice.v1` stores `l[<lesson>].i[<coreItemId>]`. A core ref is stored under its practice id, here `i["SK-TSSEQ-P4"]`.
  - That record holds `r` (the response in engine index space), `ord` (the choice order), `w`, `h`, `x`, `ok`, `log` and `cr`.
  - Nothing else stores per-item practice data. `pp.progress.v1` keeps lesson-level `practiced`/`tried` and check data. `pp.path.v1`, the writing keys and `history.state.ppDone` (set, mode, n, first) hold no item ids.
- Because the step count and the correct index order are unchanged, an old `r` or `ord` for P4 would still score correctly; index 4 just shows the new text.
- `pp.practice.v1` exists only on this unmerged branch, so no production data can be affected. `core.rev` can stay at "1".

**DESC C11, S03 and C04 reuse 3.T.T.2.a frames on different texts: acceptable practice, not rehearsal of the check.**
- Pairs:
  - C11 matches TT2a-C06, a core item ("states the main idea in two places, choose two").
  - S03 matches TT2a form A T4 ("does NOT support the main idea").
  - C04 matches TT2a form B TB4 ("add one more key detail").
- §4.3 rule 4 forbids reusing a passage or key fact, not a question frame. Milestones-style frames are meant to be practised.
- The texts, keys and facts all differ: glove, pines and pelican against honeybee, armadillo and tree trunk. No core or similar item awards a pass.
- The only rehearsal risk is distractor archetypes. C04's "Many people like to take pictures of pelicans" mirrors TB4's "Some children like to make crayon rubbings of bark". I suggest the author vary that one distractor. This is a NOTE, not a blocker.
- The precedent to avoid is two *core* items asking the same question under the same standard (R1 MUST-5), and that is now fixed.

**DESC P5 has no standard tag: harmless at runtime, but add one for consistency.**
- `addLesson`'s `items()` gives every set item `std: [L.code]` (3.T.SS.1.a) before item fields, so P5 is tagged 3.T.SS.1.a when it runs.
- Results only group by `std` or `comp` in check sets, and P5 is never a check item.
- CE P5 and CC P5 were given explicit tags. For the same reason, DESC P5 should get `std: ["3.T.SS.1.a"]`. It needs nothing more, because it is a clue-word item with no 3.T.T.2.a component.

## 7. Facts checked on the web

| Claim | Verdict | Source |
|---|---|---|
| 1837: W&A engineers staked the terminus. Stephen Long "drove a stake into the ground" in autumn 1837. The name Terminus means "end of the line" | Correct | [New Georgia Encyclopedia, Atlanta](https://www.georgiaencyclopedia.org/articles/atlanta); [Wikipedia, History of Atlanta](https://en.wikipedia.org/wiki/History_of_Atlanta) |
| Homes and a store built by John Thrasher (1839) | Supports "houses and a store went up near the tracks" | [Wikipedia, History of Atlanta](https://en.wikipedia.org/wiki/History_of_Atlanta) |
| 1843: renamed Marthasville for Martha Lumpkin, daughter of former Governor Wilson Lumpkin | Correct ("a governor's daughter") | [NGE](https://www.georgiaencyclopedia.org/articles/atlanta); [GPB, What's in a name](https://www.gpb.org/news/2018/08/30/whats-in-name-atlanta) |
| 1845: J. Edgar Thomson, a railroad engineer, suggested Atlanta. The origin is "supposedly" from Atlantic. The Act was approved in December 1845 | Correct, and the passage hedges the origin properly | [NGE](https://www.georgiaencyclopedia.org/articles/atlanta); [Wikipedia, History of Atlanta](https://en.wikipedia.org/wiki/History_of_Atlanta); [GPB](https://www.gpb.org/news/2018/08/30/whats-in-name-atlanta) |
| "Some railroad men said Marthasville was too long" | Supported (Richard Peters). Taken from R1's source; not re-fetched | [Wikipedia, Richard Peters (Atlanta)](https://en.wikipedia.org/wiki/Richard_Peters_(Atlanta)) |
| 1847: Atlanta incorporated as a city on 29 December 1847 (the C13 stem) | Correct | [Wikipedia, Atlanta](https://en.wikipedia.org/wiki/Atlanta) |
| Atlanta is the capital today (since 1868) | Correct | [NGE](https://www.georgiaencyclopedia.org/articles/atlanta) |
| Food truck parts: ventilation over cooking equipment, refrigeration, potable water tank, handwashing and warewashing sinks, pass-through service windows | Correct | [San Francisco, Mobile Food Facility Construction Requirements](https://sf.gov/sites/default/files/2023-07/MFF_Construction_Requirements.pdf) |
| "The first food trucks in America were wagons that carried food to cowboys" | **Overstated** (SHOULD-9). The chuck wagon is the "most direct ancestor"; pushcarts came in the same era; motorized trucks came in the 1950s. Goodnight's 1866 wagon, and other mobile kitchens existed already | [History.com, From chuck wagons to pushcarts](https://www.history.com/articles/from-chuck-wagons-to-pushcarts-the-history-of-the-food-truck); [Texas Trail of Fame, Chuckwagon](https://texastrailoffame.org/inductees/chuckwagon) |
| Paper snowflake: fold a square into a triangle, fold again, cut while folded, unfold for a symmetrical design | Correct. KiwiCo keeps the paper folded while cutting, and the folds make the symmetry | [KiwiCo, How to Make a Paper Snowflake](https://www.kiwico.com/diy/holiday-events/christmas/how-to-make-a-paper-snowflake) |
| Venus flytrap: trigger hairs on the inner leaf surface; the leaves snap shut; native only to North and South Carolina, in wet, sandy, peaty soils | Correct | [Kew, Venus flytrap](https://www.kew.org/plants/venus-flytrap) |
| Named for the goddess Venus | Correct ("a goddess from old stories") | [FlytrapCare, Venus flytrap information](https://www.flytrapcare.com/venus-fly-trap-information/). Wikipedia's page was blocked by a permission timeout and was not fetched |
| Street sweeper: rotating brooms loosen dirt, leaves and litter; a vacuum carries it to a hopper or tank | Correct. The brushes are "underneath" on many sweepers, and gutter brooms sit at the sides | [Boom & Bucket, How a street sweeper works](https://www.boomandbucket.com/blog/how-it-works-street-sweeper-combines-water-brooms-vacuum) |
| Snowplow: blade down, pushing snow; plows travel under 35 mph and drivers should "drive slowly"; salt spreaders | Correct. That source does not say salt goes *behind* the truck, but that is the normal set-up and the passage hedges with "many" | [Mass.gov, Driving near plows](https://www.mass.gov/info-details/driving-near-plows); [KDOT, Why KDOT trucks go slow](https://www.ksdot.gov/Assets/wwwksdotorg/Headquarters/PDF_Files/pressrelease2020/Dec/Why-KDOT-trucks-go-slow.pdf) (search result, not fetched) |

## 8. Cross-lesson topics and key facts

- **Method.** A keyword and key-fact grep of every lesson, set and task file outside T-TS.js, for about 90 topic terms from these four lessons. That covered every passage, stem, Watch Me and teach example. I read the context of each hit, because n-grams alone would miss same-fact paraphrases.
- **Hits that matter:** MUST-1 (cactus, 3.T.C.1.b Watch Me) and SHOULD-10 (recycling bins, 3.T.T.2.c).
- **Checked and clear against T-T2.js (3.T.T.2.a/b/c):**
  - Morgan, the bike tube and the fire station are gone.
  - Caves: T-T2 uses bats roosting in caves, not cave formation.
  - Caterpillars: T-T2 has the monarch life cycle; CE S03 is about caterpillars eating tomato leaves. Different fact.
  - "Warm up": alligators in T-T2, a track warm-up in SEQ C15.
  - Peanut butter is unrelated.
- **Checked and clear against T-SS.js:**
  - The frogs-and-toads compare example (line 860) and the canoe and scooter mentions are other skills with no shared fact. The CC frog p1 is from 20 October.
  - Pinecone bird feeder versus CE S03's feeder taken down: different facts.
  - "Oak Street hill" versus Oak Street School and library: name reuse only.
- **Checked and clear against T-C.js:** the frogs and toads website tabs (a text-features item), the monarch life cycle, and the recycling club poster (purpose, not bins).
- **Elsewhere:** canoes in L-V3 and R-INF-02 (swamp trails), hail in L-V12 (a precipitation list), tires in GUM sentences, newspaper (sprinkler) in T-T1, museum and backpack mentions. All are incidental.

## 9. Add-on: TS-PS S03 (similar item)

- **Blind solve.** `b2rr-ts` inline script, seed 99173, with no key, hints or how shown. My answer, "Fix the crack in the ceiling above the door.", was saved in `answers-ps.json` before comparison. It **agrees** with the key.
- **Item.** It is an mc, 1 point, DOK 2, with no passage. A puddle forms by the door, a bigger mat fails, mopping every hour fails, and the custodian finds rain dripping through a ceiling crack. The question is "Which plan would most likely solve the real problem?"
- **Choices.** (key) Fix the crack; Put a bucket under the crack to catch the drips (the changed distractor); Mop the floor every few minutes; Ask everyone to wipe their wet shoes outside.
- **One defensible answer.** Yes.
  - The bucket stops the puddle, but it leaves the leak, and the prompt says "real problem". Hint 1 and the how both draw the line: "fixes the real problem, not only what the problem causes".
  - The bucket is now the strongest distractor and fits the lesson's misconception (treating an effect). That is an improvement.
- **Ladder.**
  - Hint 1 (strategy) leaves all four live.
  - Hint 2 ("Reread the last two sentences") points to the crack. Those sentences also support the bucket choice, which names the same crack, so the B1 hint 2 rule is met.
  - Hint 3 rules out mopping, a try that already failed.
  - The live choices after hint 3 are the key and the bucket. Wiping shoes has little pull once the child knows the water comes from the ceiling. The bucket stays truly live, because it does deal with the drips.
  - Two choices remain, and no hint states or echoes the key.
- **Other checks.**
  - The how is accurate, and it names the misconception (bucket or more mopping).
  - `like: [SK-TSPS-C14]` (the raccoons and trash cans, "which TWO plans solve the real problem") is honest.
  - The context differs from C14, the text is grade 3, and there is no leak.
  - `std` is ["3.T.SS.1.a", "3.T.T.1.b"]. 3.T.T.1.b is outside my scope, and the TS-PS reviewers should confirm it.
- **Verdict: TS-PS S03 ACCEPTED.**

## 10. Verdicts

| Lesson | Verdict | Blocking findings |
|---|---|---|
| **TS-SEQ** | **CHANGES REQUIRED** | MUST-2 (C04 ladder, carried over from R1 and R2), MUST-3 (C08 ladder) |
| **TS-DESC** | **CHANGES REQUIRED** | MUST-1 (C14 shares the cactus key fact with the 3.T.C.1.b Watch Me) |
| **TS-CE** | **CHANGES REQUIRED** | MUST-4 (C09 ladder), MUST-5 (C12 ladder) |
| **TS-CC** | **CHANGES REQUIRED** | MUST-6 (P5 hint 2) |
| **TS-PS S03 (add-on)** | **ACCEPTED** | none |

Every key is right, every item has one defensible answer, all passages are within FK 4.5, and the earlier leak findings are all fixed. Every remaining MUST except MUST-1 is a single hint edit, or one distractor in SEQ C04. MUST-1 needs a new subject for the DESC C14 stem.
