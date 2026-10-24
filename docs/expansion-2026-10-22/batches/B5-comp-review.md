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
