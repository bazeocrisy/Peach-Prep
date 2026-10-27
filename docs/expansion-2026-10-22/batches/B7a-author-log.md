# B7a author log: GUM Reinforce, first nine lessons (3.L.GC.1:R)

Author: B7a (content author). Status of every lesson: **AUTHORED (B7a), NOT ACCEPTED: awaiting independent review.** Nothing was marked ACCEPTED, `js/data/accepted.js` was not touched, and no git command that changes anything was run. Nothing here has been blind-solved by anyone but the author.

## Deviation from the brief: file used, and a warning for the second-half author
- The brief asked for a new file `L-GUM4.js`. That was impossible: `js/data/lessons/L-GUM4.js` and `L-GUM5.js` already exist (they hold the B8 lessons, and `manifest.js` already lists both). A lesson code that is registered twice is silently ignored (first one wins), so a second set of lessons under these codes would never load.
- All nine lessons were therefore edited **in place in `js/data/lessons/L-GUM1.js`** (the same approach B6 used in `L-GUM3.js`). The new blocks sit between `/* B7a:passages:start/end */` and `/* B7a:core:start/end */` style markers inside each lesson. Original practice P1 to P5, test T1 to T5, Teach, and Parent text are unchanged, except lesson 1 `learn`, which gained a third Watch Me ("Wash your hands before lunch.").
- **Second-half author (lessons 10 to 18): do NOT write to or overwrite `L-GUM4.js` or `L-GUM5.js`. Do not use `L-GUM1.js`, which this batch owns. Check `manifest.js` and the existing files before choosing a file name.**

## What was built (per lesson)
Each of the nine lessons has: `core` (3 sets of 5; two items are `{ref}` to original practice items, 13 are new), a `similar` bank S01 to S15 (every core item, including the two refs, has its own twin through `like`), `addons` for P1 to P5 (hints, how, misconception), six new passages `p1` to `p6`, and the Learn It / Watch Me / Together flow the L-GUM3 format uses (Together = practice minus the two refs, 3 items in each lesson).

| # | Lesson code | Refs (original practice items reused in Set 1) |
|---|---|---|
| 1 | use-nouns-and-verbs-to-form-complete-thoughts-in | P2, P4 |
| 2 | form-and-use-singular-and-plural-nouns-in-speech | P3, P5 |
| 3 | use-interrogatives-to-ask-questions-in-speech | P2, P4 |
| 4 | capitalize-the-first-word-of-a-sentence-and-the- | P3, P5 |
| 5 | form-regular-plural-nouns-with-s-or-es | P3, P4 |
| 6 | form-and-use-verbs-with-ing-ed-or-s | P4, P5 |
| 7 | use-action-verbs | P2, P5 |
| 8 | use-adjectives-and-adverbs | P3, P5 |
| 9 | use-common-and-proper-nouns | P2, P4 |

## Gate results (last run, on the final `L-GUM1.js`)
- `node verification/check-content.js --all`: **PASS, 0 failures, 100 warnings** (last run; the repo-wide count moves as other agents edit) (68 lessons with core, 1020 core items, 1020 similar items). The warnings are the repo-wide set (version record, ledger). For `SK-GUM1-*` items there are 29: 21 are "hint 1 is much longer than hint 3", 3 are "hint 1 shares a word only with the key", 3 "clue shares a word only with the key", 2 "hint 2 shares a word only with the key". They were read and left as warnings (single shared everyday words such as "thing", "picture", "lets", "special, name"); a reviewer may want to shorten some hint 1 lines.
- `node verification/check-writing.js`: 0 failures, 0 warnings. `node verification/check-instructional-copy.js`: 28 assertions passed.
- `python3 verification/readability.py js/data/lessons/L-GUM1.js`: no passage above FK 3.9 in lessons 1 to 9 (highest: lesson 6 p1 and lesson 2 p5, 3.9; that script counts the "(n)" markers as words, so its word counts run about 15 higher than the counts below).
- Author-side checker (`verify.js` in the session scratchpad, run on the final file; no output of `PROBLEM`): the keyed text appears in why for every mc, ms, ebsr, dropdown and hot-text item; how names the key words; no hint contains the key text; after hint 3 at least two choices stay live for every item (pick + 1 for two-key items); no twin pair is above 0.21.

## Passage length and readability, measured on the final file
Words are counted without the "(n)" markers (script `fkp.js`/`verify.js`; FK is Flesch-Kincaid grade).

| Lesson | Shortest passage (words) | Highest FK |
|---|---|---|
| 1 | 103 | 3.44 |
| 2 | 103 | 3.87 |
| 3 | 101 | 3.54 |
| 4 | 102 | 2.28 |
| 5 | 103 | 2.66 |
| 6 | 104 | 3.87 |
| 7 | 102 | 2.97 |
| 8 | 102 | 3.11 |
| 9 | 102 | 3.67 |

All 54 passages are 101 words or more and FK 3.9 or lower.

## Twin vs core overlap, measured on the final file
Tokens are lowercase `[a-z']+` words over stem, prompt, text, choices, slot options, rows, columns, ebsr parts, and hot-text target sentences. Every twin was compared with every core item and with the two ref practice items (all pairs), by set Jaccard and by multiset Jaccard. The limit is 0.21.

| Lesson | Max, matched `like` pair (set / multiset) | Max, all pairs (set / multiset) |
|---|---|---|
| 1 | 0.20 / 0.20 | 0.20 / 0.20 |
| 2 | 0.21 / 0.21 | 0.21 / 0.21 |
| 3 | 0.20 / 0.20 | 0.21 / 0.21 |
| 4 | 0.19 / 0.21 | 0.20 / 0.21 |
| 5 | 0.19 / 0.21 | 0.19 / 0.21 |
| 6 | 0.21 / 0.20 | 0.21 / 0.21 |
| 7 | 0.19 / 0.20 | 0.21 / 0.20 |
| 8 | 0.18 / 0.20 | 0.19 / 0.20 |
| 9 | 0.20 / 0.19 | 0.20 / 0.19 |

Digits are not tokens, so numeral-only choices do not count toward the overlap. Several pairs sit exactly at 0.21; they were not rounded down by hand.

## Key length, format mix, difficulty
- **Key uniquely longest, new core and twin items:** 0 in all nine lessons (mc, ms, ebsr parts, dropdown slots, hot-text options).
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
- Action verbs include mental actions (think, imagine): https://www.thesaurus.com/e/grammar/action-verbs/ ; decide, dream, imagine, notice, realize are verbs of knowing and thinking: https://www.proofreadingservices.com/pages/verbs-of-knowing-and-thinking (the word "doubt" was in an earlier draft of lesson 7 S02 and was removed because no fetched page confirmed it; "realized" replaced it).

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
- Hint ladders were written to the rules (hint 1 strategy, hint 2 focus, hint 3 removes at most one choice and leaves at least two live), but the check is mechanical; independent blind solving has not been done.
- A reviewer should look hard at: lesson 8 C14/S14 (an adjective used where an adverb is needed: "moved graceful", "answered polite" are standard-English errors, but informal speech accepts some adjectives as adverbs, so the chosen words were picked to avoid that: polite has no adverb sense per the dictionary above, and graceful is not used adverbially); lesson 9 S05 (team names); lesson 9 C14/S14 (capitalization edits); lesson 7 C15/S15 (counterexample items).
- `STATUS.md` has nine new rows (`B7a`, NOT ACCEPTED: awaiting independent review) and `02-coverage-matrix.csv` has `review_status` updated to "Expansion: AUTHORED (B7a), NEEDS INDEPENDENT REVIEW. NOT ACCEPTED" for the nine `3.L.GC.1:R:` rows. Other columns of the matrix were not recalculated.
