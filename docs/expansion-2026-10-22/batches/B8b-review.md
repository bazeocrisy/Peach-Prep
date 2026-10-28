## First review (B8b lessons 5-7)

**Reviewer:** independent content reviewer (did not author). Scope: `js/data/lessons/L-GUM5.js`, lessons 5 (subordinating conjunctions), 6 (commas after introductory phrases or clauses) and 7 (capitalization and underlining, quotation marks or italics for titles). Files as on disk at commit ba4343a. Read-only: no lesson or code file was changed, no git was run, nothing is marked ACCEPTED.

### Verdicts

| Lesson | Verdict | MUST | SHOULD |
|---|---|---|---|
| 5. Joining ideas with because, when, after and if | **REVISE (CHANGES REQUIRED)** | 3 | 4 |
| 6. Commas after an opening part | **REVISE (CHANGES REQUIRED)** | 3 | 3 |
| 7. Writing titles of books, stories, poems and songs | **REVISE (CHANGES REQUIRED)** | 3 | 5 |

The keys are sound almost everywhere. The MUSTs are structural (the passage prints the keyed answer of 18 dropdown items, same-frame core overlap above 0.30) plus two item-level key problems (L5 C14 slot 0, L6 S13).

### 1. Blind solve

- **Method.** `scratchpad/b8b2/blind.js` loads `L-GUM5.js` in Node (stub `PP.addLesson`), resolves every core `{ref}` (P3 and P4 in each lesson), and prints all passages, every core item (45) and every `similar` item (45) with choices, options, targets, match rows and dropdown slots shuffled by a seeded generator. It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception` and `like`. Output is `blind.txt`; my answers are `ans5.txt`, `ans6.txt` and `ans7.txt`, saved before I extracted the keys.
- **Result: 90 of 90 agree (100%)**, 30 per lesson (15 core + 15 twin).
- **Disclosure.** The solve was blind for every item. Before it I had read lesson 5's Teach, Learn It and passage p1 with a `sed` print (no item keys), and I had read the `addons` hints for P3 and P4 only after solving them. I did not open the author log until the answers were saved.
- **Close calls while solving** (all still keyed correctly, see findings): L5 C14 slot 0 ("until the day was warm" is also natural English), L6 S13 (four sentences contradict Lia), L5 C11 sentence 7.

### 2. Measurements (scripts in `scratchpad/b8b2/`)

- **Browser (390 x 844, touch, browse-mode fixture, real taps on the controls; `run390.py`).** All 45 core items (15 per lesson, sets y, y2, y3) take the key and show "That's right": 45 of 45. No horizontal overflow (scrollWidth 390), no tap target under 40 px or outside the viewport, no page errors. All 24 passage items show the correct passage on the Passage tab. Long dropdown options (over 28 characters) render as a button list under the sentence; I answered them with those buttons. Twins were checked in data only (they appear only after a wrong answer).
- **Passages.** 18 passages, 111 to 135 words counting the `(n)` markers and 100 to 119 without them, all at least 100. Flesch-Kincaid (`verification/readability.py`): L5 1.7 to 3.4, L6 1.1 to 3.3, L7 2.9 to 4.4. Highest: L7 p1 4.4 and p3 4.1, under the 4.5 cap but close (NOTE).
- **Twin vs core whole-text Jaccard (set / multiset), `(n)` markers and digits counted, stem, prompt, text, choices, slots, rows, columns, both ebsr parts and hot-text target sentences, all 225 pairs per lesson:**

| Lesson | Max set | Max multiset | Any pair at 0.30 or more |
|---|---|---|---|
| L5 | 0.219 (C10/S10) | 0.213 (C06/S06) | none |
| L6 | 0.196 (C09/S09) | 0.195 (P4/S01) | none |
| L7 | 0.207 (C08/S08) | 0.197 (C15/S09) | none |

  Pairs over 0.21: L5 C10/S10 0.219 set, C06/S06 0.216 / 0.213. Stripping the `(n)` markers does not change the maxima (L5 0.219 / 0.198). Twin vs twin maximum set 0.214 (L6 S03/S10; its multiset is 0.346, NOTE: no twin-vs-twin limit is stated, but it is the same frame as the core triplets). Paired core/twin overlap is 0.05 to 0.22.
- **Core vs core (15 x 15, limit 0.30), set / multiset:**
  - L5: C03/C10 0.394 / 0.241, C03/C12 0.419 / 0.288, C10/C12 0.400 / 0.250, C10/C14 0.308 / 0.250, C12/C14 0.324 / 0.290.
  - L6: C10/C12 0.370 / 0.378, C03/C10 0.303 / 0.321, C03/C12 0.294 / 0.346.
  - L7: C08/C10 0.333 / 0.311, C08/C12 0.345 / 0.304, C10/C12 0.345 / 0.390, C09/C15 0.319 / 0.356, C04/C09 0.235 / 0.309.
- **Longest key (`longest.js`).** No core or twin key is uniquely longest and no choose-two pair is both-longest. Several keys are uniquely shortest by one to two characters; harmless. One end-mark tell: L7 S03 (see SHOULD).
- **Key / why / how consistency (`keyhow.js`).** Every key appears in its `how` and `why`. Hot-text items cite the sentence number instead of quoting; I checked all of them against the passage. One misquote: L5 S11 (SHOULD).
- **Hint ladder.** I read h1 to h3 of all 90 items. h1 is a strategy, h2 where to look, h3 a scaffold. No hint quotes a key (`hintkey.js`: nothing). Hint 3 names at most one wrong choice on every item and at least two choices remain live after hints 1 to 3, with one exception in the L7 choose-two pair C13/S13 (SHOULD). The engine's own "narrow" aid leaves key plus one distractor on its own.
- **`like` mapping (`like.js`).** Every twin maps to a distinct core item with the same type, points and DOK. Core formats per lesson: hottext 3, dropdown 4, mc 3, ebsr 1, ms and match 2 each (L5 and L7 vary slightly); points 22 / 22 / 21. Choose-two, ebsr, match and two-slot dropdown are worth 2, and every pick count equals its key count.
- **Giveaways within and across sets, forms A and B, Teach and Learn It (`leak2.js`).** Key strings of 3 or more words printed in any other core, twin, test, Together item (stem, options, hints) or in Teach/Learn: two hits, both in lesson 6 (see SHOULD S6-1). Passage printing of keys is a separate, larger problem (MUST).
- **Duplicates across all `js/data` (`dup.js`, `dup3.js`).** 541 distinct strings of 25 or more characters from the three lessons searched in every data file: the only hits outside the lessons are generic stems ("Select the sentence that has an error", "Choose the TWO sentences that use commas correctly", "This question has two parts"). No content duplicate. Inside the block, the same distractor sentence is used in C04 and C05 of L5 (and S04/S05) and in C04/C05 of L6; the L6 case is a giveaway (SHOULD).

### 3. Web checks (grammar and convention claims)

- Subordinating conjunctions and fragments: https://writingexplained.org/grammar-dictionary/subordinating-conjunctions ("A subordinate clause is one that cannot stand alone as a sentence"; lists after, although, because, before, if, once, since, unless, whenever, while). https://www.merriam-webster.com/dictionary/until (conjunction, "up to the time that"). https://www.merriam-webster.com/dictionary/although ("in spite of the fact that").
- Commas after introductory elements: https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html ("Use commas after introductory a) clauses, b) phrases, or c) words that come before the main clause"). https://www.grammarly.com/blog/punctuation-capitalization/commas-after-introductory-clauses/ (comma after a dependent introductory clause; "when the introductory clause is short, the comma may be omitted as a matter of style"). This is the style variance behind NOTE N6-3.
- Title capitalization: https://titlecapitalize.com/mla-title-case-rules/ (MLA: first and last word always capitalized; articles, prepositions of any length and coordinating conjunctions lowercase in the middle). Every mid-title small word in the lessons is a, an, the, and, of, in, on, at, to or for, so MLA, Chicago and AP agree on every item.
- Italics vs quotation marks: https://stlcc.edu/student-support/academic-success-and-tutoring/writing-center/writing-resources/italics-vs-quotations-marks-in-titles.aspx (books italics; short stories, short poems, songs, chapters in quotation marks). The page does not cover underlining by hand; the lesson's rule (underline when handwriting) is the standard stand-in and matches the author's WCC source.
- Official wording: `js/data/standards.js` `official` for all three rows (p. 17) matches the GUM chart in `gadoe/standards-3-5.txt` (rows at I in grade 3, C in grade 4, M in grade 5, not assessed). The items match it.

### 4. Lesson 5: "Joining ideas with because, when, after and if" (3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses)

**Verdict: REVISE.** Blind solve 30 of 30. 15 of 15 core items take the key on a phone.

**MUST**

| ID | Evidence | Fix |
|---|---|---|
| **M5-1** C03, C10, C12, S03, S10, S12 | Each dropdown fills a sentence that is already printed, correct and word for word, in the passage shown with the item (`copy.js`: filled sentence equals the passage sentence in all six). C03: passage s3 is "We waited until our teammates finished their turns." and the item asks to finish "We waited ___". The stem "Sentence 3 of the draft needs the best joining words" is also false, because the draft sentence is fine. Students can copy from the Passage tab; the item then tests reading, not joining words. Brief rule: no giveaway through passages. | Either plant the error in the draft sentence (fragment or wrong joining word, as the hot-text items do) and keep the dropdown as the repair, or drop `passages` from these items and give the sentence in the stem. Change "needs the best joining words" to a neutral stem. |
| **M5-2** C14 slot 0 | Slot 0 options: "although the day was warm" (key), "just because the day was warm", "until the day was warm". "Kim wore a coat until the day was warm" is natural English (she wore it through the cool morning), and slot 1 "and after she got too hot, she took it off" still reads. Two defensible answers; the how ("wearing a coat on a warm day is a surprise") is not the only reading. | Replace the "until" distractor with one that cannot be right in the sentence (for example "because the day was warm"), or change the stem to "Kim wore a coat even though" style content so only a surprise fits. Re-check S14 slot 0 ("Until he felt sick, Sam stayed home") the same way. |
| **M5-3** C03/C10/C12/C14 core overlap | Same frame ("Choose the words that finish sentence N of the draft", three joining-word options, hint 3 "One choice shows a surprise, but nothing here is surprising. Decide between the other two" near-identical on C03, C10, S03, S10 and S12). Jaccard 0.39 to 0.42 (C03/C10, C03/C12, C10/C12), 0.31 (C10/C14), 0.32 (C12/C14); limit 0.30. | Make one of the three single-slot items a different task (two-sentence stem, or "which joining word could replace X without changing the meaning"), and vary hint 3 so the three are not templates of each other. |

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| S5-1 C11 (and how/why) | Key sentence 7, "We cheered although our friends scored a point." The how says "cheering for a friend's point is not a surprise". The passage never says whose friends scored; if they are on the other side, although fits and the "clash" is arguable. | "We cheered although our team scored a point." (clear clash) or "although the birdie landed in bounds". |
| S5-2 S11 why | The why quotes "We felt proud although we learned the whole cheer." The passage line 7 is "Tia felt proud although she learned the whole cheer." The student sees a sentence that is not in the draft. | Quote the passage sentence. |
| S5-3 twin overlap | C10/S10 0.219 and C06/S06 0.216 / 0.213 (target 0.21; driven by the shared "sentence/line N" and "when/although" frame, tokenizer-dependent). | Rename one word in each stem or change a distractor. |
| S5-4 twin vocabulary drift | Twins use words the lesson never models: whenever, once, unless, as soon as (S01, S02, S03, S07, S14); "linking word" (S05, S11) where Teach and core say "joining word"; label "In spite of" (S02) against "A surprise" (C08); "condition" (S09 key) against "a case that may happen" (C08, Teach). A grade 3 student meets a new term in the twin that the core never taught. | Use the Teach words (because, when, while, after, before, until, if, although) and the core labels; keep "line" or "sentence" consistent. |

**NOTE**

- N5-1 C09, S09: distractors 2 to 4 are easy to dismiss ("could swap them with no change", "after may be used only at the start"). DOK3 label is generous.
- N5-2 S13 "no line with although inside can be finished": "finished" is vague for grade 3; "can be a whole sentence" is clearer and the key is unchanged.
- N5-3 C05 and S05 give hints for Part A only; Part B has no scaffold. Acceptable, but a one-line Part B hint would help.
- N5-4 P4 how: "Lee yawned ahead of bed" is awkward; P4 hint 3 "In the row about Lee yawning" fits two rows (the because row is meant).
- N5-5 C04 and C05 share the distractor sentence "I hope we play again if the sun comes out." (same set); harmless.

### 5. Lesson 6: "Commas after an opening part" (3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses)

**Verdict: REVISE.** Blind solve 30 of 30. 15 of 15 core items take the key on a phone.

**MUST**

| ID | Evidence | Fix |
|---|---|---|
| **M6-1** S13 | "Lia says, 'A comma always goes in front of since, once or while.' Which TWO sentences show she is wrong?" Key: A "We stayed inside while it stormed." and D "Tom smiled since the test was easy." But B "While the kettle whistled, Gran poured tea." and C "Once the soup boiled, Dad added salt." also have no comma in front of While or Once, and both are correct. Four sentences contradict the claim as worded; E does not contain the words. The ladder only works by reading the how ("opens or closes"). | Mirror C13: "Lia says, 'A sentence with since, once or while always needs a comma.'" Then only A and D (no comma at all) contradict her, and B, C, E each have a comma. Update h1 to match. |
| **M6-2** C03, C10, C12, S03, S10, S12 | Same defect as M5-1. C03: passage s3 "When the clock struck eight, we left the park gate." is printed correct; the stem says it "needs its comma in the right place". C10 prints p2 s9, C12 p3 s6, S03 p4 s3, S10 p5 s9, S12 p6 s6, all correct and verbatim. | As M5-1: plant the comma error in the draft sentence, or remove the passage from the item and put the sentence in the stem. |
| **M6-3** C10/C12, C03/C10, C03/C12 core overlap | C10/C12 0.370 / 0.378, C03/C10 0.303 / 0.321, C03/C12 0.294 / 0.346 (limit 0.30). Same frame: "Choose the words that finish sentence N", three punctuation variants, hint 3 "One choice ... Decide between the other two". | Give C12 a different task (for example choose where to put a comma in a two-sentence stem) and reword the C10 options, which are the weakest (the period distractor is trivial). |

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| S6-1 C04 / C05 and S04 / S05 | C04 (earlier, same set) lists "Before we crossed the street the leader raised a flag." as a distractor, and that sentence is C05's Part A key. A student who finishes C04 knows it is wrong. Same for S04 (prints "Once she reached the end she hopped down.") and S05. | Use another passage sentence in C04 and S04, for example p1 s10 or s12. |
| S6-2 S15 | Twin of C15 (evaluate Pia's claim). S15 asks "What job does the comma do?", key "It signals a short pause ... helping readers follow along." Distractors (list separator, stands for and, shows speech) are absurd, so DOK3 is overstated; and "signals a pause" is a reading heuristic, not the rule the lesson teaches (the comma marks where the opening part ends and the main idea begins). | Rewrite S15 as a claim to judge, like C15, with plausible distractors, and key it to "the comma shows where the opening part ends". |
| S6-3 short intro clauses | Keys that treat a missing comma as an error after very short clauses: P3 "While Dad cooked we set the table." (3 words), C07 row 3 "If you call me I will answer.", S07 row 3 "Since it was foggy we drove slowly.", row 1 "Once Mom unlocked the door we rushed in." (4 to 5 words). Grammarly (URL above) says a short introductory clause may omit the comma as a matter of style; Purdue and the Canadian source in the author log say a clause normally takes it. The lesson's own rule ("a clause with its own naming and telling words needs the comma") makes the keys defensible, and no other choice competes. | Lengthen those clauses to six or more words ("While Dad cooked dinner in the kitchen ...") so the key does not rest on a style choice. |

**NOTE**

- N6-1 C13 and S13 hint 2 ("check where the part that begins with when, after ... sits") is a mechanical test that finds both keys; acceptable because the opening/closing position is the lesson's rule.
- N6-2 C10 and S10: the period-ending distractor ("When the last skater finished.") is trivial next to the comma / no-comma pair; consider swapping it for a comma after "skater".
- N6-3 Teach says the comma after a short phrase is optional ("After lunch,"); no item marks a short phrase without a comma as wrong, and every short phrase in the passages has its comma. Verified across all 90 items.
- N6-4 C08 / S08 treat a comma before a closing when/if/before/after clause as wrong. That is the convention taught at this grade and all trailing clauses in the bank use those words; a comma before a closing although or while is accepted by some guides, and no item uses one.

### 6. Lesson 7: "Writing titles of books, stories, poems and songs" (3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar)

**Verdict: REVISE.** Blind solve 30 of 30. 15 of 15 core items take the key on a phone.

**MUST**

| ID | Evidence | Fix |
|---|---|---|
| **M7-1** C08, C10, C12, S08, S10, S12 | Same defect as M5-1. C08: passage p2 s8 is printed correct ("Our last song was "Turnips for the Tuba" and it was silly."); the item asks to choose the title that finishes that sentence. C10 (p2 s7), C12 (p3 s10), S08 (p5 s8), S10 (p5 s7), S12 (p6 s10) are the same: every filled sentence equals the passage sentence. | As M5-1. A natural form here: plant the title error in the draft sentence and ask for the repair. |
| **M7-2** C08/C10/C12 core overlap | C08/C10 0.333 / 0.311, C08/C12 0.345 / 0.304, C10/C12 0.345 / 0.390 (limit 0.30). Same frame (choose the title that finishes sentence N, three variants, hint 3 "One choice ... Decide between the other two"). | Make one of the three a different task (a two-slot dropdown, or a match of titles to marks); vary the stems. |
| **M7-3** C09 / C15 (and C04 / C09) | C09 and C15 ask the same question: why "and" stays lowercase in the middle of a title (C09 on a passage title, C15 on "The Goat And The Pie"). Overlap 0.319 / 0.356; C04/C09 multiset 0.309. The distractors mirror each other ("every word needs a capital", "only the first / last word"). Also, C09 (set 2) prints the rule that C13, C14 and C15 (set 3) test: its stem says "the word and has a lowercase a, but Cobwebs and Candlelight have capitals" and its key says small joining words stay lowercase. | Change C09 to a different DOK3 move (for example "which of two titles for the same book is right and why") and keep the small-word rule for C13 to C15. Remove the "and has a lowercase a" wording from the stem. |

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| S7-1 C06 line 5, S06 line 5 | The unmarked lines are "Everyone clapped along to Marimba in the Snow." and "The crowd cheered for Xylophone Sunrise." Neither sentence says the name is a song, poem or book, and "cheered for Xylophone Sunrise" could name a performer (no marks needed). The why says "the song title needs quotation marks". The second key of each pick-two item is therefore not determinable from the text. | Name the work: "clapped along to the song Marimba in the Snow", "cheered for the song Xylophone Sunrise". |
| S7-2 C13, S13 hint 2 | h2 lists "a, an, the, and, of, in, on, at, to and for" and says to check each name for them. Only the two keys contain any of those words (A, D, E in C13 have none), so h2 plus h3 ("the mushroom title has no small words") identifies both keys without reading. | Say "check the small words" without listing them, or add a distractor that contains a small word but is not a counterexample. |
| S7-3 S03 | The key `Her first story was "Harmonica Hill."` is the only choice that ends in a quotation mark; the others end in a period. A student can spot it without reading the title. | Put the title mid-sentence in S03, as in C03. |
| S7-4 S13 | "Rae claims a name can have a lowercase word only at its very end" is a claim nobody holds (the real misconception is the opposite), and its h1 gives the topic away. Key is correct but the claim is contrived. | Reuse Pat's claim from C13 with new titles, or change Rae's claim to "small words in a title always need a capital letter". |
| S7-5 S04 / S09 / S15 wording | S04 uses "name", "little linking words" and "plain" where Teach and core use "title", "small words" and "lowercase"; S09 and S15 distractors are weak or odd ("names near the close of a draft stay plain", "Fix only the second the"). | Align to Teach vocabulary; replace the weak distractors with plausible misconceptions. |

**NOTE**

- N7-1 C07 row 4 "the chapter book Penguin Express": a student could read "chapter" as a chapter title (quotation marks). Learn It models a chapter book as a whole book (Kofi), which mitigates it; consider "the novel" or "the book".
- N7-2 L7 p1 FK 4.44 and p3 4.1: under 4.5, but any edit to those passages should re-run the check. The passages are labeled "informational" but read as short narratives.
- N7-3 Title conventions: every mid-title small word is on the Teach list and is three letters or fewer, so MLA, Chicago and AP agree; every italics/underline item (C07, S07) describes the work, so no item depends on rendering.
- N7-4 P4 hint 1 "A story is a short work" tells the student to look for quotation marks; acceptable because it is a strategy, not a key.
- N7-5 Teach, Learn It and Watch Me model what the fifteen require (capitals on first and important words; lowercase small words; short works in quotation marks; whole books in italics or underlined).

### 7. Cross-lesson notes

- Learn It / Watch Me. All three lessons model what the core items ask: L5 (pick a joining word by meaning, recognize a fragment, surprise), L6 (where the comma goes, no comma before a closing part), L7 (capitals, short work vs whole book, underline by hand).
- No kindergarten-like content; names and topics are grade 3 and varied; no real child's data.
- The dropdown "copy from the passage" defect (M5-1, M6-2, M7-1) is the same pattern in 18 items (9 core, 9 twin) and needs one decision from the lead, since it recurs in every lesson of this file that uses passage dropdowns. Check the other four lessons of B8b for it.
- Author log claims I could not reproduce: twin overlap "0.194 / 0.201" for L5 (I measure 0.219 / 0.213 with digits and target sentences counted; letters-only may match), and "no item names its key": true for hints, but the passage-printing issue above was not in the author's scans.
