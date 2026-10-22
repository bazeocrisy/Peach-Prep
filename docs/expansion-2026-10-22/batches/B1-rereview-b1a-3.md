# B1 third re-review (b1a): 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d

**Role:** independent re-reviewer. I did not write these lessons or any earlier review of them.
**Scope:** every Together, core and similar item in the 3.T.T.1.a, 3.T.T.1.b and 3.T.T.1.d blocks of `js/data/lessons/T-T1.js`, plus `test` and `testB` for separation. 3.T.T.1.c was not reviewed.
**Rules applied:** REVIEWER-BRIEF.md, CONTENT-BRIEF.md, and both rule sections at the end of AUTHOR-BRIEF.md, especially the definition of a "live" choice.
**Read-only:** this is the only file I wrote in the repo. My scratch files are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1a-3/`. I ran no git and started no server.
**Order of work:**
1. The briefs.
2. Blind solve of all items, with answers saved.
3. Keys compared.
4. Whole-ladder audit of every item.
5. Then B1-rereview-b1a.md, B1-rereview-b1a-2.md and §10 of B1-b1a-author-log.md.

## 1. Blind solve

**Method**
- `rr-b1a-3/load.js` loads T-T1.js through a stub `PP.addLesson`. It is a copy of the earlier reviewers' three-line loader, which is code only.
- `rr-b1a-3/blind.js` is my own printer. For each lesson it prints:
  - every passage;
  - Together (all of `practice`);
  - core sets 1 to 3, with every `{ref}` resolved;
  - `similar`.
- Shuffling is seeded per item. It covers choices, both EBSR parts, match columns and rows, order steps and dropdown options. Hot-text targets stay in passage order, as in the engine.
- It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception`. None of these items has a figure.
- My answers were saved to `rr-b1a-3/answers.saved.json` (timestamp in `answers.saved.time`) before `cmp.js` read any key.
- `cmp.js` scores each item on its full key: both EBSR parts, every slot, every match row and the full order.
- A negative control (`cmpneg.js`, three deliberately wrong answers) scored 68 of 71, so the comparator does catch misses.

**Result: 65 of 65 unique items agree (100%).**
- The printout had 71 entries, because the six refs (1.a P4 and P5, 1.b P7 and P4, 1.d P4 and P5) were printed once under practice and once in core. Those six entries also agree.
- By lesson: 1.a 21 of 21, 1.b 23 of 23, 1.d 21 of 21. This covers all 15 core items, all 3 similar items and every Together item in each lesson.

**How blind was it?** Fully blind for keys, but not naive.
- Before saving, I had not opened the lesson source, the author log or any review of these lessons.
- Before solving, I printed only field *names* and shapes for these three lessons.
- To learn the item encoding (`correct`, `answer`, `"p1:5:1"` targets, `slots`), I printed a few items **with keys** from 3.T.T.1.c, the reference lesson. That lesson is not under review.
- I listed the earlier reviewers' scratch folders, but I opened only their `load.js`, which is code. I did not open their answers.
- I knew from the assignment that these lessons had been through two re-reviews.
- **Limit.** Nearly every item was easy to solve unaided. The agreement rate shows that the keys are defensible. It says nothing about whether the hints give the answers away; §3 covers that.

**Close calls** (each key is still defensible):
- **1.b C09.** "At the lunch bell, the other teams have only cups of water" is a good distractor. It shows a contrast, not that this team's problem is solved.
- **1.d C04 Part B.** "That afternoon…" against "The next morning…". Only the second proves that more than one day passes.
- **1.d C12.** "One by one, the other sheep followed." is a good near miss.
- **1.a C11 blank 2.** "the bake sale has to close early" has a faint hook in the SOLD OUT sign. "The last muffin gets sold" is clearly better.

## 2. Earlier findings: are they cleared?

I judged each one from the lesson data, not from the author's account.

### MUSTs from the second re-review (B1-rereview-b1a-2.md)

| Finding | Item | Status |
|---|---|---|
| MUST-A1 | 1.a C10 | **Cleared.** "Dressed up for a special day" became "the clue that tells Nadia where the next note is hidden". h2 is "Reread paragraphs 4 to 6." After h1 (which rules out "wears every day") and h3 (which rules out "hiding"), two plot readings stay live. The `how` and `why` explain that no third note is ever found |
| MUST-A2 | 1.a Together P2 | **Cleared.** The `clue` and h1 no longer describe the keys. h2 covers ¶1, 2 and 5. h3 rules out "The whole room went dark", which is in range. Part B leaves both keys plus tapping and singing live, and Part A leaves scared and excited |
| MUST-B1 | 1.b C03 | **Cleared.** Blank 2 now asks what "every summer" tells the reader. The key ("the garden matters to her…") is not stated by Together or by P7 or P4. "Sells at a market" stays live after h3 |
| MUST-D1 | 1.d P4 | **Cleared.** Kofi now has two Part B choices: the key and the basket sentence. The Part A distractor "Keeping your things for yourself keeps you happy" is a good backward lesson |
| MUST-D2 | 1.d C14 | **Cleared.** h2 is "What changes for each child?". h3 rules out Kim. Tomás and Jalen stay live |

### MUSTs from the first re-review (B1-rereview-b1a.md)

All four were cleared by the second round, and I agree:
- 1.a P5: two targets stay live after the ladder;
- 1.b P5: now in Together;
- 1.b C11: one blank settled, the other with two live choices;
- 1.d P4 h1: neutral.

### SHOULDs from the second re-review

| Finding | Status |
|---|---|
| SHOULD-A1, 1.a Together P1 | **Done.** "TV is broken" is a live misreading. Storm and TV stay live |
| SHOULD-B1, 1.b C04 h1 | **Done** |
| SHOULD-B2, 1.b S01 h1 and misconception | **Done** |
| SHOULD-D1, 1.d S03 distractor | **Done.** "Sharing" stays live |
| NOTE-1, 1.b P5 Solution row | **Done.** "Jada blocks the space under the gate." |

### Does §10 of the author log claim only what was done?

**Text changes: yes.** I checked every row of §10.2 and §10.3 against the data, and each change is present as described. §10.1 correctly withdraws the overstated §9 claims.

There are two inaccuracies and one omission:
1. **§10.5, "P4 no longer shows C03's answer" (1.d), is half true.**
   - The author rightly kept the mango sentence out of P4, because it is C03's Kofi blank.
   - But P4's `how2` still says "the three friends ride together". That is C03's Lucy blank, "riding the sled together with her friends" (SHOULD-D1 below).
2. **§10.5, "Nothing in Together answers P5, C03, C04 or C05" (1.a), is true of Together, but it does not check earlier items in the set.**
   - Core 1.1 (P4) labels "He pulled his blanket up to his chin" an action.
   - Core 1.4's distractor is "Mateo pulled his blanket up over his head".
   - That disposes of a distractor; it does not give the key (NOTE).
3. **§10 has no "not addressed" list**, which the post-re-review rule asks for. In practice, the only finding left open is the warning-level similar coverage, and §10.6 does report that.

## 3. Whole-ladder audit (every item)

**Method.** For every item I printed the `clue`, h1–h3, the choices, the key, `how` and `why` together (`rr-b1a-3/full-{a,b,d}.txt`). Then I wrote down the live choices after each hint.

**Grading.** I used the brief's definition of live: a choice the hints' logic disposes of is dead, even if no hint names it. I graded as follows, in line with the second re-review:
- **MUST:** a core item where the ladder leaves only the key, *and* the hints did the work. They point to the key's own content, or they dispose of every distractor that was live before the hints.
- **SHOULD:**
  - the ladder leaves only the key because the distractors were weak to begin with;
  - or the same happens on a Together or similar item;
  - or a hint settles more than it may.
- **NOTE:** light leaning, with two or more choices still live.

In the tables below, `*` marks the key and "out" means a hint disposes of the choice.

### 3.T.T.1.a

| Item | After h1 / h2 / h3 | Live at end | Result |
|---|---|---|---|
| T P1 | h2: cooking out (Abuela not in ¶1); h3: bored out | storm*, TV broken | pass |
| T P2 | h1: "room dark" weak; h2: all in range; h3: room dark out | A: scared*, excited. B: 2 keys, tapped, sang | pass |
| T P3 | h2 points to the wink and the strumming; h3: bed out | calm*, upset and worried (weak, because the wink must be read) | NOTE |
| 1.1 P4 | h3 settles 1 of 4 rows | 3 rows open | pass |
| 1.2 P5 | h2: who speaks and how they feel; h3: ¶3:2 out | key*, "Abuela!", (¶3:3 weak) | pass |
| 1.3 C03 | h2 gives both halves of the key; TV and thunder are not in the target sentence; h3: homesick out | **key only** | **MUST-A1** |
| 1.4 C04 | h1: only the key describes the room; h2 points at the light on the ceiling; h3: dialogue out | key*, guitar and blanket (weak, by category confusion only) | SHOULD-A1 |
| 1.5 C05 | h1: weather out; h2: where the ball lands (the key's clause); h3: "wins the game" out | key*, "strongest kicker" (misconception only) | SHOULD-A2 |
| 2.1 C06 | h2 (¶1) leaves out tiptoe and tie; h3: "favorite room" out | hum*, sunlight | pass, NOTE |
| 2.2 C07 | h2 (¶3–4) leaves 2 Part B choices in range; h3: worried out | A: excited*, annoyed. B: lit up*, unfolded | pass |
| 2.3 C08 | h2: the grin weakens "upset"; h3: "stop reading sharks" out | key*, (upset weak), "forgot" (no hook) | SHOULD-A3 |
| 2.4 C09 | h3 settles 1 row | 3 rows open | pass |
| 2.5 C10 | h1: "wears every day" out; h3: hiding out | who wrote*, where next note | pass |
| 3.1 C11 | h3 settles blank 1 (picky out; impatient has no hook) | blank 2: sold*, close early | pass |
| 3.2 C12 | h3: "lifts" out (A); "reached" out, and by the same logic "scuttled" (B) | A: key*, scared. B: crept out*, waved goodbye | pass |
| 3.3 C13 | h2: the tide; h3: storm out, plus a question about the tide | key*, afraid (she races the water) | NOTE (as in the first re-review) |
| 3.4 C14 | h3: "new problem" out | 2 keys, hides, not-touch (each true of one story) | pass |
| 3.5 C15 | h1 targets "felt very proud", which is the skill; h3: stripes out | 2 keys, the question | pass |
| S01 | h3: dialogue out | rain*, hugged and stamped, bus | pass |
| S02 | h2: what each line does for Rico; h3: quit out | key*, angry (weak) | NOTE |
| S03 | h2: what happens after Marco speaks (the key); h3: "starts the problem" out | **key only** | SHOULD-A4 |

### 3.T.T.1.b

| Item | After h1 / h2 / h3 | Live at end | Result |
|---|---|---|---|
| T P1 | h3: shed out | garden* (farm stand and classroom have no hook) | NOTE (DOK 1 warm-up, as in the first re-review) |
| T P2 | h2: what is missing and what Grandma says; h3: too young out | rabbits*, (watering can weak) | NOTE |
| T P6 | h3: "just starting" out | key*, "fixed for good" | pass |
| T P3 | h1: not thinks or sees; h3: "thought all day" out | wire*, checked the garden | pass |
| T P5 | h3 settles 1 of 4 rows | 3 rows open | pass |
| 1.1 P7 | h2: kind of fix (weakens "waits by gate"); h3: watering out | key*, "Grandma asleep, Jada alone" | pass |
| 1.2 P4 | h1: trouble first, outcome last; h2 lists the four roles **in answer order**; h3 places the trouble before the explanation | **full order given** | SHOULD-B1 |
| 1.3 C03 | h2 settles blank 1; h3: "nothing can go wrong" out | blank 2: key*, sells at market | pass |
| 1.4 C04 | h1: "has the problem" out; h3: "causes" out | helper*, main character | pass |
| 1.5 C05 | h1 ("about the rabbits"): Jada's footprints out; h2: ¶2 footprints where tomatoes are missing (the key's reasoning); h3: "new way in" out | **key only** (rain has no hook) | **MUST-B1** |
| 2.1 C06 | h1: foil and sock out (supplies); h3: one cube out | hot room*, bright sun | pass |
| 2.2 C07 | h2 (¶3–4) leaves 4 Part B choices in range; h3: rules out (A) | A: key (others weak). B: 2 keys, thought hard, fresh air | NOTE |
| 2.3 C08 | h2: fresh air out (first try); h3: wrapping out, thought hard set aside | wool*, "right about the sock" (weak) | NOTE |
| 2.4 C09 | h2: windowsill out of range; h3: wrapping out, and "for this team" disposes of the other teams' water | **2 keys only (pick 2)** | **MUST-B2** |
| 2.5 C10 | h2 lists the roles in order; h3 places the first step | 2 within-group orders still to work out | NOTE |
| 3.1 C11 | h3 settles blank 1 | blank 2: same night*, last practice | pass |
| 3.2 C12 | h3: "finds the cause" out; h2 (¶5) holds 2 Part B choices | A: 3. B: 2 | pass |
| 3.3 C13 | h3 settles 1 of 3 rows | 2 rows open | pass |
| 3.4 C14 | h3: "first try works" out | key*, louder or bigger, teacher | pass |
| 3.5 C15 | h3: stage out | key*, repeat slowly | pass |
| S01 | h3: messy out | key*, main character | pass |
| S02 | h3: mom out | key*, (floated away weak) | NOTE |
| S03 | h3: forest out | key*, miss friends | pass |

### 3.T.T.1.d

| Item | After h1 / h2 / h3 | Live at end | Result |
|---|---|---|---|
| T P1 | h2: each refusal; h3: cold out | key*, (ask friends for help weak) | NOTE |
| T P2 | h3: city out | key*, pine forest (Pine Hill) | pass |
| T P3 | h3 settles 1 row | 3 rows open | pass |
| 1.1 P4 | h1: "safe and clean" out; h3: fruit out (A), rope out (B) | A: key*, "keeping things". B: 2 per story | pass |
| 1.2 P5 | h3: Ben out | key*, sick or hurt (h1's "what goes wrong" keeps it tempting) | pass |
| 1.3 C03 | h3: market out (blank 1); h3 then sends blank 2 to the last paragraph, which supports only the key | blank 1: key*, one friend. Blank 2: settled, and also stated by P4 `how2` | SHOULD-D1 |
| 1.4 C04 | h3: "whole winter" out | A: key* (+ single morning, weak). B: next morning*, that afternoon | pass |
| 1.5 C05 | h3: old sled out | key*, spoil or break | pass |
| 2.1 C06 | h3: harbor out | key*, wooden house, first night | pass |
| 2.2 C07 | h2 leaves 2 questions per child; h3: grandparents out | A: key*, first time. B: 2 per story | pass |
| 2.3 C08 | h3 settles 1 row | 3 rows open | pass |
| 2.4 C09 | h3: "same way" out | key*, midnight, food | pass |
| 2.5 C10 | h1: only the key is about meaning; h2 (Freja before midnight) drops fireworks; h3: wobble out | key*, clock (no reason) | SHOULD-D2 |
| 3.1 C11 | h3 settles blank 2 | blank 1: 2 | pass |
| 3.2 C12 | h3: "sat up tall" out | 2 per story | pass |
| 3.3 C13 | h3: bell out | 2 keys, horse, water hole | pass |
| 3.4 C14 | h2: Lena out; h3: Kim out | Tomás*, Jalen | pass |
| 3.5 C15 | h3: goats and horses out | A: key*, reversed. B: key*, valley | pass |
| S01 | h3: swapped places out | key*, reversed | pass |
| S02 | h3: boat out | key*, beach | pass |
| S03 | h2: "stay away" out; h3: soccer out | key*, sharing | pass |

**Why three MUSTs are new.** 1.a C03 was a NOTE in the first re-review, and 1.b C05 and C09 were passed there. Those calls came before the rule that a choice the hints' logic disposes of is not live. None of the three changed in §10. On that rule, each one now leaves only the key, and in each the hints themselves do the work. All three fixes are hint text only.

### Together and earlier items against later items

- **1.a set 1.** Together P1–P3 do not pre-answer P4, P5, C03, C04 or C05. P4's `how` labels the blanket sentence an action, and that disposes of one C04 distractor (NOTE-1).
- **1.b set 1.**
  - P4 is rehearsed by Together's `how` steps. Combined with its own h2, that is SHOULD-B1.
  - C05's conclusion ("the wire blocks the rabbits") is in P3's and P7's `why`, as both earlier re-reviews accepted.
  - C03 blank 2 is not pre-answered.
- **1.d set 1.** P4 `how2` states C03's blank 2 (SHOULD-D1). P4 shows C04's Part B key as a distractor, but its `how` never mentions time, as the log discloses (NOTE).
- **Sets 2 and 3.** Neither set states a later answer. These chains are accepted, as in the earlier reviews:
  - 1.a C09 → C10;
  - 1.b C11 and C12 → C14 and C15;
  - 1.d C07 → C10.
- **Scan.** `rr-b1a-3/chain.js` searched for any later key that appears in an earlier item's prompt, choices, hints, `how` or `why`. Its only hits are passage sentences that appear as choices (1.a P2 → P4 rows, C08 → C09 row, 1.d P4 → C04), and none of them carries the answer label.

## 4. Findings: 3.T.T.1.a

### MUST

**MUST-A1. C03 (core 1.3): h2 gives the key's two halves, and h3 removes the only distractor about the target sentence.**
- **Evidence.**
  - The prompt asks about one sentence: "Then she began to strum a song she used to sing as a girl in Puerto Rico."
  - h2 says "Look closely at the words after 'used to sing' in that sentence. Then ask who is listening now." The answers are "as a girl" (childhood) and Mateo. The key is "sharing a special song from her own childhood **with Mateo**".
  - h3 rules out "homesick", which is the only distractor that reads the target sentence.
  - "Misses the TV show" (¶3) and "louder than the thunder" (¶5) draw on other paragraphs. Once h2 has fixed the child on the words of this sentence, neither one has a reason left.
- **Fix (hint text only).**
  - h2: "Look closely at the words after 'used to sing' in that sentence." Drop "Then ask who is listening now."
  - h3: "It is Mateo, not Abuela, who sings louder than the thunder, so that choice does not fit. Test each choice that is left against paragraph 4."
  - Homesick and the TV show then stay live, and the child has to make the "shares it with Mateo" link.

### SHOULD

**SHOULD-A1. C04 (core 1.4): only the key is a description of the room, and h2 points at what it describes.**
- **Evidence.**
  - The three distractors are a back-story fact, a line of dialogue and an action. So h1 ("which sentence paints a picture of the room") leaves the key alone for any child who applies it.
  - h2 ("see what Abuela does with the flashlight") points at the light on the ceiling, which the key extends.
  - Core 1.1, earlier in the set, has already labelled the blanket sentence an action.
- **Fix (needs a blind re-solve).**
  - Make one distractor a description of the wrong thing. For example, replace "Abuela had learned to play the guitar a long time ago." with "Abuela's old guitar had a long scratch across the front."
  - Make h2 neutral: "Reread paragraph 4. The new sentence has to fit right after its last sentence."

**SHOULD-A2. C05 (core 1.5): h3 spends itself on the only other plot-move choice.**
- **Evidence.**
  - h2 ("Where does the ball end up, and how do the players react?") leads to the key's own clause.
  - h3 rules out "wins the game", the one distractor that also names a plot move.
  - Left is "strongest kicker", which survives only as the named misconception, and "weather", which has no hook.
  - The first re-review counted "strongest kicker" as live. Under the current definition of live it is marginal.
- **Fix (hint text only).** h3: "How hard Jamal kicks tells about Jamal, not about the plot. Test the choices that are left against what happens after the kick." "Wins the game" then stays live, and the child has to read "sailed over the goal".

**SHOULD-A3. C08 (core 2.3): the ladder leaves only the key, because one distractor has no hook.**
- **Evidence.**
  - h2 ("notice what he does just before he speaks", the grin) weakens "upset".
  - h3 rules out "stop reading sharks".
  - "He forgot where he had hidden the notes" has no hook anywhere in p4.
- **Fix.** Either change is enough:
  - make h2 "Reread what Mr. Webb says in paragraph 6.";
  - or replace "forgot" with a misreading the text invites, such as "He wants Nadia to hurry back to class with the new book." (¶7). That needs a blind re-solve.

**SHOULD-A4. S03 (similar): the ladder leaves only the key.**
- **Evidence.**
  - h2 ("read what happens after Marco speaks") gives the aunt's paint, which is the key.
  - h3 removes "starts the problem", the only distractor with a hook.
  - "Doesn't want to paint" and "where the playground is" have none.
- **Fix.** Either change is enough:
  - have h3 rule out "where the playground is" instead;
  - or make h2 "Find the problem first. Then ask what changes because of Marco's words."

### NOTE
1. **C04 and core 1.1.** P4's `how` labels "He pulled his blanket up to his chin" an action, earlier in the set. That disposes of C04's blanket distractor. It is not a key, so this is a note. It also feeds SHOULD-A1.
2. **Together P3.** h2's pointer to the wink does most of the work against "upset" and "worried". The child still has to read the wink, and this is guided practice.
3. **C06.** h2's ¶1 range drops "tiptoed", which is the named misconception. Sunlight stays live, so the item passes.
4. **C13** stays as the first re-review judged it: h3 settles one step.
5. **S02.** "Angry" is the only distractor left, and it is weak.

## 5. Findings: 3.T.T.1.b

### MUST

**MUST-B1. C05 (core 1.5): h1 and h2 lead to the key, and h3 removes the last live distractor.**
- **Evidence.**
  - h1 says "Ask what this sentence tells you **about the rabbits**". That presupposes the footprints are the rabbits', which disposes of "Jada left her own footprints".
  - h2 ("Find the footprints in paragraph 2. Where were they, and what was missing there?") sets up the comparison that is the key's reasoning.
  - h3 rules out "the rabbits found a new way in".
  - "Wet dirt because it rained" has no hook. Only the key is left.
  - This is the pattern the second re-review graded MUST on 1.a C10.
- **Fix (hint text only).**
  - `clue` and h1: "Ask what this sentence tells you, and compare it with what the footprints showed before."
  - h3: "The story never says it rained, so that choice has no support. Test each choice that is left."
  - "New way in" (a misreading of "stopped") and "Jada's footprints" then stay live.

**MUST-B2. C09 (core 2.4, choose two): h3's closing test leaves exactly the two keys.**
- **Evidence.**
  - h2's range ("from the moment the cube is wrapped to the end") drops the windowsill.
  - h3 rules out wrapping, then asks "does it show how things turned out **for this team**?" That disposes of "the other teams have only cups of water", the strongest distractor.
  - Two choices are left for a pick-two item.
  - The first re-review counted three live choices after h3. That does not hold once "for this team" is read as disposing of the other teams' water.
- **Fix (hint text only).** h3: "Wrapping the cube is part of the plan, but it happens before anyone knows whether the plan works. Check each other detail: does it prove the plan worked?" The other teams' water then stays tempting, as the item intends.

### SHOULD

**SHOULD-B1. P4 (core 1.2, order): h2 lists the four roles in answer order, and h3 settles the only hard pair.**
- **Evidence.**
  - h2: "Ask which event is the trouble, which one explains it, which one fixes it, and which one shows how it turned out." Each step maps to exactly one role, so the role list gives the full order.
  - h3 ("finds the tomatoes gone before anyone tells her why") resolves trouble against explanation, which is the item's named misconception.
  - Together's `how` steps already narrate the sequence.
- **Fix (hint text only).** h2: "For each event, ask what has to happen before it can happen." Keep h3.
- **C10 has the same h2 shape**, but its two within-group orders still need reasoning, so it is a NOTE.

### NOTE
1. **C07 Part A.** The three Part A distractors are all weak. Part B carries the item, with four live choices.
2. **C08 (hot text).** After the ladder only "You were right about the sock" stays near the key. It is weak but has a hook.
3. **Together P1 and P2.** These are warm-ups whose ladders leave little, as the first re-review noted.
4. **S02.** "Floated away" is the only distractor left.

## 6. Findings: 3.T.T.1.d

### MUST
None.

### SHOULD

**SHOULD-D1. C03 (core 1.3, dropdown): blank 2 is stated by core 1.1 and settled by h3.**
- **Evidence.**
  - P4 (core 1.1) `how2`: "At the end of Lucy's story, the three friends ride together…". C03 blank 2's key is "riding the sled together with her friends". The rule says a `how` must not state a later item's answer.
  - h3 then sends the child to "the last paragraph of 'The Red Sled'" for blank 2. That paragraph supports only the key, since neither distractor (giving the sled to Sofia, Ben riding alone) comes from it.
  - Blank 1 keeps two live choices, so the item does not collapse. That is why this is a SHOULD.
- **Fix (hint text only).**
  - P4 `how2`: "At the end of Lucy's story, it is the best ride of the day."
  - C03 h3: "The story never says Kofi goes to a market, so that choice does not fit the first blank. For the second blank, check what happens to the sled after Lucy decides to share."

**SHOULD-D2. C10 (core 2.5): h1 names a category only the key fits, and h2's range drops the most tempting distractor.**
- **Evidence.**
  - h1: "look past what people do and ask what the custom means". Every distractor is "something that happens", so h1 alone singles out "Mom explains why…".
  - h2's range (Freja's paragraphs before midnight) leaves out the fireworks, the one distractor a child might read as symbolic.
  - h3 removes the wobble. "Checks the clock" is left, with no reason.
- **Fix.** Either change is enough:
  - make h2 "Reread paragraph 3 of Haruto's story. Then reread all of Freja's story.", and have h3 rule out the clock instead;
  - or replace one distractor with a grown-up's words that do not explain a custom: "Mom answers Freja, 'Not yet,' when she asks if it is time." That needs a blind re-solve.

### NOTE
1. **C04.** P4 now shows C04's Part B key sentence as a distractor. P4's `how` never mentions time, as the log discloses. Acceptable.
2. **Together P1.** "Ask friends for help" is the only distractor left, and it is weak.
3. **Similar coverage** is still at warning level: 8 uncovered core items. S02's `like` includes C04 (how long each story lasts). S02 compares setting times, but not duration, so that mapping is a stretch.

## 7. Other checks

- **Gates.**
  - `node verification/check-content.js --all`: **PASS, 0 failures.** It derives Together as 1.a P1–P3; 1.b P1, P2, P6, P3 and P5; and 1.d P1–P3. The only warnings in these lessons are similar coverage (1.a 8, 1.b 10, 1.d 8) and the two older clue warnings (SK-TT1a-T5, SK-TT1d-P1).
  - `python3 verification/readability.py`: every practice and core passage is 124–180 words, FK 1.5–3.6. 1.d p4 (182 words) is a form A passage and was not changed in this batch.
- **Points and DOK.**
  - Every choose-two item is worth 2 (1.a C14 and C15, 1.b C09, 1.d C12 and C13), and so is every EBSR.
  - Both order items with four or more steps are worth 2 (1.b P4 and C10).
  - There is no DOK 1 in core.
- **Separation from form A and form B.**
  - No Together, core or similar item uses a check passage (1.a test p2 and p3; 1.b p2; 1.d p3 and p4).
  - A six-word n-gram scan (`rr-b1a-3/leak.js`) checked all of these lessons' practice, core, similar, addons, teach, learn and passage strings against every form A and form B string, and every check passage, in all lessons. It found only shared directions and strategy wording, such as "This question has two parts…", "Match each detail to the story it is true for", "An action is something a character does" and "A lesson for both stories must fit".
  - I also read every form A and form B key in the three lessons. None is stated or rehearsed as a fact by practice. The shared skills (description hot text, sorting detail types, why a time matters, comparing lessons) are practice by design.
- **Topic reuse.** I grepped all of js/data/lessons for the passage topics. Tybee, quilt, mural, custodian and goat appear elsewhere only as incidental words, in grammar sentences or a T-C or T-TS draft. No topic, title or key fact is reused.
- **Facts.** No passage text changed in §10, so I relied on the earlier source checks (B1 1A §5; first re-review §3 for Tybee).
- **Teaching.** No teach or learn text changed in §10. The first re-review's §7.3 judgment stands.

## 8. Verdicts

| Lesson | Blind solve | Verdict | To clear |
|---|---|---|---|
| **3.T.T.1.a** | 21 of 21 | **CHANGES REQUIRED** | MUST-A1 (C03: h2 and h3, text only) |
| **3.T.T.1.b** | 23 of 23 | **CHANGES REQUIRED** | MUST-B1 (C05: `clue`, h1 and h3, text only), MUST-B2 (C09: h3, text only) |
| **3.T.T.1.d** | 21 of 21 | **ACCEPTED** | No MUST. SHOULD-D1 (P4 `how2` and C03 h3) and SHOULD-D2 (C10) are strongly recommended |

- **What is solid.**
  - Every key in all 65 items is defensible.
  - All nine earlier MUSTs across the two re-reviews are cleared.
  - All five §10 fixes for the second re-review's MUSTs work on the whole-ladder test, not just in the letter.
  - Most items now leave two or more choices live.
- **What remains.** Every remaining MUST is on an item that §10 did not touch and that earlier reviews passed before the "live" definition existed. The pattern is the same each time: h2 or h1 points to the key's content, and h3 removes the last real distractor.
- **The three MUST fixes change hint text only**, so they need no blind re-solve. A ladder-only check of 1.a C03 and 1.b C05 and C09 is enough. If SHOULD-A1, A3 or D2 is taken with a new distractor, that item needs a blind re-solve.
