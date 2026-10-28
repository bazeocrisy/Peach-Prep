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
