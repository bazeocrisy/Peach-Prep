# B7a author log: GUM Reinforce, first nine lessons (3.L.GC.1:R)

Author: B7a (content author). Status of every lesson: **AUTHORED (B7a), NOT ACCEPTED: awaiting independent review.** Nothing was marked ACCEPTED, `js/data/accepted.js` was not touched, and no git command that changes anything was run. Nothing here has been blind-solved by anyone but the author.

## Deviation from the brief: file used, and a warning for the second-half author
- The brief asked for a new file `L-GUM4.js`. That was impossible: `js/data/lessons/L-GUM4.js` and `L-GUM5.js` already exist (they hold the B8 lessons, and `manifest.js` already lists both). A lesson code that is registered twice is silently ignored (first one wins), so a second set of lessons under these codes would never load.
- All nine lessons were therefore edited **in place in `js/data/lessons/L-GUM1.js`** (the same approach B6 used in `L-GUM3.js`). The new blocks sit between `/* B7a:passages:start/end */` and `/* B7a:core:start/end */` style markers inside each lesson. Original practice P1 to P5 and test T1 to T5 are unchanged except one Test item in lesson 7 (T4, see phase 3). Teach text changed in lessons 1, 2, 4, 5, 8 and 9, and `learn` gained a Watch Me in lessons 1, 3, 6, 7 and 8 (details in phases 2 and 3). Parent text is unchanged.
- **Second-half author (lessons 10 to 18): do NOT write to or overwrite `L-GUM4.js` or `L-GUM5.js`. Do not use `L-GUM1.js`, which this batch owns. Check `manifest.js` and the existing files before choosing a file name.**

## What was built (per lesson)
Each of the nine lessons has: `core` (3 sets of 5; zero to two items per lesson are `{ref}` to original practice items, see the table below; the rest are new), a `similar` bank S01 to S15 (every core item, including the two refs, has its own twin through `like`), `addons` for P1 to P5 (hints, how, misconception), six new passages `p1` to `p6`, and the Learn It / Watch Me / Together flow the L-GUM3 format uses (Together = practice minus the refs: 5, 4, 3, 5, 3, 3, 3, 3, 3 items in lessons 1 to 9).

| # | Lesson code | Refs in core Set 1 (original practice items), final files |
|---|---|---|
| 1 | use-nouns-and-verbs-to-form-complete-thoughts-in | none |
| 2 | form-and-use-singular-and-plural-nouns-in-speech | P4 |
| 3 | use-interrogatives-to-ask-questions-in-speech | P3, P4 |
| 4 | capitalize-the-first-word-of-a-sentence-and-the- | none |
| 5 | form-regular-plural-nouns-with-s-or-es | P3, P4 |
| 6 | form-and-use-verbs-with-ing-ed-or-s | P4, P5 |
| 7 | use-action-verbs | P2, P5 |
| 8 | use-adjectives-and-adverbs | P3, P5 |
| 9 | use-common-and-proper-nouns | P2, P4 |

## Gate results (last run, on the final `L-GUM1.js`)
- `node verification/check-content.js --all` (run after the last edit of phase 3): **PASS, 0 failures** (repo-wide warning count moves as other agents edit; 79 to 82 in the last runs). For `SK-GUM1-*` there are 10 warnings, all "hint 1 is much longer than hint 3" on lesson 9 items (optional trims, left). Lessons 1 to 8 have 0 `SK-GUM1-*` warnings.
- `node verification/check-writing.js`: 0 failures, 0 warnings. `node verification/check-instructional-copy.js`: 28 assertions passed.
- `python3 verification/readability.py js/data/lessons/L-GUM1.js`: highest passage in lessons 1 to 9 is lesson 6 p3 at FK 4.1 (4.07 by the author script), then lesson 6 p1 and lesson 2 p5 at 3.9; all are at or below the 4.5 limit. (An earlier version of this log said "no passage above 3.9"; that was true before phase 2 added the river-otter passage text. That script counts the "(n)" markers as words, so its word counts run about 15 higher than the counts below.)
- Author-side checker (`verify.js` in the session scratchpad, run on the final file; no output of `PROBLEM`): the keyed text appears in why for every mc, ms, ebsr, dropdown and hot-text item; how names the key words; no hint contains the key text; no twin pair is above 0.21. The old claim here that "after hint 3 at least two choices stay live for every item" was a mention-based script result and is superseded by the "Live-choice recount" section below.

## Passage length and readability, measured on the final file
Words are counted without the "(n)" markers (script `fkp.js`/`verify.js`; FK is Flesch-Kincaid grade).

| Lesson | Passages | Shortest passage (words) | Highest FK |
|---|---|---|---|
| 1 | 6 | 104 | 3.44 |
| 2 | 6 | 103 | 3.87 |
| 3 | 6 | 101 | 3.54 |
| 4 | 6 | 102 | 2.28 |
| 5 | 5 | 103 | 2.66 |
| 6 | 6 | 104 | 4.07 |
| 7 | 6 | 102 | 2.97 |
| 8 | 4 | 102 | 3.07 |
| 9 | 4 | 102 | 3.67 |

All passages are 101 words or more and FK 4.07 or lower. Phase 2 removed the unused passages 8-p3, 8-p6, 9-p3 and 9-p6 (lessons 8 and 9 now have four texts each); every remaining passage is used by at least one core item or twin.

## Twin vs core overlap, measured on the final file
Tokens are lowercase `[a-z']+` words over stem, prompt, text, choices, slot options, rows, columns, ebsr parts, and hot-text target sentences. Every twin was compared with every core item and with the two ref practice items (all pairs), by set Jaccard and by multiset Jaccard. The limit is 0.21.

| Lesson | Max, matched `like` pair (set / multiset) | Max, all twin x core pairs (set / multiset) |
|---|---|---|
| 1 | 0.194 / 0.200 | 0.194 / 0.200 |
| 2 | 0.203 / 0.209 | 0.203 / 0.209 |
| 3 | 0.203 / 0.208 | 0.203 / 0.209 |
| 4 | 0.192 / 0.209 | 0.192 / 0.209 |
| 5 | 0.196 / 0.209 | 0.196 / 0.209 |
| 6 | 0.184 / 0.206 | 0.184 / 0.209 |
| 7 | 0.197 / 0.180 | 0.200 / 0.196 |
| 8 | 0.190 / 0.195 | 0.194 / 0.195 |
| 9 | 0.182 / 0.194 | 0.200 / 0.195 |

These are the numbers from the final files (run after the last edit); no pair is above 0.21 and none was rounded by hand.

## Key length, format mix, difficulty
- **Key uniquely longest, new core and twin items:** 0 in all nine lessons by the final `verify.js` run (mc, ms, ebsr parts, dropdown slots, hot-text options). In lesson 7 the strong-verb dropdowns were re-paired so that a weak distractor is as long as or longer than the key (for example dashed / walked / went; crawled / traveled / moved).
- **Legacy items that I did not change and that do have a uniquely longest key** (from the original practice and test sets): lesson 1 P5 (34 vs 29 characters); lesson 2 T2; lesson 3 T2 and T4 slot 1; lesson 5 P1 slot 1, P5 slot 2, T1 slot 1, T5; lesson 6 T2 slot 1; lesson 7 P5 (10 vs 6) and T4; lesson 8 P4 slot 2; lesson 9 P3, P5, T1, T5, and P4 (the two keys are the two longest options). These are the originals and are recorded here rather than silently changed. The coordinator's note about P5 in lesson 1 is this item.
- **Core mix per lesson** (new items): 5 or 6 mc (never more than 6), 3 dropdown, 3 or 4 hot-text, 1 ebsr, 1 ms, and the matching ref; every lesson has at least 4 formats and at least 3 technology-enhanced items. DOK: each lesson has at least one DOK 3 item (4 to 6), DOK 1 items 0 to 2. Domains: at most 6 items in any domain; no passage carries more than 7 items.

## Learn It / Watch Me / Teach example reuse
No core or twin sentence repeats a Watch Me, Learn It, or Teach example. The checker also lists 5-word overlaps with Learn/Teach and test text; they are generic stems and rubric phrases ("select the sentence that has", "the word I is always", "a verb that tells what"). Counts per lesson (L1 to L9): 19, 7, 10, 10, 16, 4, 9, 11, 17.

## Cross-repo duplicate scan (all of `js/data`)
The scan compared every new passage sentence, stem, prompt, choice, option, row and text against every other lesson and set (exact whole-string matches of four or more words, and every shared 6-word run). What it found and what was done:
- Exact repeats of the house prompts "This question has two parts. Answer Part A, then Part B." (all nine lessons), "Which sentence is correct?", "Select the sentence that has an error.", "Choose the word that correctly completes the sentence." etc. These are the shared instruction wording of the repository; they were kept.
- Real content repeats, now reworded: lesson 5 p5 and lesson 8 p1 repeated "our class planted a garden behind the school" (also in `L-GC2.js` and `L-V12.js`); lesson 3 S15 and C13 repeated questions about bees and honey and about owls (`SK-RA1a`, `SK-GUM2-4`); lesson 3 p6 "my bike had a flat tire"; lesson 3 p1 and p3 phrases; lesson 2 p3 "very still in the shallow water" and S12/S14 prompts; lesson 4 "my brother and i built a sand castle" (now cousin), "class rode a bus to the aquarium", "i hope we can go back"; lesson 6 p2 "mix the batter in a big bowl"; lesson 7 p1 "we lined up at the door"; lesson 9 S02 "fed the ducks at the pond" (matched a B8 item).
- Remaining shared runs are short generic stems such as "select the TWO sentences that", "should begin with a capital letter" and "the two groups of words that are complete sentences" (the last in lessons 1 and the B8 lessons). They were left.

## Web verification (every grammar, usage and dictionary claim)
All pages below were fetched during authoring. A claim with no live page is listed under "not verified".

Parts of speech and word classes
- "Lovely" is an adjective (and a noun): https://www.merriam-webster.com/dictionary/Lovely
- "Tomorrow" is an adverb ("on, during, or for the day after today"): https://learnersdictionary.com/definition/tomorrow
- "Polite" is an adjective with the derived adverb "politely"; no separate adverb entry for "polite": https://merriam-webster.com/dictionary/polite
- "Soon, later, afterward, today, tomorrow" are adverbs of time: https://quillbot.com/blog/adverbs/adverbs-of-time/
- "There" and "everywhere" are adverbs of place: https://www.monkeyenglish.net/tips-for-parents/education/adverbs-of-place and https://www.oxfordlearnersdictionaries.com/definition/english/everywhere
- Adverbs answer how, where and when, and many adverbs do not end in -ly: https://www.noslangues-ourlanguages.gc.ca/writing-tips-plus/adverbs
- "Tiredly" is an adverb: https://prod-ccroc-direct.merriam-webster.com/thesaurus/tiredly; "stickily" is an adverb: https://www.oxfordlearnersdictionaries.com/definition/english/stickily; "rustily" is an adverb ("In a rusty manner"): https://kaikki.org/dictionary/English/meaning/r/ru/rustily.html
- Action verbs include mental actions (think, imagine): https://www.thesaurus.com/e/grammar/action-verbs/ ; decide, dream, imagine, notice, realize are verbs of knowing and thinking: https://www.proofreadingservices.com/pages/verbs-of-knowing-and-thinking (the word "doubt" was in an earlier draft of lesson 7 S02 and was removed because no fetched page confirmed it; "realized" replaced it, and in phase 2 "realized" was in turn replaced by "imagined" because the reviewer disputed it as an action verb).

Sentences, questions, plurals, verbs
- A complete sentence has a subject and a predicate; in a command the subject is understood to be "you": https://nos-langues.canada.ca/en/hypergrammar-2/subject-and-predicate
- Question words: who (people), what (things, actions), when (time), where (location), why (reasons), how (manner), how much (quantity): https://migaku.com/blog/language-fun/english-question-words
- Plural nouns that end in s, sh, ch, x or z add -es; other nouns add -s (examples used: pouch, branch, switch, couch, stitch, torch, hutch, pinch, match, coach, ranch, flash, sketch, class, glass, wax, gas, tax take -es; row, pillow, tent, candle, jar, kite take -s): https://grammar.cl/Notes/Plural_Nouns.htm
- Regular past tense is verb + ed; the third person singular present adds -s: https://chem.libretexts.org/Courses/Lumen_Learning/Book%3A_English_Composition_I-3_(Lumen)/26%3A_Grammar%3A_Other_Parts_of_Speech/25.3%3A_Verb_Tenses_and_Agreement ; plural subjects take the plain verb (Matt and Nate eat pizza): https://www.unr.edu/writing-speaking-center/writing-speaking-resources/subject-verb-agreement
- The pronoun I is always capitalized, and so is the I in I'm, I'll, I'd: https://languagetool.org/insights/post/grammar-uppercase-i/ ; first word of a sentence and pronoun I: https://www.hunter.cuny.edu/rwc/repository/files/grammar-and-mechanics/punctuation-and-capitalization/Guidlines-for-Capitalization.pdf

Capitalization (lesson 9)
- Days, months, holidays are capitalized (Christmas); seasons are not; titles are capitalized when used as part of a name; planets are capitalized: https://www.scribbr.com/?p=74153 and the Hunter College guide above
- Titles before names capitalized; landmarks such as Mount Everest and the Hoover Dam capitalized; weekdays, months, holidays capitalized: https://www.grammarbook.com/punctuation/capital.asp
- Specific geographic names (Mississippi River, Appalachian Mountains) capitalized, "river" alone lowercase: Hunter College guide above
- Full team names (Chicago Bulls) are capitalized: https://anyteamnames.com/blog/should-you-capitalize-team-names/ (the passage and S05 use full names "Cole Park Hawks" and "Oak Hill Bears"; the nickname alone is also capitalized in sentence 7, which that page does not cover)

Facts in passages and items
- Olympus Mons is the largest volcano in the solar system: https://science.nasa.gov/image-article/apod-2023-april-4-olympus-mons-largest-volcano-in-the-solar-system/
- Jupiter is the largest planet: https://science.nasa.gov/jupiter/ ; Mars is the Red Planet: https://science.nasa.gov/mars/ ; the Great Red Spot is a storm: https://www.nasa.gov/image-article/storm-of-change/
- Mount Hood is a mountain in Oregon: https://en.wikipedia.org/wiki/Mount_Hood ; Niagara Falls: https://en.wikimini.org/wiki/Niagara_Falls ; Yellowstone: https://www.worldatlas.com/articles/where-is-yellowstone-national-park.html ; camping and waterfalls in Great Smoky Mountains National Park: https://www.rei.com/blog/?p=21078

Not verified on a live page (stated plainly for the reviewers)
- "Aunt Rosa" with a capital A: only the general rule (titles before names) was fetched, not a source that names family titles; the guide says a possessive before the title ("my aunt") makes it lowercase, and no item uses that form with a capital.
- The Hunter guide does not list team names, lakes or the use of the Colorado River as an example; "Colorado River" and "Grand Canyon" rest on the geographic-name rules above.
- Salt-crystal procedure in lesson 8 p6 (hot water, salt, string, crystals by Friday) was not checked against a source; it is only background for adjectives and adverbs and no item tests the science.
- Lake names: "Lake Erie" (lesson 9 C14) and the rule that every important word of a geographic name is capitalized were not looked up on a page; the geographic-name rules fetched above name rivers, mountains and landmarks only.
- Lesson 1 to 6 sentence-level content such as "tabless is not a word" or "Racketes has extra letters" are spelling judgments, not looked up.

## Known limits
- CORRECTION to the first version of this log: it said hint 3 removes at most one choice and that no hint narrows the choices. That was not true for every item. The independent review found hint 3 lines that named several wrong choices (lesson 5, lesson 6 C15/S15, lesson 7 C15/S15) and hints 1 and 2 that stated or narrowed to the key (lessons 1, 2, 4, 6, 7, 8, 9). The statement in phase 2 that "every reported one was fixed" was itself false: the second review found L4 P5 hint 3 (names all three wrong options in a pick-two item), L4 P3 hint 3 and L2 P4 hint 3 (false counts), and six more hint-3 lines that name two choices or a key (8-C10, 8-S10, 9-C10, 7-C14, 7-S14, 6-S08). All of those are fixed in phase 3. The live-choice recount found three more in lesson 7 (C09, S09, addon P2) in phase 2. Independent blind solving has still not been done by anyone but the author.
- A reviewer should look hard at: lesson 8 C14/S14 (an adjective used where an adverb is needed: "moved graceful", "answered polite" are standard-English errors, but informal speech accepts some adjectives as adverbs, so the chosen words were picked to avoid that: polite has no adverb sense per the dictionary above, and graceful is not used adverbially); lesson 9 S05 (team names); lesson 9 C14/S14 (capitalization edits); lesson 7 C15/S15 (counterexample items).
- `STATUS.md` has nine new rows (`B7a`, NOT ACCEPTED: awaiting independent review) and `02-coverage-matrix.csv` has `review_status` updated to "Expansion: AUTHORED (B7a), NEEDS INDEPENDENT REVIEW. NOT ACCEPTED" for the nine `3.L.GC.1:R:` rows. Other columns of the matrix were not recalculated.


## Phase 2: fixes after the independent review (B7a-review.md)
Every lesson was edited in place in `L-GUM1.js`. Status is unchanged: **NOT ACCEPTED: awaiting independent review.** Nothing was marked ACCEPTED, `accepted.js` was not touched, no git command that changes anything was run.

Lessons 1 to 5 (fixes for the reviewer's MUSTs and SHOULDs, described in the earlier hand-off): hint-3 removals reduced to one named wrong choice (lesson 5), stale why text and missing key words in how (lessons 1, 2, 4), giveaways between stems/hints and hot-text keys removed, Teach/Learn wording that equalled keys reworded, the lesson 3 how line, and the legacy grade 1 and 2 refs replaced by new core items in lessons 1, 2 (P3 only) and 4. Lessons 3 and 5 keep their legacy refs because the reviewer did not require them. Lesson 5 S15 was redesigned around the path/h claim.

Lesson 6
- C03 now tests -ing after "started" on p1 sentence 11 (the core set has an -ing key, and the Learn It has a third Watch Me with an -s verb: "Every morning, Maya (feed / feeds / feeding) the fish.").
- The false rule "an -ing verb needs a helper word" was removed everywhere (the sweep covered Teach, Learn It, how, hints and addons); the rule now reads "a word like started, kept or loves comes before an -ing verb".
- C06 and C11 hot-text keys moved to new error sentences (p1 sentences 4 and 10; p2 sentences 9 and 10) so no C03/C04 stem names the C06 key sentences; S06 moved to p4 sentences 2 and 9. C15/S15 were rebuilt with neutral hints and no hint that lists the three wrong choices. C05/S05, C10, C13/S13 hint 2 no longer describe the key or state the rule. S10 became a plural-doer critique of p5 sentence 9. The river otter passage now says river otters slide down muddy hills and can hold their breath for several minutes (hand-holding is a sea otter behavior; see URLs below). S06 and S11 now say "sentences" like the hot-text stems.

Lesson 7
- C07 moved to p6 sentence 8 (so C04 and C07 no longer test the same sentence, and p6 is used). C15 and S15 hint 3 name one wrong choice only; S15 is now a mental-action claim like C15 so the twin tests the same sub-skill. S02 uses "imagined" (not "realized"). Teach now says "Strolled tells more than walked" (the old "Raced tells more than went" gave away keys), and Learn It has a third Watch Me that counts two verbs and marks the weak one. The strong-verb dropdowns (C04, C13, S04, S13) have a second weak but grammatical distractor. C09, S09, S01, S12 sentences were raised to grade 3 level, C12 and S12 passage sentences lengthened. S05 stem now matches p4 sentence 9. C05/S05 hint 2 and S10 hint 1 no longer share a word only with the key. S04 no longer echoes "went" in the stem.

Lesson 8
- C06 retargeted to p1 sentences 5 and 7 (new "carefully" in sentence 5) so C03 (sentence 4) and C05 (sentence 11) no longer give away the key. S06 retargeted to p4 sentences 6 and 13 (new "thirstily" in sentence 13) so S07, which prints sentence 4, does not give away S06. C12 is now a predicate adjective ("the soup tasted ___"), so the three-form dropdown no longer repeats nine times in the same shape. Learn It now has three Watch Mes: adjective before a noun, adverb vs adjective vs -ness noun, and non-ly adverbs of time and place. Teach gained a predicate-adjective point and a -ness noun point. C07 Part A hint 2 no longer answers Part A. S07 says "how", not "manner". S15 has a non-ly non-adverb distractor. "Tiredly" was replaced by sleepy/sleepily/sleepiness. Unused passages p3 and p6 were dropped.

Lesson 9
- Teach now says a title before a name gets a capital letter (Mrs. Tran, Dr. Hall, Uncle Joe). C12/C13/S12/S13 hint 2 no longer names the capital letter (it says "names one ..."). C15 hint 2 no longer points at capitals. The p1 title "Spirit Week" and the "spirit week" body text were replaced by "dress-up days". S10 says "name", not "title". Unused passages p3 and p6 were dropped. The capitalization-error items stay at three in core (C12, C13, C14).

### Live-choice recount (script plus hand review)
`recount.js` (session scratchpad) lists, for every item, the choices a hint mentions by text, then counts how many choices are still live after hints 1, 2 and 3. It is a mention-based heuristic: it also flags a hint that merely names the doer or repeats a word from a choice. Result on the final file: 35 flags across the core items, twins and practice addons of lessons 1 to 9. Each was read by hand. Real problems found and fixed: lesson 7 C09, S09 and addon P2 (hint 3 named two things; now one). The remaining flags are mention matches, such as a hint 2 that says "ask whether it is something Mia does" or a hint 3 that repeats a verb from the item; in each flag I read, the hint removes at most one choice. This is still a hand-and-script check, not a blind solve.

### New web verification in phase 2
- River otters slide down muddy hills, hold their breath for about eight minutes, mothers teach pups to swim: https://www.nationalgeographic.com/animals/mammals/facts/north-american-river-otter
- Sea otters, not river otters, hold hands while they sleep: https://a-z-animals.com/animals/otter/why-do-otters-hold-hands/
- Helping verbs are forms of be, have, do and modals (so "started" and "kept" are not helping verbs; the old "helper word" wording was removed): https://www.gallaudet.edu/tutorial-and-instructional-programs/english-center/grammar-and-vocabulary/verbs/helping-verbs-and-modals
- Titles and family names are capitalized before a name: https://owl.purdue.edu/owl/general_writing/mechanics/help_with_capitals.html and https://www.grammarly.com/blog/punctuation-capitalization/capitalization-family-title/
- Mental action verbs (think, imagine, dream, remember): https://www.thesaurus.com/e/grammar/action-verbs/
- Taste, smell, look, feel sometimes act as linking verbs, and an adjective after one describes the subject ("tasted sweet"): https://digfir-published.macmillanusa.com/writershelp2e/writershelp2e_ch14_121.html
- Sleepily (adverb): https://www.oxfordlearnersdictionaries.com/definition/english/sleepily ; sleepiness (noun): https://www.oxfordlearnersdictionaries.com/definition/english/sleepiness ; thirstily (adverb): https://www.oxfordlearnersdictionaries.com/definition/english/thirstily ; sweetly (adverb): https://www.oxfordlearnersdictionaries.com/definition/english/sweetly ; sweetness (noun): https://merriam-webster.com/dictionary/sweet ness
- Phase 2 listed "calm / calmly / calmness", "carefully", "patiently", "flopped" and "crawled" as unverified; the second reviewer checked them on Merriam-Webster and Oxford Learner's pages (see the review file). Still not fetched by anyone: excitedly, trudged, today, soon.


## Phase 3: fixes after the second independent review (lessons 1 to 9)
Status unchanged: **NOT ACCEPTED: awaiting independent review.** No ACCEPTED marks, `accepted.js` untouched, no git change commands. Final-file figures are in the tables above (twin overlap, passage words and FK, `check-content` result, warnings).

Lessons 1 to 5
- MUSTs: L2 P4 hint 3 now says "One sentence uses a" (it said two); L4 P3 hint 3 no longer states a count ("Check the first letter of every sentence, then look for the word I in the others"); L4 P5 hint 3 no longer describes the wrong options ("Check the sentences that start with a capital letter and look inside them too"); L4 P4 hint 2 no longer gives the key away.
- SHOULDs done: L2 C12 distractor `cants` (a real word) replaced by the non-word `cann` (hint, how, why updated); L2 p3 title renamed "Our Pond Journal" (the old title duplicated `L-V3.js`); L3 S01 prompt and key reworded so the stem no longer echoes the key (key now "Where did this mitten go missing?"); L1 S11 fragment rewritten without participles ("A rain gauge with a tall ruler on its side and a clear plastic bottle below."; passage p6 is 104 words); L1 Teach point 1 reworded so it no longer equals C05's key; L2 Teach gained an apostrophe line and a "bus" line (the class/glass counterexample in S15 is now modelled).
- SHOULDs not done (stated plainly): L3 P3/P4 grade 1 and 2 refs stay in core; L3 S02/S13 first-word items; L4 C02/C08 similarity (the set 2 C09/C10 shared fact was fixed in phase 4); L5 S05/S06 same-sentence pair and C06/C07 on p1; L2 C04/C12 frame; L1 C05 stays recall-level apart from the Teach reword.
- Stale log items corrected in this file: refs table, Together counts, "Teach unchanged" claim, Watch Me notes, L1 shortest passage (104).

Lesson 6: S07 moved to p5 sentence 11 (new plural-doer error "Each night, the volunteers locks the front door."; it was sentence 3, half of S11's key); S08 hint 3 no longer describes key B (it names the "Tom keeps asking" sentence); S11 says "sentences" in prompt, hints and how (the earlier log claim covered S06 only); S15 hint 2 no longer points the child at the -s verb.

Lesson 7: C14 and S14 hint 3 name one sentence only (leaped / roared); S10 no longer names "went" (it compares brushed with put); S06 stem now says the doer does something only in the mind. T4 (legacy Test item) changes exactly three strings: the stem "Lily guessed the answer to the riddle." became "Lily imagined a funny answer to the riddle."; the keyed option text "guessed" became "imagined"; the why text now reads "The answer is imagined. Imagining is something Lily does with her mind, so it is an action verb. Lily, answer and riddle are nouns." The other options, the clue, the type and the points are unchanged.

Lesson 8: Teach example "The soup tasted sweet" (the key sentence of C12) was replaced by "The room felt chilly", and the rule now reads "after a word like is, was or felt". C10 and S10 hint 3 name one choice only ("Cross out the choice that says ..."). S10 moved to the laughing line (floury and cheerfully, p5 sentence 9) so it no longer prints S12's key line. S05 prompt reworded ("What job does widely do?"). Teach and Learn It use "nearby" instead of "outside" (outside is a row in the legacy test).

Lesson 9: C05 moved to sentence 1 (Pine Ridge Elementary and school) so it no longer prints C03's key; C07 moved to sentence 4 (Mateo); C10 moved to sentence 8 (Oak Avenue and bus) and its hint 3 names one choice; S04 moved to sentence 8 (p4 now reads "The defender, Gianna, blocked a shot near our net."); S12 moved to sentence 6 (Italy); S07 part B no longer claims that only one city is named Denver (key now "It names one particular city, not every city.").

Live-choice recount for touched items: hint 3 names at most one wrong choice in every touched item; where one fact would falsify two choices the hint names one choice and gives no reason. Remaining `recount.js` flags in lessons 6 to 9 are mention matches (a hint that repeats a word from a choice or names the doer). Twin overlap is at most 0.203 set and 0.209 multiset in every lesson, and `check-content.js --all` passed after the last edit.

Web: more than one city is named Denver (https://en.wikipedia.org/wiki/Denver_(disambiguation), from the second review).


## Phase 4: fixes after the third review (lessons 2, 4, 7)
Status unchanged: **NOT ACCEPTED: awaiting independent review.** No ACCEPTED marks, `accepted.js` untouched, no git change commands. Final-file figures are the tables above (twin overlap for lessons 2 and 4 is unchanged at 0.203/0.209 and 0.192/0.209 on item text).

Lesson 2
- S11 hint 3 now reads "Number 4 has the clue words a and a. Think about whether the nouns there fit." (sentence 4 has "a" twice and no "one"). S11 hint 1 was shortened to "Look for clue words that mean more than one, like several, two or many." to clear a hint-length warning.
- C12: the distractor `cann` (a Collins Scrabble word, so my earlier "non-word" claim was wrong) became `canss`. Hint 3 no longer prints the distractor ("One choice has an extra letter and is not a real spelling. Decide between the other two choices."); why now says "canss is a misspelling". Unconfirmed in M-W: canss is not listed in any dictionary I fetched.

Lesson 4 (set 2 redesigned so no item settles another)
- C07 (short form, sentence 3) is unchanged. C09 now counts only sentence-opening words, with no short form or I: stem "my cousin came over after school. we played games in the yard. then we ate some snacks.", key 3. C10 is no longer about short forms: Mia types "After lunch, We played tag." and says the word after a comma needs a capital; key "No. The word after a comma stays small unless it is I, so We should be we." Both C09 and C10 are now stem-only (no passage).
- Twins follow: S09 counts openers in "our team won on Saturday. we cheered for an hour. then we sang a song. it was fun." (key 4); S10 is Ned and a capital on the last word ("The puppy barked at the Moon."). S07 (first word) is unchanged.
- S08 hint 3 now says "The line about Dan begins with a capital and has a capital I, so it can be ruled out." (the old hint described a keyed line).
- Teach point 3 now reads "A short form joins I to another word, as in I'm or I'll. The first letter keeps its capital." so "short form" is taught.
- Item text overlap after the change: lesson 4 max 0.192 set and 0.209 multiset over all twin x core pairs; no uniquely longest key in new items.

Lesson 7: `testRev: { A: "2" }` was added to the lesson in `L-GUM1.js`, because the T4 change in phase 3 ("guessed" to "imagined", stem and why updated, same id, one point, DOK 2) changes the text of the key of a test item. The version record `verification/assessment-versions.json` was NOT re-recorded by me (that is a coordinator step), and I did not run `--record-versions` or `--release`.

Gates after the last edit: `check-writing.js` 0 failures and 0 warnings; `check-instructional-copy.js` 28 assertions passed; `check-content.js --all` shows 0 failures in any B7a lesson (`SK-GUM1-*` warnings: lesson 9 hint-length warnings only). It currently reports one FAIL in a different batch, `SK-GUM5-1-S09` in `L-GUM5.js` (how and why do not name the answer); that is not mine and I did not touch it.
