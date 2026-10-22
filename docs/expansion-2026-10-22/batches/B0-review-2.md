# B0 review 2: 3.T.T.1.c "Characters and the story's lesson"

**Reviewer:** independent content reviewer 2. I did not write any B0 content. Read-only: this file is the only one I wrote.
**Focus:** instructional quality and grade suitability, plus a blind solve.
**Source reviewed:** `js/data/lessons/T-T1.js`, 3.T.T.1.c block: `teach`, `learn`, `clues`, `parent`, passages p1 to p8, `practice` (P1 to P6), `addons`, `core` (rev "1"), `similar` (S01 to S03). I read `test` and `testB` only to check for leakage and consistency.
**Not run:** the browser. Nothing in this review depends on rendering, so port 8713 was not used.

## 0. Blind-solve integrity (read this first)

My first inventory script printed `core.sets` raw. Because the new items sit inline in `core`, it showed C03, C04 and C06 to C15 **with their keys** before I solved them. So my solve of those twelve items is **not blind**. I re-solved each of them on its merits and record below whether I would defend the key. That is a weaker check than a blind solve, and the lead should treat reviewer 1's blind solve as the primary evidence for those twelve.

The six items I had not yet seen were then dumped with shuffled choices and no keys, hints, `how` or `why`. I solved them and saved my answers to `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/r2/blind-answers.txt` **before** I read any key or the author log. Those six items are P4, P5, P6, S01, S02 and S03.

| Item | My blind answer | Key | Agree |
|---|---|---|---|
| P4 | thoughtful, honest | honest, thoughtful | yes |
| P5 | excited → uneasy → proud | same | yes |
| P6 | A: honest even when it costs you; B: "…felt proud all the way." | same | yes |
| S01 | keeps his promises… | same | yes |
| S02 | A: worries the class will think he is slow; B: his thought | same | yes |
| S03 | a new idea can still save the day | same | yes |

**Blind agreement: 6 of 6 (100%).**

**Merit check of the twelve contaminated items:** I would defend all twelve keys, which is 12 of 12. One of them, C08, has an ambiguity the key does not settle (finding S-4).

**Overall key agreement: 18 of 18.** I found no wrong key. My findings concern hints, explanations, teaching coverage and distractor quality.

## 1. Verdict

**Not yet accepted: three MUST findings are open.** All three are hint ladders where hint 3, read after hint 2 as the child will read it, leaves only the key standing (C03, C07 Part A, C09). That breaks 04 §4.5 rule 3.

Every fix is a small rewrite of a hint. The passages, keys and set structure are sound, and the lesson is well above the level of the existing Try items. Once the MUSTs are fixed, and S-1 to S-4 are addressed or answered by the lead, I would accept B0 as the reference pattern.

## 2. The learning sequence as a child and parent meet it

**Learn It.** It is clear and suitable for grade 3. It names the six components and gives three vocabulary words. The "lesson works for anyone" point is exactly the right guard against the summary-instead-of-lesson error. The parent prompt is short and usable.

**Watch Me.** It models three things: a trait (Rosa), a motive (Jamal) and a lesson (Lena). Each is short and stepped, and each ends with an answer the child can say aloud. That is good modelling.

**Practice Together** (P1 to P3 on p1). It covers motive, a feelings turn and thoughts leading to the lesson. The new addons give each item three hints and a stepped how.

**Core.**
- Set 1 stays on the same story ("The Extra Change"). It is near transfer by design.
- Set 2 moves to a new sports story.
- Set 3 moves to a nature/community story, then a fresh classroom stem, a two-story compare and a lesson transfer.

DOK rises across the sets: two DOK 3 items in set 1, two in set 2 and three in set 3. Set 3 is clearly the hardest, so the ramp is sensible.

**Variety.**
- Contexts: market and family (set 1), sports (set 2), nature and community (set 3), a classroom stem (C13) and four everyday mini-scenes (C15).
- Tasks: identify, explain, evidence, construct, compare and transfer all appear.
- Formats: seven.

I found no two items with the same frame and the same key logic. The names are varied and natural (Marisol, Mr. Okafor, Kendra, Eli, Tariq, Ms. Patel, Nia, Omar, Jaylen, Dante, Ruby, Kiana and others). Nothing reads as tokenistic.

**Gaps between teaching and items.** These are SHOULD findings S-1 and S-2. Four item types ask for thinking that Learn It and Watch Me never show:
- C04: why an author gives a minor character a line
- C11: an action causing later events
- C13: predicting what a character would do in a new place
- C14: comparing two characters

The hints teach these on the fly, so a child who uses help will get there. But a child who works without help meets the strategy for the first time in a scored-looking item. That goes against 04 §6 rule 9 ("no new rule appears first in an item").

## 3. Findings

### MUST

**M-1. SK-TT1c-C03: hint 2 alone leaves only the key.**
- **Evidence:** the targets are 3:1, 4:1, 5:1, 6:1 and 8:1. Hint 2 says "Look in the paragraphs after that [5] for something she does with her body." After paragraph 5 there are only two targets: 6:1, the key, and 8:1, "Marisol did not get the sketchbook that day", which is not a body action. Hint 3 then removes 8:1 by name.
- **Fix:** do not partition the targets by location. Either:
  - make hint 2 strategy-only: "First find where her mind starts to change. Then ask which sentence shows her *doing* something because of that change"; or
  - add post-paragraph-5 distractor targets, so that "after paragraph 5" still leaves at least three, for example 7:1 (Mr. Okafor's smile, someone else's action) and 8:2 (carrying the pie while feeling proud).
  - Do **not** add 6:2: its "holding out the five dollars" is also a defensible key.

**M-2. SK-TT1c-C07 Part A: hint 3 leaves only the key.**
- **Evidence:** hint 3 rules out "too tired" (her legs wanted to keep going) and "can still win" (her thought). It then says "Pick the reason that comes from what she sees", which rules out "a grown-up calls to her" and leaves only "She sees that he is hurt and upset". Hint 2 ("What does Kendra see when she looks back at Eli?") already echoes the key's verb.
- **Fix:**
  - Keep the two eliminations, or keep one of them, and spend the rest of hint 3 on Part B, for example: "For Part B, choose the sentence that shows how Eli looks, not what Kendra wants for herself."
  - Change hint 2 to "Reread paragraph 3. What happens to Eli, and what do you notice about him?" That avoids echoing "sees".

**M-3. SK-TT1c-C09: hints 2 and 3 leave exactly the two keys.**
- **Evidence:** hint 2 points to "the paragraph where Kendra slows down" and says "two of its sentences happen inside her head". Paragraph 4 has exactly three targets. Hint 3 removes the third (legs). Hint 1 also lists the cue words "thought … remembered", which appear verbatim in the two key sentences, and the prompt says "thinks or remembers". With hint 1 alone, the child can find the keys by matching words.
- **Fix:**
  - Reword the prompt so it does not echo the key words: "Which TWO sentences show what is going on in Kendra's mind before she goes back for Eli?"
  - Make hint 1 strategy-only: "A thought happens inside a character's head. Something she sees, or something her body does, is not a thought." Drop the list of cue words.
  - Replace hint 2 with a pointer that does not count sentences: "Look at the part of the story just before Kendra jogs back."
  - Keep hint 3's body-versus-mind contrast.
  - Optionally move one key out of the cue-word pattern. That would also make the item less word-matching, as the author's log flags.

### SHOULD

**S-1. Learn It: no line contrasts a feeling with a trait.** This is the lesson's main misconception: P4's misconception line, C12's "discouraged" distractor and C13's "thought, not actions" distractor all rely on it, yet the child is never taught the contrast.
- **Fix:** add one line to `teach.points[0]` or `[1]`: "A feeling can change from moment to moment. A trait shows up again and again in what a character does."

**S-2. Learn It and Watch Me do not prepare C04, C11, C13 or C14.**
- **Fix:** add short teaching lines, which cost no new screens:
  - "Actions cause things to happen. Ask: what happened *because* the character did this?" (C11)
  - "To predict, ask: what would this character do, based on what he has done before?" (C13)
  - "Authors give other characters words that tell us about the main character." (C04)
- A fourth Watch Me on finding the proving sentence (EBSR Part B) would also help C07, P6 and S02.
- This is outside the author's file scope (`teach` and `learn` were left unchanged), so it is for the lead.

**S-3. SK-TT1c-C08 feelings: the explanation teaches a shaky inference and conflicts with the check.**
- **Evidence:** the how and why say "her cheeks burn, so she is disappointed". Burning or red cheeks usually signal embarrassment, and form A T2 in this same lesson keys "Theo's cheeks turned red" as *embarrassed*. A child could leave the lesson believing that red cheeks mean disappointment in one story and embarrassment in the other.
- **Fix:** ground "disappointed" in the evidence that supports it. She wanted the blue ribbon for two years (paragraph 1) and now sees it on another girl. Present the cheeks as a sign of a strong upset feeling. Or change the passage clue to something more clearly disappointed, such as "her shoulders sank".

**S-4. SK-TT1c-C08 is ambiguous: columns can be reused.**
- **Evidence:** in `js/engine/items.js`, `T.match` lets each row pick any column. Nothing tells the child that each feeling is used once. "When the whistle blows and she shoots ahead" can be argued as *happy* as well as *eager*.
- **Fix:** add "Use each feeling once." to the prompt, or replace *happy* with a feeling that fits only the ending, such as *proud and warm*.

**S-5. SK-TT1c-C06: the explanation states something the text does not.**
- **Evidence:** hint 3, how step 4 and why all say Kendra "does not meet Eli until race day" or "has not met Eli yet". The story never says that. Eli is simply not mentioned before paragraph 3. In an evidence lesson, the explanation should not model an unsupported claim.
- **Fix:** "Eli is not in the story until the race, and paragraph 1 says what Kendra is training for: the blue ribbon."
- Also replace the two weak distractors, "would rather be alone than with friends" and "does not like to sit still after supper". Both are implausible and leave a two-way choice. Try options a child might pick from a misreading, such as "She wants to beat the girl who won last year" (a plausible guess with no support) or "She likes to run when she is bored".

**S-6. SK-TT1c-C07: the how and why misstate the sequence.**
- **Evidence:** they say "His lip was shaking" "comes right before Kendra goes back". Paragraph 4 (her legs, her thought, her memory) comes between them.
- **Fix:** "That detail shows Eli is upset. It is what Kendra sees just before she stops to decide."

**S-7. SK-TT1c-C11: hint 2 does the whole skill, and the keys are the longest options.**
- **Evidence:** hint 2 says to look "in the paragraphs after" paragraph 4. Every distractor is in paragraphs 1 and 2, so the location alone sorts the options. That before-or-after sorting *is* the skill. The two keys are also 10 and 8 words long; the distractors are 6, 6 and 7.
- **Fix:**
  - Add one distractor from after paragraph 4 that is not caused by Tariq, for example "The bags hanging in the branches blow away in the wind" (not in the story, so make it plausible and plainly unsupported), or an event the story places before him.
  - Change hint 2 to "Find Tariq's action. Then ask what other people do after they see it."
  - Make the option lengths even.

**S-8. SK-TT1c-C14: the named misconception never appears among the choices.**
- **Evidence:** the misconception is "choosing a sentence that is true for only one character", but all three distractors are false for both characters. The prize option is arguably true for Tariq in a loose sense, since he does get his frogs, but it is not written to test that. The item therefore does not test comparison.
- **Fix:** replace one distractor with a sentence that is clearly true for exactly one character:
  - "Each one practices every evening to get ready" (only Kendra), or
  - "Each one is joined by neighbors who help" (only Tariq).

**S-9. SK-TT1c-P4 addon, hint 3: it defines both keys.**
- **Evidence:** "one word that fits giving back what is not yours" is the definition of *honest*, and "one that fits thinking about how someone else will feel" is the definition of *thoughtful*. Together with "Greedy fits only her first wish", only the two keys are left.
- **Note:** the wording comes verbatim from the 04 §4.6 worked example, so update the plan's example as well, or later batches will copy the pattern.
- **Fix:** "Greedy fits only her first wish, not the end. Now find her big choice in paragraph 6 and her thoughts in paragraph 5, and ask what kind of person each one shows."

**S-10. SK-TT1c-P1 addon (Together): hints 2 and 3 give the key.**
- **Evidence:** hint 2 ("notice how long she has wanted it") lets a child write the key ("…wanted all summer") without seeing the choices. Hint 3 ends with "Which choice matches what she whispers about?", which only the key does. Hint 3 also rules out "a second pie" with "the pie is already paid for", which is not a reason.
- **Fix:**
  - Hint 2: "Read paragraph 4. What does Marisol say the money would let her do?"
  - Hint 3: rule out the gift with its reason, then stop.

**S-11. Set 1 repeats one story for the child.**
- **Evidence:** a child meets "The Extra Change" in all three Together items and then in all five set 1 items, eight in a row. C03's key sentence (6:1) is also a distractor target in Together P2. This is within 04 §4.3, which counts only core items, and near transfer is the design. In practice, though, set 1 will feel like more of the same.
- **Integration risk:** the author's note 1 says P4 to P6 stay in `practice`. If Together on a core lesson becomes all of `practice`, the child sees P4 to P6 twice.
- **Fix:** the lead must confirm that Together shows P1 to P3 only. Consider moving C04, the only fresh angle on p1, to the front of set 1.

### NOTE

- **N-1. "Key is the longest option".** This holds by one or two words on C13, C15, S01 and S03, and on the reused P6 (both parts). No single case is a clue, but the pattern is consistent. Even out the lengths in later batches.
- **N-2. S02 DOK.** It is labelled DOK 3, but the motive is stated outright in Dante's quoted thought, and hint 2 sends the child straight to it. It is DOK 2. p7 reads at FK 1.3. That is fine for a recovery item and the topic (fear of looking slow) suits grade 3, but S02 is easier than the set 2 items it mirrors.
- **N-3. S03 mirrors set 3 in a loose way.** Set 3 is about cause and result, prediction, compare and transfer. S03 is a plain lesson item. That is acceptable, but a transfer-shaped similar item would be a better recovery for C13 or C15.
- **N-4. C12, first blank.** *careless* is not a plausible distractor, and the second blank is literal recall (paragraph 2 states the motive). The item still earns its place as the only construct item.
- **N-5. C10.** Two of the four options begin "Kendra…" and are plainly events, which leaves one real distractor. That is fine as a deliberate "lesson or event?" item, but do not repeat the pattern in every lesson: S03 and P6 Part A use it too.
- **N-6. p8 detail.** Mr. Ford "kept the key" to a porch. A covered porch does not usually lock. "who kept the key to the community center" is more natural.
- **N-7. p5 realism.** The story implies that the cleanup helped the frogs return. That is a reasonable simplification for fiction, and no item asks the child to claim the cause as fact. Frogs calling on warm spring nights in April fits Georgia species such as spring peepers and chorus frogs (sources below).
- **N-8. p1 setting.** Athens, Georgia has a Saturday farmers market, so the setting is real and fitting. This is an existing passage and was not changed by B0.
- **N-9. Hint ladders that pass.** P2, P3, P5 (easy, but appropriately so), P6, C04, C10, C12, C13, C15, S01, S02 (narrow, see N-2) and S03 meet 04 §4.5. In each, hint 3 removes one or two tempting options and leaves the child a real choice. Every `how` explains *why*, not only *what*. The misconception lines on C04, C11, C12, C13 and C15 are especially good: they name the exact wrong move ("matching by topic", "a thought instead of what his actions show").

## 4. Passages

| Id | Readable for grade 3 | Interest | Notes |
|---|---|---|---|
| p4 The Fun Run | yes | high: a real dilemma with a cost | Well built for the components: goal, thought, memory, body clue, outcome. See S-3 on "cheeks burned". |
| p5 The Frogs of Willow Creek | yes | high: a clear arc from doubt to action to ripple effect | The "Still," opening of paragraph 4 is a good signal word. See N-7. |
| p6 Biscuit's Breakfast | yes | moderate | A plausible, low-stakes trait scene. |
| p7 The Tricky Puzzle | yes, though it reads low | high relevance to a child's own feelings | See N-2. |
| p8 The Rainy Picnic | yes | moderate | See N-6. |

None of the passages shares a theme or a key fact with form A (listening and teamwork), form B (practice and patience) or the Watch Me examples. The central messages are distinct from each other: helping matters more than winning; a small start grows; keeping a promise; asking for help; a new idea after a setback.

## 5. Sources checked

- Spring frog choruses in Georgia:
  - https://site.extension.uga.edu/forsyth/lets-listen-spring-peepers-chorus-at-night
  - https://srelherp.uga.edu/frogs-and-toads/spring-peeper
  - https://www.oriannesociety.org/?p=43039
- Athens Farmers Market (Saturday market in Athens, Georgia):
  - https://gradynewsource.uga.edu/athens-farmers-market-returns-to-bishop-park/
  - https://VisitAthensGA.com/restaurants/farmers-markets/

## 6. Summary for the lead

| Severity | Count | Items |
|---|---|---|
| MUST | 3 | C03, C07 (Part A), C09: hint ladders |
| SHOULD | 11 | Teaching gaps (S-1, S-2); C08 (S-3, S-4); C06; C07 wording; C11; C14; P4 and P1 addons; set 1 repetition and integration |
| NOTE | 9 | — |

**Agreement:**
- Blind solve: 6 of 6 items.
- Keys I would defend: 18 of 18. Twelve of these were not blind; see §0.
