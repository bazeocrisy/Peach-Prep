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
