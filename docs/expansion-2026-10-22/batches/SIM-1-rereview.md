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
