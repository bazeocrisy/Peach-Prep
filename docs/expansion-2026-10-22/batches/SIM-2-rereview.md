# SIM-2 re-review: fixed new similar items in nine lessons

Reviewer: independent re-review (not the author, not the first reviewer). Date: 2026-10-23. Read-only: no lesson edited, no git run.
Scope: the items the author's "Fixes after review" list as changed, plus all of 3.T.SS.1.a S04 to S15, plus the new bald eagle passage p7. Lesson 3.T.SS.1.c was ignored as instructed.
Scripts and outputs: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr/` (`load.js`, `blind.js`, `stripped.json`, `answers.json`, `cmp.js`, `show.js`, `sim.js`, `pair.js`, `pts.js`, `dup.js`, `hot.js`).

## 1. Blind solve

- `blind.js` loads each lesson file in a Node `vm` sandbox and prints, for 46 items, only passage text, stem, prompt, choices, slots, rows, steps and targets. Choices, dropdown options, match rows and order steps are shuffled with a seeded RNG (seed 20261023). It strips `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `sample`, `criteria` and `like`.
- Before I read the stripped JSON, I grepped it for those key names. The only hit was the word "Like" as a match-column label (text, not a field). No answer flag was in the print.
- The 46 items: T2a S04, S09, S13; T2b S04, S09, S13, S15; T2c S05, S07, S10, S11 (with p11 and p12); SEQ S04, S06, S10, S11, S14, S15; DESC S04, S05, S11, S13; CE S05, S06, S07, S09; CC S04, S05, S06, S10, S11, S15; SS1a S04 to S15 (all twelve, since the log lists no changed ones there); TC1b S12, S13, S15. Passages shown: T2a p7 (eagle) and p10, T2c p11 and p12.
- I wrote my answers to `answers.json` before printing any key, then compared by choice text (so shuffling cannot hide a miss).
- **Result: 46 of 46 agree with the stored key.** 45 were auto-compared; the one constructed response (TSCC-S15) I answered myself and judged by reading, not auto-scored. No item had a second defensible answer in my solve, though several (listed below) were easier than they should be.
- **Honesty about blindness.** While probing the data shape I printed: the `like` ids and item types (no content); the first 300 characters of the T2a core set JSON, which showed the start of core item C03 (the animal shelter dropdown), an item that is not in my solve set; and the first 600 characters of T-T2.js (lesson title and clue words). No key or `why` of any of the 46 items was visible before I solved. I read the first review and the author log only after `answers.json` was saved. The solve is fully blind for the 46.

## 2. (a) Key against explanation, all 108 new similar items

`show.js` printed, for every S04 to S15 item in all nine lessons, the keyed text next to `why`, `how`, the three hints, `clue` and `misconception`. I read all 108. Slot, match and ebsr keys were resolved to text (dropdown `answer` is an option index; match `answer` is a column index). Hot-text keys (T2a S07, S12; T2b S05, S11) were resolved from `p:para:sent` ids to the sentence text (`hot.js`) and match the `why`. Order keys (T2b S07, S12; T2c S09; SEQ S07; TC1b S09) match the `why` order.

**Result: no key disagrees with its why/how. No wrong key found.** Explanation defects found while reading (none changes a key):
- SEQ-S06 hint 3 says "Paragraph A is about one afternoon". The paragraph is a morning ("At ten o'clock ... By eleven"). SHOULD.
- CE-S05 `why` and `how` item 4 are a broken list ("It never says puddles make a sidewalk hot, a puddle in the shade lasts longer, and the dark color is in Paragraph 1"). The verbs do not match. SHOULD (grammar in the explanation).
- DESC-S05 hint 3 ("The sentences are not steps in a set, so one of the words does not fit") is confusing wording for "Next". NOTE.

## 3. (b) Near-copy against the paired core item

`sim.js` computes word-set Jaccard (all words) over stem, prompt and options, bigram Jaccard, exact shared options, and key-text Jaccard against each `like` item. The accepted S01 to S03 under this metric score up to 0.38 (T2b-S01) and share up to 2 options (SEQ-S03, a known clone the author reported). The author's 0.21/1-option figure uses a different metric, so I used the accepted items as my own baseline.

| Item | vs core | word J | shared opts | key J | Verdict |
|---|---|---|---|---|---|
| SEQ-S10 | C09 | 0.47 | 1 exact, 2 near | 0.60 | **MUST** (see below) |
| T2a-S13 | C12 | 0.45 | 0 | 0.25 | SHOULD |
| CC-S11 | C09 | 0.41 | 2 (numerals, "Sentence {0} should begin with {1}") | 0 | SHOULD |
| SS1a-S05 | P7 | 0.38 | 0 | 0.20 | within baseline |
| SS1a-S04 | P5 | 0.29 | 0 | 0.60 | SHOULD (unchanged) |
| SS1a-S15 | C15 | 0.32 | 3 (chapter options `2,1,3`) | 0 | SHOULD (unchanged) |
| CE-S07 | C07 | 0.35 | 1 | 0 | frame clone, see 4.CE |
| TC1b-S15 | C15 | 0.34 | 0 | 0.20 | OK |
| CC-S15 | C15 | 0.33 | 0 | n/a | OK (cr, same frame by design) |
| DESC-S13 | C13 | 0.31 | 0 | 0.38 | NOTE (same frame, new content) |
| SEQ-S15 | C15 | 0.19 | 2 (Before, Meanwhile) | 0 | SHOULD (2 shared options) |
| CC-S04 | P5 | 0.21 | 2 (Like, Unlike) | 0 | NOTE (key flipped; fair) |
| T2c-S05 | C05 | 0.26 | 2 (generic "both texts", "only ...") | 0 | SHOULD (frame) |

All other changed items score at or below 0.30, share 0 or 1 options, and have key J below 0.25.

Details for the two worst:
- **SEQ-S10 against C09 (dropdown, "Paragraph 1 {0}. Paragraphs 2 and 3 {1}.").** Same two-slot frame, and five of the six options are the core's options with the noun swapped: "asks a question that the text/article answers", "tells the last step of the job/in making a cave", "compares two kinds of juice/two different caves", "tell the steps that turn juice into a pop/rainwater into a cave", "describe what the freezer/inside of a cave looks like", and "tell about a problem and how it was solved" word for word. Key J 0.60. This is the same clone pattern the first review marked MUST for SEQ S04, S06 and S15, and it was not flagged then. The author's rework fixed those three but left this one. A child who has just seen the core key can answer from memory.
- **T2a-S13 against C12.** The frame is word for word ("A student says the main idea of X is Y. Why is the student wrong?"). The new key is fresh, but all three distractor ideas are the core's: "never tells anything about", "the fact is false", and the core's own key "only in the text box, and no section is about it" (now a distractor). That blocks copying of the key, so I keep it SHOULD, not MUST. Suggest swapping one distractor for a new idea.

## 4. Findings per lesson

### 3.T.T.2.a (S09, S13, S04; passage p7)

**MUST:** none.

**SHOULD**
- S13 as in section 3 (distractor set is the core's).
- S09: the strategy in hint 1 and hint 2 ("which choice is not already part of the article") solves the item without knowing what a text box is for, because all three distractors are copied from the article. NOTE-level, but H1 plus H3 effectively names the method. Replace one distractor with a plausible extra fact that is not in the article, for example "A bald eagle is the national bird of the United States", and let the key be the one that is also fun and new.
- S04 and S14 still share the caption phrase "The parts of a ..." (carried from the first review; the author left it).

**NOTE**
- S09 DOK is 2; the core C08 is DOK 3. Fine, since the frame changed.
- S04 hint 2 plus the stem ("Four lines point from words to ... four parts") makes the "two claws" caption an easy elimination.
- Live choices after clue and hints, counted by hand: S09 4 to 3 (H3 removes grass and moss); S13 4 to 3 (H3 removes "only in the text box"); S04 slot 1 3 to 2 (H3 removes "feeding"), slot 2 stays 3.

**Passage p7 "A Home in the Treetops" (bald eagle).** Topic search across all of `js/data` (lessons, sets, tasks), by grep and by `dup.js` (rare-word overlap with 1,953 item and passage blobs): "eagle" appears only in p7 and its items, plus three unrelated mentions (an "Eagles" team name in T-C.js, a question "What do eagles eat?" in T-RA.js, a sentence about "an eagle on that branch" in L-GUM2.js). No bald eagle, nest-building, talons or raptor article elsewhere. Nest content elsewhere is turtles, alligators, thrashers, terns and a killdeer, none overlapping. **No duplicate.** Facts checked:
- Nest of big sticks, can reach about 8 ft wide and 1.1 tons or more, so "as wide as a bed" and "more than a thousand pounds" are true: https://journeynorth.org/tm/eagle/annual/facts_nest.html and https://en.wikipedia.org/wiki/Bald_eagle (up to about 13 ft deep, 8.2 ft wide, typical large nests about 1 metric ton).
- Sticks carried in the talons; both mates bring materials; pairs often return to the same nest for many years and keep adding sticks; inner cup lined with grass, moss and plant stalks: https://journeynorth.org/tm/eagle/annual/facts_nest.html and https://dnr.wisconsin.gov/topic/WildlifeHabitat/orphan/Eagle (nest "lined with softer materials such as moss or grass", tall mature trees).
- Young birds are brown; the white head comes at maturity, about four to five years: https://en.wikipedia.org/wiki/Bald_eagle ("until about their fifth year"). The page says "about five years old", which is within the range.
- The key fact "An eagle's eyes are about as big as a person's eyes": https://archive.journeynorth.org/tm/eagle/Vision_part1.html ("Eagle eyes are the same size (weight) as human eyes"; the bald eagle's eyes are about the size of a two-year-old boy's). True, and it is a sound "extra fact".
- Minor: "Both parents carry sticks in their feet" is fine (the source says "in their talons"; the female does most of the placing).

**Verdict: ACCEPTED** (SHOULDs only).

### 3.T.T.2.b (S04, S09, S13, S15)

**MUST**
- **S13 (jar garden, dropdown), the item answers itself.** Rosa's own list already holds the two wrong options word for word in step 4 ("4. Sprinkle water and close the lid."), and the options are "Sprinkle a little water on the plants" and "Close the lid on the jar". A child can discard both without reading the directions, leaving "Spread a layer of soil over the rocks". The author's hint 3 was fixed, but the stem now removes two of three options before any hint. Live choices after the stem and H3: 1. The core C12 does not have this flaw (its distractors are not in Dev's list). Fix: make Rosa's step 4 something else ("4. Put the jar in a bright place") so that "sprinkle water" and "close the lid" are real steps that come later in the directions, not steps already on her card.

**SHOULD**
- S15: hint 1 and hint 2 ("steps you can do yourself" against "events from the past"; "telling you what to do, or telling what someone did?") plus the titles ("How to Make a Braille Name Card", "Louis Braille") let a reader build the key sentence before reading the choices. H3 removes one choice, which leaves the key and its mirror image. Carried from the first review; unchanged.

**NOTE**
- S04 now uses As a result / Because of this (a change from because/so; shares 0 options with P4). H3 for slot 2 ("one makes the other") is close to the key wording. Live: slot 1 3, slot 2 3.
- S09: H3 places one row ("gliders ... before"); 3 rows stay live. The earlier "false history" problem is fixed. Facts: Orville flew 12 seconds, Wilbur's fourth flight lasted 59 seconds on 17 December 1903 (https://en.wikipedia.org/wiki/Wright_brothers); gliders were tested at Kitty Hawk from 1900, and the wind tunnel was built in Dayton in 1901 (same page), so both "before" rows are correct. The later half-hour flights fit the 1905 Flyer (around 39 minutes) in the same record.

**Verdict: CHANGES REQUIRED** (S13).

### 3.T.T.2.c (S05, S07, S10, S11; passages p11, p12)

**MUST:** none.

**SHOULD**
- S05 hint 3: "Text 2 never says how the blocks are set. Decide what that means for the dome fact ..." still settles blank 1 to "only Text 1" by logic (a fact that Text 2 never says cannot be in "both texts" or "only Text 2"). The author's log says this was fixed so that no whole blank is settled; for blank 1 it is not. Live choices: blank 1 is 1, blank 2 is 3. Rewrite H3 to restate the evidence for the second blank only, or to ask "Which text mentions blocks?".
- S07 hint 3: "Text 1 never says when rattlesnakes hunt, so the night row does not go under Text 1." For the same reason this also rules out "Both", so the night row is settled to Text 2 (one row of five; same precedent as accepted items, so SHOULD).
- S05 frame is the core's ("X's note has two mistakes. Choose the words that fix it.") with identical option sets; the key pattern is reversed, which is fair.

**NOTE**
- S10, S11 live: S10 Part A 4 to 3 (H3 removes "claws"); S11 4 to 3 (H3 removes "melt"). S11 keeps two silly distractors ("weigh nothing", "melt the snow").
- S11 is mc/1 point against a DOK 3, 2-point ebsr core; acceptable because `like` says "a fresh application".

**Facts (p11, p12), checked:**
- Tongue "can be two feet long": https://nationalzoo.si.edu/animals/giant-anteater ("About 2 feet"); Wikipedia gives 45 to 60 cm (18 to 24 in): https://en.wikipedia.org/wiki/Giant_anteater. Fixed and fine.
- "about 150 times in one minute": National Zoo "up to 150"; Wikipedia ~160. Fine.
- "less than a minute at each nest": Wikipedia says an anteater feeds at up to 200 nests a day, "as long as a minute each". Fine.
- No teeth, mother carries the young on her back (National Zoo: "up to a year", so "almost a year" is fine), thousands of insects a day (Wikipedia ~35,000): fine. "Sleeps up to fifteen hours" is from the SeaWorld page cited in the first review; the Smithsonian and Wikipedia pages do not state the number, so it rests on SeaWorld alone. NOTE only.
- Giant anteaters range from Honduras to Argentina; "South America" is slightly narrow but not wrong for a grade 3 passage. NOTE.

**Verdict: ACCEPTED** (SHOULDs only).

### TS-SEQ (S04, S06, S10, S11, S14, S15)

**MUST**
- **S10 clone of C09** (section 3): same frame, five of six options are the core's options with a noun swapped, key J 0.60. Fix: change the question (for example "Which job does Paragraph 1 do?" with different wording), or change the options to new ideas ("gives a safety rule", "tells a story about a person"), and word the key differently from the core's.

**SHOULD**
- S06 hint 3 says "one afternoon"; the text is a morning (10:00 to 11:00). Also, key and distractor 1 are the same sentence reversed, so H2 ("list the connecting words in A, then in B") leaves a coin flip. Fix the word and rephrase.
- S15: shares 2 options with C15 (Before, Meanwhile) and the same frame ("First, ... {0} ..., ... {1}, ..."). Keys differ (After/Finally against Once/Last). Hint 2 echoes the stem ("which step comes after the sheet is smooth and which step ends the job" maps onto "After the sheet is smooth" and "Finally"). Live: slot 1 3, slot 2 3 to 2 (H3 removes "Meanwhile").
- S11 row 1 ("The town bought the land"): keyed Dell Pond because the stem says "In 1950, the town bought the land. Then the town gave the place a new name." The explanation says the same. A reader can still date the purchase to 1950 and the new name to 1950, so a Dell Park answer is defensible. Add "A year later" or put the rename on a different year. Facts: none.

**NOTE**
- S04: new key is correct and the stem has no supply list in paragraph 1. Live 4 to 3.
- S14: the key is now stated in step 4 of the directions ("buttered bottom is golden and crisp"), so it is supported. Frame ("Why do the directions say to X BEFORE ...?") matches C14. Live 4 to 3.

**Verdict: CHANGES REQUIRED** (S10).

### TS-DESC (S04, S05, S11, S13)

**MUST:** none. The wombat error is fixed ("as big as a large dog"; mainland wombat about 1 m and 27 kg on average, up to 35 kg: https://en.wikipedia.org/wiki/Common_wombat). "Run as fast as a person for a short trip" is true and conservative (field accounts say about 40 km/h in short bursts: https://museumsvictoria.com.au/article/can-wombats-run-at-40kmh/; not peer reviewed, so the text is right to hedge).

**SHOULD**
- S05: the stem sentence "Here is a paragraph about wombats. One sentence is shown below the paragraph." is confusing, and the paragraph is not needed for the key (only the two sentences matter). H3 phrase "not steps in a set" is unclear. After H3, 2 options are live (However, Because), and H2 ("add to the first, or turn to something that seems different") almost names the key. Live count meets the bar of 2 only by the letter.
- S13 reuses the C13 frame ("A student wants to move the fact in the text box into paragraph N ... Would that be a good change?") with the same Yes/Yes/No/No layout. The key text is fresh. Keep.

**NOTE**
- S04: new key "A flying squirrel has a body that is made for gliding" fits all five sentences; fine. Live 4 to 3.
- S11: keys Sentence 2 and 5; fact "twenty years, longer than a pet hamster" is true (female tarantulas often reach 20 or more years; a hamster lives about two to three years).
- S13: "A baby pangolin rides on its mother's tail" is a standard pangolin fact; the "may not be able to bite" wording is properly hedged.

**Verdict: ACCEPTED** (SHOULDs only).

### TS-CE (S05, S06, S07, S09)

**MUST**
- **S07 (sunflower, dropdown): fewer than 2 live choices.** The prompt says "The clue word in Dan's sentence makes the cause and effect backward". Dan's word is printed in the stem: "because". "because" is also one of the three options, so the prompt removes it. Hint 1 says "Because comes just before a cause. So comes just before an effect." and H3 removes "although". After the clue and three hints the only live option is "so". It is also the same frame as C07 with the answer flipped. Fix: use an option set that does not contain the student's own word, for example "so / but / until" with Dan's word "because", and make the hint 1 a neutral question rather than the rule in two sentences.

**SHOULD**
- S06: H2 ("What lifts the colored water, and what are the blobs made of? Choose two.") names both keys ("no tablet", "no water"). H3 removes one distractor. Rewrite H2 to point to the paragraph only. Option "using three drops instead of two" quotes a number the directions do not give.
- S05: the `why` and `how` list is garbled (section 2). Key and facts are right (dark surfaces take in sunlight and warm; puddles dry faster in sun). The distractor "to show that shade is hotter than a sunny sidewalk" is silly.
- S09: H2 names the cause words ("because, as a result and so") and asks what they tell you. The stem is cause and effect with those words, so the reader can pick the key from the words. Live 4 to 3 (H3 removes how-to). Low risk.

**NOTE**
- Facts: lava lamp, rust and ice facts as in the first review; no new fact added.

**Verdict: CHANGES REQUIRED** (S07).

### TS-CC (S04, S05, S06, S10, S11, S15)

**MUST:** none.

**SHOULD**
- S11: the error is now sentence 5 ("Likewise, a trampoline lets you bounce, and a swing set lets you swing."), keyed On the other hand. That sentence reads as two parallel actions, so a child can see it as a likeness (both let you play and move); the difference is not clear. Make the contrast explicit ("..., but a swing set lets you swing back and forth"). Same frame as C09 with two shared option values (numerals).
- S04: 2 options shared with P5 (Like, Unlike); the key is flipped, which is fair, and the key is stated by "Both live in damp places". H1 and H2 together (likeness or difference; where each lives) give the key; live after H3 is 2.

**NOTE**
- S05: both keys are true of both skates; "ice skates have thin metal blades" removed by H3. Live 5 to 4.
- S06: the first review's clone is fixed (new key "look at an animal's ears and flippers to tell which one it is"). Live 4 to 3.
- S10: the key is now stated in the text ("Each key hit an inked ribbon and printed a letter", "Each key makes a letter appear on a screen"). Live 4 to 3.
- S15 (cr): sample answer is sound; H3 no longer lists the clue words.

**Verdict: ACCEPTED** (SHOULDs only).

### 3.T.SS.1.a (S04 to S15; no item was changed after review)

**MUST:** none. All 12 keys agree with the solve and with `why`/`how`.

**SHOULD (carried, unchanged since the first review)**
- S04 against P5: same prompt; key "to add an interesting fact about cranberries" against "about peanuts in Georgia" (key J 0.60).
- S15 against C15: same chapter option set `2,1,3` and the same key "2".
- S08 is arithmetic (3 inches times 2 miles) in an ELA lesson; the explanation is correct.
- S07, S11, S13 restate the picture in the stem, so the key echoes stem words.

**NOTE**
- S09, S10, S12, S14 have one key and sound distractors. S13 H3 is fine (eliminates one of four).

**Verdict: ACCEPTED.**

### 3.T.C.1.b (S12, S13, S15)

**MUST:** none. The S13 giveaway is fixed: the stem no longer lists the shared features, and the key (slideshow with a tap arrow; Sign Up button that opens a form) is a clean web-only pair. A calendar box, headline and captioned photo can all be printed.

**SHOULD**
- S13 hint 1 ("A feature that can change or open something needs one [a screen]") uses the key's own verbs ("shows the next photo", "opens a form"). Remove "open".
- S15: H2 ("What time of day do they tell about?") plus "Good morning!" in the script gives the key text ("begins in the morning"). The distractors "story is over" and "stop listening" are silly; "late for school" is eliminated by H3. Add one more plausible distractor ("to show that Nia likes loud noises" is not enough; use "to tell listeners the story happens at a school" ).
- S12: the key "Its labels name the hidden parts inside" reuses the C12 key frame ("Its labels name ..."); distractors are weak ("takes up less room", "shows how shiny", "a person making toast").

**NOTE**
- Live: S12 4 to 3; S13 5 to 4 (H3 removes the headline); S15 4 to 3.

**Verdict: ACCEPTED** (SHOULDs only).

## 5. (c) Hint ladders, recounted by hand

I recounted live choices from the clue (= hint 1) and hints 2 and 3, counting an option as removed only when a hint or the prompt removes it by name or by an explicit fact. Items where fewer than two choices (or fewer than two options in a blank) are live:
- **TSCE-S07**: 1 live (prompt removes "because", H3 removes "although"). MUST.
- **T2b-S13**: 1 live once the stem is considered (steps already in Rosa's step 4). MUST.
- **T2c-S05 blank 1**: 1 live (H3). SHOULD (blank 2 stays at 3).
- **T2c-S07 night row**: 1 live (H3 also rules out Both). SHOULD.

All other changed items keep at least 2 live choices per answer by this count. Nine items sit at exactly 2 for one blank (T2a-S04 slot 1, SEQ-S10 slot 2, SEQ-S15 slot 2, DESC-S05, CC-S04, CC-S11 slot 2, T2b-S09 row choices, T2b-S15 after H3, SEQ-S14), which is the minimum.

## 6. (e) Pre-answering core or Together items

`dup.js` compared the distinctive words of every one of the 46 items and of p7, p11 and p12 with all 1,953 item and passage blobs in `js/data`. The only overlaps of four or more rare words are an item with its own passage (T2c-S10 with p11 and p12) and an item with its own core (TC1b-S15 with C15). No new item shares a fact, key or topic with any other core, practice, set or task item. I also read the paired core keys for SEQ-S14/C14, TC1b-S12/C12, CE-S06/C05, T2c-S10/C10, DESC-S11/C11: none of the new item's text states the core item's answer.

## 7. Points and DOK

`pts.js` compared points and DOK with the paired core. All choose-two items have 2 points, two-blank dropdowns and match items have 2, one-blank dropdowns have 1. Differences from the core pairing: T2a-S09 (DOK 2 against 3), T2c-S11 (1 point against the ebsr's 2), SS1a-S08 (1 against 2). All three are type changes, acceptable under "fresh application". Constructed responses have no `points` field, as in the core.

## 8. Summary

| Lesson | MUST | Verdict |
|---|---|---|
| 3.T.T.2.a | none | ACCEPTED |
| 3.T.T.2.b | S13 | CHANGES REQUIRED |
| 3.T.T.2.c | none | ACCEPTED |
| TS-SEQ | S10 | CHANGES REQUIRED |
| TS-DESC | none | ACCEPTED |
| TS-CE | S07 | CHANGES REQUIRED |
| TS-CC | none | ACCEPTED |
| 3.T.SS.1.a | none | ACCEPTED |
| 3.T.C.1.b | none | ACCEPTED |

Three MUSTs remain, none of them a wrong key: T2b-S13 (two of three options are already on Rosa's card), SEQ-S10 (clone of C09), CE-S07 (one live choice). Every item the first review marked MUST is fixed: the nine clones (S04, S06, S15 in SEQ; T2a S09 and S13; DESC S04; CE S09; CC S04 and S06) now carry new keys and are acceptable, the duplicate balloon article is gone, and the three facts (Wilbur's 59-second flight on 17 December 1903, the anteater's two-foot tongue, the wombat's size) are now true. The eagle passage has no duplicate in `js/data` and its facts hold.

## 9. Sources

- https://en.wikipedia.org/wiki/Wright_brothers (12 s, 59 s on 17 Dec 1903; gliders at Kitty Hawk from 1900; wind tunnel 1901)
- https://en.wikipedia.org/wiki/Bald_eagle (nest 13 ft deep and 8.2 ft wide at most, about 1 metric ton; reuse; brown until about the fifth year)
- https://journeynorth.org/tm/eagle/annual/facts_nest.html (sticks carried in talons, both mates bring material, grass and moss lining, return for many years and add sticks)
- https://dnr.wisconsin.gov/topic/WildlifeHabitat/orphan/Eagle (nest of sticks lined with moss or grass in tall trees; white head at about age 4)
- https://archive.journeynorth.org/tm/eagle/Vision_part1.html (eagle eyes the same size as human eyes)
- https://en.wikipedia.org/wiki/Giant_anteater (tongue 45 to 60 cm; about 160 flicks a minute; up to 200 nests a day, a minute each; no teeth)
- https://nationalzoo.si.edu/animals/giant-anteater (tongue about 2 feet, up to 150 flicks a minute, young ride on the back up to a year)
- https://en.wikipedia.org/wiki/Common_wombat (about 1 m long, 27 kg average, up to 35 kg; nocturnal; grass)
- https://museumsvictoria.com.au/article/can-wombats-run-at-40kmh/ (40 km/h in short bursts, not peer reviewed)
