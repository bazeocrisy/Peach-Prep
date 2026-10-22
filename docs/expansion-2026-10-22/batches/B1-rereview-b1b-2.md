# B1 second re-review (b1b-2): TS-PS and 3.T.C.2.a

**Reviewer:** independent re-reviewer. I wrote none of this content, none of the earlier reviews and none of the fixes. This file is the only file I wrote in the repo. My scratch files are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1b-2/`. I ran no git commands and started no server.

**Scope (as assigned):**
- **Blind re-solve:** TS-PS C06, C09 and S03; 3.T.C.2.a C14 and Together P3.
- **Whole-ladder audit:** TS-PS C06, C08, C09, C10, S03 and P5; 3.T.C.2.a C06 and C14. I also checked that the TS-PS set 2 chain is closed, and that the C12 sample quotes the poem accurately.
- **Earlier fixes:** B1-rereview-b1b.md, checked against §9 of B1-b1b-author-log.md.

**Rules applied:**
- REVIEWER-BRIEF.md;
- AUTHOR-BRIEF.md, both rule sections ("after the B1 reviews" and "after the B1 re-reviews");
- the severity scale used in B1-rereview-b1b.md. **MUST** means that after the clue and hints 1 to 3 only the key stands, or that an earlier item's `why`/`how` states a later item's answer. **SHOULD** means a hint is too pointed or a distractor is a dud, but a real competitor survives.

## 0. Blind re-solve

**Method**
- `load.js` loads `T-TS.js` and `T-C.js` through a stub `PP.addLesson`.
- `struct.js` printed only item ids, types and field names.
- `blind.js` is my own script. It prints the passages the items use and the five items. Choices and dropdown options are shuffled with a seeded PRNG (seed 90210). It prints no `correct`, `answer`, `why`, `clue`, `hints`, `how` or `misconception`. None of these items has a figure.
- I wrote my answers to `answers.json`, copied them to `answers.saved.json`, and timestamped them in `answers.saved.time` (22:18:34 UTC). Only then did I run `cmp.js`.

**Result: 5 of 5 agree (100%).**

| Item | My answer | Key | Agree |
|---|---|---|---|
| TS-PS C06 | "find out why the ropes tangle" / "buy a brand-new pair of ropes" | the same | yes |
| TS-PS C09 | "The ropes were never the real trouble." | the same | yes |
| TS-PS S03 | "Fix the crack in the ceiling above the door." | the same | yes |
| TC2a C14 | "The narrator could get better by practicing, as the coach says." | the same | yes |
| TC2a P3 | A: "friendly and helpful" / B: "He told her which ones had all their pieces." | the same | yes |

On its first run, `cmp.js` reported C06 as DISAGREE. That was a bug in my script: it compared option strings with the slot `answer` index. Looking the indices up gives the two strings above, which match my answer.

**How blind was it? Blind for the keys, but not naive.**
- I did not open the lesson source, the author log or the earlier re-review before I saved my answers.
- I did read the code (not the output) of the previous reviewer's `load.js` and `blind.js` in `rr-b1b/`, to see how the data loads. I wrote my own `blind.js`. I did not open `rr-b1b/blind.txt`, `full.txt`, `answers*` or `solve-notes.txt`.
- These are re-solves of items that have been revised in response to known findings. The brief listed which items changed, so I knew they were the ones under scrutiny.
- Close call in my notes: in C06 slot 0, "chant a rhyme while the turners swing" is a real near-miss. Kiara's "Let's try it your way" (¶4) makes the chant Amari's way. Only the stem's "When the ropes first tangle" pins slot 0 to ¶2. The item is defensible, and the distractor is a good one.

## 1. Verdicts

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| TS-PS | **CHANGES REQUIRED** | 1 (P5 ladder) | 2 (C10 hint 2, S03 ladder) | 4 |
| 3.T.C.2.a | **ACCEPTED** | 0 | 0 | 2 |

The earlier MUST (R-M1, C09) is cleared. The TS-PS MUST is new to this round. It is in set 1 item 1 (the P5 ref), whose hints were not changed in §9, and the new whole-ladder rule catches it. The previous re-review listed P5 under "Ladders that pass".

## 2. Earlier findings: status

| Finding | Status | Evidence now |
|---|---|---|
| **R-M1** (MUST), C09 answered by C06 + C07 | **Cleared** | C09 now asks what the failed try *shows*. C06 and C07 give the premises (new ropes were Kiara's plan; they failed), but none of C09's distractors ("too short", "jump in later", "more practice") is killed by them. The key is the inference itself. See §5 for the chain |
| R-S1, C06 swap/dud/stem cue | **Fixed** | Each slot has its own distractors. Slot 0: the chant (placed too early) and the new ropes. Slot 1: "watch the turners" (Amari's action) and "smoother driveway". The dud is gone. The stem is "When the ropes first tangle". Hint 2 is "paragraphs 1 to 4" |
| R-S2, S03 hint 2 | **Fixed as asked**, but see S-2 below | Hint 2 is "Reread the last two sentences". The paint distractor was added, and DOK is now 2. The ladder still collapses |
| R-S3, TC2a C14 distractor D | **Fixed** | D is "The ball came too fast for anyone on the team to stop." It is a real competitor (§4) |
| R-S4, TC2a P3 "at first" | **Fixed** | The Part A prompt is "What can a reader tell that the narrator does not say?" |
| R-S5, TC2a C06 hint 2 | **Fixed** | The wording R-S5 suggested was adopted word for word |
| R-S6, TC2a C12 misquote | **Fixed** | Verified in §4 |
| R-N5, P5 `clue` | **Fixed** | The clue now equals hint 1. But see M-1: the ladder itself fails |
| R-N10, TC2a C03 DOK | **Fixed** | DOK 1 |
| R-N1, C10 hint 2 | **Not changed.** I do not accept the author's reason (S-1) | |

**§9 claims:** every change listed in §9.1 and §9.2 is in the data, and I checked each one. §9.3 lists the notes that were not acted on, with reasons. The log claims no fix that was not made.

**Gate:** `node verification/check-content.js --all` gives PASS, 0 failures (my run). The only warnings in these lessons are the expected similar-coverage notices.

## 3. Findings: TS-PS

### MUST

**M-1. SK-TSPS-P5 (core 1.1): hint 2 states a test that every distractor fails, so after hint 2 only the key stands.**
- **Evidence:**
  - The prompt is "Why didn't moving the bowl solve the problem?"
  - The distractors are "Pepper pushed the bowl back", "The bowl was too heavy for Jamal to lift" and "Grandma wanted the bowl to stay in place". None of these is in p1.
  - Hint 2: "For each choice, look for it in the story. A reason the story does not tell cannot be the answer." Applied as written, it removes all three distractors at once. Only the key is told in the story.
  - The clue and hint 1 ("The story usually tells what went wrong after the try") and hint 3 ("Test each choice … against what happens after the try") then point to the very next sentence: "But the ants just followed the smell of the food and found it again." The key repeats that sentence almost word for word ("The ants followed the smell of the food").
  - The skill being assessed (why a try fails) is never needed. The item becomes a literal "which choice is in the story" check.
  - The previous re-review passed this ladder. Under the post-re-review rule ("read hints 1–3 and the clue as one set"), it fails.
- **Fix:**
  - Make at least two distractors story-grounded wrong reasons, so that "is it in the story?" no longer sorts them. For example:
    - "Jamal moved the bowl only a little way." It misreads "the other side of the kitchen".
    - "The ants were still on the wet paper towel." It mixes in the first try from ¶3.
  - Hint 2: "Reread paragraphs 3 and 4." Both tries are there, and so are the new distractors.
  - Hint 3 should rule out one choice only (Pepper is fine), without "against what happens after the try".

### SHOULD

**S-1. SK-TSPS-C10: I do not accept the reason for leaving hint 2 alone, and the §9 change to hint 3 now settles Part A.**
- **The ladder now:**
  - The clue and hint 1 are "When a try does not work, the thing it changed was not the real trouble." That removes Part A "old ropes too worn out". It is also C09's key, restated as a rule.
  - Hint 3 now removes "turners stand too close".
  - The only Part A distractor left is "Amari's sore ankles make her trip". It comes from ¶1 ("slapped her ankles").
  - Hint 2 sends the child to ¶2, which states the key ("Imani's hands swung fast, but Kiara's swung slowly") and holds no Part A distractor.
  - So Part A is settled by the ladder. Part B still has two competitors in ¶2 (the key and "Then she watched…"). Hint 3's "cause, not something going wrong" removes the other two.
  - That leaves one part settled, which is within the "at most one blank" rule, so this is SHOULD and not MUST. Before §9, hint 3 removed the same choice that hint 1 does, so three Part A choices survived. §9 made Part A weaker.
- **The author's reason (§9.3):** "paragraphs 2 and 3" would name ¶3, which holds only one Part B choice.
  - That reads "every place a hint names must hold at least two Part B choices" paragraph by paragraph. The rule exists to stop a hint pinning one Part B choice. A hint that names a two-paragraph region does not pin one.
  - On the per-paragraph reading, hint 2 also breaks the first rule added after the B1 reviews. That rule says a named paragraph must hold at least one wrong choice, and ¶2 holds no wrong Part A choice. The author satisfied one rule by breaking the other.
  - The per-paragraph reading also forbids every multi-paragraph hint for C10, since ¶1 and ¶3 each hold one Part B choice. A reading that leaves no lawful hint is too narrow.
- **Fix:**
  - Hint 2: "Reread paragraphs 1 to 3." The region holds all four Part B choices and three Part A sources (ankles ¶1, cause ¶2, old ropes ¶3).
  - Or keep hint 2, and make hint 3 rule out "sore ankles" instead of "stand too close". Then "stand too close", a misreading of the ¶2 scene, competes inside ¶2.

**S-2. SK-TSPS-S03: the ladder still leaves the key and a dud.**
- **Evidence:**
  - Choices: fix the crack (key); "two big mats instead of one"; "mop every few minutes"; "paint the ceiling".
  - Hint 1 ("fixes the real problem, not only what the problem causes") is the item's skill, and it removes both mats and mopping.
  - Hint 3 removes mopping explicitly, with a reason ("a try that already failed, so [doing it] more often would not stop the puddle"). That reason applies word for word to "two big mats", which is a bigger version of the failed bigger mat.
  - That leaves paint, and paint "would not close the crack" (the item's own `how`). In my blind solve I marked paint as the weak choice before I saw the key.
  - The earlier reviewer suggested paint. It touches the ceiling, but for a grade 3 reader it does not compete with "fix the crack".
  - I keep this at SHOULD, not MUST, because the child must still carry hint 3's reason over to mats. But the item no longer discriminates.
- **Fix:**
  - Replace paint with a wrong-cause distractor that a careless reader would pick. For example: "Ask everyone to wipe their wet shoes outside the door." It assumes that the water comes in on shoes, and the last two sentences refute it.
  - Or have hint 3 rule out paint, not mopping. Mats and mopping then both stay as "bigger failed try" competitors.

### NOTE

- **N-1. C06 hint 3** says "The chant comes in paragraph 4, after the new ropes". That tells the order of the try and the solution, which is half the C07 sort (set 2 item 2). It does not say which is the solution, and the passage order gives the same information. It is acceptable.
- **N-2. C06:** "buy a brand-new pair of ropes" is an option in both slots. A child who settles slot 1 first can exclude it from slot 0 if they assume no repeats. Slot 0 still has the chant to beat, so the item is fine.
- **N-3. C08:** hint 2 ("Reread paragraph 1") is lawful, because the Ms. Bell distractor comes from ¶1. After hint 3, the competitors are "too old" (Kiara's ¶3 belief) and Ms. Bell, which ¶1 contradicts. "Too old" is a real competitor. Ms. Bell is weak. It passes.
- **N-4. C09:** the ladder passes. After hint 3, "jump in later" and "more practice" survive. Neither is ruled out by "paragraphs 2 and 3" without the child making the inference. The DOK 3 label is honest.

## 4. Findings: 3.T.C.2.a

**C14 ladder: passes.**
- Hint 2 ("what the narrator admits after the word Well") names a sentence that holds evidence for two choices. "Tia passed to me two times" refutes A. "But the ball came too fast" is the source of the new D.
- Hint 3 removes "best player".
- The key and D survive. D is the narrator's excuse taken at face value, which is the misconception the item names, so it is a real competitor.

**C06 ladder: passes.**
- Hint 2 (compare how the first paragraph of each part "talks about the boy") strongly cues key 1. It settles one of the two picks.
- Hint 3 removes "uses the word I".
- Key 2 must still be chosen over "a sparrow story" and "the same Saturday morning", using hint 3's test ("true only if someone new is telling"). That is the inference the item assesses.
- That is one blank settled, which is within the rule.

**C12 sample: accurate.** I checked it line by line against p5 "Bath Day":
- "the bath is a mistake" matches "This bath is a mistake."
- "hides behind the door" matches "to hide behind the door".
- "says mud is best" matches "Mud is best!"
- "You smell so sweet!" is exact.
- "they giggle when the dog shakes" matches "and giggle when I shake".
- The `why` detail "kicking" matches "My paws kick at the air."
- The poem never says "dog" (it says tail, paws and floppy ears). The sample's "the dog" is a fair inference and needs no change. The own view ("good idea for the family … like the clean dog and have fun") is now supported by both details given.

### NOTE

- **N-5. Together P3 → core 1.2 (TC2a P5): a small residual.** Without "at first", P3 no longer says that the narrator changes. But P3's key ("friendly and helpful", from his talking) is the content of P5's key ("Dev's talking helped"). P5's three distractors are all negative, so P5's key is the only positive choice. It is not the same row or the same question, so R-S4 is cleared. A later revision could give P5 one positive-but-wrong distractor, for example "She decides Dev is a better seller than she is at everything."
- **N-6. C14 `why`** says "Being the best and the ball being too fast for anyone are the narrator's excuses". "Being the best" is a boast, not an excuse. Suggested wording: "…are only the narrator's claims".

## 5. TS-PS set 2 chain (C06 → C10): closed

I read every `why`, `how` and hint in C06 to C09 against each later item's key.
- **C06** (`why`/`how`: Amari "stops to think and watch"; Kiara wants new ropes; the chant comes later). It states no later key. Its hint 3 gives the order of the try and the chant (N-1).
- **C07** (`why`: the new ropes are a failed try; the chant is the solution; the 50 jumps are proof). It does not state C08's key (the show's best part), C09's key (the inference), or C10's key (the hand speeds).
- **C08** (`how`: the show at the fair; Amari jumping in is the best part). Since §9, it no longer mentions the new ropes. It states no later key.
- **C09** (`why`: "the ropes were not the cause"). It removes one C10 Part A distractor (worn-out ropes), but it does not state C10's key. No earlier item quotes or paraphrases "Imani's hands swung fast, but Kiara's swung slowly" or "same beat".
- **Combined:**
  - C06 + C07 give C09's premises but not its inference (R-M1 cleared).
  - C06 to C09 together remove one of C10's three Part A distractors.
  - Nothing gives away a later answer.
  - The only weakness in C10 comes from its own ladder (S-1), not from the chain.

## 6. Summary for the lead

| Lesson | MUST | SHOULD | Verdict |
|---|---|---|---|
| TS-PS | M-1: P5 hint 2 ("a reason the story does not tell cannot be the answer") removes all three distractors | S-1: C10 hint 2 reason not accepted, and Part A is now settled by the ladder; S-2: S03 is reduced to the key and a dud | **CHANGES REQUIRED** |
| 3.T.C.2.a | none | none | **ACCEPTED** |

- **Blind solve:** 5 of 5 (100%). The keys were blind. My method was informed by reading the previous reviewer's loader code, and I knew which items had been revised.
- **R-M1:** cleared.
- **All earlier SHOULDs:** applied as written.
- **The new TS-PS MUST:** a small fix to one Together item's distractors and hints (P5).

**Files** (all in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rr-b1b-2/`):
- `load.js`, `struct.js`
- `blind.js`, `blind.txt`, `.map.json`
- `answers.json`, `answers.saved.json`, `answers.saved.time`
- `cmp.js`
- `full.js`, `ts.txt`, `tc.txt` (read after the solve)
