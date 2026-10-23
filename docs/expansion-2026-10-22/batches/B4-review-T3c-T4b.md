# B4 review: 3.T.T.3.c (opinion writing) and 3.T.T.4.b (poetry writing)

**Role:** independent content reviewer. I did not write these lessons. I changed no lesson or code file and ran no git. This is the only file I wrote.
**Scope:** `js/data/lessons/T-T34.js`, the 3.c block (lines 962-1938) and the 4.b block (lines 3004-end): passages, 15 core items per lesson (refs resolved), 15 similar items per lesson, Together items P1-P6 with addons, Learn It and Watch Me. I read the author log only after saving my answers.
**Scratch files:** `scratchpad/b4r3/` (`blind.js`, `stripped.json`, `ans3c.json`, `ans4b.json`, `keys.js`, `jac2.js`, `ngram.js`, `ui.py`, `ui.json`, screenshots).

## 1. Blind solve

- **Method.** `load.js` runs the lesson file in a Node `vm` sandbox with a mock `PP.addLesson`. `blind.js` resolves each `{ref}` and applies a seeded shuffle (seed 20261023) to choices, slots, steps and targets. It strips `correct`, `answer`, `clue`, `hints`, `how`, `why`, `misconception`, `like`, `std`, including nested ones, and prints passages and items. A case-insensitive grep of `stripped.json` for those key names returned nothing. I saved my answers (`ans3c.json`, `ans4b.json`) before extracting any key.
- **Result: 60 of 60 agree** (3.c: 15 core + 15 similar, 30 of 30; 4.b: 30 of 30).
- **Honest disclosure on blindness.**
  - The solve was blind for every core and similar item in both lessons.
  - Before solving I printed one example of each item type's shape. That showed me the hints and how of Together item `SK-TT4b-P1` (stanza 3, line 2 of Leaf Day). P1 is not a core or similar item, so no solved answer was affected.
  - The ref items (P4-P6) are old content in the same lesson, but I did not see their keys before solving.
- **Close calls while solving.**
  - 3.c C09: (5) "a car did not slow down until my little brother stepped back" is arguable evidence for "younger students feel safe" (see SHOULD-6).
  - 4.b C10: option D (sleepy friends, "tonight") also keeps lines 2 and 4 rhyming. Only the "make classmates smile" feeling separates it from the key.
  - 4.b S10: "around" and "town" (see SHOULD-4).
  - 4.b C01: the second pair can be read in either order (see SHOULD-1).

## 2. Verdicts

| Lesson | Verdict |
|---|---|
| 3.T.T.3.c | **CHANGES REQUIRED** (5 MUST) |
| 3.T.T.4.b | **CHANGES REQUIRED** (4 MUST) |

## 3. Findings: 3.T.T.3.c

### MUST

**M3c-1. S12 repeats an accepted 3.a sentence and topic.**
- 3.a `SK-TT3a-S03` (T-T34.js:508) uses "(2) More practice would help us pass the ball better." as the *reason* in a soccer-coach draft.
- 3.c S12 (T-T34.js:1704) uses the identical sentence as its sentence 2, in a soccer-team-practice draft.
- Same topic, same sentence, same role. This breaks the rule that topics and key facts are not reused across `js/data`.
- **Fix:** move S12 to an unused topic, for example the choir or a garden club. Keep the evidence-after-a-reason task.

**M3c-2. S02 is a clone of C02.**
- Both slots have the same three options in the same order as C02, the same words ("For example", "As a result") and the same key. Key-text Jaccard is 1.00. Shared options: 6.
- A child who was shown C02's answer can answer S02 without reading it.
- **Fix:** change the relationship in S02. Use "Next" and "so", or "Also" and "Because of this". Use no more than one option from C02's six.

**M3c-3. S08 and S12 share linking-word option sets with C08 and C12.**
- S08 shares 5 options with C08. Slot 2 is the same set with the same key, "Therefore".
- S12 shares slot 1 ("For example / However / Before that", key "For example") with C12.
- The accepted ceiling is one shared option. RA1c MUST-3 treated the same pattern as a MUST.
- **Fix:** give each similar item at least one new option and a different key word. Examples: "For instance", "So", "Since", "Also".

**M3c-4. S11 is a clone of C11, and both items carry a positional giveaway.**
- S11 has the same four columns and the same answer mapping (intro, opinion, reason, wrap-up). Key Jaccard is 1.00.
- Rows are shuffled in the engine (`rowOrder`), but each row keeps its sentence number: (1), (2), (3), (8) in C11 and (1), (2), (3), (6) in S11.
- Sorting by number gives the answer, because the columns follow the standard order. No reading is needed. The screenshot of C11 shows the numbers.
- **Fix:** remove the numbers from the rows. Use a different job set in S11, for example "gives evidence" or "answers a worry".

**M3c-5. Jaccard ceiling exceeded.** Word-set Jaccard of the whole item, stem + prompt + options, my `jac2.js`. The accepted ceiling is 0.21.

| Similar | Core | Jaccard | Shared options |
|---|---|---|---|
| S13 | C13 | 0.48 | 0 |
| S04 | P5 | 0.42 | 0 |
| S11 | C11 | 0.42 | 4 |
| S02 | C02 | 0.33 | 6 |
| S03 | P6 | 0.31 | 0 |
| S12 | C12 | 0.31 | 3 |
| S06 | C06 | 0.28 | 0 |
| S05 | P4 | 0.27 | 0 |
| S08 | C08 | 0.26 | 5 |
| S15 | C15 | 0.25 | 0 |
| S07 | C07 | 0.24 | 0 |
| S10 | C10 | 0.23 | 0 |
| S01 | C01 | 0.22 | 0 |
| S09 | C09 | 0.21 | 0 |
| S14 | C14 | 0.20 | 0 |

- Adding the core passage text to the core item's word set lowers a few of these (S02 0.25, S12 0.22, S13 0.38, S11 0.36). S04 (0.42) and S13 (0.38 to 0.48) stay far over, and the shared-option counts do not change.
- **S13 vs C13:** the same five-option frame, "because" and "In addition" as the two keys, and "or" and "but" as decoys. Change the relationship pair and the decoy types.
- **S04 vs P5:** both are 5-sentence orders with the same linking words (First, Also, For all these reasons).
  - Change the connector set, for example "One reason", "Another reason", "So".
  - Or change the task: put a sentence into an existing paragraph.
- The remaining items are 0.20 to 0.28. Treat S06, S05, S08, S15 and S07 as part of this finding when the author rewrites.

### SHOULD

**S3c-1. C09 and S09 are distinguishable by paragraph position.** Of the 5 targets, the key pair are the two sentences in the paragraph of the quoted reason. Add a distractor from the same paragraph, or make the key come from two paragraphs. With the opinion of sentence 6 quoted, the child can find the answer by position.

**S3c-2. C09 has a second defensible reading.** Sentence (5) ("a car did not slow down until my little brother stepped back") shows a younger child in danger. The author's WHY assigns it to reason 1. It is a better piece of evidence for "feel safe" than (8). **Fix:** replace (5) as a distractor with a clearly first-reason sentence ("Cars often drive past quickly..." is already there as (4)), or reword (5) so it is about the drivers only.

**S3c-3. C11 and S11 hint 3 hands over one row.** "Sentence 2 uses I think and should, so it tells what the writer wants. Match that row first" resolves one of four rows. Say what to check, not the answer: "Find the sentence that says what the writer wants."

**S3c-4. Learn It and Watch Me do not model four of the fifteen task types.** Learn It shows three examples: an opinion statement, evidence with "because", and a conclusion. Not modelled:
- choosing a linking word (C02, C08, C12, C13, four core items);
- an introduction sentence (C01);
- explaining a reason with a new sentence (C15);
- matching jobs (C11).
Add a linking-word example and an introduction example.

**S3c-5. Order hint 3 (C04 legacy, S04 new) reveals three positions.** "First and Also come before the reasons... For all these reasons comes after them. Use that to place three of the sentences" leaves two orderings. Replace with a method line ("find the sentence that every other sentence points back to").

**S3c-6. C13 and S13 decoy "For example" is easy.** The decoy relates the second sentence as an example of something it is not. Both are real misuse, but "or" and "but" are enough. Fine as is; the real problem is M3c-5.

### NOTE

- **N3c-1.** The official wording lists "since". It is not used as a keyed or distractor word anywhere. "because", "therefore" and "for example" are each used.
- **N3c-2.** Every component is covered: introduce (C01), state (C06, C11), reasons (C03, C07), linking words (C02, C08, C12, C13), conclusion (C05, C10, C14), evidence (C09, C14B, C15).
- **N3c-3.** C07: "I think Elm Street is the busiest street in our whole town" could be read as a weak reason. The author's WHY says it does not say why a sign helps, so the key is still the only defensible pair.
- **N3c-4.** FK (heuristic; the script excludes nothing for these): p1 3.9, p2 3.6, p3 3.5, p4 4.5 (4.48 by my count, at the ceiling), p5 2.2. All at or under 4.5.
- **N3c-5.** Recess (p1) and "reading corner", "sandbox", "nature trail", "kickball", "water bottle" appear elsewhere in `js/data` only as incidental props (T-C, T-RA, T-T2, L-GUM1), never as a lesson topic. I judge them acceptable. The recess-benefits idea also sits in SS.1.d p5, as the brief notes, and in `sets/R-OPN-01.js` line 25 as a different school-yard garden example. That is not an exact duplicate.
- **N3c-6.** Dropdown option order is shuffled per sitting (`items.js:242`). Having the key at index 0 in every 3.c dropdown is therefore not a giveaway.

## 4. Findings: 3.T.T.4.b

### MUST

**M4b-1. p3 stanza 1 duplicates an accepted 4.a stanza.**
- 4.a `SK-TT4a-C13` (T-T34.js:2402) offers this stanza: "The bus comes rumbling down our street. / Its doors swing open wide. / I wave goodbye to Mom and Dad / And climb on up inside."
- 4.b p3 stanza 1 is "The bus rolls up at half past seven, / Its yellow doors swing wide. / I wave goodbye and climb the steps / And find a seat inside."
- Same scene, same rhyme words (wide/inside), and the same lines "doors swing wide" and "I wave goodbye". The 4.a stanza even uses "rumbling", the key word of 4.b C09 ("rumble").
- Five core items and Together content sit on p3 (C06, C07, C09, C10). The rule is that a topic reused across lessons is a MUST.
- **Fix:** keep the school-bus topic only if 4.a's distractor changes, or rebuild p3 on a different journey (a ferry, a walk to the library).

**M4b-2. C06 pre-answers C07, and C07's list is itself a giveaway.**
- C06 asks "Look at stanzas 1, 2 and 4 of The Morning Bus." That tells the child stanza 3 is the odd one before C07 asks which stanza breaks the pattern.
- C07 lists the five targets with their labels (see the screenshot): the only stanza that appears twice is stanza 3 (lines 2 and 4). The decoy that was meant to catch the "line 2" mix-up points to the answer's stanza. The child picks "line 4 of the stanza that has two options".
- **Fix:** C06 should say "Look at stanza 1" and ask which pattern it uses. In C07, give line 2 of a different stanza as the decoy, or give every stanza the same two options.

**M4b-3. C13 `how` is wrong against the poem.** Step 1 says the speaker "has dry hair, smells like soap, closes her eyes and rests". Stanza 4 says "My hair is wet". It also says "her" for a speaker whose author is Caleb. Show Me How is read by children who got the answer wrong, so the error confuses a child who is checking the text. **Fix:** "has wet hair, smells like soap, closes their eyes".

**M4b-4. Jaccard ceiling exceeded** (same method as M3c-5, whole item text):

| Similar | Core | Jaccard | Shared options |
|---|---|---|---|
| S04 | C04 | 0.34 | 0 |
| S01 | C01 | 0.32 | 0 |
| S12 | C12 | 0.30 | 0 |
| S15 | C15 | 0.29 | 0 |
| S02 | C02 | 0.28 | 0 |
| S09 | C09 | 0.28 | 0 |
| S11 | C11 | 0.28 | 0 |
| S05 | P6 | 0.27 | 0 |
| S13 | C13 | 0.27 | 0 |
| S14 | C14 | 0.27 | 0 |
| S06 | C06 | 0.21 | 1 |
| S08 | C08 | 0.21 | 3 |

- S03 (0.19), S07 (0.14) and S10 (0.19) pass.
- Several items are clones by design: S01 vs C01 (same order task, same punctuation pattern), S04 vs C04 and S14 vs C14 (same "word that rhymes and makes sense" frame, same decoy types: a rhyming nonsense word, a sensible non-rhyme).
- **Fix:** vary the task, not only the topic. For example, S04 as a three-blank dropdown, S14 as a choose-the-pair task, S01 as a stanza with different story logic.
- S08 shares all three column labels with C08, which is inherent to a pattern-match task. Reduce it by naming a different pattern ("lines 1 and 3 rhyme").

### SHOULD

**S4b-1. C01 order is not unique by rhyme alone.**
- There are 8 rhyme-valid arrangements (two pair orders x two orders within each pair). The author's "8 live orders" is correct.
- Story logic and "And"/"Then" remove most. But the second pair can be read both ways. "Because the soup is nearly done, / Then I set the bowls out, one by one," is grammatical.
- The key survives only because the terminal punctuation differs (comma at the end of lines 1 and 3, a period at the end of lines 2 and 4). That punctuation is also a giveaway to which positions are 1/3 and 2/4, without any rhyme work.
- After hint 3, live arrangements: 4 (Grandpa is first in its pair, but the second pair can still be swapped, and the pairs can be swapped).
- S01 has the same punctuation pattern but is unique, because "Then" and "And" force each pair.
- **Fix:** make the second pair unambiguous, for example "Then I set the bowls out, one by one, / And we sit down when the soup is done." Give both lines of a pair the same ending punctuation pattern.

**S4b-2. C09 and S09 hint 2 describe the key's sound.** C09: "Listen for a word that makes the noise of something heavy moving." S09: "Listen for a word that makes a high, steady noise." Both name the key word's noise. Say "Read each line aloud and listen for a word that makes its own noise."

**S4b-3. S05 hint 3 lists the distractors' words, and the key is the only exclamation.**
- "Words like quiet, softly and drift sound slow and calm" names the words in three of the four options. The key is the only line left. The key is also the only choice ending in "!", and the question asks for "excited".
- C05 hint 3 only removes two choices; that is fine.
- **Fix:** give two distractors exclamation marks and a calm word each (for example "And hush the whole wide world around!"). Rewrite hint 3 to teach the method.

**S4b-4. S10 "town" is a near-rhyme, so the key is not safe.**
- Option 1: "He waves it through the town" ends with "town". Option 2 (the key) ends with "found". Both rhyme with "around" in lines 2 and 4. "Around/town" is a slant rhyme, but many third graders hear them as rhyming.
- Option 1 is also the funnier line, so a child can defend it. WHY says "town does not rhyme with around". A slant rhyme is not a rhyme in the strict sense; see https://www.litcharts.com/literary-devices-and-terms/slant-rhyme
- **Fix:** end option 1 with a clearly non-rhyming word, for example "He waves it past the barn."

**S4b-5. C13 Part B has no stanza-4 distractor.** Hint 2 ("Reread stanza 4") finds the key because it is the only stanza-4 line. After hints 2 and 3, one choice is live. Add a stanza-4 distractor such as "My hair is wet, my feet are bare,".

**S4b-6. C08 and S08 hint 3 solves a row.** "In the lunch box stanza, bag and plum have nothing that matches them. Match that row first" says the row is "lines 2 and 4". Say "Check the end words of lines 2 and 4 in each stanza".

**S4b-7. Dropdown poems have no visible line breaks.** On a 390 px screen (screenshots of C04 and C14) the poem runs as a paragraph: "I set my lemonade stand up, I pour the juice into each [ ]. The line is long, the sun is hot...". The question talks about "lines 1 and 2". `T.dropdown` renders with `createTextNode`, so `\n` does nothing. Use " / " between lines, as the mc choices do.

**S4b-8. 4.b teach `words` lists "sound word" three times.** Learn It shows a vocabulary list with the same entry three times. Remove two.

**S4b-9. Swim Day shares a setting with the 3.a Learn It example and other pool content.**
- 3.a's first Learn It example is "every kid should learn to swim" with town-pool lessons.
- 4.b p4 is a pool poem with a whistle, a coach and a lifeguard.
- T-RA (line 1487) and T-SS (Splash Day) have lifeguard and whistle facts. No sentence or key fact matches exactly, so I rate it SHOULD and not MUST.
- Same-setting reuse still counts under the batch rule on topics. **Fix** if wanted: change the setting to a different sport or place. C11 to C14 are tied to it.

**S4b-10. S11 distractor is not in the poem.** "His fur is brown, and soft, and thick" is not one of the stem's four lines. Add it to the stanza or replace it with a line that is in the stem.

**S4b-11. S05 and S13 are almost the same scene.** "The drums begin, the crowd stands up" and "The drums begin, the crowd stands tall", with excited key lines in both. Change one.

**S4b-12. C12 prompt pre-answers "calm" for C13.** C12 says the stanza should "feel calm after swimming", and C13 Part A then asks for the feeling at the end. The cue is mild because the key stanza is stanza 3, not the ending, but it is a pre-answer across the set. Reword C12: "keeps the end of the swim day gentle" is no better; drop the feeling and make the revision about the rhyme only, or move C12 after C13.

**S4b-13. Learn It and Watch Me do not model four task types in the fifteen.** Not modelled: action and sound words (C09, C11, C13), revising a non-rhyming line (C12), adding a stanza that keeps the pattern (C03, C10), ordering lines (C01). The teach points mention them but no example does.

### NOTE

- **N4b-1.** Official wording is covered: rhyme (C01, C04, C06-C08, C12, C14, C15), at least two stanzas (C03, C10, C15), an intended effect on an audience (C02, C05, C09-C11, C13).
- **N4b-2.** C10: option D (sleepy friends) also keeps the pattern. The key stands on "makes classmates smile" against "quiet tonight", which is defensible.
- **N4b-3.** C05 (legacy P6) "I pull my blanket to my chin" is also a line in the 4.a p1 poem "Tap, Tap, Tap". It is legacy content; consider changing it with the next 4.a edit.
- **N4b-4.** S15 option A ends "And eat them with a spoon", the same line as C15 option A. The distractor line is reused. Change one.
- **N4b-5.** Frog and lily-pad setting in p2 (Together only) overlaps T-C's frog article (tc1b-frog). No sentence matches; p2 is not a core item.
- **N4b-6.** FK (heuristic, sentences by punctuation; the repo script skips poems): p1 2.2, p2 2.4, p3 3.8, p4 3.4. Counting each line as a sentence gives 0.5 to 1.2. Item stems are at or below 6.1 only on short, direct prompts; options are one or two short sentences. All pass 4.5 on passages.
- **N4b-7.** C04 "I sold the lot" is a British-leaning idiom, and the line reads "I sell them all, I sold the lot" (tense shift). Replace with "I sold the lot" -> "and then I sold the lot"?; or choose a different pair. Minor.
- **N4b-8.** C02/S02: both use two "Whoosh!"/"Whee!" options that differ only in the rhyme. This is good design.

## 5. Checks that passed

- **Key agreement:** 60 of 60. Keyed text read next to `why`, `how`, hints and clue for all 30 core, 30 similar and 12 Together items (P1-P3 of both lessons; P4-P6 are core refs). No wrong keys. `why`/`how` agree with keys everywhere except M4b-3.
- **Single defensible key:** all items, with the notes above (C09, C10, S10, C01).
- **Hand recount of live choices after hints 1 to 3 plus clue, all 30 core items:** every item keeps at least two live choices or live orders. Closest calls: 4.b C13 Part B (one live, S4b-5), 4.b C10 (two live), 4.b C01 (four live orders).
- **Word-match keys:** none. Several keys share words with the passage, but each distractor does as well (3.c C01, C05, C10, C15).
- **Ladders pointing at the key:** C09 and S09 hint 2 (S4b-2), S05 hint 3 (S4b-3).
- **Points and DOK:** two-point items are dropdown with two blanks, ms or hottext with pick two, ebsr, order, match. mc and single hottext are one point. DOK values look right.
- **Grade 3 suitability:** vocabulary and syntax are grade 3.
- **Engine:** dropdown options are shuffled (`items.js:242`), so the key at index 0 on every dropdown (3.c C02, C08, C12 and similar; 4.b C04, C14 and similar) is not a giveaway. 4.b C14 and 2.d C12 were named in the brief; I checked only 4.b C14, and it is fine. Match rows are shuffled, columns are not.

## 6. Browser check (390 x 844, Playwright, `node verification/serve.js . 8731`)

- 30 of 30 core items (three sets of five for each lesson): Check my answer (wrong answer gives "Not quite"), 3 hints (all three appear in order), Show me how (steps and answer appear), Try a similar question (opens the paired similar item), and on the similar item Check, 3 hints and Show me how. No item is missing any control.
- Page errors: none. The only console error was the Google Fonts request that my harness aborts on purpose.
- Horizontal scroll: none at any step (`scrollWidth <= innerWidth` for the initial, passage, hint and how states of all 60 items).
- Screens looked at: 3.c C02, C11, C14; 4.b C01, C04, C07, C08, C13, C14. Layout is fine. Issues found are S4b-7 (no line breaks in dropdown poems), the C07 stanza-count giveaway (M4b-2) and the numbered rows in C11 (M3c-4).

## 7. Order of work for the author

1. Remove cross-lesson duplicates: M3c-1 (soccer sentence), M4b-1 (bus stanza).
2. Fix keys and wrong text: M4b-3 (`how`), S4b-4 (S10 "town").
3. Fix pre-answers and giveaways: M4b-2, M3c-4, S4b-3, S4b-5.
4. Rewrite the similar items over the ceiling (M3c-2, M3c-3, M3c-5, M4b-4). Vary the task type and the decoy logic, not just the topic.
5. Hint, `words` and display changes: S3c-3, S4b-2, S4b-6, S4b-7, S4b-8.

---

# Second review (fix round, 2026-10-23)

**Scope:** `js/data/lessons/T-T34.js`, lessons 3.T.T.3.c and 3.T.T.4.b as they stand after the fix round: 15 core items each (refs resolved), 15 similar items each, Together P1-P3 (3.c) and P1-P4 (4.b), addons, passages (including the Dance Class poem), Learn It and Watch Me. No lesson edits, no git.
**Scratch files** (all in the session scratchpad): `load.js`, `blind.js`, `blind-3c.txt`, `blind-4b.txt`, `maps.json`, `answers-second.json`, `compare.js`, `dump.js`, `dump-3c.txt`, `dump-4b.txt`, `jac.js`, `dup.js`, `dup2.js`, `testchk.js`, `browse.py`, `browse.json`, `shots/`.

## S1. Blind solve

- **Method.** A Node `vm` sandbox with a mock `PP.addLesson` loaded the lesson file. `blind.js` resolved every `{ref}` and printed core, Together and similar items with a seeded shuffle (choices, dropdown options, steps, match columns, hottext targets). It stripped `correct`, `answer`, `clue`, `hints`, `how`, `why`, `misconception`, `like`, `std`. Hottext targets were resolved to sentence text, because the engine does the same. Passages (drafts and poems, with stanza.line numbers) were printed in full. The stripped text was grepped for the stripped key names; the only hits were ordinary words inside items. I saved `answers-second.json` **before** running any key extraction, and only then ran `compare.js`.
- **Result: 67 of 67 agree** (3.c: 15 core + 3 Together + 15 similar = 33; 4.b: 15 core + 4 Together + 15 similar = 34). No disagreement, no item where I changed my answer after seeing a key.
- **Honest disclosure on blindness.**
  - The solve of the items was blind. I printed only field names and array lengths of the data first (no values), and a `grep -i together` of the lesson source showed me three comment lines from the 3.a block (not 3.c or 4.b answers).
  - After my answers were saved and compared, a `grep -i jaccard` over `docs/` showed me single lines from this file's first review and from the SIM-1 author log. I read the full first review only after the solve and the dumps.
- **Close calls while solving** (each resolved to the key, each noted below): 3.c C09 (which two sentences support reason 2), 3.c C13 ("because" also fits, "For example" does not), 3.c S04 (opinion-first order reads fine), 4.b C13 Part B (two stanza-4 lines), 4.b C10 (D also rhymes in lines 2 and 4).

## S2. Verdicts

| Lesson | Verdict |
|---|---|
| 3.T.T.3.c | **CHANGES REQUIRED** (2 MUST: S09 option labels, S04 order) |
| 3.T.T.4.b | **CHANGES REQUIRED** (2 MUST: P6 line duplicates accepted 4.a, S08 row 1 near-copies a 4.a poem) |

The fix round did close most of the first review: S02/S08/S11/S12/S13 are no longer clones, the C11 sentence numbers are gone, the C06/C07 pre-answer is gone, the C13 `how` now matches the poem, S10 "town" became "barn", dropdown poems now show " / " line separators, and the p3 and Swim Day topics were replaced. What is left is small, but two items in each lesson are still defects by the MUST definition.

## S3. Findings: 3.T.T.3.c

### MUST

**M3c-A. S09: two options carry sentence numbers that do not match the stem.**
- Stem: "(5) Everyone likes parks. (6) I hope our neighbors will join me."
- Option C is labelled "(5) Picnics, kites and frisbees make parks popular places." Option E is labelled "(6) I hope many neighbors bring gloves and garbage bags."
- A child who checks "(5)" or "(6)" against the draft finds different sentences. Options A, B and D match the stem. `why` and `how4` describe the stem's sentences ("sentence 5 is a general statement, sentence 6 is a wish"), not the options. I found this with a script that compares every "(n) ..." option to the numbered stem text; these are the only two mismatches in either lesson.
- **Fix:** make the options exactly the stem sentences ("(5) Everyone likes parks." and "(6) I hope our neighbors will join me."), or drop the numbers from the options and put the new sentences in the stem.

**M3c-B. S04 has two defensible orders.**
- "Our playground has only one basketball hoop." and "I think our school should add a second hoop." can swap. "I think our school should add a second hoop. Our playground has only one basketball hoop. One reason is..." is a good paragraph, and many real opinion paragraphs open that way. Neither sentence points back to the other.
- Its paired core item P5 does not have this problem, because "turn it into a reading corner" needs the corner named first. C01 and S01 of 4.b are forced by "Then" and "And".
- The key rests on the lesson's convention (introduce, then opinion), but the prompt only says "from opening to ending". Valid orders: 2 (4 positions fixed, the first two swappable).
- **Fix:** give sentence 5 an antecedent, for example "I think our school should add another one." That makes it unreadable as the first sentence and leaves exactly one order.

### SHOULD

**S3c-A. C09 key (8) fits reason 1 at least as well as reason 2.** "Mr. Greene says a bright sign would remind drivers to slow down" is about drivers (reason 1, "help drivers see us"), not about younger students feeling safe. The key is defensible only because (7) and (8) follow the quoted reason in the same paragraph, which is what the teach points say ("evidence usually comes right after the reason"). The distractors (4), (5) are now clearly reason 1, so there is one defensible pair, but (8) is weak. **Fix:** make (8) about the youngest children ("Mr. Greene says the youngest children are the ones who wait longest at the corner").

**S3c-B. S07 reuses the reasoning of accepted 3.a.** "Our town should open X on weekends" with reasons "families who work ... could do it together" and "kids would have a place to play". 3.a p1 (library on Saturdays: "many families are busy during the week... we would have time to go together") and the 3.a gym passage ("open the school gym on Saturdays... families could exercise together") use the same move. No sentence matches, so SHOULD, but the key reason ("Families who work on Saturdays could swim together on their day off") is the 3.a library reason with a pool. **Fix:** change the topic type (a shade tent is used already in S03; try a school garden watering schedule or a longer library loan) or the reasons.

**S3c-C. C06 sets the crossing-sign petition on Elm Street.** Accepted 3.a uses "Our town should paint bike lanes on Elm Street" (Nora, with an Elm Street counter-argument). Same street, same genre (town safety petition), similar names (Nora, Nia). Not a copied sentence. **Fix:** rename the street (Maple Lane, Cedar Road).

**S3c-D. P5 "reading corner" is next to 3.a's "A Reading Tent for Room 6".** P5 is one of the fifteen (core set 1). Different proposal, same classroom-reading idea. Low risk, but change it if S3c-C is changed.

**S3c-E. All-words (multiset) Jaccard above 0.21 on S01 (0.222).** S06 (0.211) and S15 (0.210) sit on the line. The word-set measure the first review used is at or under the ceiling for all 15 (table in S5). Close, not a copy.

**S3c-F. Learn It and Watch Me model three of about ten task types.** They show an opinion statement with introduction, evidence with "because", and a conclusion. Not modelled: choosing a linking word in a gap (C02, C08, C12, P3), choose-two linking versions (C13), ordering (P5), matching jobs (C11), the evidence-from-a-draft pick (C09, C14B). The 3.c teach points name the linking words, so the content is there; no worked example shows the "which relationship?" thinking.

### NOTE

- **N3c-A.** C11 hint 3 ("Look for the words I think or should") still points to one row. It states a method, not a row number, so it is acceptable now.
- **N3c-B.** C13 key pair is "because" (B) and "In addition" (A). "For example" fails only because maths is not an example of togetherness; HOW4 says so. Defensible, and a good decoy.
- **N3c-C.** S11 row 3 ("So a short stretch break would ... our class should take one") also says what the writer wants; the item is still unique because each job is used once. Acceptable.
- **N3c-D.** C07 key (A, B) is exactly the two reasons; D ("busiest street") is a claim with no why. Fine.
- **N3c-E.** FK (heuristic, sentence counts from the numbered sentences): p1 3.9, p2 3.6, p3 4.0, p4 4.5, p5 2.2. p4 is at the 4.5 ceiling.
- **N3c-F.** "Since" now appears as a keyed word (S02, S13), so the official list (because, therefore, since, for example) is fully covered.

## S4. Findings: 3.T.T.4.b

### MUST

**M4b-A. P6 (core set 1) repeats an accepted 4.a line.** P6 stem line 3 is "I pull my blanket to my chin". 4.a "Tap, Tap, Tap" (p1, stanza 1) has exactly "I pull my blanket to my chin / And snuggle in, warm and tight", and a 4.a hottext item quotes it. The setting is the same too (a rainy night, going to bed). `dup2.js` reports the line at Jaccard 1.00 against 3.T.T.4.a. The first review filed this as N4b-3 ("legacy, change with the next 4.a edit"). P6 is one of the fifteen core items and the fix round touched this lesson, so I now rate it MUST. S12 repeats the same rhyme word and idea ("I pull my quilt up to my chin").
- **Fix:** only lines 2 and 4 rhyme in P6, so line 3 is free: change it to a new line ("I snuggle deep beneath my quilt," or similar) and leave the choices alone. Change S12 line 3 ("I pull my quilt up to my chin") the same way, but check that its chin/begin rhyme pair (lines 3 and 4 are the pair in S12) is rebuilt with new end words.

**M4b-B. S08 row 1 is a near-copy of the first line of accepted 4.a "Snail Climb".**
- 4.a p4: "A snail crawled up our garden wall, / As slow as slow can be."
- 4.b S08 row 1: "A snail climbs up the garden wall, / It moves so slowly, bit by bit."
- Same subject, same verb idea (crawled/climbs), same end word (wall), same noun phrase ("garden wall"). Five of seven words are shared, the same scene follows.
- **Fix:** change the creature and place (a ladybug on a window sill; a duck on the pond) and keep "nothing rhymes".

### SHOULD

**S4b-A. p3 "The Morning Bus" still shares a scene with accepted 4.a.** The fix rewrote the stanza (no shared lines now), but 4.a C13 still offers "The bus comes rumbling down our street. / Its doors swing open wide..." and p3 keeps the school bus, "street" as a line-4 rhyme, "rumble" as the C09 key word, and the same lesson task (name the rhyme pattern of a bus stanza: C06 here, C13 there). 4.a is accepted, so the overlap is in this lesson's court. I rate it SHOULD (no shared sentence or rhyme pair; the first review rated the earlier, near-identical stanza MUST). **Fix:** move p3 to a different journey (a walk to the library, a ferry), or change 4.a's distractor at the next 4.a edit.

**S4b-B. C07 prompt gives away C06.** C07: "In every stanza, line 4 should rhyme with line 2." C06 (the item before it, same passage) asks which pattern stanza 1 uses, answer "Lines 2 and 4 rhyme". "Next question" is enabled before C06 is answered (screenshots), and Previous question lets the child read C07 first. The first review's complaint (C06 pre-answers C07) is fixed, but the reverse now holds. **Fix:** C07: "Every stanza in this poem should follow the same rhyme pattern. One stanza breaks it. Choose the line that breaks it" (and keep the five targets).

**S4b-C. C13 Part B now has a second plausible stanza-4 line.** Fixing the first review's S4b-5 added "My shoes are off, my socks are damp," as a stanza-4 distractor. After hints 2 and 3 two choices are live (A "I close my eyes with one last smile," vs C). The key is the better line (eyes closing is sleep), but "shoes are off" reads as relaxed to many third graders, and `how4` calls it "only tells how the dancer looks", which is a stretch. **Fix:** make the distractor a stanza-4 line that is clearly not calm ("I flop down hard and let out a shout") or put the key against two non-stanza-4 lines only if the first review's concern is dropped.

**S4b-D. P6 and C10 hint 3 leave two live choices.** P6 ("Jump up and shout are loud, busy words") removes B and C, leaving A and D. C10 ("sleepy friends and dim lights have a quiet feeling") removes C and D, leaving A and B. Hint 3 must not narrow to the key; it does not, but a coin flip on the next click is thin scaffolding. **Fix:** P6 hint 3 can name one of the two; C10 hint 3 can name only one sleepy stanza.

**S4b-E. Learn It and Watch Me do not model most of the 4.b tasks.** The three examples are: write a rhyming line 2, finish a stanza whose lines 2 and 4 rhyme, check a second stanza against the first. Not modelled: action words (C11, S11), sound words (C09, S09), ordering lines (C01, S01), feeling of an ending (C13, S13), revise a line that does not rhyme (C12, S12), choose a stanza that keeps pattern and feeling (C10, C15). The teach points mention several of them.

**S4b-F. Official wording is about rhyme.** "Use rhyme in at least two stanzas to achieve an intended effect." Four items (C09, C11, S09, S11) test sound or action words, and C13/S13 test feeling, not rhyme. The teach text ties them to "engage audiences", so this is not a defect, but 4 of 30 items rest on that reading.

**S4b-G. All-words (multiset) Jaccard above 0.21:** S08 0.265, S15 0.260, S04 0.238, S01 0.215. Their word-set values are 0.193, 0.210, 0.203, 0.181. S08 and S15 are at the ceiling on word-set as well as over it on all-words, mostly through the shared frame ("Lines 1 and 2 match...", "The ... , / ..."). Not clones (different task content, 0 shared options), but S08 and C08 use the same three patterns and nearly the same column labels.

### NOTE

- **N4b-A.** Dance Class (p4) is not used anywhere else in `js/data` (grep for "Dance Class" returns only this file). Its stanza 3 is meant to have a non-rhyming pair (C12); stanzas 1, 2 and 4 rhyme in pairs and the C11/C13/C14 items agree with the text. The choir (S12), moon watch, game night and buddy bench settings are also absent elsewhere. Common props (recess, farm, bread) appear in other lessons only incidentally.
- **N4b-B.** 4.a has "Game Night" (a ballpark poem) and a "kettle sings" stanza; 3.c C11-C13 use "game night" for a family evening and 4.b S09 uses "The kettle whistles". Different meanings and sentences, not duplicates.
- **N4b-C.** C01 order has one valid arrangement by connectives alone: "Then" and "And" lines cannot open a pair, so Grandpa's line is first, the "And hums" line second, "Then I set the bowls" before "And we sit down". With no punctuation cue except the final period on line 4, the answer follows from logic. Fair. S01 is unique by the same connectives plus "find a book" before "read".
- **N4b-D.** S05 option D ends with "sound", the same word as stem line 2 (identical rhyme). `clue` says every choice rhymes with "sound"; fine, but it is a repeat of the word.
- **N4b-E.** S10: "around" and "barn" are no longer a near-rhyme risk; "barn" is a clean non-rhyme. S14 "night" with "white" is a rhyme but nonsense after "the sun's warm"; the item holds.
- **N4b-F.** S13 offers two "calm and sleepy" choices for a parade poem, so the real choice is between the two "excited" options (one line each). That makes S13 easier than C13 (four feelings). Acceptable for a similar item.
- **N4b-G.** Dropdown poems now show " / " between lines (C04, C14 screenshots). Line breaks would be nicer, but the question wording "lines 1 and 2" can be followed.
- **N4b-H.** FK (poems counted by sentence punctuation; all passages): p1 2.2, p2 2.4, p3 3.8, p4 3.4. All pass.

## S5. Measurements and checks

**Word-set Jaccard, whole item text (prompt, stem, text, options, slot options, steps, rows, cols; passage left out), each similar item against its `like` core item. Ceiling 0.21, at most one shared option.** `jac.js`. "All-words" is the multiset version; "content" excludes stop words.

| 3.c similar | Core | Word-set | All-words | Content | Shared options |
|---|---|---|---|---|---|
| S01 | C01 | 0.204 | 0.222 | 0.125 | 0 |
| S02 | C02 | 0.208 | 0.176 | 0.153 | 0 |
| S03 | P6 | 0.192 | 0.203 | 0.105 | 0 |
| S04 | P5 | 0.176 | 0.176 | 0.068 | 0 |
| S05 | P4 | 0.189 | 0.146 | 0.129 | 0 |
| S06 | C06 | 0.183 | 0.211 | 0.105 | 0 |
| S07 | C07 | 0.162 | 0.179 | 0.082 | 0 |
| S08 | C08 | 0.196 | 0.188 | 0.143 | 1 |
| S09 | C09 | 0.116 | 0.076 | 0.094 | 0 |
| S10 | C10 | 0.126 | 0.161 | 0.050 | 0 |
| S11 | C11 | 0.204 | 0.174 | 0.123 | 0 |
| S12 | C12 | 0.198 | 0.202 | 0.103 | 0 |
| S13 | C13 | 0.169 | 0.110 | 0.093 | 0 |
| S14 | C14 | 0.157 | 0.149 | 0.083 | 0 |
| S15 | C15 | 0.200 | 0.210 | 0.141 | 0 |

| 4.b similar | Core | Word-set | All-words | Content | Shared options |
|---|---|---|---|---|---|
| S01 | C01 | 0.181 | 0.215 | 0.138 | 0 |
| S02 | C02 | 0.154 | 0.161 | 0.095 | 0 |
| S03 | P5 | 0.189 | 0.164 | 0.122 | 0 |
| S04 | C04 | 0.203 | 0.238 | 0.123 | 0 |
| S05 | P6 | 0.113 | 0.164 | 0.086 | 0 |
| S06 | C06 | 0.148 | 0.184 | 0.064 | 0 |
| S07 | C07 | 0.098 | 0.082 | 0.091 | 0 |
| S08 | C08 | 0.193 | 0.265 | 0.118 | 0 |
| S09 | C09 | 0.122 | 0.113 | 0.077 | 0 |
| S10 | C10 | 0.188 | 0.169 | 0.160 | 0 |
| S11 | C11 | 0.149 | 0.109 | 0.121 | 0 |
| S12 | C12 | 0.169 | 0.133 | 0.145 | 0 |
| S13 | C13 | 0.169 | 0.165 | 0.156 | 0 |
| S14 | C14 | 0.141 | 0.143 | 0.088 | 0 |
| S15 | C15 | 0.210 | 0.260 | 0.176 | 0 |

By word-set, all 30 are at or under 0.21 (largest 0.210: 4.b S15; 0.208: 3.c S02; 0.204: S01, S11). Shared options: at most one (3.c S08, the one shared option). By all-words (multiset), seven items exceed or touch 0.21 (S3c-E, S4b-G).

**Key agreement.** 67 of 67 against my blind answers. Keyed text read next to `why`, `how`, hints and clue for all 30 core, 30 similar and 7 Together items (the engine also marks every key correct in the browser run below). `why` and `how` agree with the keys everywhere; the first review's wrong `how` (C13 "dry hair") is fixed ("takes off their shoes, flops down by a lamp, closes their eyes"). The only text/key mismatch is M3c-A (option labels).

**Hand recount of live choices after clue/H1, H2 and H3, all 30 core items.** The engine never rules out choices (`hint()` only reveals text; `ruleOut` is not called on hints, and the browser run shows the same live count after each hint), so the counts follow the hint prose. Clue/H1 and H2 remove nothing in any item.

| 3.c core | Choices | After H3 | 4.b core | Choices | After H3 |
|---|---|---|---|---|---|
| C01 | 4 | 3 | C01 order | 4 lines | pair order fixed, rhyme still to place |
| C02 | 3 + 3 | 2 + 3 | C02 | 4 | 3 |
| P6 | 4 | 3 | P5 | 4 | 3 |
| P5 order | 5 | 1 placed (last) | C04 | 3 + 3 | 2 + 3 |
| P4 | 4 | 3 | P6 | 4 | **2** |
| C06 | 4 | 3 | C06 | 4 | 3 |
| C07 (pick 2) | 5 | 4 | C07 | 5 | 4 |
| C08 | 3 + 3 | 3 + 2 | C08 match | 3 rows | method only |
| C09 (pick 2) | 6 | 4 | C09 | 5 | 4 |
| C10 | 4 | 3 | C10 | 4 | **2** |
| C11 match | 4 rows | 3 (row 4 cued) | C11 (pick 2) | 5 | 4 |
| C12 | 3 + 3 | 3 + 2 | C12 | 4 | 3 |
| C13 (pick 2) | 5 | 4 | C13 ebsr | 4 + 4 | 4 + 3 (2 after H2) |
| C14 ebsr | 4 + 4 | 3 + 4 | C14 | 3 + 3 | 2 + 3 |
| C15 | 4 | 3 | C15 (pick 2) | 5 | 4 |

No item is narrowed to the key. The closest calls are 4.b P6, C10 and C13 Part B (two live; S4b-C, S4b-D). No hint echoes the key's wording: the only hint that names key-related content is C01 (4.b) H3, which tells the child the stove comes first (it is a scaffold, not the answer; the rhyme work remains).

**Word-match keys.** None. Keys share words with their passages, and so do the distractors (3.c C01, C15, S15; 4.b C10).

**Ladders pointing at the key.** None (H1 = clue everywhere; H2 names a place to look; H3 removes one or two distractors).

**Order items.** 3.c P5: unique ("it" needs the corner first). 3.c S04: **two valid orders** (M3c-B). 4.b C01: one valid order (N4b-C). 4.b S01: one valid order. 3.c P5/S04 hint 3 places one sentence.

**Slant rhymes.** 4.b S10 "around/barn": clean non-rhyme. S04 "eyes" and "street" are exact rhymes with nonsense meanings (keyed against). S05 "sound/sound" is an identical rhyme (N4b-D). C07 "know/school" is a clear non-rhyme. "pear/chair", "hello/below", "wide/inside", "chin/begin", "cold/gold" are exact rhymes.

**Dropdown poems.** C04 and C14 (screenshots at 390 x 844) show " / " between lines; blanks sit inline at the line ends. Readable.

**Duplicates.** `dup.js`, `dup2.js` compared every string of both lessons with 3.a, 4.a and every other file under `js/data`. Hint and `why` boilerplate matches are by design. Content hits: P6 chin line (M4b-A), S08 snail line (M4b-B), p3 bus scene (S4b-A), Elm Street (S3c-C), S07 reasoning (S3c-B), P5 reading corner (S3c-D). Dance Class, choir (as a draft topic), moon watch, game night, buddy bench, crossing sign: no match elsewhere. 3.c recess is also the topic of other SS/R items only as a prop. Form A tests (`T1`-`T6`) share no option with core or similar items; 3.c T4 shares only the stem sentence "Sentence 10 is a weak conclusion."

**Standards and points.** 3.c official wording ("introduce the topic, state an opinion, supply reasons... linking words (because, therefore, since, for example)... concluding statement") is covered by C01, C06/C11, C07/C09/C14, C02/C08/C12/C13, C05-style conclusions (P4, C10, C14). 4.b official wording (rhyme in at least two stanzas for an intended effect) is covered by C01, C02, C04, C06-C08, C10, C12, C14, C15; see S4b-F. Points: choose-two, ebsr, order, match, two-blank dropdown = 2; mc and single hottext = 1. DOK values are sensible. Grade 3 suitability: vocabulary and syntax are grade 3 (the longest words are "explode", "circles", "blossom"-level).

**Facts.** The claims in the items are plain language facts: "rumble" and "whistle" as sound words (https://prod-bytebunny.merriam-webster.com/dictionary/rumble, https://www.grammarly.com/blog/literary-devices/onomatopoeia/), "pear/chair", "wide/inside" and "hello/below" as rhymes (checked by sound, not by a source), the moon changing shape from week to week and "the moon is much smaller than the sun" (true as a decoy statement). No invented people or schools are real; "Riverbend", "Hillcrest" appear in other T-lessons as names of fictional schools (reuse, not a problem).

## S6. Browser check (390 x 844, Playwright, `node verification/serve.js /home/claude/pp-content 8791`, server killed by pid)

- All 15 core items of each lesson (three sets of five, via `#skill/<code>/try`): the key (set through the engine) is marked "That's right" in 30 of 30; no page errors; the only console errors are the Google Fonts requests that the harness blocks on purpose.
- `scrollWidth` equals `clientWidth` (390) on every item: no horizontal scroll.
- Hints: three hints appear in order and the number of live choices does not change after any hint (consistent with the recount above).
- Screens looked at: 3.c C09 (hottext, six sentences, passage and Question tabs), 4.b C01 (order, empty slots then four lines), 4.b C04 and C14 (dropdown poems with " / " separators, blank selects inline), plus passage tabs. Layout is fine at phone width. New in this round: nothing wrong with C09, C11, C13, C14 (3.c) or C01, C06, C07, C11, C13, C14 (4.b); the defects are in text (S09 labels, S04 order, P6 and S08 duplicates).

## S7. Order of work for the author

1. MUST: S09 option labels (3.c); S04 antecedent (3.c); P6 line and S12 echo (4.b); S08 snail row (4.b).
2. SHOULD, content: C09 sentence (8); C07 prompt wording (4.b); C13 Part B distractor (4.b); P6/C10 hint 3 (4.b); Elm Street and S07 overlap with 3.a (3.c); p3 bus scene (4.b).
3. SHOULD, measurement: S01 (3.c), S08/S15/S04 (4.b) all-words overlap.
4. SHOULD, teaching: add Learn It examples for linking-word gaps (3.c) and for action/sound words and feeling (4.b).


---

# Third review (3.c/4.b) and fix check (reviewer: independent, 2026-10-23)

Method: brief at `scratchpad/REVIEWER-BRIEF.md`. Own Node vm script (`scratchpad/b5/blind.js`), new seeded shuffle, keys, `why`, hints, `how`, `clue`, `like` stripped. Answers saved to `scratchpad/b5/answers.json` before the key comparison (`b5/grade.js`). The author log section was read after the solve.

## T1. Verdicts

| Lesson | Verdict | MUST | SHOULD |
|---|---|---|---|
| 3.T.T.3.c | **ACCEPT** (SHOULDs may be fixed in a polish pass) | 0 | 3 |
| 3.T.T.4.b | **ACCEPT** (SHOULDs may be fixed in a polish pass) | 0 | 4 |

Both second-review MUSTs are fixed (3.c S09 labels and S04 order; 4.b P6, S12, S08 duplicates). No new MUST found.

## T2. Blind solve

- Items solved: 3.c 33 (15 core with the three `{ref}` items resolved, P1-P3 Together, 15 similar), 4.b 34 (15 core, P1-P4 Together, 15 similar), 1.e two, 2.d two. Total 71.
- **Agreement with the keys: 71 of 71 (100 percent).** Every choose-two, dropdown, order, hottext, match and ebsr item was marked all-or-nothing.
- **Honesty: not fully blind in three small places.** While checking field names I printed (a) 4.b C01 with its `steps` in key order and its hints, so C01 is not a blind result, and (b) the `answer` fields of 4.b C04, C07 and a partial C08/C13. I had already solved those four in my notes before that print, but they were not saved to the file first. Everything else (66 of 71 items) was solved before any key was seen.
- Where I hesitated, even though I matched the key: 3.c C09 and S09 (second correct sentence is an elaboration, not a fact or example, see R3-1); 4.b P2 ("gold" and "old" both rhyme with "cold"; only sense separates them); 4.b P5 (stanza 3 of the poem has a deliberate non-rhyme, so "the rest of his poem" needs the clue's pattern statement); 4.b C10 ("smile" is soft); 4.b S08 row 1 ("glass"/"dash", see R4-2).

## T3. Specific checks requested

| Check | Result |
|---|---|
| 3.c S09 labels match stem | **Pass.** Options read "(3)", "(4)", "(1)", "(5)", "(6)" and are the exact stem sentences. Key: (3) and (4). |
| 3.c S04 unique order | **Pass.** "another one" needs the hoop sentence first; "One reason" before "Another reason" before "So". One valid order (5,1,3,2,4). |
| 3.c C09 key vs reasons | **Pass with SHOULD (R3-1).** Keys are sentences 7 and 8. Sentences 4 and 5 now support reason 1 only. Sentence 8 is a real example (the guard's report). Sentence 7 is an inference ("would know drivers have been told") rather than a fact or example. |
| 4.b P6 and S08 no longer duplicate accepted 4.a lines | **Pass.** Searched all `js/data`: "toes beneath the quilt", "lamp is glowing", "rain has stopped", "drift to sleep", "A duck floats", "quiet pond", "minnows", "milk, I stir", "teddy bear sits" occur only in 4.b. 4.a has "soft and slow" (fireflies poem) and "The rain comes down, the sky is gray" (4.b's own Learn It); these are phrases, not stanzas. |
| Renamed p3 "The Morning Ferry" | **Pass.** "ferry" in other files is a 2.d Golden Gate passage (T-T2.js line 1806) and a plural-spelling item (L-GUM2.js 704). No poem or scene overlap with 4.a C13. |
| 4.b S12 (bedtime/night-light) and S15 (camping) | **Pass.** "pillow's deep", "drifting off to sleep", "pitch our tent", "starry sky" occur only in 4.b. Camping and bedtime are common topics elsewhere (T-TS, T-SS, L-GUM) but no shared stanza or rhyme pair. S15 distractor E starts "The rain comes down," as the 4.b Learn It poem does (own lesson, NOTE). |

## T4. Findings: 3.T.T.3.c

### MUST
None.

### SHOULD

**R3-1 (C09 and S09). The second key is an elaboration, not "evidence".** C09's prompt asks for "evidence"; the lesson defines evidence as a fact, example or expert's words. Key sentence 8 (the crossing guard says the smallest children freeze) is evidence. Key sentence 7 ("They would know that drivers have been told to watch for them") restates the reason in other words. S09 has the same shape: key (3) is a real example (cousin stepped on glass); key (4) ("Volunteers could pick up glass and trash before anyone gets hurt") is a plan, not a fact or example. Both are only reachable by elimination (the rest are opinion, wish or the reason itself). Fix: in C09 replace sentence 7 with a concrete fact or example for the safe-feeling reason (for example, "Last year, a first grader stood at the curb for ten minutes before anyone stopped for her") or ask "which TWO sentences explain or support this reason?"; in S09 change (4) to an example ("Last month, a boy cut his hand on a can in the same park").

**R3-2 (S10). Topic and reasons duplicate accepted 3.a C14.** 3.a C14 is Jada's note: "our family should take a walk together after dinner every night", reason "time to talk about our day", plus "walk after dinner helps us fall asleep". 3.c S10 is "My family should take a walk after dinner... good exercise... chat about our days." Different task (pick the conclusion vs match jobs), same scenario and reasons. Fix: move S10 to a different home-habit topic (a family reading night, watering the garden).

**R3-3 (teaching, carried over from S7 of the second review). Learn It still has one linking-word example.** Learn 2 models "because"; the lesson tests since, therefore, in addition, for example, for instance, besides and as a result in nine items (C02, C08, C12, C13, P3, S02, S08, S12, S13). Fix: one more Learn It example that picks a linking word by relation (adds a reason, gives an example, sums up). Not blocking.

### NOTE
- S08 slot distractors "Long ago", "Long before" and S12 "At last,", "In the past," are obviously out of place for a grade-3 reader; the live choice is mainly the other option. Use "Next," / "Meanwhile," type words to keep three plausible links.
- S11 jobs (wants, why, proves, sums up) differ from C11 jobs (introduces, opinion, reason, wraps up). Fine as a variant, but the `like` is a looser match than the others.
- S14 `like` is C14 (an ebsr conclusion plus evidence); S14 tests only the conclusion half. Honest enough.
- C09 hint 2 says "read the sentences before and after it". The sentences before it (3-5) belong to reason 1, which is the intended trap; fine.

## T5. Findings: 3.T.T.4.b

### MUST
None.

### SHOULD

**R4-1 (C10). "Makes her classmates smile" does not separate the keys.** Distractor C ("sleepy friends... everything is quiet tonight") rhymes in lines 2 and 4 and could make a class smile (a cozy, sweet stanza). The real discriminator is loud or lively versus calm, and S10 already uses "laugh". Fix: change the C10 prompt to "makes her classmates cheer" or "sounds loud and fun", and keep the how/why wording.

**R4-2 (S08 row 1). "glass" and "dash" are a near rhyme.** They share the vowel and a hissing end, and a careful grade-3 listener may hear lines 2 and 4 as a match, making "One rhyme joins lines 2 and 4" arguable. I answered "no rhymes" but not confidently. Fix: end line 4 with a clearly different sound ("And minnows swim below" would rhyme with nothing; "And little minnows flee" also clear).

**R4-3 (C04). "I sell the lot" is a British idiom.** US grade-3 readers say "sell a lot" or "sell them all". "lot" is the key and makes sense only as the idiom. Fix: "I sell them fast, I sell a ___" with lot / knot / most (rhyme with hot is kept; "a knot" and "a most" both fail).

**R4-4 (teaching, carried over from S7). Learn It never models action words, sound words or feeling.** C09, C11, C13, S09, S11, S13 (six of 34 items, 2 to 4 points each) test these; Learn It has only rhyme-line examples. Teach point 2 names them. Fix: one Learn It example that picks a sound word and one that names a feeling from the words. Not blocking.

### NOTE
- S13 (parade) and S09 (kettle in a kitchen) echo accepted 4.a items (C05 town parade with drums and clapping; S06 "The kettle sings. The kitchen's warm."). Different task and different lines, so not a duplicate; a swap for a ball game and a campfire pot would remove the echo.
- C12 and S12 hint 3 are word for word ("One choice keeps the old line 4, which is the line that does not rhyme. Look at the choices that are left."). Paired items should not share a hint 3.
- P2 (Together): "gold" and "old" both rhyme with "cold"; the key rests on sense ("the leaf pile was just made"). Defensible and the why says so.
- P5 asks for "the rest of his poem" while stanza 3 deliberately breaks the pattern; the clue states "lines 1 and 2 rhyme, and lines 3 and 4 rhyme", so it is safe.
- C06 "wait"/"bay" share a vowel; the 2-and-4 reading is still clear.
- Kayla is used in both P4 and S03 for different poems.

## T6. Measurements and checks

**Jaccard (similar against its `like` core item, stem + prompt + choices/steps/rows, no passage), `b5/jac.js`.** Word-set / multiset ("bag"):
- 3.c: highest word-set S05~P4 0.198 (S02 0.193, S03 0.192, S07 0.191); highest bag S03~P6 0.203, S12~C12 0.197, S15~C15 0.192. All under 0.21. With the passage counted, S15~C15 rises to 0.248 / 0.232 because both quote the moon draft, which is expected for same-passage pairs.
- 4.b: highest word-set S03~P5 0.189, S10~C10 0.186; highest bag S06~C06 0.202, S08~C08 0.199, S13~C13 0.194, S01~C01 0.191. All under 0.21. Non-paired pairs: C01~C04 bag 0.28, P4~C04 0.26, C04~C14 0.26 (same dropdown frame words), no shared option.
- 1.e S11~C11: word-set 0.170, bag 0.240 on the prompt frame alone (0.166 with the passage). 2.d S03~C03: 0.113 / 0.121.

**Keys beside explanations.** Read every `why` and `how` against its keyed option in both lessons; all agree. No item states one answer in `how` and another in the key.

**Live choices after the clue and hints 1 to 3** (hand count; "live" means plausible after the hint's removals):

| 3.c | start | after H3 | 4.b | start | after H3 |
|---|---|---|---|---|---|
| C01 | 4 | 3 | C02 | 4 | 3 |
| C02 | 3+3 | 2+3 | C04 | 3+3 | 2+3 |
| C06 | 4 | 3 | C06 | 4 | 3 |
| C07 (pick 2) | 5 | 4 | C07 | 5 | 4 |
| C08 | 3+3 | 3+2 | C08 | 3 rows | method only |
| C09 (pick 2) | 6 | 4 | C09 | 5 | 4 |
| C10 | 4 | 3 | C10 | 4 | 2 (both sleepy stanzas go; the two singing stanzas differ on rhyme) |
| C11 match | 4 rows | 3 | C11 (pick 2) | 5 | 4 |
| C12 | 3+3 | 2+3 | C12 | 4 | 3 |
| C13 (pick 2) | 5 | 4 | C13 ebsr | 4+4 | 4+3 |
| C14 ebsr | 4+4 | 3+4 | C14 | 3+3 | 2+3 |
| C15 | 4 | 3 | C15 (pick 2) | 5 | 4 |

H1 is a strategy, H2 a place to look, H3 removes one distractor or places one item. No hint echoes a key's wording. P6, P5, P4 (3.c) and P1-P6 (4.b) carry no hints by design (Practice Together; the lesson file's `addons` hold their scaffold).

**Standards, points, DOK.** 3.c official wording ("introduce the topic, state an opinion, supply reasons... linking words (because, therefore, since, for example)... concluding statement") is covered by items on all four parts plus linking words. 4.b ("rhyme in at least two stanzas to achieve an intended effect") is covered by pattern, rhyme-with-sense, and effect (feeling, audience) items. Points: pick-2, 2-slot, order, match and ebsr are all 2; singles 1. DOK 2 to 3 is reasonable.

**Facts (web, 2026-10-23).**
- "chug" as an engine sound word: https://www.merriam-webster.com/dictionary/chug ("a dull explosive sound made by or as if by a laboring engine"). "Whistle" and "rumble" were confirmed in the earlier reviews.
- No other real-world claims in 3.c or 4.b.

## T7. Order of work (all optional, none blocks)
1. R3-1 (C09/S09 evidence keys), R3-2 (S10 topic), R4-1 (C10 prompt), R4-2 (S08 row 1).
2. R4-3 (C04 idiom).
3. R3-3 and R4-4: Learn It examples for linking words and for sound, action and feeling.
4. NOTE: C12/S12 shared hint 3; 4.a echo in S13 and S09.

No lesson file was edited and no git command or server was run.

---

## Late fix check (4.b C04 line 4 and S08 row 1, reviewed 2026-10-23)

**Method.** Blind solve of 4.b C04, S04, C08 and S08 in a Node vm sandbox (key, why, hints, how and clue stripped; options and rows seeded-shuffled), answers saved to `b4r7/answers.json` before any key was read. Agreement 6/6 slots and matches (C04 2 blanks, S04 2 blanks, C08 3 rows, S08 3 rows). Honesty: I knew which lines had been edited, but the solve was done from the stripped print and saved before keys were extracted.

### C04 (line 4 now "I sell them fast, I sell a {1}.")

- **Blind key agreement.** Agree: cup, lot.
- **Scansion and rhyme.** Poem: "I set my lemonade stand up, / I pour the juice into each cup, / The line is long, the sun is hot, / I sell them fast, I sell a lot." Each line has eight syllables with a steady beat, up/cup and hot/lot rhyme cleanly. Scans and rhymes.
- **Idiom.** "I sell a lot" is ordinary US English and grade-3 accessible. R4-3 is closed in the poem line.
- **Second defensible answer.** None. Blank 2: "knot" rhymes but "I sell a knot" makes no sense at a lemonade stand; "most" does not rhyme and "I sell a most" is ungrammatical. Blank 1: "glass" makes sense but does not rhyme with "up"; "pup" rhymes and makes no sense.
- **Live choices after hints 1-3.** H3 ("Nobody pours juice into a pup, so cross that word out") removes one choice in blank 1, leaving cup and glass; blank 2 stays at three. H3 does not name or echo the key (it never says rhyme-with-sense for cup or lot). Live. Pass.
- **Longest-key cue.** Blank 1 key "cup" is the shortest (3 vs 3 and 5); blank 2 key "lot" is the shortest (3 vs 4 and 4). No cue in the key's favor.
- **Jaccard vs S04.** Word set 0.145, multiset 0.164. Same dropdown frame, different poem and decoys. Fine.

**MUST (T4b-L1). `why` still quotes the old line.** `why` says: "'I sell the lot' means all of them." The poem now reads "I sell a lot". Students see `why` after answering, so it contradicts the passage. Fix: "'I sell a lot' means she sold many cups."

**SHOULD (T4b-L2). `how` step 3 calls "most" a meaning fit.** `how` says "most fits the meaning but does not rhyme." With the new line, "I sell a most" does not fit the meaning either (this is what R4-3 itself said). Fix: "Knot rhymes but does not fit, and most does not rhyme and does not make sense ('I sell a most')." `why` ("most does not rhyme") is correct as it stands.

### S08 (row 1 "silk" replaces "glass")

- **Blind key agreement.** Agree on all three rows.
- **Row 1 now:** "A duck floats on the quiet pond, / Its feathers shine like silk. / A ripple spreads across the water, / And little minnows dash." End words pond, silk, water, dash: no rhyme, no near rhyme between lines 2 and 4 (the old "glass/dash" assonance is gone). "Like silk" is a simple simile; grade-3 level.
- **Cross-stanza.** "silk" echoes "milk" in the stanza on the milk and the kitten, but "milk" is mid-line there, not an end word, so it is not an end-word match inside either stanza. NOTE only.
- **One defensible answer.** Yes: duck = no rhymes, milk = two pairs (cup/up, lap/nap), teddy bear = lines 2 and 4 (song/along; bed and one do not rhyme).
- **`how` and `why`** list pond, silk, water, dash and agree with the stanza. Key beside explanation: consistent.
- **Hints unchanged.** H3 ("Say the end words of lines 2 and 4 in each stanza. Then decide which pattern each stanza fits") narrows nothing; all three columns stay live.
- **Jaccard vs C08.** Word set 0.158, multiset 0.204 (under the 0.21 line already used in this review). Same task, different stanzas; `like` is honest. Key positions differ (S08 answers 2,0,1 vs C08 0,1,2).
- **Points.** 2, DOK 2, as before.

### Verdict for this check

C04 key and poem are sound; S08 is clean. The explanation text for C04 is stale against the edited line.

**CHANGES REQUIRED** for 4.b C04: fix `why` (T4b-L1, MUST) and `how` step 3 (T4b-L2, SHOULD). After those two text edits the three items are accepted without re-solve; S08 needs nothing.

No lesson file was edited and no git command or server was run.
