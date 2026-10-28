# B7b author log: GUM Reinforce, second nine lessons (3.L.GC.1:R), file js/data/lessons/L-GUM2.js

Status: lesson 1 is recorded ACCEPTED by the coordinator (wording-only edits this round). Lessons 2 to 9 are AUTHORED (B7b), NOT ACCEPTED: awaiting independent review. All figures below were measured on the final L-GUM2.js after the second-review fixes.

## Final-file gate results
- `node verification/check-content.js --all`: PASS, 0 failures (last run 2026-10-27, after the L8/L9 third-review fixes)
- `node verification/check-writing.js`: 0 failures, 0 warnings
- `node verification/check-instructional-copy.js`: 28 assertions passed
- `python3 verification/readability.py js/data/lessons/L-GUM2.js`: every passage 110 words or more by that tool, FK 4.5 or lower (max 4.5 in lesson 1 passage 3)

## Per lesson (final file)
Jaccard uses lowercase tokens (letters and digits) over the whole item text: stem, prompt, text, choices, slot options, rows, columns, both ebsr parts and hot-text target sentences, with the "(n)" sentence-number markers of those target sentences counted as tokens. "Twin vs core" covers all 15 x 15 pairs (limit 0.21); "within a bank" is the largest core-vs-core or twin-vs-twin pair (limit 0.30). Values are set / multiset. Passage figures are the author counter that excludes the "(n)" markers (min words, max FK).

| # | Lesson code | Twin vs core, all pairs, markers counted | Within a bank | Passage min words, max FK | Core formats (mc, dropdown, hottext, ms, ebsr, match) | DOK 1 / 2 / 3 |
|---|---|---|---|---|---|---|
| 1 | form-and-use-simple-verb-tenses | 0.205 / 0.221 | 0.279 / 0.237 | 100, 4.48 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 2 | use-determiners-articles-possessive-and-demonstr | 0.204 / 0.237 | 0.246 / 0.275 | 105, 3.56 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 3 | capitalize-proper-nouns | 0.207 / 0.229 | 0.253 / 0.234 | 104, 4.13 | 5, 3, 3, 2, 1, 1 | 1 / 10 / 4 |
| 4 | use-end-punctuation-period-exclamation-point-que | 0.202 / 0.193 | 0.268 / 0.278 | 100, 3.08 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 5 | form-plural-nouns-by-changing-y-to-ies | 0.209 / 0.202 | 0.225 / 0.245 | 102, 4.46 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 6 | use-personal-pronouns-subject-object-possessive | 0.228 / 0.241 | 0.288 / 0.258 | 101, 3.89 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 7 | use-frequently-occurring-prepositions | 0.186 / 0.220 | 0.270 / 0.238 | 108, 4.47 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 8 | use-commas-in-a-series-and-in-dates-addresses-sa | 0.203 / 0.200 | 0.254 / 0.235 | 100, 3.41 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |
| 9 | form-and-use-verbs-by-adding-d-or-es | 0.198 / 0.205 | 0.216 / 0.218 | 104, 4.08 | 5, 3, 4, 1, 1, 1 | 1 / 10 / 4 |

Lessons 1, 2, 3, 6 and 7 were not edited in this round (accepted or under another review), so their marker-counted figures stand as measured: the multiset values for lessons 1, 2, 3, 6 and 7 and the set value for lesson 6 are above 0.21, all below 0.30. Lessons 4, 5, 8 and 9 were edited and are at or below 0.21 on set and multiset except lesson 5 (0.209 set, 0.202 multiset, within limit).

Each lesson: 15 core items (2 refs plus 13 new), 15 twins, hints h1-h3, how and misconception on every item, addons P1-P5, no passage shared between core (p1-p3) and twins (p4-p6). Per lesson the scripts also report: no key uniquely longest (single and choose-two), key text present in how and why, and no key exposed by a later item in the same set (sentence-number and text-run scan). Hint ladders were recounted by hand after each edit; every ladder in lessons 4, 5, 8 and 9 keeps at least two live choices after hints 1-3, and hint 3 names at most one wrong choice.

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
- Round-3 additions (checked 2026-10-27, L4/L5 wording fixes): kitty, plural kitties (M-W): https://www.merriam-webster.com/dictionary/kitty ; jay, plural jays (M-W thesaurus entry): https://merriam-webster.com/thesaurus/jays ; vowel + y adds -s (bays, rays, plays, toys, alleys) and consonant + y becomes -ies (ladies, pennies, flies): https://www.k12reader.com/spelling-rules/spelling_rule_exceptions_for_plural_nouns_words_that_end_in_y.pdf ; belly, plural bellies: https://www.grammar-monster.com/plurals/plural_of_belly.htm ; country, plural countries (rule page, search result only): https://howtospell.co.uk/y-to-ies-or-s-plural-rule
- Round-3 additions for L8/L9 (checked 2026-10-27): tease, teased: https://www.merriam-webster.com/dictionary/tease ; joke, joked: https://www.merriam-webster.com/dictionary/joke ; tidy, tidies: https://www.gymglish.com/en/conjugation/english/verb/tidy . The verbs rides and writes follow the already logged -s rule; they were not looked up individually.
