# PP-004 rc3fix: fixes for review C round 3 (pp004-review-C3.md)

- Agent: rc3fix. Date: 2026-10-21. Port 8504 (server started with `node verification/serve.js . 8504`, stopped by its PID).
- Files edited (only these): `js/data/sets/PT-1.js`, `js/data/lessons/L-GUM3.js` (irregular-plurals `testB` only), `js/data/lessons/L-V12.js` (`SK-V2a-TB4` only), `js/data/lessons/L-GC2.js` (`SK-GC2d-T3` DOK only). No JS engine, CSS, T-C.js or W-REV-01.js was touched. No git commands.
- Scratch work: `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rc3fix/` (`pw.py` playthrough, `shots/`, `blindchk/`).
- Page numbers below are PDF pages counted from the form feeds in `gadoe/standards-3-5.txt`.

## RC3-1. PT-1-13 row gave away PT-1-14 (plus one more cue found on re-check)

**Deficiency.** PT-1-13's row "Fall days are sunny, and fall nights are cool." → "The red colors are especially bright." stated the exact relation that PT-1-14 (2 pts, DOK 3) asks the child to reason from. The test has a Previous button, so the order does not matter.

**Official requirement.** 3.T.T.2.b: "Describe the relationship between a series of historical events, scientific ideas or concepts, or steps in technical procedures in a text." (Standards Grades 3-5, PDF p. 33.)

**Text support for the new row, checked first.** p2 paragraph 7 (array entry 10), sentence 1: "Losing its leaves helps the tree save water during the cold winter months." This is a stated cause → effect in the article.

**Change (PT-1-13, js/data/sets/PT-1.js).**
- Column 0: "The red colors are especially bright." → "The tree saves water during the cold months."
- Row 2: "Fall days are sunny, and fall nights are cool." → "A tree loses its leaves." (answer stays 0).
- why: "Paragraph 5 says sunny fall days..." → "Paragraph 7 says that losing its leaves helps the tree save water during the cold winter months." (Paragraph 7 is the child-visible number; headings are not counted, per the file's reference note.)
- I left "before winter" out of the cause (the reviewer suggested "A tree drops its leaves before winter"). "Getting ready for winter" is the heart of PT-1-8's key, so I kept "winter" out of the cause to avoid a cue to PT-1-8. Points (2), type, std and DOK are unchanged.
- Uniqueness: with "use each effect once", only one assignment works. Chlorophyll → green, and thin layer → breeze, are forced. "Fallen leaves break down" cannot cause saving water, so loses leaves → saves water and fallen leaves → nutrients.

**Re-check of every PT-1 item for cues, in both directions.** I printed all 24 items with their keys, clues and whys, and checked each pair within each passage group and across groups.
- **New finding, fixed: PT-1-8 → PT-1-14.** A PT-1-8 distractor read "Sunny fall days and cool nights help make the red colors in some leaves very bright." That is the same relation as PT-1-14's Part B key, the same cue as RC3-1, and it sits six items earlier. I replaced it with another single-section detail from the same section: "The leaves of many maples and sweetgums make red and purple colors in the fall." (p2 paragraph 5, sentence 3). It is still a true, one-section detail, so the why ("The other choices are true details, but each one comes from only one part of the article.") stays accurate. It points only at a PT-1-14 Part B distractor, not at the key, and it gives nothing about sunlight.
- New PT-1-13 row vs PT-1-12 (the "Letting Go" heading means the section is about dropping leaves): no new cue. The row does not name a section, and row 3 (thin layer of cells) already touched leaf-dropping. PT-1-12's why says "why losing leaves helps the tree" but does not name water. Whys show only in the end-of-test review anyway (player.js:508).
- New row vs PT-1-10 (yellow/orange from chlorophyll breakdown) and PT-1-11 (cause and effect, shorter days): no overlap.
- p1 items (PT-1-1 to -7): PT-1-2's stem appears as a PT-1-7 Part B distractor, and PT-1-5's steps restate plot events. Neither reveals a key. PT-1-6's prompt ("Malik tells the reader what he is thinking") does not decide PT-1-1 (hesitated). No cue.
- p3 items (PT-1-15 to -18): PT-1-15's text shows sentence 6 ("owls have excellent hearing"), which PT-1-17 needs, but it is passage text the child reads anyway. PT-1-18's key sums up eyes, ears and wings, which does not decide PT-1-16 (sentence 5). No cue.
- Standalone items (PT-1-19 to -24): independent. No cue.
- Not changed: RC3-7 (PT-1-6 key length) was a NOTE and was not assigned. PT-1-6 is unchanged.

## RC3-2. Irregular-plurals form B reused form A and practice targets

**Deficiency.** In SK-GUM3-2-TB1..TB5, only loaves and shelves were new targets. people, knives, women, children, oxen, sheep and geese all came from form A, practice or teach, so 4 of the 7 points could be earned from memory.

**Official requirement.** 3.L.GC.1 GUM chart, Grammar row "Form and use irregular plural nouns.", grade 3 = M (Standards Grades 3-5, PDF p. 16, text extraction; the column order K NYI, 1 I, 2 C, 3 M matches the lesson code `:M:`. I did not re-read the page image, because the code was not changed). FORMB-BRIEF: "The child must not be able to pass from memory of form A or of practice."

**Grep first.** I searched the whole lesson (teach, Watch Me/learn, parent note, practice, form A; L-GUM3.js lines 159-306) for half, calf, elf, thief, grandchild, snowman, loaf, shelf, life, fisherman, wife and leaf: 0 hits. "deer" has 13 hits (teach, Watch Me 2, P3). I did not use the brief's examples mice, geese and teeth: they are in the teach list, Watch Me 1, P1, P3, P4, P5 and form A T2/T5.

**Change (js/data/lessons/L-GUM3.js, testB of 3.L.GC.1:M:form-and-use-irregular-plural-nouns).** 5 items, 7 points, same types and DOK as before (1,2,1,2,2). Every special noun is used in only one item.

| Item | pts | DOK | Key target(s) | New? | Distractor errors |
|---|---|---|---|---|---|
| TB1 mc | 1 | 1 | halves | new | halfs, halfes, half |
| TB2 ms | 2 | 2 | calves, elves | both new | thiefs, grandchilds, snowmans |
| TB3 dropdown | 1 | 1 | loaves (unchanged) | new | loafs, loaf |
| TB4 match | 2 | 2 | shelves (fix), lives (correct), fishermen (fix), deer (correct) | 3 of 4 rows new | shelfs, fishermans |
| TB5 hottext | 1 | 2 | wives (error "wifes") | new | buses, bunches, babies (correct regulars) |

- **New-target points:** TB1 + TB2 + TB3 + TB5 = 5 points use only new targets. TB4 (2 points) uses new targets in 3 of its 4 rows. So at least 5 of the 7 points pass the requirement, and about 6.5 of 7 do.
- I kept **deer** as one "Correct" row on purpose. The teach list has three kinds of special plurals (change spelling, change in other ways, stay the same). Without one stay-the-same noun, form B would not test a category that form A tests (T2 moose/sheep). The row is "Two deer drank from the cool creek.", which is the standard plural and is unambiguous as correct.
- **No accepted-variant traps.** halves is checked (below). The keys calves, elves and lives are the standard plurals, so the variants calfs/elfs do not matter (they are never offered). I avoided leafs, lifes (in "still lifes"), scarfs, hoofs, dwarfs, fishes and dices as distractors, because each one is or may be accepted in some sense.
- **Within-form cues:** none at the word level. Several items share the f→v rule and the man→men rule, and that rule is the skill being tested, not an answer.

**Facts checked.**
- dictionary.com/browse/half (checked 2026-10-21): the only plural given is "halves"; "halfs" does not appear.
- merriam-webster.com/dictionary/half (checked 2026-10-21): "plural halves", with no "also" variant.
- **UNVERIFIED.** Fetches of these pages were refused (permission not answered): en.wiktionary.org/wiki/half; merriam-webster.com/dictionary/shelf, /thief, /leaf; dictionary.com/browse/shelf, /thief, /leaf, /fisherman, /grandchild, /snowman. So shelfs, thiefs, grandchilds, snowmans, fishermans and wifes rest on standard usage (shelf/shelves, thief/thieves, grandchild/grandchildren, snowman/snowmen, fisherman/fishermen and wife/wives are the textbook irregulars), not on a fetched dictionary entry. A reviewer with web access should confirm that none of these has an accepted variant.

## RC3-3. TB2's why said "deers are not words"

**Deficiency.** "deers" is a rare but accepted plural (the reviewer cites Dictionary.com and Grammarist), so the why's claim was false.

**Change.** The distractor "Four deers drank from the cool creek." is gone. TB2's three wrong choices are now thiefs, grandchilds and snowmans, which are unambiguous errors. The new why explains each one ("Thief changes the same way as calf... Grandchild changes like child and children, and snowman changes like man and men"). No why in the lesson now says "deers". Deer appears only as a correct usage (TB4 row 4).

## RC3-4. SK-V2a-TB4 tested -er, which the 3.L.V.2.a lesson does not teach

**Official requirement.** 3.L.V.2.a: "Deconstruct words using common roots, root words, and affixes to determine meaning." (Standards Grades 3-5, PDF p. 22.)

**Teach list checked (L-V12.js 3.L.V.2.a teach.points):** un-, dis- (not / the opposite of), re- (again), pre- (before), mis- (wrongly), -ful (full of), -less (without), -able (can be), -ly (in a ___ way). -er is not in it.

**The constraint could not be met exactly. Decision and reasons:**
- The assignment asked for affixes that the lesson teaches but that practice does not label with the same meaning. Practice labels un- "not", -ful "full of", -ly "in a ___ way" and re- "again" (P4 columns), -less "without" (P1 prompt) and -able "can be" (P2 prompt). That leaves only dis-, pre- and mis-.
- dis- is already in TB4 (disagree).
- **pre-** would give away TB3: TB3 Part A asks what preheat means, and a "before" column in TB4 hands that over.
- **mis-** would be given away by TB2: TB2's prompt says "The prefix mis- means 'wrongly'."
- The briefs make within-form giveaways a hard rule, so I took the next-best option. I chose two taught affixes that no other form B item uses, and that are not form A T4's columns (not, before, full of, wrongly):
  - **re- "again"**: new word reopen. Not in teach, Watch Me, practice, form A or the parent note. The parent note uses refill, so I avoided that one.
  - **-less "without"**: new word seedless. Form A uses careless and spotless, and practice uses hopeless.
- Both are practice-labeled meanings, so this part of the instruction is only partly met. The words themselves are new.

**Change (SK-V2a-TB4).**
- Columns: ["the opposite of", "a person who", "more", "in a ___ way"] → ["the opposite of", "again", "without", "in a ___ way"].
- Rows: disagree→0, reopen→1, seedless→2, slowly→3.
- The clue no longer mentions "-er".
- The why explains all four.
- Points (2), DOK (2), type and code are unchanged.
- "Without" vs "the opposite of" is not ambiguous for seedless ("opposite of seed" is not a meaning), and every column is used once.
- **Not changed:** the slowly row (-ly, also labeled in practice P4) was not part of the finding.

## NOTE RC3-10. SK-GC2d-T3 DOK 3 → 2

**Judgement.** Part A asks the child to recognize which revision adds details; three of the choices only repeat plain words. Part B names the reason. That is applying a concept and comparing options (DOK 2). There is no multi-step reasoning, no planning, and no use of evidence from a text (DOK 3).

**Change.** In L-GC2.js, `dok: 3` → `dok: 2`. Nothing else changed. The lesson has no testB, so no form B DOK mix depends on it. I found no other file that counts this item's DOK: I grepped docs/ and verification/, and SK-GC2d-T3 appears only in audit logs. The 3.L.GC.2.d check is now all DOK 2.

**Official requirement.** 3.L.GC.2.d: "Elaborate on ideas and information, using adjectives and adverbs when incorporating details and descriptions to convey precise meaning." (Standards Grades 3-5, PDF p. 19.)

## Verification

**Gates (from /home/claude/pp-fix):**
- `node verification/check-content.js --all`: PASS, 0 failures, 6 warnings. These are the same 6 the reviewer reported. The PT-1-14 "bright" clue warning comes from an unchanged item and predates this work.
- `python3 verification/readability.py`: exit 0. No passage text was changed (PT-1 p2 is still 340 words, FK about 4.1).
- `node verification/check-writing.js`: 0 failures, 0 warnings.

**Playthrough.** I ran `rc3fix/pw.py`, adapted from the reviewer's `revC3/pw.py`, on port 8504 at 390x900 and 1366x900. It answers each item with its key through `PP_PLAYER.ctx()`, presses Check/Next, submits, and compares the result score with the maximum. Sets played:
- irregular plurals form B (`:tB`)
- 3.L.V.2.a form B
- 3.L.GC.2.d check
- PT-1 (all 24 items)

Every set reached full score at both widths, with 0 page errors and 0 horizontal scroll. I looked at the screenshots of PT-1-13 (390), SK-GUM3-2-TB2 (390) and SK-V2a-TB4 (1366); the layout is fine. All 18 shots are in `rc3fix/shots/`.

**Blind self-check (not an independent review).** I ran the reviewer's `revC3/blind.js` from a copy in `rc3fix/blindchk/`, with a `changed.json` listing my 9 changed items. I answered from the shuffled `blind/` dumps into `answers.txt`, then compared with `keys/`: 9/9 agree. (TB2 first showed as a mismatch only because of letter spacing: "BE" vs "B E".) I wrote these items, so this checks only the keys and the shuffling. It is not independent agreement.

## What remains
- All four changed units need independent review, especially the new irregular-plurals form B.
- The non-variant status of shelfs, thiefs, grandchilds, snowmans, fishermans and wifes needs confirming in a dictionary (fetches were refused here).
- RC3-4 is only partly met (re- and -less are practice-labeled meanings), for the reason given above. The lead may prefer the reviewer's other option: add a teach line for -er to 3.L.V.2.a and keep the original rows.
- RC3-5 through RC3-9 were NOTEs and were not assigned. They are unchanged.
- guard.py was not run.
