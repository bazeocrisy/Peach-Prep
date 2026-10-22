# B1 re-review 2 (batch b1c): 3.T.SS.2.a, plus 3.T.T.4.a C07

Reviewer: independent (second re-review). Date: 2026-10-22.
Scope: the fixes for B1-rereview-b1c.md R-M1, R-M2 and R-S1 to R-S5. This is not a full re-audit of the lesson.
Files read: REVIEWER-BRIEF.md; the "Rule added after the B1 reviews" section of AUTHOR-BRIEF.md; js/data/lessons/T-SS.js (3.T.SS.2.a, loaded in Node); js/data/lessons/T-T34.js (3.T.T.4.a C07 to C09, loaded in Node); B1-rereview-b1c.md (only after the blind solve was saved). I did not read the author log.

## 0. Verdict

| Lesson | Verdict | MUST | SHOULD | NOTE |
|---|---|---|---|---|
| 3.T.SS.2.a | **ACCEPTED** | 0 | 1 | 6 |
| 3.T.T.4.a (C07 only) | R-S5 fixed | 0 | 0 | 0 |

The one SHOULD (C09 hint 3 names the slot-0 key word) does not block acceptance. It is within the letter of the "one blank" rule, and it was the wording the previous re-reviewer proposed. Fix it in the next pass.

## 1. Blind solve

- **How it was done:** a Node script (scratchpad `rr2/blind.js`) loaded T-SS.js through a `PP.addLesson` stub. It printed only `stem`, `prompt` and choice text for SK-SS2a-S02 and SK-SS2a-S03, with the choices shuffled (seeded) and with `correct`, `why`, `hints`, `how` and `clue` stripped. I saved my answers to `rr2/answers.txt` before extracting the keys.
- **How blind it was:** blind for the item text. I had not opened the source for these items, and before solving I looked only at the file's first and last 600 bytes and at grep output of item-header lines. **But the solve was not fully naive.** The task brief says these items' hints were changed after a review, so I knew they had been reworked. These are also two 1-point MC items, so a 2/2 result is weak evidence.
- **Result: 2/2 agreement.**
  - S02: "He is doing well and is close to getting it right." The key matches.
  - S03: "how very tiny a baby box turtle is." The key matches.
- **While solving I noticed:**
  - In S03, "round and flat" is a real near-miss: a bottle cap is round and flat. It is ruled out only by the word *small*. This distractor is good.
  - In S02, the new distractor "make it exactly the same way next time" tempts a child who reads only "on the right track". The words "less salt" rule it out. This distractor is good.

## 2. Hint ladders (S02, S03, C07, C09, C13)

| Item | h1 strategy | h2 place | h3 scaffold | Leaves after h3 | Pass? |
|---|---|---|---|---|---|
| S02 | idiom ≠ words; use what the speaker says next | the whole stem ("from her first bite to her last words") | rules out railroad only; "test against what Grandma says to do next time" | key, start over, same way | Pass (N-1) |
| S03 | simile = two different kinds of things | "picture a bottle cap"; reread the whole sentence | rules out bottles-as-hiding only; "picture a bottle cap again… whole sentence" | key, metal shell, round and flat | Pass (N-2) |
| C07 | idiom; look at what just happened | all of stanza 3, which holds two Part B choices (3:2 and 3:3) | Part A: rules out "look at the gulls"; Part B: the gulls are only in stanza 2 | A: 3 left; B: 3 left | Pass (N-3) |
| C09 | not every like is a simile | substitute another word for like | "Try putting the word **enjoy** in place of like, and then the words similar to" | slot 0 is settled; slot 1 is still open (not a simile or a metaphor) | Rule pass, but see S-1 |
| C13 | metaphors help you picture; ask what the two have in common | "what does a magician do that amazes people", with no place named | rules out "perform for people"; "does the article tell something the anole really does that could amaze someone?" | colour, hide, flies all survive | Pass |

None of these hints names a choice except one that is wrong, and none narrows an item to its key alone. No hint 2 points only at the key's location. The checks:
- S02 h2 covers the whole stem.
- C07 h2 names stanza 3, which holds both 3:2 "With towers in a row" and the key 3:3.
- S03 h2 and C13 h2 name no place.

### SHOULD

**S-1. SK-SS2a-C09 hint 3 states the slot-0 key word.**
- **Evidence:** h3 says "Try putting the word enjoy in place of like, and then the words similar to." The slot-0 key is "means enjoy". The hint gives a two-way test in which one option is the key, word for word. The third option, "compares two things", is never tested. That means h3 echoes the key and narrows slot 0 to the key, which is the commonest fault in the B0 reviews.
- **Why this is not MUST:** under the new rule, h3 may settle one blank. Slot 1 still has to be done: after "means enjoy", the child must still choose between "is not a simile" and "is a metaphor". This wording was also the previous reviewer's R-S3 fix. The fault is that h3 settles the blank by quoting the key, and not by leading the child to it.
- **A second weakness:** the substitution gives "I enjoy to build a castle here", which is awkward English for an 8-year-old. That makes the test less clean than it looks. (The "similar to" version is worse still, so the child will still land on enjoy.)
- **Fix:** keep the scaffold but do not name the key. For example: "Ask: is the speaker telling how she feels about building, or saying the castle is like something else? If nothing is compared, like has its other meaning." Another option: "If like were comparing, what would the castle be compared to? Look for a second thing in the line." Either one settles slot 0 at most, and neither quotes it.

### NOTE

- **N-1. S02 h3.** The "test against what Grandma says to do next time" test removes both remaining distractors, because "less salt" kills "same way" and "a little" kills "start over". But the hint names neither one, and applying the context clue is the skill being assessed. This is the R-M1 fix, and it is acceptable.
- **N-2. S03 h2 and h3.** "Picture a bottle cap in your hand" leans a little toward size, through the palm image. But it equally calls up the round, flat shape and the metal, which keeps both surviving distractors alive. This is the R-M2 fix, and it is acceptable.
- **N-3. C07 h3.** One fact ("the gulls are only in stanza 2") removes one distractor in Part A and one in Part B. Three choices stay in each part, so this is one step and not a settle.
- **N-4. C07 → C08 (set 2).** C07's Part B distractor "They squawk and swoop and call" is the stanza 2 line that C08's keys rest on (noise and playful movement). C08 is passage-based, and stanza 2 is in front of the child anyway, so nothing new is given away.

## 3. Teaching text

| Place | Text now | OK? |
|---|---|---|
| `teach.big` (Learn It headline) | "a simile compares two different kinds of things with like or as, a metaphor says one thing is a different kind of thing" | Yes (R-S4 fixed) |
| glossary `simile` | "a comparison of two different kinds of things that uses like or as" | Yes |
| glossary `metaphor` | "a comparison that says one thing is a different kind of thing, without like or as" | Yes (R-S4 fixed) |
| teach point 1 | "A simile compares two different kinds of things using like or as" | Yes |
| teach point 2 | "…says one thing is a different kind of thing… 'The classroom was noisy' and 'My dog is a good swimmer' are not metaphors, because they just tell facts." | Yes |
| teach point 5 | "'My bike is as big as yours' compares two things of the same kind" | Yes; this prepares C04 |

- **Teach point 2 against C14:** the example uses a dog and a swimmer, not an anole or a hunter, so it does not pre-answer C14. C14 still requires the child to:
  - see that sentence B (the flap is a stop sign) is a metaphor;
  - reject "both use is or are";
  - reject "Sentence A is a simile";
  - reject the literal reading of the sign.
- **N-5.** "My dog is a good swimmer" has the same structure as C14's sentence A, "Anoles are fast hunters". That is the purpose of the example: it models the edge case. It teaches the rule and does not answer the item.
- **N-6. Leftover old wording outside the glossary and teach points.**
  - Add-on SK-SS2a-P2 hint 1 still says "A metaphor compares two things without like or as. It says one thing is another." This is the pre-fix definition.
  - The C08 clue says "two different things" without "kinds of". That is fine.
  - Rule 7 covers the glossary and teach points, so this is NOTE only. Align P2 h1 to "says one thing is a different kind of thing" when that add-on is next edited.
- **N-7. C13 → C14 (set 3).** C13's `why`/`how` says "eating is described in paragraph 3". That slightly supports C14's "Sentence A tells a fact" (anoles really hunt). The passage says so plainly, and C14's own `how` uses the same evidence, so this is harmless.

## 4. 3.T.T.4.a C07 (R-S5)

- **Fixed.** C07 `how` 1 now reads: "Several lines repeat words. 'Round and round' and 'slap, slap, slap' are about the ropes." The words "before the speaker jumps in" are gone.
- I checked the rest of C07's `how` and its `why` against C09, whose key is "It ends the waiting part at the very moment the speaker jumps in". Neither mentions waiting, jumping in or the stanza 1 break. The `why` says "the two lines in stanza 1 that repeat words are about the ropes", which says nothing about why stanza 1 ends where it does.
- C08's `how` ("Before stanza 3, the game is going on") does not cue C09 either.
- Nothing in set 2 now hints at C09.

## 5. Summary

- All five fixes from B1-rereview-b1c.md that were in scope here (R-M1, R-M2, R-S1, R-S2, R-S4) are in place, and so is R-S5 in T-T34.
- Every hint ladder audited meets the post-B1 rules. One finding remains, S-1: C09 hint 3 quotes the slot-0 key.
- **3.T.SS.2.a: ACCEPTED**, with S-1 to be fixed in the next pass.
