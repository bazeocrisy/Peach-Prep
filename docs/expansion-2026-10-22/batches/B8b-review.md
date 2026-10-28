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


---

## First review (B8b lessons 1-4)

**Reviewer:** independent content reviewer (did not author). Scope: `js/data/lessons/L-GUM5.js`, lessons 1 to 4 (capitalization in abbreviations; commas for direct address and yes/no; apostrophes in plural possessives; indefinite pronoun agreement), files as on disk at commit ba4343a. I wrote only this section. Scripts and outputs are in `scratchpad/b8brev/`.

### Verdicts

| Lesson | Verdict | MUST | SHOULD |
|---|---|---|---|
| 1. Capital letters in Mr., Dr., St. and words like American | **REVISE (CHANGES REQUIRED)** | 3 | 3 |
| 2. Commas with names and with yes and no | **REVISE (CHANGES REQUIRED)** | 1 | 3 |
| 3. Apostrophes for more than one owner | **REVISE (CHANGES REQUIRED)** | 1 | 4 |
| 4. Matching verbs to everyone, each, both and many | **REVISE (CHANGES REQUIRED)** | 1 | 5 |

Keys are sound: a blind solve agrees on 120 of 120 items and all 120 take the key with real taps on a phone. The MUSTs are (a) two dropdown distractors that are also correct (Av., Str.), and (b) same-frame dropdown items whose core-vs-core overlap is above 0.30 in every lesson. The "dropdown prints its key in the passage" defect found in lessons 5 to 7 does NOT occur in lessons 1 to 4 (see section 2).

### 1. Blind solve

- **Method.** `blind.js` loads `L-GUM5.js` in Node (stub `PP.addLesson`), resolves core `{ref}` items, and prints every passage, all 60 core items and all 60 `similar` items (15 per lesson each) with choices, options, targets, match rows and dropdown slots shuffled by a seeded generator (seed 20261027). It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception` or `like`. Hot-text targets are printed as sentence text. I saved my answers (`myans.txt`) before running `cmp.js`.
- **Result: 120 of 120 agree (100%).** Core 60 of 60, twins 60 of 60. (Two match items first showed as different only because I keyed rows by label, not by number; the answers are identical.)
- **Disclosure (not fully blind).** Before the blind print I ran a shape probe (`shapes2.js`) that printed one full JSON example of each item type. That showed the keys of seven lesson 1 items (P3, P5, C03, C04, C05, C06, C07) and of each lesson's first item. Those 7 are not blind; the other 113 are (113 of 113 agree). I opened the author log only after the answers were saved.
- **Close calls while solving:** L1 C14 slot 1 and S14 slot 1 (Ave./Av., St./Str.; see M1-1); L4 C13 (A "Everyone in the room sings" is a tempting counterexample, but "sings" fits "room" too, so the keys B and C stand); L3 S09 (the key is the only option that cites the passage, but it is clumsily worded).

### 2. Measurements

- **Browser, 390 x 844, touch** (`run390.py`, Playwright, browse-mode fixture, real taps). For each lesson I opened sets y, y2, y3; for each of the 15 core items I pressed Hint three times, answered with real taps or `select_option`, pressed Check, then took the Similar question and did the same. Result: **60 of 60 core and 60 of 60 twins show "That's right"**; the hint button read "No more hints" and was disabled after three presses on all 119 automated items; `scrollWidth` 390 everywhere; no choice, hot-text option, match button or select under 40 px or past 391 px; zero page errors. One twin (L2 S14) needed a manual run: the engine draws slot 1 as a button list because its options are long, while slot 0 is a select. I tapped it by hand and it took the key. (NOTE-2d.)
- **Passages.** 24 passages, 100 to 140 words with the `(n)` markers counted by `readability.py`, and 100 to 128 without (min: L4 p5 100, L3 p4 101, L3 p5 102). Flesch-Kincaid by `verification/readability.py`: L1 2.4 to 3.6, L2 1.6 to 2.9, L3 2.5 to 4.5 (p4 4.5, p6 4.4; author gives 4.47), L4 2.5 to 3.9. `(n)` numbering is continuous in all 24.
- **Jaccard, whole item text** (`jac.js`: prompt, stem, text, choices, slot options, rows, columns, both ebsr parts, and the sentences a hot-text item targets; lowercase tokens; the `(n)` markers inside target sentences are counted as tokens). This matches the definition used in earlier reviews.
  - **Twin x core, all 15 x 15 pairs per lesson, max set / multiset:** L1 0.214 (C12/S12) / 0.227 (C06/S06); L2 0.229 (C14/S14) / 0.211 (C06/S06); L3 0.200 / 0.212 (C12/S12); L4 0.202 / 0.214 (C06/S06). Nothing near 0.30. The pairs above 0.21 are L1 C06/S06, C11/S11, C12/S12; L2 C06/S06, C14/S14; L3 C12/S12; L4 C06/S06. The author's 0.194 to 0.205 is reproducible only when the targeted sentences are left out. With passage text added to both sides (whole text of what is on screen) the maximum rises to 0.232 (L1), 0.252 (L2), 0.223 (L3), 0.258 (L4), because the `(n)` markers and shared frame words count; still under 0.30.
  - **Core x core, item text, pairs over 0.30 (set / multiset):**
    - L1: C03/C12 0.366 / 0.309; C03/C10 0.325 / 0.314; C10/C12 0.310 / 0.278; C09/C15 0.316 / 0.291.
    - L2: C10/C12 0.455 / 0.333; C03/C12 0.429 / 0.348; C03/C10 0.405 / 0.320.
    - L3: C03/C10 0.341 / 0.333; C03/C12 0.333 / 0.328; C10/C12 0.308 / 0.327.
    - L4: C10/C12 0.438 / 0.472; C03/C10 0.412 / 0.410; C03/C12 0.412 / 0.400.
  - (With passages included, same-passage core pairs reach 0.7 to 0.87 trivially; I do not count those.)
- **Hint ladders** (read all 120 items). Hint 3 names at most one wrong choice on every item and every slot. After hints 1 to 3 at least two choices stay live on every item and slot (the fewest is 2: all dropdowns with three options). No hint 1 or 2 quotes a key. Exceptions listed as SHOULD/NOTE below.
- **Longest-key** (`longest.js`: mc, ms, ebsr parts, every dropdown slot, hot-text options): no key is uniquely longest and no choose-two item has both keys longer than every distractor. Ties only, on short options.
- **Giveaways** (`leak.js`, `leak2.js`: each key against the stems, choices, hints, how, passages, Teach and Watch Me of every other item, Together and Test included; plus `dd.js`: every dropdown and mc whose passage is shown, filled sentence against passage text, case-sensitive).
  - **Dropdown-prints-key pattern: none in lessons 1 to 4.** In every passage-based dropdown (L1 C03, C10, C12, S03, S10, S12; L2 C03, C10, C12, S03, S10, S12; L3 C03, C10, C12, S03, S10, S12; L4 C03, C10, C12, S03, S10, S12) the passage prints the sentence with the error, not the repaired sentence. The only key words found in a passage are L4 `shake` and `wave` (C12, S12), which appear in other, correct sentences and never complete the keyed sentence.
  - No core item prints another core item's key in its stem or hints within a set. Cross-set and Test: see S3-2 (L3) and the notes.
  - No core key appears in Teach or Watch Me (the only hits are single words such as Dr., Ms., St., "Yes,", which are the taught short forms and pronouns).
- **Duplicates across all `js/data`** (`dup.js`: 6-gram scan of every new passage sentence, prompt, option and row against every other file in `js/data`, and of lessons 5 to 7; `dup2.js`: exact normalized sentence duplicates inside lessons 1 to 4). Only generic frame prompts repeat ("This question has two parts. Answer Part A, then Part B."; "Choose the TWO sentences that use capital letters correctly." in L-GUM2; "Sentence 2 / Sentence 10 of the draft is missing a comma. Choose the words that fix it." in L-GUM3; "Choose the TWO sentences in which the verb matches its pronoun." in L-GC2 and L-GUM2). No passage sentence, distractor or key sentence is duplicated elsewhere. The only repeated strings inside the four lessons are the ebsr choices that quote passage sentences.
- **Official wording** (`official` in `js/data/standards.js`, p. 16 to 17): L1 "Recognize and use conventional capitalization in abbreviations, proper adjectives, and formal titles." L2 "Use commas to indicate direct address and to set off the words yes and no." L3 "Use apostrophes to form plural possessive nouns." L4 "Use indefinite pronouns, ensuring correct agreement." All four are GUM Introduce (I) at grade 3. Each core fifteen stays inside its wording. Points: choose-two (ms, hot-text pick 2) = 2; ebsr = 2; two-slot dropdowns = 2; match = 2; others 1. DOK: each lesson 2 / 10 / 3 (DOK 1 / 2 / 3), at most two DOK 1.

### 3. Web checks

| Claim | Source | Result |
|---|---|---|
| Name used in direct address: one comma after at the start, before at the end, both sides in the middle | https://our-languages.canada.ca/en/writing-tips-plus/commas-with-direct-address | Confirmed, with the same three examples (L2 teach, C08, C09, S08). |
| Plural ending in s gets only an apostrophe; irregular plurals (children, women, mice) get 's | https://www.dummies.com/article/academics-the-arts/language-language-arts/grammar-vocabulary/how-to-form-plural-possessives-in-english-190508 | Confirmed (L3 all items; mice's S14; womens' and mens' are errors). |
| Everyone, everybody, nobody, somebody singular; both, many plural | https://www.continuingstudies.uvic.ca/elc/studyzone/410/grammar/410-indefinite-pronouns-agreement | Confirmed for all but "each", which the page does not list; "each" singular is standard and the Teach is right. |
| Titles capitalize before a name and stay lowercase standing alone; proper adjectives capitalized | https://www.grammarbook.com/blog/?p=611 | Title rule confirmed (also notes a title used as direct address is capitalized; no item uses one). Proper adjectives not covered by that page; Peruvian, Jamaican, Haitian etc. are standard proper adjectives. |
| "Ave." and "Av." as abbreviations of avenue | https://www.dictionary.com/browse/Av (Av.: "abbreviation: avenue"); https://pe.usps.com/text/pub28/28apc_002.htm (AVENUE: AV, AVE, AVEN, ...; STREET: ST, STR, STRT); https://www.wiktionary.com/wiki/av. | **Av. and Str. are recognized variants.** The author's "Av. is not the standard short form" (L1 C14 why) is not safe, see M1-1. |
| M-W entry for "ave" | https://www.merriam-webster.com/dictionary/ave | Lists only "avenue"; no variant forms shown. |

### 4. Lesson 1: "Capital letters in Mr., Dr., St. and words like American" (3.L.GC.1:I:use-conventional-capitalization-in-abbreviations)

**Verdict: REVISE.** Blind solve 30 of 30 (7 core items not blind, see section 1). 15 of 15 core items take the key on a phone.

**MUST**

| ID | Evidence | Fix |
|---|---|---|
| **M1-1** C14 slot 1, S14 slot 1 | C14 asks for the "right capital letters" for `90 Palm {1}` with options `ave. / Av. / Ave.`; S14 `25 Maple {1}` with `st. / Str. / St.`. `Av.` has a capital and a period and is a listed abbreviation of avenue (dictionary.com: "abbreviation: avenue"; USPS Pub. 28 lists AV beside AVE); `Str.` is a USPS variant for street. So each slot has two defensible keys, and the why ("Av. are not the standard short forms") is a spelling-of-the-abbreviation claim, not the capitalization skill. Also `Mz.` (S14 slot 0) is not a title anyone teaches, so it is an absurd distractor. | Replace `Av.` with a capitalization error such as `AVE.` or `aVe.`, `Str.` with `ST.`/`sT.`, and `Mz.` with `MS.` or `Mss.`; reword the why to talk about capitals. |
| **M1-2** C03 / C10 / C12 (and S03 / S10 / S12) | Same frame and same option triple (two wrong, one right), prompts "Sentence N of the draft has a ... written wrongly. Choose the word(s) that fix it.", hint 3 "Decide between the other two." in all six. Core x core overlap C03/C12 0.366 / 0.309, C03/C10 0.325 / 0.314, C10/C12 0.310 (limit 0.30). The keys differ (title, proper adjective, day and month) so the logic is not identical, but three one-blank dropdowns with the same frame in one fifteen breaches §4.3 rule 6 ("no two sentences share a frame"). | Turn one of the three into a different task (for example a two-slot dropdown on the same sentence, or an ms), and vary the stems and hint 3 wording. |
| **M1-3** C09 / C15 | Both ask a "why or is X right" question about capitalizing a title or proper adjective, four long options, mirrored distractors; overlap 0.316 set / 0.291 multiset (limit 0.30). | Change C15's distractor wording and stem frame ("Ravi wrote..., He says ... Is Ravi right?") or make C15 a hot-text or ms. |

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| S1-1 Teach | Teach lists St., Rd., Blvd. but never Ave., yet C08 (key row `Oak Ave.`), C14 (key `Ave.`), S14 and the passages use it. Learn It / Watch Me also never show it. | Add "Pine Ave. for Pine Avenue" to Teach point 2. |
| S1-2 twins above 0.21 | C12/S12 0.214 set, C06/S06 0.227 multiset, C11/S11 0.200 / 0.225 (item text with target sentences). | Vary S06, S11, S12 stems and sentences. |
| S1-3 C13 / S13 hint 1 | "A title keeps its capital in one kind of sentence, not another. Find where it stays small." names the contrast the key shows; with h3 only two sentences remain. Acceptable as strategy but close to narrowing. | Use "Dan says always. Look for one sentence that proves him wrong." |

**NOTE**

- N1-1 C13 (set 3) prints `Principal Hale waved from the stage.`, the key of C03 (set 1) as a distractor. It is a later item repeating an earlier key, not a giveaway forward.
- N1-2 C08 and S08 hint 3 gives one row of the match away ("Wed. and Dec. ... already have capitals"). Allowed (completes one slot) but it is half the item.
- N1-3 S09 option stems are four near-identical pairs; the key is not detectable by length.
- N1-4 Names, settings and topics are grade 3 and varied (book fair, soccer, swim meet); no real child's data; no kindergarten items (C04 and C10 are DOK 1 but need the lesson's rule).

### 5. Lesson 2: "Commas with names and with yes and no" (3.L.GC.1:I:use-commas-for-direct-address-and-to-set-off-yes)

**Verdict: REVISE.** Blind solve 30 of 30. 15 of 15 core items take the key on a phone.

**MUST**

| ID | Evidence | Fix |
|---|---|---|
| **M2-1** C10 / C12 (and C03; S10 / S12 with S03) | C10 and C12 have the **identical prompt string** ("Sentence 10 of the draft is missing a comma. Choose the words that fix it.", on passage p2 and p3), the same key logic (a name at the end of a line needs a comma before it: `Thank you, Nina.` / `middle, Lee.`), and near-identical hint ladders (h1 "Ask who ... is talking to"; h2 "Say each choice ... listen for the pause"; h3 "One choice puts the comma ... Decide between the other two"). C03 shares the same prompt frame with "Sentence 2". Overlap C10/C12 0.455 set / 0.333 multiset, C03/C12 0.429 / 0.348, C03/C10 0.405 / 0.320 (limit 0.30). This is the "differs only by names" case of plan §6. The S-twins repeat the same trio. | Make C12 a different task (name in the middle with two commas, or a two-slot dropdown), vary the prompts, and rewrite hints 2 and 3 for C12; do the same for S12. |

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| S2-1 C13, S13 hint 1 | C13 h1 "Look for sentences where a name has no comma next to it and the sentence is still right." The only two sentences with a name and no comma (B, E) are the keys, so h1 alone finds both. S13 h1 is the same. | State the strategy without the visible feature: "Kai says always. Find a sentence where the name only tells about someone." (and add a distractor with a name and no comma that is wrong). |
| S2-2 twins above 0.21 | C14/S14 0.229 set, C06/S06 0.211 / 0.211. | Vary the S14 wording and S06 sentences. |
| S2-3 C15 / S15 | Distractor D of C15 ("only when it is the very last word ... never first") and S15 D ("Commas are saved for the reply yes ... no gets none") are not misconceptions a child holds; with A/B stated as "always", the item is a spot-the-extreme item. | Replace D with "Yes needs a comma only when a name follows it." |

**NOTE**

- N2-1 Watch Me 3 ("Please wait here Dan until I come back") is the frame of C13 option C ("Please wait here, Tim, and sit."). Not a key, but nearly a copy.
- N2-2 p6 s4 ("Luis: Zoe could you steady the paper?") and p4 s7 are planted errors; p6 s4 is used by no item. Fine in a draft but consider using it.
- N2-3 S14 slot 1 is drawn by the engine as a list of buttons while slot 0 is a select (option length), a mixed layout; it works by tap.
- N2-4 C05 Part B option A ("A comma goes before the word can when a sentence asks for help") is an invented rule; acceptable as a distractor.
- N2-5 Teach, Learn It and Watch Me model what the fifteen require (name first, last, middle; yes/no starts an answer; telling ABOUT a person means no comma).

### 6. Lesson 3: "Apostrophes for more than one owner" (3.L.GC.1:I:use-apostrophes-to-form-plural-possessive-nouns)

**Verdict: REVISE.** Blind solve 30 of 30. 15 of 15 core items take the key on a phone.

**MUST**

| ID | Evidence | Fix |
|---|---|---|
| **M3-1** C03 / C10 / C12 (and S03 / S10 / S12) | Same frame and same option triple pattern (`x' / x's / x`), prompts "Sentence N of the draft needs an apostrophe fix. The ... belong to ...". Overlap C03/C10 0.341 / 0.333, C03/C12 0.333 / 0.328, C10/C12 0.308 / 0.327 (limit 0.30). Hint 3 is word for word the same shape in all six ("One choice has no apostrophe ... Decide between the other two"). C03 and C10 are the same key logic (plural ending in s, add only an apostrophe: drummers', janitors'). | Change C10 to a different task or key (for example an irregular plural in a dropdown with two slots) and vary the stems and hint 3. |

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| S3-1 C13, S13 hint 1 | Same as S2-1: "Look for sentences that have a plural noun with no apostrophe and are still right" points at A and D, the only two no-apostrophe sentences. | As S2-1. |
| S3-2 giveaway into the check and into S12 | The check item T1 (`the women's hats`) and T2 (`men's`) have keys that core items print first: C07 key `The women's club ...`, C14 key `women's`, C12 key `The men's` and C06 how (`men's jackets`); the twin S12 key `The women's` also appears in C07 and C13. A child who has done the core set has already seen the exact forms the check asks for. | Use different irregular plurals in core (children, geese, people-with-apostrophe), or accept and note. |
| S3-3 twin wording | S01 stem says "Hide the mark and the s after it in every row"; for `the pilots' caps` there is no s after the mark, so "the s after it" can be read as the s of caps. The twins also say "mark" where Teach and core say "apostrophe". | Say "Cover the apostrophe (and the s after it, if there is one)" and use the word apostrophe. |
| S3-4 S09 | The key ("Students have the best scores in line 8, yet archers have nothing in line 7.") is the only option that cites the passage but is clumsy ("have nothing" = own nothing); the distractors are throwaway ("who is a grown-up"). | Rewrite the key as "Students' shows that the scores belong to the students; archers only names more than one person." |

**NOTE**

- N3-1 p4 FK 4.5 (4.47 by the author's count), p6 4.4; any edit must re-run `readability.py`.
- N3-2 Twin x core multiset C12/S12 0.212 and C06/S11 (with passages) 0.223; slightly over 0.21.
- N3-3 S14 key `mice's` is correct (irregular plural) and grade-3-reachable via Teach (geese's).
- N3-4 S10 stem adds a story about a white van that carries bows and targets, not in the passage; harmless.
- N3-5 Teach, Learn It and Watch Me model what the fifteen require; Watch Me uses teachers' and children's only (not a core key).

### 7. Lesson 4: "Matching verbs to everyone, each, both and many" (3.L.GC.1:I:use-indefinite-pronouns-with-correct-agreement)

**Verdict: REVISE.** Blind solve 30 of 30. 15 of 15 core items take the key on a phone.

**MUST**

| ID | Evidence | Fix |
|---|---|---|
| **M4-1** C03 / C10 / C12 (and S03 / S10 / S12) | Same frame ("Sentence N of the draft needs a fix. Choose the word that makes it correct."), same triple pattern (`base / s-form / -ing`), and **identical hint 3 on all six** ("One choice ends in ing and is not a whole verb here. Decide between the other two."), identical h1/h2 shape. Overlap C10/C12 0.438 / 0.472, C03/C10 0.412 / 0.410, C03/C12 0.412 / 0.400 (limit 0.30; the highest of the four lessons). C14 and S14 reuse the same triple in two slots. Eight dropdown items share one key rule and one distractor design. | Make C12 a different task (a two-slot dropdown or an ms on the same passage); give the triples different distractor shapes (for example `is / are / be` as in the Together items); rewrite the hint 3s so they differ. |

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| S4-1 the "-ing" distractor | In all eight dropdowns the third option (`bringing`, `clapping`, `shaking`, `forgetting`, `cheering`, `waving`, `keeping`, `pecking`) cannot complete the sentence, so the item is a 50/50 guess from the start, and hint 3 reveals that. | Replace it with a real wrong-agreement form (`brings` in a plural sentence is already there) or a tense error (`brought`). |
| S4-2 S13 | Lena's claim names "both" and "many"; only two lines contain those words (the keys), so the item is solvable by scanning for the words. DOK 3 is overstated; the claim also reverses the truth in a way no child holds. | Put "both" or "many" in a distractor with an s verb, or reword the claim ("a verb next to a plural noun is plural"). |
| S4-3 S15 | Distractors A ("Verbs near line ends never change") and D (`was cooling`, "suits plurals", which is false) are not plausible; key reads "Pair means two pies". | Write D as "No. Both is plural, so the verb needs was cooling" or drop it for the "pair is one" misconception stated plainly. |
| S4-4 passage p6 s6 | "Somebody make our sign for friend with two hands." is awkward beyond the planted error ("sign for friend" with no quotation marks or "the word"). | "Somebody make the sign for the word friend with two hands." |
| S4-5 twins above 0.21 | C06/S06 multiset 0.214 (with passages 0.253); others under 0.21. | Vary S06 stem wording. |

**NOTE**

- N4-1 C10 key `claps` and C11 how's `wave` appear in twin S11 and S12 hints/how respectively; these are twin items shown after a reveal, so low risk.
- N4-2 Together P2 (legacy) keeps the distractor "Each of the boys have a library card"; acceptable as legacy, and the lesson never marks "each of + plural + plural verb" as an error in a new item.
- N4-3 C13: A ("Everyone in the room sings") agrees with both the pronoun and "room", so it does not disprove Pat; B and C are the only keys.
- N4-4 Teach, Learn It and Watch Me model what the fifteen require (singular pronoun with s verb, plural both/many, cover "of the ..." phrase).

### 8. Cross-lesson notes

- The lessons 5 to 7 defect "dropdown prints its key in the passage" is **absent** in lessons 1 to 4 (checked by script for every passage-based dropdown and mc, core and twin, case-sensitive).
- The same-frame dropdown triplet (C03 / C10 / C12 and S03 / S10 / S12) is in all four lessons and exceeds 0.30 in all four; it needs one decision for the whole file (one structural fix applied lesson by lesson).
- The author log's "tc max 0.194 to 0.205" is reproducible only without target sentences; the log's "no item names its key" is true for hints, stems and Teach in lessons 1 to 4.
- None of the sections is marked ACCEPTED. Re-review after revision.

## Second review (B8b lessons 1-4)

**Reviewer:** independent content reviewer (did not author). Scope: `js/data/lessons/L-GUM5.js`, lessons 1 to 4, files as on disk (branch `content/standards-practice`, commit 49e4e0f). I wrote only this section. Scripts and outputs: `scratchpad/b8b2r/` (`blind.js`, `myans.json`, `cmp2.js`, `jac.js`, `trip.js`, `early.js`, `fill.js`, `run390.py`, `run390.txt`). No lesson was edited and no git command was run.

### Verdicts

| Lesson | Verdict | MUST | SHOULD |
|---|---|---|---|
| 1. Capital letters in Mr., Dr., St. and words like American | **ACCEPT** (with SHOULDs) | 0 | 1 |
| 2. Commas with names and with yes and no | **ACCEPT** | 0 | 0 |
| 3. Apostrophes for more than one owner | **REVISE** | 0 | 5 |
| 4. Matching verbs to everyone, each, both and many | **ACCEPT** (with SHOULDs) | 0 | 2 |

All seven first-review MUSTs for these lessons (Av./Str., the C03/C10/C12 triplets in four lessons, L1 C09/C15) are fixed on disk and re-measured. L3 is REVISE only because two first-review SHOULDs are still open (S13 hint 1, identical hint 3 on C10/C12) and the C10/C14 rewrites introduced earlier-key prints. Nothing here is a wrong key. Per the brief I have not marked anything ACCEPTED in the status table; "ACCEPT" is my recommendation to the lead.

### 1. Blind solve

- **Method.** New `blind.js` (fresh seed 7711 + 131 x lesson) loads `L-GUM5.js` in Node, resolves core `{ref}`s, and prints the 24 passages (no figures exist), all 60 core and all 60 twin items with choices, options, rows, columns, dropdown slots shuffled. It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `like`. Hot-text targets print as ids (`p2:1:3` = paragraph 1, sentence 3). I wrote my answers to `myans.json` and only then ran `cmp2.js`, which prints the keys.
- **Result: 120 of 120 agree (100%).** Core 60/60, twins 60/60. The comparison script first reported 112/120; the eight "misses" were my answer format only (a line number instead of the line text on S1 hot-text options and two of my ms answers abbreviated); each matches the key.
- **Fully blind: yes.** I did not open the lesson source, the first-review answer file, or the author log before saving answers. I had read the first-review text (which contains no answer keys) before solving. A key listing was printed by an earlier helper script only after `myans.json` was saved.
- **Close calls:** L1 C09 versus its option C ("Mayor always needs a capital..."): key is the only one that conditions on the name. L2 C15, options A and D both say "only when ..."; the key is the one that is true (yes needs a comma when it starts a reply, with or without a name). L4 C13 and S13: A/D and C/D are the only counterexamples because the keyed verb fits the pronoun but not the nearest noun.

### 2. Verification of the first-review MUST/SHOULD items (re-measured on disk)

| Item | Result |
|---|---|
| Same-frame dropdown triplets C03/C10/C12, core vs core (item text, set / multiset) | **Fixed.** L1 C03/C10 0.118/0.140, C03/C12 0.086/0.063, C10/C12 0.118/0.091. L2 0.083/0.063, 0.172/0.128, 0.167/0.114. L3 0.160/0.167, 0.217/0.246, 0.150/0.163. L4 0.132/0.159, 0.116/0.146, 0.147/0.211. All under 0.30 (before: 0.31 to 0.47). |
| Same triplets, twins S03/S10/S12 | **Fixed.** Maximum 0.179 set (L3 S03/S10), 0.197 multiset (L3 S03/S10). L1 0.111, L2 0.125, L4 0.125. |
| Hint 3 of the triplets differs | Fixed in L1, L2, L4. **L3: C10 and C12 hint 3 are word for word the same** ("One choice has no apostrophe at all. Decide between the other two."), and S12 repeats it with "mark". See S3-A. |
| L1 `Av.` and `Str.` removed as distractors | **Fixed.** C14 now `dr./Doc./Dr.` and `rd./rD./Rd.`; S14 `Ms./ms./mS.` and `st./sT./St.`. `Mz.` is gone. One residual: `Doc.` (S1-A). |
| L1 Teach lists `Ave.` | **Fixed** (Teach point 2: "Pine Ave. for Pine Avenue"). |
| L2 C13/S13 hint 1 | **Fixed.** C13 h1 "Kai says a name needs a comma every time. Find sentences that prove him wrong."; S13 likewise. Both now carry a wrong no-comma distractor (`Tim carry the box...`, `Dan look at this seashell.`), so scanning for "name with no comma" no longer finds the keys. |
| L3 C13 hint 1 | **Fixed** (also has the wrong distractor `The kittens food...`). |
| **L3 S13 hint 1** | **NOT fixed.** h1 is still "Look for sentences that have such a noun with no apostrophe and are still right." The only two sentences with no apostrophe are the two keys, and S13 has no wrong no-apostrophe distractor. See S3-B. |
| L3 irregular plurals vs tests T1/T2 | **Fixed.** `women`, `woman`, `men's`, `mens`, `puppies` occur in no core item, twin, passage, Teach or Learn It. Core and twins now use children, people, mice, geese. (Side effects: S3-C, S3-D.) |
| L4 distractors | **Fixed.** All eight dropdowns replaced the -ing form with a wrong-agreement helper form (`have brought`, `do clap`, `is shaking`, `have kept`, `is watching`, `have forgotten`, `are cheering`, `is waving`, `is pecking`, `are picking`). Hint 3 names one wrong option each time. |
| L4 S13 | **Fixed.** Claim is now "A verb copies whichever noun sits closest to it". Distractors `Many of those pies cool...` and `Both of those dancers wear...` contain both/many with a correct verb, so the words no longer find the keys. |
| L4 S15, S09, p6 s6 | Fixed (D now "both is plural and the verb should be was cooling"; passage reads "Somebody make the sign for the word friend with two hands."). |
| Twin vs core, first-review pairs over 0.21 | **Mostly fixed.** Item-only maxima now: L1 0.190 set / 0.206 multiset (C11/S11), L2 0.197 / 0.204, L3 0.212 / 0.204, L4 0.202 / 0.214. Two pairs remain just over 0.21, see S3-E and S4-A. |

### 3. Measurements

- **Browser, 390 x 844, touch** (`run390.py`, Playwright, browse-mode fixture on port 8831, real taps for choices, hot-text, match buttons; `select_option` for `<select>`). For lessons 1 to 4 I opened sets y, y2, y3; per core item I pressed Give me a hint three times, answered with the key, pressed Check my answer, then took Try a similar question and did the same. **120 of 120 show "That's right"** (60 core + 60 twin; the 61st "twin" count in the grep is the word "twins"). The hint button read "No more hints" and was disabled after three presses on every item. `scrollWidth` 390 everywhere. No choice, hot-text option, match button or select under 40 px or past 391 px. Zero page errors, 0 problems logged.
- **Dropdowns as buttons (options over 28 characters).** None of the 32 dropdowns (16 core, 16 twin) has a slot with an option over 28 characters, so all use `<select>`. The longest are L2 C14 slot 0 (`Leo can, you carry this box?`) at exactly 28, and L2 S14 at 22. L2 C14 sits on the boundary; adding one character would switch it to a button list (which works, as the first review showed for the earlier S14). No manual run was needed.
- **Passages.** 24 passages, 111 to 140 words with `(n)` markers and **100 to 128 without** (minimum L4 p5 and L3 p4 at 100 and 101). FK by `verification/readability.py`: L1 2.4 to 3.6, L2 1.6 to 2.9, L3 2.6 to 4.5 (p4 4.5 and p6 4.4; the script does not flag it, so 4.5 or below), L4 2.5 to 3.9. `(n)` numbering continuous. No web URLs anywhere in `L-GUM5.js`.
- **Jaccard, whole item text** (prompt, stem, text, choices, slot options, rows, columns, both ebsr parts, and the sentences a hot-text item targets; `(n)` markers counted as tokens).
  - **Twin x core, all 225 pairs per lesson, maxima set / multiset:** L1 0.190 (C05/S09) / 0.206 (C11/S11); L2 0.197 (C07/S07) / 0.204 (C15/S15); L3 **0.212 (C09/S09)** / 0.204 (C10/S12); L4 0.202 (C11/S11) / **0.214 (C06/S06)**. Over 0.21 by either measure: **L3 C09/S09 0.212 set (0.163 multiset)** and **L4 C06/S06 0.214 multiset (0.200 set)**; nothing else. The author reports 0.207 for L3 (set); I measure 0.212, a 0.005 difference from token handling. With the passage text on screen added to both sides the maxima are L1 0.214/0.221, L2 0.250/0.228, L3 0.237/0.220, L4 0.258/0.253, all under 0.30 and not the bar.
  - **Core x core (item text), maximum per lesson, set / multiset:** L1 0.215 (C09/C15) / 0.205; L2 0.239 (C06/C11) / 0.213; L3 0.278 (C12/C14) / 0.275; L4 0.256 (C09/C15) / **0.295 (C06/C11)**. All under 0.30. The author's figures (0.215, 0.250, 0.275, 0.295) are reproduced within 0.011.
- **Hint ladders** (read all 120 items, h1 to h3 and how). Hint 3 names at most one wrong choice on every item and every slot. After hints 1 to 3 at least two choices stay live on every item (the fewest is two: three-option dropdowns). No hint 1 or 2 quotes a key. Two weak spots: L2 C12/S12 (NOTE N2-A) and L3 S13 h1 (S3-B).
- **Longest-key** (mc, ms, ebsr parts A and B, every dropdown slot, hot-text options): no key is uniquely longest; no choose-two item has both keys longer than every distractor. Ties only (`longest.js` plus my second script).
- **Giveaways.**
  - **Dropdown or mc whose filled sentence appears correct in the passage: none** (`fill.js`, case-sensitive: for every dropdown the keyed sentence is not in the passage; the passage holds the wrong version, and for 20 of the 32 dropdowns that wrong version equals one of the wrong options, which is the planted error). The only key-word hits are L4 `shake` (inside the passage's `shakes`) and `wave` (L4 p6 s8 "Both of us wave when class begins", a correct sentence that is not the filled sentence). No giveaway.
  - **Key printed earlier in the core order (`early.js`: each key against the visible text of every earlier core item, word-bounded):** only two hits, both L3 (S3-C). L1, L2, L4 clean.
  - Key against Teach / Learn It: only the taught short forms and pronouns (`Dr.`, `Rd.`, `Ms.`, `St.`, `Yes,`), which is the lesson content; unchanged from the first review.
  - L1 C13 still prints `Principal Hale waved from the stage.`, which is C03's key, as a later distractor (NOTE, unchanged, later item only).
- **Duplicates across all `js/data`** (`dup2.js` plus the first-review 6-gram scan, unchanged files): no passage sentence, key sentence or distractor repeats elsewhere; repeats are only the ebsr choices that quote passage sentences, and the four-way mc option sets (S09 L1, C04 L2, S04 L2) that differ by one mark by design.
- **Facts.** Reused the first-review sources, all still accurate for the final text: our-languages.canada.ca (direct address commas), dummies.com plural possessives (irregular plurals take 's; mice's, children's, people's correct), continuingstudies.uvic.ca indefinite pronouns (everyone/nobody/somebody singular, both/many plural), grammarbook.com blog 611 (titles capitalized before a name, lower case alone), dictionary.com/browse/Av and pe.usps.com Pub. 28 (Av., Str. are listed variants, which is why the earlier distractors were removed). New check: `Doc.` is a clipping listed by dictionary.com under "doc" as informal; I did not find a source calling `Doc.` a standard abbreviation of the title (search was inconclusive), so it is a defensible distractor, but see S1-A.
- **Standards, points, DOK.** Official wording unchanged and each core fifteen stays inside it (L1 abbreviations, proper adjectives, formal titles; L2 direct address, yes and no; L3 plural possessive apostrophes; L4 indefinite pronoun agreement; all GUM Introduce). Points: ms, ebsr, match, two-slot dropdowns and two-answer hot-text = 2, others 1; all 120 correct. DOK per lesson 2 / 10 / 3 (DOK 1 / 2 / 3). Core point totals per set 7, 8, 7 (L2 8, 8, 7).

### 4. Lesson 1: "Capital letters in Mr., Dr., St. and words like American"

**Verdict: ACCEPT.** Blind 30/30. 30/30 take the key on a phone. M1-1, M1-2, M1-3, S1-1, S1-2, S1-3 all fixed.

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| **S1-A** C14 slot 0 `Doc.` | The item says "Choose the words that give each blank the right capital letters". `Doc.` has a capital and a period, so on the stem's own terms it is not wrong; it is wrong only as a spelling of the title (hint 3 says "Doc. is a nickname"). This is the same kind of flaw as the removed `Av.`, much weaker (a clipping is not a formal short form), but a child who knows "Doc" can defend it. | Replace with a capitalization error: `DR.` or `dR.` (as S14 now does with `mS.`/`sT.`), and reword hint 3 to "One choice has a capital letter in the wrong place." |

**NOTE**

- N1-A Hint 1 of C03 states the rule in the key's terms ("A title that comes right before a person's name starts with a capital letter"). It does not narrow the three options (two are wrong in different ways), so I keep it as a NOTE.
- N1-B C08 and S08 hint 3 gives one row away ("Wed. and Dec. ... already have capitals"); allowed (completes one slot), unchanged.
- N1-C C13 distractor A repeats C03's key; later item only.
- N1-D Names, settings, topics are grade 3 and varied; no real child's data. C04 and C10 are DOK 1 but need the lesson's rule.
- N1-E Teach, Learn It and Watch Me model all three skills (title before a name and standing alone, short forms of days/months/streets including Ave., proper adjectives) that the fifteen require.

### 5. Lesson 2: "Commas with names and with yes and no"

**Verdict: ACCEPT.** Blind 30/30. 30/30 take the key on a phone. M2-1, S2-1, S2-2, S2-3 fixed (C12 is now a name-in-the-middle two-comma item, C15 D is "Yes needs a comma only when a name follows it", C13/S13 have wrong no-comma distractors, twin maxima 0.197/0.204).

**NOTE**

- N2-A C12 and S12: the distractor `fern; Lee;` / `cranes; Luis;` (semicolons) is not an error a grade 3 child makes. After hint 3 removes `fern, Lee` the two live options are the key and the semicolon version, so the item is effectively decided by hint 3. The rule of at least two live choices is met on paper. Consider `fern Lee,` as the third option.
- N2-B L2 C14 slot 0 option `Leo can, you carry this box?` is exactly 28 characters, the last length drawn as a `<select>`. A later edit that lengthens it silently changes the layout to a button list (which works).
- N2-C C05 Part B option B ("A comma goes before the word can when a sentence asks for help") is an invented rule; acceptable as a distractor.
- N2-D Passage p6 s4 ("Luis: Zoe could you steady the paper?") and p4 s7 are planted errors used only if an item targets them; harmless.
- N2-E Teach, Learn It and Watch Me model name first, last, middle; yes/no starting an answer; telling ABOUT a person means no comma.

### 6. Lesson 3: "Apostrophes for more than one owner"

**Verdict: REVISE (no MUST).** Blind 30/30. 30/30 take the key on a phone. Fixed: M3-1 triplet (0.150 to 0.246), S3-2 tests T1/T2, S3-3 S01 wording, S3-4 S09 key, C13 hint 1. Open or new:

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| **S3-A** C10 and C12 hint 3 identical; C10 and C12 are one task | C10 h3 and C12 h3 are the same string, "One choice has no apostrophe at all. Decide between the other two." (S12 repeats it with "mark".) The first review (M3-1) asked to vary hint 3. Moreover C10 (`children's / childrens' / childrens`) and C12 (`The people's / The peoples' / The peoples`) now have the same task (irregular plural, add 's), the same distractor shape and the same h1/h2 ("ask whether ... ends in s ... where the apostrophe sits"); they differ only by the noun. Overlap is low (0.150/0.163) but the items are one skill in the same frame. | Rewrite C12's hint 3 (and S12's), and make C12 a different task, for example a two-slot dropdown on `The people's faces ... the children's table`, or move the irregular plural into the sentence-fix frame used for C03. |
| **S3-B** S13 hint 1 | h1 is "Lena says a plural noun that ends in s needs an apostrophe each time. Look for sentences that have such a noun with no apostrophe and are still right." The only two sentences with no apostrophe (`Our neighbors planted...`, `Two sparrows sat...`) are the keys, so h1 alone finds both. C13 was fixed (it has `The kittens food...` as a wrong no-apostrophe sentence), S13 was not; the author log says the review fixes were applied. | Add a wrong no-apostrophe sentence to S13 (for example `The sparrows nest was under the roof.` in place of `The children's yard...`) and use h1 "Lena says always. Find sentences that prove her wrong." |
| **S3-C** keys printed earlier in the core order | `early.js`: **C10 key `children's`** appears in set 1 item P4 (row `the children's songs`) before C10 in set 2; **C14 slot 1 key `mice's`** appears in set 2 C07 (key sentence `The mice's nest...`) and C08 (row `mice, when several mice share the nest`) before C14 in set 3. C10 also repeats the exact option triple and key of Together P2 slot 1 (`childrens' / children's / childrens`). The other options (`childrens`, `mices`) are non-words, so recall of the printed form decides these two items. | Either change the noun in P4 row 3 and in C07/C08 (not women/men, which T1/T2 use), or change C10's and C14's nouns so the key form is not printed earlier. At minimum change P4 row 3 and C07's key sentence. |
| **S3-D** S12 repeats C10's noun | S12 (`The childrens' / The children's / The childrens`, like C12) uses `children's`, the key of core C10. The twin of the people item is thus the children item, and a child who does C10, then C12, then its twin sees the same word and triple twice more. | Give S12 a different irregular plural from C10/C12 (not women/men/children/people/mice/geese, or accept geese since Teach uses it). |
| **S3-E** C09/S09 over the 0.21 bar | Item-only 0.212 set (0.163 multiset); author reports 0.207. Both items ask "why does one word have an apostrophe and the other not" with a mirrored option set (key; "every plural needs one"; "later in the draft"; "wrong ... singular only"). | Vary S09's option wording and stem. A SHOULD at this size. |

**NOTE**

- N3-A Teach says "A few plurals do not end in s, like geese", but six of the fifteen core items (P5, C07, C08, C10, C12, C14) use children, mice or people. The rule transfers, and Learn It models geese, but one extra example (children's, people's, mice's) in Teach would match what the core asks. Teach prints `geese's pond`, the same noun phrase as the C08 row `geese, when many geese own the pond`.
- N3-B p4 FK is 4.5 (author 4.47) and p6 4.4; any edit must re-run `verification/readability.py`.
- N3-C S10 adds a story detail (white van) not in the passage; harmless. S14 `mice's` and `people's` are reachable via Teach/Learn It's geese rule.
- N3-D C14 and S14 pair a regular and an irregular plural in one sentence; the hint 3 leaves two live options in each blank.

### 7. Lesson 4: "Matching verbs to everyone, each, both and many"

**Verdict: ACCEPT.** Blind 30/30. 30/30 take the key on a phone. M4-1, S4-1, S4-2, S4-3, S4-4 fixed. The triplet's hint 3s differ (`The choice with have goes with plural words`; `Do goes with more than one, so skip that choice`; `One choice has is, which goes with one`) and the third option is now a believable wrong-agreement form.

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| **S4-A** C06/S06 twin overlap 0.214 multiset | Item-only 0.200 set / 0.214 multiset (unchanged from the first review, whose S4-5 asked to vary S06). Both stems are "pair a pronoun with the wrong verb" over a five-sentence range with the same two error types (a `Both ... wears` and a `Nobody ... want`). With passages on screen: 0.239 / 0.253. | Vary the S06 stem and make one of its two errors a different pronoun (`Somebody`, `Everyone`). |
| **S4-B** C06/C11 core x core 0.295 multiset | Under the 0.30 bar by 0.005. C06 and C11 differ only in "TWO sentences / sentence" and their range; same frame, similar hints. Close enough that any edit to either item may push it over. | Reword C11's stem and hint 1 ("one of these five sentences uses the wrong verb for its first word"). |

**NOTE**

- N4-A C13 and S13 are sound: A/D (C13) and C/D (S13) are the only items where the verb fits the pronoun but not the nearest noun; `Everyone in the room sings` and `Everybody in our van sings` agree with both and rightly do not count.
- N4-B C12 `shake` and S12 `wave`: the passage prints `shakes` (error) and, in p6 s8, `Both of us wave` (a correct sentence); not the filled sentence, so no giveaway.
- N4-C Legacy Together P2 keeps "Each of the boys have a library card" as a distractor; the lesson never marks "each of + plural + plural verb" as wrong in a new item (author's note).
- N4-D Teach, Learn It and Watch Me model singular everyone/everybody/nobody/somebody/each, plural both/many, and covering "of the ..." phrases.

### 8. Summary for the lead

- Keys are right (120/120 blind) and playable (120/120 on a phone). No MUST remains in lessons 1 to 4.
- Recommended to lead: L1, L2, L4 ACCEPT; L3 REVISE for S3-A to S3-E (five small SHOULDs, mostly the same two irregular-plural dropdowns and S13). If the lead wants them closed in one pass: L1 S1-A, L3 S3-A to S3-E, L4 S4-A and S4-B.
- Items for the status table: do not mark any lesson ACCEPTED until the lead decides on the SHOULDs.


---

## Second review (B8b lessons 5-7)

**Reviewer:** independent content reviewer (did not author). Scope: `js/data/lessons/L-GUM5.js`, lessons 5 (subordinating conjunctions), 6 (commas after an opening part), 7 (titles of works), files as on disk at commit 49e4e0f. Read-only: no lesson or code file changed, no git, nothing marked ACCEPTED. L-GUM4.js was being edited by someone else and is ignored. Scripts and outputs are in `scratchpad/b8b3/` (reusing `b8b2/lib.js` and the first-review measurement scripts, re-run on the current file).

### Verdicts

| Lesson | Verdict | MUST | SHOULD | Summary |
|---|---|---|---|---|
| 5. Joining ideas with because, when, after and if | **REVISE (CHANGES REQUIRED)** | 2 | 5 | All first-review MUSTs and SHOULDs are fixed except as listed. Two key-defensibility problems are new or newly visible: the "although" distractor in C03/S03 is a coherent reading, and C06 sentence 3 is a coherent sentence keyed as an error. |
| 6. Commas after an opening part | **ACCEPT** (with SHOULDs) | 0 | 3 | All first-review MUSTs and SHOULDs fixed. One check-content hint-echo warning on S15 that the author log says is absent. |
| 7. Writing titles of books, stories, poems and songs | **ACCEPT** (with SHOULDs) | 0 | 3 | All first-review MUSTs and SHOULDs fixed. One hint-echo warning on C09, one twin pair 0.004 over the 0.21 bar. |

### 1. Blind solve

- **Method.** `b8b3/blind.js` (a fresh copy of the first-review loader with new seeds, `77031 + 313 x lesson`) loads `L-GUM5.js` in Node with a stub `PP.addLesson`, resolves every core `{ref}`, and prints all 18 passages (no figures exist), 45 core and 45 similar items with choices, dropdown options, hot-text options, ebsr parts and match columns shuffled by the seeded LCG. It strips `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `like`, `std`. Match rows and hot-text target sentences are printed in passage order. My answers were written to `b8b3/answers.json` (made read-only) before any key was extracted; `cmp.js` then compared them with the keys through the stored permutation (`map.json`).
- **Result: 88 of 90 agree (97.8%).** Both disagreements are my slips, not item defects, and I report them unedited: **L5 C05** Part A, I reasoned correctly that the "until we ate lunch" sentence is the key but wrote the letter of a different option (key text: "We washed our hands until we ate lunch."); **L7 S15**, I chose "Start with T, and capitalize each remaining word" instead of "Start with T, and make And lowercase" (a tempting distractor, so S15's distractor is doing its job). Counting the intended answer, C05 is 1 for 1; S15 stays a miss.
- **How blind.** Fully blind for all 90 items. Before the solve I had read REVIEWER-BRIEF and CONTENT-BRIEF, the STATUS tail, and the code (not the outputs) of the first-review scripts. I did not open the first-review answer files or the author log until `answers.json` was saved. The first review (B8b-review.md, lines 1-148) and the author log were read after.
- **Items I hesitated on while solving** (keys still matched, see findings): L5 C03 (until vs although), L5 S03 (until vs although), L5 C06 sentence 3.

### 2. Measurements (all on the file as on disk)

- **Browser, 390 x 844, touch, browse-mode fixture, real taps (`b8b3/run390.py`, server `node verification/serve.js . 8995`).** For every one of the 45 core items (sets y, y2, y3) I answered with the real controls, got "That's right", then tapped **Try a similar question** and answered the matching twin the same way, and got "That's right" again: **45 of 45 core and 45 of 45 twins pass, 0 problems.** scrollWidth 390 on every screen, no tap target under 40 px or outside the viewport, no page error. Dropdowns whose longest option is over 28 characters rendered as a button list and I answered them with the buttons (L5 C10, C14 slot 0; L5 S14 slot 0; L6 C10); the rest were native selects. All 30 passage items (core and twin) show the right passage on the Passage tab (matched by title, `r390-5/6/7.txt`). Every twin shown was the one whose `like` names the core item just answered.
- **Passages.** 18 passages, 100 to 120 words without the `(n)` markers, 111 to 135 with them (repo script). FK from `verification/readability.py`: L5 1.7-3.4, L6 1.1-3.3, L7 2.9-4.4 (p1 4.4, p3 4.1, p6 4.1). All under 4.5. L5 p5 is exactly 100 words by my tokenizer (NOTE).
- **Twin vs core, whole-text Jaccard, `(n)` markers and digits counted, stems, prompts, text, choices, slots, rows, columns, both ebsr parts and the hot-text target sentences, all 225 pairs per lesson (`jac.js`), set / multiset:**

| Lesson | Max set | Max multiset | Pairs over 0.21 (set or multiset) |
|---|---|---|---|
| L5 | 0.191 (C14/S14) | 0.212 (C11/S11) | **C11/S11 0.172 / 0.212; C12/S12 0.188 / 0.211** (SHOULD, over by 0.002 and 0.001) |
| L6 | 0.208 (C13/S13) | 0.206 (C13/S13) | none (C13/S13 0.208 / 0.206 is under) |
| L7 | 0.193 (C04/S04) | 0.214 (C12/S10) | **C12/S10 0.143 / 0.214** (SHOULD, over by 0.004; not a `like` pair) |

  The author's figures (L5 0.191 / 0.212, L6 0.208 / 0.206, L7 0.193 / 0.214) reproduce exactly. No pair is near 0.30. Paired (`like`) overlap is 0.06 to 0.21. Twin vs twin: L6 S03/S12 0.286 / 0.400 (same frame, NOTE; no twin-twin limit is stated), L5 S04/S05 0.242 / 0.209 (shared passage).
- **Core vs core (limit 0.30), set / multiset.** The first review's failing pairs are now: L5 C03/C10 0.185 / 0.209, C03/C12 0.188 / 0.189, C10/C12 0.125 / 0.167, C10/C14 0.184 / 0.206, C12/C14 0.186 / 0.160 (was 0.39 to 0.42); L5 maximum **C03/C14 0.270 / 0.226**. L6 C03/C10 0.233 / 0.190, C03/C12 0.148 / **0.279**, C10/C12 0.097 / 0.119 (was 0.37 / 0.378). L7 C08/C10 0.200 / 0.236, C08/C12 0.103 / 0.119, C10/C12 0.179 / 0.174, C09/C15 0.173 / 0.187 (was 0.319 / 0.356), C04/C15 0.232 / **0.282**, C04/C09 0.110 / 0.124. Nothing reaches 0.30. Highest are 0.282 (L7 C04/C15), 0.279 (L6 C03/C12), 0.270 (L5 C03/C14): NOTE, close to the bar.
- **Core and twin vs form A tests (`tj.js`).** L5 **C14 vs T4 0.55 / 0.45** (see SHOULD S5b-3), L7 C05/T2 0.31 / 0.36 (same stem, different sentences, NOTE), L6 P4/T4 0.25 / 0.31 (legacy P4, NOTE). Other pairs below 0.28.
- **Key printed earlier or elsewhere (`leak2.js`).** Strings of three or more words, checked in every core, twin, Together, Test A item (stems, options, hints, clue), plus Teach and Learn It: two hits. L5 C03's key "until the rain stopped" is a substring of C07's fragment "Until the rain stopped on Friday." (C07 is in the later set; it cannot help C03; NOTE). L6 T3's key "In the morning," matches Teach point 1, which names "In the morning" as an opening part without a comma (a legacy test item; NOTE). No key appears in a hint (`hintkey.js`: nothing).
- **Dropdown-reads-the-passage check (`copy.js`).** The 16 dropdown items that earlier printed their key in the passage (L5 and L6 C03/C10/C12/S03/S10/S12, L7 C10/C12/S10/S12) now carry no passage and put the context in the stem. L7 C08 and S08 still use passages p2 and p5, but the passage prints the planted **wrong** form ("Turnips For The Tuba", "Pirates And Mermaids"); a case-sensitive comparison shows the keyed title is not in the passage. Not a leak.
- **Stale numbering.** I matched every "sentence N / line N / paragraph N" reference in stems, parts and hints to the passage text: all correct (L5 C05 paragraph 3, C06 range 2-6, C09 sentences 8 and 10, C11 5-9, S05 lines 9-12, S09 lines 10-11; L6 C05 paragraph 2, C09 sentences 7 and 8, S09 lines 7 and 8; L7 C04, C08, S04, S08 and all ranges).
- **Longest key (`longest.js`).** No new core or twin key is uniquely longest and no choose-two pair has both keys longest. L6 C04 has the key as the only choice not starting with "We" (see NOTE N6b-2). No end-mark tell remains (`endmark.js`: nothing; L7 S03 fixed).
- **Key / why / how.** Every key appears in its `how` and `why`; hot-text items cite the sentence number, and I checked all 18 against the passage (the L5 S11 why now quotes "Tia felt proud although she learned the whole cheer.", which is passage line 7).
- **`like` mapping (`like.js`).** Every twin maps to one core item with the same type, points and DOK; no core item lacks a twin; pick counts equal key counts; choose-two, ebsr, match and two-slot dropdown are 2 points. Core formats per lesson hottext 3, dropdown 4, mc 3, ebsr 1, ms 2, match 2 (points 22 / 22 / 21), DOK 2 / 10 / 3.
- **Duplicates over all `js/data` (`dup.js`, `dup3.js`).** 529 distinct strings of 25+ characters from the three lessons searched in every data file: the only outside hits are generic stems ("This question has two parts. Answer Part A, then Part B.", "Select the sentence that has an error.", "Choose the TWO sentences that use commas correctly.", "Select the group of words that is NOT a complete sentence."). No content duplicate. Inside the lessons the same sentence is a distractor in C04 and C05 of L5, and in S04 and S05 of L5 (harmless NOTE).
- **`check-content.js --all`: PASS, 0 failures, 94 warnings;** three are on these lessons: **L6 S15 hint 2 shares "first" only with the key; L7 C09 clue and hint 1 share "short" only with the key.** The author log says "no warnings remain on any SK-GUM5-1 to SK-GUM5-7 item"; that is not true of the file on disk.
- **Official wording** (`js/data/standards.js`, p. 17, Introduce, not assessed): L5 "Use subordinating conjunctions to join clauses."; L6 "Use commas after introductory phrases or clauses."; L7 "Use conventional capitalization and underlining, quotation marks, or italics to indicate titles of works." The items test each named element. Points and DOK are right throughout.

### 3. Web checks

- Commas after introductory elements: https://owl.purdue.edu/owl/general_writing/punctuation/commas/commas_after_introductions.html (fetched: a comma is needed "After an introductory clause"; a brief prepositional phrase "usually doesn't need a comma", test: fewer than five words). This supports the lesson's rule (clause needs the comma, short phrase optional) and the L6 keys that treat missing commas after 4 to 7-word clauses as errors.
- Title capitalization: https://titlecapitalize.com/mla-title-case-rules/ (fetched: MLA capitalizes the first and last words and every major word; lowercases articles, prepositions of any length and coordinating conjunctions in the middle). Every mid-title small word in the lessons is a, an, the, and, of, in, on, at, to or for, so MLA, Chicago and AP agree.
- Italics vs quotation marks: https://stlcc.edu/student-support/academic-success-and-tutoring/writing-center/writing-resources/italics-vs-quotations-marks-in-titles.aspx (fetched: shorter works in quotation marks, longer works such as full-length books in italics; short stories and songs in quotation marks).
- Carried over from the first review (still relied on): https://writingexplained.org/grammar-dictionary/subordinating-conjunctions , https://www.merriam-webster.com/dictionary/until , https://www.merriam-webster.com/dictionary/although , https://www.grammarly.com/blog/punctuation-capitalization/commas-after-introductory-clauses/ (short introductory clause comma is a style choice). The purdue.edu `commas/index.html` page was not on this session's allowlist, so I used the `commas_after_introductions.html` page above.

### 4. Verification of the first-review findings (re-measured on disk)

| First-review finding | Status | Evidence |
|---|---|---|
| M5-1 / M6-2 / M7-1 dropdowns print the key in the passage (18 items) | **FIXED** for 16; L7 C08/S08 keep a passage but print only the wrong form | `copy.js`; item JSON has no `passages` on L5 and L6 C03/C10/C12/S03/S10/S12 and L7 C10/C12/S10/S12; contexts are in stems; browser run confirms no Passage tab on them |
| M5-3 / M6-3 / M7-2 same-frame triplets over 0.30 | **FIXED** | table in section 2; highest 0.282 |
| M7-3 L7 C09/C15 (and C04/C09) | **FIXED** | C09 now asks Sam (quotation marks) vs Ava (line under the title) about a poem; C09/C15 0.173 / 0.187; C09 no longer prints the small-word rule |
| M5-2 L5 C14 slot 0 (until vs although) | **FIXED** | options now although / because the whole day was warm / if the day was warm; "Kim wore a coat until the day was warm" is gone; no other option reads naturally. (S14 slot 0 uses although / because / if and slot 1 before / although / until; "until he ate lunch, he toweled dry" does not parse.) |
| M6-1 L6 S13 four defensible answers | **FIXED** | claim is now "A sentence with while, because or although always needs a comma"; only A "We stayed inside while it stormed." and D "Tom smiled because the test was easy." have no comma; B has no listed word, C and E have the comma. |
| S5-1 C11 sentence 7 | FIXED | "We cheered although our team scored a point." |
| S5-2 S11 why misquote | FIXED | quotes line 7 as printed |
| S5-3 twin overlap C10/S10, C06/S06 | FIXED, but two other pairs are 0.001 to 0.002 over (S5b-5) | section 2 |
| S5-4 / S7-5 twin vocabulary drift | **MOSTLY FIXED** | "In spite of", "condition" (L5), "linking word" gone; residual in S5b-4, S7b-2 and N6b-3 |
| S6-1 L6 C04/C05, S04/S05 giveaway | FIXED | C04 now uses p1 s12, s10, s9, s4 and S04 uses p4 s4, s9, s1, s10; the C05/S05 keys (p1 s5, p4 s5) are not printed in the earlier item |
| S6-2 S15 | FIXED | now a claim to judge (Dana), key "the comma tells where the first part stops and the plan starts" |
| S6-3 short clauses | **MOSTLY FIXED** | P3 now "While Dad cooked dinner in the kitchen ...", C07 and S07 rows use 7 to 9-word clauses. Four-word clauses remain as keys in four dropdowns (NOTE N6b-4) |
| S7-1 C06/S06 line 5 | FIXED | "the song Marimba in the Snow", "the song Xylophone Sunrise" |
| S7-2 C13/S13 hint 2 | FIXED | no longer lists the small words |
| S7-3 S03 only key ends in a quotation mark | FIXED | title now mid-sentence: `We all loved "Harmonica Hill" most of all.` |
| S7-4 S13 contrived claim | FIXED | Rae: "small words must always start with a capital" |
| N7-1 "chapter book" | FIXED | "the book Penguin Express" |
| Author claim "no warnings remain on SK-GUM5-1..7" | **NOT TRUE** | three warnings on L6 S15 and L7 C09 |

### 5. Lesson 5: "Joining ideas with because, when, after and if" (3.L.GC.1:I:use-subordinating-conjunctions-to-join-clauses)

**Verdict: REVISE.** Blind solve 30 of 30 on the keys (one lettering slip on C05 Part A). 15 of 15 core and 15 of 15 twins take the key on a phone.

**MUST**

| ID | Evidence | Fix |
|---|---|---|
| **M5b-1** C03 and S03 | The two stand-alone "until" items give no context, and the distractor "although" makes a coherent sentence. C03: "Jo's team rested on the bench although the rain stopped." means they kept resting even though the rain stopped; S03: "Tess jogged around the track although dark fell." means she jogged despite the dark. "Until" is the more natural reading but not the only defensible one, the same class of fault as first-review M5-2. C03's hint 3 claims "nothing here is surprising", which a student holding the "although" reading can fairly dispute. (S03's `if dark fell` is the only distractor that really fails.) | Give the stem a context that excludes the surprise reading (for example "The game could not start while the rain fell." before C03's sentence), or replace the "although" distractor with one that cannot make sense: C03 "before the rain stopped" is also arguable, so prefer "because the rain stopped" only if the stem says the rain was a good thing; simplest is to make the stem a two-sentence time story as in C12 ("The rain began at noon and stopped at one. Jo's team sat on the bench from noon to one.") and key "until the rain stopped" with because / if distractors. For S03 swap "although dark fell" for "because dark fell". Update the hint 3 sentences. |
| **M5b-2** C06 sentence 3 | Keyed as an error: "We could not start although Dad found the red ball." This is a coherent concession (finding the ball would normally let them start, yet they could not). The how says "finding the ball is not a surprise ... should say until", which is one reading, not the only one. A careful reader marks sentence 3 as correct and then has no second candidate (sentences 2, 4 and 6 are clearly right), so the item penalises the better reader. (The twin S06's "Dana stopped jumping although she was tired" is a clear clash; tiredness predicts stopping.) | Replace sentence 3 with an unambiguous clash that mirrors S06 and C11, for example "Grandpa hammered the wickets into the grass although the ground was soft." (soft ground makes hammering easy) and move the current sentence 2 idea elsewhere, or "We could not start although Dad had not found the red ball." Re-check C06's how, why, h3 and the twin overlap with S06 after the edit. |

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| **S5b-3** C14 vs form A T4 | New core C14 is a template clone of the existing Test A item L5 T4: both are two-slot dropdowns with the same name and frame, "Kim wore a coat {0}, and {1}, she took it off" (although / after) against "Kim wore shorts {0} the day was chilly, and she put on a jacket {1} she got to the park" (although / after). Jaccard 0.55 / 0.45. The keys are single words, so no key sentence is printed, but practice rehearses the exact answer pattern (surprise first blank, time second blank) and the form A item. | Change C14 and S14 to a different pair of relations or characters (for example reason in the first blank and how-long in the second), keep Kim out of it. |
| **S5b-4** hints | (a) S10 h1 "Ask **when** Gus pulled mittens on." repeats the key word (`when frost formed`) and C10 h1 "Ask **why** the kitten crept away." names the relation of the key (because). Both narrow the key in the first hint. (b) C03 and C12 hint 3 open with the same sentence "One choice shows a surprise, but nothing here is surprising." (C14 slot 1 hint 3 and S03/S10/S12 hint 3 repeat the idea); the first review asked for these to be varied. | (a) Use the neutral h1 of C03: "Ask how the ... and the ... are connected." (b) Vary the first clause of C12 and C14 hint 3. |
| **S5b-5** twin overlap slightly over 0.21 | C11/S11 0.172 / **0.212** and C12/S12 0.188 / **0.211** (multiset). | Change one distinctive word in each pair of stems (for example "sentences 5 through 9" vs "lines 5 to 9" is already different; change the shared "Select the sentence ... clash" frame and the "Nia/Mia ... times" stem). |
| **S5b-6** "while" in two keys | S09's key "After sets a time, **while** if sets a case that may happen." and S15's key "... until stretches the waiting up to the bell, **while** when names a single moment." use *while* as a contrast word, but Teach lists *while* as a time word (when, while, after, before). A grade 3 reader meets the taught joining word with a new job inside the key sentence. | Replace the contrast "while" with "and" or "but". |

**NOTE**

- N5b-1 C08 columns "A case that may happen" vs Teach "names something that may or may not occur"; S02 columns "Time | A surprise" vs core "Tells when" (P4). Fine, but one label set would be cleaner.
- N5b-2 S11 line 9 "Feet hurt although everyone smiled the whole time." reads backwards (smiling despite hurting would be "Everyone smiled although feet hurt"). It is keyed as a correct line, and the key (line 7) is clearer, so one answer remains.
- N5b-3 S14 slot 0 `if the pool felt cold` ("swam laps if the pool felt cold") is a weak but possible conditional; the key (although) is clearly best.
- N5b-4 C05 and S05 give hints for Part A only; Part B has none.
- N5b-5 Hint 3 on the four match items (P4 excepted) reveals one row's answer ("In the row about the cold, the singing is a surprise"). Three rows stay live; consistent with accepted lessons.
- N5b-6 C07 and C09 distractors are easy to dismiss ("after may be used only at the start"); DOK 3 on C09 is generous.
- N5b-7 L5 p5 is exactly 100 words by my tokenizer; any cut drops it below 100.
- N5b-8 Learn It models before and although and fragments; it does not model if or until. Teach does, and the core items on those words are ordinary.
- N5b-9 The author log's S01 why uses "As soon as the lights came back on", a joining phrase not taught in L5; it is in the why only.

### 6. Lesson 6: "Commas after an opening part" (3.L.GC.1:I:use-commas-after-introductory-phrases-or-clauses)

**Verdict: ACCEPT** (blind 30 of 30, 15 of 15 core and 15 of 15 twins on a phone). No MUST.

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| **S6b-1** S15 hint 2 | `check-content.js` warns: hint 2 "Say the **first** part by itself. Ask whether it feels finished." shares "first" only with the key ("... where the **first** part stops ..."). | Reword: "Say the part before the comma by itself." |
| **S6b-2** C04 / S04 distractor design | The three distractors have no opening part at all (C04: "We will walk ... if the weather stays dry.", "We sang a song, when ...", "We walked in pairs because ..."; S04: "Nell held her arms wide since ...", "We clapped loudly, after ...", "Our gym club held ..."). The key is the only choice that begins with an opening part, and the only choice not starting with "We" in C04, so the item can be solved by spotting the opener, not by judging the comma. It is DOK 1, so the fault is mild. | Replace one distractor with a sentence that opens with an opening part and has the comma in the wrong place, taken from a draft sentence that no later item uses, or add a p1 sentence with a misplaced comma. |
| **S6b-3** C09 / S09 wording | C09 calls it "the after part", S09 "the before words" ("Line 7 starts with before words that need a comma after them"). Teach uses "opening part". Neither term is taught, and S09's key is hard to parse. | "The opening part" and "the ending part", as in Teach. |

**NOTE**

- N6b-1 C03/C12 core multiset 0.279, C10/C03 0.233 set: below 0.30. Twin S03/S12 0.286 / 0.400 (same frame; no limit).
- N6b-2 `longest.js`: C04 key is the only choice that does not start with "We" (covered by S6b-2).
- N6b-3 Untaught opening words in twins and passages: "Once", "Whenever", "Since", "As soon as" (S01, S02, S04, S05, S06, S11, passages p4 to p6), and "condition" in S15's how. Teach says only "an opening part that tells when, where, why or what if", so the concept holds; the comma decision does not depend on the word. Optional: keep to the L5 word list.
- N6b-4 Four-word and five-word clauses are keyed with a comma where a no-comma option exists: C03 "When the lunch bell rang," C14 slot 0 "Before the curtain opened," S14 slot 0 "While the kids slept," and dropdowns S03/S10. Purdue (commas_after_introductions.html) requires the comma after an introductory clause, Teach says the same, and no competing option exists, so the keys hold. Grammarly treats a very short clause as optional, as in the first review.
- N6b-5 C13 and S13 hint 2 are the mechanical test "check where the part sits"; acceptable because position is the lesson's rule.
- N6b-6 C12/S12 and C14/S14 slot 1 options that start with a comma (", after the recess bell rang") render as the first line of the select; no layout problem at 390 px (checked on C12).
- N6b-7 C05 Part B and S05 Part B distractors are absurd ("every sentence needs a comma at its very end"); correct but easy.
- N6b-8 The legacy `T3` key ("In the morning,") is matched by Teach point 1's phrase "In the morning" without the comma; not a printed key.

### 7. Lesson 7: "Writing titles of books, stories, poems and songs" (3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar)

**Verdict: ACCEPT** (blind 30 of 30 on keys, one lettering slip on S15 that I count as a miss; 15 of 15 core and 15 of 15 twins on a phone). No MUST.

**SHOULD**

| ID | Evidence | Fix |
|---|---|---|
| **S7b-1** C09 hint 1 and clue | `check-content.js` warns: C09 clue and hint 1 ("Ask whether a poem is a whole book or a **short** work.") share "short" only with the key ("a poem is **short** and its title takes quotation marks"). The other options say "long enough to count as a whole book", so "short" singles out the key. | Hint 1: "Ask what kind of work a poem is." or "Ask whether a poem is a whole book." (and the same for the clue). |
| **S7b-2** "name" vs "title" in twins | Teach and the core say "title"; S02 ("the song's name"), S05 ("song or poem name"), S06 ("a song or poem name is written wrongly"), S07 ("How would each name look", "a poem named ..."), S08 ("a song name written wrongly") say "name". Teach glosses *title* as "the name of a book ...", so it is not wrong, but the twin has to be read with a different noun. | Use "title" in the twins' prompts. |
| **S7b-3** twin overlap C12/S10 | Multiset 0.214 (set 0.143), over 0.21 by 0.004. It is not a `like` pair; the cause is the shared tokens "in the" plus the same frame "X in the Y" ("Pigs in the Rain", "Pickles in the Pool") and the "Which title ..." option shapes. | Change the S10 title to one without "in the" (for example "Pickles on the Porch") and re-measure. |

**NOTE**

- N7b-1 C04/C15 core 0.232 / 0.282, C08/C10 0.200 / 0.236: below 0.30. L7 C05/T2 0.31 / 0.36 shares a stem with a legacy test item (sentences differ).
- N7b-2 S09 distractors "Neither: typed titles stay plain." and "Lena: italics are only for stories." are weak; hint 3 removes the "plain" one. S07 columns are ordered Underlined / In quotation marks, C07 Quotation marks / Italics (underline by hand): the reversal is harmless but inconsistent.
- N7b-3 S03 (passage p4): the key title "Harmonica Hill" appears in the passage's correct form (line 3); the other three titles are copies of passage errors. A student can match the choices to the passage, though that does not prove correctness. Optional: use a title that does not appear in the draft.
- N7b-4 p1 FK 4.44 and p3 4.08; any edit to those drafts needs a re-run of `readability.py`. The drafts are labeled "informational" but read as short narratives.
- N7b-5 All titles use only a, an, the, and, of, in, on, at, to, for as mid-title small words, so MLA, Chicago and AP agree. Every italics or underline item (C07, S07, S09, T4) describes the work, so nothing depends on rendering.
- N7b-6 Teach, Learn It and Watch Me model what the fifteen need (capitals, short vs whole work, underline by hand, quotation marks for a song).

### 8. Summary for the lead

- Blind solve: **88 of 90 (97.8%)**; both misses are my own slips (L5 C05 Part A lettered wrong, L7 S15 chose the "capitalize each remaining word" distractor). Fully blind for all 90 items. Browser: 90 of 90 items (45 core, 45 twins via Try a similar question) pass with real taps at 390 x 844, no overflow or small targets.
- Every first-review MUST is fixed (dropdowns no longer read the passage, triplet overlaps 0.19 to 0.28, L7 C09/C15, L6 S13, L5 C14 slot 0), and every first-review SHOULD is fixed or reduced to a NOTE. The author's measurements reproduce (twin vs core 0.191 / 0.212, 0.208 / 0.206, 0.193 / 0.214); their statement that no check-content warning remains does not (three).
- **L5 REVISE**: two key-defensibility MUSTs (C03/S03 "although" is a coherent reading; C06 sentence 3 is a coherent concession keyed as an error), plus C14 as a template clone of form A T4 (0.55 / 0.45), hint wording, two twin pairs 0.001 to 0.002 over the bar, and the contrast "while" in two keys.
- **L6 ACCEPT** and **L7 ACCEPT**, each with three SHOULDs (hint echoes from check-content on L6 S15 and L7 C09; wording drift; L7 C12/S10 0.214).
- Over the 0.21 twin bar, precisely: L5 C11/S11 0.212 (multiset), L5 C12/S12 0.211 (multiset), L7 C12/S10 0.214 (multiset). Nothing at 0.30.
- Do not mark anything ACCEPTED here; the lead decides after the L5 fixes and the SHOULDs.
