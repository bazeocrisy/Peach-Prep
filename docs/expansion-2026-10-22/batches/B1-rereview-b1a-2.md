# B1 second re-review (b1a): 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d

**Role:** independent re-reviewer. I did not write these lessons or any earlier review of them.
**Scope:** the items named in the assignment, in `js/data/lessons/T-T1.js`:
- 1.a C10, P5, Together P1 and P2;
- 1.b C03 (new), C04, C11, S01, Together P5, and set 1 against all of Together;
- 1.d P4, C11, C12, C14, C15, S03.

**Rules applied:** REVIEWER-BRIEF.md, CONTENT-BRIEF.md, and both rule sections at the end of AUTHOR-BRIEF.md. The one that matters most here is "Rule added after the B1 re-reviews": read the clue and hints 1–3 as one set, ask whether together they leave only the key, and treat a giveaway moved from one hint to another as not fixed.
**Read-only:** this is the only file I wrote in the repo. My scratch files are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1a-2/`. I ran no git and started no server.
**Order of work:**
1. The briefs.
2. Blind solve, with answers saved.
3. Keys compared.
4. Whole-ladder audit.
5. B1-rereview-b1a.md, then §9 of B1-b1a-author-log.md, read last.

## 1. Blind re-solve

**Method**
- `rr-b1a-2/load.js` loads T-T1.js through a stub `PP.addLesson`. It is a copy of the earlier reviewer's loader, which is code only.
- Before solving, I printed only item ids, types and field *names*. I printed no item content.
- `rr-b1a-2/blind.js` prints the seven items and the passages they use.
  - Choices, dropdown options and match rows are shuffled with seed 40422.
  - It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception`.
  - None of these items has a figure.
- My answers were saved to `rr-b1a-2/answers.saved.json` (timestamp in `answers.saved.time`) before `cmp.js` extracted any key.

**Result: 7 of 7 agree (100%).** Each item is scored on its full key: every slot and every match row.

| Item | Mine | Key |
|---|---|---|
| 1.a C10 | the clue Nadia uses to figure out who wrote the notes | same |
| 1.b C03 | the main character / Jada will be the one who solves the problem | same |
| 1.b C04 | a helper whose actions make the solution possible | same |
| 1.b C11 | the fans drown out the actors' voices in the back / the play is that same night | same |
| 1.b S01 | Without him, Ms. Reyes could not finish the job | same |
| 1.b Together P5 | Grandma Bea → Character, Macon in summer → Setting, rabbits → Problem, wire → Solution | same |
| 1.d C11 | open grassland in the spring / steep mountains in early fall | same |

**How blind was it?** Blind for keys, but not naive.
- Before saving my answers, I had not opened the lesson source, the author log or any earlier review.
- What I did know:
  - the item ids and formats;
  - that these items had been changed after review;
  - from the briefs, the general kinds of fault reviewers look for.
- I also read the earlier reviewer's `load.js` and `blind.js` before solving. They are code and contain no item text.
- **Limits.**
  - Seven items is a small sample.
  - Every one of them was easy to solve without help. The agreement rate shows that the keys are defensible. It says nothing about whether the hints give the answers away; §3 covers that.
- **Close call:** 1.b C03 blank 2. "The reader can expect that Jada will be the one who solves the problem" is the best of the three choices, but by the time a child reaches it the answer is recall, not a prediction (MUST-B1).

## 2. Earlier MUSTs and SHOULDs: are they actually cleared?

I judged each one from the lesson data, not from the author's account.

### Earlier MUSTs

| Earlier finding | Item | Status |
|---|---|---|
| MUST-A1 | 1.a P5 ladder | **Cleared.** h2 now covers all four targets. h3 rules out one Abuela line. The child still has to judge "Abuela!" against the key, and arguably ¶3:3 as well. Two or three targets stay live |
| MUST-B1 | 1.b P5 in core 1.3 | **Cleared as written, but its goal is not met.** P5 is out of core and is now in Together, which is fine. The replacement C03 is answered by Together P3 and P6, and by set 1's own P7 and P4 (new MUST-B1) |
| MUST-B2 | 1.b C11 | **Cleared.** Each blank has a distractor the text invites, and h2's time clause is neutral ("there is more than one"). h3 settles blank 1 only, which is allowed. Blank 2 has two or three live choices |
| MUST-D1 | 1.d P4 `clue` and h1 | **Cleared.** h1 no longer points to the endings. The Part B design still has a separate flaw that both earlier reviews missed (new MUST-D1) |

### Earlier SHOULDs

| Earlier finding | Item | Status |
|---|---|---|
| SHOULD-A1 | 1.a C10 | h3 was changed as prescribed. Read as a whole, though, **the ladder still leaves only the key**, now through h1 and h2 (new MUST-A1) |
| SHOULD-A2 | 1.a Together P1 | The prompt and h1 were changed as prescribed, and the word "description" is gone. But h1 itself ("the weather words") still decides the item (SHOULD-A1 below) |
| SHOULD-A3 | 1.a Together P2 | h2 was widened to ¶1–2 as prescribed. But the `clue` and h1 now name the two keys by content ("his voice and his body"), and h3 spends itself on a choice outside h2's range. **The giveaway moved** (new MUST-A2) |
| SHOULD-B1 | 1.b C04 | **Cleared.** Ms. Lin now has a goal and a try. h1 echoes the key (SHOULD-B1 below) |
| SHOULD-B2 | 1.b S01 | **Cleared** as asked: h3 rules out "messy park", and a role distractor was added. h1 echoes the key (SHOULD-B2 below) |
| SHOULD-B3 | 1.b teach point 5 | **Cleared.** The sentence about two fixes was added |
| SHOULD-D1 | 1.d C14 | h2 was changed to the earlier review's suggested wording. **The ladder still leaves only the key** (new MUST-D2). That suggested wording was the earlier reviewer's mistake, not the author's |
| SHOULD-D2 | 1.d C15 | **Cleared.** h2 asks how each family lives, and two Part A choices stay live |
| SHOULD-D3 | 1.d C12 | **Cleared.** h3 rules out a target inside h2's range, and two targets stay live in each story |
| SHOULD-D4 | 1.d C11 | **Cleared.** The blank 1 key is paraphrased. h3 still removes the only same-story distractor from blank 2. That is within the one-blank limit, but the log's claim that h3 "no longer settles blank 2" overstates the change (1.d NOTE-1) |
| SHOULD-D5 | 1.d S03 | h2 was changed as asked. With the current distractors, though, the whole ladder still leaves only the key (SHOULD-D1 below) |
| NOTE-2, NOTE-4 | 1.b C12 prompt; 1.d S03 `like` | **Done.** C12 Part A now asks "What is Mr. Oduya's job in the plot?", and S03's `like` is C09 and P4 |

### Is the author log accurate?

It is mostly accurate about *what text changed*. It is not accurate about *what the changes achieve*.
- **§9.4 counts "live options" wrongly.** It counts the choices a hint does not name. It does not count the choices that are still defensible once all the hints have been read. On that method, 1.a C10, 1.a P1, 1.d C14 and 1.d S03 each show "3", but in each the ladder leaves one.
- **§9.4 omits 1.a P2 from its table**, although its method paragraph says P2 was checked.
- **§9.2 is true only in part.** It says P5 "no longer pre-answers any core item". That is true of P5, but Together P3 and P6 pre-answer the new C03.
- **§9.5 has a stale count.** It says 1.d has 7 uncovered core items. check-content now reports 8, because dropping C14 from S03's `like` uncovered C14.
- **To the author's credit**, §9.4 itself flags that C10's h1 favours the key. It then concludes the distractors "stay live", which they do not once h2 is read too.

## 3. Whole-ladder audit

For each item I printed the clue, h1–h3, the choices and the key together (`rr-b1a-2/full.txt`). For each one I asked three questions:
- (a) Can the child write the key from the clue, h1 and h2?
- (b) After h3, is anything other than the key still *defensible*? A choice the hints have not named does not count as live if they have already disposed of it.
- (c) Does more than one blank or step get settled?

| Lesson | Item | (a) | (b) live after ladder | (c) | Result |
|---|---|---|---|---|---|
| 1.a | P5 (core 1.2) | no | 2–3 targets | – | pass |
| 1.a | C10 (core 2.5) | **yes** | 1 | – | **MUST-A1** |
| 1.a | Together P1 | **yes** | 1 | – | SHOULD-A1 |
| 1.a | Together P2 | **yes** (Part B) | Part B: keys only | – | **MUST-A2** |
| 1.b | C03 (core 1.3) | no | blank 2: 2 | blank 1 only | pass on hints; **fails on Together and in-set pre-answer (MUST-B1)** |
| 1.b | C04 (core 1.4) | partly (h1 echo) | 2 | – | SHOULD-B1 |
| 1.b | C11 (core 3.1) | no | blank 1: settled by h3; blank 2: 2–3 | one blank | pass |
| 1.b | S01 (similar) | **yes** (h1 echo) | 2 | – | SHOULD-B2 |
| 1.d | P4 (core 1.1) | no | Part A: 2–3; Part B: Kofi **1 by design**, Lucy 2 | – | **MUST-D1** |
| 1.d | C11 (core 3.1) | no | blank 1: 2; blank 2: 2 | blank 2 only | pass (1.d NOTE-1) |
| 1.d | C12 (core 3.2) | no | 2 per story | – | pass |
| 1.d | C14 (core 3.4) | **yes** | 1 | – | **MUST-D2** |
| 1.d | C15 (core 3.5) | no | Part A: 2; Part B: 2 | – | pass |
| 1.d | S03 (similar) | no | 1 | – | SHOULD-D1 |

**Does 1.b Together still pre-answer set 1? Yes.** Together is P1, P2, P6, P3 and P5. Set 1 is P7, P4, C03, C04 and C05.
- **P7, C04: not pre-answered.**
  - P7's key, the night-time fix, is not given by Together.
  - C04 is on a separate stem.
- **C03: pre-answered** (MUST-B1).
- **P4 (order): heavily rehearsed but not answered.**
  - Together's `how`s narrate the sequence.
  - P5's Solution row, "wire bent along the bottom of the gate", is nearly P4's step 3, "Jada puts wire along the bottom of the gate".
  - The order itself is not given. I keep this a NOTE, as the earlier review did (1.b NOTE-1).
- **C05: partly rehearsed.** P3's `why`, "The wire blocks the rabbits, so the tomatoes are safe", gives the conclusion that C05's footprint sentence proves. The step C05 tests, "this sentence is the proof", is not given. Acceptable (1.b NOTE-2).

## 4. Findings: 3.T.T.1.a

### MUST

**MUST-A1. C10 (core 2.5): h1 plus h2 let the child write the key.** This is SHOULD-A1, still not cleared: the giveaway moved from h3 to h1 and h2.
- **Evidence.**
  - h1 and `clue`: "Ask how the detail helps the story move along." That sets aside both "what he wears" distractors, because neither moves the plot.
  - h2: "What does Nadia do right after she notices the tie?" The answer is ¶6:1, "Did you write these notes?". The key is "the clue Nadia uses to figure out who wrote the notes", so it is that sentence turned into a choice.
  - h3 then rules out "hiding". Nothing defensible is left.
  - The author's own §9.4 flags h1. h2 is what completes the link.
- **Fix (needs a blind re-solve of C10).**
  - Replace "It shows that Mr. Webb is dressed up for a special day." with a wrong *plot-function* choice that h1 cannot rule out: "It is the clue that tells Nadia where the next note is hidden."
  - Make h2 a neutral location that covers both plot readings: "Reread paragraphs 4 to 6."
  - Keep h3 (hiding).
  - That leaves "who wrote the notes" against "where the next note is", which the child has to settle from the text.

**MUST-A2. Together P2 (EBSR): the `clue` and h1 name both Part B keys by content.** This is SHOULD-A3: the giveaway moved from a paragraph number to a description.
- **Evidence.**
  - `clue` and h1: "Look at what his **voice** and his **body** do right after the room goes dark." The keys are "His **voice** came out high and squeaky." and "He pulled his blanket up to his chin.". The second is the only body sentence in range.
  - h2 now names ¶1–2, which brings in "The whole room went dark." But h1 has already excluded it, because it is not his voice or his body.
  - h3 rules out "Mateo tapped his feet", which is ¶5:1, outside h2's range, so it removes nothing new.
  - Taken together, the ladder hands over both Part B keys, and Part A follows from them.
- **Fix (hint text only).**
  - `clue` and h1: "The writer does not say how Mateo feels. Look for sentences that show a feeling without naming it."
  - Keep h2.
  - h3: "'The whole room went dark' tells about the room, not about Mateo. For Part B, both sentences must match your Part A answer."
  - Three Part B choices then stay live in range, and the later "tapping" and "singing" choices still test timing.

### SHOULD

**SHOULD-A1. Together P1: h1 decides the item, because only the key fits "weather".**
- **Evidence.**
  - h1 and `clue`: "Ask what the sound words and the weather words in paragraph 1 help you picture." The key is the only weather choice.
  - h3 rules out "bored".
  - The other two choices have no hook in ¶1. Abuela is not in ¶1, and the passage names Atlanta.
  - This h1 is the earlier review's own wording. The real cause is the weak distractors.
- **Fix (needs a blind re-solve of P1).**
  - Replace "The apartment is far away from the city." with "The TV in the apartment is broken.". It is a live misreading of ¶1:2, "the screen went black".
  - h1: "Ask what the describing words in paragraph 1 help you picture."
  - Keep h2 and h3.

### NOTE
- **P5** passes (§2). It is easy by design, because Mateo speaks only twice. The author says so in §9.5.

## 5. Findings: 3.T.T.1.b

### MUST

**MUST-B1. C03 (core 1.3, new): blank 2 is pre-answered by Together and by earlier items in set 1.** This breaks two rules: Together must not pre-answer set 1, and earlier items must not give away later ones in the same set. MUST-B1 from the earlier re-review is cleared in letter only.
- **Evidence.**
  - **The key.** Blank 2 is "the reader can expect that **Jada will be the one who solves the problem**".
  - **Together P3** prompt: "Which sentence tells **how Jada solves the problem**?"
  - **Together P6** key: "**Jada is about to try a way to fix the problem**."
  - **Core 1.1, P7** (before C03 in the same set). Its key is "Jada needs a fix that works while everyone sleeps", and its `why` says "That is why **Jada makes something that blocks the gate**".
  - **Core 1.2, P4** step: "**Jada puts wire** along the bottom of the gate."
  - By core 1.3, the child has been told four times that Jada solves the problem. Blank 2 is therefore recall framed as a prediction, and the item's DOK 3 is not earned.
  - The hint ladder itself is fine: h2 settles blank 1 only, and two choices stay live for blank 2.
- **Fix (needs a blind re-solve of C03).** Keep blank 1 ("the main character"). Rewrite blank 2 as a function question about a different opening detail, one that nothing in Together or set 1 touches. For example:
  - "The author says that **every summer** Grandma Bea grew tomatoes, so the reader can tell that {1}."
  - Key: "the garden matters to her, so losing the tomatoes is a real problem".
  - Distractors with hooks:
    - "the rabbits eat her tomatoes every summer" (misreads "every summer");
    - "Grandma Bea is too busy to fix the gate" (unsupported, but tempting).
  - Re-check h1–h3 as one set afterwards.

### SHOULD

**SHOULD-B1. C04 (core 1.4): h1 echoes the key.**
- **Evidence.**
  - h1 lists the jobs as "one has the problem, one may cause it, and another may **help fix it**". The key is "a **helper** whose actions make the **solution** possible".
  - h3 rules out "cause".
  - The main-character misconception is still live for a child who holds it, so the item does not collapse. But h1 offers the key's own category.
- **Fix.** h1: "Characters do different jobs in a plot. Ask whose problem it is, and what each person does about it."

**SHOULD-B2. S01 (similar): h1 echoes the key.**
- **Evidence.**
  - h1 and `clue`: "Ask what would happen in the story **if this character were not there**." The key is "**Without him**, Ms. Reyes could not finish the job." It is the only choice in that form.
  - h3 rules out "messy park". The main-character distractor stays live.
- **Fix.** h1: "Authors add a character for a reason. Ask what job this character does in the story."
- **Also:** S01 has no `misconception` line. Add one: "A common mix-up is thinking that whoever finishes the job is the main character."

### NOTE
1. **P4 (core 1.2)** is heavily rehearsed by Together (§3). It is acceptable as a warm-up order item, as the earlier review found. If C03 is rewritten, consider rewording P5's Solution row so that it is not almost the same words as P4's step 3. For example: "Jada blocks the space under the gate."
2. **C05 (core 1.5)** is partly rehearsed by P3's `why` (§3). Acceptable.
3. **C11** passes. h3 settles blank 1 by pointing to Malia's seat in the last row, which is the one blank allowed.
4. **Together P5 (new rows)** agrees with `coach.mixup`. The Character row is now Grandma Bea, not Jada, so it does not answer C03 blank 1.

## 6. Findings: 3.T.T.1.d

### MUST

**MUST-D1. P4 (core 1.1, EBSR): Kofi's story holds only one Part B choice, so half of Part B is free.** This breaks the EBSR rule: every place a hint names must hold at least two Part B choices. Both earlier reviews missed it.
- **Evidence.**
  - The Part B prompt and h2 both say "one sentence from each story".
  - The five Part B choices:
    - Kofi: ¶5:4 only, which is the key;
    - Lucy: ¶5:3 (key), ¶4:1, ¶2:3 and ¶1:1.
  - Whatever the hints say, the child gets Kofi's key for free.
  - The rest of the ladder is now good. h1 is neutral. h2's "moment each changes" lands on Lucy's ¶4:1 distractor. h3 rules out ¶2:3, which is in range.
- **Fix (needs a blind re-solve of P4).**
  - Replace "The first big snow of the year covered Pine Hill in Vermont." (a setting choice that nobody picks) with Kofi's sharing moment: "He gave a mango to every child he met." (¶4:3).
  - That mirrors Lucy's ¶4:1 distractor (the act of sharing, not the better life). h2's "moment each changes" then lands on a distractor in *both* stories.
  - Update `how4` to explain both sharing-moment distractors.

**MUST-D2. C14 (core 3.4): h2 still states half the lesson, and with h3 only the key is left.** SHOULD-D1 is not cleared. The current h2 is the earlier review's suggested wording, so this is a reviewer error that the author carried out faithfully.
- **Evidence.**
  - h2: "Reread the part where each child is **handed a job**, and the last paragraph of each story." "Handed a job" is the first half of the key lesson, "being trusted with a real job can make you proud", and the last paragraphs give the second half.
  - h3 rules out Jalen.
  - Of the two choices left besides the key, neither Lena (a routine) nor Kim (the goat wins) is *handed* a job. Only Tomás is ("lets him steer … for the first time").
  - The h2 phrase is exactly the feature that separates the key from its strongest competitor, Kim. So the DOK 3 transfer becomes matching.
- **Fix (hint text only).**
  - h2: "Reread the middle and the end of each story. What changes for each child?"
  - h3 rules out Kim instead of Jalen: "Kim's goat is the one that wins, so Kim's story is about the goat's prize. Say the lesson aloud, then test the stories that are left."
  - Jalen's move ("what changes") then stays tempting, and Lena stays in play.

### SHOULD

**SHOULD-D1. S03 (similar): with the current distractors, the ladder leaves only the key.**
- **Evidence.**
  - h1 says the lesson must fit both stories, which rules out "Little sisters should never touch your drawings" (only Nora's story).
  - h3 rules out soccer.
  - h2 ("how they get along at the start and at the end") rules out "stay away from people who argue".
  - The fault is the distractors: two of the three are one-story topics, which is exactly what the strategy is built to reject.
- **Fix (needs a blind re-solve).** Replace "Little sisters should never touch your drawings." with a wrong lesson that fits both stories on the surface: "Sharing your things keeps people from getting upset."

### NOTE
1. **C11.** h3 still removes "middle of winter", the only same-story distractor in blank 2. Blank 2 is left with the key and Bataa's setting, which is the cross-story mix-up the item targets. That is within the one-blank limit, so it passes. The log's "no longer settles blank 2" overstates the change, which only altered h3's closing sentence.
2. **C12 and C15** pass (§3).
3. **Similar coverage.** 1.d now has 8 core items with no similar item, not 7. C14 lost coverage when its `like` mapping was correctly dropped from S03. This is at warning level.

## 7. Gates and other checks

- `node verification/check-content.js --all`: **PASS, 0 failures, 25 warnings.**
  - Together is derived as 1.a P1–P3, 1.b P1, P2, P6, P3 and P5, and 1.d P1–P3.
  - In these lessons, the only warnings are similar coverage (1.a 8, 1.b 10, 1.d 8) and the two older clue warnings (SK-TT1a-T5, SK-TT1d-P1).
- `python3 verification/readability.py`: every passage in the three lessons is 124–182 words, FK 1.5–3.6. No passage text changed in this round.
- **Points and DOK.**
  - C03 is a two-blank dropdown worth 2 points, as it should be.
  - Its DOK 3 is not earned while blank 2 is recall (MUST-B1).
- **`how` accuracy.** Every `how` I read for the audited items is accurate and ends with the answer and its reason.
- **Facts.** None of the changed items makes a new factual or cultural claim, so no web check was needed. The earlier checks of p5 (Tybee) and p5–p8 (1.d) stand.
- **Form A and B separation.** No changed item uses a check passage. The new C03 and the reworded P5 rows share no key fact with `test` or `testB`.

## 8. Verdicts

| Lesson | Re-solved keys | Verdict | To clear |
|---|---|---|---|
| **3.T.T.1.a** | 1 of 1 | **CHANGES REQUIRED** | MUST-A1 (C10: one distractor and h2; re-solve C10). MUST-A2 (Together P2: `clue`, h1 and h3, text only) |
| **3.T.T.1.b** | 5 of 5 | **CHANGES REQUIRED** | MUST-B1 (C03 blank 2 rewritten; re-solve C03) |
| **3.T.T.1.d** | 1 of 1 | **CHANGES REQUIRED** | MUST-D1 (P4: one Part B distractor; re-solve P4). MUST-D2 (C14: h2 and h3, text only) |

- **What improved.** All four earlier MUSTs are cleared in what they literally asked for. 1.b C11, 1.d C12 and C15, and 1.a P5 now pass the whole-ladder test outright. Every key in the blind solve was defensible.
- **What keeps recurring.** A fix is checked against the sentence in the finding, not against the item as a whole.
  - Three of the five MUSTs (C10, Together P2, C14) are giveaways that moved within the ladder, the pattern the new rule names.
  - One (C03) is a fresh item that fails the Together and in-set rules.
  - One (P4) is a structural Part B flaw that the hints cannot repair.
- **Advice to the author.** For the whole-ladder check, count a choice as live only if a child who has read every hint could still defend it. A choice that no hint mentions by name does not count on that basis alone.
- **Next re-review.**
  - Blind re-solve: 1.a C10 (and Together P1 if SHOULD-A1 is taken), 1.b C03, 1.d P4 (and S03 if SHOULD-D1 is taken).
  - Ladder-only check: 1.a Together P2, 1.d C14.
  - The SHOULDs (A1, B1, B2, D1) are recommended. None of them blocks on its own.
