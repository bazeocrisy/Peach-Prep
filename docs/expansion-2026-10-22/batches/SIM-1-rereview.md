# SIM-1 re-review: 96 new similar items (S04 to S15) in eight lessons

**Role:** independent re-reviewer. I did not author the items and did not do the first SIM-1 review. I changed no lesson or code file and ran no git. The only file I wrote in the repo is this one (scripts and output are in the scratchpad `rr3/`). `node verification/check-content.js --all` was run read-only: PASS, 0 failures, 9 warnings, none in a new item.

## 1. Verdicts

| Lesson | Verdict | MUST |
|---|---|---|
| 3.T.T.1.a | **CHANGES REQUIRED** | S12 (near-copy of C12) |
| 3.T.T.1.b | ACCEPTED (SHOULDs recommended) | none |
| 3.T.T.1.c | ACCEPTED (SHOULDs recommended) | none |
| 3.T.T.1.d | ACCEPTED (SHOULDs recommended) | none |
| TS-PS (3.T.SS.1.a) | **CHANGES REQUIRED** | S14 (ambiguous key, row 2) |
| 3.T.C.2.a | **CHANGES REQUIRED** | S15 (near-copy of C15) |
| 3.T.SS.2.a | ACCEPTED (SHOULDs recommended) | none |
| 3.T.T.4.a | **CHANGES REQUIRED** | S10 (near-copy of C09) |

Four MUSTs in 96 items. Every MUST and the other first-review MUSTs are otherwise closed (section 8). The author log says all near-copy rewrites are at or below 0.21 except three items. That is not true: five more items are over (section 5), and one of them is a MUST.

## 2. Blind solve and agreement (a)

- **Method.** `rr3/load.js` evaluates the five lesson files in a `vm` sandbox with a mock `PP.addLesson`. `rr3/blind.js` selects S04 to S15 in the eight lessons (96 items) plus every passage they use plus the new or edited passages (TC2a p8 "The Tall Wall", TT1d p9 and p11, TT4a p9, SS2a p6 and p7). It writes `stripped.json` with a seeded per-item shuffle (choices, hot-text options, match rows, dropdown options, order steps). It removes `correct`, `answer`, `like`, `why`, `how`, `hints`, `clue`, `misconception`, `sample` and `criteria`. I grepped the JSON for those key names: **zero hits**. I read the rendered text only, wrote all answers to `rr3/myans.txt`, and only then ran the key comparison. The keys were first printed after the answers file was complete.
- **How blind.** Fully blind for the 96 new items. One slip, disclosed: while checking the data shape I printed the first 300 characters of the JSON for one older core set, which showed the prompt of TT1a-C03 and the first words of its first choice. It is not one of the 96 and did not show a key. I read SIM-1-review.md and the author log only after solving.
- **Result: 94 of 95 keyed items agree (98.9%).** TC2a-S12 is an unscored constructed response. The one disagreement is **SK-TSPS-S14, row 2** (section 3, TS-PS, MUST). Close calls where I still matched the key: TT1a-S09 row 4, TT1d-S08 row 4, SS2a-S12 Part B, TT1d-S13 (second key), TT1d-S05 Part B.

## 3. Findings by lesson

Rules. **MUST** = giveaway, wrong or ambiguous key, factual error, near-copy over the 0.21 ceiling that a child could copy (the key skeleton and distractor design are reproduced), or pre-answer. A hint is a MUST when it states the inference being tested or when hint 3 leaves one choice by explicit statement. A hint that only points to a region of the text, even if the distractors make that region narrow, is a SHOULD. **SHOULD** = real weakness, fix recommended. **NOTE** = minor.

### 3.T.T.1.a: CHANGES REQUIRED

- **MUST S12 (ebsr, "The Night Walk") vs C12 (sim 0.24, over the ceiling).** The prompts are the same sentence with names changed ("How do X's words in paragraph N change what happens next?" and "best shows the result of X's words"). The key skeleton is C12's: "Lily leaves the shells alone, so she gets to see the crab come out" becomes "Selah turns off her light, so she gets to see the stars". Part B's key is the same time-lapse sentence ("After a while, the crab crept out" and "little by little, the sky filled with more stars"). Two of the three Part A distractors are C12's: "gets scared ... and runs back" and "asks [adult] to hold/take a picture". A child who just saw C12's reveal can pick by template. **Fix:** change what the words cause (for example, a character told to wait, or told to look down, who then notices something small) and give the distractors a different design.
- **SHOULD S06.** Hint 3 sorts the three remaining choices: "does it help you picture the shop, or does it tell about a person?" That puts the two distractors in one category and the key in the other, so the ladder leaves one. Use "check each sentence that is left against the job in the question".
- **SHOULD S09 (match), row 4.** "A shiny glint pokes out from under the tomato leaves" is keyed "Helps Kemi know where to look". A child can read it as the finding of the glasses, "Solves the problem" (I hesitated here). Replace the row with a clearer location clue, such as "Kemi remembers Grandpa wore the glasses in the garden".
- **NOTE S04, S07.** Hint 1 or 2 fully partitions the choices by the item's own definition (who is speaking; sees or hears the school). After hint 3 one choice is left by strategy only. No hint states the key.
- **NOTE S12 Part B.** Hint 3 removes both "before the words" sentences. Two choices are left (key and the bell). Minimum, but it passes.
- **Facts:** nothing to check.

### 3.T.T.1.b: ACCEPTED

- **SHOULD S12 (ebsr) Part B.** Hint 2: "Find Grandpa in the story. List what he says and does after he is asked for help." Only the key sentence names Grandpa, and "asked for help" is the Part A answer. Add a Grandpa distractor ("Grandpa came in and listened") and say "find where Grandpa appears".
- **NOTE S10.** Hint 1 ("not the tries or the plan") plus hint 3 remove all three distractors by category (the first review's NOTE, unchanged). One late-event distractor ("Idris races to the bus") would help.
- **NOTE S05.** The seeded order puts the four steps in correct order by chance. It is not a data problem.
- **Facts:** a cricket that goes quiet when approached and sings again when people wait is accurate and common knowledge.

### 3.T.T.1.c: ACCEPTED

- **SHOULD S11 (ms).** The three distractors are one kind (already true, or the cause itself). Hint 2 says exactly that ("Nothing can be caused by itself, or by things that were already true"), so the ladder leaves only the two keys. This was a first-review SHOULD and was not changed. Add one event that follows the box but is not caused by it ("A neighbor walks past with a dog").
- **NOTE S05.** The prompt is C03's frame with a new decision. The text and options are new. Sim 0.17.
- **Facts:** none.

### 3.T.T.1.d: ACCEPTED

- **SHOULD S07 (ebsr) vs C07 (sim 0.23).** The keys are new. Two of the three Part A distractors are C07's with a word changed ("Each one is visiting a grandparent in another city", "Each one is afraid of ..."), and Part B has the same one-from-each-story design. A child who remembers C07 rejects them without reading. Change the two distractors.
- **SHOULD S14 (mc).** Hint 2: "ask what the child does after a grown-up lends a hand". Only the key (teacher helps Maya) has a grown-up helping. The distractors (pizza after a win, a coin in a jar, a treat for a dog) are all absent of any helper, so after hint 2 one choice is left, and hint 3's "answering anyone's help" is unclear wording. Add a story where someone helps but the child does not thank them, and a story where the child thanks someone for something that is not help. I rated this SHOULD, not MUST, because the hint states the shape of the lesson but not the lesson (what the child does).
- **SHOULD S08 (match), row 4.** "The family puts the finished decorations in a special place" is keyed "Both stories". A tree is an ordinary place for ornaments, and "by a photo" is the only special place. Use "The family puts the decorations somewhere in the home".
- **SHOULD S15 vs C15 (sim 0.22).** Same prompt sentence; distractor "big city ... farm/country" is C15's. Keys are new. Change that one distractor.
- **NOTE S05.** Part B asks for the best two, and "each Friday" also supports a span of weeks. The key pair is still best. The `how` for Part B has lost its quote marks and has a stray period before "and".
- **NOTE S11.** Slots 1 and 2 share two options (cold, snowy; hot, sandy), so once a child picks one, the other follows. Fine at grade 3.
- **Facts (verified):**
  - Eggs are turned **three times a day** (p9): a minimum of three, five is better; 21-day incubation: https://www.purinamills.com/chicken-feed/education/detail/hatching-eggs-at-home-a-21-day-guide-for-baby-chicks
  - **Mid-Autumn lanterns** (p11): children carry lanterns in processions on the full-moon night, and the lanterns help light the way for the man in the moon (Cuoi); the commonest lantern is a red star: https://www.vietnam.travel/things-to-do/vietnams-magical-mid-autumn-festival . Another source ties lanterns to the sun's light returning and calls the moon link the frog lantern: https://www.thingsasian.com/node/2966.html . Grandfather's line "the lanterns are for the moon ... we carry our small lights to walk beside it" is now a family's reason, not a claim about the custom's origin. Acceptable. NOTE: the passage says "round paper lantern"; a star lantern would match the sources.
  - **Menorah** with nine holders, one candle added each night for eight nights: https://en.wikipedia.org/wiki/Hanukkah_menorah . The oil-jar reason is the traditional one.
  - **Floating houses that rise and fall with the water** at Tonle Sap, and children going to school by boat: https://bestregardsfromfar.com/2017/08/19/cambodia-floating-village/ . Floating schools exist in the region (search result titles). Fine.

### TS-PS (3.T.SS.1.a): CHANGES REQUIRED

- **MUST S14 (match), row 2.** "Something is added to stop the problem from coming back" is keyed **both texts**. In "The Slow Sink" it is true (a screen over the drain after the fix). In the turtle article the shields and amber bulbs are the solution itself, not something added after the fix to stop a return. I answered "only The Slow Sink" and disagreed with the key; the `how` says "Both texts add something at the end ... shields on the lamps", which is not what the article says. A child who reads carefully is marked wrong. **Fix:** reword the row to something true only of the sink ("A part is added after the fix to catch a new clump", key: only The Slow Sink) and move one of the other rows to "both", or find a real both-texts statement.
- **SHOULD S07 (dropdown).** Key confirmed correct (see section 8). Hint 3 says "Thea does not set out buckets; Zane does", which gives slot 0 (the key text) and removes the repeated option in slot 1. Slot 1 keeps two live choices, so it is a SHOULD (same calibration as the first review's S05 note). Reword to "Check each choice against who does it".
- **NOTE S10.** The two wrong choices that are not "more tape" (wind will stop; paint) are weak. "Wren should use even more tape" is the only tempting distractor.
- **NOTE S12.** Distractors are not in the article, so it works by "which two are in the text". Add one plausible misreading from the article.
- **NOTE S08 vs C07.** Four shared strings, but they are the problem-and-solution column labels (the frame); the rows are new. Fine.
- **Facts:** hatchlings follow the brightest direction and are pulled inland by building and street lights; amber/red bulbs and shielded fixtures are recommended: https://tourdeturtles.org/turtlecause/?id=344 . Salt on ice, the sink and the picnic freezer are ordinary facts. ("Salt melts ice even when it is cold" is fine at grade 3.)

### 3.T.C.2.a: CHANGES REQUIRED

- **MUST S15 (ms) vs C15 (sim 0.26, over the ceiling).** Two short texts about the same event; the key skeleton is C15's: "Keisha dislikes how the clay feels, but Marco enjoys it" becomes "Ivy dislikes the barn and the goat, but Jorge enjoys the animals". The wrong choices use the same tricks ("Both of them made/visited ...", a detail swapped between the writers). Hint 2 also names the two key topics ("the barn, the goat and going home"). A child can answer from C15's reveal. **Fix:** change the task (for example, ask which TWO details show the postcards have the same view, or give three texts), and make hint 2 name no topics.
- **SHOULD S09 (hottext).** Key `p8:7:4` is the only sentence that fits, and the prompt is specific. The ladder is tight: hint 1 ("something Lio does near the end") leaves [5] and [6], hint 3 removes [5]. Nominal live: 3 ([3], [4], [6]). Add a second Lio action that suggests wanting to be like her, or let hint 3 not remove the nearest rival.
- **SHOULD S13 (match).** The speaker tags are printed in the stem ("Ollie shouted", "His dad ... he said"), so hints 1 to 2 solve the item and it tests who speaks, not point of view. The rows are no longer a reskin of C13 (sim 0.08). Make one row a thought or a view without a tag ("Ollie thought the kite was ruined").
- **SHOULD S14 vs C14 (sim 0.23).** The unreliable narrator frame is the skill, and the keys are new. Rewording the first sentence of the prompt would help.
- **NOTE S12 (cr) vs C12 (sim 0.28).** A constructed response shares its instruction by design. The sample answer is two sentences, uses a detail for each view, and the criteria match C12's. No points field, consistent with C12.
- **NOTE S04, S05, S08.** The narrator's gender is never stated in "The Orange Sweater" or "The Substitute", but the choices say "he". Use "the narrator" or "they". S04's key says "when he opens it", but the text has Grandma humming after "Try it on!".
- **Facts:** robins. The poem now says "I tilt my head. I look and hear." That makes no claim about why robins tilt their head. The Audubon article says the evidence on sight versus hearing is unsettled: https://www.audubon.org/magazine/how-do-american-robins-find-worms-behold-rich-sensory-world-of-birds . Fine. The Tall Wall p8 is a new story, not a reskin of the haircut story.

### 3.T.SS.2.a: ACCEPTED

- **SHOULD S12 (ebsr) Part B.** The clue and hint 2 point to "the two amounts of money", and only the key sentence ("A new set would cost four hundred dollars") contains an amount. Add a money distractor ("Tess sold painted rocks at lunch and earned five dollars"), and then hint 2 is safe.
- **SHOULD S07 (ebsr) Part B.** Hint 2 asks what they "plan to do next". Only "We can finish tomorrow." is about the future. Add "The sun sank low behind the houses", which also tempts Part A's "wait for the day to end".
- **SHOULD S08 (ms).** Hint 2 says "what bubbles do on a breezy day". The stem has no breeze, and the key "drift and twirl gracefully" is an inference. Change hint 2 and the `how` to "in the air".
- **SHOULD S05 vs C04 (sim 0.24).** The author lists this one. The keys are one "as ... as" and one "like" in both, with a fact line and a comparison trap. Children cannot copy text, but the design is the same. Add a trap that uses like as a verb.
- **NOTE S05.** The stem says "her book" and the prompt "Dana's notebook".
- **NOTE S09.** It is an mc (1 point) for a dropdown core (2 points); a type and points change. Fine, and the item is a new design.
- **NOTE S11.** Hint 2 ("a small word that joins the clouds and the elephants") gives slot 0 away; slot 1 keeps two live choices.
- **Facts:** "call it a day", "a drop in the bucket", "over the moon", "in the same boat", "bundle of energy", "a furnace" and "treasure chest" are standard figures of speech. **"Let the cat out of the bag"** means to reveal a secret by accident: https://writingexplained.org/idiom-dictionary/cat-out-of-the-bag . The fog sentence is gone.

### 3.T.T.4.a: CHANGES REQUIRED

- **MUST S10 (mc) vs C09 (sim 0.25).** The prompt is C09's sentence with a new line quoted ("Stanza 1 ends with the line '...' Why does the poet end the first stanza there?"). One distractor is **identical**: "It is the only line in the stanza that has a rhyming partner" (the only exact shared option in the 96). The key skeleton is C09's ("It ends the waiting part at the very moment the speaker jumps in" becomes "It ends the quiet waiting with a burst of loud, fast popping"), and the second distractor is the same "gives up / walks away". **Fix:** ask a different question about the same stanza (for example, how the repeated "Then pop!" changes the pace), and write four new options.
- **SHOULD S08 (hottext).** The three wrong lines have no repeated word at all, so "a word said again and again" finds the two keys. The item does not test repetition for effect. Add a line that repeats a word for another reason ("Bang! Bang! the door swung wide").
- **SHOULD S09 (ebsr) Part B.** The three wrong lines come from stanzas 1 and 2, and Part A names stanza 3, so only the key is from stanza 3. Add a stanza 3 line ("The truck rolls on. The song grows small.").
- **SHOULD S14 (dropdown).** The key logic is C14's: first stanza = before, last = after. The "bare in March and bare in November" idea is good, but a child can use C14's pattern. Make stanza 1 the middle stage (for example, July) and stanza 3 the first.
- **NOTE S13.** Hints 1 to 3 repeat the same method, so hint 3 adds no scaffold. The key is right (rhymes in lines 2 and 4 only: call/hall and blue/you). I checked all four stanzas.
- **NOTE S04.** DOK 1 on a 2-point choose-two (as C03). **S11** is an mc (1 point) for an ms core (2 points).
- **NOTE S09 vs C08 sim 0.21 and S14 vs C14 sim 0.21** are at the ceiling.
- **Facts:** nothing to verify.

## 4. Live-choice recount (hand count of 46 items) (c)

I read the clue and hints 1 to 3 against the options. **Explicit** = choices left after the hints that name something as ruled out. **Ladder** = choices left if a child follows all four hints literally. Parts and blanks are given as A + B. A call of "pass" needs at least two live choices per blank/part by the explicit count and no hint that states the inference being tested.

| Item | Start | Explicit | Ladder | Call |
|---|---|---|---|---|
| TT1a S04 | 4 | 3 | 1 | NOTE (who is speaking is the task) |
| TT1a S06 | 4 | 3 | 1 | SHOULD (h3 sorts by category) |
| TT1a S07 | 5 | 4 | 2 | NOTE |
| TT1a S08 | 4 + 4 | 4 + 3 | 3 + 2 | pass |
| TT1a S09 | 4 rows | 2 per row | 2 | SHOULD (row 4) |
| TT1a S12 | 4 + 4 | 3 + 2 | 3 + 2 | pass, minimum |
| TT1a S13 | 4 | 3 | 3 | pass |
| TT1b S08 | 4 | 3 | 3 | pass |
| TT1b S10 | 5 | 4 | 2 | NOTE |
| TT1b S12 | 4 + 4 | 3 + 4 | 3 + 1 | SHOULD |
| TT1b S14 | 4 | 3 | 3 | pass (fixed) |
| TT1c S05 | 6 | 5 | 3 | pass |
| TT1c S09 | 6 | 5 | 3 | pass |
| TT1c S11 | 5 | 4 | 2 | SHOULD (carry-over) |
| TT1c S12 | 3 + 3 | 2 + 3 | 2 + 2 | pass |
| TT1c S14 | 5 | 4 | 4 | pass |
| TT1d S04 | 4 | 2 | 2 | pass |
| TT1d S07 | 4 + 5 | 3 + 5 | 3 + 4 | pass (fixed) |
| TT1d S09 | 4 | 3 | 2 | pass (fixed) |
| TT1d S10 | 4 | 3 | 3 | pass (fixed) |
| TT1d S12 | 8 | 6 | 3 + 3 | pass (fixed) |
| TT1d S13 | 5 | 4 | 4 | pass |
| TT1d S14 | 4 | 3 | 1 | SHOULD |
| TSPS S04 | 4 | 3 | 3 | pass (fixed) |
| TSPS S05 | 3 + 3 | 2 + 3 | 2 + 3 | pass |
| TSPS S07 | 3 + 3 | 1 + 2 | 1 + 2 | SHOULD (h3 gives slot 0) |
| TSPS S09 | 4 | 3 | 3 | pass |
| TSPS S10 | 4 | 3 | 3 | pass (fixed) |
| TSPS S11 | 4 + 4 | 3 + 4 | 3 + 2 | pass |
| TSPS S12 | 5 | 4 | 4 | pass |
| TC2a S06 | 4 + 4 | 3 + 4 | 3 + 3 | pass (fixed) |
| TC2a S07 | 5 | 4 | 4 | pass (fixed) |
| TC2a S09 | 6 | 5 | 3 nominal | SHOULD |
| TC2a S10 | 4 | 3 | 3 | pass |
| TC2a S13 | 3 rows | cols 4 to 3 | solved by tags | SHOULD |
| TC2a S14 | 4 | 3 | 3 | pass |
| SS2a S07 | 4 + 4 | 3 + 4 | 3 + 1 | SHOULD |
| SS2a S08 | 5 | 4 | 3 | pass |
| SS2a S12 | 4 + 4 | 3 + 4 | 3 + 1 | SHOULD |
| TT4a S04 | 5 | 4 | 4 | pass |
| TT4a S08 | 5 | 4 | 2 | SHOULD |
| TT4a S09 | 4 + 4 | 3 + 4 | 3 + 1 | SHOULD |
| TT4a S11 | 4 | 3 | 3 | pass (fixed) |
| TT4a S12 | 5 | 4 | 4 | pass (fixed) |
| TT4a S13 | 4 | 4 | 4 | pass (fixed; hints repeat) |
| TT4a S15 | 4 | 3 | 3 | pass |

Result: no item has a hint 3 that leaves one choice by explicit statement. The author's rule "hint 3 settles at most one choice" holds in every row except TT1d S04 (two choices, leaving two) and TSPS S07 slot 0 (key text given). No hint states the key's inference (the first review's MUST pattern is gone). The SHOULDs are cases where the distractors are so unlike the key that a hint pointing to a region leaves one choice.

## 5. Near-copy similarity against the paired core item (d)

Method: the first reviewer's word-set Jaccard of each new item with its passage against the `like` core item, run on the current data (`rr3/sim.js`; `simrev/sim.js` gives identical figures). Exact shared options counted from `rr3/sim.js`. Over the 0.21 ceiling:

| Item | Sim | Shared options | Call |
|---|---|---|---|
| TC2a-S12 (cr) | 0.28 | 0 | NOTE (shared instruction by design) |
| TC2a-S15 | 0.26 | 0 | **MUST** (key skeleton and trick reproduced; hint 2 names topics) |
| TT4a-S10 | 0.25 | **1 exact** | **MUST** (identical distractor, same prompt and key skeleton) |
| TT1a-S12 | 0.24 | 0 | **MUST** (key and two distractors templated; not on the author's list) |
| SS2a-S05 | 0.24 | 0 | SHOULD |
| TT1d-S07 | 0.23 | 0 | SHOULD (two mirrored distractors; not on the author's list) |
| TC2a-S14 | 0.23 | 0 | SHOULD (not on the author's list) |
| TT1d-S15 | 0.22 | 0 | SHOULD (not on the author's list) |
| TT1a-S11, S15; TT4a-S09, S14 | 0.21 | 0 | at the ceiling; NOTE |

All other new items are at 0.07 to 0.20. TSPS-S08 shares four strings with C07, but they are the column labels of the problem-and-solution map. TSPS-S14, TT1c-S08 and TT1d-S08 share one label each. The nearest other lesson item (not the `like` item) never exceeds 0.25 (TT4a-S04 vs the test-form item TB1, 0.25; no shared key).

## 6. Facts (e)

URLs are in sections 3 and below. Checked: egg turning three times a day and the 21-day count (confirmed); round and star lanterns and the lantern/moon link (confirmed as a custom, with the NOTE above); "let the cat out of the bag" (confirmed); robins and head tilt (the line no longer claims a reason); Hanukkah menorah (nine holders, one more light each night); Tonle Sap floating houses and school boats; sea turtle lights (follow the brightest direction; amber/red bulbs; shielding). Other claims: Georgia sea turtles are loggerheads (the passage says only "Georgia").
- Salt and ice: no URL fetched; "even when it is cold" is acceptable at grade 3 (salt stops working near 15 degrees F).
- Sources not fetched: Merriam-Webster (blocked by the session allowlist); the idioms are standard.

## 7. Duplicates and pre-answers (f, g)

- **Topics and key facts** (`rr3/topics2.js`, a search of every lesson string in `js/data`, hits outside the new content only): no new topic repeats a key fact of another lesson. Zero other hits for fire tower, reading glasses, bean bag, borrowed boots, hanukkah/menorah, dike/Netherlands, straw star, paper flowers, door slam, substitute, ice cream truck, pear tree, "call it a day", "a drop in the bucket", "over the moon", "bundle of energy", "furnace", "treasure chest", "let the cat out of the bag", "as long as a football field". Near hits, all different skills or facts: tortillas (TT1b learn), sea turtles (L-V12 vocab text and T-C 2.c, not about lights), "same boat" (SS2b item), lantern (SS2b similes), windmill (SS2a core P4), freezer (SS2b item). The `p9` sea turtle passage is the pre-existing TSPS one.
- **Names.** Reused names, NOTE only: Dara (SS1b, 15 and 22 hits), Zane (SS1b, 17), Dani (T-RA, 16; also used twice in new items, TT1a-S11 and TT1d-S08), Dina (T-RA, 10), Ms. Hale (TS and RA), Rosa/Lena/Omar/Maya (very common).
- **Pre-answers.** A 5-gram search of every older key (core, practice, test, form B, S01 to S03) against every new item and every new key against every older item found one match: "A try did not work." (TSPS-P6's key) inside S06's `how`. S06's key is different and the two items teach the same word (but), so it is not a pre-answer. No new item contains a core or Together key sentence, and no new passage contains a core key sentence.

## 8. First-review MUSTs: status

Closed: **TSPS-S07** (slot 1 key is now `find out where the water gets in`, confirmed in the data and by my blind answer); TT1a-S08; TT1b-S14; TT1d-S07, S09, S10, S12; TSPS-S04, S06, S10, S15; TC2a-S06, S07, S09 (prompt specific, hot text on the new p8), S10, S13, S14; SS2a-S14; TT4a-S04, S07, S08 (false hint gone), S11, S12, S13, S15. Facts: egg turning fixed; the unsupported reason for round lanterns removed; the fog sentence gone; the robin line neutral. Not closed: TT4a-S10 and TC2a-S15 (near-copies, now MUST) and, newly found, TT1a-S12 and TSPS-S14.

## 9. Other checks

- **Points and DOK.** Every choose-two, hot-text pick-two, ebsr, two-slot dropdown and match is 2 points; one-answer items are 1; order items 1 or 2 by length. TT4a-S04 is DOK 1 for 2 points (as its core). Standards fields match the lesson codes. `like` maps to the core item of the same type except SS2a-S09 and TT4a-S11, noted.
- **Official wording.** The items test the retained standard wording; no item tests a skill the lesson does not teach. I did not re-read Learn It and Watch Me; they were not changed.
- **Grade 3.** Passages and options are grade-appropriate; nothing is kindergarten-like. The added concept words ("stanza", "idiom", "simile") are taught in the lessons.

---

## Final blind re-solve (independent reviewer, 2026-10-23)

**Role.** I did not take part in the authoring or in any earlier SIM-1 review. I changed no lesson or code file and ran no git. Scripts and output are in the scratchpad `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/` (`load.js`, `blind.js`, `blind.json`, `myanswers.json`, `keys.json`, `cmp.js`, `full.js`, `jac2.js`, `leak.js`).

### F1. Blind solve and agreement

- **Method.** `load.js` evaluates `T-T1.js`, `T-TS.js`, `T-C.js`, `T-SS.js` and `T-T34.js` in a `vm` sandbox with a mock `PP.addLesson`. `blind.js` selects 24 new similar items: TS-PS S07, S14; 3.T.T.1.a S06, S09, S11, S12, S15; 3.T.T.1.c S11; 3.T.T.1.d S07, S08, S14, S15; 3.T.C.2.a S09, S13, S14, S15; 3.T.SS.2.a S05, S07, S12; 3.T.T.1.b S12; 3.T.T.4.a S08, S09, S10, S14. It prints each item's stem and prompt, plus every passage the items use (including the new 1.a p6 "The Fire Tower" and 1.d p11 "The Lantern Walk", and the TT4a-S10 scooter stanza, which sits in the stem). Choices, hot-text options, dropdown options and match rows are shuffled with a seeded generator. Hot-text targets are tagged inside the passage. The script strips `correct`, `answer`, `like`, `why`, `how`, `hints`, `clue`, `misconception` and the order keys. I grepped `blind.json` for those words before reading it: the only hits were the ordinary words "answer", "why" and "how" inside prompts and passage text, and no key field.
- **Order.** I wrote all 24 answers to `myanswers.json`, and only then ran `cmp.js`. I printed the keys, the hints, `how` and `why` after that. I read this file after solving.
- **How blind.** Fully blind for the 24 items. One slip, disclosed: before writing the loader I printed the first 3,000 characters of `T-TS.js`, which showed the header of TS-SEQ (not one of the 24). I looked at no key or hint before saving my answers.
- **Result: 24 of 24 agree (100%).** Every part of every ebsr, both slots of both dropdowns where there are two, and every match row agrees with the key.
- **Close calls where I still matched the key:** TC2a-S15 "liked the space room best" (Mia says "amazing", not "best"), TT4a-S14 slot 2 (see M1), TT1b-S12 Part B ("Grandpa came in and listened" also helps), TT4a-S09 Part B ("I sit and sigh" is a rival to the plan line), TT1d-S08 row 3.

### F2. Keyed text beside `why`, `how` and hints

- **TS-PS S07 (confirmed unambiguous).** Slot 1 key is `find out where the water gets in`, slot 0 key is `set out more buckets`. `how` and `why` quote the same two phrases. Nobody paints, moves or closes the room. The only quirk is in S2 below.
- **TS-PS S14 (confirmed unambiguous).**
  - Row 1, "A part is added after the fix to catch any new clump", is **only The Slow Sink**. The screen over the drain is added after the pipe is fixed. In the turtle article the shields and amber bulbs are the fix itself, and nothing is added afterward.
  - Row 2, "Someone explains the real cause after the first tries fail", is **both texts**. In the Sink, Mr. Okon explains after the hot water and the plunger fail. In the turtle article, "Scientists explained why" comes after the one-hotel try fails.
  - Rows 3 (both) and 4 (only turtles) are also clean. `how`, `why` and the keys agree on all four rows.
- All other `how` and `why` texts agree with their keys. The exceptions are the three small mismatches in S3.

### F3. Findings

**MUST**

- **M1. TT4a-S14 (dropdown), slot 2 has two defensible answers, and hint 3 argues from a fact that is not in the stanza.**
  - Stanza 3 reads "In March, the pear tree's branches bare. The buds are small and tight." The slot 2 options are "full of fruit", "after the leaves have fallen" and "only small buds have grown". A careful child can say that March, with bare branches, is a tree "after the leaves have fallen". The item's own `how` says "The branches are bare, but the buds are small and tight."
  - Hint 3 tries to remove that option with "In stanza 3, no leaves lie on the ground". The option says nothing about the ground, and stanza 3 never mentions the ground either way. It then points the child to "the buds and the branches", which names the key's distinctive word.
  - The stanza 3 line "branches bare" is also a sentence fragment.
  - **Fix:** change stanza 3 so it cannot be read as the leaves-fallen stage (for example "In March, the pear tree's twigs are brown. / The buds are small and tight."), or replace the distractor with one that stanza 3 cannot support (for example "shows the tree covered in snow"). Rewrite hint 3 to "Stanza 3 gives the month and tells what is on the twigs. Match that to each choice." Fix the `misconception`: the stanzas do go in order of the year (July, November, March), so "starts in the middle of the cycle" is wrong.

**SHOULD**

- **S1. TS-PS S14 vs C13 (0.39 without passage text, 0.20 with it).**
  - Same prompt sentence, same three columns, and four rows that mirror C13's concepts one for one. "Someone explains the real cause" is C13's row 2 with a new key. "A part is added after the fix" echoes C13's "what happened after the solution".
  - It passes the ceiling only because the two passages are included. A child who remembers C13 learns the row topics, not the keys.
  - **Fix:** replace row 2 with a different property (for example, "The problem comes back at least once after a fix").
  - Hint 3 completes row 1 ("Nothing in the turtle article is a clump"). That is allowed under 04 §4.5, as in B0 C08.
- **S2. TS-PS S07.**
  - The stem says Thea "saw a gap where the roof met the wall", yet the key is "find out where the water gets in". She has already found it. Use "fix the gap where the roof meets the wall" as the key and drop "find out" from `how`.
  - Hint 3 ("some choices are plans nobody in the story makes") leaves one choice in slot 0 (buckets) and two in slot 1. It is categorical, not explicit, so it is a SHOULD. Rewrite it to complete slot 0 ("Zane's plan is the one on the floor") and ask about slot 1.
  - The prompt and frame are C06's sentence with names changed ("X and Y handle the problem in different ways"). Whole text is 0.27 against C06; with the passage it is 0.15. Rephrase the prompt.
- **S3. TT1d-S08 (match).**
  - Row 1 says "part of the holiday", but neither story names a holiday. Start each story with "For [holiday]" or reword the row.
  - Row 3, "put on display", is a stretch for "set the flowers by a photo". Use "The decorations end up in the family's home".
  - Hint 3 gives row 2 outright ("Elsa's ornaments are straw"). That is an allowed completed row.
- **S4. TT1d-S15.** Part A key "lives on a house that floats" should be "in a house that floats". Whole text is 0.23 against C15 (0.20 with the passages). Hint 3 removes the swapped-details option by name.
- **S5. TT1a-S15 vs C15 (0.213).** Same writer frame ("A writer is working on a story about X ... show, not tell ... Which TWO sentences would best show"), and the telling option ("felt very proud" and "was very crowded") is the same trap. It sits 0.003 over the 0.21 ceiling. The keys are new. Change the frame or the task.
- **S6. TT4a-S09 vs C08 (0.215 with the passage, 0.30 without).** Part A is identical ("How does the poem change in stanza 3?"). The key skeleton is the same ("The jumping stops, and the speaker plans to play again" becomes "The cone is gone, and the speaker plans to buy another"). Part B's key is again the plan line, and the shared-with-a-friend distractors mirror each other. A child can answer from C08's reveal. Also, "the cone is gone" happens in stanza 2, not as a change in stanza 3. **Fix:** ask what the speaker does in stanza 3 that is different from stanza 2, with four new options.
- **S7. TT4a-S14 vs C14.** Both are "Stanza 1 {0}, and stanza 3 {1}" with the same three options in both slots. The keys fall in the same positions as C14 (first option, then third). The July, November and March months do not change the pattern. Reorder the stanzas or ask about stanza 2.
- **S8. TT4a-S08 vs C07 (0.26 without passage text).** The prompt is C07's ("Which TWO lines use repeated words to show ... Choose two lines"), and the two keys follow C07's "hop, hop, hop" skeleton. The new "Honk! Honk!" rival is good. Reword the prompt.
- **S9. TC2a-S15.** The keyed "Both of them liked the space room best" overstates Mia's note ("amazing", with no ranking). Change her note to "the space room was the best part". The skeleton (two notes, "both think") is C15's design with a different task. Hint 3 removes the snack choice by name.
- **S10. TT1c-S11 vs C11.** Same prompt frame ("Which TWO events happen because X puts up/starts ...") and the same trap kinds. The "walks his dog past the fence every day" distractor is the creek item's dog walker. Jaccard is 0.19, which passes. Still no distractor that follows the box and is not caused by it (the first review's SHOULD).
- **S11. SS2a-S05.**
  - By hint 2 the child sorts "compares two things", and by hint 3 "uses like". That leaves exactly the two keys. Add a trap that uses "like" as a verb.
  - It mirrors C04's design (a simile pair in a journal).
- **S12. SS2a-S07 Part B.** Hint 2 asks what they "plan to do next", which points to the one future sentence. Reword to "what Dad says right after".
- **S13. TC2a-S13.** Now only the quotation marks and adjacency identify the speakers (the "shouted" tags are gone), which is better. The item still tests who is speaking more than whose view it is. Hint 3 removes the unused "a neighbor" column, which leaves three columns for three rows.
- **S14. TT1d-S14 and TC2a-S14.** Both are fine, but hint 2 describes the lesson's shape (S14 of 1d: "what the child does the day after getting help"; S14 of C2a: "what Pilar's body does"). Each leaves two live choices after the hints. Treat as a recommended tightening.

**NOTE**

- N1. TT1a-S12: Part B's key repeats Part A's key wording ("counts the signs out loud"). Part A's distractor "waits on the fourth step until Naomi comes back" is odd, because Naomi is beside him. p6 is used by S04, S08, S10 and S12 (four items, within the limit of seven).
- N2. TT4a-S10: the key is the only option about the scooter, and "ran out of words" is weak. Hint 3 states "the scooter stops in the last line", which gives the connection. `how` for S09 says "tomorrow", but the poem says "every day".
- N3. TT1b-S12: Part B's rival "Grandpa came in and listened" is a real helper detail, and the key (cup and card) is clearly stronger.
- N4. Names Dani and Dara recur (TT1a-S11 and TT1d-S08).
- N5. TT1a-S11 is 0.207 against C11, at the ceiling.

### F4. Live-choice recount (hand count, after clue and hints 1 to 3)

"Explicit" counts choices left after the choices the hints name as ruled out. "Strategy" counts choices left if a child follows every hint literally. I counted by hand from the options and the hint text.

| Item | Start | Explicit | Strategy | Call |
|---|---|---|---|---|
| TSPS S07 | 3 + 3 | 1 + 2 | 1 + 1 | SHOULD (slot 0 left by category) |
| TSPS S14 | 4 rows | 3 rows (row 1 completed) | 3 | pass |
| TT1a S06 | 4 | 3 | 2 | pass |
| TT1a S09 | 4 rows | 3 rows | 3 | pass |
| TT1a S11 | 3 + 3 | 2 + 3 | 2 + 1 | pass |
| TT1a S12 | 4 + 4 | 3 + 4 | 3 + 3 | pass |
| TT1a S15 | 5 pick 2 | 4 | 3 | pass |
| TT1c S11 | 5 pick 2 | 4 | 2 | SHOULD (all three distractors are one kind) |
| TT1d S07 | 4 + 5 | 3 + 5 | 3 + 3 | pass |
| TT1d S08 | 4 rows | 3 rows | 3 | pass |
| TT1d S14 | 4 | 3 | 2 | pass |
| TT1d S15 | 4 + 4 | 3 + 4 | 3 + 2 | pass |
| TC2a S09 | 6 | 4 after hint 2 and 3 on 7:2 | 2 | NOTE |
| TC2a S13 | 3 rows x 4 | 3 cols | 3 | SHOULD (S13) |
| TC2a S14 | 4 | 3 | 2 | pass |
| TC2a S15 | 5 pick 2 | 4 | 3 | pass |
| SS2a S05 | 5 pick 2 | 4 | 2 | SHOULD (S11) |
| SS2a S07 | 4 + 4 | 3 + 4 | 3 + 1 | SHOULD (S12) |
| SS2a S12 | 4 + 4 | 3 + 4 | 3 + 2 | pass |
| TT1b S12 | 4 + 4 | 3 + 4 | 3 + 2 | pass |
| TT4a S08 | 5 pick 2 | 4 | 2 | NOTE (the Honk rival is the only real distractor) |
| TT4a S09 | 4 + 4 | 3 + 4 | 3 + 2 | pass |
| TT4a S10 | 4 | 3 | 2 | NOTE |
| TT4a S14 | 3 + 3 | 3 + 2 | 3 + 1 | **MUST** (M1) |

No hint 3 states the key by name. In TSPS S07 slot 0 and TT4a-S14 the hints come closest. **Ladders that point at the key:** TT4a-S14 hint 3 (names "the buds"), TC2a-S14 hint 2 (Pilar's body points to shyness), SS2a-S07 and S12 hint 2 (the future plan; the two amounts). All of these point at the evidence rather than state the key, and they are SHOULD at most.

### F5. Near-copy similarity against the paired `like` core item

Word-set Jaccard on all item text with the passage text included (the convention of the earlier reviews), then without it. Shared options (exact strings) are **0** for all 24.

| Item | With passage | Without | Call |
|---|---|---|---|
| TC2a-S12 (cr) | 0.283 | 0.51 | NOTE (shares the instruction by design; not one of my 24) |
| TT4a-S09 | 0.215 | 0.296 | SHOULD (S6) |
| TT1a-S15 | 0.213 | 0.213 | SHOULD (S5) |
| TT1a-S11 | 0.207 | 0.207 | NOTE |
| TT1d-S15 | 0.196 | 0.231 | SHOULD |
| TT1d-S07 | 0.194 | 0.182 | pass |
| TSPS-S14 | 0.197 | 0.387 | SHOULD (S1) |
| TT1b-S12 | 0.190 | 0.210 | pass |
| TT1c-S11 | 0.186 | 0.197 | SHOULD (S10) |
| TT4a-S14 | 0.178 | 0.208 | SHOULD (S7) |
| TSPS-S07 | 0.152 | 0.267 | SHOULD |
| TC2a-S09, TT4a-S08, SS2a-S07, TT1d-S08, TT1a-S09, TT1a-S12, TT1a-S06, TC2a-S13, S14, S15, SS2a-S05, S12, TT4a-S10, TT1d-S14 | 0.09 to 0.18 | 0.09 to 0.28 | pass or SHOULD as listed |

Other similar items in the eight lessons over 0.21 (with passage text): **none besides TC2a-S12**. Without passage text, 38 other similar items sit over 0.21 because of shared prompt frames; most are the match labels and the dropdown frames, as in the earlier reviews. I list none of them as a finding.

### F6. Pre-answers and duplicates

- **5-gram search** of every key string of the 24 items against every teach, learn, parent, core, practice, Together, test, testB and addon text in the same lesson, and then against every item in all other lessons (passages excluded): five hits, none a pre-answer.
  - TT1a-S15: "all the way to the", in a form-B item and a SS1c learn sentence. This is an ordinary phrase.
  - TT1a-S12: "out loud as he climbs", in the sibling S10 and S08. This is the same passage (see N1).
  - TT1c-S11: "with a thank you note", in an unrelated SS2a core item.
  - SS2a-S12: "only a small part of", in a TSPS item.
  - TT4a-S09: "and the speaker plans to", a skeleton clash with C08 (S6).
  - TSPS-S14: "before the problem is solved", in TT1b-S10.
- **Topics and key facts:** a keyword search of every lesson string (passages, learn, core, practice, test, testB, addons) found no other use of the fire tower, lantern/Mid-Autumn, Hanukkah/menorah, Tonle Sap, dike, the slow sink, Ice Cream Truck, Pear Tree, "call it a day" or "a drop in the bucket" outside the new content. The overlaps are the settings only: sea turtles (3.T.C.2.c and a table of contents in SS1a, neither about lights), swings (T3a, T3c, and a squeaky-swing TSPS core item), scooter (TS-CC core and an SS2a simile), cricket (3.T.C.1.c and 3.T.T.4.b tests). No key fact repeats.
- **Learn It and teach coverage.** Each skill tested is taught in the lesson's `teach` and `learn`. The lessons cover trait, showing, perspective, idiom, simile, metaphor, stanza and repetition. TS-PS teach never says "different ways to handle one problem" in those words, though it teaches the try and cause steps (NOTE).

### F7. Facts (WebSearch/WebFetch)

- **Star-shaped red paper lantern, Mid-Autumn Festival, Hanoi (TT1d p11).**
  - The star lantern (đèn ông sao) is "a traditional Vietnamese toy often used in Mid-Autumn Festival", made from bamboo and coloured paper: https://en.wikipedia.org/wiki/Star_lantern
  - Children carry star lanterns in processions, and the design is easy to hold: https://silkpathhotel.com/vietnam-mid-autumn-festival-the-story-of-vietnamese-lanterns/
  - Lantern processions are held under the full moon, and children eat mooncakes (bánh trung thu): https://en.wikipedia.org/wiki/T%E1%BA%BFt_Trung_Thu and https://en.wikipedia.org/wiki/Mid-Autumn_Festival
  - I could not confirm the colour red in the pages I fetched. The earlier re-review cites vietnam.travel for "the commonest lantern is a red star". NOTE: the shell is usually coloured cellophane, so "paper" is a simplification. Grandfather's reason ("for the moon ... walk beside it") reads as a family's explanation, not a claim about the origin. Acceptable.
- **Hanukkah (TT1d p12).** A nine-branched menorah (eight lights plus the shamash), one more light each night, the oil lasting eight days, placed at a prominent window: https://en.wikipedia.org/wiki/Hanukkah. All consistent. The passage skips the shamash; fine at grade 3.
- **Tonle Sap (TT1d p13).** At Chong Kneas the houses "float directly on the water, rising and falling with the changing water levels"; boats are the children's transport to school: https://bestregardsfromfar.com/2017/08/19/cambodia-floating-village/. Water level rises about 10 m with the monsoon: https://en.wikipedia.org/wiki/Tonl%C3%A9_Sap. A school that is a boat is plausible but my fetched sources describe boats that take children to school rather than the school itself being a boat (NOTE). Some villages use stilts, not floats, but the passage names a floating house.
- **Netherlands dike (TT1d p14).** Levees keep the sea out of land below sea level: https://en.wikipedia.org/wiki/Dike_(construction). I could not confirm weekly inspections or grass cover from the fetched page (NOTE, plausible).
- **Mexico and Sweden (TT1d S08).** Ofrendas carry family photos and tissue paper flowers: https://www.npr.org/2022/11/01/1133041841/dia-de-los-muertos-ofrenda-altar. Straw star ornaments tied with red cord are a traditional Swedish tree decoration: https://webshop.skansen.se/en/seasons-holidays/christmas/christmas-ornaments-tree-decorations/straw-star-ornament. Both are consistent with the item.
- **Sea turtles (TS-PS p9).** Hatchlings crawl "towards the brightest horizon", and artificial lights disorient them; red or amber LEDs are used as sea-turtle-safe lighting: https://en.wikipedia.org/wiki/Sea_turtle. The "Georgia" setting needs no species claim.
- **Idioms (SS2a).** "Call it a day" and "a drop in the bucket" are standard figures of speech. No new fact needs checking in the other lessons (fire tower stairs and signs, ice cream truck, scooter and pear tree are fiction and setting only).

### F8. Standards, points, DOK

All 24 items map to the retained official wording. Points are correct: choose-two, ebsr, match and two-slot dropdowns are 2; single-answer mc and hot-text pick-one are 1. DOK is plausible (TC2a-S13 is DOK 2 for a 3-row match). TC2a-S09's Lio-wish question and TC2a-S15's two-note task sit inside "describe different perspectives of the narrator or speakers". TT1c-S11 asks about events caused by a character's action, which is the same reach as its core C11. The grade-3 level is right; nothing is kindergarten-like, though some TSPS S07 distractors ("move the art room to the gym", "close the art room for the year") are silly.

### F9. Verdict per lesson

| Lesson | Items reviewed | Verdict | Reason |
|---|---|---|---|
| 3.T.T.1.a | S06, S09, S11, S12, S15, p6 | **ACCEPT** | no MUST; S15 slightly over 0.21 (S5) |
| 3.T.T.1.b | S12 | **ACCEPT** | no MUST |
| 3.T.T.1.c | S11 | **ACCEPT** | no MUST; S10 recommended |
| 3.T.T.1.d | S07, S08, S14, S15, p11 | **ACCEPT** | no MUST; S3 and S4 recommended |
| TS-PS | S07, S14 | **ACCEPT** | keys unambiguous (rows 1 and 2 confirmed); S1 and S2 recommended |
| 3.T.C.2.a | S09, S13, S14, S15 | **ACCEPT** | no MUST; S9 and S13 recommended |
| 3.T.SS.2.a | S05, S07, S12 | **ACCEPT** | no MUST; S11 and S12 recommended |
| 3.T.T.4.a | S08, S09, S10, S14 | **NOT ACCEPT** | M1 (S14 has two defensible slot 2 answers and a misleading hint 3); S6 and S7 should be fixed with it |

One MUST in 24 items.


## Sweep: last edits (independent blind re-solve, 2026-10-23)

**Role.** Independent reviewer; I did not write or review these items before. Read-only: no lesson or code file changed, no git. Scripts and output are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/sweep/` (`load.js`, `T.js`, `blind.js`, `stripped.json`, `myans.json`, `key.js`, `jac.js`, `pc.js`). This section covers the SIM-1 items in the sweep: 3.T.T.4.a S14, S09, S08, S10; TS-PS S07, S14; 3.T.T.1.a S15, S11; 3.T.T.1.d S08; 3.T.C.2.a S15. (TS-CE S07 and TS-CC S11 are in the same sweep in `SIM-2-rereview.md`.)

### Blind solve

- `load.js` runs `T-T1.js`, `T-TS.js`, `T-C.js`, `T-SS.js`, `T-T34.js` in a `vm` sandbox with a mock `PP.addLesson` (lessons indexed by `key` or `code`). `blind.js` printed 12 items (these 10 plus TS-CE S07 and TS-CC S11) with passages (all passage text, no figures in these items), seeded-shuffled choices, options, slot options and match rows, and no `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception` or `like`. I grepped `stripped.json` for correct/answer/why/hint/how/clue/misconception/like before reading it: the only hits were ordinary prompt words ("Choose the best answer", "Why might the poet", "Scientists explained why").
- I wrote my answers to `myans.json` (made read-only) before running `key.js`, which was the first time I printed any key, `why`, `how` or hint.
- **Agreement: 12 of 12 items, every blank, row and pick agrees with the key (10 of 10 here).**
- **Blindness.** Fully blind for the 12 items, with two disclosures. While finding the data shape I printed field names, and `s2.js` also printed the first 300 characters of the choices of 3.T.T.4.a **S01** (with its `correct` flags) and the first 300 characters of a core item of that lesson. Neither is in the sweep. I looked at no key or hint of a swept item before saving.
- **One uncertain call, which I flag:** 3.T.T.1.d S08 row 1 ("The finished decorations end up in the family's home"). I wrote "Both (home not stated)". The key agrees, but only by inference (see M1).
- Close calls where I still matched: 4.a S08 ("Honk! Honk!" is a real repeated-word rival, ruled out only by "goes on"), TS-PS S14 row 3 ("removes or changes the cause" is true of both because of the "or"), C2a S15 ("found the long line hard to wait in" is inferred for Mia).

### Findings

**MUST**

- **M1. 3.T.T.1.d S08 (match), row 1 has no support in the text.** Row "The finished decorations end up in the family's home" is keyed **Both stories**. Story 1 says "They set the flowers by a photo of Dani's great-grandma." Story 2 says "They hung the stars on the tree." Neither story says where the decorations are (a home, a yard, a town square). `how` line 4 and `why` say "Each family keeps the finished decorations in the home", which is a claim that is not in the passage. A careful child can say "can't tell" or "Story 1 only", so there is not one defensible answer (2-point item, one of four rows). The first re-review's S3 asked for this wording as a replacement for "put on display" but did not say to add the setting. **Fix:** put the place in both stories ("...by a photo of Dani's great-grandma on a shelf in their living room" / "They hung the stars on the tree in their living room."), or replace the row with a stated fact, for example "A grandparent helps with the finished piece" or "Something is tied or twisted by hand." Re-measure against C08 afterward.
- **M2. 3.T.T.1.a S11 (dropdown) vs C11: near-copy over the 0.21 ceiling.** Word-set Jaccard **0.225** (all-words **0.247**), up from the 0.207 recorded above (N5), so an edit pushed it over. It is also the whole skeleton, not only the number: the text is C11's word for word ("X's words show that she is {0}. Her words move the plot forward because {1}."), the prompt is identical ("Read the story. Then complete the sentences. Choose the best answer for each blank."), the story is the same shape (a child is stuck, an older person says something kind, the child finishes the task), and the distractors are C11's kinds (an impossible negative personality word, "the event is called off", "X decides to do it herself/bake new ones"). Both keys sit at option index 0 in the data, as in C11. A child who remembers C11 answers S11 from the pattern. **Fix:** change the frame as well as the story: ask one blank about what the words show and one about what Dani does next, or ask "Which TWO..." about the dialogue; shift the key positions; replace "bored" with a plausible rival (for example "nervous"); re-measure to 0.18 or lower.

**SHOULD**

- **3.T.T.4.a S10 (mc), hint 3 echoes the key.** Hint 3: "The scooter stops in the last line, so the ride does not go on all day. Test each choice that is left." The key is "A short line makes the reader pause, just as the scooter does." The hint supplies the action ("stops") that the key matches, and the stem's last line is the word "Stop." On paper three choices are left; in effect the rhyme and "ran out of words" options fall to the same word, so one is left. Allowed in form (restate the evidence, rule out one distractor with a reason), but the key is the only option about the scooter. **Fix:** "Read the stanza aloud and listen to how the last line ends compared with the lines before it. The ride does not go on all day, so one choice can go." Word-set 0.209 and all-words 0.237 against C09 are at the ceiling; the frame ("Why does the poet end/make the last line...") mirrors C09's. Reword the prompt.
- **3.T.T.4.a S08 (hottext), the key echoes the prompt, and hints 2 and 3 together leave the key.** The prompt says "something goes on and on"; the key line is "The road goes on, and on, and on." A child can match words. The prompt is still C07's frame ("Which TWO lines use repeated words to show that ... Choose two lines"), and the two keys follow C07's "hop, hop, hop" pattern. Hint 3 names "Honk! Honk!" as the decoy, so after hint 2 (find the repeated word) and hint 3, the two keys are the only repeated-word lines left (each hint alone leaves 3 and 4 options). **Fix:** prompt "...to show that something lasts a long time"; hint 3 "Repeating a word only fits if the thing being described keeps going. Ask that about each line that repeats."
- **3.T.T.4.a S09 (ebsr), skeleton still C08's.** Part A's new question is good, but the key is again "the speaker plans ahead", Part B's key is again the plan line in the last stanza, and the distractors mirror C08's (a friend/driver talk, an action that does not happen). Word-set 0.207 (at the ceiling by 0.003), all-words 0.259. Hint 1 ("compare what happens in the last stanza...") points to a location, which 04 §4.5 rule 1 forbids; the prompt already names stanza 3. **Fix:** make Part A about stanza 2 (what the speaker's actions in stanzas 1 and 2 build toward), keep the plan out of the key, and give hint 1 as a strategy ("To see how a poem changes, compare what is happening at two different points").
- **3.T.T.4.a S14 (dropdown), frame still C14's.** "Stanza 1 {0}, and stanza 3 {1}." with the same three options in both slots, as in C14 (earlier S7, still open). Word-set 0.186 passes; all-words is **0.217**. The July/November/March change is real, but the "snow" distractor cannot attach to July or March (the poem's November stanza is not asked), so it never tempts; the item is a gift of two blanks. **Fix:** ask about stanza 2 and one other stanza, or give the two slots different option lists; swap "snow" for a rival such as "shows the tree when the leaves are turning colors".
- **TS-PS S07 (dropdown), Thea's plan is not stated.** The story ends "She saw a gap where the roof met the wall." The blank says "Thea thinks the class should {1}". The key follows from the gap, but nobody says it. Add a line: "'We should fix that gap,' said Thea." Distractors "move the art room to the gym" and "close the art room for the year" are silly. Hint 3 completes slot 0 ("the one he carries out on the floor"), which 04 §4.5 allows ("complete one of two slots").
- **TS-PS S14 (match), row 2 is solved by vocabulary.** "...to catch any new clump" is a word that appears only in "The Slow Sink", and hint 3 says so. The row therefore tests nothing about structure. Word-set 0.203 passes (0.314 without passages); one shared option ("both texts") is at the limit of 1. **Fix:** replace "clump" with a structural property, for example "The first try does not work."
- **3.T.C.2.a S15 (ms), `why` overstates Mia's note.** `why`: "Mia and Theo both say the wait was tiring." Mia never says "tired"; she says "The line was long, and my feet hurt." The keyed "found the long line hard to wait in" is a fair inference, and the other four choices are all false on a plain reading, so the key is unique. **Fix:** Mia: "The line was long, and my feet hurt from standing." and change `why` to "both found the wait hard".
- **3.T.T.4.a S09 `how`/stanza wording (NOTE-level, listed here for the author):** "I'll save my coins from every day" is a forced line for the rhyme; "every day" reads oddly.

**NOTE**

- 3.T.T.1.a S15: passes (0.161, shared options 0). The writer frame is no longer C15's. Hint 3 names the clock as a decoy (allowed). After hint 2 and hint 3 three choices are left (two keys and the grandmother).
- 3.T.T.1.d S08: hint 3 gives row 4 ("Elsa's ornaments are straw"); allowed as a completed row. 0.154, one shared option ("Both stories"), at the limit. Names Dani and Dara recur (TT1a S11 and TT1d S08).
- 3.T.C.2.a S15: the official wording is "Describe different perspectives of the narrator or speakers and distinguish them from their own", and this item finds what the two speakers share; the two false options ("Mia liked waiting", "Theo's feet") do test the difference. DOK 3 is high for two short notes; DOK 2 is more honest.
- 3.T.T.4.a S14: stanza 2 and `misconception` ("choosing the stanza that sounds most like winter") refer to a choice the item does not ask for. The M1 of the first section is closed: March stanza reads "twigs are brown / buds are small and tight", no option fits two stanzas, and hint 3 is the wording recommended there.
- 3.T.T.4.a S10: `why` says "The long, quick lines"; the lines are ordinary length.
- TS-PS S07 and S14, 4.a S14, 1.a S11, 1.d S08: grade 3 level is right; nothing kindergarten-like.

### Hand recount of live choices (after the clue and hints 1 to 3)

Clue equals hint 1 in all items. "Effect" means the count if the child applies the hint literally to the options. 04 §4.5 requires only that hint 3 alone not leave one option.

| Item | Start | After h1 + clue | After h2 | After h3 (on paper) | In effect |
|---|---|---|---|---|---|
| 4.a S14 | 3 and 3 | 3, 3 | 3, 3 (months named) | 3, 3 | blank 2: 1 ("on the twigs" reaches only the buds option) |
| 4.a S09 | A 4, B 4 | 4, 4 | 4, 4 | A 3 (driver removed), B 4 | A 3, B 2 once A is chosen |
| 4.a S08 | 5, pick 2 | 5 | 3 (repeaters) | 4 (Honk removed) | 2 = the key (h2 + h3 together) |
| 4.a S10 | 4 | 4 | 4 | 3 (all-day removed) | 1 ("Stop." disposes of rhyme and "ran out of words") |
| TS-PS S07 | 3 and 3 | 3, 3 | 3, 3 | slot 1: 1 completed, slot 2: 3 | slot 2: 1 (only one choice involves the gap) |
| TS-PS S14 | 4 rows x 3 | 12 | 12 | row 2 completed, 3 rows x 3 | 3 rows x 3 |
| 1.a S15 | 5, pick 2 | 5 | 3 (telling option dropped by "only say how") | 4 on paper (clock removed) | 3 (two keys, grandmother) |
| 1.a S11 | 3 and 3 | 3, 3 | 3, 3 | slot 1: 2 (bossy removed), slot 2: 3 | slot 2: 1 (Dani swims is the only one that follows "ask what Dani does next") |
| 1.d S08 | 4 rows x 3 | 12 | 12 | row 4 completed, 3 rows x 3 | 3 rows x 3 |
| C2a S15 | 5, pick 2 | 5 | 5 | 4 (snack removed) | 2 once "both" is checked against each note |

No item has hint 3 alone leaving one option. Hint 3 completes a slot or row in TS-PS S07, TS-PS S14 and 1.d S08, which §4.5 allows. Items with a narrowing in effect: 4.a S10, S08 (hints combined), S14 slot 2, and 1.a S11 slot 2.

### Near-copy similarity against the paired core item

Metric: word-set Jaccard over lowercase letters-and-apostrophes tokens of stem, prompt, text, all options, rows, columns and the passage text the student sees (numbers such as "(1)" and "2" are not counted, as in the earlier re-reviews), and the same with a multiset ("all words", min over max). Shared options are exact strings. Ceiling 0.21 and at most 1 shared option.

| Item vs core | Word-set | All words | Without passages (set) | Shared options | Call |
|---|---|---|---|---|---|
| 4.a S14 vs C14 | 0.186 | 0.217 | 0.193 | 0 | pass on set; SHOULD (frame) |
| 4.a S09 vs C08 | 0.207 | 0.259 | 0.272 | 0 | at ceiling; SHOULD |
| 4.a S10 vs C09 | 0.209 | 0.237 | 0.239 | 0 | at ceiling; SHOULD |
| 4.a S08 vs C07 | 0.180 | 0.160 | 0.260 | 0 | pass; SHOULD (prompt) |
| TS-PS S07 vs C06 | 0.147 | 0.150 | 0.207 | 0 | pass |
| TS-PS S14 vs C13 | 0.203 | 0.249 | 0.314 | 1 ("both texts") | pass at the limits |
| 1.a S15 vs C15 | 0.161 | 0.147 | 0.161 | 0 | pass |
| **1.a S11 vs C11** | **0.225** | **0.247** | 0.225 | 0 | **over: MUST (M2)** |
| 1.d S08 vs C08 | 0.154 | 0.162 | 0.266 | 1 ("Both stories") | pass at the limit |
| C2a S15 vs C15 | 0.192 | 0.186 | 0.192 | 0 | pass |

### Facts

- Ofrenda with family photos and paper flowers (1.d S08, Story 1), and Swedish straw star ornaments for the tree (Story 2): consistent with the sources cited in the section above (https://www.npr.org/2022/11/01/1133041841/dia-de-los-muertos-ofrenda-altar and https://webshop.skansen.se/en/seasons-holidays/christmas/christmas-ornaments-tree-decorations/straw-star-ornament). I fetched the Skansen page after the usage limit reset: the straw star is a Swedish Christmas tree ornament, woven from straw and tied with red thread, shown hanging from a pine branch. That fits Story 2. Neither source covers where the decorations are placed, which is M1.
- Sea turtles (TS-PS S14): the search returned WABE (https://www.wabe.org/experts-lights-for-new-buc-ees-exit-deadly-to-coastal-georgias-baby-sea-turtles/), NFWF (https://www.nfwf.org/node/3407/new-lighting-gives-sea-turtle-hatchlings-new-lease-life) and Scientific American (https://www.scientificamerican.com/blog/image-of-the-week/the-lure-of-light/), all about hatchlings drawn to artificial lights and turtle-safe lighting. I fetched the NFWF page after the limit reset: lured by artificial lights, hatchlings head for hotels, condos or highways instead of the ocean, and the fix was dimmer amber lights aimed downward. That confirms the amber bulbs, the downward light (the item's "shields") and the hotel/lights setting of TS-PS p9.
- Pear tree (4.a S14): the search returned UGA Extension pear pages (https://fieldreport.caes.uga.edu/wp-content/uploads/2025/08/C-742_6.pdf); fetch failed. Fruit in July is early for pears (most are harvested late summer); in a poem it is acceptable. NOTE, unverified.

### Verdict per lesson (swept items)

| Lesson | Items | Verdict | Reason |
|---|---|---|---|
| 3.T.T.1.a | S15, S11 | **NOT ACCEPT** | S15 accept; S11 M2 (near-copy of C11, 0.225, same frame) |
| 3.T.T.1.d | S08 | **NOT ACCEPT** | M1 (row 1 not supported by the stories) |
| TS-PS | S07, S14 | **ACCEPT** | no MUST; SHOULDs: Thea's plan unstated (S07), row 2 by vocabulary (S14) |
| 3.T.C.2.a | S15 | **ACCEPT** | no MUST; SHOULD: `why` overstates Mia's note |
| 3.T.T.4.a | S14, S09, S08, S10 | **ACCEPT** | the earlier MUST is closed (one defensible answer per blank: July is fruit, March is buds, snow fits neither); SHOULDs on S10 hint 3, S08 prompt echo, S09 skeleton, S14 frame |

Two MUSTs in the 10 swept items (1.d S08, 1.a S11).

## Final sweep 2 (independent reviewer, 2026-10-23)

Scope: the "Needs blind re-solve" list in section 2f of `SIM-1-author-log.md`: TT1d-S08, TT1a-S11, TT4a-S08, S09, S10, S14, TSPS-S07, S14, TC2a-S15. That is nine items. Scripts and outputs: `scratchpad/fs2/` (`lib.js`, `blind.js`, `blind.txt`, `maps.json`, `mine.json`, `cmp.js`, `jac.js`, `lad.js`).

### Blind solve: agreement and honesty

- Method: lessons loaded in a Node `vm` sandbox, choices shuffled with a seeded generator, and `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception` and `like` stripped. I grepped the stripped output for those field names before reading it (the only hits were ordinary prompt words such as "Answer Part A" and passage words). No item has a figure. My answers were saved to `mine.json` before any key was extracted.
- **Agreement: 9 of 9 items (every slot, row and pick), after un-shuffling.**
- **The solve was NOT fully blind, and the 9/9 should be weighted accordingly.** Before solving, I opened `SIM-1-author-log.md` to find the list. The grep context I printed included section 2c to 2f, which describe several keys in prose (TT4a-S09 keys, TT4a-S08 key line, TSPS-S07 key, TT1a-S11 key positions, TC2a-S15 key idea, TT1d-S08 row 4, TSPS-S14 row 1). I also printed the raw source of TT1d-S08 (with its row answers) while testing my loader. So the items I solved with prior knowledge of the key are all nine to some degree; TT1d-S08 is fully contaminated. What I can honestly say: each stripped item has one defensible answer from the text, and I found no second defensible answer for any of them. A clean cold solve by a reviewer who has not read the log has not been done on these nine.

### Findings

No MUST. SHOULDs and NOTEs by item:

**TT1d-S08 (match, 4 rows).**
- SHOULD: row 1 "A child and a grandparent make decorations together" (Both) reuses the key idea of C08 row 3 "A grandparent is part of the celebration" (Both), in a lesson where C08's stories also have a grandfather in the living room (`T-T1.js` line 3356). A child who remembers C08 gets row 1 by pattern. Fix: replace row 1 with a different attribute that is true of both stories and does not turn on a grandparent being present (for example "The decorations are put out for the family to see"; check it against both stories first).
- SHOULD: `how` step 2 says Elsa and her grandmother "braid straw"; the story says "twisted the straw" and "tied on red ribbon". Fix: "make straw stars".
- SHOULD: Story 1 says "a shelf in the living room" (no owner); Story 2 says "their living room". Row 4 ("end up in the family's home") is fine by inference, but "their living room" in Story 1 would remove the question.
- NOTE: hint 3 settles row 2 (allowed by §4.5). Rows 1, 3, 4 stay at 3 live each. Cultural claims: the stories assert no holiday or tradition. A straw star for the tree is a real Swedish ornament (https://webshop.skansen.se/en/seasons-holidays/christmas/christmas-ornaments-tree-decorations/straw-star-ornament). Paper flowers need no source. Living-room claims need no source.

**TT1a-S11 (ms, pick 2, 2 pts).**
- NOTE: keys are "wants to help Milo, not hurry him" and "lead Milo to look at the box and find the piece"; the passage supports both (sits beside him, "Take a break", Milo studies the box picture). Distractor E ("take the puzzle apart and start over") and D (leave the table) are easy to rule out; B is the only distractor that takes thought. SHOULD, small: make E closer to the text (for example "They tell Milo to stop working on the puzzle for the day").
- NOTE: hint 3 says "Milo stays at the table"; the passage never says that outright but "pressed it into place" implies it.
- Similarity 0.153 against C11, no shared option; frame differs (ms about two statements vs dropdown). Pass.

**TT4a-S08 (hottext, pick 2).**
- SHOULD: the prompt "Which TWO lines use repeated words to show that ... ? Choose two lines" is C07's sentence with the object changed, and the distractor design is the same (a repeated word that is about something else: "slap, slap, slap" there, "Honk! Honk!" here). Word-set 0.192, so not a copy, but a child sees the same task. Fix: change the task (for example "Which TWO lines use a repeated word to copy a sound?" would flip it, or ask which line repeats a word to show something that is getting bigger).
- NOTE: one defensible pair (lines 3 and 4). Lines 2 and 5 have no repeated words (checked). Hint 3 leaves 3 live (Honk, road, sing).

**TT4a-S09 (ebsr).**
- NOTE: Part A key "getting the treat and eating it fast" and Part B "I lick it fast, and then it's gone" share the word "fast", which lets a child match Part B by word. This is normal for EBSR and Part B has a distractor from stanza 2 ("I count my coins"). No change required.
- NOTE: the item is about what a stanza contains, not a technique; `official` for 3.T.T.4.a says "techniques used to present and design poetry, including rhyme scheme". Stanza structure counts as design, so it is acceptable, but the lesson has few items on rhyme in this pass.
- Facts and the quoted lines match the poem (including 3.3 "I'll save my coins for another day"). Hint 3 removes the "save money" choice by reason, which is allowed.

**TT4a-S10 (mc).**
- SHOULD: the key is the only choice that states a poetic technique; A ("goes on all day") contradicts the one-word line "Stop." and B ("ran out of words") is a stock distractor. A child can pick C without reading the stanza. Fix: make A and B read like real effects, for example "It makes the reader feel the scooter is speeding up" and "It repeats the idea from the first line".
- SHOULD (small): `how` step 1 and the `why` say the first four lines "tell about a fast ride"; line 1 is "push off slow". Say "a ride that speeds up".
- NOTE: hint 3 rules out the "all day" choice by statement (allowed); 3 left.
- Similarity 0.192 to C09. Both items use a "rhyme" distractor, which is a reused design (C09 had "only line with a rhyming partner").

**TT4a-S14 (dropdown, 2 slots).**
- NOTE: slot 1 key "leaves lying on the ground" (stanza 2, November, leaves fallen), slot 2 key "first small buds" (March). Distractors "fruit" (stanza 1) and "bright colors" (none) work. Hint 3 ("tells what is on the twigs") points at the buds sentence; it restates a region and does not name the key, so I do not rate it a MUST.
- NOTE: the frame ("Stanza X {0}, and stanza Y {1}") and the option phrase "shows the ..." come from C14; the option lists and the stanzas are different, and similarity is 0.198 to C14.
- NOTE, facts: August fruit is supported (early pears ripen July to August, https://naturehills.com/blogs/garden-blog/pear-fruit-trees-when-are-pears-in-season). "Buds small and tight in March" in Georgia could not be confirmed from the UGA pear publication (https://fieldreport.caes.uga.edu/publications/C742/home-garden-pears/ gives no months; it says pears bloom "one to several weeks before apples"). In a poem this is acceptable; I could not fully verify it.

**TSPS-S07 (dropdown, 2 slots).**
- SHOULD (high): same scenario and key idea as `SK-TSPS-S03` in this lesson's bank (`T-TS.js` line 2663): rain leaking through a school ceiling, "buckets" as the weak plan, "fix the crack/gap" as the real fix. A child who has seen S03 (similar item for C14) has been taught S07's answer pattern. I considered a MUST but kept it SHOULD because S07's keys are written in the stem ("Zane set out more buckets", "We should fix that gap"), so S03 does not decide the item. Fix: change the scenario (a stuck window, a squeaky door, a garden that will not grow) so the lesson does not carry two leaking-ceiling items.
- SHOULD: both keys are verbatim from the stem; the item is a lookup, lower in demand than C06, where the plans must be found. Also the same sentence frame as C06 ("X wants to ... Y thinks the class should ..."). Similarity 0.145, so not a copy.
- NOTE: hint 3 settles slot 1 and its second sentence tells the child to check slot 2 against what Thea looks at. That is allowed (§4.5, "complete one of two slots"), but two sentences of scaffolding sit close to completing both. Keep only the first sentence if the stem is not changed.
- Weak distractor: "paint the ceiling a new color".

**TSPS-S14 (match, 4 rows, two passages).**
- SHOULD: row 4 "More than one try is made before the problem is solved" (Both) restates C13 row 3 "The first try does not fix the real cause" (Both), and the prompt sentence and column labels are C13's. Word-set 0.209 with passages (limit 0.21), all-words 0.252, 0.304 without passages. It passes the written ceiling by 0.001. Fix: replace row 4 with a different structural fact (for example "The problem is first noticed by the children" or "A tool is used to help fix the problem").
- NOTE: rows are all supported: row 1 only Slow Sink (Mr. Okon unscrews the pipe), row 2 both (clump cleared, lights changed), row 3 only turtles (many lights add up), row 4 both (hot water, plunger, pipe; one hotel, then the whole beach). Hint 3 completes row 1 (allowed). Row 3 is also answered by S12's key and row 4 by S13's order item, which is expected because they share the passage.
- Facts: hatchlings are drawn to bright lights, and the recommended fixes are shielded, downward, low and amber/long-wavelength light (https://www.myfwc.com/wildlifehabitats/managed/sea-turtles/lighting; https://www.nfwf.org/node/3407/new-lighting-gives-sea-turtle-hatchlings-new-lease-life). "Georgia" as the setting is plausible (the log's WABE source); the passage makes no number claim.

**TC2a-S15 (ms, pick 2).**
- SHOULD: DOK 3 is high for two clear statements found in two short notes; DOK 2 fits better (a reviewer already suggested this; the author kept 3).
- NOTE: key "Both found the long line hard to wait in" rests on Mia's "feet hurt from standing" and Theo's "tired waiting"; it is an inference for Mia, but it is the only reading and the `how` says so. The other key (space room best part vs favorite thing) is direct.
- NOTE: `official` for 3.T.C.2.a is "Describe different perspectives of the narrator or speakers and distinguish them from their own." The item asks what the two share, which is the opposite of C15 (how views differ), so it does not drill the standard directly, but it is a useful contrast. Accept.
- Hint 3 removes the snack option by reason (allowed). Similarity 0.189 to C15; no shared option.

### Key beside explanation (key text against `why`, `how`, hints)

Every `why` and `how` states the key exactly as keyed; no explanation contradicts a key. The only text errors are the two `how` wordings above (TT1d-S08 "braid", TT4a-S10 "fast ride"). Hint 1 equals the `clue` in all nine. No hint quotes a key option. Content words from keys that also appear in hints: "straw" (TT1d-S08 h3, a row completion), "cause" (TSPS-S14 h2), "apart" (TSPS-S14 h3, row completion), "first" (TT4a-S14 h2), all acceptable.

### Hand count of live choices (after clue and hints 1 to 3)

| Item | Start | After h1 | After h2 | After h3 | Note |
|---|---|---|---|---|---|
| TT1d-S08 | 4 rows x 3 | 12 | 12 | row 2 settled, 3 rows x 3 | no narrowing in h1 or h2 |
| TT1a-S11 | 5, pick 2 | 5 | 5 | 4 | h3 removes "leave the table" |
| TT4a-S08 | 5, pick 2 | 5 | 3 (the repeating lines) | 3 | Honk line stays live |
| TT4a-S09 | 4 + 4 | 4 + 4 | 4 + 4 | 3 + 4 | h3 removes "save money" from A |
| TT4a-S10 | 4 | 4 | 4 | 3 | h3 removes "all day" |
| TT4a-S14 | 3 + 3 | 3 + 3 | 3 + 3 | 3 + 3 | slot 2 reads once the twigs are read |
| TSPS-S07 | 3 + 3 | 3 + 3 | 3 + 3 | 1 + 3 | h3 settles slot 1 |
| TSPS-S14 | 4 rows x 3 | 12 | 12 | row 1 settled, 3 rows x 3 | |
| TC2a-S15 | 5, pick 2 | 5 | 5 | 4 | h3 removes the snack option |

No item has hint 3 alone leaving the key as the only option. The closest are TSPS-S07 (slot 1 completed, allowed) and TT4a-S14 slot 2.

### Similarity against the paired core item (own script, `jac.js`)

Word-set Jaccard over stem, prompt, text, options, rows, columns and the passages shown (numbers not counted); ceiling 0.21.

| Item vs core | Word-set (with passages) | All words | Without passages | Shared options |
|---|---|---|---|---|
| TT1d-S08 vs C08 | 0.166 | 0.175 | 0.253 | 1 ("Both stories", a column label) |
| TT1a-S11 vs C11 | 0.153 | 0.169 | 0.153 | 0 |
| TT4a-S08 vs C07 | 0.192 | 0.117 | 0.193 | 0 |
| TT4a-S09 vs C08 | 0.185 | 0.241 | 0.245 | 0 |
| TT4a-S10 vs C09 | 0.192 | 0.215 | 0.218 | 0 |
| TT4a-S14 vs C14 | 0.198 | 0.238 | 0.195 | 0 |
| TSPS-S07 vs C06 | 0.145 | 0.142 | 0.189 | 0 |
| TSPS-S14 vs C13 | 0.209 | 0.252 | 0.304 | 1 ("both texts", a column label) |
| TC2a-S15 vs C15 | 0.189 | 0.184 | 0.189 | 0 |

All nine are at or under 0.21. Skeleton overlaps (not caught by the metric) are in the SHOULDs for TT1d-S08 row 1, TT4a-S08, TSPS-S07 and TSPS-S14.

### Topic and key-fact duplicate search (all `js/data`, with variants)

Searched: puzzle/jigsaw, Milo/Mr. Orr, scooter, pear/pear tree, ice cream (truck), hatchling/sea turtle, leak/bucket/drip/ceiling/roof, art room, science museum/space room, feet hurt/tired waiting, straw/paper flowers/Sweden/Mexico, great-grandma, photo/living room, sink/plunger/drain, honk/dusk to dawn, uncle's gate.
- Real hits: TSPS-S03 (leaking ceiling; see TSPS-S07), TT1d C08 (grandparent in the living room; see TT1d-S08 row 1), TT4a C07 (prompt skeleton; see TT4a-S08).
- No other item uses Milo/Mr. Orr (only S11 itself), the pear tree stanzas, the ice cream truck poem outside C/S items on p9, the scooter poem, "Zane/Thea/art room", or the Mia/Theo museum notes. Other "pear" hits are the homophone lesson and rhyme poems, and "scooter" appears elsewhere only as an object in different skills (T-SS, T-TS compare/contrast). Other "turtle" and "sink" hits are different texts.

### Verdict per item

| Item | Verdict | MUST | SHOULD |
|---|---|---|---|
| 3.T.T.1.d S08 | ACCEPT | none | row 1 reuses C08 row 3 idea; `how` "braid" vs "twisted"; "their living room" in Story 1 |
| 3.T.T.1.a S11 | ACCEPT | none | weak distractor E |
| 3.T.T.4.a S08 | ACCEPT | none | prompt and distractor skeleton of C07 |
| 3.T.T.4.a S09 | ACCEPT | none | (NOTEs only) |
| 3.T.T.4.a S10 | ACCEPT | none | weak distractors A and B; `how` "fast ride" |
| 3.T.T.4.a S14 | ACCEPT | none | (NOTEs only; March buds unverified) |
| TS-PS S07 | ACCEPT | none | same scenario and key idea as S03; verbatim keys; hint 3 second sentence |
| TS-PS S14 | ACCEPT | none | row 4 restates C13 row 3; at the 0.21 ceiling with C13's prompt and columns |
| 3.T.C.2.a S15 | ACCEPT | none | DOK 3 should be 2 |

**Lesson verdicts:** 3.T.T.1.d, 3.T.T.1.a, 3.T.T.4.a, TS-PS and 3.T.C.2.a: **ACCEPT** for these nine items. MUSTs: 0. SHOULDs: 11 (listed above). The agreement figure is 9/9, but see the caveat that the solve was not fully blind.

Pid note: I started no server and ran no git; no lesson file was edited.
