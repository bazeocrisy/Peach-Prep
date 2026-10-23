# SIM-2 independent review: 108 new similar items (S04 to S15) in nine lessons

Reviewer: independent (not the author). Date: 2026-10-23. Read-only review; no lesson edited, no git run.
Method followed: `REVIEWER-BRIEF.md`. Scripts and outputs are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/sim2r/` (`blind.js`, `ans-*.js`, `cmp.js`, `dumpk.js`, `par.js`, `dup2.js`, `echo.js`).

## 1. Blind solve

- Wrote `blind.js`: loads the lesson files in Node, prints every core item (refs resolved) and every new similar item S04 to S15 with seeded-shuffled choices and no keys, `why`, hints, `how`, `clue`, `misconception`, `sample`, `criteria`. Passages and figure alt text were included. Order/match/hottext/ebsr/dropdown items were shuffled too.
- Solved all 108 from the blind print, saved answers to `ans-*.js`, then compared with `cmp.js` (answers are compared by text, so shuffling cannot hide a mismatch).
- **Result: 108 of 108 agree with the stored key** (106 auto-compared; the 2 constructed responses, SK-TSCE-S11 and SK-TSCC-S15, were solved and judged by reading the sample, not auto-scored).
- **Honesty about blindness:** while probing the data shape, before solving, I printed small JSON snippets that exposed three keys: SK-TT2a-S04 (the first dropdown slot, with its answer index), SK-TT2b-S09 (match row 1 with its answer) and SK-TT2b-S07 (the `steps` array, which is stored in key order). So 103 of 108 are fully blind and 3 are not independent. I would have chosen the same answers, but do not count those 3 as evidence.
- I read the author log (`SIM-2-author-log.md`) only after the answers were saved. It did not change any answer. Its "topic searched" column explains two misses below (it searched "hot air balloon" but the other article says "hot-air"; it searched "dog pants, panting" but the other item says "pant").
- Agreement is not the same as ambiguity-free: the items I flag below as ambiguous or weak still had one key that I picked.

## 2. Checks run besides the solve

- Points, DOK, pick counts: all choose-two items have 2 points; hot-text pick 1 has 1; two-blank dropdowns, order, match and ebsr have 2. No problem.
- Hint ladder: read all 108 clues and 3 hints. `echo.js` looked for hints that repeat a 4-word run of a key: none (one false hit on "the oil and water" in CE-S06). Hint 3 mostly rules out one distractor, the same as the accepted S01 to S03 items.
- Reading level: FK computed with my own copy of the formula; every stem and passage is at or under grade 5.2 except the two table-of-contents stems (SS1a S05, S15), which score high only because the lines have no end marks (as the core table-of-contents items do). No kindergarten-level items except NOTEs below.
- Key-position and length: all `mc` keys are stored first (the engine shuffles, so no finding). The key is the strictly longest option in 23 of 48 `mc` items (48%), against 57% for the accepted core items and 62% for S01 to S03, so the new items are no worse than the accepted baseline. Listed as NOTE only where the pair of the longest option and a weak distractor makes it obvious.
- Duplicates across **all** of `js/data` (lessons, sets, tasks): `dup2.js` builds a word-set for each of the 1,576 item/passage blobs in `js/data` and flags any new item sharing 3 or more rare words with a different blob (own passage excluded); then keyword greps with hyphen and plural variants. Findings in section 4.
- Pre-answering: new items use only new passages or inline stems (T2a p6 to p11, T2b p6 to p8, T2c p11 to p12). None uses a core passage. Key and prompt text were compared with the `like` core item with `par.js`; results in section 3.

## 3. Cross-cutting findings (apply to several lessons)

**C1. Clone items: same prompt, same option frame and the same key text as the `like` core item (MUST, 9 items).** The plan (§4.7) says a similar item "mirrors the component and DOK". It also says it must use a text no core item uses, and the brief asks that `like` is "a fresh application, not a near-copy that gives away the core item's answer". These nine are new topics poured into the old item. The key option is word-for-word (or nearly) the core item's key, and the three distractors are the same ideas in the same words. A child who has just seen the core answer revealed can answer the similar item from memory, and a child who does the similar item first has the core item's key. Jaccard of key text with the `like` core key: SK-TSSEQ-S06 1.00, SK-TSSEQ-S15 1.00 (same two blanks, same six options), SK-TSCC-S06 1.00, SK-TSCC-S04 1.00 (same three options, same key), SK-TSDESC-S04 1.00, SK-TSCE-S09 0.92, SK-TSSEQ-S04 0.86, SK-TT2a-S13 0.80, and SK-TT2a-S09 0.50 (key sentence identical: "It is a fun fact, but the article's point does not need it."). Fix pattern: keep the skill, change the question frame or the reasoning demanded, and give the key and the distractors new wording tied to the new text (examples under each lesson). Note for the owner: the accepted SK-TSSEQ-S03 (jaccard 1.00 with C10) already follows the same clone pattern, so this is a systemic style problem the earlier reviews let through; fixing the nine new ones without also fixing S03 would be inconsistent.

**C2. Same key word as the core item, different options (SHOULD).** SK-TSDESC-S05 ("also" is the core P5 key too), SK-TSCE-S07 ("because" is the core C07 key too, same "makes the cause and effect backward" frame), SK-TT2b-S04 (because/so, the same two words as the core P4 pair), SK-TT2c-S05 (answer pattern "both texts" then "only the second text" is the core C05 pattern). Vary which word or which text is right.

**C3. Hint 3 narrows one blank or one row to the key (SHOULD).** Hint 3 may rule out one tempting distractor. In these items it leaves one answer for a whole blank or row: SK-TT2c-S05 H3 ("Text 1 never says anything about beds or benches. Use that to fix the second blank") fixes blank 2 to "only Text 2"; SK-TT2c-S07 H3 fixes the night row to Text 2; SK-TT2b-S13 H3 leaves two options and then gives the test that picks the key; SK-TT2b-S09 H3 and SK-TT2b-S07 H3 place one event each (acceptable by precedent, noted for consistency). Rewrite so hint 3 removes one wrong option or restates evidence, then ends with a neutral question.

**C4. Topic and key-fact duplicates across `js/data` (not found by the author's search).**
- SK-TT2a-S09 and passage p7 "Up, Up and Away" duplicate the hot-air-balloon article p3 "How a Hot-Air Balloon Flies" in 3.L.V.3.a (js/data/lessons/L-V3.js). Both open "A hot air balloon has no engine and no wings. Still, it can float high...", both say hot air is lighter than cool air so it rises, both say the pilot cannot steer like a driver and the balloon goes where the wind blows, both have a burner/flame/basket. 16 rare words in common. (MUST: a child meets the same article twice.)
- SK-TSCE-S05 (a dog pants to cool off) repeats the key fact of an item in `js/data/lessons/T-RA.js` (lines 3714 to 3733) ("Why do dogs pant?" key: "Dogs pant to cool off, because panting lets heat leave the body"). (SHOULD.)
- SK-TSSEQ-S10 (a worm bin turns apple cores and carrot peels into soil) repeats the compost/worm key fact of 3.T.T.2.c (p8 "Three Bins at Oak Hill School": apple cores, banana peels, worms break scraps into soil; C10 key: food scraps can be turned into something useful). 5 rare words in common with C06 to C09. (SHOULD.)
- The author's SK-TSSEQ-S12 fix holds: "Alder Creek" depot has no duplicate. I found no other topic duplicates (checked about 130 topic words including hyphen variants).

**C5. Describes-the-picture-in-words items (NOTE).** SS1a S07, S11, S13 and TC1b S04, S08, S09, S11, S12, S13 (no new figures) restate the picture in the stem, so the key echoes stem words ("blowing sand", "boiler... wheel", "labels bark, rings, center"). Acceptable for a practice bank but easier than the core items. Worst two are listed under SS1a/TC1b. The author flagged the lack of figures.

## 4. Per-lesson findings

### 3.T.T.2.a (SK-TT2a-S04 to S15)

**MUST**
- **SK-TT2a-S09 (like C08).** (a) Clone of C08: same prompt, key identical ("It is a fun fact, but the article's point does not need it."), distractors the same ideas ("most important fact", "how a pilot goes higher or steers"). (b) Passage p7 duplicates the L-V3 hot-air balloon article (see C4). Fix: new topic (not balloons) and a different frame, for example "Which fact would fit best in this article's text box instead of a section?" with four facts from the article's own subject; or ask which of two sentences belongs in the box.
- **SK-TT2a-S13 (like C12).** Clone of C12: same stem pattern ("A student says the main idea of X is [a fact only in the text box]. Why is the student wrong?"), key identical except the noun ("The ___ fact is only in the text box, and no section is about it."), same distractors (fruit/fact wrong, last part, never tells). Fix: change the error (for example the student picks a sentence from one section as the main idea) so the key text differs.

**SHOULD**
- SK-TT2a-S14 (like C14), S04 (like P7): both use the same caption pattern ("The parts of a ..." as the key, a part-only caption and a "person doing it" caption as distractors) as C14 ("The main parts of a bike") and each other. Three items in one lesson share one key phrase. Change S14 so the best caption is not "The parts of ...".
- SK-TT2a-S07 uses the same two sentence positions as C06 (paragraph 1 sentence 3, last paragraph sentence 1: `p6:1:3`, `p6:8:1` against `p4:1:3`, `p4:8:1`). Move one of the two so the child cannot answer by position.
- SK-TT2a-S11 H3 scaffolds the second blank strongly ("think about what eyes and a nose up high let a hippo do"); consider ending with the neutral question only.

**NOTE**
- SK-TT2a-S05: wording "main idea" for a paragraph with no stated idea matches C03 well; key and distractors are distinct. OK.
- SK-TT2a-S07 facts: tarsier eyes are each about as big as the brain; fine.
- Facts checked and fine: hot-air balloon first passengers sheep, duck and rooster, France, 1783 (the p7 box); hippo "red oily goo" as sunscreen, cannot swim; vulture group at rest "committee"; kiwi nostrils at the tip of the bill; lobster blue about 1 in 2 million; gorilla mother nest building. (Common knowledge, consistent with Wikipedia pages.)

**Verdict: CHANGES REQUIRED** (S09, S13).

### 3.T.T.2.b (SK-TT2b-S04 to S15)

**MUST**
- **SK-TT2b-S09 (match, Wright brothers).** The passage says "Soon, people around the world read about the flight" and the match row "People around the world read about the flight" is keyed "after". This is false history. The 17 December 1903 flight was largely ignored by the press (even the Dayton paper did not report it); the world did not take notice until Wilbur's flights in France in August 1908. Source: https://bigthink.com/the-past/wright-brothers-ignored/ . Fix: replace the sentence and the row with a true "after" event, such as "In 1905, the brothers fly a plane for more than half an hour" and "They keep flying and make better planes", or "Newspapers did not print much about it at first". Keep the answer count (2 before, 2 after).

**SHOULD**
- SK-TT2b-S13 H3: eliminates "close the lid", then says "Check the two choices that are left: which one must happen before you can plant?" The test given decides between water and soil, so the hint effectively narrows to the key. End with a neutral question.
- SK-TT2b-S15: clue and hint 2 ("Some texts tell steps you can do yourself. Others tell events from the past"; "are they telling you what to do, or telling what someone did?") let a reader write the key without the choices (the ladder audit in §4.5). The stem titles ("How to Make a Braille Name Card" and "Louis Braille") also hand it over. Move the contrast out of hint 1 and make the distractors less symmetrical (C and D are the same sentence reversed).
- SK-TT2b-S04: same two key words as core P4 (see C2); clue and hint 3 together state "Because comes just before a cause" for blank 1. This is the same convention as the core clue, so it is a SHOULD, not a MUST.
- SK-TT2b-S11 facts: "In 1876, the people of France planned a gift" (p8): the proposal dates from 1865 and the Franco-American Union from 1875; the arm was shown in Philadelphia in 1876. Say "In the 1870s" or "Long ago". Pulitzer's World ran the campaign in 1885, more than 120,000 gave; NPS gives about 125,000: https://www.nps.gov/stli/learn/historyculture/joseph-pulitzer.htm . Fine.

**NOTE**
- Facts verified: Golden Gate began Jan 1933, opened May 1937, about 200,000 walked across on the pedestrian day, two cables of 27,572 wires each, ferries before the bridge (https://en.wikipedia.org/wiki/Golden_Gate_Bridge). Erie Canal "Clinton's Ditch", built 1817 to 1825, boats towed by mules and horses (https://en.wikipedia.org/wiki/Erie_Canal). Braille facts (blind at 3, school at 10, code at 15) match standard biographies. Model T 1908, assembly line 1913, 15 million sold: standard.
- SK-TT2b-S10 is a close parallel of C09 (key "kept going when others..."); distinct enough.
- SK-TT2b-S09, S07, S12: hint 3 places one step or row; same precedent as accepted items.

**Verdict: CHANGES REQUIRED** (S09 false fact).

### 3.T.T.2.c (SK-TT2c-S04 to S15)

**MUST**
- **SK-TT2c-S10 and passage p11 (anteater).** "It licks up the ants with a tongue that is longer than a grown-up's arm." Giant anteater tongue is up to about 2 ft (60 cm), 45 cm per another account, not longer than an adult arm (https://seaworld.org/animals/facts/mammals/giant-anteater/ ; https://en.wikipedia.org/wiki/Giant_anteater). Also p12 "It eats for only a minute or two, and then it walks on": the sources say about a minute per nest at most. Fix: "a tongue almost as long as a grown-up's arm" or "up to two feet long", and "less than a minute or so". Key (Part A "how fast the tongue moves", Part B "about 150 times in one minute") is correct (SeaWorld: up to 150 flicks per minute; sleeps up to 15 hours a day: correct).

**SHOULD**
- SK-TT2c-S05: hint 3 fixes blank 2 (C3), and the answer pattern ("both texts", then "only the second text") is the core C05 pattern with the wrong note again saying "Only Text 1" twice. Make the note wrong in a different way (for example one claim is really only in Text 1).
- SK-TT2c-S07: hint 3 gives away the night row (C3). Also the 2/2/1 split matches C07's.
- SK-TT2c-S10 Part A: all three wrong options are "facts from p11" and the key is the only p12 fact, so the "adds to" idea is solved by "which one was not in p11". Acceptable, but H3 ("The claws are told in the first passage") plus H2 makes it very direct; consider one p12 distractor, such as "It says anteaters sleep up to fifteen hours a day" paired with a Part B that does not fit.
- SK-TT2c-S11: distractors "weigh nothing" and "melt the snow" are silly (the plan lists implausible distractors as a known weakness).
- SK-TT2c-S06 fact: "Some turbines are taller than a 30-story building": true (the biggest are about 80 stories), fine.

**NOTE**
- Facts verified: alpacas, igloo insulation, wind turbine, rattlesnake heat pits, iguana jumps into water, yogurt process, snowshoes, tugboats, Great Pyramid (about 4,500 years, about 20 years, 2.3 million blocks; sleds on wet sand): all correct.
- SK-TT2c-S15: only plan C uses both notes; confirmed single key.

**Verdict: CHANGES REQUIRED** (anteater fact; the passage is used by S10 only).

### TS-SEQ (SK-TSSEQ-S04 to S15)

**MUST**
- **SK-TSSEQ-S04 (like C02).** Clone: same question ("Why does the author begin with paragraph 1?"), key "It lists what you need, so you can gather everything before the first step." (core: "It tells what you need, so you can gather everything before the first step."), same three distractors.
- **SK-TSSEQ-S06 (like C05).** Clone: same two-paragraph frame (A: "...is easy. First... Next... Then... Last...", B: "Our ___ room is a ... place... such as... In addition..."), identical key sentence, same four options. Fix: use a different pair (for example a paragraph of directions against a paragraph that compares two things) and different option wording.
- **SK-TSSEQ-S15 (like C15).** Clone: same frame ("First, ... {0} ..., ... {1}, ..."), key identical (Once, Last), option sets identical (Before/Because/Once and Meanwhile/Last/First). Fix: change which clue words are right (for example "After" and "Finally") and the distractors.

**SHOULD**
- **SK-TSSEQ-S10** topic duplicate of the compost/worm material in T2c (C4).
- **SK-TSSEQ-S11 row R4** "A picnic area was built": keyed "Dell Pond". The text says the town "built a picnic area next to the pond. The town gave the place a new name, Dell Park." A reader can defend Dell Park. The core C11 has the same shape for R2, but there the store is separated from the renaming by "Before long, Terminus was a small town". Add a clear sentence or replace the row with one that happens clearly in one period.
- SK-TSSEQ-S14: the key ("both sides turn golden and crisp") is an inference; the directions say "until the bottom is golden" and never say why butter goes on first, and hint 3 asks "do the directions say it?" which the key itself fails. Put "so the outside turns golden and crisp" in step 1 or ask a different question.
- SK-TSSEQ-S05: acceptable (key reworded), but see C2: it keeps the core's wrong "not a time clue word" option and its wrong "same time" option.

**NOTE**
- Sea salt, tie-dye, papier-mache, grilled cheese, s'mores: no factual problem.
- S09: both key phrases are in the stem and are the only two duration phrases; good item.

**Verdict: CHANGES REQUIRED** (S04, S06, S15).

### TS-DESC (SK-TSDESC-S04 to S15)

**MUST**
- **SK-TSDESC-S04 (like C02).** Clone: same question about a first sentence's "job", key identical ("It names what the whole paragraph is about."), same distractors.
- **SK-TSDESC-S05 factual error.** "A wombat is about as big as a small dog." The common wombat averages about 1 m and 27 kg, up to 35 kg: a large dog, not a small one (https://en.wikipedia.org/wiki/Common_wombat). Fix: "about as long as a grown-up's arm span" is wrong too; write "about as big as a large dog" or drop the size sentence.

**SHOULD**
- SK-TSDESC-S05 key "also" is the same as the core P5 key (C2).
- SK-TSDESC-S10, S13: close parallels of C10/C13 (S13: "No. The fact is about the animal's name, not how the scales protect it." against C13's "No. The fact is about baseball long ago..."). Not verbatim but the same structure, the same four options; vary the options.
- SK-TSDESC-S11 fact: "Some tarantulas live for twenty years, which is longer than most pets": females of many species live 20 to 30 years (https://www.thetarantulacollective.com/tarantula-thoughts/5-tarantulas-that-live-the-longest), but "longer than most pets" is loose (parrots, tortoises, some dogs' owners would argue). Change to "longer than a pet hamster".
- SK-TSDESC-S13: "a lion ... cannot bite through the scales" is stated as absolute; lions do kill pangolins at times. Soften to "may not be able to".

**NOTE**
- Etymology of pangolin from Malay pengguling "one who rolls up" verified (https://en.wikipedia.org/wiki/Pangolin). Okapi calf stands within about 30 minutes (https://en.wikipedia.org/wiki/Okapi); the text says "an hour after", which is still true.
- SK-TSDESC-S15 and S09: both keys are "Also"; vary.

**Verdict: CHANGES REQUIRED** (S04 clone; S05 fact).

### TS-CE (SK-TSCE-S04 to S15)

**MUST**
- **SK-TSCE-S09 (like C09).** Clone: key "It tells events in order and shows how one led to another." (core: "...in time order and shows..."), the same other three options (steps, compares, "in order but do not affect each other").

**SHOULD**
- SK-TSCE-S05 duplicates the dog-panting fact in T-RA (C4).
- SK-TSCE-S07: the prompt and `how` say "in the Ana's sentence" (a typo that a child will read). Fix: "in Ana's sentence". Also the key word "because" is the core C07 key and the frame is the same (C2).
- SK-TSCE-S13 hint 3 gives the plant row; fine by precedent. S15 repeats the exact core C15 frame and answers (sentence A form and E form).
- SK-TSCE-S06 (B): "stirring the oil and water together" is a weak mistake (the lamp steps already say to wait until they separate); say "pouring in the water and oil in the wrong order" or "shaking the bottle hard before adding the tablet".

**NOTE**
- Facts checked: ice floats and insulates the pond, dog panting and paw-pad sweating, lava lamp with fizzy tablet, rust on iron: all correct at grade-3 level.
- The two `cr` items (CE-S11) have a usable sample ("Mr. Lee moved the class picnic into the gym because thunder rumbled over the park") and three criteria that never claim one exact answer. Good.

**Verdict: CHANGES REQUIRED** (S09).

### TS-CC (SK-TSCC-S04 to S15)

**MUST**
- **SK-TSCC-S04 (like P5).** Clone: same three options (Because/Like/Unlike), same key (Unlike); the sentence frame is the same ("{0} most frogs, many toads..." against "{0} a centipede, a millipede..."). Fix: ask for a compare word ("Like", "Both") or a contrast word with different distractors ("However", "In the same way").
- **SK-TSCC-S06 (like C04).** Clone: key "to help readers tell apart two animals that look alike" is word-for-word the C04 key, and the text states "look a lot alike" again, so the answer is signalled twice.

**SHOULD**
- SK-TSCC-S10: the key ("The writer reads the typed words on both of them") is not stated in the passage and "The writer can save the words for later on both of them" is arguable for the typewriter (the paper is a record). Add a sentence ("The writer reads the words on the page" and "on the screen") or change the question.
- SK-TSCC-S11: same wrong sentence number (4) as core C09. Move the error to sentence 3 or 5.
- SK-TSCC-S05: C "Both help people glide along a smooth surface" adds "smooth surface", which the text gives for roller skates only.
- SK-TSCC-S07 second blank is solved by the passage (the stem says "spins ... too"); fine.
- SK-TSCC-S15 (cr): H3 offers "however, but or while", which is most of the criteria's third line; keep, but do not list all the clue words in the hint.

**NOTE**
- Seals and sea lions, centipede and millipede, ukulele and banjo, island and peninsula, subway and trolley: facts correct.
- S12 (chart, "has a tall mast", "Sailboat only") single key, good.

**Verdict: CHANGES REQUIRED** (S04, S06).

### 3.T.SS.1.a (SK-SS1a-S04 to S15)

**MUST:** none.

**SHOULD**
- SK-SS1a-S04 (like P5): same prompt as P5; key "to add an interesting fact about cranberries" against "to add an interesting fact about peanuts in Georgia". Change one verb or the option set.
- SK-SS1a-S08: the answer is arithmetic (3 inches times 2 miles) in an ELA lesson; a reader needs a scale rule that the lesson does not teach. If the figure items teach "scale bar" (C08), keep but add "Each inch stands for 2 miles" to the hint 1 instead of the number.
- SK-SS1a-S15 key chapter is 2 like the core C15 (page 10 against 12); change chapter.
- SK-SS1a-S07, S11, S13: stems restate the picture (C5). The captions are near word-for-word from the stem; S13's labels name three parts that appear in only one sentence.

**NOTE**
- S06, S09, S10, S12, S14: single keys, good distractors. Weather vane physics, cranberries' air pockets, starfish regrowing arms: correct.
- All 12 items use inline stems; the `ms`/`hottext`/`ebsr` core types are practised with `mc` similar items, as the author noted.

**Verdict: ACCEPTED** (SHOULDs only).

### 3.T.C.1.b (SK-TC1b-S04 to S15)

**MUST**
- **SK-TC1b-S13 (like C13), giveaway.** The stem says "Both have headlines, photos with captions and a calendar box of upcoming days." The choices B, C and E are exactly those three, so the key (A and D, the two that are not listed) can be found by elimination without any understanding of web features. Fix: remove the "Both have..." sentence (the core C13 has none) or list different shared features that do not appear as choices.

**SHOULD**
- SK-TC1b-S12: the last stem sentence ("A photo would show only the shiny outside of the toaster") almost states the key ("Its labels name the hidden parts inside"); the three wrong options (color, bigger, kitchen counter) are weak. Remove that sentence and make the distractors plausible. H3 also says "a color is the photo's strength", which is garbled.
- SK-TC1b-S10: the stem defines captions as naming "important sounds" and says "nobody is talking", so the answer is stated; also the words in `[...]` appear in all three choices. Fine as an easy item but note S13 is also easy. Core C10 is harder.
- SK-TC1b-S15: H3 says "The host says good morning in a happy voice"; the stem does not say a happy voice. Drop "in a happy voice". The distractor "to show that the host is angry" is silly.
- SK-TC1b-S08: key caption is the longest option (as in the core C07). Even out the lengths.

**NOTE**
- Facts: stethoscope in use for more than 200 years (Laennec, 1816): correct. Kiln, pulley, bascule drawbridge "lifts like two doors", toaster parts, tree rings: correct.
- S14, S06, S07, S09, S11: single keys.

**Verdict: CHANGES REQUIRED** (S13).

## 5. Which lessons I consider unaccepted by this addition

Taking "accepted" as "all items in the lesson, including the similar bank, pass review":
- **Not accepted until fixed (8):** 3.T.T.2.a, 3.T.T.2.b, 3.T.T.2.c, TS-SEQ, TS-DESC, TS-CE, TS-CC, 3.T.C.1.b.
- **Still accepted (1):** 3.T.SS.1.a (SHOULD items only).
- The core items and teaching of all nine lessons were not changed by this addition, and I found nothing that makes a core item itself wrong; the unacceptance is only of the new similar items.

## 6. Summary of MUSTs (13 items in 8 lessons)

| Lesson | Item | Reason |
|---|---|---|
| 3.T.T.2.a | S09 | clone of C08 plus duplicate balloon article (L-V3 p3) |
| 3.T.T.2.a | S13 | clone of C12 |
| 3.T.T.2.b | S09 | false history: press and the world did not read about the 1903 flight "soon" |
| 3.T.T.2.c | S10 (p11, p12) | anteater tongue "longer than a grown-up's arm" and "a minute or two" per nest overstate the sources |
| TS-SEQ | S04, S06, S15 | clones of C02, C05, C15 |
| TS-DESC | S04 | clone of C02 |
| TS-DESC | S05 | wombat "as big as a small dog" is wrong (about 27 kg) |
| TS-CE | S09 | clone of C09 |
| TS-CC | S04, S06 | clones of P5, C04 |
| 3.T.C.1.b | S13 | stem lists the shared features, so the key is found by elimination |

13 distinct items in total: 9 clones (C1), 1 duplicate article (inside T2a-S09), 3 factual errors (T2b-S09, T2c-S10, DESC-S05) and 1 giveaway (C1b-S13); T2a-S09 counts in both the clone and the duplicate group.

## 7. Sources (WebFetch results, 2026-10-23)

- https://en.wikipedia.org/wiki/Common_wombat (length about 1 m, 27 kg average, up to 35 kg; nocturnal)
- https://seaworld.org/animals/facts/mammals/giant-anteater/ (tongue up to 2 ft, up to 150 flicks per minute, sleeps up to 15 hours, young ride on the back up to a year)
- https://en.wikipedia.org/wiki/Giant_anteater (tongue 45 to 60 cm, up to about a minute per nest, no teeth, black shoulder stripe)
- https://bigthink.com/the-past/wright-brothers-ignored/ (press ignored 17 Dec 1903; world took notice August 1908)
- https://www.nps.gov/stli/learn/historyculture/joseph-pulitzer.htm (Pulitzer's World, name of every contributor, about 125,000 givers, over $100,000)
- https://www.thetarantulacollective.com/tarantula-thoughts/5-tarantulas-that-live-the-longest (female tarantulas 20 to 30 years)
- https://en.wikipedia.org/wiki/Okapi (calf stands within about 30 minutes; striped legs camouflage)
- https://en.wikipedia.org/wiki/Pangolin (name from Malay pengguling, "one who rolls up")
- https://en.wikipedia.org/wiki/Golden_Gate_Bridge (1933 start, May 1937 opening, about 200,000 on foot, 27,572 wires per cable, ferries before)
- https://en.wikipedia.org/wiki/Erie_Canal ("Clinton's ditch", 1817 to 1825, horses and mules on the towpath)
