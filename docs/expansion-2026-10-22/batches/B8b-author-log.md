# B8b author log: GUM Introduce/Continue (L-GUM5.js, seven lessons)

Status: authored, NOT reviewed, NOT ACCEPTED. All seven lessons await two independent blind reviewers. Nothing here is marked ACCEPTED.

Scope: the seven lessons registered in `js/data/lessons/L-GUM5.js`. L-GUM1.js to L-GUM4.js and accepted.js were not touched. No git command was used to change anything.

Per lesson delivered: 15 core items in 3 sets of 5 (the legacy P3 and the second legacy item are reused by `{ref}`; the other three legacy items stay in Practice Together, 3 items each), 15 twins in the `similar` bank with `like` lists, hints h1 to h3 with `how` and `misconception` on every item, addons for legacy P1 to P5, Teach (3 points each), Watch Me (3 each), and six passage drafts (p1 to p3 core, p4 to p6 twins).

All numbers below were measured on the final file after the last edit (`node verification/check-content.js --all`: PASS, 0 failures; no warnings remain on any SK-GUM5-1 to SK-GUM5-7 item).

## Measurements (final file)

Twin x core overlap is the maximum over all 225 twin/core pairs (15 x 15, including the reused legacy items). "tc" is item text only, "tcp" is item text plus passage text. Each cell is set Jaccard / multiset Jaccard. The limit is 0.21 (the set figure is the one held under 0.21 in every lesson; the multiset figure is at most 0.214). Re-measured after the first-review fixes (lessons 1 to 7).

| Lesson | tc max | tcp max | Passage min words | Passage max FK | Core format counts | Core DOK 1/2/3 |
|---|---|---|---|---|---|---|
| L1 capitalization in abbreviations | 0.190 / 0.206 | 0.181 / 0.205 | 117 | 3.6 | hottext 3, match 2, dropdown 4, mc 3, ebsr 1, ms 2 | 2/10/3 |
| L2 commas, direct address and yes/no | 0.197 / 0.204 | 0.197 / 0.204 | 118 | 2.9 | match 2, ms 3, dropdown 4, mc 3, ebsr 1, hottext 2 | 2/10/3 |
| L3 plural possessive apostrophes | 0.205 / 0.194 | 0.172 / 0.189 | 111 | 4.5 | match 2, hottext 3, dropdown 3, mc 4, ebsr 1, ms 2 | 2/10/3 |
| L4 indefinite pronouns, agreement | 0.200 / 0.214 | 0.207 / 0.204 | 111 | 3.9 | hottext 3, ms 3, dropdown 4, mc 3, ebsr 1, match 1 | 2/10/3 |
| L5 subordinating conjunctions | 0.209 / 0.204 | 0.195 / 0.191 | 111 | 3.4 | hottext 3, match 2, dropdown 4, mc 3, ebsr 1, ms 2 | 2/10/3 |
| L6 commas after opening parts | 0.208 / 0.206 | 0.208 / 0.206 | 116 | 3.3 | hottext 3, ms 2, dropdown 4, mc 3, ebsr 1, match 2 | 2/10/3 |
| L7 titles of works | 0.193 / 0.200 | 0.191 / 0.204 | 117 | 4.4 | hottext 3, dropdown 4, mc 3, ebsr 1, ms 2, match 2 | 2/10/3 |

Twin format counts and DOK counts equal the core counts in every lesson, and every twin has the same type and DOK as the core item it mirrors (`like` check: no mismatch in any lesson). Passage word counts exclude the (n) markers. FK is from `verification/readability.py` (heuristic, screening only).

Key-longest check (`longest.js`, all core and twin items, dropdown slots and choose-two items included): in all seven lessons, 0 keys are uniquely longest and 0 choose-two items have both keys longer than every distractor.

Live choices (`live.js`, scripted recount after hints 1, 2 and 3): no item names its key in a hint, and hint 3 names at most one wrong choice. The fewest live choices left after hint 3 on any item or slot is 2 (L1, L3, L4, L5) or 3 (L2, L6, L7) of at least 3.

Key text appears in why or how on every item. No core key appears in Teach or Watch Me (`qa.js`: no KEY-IN-TEACH), and no Teach or Watch Me example equals a core key.

Core-vs-core item-text overlap (digits and (n) markers counted; limit 0.30), maximum per lesson: L1 0.215, L2 0.250, L3 0.232, L4 0.295, L5 0.238, L6 0.279, L7 0.282. With passage text added, the same-passage dropdown and hot-text pairs reach 0.8 to 0.9 because they share a draft; that figure is informational. Passage words and FK come from `verification/readability.py` (script word counts; FK maximum 4.5 on L3, 4.4 on L7).

## First-review revision (all seven lessons)

Fixes follow B8b-review.md ("First review"). Each fix was made in the lesson specs and rebuilt into L-GUM5.js; all figures above are from the final file.

- Same-frame dropdown triplets (C03/C10/C12 and S03/S10/S12 in every lesson): prompts, hints, how and distractor shapes were varied; every triplet is now under 0.30 core-vs-core. L4's third option in all eight dropdowns is now a wrong-agreement form with a helper word (have brought, do clap, is shaking, have kept, is watching, and the twin forms) instead of an -ing form, and hint 3s differ.
- L5/L6/L7 dropdown items no longer print their key in the passage (checked by script; the remaining "KEY IN PASSAGE" lines from `ke.js` are hot-text and ebsr items whose key is the planted sentence, or are case-insensitive matches of a deliberately mis-capitalized title).
- L1 C14/S14: "Av." and "Str." are valid capitalized abbreviations, so they are no longer distractors; Teach now lists Ave.
- L3: women/men removed from core items (tests T1/T2 ask them); core uses children, mice and people. Teach was changed to geese so that no core key appears in it. S01 says "Cover the apostrophe (and the s after it, if there is one)". S09 key rewritten: "Scores belong to the students, so they get a mark; archers only names a group."
- L4: S13 now tests Lena's claim "A verb copies whichever noun sits closest to it" (no word in the claim names a key); S15 distractors rewritten; passage p6 s6 reads "Somebody make the sign for the word friend with two hands."
- L5 to L7: items listed as MUST and SHOULD in the review were fixed (C14 slot 0, L6 S13, L7 title items).
- Opening words of the stems and the choice starts were reworded where six-word strings repeated in other lessons.

## Notes for reviewers

- The only check-content failure seen during the work ("3.L.GC.1:C:form-and-use-prepositional-phrases: learn needs 2-3 worked examples") belonged to another batch and is gone in the final run (PASS, 0 failures).
- Legacy-item six-gram overlaps remain (see the topic scan).
- Two read-only `git status` calls were run by mistake earlier; nothing was changed with git.

## Second-review revision (lesson 3 only)

Final-file figures for L3: twin x core 0.183 set / 0.202 multiset (item text, digits and (n) markers counted), 0.173 / 0.202 with passages; core-vs-core 0.232; no key uniquely longest; `live.js` leaves 2 or more choices after hint 3; check-content PASS.

- S3-A: C12 is now a 4-choice mc (fix plus reason, key "The people's, because people does not end in s and so takes 's.") instead of a second children-style dropdown; its twin S12 is the same task with women. C10 keeps the dropdown but its choices are now phrases ("The children's / The childrens' / The childrens") with a new hint 3. All hint 3s in the lesson differ.
- S3-B: S13 now has a wrong no-apostrophe sentence ("The squirrels nest was high in the old oak.") and hint 1 is "Lena says always. Find the sentences that prove her wrong."
- S3-C: C07's second key is now "The coaches' whistles hung by the gym door." so mice's is not printed before C14; legacy P4 row 3 is "the teachers' songs", so children's is not printed before C10.
- S3-D: (superseded by the third-review fix below.)
- S3-E: C09/S09 reworded (stem and three distractors; key "Students' owns the scores, while archers just labels a group."); item overlap 0.212 to 0.164 multiset and under 0.21 set.

## Second-review revision (lessons 5 to 7)

Final-file figures: L5 twin x core 0.209 set / 0.204 multiset (item text, digits and (n) markers counted), 0.195 / 0.191 with passages, core-vs-core 0.238; L6 and L7 as in the table (L7 after the S10 rewording: no pair above 0.20 set or multiset). No key is uniquely longest and no choose-two item has both keys longest. check-content: PASS, 0 failures, and no warning on any SK-GUM5-5, SK-GUM5-6 or SK-GUM5-7 item.

- L5 C03/S03: each stem now gives context that excludes the surprise reading (C03: "The rain began at noon and stopped at one. Jo's team sat on the bench from noon to one."; S03: "Tess began jogging in full daylight. Dark fell much later."). Options are until / because / if for both. Hint 3s name the reason or case choice, not a surprise.
- L5 C06: sentence 3 is now "We could not start although Dad had not found the red ball." (not finding the ball is the reason, so although is a clear clash; the fix is because). how and why updated.
- L5 C14 and S14 redesigned to reason (first blank) plus how long (second blank), with new characters and nouns (Mara and the bus; Omar and Dad), so they no longer mirror form A test T4.
- L5 hints and wording: C10 h1 and S10 h1 are neutral ("Ask how the ... and the ... are connected"); C12 hint 3 and the C14 hint 3 differ from C03; "while" in the S09 and S15 keys became "and" and "but"; C11/S11 and C12/S12 stems were reworded and are now under 0.21 both ways.
- L6 S15 hint 2 ("Say the opening part by itself.") and L7 C09 hint 1 ("... or something you read in a minute.") were reworded to clear the key-word warnings; no key, option or point changed. L7 S10 stem "Beth sang {0} after supper." removed the C12 overlap; wording only.

## Third-review revision (lesson 3)

Final-file figures for L3: twin x core 0.205 set / 0.194 multiset (item text, digits and (n) markers counted), 0.172 / 0.189 with passages; core-vs-core 0.232; passage FK maximum 4.5 (p4), p6 4.3; no key uniquely longest; check-content PASS with no warning on any lesson 3, 5, 6 or 7 item.

- M3-1: S12 no longer uses women. It is now the oxen item (key "Oxen's: oxen has no s on its end, so add 's."); p6 sentence 10 reads "The oxens cart hauled marigold seeds to the hall before lunch." Oxen appears in no test item and is a taught plural in L-GUM3 (checked with a scan of js/data). No practice item prints T1/T2's noun, forms or key.
- S3-1: S07 option E is now "The mices' nest was behind the barn." (a non-word error); how and why updated.
- S3-2: S12's stem now says "several oxen".
- Teach point 3 names "geese, children, people and mice" and gives only the geese's pond example, so no core key is printed. The S09 hint 1 was reworded to clear a key-word warning.
- Not changed (reviewer NOTEs): C10 still shares its option set with legacy Together P2, and C08 row 4 (mice) still precedes C14.

## Design notes that affect review

- L3: peoples' is a valid plural, so it is never marked as an error.
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
