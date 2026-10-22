# B1 third re-review (b1b-3): TS-PS

**Reviewer:** independent re-reviewer. I wrote none of this content, none of the earlier reviews and none of the fixes. This file is the only file I wrote in the repo. My scratch files are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1b-3/`. I ran no git commands and started no server.

**Scope (as assigned):** the TS-PS block of `js/data/lessons/T-TS.js` only.
1. Blind solve of SK-TSPS-P5 (core 1.1, by `ref`) and SK-TSPS-S03.
2. Whole-ladder audit of P5, C10 and S03, plus a check that the P5 change does not affect the Practice Together items or the core items that use P5's passage (p1).
3. §10 of B1-b1b-author-log.md checked against B1-rereview-b1b-2.md and the data.

**Rules applied:** REVIEWER-BRIEF.md; both rule sections at the end of AUTHOR-BRIEF.md ("after the B1 reviews" and "after the B1 re-reviews"). Severity follows B1-rereview-b1b-2.md: **MUST** = after the clue and hints 1 to 3 only the key stands, or an earlier item's `why`/`how` states a later item's answer. **SHOULD** = a hint is too pointed, a rule is broken, or a distractor is a dud, but a real competitor survives. **NOTE** = acceptable, recorded.

## 0. Blind solve

**Method**
- `load.js` evals `T-TS.js` through a stub `PP.addLesson` and returns the TS-PS lesson object.
- I first printed only the lesson's top-level keys and the item ids (`practice`, `core` map, `similar`). The first print of `core` was truncated JSON that showed set 1 item 2 (C02) in full. C02 is not one of the solve items and shares no choices with them.
- `blind.js` (my own) prints P5 with passage p1, and S03 with its boxed `stem`. Choices are shuffled with a seeded LCG (seed 20261022). It strips `correct`, `why`, `hints`, `how`, `clue`, `like` and `misconception`. Neither item has a figure. Hints and how for P5 live in `addons`, which the script never touched.
- I wrote `answers.json` and timestamped it (`answers.saved.time`) before running `cmp.js`.

**Result: 2 of 2 agree (100%).**

| Item | My answer | Key | Agree |
|---|---|---|---|
| SK-TSPS-P5 | "The ants could still smell the food and find it." | the same | yes |
| SK-TSPS-S03 | "Fix the crack in the ceiling above the door." | the same | yes |

**How blind was it?** Blind for the keys. I did not open the lesson source, the author log or either earlier re-review before saving my answers. I had read only the code of the previous reviewer's three-line `rr-b1b-2/load.js` (to copy the loading pattern). But it was not naive: the brief named these items as revised, and both are easy literal-to-short-inference items for an adult, so 2 of 2 says little about discrimination. The ladder audit below is the more useful evidence. My solve notes: in P5, "only a little way" was the one distractor I had to check against ¶4 ("the other side of the kitchen"). In S03, "wipe their wet shoes" was the only distractor I weighed.

## 1. Verdict

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| TS-PS | **ACCEPTED** (apply S-1 and S-2 in the next pass) | 0 | 2 | 5 |

The b1b-2 MUST (M-1, P5) and both SHOULDs (S-1, C10; S-2, S03) are cleared. Both new SHOULDs are side effects of the §10 edits: one is a cross-item narrowing from P5's new `why`/`how`, and one comes from the S03 distractor swap that b1b-2 asked for. Neither leaves only the key, so neither blocks the lesson.

## 2. Earlier findings: status

| Finding (b1b-2) | Status | Evidence now |
|---|---|---|
| **M-1** (MUST), P5 hint 2 sorted every distractor | **Cleared** | Distractors are now "Jamal moved the bowl only a little way." (¶4 misread), "The ants were still on the wet paper towel." (¶3 try mixed in) and "Pepper pushed the bowl back to its spot." Hint 2 is "Reread paragraphs 3 and 4." and that region holds two wrong choices (towel ¶3, little way ¶4), so the post-B1 hint-2 rule is met. Hint 3 rules out Pepper only. See §3 |
| **S-1** (SHOULD), C10 hint 2 | **Cleared** | Hint 2 is "Reread paragraphs 1 to 3." All four Part B sentences are in ¶1 to ¶3 (¶1 "every time she jumped in…", ¶2 key and "Then she watched…", ¶3 "But the new ropes…"), and three Part A sources are there (ankles ¶1, cause ¶2, old ropes ¶3). See §3 |
| **S-2** (SHOULD), S03 dud | **Cleared as asked** | "Paint the ceiling" is replaced with "Ask everyone to wipe their wet shoes outside the door." That is a real wrong-cause competitor. But the swap creates S-2 below |
| N-1 to N-4 | Not acted on, as the reviewer allowed | Unchanged data (C06 to C09 are identical to the b1b-2 snapshot; my `diffprev.js` against `rr-b1b-2/ts.txt`) |

**§10 claims checked against the data.** `diffprev.js` shows that, of the items b1b-2 dumped, only P5 (choices, why, hints, how), C10 (hints) and S03 (choices, how, why) changed. Every change listed in §10.1 and §10.2 is present and worded as claimed, including the new P5 `misconception`. The optional TC2a C14 `why` change ("only the narrator's claims") is in T-C.js line 1614; I did not review that lesson. §10.3 lists what was not acted on. The log claims no fix that was not made.

**Gate:** `node verification/check-content.js --all`: PASS, 0 failures, 27 warnings (my run). For TS-PS: the similar-coverage warning, and the info line "Practice Together = SK-TSPS-P1, P2, P3, P4, P6".

## 3. Whole-ladder audit

### SK-TSPS-P5 (core 1.1, `ref`): passes
- **Clue = hint 1:** "A try fails for a reason. The story usually tells what went wrong after the try." A strategy; it removes nothing by itself.
- **Hint 2:** "Reread paragraphs 3 and 4." Holds the key's source and two wrong choices.
- **Hint 3:** removes Pepper (¶2 "just sat and stared").
- **Left after hint 3:** the key, "only a little way" and "paper towel". "Only a little way" is a real competitor for a child who reads the first sentence of ¶4 and not the second. "Paper towel" is weak (it does not explain why the *bowl move* failed), but it targets the named misconception (mixing up the two tries). The child must still read what happens after the try, which is the skill. One step settled at most. Pass.
- Points 1, DOK 2, `std` 3.T.SS.1.a + 3.T.T.1.b: correct. `how` is accurate against p1.

### SK-TSPS-C10 (core 2.5, EBSR, 2 points, DOK 3): passes
- **Clue = hint 1** ("the thing it changed was not the real trouble") removes Part A "old ropes too worn out".
- **Hint 2** names ¶1 to ¶3: lawful, as above.
- **Hint 3** removes Part A "stand too close" (true: p4 never says it) and, for Part B, the two sentences that show something going wrong ("every time she jumped in…", "But the new ropes tangled…").
- **Left:** Part A, the key and "Amari's sore ankles make her trip". That reverses ¶1's "the ropes… slapped her ankles", so it is a real competitor. Part B, the key and "Then she watched Imani and Kiara turn the empty ropes." That is the investigation, not the cause, and it is the item's named misconception. Neither part is settled by the ladder. Pass.

### SK-TSPS-S03 (similar, like C14): passes the "only the key" test, but see S-2
- **Clue = hint 1** ("fixes the real problem, not only what the problem causes") argues against mats and mopping.
- **Hint 2:** "Reread the last two sentences of the story."
- **Hint 3:** removes mopping.
- **Left:** the key, "two big mats" and "wipe wet shoes". Shoes is a real wrong-cause competitor (the puddle is "just inside the school's front door"). Mats is a weak repeat of the failed try. Pass on the whole-ladder rule.
- `like: ["SK-TSPS-C14"]` is honest: C14 is the same "plan that fixes the real problem" task (raccoons/cans), with the same "bigger version of a failed try" distractor.

### Does the P5 change affect Practice Together or other p1 core items?
- **Practice Together** (P1, P2, P3, P4, P6, per check-content): none of them was edited in §10, and P5 is not in Together. No Together item pre-answers P5's new key. P4 (Together) states that moving the bowl failed ("Jamal tried moving the bowl, but the ants found it again"), but not why; the smell is P5's alone. P2 (Together) makes the paper-towel try salient, which makes P5's towel distractor easier to reject, but it does not answer P5. No Together item states "other side of the kitchen" versus "a little way". Pass.
- **Passage p1** is byte-identical to the baseline `T-TS.orig.js`.
- **Core 1.2, SK-TSPS-C02** ("How does Grandma help solve the problem?") uses p1 and comes right after P5. This is affected: see S-1.
- S01's `like` still includes P5. That remains honest (why a try failed, on a new text).

## 4. Findings

### MUST
None.

### SHOULD

**S-1. SK-TSPS-P5 → SK-TSPS-C02 (set 1, items 1 → 2): P5's new `why` and `how` remove two of C02's three distractors.**
- **Evidence:**
  - C02's distractors are misattributions: "She moves the food bowl to the other side of the kitchen.", "She wipes the ants away with a wet paper towel." and "She pours water into the pan all around the food bowl."
  - P5's new `why` (shown as feedback after P5) says "Jamal moved the bowl to the other side of the kitchen, not a little way". That is C02's distractor wording with Jamal as the subject.
  - P5's new `how` step 4 says "The wet paper towel was **his** first try". That attributes the towel to Jamal as well. (`how` step 1, "Jamal's try in paragraph 4 is moving the bowl", predates §10.)
  - C02's own hint 3 then removes "pours water".
  - So a child who has read P5's `why` has two C02 choices left after C02's hint 3. A child who also opened P5's Show me how has only C02's key left.
  - This is narrowing, not a stated answer, and the facts are plain in p1 ("Jamal tried wiping…", "he tried moving…"). That is why it is SHOULD and not MUST. But the post-B1 rule says earlier items must not give away later ones in the same set, and the §10 edit is what made the chain complete.
- **Fix (`why`/`how` wording only):**
  - P5 `why`: "…The bowl went to the other side of the kitchen, not a little way; the paper towel was an earlier try; and Pepper only sat and stared."
  - P5 `how` step 4: "The bowl went to the other side of the kitchen, not a little way. The wet paper towel was the first try, in paragraph 3. Pepper only sat and stared."
  - Optionally, also make `how` step 1 "The try in paragraph 4 is moving the bowl to the other side of the kitchen."

**S-2. SK-TSPS-S03: after the paint swap, hint 2 names the sentences that hold the key and no wrong choice.**
- **Evidence:**
  - Rule (after the B1 reviews): "Before a hint names a paragraph, check that at least one wrong choice also comes from that paragraph. If none does, the hint is a giveaway."
  - Hint 2 names the last two sentences ("Then she looked up." / "Rain was dripping through a small crack in the ceiling, right above the door."). With paint gone, no distractor comes from them. Mats and mopping come from sentences 2 and 3; shoes comes from the door in sentence 1.
  - The key also echoes the last sentence ("crack in the ceiling… above the door" → "Fix the crack in the ceiling above the door."), and no other choice mentions the ceiling or the crack. A word-matching child reaches the key from hint 2 alone.
  - Shoes still survives as a real competitor for a child who thinks the water comes in on shoes, so this is SHOULD, not MUST.
  - This is the side effect of b1b-2's own suggested swap. b1b-2's alternative (keep paint, have hint 3 rule it out) avoided it.
- **Fix (either):**
  - Hint 2: "Reread the story from the custodian's first try to the end." That region (sentences 2 to 5) holds mats and mopping as well as the cause. Keep hint 3 as it is.
  - Or replace "Put down two big mats instead of one." (a weak repeat of the failed mat) with a choice sourced in the last two sentences that treats only the effect, for example "Put a bucket under the crack to catch the drips." That fits hint 1's test ("not only what the problem causes") and keeps hint 2 lawful. Mopping still carries the "bigger failed try" misconception.

### NOTE

- **N-1. P5 key echo.** "The ants could still smell the food and find it." still shares *smell*, *food* and *find* with ¶4 "followed the smell of the food and found it again". It is now a paraphrase, and "only a little way" shares *moved the bowl* with the first sentence of ¶4, so word matching alone does not settle it. Acceptable for DOK 2.
- **N-2. P5 "paper towel" distractor is weak.** After hint 3 it is the lesser of the two survivors. It is acceptable because it is anchored to the item's named misconception and "only a little way" carries the item.
- **N-3. P5 `misconception`** ends "The reason this try failed is told right after it." That points to the key sentence, but it renders in the Show me how box (player.js:319), after the steps that state the answer, so it is no extra giveaway.
- **N-4. C10 Part B, hint 3** removes two of four Part B choices in one clause. Two remain and Part A is not settled, so it is within the rule.
- **N-5. Author log §2 and §6 are stale.** The item table (lines 75 to 84) and §6 (line 216) still say P4, P5 and P6 are core refs as items 1, 2 and 4, and list C10 as an MC on "a helper". The data has only P5 as a ref (core 1.1), Together is P1 to P4 plus P6, and C10 is an EBSR on the real cause. These are descriptions, not fix claims, so they do not breach the "claim only fixes made" rule. But a reader of the log should not trust §2 for the current shape; a one-line pointer to the later sections would help.

## 5. Summary for the lead

| Lesson | MUST | SHOULD | Verdict |
|---|---|---|---|
| TS-PS | none | S-1: P5's new `why`/`how` attribute both tries to Jamal, which (with C02's hint 3) can settle C02; S-2: S03 hint 2 now names sentences that hold the key and no wrong choice | **ACCEPTED**, with S-1 and S-2 as small wording/choice fixes for the next pass |

- **Blind solve:** 2 of 2 (100%). Blind for the keys; not naive, since the items were known to be revised and are easy for an adult.
- **b1b-2 M-1, S-1, S-2:** cleared. The §10 log is accurate.
- **P5 → Together:** no effect. **P5 → C02:** S-1.

**Files** (all in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1b-3/`): `load.js`, `blind.js`, `answers.json`, `answers.saved.time`, `cmp.js`, `diffprev.js`.
