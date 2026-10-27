
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
| 6 Verb endings (-s, -ed, -ing) | CHANGES REQUIRED | 3 | 8 | 6 |
| 7 Action verbs | CHANGES REQUIRED | 3 | 9 | 5 |
| 8 Adjectives and adverbs | CHANGES REQUIRED | 1 | 7 | 6 |
| 9 Common and proper nouns | ACCEPT (the SHOULDs are worth doing, none blocks) | 0 | 6 | 6 |

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


## Second review (lessons 1-5)

Reviewer: independent second reviewer (did not author, did not write the first review). Lessons 1-5 of `js/data/lessons/L-GUM1.js` (STATUS rows `B7a` 1-5), reviewed in the revised state after the author's phase 2. Read-only: no lesson edits, no git. Local server (port 8847, pid 23401) killed by pid. Scripts and answers: `scratchpad/b7s/`.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 1 Complete sentences | ACCEPT (SHOULDs recommended) | 0 | 2 | 4 |
| 2 Singular and plural nouns | CHANGES REQUIRED | 1 | 4 | 3 |
| 3 Question words | ACCEPT (SHOULDs recommended) | 0 | 3 | 3 |
| 4 Capital letters | CHANGES REQUIRED | 2 | 3 | 3 |
| 5 Plurals with -s or -es | ACCEPT (SHOULDs recommended) | 0 | 2 | 3 |

All five first-review MUST classes are genuinely fixed in the files (table below). The remaining MUSTs are all in child-facing hints of items that are not new core items (L2 P4, L4 P3, L4 P5), i.e. things the first review only partly reported.

### Method and blindness

- **Blind solve.** `b7s/blind.js` loads `L-GUM1.js` in a Node `vm` sandbox and prints, per lesson, the passages, every core item (refs resolved), S01-S15, Together and Test, with choices, dropdown options, hot-text options, ebsr parts shuffled by a seeded LCG (`9100 + 131*lessonIndex`). No key, `why`, hints, `how`, `clue`, `like`, `misconception` or addons were printed; hot-text targets were printed as the passage sentence. No lesson figures or alt text exist in these five lessons. Answers were saved (`ans1.json`-`ans5.json`) before any key was read; `compare.js` un-shuffled them.
- **Items solved: 195** (L1 39, L2 36, L3 34, L4 36... counted as 15 core + 15 similar + Together + 5 Test per lesson). **Agreement 194/195 (99.5%).** The one miss is my slip, not an item flaw: 4-C13 slot 2, I capitalised "My brother and I" after "so" mid-sentence (the key `my brother and I` is right; the trap works, and hint 3 now rules the capital out).
- **Fully blind?** Yes. Before solving I printed only field names and counts. I did not open the author log, the first review, the keyed dump or the raw lesson source for those items until `ans*.json` were saved. (I had listed the scratchpad directory, which shows earlier reviewers' folder names; I opened none of them for content before solving, only their generic scripts afterwards.)

### Mechanical audit results

- **Points / DOK / structure** (`struct.js`): every ms and pick-two item is 2 points, ebsr and match 2, two-slot dropdown 2, no mismatch in any item. mc in core 6/5/5/5/6 (cap 6), four or more formats, 3+ technology-enhanced, DOK 1 count 0/0/0/0/1, DOK 3 count 6/6/4/4/4, 7-8 draft items per lesson (plan wants 5). No passage carries more than 5 core items. Every core item has a twin by `like`; all `like` ids resolve.
- **Passages**: all 29 drafts are 101-115 words excluding "(n)" (L3 p6 is the shortest at 101); my FK (own syllable counter) is 0.9-3.9, max 3.87 (L2 p1/p5), under 4.5.
- **Hint ladder, every item** (read item by item, all 195 including addons for refs and Together): live choices after hint 3 alone are two or more for every new core and twin item. Exactly two live (acceptable): L1 C04, C12 slots, S04; L2 C04, C08, C12, S04, S08, S12; L3 C04, C12, S04, S12; L4 C12, S04, S09, S12; L5 C04, C12, C13 slot 2, S04, S12, S13 slot 2. Findings in Together/ref addons are in the tables (L2 P4, L4 P3, L4 P5). Hint 3 never quotes a key option. The first-review cases (5-C09, 5-C15, 5-C13/S13, 1-S12) now name one wrong choice or leave two live.
- **Longest key** (`longest.js`, all mc, ms, ebsr parts, dropdown slots, hot-text options, incl. choose-two): no new core or twin item has a uniquely longest key; choose-two keys are never the two longest in new items. Unique-longest only in legacy items: L1 P5, L2 T2 T5, L3 T2 T4, L4 P2 (and P5 two keys are the two longest), L5 P1 P5 T1 T5. This matches the author's list.
- **Twin overlap** (`jac3.js`, token Jaccard over prompt, stem, text, choices, options, rows, cols, ebsr parts, targeted sentences): twin x core, all 15 pairs per twin, max set/multiset 0.194/0.200 (L1), 0.203/0.209 (L2), 0.203/0.209 (L3), 0.192/0.209 (L4), 0.196/0.209 (L5). **All at or below 0.21 and identical to the author's table.** Core x core pairs go over 0.21 in places (L3 C04/C12 0.33, L1 C05/C10 0.31, L4 C05/C10 0.29, L5 C04/C12 0.27); each of those pairs differs in text, context and key (see NOTES). Twin x Together/Test highest 0.265 (L3 S09/T3, frame words only).
- **Duplicates over all `js/data`** (`dup.js`, `dup2.js`, exact strings/sentences of four or more words and 5-grams): only house prompts and hint templates repeat. One real finding: the L2 p3 title "A Walk to the Pond", with the pond behind the school, is also `L-V3.js` p4 (see L2 SHOULD). Legacy phrases ("Our class planted bean seeds" also in L-GUM5) are unchanged originals.
- **Learn It / Watch Me / grown-up text vs items** (`lt.js`): no Watch Me or Learn It example sentence is reused in an item; only generic rule phrases overlap. Practice P1-P5 and Test T1-T5 are byte-identical to the pre-B7a original (`b7a/L-GUM1.orig.js`).
- **Gate**: `node verification/check-content.js --all` PASS, 0 failures; no warnings on `SK-GUM1-1..5`.
- **Browser, 390 x 844, touch, one Chromium process per lesson** (`run390.py`): sets y, y2, y3, real taps and `select_option` on every control, Check pressed, passage tab opened for every passage item. **75/75 core items accepted the key ("is-right")**, no horizontal scroll, zero page errors, no passage mismatch. (Answers were driven from the keyed data, so this checks controls and scoring; the blind solve checks the keys. I did not press the hint button in this run; hints were audited from the data.)

### Web sources (this session)

- `cants`: Merriam-Webster https://www.merriam-webster.com/dictionary/cants lists "cants" as a verb form (canted, canting, cants) and `cant` has noun senses (insincere pious talk; a slanted surface; a squared log). It is a real word.
- `gas`: plural "gases also gasses" https://www.merriam-webster.com/dictionary/gases . Only a non-key option (`gas becomes gases`, 5-C15), so safe.
- `tadpole`, `beetle`, `bean`: M-W pages exist (e.g. https://prod-bytebunny.merriam-webster.com/dictionary/tadpoles) but the entries were not fetched; I know of no unchanged-plural variant for these, so the replacements for minnow/seed are accepted on that basis (NOTE).
- Command's understood subject "you", imperative is a complete sentence: https://www.grammarly.com/blog/sentences/imperative-sentences/
- Fragments lack a subject or main verb; examples of no-verb and no-subject fragments: https://owl.purdue.edu/owl/general_writing/mechanics/sentence_fragments.html (the page labels an -ing phrase as a fragment but does not state the -ed participle case; see 1-S11 NOTE).
- Apostrophes show possession and are not used for noun plurals: https://owl.purdue.edu/owl/general_writing/punctuation/apostrophe_introduction.html
- -es plural rule (s, x, z, sh, ch, and ss), quiz becomes quizzes: https://learnersdictionary.com/definition/-es and https://www.grammarly.com/blog/grammar/spelling-plurals-with-s-es/ (no page found that mentions the stomach/stomachs exception, only the grown-up note uses it; standard).
- The pronoun I always capitalised, I'm/I'll: https://languagetool.org/insights/post/grammar-uppercase-i/ (cited in the author log and first review; the dictionary.com page I fetched only gives the history, not the rule).
- Question words who/what/where/when/why/how: I did not fetch a dictionary page (the allowlist refused merriam-webster `/dictionary/` pages directly; search results only). The mappings used (person, thing or action, place, time, reason, way, how many = amount) match the lesson's own Learn It and are standard.
- Official wording (`official` in `js/data/standards.js`, page 15, grade 3 Reinforce): L1 "Use nouns and verbs to share complete thoughts when speaking."; L2 "Form and use singular and plural nouns when speaking."; L3 "Use interrogatives to ask questions when speaking."; L4 "Capitalize the first word of a sentence and the pronoun I."; L5 "Form regular plural nouns by adding -s or -es." Items are written recognition; the Grown-up speak card carries "when speaking" (L1-L3). NOTE only.

### Confirmation of the first review (each MUST and SHOULD checked in the files)

| First-review finding | Status in the file | Evidence |
|---|---|---|
| L1 MUST C08 why "slowly" | FIXED | why now "quietly and bags do not work" |
| L1 MUST S08 why "beside" | FIXED | why now "Next to the shelf and underneath tell where" |
| L1 MUST S12 hint 3 removes both distractors | FIXED | H3 names only a comma; slot 1 untouched |
| L1 SHOULD C05/C10 same logic | FIXED | C10 is now "a verb is only half of a sentence" |
| L1 SHOULD S02 "Which one cannot you find" | FIXED | "can't you find" |
| L1 SHOULD P2/P5 legacy refs in core, P2 hint 3 | FIXED | no refs in L1 core; P2 H3 now strategy only |
| L2 MUST C11 minnow | FIXED | key is `Many tadpole` |
| L2 MUST C13 seed distractor | FIXED | distractor is `Many bean sprouted` |
| L2 SHOULD C12 "not a word" | PARTLY | why now "does not fit here"; the distractor `cants` is still a real word (SHOULD below) |
| L2 SHOULD C05 distractors | FIXED | all four options now argue "why correct" |
| L2 SHOULD twins vs Teach wording, S11 hint 3 | FIXED | "clue word" used; S11 H3 readable |
| L2 SHOULD P3 legacy | FIXED | P3 is Together only (P4 remains the one ref) |
| L3 SHOULD how never modeled/keyed | FIXED | Watch Me 3 is how; C14 keys how |
| L3 SHOULD S10 hints 2-3 | FIXED | H2 neutral, H3 removes one |
| L3 SHOULD C10/C12 pre-eliminate C11 | FIXED | C11 shown sentences 3,5,8,9,10 do not include 4, 6, 7 |
| L3 SHOULD S01/P3 answer echoed in stem | NOT FIXED | see L3 SHOULD |
| L4 MUST S10 | FIXED | S10 is now a DOK 3 "Pia thinks i'm ... Do you agree?" |
| L4 SHOULD C07 hint 2, C06 same-draft giveaway, legacy P3/P5 refs | FIXED | H2 neutral; C06 targets 2, 8, not 6; no L4 refs |
| L4 SHOULD C05/C10 vs Teach | PARTLY | Teach still says "The word I is always..." and "When I joins another word ... keeps its capital", close to the keys (NOTE) |
| L4 SHOULD P5 hint 3 describes the three wrong options | NOT FIXED | P5 H3 unchanged, see L4 MUST |
| L5 MUST C09, C15 hint 3 | FIXED | each names one choice and does not remove it |
| L5 MUST C13/S13 slot 2 | FIXED | H1 no longer says "so each needs a plural"; two live |
| L5 SHOULD same-draft giveaways, C07/C10, S02 like, p6 orphan, Teach examples | FIXED | C06 now keys 4 and 8, C10 vs C07 different contrast, S02 pick one like P4, p6 removed, Teach now flag/mess/ditch and princess/trench/marble |
| L5 SHOULD P3 hint 3 (toy) | FIXED | H3 now "adds -es to a noun that ends in y" (true: `toyes`) |

### Author log: claims checked

- **True (reproduced):** twin x core overlap table (to three decimals); no uniquely longest key in new items and the legacy list; shortest-passage word counts; FK all under 4.5; P1-P5 and T1-T5 unchanged; gate PASS with no SK-GUM1-1..5 warnings; the live-choice recount outcome for lessons 1, 3, 5 (no real narrowing found by me beyond the items below).
- **FALSE or stale:**
  1. "Phase 2 fixed every one that was reported" and the Known-limits sentence: the first review's L4 P5 hint 3 (describes all three wrong options) is unchanged, and the L3 S01/P3 echo and the `cants` distractor were kept.
  2. The refs table is stale: it lists L1 refs P2,P4 (actual: none), L2 P3,P5 (actual: P4 only), L3 P2,P4 (actual P3,P4), L4 P3,P5 (actual: none). "Together = practice minus the two refs, 3 items in each lesson" is also stale (actual 5/4/3/5/3).
  3. Opening deviation note says Teach was "unchanged except lesson 1 `learn`". Teach text actually changed in L1, L4 and L5 and the L3 `learn` gained a third Watch Me (disclosed later in phase 2 prose, not in this note).
  4. "Highest FK 3.44" for lesson 1: my counter gives 3.70 (p1). Under 4.5 either way (counter difference).
  5. "No hint narrows the choices ... hint 3 removes at most one choice" (Gate section): false for L4 P5 and not true for L2 P5 H3 (removes two of three distractors, leaving two live, allowed).

### Lesson 1: complete sentences (ACCEPT)

Strengths: three fragment types (no who, no verb, command) are balanced; hot-text scopes match key counts; C10 and C15 are good DOK 3 refutations; hint 3 never removes more than one distractor per slot.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | 1-S11 (sentence 2) and p6 sentence 2 | `A rain gauge made from a clear plastic bottle with a ruler taped to it.` is keyed "never shows what anyone does or is". `made` and `taped` look like verbs to a grade 3 child; the item needs the participle idea (Purdue labels such phrases fragments, but the child-facing lesson never teaches it). First review called it NOTE; the how line admits the trap. | Replace with a fragment without a participle (e.g. `A rain gauge with a ruler on its side.`), update how and why. |
| SHOULD | 1-C05 / S05 and Teach point 1 | C05's key ("It is a command, so the person told is the doer") is Teach point 1 almost verbatim ("It does not write the who, but it tells the listener to act") and Watch Me 3. A reader of Learn It can pick it. | Acceptable as recall in a Reinforce lesson, but reword one of the two. |
| NOTE | 1-P5 (Together, legacy) | Unique-longest key (34 vs 29); grade 1-2 sentence. Together only. | none |
| NOTE | Grade level | Drafts are FK 2.2-3.7 with simple sentences; content meets grade 3 only through the drafts. Plan says do not lengthen to look harder. | none |
| NOTE | 1-C06/C11 | Extra fragments in the same draft (p2 sentences 7, 9) are used by C07, C10, not by hot-text. | none |
| NOTE | Standard | "when speaking" served by the grown-up card. | none |

### Lesson 2: singular and plural nouns (CHANGES REQUIRED)

Strengths: clue-word frame is clear; apostrophe and double-s distractors are real errors; minnow/seed replaced with single-plural nouns; C05 fixed.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 2-P4 (core ref, set 1) hint 3 | "Two of the sentences use a, and a goes with just one thing." Only one sentence contains "a" (`A frog sat on a log.`, twice). The other three sentences have no "a". The hint states a false fact about the item. | "One sentence uses a, and a goes with just one thing." |
| SHOULD | 2-C12 distractor `cants` (hint 3 "Cants does not fit this sentence") | `cants` is a real word (verb form; noun `cant`; M-W link above). The key is clear in context (shelf, a few), but the plan's variant rule (minnow, seed) says a distractor should be an error, not another word. | Use a clear non-word (e.g. `cannes`/`canns` or `cans'`); update how/why/hint 3. |
| SHOULD | Learn It / apostrophes | Eight items (C03, C07, C08, S03, S07, S08, C10, S10) use an apostrophe distractor and C10/S10 are keyed on "an apostrophe would show belonging". Learn It never mentions an apostrophe (possessives are a later skill), so the rule first appears in the hints. | Add one Learn It sentence: "An apostrophe shows that something belongs to someone (Jada's pencil); it does not make a plural." |
| SHOULD | 2-S15 key (class/glass) | Counterexample needs `class` and `glass` as singular nouns ending in -s; Learn It says nothing about this, so a new fact first appears in the item. | Add to Learn It or use `bus` in the Watch Me. |
| SHOULD | 2-C04/S04, C12/S12 | Dropdown frame repeats four times ("number or clue word before the blank, -s form, singular, misspelling"). Pairs are core/twin by design, but C04 and C12 are both set 1/3 core with the same logic; only the clue word differs (`three`, `a few`). | Vary one core copy (e.g. a noun after `every` that needs the one form). |
| NOTE | 2-C01 H3 / S01 H3 | Both hints say "every" sounds like a crowd but goes with one thing; resolves the two `every/each` rows. Allowed (completes part of a match). | none |
| NOTE | 2-P3, T4, P2 (Together/Test, legacy) | Kindergarten-level "a pencil / several crayons", "one apple and two cookies"; plan 4.8 lists P2 as weak. Together/Test only, unchanged originals. | Revise in a later pass. |
| NOTE | 2-S10 hint 3 | Removes two of three distractors; two live (key and "Agree. Plural nouns ... bowl's"). Allowed. | none |

### Lesson 3: question words (ACCEPT)

Strengths: place, time, reason, person, way and amount are never ambiguous; C10/S10 (which question can sentence 7 answer but 6 cannot) and C15/S15 (what for actions, how much) are strong DOK 3; Watch Me now models time, reason and way.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | 3-S01 and 3-P3 | Plan 6.5, answer wording echoed in the stem. S01 stem "the place its owner dropped it" and key "Where did the owner drop this mitten?" share owner/drop/mitten; P3 "the reason the park closed" and key "Why did the park close today?". First review asked for this; S01 was only reworded. | S01: "...hopes to learn where it came from" with a different verb in the key; P3 optional. |
| SHOULD | 3-P4 (core ref, set 1) and 3-P3 | Both are grade 1-2 first-word matches (`Where did you put the leash?` / `Where do penguins live?`), the first two items of the fifteen; P4 is solvable by reading the first word. | Replace in the core with a content item (e.g. choose the line whose answer would be "near the window"), keep as Together. |
| SHOULD | 3-C13, S02, S13 | Three more items are solved by the first word of each line ("two begin with Why/When/Who"). C14 is now content-based, which helps. | Make one of S02/S13 content-based. |
| NOTE | 3-C09, S09 H3 | Each gives away one row (the because/cause row). Allowed (completes part of a match). | none |
| NOTE | 3-C04/C12/S04/S12 | Same frame "{0} did ... ?" four times; component differs (why, what, why, how). | none |
| NOTE | Standard | "when speaking" served by the Grown-up card. | none |

### Lesson 4: capital letters (CHANGES REQUIRED)

Strengths: every item has one defensible answer; I in the middle is well contrasted (C15/S15 are good); S10 is now a faithful DOK 3 twin; "shown" scope is honest.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 4-P5 (Together) hint 3 | "Two sentences begin with a small letter, and one more starts with a small word that is a question." This describes all three wrong options (B, D, E), leaving only the two keys in a pick-two item. First review reported it; it is unchanged. | "Check the sentences that start with a capital letter and look inside them too." (no count of wrong options). |
| MUST | 4-P3 (Together) hint 3 | "Two of the four sentences begin with a small letter." Only one does (`the bus came late today.`; `Dad said i could help.` starts with D). False statement in feedback. | "Check the first letter of every sentence, then look for the word I in the others." |
| SHOULD | 4-P4 hint 2 | "Look at the very first word of the sentence." plus the stem `on Saturday, my cousin and I went fishing.` yields the key (`on`) without the choices. Together item. | "Check each word against the two rules." |
| SHOULD | Set 2: C07, C09, C10 | Three of five set 2 items rest on the same fact (a short form i'm / i'll contains I). C10's key states it outright and settles C09's count (3, not 2) and C07's Part A; "no giveaways inside a set". | Move C09 to a plain count (no short form) or change C10 to a different capital rule (e.g. a title or `Mom`). |
| SHOULD | 4-C02 vs 4-C08 | Both are "pick the two correctly written sentences from five standalone sentences" testing first-word plus I; they differ only by sentences (plan 6: pairs must differ in two of text, component, verb, context). | Turn C08 into an error-finding item in a draft, or switch components (e.g. a name or a title). |
| NOTE | Teach vs keys | Teach point 3 ("When I joins another word, as in I'm or I'll, the first letter keeps its capital") is nearly C10's key. | Reword one. |
| NOTE | 4-C05 vs Teach | C05 key "I names the writer, and that word keeps a capital in every spot" restates Teach. Plan rule 7. | none |
| NOTE | Grade level | Drafts FK 0.9-2.3, the lowest of the five lessons, inherent to the skill. | none |

### Lesson 5: plurals with -s or -es (ACCEPT)

Strengths: the s/x/z/ch/sh rule is applied consistently; the Teach examples (flag/mess/ditch, princess/trench/marble) no longer equal tested nouns; C15 and S15 (jar; path/h) are real counterexamples; the apostrophe, -ies and doubled distractors are plausible errors, not valid variants.

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | 5-P3, P4 (core refs, set 1) | The first two core items are easy single-sentence checks (`dishs`, `lunchs`), and set 2 reuses draft p1 for C06/C07 (a "new context" set that is not new). | Move one of C06/C07 to p2 or p3 (p3 has only C12). |
| SHOULD | 5-S05 and S06 (same draft p4) | S05 explains matches vs balls and S06 then targets sentence 9 (matchs) and 4 (balls). Using S05 first gives S06 away. | Put S05 on a different sentence pair. |
| NOTE | 5-C13/S13 H3 | Completes slot 2 by stating that the noun ends in w/t so no -es; two live remain. Allowed scaffold. | none |
| NOTE | 5-p3 sentence 7 | `inchs` is a second error that no item uses; fine because no item says "the only error". | none |
| NOTE | Repeated `-ies` distractor | `-ies` nonwords appear in C03, C04, C12, C13, S03, S13; a child learns "ignore the -ies option". | Vary one. |

### Cross-lesson notes

- L2 p3 title "A Walk to the Pond" and the pond-behind-school premise duplicate `L-V3.js` p4 (title, same setting). SHOULD (L2): rename.
- Core x core overlaps over 0.21 (L3 C04/C12, L4 C05/C10, L5 C04/C12) reflect shared frames; text, context and key differ, so they pass the plan 6 two-of-four test.
- Remaining legacy items are the same easy ones listed by the first review; they sit in Together/Test or as core refs in L2, L3, L5.
- Items I could not mark down: all 75 core and 75 twin keys have exactly one defensible answer; hot-text scopes, sentence references in stems, `why` and `how` match the passages.

## Second review (lessons 6-9)

Reviewer: independent second reviewer (did not author, did not write the first review). Scope: the revised last four B7a lessons in `js/data/lessons/L-GUM1.js` (array indices 5-8): 6 verb endings, 7 action verbs, 8 adjectives and adverbs, 9 common and proper nouns. Frozen copy `/home/claude/pp-content`. Read-only: no lesson edits, no git. Test server (port 8933) killed by pid.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 6 Verb endings | ACCEPT (SHOULDs recommended) | 0 | 4 | 5 |
| 7 Action verbs | ACCEPT (SHOULDs recommended) | 0 | 4 | 5 |
| 8 Adjectives and adverbs | CHANGES REQUIRED | 1 | 3 | 4 |
| 9 Common and proper nouns | ACCEPT (SHOULDs recommended) | 0 | 4 | 5 |

All first-review MUSTs are genuinely fixed in the files. One new MUST: 8 Teach prints the key sentence of 8-C12. The log has two small false claims (below).

### Method and blindness

- Own Node vm loader (scratchpad `b7b/blind.js`): prints passages and every core item (refs resolved), S01-S15, Together and test, seeded shuffle, no key, why, hints, how, clue, misconception or like. Hot-text targets printed as passage refs and resolved by hand. 152 items (38 per lesson). Answers saved (`b7b/ans6-9.json`) before any key was extracted.
- **Agreement 152 of 152 (100%).** Fully blind: before solving I printed only field names and counts (no values of keys). The first review, author log and keyed dumps were read after the answers were saved.
- Close calls solved as keyed but open to challenge: 6-C15 (distractor "worried" is an -ed word, an adjective), 7-S06 (sentence 8 "decided to follow" has a thought and a movement), 8-C11 (sentence 6 "all morning"), 9-S13 slot 0 (spring fits but is not a special name).
- Scripts (`b7b/`): `keyed.js` (keyed dump), `jac.js`, `longest.js`, `leak.js` and `keyleak.js` (same-draft and key giveaways), `keyaud.js` (key text vs why/hints), `sentchk.js` and `sentmatch.js` (sentence numbers and quotes against passages), `learn.js` (Teach/Learn overlap), `fk2.js`, `run390.py`.
- Mechanical results:
  - Keys appear in `why` for every item. Sentence numbers in `why`/`how`/hints match the key targets and passages in every hot-text item. Every cited sentence exists and the item text reproduces it.
  - Twin overlap, item text (stem, prompt, text, choices, options, rows, columns, ebsr parts, resolved target sentences), all 15 x 15 pairs per lesson: set / multiset maxima 0.196/0.209 (L6), 0.200/0.196 (L7), 0.194/0.195 (L8), 0.203/0.195 (L9). All at or under 0.21. Matched `like` pairs at most 0.206. Twin vs Together/Test at most 0.222 set (7-S03 x P1, multiset 0.167). With the passage text added (my extension, not the ceiling's definition) the multiset reaches 0.231 (6-S12/C04) and 0.222 (7-S07/C03); NOTE only.
  - Every `like` is a distinct core item of the same type (15 of 15 each lesson).
  - Passages (20): 102-121 words excluding "(n)", numbering sequential. Flesch-Kincaid: repo `readability.py` formula highest 4.07 (6-p3), then 3.87 (6-p1), 3.67 (9-p5); pyphen syllables highest 3.48. All at or under 4.5. Merriam-Webster syllable breaks were reachable for only two entries (calm-ness, care-ful); both agree with the heuristic.
  - Longest key (new core and twin, mc, ms, ebsr parts, dropdown slots): none uniquely longest. Ties only. Choose-two with both keys the two longest: 7-S08 (three-way tie at seven letters). Hot-text sentence targets where the two keys are the longest sentences differ by 1-4 characters (6-C11, 9-C11): NOTE. Uniquely longest legacy items: 6-T2 slot 0, 6-T4, 7-P5 (core ref: remembered 10 vs 4-6), 7-T4, 8-P4 slot 1, 9-P3, 9-P4 (core ref), 9-P5, 9-T1, 9-T5. Unchanged originals, already known to the author (NOTE).
  - "helper word": gone. In lessons 6-9 the only "helper" is a person (9-p1, 6-S11). L-GUM3's "helper word like has" is correct.
  - Duplicates over all `js/data` (6-word runs, the first review's method reused by `xdup`-style scan of `keyleak.js`/`learn.js` against Teach and Learn): no new item or passage is copied. House-style prompts repeat only.
  - `check-content.js --all`: PASS, 0 failures; only 9 hint-length warnings on lesson 9.
- Browser (Chromium 390x844, touch, mobile; one browser process per lesson; `PP_PLAYER.start` on the three core sets; real taps on every control, Check pressed, passage tab opened for every passage item): **60 of 60 core items accepted, no horizontal scroll, no page errors, no passage mismatch.** The first run of 9-P2 timed out because the harness matched "river" inside "Chattahoochee River"; rerun with an exact match: 15 of 15.

### Live-choice recount (every item, hints 1-3, by hand against the printed choices)

After hint 3 at least two choices remain live for every item in all four lessons, and hint 3 names a distractor in each item (hot-text pick-two keeps four or more). The three items the first review named are fixed: 6-C15 and 6-S15 (hint 3 removes only the "yesterday"/"worried" choice), 7-C15 and 7-S15 (one choice, "waving"/"kicking"), 7-S04 (glided / traveled / got, two live). Exceptions where the hint text removes more than it says (all leave two live, but "one choice can be ruled out" is not accurate):

| Item | Hint 3 | Live after |
|---|---|---|
| 8-C10 | "A man is a thing, not an action, so kind cannot tell about an action" removes C and D | A, B |
| 8-S10 | "Dough is a thing, so firmly cannot describe it. One choice can be ruled out" removes B and C | A, D |
| 9-C10 | "Maple Street Library is a special name, so both cannot be common nouns" removes C and D (C says the name could be any library) | A, B |
| 7-C14, 7-S14 | "Leaped and scribbled each show a lot ... so one of them can be ruled out" removes both | two |
| 6-S08 | "One sentence has a plural doer with a verb ending in -s" describes key B (in C08 the same wording describes a distractor) | four, but one key is named |

### Web sources (this session)

- Helping verbs are forms of do, be, have and modals; started, kept, love are not listed: https://www.gallaudet.edu/tutorial-and-instructional-programs/english-center/grammar-and-vocabulary/verbs/helping-verbs-and-modals
- River otters slide down muddy hills, hold their breath about eight minutes, mothers push pups into the water for lessons; the page does not say river otters hold hands: https://www.nationalgeographic.com/animals/mammals/facts/north-american-river-otter (6-p3 now consistent).
- Predicate adjective (8-C12, "tasted sweet"): "smell, taste, look and feel sometimes, but not always, function as linking verbs ... If the word following one of these verbs describes the subject, use an adjective": https://digfir-published.macmillanusa.com/writershelp2e/writershelp2e_ch14_121.html
- Titles and family names: "Dr. Mary Richards", "Mrs. Wilson" capitalized before a name, not after; Aunt as a name capitalized, generic not: https://uniontestprep.com/english-basics/study-guide/capitalization/pages/2 ; Aunt Bessie capitalized, "her aunt's" lowercase: https://www.grammarly.com/blog/punctuation-capitalization/capitalization-family-title/ ; "Aunt Abigail", days, months, holidays capitalized, seasons lowercase: https://owl.purdue.edu/owl/general_writing/mechanics/help_with_capitals.html . Purdue does not name Mr. or Dr.; the union page does. Teach line and items are correct.
- Mental action verbs: thesaurus.com lists think, imagine, dream, remember (not decide, guess, realize, notice): https://www.thesaurus.com/e/grammar/action-verbs/ ; lingbase lists guess, imagine, realize, remember as stative: https://lingbase.com/en/english/grammar/stative-verbs . Result: "realized" is gone from every item (one untested use remains in 7-p2 sentence 9). 7-T4 still tests "guessed".
- Unverified words from the log, now checked: calm / calmly (adverb) / calmness (noun, "calm-ness") https://merriam-webster.com/dictionary/calm and https://www.merriam-webster.com/dictionary/Calmness ; carefully (adverb of careful) https://merriam-webster.com/dictionary/careful ; patiently (adverb, "in a way that shows that you are able to wait") https://www.oxfordlearnersdictionaries.com/definition/english/patiently ; flopped (flop, "to throw or move oneself down in a heavy, clumsy, or relaxed way") https://www.merriam-webster.com/dictionary/floppers ; crawled (crawl, "on your hands and knees or with your body close to the ground") https://www.oxfordlearnersdictionaries.com/definition/english/crawl ; skillfully (adverb) and skillfulness (noun) https://merriam-webster.com/dictionary/skillful . Not fetchable (not on the allowlist): excitedly, trudged, today, soon (ordinary words; no concern).
- Other cities are named Denver (Denver, North Carolina; Denver, Pennsylvania): https://en.wikipedia.org/wiki/Denver_(disambiguation) (see 9-S07).

### First-review items: confirmed fixed in the files

- Lesson 6: C03/C04 giveaway to C06 (C06 keys are now sentences 4 and 10; `leak.js` finds no stem naming them). C15/S15 hint 3. "Helper word" rule (removed everywhere). -ing key in core (C03). Watch Me on -s (third). C10, C05, S05, C13, S13 hint 2 now strategy. S10 `like` honest (plural doer). C10 no longer names a C11 key sentence. Otter passage. All confirmed.
- Lesson 7: C15/S15, S04, C04/C07 same sentence (C07 now p6 sentence 8), `realized`, Teach pair (strolled/walked), third Watch Me, S05 stem, unused p6 now used by C07, S15 `like`. All confirmed.
- Lesson 8: C03/C05 giveaway to C06, C12 predicate adjective, S07 "how", S15 non-ly distractor, tiredly replaced, unused passages removed, C07 hint 2. All confirmed.
- Lesson 9: Teach title line, hint 2 of C12/C13/S12/S13 and C15, "spirit week" removed, S10 "name", unused passages removed. Confirmed.

### Lesson 6: verb endings -- ACCEPT

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | 6-S07 -> 6-S11 | S07 asks about "the mistake in sentence 3" (Joy and I stacks); sentence 3 is half of S11's key (3 and 5). Partial giveaway inside the twin bank (the same pattern the first review marked SHOULD for 6-C10). | Move S07 to another sentence of p5 (not 3, 5). |
| SHOULD | 6-S08 h3 | "One sentence has a plural doer with a verb ending in -s" is the description of key B ("The neighbors waves"). It names a key; in the twin C08 the same sentence removes a distractor. | Use a hint about a correct sentence (e.g. "Keeps asking has -ing after keeps"). |
| SHOULD | 6-S15 | Only choice A has an -s verb (the others carry -ed, -ing, plain), so h2 ("which verb ends in -s") finds the key without reading the claim. The first review asked for two choices carrying the ending. | Reword h2 to "Think about when each action happens" and add a second choice with an -s verb in a different role, so the -s ending alone does not find the key. |
| SHOULD | 6-S11 and log | Log says "S06 and S11 now say sentences". S06 does; S11 prompt still says "lines" and its how says "Line 3", "Lines 1, 8 and 10", while why says "sentences 3 and 5". False log claim (minor). | Say "sentences" in S11 prompt and how. |
| NOTE | 6-C15 | Distractor "feels tired and worried" is an -ed word right now (an adjective), the child must see that Mia's rule is about verbs. h3 names it. Fine and arguably good. | none |
| NOTE | "-ing needs a word like started or kept" (hints, how, why of C04, C12, S04, S12, P1, P5 ...) | True for the options shown, but incomplete: was/is + -ing ("was knocking") is not taught anywhere. Not false, but a child may conclude -ing can never follow a be verb. Teach and Learn It 2 say "after words like love, start, stop and keep" (accurate: "often"). | Optional Teach line: "is, was or were also go before -ing". |
| NOTE | Watch Me | Third Watch Me shows -s for one doer; no Watch Me shows a plural doer keeping the plain verb (C05, C07, C10, C11, S05, S07, S10, S11 depend on it; Teach states it). | Optional. |
| NOTE | 6-T4 | Contains Learn It 2's sentence ("started laughing at the clown") as a non-key option; legacy. | none |
| NOTE | Task repeat | C04, C12, S04, S12 and Together P1, P5 are the same "fix the verb by its time clue" dropdown/mc; C03 (-ing) and C13 vary. Acceptable. | none |

### Lesson 7: action verbs -- ACCEPT

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | 7-C14, 7-S14 h3 | "Leaped and scribbled each show a lot ... so one of them can be ruled out" removes both strong verbs (hint says one). Two live, but the count in the text is wrong and the hint nearly gives the answer. | Name one sentence only ("Leaped paints a clear picture, so that sentence cannot be the weakest"). |
| SHOULD | 7-S10 -> 7-S07 | S10 names "went" as the weak verb in the treehouse story; S07 Part A asks for the vague word in the line about going up (key "went"). Partial giveaway in the twin bank. | S10: compare "brushed" with a different weak verb (e.g. "got") or drop the word "went". |
| SHOULD | 7-T4 (legacy), also noted for P5 | "guessed" is an action verb in the key. thesaurus.com does not list guess; lingbase lists guess as stative. The first review made the same point; the log does not mention T4. A teacher can dispute it. | Use "imagined" or "wondered". (7-P5 "remembered" is on the thesaurus.com list, so it stands.) |
| SHOULD | 7-C06 / 7-S06 stems | C06 asks for "an action verb that happens in the mind" (decided, imagined). S06 asks for a sentence that shows "a thought rather than a movement"; sentence 8 is "I decided to follow it quietly", which has a movement verb (follow). Key still unique, but the stricter stem makes the key arguable. | Use the C06 wording in S06 or choose a sentence with no movement verb. |
| NOTE | 7-C04 | Stem "Sentence 3 uses a weak verb" plus h3 (walked ruled out) leaves dashed and went; the passage shows went in sentence 3. Two live by count, effectively one for a child who opens the passage. S04 fixed this by not naming the word; C04 does the same without the word but the passage gives it. | Optional: "Sentence 3 uses a verb that tells little." |
| NOTE | 7-p2 sentence 9 | "I realized ..." remains in the passage. No item targets it. | none |
| NOTE | 7-C13 slot 1 | "rested" and "stopped" are fine verbs for tired hikers; the key rests on "clearest picture". Defensible. | none |
| NOTE | 7-C11, S11, C07, S07 | Verified: exactly the keyed two sentences have two action verbs; p6 sentence 8 first half has went; S07 B options "did", "slowly" do not fit. | none |
| NOTE | Overlap | Item text 0.200/0.196; with passage multiset 0.222. | none |

### Lesson 8: adjectives and adverbs -- CHANGES REQUIRED

| Sev | Item | Finding | Fix |
|---|---|---|---|
| MUST | 8 Teach vs 8-C12 | Teach point 4 reads "An adjective can also come after a word like is, was or tasted: The soup tasted sweet." 8-C12 is "After the long hike, the soup tasted ___" with key "sweet". The Teach example is the key sentence (`learn.js` finds the 4-word run "the soup tasted sweet"). A child who reads Teach has the answer. | Change the Teach example (for example "The room felt cold", or "The pie smelled wonderful" avoiding sweet/soup), keep the rule. |
| SHOULD | 8-C10 h3 and 8-S10 h3 | Each hint says "one choice can be ruled out" but its logic eliminates two (C and D; B and C), leaving a 50 percent guess between the key and one other. | Name one choice only (C10: "Both words tell about actions" ; S10: "Both go with the dough"). |
| SHOULD | 8-S10 -> 8-S12 | S10's prompt prints "sticky and firmly in the dough-stirring line"; S12's blank is that line ("She stirred the ___ dough firmly") with key "sticky". Full giveaway of S12's key inside the twin bank. | Use a different line for S10 or S12 (not both on sentence 4). |
| SHOULD | 8-S05 | "What gives widely its job?" is ungrammatical for grade 3 and unclear ("What is the job of widely?"). | Reword the prompt. |
| NOTE | 8-P3 h3, 8-S01 h3 | "One word tells when the bird sang / the carrying will happen. Find it before you move on" names one row key (Yesterday / Tomorrow). Same for 9-P2 and 9-S01 h3 ("One noun names a day / month. Place it first."). Match items have four to six rows, so the narrowing is mild. | Optional: "Sort the words you are surest about first." (already h2). |
| NOTE | 8-C11 sentence 6 | "They worked steadily all morning" has a time phrase (all morning); a careful child can defend it as "tells when". The stem says adverb; key stands. | Optional. |
| NOTE | 8-S01 | "three" counts as "describes a person or thing" (number adjective). Teach says adjectives tell "how many", so it is taught. | none |
| NOTE | 8-T4 vs Learn It 3 | Learn It 3 says "outside" is an adverb of place; T4 row 1 is "Outside". The Teach line "early and outside" is likely original; the Watch Me is new in phase 2. A form-A test row is therefore modelled in Learn It. | Optional: use "nearby" or "inside" in Learn It. |

### Lesson 9: common and proper nouns -- ACCEPT

| Sev | Item | Finding | Fix |
|---|---|---|---|
| SHOULD | 9-C05 -> 9-C03 | Same set, same sentence 5. C05's stem prints "Nora is a proper noun and friend is a common noun", the answer to C03 ("Which word in sentence 5 is a proper noun?"). C03 comes first, but the pair gives the key if revisited or reordered. | Move C05 to another sentence (e.g. "Pine Ridge Elementary" and "school", sentence 1). |
| SHOULD | 9-S04 -> 9-S06, 9-S12 -> 9-S11, 9-C07 -> 9-C06, 9-C10 -> 9-C11 | Each names or prints half of the hot-text key: S04 prints sentence 5 "The goalie, Omar" (S06 key 2 and 5); S12 prints sentence 12 Boston (S11 key 1 and 12); C07 prints sentence 7 Friday (C06 key 3 and 7); C10 prints sentence 1 Maple Street Library (C11 key 1 and 6). Names are plainly special names in the sentence anyway, so the damage is small. | Move one of each pair to a different sentence; at least S04 and S12 (twin bank) are easy. |
| SHOULD | 9-C10 h3 | Removes C and D (see recount). | Name one choice. |
| SHOULD | 9-S07 Part B | "Only one city goes by this name" is not true of Denver (Denver, NC and Denver, PA exist). A teacher or parent can challenge a false statement. | "It is the special name of one particular city." |
| NOTE | 9-C07 h1 | "In Part A, look for the name of one special day" echoes the Part B key ("It is the special name of one day"). | Say "look for the word that names a particular day". |
| NOTE | 9-C12, C13, S12, S13 | After h3, the remaining two options differ only by capital letters; it is a capitalization item more than a noun-class item, but only three of fifteen. | none |
| NOTE | 9-S13 slot 0 | spring is a correct completion but not a special name; prompt asks for the special name. | Optional: use "fall" lowercase is the same issue; leave. |
| NOTE | Learn It | Two Watch Mes; Teach covers titles and sentence-initial common nouns (C15) in words only. | Optional third Watch Me on a capitalized common noun at sentence start. |
| NOTE | Overlap | 0.203/0.195. | none |

### Log accuracy

- "After hint 3 at least two choices stay live" and "hint 3 removes at most one choice" are true for live counts (two or more remain everywhere) but false as stated for 8-C10, 8-S10, 9-C10, 7-C14, 7-S14 (they remove two) and 6-S08 (names a key).
- "S06 and S11 now say sentences": true for S06, not S11 (6).
- "Every remaining passage is used by at least one item": true (checked).
- Claim of 0 `SK-GUM1-*` warnings in lessons 1 to 8 and 11 in lesson 9: I see 9 lesson-9 hint-length warnings and none elsewhere; harmless.
- Web section says "calm / calmly / calmness, carefully, patiently, flopped, crawled" not verified: now verified (above).


## Third review (L2, L4, L8 and post-acceptance edits)

Reviewer: independent, fresh eyes (did not author, did not do reviews 1 or 2). Frozen copy at /home/claude/pp-content, L-GUM1.js compared with commit 78f764b ('Accept B7a lessons 6, 7, 9 (second review)').

### Verdicts

| Lesson | Verdict | Reason |
|---|---|---|
| L2 singular/plural nouns | CHANGES REQUIRED | 1 MUST (S11 hint 3 states a false fact); SHOULD on 'cann' |
| L4 capital letters | ACCEPTED with SHOULDs | no MUST found; S08 H3 and set-2 giveaway are SHOULDs the author log admits were not done |
| L8 adjectives/adverbs | ACCEPTED | NOTEs and one SHOULD (lookup dropdowns) |
| L7 T4 (post-acceptance) | CHANGES REQUIRED (process only) | material change to a TEST item with the same testRev |
| L1, L3, L5, L6, L9, other L7 edits | ACCEPT | NOTEs only |

If the lead treats "no giveaway inside a set" as hard, L4 set 2 (C07/C09/C10) should be CHANGES REQUIRED instead. I lean ACCEPTED because the earlier reviews accepted comparable same-passage reuse.

### Method and blindness

- Blind solve in a vm sandbox with stripped keys, seeded shuffles, passages included, answers saved before any key extraction: 116/117 (99.1%). The one miss is my own slip (L4 C13 slot 2). Fully blind for the lesson items. I read the author log and reviews 1 and 2 only after answers were saved. A few review-file excerpts were seen only after saving.
- Browser: 390x844 touch, one Chromium process per lesson, real taps and 3 hints pressed on every item. 15/15 core OK for each of L2, L4, L8. No horizontal scroll, no page errors, no passage mismatch. Hints do not change the live choice count in the DOM (as designed).
- check-content --all: PASS, 0 failures, 83 warnings, none on SK-GUM1-2/4/8 (10 hint-length warnings on L9, as in the log). `--release` fails only on the unrelated core migration, plus the T4 material change when tested in a scratch copy (see below).
- Mechanical: points, pick counts, key counts, type/points of each `like` mapping and dok all consistent. Core format mix is identical in L2, L4 and L8 (4 hottext, 5 mc, 3 dropdown, 1 each match/ebsr/ms).
- Passages: all at least 100 words (L2 103-113, L4 102-106, L8 102-105). Flesch-Kincaid by my counter: L2 max 3.87, L4 max 2.28, L8 max 3.07. All passages used.
- Twin overlap (author tokenization, reproduced exactly): L2 0.203/0.209, L4 0.192/0.209, L8 0.194/0.195, all at most 0.21.
- Longest key: no new core or twin item has a uniquely longest key. L2 S13 has one key longest of two; L4 C08 keys are 32/29 chars with a tie. Legacy: L2 T2/T3 (unchanged).
- Duplicates over js/data: none (only the trivial "may I have some water?" fragment also in L-GUM4).
- Hint recount (script plus by hand): at least 2 live choices after hint 3 on every item. Exactly two live: L2 C04, C12, S04, S12, S10, P5, C08, S08; L4 C12, S04, S09, S12, S13 slot 2, C13 slot 2; L8 C04, C12, S04, S12, P4, C13, S13.
- Legacy practice and test items are byte-identical to the original, except L7 T4.

### Earlier MUST/SHOULD status (confirmed in files)

Fixed: L2 P4 H3 now "One sentence uses a" (true); L4 P3 H3 has no count; L4 P5 H3 no longer describes wrong options; L4 P4 H2 neutral; L8 Teach now "The room felt chilly" (C12 key sentence out of Teach); L8 C10/S10 H3 name one choice; L8 S10 moved to floury/cheerfully (no longer prints S12's key); L8 S05 reworded; L2 Teach apostrophe and "bus"; L2 p3 renamed "Our Pond Journal".
Not done, and honestly logged: L4 C09/C10 and C02/C08, L2 C04/C12 frame, L1 C05, L3 P3/P4/S02/S13, L5 S05/S06/C06/C07.

### Findings: L2

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| MUST | 2-S11 hint 3 | "Number 4 has the clue words a and one." Sentence 4 is "Mr. Singh gave us a magnifying lens and a small scale to share." It contains "a", "a" and no "one". A false fact in feedback, the same class as the earlier L2 P4 MUST. The author's scripts never checked it. | "Number 4 has the clue words a and a." or point to another sentence that really has each and one. Re-check HOW4. |
| SHOULD | 2-C12 'cann' (and hint 3, why, how) | The hint says it is "not spelled like a real word" and the why calls it a misspelling. unscramble.me lists CANN as a Scrabble word. I believe it is Collins Scrabble Words (rare nautical variant of conn/con/cun). I could not confirm it in Merriam-Webster (fetch refused by the allowlist) and the wehd.com and Wikipedia pages do not list it. Not safe to call a non-word. | Use an unmistakable non-word in the pattern of gamess/tabless/guestes, e.g. "canss". Avoid cannes/canns. Update hint 3, why, how. |
| NOTE | 2-C05/C10 | core x core overlap 0.23, frames differ | none |
| NOTE | 2-S06 prompt | says "numbers 1 to 6" but sentence 4 is not tappable | harmless |
| NOTE | 2-S15 | class/glass is modelled via Teach "bus" | fine |
| NOTE | L2 P2/P3 | Together only. P3 is kindergarten-like, P2 weak | unchanged legacy |

Sources: https://www.unscramble.me/cannon ; https://wehd.com/18/Con_v2.html ; https://en.wikipedia.org/wiki/Conn_(nautical)

### Findings: L4

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| SHOULD | 4-S08 hint 3 | "One line has a small i in the middle" describes a KEYED line (the item asks for the two lines that break a rule). In C08/S02 the same wording removes a distractor. | Name a correct line instead, e.g. "Dan and I walked home has a capital I." |
| SHOULD | 4 set 2 (C07/C09/C10) | All three hinge on "a short form I'm/I'll contains I". C10's key (also Teach point 3) settles C09 and C07. C02 vs C08 is the same pick-two-correct-sentences format (0.26). Not fixed; the log admits it. | Vary one frame, or reorder so C10 comes first. |
| SHOULD | 4 C10/S15 vocabulary | "short form" in prompts and hints, but Teach says "When I joins another word, as in I'm or I'll". | Add "short form" to Teach or reword. |
| NOTE | 4-S01 H3 | "One line begins with a small letter. Find it" gives a row. Allowed for match items. | none |
| NOTE | 4-C12 vs C11 | C12 reveals sentence 6 is a small-first-letter, no-i sentence (a C11 distractor). Order protects. | none |
| NOTE | 4-S05 | key is colloquial "wherever it lands" | none |
| NOTE | core x core overlap | C02/C08 0.26, C05/C10 0.29, C07/C10 0.28, C03/C07 0.23, C07/C15, C10/C15, C11/C14 above 0.21; frames differ | none |

### Findings: L8

| Sev | Item | Evidence | Fix |
|---|---|---|---|
| SHOULD (NOTE if lead prefers) | 8-C04, S04, S12 | the keyed sentence appears verbatim in the visible correct passage, so the dropdown is solved by lookup. Same pattern accepted in L7 C12/S12 and L9 C04/S04. | vary at least one so a sentence differs from the passage |
| NOTE | 8-C11 H3 | "Sentence 6 tells how ... not when" while the sentence has "all morning". C10 (set 2) reveals "steadily" is how, pre-eliminating one C11 distractor. | order protects |
| NOTE | 8-S01 | "three" counted as an adjective; Teach covers "how many" | fine |
| NOTE | 8-T4 | "Outside" is modelled by Teach/Learn ("nearby") | fine |
| NOTE | core x core overlap | P3/C03 0.24, C03/C09, C04/C12 0.26/0.27, C05/C10; frames differ | none |
| NOTE | Teach/Learn | now models predicate adjective, non-ly adverbs and where/when | good |

### Post-acceptance edits (git diff 78f764b..HEAD, 117 hunks)

| Item | Rating | Notes |
|---|---|---|
| L1 Teach point 1 | ACCEPT | no longer equals C05's key. NOTE: Learn It 3 is still similar. |
| L1 S11 | ACCEPT | sentence 2 is now a true fragment ("A rain gauge with a tall ruler ... clear plastic bottle below."). p6 104 words, FK 3.55. how/why updated. |
| L3 S01 | ACCEPT | key "Where did this mitten go missing?". NOTE: it is the only question naming the mitten, so partly solvable by noun matching. |
| L5 | no edits | none |
| L6 S07 (new p5 s11) | ACCEPT with NOTE | "Each night, the volunteers locks the front door." Key unique, 110 words, FK 3.65, s11 not an S11 target. NOTE: S07, S10 and S11 now all test plural-doer-plain-form in one passage; S07's `like` C07 is the opposite direction, so the mapping is loose. |
| L6 S08 H3 | ACCEPT | names one distractor |
| L6 S11 | ACCEPT | "sentences" fixed. NOTE: prompt "misuses or lacks its -s" is awkward. |
| L6 S15 H2 | ACCEPT with NOTE | no longer points at -s, but only one option has an -s verb so it is still solvable; the second review's suggested second -s choice was not added. |
| L7 C14/S14 H3 | ACCEPT | each names one sentence |
| L7 S10 stem | ACCEPT | "put" in place of "brushed" in sentence 5; "put" unused elsewhere, no longer prints S07's "went" |
| L7 S06 stem | ACCEPT with SHOULD | key still unique (s8 decided, s12 imagined) but "only in the mind" keeps s8 arguable. Use "an action verb that happens in the mind" for parity with C06. |
| L7 T4 | CHANGES REQUIRED (process) | see below |
| L9 C05, C07, C10, S04, S12 moves | ACCEPT | none is an S06/S11 target. NOTE: C07 now tests a person name like C03 (different component and sentence); it reveals sentence 4 is not a day sentence (C06 distractor) but C06 comes first. |
| L9 S07 part B | ACCEPT | "It names one particular city, not every city." False Denver claim gone. NOTE: key echoes part A's "names a single city" and is the shortest option. |

L7 T4 detail: stem now "Lily imagined a funny answer to the riddle.", key 'imagined' (was 'guessed'). Same id, 1 point, dok 2, key still at index 0, other options answer/riddle/Lily; clue and why updated. Content is acceptable: 'imagined' is a mental action verb by the lesson's own C06/S06 keys, and Teach says "Some actions happen in your mind". But it is a MATERIAL change (key text) to a test item with the same testRev. In my scratch-copy test (record at 78f764b, then the HEAD file), `check-content --all` warns "1 check form changed materially ... 3.L.GC.1:R:use-action-verbs:A. Raise testRev" and `--release` FAILS. Architecture 01 section 2.4: a material change means new ids and a bumped testRev. The repo's current version record is an old v1 that does not hash key text, so the gate does not currently see it, and the author log does not disclose it.
MUST fix: bump L7 `testRev: { A: "2" }` and re-record (new id per 2.4), or revert T4 to 'guessed'.

### Author-log accuracy

True: twin overlap table (exact); passage word counts and FK; no new uniquely longest keys (note the L4 C08 tie); gate PASS with 10 L9 warnings and none on L1-8; legacy items unchanged except T4; MUST fixes (L2 P4, L4 P3/P5/P4, L8 Teach/C10/S10/S05); the "SHOULDs not done" list is honest.
False or overstated: "cann non-word" (a Collins Scrabble word per unscramble.me; unconfirmed in M-W); the log omits that the T4 change is a material version change needing a testRev bump; the L2 S11 H3 false clue-word claim was never caught by the author's scripts. "Hint 3 names at most one wrong choice in every touched item" is true for touched items, but L2 S10 and P5 H3 remove two (previously allowed).
