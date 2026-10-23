# SIM-1 review: new similar items S04 to S15 in eight accepted lessons

**Role:** independent content reviewer (not the author). Blind solve first, author log read only afterwards.
**Scope:** 96 new similar items (12 in each of 3.T.T.1.a, .b, .c, .d, TS-PS, 3.T.C.2.a, 3.T.SS.2.a, 3.T.T.4.a), the new or newly used passages (3.T.SS.2.a p6 and p7, 3.T.T.4.a poem p9, 3.T.C.2.a p6 to p9, 3.T.T.1.d p9 to p14, and the others the new items use), and the sentence added to 3.T.T.1.d p14.
**Read-only:** I changed no lesson or code file. This is the only file I wrote. I ran no git. `check-content.js --all` was run read-only (PASS, 0 failures, 9 warnings, none in these items).

## 1. Method and blind-solve result

- **Scripts** (in `scratchpad/simrev/`): `load.js` loads the eight lessons by evaluating the data files with a stub `PP.addLesson`. `blind.js` prints passages used by S04-S15 and every S04-S15 item with choices, targets, steps, rows, columns and dropdown options shuffled by a seeded generator (seed 20261023). It strips `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `sample`, `criteria` and `like`. I grepped the printed file for those words before reading it: zero hits.
- **Answers saved first:** `scratchpad/simrev/ANSWERS-SAVED.txt` (written before the keys were extracted). `keyed.js` then re-ran the same seeded shuffle with keys attached. A diff of keyed output (markers removed) against `blind.txt` was empty, so the letters in my answers map exactly onto the keys.
- **Result: 94 of 95 keyed items agree (98.9%).** The 96th item (3.T.C.2.a S12) is an unscored constructed response. The one disagreement is **SK-TSPS-S07**, and it is a data error, not a solver slip (MUST, section 3).
- **How blind was it.** Not fully, and I say where. Before solving I printed the raw JSON head of three items while checking the schema: SK-TT1a-S04, SK-TT1a-S09 and SK-TSPS-S05 (keys were visible), and the cr item SK-TC2a-S12. So the strictly blind sample is **91 of 92 agree**; the three exposed items also agree but are not counted as blind evidence. I did not open the author's `scratchpad/sim1/` dumps or `SIM-1-author-log.md` until after saving answers.
- **Close calls while solving (all still keyed correctly by me, but each is a finding below):** TC2a S09 (two sentences show relief), TT1c S14 (key C is weak for Amira), TT1d S05 Part B (two weaker supports), TT1d S10 (stem wording), TT4a S08 (hint 3 is false).

## 2. How the other checks were run

- **Hint ladder:** every clue and hint 1 to 3 read against the options, plus a script (`wm.js`) that lists content words shared only with the key. It confirmed the word-match findings below (TT1d S12 "slowly, twice"; TT1d S09 "wait"; TC2a S14 "base"; TT4a S12 "line"; TSPS-S07 "bucket").
- **Near-copy test:** `sim.js` (word-set Jaccard of each new item, with its passage, against its `like` core item) and `opt.js` (options and keys shared with the `like` core item). Calibration: the accepted items S01 to S03 never exceed 0.21 and share at most one option with their core item. Several new items reach 0.30 to 0.44 and share whole option sets and key text.
- **Leakage and duplicates:** `dup2.js` (5-word sequences against all 2,324 text units in `js/data`, boilerplate removed), `names.js` (name reuse), plus targeted greps for each idiom, setting and fact. I found no new item that repeats another lesson's key fact; the problems are inside the lessons (section 3).
- **Readability:** `fk.js` ports `readability.py`. Every new passage is at or below FK 3.9 (highest: 3.T.T.1.d p11, 3.9; p14 with the added sentence, 3.5; SS2a p6 2.0, p7 1.3). Five item texts exceed 4.5 by the heuristic (NOTE, section 4).
- **Facts:** checked on the web, URLs in section 5.

## 3. Findings by lesson

Rules used. **MUST** = a giveaway, a wrong or ambiguous key, a factual error, or an item that pre-answers its core item. A near-copy is a MUST when the key wording or logic and the distractor design of the `like` core item are reproduced, so the child can answer from the answer just revealed instead of reasoning on new text. A hint is a MUST when hint 1 or 2 (with the clue) states the key in the key's own words, or hint 3 leaves only the key. Everything else is SHOULD or NOTE.

### 3.T.T.1.a (code 3.T.T.1.a): CHANGES REQUIRED

- **MUST SK-TT1a-S08 (ebsr, "The Fire Tower").** The ladder leaves only the key in Part B, and hint 2 echoes its wording.
  - Hint 2: "How is what Amos does with the rail different?" The key sentence is "Amos ... grabbed the rail with both hands."
  - Hint 3: "the sentence you choose must come from the start of the climb." Of the four Part B choices, BB is the end, BC is the middle, and hint 3 removes BA (the stairs). Only BD is left.
  - A reader who sees hints 1 and 2 only can write down both keys (scared; grabs the rail).
  - Fix: hint 2 should ask "what does Amos's body do at the first turn and at the top?" and hint 3 should rule out one sentence only.
- **SHOULD S13.** Hint 3 rules out the storm, then asks "what does a bell ringing nine times tell you about the time?" The key is the only choice about the time (A is about stars). Hint 2 already points at what the characters do after the bell. Use a neutral hint 3, such as "check each choice against what happens after the bell."
- **SHOULD S13 vs C13 near-copy.** The key logic (a description shows the visit is ending) and the distractors (a storm warning; a character afraid of the sound) mirror C13. Sim 0.21 with a mirrored distractor set. Change the function the sentence serves (for example, it shows a character is not alone) or the distractor design.
- **SHOULD S15 vs C15.** Same frame as C15 (a writer shows a feeling, with a "tells the feeling" distractor and a "describes a detail" distractor). Keys are new text, so this is not a copy. Vary the feeling-to-show task (show a place, not a person).
- **SHOULD S07.** Hint 2 sorts the choices into "about the school, what he does or says, something that happened." Only O5 is about the school. Hint 3 also names the whisper as ruled out, so the author's "5 / 5 / 5" count is wrong (see section 6). Reword hint 2 as a question about how each sentence sounds, not a category list.
- **NOTE S05.** Hint 3 "so she does not forget" echoes the key's "careful care" and kills distractor C. Restates evidence, which is allowed, but pair it with a neutral last sentence.
- **NOTE S09, S14, S15.** The key is unique and the options are good. Pre-existing format.
- **Facts:** nothing to verify in p6 and p7 beyond ordinary details. Six numbered signs and a fire tower are plausible.

### 3.T.T.1.b (code 3.T.T.1.b): CHANGES REQUIRED

- **MUST SK-TT1b-S14 (mc, compare the two solutions).** The ladder states the key. Hint 2: "find the try that does not work. Then find the person who speaks next." Hint 3: "In both stories, someone besides the child speaks up with a plan." That is "a first try fails, and a family member's idea fixes it" almost word for word, and it removes A (alone), C (by itself) and, in effect, D (asks a teacher). Only B is left.
  - Fix: hint 2 "Compare what the child tries first with how each problem is finally solved." Hint 3: rule out one choice (for example, "Nobody goes to a teacher in either story").
- **SHOULD S07.** Hint 1 says "authors often end with a detail that shows whether the fix worked." The key is "It proves that moving the cricket fixed the problem." Reword hint 1 to the generic strategy: "ask why the author puts this sentence last." Also the key says "proves"; "shows" is safer for grade 3.
- **SHOULD S06 vs C03.** Same dropdown frame and the same key logic as C03: "the main character" and "[X] matters to [him/her], so [the loss] is a real problem." Three of six options are shared (sim 0.23). Make the second blank test something other than "it matters to him."
- **SHOULD S08.** Hint 3 rules out two choices at once (bean bags and bucket size), and hint 2 points at the last sentence, which holds the wind. Rule out one.
- **NOTE S10.** Hint 1 ("not the tries or the plan") plus hint 3 (the stuck cloth is part of the problem) remove all three distractors by category. Consider one distractor that is a late event that is not a sign of solved (for example, "Idris races to the bus").
- **NOTE S13, S15:** FK 5.1 and 5.5 for the item text by the heuristic. Prompts are long; trim.
- **Facts:** a cricket that goes quiet when approached and sings again when people stay still is accurate (common knowledge; I did not source-check it).

### 3.T.T.1.c (code 3.T.T.1.c): ACCEPTED, with the SHOULD fixes recommended

No MUST. No key is wrong or ambiguous. Hints do not leave only the key (closest: S12 and S11).

- **SHOULD S12 (dropdown).** Hint 2 asks "what does Odessa not do?" (the last sentence says she does not tell friends) and hint 3 asks "what does Odessa get in return?" (she asked for nothing). Together these remove two of the three choices in blank 2. Hint 3 alone leaves three, so this passes the audit, but it is close. Give hint 2 only the location.
- **SHOULD S11 (ms).** All three distractors (C, D, E) are facts from paragraph 1 and fail the same "happened before the box" test, and hints 1 and 2 state that test. Add one distractor that happens after the box but is not caused by it, for example "A neighbor walks past with a dog."
- **SHOULD S09.** Hint 1 says "thinks or remembers"; the key sentences contain "thought" and "remembered." This is the cue-word pattern the B0 review of C09 already noted. Reword hint 1 as "what is going on inside his head?"
- **SHOULD S05 vs C03.** The prompt is C03's prompt with one name and one decision changed ("something he does, not something he says or thinks, that proves he has decided to ..."). The distractor types (earlier action, thought, spoken line, scene-setting) match one to one. Sim 0.17, so only the frame is shared, not the key text.
- **NOTE S14.** Key C, "Each one worries about something," is thin for Amira (her only worry is the thought "Nobody will care"). Defensible, but A plus C is the only pair that works, and the how says "a worry before the good ending." Consider "doubts that the plan will work."
- **NOTE S05, S14, S15:** item text FK 5.8, 5.4, 5.0 by the heuristic.
- **Facts:** no outside facts.

### 3.T.T.1.d (code 3.T.T.1.d): CHANGES REQUIRED

- **MUST SK-TT1d-S12 (hottext).** Hint 2: "Look for words like slowly, twice and each." The two key sentences are the only ones that contain "slowly" (O5) and "twice" (O8), and "each" appears only in O5 and O8. Hint 1 also says "taking time and checking each step." The script `wm.js` confirms the key-only words. Fix: hint 2 should say "Look for words that show how fast or how carefully the character works" without examples.
- **MUST SK-TT1d-S09 (mc).** Hint 3: "One of the choices is about rushing, but **both children wait**." That states the key's theme ("Waiting patiently ..."). Hint 2 ("What do both of them have to do before they see the result?") is nearly the same. With D removed, only B fits.
- **MUST SK-TT1d-S07 (ebsr).** Hint 2: "Read the last paragraph of each story. Ask what each girl says she will do." That is the key to Part A ("plans to do more with the custom next year") and the location of both Part B sentences. Hint 1 already says "what each one says or does near the end." The ladder leaves only the key. Fix: hint 2 should send the child to "the last three sentences of each story" and ask what the two girls have in common, and hint 1 should only say "look for something both girls do or feel."
- **MUST SK-TT1d-S10 (mc).** Two problems.
  - The stem is ambiguous. It quotes the simile "round like the full moon" and asks which part of Noa's story is "MOST like this." A child can read that as "which part is a comparison," and nothing in Noa's story is. The key, "Father explains why a candle is added each night," only works if the child reads the quote as an explanation of a custom. Reword the stem: "Linh's grandfather explains why people carry lanterns. Which part of Noa's story does the same job?"
  - It is a one-to-one copy of C10's design (a grandparent explains a custom; "which part of the other story is MOST like this?"; the key is the other story's explanation scene). Hint 3 also rules out two choices (A and C) at once.
- **SHOULD S11.** The first sentence of each story names the place and the weather, and the options repeat those words, so this is DOK 1 and below the difficulty of C11 (two stories, longer sentences). Use sentences that do not repeat the option wording.
- **SHOULD S05.** Hint 2 mentions "the number of days," which matches the two Part B keys ("Twenty-one days", "day twenty-one"). Two weaker supports also exist (BA "turned the eggs twice a day"; BE "each Friday"); the item says "best support," so the key holds, but say "best two" in the prompt.
- **SHOULD p9 fact.** "The class turned the eggs twice a day." Hatching guidance says turn eggs **at least three times a day**. Change to "three times a day" (distractor BA in S05 is unaffected).
- **SHOULD p11 cultural claim (S07, S10).** Grandfather says lanterns are round "like the full moon ... so we make our own small moons." The Vietnam tourism board describes the Mid-Autumn lantern custom (star lanterns are the commonest shape; lanterns also guide the legend of Cuoi to the moon), not this explanation. Presenting an invented reason as the family's tradition is a fabricated cultural fact. Fix: let Grandfather give the Cuoi legend in one sentence, or say "Tonight the moon is at its brightest, so we light our lanterns to join it" and drop "round like."
- **SHOULD S13 how.** "A Saturday market, a river market and a stall" invents details. The stem says only a market, a boat with buyers on a bridge, and a stall. Rewrite how step 2.
- **SHOULD S15 Part B.** Hint 2 sends the child to "whether the home stays still or moves", which is the key difference and singles out BB. Reword as "how each home sits where it is."
- **NOTE S06 vs C05.** The key of S06 ("something new ... something old that is special") is a distractor in C05 ("Kofi's mangoes are brand-new, but Lucy's sled is old and worn"), and S06 distractor C reuses C05's "food that will spoil ... toy that will break." Not a pre-answer, but it flips a wrong C05 choice into a right S06 choice.
- **NOTE S08, S15 FK:** 4.6 and 4.7 by the heuristic.
- **Facts (verified):** floating houses and school boats on Tonle Sap (Section 5); Hanukkah menorah with nine holders and a candle added each night; Swedish straw stars; Día de Muertos photos and paper flowers; the sentence added to p14 ("His house stood on solid ground, and it never moved") is true of the Netherlands and fits the dike passage. FK of p14 is 3.5.

### TS-PS, Problem and solution (code 3.T.SS.1.a): CHANGES REQUIRED

- **MUST SK-TSPS-S07 (dropdown). The key is wrong.** Slot 1 has `answer: 1`, which is "set out more buckets". The `why`, `how` and hints all say the correct choice is "find out where the water gets in" (option index 0). As written, a child who gives the correct answer is marked wrong, and the correct-answer button shows "set out more buckets, set out more buckets". `check-content.js` does not catch it because the index is in range. Fix: `answer: 0` for slot 1. This was the only blind disagreement.
- **MUST SK-TSPS-S04 (mc).** Hint 1: "A helper can solve a problem by knowing a new idea. Ask what Mr. Adams tells Isaac that Isaac did not know." The key is "He shares a fact about salt that gives Isaac a new plan." That is the key in other words, and hint 3 removes both A and B (Isaac, not Mr. Adams, shovels and pours water), leaving D and the unsupported C. Fix: hint 1 should match C02's neutral hint ("ask what this character does that changes what happens next").
- **MUST SK-TSPS-S10 (mc).** Hint 1: "A try that does not work can show what the real trouble is not." The key is "Something other than loose corners is making the fort fall." Hint 1 hands over the inference the item tests. C09's hint 1 asks "what the team learns," which is the model. Reword.
- **MUST SK-TSPS-S06 (mc).** The item is C05 with new words. C05: "Three legs stayed still, but the fourth leg wiggled" with key "One leg acts differently from the other three." S06: "Three of the clocks showed noon, but the fourth showed ten" with key "One clock is different from the other three." The distractors correspond one to one ("a try did not work", "something happened before", "now matches"). Hint 1 also says "does not match what came before," which is the key. Use a "but" that shows a failed try, so the child must distinguish the two meanings.
- **MUST SK-TSPS-S15 (mc).** Reskin of C15: a squeaking object, a first try that changes how it looks or moves, and the repair that shows the real cause. The key ("did not change the noise, which came from the dry wheel posts") mirrors C15's key ("paint made it look new, but the noise came from the dry chains"). Distractor logic matches one to one (rust on the seats, loudest at recess). Sim 0.35, the highest in the lesson. Use a different failed try and a different cause.
- **SHOULD S05 vs C03; S08 vs C07; S09 vs C08; S11 vs C10; S13 vs C12; S14 vs C13.** All use the core item's frame word for word (S08 shares 29 five-word sequences with C07). Keys are new content, so these are acceptable if the lead accepts same-frame items, but they are far closer than S01 to S03. S05's hint 3 also hands over slot 2 ("The book is Maya's try").
- **SHOULD S09.** Hint 3 rules out two choices (moved picnic, canceled lunch). Rule out one.
- **SHOULD S11.** Hint 3 rules out two Part A choices (hot water, plunger), and hint 1 says "found and removed". Rule out one.
- **NOTE S12.** The three distractors (road wet, ocean too far, hotel lights came back) are not in the article, so the item works by "which two are in the text", with no misreading to attract. Add one plausible misreading from the article.
- **Facts:** the sink clog, the sea turtle passage (pre-existing p9), salt on ice and the picnic freezer are ordinary facts. Salt melts ice only above about 15 degrees F; "even when it is cold" is acceptable at grade 3.

### 3.T.C.2.a, Point of view (code 3.T.C.2.a): CHANGES REQUIRED

- **MUST SK-TC2a-S09 (hottext). The key is not the only defensible one.** The prompt says "which sentence in Part 2 shows that she feels better by the end?" Both "She listened with wide eyes and let go of the arms" (T5) and "she smiled at her sparkling teeth" (T6) show she feels better, and T3 ("Okay," she said) shows she is willing to return. Hint 1 asks for "something Zadie does that shows she is no longer afraid," which fits letting go of the arms better than smiling. The how even calls T5 "calming down." The core C09 avoided this by asking which sentence shows he is **pleased with how he looks**. Restore that specificity ("pleased with how her teeth look").
- **MUST SK-TC2a-S06 (ebsr).** Hint 1: "A narrator's view can stay the same even when the story shows something else. Look for the narrator's own words at the end." That is the key to both parts ("Mr. Gage is still the strictest teacher alive"). The item is also a reskin of C05: "Ms. Pruitt is still a grump" becomes "Mr. Gage is still the strictest teacher alive," and the distractor "Ms. Pruitt is too busy to help anyone" is copied exactly with the name changed. Fix both.
- **MUST SK-TC2a-S07 (ms).** Hint 1: "Look at who is I and who is named she or he." Key D is "the girl in the chair is called she." That quotes the key. The item is a one-to-one reskin of C06 (a sparrow story becomes a parrot story; the haircut becomes teeth; "the boy ... is called he" becomes "the girl ... is called she"; "cut hair on this street for thirty years" becomes "cleaned children's teeth for thirty years"). Sim 0.30. The passage p8 ("The Dentist's Chair") is a reskin of p4 ("The Haircut"): the same two-narrator structure and the same seven-sentence Part 2 (grips the arms, funny animal story, a final question, a one-word answer).
- **MUST SK-TC2a-S10 (mc) and S09 (hottext).** S10 is C10 with names changed: the prompt "Why does the author have Dr. Amoah tell Part 2 instead of Zadie?" matches C10 sentence for sentence, and the four choices keep the same four roles (see her from outside; steps for the task at home; the first narrator's thoughts; never really worried). Sim 0.30. S09 has the same seven-sentence Part 2 as C09.
- **MUST SK-TC2a-S13 (match).** Same prompt as C13 ("Read each short part of a story ... shows how the teller feels, or only tells what happens"). The four rows are paired reskins: a bus timetable becomes a train timetable; "smelled so awful I held my nose" becomes "so delicious I asked for a third bowl"; the puppy wagging becomes the dog barking. Sim 0.34. Hint 1 quotes two of the row phrases ("delicious", "could not stand"), and hint 3 gives the third row. All four rows are solved by the hints.
- **MUST SK-TC2a-S14 (mc).** Reskin of C14: "I am the best player on the Hawks ... scored zero goals because nobody passed ... Coach does not know" becomes "I am the best block builder ... the tower fell because the table shook ... Mia just wants to copy my idea." Same key logic (the other person's advice is right) and same four-choice design. Hint 2 names "the base," which is the key's noun.
- **SHOULD S15 vs C15.** Two journals about one art class vs two postcards about one farm trip; keys "X dislikes ... but Y enjoys" mirror each other. Sim 0.26.
- **SHOULD S04.** The two keys are the only choices with Grandma as the subject, and the distractors all change subject (he, he, he). The item can be solved by pronoun matching. Add a false Grandma sentence.
- **SHOULD S07/S11 hint 1.** S11 hint 1 ("body parts or actions that only an animal would have") names the key category. Reword.
- **NOTE p9 fact.** The poem says "I tilt my head. I use my ear." Audubon reports that research is mixed (a 1965 study found sight only; later work found robins also use hearing), so the line states as fact something still uncertain. Change to "I tilt my head and look and listen."
- **NOTE Dr. Amoah's gender.** Passage never states it; the items use "he."
- **cr SK-TC2a-S12.** The sample answer is two sentences, uses a detail for each view, and the four criteria match C12's. It is fine. No `points` field, consistent with C12.
- **Facts:** Audubon on robins (URL in section 5); the orange-sweater, substitute and dentist stories contain no checkable facts.

### 3.T.SS.2.a, Similes, metaphors and idioms (code 3.T.SS.2.a): CHANGES REQUIRED

New passages p6 "Raking Leaves" and p7 "Swings for the School Yard": FK 2.0 and 1.3; 104 and 103 words; the key facts are original and appear nowhere else in `js/data` (grep for the idioms, the setting and the names found only these items). They fit grade 3. Idiom meanings ("call it a day", "a drop in the bucket", "over the moon", "in the same boat", "bundle of energy") are correct.

- **MUST SK-SS2a-S14 (ms).** Mirror image of C14. The sentence pair keeps the same shape (one comparison, one plain fact), and the five choices are C14's with A and B swapped: C14's keys are "Only sentence B compares ..." and "Sentence A tells a fact in plain words"; S14's are "Only sentence A compares ..." and "Sentence B tells a fact in plain words." The distractors match (both are metaphors; a simile; a real object). Sim 0.21, but option overlap is 2 of 2 keys. Write a different pair and different distractors (for example, a personification line vs a fact).
- **SHOULD S14 fact.** Sentence B reads "Fog forms when warm air meets cool air." The Australian Bureau of Meteorology explains that fog usually forms when air cools to its dew point, and warm air meeting a cool surface makes only one type (advection fog). Because the item asks the child to treat B as "a fact in plain words," use a sentence that is plainly true, for example "Fog is made of tiny drops of water in the air."
- **SHOULD S08.** Distractor B says "The bubbles are hiding from the girl." The stem has no girl. Also the key E restates the stem's "floating and turning." Rewrite both.
- **SHOULD S12.** Hint 1 says "think about how the money Tess earned compares with what the school needs," which is the key (a small part of what is needed). Use "reread what the school needs and what Tess has."
- **SHOULD S09 vs C09.** Same dropdown with the same six options (5 shared, both keys shared); only the sentence differs, and it flips the answer. A contrast pair has teaching value, but a child who just saw "like = enjoy" will pick the other answer without reading. Write a sentence where like is not obviously a comparison or a verb.
- **NOTE S05.** The stem says "her book" and the prompt "Dana's notebook."
- **NOTE S10.** O2 (a simile) is the same distractor design as C10.
- **Facts:** "call it a day", "a drop in the bucket" (Merriam-Webster entry), "over the moon" and "in the same boat" are standard idioms; checked.

### 3.T.T.4.a, How poems are built (code 3.T.T.4.a): CHANGES REQUIRED

Poem p9 "The Ice Cream Truck": four-line stanzas with couplet rhymes (slow/go, street/treat, twice/price, on/gone, small/wall, pay/play). The on/gone rhyme is accepted as a close rhyme in American English. It is grade-appropriate. "Save my pay" for a child reads oddly; "allowance" is clearer. The poem is used by S09 only and raises no leakage.

This lesson has the largest near-copy problem: most S items are the core item with new nouns.

- **MUST SK-TT4a-S08 (hottext). Hint 3 is false.** Hint 3 says "'We pack the bags and close the door' has no repeated word, so you can drop it," and the how says "The other three lines have no repeated words." "The" appears twice in that line (and in "The sky is gray, the clouds hang low"). Hint 2 asks for "a word that is said more than once in the same line," which O1 and O3 satisfy. Fix: ask for a word repeated on purpose, and rule out a line that has no such repetition (O2).
- **MUST SK-TT4a-S12 (ms).** Hint 1: "A repeated line can do more than one job. It can tie the stanzas together, and it can show an action that goes on and on." Those are the two keys ("the same last line, like a chant"; "keeps working at the hole"). The keys also equal C11's keys almost word for word (sim 0.30). Hint 1 should say only "ask what the repeated line does for the stanzas and for the puppy."
- **MUST SK-TT4a-S13 (mc).** Hint 3: "In the stanza above, only two lines rhyme. A stanza where all four lines rhyme does not match." A, B and C all have four rhyming lines (hat/cat, deep/sleep; rose/grows, vine/fine; bay/gay/way/play). Only D is left. Replace with "One choice has the same lines rhyming in pairs; check the rest by saying the end words."
- **MUST near-copies of the core item (key text or whole option set reproduced):**
  - **S04** vs C03: all five options shared; key "The poem has three stanzas" is C03's key word for word, and "The first stanza is the shortest one" is a C03 distractor made true. Sim 0.26.
  - **S07** vs C06: identical frame and template key ("X does not rhyme with Y, so lines 3 and 4 would no longer rhyme") and three shared options. The couplet pattern is the same too.
  - **S11** vs C10: all five options shared; both keys are C10's keys (the sound word; "Only [one poem] begins two lines/stanzas with the same words").
  - **S15** vs C15: sim 0.44, the highest in the batch. Three of four options are shared; the key "Each stanza begins with a similar line, but the time of day and one word change" is C15's key; "Harbor Day" is "Game Night" with a different place.
  - Fix: change the poem form, not the nouns. For example, S15 could ask how the poet shows a change using the length of the stanzas.
- **SHOULD S06 vs C05; S10 vs C09; S14 vs C14; S09 vs C08.** Same frame; S06 (sim 0.40) uses C05's stem sentence ("A class wrote a poem about ... Here is one stanza"), and the odd line is line 3 in both. S10's choices are the same four roles as C09's. S09's "plans to buy another" is C08's "plans to play again."
- **SHOULD S05** is the "turn" concept. The teach text does not use that word. C04 uses it and was accepted, so keep, but add the word to teach if the lead wants it.
- **NOTE S13** stanza and **S14** poem ("The Pear Tree") are original and accurate.
- **Facts:** nothing to verify.

## 4. Cross-lesson notes

- **Item text FK above 4.5 (heuristic, short text):** TT1b S13 (5.1), TT1b S15 (5.5), TT1c S05 (5.8), TT1c S14 (5.4), TT1c S15 (5.0), TT1d S08 (4.6), TT1d S15 (4.7). Hints and how text above 5.5: TT1b S09, TT1c S15, TT1d S04, TS-PS S13, TC2a S14. All new passages are at or below FK 3.9.
- **Name reuse:** Dara (TT1b p6) also names a character in the SS1b core items. Ms. Hale (TC2a p7) appears in other lessons. Zane (TS-PS S07) appears in SS1b items. NOTE only.
- **Topic duplicates across all of `js/data`:** none for the new key facts. Backpack-packing each night appears in TT1c S07 and TC2a C04 (different lessons, different skills; NOTE).
- **Points, DOK and standards:** every choose-two item is worth 2; every ebsr is 2; hot-text pick-two is 2; dropdown with two slots is 2; the cr item has no points (as C12). DOK labels are reasonable, except TT1d S11 (DOK 2, reads as DOK 1) and TT4a S04 (DOK 1, same as C03). `std` fields match the lesson codes.
- **`like` mapping:** honest by task type in all 96. By text similarity the `like` core item is the closest core item for most; for a few (TT1a S05, S09; TT1b S05, S09, S11, S14; TT1c S07, S10, S15; TT1d S09, S11, S14; SS2a S11, S12) another item scores slightly higher, but at 0.2 or below the measure is noise and the task type matches. The problem is not the mapping but that, for the items listed above, the item is too close to the core item to be a fresh application. S01 to S03 sit at 0.12 to 0.21 and share at most one option with their core item; S04 to S15 reach 0.44.

## 5. Sources consulted

- Robins and head tilt (mixed evidence): https://www.audubon.org/magazine/how-do-american-robins-find-worms-behold-rich-sensory-world-of-birds
- How fog forms (dew point; warm air over a cool surface is one type): https://media.bom.gov.au/social/blog/1807/explainer-what-is-fog/
- Vietnam Mid-Autumn Festival (lanterns, full moon, mooncakes, Cuoi legend): https://www.vietnam.travel/things-to-do/vietnams-magical-mid-autumn-festival
- Egg turning at least three times a day, 21-day incubation: https://www.purinamills.com/chicken-feed/education/detail/hatching-eggs-at-home-a-21-day-guide-for-baby-chicks
- Tonle Sap floating villages and schools (search results; the page fetch failed): https://www.traveller.com.au/floating-villages-of-cambodias-great-lake-gj3a2o and https://akphilanthropy.org/projects/tales-of-tonle-sap
- Hanukkah menorah: https://en.wikipedia.org/wiki/Hanukkah_menorah
- Swedish straw stars: https://webshop.skansen.se/en/seasons-holidays/christmas/christmas-ornaments-tree-decorations/straw-star-ornament
- "A drop in the bucket": https://www.merriam-webster.com/dictionary/a drop in the bucket

## 6. Live-choice recount (sample of 36, from the hint text)

The author's column took the first sentence of hint 3. I recounted by reading all three hints and the clue: **Hint 3** = choices left after hint 3's own eliminations. **Ladder** = choices left once hints 1 and 2 are also applied the way a child would. Parts are given as "A + B".

| Item | Author (after h3) | Mine, h3 | Mine, ladder | Note |
|---|---|---|---|---|
| TT1a S06 | 3 | 3 | 1 | h3 removes D, then splits "describes shop" from "about a person" |
| TT1a S07 | 5 | 4 | 4 | h3 names the whisper; author shows no elimination |
| TT1a S08 | 3 + 4 | 3 + 3 | 3 + 1 | start-of-climb rule and the rail in h2 leave BD |
| TT1a S12 | 3 + 4 | 3 + 2 | 3 + 2 | h3 removes the two "before Grandma speaks" sentences |
| TT1a S13 | 3 | 3 | 2 | the time question leaves A and C |
| TT1b S08 | 3 | 2 | 2 | h3 removes B and C |
| TT1b S10 | 4 | 4 | 2 | h1 removes tries and plan |
| TT1b S14 | 4 | 4 | 1 | h2 and h3 state the key |
| TT1c S05 | 6 | 5 | 3 | h3 removes T2; h2 sorts said, thought, done |
| TT1c S09 | 5 | 5 | 2 | h1 cue words |
| TT1c S11 | 4 | 4 | 2 | h2 removes things already true |
| TT1c S12 | 2 + 3 | 2 + 3 | 2 + 1 | h2 and h3 together |
| TT1c S14 | 5 | 4 | 4 | h3 removes B |
| TT1d S04 | 3 | 2 | 2 | h3 removes A and D |
| TT1d S07 | 3 + 5 | 3 + 5 | 1 + 2 | h2 gives the common feature and both sentences |
| TT1d S09 | 4 | 3 | 1 | "both children wait" |
| TT1d S10 | 4 | 2 | 2 | h3 removes A and C |
| TT1d S12 | 7 | 6 | 2 | h2 names the key words |
| TT1d S13 | 5 | 4 | 4 | h3 removes A |
| TSPS S04 | 3 | 2 | 1 | h1 + h3 |
| TSPS S05 | 2 + 3 | 2 + 1 | 2 + 1 | h3 gives slot 2 |
| TSPS S09 | 3 | 2 | 2 | h3 removes A and D |
| TSPS S10 | 3 | 3 | 1 | h1 states the inference |
| TSPS S11 | 3 + 4 | 2 + 4 | 1 + 1 | h3 removes AB and AD |
| TC2a S06 | 4 + 4 | 3 + 4 | 1 + 1 | h1 states the key |
| TC2a S07 | 4 | 4 | 2 | h1 names the "she/he" clue |
| TC2a S10 | 4 | 3 | 3 | h3 removes A |
| TC2a S13 | 4 rows | 3 rows left | 0 | h1 quotes two rows, h3 gives one |
| SS2a S08 | n/a (no rows in log) | 4 | 3 | h3 removes A |
| SS2a S12 | n/a | 3 + 4 | 1 + 1 | h1 and h2 state the comparison |
| TT4a S05 | 5 | 4 | 3 | h3 removes O1 |
| TT4a S08 | 4 | 4 | 2 | h3's claim about O3 is false |
| TT4a S12 | 4 | 4 | 2 | h1 names both jobs |
| TT4a S13 | 4 | 1 | 1 | h3 removes A, B and C |
| TT4a S04 | 4 | 4 | 4 | fine |
| TSPS S12 | 4 | 4 | 4 | fine |

Result: 34 of the 36 have an author record (the log has no 3.T.SS.2.a rows). The author's count matches my hint-3 count in 16 of those 34 and is too high in 18 (a hint-3 elimination was missed, or hint 3 removes more than one choice). In about two dozen of the 36 the ladder as a whole is narrower than the hint-3 count (compare the last two columns). The author log's statement that "hint 1 (the clue) and hint 2 rule out nothing in any new item" is not true for those rows. The author log also has **no rows for 3.T.SS.2.a** (the table header is followed by nothing), so that lesson has no live-choice record at all.

## 7. Verdicts

| Lesson | Verdict | MUST items |
|---|---|---|
| 3.T.T.1.a | CHANGES REQUIRED | S08 |
| 3.T.T.1.b | CHANGES REQUIRED | S14 |
| 3.T.T.1.c | ACCEPTED (SHOULDs recommended: S09, S11, S12, S05) | none |
| 3.T.T.1.d | CHANGES REQUIRED | S07, S09, S10, S12 (plus SHOULD: p9 egg-turning fact, p11 lantern explanation) |
| TS-PS (3.T.SS.1.a) | CHANGES REQUIRED | S04, S06, S07 (wrong key), S10, S15 |
| 3.T.C.2.a | CHANGES REQUIRED | S06, S07, S09 (ambiguous key), S10, S13, S14; passage p8 is a reskin of p4 |
| 3.T.SS.2.a | CHANGES REQUIRED | S14 (plus SHOULD: S08 stray "girl"; S14 fog fact) |
| 3.T.T.4.a | CHANGES REQUIRED | S04, S07, S08 (false hint), S11, S12, S13, S15 |

**Overall: 7 of 8 lessons CHANGES REQUIRED.** The common causes are (1) hints written from the answer, so that hint 1 or 2 names the key's idea; (2) items built by swapping nouns in the core item, in three lessons especially (3.T.T.4.a, 3.T.C.2.a, TS-PS); and (3) one data error (TSPS-S07) that the content checker cannot see. Suggested lead action: add a gate to `check-content.js` that, for each dropdown slot, compares `options[answer]` with the text quoted in `why`, and one that warns when a `similar` item shares two or more options or a key string with its `like` core item.

## 8. For the lead: things a re-review should confirm

- TSPS-S07 slot 1 `answer` is 0 after the fix, and the answer reveal reads "set out more buckets, find out where the water gets in."
- TC2a S09's prompt again asks about her teeth ("pleased with how her teeth look") so that T5 and T3 are not defensible.
- Re-run `sim.js` and `opt.js` (in `scratchpad/simrev/`): no new item should exceed 0.25 against its `like` core item or share more than one option.
- Hints for TT1d S07, S09, S12 and TT4a S12, S13 re-read with the ladder audit.
