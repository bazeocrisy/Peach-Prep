# B1 fourth re-review (b1a): 3.T.T.1.a and 3.T.T.1.b, final check

**Role:** independent re-reviewer. I had not seen these lessons, the author log or any earlier review before this check.
**Scope:**
- the blind solve of 1.a C04 (the one item whose choices changed in §11);
- a whole-ladder audit of 1.a C03, C04, C05, C08 and S03, and 1.b C05, C09 and P4;
- a check of B1-rereview-b1a-3.md against §11 of B1-b1a-author-log.md.

3.T.T.1.d was already ACCEPTED. I checked its §11 changes only to confirm the log, and I give it no new verdict.
**Rules applied:** REVIEWER-BRIEF.md, CONTENT-BRIEF.md, and both rule sections at the end of AUTHOR-BRIEF.md, including the definition of a "live" choice.
**Read-only:** this is the only file I wrote in the repo. My scratch files are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1a-4/`. I ran no git and started no server.

## 1. Blind solve: 1.a C04 (SK-TT1a-C04)

**Method.**
- `rr-b1a-4/load.js` is the earlier reviewers' three-line loader, which is code only.
- `rr-b1a-4/blind.js` is my own printer. It printed passage p1 and the item with seeded shuffled choices. It strips `correct`, `answer`, `why`, `hints`, `how`, `clue` and `misconception`.
- I saved my answer to `rr-b1a-4/answer.txt` (timestamp 08:59:44 UTC) before printing the keyed item.

**My answer:** "Soft yellow light glowed on the ceiling like a tiny moon." It is the only choice that pictures the room once the flashlight's light is on the ceiling.

**Key:** the same. **Agreement: 1 of 1.**

**How blind was it?** It was fully blind for C04.
- While listing the data shapes, a 300-character dump showed the first choice of C03, which is C03's key. I had not yet seen C03's ladder, and the slip told me nothing about C04.
- The item was easy to solve unaided. §2 covers whether the ladder makes it easier still.

## 2. Whole-ladder audit

**Method.**
- `rr-b1a-4/ladder.js` printed each item with its `clue`, h1–h3, choices, key, `how` and `why`. For 1.b P4, the hints come from `addons`.
- For every item the `clue` is the same as h1.
- In the tables, `*` marks the key, "out" means a hint's logic disposes of the choice, and "weak" means a child would have little real reason to pick the choice.

### 3.T.T.1.a

| Item | h1 | h2 | h3 | Live after h3 | Result |
|---|---|---|---|---|---|
| **C03** | All four are about Abuela | "Words after 'used to sing'" gives "as a girl in Puerto Rico". That supports the key (childhood) and homesick (Puerto Rico). TV (¶3) and thunder (¶5) are weak | Thunder out. "Test against paragraph 4" also leaves TV with no support | key*, homesick. The child still has to make the "shares it with Mateo" link alone | **pass** |
| **C04** | "Paints a picture of the room": the blanket line is an action, so it is weak. The dialogue line is weak | Neutral: "fit right after its last sentence" | Dialogue out. "Picture the room itself" leans against the guitar | key*, guitar scratch (a description of a thing in the room) | **pass**, NOTE-1 |
| **C05** | "What is different after he acts": weather out | Pond and freeze. Nothing is out | Strongest kicker out | key*, "wins the game". To rule it out, the child must read "sailed over the goal" (a miss) and "froze" (not a cheer). The tie with one minute left keeps it tempting | **pass** |
| **C08** | All four | Neutral: "reread what he says in ¶6" | "Stop reading sharks" out | key*. "Upset" is weak: it is contradicted by "grinned" and "lucky", and the text gives no hint of upset. "Forgot" has no hook | **pass**, NOTE-2 |
| **S03** | "What changes after he speaks" | "Find the problem first. Then ask what changes because of Marco's words." "Doesn't want to paint" is weak | Playground out | key*, "starts the problem". It stays live only as the misconception, because h2's order (problem first, then his words) leans against it | **pass**, NOTE-3 |

### 3.T.T.1.b

| Item | h1 | h2 | h3 | Live after h3 | Result |
|---|---|---|---|---|---|
| **C05** | "Compare with what the footprints showed before": all four. It no longer says the footprints are the rabbits' | The ¶2 footprints where tomatoes were missing. "Jada's footprints" weakens: the prints are "tiny" and tied to the missing tomatoes | Rain out | key*, "new way in" (the named misconception: footprints back at the end read as a new problem). "Jada's" is weak | **pass**, NOTE-4 |
| **C09** (pick 2) | Proof, not the plan | Range from the wrapping to the end: windowsill out | Wrapping out. "Does it prove the plan worked?" no longer disposes of the other teams | 2 keys*, "other teams have only cups of water". That gives 3 live choices for 2 picks, and the contrast stays tempting | **pass** |
| **P4** (order, 4 steps, 2 pts) | Strategy only, so no position is settled | A question to ask of each event, so no position is settled | Settles **one** position: 4 = "every tomato is still on its vine" | Positions 1–3 are open. A/B is the named misconception (the explanation before the trouble), and it stays live. Placing C after A and B is the skill h2 teaches, not a hint giving it away | **pass** |

**Result.** Every audited item keeps at least two live choices or positions after h3. No hint settles more than one position, and no hint points to the key's own content. **No MUST.**

**Against Together and earlier items in the set.**
- **1.a C04's new distractor.** "Scratch" appears nowhere else in T-T1.js, and neither does the key phrase "tiny moon" (I grepped all of js/data/lessons). P4's `how`, earlier in set 1, still labels the blanket line an action. That disposes of a weak distractor, not the key, and it was already a NOTE in the third re-review.
- **1.a C03.** C03's `how` and `why` do not touch C04 or C05.
- **1.b C05 and P4.** They are rehearsed by Together and P7's `why`, which state the conclusion and narrate the sequence. This was accepted as a NOTE in three reviews. I agree, because neither one gives this sentence's purpose or the order.

## 3. Earlier findings: are they cleared?

I judged each finding from the lesson data, not from the log.

### The three MUSTs from the third re-review

| Finding | Item | Data now | Status |
|---|---|---|---|
| MUST-A1 | 1.a C03 | h2 is "Look closely at the words after 'used to sing' in that sentence." with "who is listening now" dropped. h3 rules out the thunder | **Cleared.** Homesick stays live |
| MUST-B1 | 1.b C05 | The `clue` and h1 drop "about the rabbits". h3 rules out rain | **Cleared.** "New way in" stays live |
| MUST-B2 | 1.b C09 | h3 ends "does it prove the plan worked?" with "for this team" dropped | **Cleared.** The other teams' water stays live |

### SHOULDs

| Finding | Item | Data now | Status |
|---|---|---|---|
| SHOULD-A1 | 1.a C04 | The distractor is now "Abuela's old guitar had a long scratch across the front." h2 is neutral. The `how` and `why` follow | **Cleared.** Blind re-solve done (§1) |
| SHOULD-A2 | 1.a C05 | h3 rules out "strongest kicker", not "wins the game" | **Cleared** |
| SHOULD-A3 | 1.a C08 | h2 is "Reread what Mr. Webb says in paragraph 6." | **Cleared in the letter.** It is the first of the two fixes the third re-review said were each enough. See NOTE-2 |
| SHOULD-A4 | 1.a S03 | h2 is the reviewer's wording. h3 rules out the playground | **Cleared** |
| SHOULD-B1 | 1.b P4 | Reworked twice (§11.2, then §11.7). h3 now settles one position | **Cleared.** It also meets "settle at most one step" |
| SHOULD-D1 | 1.d P4 `how2` and C03 h3 | `how2` is "it is the best ride of the day". C03 h3 asks what happens to the sled after Lucy shares | **Cleared.** Blank 2 is still effectively settled by h3, but it is the one blank allowed, and blank 1 keeps two live choices |
| SHOULD-D2 | 1.d C10 | h2 covers all of Freja's story, which brings the fireworks back. h3 rules out the clock | **Cleared.** The key and the fireworks are live |
| NOTE-3 (1.d) | S02 `like` | Now C06 and C11 | **Done** |

### Is §11 of the author log accurate?

**Yes.**
- Every row of §11.1, §11.2 and §11.7 matches the data word for word.
- No key, passage, step or option changed apart from the one C04 choice the log declares.
- §11.5 lists the findings left open (similar coverage, and NOTE-level items) and says why, as the post-re-review rule asks.
- The §11.6 gate claim holds. `node verification/check-content.js --all` gives PASS, 0 failures. The only warnings in these lessons are similar coverage (1.a 8, 1.b 10, 1.d 9) and the older clue warnings on SK-TT1a-T5 and SK-TT1d-P1.

**Two small overstatements in §11.3.** Neither one changes a result, because in each case two live choices remain without the disputed one.
1. **1.a S03.** The log says h2 puts "doesn't want to paint" out. h2 does not dispose of it. It was weak from the start.
2. **1.b C05.** The log counts "Jada's footprints" as live. After h2, which ties the "tiny" footprints to the missing tomatoes, it is weak.

## 4. Findings

### MUST
None.

### SHOULD
None.

### NOTE
1. **1.a C04: prompt and h3 lean toward the key.**
   - The prompt says "once the flashlight is set up", and h3 says "the room itself". Both lean toward the light on the ceiling.
   - The guitar scratch stays live as a description of the wrong thing, so the item passes.
   - Optional: drop "once the flashlight is set up" from the prompt. That would need a blind re-check.
2. **1.a C08: the item now rests on weak distractors, not on the hints.**
   - The SHOULD-A3 fix the author chose stops h2 from pointing at the grin. But "upset" still has no real support in ¶6, and "forgot" has none anywhere.
   - In practice the key is close to the only choice before any hint is read.
   - Optional: the third re-review's second fix would give the item a real near miss. It replaces "forgot" with a ¶7 misreading, such as "He wants Nadia to hurry back to class with the new book." That would need a blind re-solve.
3. **1.a S03: "starts the problem" is the only live distractor.** It survives as the named misconception. This is a similar item, so it is acceptable.
4. **1.b C05: "Jada's footprints" is weak after h2.** The item passes on the key and "new way in". The log should not count Jada's footprints as live.

## 5. Verdicts

| Lesson | Blind re-solve | Verdict | Remarks |
|---|---|---|---|
| **3.T.T.1.a** | C04 1 of 1 | **ACCEPTED** | MUST-A1 and SHOULD-A1 to A4 are cleared. NOTE-1 to 3 are optional |
| **3.T.T.1.b** | No choices changed, so none was needed | **ACCEPTED** | MUST-B1, MUST-B2 and SHOULD-B1 are cleared. NOTE-4 is a log wording issue only |

3.T.T.1.d stays ACCEPTED. Its two SHOULDs are now cleared as well.
