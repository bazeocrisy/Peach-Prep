# B7b author log: GUM Reinforce, second nine lessons (3.L.GC.1:R), file js/data/lessons/L-GUM2.js

Status: lesson 1 is recorded ACCEPTED by the coordinator (wording-only edits this round). Lessons 2 to 9 are AUTHORED (B7b), NOT ACCEPTED: awaiting independent review. All figures below were measured on the final L-GUM2.js after the second-review fixes.

## Final-file gate results
- `node verification/check-content.js --all`: 0 failures (warnings are existing ledger and migration notices, none about L-GUM2)
- `node verification/check-writing.js`: 0 failures, 0 warnings
- `node verification/check-instructional-copy.js`: 28 assertions passed
- `python3 verification/readability.py js/data/lessons/L-GUM2.js`: every passage 110 words or more by that tool, FK 4.5 or lower (max 4.5 in lesson 1 passage 3)

## Per lesson (final file)
Jaccard uses lowercase tokens over the whole item text: stem, prompt, text, choices, slot options, rows, columns, both ebsr parts and hot-text target sentences. "Twin vs core" is measured on all 15 x 15 pairs (limit 0.21); "core vs core / twin vs twin" is the largest within-bank pair (limit 0.30). Values are set / multiset. Words and FK in the last column are the author counter that excludes the "(n)" markers (min words, max FK); readability.py figures above are higher because that tool counts differently.

| # | Lesson code | Twin vs core, all pairs | Within a bank | Passage min words, max FK | Core formats (mc, dropdown, hottext, ms, ebsr, match) | DOK 1 / 2 / 3 |
|---|---|---|---|---|---|---|
| 1 | form-and-use-simple-verb-tenses | 0.205 / 0.205 | 0.279 / 0.237 | 100, 4.48 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 2 | use-determiners-articles-possessive-and-demonstr | 0.186 / 0.208 | 0.246 / 0.275 | 105, 3.56 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 3 | capitalize-proper-nouns | 0.207 / 0.195 | 0.253 / 0.234 | 104, 4.13 | 5, 3, 3, 2, 1, 1 | 1 / 10 / 4 |
| 4 | use-end-punctuation-period-exclamation-point-que | 0.202 / 0.197 | 0.259 / 0.278 | 100, 3.08 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 5 | form-plural-nouns-by-changing-y-to-ies | 0.207 / 0.203 | 0.236 / 0.259 | 101, 4.35 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 6 | use-personal-pronouns-subject-object-possessive | 0.203 / 0.208 | 0.288 / 0.258 | 101, 3.89 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 7 | use-frequently-occurring-prepositions | 0.186 / 0.207 | 0.263 / 0.238 | 108, 4.47 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 8 | use-commas-in-a-series-and-in-dates-addresses-sa | 0.203 / 0.205 | 0.246 / 0.260 | 100, 3.41 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 9 | form-and-use-verbs-by-adding-d-or-es | 0.198 / 0.198 | 0.236 / 0.235 | 104, 4.08 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |

Each lesson: 15 core items (2 refs plus 13 new), 15 twins, hints h1-h3, how and misconception on every item, addons P1-P5, no passage shared between core (p1-p3) and twins (p4-p6). Per lesson the scripts also report: no key uniquely longest (single and choose-two), key text present in how and why, no key exposed by a later item in the same set (sentence-number and text-run scan), and no hint ladder left with fewer than two live choices.

Duplicate scan (6-gram and exact, against all js/data plus own-lesson teach, learn and test): lessons 6 to 9 no findings; lessons 1 to 5 only generic prompt boilerplate shared with other GUM lessons (for example "choose the two sentences in which") and teach or learn phrases that restate the rule.

## Web sources
Grammar, spelling and dictionary claims, by lesson:
- L1 simple tenses: https://courses.lumenlearning.com/waymaker-level2-english/chapter/text-simple-verb-tenses/
- L2 a/an by sound (hour, honor, unicorn, one, uniform): https://www.scribbr.com/commonly-confused-words/a-vs-an/ ; https://www.merriam-webster.com/grammar/is-it-a-or-an ; https://www.merriam-webster.com/dictionary/unicorn ; https://www.merriam-webster.com/dictionary/uniform ; https://www.merriam-webster.com/dictionary/one ; https://www.merriam-webster.com/dictionary/hour ; https://www.merriam-webster.com/dictionary/honor
- L2 its / it's: https://www.dictionary.com/articles/its-vs-its
- L3 capitalization (titles before names, seasons, holidays, days, months, Atlantic Ocean): https://owl.purdue.edu/owl/general_writing/mechanics/help_with_capitals.html
- L4 indirect questions take a period; exclamation point: https://courses.lumenlearning.com/englishcomp1/chapter/text-end-punctuation/
- L5 consonant + y to -ies, vowel + y adds -s: https://www.k12reader.com/spelling/plurals_nouns_and_verbs_ending_in_y.pdf
- L6 pronoun cases, owning words that stand alone or go before a noun: https://www.kent.edu/writingcommons/using-case-subjective-objective-possessive
- L7 prepositions: https://www.writingcenter.utah.edu/writing-resources/prepositions.pdf ; https://www.merriam-webster.com/dictionary/until ; https://www.merriam-webster.com/dictionary/during ; https://www.merriam-webster.com/dictionary/beside ; https://www.merriam-webster.com/dictionary/across ; https://www.merriam-webster.com/dictionary/between ; https://www.merriam-webster.com/dictionary/among ; https://www.merriam-webster.com/grammar/between-among (the page says between is also used for more than two, so all between/among wording says "usually goes with two things" or "several things")
- L8 commas in series, dates, city and state, addresses, greeting and closing: https://fscj.pressbooks.pub/successfulwriting/chapter/3-1-commas/5
- L9 verb spelling (-d after e, -es after s sh ch x z, consonant + y to -ies, go/goes, do/does): https://human.libretexts.org/Courses/Irvine_Valley_College/The_Grand_Grammar_Guide_(ESL_388)/01%3A_UNIT_1-_Verb_Tense_Review_(Theme-_Identity)/1.15%3A_Parts_of_Speech/1.15.03%3A_Spelling_Rules_for_Nouns_and_Verbs
- Round-2 additions (checked 2026-10-27):
  - L7 until is both a preposition and a conjunction, so clause objects were replaced by noun objects (until sunset, until lunch, until the end of recess): https://www.merriam-webster.com/dictionary/until
  - L7 toward and along are prepositions (added to Teach): https://www.merriam-webster.com/dictionary/toward ; https://www.merriam-webster.com/dictionary/along
  - L9 vowel + y adds -s (spray, enjoy, stay), consonant + y changes to -ies: https://www.k12reader.com/spelling/plurals_nouns_and_verbs_ending_in_y.pdf
  - L9 cleaned (clean): https://www.merriam-webster.com/dictionary/clean ; bowed (bow): https://www.merriam-webster.com/dictionary/Bows
