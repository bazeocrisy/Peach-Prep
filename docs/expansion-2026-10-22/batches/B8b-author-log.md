# B8b author log: GUM Introduce/Continue (L-GUM5.js, seven lessons)

Status: authored, NOT reviewed, NOT ACCEPTED. All seven lessons await two independent blind reviewers. Nothing here is marked ACCEPTED.

Scope: the seven lessons registered in `js/data/lessons/L-GUM5.js`. L-GUM1.js to L-GUM4.js and accepted.js were not touched. No git command was used to change anything.

Per lesson delivered: 15 core items in 3 sets of 5 (the legacy P3 and the second legacy item are reused by `{ref}`; the other three legacy items stay in Practice Together, 3 items each), 15 twins in the `similar` bank with `like` lists, hints h1 to h3 with `how` and `misconception` on every item, addons for legacy P1 to P5, Teach (3 points each), Watch Me (3 each), and six passage drafts (p1 to p3 core, p4 to p6 twins).

All numbers below were measured on the final file after the last edit (`node verification/check-content.js --all`: PASS, 0 failures; no warnings remain on any SK-GUM5-1 to SK-GUM5-7 item).

## Measurements (final file)

Twin x core overlap is the maximum over all 225 twin/core pairs (15 x 15, including the reused legacy items). "tc" is item text only, "tcp" is item text plus passage text. Each cell is set Jaccard / multiset Jaccard. The limit is 0.21.

| Lesson | tc max | tcp max | Passage min words | Passage max FK | Core format counts | Core DOK 1/2/3 |
|---|---|---|---|---|---|---|
| L1 capitalization in abbreviations | 0.194 / 0.205 | 0.193 / 0.205 | 107 | 3.6 | hottext 3, match 2, dropdown 4, mc 3, ebsr 1, ms 2 | 2/10/3 |
| L2 commas, direct address and yes/no | 0.197 / 0.205 | 0.197 / 0.205 | 108 | 2.9 | match 2, ms 3, dropdown 4, mc 3, ebsr 1, hottext 2 | 2/10/3 |
| L3 plural possessive apostrophes | 0.205 / 0.203 | 0.174 / 0.202 | 101 | 4.5 (4.47) | match 2, hottext 3, dropdown 4, mc 3, ebsr 1, ms 2 | 2/10/3 |
| L4 indefinite pronouns, agreement | 0.202 / 0.203 | 0.207 / 0.204 | 100 | 3.9 | hottext 3, ms 3, dropdown 4, mc 3, ebsr 1, match 1 | 2/10/3 |
| L5 subordinating conjunctions | 0.194 / 0.201 | 0.200 / 0.192 | 100 | 3.4 | hottext 3, match 2, dropdown 4, mc 3, ebsr 1, ms 2 | 2/10/3 |
| L6 commas after opening parts | 0.178 / 0.195 | 0.175 / 0.195 | 104 | 3.3 | hottext 3, ms 2, dropdown 4, mc 3, ebsr 1, match 2 | 2/10/3 |
| L7 titles of works | 0.190 / 0.201 | 0.179 / 0.207 | 102 | 4.4 (4.44) | hottext 3, dropdown 4, mc 3, ebsr 1, ms 2, match 2 | 2/10/3 |

Twin format counts and DOK counts equal the core counts in every lesson, and every twin has the same type and DOK as the core item it mirrors (`like` check: no mismatch in any lesson). Passage word counts exclude the (n) markers. FK is from `verification/readability.py` (heuristic, screening only).

Key-longest check (`longest.js`, all core and twin items, dropdown slots and choose-two items included): in all seven lessons, 0 keys are uniquely longest and 0 choose-two items have both keys longer than every distractor.

Live choices (`live.js`, scripted recount after hints 1, 2 and 3): no item names its key in a hint, and hint 3 names at most one wrong choice. The fewest live choices left after hint 3 on any item or slot is 2 (L1, L3, L4, L5) or 3 (L2, L6, L7) of at least 3.

Key text appears in why or how on every item. No core key appears in Teach or Watch Me (`qa.js`: no KEY-IN-TEACH), and no Teach or Watch Me example equals a core key.

## Design notes that affect review

- L3: peoples' is a valid plural, so it is never marked as an error (twin S12 uses women).
- L4: no new item marks "each of + plural noun + plural verb" as an error. That form is acceptable in informal prose, so it appears only as a correct singular use. The legacy distractor "Each of the boys have" is legacy text, kept as is.
- L5: every conjunction is checked for meaning (because = reason, until = how long, when/while/after/before = time, if = condition, although = surprise). Hot-text stems that say TWO have exactly two errors in the stated range; stems that say ONE have exactly one.
- L6: only opening clauses with a naming and telling part (When, Before, After, As soon as, Once, While) are marked as missing a comma. A missing comma after a short opening phrase is never marked as an error, and every short opening phrase in the passages has its comma. The only extra-comma errors are on closing parts that begin with when, after, before or if.
- L7: titles are invented. Mid-title words are only nouns, adjectives and the small words a, an, the, and, of, in, on, at, to, for. Italics and underlining are tested only by mc and match items that describe the work (the site cannot render them). No passage item depends on italics.
- Passages: the planted passage errors that no item uses are listed in the lesson specs (for example L5 p1 s7 is a deliberate unused fragment). Every item that targets a range was recounted so that its stated number of errors is true.

## Web sources (claims verified)

L1
- https://www.grammarbook.com/blog/?p=611
- https://www.merriam-webster.com/dictionary/Peruvian , https://www.merriam-webster.com/dictionary/Jamaican , https://www.merriam-webster.com/dictionary/Vietnamese
- https://www.merriam-webster.com/dictionary/ave

L2
- https://our-languages.canada.ca/en/writing-tips-plus/commas-with-direct-address
- https://www.grammarphobia.com/blog/2010/01/comma-names.html
- https://k5learning.com/free-grammar-worksheets/fifth-grade-5/punctuation/comma-yes-no
- https://www.merriam-webster.com/dictionary/say%20yes

L3
- https://www.dummies.com/article/academics-the-arts/language-language-arts/grammar-vocabulary/how-to-form-plural-possessives-in-english-190508
- https://www.merriam-webster.com/dictionary/Peoples

L4
- https://www.continuingstudies.uvic.ca/elc/studyzone/410/grammar/410-indefinite-pronouns-agreement
- https://quickanddirtytips.com/?p=56980
- https://editorsmanual.com/?p=8466

L5
- https://writingexplained.org/grammar-dictionary/subordinating-conjunctions
- https://www.grammar-monster.com/glossary/subordinating_conjunctions.htm
- https://www.proofreadingservices.com/pages/subordinating-conjunctions-list
- https://www.oxfordlearnersdictionaries.com/definition/english/while_1

L6
- https://nos-langues.canada.ca/en/writing-tips-plus/commas-with-introductory-elements (introductory subordinate clause normally takes a comma; after short introductory phrases the comma is optional)
- https://writingcenter.tamu.edu/guides/resources/commas.html (comma after an introductory phrase; may be omitted when the element is short)
- https://prowritingaid.com/grammar/1000062/Do-I-need-a-comma-after-a-subordinate-clause (clause first gets a comma; "When subordinate clauses come at the end of the sentence, you don't use a comma")

L7
- https://www.varsitytutors.com/practice/subjects/3rd-grade-ela/lessons/capitalize-words-in-titles
- https://www.varsitytutors.com/practice/subjects/5th-grade-ela/lessons/indicate-titles-of-works
- https://www.wccnet.edu/webfiles/writing-center/web/punctuation/TitlesofWorks.pdf

## Topic and word scan

Passage titles of all 42 passages were checked against every passage title in `js/data` (sets, tasks, lessons): no title collides. The distinctive title nouns appear in at most one other file (most in none). Names are invented; no real child's name is used.

Known leftover, not changed because it is legacy text I may not edit: a few 6-gram overlaps between legacy practice items and other lessons' legacy items (for example SK-GUM5-5-P3 and SK-GUM3-1-P5 share "lunch under the big oak tree"; SK-GUM5-6-P4 shares "two sentences that use commas correctly" with SK-GUM5-2-P5 and SK-GUM5-6-T4). Reviewers may want to decide whether to reword the legacy items.

## Finishing artifacts

- `docs/expansion-2026-10-22/batches/STATUS.md`: seven rows "B8b | <code> | NOT ACCEPTED: awaiting independent review | B8b-author-log.md; authored, not reviewed", placed after the B8a rows. No B8b rows existed before; the generic B4-B9 row was left as is.
- `docs/expansion-2026-10-22/02-coverage-matrix.csv`: `review_status` updated on the seven rows ("B8b: authored ...; NOT ACCEPTED: awaiting independent review (two blind reviewers required).").
