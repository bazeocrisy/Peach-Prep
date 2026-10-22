# B0 review 1: 3.T.T.1.c "Characters and the story's lesson"

**Role:** independent content reviewer 1 (blind solver). I did not write this lesson. I read the author log only after my blind answers were saved.
**Scope:** `js/data/lessons/T-T1.js`, the 3.T.T.1.c block: `core` (fifteen items), `similar` (S01 to S03), `addons` (P1 to P6), passages p4 to p8, Learn It and Watch Me. I also read `practice`, `test` and `testB` to check separation.
**Read-only:** I changed no lesson or code files. This is the only file I wrote.

## 1. Blind solve

- **Method.**
  - `scratchpad/load.js` loads the lesson through a stub `PP.addLesson`.
  - `scratchpad/blind.js` prints passages p1 and p4 to p8, every core item in set order (resolving `{ref}` from `practice`) and every similar item. Choices, targets, order steps, match rows and dropdown options are shuffled with seed 20261022. It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception`.
  - The output is `scratchpad/blind-B0.txt`, and my answers are `scratchpad/blind-answers-B0.json`, saved before the comparison.
  - `scratchpad/cmp.js` pulls the keys out of the file and compares them.
- **Result: 18 of 18 agree (100%).** That is fifteen core items plus three similar items.
  - The script first reported C08 as different. That came only from the order of object keys: the four row-to-feeling pairs are identical.
- **Disclosure.** To find the core block, I read the file from line 512. That showed me the keys of P1 to P6, so my answers to the three refs (P4, P5 and P6) are not truly blind. The clean blind sample is the twelve new core items plus the three similar items: **15 of 15**.
- **Close calls while solving** (each is still defensible):
  - C09: "Kendra's legs wanted to keep going" is a tempting third choice.
  - C07: the strongest reason the text gives is her memory in paragraph 4, but no option offers it.
  - C08: "slows down" is not in the passage (see SHOULD-3).

| Pos | Id | Key | Agree |
|---|---|---|---|
| 1 | P4 (ref) | honest, thoughtful | yes (keys seen) |
| 2 | P5 (ref) | excited → uneasy → proud | yes (keys seen) |
| 3 | C03 | p1:6:1 "Marisol turned around…" | yes |
| 4 | C04 | "…what Marisol did was special…" | yes |
| 5 | P6 (ref) | honest even when it costs / "felt proud all the way" | yes (keys seen) |
| 6 | C06 | works hard for something she wants | yes |
| 7 | C07 | sees he is hurt and upset / "His lip was shaking." | yes |
| 8 | C08 | eager, unsure, disappointed, happy | yes |
| 9 | C09 | p4:4:2, p4:4:3 | yes |
| 10 | C10 | helping someone in need matters more than winning a prize | yes |
| 11 | C11 | Ms. Patel comes; a crew meets | yes |
| 12 | C12 | determined; to hear the frogs | yes |
| 13 | C13 | start putting books back, a few at a time | yes |
| 14 | C14 | a thought that could have stopped them; something hard to help | yes |
| 15 | C15 | Nia's sunflower | yes |
| S | S01 | keeps his promises | yes |
| S | S02 | worries the class will think he is slow / the "slow" thought | yes |
| S | S03 | when a plan goes wrong, a new idea can still save the day | yes |

## 2. Item checks (summary)

- **One defensible answer.** Every item has one. No key is wrong.
- **Distractors.** They are plausible, and the best are on C10, C12, C13, C15 and S03:
  - true-event distractors on the lesson items;
  - a "passing thought" distractor on C12 and C13;
  - topic-only distractors on C15.
  - The weaker ones are P4's "careless" and "shy" and S02's "Ms. Grant has told the class not to talk". They are acceptable.
- **Alignment.** I checked against the official wording in `standards.js` (p. 32), which matches `gadoe/standards-3-5.txt` line 920: "Describe characters' traits, motivations, actions, thoughts, and feelings and explain their connection to the central message, lesson, or moral of the story." All six parts are covered, and the central message appears in every set. C14 also measures 3.T.T.1.d (see SHOULD-5).
- **Points.** Every choose-two item is worth 2: the ms items P4, C11 and C14 and the hot-text item C09. The ebsr items (P6, C07, S02), the match item (C08) and the dropdown item (C12) are also worth 2. Partial credit follows SPEC §5:
  - ms: at least half right and at most one wrong earns 1;
  - hot text: 1 point each;
  - match: each column is used once, so "all but two" earns 1;
  - dropdown: 1 point per slot.
  - The total is 23 points.
- **DOK.** No DOK 1 items, eight at DOK 2 and seven at DOK 3. The labels are reasonable. C09 behaves like DOK 1–2, because the cue words "thought" and "remembered" sit in the target sentences, and the author's log admits this.
- **Grade 3.** Passages are 102 to 197 words. Nothing is kindergarten-like. p7 reads low (FK 1.3), but its content (asking for help on a timed puzzle) fits grade 3 (NOTE-4).
- **Passage-to-answer agreement.** Agrees everywhere except C08 row 2 and C09 hint 2 (SHOULD-3).
- **Distinct items.** No two core items differ only by names or numbers. P6 Part A and C10 both ask for the lesson, but on different passages, formats and distractor logic. The nearest twins are C10 and S03, which is acceptable for a similar item, but S03 is mapped to set 3, not to C10 (SHOULD-4).

## 3. Findings

### MUST

**MUST-1. Hint 3 leaves only the key standing (rule 3 of 04 §4.5 and the ladder audit). Items: C04, C06, C07, C15, S01, S02 and the P4 addon.**

| Item | h3 text (abridged) | Why it gives the answer away without reading |
|---|---|---|
| C04 | rules out "upset" and "on purpose", then "decide what his words say **about Marisol**" | Of the two options left, only the key is about Marisol; the free pie is about Mr. Okafor |
| C06 | rules out Eli, then "does she run just because she feels like moving, or **because of something she wants**?" | The question repeats the key ("…for something she wants") and names the other distractor ("sit still") |
| C07 | "not too tired… knows that stopping means losing… pick the reason that comes from **what she sees**" | Rules out two choices; "what she sees" matches the key's wording "She sees…". In Part B, "the sentence that shows it" leaves only the Eli sentence |
| C15 | rules out two choices by topic, then "does the person **start alone**, and what happens after that?" | Leo waits for friends, so Nia is the only one left |
| S01 | rules out "stay home" and "money", then "think about **what he told Mrs. Brooks he would do**" | That is a promise, so the key is the only one left |
| S02 | rules out "finished" and "not talk", then "the sentence that tells **what he is afraid of**" | "Afraid" leads straight to "worries…slow" in Part A and to the "slow" thought in Part B |
| P4 addon | "Pick one word that fits **giving back what is not yours**, and one that fits **thinking about how someone else will feel**" | These are definitions of honest and thoughtful |

- The P4 h3 is copied from the worked example in 04 §4.6, so the plan's own example breaks its own rule 3. The lead should fix the example too.
- **Fix:** each h3 should rule out at most one distractor, or restate the evidence, and leave at least two options standing. Then end with a neutral question, not one that repeats the key's words. Examples:
  - C06 h3: "Kendra has not met Eli yet, so she is not running to beat him. Look back at what she wants this year."
  - S01 h3: "Jaylen does go to the pool in the end. Reread paragraph 1. What did he say he would do for Mrs. Brooks, and does he do it?" Better still, drop the paragraph 1 cue and keep only the first part.

**MUST-2. Hints 1 and 2 together give C09's key (the first ladder audit fails).**
- **Evidence:**
  - h1 lists the cue words "thought … remembered".
  - h2 says "Look at the paragraph where Kendra slows down… **Two of its sentences happen inside her head**."
  - Paragraph 4 has three targets, and only 4:2 and 4:3 contain "thought" and "remembered".
  - A child can write down the key after h2, and h3 ("legs… is her body, not a thought") removes the last option.
- **Fix:**
  - h2: "Look at what happens between Eli's fall and Kendra jogging back." Do not say how many sentences are in the paragraph.
  - h3: rule out one *event* sentence, such as the thud, instead of the body-urge sentence.
  - Consider removing the cue words from h1. Then the item tests telling a thought apart from a body urge, not finding a keyword.

**MUST-3. Hints and explanations in set 2 give away C09 (the brief's rule 4: no core hint may give away another core item in the same set).**
- **Evidence:**
  - C07 h3 says "Her thought shows she knows that stopping means losing". C07's `how` and `why` repeat it: "she thinks that stopping means she will never get the ribbon". That names target 4:2 as a thought.
  - C08 h3 says "she also **remembers** how a hurt knee feels". C08's `why` says "she remembers her own hurt knee". That names target 4:3 as a memory.
  - Both come before C09 in set 2. A child who opens these hints, or Show me how, then reaches C09 with both answers already identified.
  - Own mode also shows Previous, so the order can be reversed.
- **Fix:**
  - Reword C07 h3, `how` and `why` so they do not describe a sentence from paragraph 4 as a thought. For example: "Paragraph 4 shows she still wants to win, so she is not going back to win."
  - Reword C08 h3, `how` and `why` around her legs and her choice. For example: "Part of her wants to keep running, but she turns back." Do not mention the memory.
  - Or move C09 ahead of C07 and C08 in set 2.

**MUST-4. Hints in set 1 give away C03.**
- **Evidence:**
  - P4 (question 1) h2 says "Reread paragraphs 5 and 6… **what does she do with the money?**"
  - P4 h3 says "then she **gives back** what was not hers".
  - P4's `how` says "Find her big choice: she returns the extra change."
  - C03 (question 3) asks for the action that proves her decision, and its only paragraph 6 target is the key.
  - C04 (question 4) also quotes "Not many people would **come back**". It comes after C03, but Previous makes it reachable first. That last point is minor on its own.
- **Fix:**
  - Make P4 h2 and h3 about what she *thinks* (paragraph 5), not what she does with the money. For example: "Reread paragraph 5. Who is Marisol thinking about?"
  - Or move C03 to position 1, ahead of P4.

**MUST-5. P4, P5 and P6 are in `practice` and also referenced by `core`, which conflicts with 01-architecture.**
- **Evidence:**
  - 01 §2.3 says items moved into `core` "are then removed from `practice`".
  - 01 §2.2 and rule 10 of §2.6 say Practice Together on a core lesson is **all** of `practice`, with two to five items.
  - As written, Together would have six items, including core questions 1, 2 and 5. Their `clue` and `why` would be shown with Help me before set 1. The lesson comment ("the engine must not also show them in Practice Together") relies on engine behaviour that the architecture does not describe. The author's log, §6.1, flags this.
- **Fix:** the lead chooses one:
  - (a) Move P4, P5 and P6 into `core` as full items with the same ids, and leave P1 to P3 as Together. That matches 01 §2.3.
  - (b) Amend 01 so that Together excludes ids referenced by `core`, and add a check-content rule and a guard assertion for it.
- Until then, the separation between practice and core is not guaranteed.

### SHOULD

**SHOULD-1. Other hint 3s are too strong.** They do not leave a single option, but they are close.
- **C12:** "his actions… go the other way" from a gloomy thought. "The other way" from gloomy points at "determined" over "careless", so the first slot is nearly given away. Rule out "discouraged" without describing the opposite.
- **C03:** h2 limits the search to paragraphs after paragraph 5 and to a physical action. h3 then removes the paragraph 8 target, so with h2 only 6:1 is left. Rule out the "counting the money" sentence instead, which the child must reject by its timing.
- **P6 addon:** for Part B, "pick the sentence that shows how her choice turned out" leaves only "felt proud". Weaken it to "Ask which sentence comes after her choice."
- **C11:** h2 says "Look at what happens in the paragraphs after that. Choose two." That is close to stating both keys, because paragraphs 5 and 6 are the keys. Acceptable as h2, but say "after the action" without naming paragraphs.

**SHOULD-2. C14 also assesses 3.T.T.1.d.** Its official wording is "Compare and contrast two or more characters, … within texts". C14 compares two characters across two texts.
- **Fix:** tag `std: ["3.T.T.1.c", "3.T.T.1.d"]`, which SPEC §8 allows. Or reframe the item so the comparison is about how each character's choice connects to the lesson.
- It is acceptable as a 3.T.T.1.c item either way, but the coverage map should count it.

**SHOULD-3. Items and passage p4 disagree.**
- C08 row 2 ("when she hears Eli fall **and slows down**") and C09 h2 ("the paragraph where Kendra **slows down**") describe an action the passage never states. Paragraph 4 says her legs "wanted to keep going", and paragraph 5 says she "jogged back".
- **Fix:** add a sentence to p4, paragraph 4, such as "Kendra slowed to a stop." That would add a target choice and needs a C09 recheck. Or reword the row: "when she hears Eli fall behind her".
- C07's `how` step 3 says the lip sentence "comes right before Kendra goes back", but paragraph 4 comes between them. Reword it to "it comes just before Kendra decides".

**SHOULD-4. The similar bank is nominal: three items each "cover" five core items, and most are not a fresh application of the item they are mapped to.**

| Similar item | Is the like for: |
|---|---|
| S01 (trait from action) | P4 (traits): yes. Not P5 (ordering feelings), C03 (action vs feeling in hot text), C04 (why the author included words) or P6 (message with evidence) |
| S02 (motive EBSR) | C07: yes. C06: in part. Not C08 (feelings), C09 (thoughts) or C10 (lesson) |
| S03 (lesson) | C15: in part. It is really the twin of **C10** (same stem form, the same "event vs lesson" distractor logic), but C10 is mapped to S02. Not C11, C12, C13 or C14 |

- With the deterministic rule in 01 §2.2 ("first similar whose `like` includes this core id"), a child who misses C04 or C09 gets a trait question, and one who misses C10 gets a motive EBSR.
- **Fix:**
  - Give `like` only the skills each similar item really mirrors.
  - Move C10 to S03's `like`.
  - Add about five to seven similar items so every component and task has a real sibling: an ordering of feelings, a thoughts hot text, an author's-purpose item, a cause and result, a prediction, a two-character compare and a lesson transfer.
  - 01 §2.6 rule 9 allows up to fifteen.

**SHOULD-5. Learn It and Watch Me do not teach several tasks the fifteen ask for.**
- `teach` covers traits, feelings and thoughts, motive and lesson.
- `learn` has worked examples for trait, motive and lesson only. These are not modelled anywhere before core:
  - telling an action apart from a feeling, speech or result (C03);
  - why an author gives a minor character a line (C04);
  - a feeling inferred from body clues, including a mixed feeling (C08);
  - finding a thought or memory (C09);
  - what an action causes (C11);
  - predicting what a character would do in a new situation (C13);
  - comparing two characters (C14);
  - finding the same lesson in a different situation (C15).
- **Fix:**
  - Add one Watch Me example for feelings and thoughts from clues ("cheeks burned", "she thought", "she remembered").
  - Add a fourth Teach point: "Use what a character is like to predict what they would do somewhere new, and look for the same lesson in a different story."
  - Optionally add one sentence on "what does another character's reaction tell you about the main character's choice?"

### NOTE

1. **Within-set chain in set 3.** C12's key (determined) and its `how` make C13's prediction almost automatic, because C13's `why` repeats "Tariq is determined". The two items build on each other, and this is acceptable. Do not treat it as leakage, but keep C12 before C13.
2. **Body cues differ between practice and the checks.** In C08, "her cheeks burned" is keyed *disappointed*. In form A, T2, "cheeks turned red" is keyed *embarrassed*. Both are right in context, and each item offers only one fitting option. A one-line `misconception` on C08 would help: "Burning cheeks can show more than one feeling; use what just happened."
3. **C10 interferes slightly with form B.** C10's distractor "If you practice every evening, you will win the race" is a wrong lesson about practice. Form B's TB4 key is "Getting good at something hard takes time and practice." It is not a leak, but a child may over-learn "practice lessons are wrong". Consider another distractor, such as "It is better to finish first than to finish together."
4. **p7 is easy to read** (FK 1.3, 103 words). Its content suits grade 3. Optionally add one richer sentence, such as Dante's feeling when the timer appears.
5. **Teach examples share a theme with set 1.** The Teach example (Sam and the vase) and point 5 ("Telling the truth is better than hiding a mistake") have the same honesty theme as P6's key. This was already there in PP-004 and is a light cue only.
6. **No leakage to the checks.** No core or similar item, passage, hint, `how` or `why` names a character, word or key from form A (p2) or form B (p3). I scanned for Theo, Amara, bridge, Ji-ho, Halmoni, mandu, bossy, embarrassed, frustrated, wise, caring, listen, give up and patient. The only matches were "caring" (P3's `how`, about Marisol) and "listen" (P1 addon, "Listen to what Marisol whispers"). The check passages p2 and p3 are not used by any core or similar item.
7. **The `how` steps** are accurate and name the answer with reasoning on all eighteen items. The one wording slip is in C07 (SHOULD-3).

## 4. Verdict

- **Keys:** all eighteen are confirmed (100% agreement, and 15 of 15 on the truly blind items). The passages are original, sound and suitable for grade 3. Alignment with 3.T.T.1.c is good, and the points and partial credit are correct.
- **Status: CHANGES REQUIRED before release.**
  - MUST-1 to MUST-4 are about the hint wording and leakage within sets. They can be fixed by editing text only, with no change to keys or items.
  - MUST-5 is a structural decision for the lead.
  - After the fixes, a hint-only re-review is enough: rerun the ladder audit on every h1+h2 and h3, and the same-set leakage check. Another full blind solve is not needed unless items or passages change.

---

## Re-review (after the author's fixes, B0-author-log.md §8)

**Order kept:** I re-solved the changed items blind and saved my answers before I read §8 of the author log.

### R1. Blind re-solve of the changed items

- **Method.** The same seeded, shuffled, no-key print (`scratchpad/blind.js`, which now prints every non-check passage, so p9 is included). The output is `scratchpad/blind-B0-r2.txt`. My answers are in `scratchpad/blind-answers-B0-r2.json`, saved first. The comparison script is `scratchpad/cmp2.js`.
- **Result: 7 of 7 agree (100%).** These are C03 (now on p9), C06, C08, C09, C10, C11 and C14.
  - The script prints "7/18", because it divides by every item in the lesson, not just the seven it compared.
  - Counted across both rounds, every truly blind solve agrees: 15 of 15, then 7 of 7.
- **Item notes:**
  - **C03 on p9.** The six targets separate an action from thought, speech, an earlier action, an opposite action and another person's action. Only "Malik stood up and waved her toward his seat." fits.
  - **C08.** Each feeling is used once, and "shoulders sank" now reads clearly as disappointed. "Proud" for the clapping and the hug is defensible; it is the only one of the four feelings that fits.
  - **C09.** The new target "His lip was shaking." is a good distractor (something she sees).
  - **C14.** The new distractors are each true for only one of the two characters, which makes the item a real comparison.
  - **p4 paragraph 6.** It agrees with C08 and C09.
  - **p9.** 146 words, original, grade 3 suitable.

### R2. Hint ladders (all fifteen core items, three similar items, P1 to P6)

For each item I checked three things:
- whether hint 3 alone leaves only the key;
- whether any hint repeats the key's words;
- whether hints 1 and 2 count or locate the key for the child;
- whether any hint, `how` or `why` gives away another item in the same set or a check item.

| Item | h3 leaves | Result |
|---|---|---|
| P1 | 3 of 4 | pass |
| P2 | 3 targets after h2 + h3 | pass |
| P3 | 2 of 4 | pass |
| P4 | 4 of 5 (pick 2); no definitions of the keys | pass. MUST-1 and MUST-4 are fixed: no pointer to the action in paragraph 6 |
| P5 | 2 orders | pass |
| C03 | 5 of 6 | pass |
| C04 | 3 of 4 | pass. MUST-1 is fixed |
| P6 | 2 of 4 in Part A and 2 of 4 in Part B | pass. SHOULD-1 is fixed |
| C06 | 3 of 4; no echo of "something she wants" | pass. MUST-1 is fixed |
| C07 | 3 of 4 in Part A; Part B neutral | pass. MUST-1 and MUST-3 are fixed |
| C08 | completes one row of four (allowed by 04 §4.5 rule 3); the memory is no longer mentioned | pass. MUST-3 is fixed |
| C09 | 4 of 5 in the h2 range, from 7 targets; no cue words, no count | pass. MUST-2 is fixed |
| C10 | 2 of 4 | pass |
| C11 | 4 of 5 (pick 2) | pass. See NOTE-R2 for h2 |
| C12 | 2 of 3 in each slot; "the other way" is gone | pass. SHOULD-1 is fixed |
| C13 | 3 of 4 | pass |
| C14 | 4 of 5 (pick 2) | pass |
| C15 | 2 of 4; "start alone" is gone | pass. MUST-1 is fixed |
| S01 | 3 of 4 | pass. MUST-1 is fixed |
| S02 | 3 of 4 in Part A; Part B neutral | pass. MUST-1 is fixed |
| S03 | 2 of 4 | pass |

- **Same-set leakage.**
  - Set 1: C03 is now on its own passage, so P4's ladder cannot point at it. C04's `how` no longer names honesty, so it does not pre-teach P6.
  - Set 2: C07 and C08 no longer call any paragraph 4 sentence a thought or a memory.
  - **No leak remains.** The only links left between items in the same set narrow the choices without giving the key:
    - C07's `how` calls "His lip was shaking." something Kendra *sees*. That eliminates one of C09's seven targets.
    - P4's key (honest) supports P6 Part A, but the passage itself says "Thank you for being honest."
    - C11's results and C12's "determined" prepare for C15 and C13. That is the same story read in order.
- **Check items.** No core or similar text, no hint and no Watch Me example names a form A or form B character, passage, word or key. The words "bossy" and "caring" appear in Teach and Watch Me, and they match keys on T1 and TB5. That text was there before B0 and teaches the vocabulary, not the item. I leave it as is.

### R3. Explanations, mappings and teaching

- **Show me how.** I read all 21 items again (P1 to P6, the twelve new core items and the three similar items). Every one is accurate and ends with the answer and a reason.
  - SHOULD-3 is fixed. C07's step 3 now says "just before she decides", and the "slows down" row is gone.
- **`like` mappings.** Each one is now a real sibling:
  - S01 is P4 and C06 (a trait from an action).
  - S02 is C07 and C12 (motive).
  - S03 is C10 and P6 (lesson).
  - SHOULD-4 is half done. Nine core items have no similar item, and 01 §2.6 rule 9 ("every core item is covered") is not met. The lead accepted this (author log §6.6). It is still open as RS-1 below.
- **Teaching.** The new Teach points and Watch Me examples now model what the fifteen ask for:
  - feeling vs trait, and prediction (Rosa);
  - action vs words vs thoughts, motive, cause and result, and why an author gives a minor character a line (Tasha);
  - comparing two characters, and the same lesson in a new situation tested by lesson, not topic (Lena and Kwame).
  - Reading feelings from clues is taught in Teach point 2.
  - SHOULD-5 is fixed.
- **MUST-5 (refs in `practice`).** The lead decided that Together leaves out any item that `core` references (author log §6.1). That settles the content question. But `01-architecture.md` still says Together is "all of `L.practice`" (§2.2) and that moved items are "removed from `practice`" (§2.3). No check-content rule or guard asserts the exclusion. This is now RS-2 below.

### R4. Remaining findings

**No MUSTs remain.**

**RS-1 (SHOULD, accepted by the lead). The similar bank still has three items.**
- Nine core items have no similar item: P5, C03, C04, C08, C09, C11, C13, C14 and C15. On those items, "Try a similar question" is hidden.
- **Fix, in a later revision:**
  - add similar items for an ordering of feelings, an action hot text, an author's-purpose item, a mixed-feeling match, a thoughts hot text, a cause and result, a prediction, a compare and a lesson transfer;
  - until then, make check-content rule 9 a warning for this lesson.

**RS-2 (SHOULD). Write the refs decision into the architecture.**
- **Fix:**
  - amend 01 §2.2 and §2.3: Together equals `practice` minus the ids that `core` references, and refs stay in `practice`;
  - add a check-content rule that Together has two to five items after the exclusion;
  - add a guard assertion that no `{ref}` id is rendered in `SK:<key>:p`.

**RS-3 (SHOULD). The same lesson appears three times.**
- p9 (Malik gives up his seat when tired), Watch Me Tasha (helps a lost boy and misses tetherball) and p4 (Kendra gives up the ribbon) all teach "help someone in need, even when it costs you".
- Their thoughts also follow the same pattern:
  - Tasha: "If I help him, I'll miss my turn"
  - Kendra: "If I stop, I'll never get the blue ribbon"
  - Malik: "I earned this seat"
- Even Malik's last line (his legs "did not feel so tired anymore") mirrors Kendra's "her heart felt full".
- This is not a leak of any key. But Watch Me and set 1 rehearse set 2's lesson (C10) and C09's kind of thought, and the author log (§2) itself lists theme variety as a goal.
- **Fix:** give the Tasha example a different lesson, such as owning up, or patience with a younger sibling. It still needs the same sort of speech, thought and action sentences, a result, and a minor character's reaction. Optionally, give p9 a different motive as well; C03 tests only an action, so p9's lesson can be anything.

**RS-4 (SHOULD). The Learn It cue matches a core key.**
- Teach point 2 gives "a shaking lip" as its example of a feeling clue.
- "His lip was shaking." is the Part B key of C07, and a target in C09.
- **Fix:** use a clue that no item uses, such as "a stomping foot" or "a wobbly voice".

**NOTE-R1.** C03's prompt is long, at 27 words with a "not … or …" clause. It is clear, but "Which sentence shows an action that proves Malik has decided to give up his seat?" would do, because hint 1 already explains the difference between an action and words or thoughts.

**NOTE-R2.** C11's h2 ("ask what other people do after they see it") is close to naming what kind of answer the keys are. It does not quote either key, and h3 still leaves four options, so I accept it.

**NOTE-R3.** C06's new distractor mentions soccer, which also appears in p9 (set 1). Nothing turns on it.

### Re-review verdict

**ACCEPTED.**
- The keys are confirmed: 7 of 7 on the blind re-solve.
- Every MUST from my first review is resolved: MUST-1 to MUST-4 in the text, and MUST-5 by the lead's decision.
- Every ladder passes the audit, and no item gives away another item in its set or a check item.
- RS-1 to RS-4 are SHOULDs for the lead. None of them blocks release of this content.
- RS-2 is about the architecture and the checks, not the lesson file. It must be done before the engine change ships.
