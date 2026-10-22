# B1 re-review (b1b): TS-PS and 3.T.C.2.a

**Reviewer:** independent re-reviewer. I wrote none of this content and none of the earlier reviews. Read-only: this file is the only one I wrote in the repo. Scratch files are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1b/`. I ran no git commands and started no server.

**Scope:**
- the TS-PS block of `js/data/lessons/T-TS.js` (core rev 1, Together P1 to P6, similar, test);
- the 3.T.C.2.a block of `js/data/lessons/T-C.js`;
- the 3.T.T.1.b form A in `T-T1.js`, which TS-PS shares by code. 3.T.T.1.b has no form B, and neither do TS-PS or 3.T.C.2.a.

**Rules applied:**
- REVIEWER-BRIEF.md and CONTENT-BRIEF.md;
- the "Rule added after the B1 reviews" section of AUTHOR-BRIEF.md;
- 04-content-plan §4 and §6.

**Severity scale:** the same as B1-review-2A.
- **MUST:** after hints 1 to 3 only the key stands, a hint states the key's content, or an earlier item's `why`/`how` states a later item's answer in the same set.
- **SHOULD:** a hint points at the evidence for the key, or a distractor is a dud, but a real competitor survives.

## 0. Blind re-solve

**Method**
- `load.js` loads `T-TS.js` and `T-C.js` through a stub `PP.addLesson`.
- `blind.js` prints:
  - every passage the selected items use, with stanza lines for the poem;
  - the selected items, with each `{ref}` resolved;
  - choices, targets, rows, order steps and dropdown options shuffled with a seeded PRNG (seed 4417029).
- It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample`, `criteria` or `like`. No passage in either lesson has a figure, so there was no alt text.
- The output is `blind.txt`. I wrote `answers.json` (copied to `answers.saved.json`) and `solve-notes.txt`, which includes my own C12 answer, before I ran `cmp.js`.

**Items solved**
- TS-PS: all fifteen core items (the P5 ref included), the three similar items, and the five Together items (P1, P2, P3, P4 and P6).
- 3.T.C.2.a: C04, C05, C07 to C13 and S01 to S03.

**How blind was it? Fully blind for these items.**
- Before solving, I printed only the lesson keys, item ids, item types and the shapes of fields, never their text.
- I had not read the lesson source, the earlier reviews or the author log.
- The only thing I knew in advance was the brief's statement that "most of TS-PS was rebuilt".

**Result: 34 of 34 auto-scored items agree (100%).**
- TS-PS: 23 of 23.
- 3.T.C.2.a: 11 of 11. C12 is `cr` and not scored. My blind C12 answer meets all four criteria.

**Close calls**
- TS-PS C02: B ("pours water") is a good near-miss. Jamal pours, not Grandma.
- C13 row 4: Amari names the beat in paragraph 2, before the new ropes in paragraph 3.
- C14: E (a locked shed) is defensible but slightly odd, as 2A also found.
- TC2a C05 Part B: "went back to her spot" is a weak but real distractor.
- TC2a C13 row 3: the puppy's wag is the puppy's feeling, not the teller's. It is a good trap.

**Keys:** no wrong key and no second defensible answer.

## 1. Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| TS-PS | **CHANGES REQUIRED** | 1 (R-M1 C09 is given away inside set 2) | 2 | 8 |
| 3.T.C.2.a | **ACCEPTED** (fix the SHOULD items before merge if possible) | 0 | 4 | 6 |

The rebuild of TS-PS is a real improvement:
- the form A skeleton is gone;
- the C09 rehearsal of T4 Part B is gone;
- the teaching now models C06, C08, C13 and C15.

The one MUST is a new within-set chain that the rebuild created. The author's own audit saw the shared wording but judged it harmless (log §8.4).

## 2. Earlier findings: status

### TS-PS (2A T-*, 2B M-/S-/N-)

| Finding | Status | Evidence now |
|---|---|---|
| 2A T-M1 / 2B M-1, C09 hint 2 left only the keys | **Fixed** (item replaced) | The new C09 is an mc. Hint 2 is "Reread paragraph 3", and B and C both draw on paragraph 3. But see R-M1 |
| 2A T-M2, C15 hints plus weak distractors | **Fixed** | B ("rust on the seats…") and C ("paint still wet") are wrong-way explanations. Hint 2 is "Read sentences 3 and 5". Hint 3 removes only D. A, B and C survive |
| 2A T-S1, hint 2 named the decisive evidence (P5, C08, C10, S01, S02, S03) | **Fixed except S03** | P5, S01 and the old C08/C10 (now C10) are fixed. S02 hint 2 is "Reread paragraph 3", which holds two Part B choices. **S03 is not fixed in substance** (R-S2) |
| 2A T-S2, C09 rehearsed form A T4 Part B | **Fixed** | "Proof that it worked" is now a column in the C07 match. No core item asks "which sentence shows the solution worked" |
| 2A T-S3, passages copied form A's skeleton | **Fixed** | The causes sit in p3 ¶3, p4 ¶2, p5 ¶3, p6 ¶3 and p7 ¶3. "The problem was finally solved!" is gone from p4. See R-N6 |
| 2A T-S4, C08, C10 and C13 overlapped; C08 answered C10 | **Fixed as stated**, but a new chain exists | The cause item C10 is now last in set 2, and no earlier item names the hands. The new chain C06 + C07 → C09 is R-M1 |
| 2A T-S5, C06 copied 3.T.T.1.b T2; not modelled | **Fixed** | C06 is now a two-character comparison. Teach points 1 and 3 model C08 and C06 |
| 2A T-S6 / 2B S-6, P5 DOK | **Fixed** | DOK 2 |
| 2A T-S7, S03 `like` | **Fixed** | `like` is C14 only |
| 2B M-2, P4 gave away P6 inside set 1 | **Fixed** | P4 and P6 are both in Together. Set 1 is P5, C02, C03, C04 and C05 |
| 2B S-7 / 2A T-N2, C12 points | **Fixed** | 2 points (five steps; the new rule) |
| 2B S-8, C06 and C13 not modelled | **Fixed** | Teach point 3 (one guesses, one works it out), teach point 5 (compare two texts), and Watch Me 3 step 3 (a sentence's job) |
| 2A T-N1 / 2B N-8, the C13 "school" row | **Fixed** | All four rows are structural. p4 is set in a driveway |
| 2B N-14, C05 hint 2 nearly named the key | **Fixed** | Now C04 hint 2: "Read on to find what Niko does next" |
| 2B N-7, C11 "reasons the article gives" | **Kept**, as asked | |

### 3.T.C.2.a

| Finding | Status | Evidence now |
|---|---|---|
| 2A C-M1 / 2B M-3, C04 hint 2 mapped blanks to paragraphs | **Fixed** | New Renee stem. Hint 2 is "ask whose idea it is". No locations. DOK 2. See R-N9 for the residual shape |
| 2A C-M2, C08 hint 2 did the inference | **Fixed** | Hint 2 is "Reread the sentences just before and after". Hint 3 removes only C. The new B ("poke him like a needle") is a good literal misreading |
| 2A C-M3, C10 hint 2 and dud distractors | **Fixed** | Hint 2 is "Compare what Part 1 can tell… with what Part 2 can tell". C and D are real perspective misreadings |
| 2B M-4, C05 Part B pinned by hint 2 | **Fixed** | Paragraph 5 holds two Part B choices: 5:3 (the key) and 5:1 |
| 2A C-S1, hint 2 pointed at the key sentence (P5, C03, C05, C09, C14, S01, S02) | **Fixed** | Each hint 2 was rewritten as asked. C14's is 2B's exact wording, but it now exposes a weak distractor (R-S3) |
| 2A C-S2, C12 `cr` (prompt gives away the view, "shown above", hint 2 one-sided) | **Fixed** | The prompt asks "How does the speaker feel…". Criterion 1 requires a detail. The how says "One good answer follows". Hint 2 is "any stanza". See §5 for the sample |
| 2A C-S3, C09 prompt echo; one real target | **Fixed** | "pleased with how he looks after all". 7:2 added, so the hint 2 region has 7:1, 7:2 and 7:3 |
| 2A C-S4, C04 and C05 twins | **Fixed** | C04 is on a new text and context |
| 2A C-S5, S01 dud distractor | **Fixed** | C is now "wants Aunt Rae to take him back" |
| 2B S-1, hint 2 did the inference (C08, C14, C15, S02) | **Fixed** | 2B's suggested wordings were adopted |
| 2B S-2, weak distractors (C08, C10) | **Fixed** | |
| 2B S-3, C13 was a second "I in quotes" item | **Fixed** | C13 is now "shows how the teller feels / only tells what happens" |
| 2B S-5, C07 primed C08 | **Fixed** | The row is now "clippers sound like angry bees" |
| 2B S-6, C04 DOK | **Fixed** | DOK 2 |
| 2B N-6, the P3 addon pinned Part B | **Fixed** | Hint 2 names paragraphs 2 to 4, which hold three Part B choices |
| 2A C-N1, C11 "dog" | **Fixed** | "an animal, not a child" |
| 2B N-5, four `cr` criteria | **Kept**, with the author's reason. I agree |

## 3. Findings: TS-PS

### MUST

**R-M1. SK-TSPS-C09 is answered by C06 and C07, the first two items of the same set.**
- **Evidence:**
  - C09 (set 2, item 4) asks "Why does Kiara say, 'Let's try it your way'?" Its key is "Her plan of buying new ropes did not stop the tangles."
  - C06 (item 1), slot 1 key: "Kiara thinks the team should buy a brand-new pair of ropes." Its `why`: "Kiara says the ropes are just old and wants new ones."
  - C07 (item 2), row and key: "The team buys a brand-new pair of ropes." → "a try that did not work". Its `why`: "The new ropes are a try that did not work."
  - Put together, those two `why` lines state C09's key: Kiara's plan was new ropes, and the new ropes failed.
  - The two premises also kill C09's distractors B ("the old ropes were fine") and C ("buy even more new ropes"). D (Ms. Bell) has no support. So a child who has done C06 and C07 can answer C09 without rereading.
  - The new rule says "A `why` or `how` must not state the answer to a later item." The author's audit flagged the shared phrase "a brand-new pair of ropes" and judged that "no key [is] given away" (log §8.4). The key is given away by the combination of the two items, not by either one alone.
  - Set 2 is also heavy on one fact. "The new ropes failed, so the ropes were not the trouble" is C07's row, C08's hint 3, C09's key, and C10's hint 3 and how step 1.
- **Fix (pick one):**
  - Re-aim C09 at a step that C06 and C07 do not supply. For example: "What does Kiara's failed try show the team?" Key: "The ropes were never the real trouble." Distractors: "The new ropes were too short", "Amari should jump in later", "The team needs more practice time". C10's hint 3 must then stop saying that old ropes are not the cause, or C09 answers C10's hint.
  - Or replace C09 with an item on how the chant fixes the beat (p4 ¶4), placed after C10. Make sure C10's `why` and `how` do not state that the chant gives one beat.
  - Or move the "a try that did not work" row out of C07 by giving C07 different events, though p4 has only one failed try. This is the hardest option.

### SHOULD

**R-S1. SK-TSPS-C06: a swapped option pair plus a dud. Hint 2 says where each girl speaks, and the stem cues slot 0.**
- **Evidence:**
  - Both slots offer the same three options. "Skip the show at the fair" has no support (the earlier C-M1 pattern), so each blank is really a swap between the two keys.
  - Hint 2 is "Read paragraphs 2 and 3. Who speaks in each one?" Paragraph 3 holds Kiara's "Let's get new ones", the slot 1 key almost word for word. Paragraph 2 holds Amari's diagnosis.
  - Hint 3 removes the dud from both slots and leaves only the swap.
  - Slot 0's stem, "Before anyone tries a fix, Amari wants to…", rules out the one option that is a fix ("buy … ropes").
  - It is not a MUST, because the swap still has to be decided (a child could put the same option in both blanks). But the item measures little beyond finding Kiara's line.
- **Fix:**
  - Give each slot its own tempting distractor:
    - slot 0: "chant a rhyme while the turners swing" (the later solution, wrongly placed before any fix);
    - slot 1: "watch the turners swing the empty ropes" (Amari's action, given to Kiara).
  - Hint 2: "Reread paragraphs 1 to 4, and notice who does each thing."
  - Hint 3 should rule out one option in one slot only.

**R-S2. SK-TSPS-S03: hint 2 still hands over the source-versus-symptom test that the item assesses (2A T-S1 not fixed in substance).**
- **Evidence:**
  - Hint 2 now reads "For each try, ask: does it deal with the water on the floor, or with where the water comes from?"
  - Applied to the choices, B (mats) and C (mopping) "deal with the water on the floor". Hint 3 removes D (the sign). Only A, "Fix the crack", passes the test that hint 2 names.
  - The old hint 2 ("Where is the water coming from?") was judged SHOULD, and this one is equivalent.
  - On 2A's severity rule it borders on MUST, because no real competitor survives. I keep it at SHOULD because B and C are still on screen and the child must apply the test.
- **Fix:**
  - Hint 2: "Reread the last two sentences of the story."
  - Add one competitor that touches the ceiling but not the cause, for example "Paint the ceiling above the door". Do not use "put a bucket under the drip", which would be arguable as a second answer.
  - DOK 3 is generous for this item. DOK 2 is fairer, and the lesson still has five DOK 3 items in core.

### NOTE

- **R-N1. C10 Part A: hint 2 is "Reread paragraph 2".** Paragraph 2 states the Part A key outright ("Imani's hands swung fast, but Kiara's swung slowly"; "not keeping the same beat"). No Part A distractor comes from paragraph 2, though C ("stand too close") is a loose misreading of the scene.
  - The evidence-based rule is met, because 2:2 and 2:3 are both Part B choices.
  - A safer hint 2 is "Reread paragraphs 2 and 3". Paragraph 3 holds Part A choice B and Part B choice "But the new ropes tangled…".
- **R-N2. C02:** all three distractors fail the same single test (Jamal did it), so the hint 2 strategy ("find who does it") clears all three at once. The key is also the only abstract choice. It is acceptable. One Grandma-shaped misreading would make it stronger, for example "She tells Jamal to keep Pepper away from the ants".
- **R-N3. C15:** the key is the only choice that shares a content word ("chains") with sentence 5, and hint 3 says "Ask what sentence 5 needs". A word-match strategy finds the key. B is a real competitor, so this is acceptable.
- **R-N4. Set 3 chain (mild):** C12's order and `how` ("a scientist explains why it did not work", after the sticker) settle the "Dots" half of two C13 rows. Each C13 row still needs "The Tangled Ropes" checked. This is inherent in a shared passage, as in 1A's judgement.
- **R-N5. P5 `clue`** ("Read the sentence that starts with But in paragraph 4…") points at the one key sentence.
  - In core, the authored hints are used instead (`player.js`, `hintsOf`).
  - But the `clue` is still Hint 1 in the end-of-set review's Show me how (`buildReview`, line 916) and in the legacy `help()` path.
  - The leak is after answering, so it is low stakes. For consistency, make the `clue` match hint 1.
- **R-N6. A new paragraph habit:** four of the five new texts put the real cause in paragraph 3. It does not answer form A T5 ("Why does the author include paragraph 4?"), so no leak. A later revision could vary it.
- **R-N7. Frames shared with checks:**
  - **Together items rehearse TS-PS form A almost frame for frame.** P1 matches T1, P2 matches T2 (FIRST try against SECOND try), P3 matches T4 Part A, and P6 matches T3. My n-gram scan confirms shared stems ("…try did not work. Choose the sentence in the passage"; "Look for the clue words decided and finally").
    - These pairs pre-date this batch, and the keys differ.
    - The lead may want to know that Together is a dress rehearsal of form A.
  - **C07 and 3.T.T.1.b form A T5** are both "match each event to a story part" items with four rows. They share the "problem" and "solution" columns. C07's other two columns ("a try that did not work", "proof that it worked") are TS-specific, and the key facts differ. I judge it practice, not rehearsal.
  - No other core or similar item echoes 3.T.T.1.b T1 to T5:
    - C08 asks why the tangling matters, which is a different element from T2's time detail.
    - C09 is not T4's "how does this event affect the end" frame.
- **R-N8. Sign motif (1A NOTE-B4, still open):** Watch Me 3 (more signs fail) is still there, and C14 adds a second "a sign does not stop it" try. No fact is shared. This is the lead's call.

### Checks that pass
- **Together and set 1:** Together (P1 to P4, P6) does not pre-answer set 1.
  - P1 (the problem) and P3 (the solution) are about p1's problem and solution. Set 1 asks about p1's failed-try reason (P5) and Grandma's role (C02).
  - The P3 `how` names "Jamal and Grandma decided…", not who poured, so C02's B survives.
  - P4 and P6 establish that moving the bowl failed, and that "but" marks failure. They do not state the smell (P5's key).
  - P6 is a deliberate contrast with C05 ("but" shows a difference). It teaches the distinction; it does not answer C05.
- **No within-set giveaway in set 1 or set 3,** apart from R-N4.
  - C04's `why` ("shaking is how he checks") removes one C05 distractor (B) but does not state C05's key.
- **No giveaway into form A,** and none into the 3.T.T.1.b check.
  - The six-gram scan (`ngram.js`, `ngram.out`) compared every core, similar and Together string and every non-test passage with:
    - all other `js/data` files;
    - the other lessons in `T-TS.js` and `T-C.js`;
    - these lessons' own test and teaching.
  - Every core and similar hit is shared hint boilerplate or a standard phrase. No passage text is shared.
- **Ladders that pass the new rules:**
  - P5, C03, C04, C05, C07, C08, C09 (ladder only), C11, C12, C13, C14 and S01;
  - Together P1, P2, P3 and P4;
  - S02, where paragraph 3 holds two Part B choices and a Part A distractor.
  - Each of these hint 3s settles at most one blank, row or step.
- **Shape:**
  - formats: seven in core, with six `mc` (at the limit);
  - DOK: five at DOK 3 and none at DOK 1 in core;
  - points: correct (dropdown, match, ms and ebsr are worth 2, and so is the five-step order);
  - `like`: honest for S01 (P5, C04, C11), S02 (C10, C04) and S03 (C14).
- **Facts:** p5 is accurate.
  - A single hawk silhouette is "not effective".
  - Markers must cover the whole window, "no more than 2 inches apart".
  - Birds mistake reflected landscape for open habitat.
  - Source: https://flap.org/faq
  - Ant moats around pet bowls are a common, real remedy: https://patents.google.com/patent/US4357905A/en and https://www.thevetshed.com.au/buy/ant-moat-stainless-steel-bowl/2228337
- **Gate:** `check-content.js --all` passes with 0 failures (my run). The only warnings are the expected similar-coverage notices.

## 4. Findings: 3.T.C.2.a

### SHOULD

**R-S3. SK-TC2a-C14: with the new hint 2, only one weak distractor competes.**
- **Evidence:**
  - Hint 2 ("Look at what the narrator admits after the word Well") leads to "Tia passed to me two times". That sentence refutes C ("Tia never passes").
  - Hint 3 removes B ("really is the best player").
  - What is left is the key and D ("the coach does not want the narrator on the team at all"), which nothing supports.
- **Fix:** replace D with a distractor that takes the narrator's excuse at face value, which is the item's named mix-up. For example: "The ball came too fast for anyone on the team to stop."

**R-S4. Together SK-TC2a-P3 partly pre-answers core 1.2 (SK-TC2a-P5).**
- **Evidence:**
  - P3 Part A asks "The narrator says Dev is just lucky. What can a reader tell that the narrator does not say *at first*?" Its key is "Dev sells a lot because he is friendly and helpful."
  - P5, set 1 item 2, asks how the narrator's view changes by the end. Its key is "She starts to see that Dev's talking helped."
  - "At first" tells the child that the narrator later comes round, and P3's key supplies what she comes round to.
  - This is not the same row, so I rate it SHOULD and not MUST. But it is the kind of pre-answer the new Together rule targets. The author's §8 does not discuss this pair.
- **Fix:** drop "at first" from P3 Part A ("What can a reader tell that the narrator does not say?"). Keep P3's `why` and `how` free of the paragraph 5 admission, as they are now.

**R-S5. SK-TC2a-C06: hint 2's two questions map onto the two keys.**
- **Evidence:**
  - Hint 2 is "Read the first paragraph of Part 2 slowly. Ask: who is sitting in the chair, and who is talking?"
  - "Who is talking" leads to "has cut hair on this street for thirty years" (key B). "Who is sitting in the chair" leads to "the boy in my chair" (key A, the boy called *he*).
  - It is the 2B S-1 pattern, where hint 2 does the inference. This ladder was not flagged before; I found it in the full hint audit the brief asked for.
  - The paragraph rule is met, because C ("uses the word I") and E ("same Saturday") also come from paragraph 5. Distractors survive, so it is SHOULD.
- **Fix:** hint 2: "Read the first paragraph of Part 1 and the first paragraph of Part 2. Compare how each one talks about the boy."

**R-S6. SK-TC2a-C12 sample misquotes the poem.**
- **Evidence:**
  - The sample says the people "giggle while they scrub". The poem says "They scrub behind my floppy ears / and giggle when I shake."
  - The model answer is the one place a child learns what "use a detail from the poem" means, and criterion 3 checks exactly that.
- **Fix:** "…and they giggle when the dog shakes, so the bath is fun for the family." Also consider ending on a view the detail actually supports: "You smell so sweet!" shows the bath works for the people, not that it is "good for the dog".

### NOTE

- **R-N9. C04 residual shape.**
  - After hint 3 removes "borrow the library book", each slot holds the two swapped keys.
  - Slot 0's key is the stem's last sentence word for word ("I think Renee just likes giving orders").
  - That is now the intended distinction (narrator against reader), with no location hint, so it passes.
  - "Borrow the library book" is only weakly plausible.
- **R-N10. C03 is DOK 1 in practice.**
  - Hint 1 (the I rule) plus hint 2 ("Is each I inside quotation marks?") settle it. Ava and Ms. Hart never say I, so they do not compete.
  - The hint wording is 2A's own suggestion and is acceptable. Relabel C03 as DOK 1 (it would be the lesson's only DOK 1 item, within the cap).
- **R-N11. C11 `how` step 4 previews C12.** It says the speaker "loves mud", which is a C12 speaker-view detail. C12 is open and unscored, so this is harmless.
- **R-N12. Together P4 against form A T6.**
  - Both are four-line poems asking "How is the speaker's view of the [snow/wind] different from [the sister's/Dad's] view?"
  - The distractor design is the same: an excited/unhappy key, a "both feel the same" choice, the inverse, and "both" again.
  - The six-gram scan hits on the stem and on the `clue`. The keys differ, and both items pre-date this batch.
  - Flag for the lead: Together rehearses T6's exact frame.
- **R-N13. Reader-view items** (C04, C14, S01) share the twist of T3 and T5: the narrator is negative and the events are positive. The frames and texts differ, and S01 asks for a conclusion where T5 asks for details. I judge them practice, as 2A did.
- **R-N14. C09 and form A T4** share the component (a sentence that shows a changed view). C09 reaches it through the second narrator's eyes, in a reworded prompt. It is practice.

### Checks that pass
- **Ladders:**
  - P5, C01, C04, C05, C07, C08, C09, C10, C11, C13, C15, S01, S02 and S03 meet the paragraph rule and the hint 3 rule.
  - In C05, paragraph 5 holds two Part B choices. In C09, the hint 2 region holds three targets.
- **No giveaway inside a set:**
  - C07's rows (bees, silly, nervous customer, brave) no longer prime C08's key.
  - C06's `why` names the switch of narrator but not C10's purpose.
- **No giveaway into form A** (T2 to T6). The scan shows no shared passage text.
- **`like` mappings are honest:** S01 (C04, C14), S02 (C11, C03) and S03 (C15, C07).
- **Shape:**
  - formats: seven;
  - `mc`: five;
  - DOK 3: six;
  - the `cr` item has no points.
- **Teaching:** it models every task. Watch Me 3 (two narrators and your own view) covers C06, C10 and C12.

## 5. Judgement: the C12 written-answer sample and criteria

**Prompt:** "How does the speaker feel about the bath? What do YOU think about it? Write two or three sentences. Use one detail from the poem to explain each view."

It now asks the child to describe the speaker's perspective, which the old prompt gave away. It also asks the child to distinguish their own view, which is the official wording's second verb.

**Criteria:** four "I…" checks:
1. the speaker's view with a detail;
2. my own view in my own words ("I may agree or disagree");
3. a detail for my view;
4. which view is whose.

They match the prompt one for one. Number 4 is the standard's "distinguish them from their own". Four criteria against the plan's two or three is justified here (2B N-5).

**Sample:**
- **Sound:**
  - three sentences;
  - the speaker's view ("a mistake") with two real details (hiding behind the door; "mud is best");
  - a clearly separate own view ("I think the bath is a good idea");
  - a quoted detail ("You smell so sweet!").
- **One flaw (R-S6):** "they giggle while they scrub" misplaces the giggle, which comes when the dog shakes.
- **Weaker reasoning:** "good for the dog" is a little loose.

Show me how labels it "One good answer follows. Other answers can also be right", and the `why` says "Many answers can be right". So no single answer is claimed. My own blind answer, which agrees with the people's side using "so sweet", meets all four criteria. A child who agrees with the dog can meet them too, using the tail-tuck, the kicking or "Mud is best!".

**Verdict on C12:** sound. Fix the misquote.

## 6. Author log §8 (read after steps 1 and 2)

**The log matches the data** on every change it lists:
- the p3, p4 and p7 rebuilds;
- set 1 order;
- P4 and P6 moved to Together;
- C12 points, C13 rows and C15 distractors;
- the TC2a C04 stem, the C05 Part B swap, the C09 target and the C10 distractors;
- the C12 prompt and criteria;
- the C13 rebuild.

The tallies in §8.3 agree with my counts.

**Where I differ from the log:**
- §8.4 says the shared C06/C07 wording "gives no key away". Combined, it gives away C09 (R-M1).
- §8.2 lists S03 hint 2 as fixed. The new wording is equivalent to the old one (R-S2).
- §8 does not discuss the Together P3 → P5 pair in 3.T.C.2.a (R-S4), or the C06 ladder (R-S5), which no earlier review flagged.

## 7. Summary for the lead

| Lesson | MUST | SHOULD | Verdict |
|---|---|---|---|
| TS-PS | R-M1 (C09 is answered by C06 + C07 inside set 2) | R-S1 (C06 swap, dud and cues); R-S2 (S03 hint 2) | **CHANGES REQUIRED** |
| 3.T.C.2.a | none | R-S3 (C14 distractor D); R-S4 (Together P3 "at first"); R-S5 (C06 hint 2); R-S6 (C12 sample misquote) | **ACCEPTED** |

**Blind solve:** 34 of 34 (100%), fully blind. C12 is consistent with its criteria. I would defend every key.

**Files** (all in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1b/`):
- `load.js`, `struct.js` (field shapes only)
- `blind.js`, `blind.txt`, `.map.json`
- `answers.json`, `answers.saved.json`, `solve-notes.txt`
- `cmp.js`
- `full.js`, `TS-PS.full.txt`, `3.T.C.2.a.full.txt` (read after the solve)
- `ngram.js`, `ngram.out`
