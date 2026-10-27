# B7b author log: GUM Reinforce, second nine lessons (3.L.GC.1:R), file js/data/lessons/L-GUM2.js

Status of all nine lessons: AUTHORED (B7b), NOT ACCEPTED: awaiting independent review. Measurements below are from the final L-GUM2.js.

## Final-file gate results
- `node verification/check-content.js --all`: PASS (0 failures, 83 warnings, none about L-GUM2)
- `node verification/check-writing.js`: 0 failures, 0 warnings
- `node verification/check-instructional-copy.js`: 28 assertions passed
- `python3 verification/readability.py js/data/lessons/L-GUM2.js`: no passage above FK 4.5

## Per lesson (final file)
Twin-vs-core whole-text Jaccard, all 15 x 15 pairs measured. Max shown as set / multiset (limit 0.21). Words and FK are from readability.py (words exclude the "(n)" markers per the tool's count; the author's own counter gave at least 101 for every passage).

| # | Lesson code | Max Jaccard set / multi | Passages p1-p6: min words, max FK | Core formats (mc, dropdown, hottext, ms, ebsr, match) | DOK 1 / 2 / 3 |
|---|---|---|---|---|---|
| 1 | form-and-use-simple-verb-tenses | 0.198 / 0.210 | 110, 4.5 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 2 | use-determiners-articles-possessive-and-demonstr | 0.208 / 0.197 | 115, 3.2 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 3 | capitalize-proper-nouns | 0.209 / 0.183 | 112, 3.8 | 5, 3, 3, 2, 1, 1 | 1 / 10 / 4 |
| 4 | use-end-punctuation-period-exclamation-point-que | 0.200 / 0.189 | 110, 3.1 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 5 | form-plural-nouns-by-changing-y-to-ies | 0.209 / 0.209 | 111, 4.0 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 6 | use-personal-pronouns-subject-object-possessive | 0.208 / 0.208 | 111, 3.9 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 7 | use-frequently-occurring-prepositions | 0.207 / 0.203 | 118, 4.0 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 8 | use-commas-in-a-series-and-in-dates-addresses-sa | 0.198 / 0.204 | 117, 4.1 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 9 | form-and-use-verbs-by-adding-d-or-es | 0.191 / 0.206 | 114, 3.9 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |

Each lesson: 15 core items (2 refs plus 13 new), 15 twins, hints h1-h3, how and misconception on every item, addons P1-P5, no passage shared between core (p1-p3) and twins (p4-p6). The verify script reports no key uniquely longest and key text equal to why/how for every item. Hint ladders were recounted by hand for every item (at least 2 live choices after h1-h3); patches from that recount were made in lessons 2 to 9.

Duplicate scan (6-gram and exact, against all js/data plus own-lesson teach, learn and test): lessons 6 to 9 no findings; lessons 1 to 5 only generic prompt phrases shared with other GUM lessons and own-lesson teach restatements.

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
