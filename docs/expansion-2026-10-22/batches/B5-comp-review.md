# B5 comp: independent review of TF-FEAT and TF-DIG

## First review

**Reviewer:** independent content reviewer. I did not author these lessons. I edited no lesson and ran no git. I wrote only this file and scratch files under `scratchpad/b5r/`. The one local server I started (pid 19240) is killed.
**Scope:** `js/data/lessons/T-CF.js`: TF-FEAT (3.T.SS.1.a, 3.T.C.1.b) and TF-DIG (3.T.C.1.b). For each lesson: teach and Watch Me, Together P1-P4, core C01-C15, similar S01-S15, tests T1-T5, five figures in `assets/figures/tf-*.svg`.

## Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| TF-FEAT | **CHANGES REQUIRED** | 1 | 11 | 8 |
| TF-DIG | **CHANGES REQUIRED** | 2 | 12 | 8 |

Keys, points, scoring, figures and the mobile layout are sound. Nothing is keyed wrongly, and no item has two defensible answers. The blockers are:
- DIG hint 1 states the key on four items.
- DIG Watch Me W2/W3 and an existing lesson's check item are paraphrased by DIG core and test items.
- FEAT S05 re-uses another lesson's paper-plate-mask core item.

Most SHOULDs are repair work on distractors, similar-bank wording and set giveaways.

| Id | Sev | Lesson | One line |
|---|---|---|---|
| M1 | MUST | DIG | C02, S02, C05, S05: clue/hint 1 (and C02 hint 2) lets a reader write the key without the choices (§4.5 audit rule 5 fails) |
| M2 | MUST | DIG | Key facts already used by Watch Me W2 and W3 and by SK-TC1b: T1 (brackets name sounds), C12/S12 (a pause gets listeners ready), W3 (three tips + First) |
| M3 | MUST | FEAT | S05 re-uses the paper-plate-mask steps of SK-TC1a-C05 (another lesson's core item) |

---

## 1. Blind solve

**Method.** `scratchpad/b5r/blind.js` loads `T-CF.js` in a Node `vm` sandbox with a mock `PP.addLesson`. It resolves refs, prints passages, the figure label, caption and alt text, stems and prompts, and prints core, Together, similar and test items with a seeded shuffle of choices, options, slots, steps, hottext targets, match columns and ebsr parts. It strips `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception` and `like`, recursively. I wrote the stripped JSON to `stripped.json` and grepped it for those words before I read anything. The only hits were ordinary prompt words ("Answer Part A", "Choose TWO answers"). Nothing leaked. I saved `ans-feat.json` and `ans-dig.json` before I extracted any key, then graded with `grade.js`.

**Result: 78 of 78 agree (100%).** Per lesson that is 15 core, 4 Together, 15 similar and 5 test items.

**How blind it was, honestly.**
- TF-FEAT T1 was **not** blind. My schema probe printed `test[0]`, key and `why` included. I solved T1 knowing the key.
- I read the teach and Watch Me text early, to check the schema keys. That is lesson copy a child sees, but it means the two Learn It texts were in my head while I solved.
- I did not open the author log until my answers were saved and graded. I read the log after that.
- A 100% agreement rate only shows the items are answerable. The findings below are what that rate cannot show.

**Solve notes.**
- FEAT C11 Part B, S11 Part B: I got them right by elimination. I read S11 Part B as "which line looks back to the middle section", and I was not sure that was what it asked (SHOULD S-F6).
- FEAT C04: I weighed option A ("The handles ... armpits") because the teach text says a text box can hold a tip. The "same kind of job" wording settles it (NOTE).
- FEAT C11 Part B: the last-section sentence "The ground drops, and a sinkhole opens" also follows from the section before. "Thin roof" is the better answer, but a quick reader could split between the two (NOTE).

---

## 2. MUST findings

### M1 (DIG). Hint 1 states the key on C02, S02, C05, S05
Rule §4.5(5): a reader who sees hints 1 and 2 but not the choices must not be able to write down the key.

- **DIG C02** (choose two ways to get the exact number). Clue/H1: "Ask which features write down what was said, or let him listen once more." Those are the two keys: transcript and replay. H2 then says "the bar and the link that help a viewer review." Keys are "Open the transcript link and read the narrator's words" and "Drag the progress bar back and hear that part again." H1+H2 name both, so H3 only removes 1x.
- **DIG S02.** Same pattern. Clue: "Ask which actions write them out, or let her hear that spot once more."
- **DIG C05.** Clue: "Kofi needs to see where each fold goes. Ask which way of sharing can show hands moving." That is the key (video). The stem already describes the video as "two hands folding the paper".
- **DIG S05.** Clue: "Ravi must keep his gaze off screens and paper. Ask which choice needs no looking." That is the key (recording).
- **Fix.** Make H1 a strategy that does not name the keys' functions. Examples: "Ask what each tool on the page is for" (C02/S02); "Ask what the learner has to do, and which way of sharing fits that job" (C05/S05). Move the "write it out / listen again" idea into H3, as one ruled-out distractor.
- **Same pattern, SHOULD level** (see S-D7): FEAT C03/S03, DIG C10 and DIG C15/S15.

### M2 (DIG). Key facts shared with Watch Me and with another lesson's check items
Rule §4.3(4): never reuse, paraphrase or share the key fact of a Watch Me example, a check item or another lesson's practice item.

1. **DIG T1** ("What does the line [birds chirping] tell the person who makes the video?", key "to play the sound of birds").
   - Watch Me W2 asks "What do the words in brackets tell the person who makes the recording?" and answers "They name the sounds to play".
   - The existing 3.T.C.1.b lesson tests the same fact: SK-TC1b-T9 (check item: "[rain tapping] ... a rain sound plays"), SK-TC1b-P10 ("the words [water rushing] tell the reader what sound plays") and SK-TC1b-C15 and C10.
   - T1 repeats the Watch Me question and the answer, and the key fact of a check item of another lesson.
   - **Fix.** Reassign the test to the [pause] or order skills, or to a bracket the Watch Me does not model. Check it against SK-TC1b-T9 first.
2. **DIG C12 and S12** (why the speaker stops after the greeting).
   - Key C12: "so listeners can get quiet and ready to hear the first notice". Key S12: "give the guests a chance to settle and look her way".
   - Watch Me W3's answer is "His pause gets them ready to listen."
   - This is the same fact, in the same words.
   - **Fix.** Ask about a different job of a pause, for example a pause after a question so listeners can think. Or ask about a different speaker feature.
3. **DIG Watch Me W3 duplicates SK-TC1b-C14.**
   - W3: "three tips for packing a school bag ... First, put the heaviest book at the bottom."
   - SK-TC1b-C14: Kiara has three rules, and the keys are "I have three rules to share" and "first, next and last".
   - The key fact is the same: tell the number, then use "first". This is a Watch Me copy of another lesson's core item.
   - **Fix.** Model a different spoken feature in W3, or a different count-then-order case.

I say this is MUST because T1 and C12/S12 sit directly under the rule. The overlap with the existing 3.T.C.1.b lesson is wider than these three; see S-D1.

### M3 (FEAT). S05 re-uses the paper-plate-mask steps of another lesson's core item
- SK-TC1a-C05 (in `T-C.js`, lesson 3.T.C.1.a) is "How to Make a Paper Plate Mask": "Hold a paper plate up to your face ... Cut out two eye holes. Color a face on the plate ..."
- FEAT S05's six hottext sentences are the same steps: "Hold the plate up to your face.", "Cut out two holes where your eyes are.", "paint the plate your favorite color", "Punch a small hole ... Tie a string".
- The key fact differs (why Add Color follows Cut the Eyes), but the topic and the sentences are the same text.
- The author log (section 6) says topic collisions were resolved. This one was missed.
- **Fix.** Pick another craft or task for S05. Check the new topic against all of `js/data`.

---

## 3. SHOULD findings

### TF-FEAT

- **S-F1. C02 is Watch Me W1 with the names changed.**
  - W1: Bread Around the World, "Chapter 1 ... page 1 / Chapter 2 ... page 8 / bullet page 9 / bullet page 12 / Chapter 3 ... page 16 / bullet page 17".
  - C02: "page 1 / page 8 / page 9 / page 11 / page 14 / page 18 / page 19".
  - Same stem sentence, same layout, same first three page numbers, and C02 asks about page 12, W1's answer page. The operation is the same too (a part runs until the next one starts).
  - **Fix.** Change the page numbers and the stem layout, or ask the reverse operation. The page→section frame also appears in S02 and in the existing SK-SS1a-P7/C15.
- **S-F2. Sinkholes (p3, used by C11) duplicate T-TS p3 "How Water Carves a Cave".**
  - T-TS p3 is a core passage with the same chain: rain soaks into the ground, limestone is worn away, a hollow space forms.
  - The author log says a glacier passage was replaced to avoid a collision, but this one collides in the same way. It also teaches the same sequence logic for the same standard code.
  - **Fix.** Move C11 to a different science chain, or at least a different material.
- **S-F3. T3 vs C08 (author's concern, section 7 below).** Different passages and keys, but T3 reuses C08's distractor family, so a test answer can be recalled from lesson hints. Reword T3 or change its task.
- **S-F4. Order-of-sections appears seven times** (C05, C08, C11, S05, S08, S11, T3) out of about 40 items, always with the same key logic (follow the events or path). Replace S08 or S05 (with M3) with a different component, for example index or map reading.
- **S-F5. Absurd distractors (rule §6.5).**
  - C14: "a chapter is always shorter than a section".
  - C15: "A text box with a fun fact about when the park was built", and "A table of contents that lists each street and its page".
  - S15: "A silly story about the gym"; S10: "Questions? Call the school office".
  - C07: the caption "A small bean plant with two green leaves grows in a paper cup" is a pure description, so H3 leaves a 50/50 between the key and a caption that cannot "add" anything.
  - C02: "Crossing Your Arms" (page 19, a different chapter).
  - **Fix.** Make at least one distractor a plausible misreading in each. Use the lesson's own misconceptions: a caption that repeats the picture with an extra detail; a heading that names a single detail.
- **S-F6. S11 wording and stem.**
  - Directions "Two answers are needed: A and B." replace the standard "This question has two parts. Answer Part A, then Part B." (§6.11).
  - The stem "Imagine a short reading about pearls and oysters. Its story starts with a speck of sand, moves through shiny layers, and ends with a gem ..." duplicates the passage, and it states Part A's key ("each part happens because of the one before it").
  - Part B, "Pick a line from 'A Pearl at Last' that points to its middle part", is ambiguous. "Its" could mean the section or the article. C11's version ("builds on the section before it") is clear.
  - Part A options "Pearls run from large to tiny" and "Facts run from well-known ones to rare ones" are nonsense.
  - **Fix.** Use the standard directions, delete the stem, reword Part B as "Which sentence from 'A Pearl at Last' goes back to the section before it?", and fix the Part A decoys.
- **S-F7. The similar bank is thesaurus-ed to pass the Jaccard ceiling.**
  - The author log says the first bank was over the ceiling for 14 of 15 items, and it was rewritten "with different frames and vocabulary".
  - S09 columns are "Announces a section's topic / Describes the entire image / Points out a single piece / Supplies a bonus fact". They no longer use the words the lesson taught (heading, caption, label, box). The Learn It terms are the ones the child will see on the test.
  - Other changed directions: "Connect each piece with what it does", "Pick the words that tell something new about the scene", "Words under it:", "Select the two additions that let the child read the plan", and S03 and S15 prompts that omit "Choose TWO answers" (the engine adds it).
  - The numbers pass (section 6). The result is harder vocabulary, and it tests wording rather than the skill.
  - **Fix.** Keep the lesson's terms and standard directions, and change the content and context instead.
- **S-F8. Skill not taught before the item (rule §6.9).** C14/S14 (choose the arrangement of chapters by what the reader already knows) is not in the teach text. C12/S12/T5 (find the page both topics share) and C13/S13 (heading pairs) have no Watch Me. Add a teach point for "sort by what the reader knows" and a short index example.
- **S-F9. C03 and S03 clue/H1 gives both keys.** "what a heading does for someone about to read, and for someone looking for one part" is key E and key A. Same pattern as M1 but the definitions are the lesson's own, so I rate it SHOULD. Rewrite H1 as a strategy ("Ask what a heading is for").
- **S-F10. Test T4 vs lesson.** T4 asks which caption "best fits the photo", where the key is the only option with "bees" (word match 0.71 against 0.20). It tests matching a picture, not what a caption adds. T4 also repeats the frame of the existing SK-SS1a-T4 ("Which caption would best fit the picture?").

### TF-DIG

- **S-D1. Overlap with the existing 3.T.C.1.b lesson.**
  - The existing lesson (T-C.js) already has web pages with tabs, search, video and caption lines (SK-TC1b-C09, C10, P10, T9), a bracketed podcast script (C15), and speaker features (P9 "listen closely", C14 "three rules ... first, next, last", C05 Andre reading aloud).
  - TF-DIG re-covers the same key facts: brackets name sounds (T1, C06, S06, C09, S09), a signal or repeat marks what matters (C11, C14, S11, S14, W3), and first/next/last (C07, S07, T3).
  - M2 lists the three that break the rule. The rest is the standing overlap of a second component lesson on the same code. Plan §3 allows a component lesson, but it does not allow shared key facts.
  - **Fix.** For each bracket-sound or speaker item, ask whether it tests something SK-TC1b does not: video markers, transcript, CC, volume, choosing a mode, tone. Keep those, and replace the repeats.
- **S-D2. Set 2 giveaway.** C09's stem says "a [pause] leaves a quiet moment". That is C06's key. C09 is also the same frame as S09 and T2's cue idea.
- **S-D3. Set 3 giveaways.**
  - C13's key "say it slowly and clearly" is the core of C14's key ("slowly and clearly, and then say it again").
  - C11's clue says "A speaker says the fact ... a second time", and C14's key says "say it again". A child who answers one has the other.
  - C14 and C13 use the same key idea (slow, clear, repeat) a few minutes apart.
- **S-D4. Absurd distractors.**
  - C12 ("read the first notice on their desks", "because all of the announcements are finished"), C13 ("leave it out", "let his voice fade"), C14 ("fast as possible", "a whisper").
  - C15 ("Stand behind a tall bookshelf", "in a whisper so the class has to lean in").
  - S05 ("Skip learning, since nobody can study while riding"), S06 ("make the narrator whisper the next question again"), S13 ("hum the words"), S14 ("Mumble it once"), S15 ("Turn her back toward the wall", "Mumble the names").
  - C02: "Tap the Crafts tab" and "Make your own crayons" are not plausible ways to get a number.
  - **Fix.** Use the lesson's real misconceptions: "louder is always better", "a faster video helps", "captions and transcript are the same".
- **S-D5. Longest-key cue** (section 4): C08 Part B (13 words vs an average of 6.3), C01 (7 vs 3.7), C12 (12 vs 8.7), S06, S12, T1, T5.
- **S-D6. C12/S12/C13/S13/C11/S11 are near-DOK1.** C11/S11 repeat the question in the prompt ("what time robotics club starts" -> the sentence with the time), so H2 ("which sentence tells the time") just rereads the prompt. C13's two slots are each one obvious option out of three. They count as DOK 2.
- **S-D7. Hint 1 gives the answer's idea.** C10 ("which one can talk to a visitor while the visitor is doing the activity" is the key), C15/S15 ("her eyes, her voice and things she shows" = keys look up, show a picture, speak up, show a map). Same fault as M1 at a weaker level.
- **S-D8. Learn It teach point 5 pre-answers C05, S05, C10 and S10.** "A video shows how something moves. A recording lets you listen while your eyes or hands are busy. Printed words let you stop and read again." Each key and the C10 distractor "read the same words again" is that sentence. Those four items test recall of one sentence. Make at least two (C10, S10) ask for a trade-off the teach text does not already state.
- **S-D9. Directions and wording in the similar bank.** S08 "Choose for A first. Choose for B next." and "Which line ... backs up your choice for A?" replace the standard ebsr directions (§6.11). S09 "Pick the cue for each blank." S03 "Repair his explanation." Same cause as S-F7.
- **S-D10. C15 `how` says "A picture of the tank"; the item says "the parakeet's cage".** Fix the word.
- **S-D11. C12 `how` says "The listeners are in many rooms".** The passage never says this. Keep to the passage: "The greeting is the first line."
- **S-D12. T5 vs C06, T4 vs lesson.** T5 ("why a [pause] before 'Last, wash ...'") has the same key logic as C06/S06 ("pause = time to do what was just said"). T4's key, "Listeners cannot reread ...", is the lesson's own hint/why wording for C11 and C14. Both tests can be answered by recalling lesson text rather than applying it.

---

## 4. Per-item audits

### 4.1 Single defensible answer, distractors, official wording, points and DOK

All 30 core, 8 Together, 30 similar and 10 test items: one defensible key, with the exceptions in the NOTEs. `official` wording (`standards.js`):
- 3.T.SS.1.a: "Describe how texts are arranged ... using text features (e.g., map, captions) and organizational structures ..., referring to parts of texts using terms such as chapter or section."
- 3.T.C.1.b: "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect."

Points follow the format: ms and match 2, dropdown 2 for two slots and 1 for one, order 2, ebsr 2. DOK: FEAT 1/10/4 (one DOK 1), DIG 1/10/4. No kindergarten-level items. Formats: FEAT six (mc 6), DIG seven (mc 6), so both meet "at least four formats, mc at most six".

**Standard fit.**
- TF-FEAT fits 3.T.SS.1.a and 3.T.C.1.b as the coverage matrix says. Map (C06, C15), caption (C07, P3), text box (C04, T2), chapter/section (C01, C02, C14), TOC and index (C02, C12) and section order (C05, C08, C11) are all within the official wording ("text features (e.g., map, captions) ... chapter or section").
- TF-DIG fits 3.T.C.1.b for digital (C01-C04), audio scripts (C06-C09) and spoken (C11, C12, C14) features. C13, C15, S13 and S15 are closer to presentation delivery (volume, eye contact, a visual aid), which the standards place in the embedded practice K-12.P.CP.2.a ("Communicate clearly to present ideas"). They can stay, with the wording "how this helps listeners understand" (NOTE N-D3).

### 4.2 Keyed text beside why, how and hints (every item)

I printed every keyed choice next to its `why`, `how`, `misconception` and all three hints for all 78 items (core, Together, similar, test), `scratchpad/b5r/full.txt`, and read all of it. A script then compared each hint with each key (content-word overlap, 5-gram overlap, verbatim containment: `echo.js`).
- **No wrong or mismatched key.** Every `why` and `how` agrees with its key. Distractor reasons ("how" last step) match the distractors.
- **Hints that quote or paraphrase the key:** the M1/S-F9/S-D7 items above. The script's other hits were the allowed one-row fills in match items (C04, C09, S04, S09, DIG P2 H3), and C01/S01/P2 where the key is the two-word lesson term in the stem.
- **`how` unsupported by the item:** S-D10, S-D11. FEAT C03 `how` uses the word "glossary", which the lesson never teaches (NOTE).
- Test items have `clue` only (no hints or how), as intended.

### 4.3 Live choices after the clue and hints 1 to 3 (hand count)

| Type | After H1/H2 | After H3 |
|---|---|---|
| mc, four choices | 4 (but see M1 and S-D7 for items where H1 names the key) | 3 |
| ms, pick two of five | 5 (C02, S02 DIG, C03 FEAT: effectively 2 named by H1) | 4 |
| dropdown, two slots | 3 and 3 | 2 and 2 when H3 removes one option from both slots (FEAT C01, DIG C03, C09). 3 and 2 otherwise |
| dropdown, one slot, three options | 3 | **2** (FEAT C07, S07, C12, S12, T5, practice items). The other option is also a plain description or a wrong number, so H1+H3 solve it (NOTE) |
| match, four rows | 4 per row | row settled, 3 per row |
| order | 4 | first step placed |
| hottext (six) | 6 | 5 |
| ebsr A / B | 4 / 4 | 3 / 4 |

No item falls below two live choices after hint 3, and no hint 3 names the key (the rule §4.5(3) check). Hint 3 states one ruled-out distractor with a reason throughout, and the match/order items fill one row or the first step, which §4.5 allows. Hints 1 and 2 never point at a place that holds only the key, except in the M1 items. Hint 1 equals `clue` in every item (the plan's suggested structure).

### 4.4 Longest-key cue (`cue.js`)

In 55 choice groups the key is the unique longest option 21 times. At four options with random lengths I would expect about 14 (25%), so this is above chance, and the margins are large on some:
- **FEAT:** C13 (11 words vs average 7.3), S13 (7 vs 5.3), S11 Part B (13 vs 8.3), T4 (11 vs 8.3), C11 Part A (18 vs 13), C14 (15 vs 12.7), S14 (14 vs 11), S08 (14 vs 11.3), S04 (14 vs 12), C04 (15 vs 13.3), C02 (4 vs 3.0).
- **DIG:** C08 Part B (13 vs 6.3), C01 (7 vs 3.7), C12 (12 vs 8.7), S06 (11 vs 7.7), S12 (11 vs 8.3), S14 (9 vs 7.3), T1 (12 vs 9.3), T5 (12 vs 10), C10 (13 vs 11.3), C08 Part A (13 vs 10.3).
- A child who always picks the longest option would score well above chance on both lessons, including on T4 and T1. Rule §6.5 says the key must not be the only long or detailed option. **Fix:** lengthen the two shortest distractors in the groups with a margin of 3 or more words.

### 4.5 Word-match keys (`cue.js`)

Context overlap (stem + prompt + passage words) is strictly higher for the key than for every distractor in 16 of 55 groups. Most of that is expected. The ones that matter:
- **FEAT C05.** The prompt names "Running in Place" and "The Two-Foot Hop". The key sentence contains both phrases ("Once the two-foot hop feels easy, ... running in place"). One other sentence contains "hop". A child can match words. Reword the prompt to name the sections more loosely, or add a decoy that contains both names.
- **FEAT T4.** Key overlap 0.71 vs 0.20 (the stem names bees and white flowers).
- **DIG C08 Part B.** Key "That is why even a soft whisper can be heard from far away." shares "soft whisper" with the Part A key. A child can match Part B to Part A. Make one Part B decoy also contain "whisper".
- **DIG C11/S11.** Key overlaps with the prompt on "time"/"meets". The prompt already tells the answer's category.
- **DIG C01.** Prompt "color is added" vs key "the Color marker" (the figure labels the markers, so matching a label is the skill).

### 4.6 Learn It and Watch Me pre-answers

- **FEAT teach points** state the rule each item applies ("steps go in the order you do them", "places go in the order you walk to them", "a caption can add when, where or why"). That is teaching, not a pre-answer. The pre-answer risk is in **hint wording that restates the Learn It sentence** (C03, S03).
- **FEAT Watch Me.** W1 (table of contents) is the same frame as C02 (S-F1). W2 (map east of the dock) models C06's skill with the same stem frame; the facts differ, so NOTE. W3 (caption and box) models C07 and C04 with different facts. There is no Watch Me for index, headings choice or section order (S-F8).
- **DIG teach point 5** pre-answers C05, S05, C10, S10 (S-D8). Teach point 4 ("pauses before an important part, and says a key fact twice") is the rule behind C11, C14 and T4; it is fine as teaching, but M2 and S-D3 show that the items repeat the Watch Me wording.
- **DIG W2 and W3** share key facts with T1, C12, S12 (M2). **W1** (bird page, "Hear" button) is not paraphrased.

### 4.7 Similar versus core (`jac.js`)

Method: word-set and multiset Jaccard of stem + prompt + options + slots + steps + rows + cols + ebsr part prompts, no passage, lowercase tokens, no stop-word removal. Ceiling 0.21 and at most one shared option.

| Lesson | Max word-set (like-mapped) | Max multiset (like-mapped) | Shared options (like-mapped) |
|---|---|---|---|
| TF-FEAT | 0.20 (S12~C12) | 0.21 (S06~C06) | 0 |
| TF-DIG | 0.19 (S04~C04) | 0.20 (several) | 0 |

All like-mapped pairs are within the ceiling, with S06~C06 (FEAT) on the line at 0.21 by the multiset measure. Other pairs, not the `like` mapping:
- FEAT S02~P2 word-set 0.22, S08~C11 multiset 0.23, S01~P2 shares four options (all "a chapter" / "a section").
- DIG S06~C09 multiset 0.22, S04~P1 0.21.
- Core and Together pairs: FEAT C07~P3 0.26 (same caption frame), C01~C02 0.26; DIG C04~P1 0.27 (pop-up), C06~C09 0.27.
- These are NOTEs. The numbers pass because the similar bank was reworded (S-F7/S-D9). The frames are still identical: same format, same DOK, same key logic, new content. The `like` mappings are honest (same type, DOK and standard; DIG S01/S02 lack the figure that C01/C02 use and describe the screen in the stem instead).

### 4.8 Test versus lesson

- Test passages: FEAT p5 "Blueberry Season" and DIG p3 "Strawberry Patch" are used only by tests. Other lesson passages are not shared with tests. The 5-gram scan over all of `js/data` finds no copied sentence beyond shared directions and `why` boilerplate.
- Each test item has a lesson partner with the same frame and key logic (FEAT: T1~P1, T2~C09, T3~C08, T4~C07/P3, T5~C12/S12; DIG: T1~C06/W2, T2~C01/P2, T3~C07/S07, T4~C11/C14, T5~C06/S06). Word-set Jaccards are 0.16 to 0.21, except **FEAT T3~C08 0.33 (multiset 0.37)**.
- S-F3, S-F10, M2 and S-D12 give the cases that matter.

### 4.9 Figures

Viewed all five SVGs, and the two shown in the browser at 390 x 844 (`shots/SK-TFF-C06-load.png`, `SK-TFD-C02-load.png`).
- **tf-trail-map.svg.** Alt matches the picture: N arrow up, loop, pond inside, black square on the west side straight left of the pond, circle P below the bottom-left corner, triangle top right, bar bottom right, key lists all five. The one small gap: the picture draws the parking lot below the loop on a short stub, and the alt says "at the bottom left corner of the loop" (NOTE). The map agrees with the p2 brochure (north to the picnic tables, east along the north side of the pond, tower at the northeast corner, south along the east side to the footbridge).
- **tf-yard-map.svg.** Alt matches: bench bar low and central, flagpole circle straight above, triangle left and higher, square right near the top, diamond straight right of the bench; key complete.
- **tf-camp-map.svg** (Watch Me) and **tf-bird-page.svg** (Watch Me): alt matches.
- **tf-crayon-video.svg.** Alt matches (tabs, heading, video with play button, three labelled markers, CC / speaker / 1x, two underlined links). The picture highlights the Crafts tab as the current page, and the alt does not say so (NOTE).
- **Do the pictures give away keys?** Only in the way the item intends (the map answers the map question once the child reads the key, the video page shows the Color marker). They contain no text that answers another item. The alt text for the two map items says outright where the target symbol sits ("straight left of the pond", "A white circle is straight above the bench"), so a screen-reader child gets the spatial fact that a sighted child must find. That is the same information the picture gives (NOTE N-F6).
- No children are drawn. The five figures are original. Legibility at 390 px is good: 22 px labels, the key is below the map, and the figure sits at 295 to 310 px wide.

### 4.10 Facts (WebSearch and WebFetch)

| Claim | Result | URL |
|---|---|---|
| Some sinkholes hold water and form ponds (p3 box "Some sinkholes fill with water and become ponds") | **Supported.** USGS: "some hold water and form natural ponds". It also says debris can plug the outflow and pond the water, which the passage does not need. The author's worry (USGS says water alone does not make ponds) is not a problem for the sentence as written. | https://www.usgs.gov/water-science-school/science/sinkholes |
| Rainwater dissolves limestone, a hollow forms, the ground above collapses (p3) | Supported. USGS: rainwater slowly dissolves rock, spaces and caverns develop, the soil above can no longer be supported. Cover-collapse can be abrupt. | same |
| "big enough to swallow a truck" (p3) | USGS names houses and roads, not trucks. Vehicles are well documented (eight cars in the 2014 Corvette Museum sinkhole). Fine as written. NOTE: if the lead wants a USGS-only claim, say "a house". | https://www.npr.org/sections/thetwo-way/2014/02/12/275939581/sinkhole-swallows-8-cars-at-national-corvette-museum |
| Pearl "After a few years, the layers of nacre have covered the sand" (p6) | **Supported for time.** Britannica Kids: "about three years to produce a cultured pearl of good quality". Ripley's: "at least two years" for a natural pearl of any size. "A few years" is safe. | https://kids.britannica.com/students/article/pearl/276326 and https://www.ripleys.com/stories/creating-a-pearl |
| Pearl is started by "a bit of sand" (p6) | **Simplification that is commonly wrong.** Britannica Kids: "some irritant enters the mollusk shell". Ripley's: the cause is usually a parasite, and sand is "quite an uncommon occurrence". Not a MUST, because the text says "sometimes" and grade-3 science often says sand. SHOULD S-F11: say "a tiny bit of grit or a small pest" or "an irritating speck". | same two URLs |
| Whisper dishes: curved dishes focus sound from the centre of one dish to the other (DIG p1, C08) | Supported. The dishes are parabolic. Sound from the centre bounces off the dish and travels to the partner dish. Speaking in a low voice works. | https://talkerofthetown.com/2015/09/27/how-do-the-whispering-dishes-at-the-rmsc-work/ and https://gatewaytoscience.org/new-whisper-dishes-hear-science-in-action/ |
| Giraffes have seven neck bones, like people (S09) | Supported (Snopes rating true). | https://www.snopes.com/fact-check/giraffes-neck-bones-humans/ |
| Blueberries picked by hand or by a machine that shakes the bush; Georgia grows a lot (p5) | Supported. UGA Engineering: most fresh-market berries are hand-picked, and machine and semi-mechanical harvesters shake the bush so the ripe berries fall onto a catch plate; Georgia became the top blueberry-producing state. | https://engineering.uga.edu/blueberry-research-focuses-on-gentler-methods-of-harvesting-tiny-fruit/ |
| Spinning striped disk blends colours into one (S08) | Supported in the wording used ("blur together into one color"). A real red/yellow/blue disk gives a muddy gray or brown. | https://www.eiscolabs.com/products/ph1232mt |
| Crayons melt, colour, cool (DIG C01 figure) | Supported by the author's Crayola source; "melt, color, cool" is the correct order. | https://www.crayola.co.uk/faq/quality-and-safety/how-are-crayola-crayons-manufactured-and-what-are-the-basic-ingredients/ (author's URL, not re-fetched) |

I did not re-check the grasshopper claim ("some grasshoppers buzz by rubbing their legs on their wings"): the author cites the Smithsonian, and it is a standard fact.

### 4.11 Readability

`verification/readability.py js/data/lessons/T-CF.js` (estimates only):
- FEAT p1 FK 2.1 (164 words), p2 3.1 (155), p3 3.7 (117), p4 3.0 (97), p5 3.2 (101), p6 4.1 (89).
- DIG p1 1.1 (109), p2 2.8 (102), p3 2.6 (102), p4 2.1 (100), p5 1.5 (122).
- All below the 4.5 gate. The DIG scripts are very low (1.1 to 2.8) because oral scripts are short imperative sentences; that is natural for the genre, but DIG p1 and p5 may read below grade 3 (NOTE N-D6).
- FEAT p4 (97 words) and p6 (89 words) are under the 100-word floor in §4.3(2) for a new passage. They are used by two Together items and one similar item only, so the effect is small (NOTE N-F7).
- The author lists inline stems with higher FK (FEAT S03, S13, C13, DIG T2, T5). I did not re-measure; the words are the skill terms, so I agree with the author's call to leave them.

### 4.12 Browser (`ui.py`, `ui2.py`, Chromium 390 x 844 touch, local server)

- All **15 core items per lesson** (three sets): opened in Try mode, screenshot taken, a wrong answer submitted, Check pressed, three hints requested, Show me how, Try a similar question, the similar item answered correctly and accepted. 30 of 30 core items and 30 of 30 similar items worked. The only exceptions are the two ebsr cores (FEAT C11, DIG C08). My wrong/right helper does not set ebsr answers, so the blank feedback is a harness gap, and not a defect. `grade.js` and the data agree for the ebsr keys.
- **No horizontal scroll** on any item, after hints, after Show me how, in similar items, on either lesson page, in Together (4 items each) or in the test (5 items each).
- **Controls.** Every visible button, select, choice row and link measured at least 44 x 44 px. The only flagged element was the question prompt text (324 x 23, not a control).
- Figures load (the SVGs report a nonzero natural width) and fit the card (295 to 310 px).
- Together (practice) and Test passed with the correct answers. Console errors: only the blocked Google Fonts request.
- **Lesson page copy (NOTE N-D5).** The TF-DIG page subtitle reads "Uses headings, captions, bold words and pictures to understand a text." That is the plain-language gloss for 3.T.C.1.b, and it does not describe a lesson about screens, sounds and speaking.

---

## 5. NOTE findings

**FEAT**
- N-F1. C04 option A is a legitimate "tip" for a text box (the teach text says a box can hold a tip). The "same kind of job" wording makes D the only key. Keep.
- N-F2. C11 Part B: the last-section sentence "The ground drops, and a sinkhole opens." also follows from the section before. Key (thin roof) is the better reading. A second read could be defended by a strong child.
- N-F3. C03 `how` introduces "glossary", which Learn It does not teach.
- N-F4. The easy index items (C12, S12, T5) are one-slot dropdowns with a single shared page; H3 leaves two options. DOK 2 is generous.
- N-F5. Watch Me W2's map frame ("straight east of the dock") is reused in C06 and S06 (north). The map skill is the same; the facts differ.
- N-F6. Alt text for C06 and S06 names the target's position outright.
- N-F7. FEAT p4 (97 words) and p6 (89 words) are under the 100-word floor.
- N-F8. T1 shares the heading-finding frame of P1 (and the option "Did You Know?"). Expected for a test.

**DIG**
- N-D1. C05 and S05 are labelled DOK 3 but are DOK 2: the stem describes the video as "two hands folding the paper", so the fit is visible in the stem.
- N-D2. C14 (DOK 3) is a DOK 2 application item. C13 is two obvious choices.
- N-D3. Delivery items (C13, C15, S13, S15) sit closer to presentation skills than to "spoken features and how they contribute to purpose and effect". They are acceptable with that wording.
- N-D4. S07 is the same frame as C07 and T3 (order a spoken sequence). Three order items in about 35 is a lot; fine for formats, heavy for skills.
- N-D5. Lesson page subtitle (see 4.12).
- N-D6. DIG p1 (FK 1.1) and p5 (FK 1.5) may read below grade 3.
- N-D7. The crayon-video figure highlights the Crafts tab as current; the alt does not say so.
- N-D8. C09 gives the cue definitions in the stem and asks for them back, so it is recall of the stem, a DOK 1 item.

---

## 6. Distinctness, context, formats

- **Distinctness.** I checked every core pair for two of four differences (text, component, verb, context). All pass except the pairs in S-F4 (order-of-sections, FEAT C05/C08/C11: same verb "explain/use evidence", different texts) and S-D3 (DIG C13/C14). Neither fails §6.1 outright.
- **Context domains.** FEAT: sports, outdoors, science, family, community, school. DIG: web, craft, museum, school, sports, pets. Each has at least four domains, and none exceeds six items. DIG museum has five (C06-C10).
- **Sets stand alone.** Yes. DIG set 3 is all speaking and set 2 all audio, which keeps each set a unit but lets S-D2 and S-D3 happen.
- **Passages.** No passage carries more than seven items. FEAT core uses p1, p2, p3 and inline texts; DIG core uses p1, p2, a figure and inline texts.
- **`cr` items.** None in either lesson.
- **Spelling of counts.** I scanned every child-facing string for single digits in prose. All hits are page numbers, chapter or room numbers, or slot placeholders. Counts in prose are words ("ten times", "two weeks", "seven neck bones").

## 7. The author's concern: FEAT C08 vs T3 (Jaccard 0.33)

**Is it leakage?** Not leakage of text. It is leakage of the answer strategy, so I rate it SHOULD, not MUST.

- C08 and T3 share the frame "Why did the author put the sections in this order?" / "What is the reason the three sections follow this sequence?", and the same four-option architecture.
- The key is the chronology of the thing described (a walker's path; the berries from flower to store), and the distractors come from the same family of "ranked" reasons: C08 "easiest part of the trail to the hardest" and "most popular first"; T3 "the easiest job on the farm first and the hardest last", "sweetest to sourest", "smallest part of the bush to the biggest".
- C08's hint 3 teaches the exact elimination ("The brochure never says that one part of the trail is harder than another"). S08's hint 3 does the same ("never says what any part of the ride costs"). A child who has used those hints has the T3 rule: reject any ranked reason the text does not give, and pick the option that follows the events. That is a recalled strategy, not a reading of p5.
- The passages and facts are different (p2 vs p5), so the child cannot answer T3 from memory of C08's content. That is why it is not a MUST.
- **Fix, either way:** (a) change T3's task (for example, "Where would a new section about packing the berries fit?" or an ebsr that asks for the sentence that shows the order), or (b) rewrite T3's distractors away from "easiest/hardest" and reorder them. Keep the key logic, which is the skill.

## 8. Answers and files

- Answers: `scratchpad/b5r/ans-feat.json`, `ans-dig.json` (saved before grading). Maps: `maps.json`.
- Scripts: `blind.js`, `grade.js`, `full.js` (key beside why/how/hints), `echo.js` (hint-vs-key and key-vs-teach n-grams), `cue.js` (longest key, word match), `jac.js` (Jaccard), `ngram2.js` (n-grams over all of `js/data`), `exist.js` and `exist2.js` (existing 3.T.SS.1.a and 3.T.C.1.b items), `ui.py` and `ui2.py` (browser).
- Server: pid 19240 on port 8791, killed. Other servers on the machine (8730, 8731, 9370, 9383, 9384) are not mine.

---

## Second review

**Reviewer:** independent content reviewer (second pass). I did not author these lessons and I did not write the first review. I edited no lesson and ran no git. I wrote only this section and scratch files under `scratchpad/b5r2/`. The one local server I started (pid 10899, port 8812) is killed and the port is closed.
**Scope:** `js/data/lessons/T-CF.js`, TF-FEAT (3.T.SS.1.a, 3.T.C.1.b) and TF-DIG (3.T.C.1.b): Learn It and Watch Me, Together P1-P4, core C01-C15, similar S01-S15, tests T1-T5, five figures. I checked the first review's MUSTs and SHOULDs against section 10 of `B5-comp-author-log.md`.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| TF-FEAT | **CHANGES REQUIRED** | 1 | 7 | 10 |
| TF-DIG | **CHANGES REQUIRED** | 3 | 7 | 8 |

Keys, points, DOK, figures and the 390 px layout are sound. Of the three first-review MUSTs, M1 (DIG hint 1 stated the key) and M3 (FEAT S05 copied another lesson's text) are fixed, and the stale "The Roof Falls" reference is gone. M2 is only half fixed: W3 is clean, but T1 and C12/S12 were replaced by items that collide again. The edits that fixed these introduced new faults, and most of the remaining findings come from that:
- **Stale explanations.** Three items were rewritten (FEAT C15, S15 and DIG C12) but the `why`, `how` or hint 3 still describe the old options.
- **New key-fact collisions.** DIG T1 and DIG C12/S12 were replaced with items that share a key fact with another lesson's check item or core item. The author checked the string "CC" in `T-C.js`, not the fact.

| Id | Sev | Lesson | One line |
|---|---|---|---|
| F-M1 | MUST | FEAT | C15 and S15: `why`, `how` and hint 3 name options that are not in the item ("table of contents", "fun fact", "a joke"), and hint 1 states both keys |
| D-M1 | MUST | DIG | C12 `why` still describes the deleted "greeting pause" item and contradicts the key |
| D-M2 | MUST | DIG | T1 (CC shows the words and sounds with the sound off) is the key fact of SK-TC1b-T9, a check item of 3.T.C.1.b |
| D-M3 | MUST | DIG | C12/S12 (spoken words signal a new part, like a heading) are the key fact of SK-TC1b-C05/S03 and of that lesson's teach text; the fix for M2 moved the collision instead of removing it |

### 1. Blind solve

**Method.** I wrote my own scripts in `scratchpad/b5r2/`: `ld.js` (Node `vm` sandbox with a mock `PP.addLesson`), `blind.js`, `grade.js`. `blind.js` resolves `{ref}`, prints every passage (with sentence numbers), the figure label, caption and alt text, stems, prompts and TEXT lines, and prints the core, Together, similar and test items. It shuffles choices, dropdown options, order steps, hottext targets, match columns and both ebsr parts with a seeded generator (new seed 20261023). It strips `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception` and `like` by never reading them. I printed the stripped text and grepped it for `correct|why|hint|how|clue|answer|misconception` before I read it. The only hits were ordinary prompt words ("Choose TWO answers", "Answer Part A"). I wrote `ans-dig.json` and `ans-feat.json` before I ran `grade.js`, and I did not open the first review or the author log until after that.

**Result: 77 of 78 agree (98.7%).**
- TF-DIG 39 of 39: 15 core, 4 Together, 15 similar, 5 test.
- TF-FEAT 38 of 39. The one miss is **FEAT T1** ("Under which heading would a reader find out how blueberries are picked?"). I chose "From Bush to Basket"; the key is "Berries in Summer". That is my misreading: the section under "From Bush to Basket" is about rinsing, sorting and packing, and picking is in "Berries in Summer". The key is right. The heading "From Bush to Basket" is a genuinely tempting decoy, which suits a heading-versus-content item (NOTE F-N1).
- ebsr (FEAT C11, S11, DIG C08, S08) and the choose-two items all agreed. FEAT C11 Part B was solved cold on the new pothole passage.

**How blind it was, honestly.** The solve was fully blind to keys, why, hints, how and the author log. Before I solved, I printed only field names and counts (which fields exist on items, item types, figure keys), never values. I did not read lesson source for these items. I did read the reviewer brief and the head of `B0-review-2.md` for format. I read the Learn It and Watch Me text after solving.

### 2. MUST findings

#### F-M1 (FEAT). C15 and S15: explanation text refers to options that are not there, and hint 1 states the keys
- **C15 choices are:** a compass rose (key), a key (key), "A heading over the map that says Ben's Neighborhood", "A page number in the corner of the map", "A caption under the map that says who drew it".
- **C15 hint 3:** "A table of contents is for a book with chapters, and a map has no chapters, so rule it out." There is no table-of-contents choice, so the child cannot use the hint. **C15 `how` last step** and `why` say "A fun fact and a caption about who drew the map ... a map has no table of contents" and "The fun fact, the table of contents and the caption about the artist". The fun fact and the table of contents are gone, and the heading and the page number are never explained.
- **S15 choices are:** an index with page numbers, "A paragraph about how the school got its name", an arrow marked N (key), a box listing what each shape stands for (key), "A title in big letters across the top". Its `why` and `how` say "A joke, an index and a heading about a favorite class do not help". There is no joke and no favorite-class heading.
- **Hint 1 (also the clue)** of C15 is "A map only helps a reader who can tell directions and read the symbols." S15 is "...find which way to go and read the symbols." Those are the two key functions, compass rose and key. A reader who sees hint 1 can write both keys without the choices. This is the first review's M1 pattern (§4.5(5)). The first review rated the same pattern on FEAT C03/S03 as a SHOULD because the words are the lesson's own; here the hint is item-specific and names both keys.
- **Why MUST.** The author's section 10.2 says C15 and S15 distractors "were made plausible misreadings", but the explanations were not updated. This is a wrong explanation shown after the answer, and a hint 3 the child cannot apply.
- **Fix.** Rewrite `why`, `how` and hint 3 for the actual options (for example, hint 3: "A page number is for a book, not for a map, so rule it out."). Make hint 1 a strategy ("Ask what a stranger would need to use a map he has never seen") and move the "directions" and "symbols" idea into hint 3 as one ruled-out distractor.

#### D-M1 (DIG). C12 `why` describes the deleted item
- **C12 now asks** why Jayden begins notices with "Next" and "Also"; the key is "to show listeners that a new notice is starting".
- **Its `why` still reads** "The answer is 'to show listeners that a new notice is starting.' The greeting comes before the notices, and listeners need a moment to settle. The notices are not printed on the desks, and the announcements are not finished." The greeting, settling and desks belong to the old pause item. The explanation contradicts nothing in the key, but it explains options that no longer exist.
- **Fix.** Rewrite `why` for the four current choices (new notice starts; which to write down; most important; almost over). The `how` is already correct.

#### D-M2 (DIG). T1 is the key fact of SK-TC1b-T9, a check item of the existing lesson
- **DIG T1:** "Mia is watching a video about farm animals. She turns the sound off and taps the CC button. What will Mia see on the screen?" Key: "the narrator's words and important sounds, written out".
- **SK-TC1b-T9** (in `test` of `T-C.js`, 3.T.C.1.b): "The sound is turned off, so the viewer reads the caption line under the video. What does the caption line tell the viewer?" Key: "A rain sound plays, and the narrator says the monarchs wait for it to stop." The frame (sound off, read the captions) and the fact (captions write out the words and the important sounds) are the same.
- **Also:** SK-TC1b-C10/S10 (the caption line shows [pump humming] / [seesaw thumps]) and the existing teach text ("A caption line under a video shows in words what you would hear").
- The first review's M2.1 said "check it against SK-TC1b-T9 first". The author's log says "I checked `T-C.js` for 'CC': no hit". A string search for "CC" cannot find a fact written as "caption line".
- T1 also repeats DIG P2 row 2 and the Learn It example ("CC button: shows captions") almost word for word (Jaccard 0.23, bag 0.27), so it tests recall of Together as well.
- **Fix.** Replace T1 with a skill the other lesson's check does not test, for example choosing between the transcript and the CC button for a stated need, or what a volume change does. Re-check the new item against T8 and T9 by fact.

#### D-M3 (DIG). C12/S12 are the key fact of SK-TC1b-C05 and S03
- **C12 key:** "to show listeners that a new notice is starting" (words "Next" and "Also"). **S12 key:** "to show the guests which topic she is starting" ("Now, about").
- **SK-TC1b-C05** (core): Andre reads a report aloud, and classmates "cannot see the headings. What could Andre do to help them know that a new part is starting?" Key: "Say, 'Now let's find out how beavers use their tails.'" **SK-TC1b-S03** (similar): key "say, 'Next, I will tell you how spiders spin webs.'" The existing teach text says the same: "To start a new part, a speaker can say what the next part is about, the way a heading does. Words like first, next and last help listeners follow along."
- The fact is the same: a spoken signpost does the job of a heading. DIG hint 1 for C12 even says "what a spoken word can do that a heading does on a page", which echoes the existing lesson's own sentence.
- Rule 4 (§4.3) forbids sharing the key fact of another lesson's practice or check item. The first review made the W3 version of this fact a MUST; the replacement moved it to a different lesson's items.
- **Fix.** Ask about a spoken feature that SK-TC1b does not test: pace, tone, volume, or when a pause helps a listener (not the C06/S06/T5 "time to do it" pause). If the lead decides that a second component lesson may repeat a fact from its sibling (the plan's §3 permits a component lesson), downgrade D-M3 to a SHOULD. D-M1 stays MUST either way.

### 3. First-review MUSTs and SHOULDs: status

| First review | Status | Evidence |
|---|---|---|
| M1 DIG C02, S02, C05, S05 hint 1 stated the key | **Fixed** | C02 clue: "Ask what each tool on the page is for. Eli needs to check something that was already said." H2 lists every control. H3 rules out 1x. C05 and S05 clues ask what the learner has to do or is able to do, and which way of sharing fits. Nothing names transcript, replay, video or recording. Related, still open: C01/S01 hint 1 restates the key's function (D-S6) |
| M2.1 DIG T1 | **Not fixed** | Replaced, but the new item collides with SK-TC1b-T9 (D-M2) |
| M2.2 DIG C12/S12 | **Not fixed** | The Watch Me collision is gone. It now collides with SK-TC1b-C05/S03 (D-M3), and C12 `why` is stale (D-M1) |
| M2.3 DIG W3 | **Fixed** | W3 now models a question followed by a wait. I found no item in `js/data` that tests it, and no item in this lesson asks for it (NOTE D-N3) |
| M3 FEAT S05 | **Fixed** | New topic (washing a bike). No hit in a 5-gram scan of all `js/data` (see section 7), no hit for "washing a bike", "scrub the frame", "sponge" or "toothbrush" outside T-CF.js. Residual: lexical giveaway (F-S2) |
| S-F1 C02 vs W1 | **Mostly fixed** | New operation (length of a chapter) and new numbers. Residual NOTE F-N3: page numbers 12, 16, 17 and "Chapter 3 page 16, bullet page 17" still match W1 |
| S-F2 sinkhole vs T-TS cave | **Fixed** | p3 is now "How a Pothole Forms". No T-TS n-gram hit |
| S-F3 T3 vs C08 | **Fixed** | T3 is now "Suppose From Bush to Basket came first". Word-set 0.11 against C08, 0.08 against S08 (was 0.33) |
| S-F5, S-D4 absurd distractors | **Partly** | Better in C14, C15, C02. Still absurd: FEAT C11 Part A (three of four), T3 (three of four); DIG S15, S13, S05, C13 (F-S3, D-S2) |
| S-F6 S11 wording | **Mostly fixed** | Standard directions, stem removed. New fault: two Part B decoys are not lines of the section the prompt names (F-S4) |
| S-F7, S-D9 similar-bank vocabulary | **Fixed** | S09 columns are heading, caption, label, text box. Standard directions back. Residual: S09 `how` uses "Fun Fact" (F-S1) |
| S-F8 skill not taught | **Partly** | Point 5 now covers grouping by what readers look up. Still no Watch Me for section order, headings or index (F-S5) |
| S-F9 C03/S03 hint 1 | **Fixed** | "Ask what a heading is for." |
| S-F10 T4 | **Partly** | T4 now asks what the caption adds, but it is the same frame and prompt as P3 and C07 (F-N6) |
| S-F11 pearl "sand" | **Fixed** | "a tiny speck of grit" |
| S-D2, S-D3 set giveaways | **Fixed** | C09/S09 use [echo], [soft bell], [wind howling]; C13 and C14 keys differ in wording |
| S-D5 longest key | **Addressed** | See section 5 |
| S-D6 C11/S11 DOK 1 | **Not changed** | D-S3 |
| S-D7 hint 1 gives the key idea | **Mostly fixed** | C10, C15, S10, S15 clues are strategies. C01/S01 still restate the function (D-S6) |
| S-D8 point 5 pre-answers | **Not changed** | See D-S5 below. Only C05 and S05 are pre-answered; the C10/S10 keys are not in point 5, so the first review overstated it |
| S-D10, S-D11 `how` wording | **Fixed** | C15 says "cage"; the invented line is gone |
| S-D12 T5, T4 | **Not changed** | D-S7 |

### 4. SHOULD findings

#### TF-FEAT

- **F-S1. S09 `how` says "Fun Fact"; the item does not.** The row is "Wow! A giraffe's neck has seven bones, like yours, in a shaded square". `why` ("The Fun Fact square supplies a bonus fact") and `how` ("The shaded square that says Fun Fact") quote a phrase the child never saw. The words "announces", "supplies a bonus fact", "describes the entire image" are also synonyms of the Learn It terms. Use the taught words ("extra fact", "tells what the whole picture shows").
- **F-S2. S05 (bike), the hottext without a passage.** Checked as asked, and the topic is clean (section 7).
  - The key, "After the mud is rinsed off, scrub the frame with a soft sponge.", repeats "scrub the frame" and "rinse" from the prompt ("why Scrub the Frame comes right after Rinse the Bike"). A word match finds it. The decoy "Spray the bike with a hose to wash off the mud" also names the mud and is the better trap, but it is not enough.
  - There is no passage and no section label on the six sentences, so hint 2 ("Think about the first sentence of each of the three sections") cannot be followed, and hint 3 ("'Put the bike on a flat spot outside' begins the first section") tells the child which sentence is the first of its section, which the item never says.
  - **Fix.** Show the sentences under their three headings (a short passage), and make the key look back without repeating the prompt words (for example "Once the soap and mud are rinsed off, the frame is clean enough to scrub").
- **F-S3. C11 Part A: three of the four options are nonsense.** "From the smallest pothole in town to the biggest", "a different road in a different part of the world", and "most surprising fact to least surprising". Only the key is a reasonable reason, and it is the longest (17 words against 15). The child can answer Part A by elimination. Part B then gives only two last-section sentences after hint 2, with no hint 3 help. The same pattern is in T3 (A "the Did You Know box would have to move to the top", C "readers would no longer be able to tell that the article is about blueberries", D "more sections"). **Fix.** Use plausible Part A decoys that the lesson has taught as real structures, for example "The sections are in ABC order", "The sections go from the cause of a pothole to the cost of fixing it".
- **F-S4. S11 Part B decoys are outside the section the prompt names.** The prompt says "Which line in 'A Pearl at Last' points back to something earlier?". Choices A ("Sometimes a tiny speck of grit slips inside...") and B ("Day after day, it adds another thin layer.") are from the first two sections, so they are wrong by location, not by reading. Only C and D are lines of the last section. **Fix.** Use two other sentences of the last section as decoys, and say "goes back to the section before it", the wording that C11 uses.
- **F-S5. Learn It point 5 and the Watch Me set.** "Steps go in the order you do them. Places go in the order you walk to them. Ideas can build, one on top of another." These three sentences are the keys of C08 (places in walking order), S08 (order a rider sees places), C11/S11 (ideas build) and the reason in C05/S05. The first review called this teaching. I agree it is teaching, but the DIG point 5 was rated SHOULD for the same pattern, and the child has no worked case for section order. There is also no Watch Me for headings (C03, C09, C13), section order (C05, C08, C11) or the index (C12). **Fix.** Add one Watch Me that works a section-order case, or reword point 5 so that it states the question ("Ask why the author chose this order") and not the three answers.
- **F-S6. Key-fact overlap with the existing 3.T.SS.1.a lesson (T-SS.js).** This is the same standing overlap the first review recorded for DIG (S-D1), but it was not recorded for FEAT.
  - **T2** (what the Did You Know? box adds: "an extra fact about blueberry bushes") has the key fact of SK-SS1a-P5 and S04 ("to add an interesting fact about peanuts / cranberries"). It is the cleanest duplicate.
  - C08/S08 (why sections are in the order they are) overlaps SK-SS1a-S01 ("They follow the order things happen"). C07/S07/P3/T4 (a caption that adds) overlaps SK-SS1a-S07 and T4. C12/S12/T5 (index page) overlaps SK-SS1a-C15/S15 (a table of contents lookup).
  - **Fix.** At least T2 should test a different fact (for example, which text box would fit in the section about picking, or what a Try It! box asks).
- **F-S7. S05, C05: hint 2 narrows to three sentences, hint 3 to two.** C05 hint 2 ("Read the first sentence of each of the three sections") picks out three of the six options; hint 3 rules out one; the other remaining first sentence is "Stand on the middle of the rope with one foot", which does not look back. Two live choices, one of them plainly not looking back, so the key stands alone for a careful child. This is allowed (two live), but it is the weakest ladder in the lesson. Make hint 3 restate the evidence ("the word Once points to something that already happened") instead of removing an option.

#### TF-DIG

- **D-S1. C04, S04 and P1 share the key facts of SK-TC1b-T8.** T8 (a check item): "read the open box next to the word [pop-up]" and "tap the underlined words at the bottom [link]". DIG C04 rows 1 and 3, S04 rows 2 and 3, and P1 are the same two facts (a pop-up explains a word and stays on the page; underlined words open another page). The back arrow, menu and search box are new. I rate this SHOULD because the lesson must teach the web features; if the lead applies rule 4 strictly to check items, it is a MUST. **Fix.** Keep the pop-up and the link in Learn It and Together, and make C04/S04 match the features the other lesson does not test (back arrow, menu, search box, progress marker, transcript).
- **D-S2. Absurd distractors that leave the keys obvious.** S15: "Rush through the talk.", "Turn her back toward the wall.", "Mumble the names of the trains." Both keys (8 and 10 words) are also the two longest options (the others are 4, 6 and 6 words). S13: "hum the words". S05: "Skip learning, since nobody can study while riding." C13: "speak in a whisper", "let his voice fade". C02: "Tap the Crafts tab at the top." **Fix.** Use the lesson's real misconceptions ("louder is always better", "a faster video helps", "captions and the transcript are the same").
- **D-S3. C11/S11 are a lookup.** The prompt names the fact ("remember what time robotics club starts", "knows where rehearsal meets"), and hint 2 ("Ask which sentence tells the time" / "where to go") repeats the prompt. The skill, deciding which fact to repeat, is given away. **Fix.** "Jayden has time to say only one sentence twice. Which should he say twice so that listeners can act on the notice?" Add a decoy that is a fact but not the one a listener must act on.
- **D-S4. C09/S09: both blanks are answered by the item's own wording.** The stem defines the bell ("a [soft bell] shows that a new part is starting"), slot 1's sentence says "so listeners hear a voice bounce back" (so [echo]), and slot 2 says "so listeners know the next stop is coming". The decoy [loud buzzer] is not plausible, and hint 3 removes it from both slots. S09 is the same ("[wind howling]" for a line about wind). Asked whether the sound is "obvious from the line alone": yes, for both blanks. **Fix.** Replace the buzzer with a cue that fits the topic ([door creaking] for the tube, [bell ringing] for a different job) and drop "bounce back" from slot 1.
- **D-S5. Learn It point 5 pre-answers C05 and S05.** "A video shows how something moves. A recording lets you listen while your eyes or hands are busy." S05's key is "Play the recording, since ears work when eyes cannot", which is that sentence. C05's key is "the video, because he can watch each fold and replay it". The C10 and S10 keys are not in point 5 (only C10's distractor "read the same words again" is), so those two are fine. **Fix.** Reword point 5 as a question to ask ("Ask what the learner needs to do, and pick the way of sharing that fits"), or keep it and make S05 test a case the sentence does not state.
- **D-S6. Hints that describe the key's function.** C01/S01 hint 1: "Ask which part of the page lets a viewer skip ahead to one part of a video" is the key (the marker) in words. C08 Part B hint 2 ("find the sentence that explains what the dishes do with a very low voice") and S08 Part B hint 2 ("find the sentence that tells what happens to the colored lines") each describe the one option that does that. C04/S04 hint 1 lists all four jobs and hint 2 lists the cue words, so the match is solved from the hints. None names the key text, so I rate this SHOULD, not MUST.
- **D-S7. Tests that recall lesson wording.** T4's key, "Listeners cannot reread, so hearing it twice helps them remember", is C11's `why`/`how` almost word for word, and its three distractors ("Noah is showing that he forgot the rest of his talk", "very quickly and quietly") are not serious. T5 (a [pause] gives viewers time to place the berry) is the same key logic as C06 and S06 for the third time. T1 is D-M2. T2 is the only test item that applies the lesson to a new case. **Fix.** T4: a plausible decoy ("so that the talk lasts longer") and a different reason. T5: ask what the pause before "Next" in the strawberry script does for a viewer who is still choosing berries, or choose another feature.

### 5. Per-item audits

#### 5.1 One defensible answer, plausible distractors, official wording, points and DOK
All 78 items have one defensible key (my blind solve plus a re-read of each `why`). Exceptions are the NOTEs. Points are right (ms, match, order, ebsr 2; two-slot dropdown 2; one-slot dropdown 1; mc and hottext 1). Core DOK strings: FEAT `122222232232332` (DOK 1 once, DOK 3 four times); DIG `122222232322232` (DOK 1 once, DOK 3 three times). Both meet "at most two DOK 1" and "at least two DOK 3". Formats: FEAT six (mc six), DIG eight (mc six). Context domains are at least four in each, none over six items. The official wording in `standards.js`:
- 3.T.SS.1.a: "Describe how texts are arranged ... using text features (e.g., map, captions) and organizational structures ..., referring to parts of texts using terms such as chapter or section."
- 3.T.C.1.b: "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect."
FEAT items sit inside the first (and C04/C07 inside both). DIG C01-C05 (digital), C06-C10 (auditory) and C11-C14 (spoken) sit inside the second. C13, C15, S13 and S15 (volume, eye contact, a visual aid) are delivery, closer to presenting than to features and their effect; acceptable (NOTE D-N4, as the first review said).

#### 5.2 Key beside why, how, hints and misconception (every item)
I printed every keyed choice next to its `why`, `how`, `misconception`, `clue` and all three hints for all 78 items (`full.txt`), and read all of it. A script (`echo.js`) compared each hint with each key by content words and 3-grams, and a second script (`stale.js`) listed words in explanations that are not in the item, the passage or the lesson text. Findings: no wrong key and no explanation that supports a different key. Stale or mismatched explanation text: **FEAT C15, S15 (F-M1), DIG C12 (D-M1), FEAT S09 (F-S1)**. NOTE only: FEAT C13/S13 `how` names "Helicopters and More About Helicopters" and "Tall Buildings and Short Buildings", while the options are "All About Helicopters / More About Helicopters" and "Tall Mall Buildings / Short Mall Buildings". FEAT S14 `why` says "the day does help in finding a club", which is meant to answer the decoy "the day does not help" but reads as a non sequitur. The hits of `echo.js` apart from these are the allowed one-row fills of match items.

#### 5.3 Live choices after the clue and hints 1 to 3
- mc, four choices: four after hints 1 and 2, three after hint 3 (each hint 3 rules out one decoy with a reason). Where two of the three decoys are absurd anyway (FEAT T3, DIG C14, S14), three live options is nominal (F-S3, D-S2).
- ms, choose two of five: five, then four after hint 3 (one decoy named). DIG C15 and S15 hint 3 removes "whisper" and "turn her back", the most absurd option.
- dropdown, two slots: three and three; hint 3 removes one option from both slots (FEAT C01; DIG C03, C09, S09) or from one slot (DIG C13, S13, S03). Two and two live in the first case.
- dropdown, one slot, three options (FEAT C07, S07, C12, S12): two live after hint 3. For C07 and S07 the other option is a bare description that cannot "add" anything (NOTE F-N5). For C12/S12 hint 1 states the whole method ("look for a page that two topics share").
- match: hint 3 fills one row; three rows left.
- order: hint 3 gives the first step; 3! orders left.
- hottext: six; C05 hint 2 picks three, hint 3 removes one (F-S7).
- ebsr: Part A four, three after hint 3. Part B four after hints 1-3; for FEAT C11 and S11 hint 2 sends the child to the last section, which leaves two (C11: A and D; S11: C and D).
- **No hint 3 names the key or leaves only the key.** Every hint 3 rules out one distractor with a reason or fills one row or step. No item has fewer than two live choices after hint 3. Hint 1 equals `clue` throughout.
- Hint 1 and hint 2 together state the key without the choices only in FEAT C15 and S15 (F-M1).

#### 5.4 Longest-key cue (`cue.js`)
In the 55 mc, ms and ebsr groups the key is the unique longest option by word count in **13** groups (24%; by characters 15). With four options chance is 25%, so there is no overall bias. The margin is one or two words in all but two groups. The two to fix:
- **DIG S15:** both keys are the two longest (8 and 10 words against 4, 6 and 6).
- **FEAT S03:** both keys are the two longest (11 and 9 words against 8, 7 and 6).
The remaining unique-longest groups are FEAT C04, C11 Part A, C13, C14, S04, S08, S11 Part A; DIG C08 Part A, C10, S14, T5. The author counted 11; the two choose-two groups account for the difference.

#### 5.5 Similar versus core (`jac.js`)
Method: stem, prompt, options, slot options, steps, rows, columns, ebsr part prompts and hottext sentences (passages added in a second run), lowercase tokens, no stop-word removal. Word-set and multiset (bag) Jaccard of each similar item against the core item named by `like`. Ceiling 0.21.

| Lesson | Max word-set (like-mapped) | Max bag (like-mapped) | Pairs over 0.21 |
|---|---|---|---|
| TF-FEAT | 0.198 (S14~C14) | 0.209 (S06~C06) | 0 |
| TF-DIG | 0.206 (S08~C08, with passage) | 0.209 (S03~C03) | 0 |

With stop words removed the maxima are 0.14 to 0.16. The author's bag maximum of 0.209 is reproduced. S06~C06 (FEAT), S03~C03 (DIG) and S12 (DIG) sit within 0.001 of the ceiling, so any added word fails. Non-mapped pairs: FEAT S15~C03 0.226 and DIG S12~C15 0.220 are the shared "Choose TWO answers" and "Why does ... begin" frames (NOTE). The `like` mappings are honest: same type, DOK, points, standard and slot count in every pair. The only differences are DIG S01/S02 (no figure; the screen is described in the stem) and FEAT S05 (no `pick`).

#### 5.6 Test leakage
- Test passages: FEAT p5 ("Blueberry Season") and DIG p3 ("Strawberry Patch") are used only by tests. No 5-gram of any test item (`tleak.js`) matches lesson text beyond directions and standard codes.
- Word-set overlap of each test item with the best-matching lesson item: FEAT T1~P1 0.20, T2~C09 0.21, T3~C03 0.14 (T3~C08 0.11), T4~P3 0.25, T5~C12 0.21; DIG T1~P2 0.23 (bag 0.27), T2~S03 0.19, T3~C07 0.18, T4~C05 0.19, T5~S12 0.18.
- **FEAT T3 versus C08:** resolved. The task changed (the effect of reordering), the distractor family ("easiest to hardest") is gone, and the Jaccard is 0.11.
- **FEAT T4~P3 0.25:** same prompt and frame as P3, C07 and S07 ("Which caption adds something that the photo cannot show?"). NOTE F-N6.
- DIG T1 and T4 are the items that recall lesson wording (D-M2, D-S7).

#### 5.7 Grade-3 suitability, distinctness, giveaways inside a set
- No kindergarten-like item. The register is grade 3 throughout; DIG S13 "hum the words" and S06 "make the narrator whisper the next question again" are silly (D-S2).
- No two items differ only by names or numbers. FEAT C12/S12/T5 repeat the "page both topics share" operation three times with new data, which is the skill. FEAT S05 and C05 are the same frame (looking-back sentence) by design as like-mapped.
- Within-set giveaways: DIG C13 slot 1 key "keep his voice strong" and C14 key "Say 'Field B' in a strong voice, and then say it again" share "strong voice" (NOTE D-N2). FEAT C02 lists "Running in Place, page 12", which is the section C05 asks about; harmless. Nothing leaks across sets. FEAT C08 comes before C10, whose options list all the headings; no giveaway.

### 6. Learn It and Watch Me versus the fifteen
- **FEAT.** Watch Me models the table of contents (W1), a map (W2), and a caption plus box (W3). The core also needs section order (C05, C08, C11), headings (C03, C09, C13), the index (C12) and grouping (C14), which have only teach text (F-S5). W1 and C02 share the page-number pattern (NOTE F-N3).
- **DIG.** W1 models digital controls, W2 brackets that name sounds, W3 a speaker who asks a question and waits. The core needs signal words (C12), repeating a key fact (C11, C14), delivery (C13, C15) and choosing a mode (C05, C10), which only teach text covers. W3 models a technique no item asks about (NOTE D-N3). This is a consequence of the rule that a Watch Me must not share a key fact with the items, so I do not ask for a change, but the lead should know that W3 does not rehearse any core skill.

### 7. Duplicate scans over all of `js/data`
- **5-gram scan** (`ngram2.js`, 43 files in `js/data` other than T-CF.js; content fields only: stems, passages, choices, options, rows, columns, steps, text): no hit longer than a standard frame. The hits are "here is part of the table of contents" (T-SS), "best supports the answer to part A" (ebsr prompt, many files), "on a web page about", and "each section tells about a different" (a decoy frame also in SK-SS1a-S06, "Each section tells about a different kind of starfish"; FEAT C11 Part A decoy and S11 old decoy reuse it, NOTE F-N8). Also **FEAT C07 stem** "Mr. Carter's third-grade class grew bean plants in paper cups" shares "grew bean plants in paper cups" with T-TS ("Room 4 grew bean plants in paper cups"); different skill, same sentence (NOTE F-N7).
- **Bike topic (FEAT S05):** no hit for "washing a bike", "wash ... bike", "scrub the frame", "sponge", "toothbrush", "drop of oil", "rinse the". The bike items in T-T2 (a labeled diagram) and T-T1 (a chain) are unrelated. Clean.
- **Pothole (FEAT p3/C11):** no hit for "pothole" anywhere else in `js/data`. The old sinkhole text is gone ("glacier", "Roof" and "sinkhole" are not in T-CF.js; the only trace is a stale code comment, F-N9).
- **Other topics** checked by word search outside T-CF.js: oyster (only a crab sentence in T-T1), pearl (a character named Pearl in T-C), jump rope (one sentence in T-T34), nature trail (a school nature trail in other items; no map or brochure), blueberries (a slide title in T-C and a spelling item), giraffe (a list sentence), echo (poem lines), "fold a paper" (T-C "How to Fold a Paper Hat"; DIG C05 is a different task). No collision.
- **Key facts, not strings:** see D-M2, D-M3, D-S1 (T-C.js, 3.T.C.1.b) and F-S6 (T-SS.js, 3.T.SS.1.a). A string scan cannot find these.

### 8. Facts (WebSearch and WebFetch)

| Claim | Result | URL |
|---|---|---|
| Pothole: water gets into cracks, freezes and expands, the ice melts and leaves a gap, traffic breaks the weak spot (FEAT p3 and C11) | **Supported.** Hampshire County Council: "When the water freezes, it expands and makes the cracks bigger." "When the ice melts, it leaves the gaps under the surface." "Traffic presses down on the weakened area." Maryland SHA: water enters through cracks, freezing draws in more water, the unsupported surface collapses, the hole expands under traffic. The Maryland page says the thaw traps water and does not say "gap"; the passage's "a gap under the road" is the Hampshire wording and is a fair simplification | https://www.hants.gov.uk/transport/winter-impact/winter-potholes and https://roads.maryland.gov/mdotsha/pages/index.aspx?PageId=815 |
| Crews fill a pothole with asphalt (p3 box says "hot, sticky asphalt") | Supported. Maryland SHA describes cutting, cleaning and patching with new asphalt; cold mix is a temporary patch and hot mix the standard permanent repair | https://roads.maryland.gov/mdotsha/pages/index.aspx?PageId=815 |
| Recycled paper steps (DIG S01: mash, press, dry) | Supported: tear, mash the pulp, press, blot, dry | https://www.education.com/activity/article/make-recycled-paper |
| Escalator: a loop of steps rolls up and flattens at the top; the handrail moves with the steps (FEAT S13) | Supported. "Near the top and bottom, the steps fold into one another to form a flat platform." The page does not give "hold the rail"; that is a common safety rule, not a claim about mechanics | https://wonderopolis.org/wonder/how-do-escalators-work (the HowStuffWorks page returned empty) |
| Items I did not re-verify | Whisper dishes, crayon steps, blueberry picking, giraffe neck bones, color-disk blur: the first review checked these and they are unchanged | see the first review, section 4.10 |

No new factual error found.

### 9. Readability (FK of every passage, ≤4.5 gate)
`verification/readability.py` (the repo's estimator) and my own syllable-based script (`fk.js`) agree to within 1 grade:
- FEAT p1 2.1/1.9, p2 3.1/2.5, p3 2.9/2.5 (129 words, the new pothole text), p4 3.6/3.3, p5 3.2/3.0, p6 4.0/3.6.
- DIG p1 1.1/0.3, p2 2.8/2.9, p3 2.6/2.0, p4 2.1/1.6, p5 1.5/1.9.
All are under 4.5. All FEAT passages are at least 100 words (p4 109, p5 101, p6 103). DIG p1 and p5 are below grade 3 by FK, which is natural for an audio script (NOTE D-N5).

### 10. Browser (390 x 844 touch, local server, Chromium; `ui.py`)
For each lesson I opened every core item (three sets of five) in Try mode and:
1. answered it **correctly by clicking the real controls** (mc and ms choice buttons by `data-i`, and for the two ebsr items each part's buttons separately: FEAT C11 and DIG C08), pressed Check, and read the feedback;
2. reloaded with fresh storage, answered it wrongly the same way, pressed Check, asked for hints 1, 2 and 3, pressed Show me how, opened Try a similar question, answered the similar item correctly with the same controls and pressed Check.

(Dropdown, match, order and hottext answers were set through the page's response object, as in the earlier harness; the ebsr, mc and ms items were driven through the controls.)

Results:
- **FEAT 15 of 15 and DIG 15 of 15** correct answers accepted; 15 of 15 and 15 of 15 wrong answers refused with the "not quite" feedback; three hints available on every item; Show me how available on every item; all 30 similar items opened and accepted a correct answer, including FEAT S05 (hottext with options) and both ebsr similar items.
- **No horizontal scroll** on load, after hints, after Show me how, or in any similar item.
- **Controls:** every button, choice and link is at least 44 x 44 px. The only flagged element is the question prompt heading (324 x 23, a focus target, not a control).
- **Figures** load: `tf-trail-map.svg` (FEAT C06) and `tf-crayon-video.svg` (DIG C01, C02) show at 295 px wide. I viewed C06 and C02: the map matches its alt text (N arrow up, picnic-table square left of the pond, tower top right, bridge bottom right, key complete), and the video page matches its alt text (the Crafts tab is highlighted; NOTE, the alt does not say so).
- **Console:** only blocked Google Fonts requests.
- Screenshots: `scratchpad/b5r2/shots/` (`*-load.png`, `*-hints.png`, `*-sim.png`).

### 11. NOTE findings

**FEAT**
- F-N1. T1: "From Bush to Basket" invites the wrong reading (I chose it). Keep it as a decoy; the item is sound.
- F-N2. C11 Part B: D ("A piece of road snaps loose, and a pothole opens") follows from the weak spot too. A is the better answer because it uses the words "weak spot". A strong reader could split.
- F-N3. C02 still shares page numbers 12, 16, 17 and the shape "Chapter 3 page 16, bullet page 17" with W1, and hint 1 is W1's third step. Change the numbers.
- F-N4. C05: "the last section of the chapter" is Running in Place, but the Try It! box follows it. A child might wonder whether the box counts. Name it "the section Running in Place".
- F-N5. C07/S07: after hint 3 the two live options are the key and a bare description, which cannot "add" anything. Make the second option a caption that repeats the picture and adds a small unseen detail.
- F-N6. T4 shares the prompt and frame of P3, C07 and S07; T5 is the third index item of the same operation.
- F-N7. C07 stem and a T-TS sentence share "grew bean plants in paper cups".
- F-N8. C11 Part A decoy "Each section tells about a different road..." reuses a decoy frame of SK-SS1a-S06.
- F-N9. The code comment above `core` still says "Set 3: p3 (glaciers)" (T-CF.js line 195). It should say potholes.
- F-N10. C13/S13 `how` text and S14 `why` wording (section 5.2). Ben appears in both C13 and C15.

**DIG**
- D-N1. C02 is not ambiguous. "Pause the video and wait for it to be said again" is a correct plausible decoy.
- D-N2. C13 slot 1 key ("keep his voice strong") and C14 key ("in a strong voice") share words; a child who answers one has the other.
- D-N3. W3 (ask a question and wait) rehearses no core skill.
- D-N4. C13, C15, S13, S15 are delivery items (volume, eye contact, a picture). Acceptable, as in the first review.
- D-N5. p1 and p5 read below grade 3 by FK.
- D-N6. S08 Part A key ("Stripes melt into one color when spun fast") and Part B key ("They blur together into one color") share "into one color"; a child can match B to A. The three Part A decoys are very short.
- D-N7. Mr. Cole appears in W3 and P4, and Eli in C02, P1 and T2. Names repeat across items of one lesson.
- D-N8. The lesson page subtitle (first review N-D5) and the crayon page's highlighted tab (N-D7) were not changed; I did not recheck the subtitle.

### 12. Items the lead asked about

- **DIG C12/S12.** The key is the only sensible answer and defensible alone, but the `why` is stale (D-M1), the key fact belongs to SK-TC1b-C05/S03 (D-M3), and hint 1 gives the idea (what a heading does on a page). A child who read Learn It point 4 has the key verbatim.
- **DIG C09/S09.** Unambiguous. [echo] and [wind howling] follow from the line alone, and the bell is defined in the stem. The decoy [loud buzzer] is not plausible (D-S4).
- **DIG C08 Part B.** The decoys are now a direction ("Say it slowly, and keep your voice low."), another direction, and a description of the room. They are plausible. The key now ties for longest with the room description (13 words each; the others are 10 and 7). Hint 2 describes the key's function (D-S6). Part A is defensible: the passage supports "to show the dishes carry a quiet sound".
- **FEAT C02/S02.** "Ten pages" is unambiguous (pages 6 to 15; Chapter 3 starts on page 16). The off-by-one decoy "11 pages" is the intended trap. S02 gives the method in the prompt ("runs until the next chapter begins"), which C02 does not.
- **FEAT C11 Part B.** The stale "The Roof Falls" reference is gone (searched `T-CF.js` for "Roof"; only a code comment about glaciers remains). Part B is answerable on the new passage; D is a weaker second reading (F-N2).
- **FEAT S05 (bike).** Topic clean over all of `js/data` (section 7). Lexical giveaway and no passage (F-S2).
- **FEAT T3/T4 versus C08.** T3 resolved (0.11). T4 is the same frame as P3 (F-N6).
- **Learn It point 5.** DIG: pre-answers C05 and S05, not C10 and S10 (D-S5). FEAT point 5 states the reasoning of the order items (F-S5).
- **DIG T5 versus C06/S06.** Same key logic for the third time (D-S7).

### 13. Answers and files
- Answers: `scratchpad/b5r2/ans-dig.json`, `ans-feat.json` (saved before any key was read), `maps.json` (the shuffle maps), `blind-TF-DIG.txt`, `blind-TF-FEAT.txt`.
- Scripts: `ld.js`, `allld.js`, `blind.js`, `grade.js`, `full.js`/`full2.js` (key beside why, how, hints), `echo.js`, `stale.js`, `cue.js`, `jac.js`, `pair.js`, `tleak.js`, `ngram.js`/`ngram2.js`, `ex.js` (existing 3.T.C.1.b and 3.T.SS.1.a items), `fk.js`, `ui.py`.
- Server: pid 10899 on port 8812, killed; the port refuses connections.

### 14. Verdicts
- **TF-FEAT: CHANGES REQUIRED.** One MUST (F-M1: C15/S15 explanations and hint 1). The SHOULDs are repair work: S05, C11 Part A, S11 Part B, S09 `how`, T2 overlap, and one Watch Me for section order.
- **TF-DIG: CHANGES REQUIRED.** Three MUSTs (D-M1 C12 `why`; D-M2 T1 vs SK-TC1b-T9; D-M3 C12/S12 vs SK-TC1b-C05/S03). D-M3 may be downgraded to SHOULD if the lead accepts sibling-lesson overlap; D-M1 and D-M2 may not.
- Once the MUSTs are repaired and the new items are re-checked against T-C.js by key fact, I would accept both lessons. The remaining SHOULDs are distractor and hint repairs that do not change keys or structure.


## Third review

**Reviewer:** independent content reviewer (third pass). I did not author these lessons and I did not write the first or second review. I edited no lesson and ran no git. I wrote only this section and scratch files under `scratchpad/b5r3/`. The one local server I started (pid 24793, port 8913) is killed and the port refuses connections.
**Scope:** `js/data/lessons/T-CF.js`, TF-FEAT (3.T.SS.1.a, 3.T.C.1.b) and TF-DIG (3.T.C.1.b): Learn It, Watch Me, Together P1-P4, core C01-C15, similar S01-S15, tests T1-T5, five figures. I checked the second review's four MUSTs against section 11 of `B5-comp-author-log.md`, and searched every new key fact by concept over all of `js/data`.

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| TF-FEAT | **CHANGES REQUIRED** (one MUST, and it depends on a lead ruling, see 3.3) | 1 | 6 | 9 |
| TF-DIG | **CHANGES REQUIRED** | 2 | 8 | 8 |

Keys, points, DOK, figures, readability and the 390 px layout are sound. All four second-review MUSTs were worked on. Three are closed (F-M1, D-M1, D-M3). **D-M2 is only half closed**: the new T1 is clean, but the same caption fact is still tested by DIG T2 (second blank) and by Together P2. The new findings come from the instruction to search key facts by concept, not by string, over the existing 3.T.C.1.b lesson and its check form. I applied one rule throughout, §4.3 rule 4 read literally: *an item must not share the key fact of a form A or form B check item, a Practice Test item, or another lesson's practice item.* Sibling-lesson **check items (`test` of T-C.js)** are MUST; sibling practice, core or similar items are SHOULD or NOTE.

| Id | Sev | Lesson | One line |
|---|---|---|---|
| D3-M1 | MUST | DIG | Pop-up and link facts in C04 (rows 1 and 3), S03 (blank 2), S04 (rows 2 and 3) and P1 are the two key facts of SK-TC1b-T8, a form A check item |
| D3-M2 | MUST | DIG | T2 blank 2 and P2 row 2 (CC shows the narrator's words) are the key fact of SK-TC1b-T9, a form A check item; D-M2 is only half closed |
| F3-M1 | MUST (strict rule) | FEAT | C07, S07, T4 (and P3) ask "which caption adds what the photo cannot show", the question and key logic of SK-TC1b-T6, a form A check item of 3.T.C.1.b |

### 1. Blind solve

**Method.** I wrote my own scripts in `scratchpad/b5r3/`: `ld.js` (Node `vm` sandbox with a mock `PP.addLesson`) and `blind.js`. `blind.js` resolves each item (core items are inline here, Together is `practice`), prints every passage with sentence numbers, the figure label, caption and alt text, stems, prompts and TEXT lines, and prints core, Together, similar and test items. It shuffles choices, dropdown options, order steps, hottext targets, match columns and both ebsr parts with a seeded generator (**new seed 90417**). It never reads `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception` or `like`. I wrote my answers to `answers.json` and made it read-only **before** I ran `cmp.js`. I did not open the first or second review, section 11 of the author log, or any `why`/`hints` until after the comparison.

**Result: 77 of 78 agree (98.7%).**
- TF-DIG 39 of 39 (15 core, 4 Together, 15 similar, 5 test).
- TF-FEAT 38 of 39. The one miss is **FEAT C11 Part B** ("Which sentence best shows how the section 'The Road Breaks' builds on the section before it?"). I chose "A road with a gap under it can hold for a while, but it gets weaker." That sentence is from the section **before**; the key is "At last, cars roll over the weak spot." This is my misreading: I read the prompt as "which sentence is the thing the last section builds on". The key is right, and the item is answerable, but the wording invites exactly this slip from a hasty child (SHOULD F3-S2).
- My first comparison run showed five disagreements; four were a bug in my own grader (hottext answers are target refs such as `p1:7:1`, not indexes). After I fixed the grader the only disagreement was C11 Part B. I did not change any answer.

**How blind it was, honestly.** Fully blind to keys, explanations and the author log. Before solving I printed (a) field names and `typeof` of key fields (`number`, `string`) to learn the schema, never values; (b) the first 1,500 characters of `T-CF.js`, which show the file header comment and the first two Learn It points of FEAT (chapter, section, heading). No item source and no key was in that output. I read the reviewer and content briefs and the plan's §4 and §6 before solving. I read Learn It and Watch Me after solving. I did reuse the second review's generic scripts (`cue.js`, `jac.js`, `tleak.js`, `ngram2.js`, `fk.js`, `ex.js`, `echo.js`, `stale.js`) after solving; I read their code before running them.

### 2. Second-review MUSTs against section 11 of the author log

| Id | Status | Evidence |
|---|---|---|
| **F-M1** FEAT C15, S15 | **Fixed** | C15 options are compass rose, key, heading, page number, caption. `why`, `how` and hint 3 now name exactly those: hint 3 "A page number is for a book, not for a map, so rule it out"; `how` and `why` mention "a heading, a page number and a caption about who drew the map". S15 options are arrow N, key box, paragraph about the school's name, index, big title; `why`, `how` and hint 3 (the index) match. Hint 1 is now a strategy ("Ask what a stranger would need in order to use a map that he has never seen"), hint 2 is a picture-the-walk prompt. A reader who sees hints 1 and 2 without the choices cannot write either key. No stale option names remain (I searched both explanations for "table of contents", "fun fact", "joke", "favorite class": none). |
| **D-M1** DIG C12 `why` | **Fixed** | C12 was replaced. The new `why` ("A slow, quiet voice right before the ghost appears builds suspense. A whisper is not a silly voice, it does not mean the story is almost over, and it makes the words harder to hear from far away") matches the four current options. `how` and the three hints also match. |
| **D-M2** DIG T1 progress-bar fact | **Half fixed** | T1 (drag the dot near the end, so the child hears the last part) is clean by concept: I searched all of `js/data` for "progress bar", "slider", "drag", "scrub", "jump to a part", "marker" and "dot on": the only hits are a zipper slider (T-RA) and "dragon" words. No existing item tests it, and the SK-TC1b-T8/T9 facts are not in T1. **Residual:** T2 blank 2 ("To read the narrator's words while the video plays, he taps the CC button") and Together P2 row 2 (CC "writes out the words and sounds") are still the key fact of SK-TC1b-T9 (D3-M2). T1 and T2 blank 1 (Picking dot) also repeat the marker fact of C01/S01 inside the lesson (SHOULD D3-S9). |
| **D-M3** DIG C12/S12 voice-and-feeling fact | **Closed, with a NOTE** | The signpost fact (spoken words do a heading's job) is gone from C12 and S12 and from Learn It point 4. The new keys are "to make listeners wonder what will happen next" (slow whisper before the ghost) and "to make the finish sound exciting" (fast loud announcer). Concept search over all `js/data` (words and concepts: suspense, excitement, announcer, relay, campfire, spooky, ghost, storyteller, commentator, "slows down", "stops for a moment", "listen closely", "excited", "mood", "tone", "voice"): nothing tests voice-builds-a-feeling. **Neighbours the author's scan did not list:** SK-TC1b-P6 row 4 and its `why` ("slows down and stops for a moment right before an important fact"), SK-TC1b-P9 ("Listen closely. This next part is important"), the 3.T.C.1.b teach text ("a speaker may slow down, stop for a moment, or say 'Listen closely' right before an important part"), and SK-TC1b-C15/S15 (a drumroll or alarm sound makes listeners excited). C12 shares the delivery move (slowing right before a key moment) but not the key (suspense versus "an important fact is coming"); S12 shares the feeling (excitement) but not the means (a voice, not a sound effect). None of these is a check item. I judge it **not the same fact**; D-M3 is closed. NOTE D3-N1 records the proximity. |
| **Together P4 vs C12/S12** | **Different fact** | P4 (tone fits the message: happy for the prize, serious for the cancellation) asks the speaker to match the voice to the mood of what is said. C12/S12 ask what a speaker's pace and volume do to the listener. Both come from one Learn It sentence each, they differ in key, text and context, and P4 is not one of the fifteen. NOTE only. |

### 3. New MUST findings

#### D3-M1 (DIG). Pop-up and link facts are the key facts of SK-TC1b-T8
- **SK-TC1b-T8** (3.T.C.1.b, `test`, form A): "To learn what hatches means, a reader should {read the open box next to the word}. To find out which flowers people can plant for monarchs, a reader should {tap the underlined words at the bottom}." Two facts: a pop-up explains a word on the same page; a link (underlined words) opens another page. SK-TC1b-P10 (practice) also keys "underlined words open a page about beaver lodges", and the 3.T.C.1.b teach text and Watch Me 2 state both.
- **DIG items that key the same two facts:**
  - **C04** row 1 (note about the word reef without leaving the page = pop-up) and row 3 (jump to the page about whales = link). Hint 3 states row 1.
  - **S04** row 2 (open a different page about the sun = underlined words) and row 3 (explain what lunar means in a short note = dotted-line word). Hint 3 states row 3.
  - **S03** blank 2 ("Underlined words are the way to {hop to another page}").
  - **P1** (Eli taps a dotted word and a box opens; key: a pop-up that explains a word without leaving the page).
- **Why MUST.** §4.3 rule 4: never share the key fact of a check passage (form A or form B). The second review rated this SHOULD (D-S1) and said "if the lead applies rule 4 strictly to check items, it is a MUST". The lead has asked for the strict reading. The author declined to change it twice (section 11.3: "Learn It and Together need them").
- **Fix.** Keep both facts in Learn It and Watch Me 1, which teach them. In C04, S04 and S03 use the controls the check does not test: Back arrow, menu button, search box (magnifying glass), progress marker, transcript, volume. For example C04 columns: a back arrow, a menu, a search box, a progress marker. Replace P1 with a different control (the Hear/speaker button, the Back arrow, or a tab). Re-check the new rows against SK-TC1b-P10, S02 and C13.

#### D3-M2 (DIG). T2 blank 2 and P2 row 2 are the key fact of SK-TC1b-T9
- **SK-TC1b-T9** (form A): sound off, the viewer reads the caption line under the video; key "A rain sound plays, and the narrator says the monarchs wait for it to stop". The fact: the caption line (CC) writes out what is said and the important sounds. Also SK-TC1b-C10/S10 and the teach text.
- **DIG T2** (test) blank 2: "To read the narrator's words while the video plays, he taps the **CC button**." **P2** row 2: "the button marked CC → writes out the words and sounds." Same fact, same frame (a viewer who wants the words).
- **Why MUST.** This is the second review's D-M2 (which may not be downgraded, per that review). The author replaced T1 and checked only T1; the fact survived in T2 and P2. The author log says the check was "no file in `js/data` has 'progress bar', 'drag' or 'slider'", which is right for T1 but does not look at T2 or P2.
- **Fix.** T2 blank 2: ask what the volume button, the speaker icon or the transcript link does (for example "To read every word after the video ends, he opens the transcript link"; check that against C02/S02 and P3, which key the transcript). P2: replace the CC row with the volume row ("the speaker button → changes how loud the sound is"). Keep CC in Learn It and Watch Me only.

#### F3-M1 (FEAT). The caption cluster repeats SK-TC1b-T6
- **SK-TC1b-T6** (3.T.C.1.b, `test`, form A): "Look at Figure 2 and read its caption. What does the caption tell the reader that the picture alone does not show?" Key: where the monarch is and where it is going. The 3.T.C.1.b teach text says it too ("A caption can also tell something the picture cannot show, like where or when").
- **FEAT items with the same key fact and nearly the same question:**
  - **T4** (test): "Which caption adds something that the photo cannot show?" (key adds *when* and *why*).
  - **C07** and **S07** (core, similar): "The writer wants a caption that tells readers something the photo cannot show." / "Pick the words that tell something new about the scene." (keys add *how long* and *why*).
  - **P3** (Together): the same prompt as T4, word for word (T4~P3 word-set 0.25, the highest test-to-lesson value in the batch).
- **Why MUST under the strict rule.** The question, the key logic and the 3.T.C.1.b code are the same, and T6 is a form A check item. FEAT carries `3.T.C.1.b` in `codes`, so the plan's rule 4 was written for exactly this case. The first two reviews compared FEAT's caption items with SK-SS1a-S07/T4 (captions that *fit* a picture) and missed T6, which asks the same thing as FEAT C07.
- **Lead ruling needed.** If the lead rules that two lessons on the same standard code may share the caption fact (as the plan's §3 may allow for a component lesson), F3-M1 becomes a SHOULD and FEAT is ACCEPT. I have not assumed that.
- **Fix.** Keep one item (Together P3 plus Watch Me 3) that teaches "a caption can add what the photo cannot show". Change C07, S07 and T4 to a different caption fact that no check item keys: for example choose which of two photos a caption belongs under, which caption names the whole picture rather than one part, or match a caption, a label and a heading to their jobs (C09 does this). Re-check the replacement against SK-TC1b-P8 (caption fits the picture), SK-TC1b-C07 (caption for a whole diagram) and SK-SS1a-C07/T4.

### 4. SHOULD findings

#### TF-FEAT
- **F3-S1. S11 Part B decoys (the item the lead asked about).** Prompt: "Which line in 'A Pearl at Last' points back to something earlier?" Key: "After a few years, nacre has covered the grit completely." Decoys: "People open the oyster to find it." (a line of that section; **"it" points back to the pearl in the line before**, so it is defensible under the literal wording "something earlier"), and "Day after day, it adds another thin layer." and "Sometimes a tiny speck of grit slips inside an oyster's shell." (lines of *other* sections, so wrong by location and not by reading). The last section has only three sentences, and the one not offered, "The grit has become a pearl.", also looks back. Hint 2 ("points back to the middle section") rescues the item: with it, one answer is defensible. I solved it correctly cold and judge it **one defensible answer, but not a clean one**. Fix: change the prompt to "goes back to the section before it" (the wording C11 uses), and use as decoys two sentences that clearly do not look back. A last section of three sentences cannot supply them; add a fourth sentence to p6 ("Pearls are used in jewelry" would work but drifts, so use a plain detail such as "Some oysters take longer than others").
- **F3-S2. C11 Part B wording invites the slip I made.** "Which sentence best shows how 'The Road Breaks' builds on the section before it?" A hasty reader picks the sentence it builds on (C, the last line of the middle section, which is Part B's second-best decoy). Say "Which sentence **in** 'The Road Breaks' …". Also F-N2 (D, "A piece of road snaps loose", also follows from the weak spot) still stands; hint 2 resolves it.
- **F3-S3. T2 key is the only option that mentions flowers.** T2: which Try It! box fits the section Flowers in Spring. The key is the only option with "flower"; the three decoys use picking, packing and a truck, the words of the later headings. A child can match the word in the heading to the word in the option and skip the skill. Fix: make one decoy a flower box that is not a task (for example "Try It! Bees are very important to blueberry bushes.", a fact, not a job), or put "flower" in two options.
- **F3-S4. C15/S15 share the key facts of SK-V1b-T5** (3.L.V.1.b check form A: "a map key" tells what each symbol means; "a compass rose shows directions"). It is a vocabulary-term item in a different lesson, so I rate it SHOULD, not MUST. The same facts are in SK-SS1a-S03 (practice, "a map with a key") and the lead may prefer to leave them: both are standard map vocabulary and FEAT teaches them. If the lead applies the strict rule across codes, one of the two keys in C15 and S15 needs another feature (for example a scale, a title that names the place, or labels).
- **F3-S5. Carry-overs not changed since the second review.** (a) No Watch Me for headings (C03, C09, C13), section order (C05, C08, C11) or the index (C12) (F-S5). The reworded Learn It point 5 now states a question, but a child still has no worked order case. (b) C05 and S05 have the weakest ladders in the lesson: hint 2 picks the three first sentences, hint 3 removes one, so the key stands against one sentence that plainly does not look back (two live, allowed, F-S7). (c) C09/S09 row 4 (a text box adds an extra fact) shares its fact with SK-TC1b-T2 (form A) and SK-SS1a-P5/S04; one row of four, so SHOULD. (d) Absurd decoys remain in C11 Part A (B "ABC order" is fine, D is a stretch), T3 (B, C, D), S11 Part A (B, D).
- **F3-S6. C13/S13 `how` text quotes headings that are not the options** (carried NOTE F-N10 and S14 `why`, "the day does help in finding a club", which is a non sequitur). Tidy while the file is open.

#### TF-DIG
- **D3-S1. C11/S11 prompts name the fact.** C11: "Jayden wants listeners to remember what time robotics club starts. Which sentence should he say a second time?" Hint 2: "Read the paragraph about robotics club. Ask which sentence tells the time." The prompt and hint 2 say the same thing, so the item is a lookup of one sentence in a three-sentence paragraph (the key is the only sentence with a time). Same in S11 (place). Both are unambiguous (checked: C11 [4] gives the room, not the time; S11 [2] gives no place, [3] does). The author's reason for keeping the prompt (naming nothing makes time and room both defensible) is sound. Fix without that cost: keep the prompt, and add as decoys sentences that **also contain a fact** (for example "New members are welcome, so bring a friend" and "Room 12" in the same sentence as the time), so that the child must choose the fact the prompt names, not the only fact. Third time raised (D-S3, first review S-D6).
- **D3-S2. C12 and S12 decoys, and what the author asked about.** Is "to help listeners who sit far away hear the words better" an easy trap to eliminate? **Yes.** The stem says she drops her voice to a whisper, so D contradicts the stem; B ("laugh at how silly the story is") contradicts "spooky story" and "ghost". Hint 3 removes D, so after hint 3 the live set is A, B and C, with B absurd: two live, allowed, nominal. S12: B ("the race has not yet begun") contradicts "last runners near the finish"; D ("he is tired and wants to stop") is silly; C ("remember the names of the runners") is the only plausible decoy. Fix: give C12 a decoy a child could believe ("to tell listeners that a scary part is over", "to make the listeners feel safe") and S12 two ("to give the listeners time to catch up", "to tell the runners to go faster").
- **D3-S3. T4 key is lesson wording.** T4 ("Listeners cannot look back, so a second time gives them another chance to catch it.") shares a five-gram with the lesson's own text (C11 `why` and Learn It point 4: "Listeners cannot look back"), and it is the longest option (15 words against 13). Its decoys ("A rule sounds more serious when it is said in a whisper", "lets Noah rest his voice") are not serious. Recall, not transfer.
- **D3-S4. T5 is the third item with one key logic.** C06 ("[pause] leaves a quiet moment so listeners can try the whisper"), S06 (stay silent while visitors look) and T5 ("a moment to place the berry in the basket"). The test repeats the same reasoning on a new script. Also T3 repeats the C07/S07 frame ("put the steps in the order the narrator tells them"). Fix T5 by asking about a different bracket in the same script ([snap of a stem], [birds chirping]) or what the narrator's "Next" does.
- **D3-S5. T1 and T2 blank 1 re-test C01/S01 (progress marker jumps to a part).** C02/S02 (drag back, move the slider) add two more. Five items on one control; the test items are recall of the practice. Keep T1 (it applies the fact to a new case, an audio recording) and change T2 blank 1 (the Picking dot) to a control that is not yet keyed (volume, speaker button, Back arrow).
- **D3-S6. C13 hint 3 contains a typo that makes it unreadable.** "Saying **the room** only once would not fix the problem that it was too fast". It should read "Saying it only once …" or "Saying 'Room 12' only once …". A child who gets this hint cannot parse it.
- **D3-S7. Hints that restate the key's function, carried from the second review (D-S6) and widened.** C01/S01 hint 1 ("Ask which part of the page lets a viewer skip ahead to one part of a video") is the key's job. C08 Part B hint 2 and S08 Part B hint 2 each describe the one option that does the job. **New:** C03 hint 1 gives the jobs of both keys ("One takes you to the page you just left, and one finds a page by a word you type") and S03 hint 1 gives all four jobs. The plan's own worked example (§4.6, the B0 fix) names this pattern as the thing to avoid: a hint that gives the definitions of the keys. In C03 the stem already states the two jobs, so the cost is small; I rate SHOULD, not MUST. No hint states a key option.
- **D3-S8. Absurd decoys left after the second review (D-S2).** C02 ("Tap the Crafts tab at the top"), S05 ("Skip learning, since nobody can study while riding"), S13 ("hum the words"), C13 ("let his voice fade", "speak in a whisper"), S15 ("Hurry through the talk"). The keys are not the longest in any choose-two group now (section 5.4), so the fix is only to make two decoys believable per item.
- **D3-S9. Learn It and Watch Me versus the fifteen.** Learn It point 4 now carries the keys of C07 (first, next, last), C11/C14 (say a key fact twice), P4 (good news happy, a warning serious), C12 and S12 (suspense, excitement), and point 2 carries C06's key ("a [pause] leaves a quiet moment" in point 3). That is teaching, and I did not rate it MUST, but a child who reads Learn It can answer these by recall. Watch Me models the web page controls (W1), brackets (W2) and a question followed by a wait (W3); no worked case covers signal words, repeating a fact, delivery or choosing a medium (carried NOTE D-N3).

### 5. Audits

#### 5.1 One defensible answer, plausible distractors, official wording, points and DOK
All 78 items have one defensible key (my blind solve plus a read of each `why`). The one soft spot is FEAT S11 Part B (F3-S1). Points are right (ms, match, order, ebsr 2; two-blank dropdown 2; one-blank dropdown 1; mc and hottext 1). Core DOK strings FEAT `122222232232332`, DIG `122222232322232`: at most two DOK 1 (one each), DOK 3 at least two (four and three). Formats: FEAT six types, mc six; DIG seven types, mc six. At least three technology-enhanced formats and at least four formats in each. Every `like` is honest: same type, DOK, points, standard and blank or row count in all 30 pairs (my script `pair check`), except DIG S01/S02, whose figure is described in the stem. Official wording (`standards.js`, `official`): 3.T.SS.1.a "Describe how texts are arranged ... using text features (e.g., map, captions) ... referring to parts of texts using terms such as chapter or section" (p. 29); 3.T.C.1.b "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect" (p. 26). All FEAT items sit inside the first or both; DIG C01-C05 (digital), C06-C10 (auditory) and C11-C15 (spoken) sit inside the second. Delivery items (C13, C15, S13, S15: volume, eye contact, a picture) are the effect of a spoken feature and stay inside the wording (NOTE D3-N6).

#### 5.2 Key beside why, how, hints and misconception (every item)
I printed every keyed option beside `why`, `how`, `misconception`, the clue and all three hints (`keyed-FEAT.txt`, `keyed-DIG.txt`; Together hints come from `addons`) and read all 78. `echo.js` compared each hint with each key by content words and 3-grams: the only hits are the allowed one-row fills of match items (FEAT C09/S09 hint 3; DIG C04, S04 hint 3; DIG P2 hint 3). `stale.js` listed words in explanations that are not in the item, the passage or Learn It: only ordinary words ("compare", "sentences", "against"), no option name that is absent from the item. No wrong key, and no explanation supports a different key. Defects: DIG C13 hint 3 typo (D3-S6); FEAT C13/S13 `how` paraphrases the headings; FEAT S14 `why` non sequitur. FEAT C03 `how` introduces "glossary", a word that Learn It does not teach (NOTE F3-N3).

#### 5.3 Live choices after the clue and hints 1 to 3
- mc: four, four, three (hint 3 removes one decoy with a reason). ms: five, five, four. Choose-two ms items keep two keys among four.
- dropdown, two blanks: hint 3 removes one option in both blanks (FEAT C01; DIG C03, C09, S09) or in one blank (DIG C13, S13, S03): two to three live in every blank. One blank: three, three, two live (FEAT C07, S07, C12, S12, T5). In C12 and S12 hint 1 states the whole method ("look for a page that two topics share") but not the page.
- match: hint 3 fills one row; three rows left. Order: hint 3 gives the first step (FEAT none; DIG C07, S07): 3! = 6 orders left.
- hottext: six; FEAT C05 and S05 end at two live (hint 2 picks three, hint 3 removes one); DIG C11 and S11 end at two live in the named paragraph, but the prompt already names the fact (D3-S1).
- ebsr: Part A four, three after hint 3. Part B stays at four after hint 3 (no hint 3 targets Part B), but hint 2 narrows to the last section in FEAT C11 and S11 (two live: C11 A and B; S11 A and B).
- **Result:** every item has at least two live choices after hint 3. **No hint states or quotes a key.** No hint 3 leaves only the key. Hint 1 equals the clue throughout. The weakest ladders are FEAT C05/S05, DIG C12/S12 and the two lookups C11/S11.

#### 5.4 Longest-key cue (`cue.js`)
Of 38 FEAT groups the key is the unique longest by word count in 7 (18%), by characters in 8; of 40 DIG groups in 7 (18%) and 13 by characters (32%, mostly one-to-three-word dropdown options where the key is longer by a few letters). With four options chance is 25%, so there is no overall bias. No choose-two group has both keys longer than all the decoys (the second review's S03 and S15 are fixed). Largest word margins: DIG T4 (15 against 13), DIG C08 Part A (13 against 11), FEAT C11 Part A (17 against 15), all two words. SHOULD D3-S3 covers T4.

#### 5.5 Similar versus core (`jac.js`: lowercase tokens, no stop-word removal, set and multiset Jaccard of stem, prompt, options, rows, columns and hottext sentences; ceiling 0.21; every pair mapped by `like`)
| Lesson | Mode | Max word-set (like-mapped) | Max bag (like-mapped) | Pairs over 0.21 |
|---|---|---|---|---|
| TF-FEAT | all tokens, no passage / with passage | 0.198 (S14~C14) / 0.198 | 0.209 (S06~C06) / 0.209 | 0 |
| TF-DIG | all tokens, no passage / with passage | 0.191 (S08~C08) / 0.206 (S08~C08) | 0.209 (S03~C03) / 0.209 | 0 |
| both | stop words removed | 0.135 (FEAT S13) / 0.159 (DIG S08) | 0.117 / 0.139 | 0 |

The author's maximum bag overlap of 0.209 is reproduced exactly. S06~C06 (FEAT) and S03~C03 (DIG) are within 0.001 of the ceiling, so any added word fails. Unmapped pairs above the ceiling: FEAT S15~C03 0.226 and DIG S13~C09 bag 0.213 (shared "Choose TWO answers" and "Choose the words that best complete" frames; NOTE). The shared-frame S04~P1 (DIG) is 0.204.

#### 5.6 Test leakage (`tleak2.js`, `jac.js` tail)
- Test passages FEAT p5 ("Blueberry Season") and DIG p3 ("At the Strawberry Patch") are used only by tests. 5-grams that tests share with lesson text, after removing standard codes and directions: FEAT T2 "the author wants to add" (P4 frame), FEAT T4 "which caption adds something that the photo cannot show" (P3, C07, S07: F3-M1), DIG T2 "choose the words that best complete the sentences", DIG T3 "put the steps in the order", **DIG T4 "listeners cannot look back so a second time"** (lesson text, D3-S3). No other hit.
- Word-set overlap of each test with its closest lesson item: FEAT T1~P1 0.20, T2~C04 0.20, T3~C03 0.14, **T4~P3 0.25**, T5~C12 0.21; DIG T1~P2 0.17, T2~S03 0.19, T3~C07 0.18, T4~C13 0.17, T5~S12 0.17 (bag 0.23 with C06).
- Key-fact leakage by concept: F3-M1 (T4), D3-M2 (T2), D3-S4 (T3, T5), D3-S5 (T1, T2).

#### 5.7 Key-fact duplicate search by concept over all of `js/data`
I listed every item of 3.T.C.1.a, 3.T.C.1.b (T-C.js: 15 practice-like Together, 15 core, 15 similar, 6 form A tests), every 3.T.SS.1.a item (T-SS.js and the five TS-* lessons in T-TS.js), every `test` and `testB` of every lesson, and every item of `js/data/sets/*.js` with std 3.T.C.1.b or 3.T.SS.1.a (PT-1-11, PT-1-12, R-INF-01-3, -4, -6, -7), then searched by keyword and by reading the keys.

| New fact | Existing item with the same key fact | Class | Result |
|---|---|---|---|
| DIG: a pop-up explains a word without leaving the page; underlined words open another page | SK-TC1b-T8 (form A), SK-TC1b-P10 | check | **MUST D3-M1** |
| DIG: CC / captions write out the words and sounds | SK-TC1b-T9 (form A), SK-TC1b-C10/S10 | check | **MUST D3-M2** (T2, P2) |
| FEAT: a caption adds what the photo cannot show | SK-TC1b-T6 (form A) | check | **MUST F3-M1** |
| FEAT: a text box adds an extra fact (C09, S09 row 4) | SK-TC1b-T2 (form A), SK-SS1a-P5/S04, R-INF-01-6 | check, practice, set | SHOULD (row level, F3-S5) |
| FEAT: a map key explains symbols, a compass rose shows directions (C15, S15) | SK-V1b-T5 (3.L.V.1.b form A), SK-SS1a-S03 | check of another standard | SHOULD F3-S4 |
| FEAT: a heading tells what its section is about (C03, S03, P1, T1) | PT-1-12, SK-TC1b-C04/S06/P1, SK-SS1a-P3 | Practice Test, practice | NOTE: this is the definition of a heading; C03/S03 add a second key (skim to find) that the others lack |
| FEAT: sections follow the order of time or place (C05, C08, C11, S08, S11) | SK-SS1a-S01/C05/C12, R-INF-01-7, PT-1-11 | practice, set | NOTE: path order and "builds on" are new; S11 Part A (time order) matches R-INF-01-7 |
| FEAT: chapter and section terms (C01, S01, P2) | SK-SS1a-C10/S10 | practice | NOTE: the standard's own terms |
| FEAT: index page shared by two topics (C12, S12, T5) | none (no "index" item in `js/data`) | | clean |
| FEAT: chapter length from a table of contents (C02, S02) | SK-SS1a-P7/S05/C15/S15 (find a chapter by topic) | practice | different operation, clean |
| DIG: progress marker jumps to a part; drag the dot (C01, S01, T1) | none | | clean |
| DIG: transcript writes out the whole recording (C02, S02, P3) | none ("transcript" appears nowhere else) | | clean |
| DIG: back arrow, menu, search box (C03, S03) | 3.T.C.1.b teach and Watch Me only; SK-TC1b-S02 (search box is a decoy) | | clean |
| DIG: [pause] is quiet for the listener (C06, S06, T5) | none ("[pause]" appears nowhere else) | | clean |
| DIG: sounds in brackets name the sound to add (C09, S09) | SK-TC1b-C10/S10 (the reverse direction: caption shows a bracketed sound), SK-TC1b-C15/S15 | practice | different task, NOTE |
| DIG: repeat the key fact (C11, C14, S11, S14, T4) | SK-TC1b-P9 ("Listen closely. This next part is important") | practice | different move, NOTE |
| DIG: first, next, last tell the order (C07, S07, T3) | SK-TC1b-C14/S14 (say "first, next, last" before rules) | practice | same words, opposite direction (listener orders steps), NOTE |
| DIG: voice builds suspense or excitement (C12, S12) | SK-TC1b-P6/P9, teach text, C15/S15 | practice | distinct (section 2) |
| DIG: tone fits the message (P4) | none | | clean |
| DIG: choose the medium for a need (C05, S05, C10, S10) | none (SK-TC1c items choose a picture or a sound for a poster) | | clean |
| DIG: eye contact, a picture, speak so the back row hears (C15, S15, C13, S13) | none | | clean |

#### 5.8 Learn It and Watch Me versus the fifteen
- **FEAT.** Learn It covers every component. Watch Me models the table of contents (W1), a map (W2) and a caption plus Try It! box (W3). W3 models the caption fact and the Try It! job that C04, S04, C07, S07 and T2 key; that is what the brief asks of a Watch Me, and I did not rate it. Headings, section order, the index and grouping (C03, C05, C08, C09, C11, C12, C13, C14) have teach text only (F3-S5a). Learn It point 5 now reads as a question to ask. It still states the C14/S14 grouping logic ("if readers will look something up by its date, a book can group by date") and the P4 placement rule, so those items follow from one sentence.
- **DIG.** See D3-S9.

#### 5.9 Facts (WebSearch and WebFetch)
| Claim | Result | URL |
|---|---|---|
| Jump rope length: stand on the rope, handles reach the armpits (FEAT p1, C01, C04 decoy) | Supported with a nuance: Nike gives "The end of the cable (not including the handles) should reach your sternum or armpits", standing with both feet; the passage says one foot and handles. Fine for grade 3 (NOTE F3-N6) | https://www.nike.com/a/jump-rope-size-length |
| Pearl: a speck of grit irritates the oyster, the oyster adds layers of nacre, it takes years (FEAT p6) | Supported: Britannica "a grain of sand or a tiny parasite", layers of nacre, "several years" | https://britannica.com/science/How-Do-Oysters-Make-Pearls |
| Blueberry flowers are white and bell-shaped; bees visit for nectar (FEAT p5, T2, T4) | Supported: NC State "Small bell shaped flowers bloom in clusters in the springtime"; Virginia Tech "Small, white, bell-shaped, in clusters". eXtension says "urn shaped" (same flower, NOTE). Pollinator Partnership: bees come for "pollen and nectar" | https://plants.ces.ncsu.edu/plants/vaccinium-corymbosum-climax/common-name/highbush-blueberry/ ; https://dendro.cnre.vt.edu/DENDROLOGY/syllabus/factsheet.cfm?ID=583 ; https://blueberries.extension.org/blueberry-botany ; https://www.pollinator.org/blog/blueberry |
| Georgia blueberries are picked by hand or by machine; harvest is early summer (FEAT p5) | Supported: UGA Extension "harvested by both hand and machine", late April to late June. The page does not describe the shaking mechanism (the passage's "gently shakes the bush" is the usual description) | https://fieldreport.caes.uga.edu/publications/C1269/blueberry-harvesting-and-postharvest-handling/ |
| Whisper dishes: two curved dishes carry a whisper (DIG p1) | Supported: Gateway to Science "parabolic reflectors ... a curved surface that focuses sound waves in much the same way a mirror focuses light"; the effect works at the focal point (the passage does not say so; NOTE) | https://gatewaytoscience.org/new-whisper-dishes-hear-science-in-action/ |
| Crayons: melt wax, add color, cool (DIG figure, C01) | Supported: Crayola: wax melted, pigment mixed in, poured into molds, cooled | https://www.crayola.co.uk/faq/quality-and-safety/how-are-crayola-crayons-manufactured-and-what-are-the-basic-ingredients/ |
| Pothole: water in cracks, freezing, a gap, traffic breaks the weak spot, asphalt repair (FEAT p3, C11) | Supported (second review verified; I re-read the Maryland page) | https://roads.maryland.gov/mdotsha/pages/index.aspx?PageId=815 |
| Escalator: a loop of steps flattens at the top, the handrail moves with the steps (FEAT S13) | Supported | https://wonderopolis.org/wonder/how-do-escalators-work |
| Giraffe neck has seven bones (FEAT S09) | Supported: "the mammalian limit of seven cervical vertebrae" (the page does not state the human count; seven is standard) | https://en.wikipedia.org/wiki/Giraffe |
| Some grasshoppers make sound by rubbing their legs on their wings (FEAT C09) | Supported: stridulation, "rubbing a row of pegs on the hind legs against the edges of the forewings" | https://en.wikipedia.org/wiki/Grasshopper |
| A spinning color disk blurs to one color (DIG S08) | Supported: Newton disc "appearing as white (or off-white or grey) when it is spun rapidly" (red, yellow and blue stripes give a muddy single color; "one color" is correct) | https://en.wikipedia.org/wiki/Newton_disc |
| Paper steps mash, press, dry (DIG S01); bike washing steps (FEAT S05); strawberry picking (DIG p3) | Recycled paper checked by the second review; bike and strawberry steps are ordinary how-to advice, no claim to verify | see the second review, section 8 |

No factual error found.

#### 5.10 Readability (FK of every passage, ≤4.5 gate)
The repo's `verification/readability.py js/data/lessons/T-CF.js` and my own `fk.js` agree to within 0.6: FEAT p1 2.1, p2 3.1, p3 2.9, p4 3.6, p5 3.2, p6 4.0, p7 1.7 (repo) / 1.9, 2.5, 2.5, 3.3, 3.0, 3.6, 1.0 (mine); DIG p1 1.1, p2 2.8, p3 2.6, p4 2.1, p5 1.5 (repo). All under 4.5; all passages at least 100 words (DIG p4 and p3 are 100 and 102). Stems read below grade 4, with two clipped fragments (NOTE F3-N7: DIG S15 "Her draft plan: murmur, gaze downward, no visuals"; "gaze" and "murmur" are above a typical grade 3 reading vocabulary).

#### 5.11 Browser (390 x 844 touch, Chromium, local server on port 8913; `ui3.py`)
For each lesson I opened every core item (three sets of five) in Try mode and:
1. answered it **correctly by clicking the real controls**: choice buttons by `data-i` for mc, ms and both ebsr parts; the `select.dd-select` element or the choice buttons under the sentence for dropdown (the page picks the control by option length); the sentence buttons by `data-ref` for hottext; the pool cards in order for order; the `.match-btn` in each row card for match. Then pressed Check and read the feedback;
2. reloaded with fresh storage, answered wrongly the same way, pressed Check, asked for hints 1, 2 and 3, pressed Show me how, opened Try a similar question, answered the similar item correctly with the same real controls and pressed Check.

Results: **FEAT 15 of 15 and DIG 15 of 15** correct answers accepted; 15 of 15 and 15 of 15 wrong answers refused; hint button available three times on every item; Show me how on every item; all 30 similar items opened and accepted a correct answer; no horizontal scroll on load, after hints, after Show me how or in any similar item. Every button, choice and select is at least 44 x 44 px; the only element under that is the question prompt heading (324 x 23, a focus target). Both figures load at 295 px wide (`tf-trail-map.svg` for FEAT C06, `tf-crayon-video.svg` for DIG C01 and C02). I viewed C06 and C01: the map matches its alt text (N arrow up; picnic-table square left of the pond and straight above the P circle; tower top right; bridge bottom right) and agrees with the brochure (north from the parking lot to the tables, the tower at the northeast corner, south along the east side, the footbridge back); the video page matches its alt text. The Crafts tab is shown selected, which the alt text does not say (carried NOTE D-N8). Console: only blocked Google Fonts requests.

### 6. NOTE findings
**FEAT**
- F3-N1. C15 stem never says the map has symbols ("shows his street, the park, the school and the bus stop"), so the key box is needed only by general knowledge; S15 says "rooms are marked on it with small shapes". Add "marked with small symbols" to C15.
- F3-N2. C13 option B ("Rotors and Blades / Hospitals and Supplies") is more specific than the key but not wrong for every reader; the key is the only pair that covers the whole paragraph, which is what hint 1 says.
- F3-N3. C03 `how` introduces "a glossary"; Learn It does not teach the word (3.T.C.1.b does).
- F3-N4. T1 and P1 are the same frame (find the heading for a need), T5 and C12 the same operation: expected for tests.
- F3-N5. T3 has three weak decoys (B, C, D); only A is plausible.
- F3-N6. Jump rope: the source measures the cable end, the passage the handles; one foot versus both feet.
- F3-N7. FEAT p5 "Blueberry Season" says bell-shaped; eXtension says urn-shaped. Both are used.
- F3-N8. C05 asks about "the last section of the chapter"; the Try It! box follows it (carried F-N4).
- F3-N9. C07's stem and a T-TS sentence share "grew bean plants in paper cups" (carried F-N7).

**DIG**
- D3-N1. C12 and S12 sit next to SK-TC1b-P6/P9 and the 3.T.C.1.b teach text (slow down before an important part). Keep the keys on suspense and excitement and do not add "important" to any option.
- D3-N2. C13 key "keep his voice strong" and C14 key "in a strong voice" share words (carried D-N2). C12's hint 3 ("a whisper does not help far-away listeners") gives the reasoning that makes the whisper decoys in C14 and C15 obvious; C12, C14 and C15 are one set.
- D3-N3. C09 blank 2 and S09 blank 2 are the stem's own definition ("[soft bell] shows that a new part is starting"); answerable from the stem alone.
- D3-N4. Names repeat: Eli in C02, P1, T2; Mr. Cole in W3 and P4; Kofi in C04 and C05 (carried D-N7).
- D3-N5. Passages p1 and p5 read below grade 3 by FK, natural for an audio script (carried).
- D3-N6. C13, C15, S13 and S15 are delivery items (carried D-N4).
- D3-N7. S08 Part A key and Part B key share "into one color" (carried D-N6).
- D3-N8. The crayon page shows the Crafts tab selected; the alt text does not say so (carried).

### 7. Items the lead asked about
- **FEAT S11 Part B decoys:** one answer defensible, not clean (F3-S1). **C11 Part B:** my one miss (F3-S2).
- **DIG C11/S11 prompts:** unambiguous, but the prompt states the fact and hint 2 repeats it (D3-S1).
- **DIG T5 vs C06/S06:** the same key logic a third time (D3-S4).
- **DIG C04/S04/P1 vs SK-TC1b-T8, strict rule:** MUST (D3-M1). Also S03 blank 2.
- **DIG Together P4 vs C12/S12:** not the same fact (section 2).
- **FEAT C15/S15:** fixed. **DIG C12:** `why` fixed.
- **Second-review authors' own risks:** C12 trap is easy to eliminate (D3-S2); S12 other choices are too silly (D3-S2); T1 "the last part of the recording" is the only reading; S05 has exactly one better sentence (the key; "Wipe every part with a dry towel" does not look back); T2 key is the only option that mentions flowers (F3-S3).

### 8. Answers and files
- Answers: `scratchpad/b5r3/answers.json` (read-only, saved before the comparison), `.maps.json` (shuffle maps), `blind-TF-FEAT.txt`, `blind-TF-DIG.txt`, `cmp.js` (grader).
- Scripts: `ld.js`, `probe.js`, `probe2.js`, `blind.js`, `cmp.js`, `dump.js` (keyed dump, used after solving), `keyed-FEAT.txt`, `keyed-DIG.txt`, `cue.js`, `jac.js`, `tleak.js`/`tleak2.js`, `ngram2.js`, `echo.js`, `stale.js`, `fk.js`, `ex.js`, `allld.js`, `chk.js` (all test and testB items by keyword), `sets2.js` (set items by standard), `ex-c1b.txt`, `ex-c1a.txt`, `ex-ss1a.txt`, `teach.txt`, `ui3.py` (real-control browser run), `shots/`.
- Server: pid 24793 on port 8913, killed; the port refuses connections.

### 9. Verdicts
- **TF-FEAT: CHANGES REQUIRED.** One MUST (F3-M1, the caption cluster against SK-TC1b-T6). It is a MUST under the strict key-fact rule only; if the lead rules that a lesson with code 3.T.C.1.b may repeat the caption fact, FEAT is **ACCEPT** with the SHOULDs (F3-S1 to F3-S6) as repair work. F-M1 is fixed and no key is wrong.
- **TF-DIG: CHANGES REQUIRED.** D3-M2 (T2 blank 2 and P2 row 2 against SK-TC1b-T9) is the unfinished part of the second review's D-M2, which that review said may not be downgraded. D3-M1 (pop-up and link against SK-TC1b-T8) is a MUST under the strict rule the lead asked me to apply; the second review said the same. Both fixes are local: change one row or blank in C04, S03, S04, P1, P2 and T2 and re-check against T8 and T9 by fact. D-M1 and D-M3 are closed.
- After those row-level edits and the lead's ruling on F3-M1, I would accept both lessons. The SHOULDs are decoy, hint-wording and one-sentence repairs that do not change a key or the structure.


## Fourth review

**Reviewer:** independent content reviewer (fourth pass). I did not author these lessons. I edited no lesson and ran no git. I wrote only this section and scratch files under `scratchpad/b5r4/`. I worked on a frozen copy of the worktree (`scratchpad/b5r4/frozen/`, `T-CF.js` byte-identical to the live file at the start and again at the end). The one local server I started (`node verification/serve.js . 8947`, pid 8986) is killed by pid and the port refuses connections.
**Scope:** `js/data/lessons/T-CF.js`, TF-FEAT (3.T.SS.1.a, 3.T.C.1.b) and TF-DIG (3.T.C.1.b): Learn It, Watch Me, Together P1-P4, core C01-C15, similar S01-S15, tests T1-T5, five figures. I checked the third review's three MUSTs against section 12 of `B5-comp-author-log.md` and searched every key fact by concept over all of `js/data` (every lesson file, every `test` and `testB`, `js/data/sets/*.js`, `js/data/tasks/*.js`).

### Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| TF-FEAT | **ACCEPT** (two SHOULDs depend on a lead ruling, see 3.2) | 0 | 7 | 8 |
| TF-DIG | **ACCEPT** | 0 | 8 | 8 |

All three third-review MUSTs are closed (D3-M1, D3-M2, F3-M1). I found no new MUST. Keys, points, DOK, figures, readability and the 390 px layout are sound; the blind solve agreed on 78 of 78. What is left is repair work of the kind the third review already listed (decoys, hint wording, one test item that re-tests a Together item) plus one new measured item: **FEAT S07 is over the 0.21 ceiling against C07 on the all-tokens measure (0.228 set, 0.241 multiset)**, and the author log's "all four modes: 0 pairs" is true only for the over-two-letters modes. I rate it SHOULD, as the B4 reviews did for pairs that are over on one measure and under on the other two (it is 0.182 / 0.202 on over-two-letters tokens and 0.155 on content words, with no shared option).

| Id | Sev | Lesson | One line |
|---|---|---|---|
| F4-S1 | SHOULD | FEAT | S07~C07 is 0.228 set / 0.241 bag on the all-tokens measure (ceiling 0.21) |
| F4-S2 | SHOULD | FEAT | The "label names one part" fact is keyed six times (C07, C09 row 3, S07, S09 row 3, P3, T4); C09's column text states C07's key inside set 2; T4~P3 0.25 and T4~S07 0.24 are the highest test-to-lesson values; the fact is adjacent to a form A check item of 3.T.C.1.c (lead ruling, 3.2) |
| F4-S3 | SHOULD | FEAT | C09/S09 row 4 (a text box adds an extra fact) is the key fact of SK-TC1b-T2, a form A check item; carried from F3-S5(c) and still in conflict with the author's own §12 rule |
| F4-S4 | SHOULD | FEAT | S11 hint 3 and `why` say the article "never talks about more than one oyster"; passage p6 says "Some oysters take longer than others" |
| D4-S1 | SHOULD | DIG | T2 is a name lookup: the stem lists the four buttons by name, and blank 1 repeats P2 row 2 and Learn It |
| D4-S2 | SHOULD | DIG | T5 is solvable from the passage alone ("Berry Hill Farm", "the sun is hot"); the sound is not needed; its concept (an opening sound sets the scene) is C15/S15 of SK-TC1b, and DIG does not teach it |
| D4-S3 | SHOULD | DIG | Watch Me 3 (a question and a wait) models nothing in the fifteen; no worked case for repeating a fact, delivery or choosing a medium |

### 1. Blind solve

**Method.** My own scripts in `scratchpad/b5r4/`: `ld.js` (Node `vm` sandbox with a mock `PP.addLesson`, loading a frozen copy of `T-CF.js`) and `blind.js`. They are adapted from my third-review scripts; I read their code before use. `blind.js` resolves every core item (inline here), Together item, similar item and T1-T5; prints each passage with sentence numbers, the figure label, caption and alt text, stems, prompts and TEXT lines; and shuffles choices, dropdown options, order steps, hottext targets, match columns and both ebsr parts with a seeded generator (**new seed 5531207**, third review used 90417). It never reads `correct`, `answer`, `why`, `hints`, `how`, `clue`, `misconception`, `like` or `addons`. I wrote my answers to `my-answers.json` (then `answers.json`) **before** I ran `cmp.js`. I did not open any review section, the author log or any explanation until after the comparison, and I did not print raw item source or key-bearing schema probes before it.

**Result: 78 of 78 agree (100%).** TF-FEAT 39 of 39, TF-DIG 39 of 39 (15 core, 4 Together, 15 similar, 5 test each).

**How blind it was, honestly.** Fully blind to keys, explanations and the author log for this pass. Not "naive": I wrote the third review and my scripts, so the item shapes were familiar, and I had read the third review's finding list (not the item text) in an earlier session. I read both briefs and the brief's method before solving. Items where I hesitated: FEAT C11 Part B (C versus D, both are in "The Road Breaks"; "weak spot" is the only link back, see NOTE F4-N3), DIG C08 Part B (A repeats the instruction in Part A's own wording, C gives the reason), FEAT C03 and S03 (the two true statements against three plausible-sounding false ones). Each has one defensible key.

### 2. Third-review MUSTs against section 12 of the author log

| Id | Status | Evidence |
|---|---|---|
| **D3-M1** DIG pop-up and link facts vs **SK-TC1b-T8** (form A: a pop-up explains a word without leaving the page; underlined words open another page) | **Closed** | I searched every DIG item (core, Together, similar, test) for `pop-up`, `underlin`, `link`, `dotted`, `dashed`, `opens a box`, `another page`, `different page`. Remaining hits: C01 and C02 figure alt ("two underlined links: Read the transcript and Make your own crayons"); C02 key "Open the transcript link and read the narrator's words" (the fact keyed is that a transcript writes out the words, not that a link opens another page); S03 stem (Mr. Reyes' wrong statement "a magnifying glass takes you to another page") and its blank 2 decoy "hop to another page"; P1 decoy "a caption that tells about a picture of a barn". None keys the pop-up fact or the link fact. New facts are keyed as follows: C04 rows plus button, menu, scroll bar, search box; S03 three-line button and magnifying glass; S04 magnifying glass, tab, minus button, three-line button; P1 Home button. Concept grep over all `js/data` (`scroll`, `zoom|bigger|enlarge|plus button|minus`, `tab`, `home button|house`, `full-screen`, `volume|speaker button|mute`, `magnif|search box`, `back arrow`, `menu button|three-line`, `progress bar|slider|drag`, `transcript`): no `test` or `testB` item keys any of them. The only `tab` and `magnifying glass` hits are in T8's own figure and in V3d-T6's dictionary app (a different fact: word entries). Learn It point 1 and Watch Me 1 still teach pop-up and link, which is correct for a lesson that prepares the check; note that none of the fifteen practises them (NOTE D4-N1). |
| **D3-M2** DIG caption and CC fact vs **SK-TC1b-T9** (form A: the caption line writes out a rain sound and the narrator's words) | **Closed** | DIG T2 is now speaker button (volume) and full-screen button; P2 rows are play button, speaker button, 1x button, progress bar. CC appears only as a decoy in C01, T2 (both blanks) and the figure alt, and as a stem item in T2. No DIG item keys "captions write out words and sounds". Concept grep for `caption`, `CC`, `captions`, `subtitle`, `closed caption` over all `js/data`: the only keyed uses are SK-TC1b-T9, C09, C10, S10, P10 (the sibling lesson). The new T2 facts are clean against all check items; but see D4-S1 (T2 blank 1 repeats P2 row 2 and a Learn It sentence). |
| **F3-M1** FEAT caption fact vs **SK-TC1b-T6** (form A: a caption tells what the picture alone does not show) | **Closed** | FEAT C07, S07, P3 and T4 now key "a label names the one part its line points to". The phrases `cannot show`, `not in the picture`, `picture alone`, `photo cannot`, `adds` appear in the FEAT items only as decoys: C07 option "gives a fact that is not in the picture" and S07 option "adds an event the drawing cannot show". No FEAT item keys the caption-adds fact; Learn It point 4 and Watch Me 3 still teach it, which is allowed. P3's caption decoy is "tells about the whole drawing", the correct caption job. |
| **Author's note: the label fact appears in T-T2 (a different standard)** | **Confirmed, and wider than the note says** | The same concept is keyed in **SK-TT2a-C14, P7 and S04** (3.T.T.2.a: "labels name the parts that the lines point to"; a caption names the whole picture), in SK-TT2d-C10/C13/S10/S13 (3.T.T.2.d), and, in the authoring direction, in **SK-TC1c-T4 and SK-TC1c-T5** (3.T.C.1.c, form A: "Choose the best label for each arrow"; key "dark X mark" for the arrow at the frog's back). SK-TT2a and SK-TT2d items are practice (not check) of another standard: NOTE. SK-TC1c-T5 is a **check** item in `T-C.js`; its operation is different (choose the words to put on an arrow, reading a passage) but its premise is the one FEAT C07 keys. See F4-S2 and 3.2. |
| **DIG T5 `[birds chirping]` (place) vs SK-TC1b-C15 / S15 (mood, time)** | **Same concept, sibling core/similar items, not check items** | C15: `[drumroll]` before the score makes listeners excited. S15: `[alarm clock ringing]` before the host speaks tells listeners the story begins in the morning. T5: `[birds chirping]` before anyone speaks helps viewers picture an outdoor farm. All three ask what a bracketed sound at the start of a script signals, and the third review's "place versus mood" distinction is a distinction of attribute, not of fact. C15 and S15 are core and similar items of a sibling lesson, not check items (the check items of 3.T.C.1.b are T2, T3, T6, T7, T8, T9), so by the project's convention this is SHOULD. More important is D4-S2: DIG does not teach it, and the passage gives the answer. |

### 3. New findings

#### 3.1 No MUST.
I looked for MUSTs in: a second defensible answer (none; see 5.1), a hint that states the key (none; 5.3), a key fact shared with a form A or form B check item (none at item level; two row-level or adjacent cases are F4-S2 and F4-S3), a test item that is a copy of a lesson item (none; T4~P3 and T2~P2 are SHOULD), a factual error (none; section 6) and a similar item over the ceiling on every measure (none).

#### 3.2 SHOULD findings, TF-FEAT

- **F4-S1. S07 against C07 is over 0.21 on the all-tokens measure.** Set Jaccard 0.228 and multiset 0.241 on stem, prompt, text and options (tokens `[a-z0-9']+`, no stop-word removal). Dropping the `{0}` placeholder token: 0.218 and 0.235. Without the stem: 0.255 and 0.250. Over-two-letter tokens, with the stem: 0.182 and 0.202, which are the author's figures ("J=0.182 (bag 0.202)"); content words: 0.155. Shared options: 0. The two items share the frame "[word] and its line", the sentence frame "Choose/Pick the words that ...", and the three option shapes (names the part, tells about the whole page, adds a fact). The author log (12.3) says "all four modes" are clean; on the all-tokens modes the pair is over. **Fix:** change S07's prompt frame ("Which job does Tyler's word antenna do?" as a question, not a two-blank-style completion) and reword the decoys to different shapes ("It tells how the ladybug flies", "It is the title of the page"). Then recheck.
- **F4-S2. One fact, six items, one check item next door.** Items that key "a label names one part its line points to": C07, C09 row 3, S07, S09 row 3, P3 and T4. (a) **C09's own column text states C07's key.** C09 sits in set 2 with C07 and its column B reads "Names one part of a picture", row 3 "The word leg, with a line that points to one part of a drawing". A child who meets C09 first, or reads the set's items on the review screen, has C07's key. (b) **T4~P3 is 0.25 (bag 0.24) and T4~S07 is 0.24 (0.25)**, the highest test-to-lesson overlaps in the batch (ceiling 0.21), and T4's key ("which part its line points to") repeats words from its own stem ("a line runs from the word rim to the raised edge"). (c) **SK-TC1c-T5** (form A of 3.T.C.1.c) keys the same premise in the authoring direction. (d) FEAT carries 3.T.C.1.b, and the 3.T.C.1.b sibling items that mention labels (SK-TC1b-C12, P5, S04, S08, S12) all use labels to find *which sentence* tells about a labelled part, not to define a label, so they do not collide. **Lead ruling needed:** if the lead reads rule 4 as binding across standard codes, (c) makes C07, S07, P3 and T4 a MUST; if only within the same code, this is a SHOULD. My own reading: the two facts are neighbours, not the same key (choose a label's words from a passage versus say what a label does), so SHOULD. **Fix either way:** keep C07 (core), P3 (Together) and C09's label row, and change T4 to a different feature fact that no check item keys (for example a test item on a heading chosen for a paragraph, re-checked against SK-V1b-T5 and SK-SS1a). To stop C09 handing C07 its key, either move C09 or C07 to another set, or reword C09 column B and row 3 so that neither uses the sentence "names one part" (for example row 3 "The word leg, set at the end of a line in a drawing" matched to a column "Points out a part").
- **F4-S3. C09/S09 row 4 is the key fact of SK-TC1b-T2 (form A).** T2: "How does the text box add to the article?" Key: "It gives a surprising fact about how monarchs find milkweed." C09 row 4 (a Did You Know? box → "Adds an extra fact") and S09 row 4 (a shaded square → a text box) key the same fact. The third review rated it SHOULD (one row of four, F3-S5(c)); it is unchanged, and it is the one place where the author's stated rule in 12 ("no core, Together, similar or test item keys a fact that an SK-* check item keys") is not met. Row-level and a standard feature definition, so SHOULD. **Fix:** make row 4 a different feature the checks do not key (an index: "lists topics with the pages where each is found"; a table of contents: "lists the chapters with their start pages").
- **F4-S4. S11 hint 3 and `why` contradict the passage.** Hint 3: "The article never talks about more than one oyster or shore". `why`: "The article tells about one oyster." p6 now says (para 1) "Oysters live in the sea, and each one has a soft body" and (last section) "Some oysters take longer than others." A careful third grader can object. **Fix:** "The article never describes separate oysters at separate shores."
- **F4-S5. Carried, unchanged since the third review (not re-argued):** T2 key is the only option that mentions flowers (F3-S3); C15 and S15 share the map-key and compass-rose facts with **SK-V1b-T5** (3.L.V.1.b form A; F3-S4); no Watch Me for headings, section order, the index or grouping (F3-S5a; Watch Me models the table of contents, a map and a caption plus Try It! box); C05 and S05 end with two live choices (F3-S5b); absurd decoys in C11 Part A (D), T3 (A, B, D) and S11 Part A (B, C).
- **F4-S6. C01 and S01 hint 1 plus the stem state the key.** Hint 1 says "A book is made of chapters, and a chapter can hold sections"; the stem of C01 names "Chapter 2: Basic Jumps". Hints 1 and 2 together let a child write both answers without seeing the choices (the ladder rule in §4.5). The item is DOK 1 and two blanks, so I rate it SHOULD only because the same hint is the lesson's strategy sentence. **Fix:** hint 1: "Ask which part is bigger, the part a title names or the part a heading names inside it."
- **F4-S7. C12 and S12 hint 1 states the method the item tests** ("look for a page that both topics share"). Low cost; hint 2 is the real scaffold. **Fix:** hint 1 "An index lists the pages where each topic is found. Ask what Mia needs to find on the page."

#### 3.3 SHOULD findings, TF-DIG

- **D4-S1. T2 is a name lookup, and blank 1 is P2 row 2.** Stem: "A video page about picking apples has a play button, a CC button, a speaker button and a full-screen button." Prompt blank 1: "To make the narrator's voice louder, Eli taps the {speaker button}." Blank 2: "To make the video fill his whole screen, he taps the {full-screen button}." The key words are in the stem and the answer to blank 2 is the only option containing "screen". Blank 1 is also the key of P2 row 2 and of Learn It point 2 ("a speaker button changes the volume"). This is the kindergarten-like, name-matching item the plan warns about, in the one slot where a test should apply a fact. **Fix:** do not list the buttons by name; describe each by its picture ("a button with a picture of a speaker", "a button with four arrows pointing outward") or ask a new situation (the video is too quiet versus too fast), and use a decoy the child could believe (the 1x button for "louder"). Keep the full-screen fact, which is new.
- **D4-S2. T5 is answerable without the sound.** The passage says "Welcome to Berry Hill Farm" and "Wear a hat, because the sun is hot"; the key is "an outdoor farm on a sunny day"; the three decoys are a store, a classroom and a kitchen, all indoors. A child who ignores `[birds chirping]` still picks the key. The concept (a sound at the start sets the scene) is SK-TC1b-C15/S15 (2, above) and is not in DIG's Learn It (point 3 says only that a bell can show a new part is starting). Third review SHOULD D3-S4 asked for a different bracket in the same script; the author replaced the pause item with this one. **Fix:** ask about `[snap of a stem]` ("What does this sound tell the person who makes the recording to add, and what is happening?") or about `[pause]` before "Last", or hide "farm" and "sun" from the question so the sound is the evidence.
- **D4-S3. Watch Me does not model the fifteen.** W1 (which button plays a sound), W2 (brackets name sounds) and W3 (a speaker asks a question and then waits). The spoken-mode items are C11/C14 (repeat a key fact), C12 (voice builds suspense), C13 (clear and strong), C15 (eye contact and a picture) and P4 (tone). W3's skill, a question and a wait, is keyed by none of them. Learn It point 4 states every spoken-mode key (repeat a key fact, first/next/last, voice builds suspense or excitement, good news happy). A child who watches W3 and then reads Learn It can answer by recall but has not seen the move modelled. Carried since D-N3 and D3-S9. **Fix:** replace W3 with a worked case of a speaker who says a key fact twice, slowly, with a pause before it (steps: what must the listener catch, what can the speaker do, check).
- **D4-S4. Hint 1 or 2 restates the key's function (carried D3-S7), and C08 Part A hint 1 plus Part B hint 2 now come close to writing the keys.** C01/S01 hint 1 ("which part of the page lets a viewer skip ahead to one part of a video"); C03 hint 1 and S03 hint 1 (the jobs of the tools); P1 hint 2 ("which tool brings a reader back to the start"); **C08**: Part A hint 1 "Ask what the visitor finds out when the voice is very low" and Part B hint 2 "find the sentence that explains what the dishes do with a very low voice" describe the key sentence and key idea; a child who has the script but not the choices can write both. No hint states a key option; this is the "hint repeats the key's job" pattern, third time raised. **Fix** C08: hint 1 "A guide often gives a direction for a reason. Ask what the guide wants the visitor to notice"; hint 2 Part B "find the sentence that begins with a reason word".
- **D4-S5. Set 1 keys the search-box fact twice.** C03 blank 2 (a search box finds a page by a word you type) and C04 row 4 (find every page that uses the word tide → a search box). Same set, same fact; C04's hint 1 ("one finds a word") hands C03 its blank. **Fix:** change C04 row 4 to the Home or Back control, or make C03 blank 2 a different tool.
- **D4-S6. The repeat-a-key-fact move is five items** (C11, C14, S11, S14, T4), and T4's key is the lesson's own sentence ("Listeners cannot look back", 5-gram with C11 `why` and Learn It point 4; it is also the longest option, 15 words against 13). Carried D3-S3. **Fix:** make T4 ask what the speaker should do, not why, and give the decoys a believable reason ("Noah forgot the rule", "to give listeners time to clap").
- **D4-S7. Absurd decoys (carried D3-S8, D3-S2).** C02 D and B ("Tap the Crafts tab", "wait for it to be said again"), C05 A, B and D, C13 s1 B and C, C15 B, C and E, S05 A, S13 s1 A, S15 A, B and D, C12 B and S12 B and D. In C15 and S15 two of the five options survive hint 3 and are obviously wrong, so the choose-two is effectively choose-two-of-three. The keys are not the longest in any choose-two group (5.4), so this is difficulty, not a cue. **Fix:** write one believable wrong choice per ms item (for example "Walk around the room so everyone can see her").
- **D4-S8. Vocabulary above grade 3 in S15 and S05.** S15 stem "Her draft plan: murmur, gaze downward, no visuals" (C15 says "read her notes with her head down and hold up nothing"); S05 "queasy". Fix S15 to the plain wording of C15; "queasy" is acceptable.

### 4. NOTE findings

TF-FEAT
- **F4-N1.** FEAT alt text for the maps (C06, S06, Watch Me 2) gives relative positions ("straight left of the pond", "a white circle is straight above the bench"). A screen-reader user still has to convert left to east and connect a symbol to the key, so the skill survives; recorded so the lead knows.
- **F4-N2.** C02 and S02 are DOK 2 but are one subtraction and one number-to-page reading; fine for grade 3. Option D "eleven pages" is a believable off-by-one.
- **F4-N3.** C11 Part B: D ("A piece of road snaps loose, and a pothole opens") is in the key's section and also follows from the weak spot. "At last, cars roll over the weak spot" is the only line that names something from the section before. One defensible answer once the prompt says "in the section" and hint 2 points to the middle section, but a fast reader could take D.
- **F4-N4.** C13 `how` quotes "Rotors and Hospitals", "Helicopters" and "Fast Machines", which are shortened forms of the options ("Rotors and Blades", "Hospitals and Supplies", "Fast Flying Machines"); S13 `how` drops "Mall" from "Tall Mall Buildings". Harmless, tidy while the file is open (carried F3-S6).
- **F4-N5.** C15 option D, "A heading over the map that says Ben's Neighborhood", is the only decoy that arguably helps a new neighbour read the map; it does not help find the way, which the prompt's "use the map" asks, and hint 3 does not touch it. Acceptable.
- **F4-N6.** FEAT P2 key words ("Chapter" in the stem, bullets for sections) make it a DOK 1 lookup; fine as a Together item.
- **F4-N7.** SK-SS1a-T1 and T2 (how two sections connect; the pattern in one section) are the same *skill* as FEAT C05, C08, C11 and S11 (why sections are in this order) on the same standard code, but not the same key (SS1a: trouble then help, cause then effect; FEAT: path order, time order, builds on).
- **F4-N8.** FEAT S10's `how` says "the night will move into the gym", the stem says "Science Night ... will move into the gym". Fine.

TF-DIG
- **D4-N1.** None of the fifteen uses a link or a pop-up, although Learn It point 1 and Watch Me 1 teach them. That is a consequence of closing D3-M1 and acceptable, because the check items for them live in the sibling lesson.
- **D4-N2.** DIG C15/S15 (eye contact, a picture, speak up for the back row) and C13/S13 (strong voice, slow date) have no check-item neighbour (checked: no item keys them).
- **D4-N3.** P1's key ("a Home button that returns to the first page") repeats the stem ("the first page of the story appears"); the item is a name lookup.
- **D4-N4.** S05: the printed handout is excluded by "books make him queasy"; a handout is not a book. Defensible, because reading in a moving car is what makes people queasy, but "a page of print" would be cleaner.
- **D4-N5.** C07 and S07 hint 3 give the first step of the key sequence. Allowed as the "complete one slot" scaffold; three steps remain.
- **D4-N6.** Strawberry picking (T3 passage and key): the passage says "hold the berry by its stem, and pull gently". NC State Extension says to pinch the stem and not to pull on the berry; Gardening Know How says "lightly pull and twist". Not an error, but "pinch the stem just above the berry" would match the stricter source; the T3 key text would change with it.
- **D4-N8.** DIG S03~C03 (0.216) and S04~C04 (0.213) are over 0.21 on the all-tokens multiset only (set 0.159 and 0.174; over-two-letter and content-word measures are under; shared options 0). Marginal; any added word to S03 or S04 pushes the set measure up, so reword one frame word in each when the file is open.
- **D4-N7.** Mr. Park's relay finish (S12) and Ms. Reed's campfire story (C12) share the one move (voice builds a feeling), already judged distinct by the third review; unchanged.

### 5. Audits

#### 5.1 One defensible answer, plausible distractors, official wording, points and DOK
- **Official wording.** 3.T.SS.1.a: "Describe how texts are arranged ... using text features (e.g., map, captions) and organizational structures (e.g., cause/effect), referring to parts of texts using terms such as chapter or section." FEAT covers: chapter and section terms (C01, C02, S01, S02, P2), a table of contents and an index (C02, C12, S12, T5), headings (C03, C13, S03, S13, P1, T1), a map and its key (C06, C15, S06, S15), caption, label and text box (C04, C07, C09, S04, S07, S09, P3, T2, T4), and why parts are in an order (C05, C08, C11, C14, S05, S08, S11, S14, P4, T3). 3.T.C.1.b: "Determine common text features of print, digital, auditory, spoken, and visual modes and describe how they contribute to the overall purpose and effect." DIG covers digital (page and player tools), auditory (scripts, sounds, pauses, a recording versus a sign) and spoken (repeat, pace, volume, tone, delivery) modes, and the "purpose and effect" half in C05, C10, S05, S10, C12, S12.
- **Points.** All choose-two items are 2 points; two-blank dropdowns 2, one-blank 1; match 2; order 2; ebsr 2. The distribution matches the format: mc is six of fifteen in both lessons (the plan's ceiling is six); FEAT and DIG each have nine technology-enhanced items.
- **DOK.** FEAT: one DOK 1 (C01), DOK 3 in C08, C11, C13, C14. DIG: one DOK 1 (C01), DOK 3 in C08, C10, C14. Both meet "at most two DOK 1, at least two DOK 3". T2 of DIG is rated DOK 2 but behaves as DOK 1 (D4-S1).
- **One defensible answer.** I checked every distractor of every item against passage, stem and figure. No second defensible answer. Closest calls: FEAT C11 Part B (F4-N3), FEAT C15 option D (F4-N5), DIG C08 Part B option A (it repeats the Part A direction, the reason sentence is C), DIG C11 (the robotics paragraph has the room in sentence 1 and the time in sentence 3; the prompt says "arrive ... on time"), DIG S05 (D4-N4).
- **Distinctness.** FEAT C07, S07, P3 and T4 share one frame (F4-S2). C02 and S02 differ by numbers but are a core-similar pair. No two items in the fifteen differ only by names or numbers.
- **Giveaways in a set.** FEAT C09 states C07's key (F4-S2a); DIG C04 row 4 hands C03 blank 2 (D4-S5). Both are in the same set. No giveaway into form A or form B: no check item shares a key with a FEAT or DIG item at item level (5.7).

#### 5.2 Key beside explanation (every item)
I ran a script that checks each keyed text (every correct choice, both ebsr parts, every dropdown answer) against `why`, and against `how` where the item has one: **no item's `why` or `how` lacks its key text** (0 of 78 misses). I read every `why`, `how` and `misconception` against the choices that now exist and found no reference to a deleted option. Stale-word scan (`stale.js`, words in the explanations that appear nowhere in the item, teach text or common list): the hits are ordinary explanation vocabulary ("sixteen", "eleven", "ranks", "glossary", "counts", "length"); the one real tidy-up is F4-N4 (shortened option names in C13 and S13 `how`).

#### 5.3 Live choices after the clue and hints 1 to 3 (hand count)
No hint states a key option, and no hint 3 leaves the key as the only live choice. Fewest live choices after hint 3:

| Item | Live after h3 | Note |
|---|---|---|
| FEAT C05, S05 | 2 (the key and one first sentence) | hint 2 limits the candidates to the three first sentences, hint 3 removes one; allowed (F4-S5) |
| FEAT C07, S07 | 2 | hint 3 removes the caption-like decoy |
| FEAT C01, S01 | 2 per blank | hint 3 removes paragraph or sentence |
| FEAT C12, S12 | 2 | hint 3 removes the page listed for one topic only |
| FEAT C11 Part B, S11 Part B | 2 | the prompt names the section; options of that section are the key and one decoy |
| FEAT C09, S09 | 3 rows | hint 3 gives one row (a "complete one slot" scaffold) |
| DIG C03 | 2 per blank | menu removed for both blanks |
| DIG C09, S09 | 2 per blank | the creaking door or thunder removed |
| DIG S03 | 2 in blank 1; 3 in blank 2 | |
| DIG C13, S13 | 3 and 2 | |
| DIG C11 | 3 | hint 2 limits to the three sentences of the robotics paragraph |
| DIG S11 | 2 | hint 3 removes "You do not need to carry anything" |
| DIG C15, S15 (choose 2) | 4 of 5 | two of the four are absurd (D4-S7) |
| DIG C07, S07 (order) | 6 permutations | hint 3 gives the first step |
Every other item has three or more live choices. **Ladder audit ("hint 1 and hint 2 without the choices"):** FEAT C01/S01 (F4-S6), FEAT C07/S07 (hint 1 + hint 2 describe a label's job, the stem also does), DIG C08 (D4-S4) are the cases where a reader could write the key. All other items need the choices.

#### 5.4 Longest-key cue (`cue.js`)
FEAT: of 38 groups the key is the unique longest in 8 by words (21%) and 8 by characters. DIG: of 40 groups, 6 by words (15%) and 14 by characters (35%, mostly one-to-three-word dropdown options, where the key is longer by a few letters). With four options chance is 25%; there is no overall bias. **No choose-two group has both keys longer than all the decoys.** Largest word margins: DIG T4 (15 against 13), DIG C08 Part A (13 against 11), FEAT C11 Part A (17 against 15). Items where the key is the only longest option by both words and characters: FEAT C04, C13, S07, S08; DIG C08 Part A, C10, C13 s2, S13 s2, S14, T4. The third review's figures were 7 and 7; the change is C07 (shortened, now longest only by characters) and the new T4.

#### 5.5 Similar versus core (`jac.js`: lowercase tokens, no stop-word removal, set and multiset Jaccard of stem, prompt, text, options, steps, rows, columns and hottext sentences; ceiling 0.21; every pair mapped by `like`)

| Lesson | Mode | Max word-set (like-mapped) | Max bag (like-mapped) | Pairs over 0.21 |
|---|---|---|---|---|
| TF-FEAT | all tokens, no passage | **0.228 (S07~C07)** | **0.241 (S07~C07)** | **1 (S07~C07)** |
| TF-FEAT | all tokens, with passage | 0.228 (S07) | 0.241 (S07) | 1 |
| TF-FEAT | stop words removed | 0.155 (S07) | 0.153 (S07) | 0 |
| TF-DIG | all tokens, no passage | 0.191 (S08~C08) | 0.216 (S03~C03) | 0 by set; bag S03~C03 0.216 and S04~C04 0.213 |
| TF-DIG | all tokens, with passage | 0.206 (S08~C08) | 0.216 (S03~C03) | 0 by set; bag S03~C03 0.216, S04~C04 0.213 |
| TF-DIG | stop words removed | 0.159 (S08) | 0.139 (S08) | 0 |

Shared options between a similar item and its `like` core item: 0 in both lessons. Unmapped pairs over the ceiling: FEAT S07~P3 0.257 / 0.252 (the label cluster, F4-S2). The DIG bag values 0.216 and 0.213 are over on the multiset only and 0.159 on set; the multiset counts the repeated frames "Choose TWO answers" and "match each" and the shared slot words ("button"). NOTE. S07~C07 is F4-S1. Every `like` mapping is honest: S0n maps to C0n with the same skill and the same component, as the plan requires.

#### 5.6 Test leakage
- **Passages.** FEAT p5 ("Blueberry Season") is used only by T1, T2 and T3; DIG p3 ("At the Strawberry Patch") only by T3 and T5. 6-gram scan of every lesson string against all of `js/data` except `T-CF.js` (`ngram2.js`): shared 6-grams are frames only ("here is part of the table of contents", "best supports the answer to part a", "the author wants to add this", "is giving a talk about her", "do not run in the hall"); no passage text is shared with another lesson, set or task. The four parts of "the table of contents from a book called" are in SK-SS1a items and are a frame.
- **Test versus lesson items (word-set Jaccard, all tokens, no passage):** FEAT T1~P1 0.20, T2~C04 0.20, T3~P3 0.17, **T4~P3 0.25 (T4~S07 0.24)**, T5~C12 0.21; DIG T1~C10 0.15, T2~C03 0.19, T3~C07 0.18, T4~C13 0.17, T5~C10 0.12. Test-by-fact: FEAT T4 (label) is C07, S07 and P3's key (F4-S2); DIG T2 blank 1 is P2 row 2's key (D4-S1); DIG T3 (order words) is the C07 and S07 skill on a new script (carried); DIG T4 is the C11 `why` (D4-S6); DIG T1 (drag the dot) is the C01, C02, S01 and S02 control (carried D3-S5).
- **Key-fact leakage into form A or form B check items:** none (5.7).

#### 5.7 Key-fact duplicate search by concept over all of `js/data`
I searched by keyword and then read the keys in every lesson file, every `test`, every `testB`, `js/data/sets/*.js` and `js/data/tasks/*.js` (`allitems.js`, `grepc.js`, `concepts.sh`).

| New fact | Existing item with the same or a neighbouring key | Class | Result |
|---|---|---|---|
| FEAT: a label names the one part its line points to (C07, S07, P3, T4; rows in C09, S09) | SK-TC1c-T4, T5 (3.T.C.1.c), SK-TT2a-C14/P7/S04, SK-TT2d-C10/C13/S10/S13, SK-TC1b-P5/S04/C12 | check (neighbour), practice | F4-S2 (lead ruling) |
| FEAT: a caption adds what the photo cannot show | SK-TC1b-T6 | check | **gone** from the fifteen and the tests (F3-M1 closed); Learn It and Watch Me only |
| FEAT: a text box adds an extra fact (C09, S09 row 4) | SK-TC1b-T2 (form A), SK-SS1a-P5/S04, R-INF-01-6 | check, practice, set | F4-S3 (SHOULD, row level) |
| FEAT: a map key explains symbols, a compass rose shows directions (C15, S15, WM2) | SK-V1b-T5 (3.L.V.1.b form A), SK-SS1a-S03 | check of another standard | SHOULD, carried F4-S5 |
| FEAT: a heading tells what its section is about (C03, S03, P1, T1) | PT-1-12, SK-TC1b-C04/S06/P1, SK-SS1a-P3 | Practice Test, practice | NOTE: the definition of a heading; C03 and S03 add "skim to find" |
| FEAT: sections follow the order of place, time or "builds on" (C05, C08, C11, S05, S08, S11) | SK-SS1a-T1 (trouble then help), T2 (pattern in one section), C05/C12/S01, R-INF-01-7, PT-1-11 | check (same code, different key), practice | NOTE F4-N7 |
| FEAT: chapter and section terms (C01, S01, P2) | SK-SS1a-C10/S10 | practice | NOTE: the standard's own terms |
| FEAT: chapter length from a table of contents (C02, S02) | SK-SS1a-P7/S05/C15/S15 (find a chapter by topic) | practice | different operation, clean |
| FEAT: index page shared by two topics (C12, S12, T5) | none (`index` appears in no other item) | | clean |
| FEAT: group a book by what the reader knows (C14, S14) | none | | clean |
| DIG: pop-up, link | SK-TC1b-T8, P10 | check, practice | **gone** from the fifteen and the tests (D3-M1 closed) |
| DIG: CC and captions write out words and sounds | SK-TC1b-T9, C10, S10 | check | **gone** (D3-M2 closed); CC is a decoy only |
| DIG: progress marker jumps to a part; drag back to hear again (C01, C02, S01, S02, T1) | none (`progress bar`, `slider`, `drag` appear nowhere else) | | clean |
| DIG: transcript (C02, S02, P3) | none (`transcript` appears nowhere else) | | clean |
| DIG: back arrow, menu, search box, Home, scroll, plus and minus, tab, speaker, full-screen (C03, C04, S03, S04, P1, P2, T2) | none keyed as a fact in any `test` or `testB`; V3d-T6 is a dictionary app (entries, not tools) | | clean |
| DIG: `[pause]`, bracketed sounds, first/next/last (C06, C07, C09, S06, S07, S09, T3, T5) | SK-TC1b-C14/S14 (say "first, next, last" before rules), C15/S15 (sound sets mood or time), C10/S10 (caption shows a bracket) | practice | NOTE; T5 vs C15/S15 is D4-S2 |
| DIG: repeat a key fact (C11, C14, S11, S14, T4) | SK-TC1b-P9 ("Listen closely") | practice | NOTE |
| DIG: voice builds suspense or excitement (C12, S12) | SK-TC1b-P6/P9, C15/S15 | practice | distinct (third review 2) |
| DIG: tone fits the message (P4) | none | | clean |
| DIG: choose the medium (C05, C10, S05, S10) | none (SK-TC1c items choose a picture or a sound for a poster) | | clean |
| DIG: eye contact, a picture, speak so the back row hears (C13, C15, S13, S15) | none | | clean |

#### 5.8 Learn It and Watch Me versus the fifteen
- **FEAT.** Learn It point 1 to 5 covers every component. Watch Me 1 models the table of contents and the chapter-section relation (C01, C02), Watch Me 2 models "straight east of" (C06, S06), Watch Me 3 models caption-adds and a Try It! box (C04, S04). Headings (C03, C09, C13), section order (C05, C08, C11), the index (C12), the label (C07) and grouping (C14) have teach text only (carried). Learn It point 5 still states the grouping logic of C14 and S14 ("if readers will look something up by its date, a book can group by date").
- **DIG.** Watch Me 1 models choosing a control on a page (C01 to C04, P1, P2), Watch Me 2 models brackets (C06, C09, S06, S09, T5), Watch Me 3 models a question then a wait. Learn It point 4 states every spoken key. See D4-S3.

#### 5.9 Facts (WebSearch and WebFetch)
| Claim | Result | URL |
|---|---|---|
| A pothole forms when water gets into cracks, freezes and expands, then melts and leaves a gap under the road, and traffic breaks the top layer (FEAT p3) | Supported (the source adds that tire friction makes the first cracks) | https://wonderopolis.org/wonder/What-Is-a-Pothole |
| A bean seed has an embryo, the baby plant, inside it; a split bean shows two halves (FEAT C07 drawing: a tiny curved shape inside the seed) | Supported ("the baby plant inside the seed", "includes the roots and first leaves"; the page does not say what the embryo looks like; the "tiny curved shape" is an illustration choice) | https://www.sylviacenter.org/seed-dissection-activity/ |
| Giraffes and humans both have seven neck bones (S09 and C09 text box: "A giraffe's neck has seven bones, like yours") | True (Snopes: seven cervical vertebrae in both; the bones differ in size) | https://www.snopes.com/fact-check/giraffes-neck-bones-humans/ |
| Some grasshoppers make a buzz by rubbing the hind legs against the front wings (FEAT C09 text box: "buzz by rubbing their legs on their wings") | Supported for slant-faced grasshoppers (Orkin: stridulation, hind legs against front wings; band-winged grasshoppers snap their wings instead, so "some" is right) | https://www.orkin.com/other/locusts/sounds |
| A spinning color disk blends its stripes into one color (DIG S08: "They blur together into one color") | Supported (Girl Scouts activity: "the eye perceives a muddy white color because of persistent vision") | https://girlscouts.org/en/activities-for-girls/cadettes/cadette-space-science-researcher-badge-activity.html |
| Strawberries: pick fully red berries; take hold of the stem (DIG T3 passage and key) | Mixed. NC State Extension: "Pinch the stem ... Don't pull on the berry." Gardening Know How: "lightly pull and twist at the same time." Eckert's: "pinch or twist the stem rather than pull." Red-ripe is supported by all three; "pull gently" is the weakest wording (NOTE D4-N6) | https://onslow.ces.ncsu.edu/news/tips-for-picking-strawberries ; https://gardeningknowhow.com/edible/fruits/strawberry/picking-strawberry-fruit.htm ; https://eckerts.com/how-to-pick-strawberries-properly-a-guide-for-the-sweetest-success/ |
| Carried from the third review and not re-checked because the passages are unchanged: jump-rope length, pearl formation, blueberry flowers and harvest, whisper dishes, crayon making | see the third review, 5.9 | |
| Not re-fetched (NASA pages were blocked or returned only titles): lunar craters form when space rocks hit the Moon (FEAT T4) | Standard and uncontroversial; a NASA search result lists impact craters | https://www.nasa.gov/mediacast/gravity-assist-podcast-why-so-many-craters-on-the-moon-with-david-kring |

#### 5.10 Readability (FK of every passage, ≤4.5 gate; `fk.js`)
FEAT p1 1.9, p2 2.5, p3 2.5, p4 3.3, p5 3.0, p6 3.7, p7 1.0; DIG p1 0.3, p2 2.9, p3 2.0, p4 1.6, p5 1.9. All under 4.5. The new fourth sentence in FEAT p6 left it at 3.7.

#### 5.11 Browser (390 x 844 touch, Chromium, local server on port 8947; `ui4.py`, adapted from `ui3.py`)
For each of the thirty core items (three sets of five per lesson) the script opens the lesson's Try page, starts the item with a fresh storage state, answers with **real controls** (a click on each `.choice` for mc, ms and **both parts of ebsr**; a `select` or choice button for each dropdown blank; a click on each hot-text `button`; each order card in turn; the match buttons), presses Check, and requires the right-answer feedback. It then restarts, answers wrongly, opens hints 1, 2 and 3 one at a time, opens Show Me How and the similar item, and answers the similar item correctly through the same controls.
- **TF-FEAT:** core visited 15, correct accepted 15; wrong feedback, three hints, Show Me How and the similar item present and working on all 15; no horizontal scroll on load, after hints, after Show Me How or in the similar item; the map (C06) and the similar map (S06) render, 295 px wide, with the key and symbols legible (screenshot checked).
- **TF-DIG:** core visited 15, correct accepted 15, same results; the video page figure (C01, C02) renders with tabs, the three-dot progress bar, CC, speaker and 1x buttons and the two links (screenshot checked). The ebsr items (C08 in DIG, C11 in FEAT) work Part A then Part B with both parts shown on one screen.
- **Console:** the only failed request is the Google Fonts stylesheet (`fonts.googleapis.com/css2?family=Poppins`), blocked in the sandbox. No page errors.
- **Small controls:** the only element under 44 px is the match prompt heading ("Match each feature to its job") at 324 x 23, a focusable heading, not a control (NOTE).

### 6. Items the lead asked about
- **D3-M1, D3-M2, F3-M1:** closed (2).
- **The "label names the one part" fact also in T-T2:** confirmed, wider than noted (2): SK-TT2a-C14/P7/S04 and SK-TT2d practice and similar items (NOTE) and **SK-TC1c-T4/T5** (a form A check item of 3.T.C.1.c, adjacent not identical; F4-S2).
- **DIG T5 place versus mood:** a SHOULD, for a different reason from the one the lead named (D4-S2).
- **Key-beside-explanation audit:** 0 of 78 misses (5.2).
- **Live choices after hints 1 to 3, no hint states the key:** verified (5.3).
- **Longest-key cue, similar versus core Jaccard (set and multiset, 0.21), test leakage, FK, browser at 390 x 844 on all core items including ebsr:** 5.4, 5.5, 5.6, 5.10, 5.11.

### 7. Answers and files
Answers, scripts and screenshots are under `scratchpad/b5r4/`: `my-answers.json` and `answers.json` (saved before comparison), `blind-TF-FEAT.txt` and `blind-TF-DIG.txt` (what I solved from), `.maps4.json`, `cmp.js`, `cue.js`, `jac.js`, `ngram2.js`, `echo.js`, `stale.js`, `fk.js`, `allitems.js`, `grepc.js`, `concepts.sh`, `ui4.py` and `shots/`. The key and explanation dumps `keyed-FEAT.txt` and `keyed-DIG.txt` were produced after the comparison.

### 8. Verdicts
- **TF-FEAT: ACCEPT.** No MUST. Fix before merge if the lead wants the ceiling to be a hard gate: F4-S1 (S07 reword). Worth doing in the same edit: F4-S4 (S11 sentence), F4-S3 (C09/S09 row 4), and T4 (F4-S2). Needs a lead ruling: whether a check item of another standard code (SK-TC1c-T5) binds the label fact in C07, S07, P3 and T4; if it does, those four items become a MUST and the verdict changes to CHANGES REQUIRED.
- **TF-DIG: ACCEPT.** No MUST. D3-M1 and D3-M2 are closed by concept search, not by string. The one repair I would not leave is T2 (D4-S1), which is a name lookup and re-tests P2 row 2, and T5 (D4-S2), which the passage answers by itself; both are test items and cost one sentence each. The rest are decoy, hint-wording and Watch Me work that does not change a key.
