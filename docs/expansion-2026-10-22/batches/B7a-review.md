
## First review (B7a lessons 1-5)

Reviewer: independent (did not author). Lessons: the first five B7a rows of STATUS, which are the first five lessons in `js/data/lessons/L-GUM1.js` (indices 0-4): (1) complete sentences (`use-nouns-and-verbs-to-form-complete-thoughts-in`), (2) singular and plural nouns (`form-and-use-singular-and-plural-nouns-in-speech`), (3) question words (`use-interrogatives-to-ask-questions-in-speech`), (4) capital letters, first word and I (`capitalize-the-first-word-of-a-sentence-and-the-`), (5) plurals with -s or -es (`form-regular-plural-nouns-with-s-or-es`). Reviewed against a frozen copy of the worktree. Read-only: no lesson edits, no git. The local test server (port 8871, pid 30242) was killed by pid.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 1 Complete sentences | CHANGES REQUIRED | 3 | 4 | 5 |
| 2 Singular and plural nouns | CHANGES REQUIRED | 2 | 5 | 4 |
| 3 Question words | ACCEPT (no MUST; SHOULDs recommended) | 0 | 5 | 4 |
| 4 Capital letters | CHANGES REQUIRED | 1 | 4 | 5 |
| 5 Plurals with -s or -es | CHANGES REQUIRED | 3 rows (4 items) | 6 | 4 |

The content is sound overall: keys agree with an independent solve on 187 of 190 items (the three misses are my slips, below), passages meet length and readability, twin overlap is under the limit, and every core item works with real taps at 390 x 844. The MUSTs are all small edits: hint 3 removing every distractor (L5 C09, C15, C13/S13 slot 2; L1 S12 slot 1), two stale `why` strings (L1), two defensible-variant keys (L2 minnow, seed), and one unreadable, non-mirroring twin (L4 S10). The author log claims "hint 3 removes at most one choice and leaves at least two live" and "no hint narrows"; that is not true for the items named below.

### Method and blindness

- **Blind solve.** `scratchpad/b7rev/load.js` loads `L-GUM1.js` in a Node `vm` sandbox with a mock `PP.addLesson`. `blind.js` prints each lesson's six passages, then every core item (refs resolved), S01-S15, the Together items and the Test, with choices, dropdown options, hot-text options, ebsr parts and match rows shuffled by a seeded LCG (`2000 + 91 * lessonIndex`; permutations written to `hidden-perm.json`, not opened until answers were saved). Printed fields are a whitelist (id, type, points, dok, passage ids, stem, prompt, choice/option text, targets, match rows and columns, pick count). No `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `like`, `addons` or sample text reached me. I grepped the output for those words first (only ordinary words in prompts, such as "correct").
- **Items solved: 190** (38 per lesson: 15 core with refs resolved, 15 similar, 3 Together, 5 Test). Answers were saved (`ans1.txt` to `ans5.txt`, joined in `myanswers.txt`) before any key was extracted by `cmp.js`.
- **Agreement: 187 of 190 (98.4%).** Per lesson: L1 37/38, L2 38/38, L3 38/38, L4 37/38, L5 37/38. The three disagreements are my own slips; the items are fine:
  - 1-C07 Part B: I reasoned to "...clapped for us" but typed the wrong letter.
  - 4-C13 slot 2: I capitalised "My brother and I" after "so" mid-sentence; the key `my brother and I` is right. Worth noting only that this trap works.
  - 5-S07 Part A: I read the stem backwards and picked the "hissing sound" statement; the key (row ends in a plain letter) is right.
- **Fully blind?** Yes for every item. Before solving I printed only the field names of one item per type (not values), the passage and set structure, and counts. After saving answers I read the keys through `dump.js`, then the B6 review for defect classes, then the author log (last). My first directory listing of the scratchpad showed the file names in `scratchpad/b7a` (the author's workspace); I did not open any of them, and I did not open the B7a author log until the solve was saved.
- **Mechanical checks (all by script, files in `scratchpad/b7rev`).**
  - Points and pick counts: every ms and hot-text pick-two is 2 points; ebsr, match and two-slot dropdowns are 2 points; every key count equals `pick`. No inconsistencies.
  - Core mix: mc 6/5/5/5/6 (cap 6), 3 or more technology-enhanced formats per fifteen, DOK 3 count 6/6/4/4/4, DOK 1 count 0/1/0/0/1 (L2 P3 and L5 C09; plan wants at least DOK 2 in a Reinforce fifteen, see the L2 P3 row; L5 C09 is a one-step recall item), core points 22/21/22/22/20.
  - Passages: 30 drafts, all 101-115 words with "(n)" markers excluded, numbering `(1)` to `(n)` strictly sequential in all 30, FK at most 3.9 by `verification/readability.py` (limit 4.5). No figures or alt text exist in these five lessons.
  - Twin overlap (`jac.js`: tokens over prompt, stem, text, choices, slot options, match rows and columns, ebsr parts, and the sentences a hot-text item targets): every similar item against its `like` target, and against every other core item. **Set and multiset Jaccard are both at most 0.21 in every pair** (highest 0.21: L2 S10/C10 set, L2 S13/C13 bag, L3 S09/P4 bag, L4 S05/C05 bag, L4 S08/C14 bag, L4 S12/C04 bag, L5 S14/C14 bag). Nothing near 0.30.
  - Longest-key (`longest.js`, all single-key slots, ebsr parts, dropdown slots and hot-text options): key uniquely longest in 10 of 162 slots (6.2%), and the legacy items account for all of them (L1 P5, L2 T2 T5, L3 T2 T4, L4 P2, L5 P1 P5 T1 T5). Choose-two where both keys are the two longest: L4 C08 (32/29 vs 29) and L4 P5 (32/30 vs 25). No new core or twin item has a uniquely longest key. NOTE only.
  - Key text appears in `why` or `how` for every mc, ms, ebsr, hot-text and dropdown key (`keyin.js`). A script for tokens in hints, how and why that appear nowhere else in the lesson (`stale.js`) found two stale distractor names (L1 C08, S08).
  - Cross-file duplicates (`xdup.js` over every file in `js/data/lessons`, `sets` and `tasks`, including L-GUM2..5 and the check items): 31 exact matches of strings of four or more words in 836, all frame prompts ("Select the sentence that has an error.", "This question has two parts...") except `the bus stopped at the corner.` (L4 S02 option, also an L-GRM-03 row) and `A student writes four sentences for the class newsletter.` (L4 C14 stem, also a stem in lesson 6 of this file). Near duplicates at 0.70 or above: the same frames, plus L3 P4 option sentences (`Where did you put the leash?`, `When does the movie start?`) which also appear as `...the dog's leash` and `...start tonight` in L-GUM2's end-punctuation lesson. No concept duplicate between these five lessons and L-GUM2..5.
  - Learn It / Teach against items (`tl.js`): no Learn It or Watch Me sentence is repeated in an item. Rule statements are repeated verbatim as keys: see SHOULD rows for L1 (command), L4 (I is always a capital) and the smaller L3 and L5 cases.
- **Browser, 390 x 844, touch, one Chromium process per lesson** (`run390b.py`, Playwright). For each lesson I opened sets y, y2, y3 and, for all fifteen core items, pressed Give me a hint three times, answered with real clicks or `select_option` (choices, hot-text options, dropdown selects, match buttons, both ebsr parts), pressed Check my answer, then Show me how. Result: **75 of 75 core items accepted the key as "That's right!"**; the hint button read "No more hints" after three presses on all 75; `scrollWidth` was 390 on every item; no choice, hot-text, match button or select was under 40 px tall or outside the viewport; zero page errors. On a phone, passage items open a "Read the passage" tab first (existing engine behavior). The hot-text "shown sentences" are listed as numbered options on the Question tab (checked for L4 C06), so stems that say "shown" are clear and the unselectable sentences in the draft are not mistaken for options. Free-standing hot-text options are unnumbered and shuffled; I checked that no hint for such an item refers to a number.

### Web sources (author listed "Aunt Rosa" and spelling judgments as unverified)

- Aunt Rosa: family titles are capitalized directly before a name and lowercase after a possessive (my aunt): https://blog.dictionary.com/capitalizing-family/ . L4 P5 key `Tomorrow I will visit Aunt Rosa.` is correct.
- Pronoun I capitalized always, including I'm, I'll, I'd and mid-sentence: https://languagetool.org/insights/post/grammar-uppercase-i/ ; https://quillbot.com/blog/writing/capitalization-rules/ (first word of a sentence and I, in contractions too).
- Interjection plus comma keeps the next word lowercase (`Wow, you're really talented.`), so L4 C12 `Wow, the` is right: https://prowritingaid.com/commas-with-or-after-interjections (examples only; the page does not state the capitalization rule outright).
- Imperative sentence: the subject "you" is understood; a complete sentence has a subject and a predicate: https://www.noslangues-ourlanguages.gc.ca/hypergrammar-2/subject-and-predicate . Supports L1 command items and the fragment items.
- -es rule (s, x, z, ch, sh, ss): https://grandavehousing.calpoly.edu/news/nouns-ending-in-s-x . Supports all L5 keys.
- **Accepted variants (these matter):** Merriam-Webster minnow "plural minnows also minnow": https://www.merriam-webster.com/dictionary/minnow . Merriam-Webster seed "plural seed or seeds": https://www.merriam-webster.com/dictionary/seed . Shell (plural shells only) https://www.merriam-webster.com/dictionary/shell and cattail (cattails) https://www.merriam-webster.com/dictionary/cattail are fine.
- **`cants`:** Merriam-Webster (https://merriam-webster.com/dictionary/Cant) lists `cant` as a noun (hypocritical talk, a slope) and as a verb whose third-person singular is `cants`, so "cants is not a word" (L2 C12 why) is false.
- Official wording read from `js/data/standards.js` `official`: L1 "Use nouns and verbs to share complete thoughts when speaking."; L2 "Form and use singular and plural nouns when speaking."; L3 "Use interrogatives to ask questions when speaking."; L4 "Capitalize the first word of a sentence and the pronoun I."; L5 "Form regular plural nouns by adding -s or -es." (all page 15, grade 3 Reinforce).

### Lesson 1: complete sentences (CHANGES REQUIRED)

Strengths: keys are right and the fragment types are well chosen (missing who, missing verb, command); hot-text stems are scoped ("sentences 2 through 6", "shown") and each scope has exactly the keyed number; C06/C11/S06/S11 verified against every sentence in range. The command items (C05, C10, S05, S10, S15) are good DOK 3 content.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 1-C08 `why` | Says "heavy and cold, slowly and bags do not work". The slot 2 options are carried / quietly / bags; `slowly` is not an option. Stale text in feedback. | Replace "slowly" with "quietly". |
| MUST | 1-S08 `why` | Says "Next to the shelf and beside tell where". Slot 2 options are borrowed / underneath / shiny; `beside` is not an option. | Replace "beside" with "underneath". |
| MUST | 1-S12 slot 1 (hint 3) | Hint 3 names a comma, a new paragraph and an exclamation point as "about writing it down". Slot 1 options are a naming part / a new paragraph / a comma. Hint 3 removes both distractors, so one choice is live (the key). (Slot 2 keeps two live.) The twin C12 hint 3 removes one per slot and is fine. | Name only one distractor per slot, for example "A comma is about how a sentence is written." |
| SHOULD | 1-C05, 1-C10 (twins S05, S10) and Learn It 3 | C05 and C10 share the same key logic ("it is a command, so the who is you"); Learn It 3 states it almost verbatim ("In a command, the who is you, even though the word is not written") and Teach point 1 says it again. A child who read Learn It can pick the key of both items without reading them. | Give C10 a different reasoning key (for example please is not a who, a polite word, or a command with a named listener), and swap the Learn It 3 sentence. |
| SHOULD | 1-S02 hint 1 and `clue` | "Which one cannot you find?" is ungrammatical in a grammar lesson. | "Which one can't you find?" |
| SHOULD | 1-P2, 1-P5 (core set 1 refs) | Legacy grade 1 and 2 content ("The tiny green frog", "The big yellow school bus") in the fifteen; plan §4.8 / "Systemic weakness" says Reinforce items should use grade 3 content. P5's hints 2 and 3 also remove the noun option and the capital-letter option, so the live choices are the key and "a question mark at the end". | Replace P2 and P5 in the core fifteen with grade 3 sentence content (new items), or keep them as Together items only. |
| SHOULD | 1-P2 hint 3 | "Swam to the bottom of the pond has a verb. Ask who swam" states row 4 of 4 (needs a who). | Point at the strategy only. |
| NOTE | 1-S11 | Sentence 2 (`A rain gauge made from a clear plastic bottle with a ruler taped to it.`) is keyed as "never shows what anyone does or is". `made` and `taped` are participles; some children will call them verbs. Defensible, hint and how explain it. | Optional: reword so there is no participle. |
| NOTE | 1-C06, C11 | Free-standing hot-text option scope is clear in the browser ("shown"). Extra fragments in the draft outside the range (p2 sentence 9, 7) are used by C07, C10, not hot-text. | none |
| NOTE | Standard | Official row says "when speaking". Items are written recognition; the Grown-up speak card carries the speaking part. | none |
| NOTE | Cues | C09 key 73 chars vs 77 (distractor longer), no unique-longest in new items. S01 hint 3 reveals that the command row is a whole thought (1 of 5 rows). | none |
| NOTE | Drafts | p3 and p6 are used by one item each (C11, S11). | none |

### Lesson 2: singular and plural nouns (CHANGES REQUIRED)

Strengths: keys right, clue-word framing (a, one, each, every vs two, many, several, a few) is clear, the apostrophe and double-s distractors are real errors, the DOK 3 "rule is wrong" items (C15, S15) work.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 2-C11 (key sentence 4) | Key says `Many minnow swam close to the edge of the pond` is an error. Merriam-Webster lists "plural minnows also minnow", so the unchanged plural is accepted. The how/why/hints teach "minnows" as the only form. | Replace the noun (for example a noun with no unchanged plural) in the draft and update how, why and hint 3. |
| MUST | 2-C13 (distractor `Many seed sprouted in the warm spring weather.`) | Keyed as wrong. Merriam-Webster gives seed "plural seed or seeds", so the sentence is defensible; the item hinges on it (`Every seed in the tray` is the paired key). A child who picks it is marked wrong. The how names it ("Many seed ... pair a clue word with the wrong form"). | Use a noun with only one plural (`Many cup sprouted` style), in both sentences; update how and why. |
| SHOULD | 2-C12 why | "cants is not a word" is false (cants is a verb form; Merriam-Webster). Hint 3 says "not a word in this sentence", which is acceptable. | Why: "cants does not fit; the plural of can is cans." |
| SHOULD | 2-C05 | Distractors B ("Each means more than one, so table should have been written as tables...") and D ("...so the table should be tables") say the sentence is wrong, yet the stem asks "Why is each noun form correct?". The stem removes them, so the live choices are A (key) and C. | Rewrite B and D as plausible wrong reasons for a correct sentence. |
| SHOULD | 2-C05, C09, C10, C13 (and S05, S09, S10) | Same key logic five times: each/every go with one noun, nouns need not all match. C05 and C09 share "each flower/each table" and the "not every noun ends in -s" hint 3. | Make one a different skill (for example a noun after "a few" or an apostrophe contrast) so the three sets ramp. |
| SHOULD | 2-P3 (core set 1 ref) | DOK 1 match of `a pencil / several crayons / one notebook / many markers / an eraser`. Kindergarten-like; plan §4.8 lists a Together sibling (P2) as too easy. | Replace in the fifteen with grade 3 content or keep as Together. |
| SHOULD | Twins vs Teach | Twin items use vocabulary Teach never uses: "counting word", "promises", "single form", "word that says how many". Teach says "clue word". A child may not map them. | Use "clue word" in the twins. |
| NOTE | 2-S11 hint 3 | "Number 4 has a and one single-thing word group" is unreadable. | Reword. |
| NOTE | 2-S01 hint 3 | Reveals the every row. | none |
| NOTE | 2-C04, C12, S04, S12 | Hint 3 ends "Choose between the other two", leaving exactly two live (allowed). | none |
| NOTE | Variants | Checked the other nouns in the draft errors: shell, cattail (above), beetle, lamp, ribbon, game have only one plural. | none |

### Lesson 3: question words (ACCEPT; five SHOULDs recommended)

Strengths: the key and distractor logic is clean, the place/time/reason/person distinctions are unambiguous in every item (I checked each of the sentence-to-question mappings), the Rob/Mia, Jo and Kai items are good DOK 3, and the twin items do not repeat the core drafts.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | Core and Learn It | No core item (and no Learn It example) has **how** as the key; only S12, S15, P5 do, and S15's core twin C15 is about **what**. Learn It models only when and why; where, who, what and how are never modeled. The fifteen require all six. | Add a where or how example to Learn It, and make one core item key how (for example turn C13 into how-keyed). |
| SHOULD | 3-S10 hints 2 and 3 | Hint 2: "Sentence 6 is about what Dad does with a tool" states the key logic (how = with a tool). Hint 3 removes "How long". Together, the live choices are the key and, at best, one more. | Hint 2: "Compare what each sentence tells about the cooking." |
| SHOULD | 3-S01 stem; 3-P3 | Plan §4.4 rule 5: the answer word is not echoed in the stem. S01's stem contains "the spot where it turned up" and the key is "Where did this mitten turn up?" (echoes both the word and "turn up"). P3 key echoes "park closed today". | S01: "...hopes to learn the place the mitten was found." with the key as "Where was this mitten found?", or move the echo to a distractor. |
| SHOULD | 3-C10 and C12 into C11 | Set 2 C10 (p3 sentences 6-7) and set 3 C12 (p3 sentence 4: key `What did Mr. Kim give each student?`) reveal that sentences 4 and 7 are not time sentences; C11 targets are s3, s4, s7, s8, s9, so two of the three distractors are pre-eliminated before the item. | Use different sentences in C10, or point C12 at sentence 3 or 5. |
| SHOULD | 3-C13, C14, S02, S13, P4 | Five of fifteen core items are solvable by reading the first word of each line (C13 "two begin with Why"; C14 Who; P4 Where). That is the skill ("use interrogatives") but it makes set 3 thin. | Make one a content item: choose the line whose answer would be "after dinner". |
| NOTE | 3-S05, S12, S13 wording | S05 opens with an unquoted sentence ("Read Their parents cheered loudly..."); distractors C and D are weak. S12 stem "The reply to this ask..." is not idiomatic. S13 stem pairs "winter knitting circle" with "bringing the snacks to practice". S11 hint 3 is garbled ("and when it happened is not given"). | Reword. |
| NOTE | 3-C11 | s8 contains both when (`when we finished`) and where (`back in the water`); the key is right for a when question. | none |
| NOTE | Cues | New and twin items: no unique-longest keys; word-overlap echoes only in P3, S01. | none |
| NOTE | Standard | "when speaking" is again served by the Grown-up card. | none |

### Lesson 4: capital letters (CHANGES REQUIRED)

Strengths: every capital-letter item has a clear single best answer, the `I`-in-the-middle contrasts are well designed, the "shown sentences" scope matches the targets (C06, S06, C11, S11 verified), and the browser run is clean.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 4-S10 | (1) The stem is not readable at grade 3: "a volunteer insists number 10 of the market draft looks fine, since if comes just before the small i." (2) Plan §4.7: a twin mirrors the DOK and component of its core item; C10 is DOK 3 ("Sam says the i in i'll can stay small... Is Sam right?" key: a short form still has the word I) and S10 is DOK 2 about a lone i, with no short form in it. The `like` mapping is not honest. | Rewrite S10 as a DOK 3 claim about a short form (for example "Pia says the i in i'm can stay small in sentence 11 because it is a short form"), with a distinct sentence. |
| SHOULD | 4-C07 hint 2 | "For Part A, look at the very first word, including short forms." Only one Part A option (`i'm`) is the first word, so hint 2 plus the stem states the key. | "For Part A, check each word against the two capital-letter rules." |
| SHOULD | 4-C06 (set 2) after set 1 on the same draft | C04 says "Sentence 6 has two capital-letter mistakes" and C05 says sentence 7 "has a capital I... correct". C06 (same draft p1) keys sentences 2 and 6, so half of C06 is given away and one distractor is pre-eliminated. | Use a different draft for C06 or change C04 to another sentence. |
| SHOULD | 4-C05, C10 and Teach | The C05 key (`The word I is always a capital letter, even in the middle of a sentence.`) is Teach's big idea verbatim, and C10's key is Teach point 3. Plan rule 7 flags the same key fact. C05 distractors B ("so this one is a mistake" contradicts "Why is that correct?") and D (`could` "shares" the capital) are weak. C10 hints 2 and 3 end up restating the key ("Which of them is the word I?"). | Change the Teach wording so it does not equal the keys, and replace D. |
| SHOULD | 4-P3, P5 (core set 1 refs) | Legacy grade 1 and 2 content in the fifteen (`the bus came late today.`, `i like to draw horses.`). P5's hint 3 describes exactly the three wrong options ("Two... and one more starts with a small word that is a question"). | Replace or keep as Together only. |
| NOTE | 4-S09 and C09 | S09 hint 3 ("more than two mistakes") removes two options and leaves exactly two live (3, 4). Allowed, at the limit. | none |
| NOTE | 4-C13 slot 2 | Classic trap (`so my brother and I`, lowercase after "so") caught me; it is correct and teaches the point. | none |
| NOTE | 4-S06, C06 | Sentences 7 and 11 (and 9, 12 in p1) also start with small letters but are not selectable; the stems say "shown", fine. | none |
| NOTE | Cues | C08 and P5 keys are the two longest (32/29 vs 29; 32/30 vs 25). | none |
| NOTE | Facts | `Aunt Rosa`, `Wow, the`, `I'm` mid-sentence, `Mom said I could` all verified (sources above). | none |

### Lesson 5: plurals with -s or -es (CHANGES REQUIRED)

Strengths: keys right, the s/x/z/ch/sh rule is applied consistently, the real-word distractors (`-ies`, `-ses`, apostrophe) are plausible, and C15/S15 "rule is wrong" items test understanding.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 5-C09 hint 3 | "Cabin, mitten and ladder end in n, n and r, so check them against the list." names all three distractors. One live choice. The twin S09 hint 3 names two (leaves two) and is fine. | Name one distractor. |
| MUST | 5-C15 hint 3 | "Wax, gas and tax end in x, s and x, which are on the list of endings that add -es." names all three distractors. One live choice. | Name one. |
| MUST | 5-C13 slot 2 and 5-S13 slot 2 | Hint 1 "Each blank follows a number word, so each needs a plural" removes the singular (`pillow`, `pocket`); hint 3 "One noun ends in w / t, so it does not need the extra beat that -es gives" removes the -es form. One live choice in slot 2. | Remove "so each needs a plural" from hint 1 or make hint 3 about slot 1. |
| SHOULD | 5-C03 to C06, C05 to C07, C10 to C11 | Same-draft giveaways across sets. C03 (set 1) says sentence 3 is wrong; C06 (set 2) keys sentences 3 and 4. C05 (set 1) key is "tent ends in t, so it adds only -s" and shows `tents` in sentence 12; C07 (set 2) is Part A key "Tent does not end in s, x, z, ch or sh, so it needs only -s" on sentence 2 `tentes`. C10 (set 2) says `candlees` is wrong; C11 (set 3) keys it. Plan §4.3 rule 4. | Put each set on its own draft or use different nouns. |
| SHOULD | 5-C07 and C10 (S07, S10) | Same key logic (noun ends in t/e/w, so only -s) in set 2, twice. | Make one a different contrast. |
| SHOULD | Teach vs Together and Test | Teach gives `one box, two boxes` and `one dish, two dishes`, `bus/buses`, `peach`; P1 key is boxes, P2 includes dish and peach, P3 key is peaches, T4 key is `boxs`. | Swap Teach examples for untested nouns. |
| SHOULD | 5-S02 `like` P4 | P4 is hot-text pick one (1 point, "has an error"); S02 is pick two (2 points, "spell correctly"). Not mirrored. | Make S02 pick one, or point `like` at a pick-two core item. |
| SHOULD | 5-P3 hint 3 | "Toy ends in y after a vowel, so the plural in one sentence follows the usual rule." No sentence has `toys` (the option is `toyes`), and the y-after-vowel rule is not taught here. | Reword or remove. |
| SHOULD | 5-p6 | The sixth draft is used by no item (orphan). | Use it or drop it. |
| NOTE | 5-S07 | The twin wording (`hissing sound`, `full-grown`, `small mark above the line`) is not what Teach says; I picked the Part A distractor on a first read. | Use "ends in s, x, z, ch or sh". |
| NOTE | 5-S15 | Only one of the four examples ends in e, so hint 2 and the stem solve it; C15's pair is better. | Add an e-ending distractor (`axe, axes`). |
| NOTE | 5-C06 hint 3 | "a plural noun that ends in n and s" is garbled. | Reword. |
| NOTE | Variants | gas/gasses is an accepted variant but only the distractor `gas becomes gases` uses it. | none |

### Cross-lesson notes

- **Hint ladder recount** (live choices after hints 1-3, every dropdown slot, every mc, ms, hot-text and ebsr part, read item by item): all other items leave two or more live choices without hint 3 stating the key. Items that leave exactly two live and are acceptable: L1 C04, S10; L2 C04, C08, C09, C12, S04, S08, S12; L4 S09; L5 C04, C12, S12, S09. The author's checker (`verify.js`) missed the MUST cases because it counts options named by hint text but not the singular option removed by hint 1.
- **Hot-text stems vs selectable errors:** no stem miscounts. Scoped stems ("sentences 2 through 6", "shown") and key counts agree in every hot-text item (L1 C06, C11, S06, S11; L2 C06, C11, S06, S11; L3 C06, C11, S06, S11; L4 C06, C11, S06, S11; L5 C06, C11, S06, S11).
- **Plan "grade 3, not grade 1" note:** every ref in core set 1 is a legacy P item (L1 P2/P5, L2 P3/P4, L3 P3/P4, L4 P3/P5, L5 P3/P4). They are the easiest items in the fifteen and several are grade 1-2 sentences; the new items are at grade 3 level.
- **Concept duplicates over all `js/data`, including L-GUM2..5 and check items:** none beyond the frame prompts listed above; L2 and L5 both teach regular -s plurals and reuse the nouns `tent` and `kite`/`kites` (L2 T2 key and L5 S15 key), cosmetic.
- **Like mapping:** all 75 `like` targets resolve; component and points mirror except L5 S02 (points), L4 S10 (DOK and content), L2 S01 (DOK 2 vs P3 DOK 1, a fair step up).
- **Facts claims:** all grammar and dictionary claims checked above; two findings come from them (L2 minnow, seed; L2 cants).

## First review (B7a lessons 6-9)

Reviewer: independent (did not author). Lessons: 6 verb endings -s/-ed/-ing (`...form-and-use-verbs-with-ing-ed-or-s`), 7 action verbs, 8 adjectives and adverbs, 9 common and proper nouns. These are the last four of the nine B7a lessons in `js/data/lessons/L-GUM1.js` (array indices 5-8). Reviewed against the worktree as frozen at the time of review. The first reviewer takes lessons 1-5.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 6 Verb endings (-s, -ed, -ing) | CHANGES REQUIRED | 4 | 8 | 6 |
| 7 Action verbs | CHANGES REQUIRED | 3 | 9 | 5 |
| 8 Adjectives and adverbs | CHANGES REQUIRED | 1 | 7 | 5 |
| 9 Common and proper nouns | ACCEPT (the SHOULDs are worth doing, none blocks) | 0 | 6 | 5 |

### Method and blindness

- Node `vm` sandbox with a mock `PP.addLesson` (scratchpad `b7ar/blind.js`). It printed, per lesson, the six passages and then every core item (refs resolved), S01-S15, the three Together items and the five test items, with choices and options shuffled by a seeded LCG. It printed no key, `why`, hints, `how`, `clue`, `misconception` or `like`. Hot-text targets were printed as passage refs (`p1:1:2`) and I resolved them against the passage text by hand. 152 items solved (38 per lesson). Answers were saved in `ans6.json`-`ans9.json` before any key was extracted; `compare.js` un-shuffled and compared.
- **Agreement with keys: 152 of 152 (100%).**
- **Was it fully blind? Not quite, and here is the exception.** While checking the data shape, before solving, I printed `options` and `answer` of one hot-text item, 6-S01. I therefore knew its key index (the "campers hikes" sentence). Its content is unambiguous and I would have chosen it anyway, but strictly 6-S01 was not blind. Everything else was: before solving I had printed only field names, item types, counts and (for 6-S01) the above. I read B6-review.md, the author log, and the keyed dump only after saving the answers.
- Close calls I solved correctly but that are open to challenge (see findings): 7-S02 (realized), 7-C06 (decided), 8-C11 (sentence 6 "all morning"), 9-C06 (sentence 2 "spirit week"), 9-S13 (spring is a correct completion but not a "special name").
- Mechanical checks (all scripts in `scratchpad/b7ar`):
  - Points and pick values agree with the keys; choose-two, two-slot dropdown, ebsr and match items are 2 points. mc in core: 6, 6, 5, 5 (cap 6). DOK 1 count 1-2 per core set, each lesson has 4 DOK 3 items. Core formats: lessons 6 and 7 have five formats, lessons 8 and 9 six; at least three technology-enhanced in each.
  - Passages (all 24): word count excluding the "(n)" markers 102-116, so all at least 100. Numbering is sequential (1..n) in all 24. Flesch-Kincaid by my own syllable counter: highest 6-p3 4.15, then 6-p1 3.87, 9-p5 3.67, 9-p6 3.68; the repo `readability.py` gives at most 3.9. All under 4.5.
  - Twin-vs-core overlap, all 15 x 15 pairs per lesson, item text only: set / multiset maxima 0.207/0.209 (L6), 0.211/0.205 (L7, S03 vs C09 at 0.211), 0.194/0.195 (L8), 0.203/0.191 (L9). With the passage text included the multiset reaches 0.225 (6-S12/C04), 0.226 (7-S07/C07). Nothing near 0.30. Twin vs Together/Test: no pair above 0.30. Every `like` is a distinct core item (15 distinct per lesson).
  - Keyed text in `why` for every mc/ms/ebsr/dropdown/hot-text item; no hint contains a key phrase of three or more words; no dropdown hint names the key word. `check-content.js --all`: no failures for these lessons; warnings only (hint 1 longer than hint 3; shared word `picture`/`lets`, below).
  - Longest-key: no new core or twin item has the key uniquely longest. Ties and legacy: 6-P4 tie, 6-T2 slot 0 (6/5/7) and 6-T4 (38 vs 35) unique, 7-P5 (10/5/4/6) and 7-T4 unique, 8-P4 slot 1 unique, 9-P3 slot 0, 9-P5 (10/3/3/3), 9-T1 (10/5/5/4) and 9-T5 unique, 9-P4 (the two keys are the two longest). All of those are the legacy P/T items the author did not change. Choose-two with both keys among the longest: 7-S08 only, and it is a three-way tie at seven letters.
  - Learn It / Watch Me vs items (4-word runs): nothing in core or twins. Legacy overlaps: 6-T4 "started laughing at the clown" is Learn It sentence 2 verbatim apart from the subject; 9-T4 "swam in the lake" is Learn It sentence 2.
  - Cross-repo duplicates over all `js/data` (6-word runs and exact-string matches against L-GUM2..5, L-GC2, L-V12, the sets, the tasks and lessons 1-5 of this file): no duplicated item content. Only house-style prompt wording and hint templates repeat (e.g. "Which example proves the poster wrong?" also in lesson 5; "A student writes four sentences for the class newsletter" in lesson 4). Concept overlap with existing lessons is listed in the findings (L-GUM2 lesson 3, L-GUM4 helping verbs).
  - Free-standing hot-text and mc items: no hint or how refers to a sentence number.
- Browser (Chromium, 390x844, touch, mobile): one browser process per lesson, `PP_PLAYER.start` on the three core sets, real taps on every control, Check pressed, passage tab opened for every passage item. **60 of 60 core items accepted the correct answer, no horizontal scroll, no page errors, no passage mismatch.** One harness exception: 9-P2 timed out because my text selector matched "river" inside "Chattahoochee River" (cards are shuffled). Re-run with an exact-match selector, all six taps worked and the feedback read "THAT'S RIGHT!". Not a content defect. Server (pid 30955) killed.

### Web sources (checked this session)

- Mental action verbs: https://www.thesaurus.com/e/grammar/action-verbs/ lists consider, dream, imagine, ponder, think, remember, forget, memorize, learn, doubt. It does not list realize, decide or guess. Author's cited page https://www.proofreadingservices.com/pages/verbs-of-knowing-and-thinking lists decide, imagine, realize, guess, notice, dream but does not call them action verbs or stative verbs.
- Realize, imagine, remember and guess are listed as stative (mental/emotional state) verbs, not action verbs, at https://perfectyourenglish.com/grammar/verbs-not-used-in-continuous-form.htm and https://lingbase.com/en/english/grammar/stative-verbs ; decide is treated as an action verb there. So the mental-action class is contested; imagine, think and dream are the safest.
- Helping verbs are forms of do/be/have and modals; start, keep, love, like are not on the list, and the -ing progressive follows a form of be: https://www.gallaudet.edu/tutorial-and-instructional-programs/english-center/grammar-and-vocabulary/verbs/helping-verbs-and-modals . This repo's own lesson `js/data/lessons/L-GUM4.js` (helping and linking verbs) defines helping verbs as has, have, had, will, can, could, should.
- graceful is an adjective with the adverb gracefully, no adverb sense: https://www.oxfordlearnersdictionaries.com/definition/american_english/graceful . polite is an adjective with politely as the adverb: https://merriam-webster.com/dictionary/polite . afterward is an adverb ("at a later time"): https://www.oxfordlearnersdictionaries.com/definition/english/afterwards . stickily is an adverb: https://www.oxfordlearnersdictionaries.com/definition/english/stickily . tiredly: the Merriam-Webster thesaurus page https://prod-ccroc-direct.merriam-webster.com/thesaurus/tiredly gives no part-of-speech label for it (weak support, see 8 NOTE). I could not fetch the dictionary pages for today, soon, tomorrow, everywhere (not on the allowlist); the author's pages were not re-fetched.
- Capitalization: days, months, holidays and proper names capitalized; seasons lowercase; "Aunt Abigail" capitalized but "my other aunts" not; "Atlantic Ocean", "Green Bay Packers" as capitalized names: https://owl.purdue.edu/owl/general_writing/mechanics/help_with_capitals.html . "The seasons ... do not require capitalization": https://www.grammarly.com/blog/are-seasons-capitalized/ . Family titles used as names are capitalized, with a possessive before them they are not (so "Aunt Rosa" is right; this closes the author's "not verified" item): https://www.grammarly.com/blog/punctuation-capitalization/capitalization-family-title/ . Colorado River / Grand Canyon: river trips run through Grand Canyon National Park, https://home.nps.gov/grca/planyourvisit/whitewater-rafting.htm (search result only; not separately fetched). Lake Erie: https://epa.gov/greatlakes/lake-erie (search result only). I did not find a page I could fetch that states "capitalize every important word in a lake or river name"; it is standard and Purdue's examples support it.
- Facts in passages: salt crystals (hot water, stir in salt, string on a pencil, "after several days" crystals; this closes the author's "not verified" lesson 8 p6 item): https://www.sciencefun.org/kidszone/experiments/salt-crystals-science-experiment/ . Robin eggs sky blue, 3-5 eggs, about 13 days in the nest: https://blog.allaboutbirds.org/guide/American_Robin/lifehistory . Lake Hartwell is a reservoir on the Georgia/South Carolina line used for boating: https://dnr.sc.gov/lakes/hartwell/description.html . Great Smoky Mountains: salamanders and white-tailed deer confirmed, foxes and owls not named on https://www.nps.gov/grsm/learn/nature/animals.htm (plausible, NOTE). Otters: only sea otters hold hands, https://a-z-animals.com/animals/otter/why-do-otters-hold-hands/ ; mother river otters teach pups to swim, https://outdoorhub.com/?p=306948 (see 6-p3). Magnets: iron and nickel attracted, aluminum not: https://www.teachengineering.org/activities/van_cleanupmess_act1 (coins and spoons not addressed; 7-p6 is unused anyway).
- The author's `Olympus Mons`, Jupiter, Mars and Mount Hood pages were not re-fetched; the claims are standard.

### Lesson 6: verb endings -s, -ed, -ing -- CHANGES REQUIRED

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 6-C03, 6-C04 -> 6-C06 | Giveaway inside core. C03's stem says "Sentence 2 has a verb that does not fit"; C04's says "Sentence 6 has a verb that does not fit". Both are in set 1. C06 (set 2) asks which TWO shown sentences (2-6) need -ed. The key is sentences 2 and 6. A child who read C03 and C04 has the whole answer. | Move C03/C04 to other sentences of p1 (not 2, 6), or retarget C06 at two other sentences; keep each key sentence out of every other core stem. |
| MUST | 6-C15, 6-S15 | Hint 3 enumerates the three wrong choices ("Three choices have no -ed verb at all" / "no verb ending in -s"), so exactly one choice is live. The design is the cause: the key is the only choice containing an -ed (S15: -s) verb, so hint 1 ("Look for a verb with -ed") already finds it with no understanding of Mia's/the poster's claim. | Rewrite so at least two choices contain the ending in different roles (e.g. an -ed word used as an adjective, or a past-tense sentence next to a present sentence that also carries the ending), and drop the "three choices" hint. |
| MUST | Hints, how, why across the lesson (C03, C04, C07, C09, C12, S02, S03, S04, S07, S09, S12, P1, P5 ...) | "An -ing verb needs a helper word like started or kept." Started and kept are not helping (auxiliary) verbs. A helping verb is a form of be/have/do or a modal, and the progressive is "was jumping". This repo's own L-GUM4 lesson teaches exactly that, and this lesson's Teach says "words like love, start, stop and keep" while the hints say "helper word". Feedback tells children something false and contradictory. | Say "a word like started, kept or loves right before it" in all hints, how and why. Optionally add one Teach line on "was/is + -ing" so the progressive is not left to the wrong-answer feedback. |
| MUST | 6-S15, 6-C15 (also the same structure in 7-C15/S15) | Counterexample items. See also SHOULD below. | (with the first fix) |
| SHOULD | Core coverage | Not one core item has an -ing key. Learn It 2 (started laughing) models it and -ing is a third of the standard ("by adding -ing, -ed, or -s"); in core it appears only as a distractor (C08 D, C14 A, S08 D, S14 D) and in Together P3 / tests T2, T3. | Make one of C03/C09/C12 an -ing item (after started/keeps/loves). |
| SHOULD | Learn It / Watch Me | No -s example (one vs more than one doer) although 6-C05, C07, C08, C10, C11, C13 and S-twins hinge on it. | Add a third Watch Me on the doer count (the author added a third to lesson 1). |
| SHOULD | 6-C03, C04, C12, P5, S03, S04, S12 | Same task seven times ("sentence N has a verb that does not fit its time clue, pick the fix"), differing by verb only. | Vary one or two (e.g. an -s fix, or an -ing fix). |
| SHOULD | 6-C10 | H2 ("-s goes with a single doer, not with a group") states the rule the item tests. H2 plus H3 together remove every wrong choice. | Make H2 strategy only ("find who does the action"). |
| SHOULD | 6-C05, 6-S05 | H2 says "One is a single person, and the other is a group" / "One is the writer, and the other has a job title": it describes the key's contrast. | Reword to "compare who does each action". |
| SHOULD | 6-C13, 6-S13 | H2 names both answers' logic (past clue; one person -s). | Strategy only. |
| SHOULD | 6-S10 `like` C10 | C10 tests -s agreement with a plural doer; S10 tests time clue over doer. Not the same sub-skill. S10 H2 ("which ending tells that an action is finished") also isolates the only -ed choice. | Re-map to C03/C12 or rewrite S10 to a plural-doer note. |
| SHOULD | 6-C10 -> C11, 6-S07 -> S11 | C10 (set 2) names sentence 5 as the suspect; sentence 5 is half of C11's key (set 3). | Use a different sentence in C10. |
| NOTE | 6-p3 (sentence 3, 8, 9) | Passage says a zoo guide "explains that otters hold hands while they sleep" and that otters "slide down a muddy hill" and pups learn "from its mother". Only sea otters hold hands (a-z-animals page above), while sliding and mother-taught swimming are river otter behavior (outdoorhub page). It reads as one animal. | Say "sea otters" in the hand-holding sentence or change it. |
| NOTE | 6-S06, 6-S11 | Stem says "lines", the passage calls them sentences and `why` says "sentences 2 and 6". | Pick one word. |
| NOTE | 6-C07 | Part A key fixes the Part B ending; only wording choices remain. | Acceptable. |
| NOTE | Overlap | Item-text set/multiset max 0.207/0.209 (L6 pair at the limit); passage-included multiset 0.225 (S12/C04). Legacy 6-T4 reuses Learn It's "started laughing at the clown". | none |
| NOTE | Live choices | After hint 3, every other item keeps at least two choices (hot-text pick two keeps four or more). Hint 3 of the -ing family always removes only the -ing choice. | none |
| NOTE | Twin like | All other 14 `like` links are honest in type and sub-skill. | none |

### Lesson 7: action verbs -- CHANGES REQUIRED

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 7-C15, 7-S15 | Hint 3 enumerates the other three ("Hugging, carrying and waving can all be watched" / "Painted, graded and sprayed are all done by people"). Exactly one choice is live. | Rewrite hint 3 to remove at most one choice; keep H1/H2 as strategy. |
| MUST | 7-S04 | Dropdown `glided / went / drifting`. The stem says "Sentence 5 says the writer went across the water", so `went` is already excluded, and hint 3 excludes `drifting`. After hint 3 only the key is live. (C04, C13, S13 have two live and are fine by count.) | Add a second plausible verb that fits but paints a weaker picture (e.g. `moved`, `paddled`), or drop the `went` echo from the stem. |
| MUST | 7-C04 vs 7-C07 | Two core items on the same sentence 3 asking the same thing (a stronger verb than `went`; keys `hurried` and `dashed`). C07 Part A prints `went`, the answer C04's stem hides. | Move C07 to another sentence or make one of the two test an action-vs-describing word. |
| SHOULD | 7-S02 (and 7-P5, 7-T4 legacy) | `realized` (and `guessed`) as an action verb: thesaurus.com lists think, imagine, dream, remember; realize/decide/guess are not on it, and stative-verb lists (perfectyourenglish, lingbase) count realize, imagine, remember, guess as stative. A child, parent or teacher can legitimately dispute 7-S02. | Use a verb from the fetched list (wondered, imagined, remembered). 7-C06/S06 `decided` is milder (decide is classed as an action verb); keep `imagined`, `dreamed`. |
| SHOULD | Teach | "Raced tells more than went" is the key of C07 Part A, C14, S07, and the distractor logic of C04, C13, S13; `raced` is the key of P2. | Use an untested pair (e.g. walked/strolled). |
| SHOULD | Learn It / Watch Me | Neither models strong vs weak verbs (C04, C05, C07, C10, C13, C14: six of fifteen) nor counting two verbs (C08, C11). | Add a third Watch Me on picking the stronger verb. |
| SHOULD | 7-C05, 7-S05, 7-S10 | Hint 2 (and S10 hint 1) share a word only with the key: `picture`, `lets` (check-content warns). | Reword hints so they do not echo the key wording. |
| SHOULD | 7-C04, S04, C13, S13 | Each strong-verb dropdown offers one plausible strong verb, the weak original (`went`/`got`), and a form or word that does not fit the grammar. Easy by elimination. | A second grammatical candidate in one slot. |
| SHOULD | 7-C09, S09 (and P1, T1) | Plain identification in six-word sentences ("Mia painted a poster for the fair", "Leo mowed the lawn before lunch") reads as grade 1-2; also S01, C12/S12. | Lengthen with grade-3 context, or leave to Together/Tests. |
| SHOULD | 7-S15 `like` C15 | C15 tests visible vs mental actions; S15 tests non-person doers. Different sub-skill. | Make S15 a mental-verb counterexample, or re-map to C03. |
| SHOULD | 7-S05 | Stem says a writer swaps "moved" for "rippled", but `moved` is nowhere in p4; the passage already says rippled. | Reword to "Compare rippled with moved". |
| SHOULD | Unused passage | 7-p6 (Magnet Experiment) is referenced by no item. | Use or drop. |
| NOTE | 7-S07 Part B | Option "the ladder" is from sentence 3, not sentence 4, and `did` and `slowly` do not fit the slot; only `scrambled` is usable. Acceptable. | none |
| NOTE | 7-C11, S11 | Verified: exactly the keyed two sentences have two action verbs among the five shown. | none |
| NOTE | Overlap | Item-text set 0.211 (S03 vs C09), multiset with passage 0.226 (S07 vs C07). | none |
| NOTE | 7-C14, S14 | "weakest verb" is a judgment, but the options separate it. Fine. | none |
| NOTE | Gate | check-content warns hint 1 longer than hint 3 (C04, C15, S06, S15). | optional trim |

### Lesson 8: adjectives and adverbs -- CHANGES REQUIRED

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 8-C03, 8-C05 -> 8-C06 | Giveaway inside core, same pattern as lesson 6. C03 asks for the adverb in sentence 4 (`gently`) and C05 says "In sentence 11, loudly tells about cheered. Why is loudly an adverb?" Both are in set 1. C06 (set 2) asks which two shown sentences have a how-adverb; the key is sentences 4 and 11. | Move C03/C05 to other sentences (e.g. 7 `patiently`) or retarget C06. |
| SHOULD | Learn It / Watch Me | Neither models adverbs of when/where nor non-`-ly` adverbs, yet C06, C11, S02, S11, C15, S15 depend on them (Teach names how/when/where but gives no when/where example). Also no `-ness` noun form in Learn It. | Add a third Watch Me (e.g. `soon`/`there`). |
| SHOULD | 8-C04, C12 (S04, S12, P4, T3, T5, C13, S13) | The same item nine times: a three-form dropdown (`heavy/heavily/heaviness`, `rusty/rustily/rustiness`, `tired/tiredly/tiredness`, `sticky/stickily/stickiness`), cue = "blank before a noun". C04 and C12 differ only by the word. | Vary one core copy (e.g. a predicate adjective "The soup tasted ___" or a "how" adverb after the verb). |
| SHOULD | 8-C07 | Part A hint 2 ("Ask what kind of thing Mr. Reyes handed out. The word that answers is the adjective") answers Part A. | Strategy only. |
| SHOULD | 8-S07 | Prompt uses "manner" ("which choice shows the manner of the kicking"), a word above grade 3 and not used in Teach (which says "how"). | Say "how". |
| SHOULD | 8-S15 | The key `tomorrow` is the only choice without -ly; the other three adverbs all end in -ly. The item can be solved with no grammar. C15 is fine (lovely is the one -ly word that is not an adverb). | Add a non-ly distractor that is not an adverb, or swap one -ly word. |
| SHOULD | Unused passages | 8-p3 and 8-p6 are referenced by no item. | Use or drop. |
| NOTE | 8-C11 sentence 6 | "They worked steadily all morning." contains the time phrase `all morning`; a careful child can defend selecting it as "tells when". The stem says adverb, and `all morning` is a noun phrase, so the key stands. | Optional: choose a sentence without a time phrase as the distractor. |
| NOTE | 8-C14, S14 | `moved graceful` and `answered polite` are non-standard (graceful has no adverb sense in Oxford; polite's adverb is politely in M-W). Defensible. | none |
| NOTE | 8-p6 | Salt-crystal sequence is now supported (sciencefun page). The passage is unused. | none |
| NOTE | `tiredly` | Weak dictionary support (M-W thesaurus entry carries no label). It is only a distractor. | Prefer a safer word (e.g. `sleepy/sleepily/sleepiness`). |
| NOTE | Gate | check-content: hint 1 longer than hint 3 on C07, S07, S15, P3. | optional trim |
| NOTE | Overlap | Max 0.194/0.195. S05 key longest tie only. | none |

### Lesson 9: common and proper nouns -- ACCEPT

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | Teach / Learn It | Titles are not taught, yet Mr. Diaz (C04), Ms. Patel (P2), Mr. Chen (S13), Dr. Singh (S01), Ms. Ramirez (S06), Mr. Okafor (T1) and Aunt Rosa (C14) rest on them; Purdue and Grammarly confirm the rule (Aunt X capital, my aunt not). Learn It 2 does teach multi-word names. | Add a Teach line: "Titles before a name get capitals: Mr. Diaz, Dr. Singh, Aunt Rosa." |
| SHOULD | 9-C12, C13, S12, S13 | H2 gives the deciding feature ("a special name starts with a capital letter") and the distractors are lowercase copies of the key; with H3 the key is the only one left in C12/S12 slot 0 and C13/S13 slot 0. | Make H2 about "name of one" and keep the capital check for Show me how. |
| SHOULD | 9-C15 | H2 ("Check the first word of each sentence") points at the key's capital letter. | Reword as "Look at every capital letter and ask what kind of word it is on." |
| SHOULD | 9-p1 / 9-C06 | Title "Spirit Week at Pine Ridge", body "spirit week" in lowercase. Spirit Week is often a capitalized event name, and sentences 2 and 13 are in C06's target list ("special day"). Inconsistent inside a lesson on capitals. | Rename to an unambiguous common phrase ("dress-up days") in title and body. |
| SHOULD | Concept overlap with L-GUM2 lesson 3 ("Capital letters for proper nouns") | C12, C13, C14 (and S12-S14, T5) test capitalizing proper nouns, which that lesson already drills with the same days/places/people. The standard here is identifying proper vs common nouns. | Fine in moderation (three of fifteen); keep it to three. |
| SHOULD | Unused passages | 9-p3 and 9-p6 are referenced by no item; core uses only p1 and p2. | Use or drop. |
| NOTE | 9-C10 -> C11 | C10 (set 2) says sentence 1 names Maple Street Library; sentence 1 is half of C11's key (set 3). Partial. | Optional. |
| NOTE | 9-S13 slot 0 | `spring` is a correct completion, not a special name. The prompt asks for a special name, so the key stands. | Optional: lowercase `fall`. |
| NOTE | 9-S10 and S05 | Use "title" for a name (Sunny Side Diner); "title" also means Mr./Dr. | Say "name". |
| NOTE | 9-C09 | Option "a photo of it" is odd as a distractor. | Optional. |
| NOTE | Overlap | Max 0.203/0.191. | none |
| NOTE | Facts | Colorado River, Grand Canyon, Lake Erie, Mount Hood, Boston, Denver, Utah: standard; sources above. | none |

### Cross-lesson notes

- The two giveaways (6-C03/C04 -> C06; 8-C03/C05 -> C06) are the same mistake: stems that print the sentence numbers of the errors, while the same set's hot-text asks the child to find those sentences. A cheap check: for every hot-text with passage targets, flag when two other core stems print the key sentence numbers.
- Four counterexample items (6-C15/S15, 7-C15/S15) have a hint 3 that lists the three wrong choices. The check-content hint-narrowing rule does not see it. A rule "hint 3 must not contain the words 'three choices'/'all done by' ..." would catch it.
- Unused passages: 7-p6, 8-p3, 8-p6, 9-p3, 9-p6. Five passages with facts to maintain and no item.
- Hint 3 leaves at least two choices for every item except those listed. Longest-key unique: 0 in new items.
- Items I could not mark down: 38 per lesson solved correctly; passage numbering, sentence refs in all stems, `why`/`how` refs to sentence numbers (checked by hand against the passage text for every hot-text and every item that names a sentence) are correct in all four lessons.
