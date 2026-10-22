# B1 review 2A: TS-PS, 3.T.C.2.a, 3.T.SS.2.a and 3.T.T.4.a

**Reviewer:** independent content reviewer 2A. I wrote none of this content. Read-only: this file is the only one I wrote in the repo. I ran no git commands.
**Focus:** the blind solve, alignment with the official wording, and leakage (inside each set, and into form A and form B).
**Sources reviewed:**
- `js/data/lessons/T-TS.js` (TS-PS block)
- `js/data/lessons/T-C.js` (3.T.C.2.a block)
- `js/data/lessons/T-SS.js` (3.T.SS.2.a block)
- `js/data/lessons/T-T34.js` (3.T.T.4.a block)

For each block I read `teach`, `learn`, passages, `practice`, `addons`, `core`, `similar`, `test` and `testB`. I also read the 3.T.T.1.b form A in `T-T1.js`, because TS-PS shares that code.

**Browser:** port 8743, used once, to confirm how the `cr` item SK-TC2a-C12 renders under Show me how (finding C-S2). The server is stopped.

**Severity rule used in this review.** I follow the B0 reviews: hints are read in order, as the child meets them.
- **MUST:** after hints 1 to 3, only the key is left standing, or a hint states the key's content.
- **SHOULD:** hint 2 points to the one sentence that states the answer, so audit check 1 of 04 §4.5 fails, but at least one real competing choice survives all three hints.

## 0. Blind solve

**Method**
- `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rev2A/load.js` loads the four lesson files through a stub `PP.addLesson`.
- `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rev2A/blind.js` prints, for each lesson:
  - every passage that a core or similar item uses, with stanza and line numbers for poems;
  - every core item in set order, with each `{ref}` resolved from `practice`;
  - every similar item.
- Choices, hot-text targets, options, order steps, match rows and drop-down options are shuffled with a fixed seed.
- The script prints no `correct`, `answer`, `why`, `clue`, `hints`, `how`, `misconception`, `sample` or `criteria`. The output is `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rev2A/blind.txt`.
- I wrote my answers to `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rev2A/answers.json` before I extracted any key. For C12 I wrote my own short answer.
- `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rev2A/cmp.js` then extracted the keys and compared them.

**Was it fully blind? Yes.**
- Before solving, I printed only field names and types, never content, to learn the schema.
- I did not open the raw source of any of the four blocks. The only lesson source I saw was the first 3,000 characters of `T-C.js`, which is 3.T.C.1.a, a lesson I am not reviewing.
- The reused items (TS-PS P4, P5 and P6, TC2a P5 and SS2a P5) were new to me.
- I read the author logs only after the comparison.

**Result: 71 of 71 auto-scored items agree (100%).**
- That is 15 core and 3 similar items in each lesson, minus the `cr` item C12, which is not scored.
- My C12 answer meets all four of its criteria.
- Close calls while solving:
  - TT4a C07: "They slap, slap, slap against the ground" also repeats words to show ongoing motion. The prompt's "the jumping" excludes it, but only just.
  - TS-PS C14: "Put the cans inside a locked shed each night" is a slightly odd park plan, but it is defensible.
  - SS2a C04: "as long as the pool at my school". It is not a simile, and teach point 5 covers that.
  - TC2a C01: "runs over to tell the first family about his truck" is an action that shows eagerness. It is acceptable.

**Keys: no wrong key and no second defensible answer** in any lesson. My findings concern hints, rehearsal of the checks, distractors and two prompts.

## 1. Verdicts

| Lesson | Verdict | MUST | SHOULD | Why |
|---|---|---|---|---|
| TS-PS | **CHANGES REQUIRED** | 2 | 7 | C09 hint 2 leaves exactly the two keys; C15 hints plus weak distractors leave only the key. C09 rehearses form A T4 Part B |
| 3.T.C.2.a | **CHANGES REQUIRED** | 3 | 5 | C04, C08 and C10 hints do the item's thinking. C12 `cr` is sound in shape but its prompt gives away the speaker's view |
| 3.T.SS.2.a | **CHANGES REQUIRED** | 5 | 4 | A systematic hint 2 pattern: it tells the child how the two things are alike, which is the skill being assessed (C03, C05, C06, C08, C15) |
| 3.T.T.4.a | **CHANGES REQUIRED** | 4 | 3 | Location hints leave only the key (C04, C07); hints state the key (C08, C11). C14 copies the frame of form A T4 and form B TB4 |

Every MUST is a hint rewrite or a distractor swap. Passages, keys, points, set structure and alignment are sound in all four lessons. These lessons are clearly above the old Try items.

## 2. TS-PS "Problem and solution: the tries and what works"

**Official wording** (`standards.js`, 3.T.SS.1.a, p. 29; it matches `gadoe/standards-3-5.txt` line 823): "Describe how texts are arranged to represent information and ideas using text features … and organizational structures (e.g., cause/effect)…". The lesson also carries 3.T.T.1.b.
- **Alignment is good.** C12 (order the article's parts), C13 (compare the structure of two texts) and C15 (fill a draft's gap) address "how texts are arranged" directly. The other twelve items work inside the structure: the tries, why each failed, the real cause and the proof that the fix worked.
- C06 is a 3.T.T.1.b item (what a time detail does for the plot), which the shared code allows.

**Shape**
- Points: every choose-two item is worth 2, and so are ebsr, match and dropdown. C12 (order, five steps) is worth 1.
- DOK: no DOK 1 labels; six items at DOK 3.
- Formats: seven. There are six `mc` items, which is at the limit.
- Contexts: home (ants, table), sports and community (Double Dutch), school and science (window birds), a park (C14), a school playground (C15).
- Passage load: p4 carries six items and p1 four, both within the limit.
- **Learn It and Watch Me:** the new Watch Me 3 (food bank) models the real problem, the helper, testing a plan and the order of parts. It covers C10, C12, C14 and S03.
  - **Not modelled:** what a time detail does (C06), comparing two texts (C13), and choosing a sentence for a gap in a draft (C15). See T-S5.

### MUST

**T-M1. SK-TSPS-C09: hint 2 alone leaves exactly the two keys.**
- **Evidence:**
  - The targets are p4:1:2, 3:2, 4:3, 5:1, 6:1 and 6:2.
  - Hint 2 is "Look at the part of the story after the girls decide what to do." After 5:1 (the decision), the only targets are 6:1 and 6:2, which are both keys.
  - The author's log says hint 3 was moved "outside the hint 2 region". That fixed hint 3 but not hint 2.
- **Fix:**
  - Make hint 2 about the test, not the place: "Ask what would look different if the tangles were really gone. Then find the sentences that show that."
  - Or add a post-decision distractor that does not prove success, for example a new sentence in paragraph 6 such as "A crowd had gathered around the jump-rope circle."
  - Do not add 6:3 ("The problem was finally solved!") or 5:2 as targets. Both would be arguable keys.

**T-M2. SK-TSPS-C15: the hints plus non-competing distractors leave only the key.**
- **Evidence:**
  - Hint 2 states the job of the missing sentence: "What does a reader need to know to understand why the custodian changed the plan?"
  - Hint 3 removes "loudest at recess".
  - The two choices left are both about paint colour and explain nothing, so only the key survives.
  - The key is also the only option that names the chains, and the longest (15 words against 10 to 12).
- **Fix:**
  - Replace A and C with sentences that try to explain the change but point the wrong way. For example: "The custodian saw rust on the seats and painted them again." or "The chains looked shiny, so the custodian checked the seats instead."
  - Cut hint 2 to "Read sentences 3 and 5."

### SHOULD

**T-S1. Hint 2 names the decisive evidence ("what X notices", "where it comes from"). Items: P5 (addon), C08, C10, S01, S02 and S03.**

| Item | Hint 2 (abridged) | What the child can then write without the choices |
|---|---|---|
| P5 | "Read the sentence that comes right after the try." | "The ants followed the smell" (the key, nearly word for word) |
| C08 | "…read what Coach Bell notices in paragraph 4." | Part A key; for Part B, "notices" picks out the key over "Your jumping is fine" |
| C10 | "What does Coach Bell do while she sits on the bench, and what does she tell the team?" | "She watches and works out what is wrong" (the key) |
| S01 | "…what does Mr. Hale notice about the stems?" | "They needed light" |
| S02 | "…read what Jonah notices in paragraph 4." | "Tomato juice soaked in" |
| S03 | "Read the last sentence. Where is the water coming from?" | "The crack, so fix it" |

- **Fix:** keep the paragraph pointer and drop the question that answers the item. For example, C08 hint 2: "Look at what each try changes. Then reread paragraph 4."
- P5 is also literal recall, so its DOK 3 label is wrong (see T-S6).

**T-S2. SK-TSPS-C09 rehearses form A T4 Part B.** See §6.1 for the full judgement. Change the task or the frame.

**T-S3. The new stories copy form A's skeleton.**
- **Evidence:**
  - Form A "The Muddy Path" (p2) runs like this: two failed tries in paragraphs 2 and 3; "Then Leo looked closely" and the real cause in paragraph 4; the fix in paragraph 5; and a check that ends "The problem was finally solved!"
  - p3 (Niko looks up under the table) and p4 (Coach Bell "watched the turners closely") follow the same plan, with the cause in paragraph 4. So does p7 (Jonah watches, paragraph 4, similar S02).
  - p4 ends with the same sentence, word for word: "The problem was finally solved!" This is the only cross-text 5-gram hit (`/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rev2A/ngram2.js`).
- **Risk:** a child learns "the real cause is in paragraph 4". That heuristic also answers form A T5 ("Why does the author include paragraph 4?").
- **Fix:**
  - In p3 or p4, move the discovery to a different paragraph, or have the character reason it out rather than "look closely".
  - Change p4's last sentence, for example to "Coach Bell clapped all the way through."

**T-S4. C08, C10 and C13 ask the same thing three times, and C08 answers C10.**
- **Evidence:**
  - C08 (Part A and Part B) establishes that Coach Bell watched and found the real cause. C10 then asks how Coach Bell helps, and its key is that finding.
  - C13 row 3 ("Someone who watches or knows more finds the real cause") repeats it a third time.
  - C08 and C10 share the text, the component and the context. They differ only in task verb, which fails the two-of-four rule in 04 §6.
- **Fix:** replace C10 with an item on the "but" that p4 uses for a difference: "Imani's hands swung fast, but Kiara's swung slowly."
  - The author changed teach point 2 for exactly this use ("But can also show a difference").
  - No item practises it on a new text. P6 is the failed-try "but".
  - Such an item would transfer the lesson's named mix-up.

**T-S5. SK-TSPS-C06 copies the frame and key logic of another lesson's check, and Learn It never models it.**
- **Evidence:**
  - 3.T.T.1.b form A T2 asks "The story begins on a Thursday afternoon. Why does this time matter to the plot?" Its key is "…very little time to find it".
  - C06 asks "Why does the author tell readers that the fair is only two weeks away?" Its key is "…must solve the problem soon".
  - TS-PS carries 3.T.T.1.b, so a child working through this core is rehearsing that check.
- **Fix:**
  - Ask what is at stake through a different element, for example why Amari's ankles matter or what would happen at the fair. Or keep the idea and change the frame to a match or a dropdown.
  - Add one Learn It line: "A detail about time or place can show why the problem matters."

**T-S6. SK-TSPS-P5 (reused) is labelled DOK 3 but is literal.** Paragraph 4 says "the ants just followed the smell of the food". Relabel it DOK 2 (04 §6 rule 12: reused items meet the same bar).

**T-S7. SK-TSPS-S03 `like` includes C15 dishonestly.**
- S03 (which plan fixes the real problem) mirrors C14, not C15 (fill a gap in a draft).
- **Fix:** drop C15 from `like`, accepting the checker warning, or write a C15-shaped similar.

### NOTE

- **T-N1.** C13 row 1 ("The problem happens at a school") is setting trivia, not structure. A structural row, such as "The text tells what happened after the solution" (both texts), would test the standard better.
- **T-N2.** C12 is a five-step reorder worth 1 point, so only an exact order scores. SPEC §5 allows 2 points with partial credit for five steps. Consider 2 points.
- **T-N3.** S01 (move the plants to the window for light) is the mirror of Watch Me 2 (move the tank away from the sunny window). The key facts differ, but the move is the same.
- **T-N4.** p6 reads at FK 1.9 (author's figure). The content suits grade 3. It is a similar-item text only.
- **T-N5.** TS-PS has no form B, so I checked leakage against form A only.
- **T-N6.** p4 (Double Dutch, a chant fixes the rhythm) and 3.T.T.4.a p6 ("Double Dutch at Recess", friends chant) are in the same batch. They share a topic, not a key fact. A child doing both lessons meets Double Dutch with chanting twice.
- **T-N7.** Ladders that pass: P4, C03, C05, C06, C07, C11, C12, C13 and C14. In each, hint 3 removes one tempting option with a reason, and two or more remain. The `how` steps explain why, and they are accurate.

## 3. 3.T.C.2.a "Point of view: the narrator's view and yours"

**Official wording** (p. 27; it matches `standards-3-5.txt` line 773): "Describe different perspectives of the narrator or speakers and distinguish them from their own."
- **Alignment is strong:**
  - narrator identification: C03, C06, C11, C13
  - describing the narrator's view: C05, C08
  - contrasting characters' or speakers' views: C01, C07, C15
  - the reader's own view: C04, C12, C14
  - change: P5, C09
  - C12 is the only item that asks for the child's own view in the child's own words, which is the standard's second verb.
- **Learn It and Watch Me** model almost everything:
  - teach point 2 (comparisons show a view) prepares C08;
  - point 3 (the view may stay the same) prepares C05;
  - point 5 (clues to the I, and two-part stories) prepares C06 and C11;
  - Watch Me 3 (breakfast told by the child and then by Mom) models C10 and C12.
- **Shape:**
  - Points are correct, and the `cr` item has no points, as it should.
  - DOK: none at DOK 1. Seven are labelled DOK 3, but C04 and C11 behave like DOK 2.
  - Formats: seven, with five `mc`.
  - Contexts: family, school, community, pets and sports.

### MUST

**C-M1. SK-TC2a-C04: hint 2 maps each blank to its evidence, which is the item's whole task.**
- **Evidence:**
  - Hint 2 says "For the first blank, reread paragraph 2 for what Lamar says and what the narrator thinks of it. For the second blank, reread what Ms. Pruitt says in paragraph 4."
  - Paragraph 2 contains "likes to boss kids around" word for word.
  - Hint 3 removes the only other option ("wants the corner all to herself"), so each blank has two options and hint 2 has already said which is which.
- **Fix:**
  - Hint 2: "Find what the narrator says about why Ms. Pruitt calls out. Then find a part of the story the narrator does not explain that way." Do not assign paragraphs to blanks.
  - Replace "wants the corner all to herself", which has no support, with a plausible misreading, such as "is angry at the kids for being late".
  - Relabel C04 as DOK 2: once located, the keys are copied phrases.

**C-M2. SK-TC2a-C08: hint 2 does the interpretation.**
- **Evidence:**
  - Hint 2 says "Think about how most kids feel right before they get a shot". That is the inference the item assesses.
  - Hint 3 removes both "real shot" choices (A and C), so only the key and "excited" remain, and hint 2 has already ruled out "excited".
- **Fix:**
  - Hint 2: "Reread the sentences just before and after this one in Part 1."
  - Hint 3: rule out only one of the literal choices.

**C-M3. SK-TC2a-C10: hint 2 states the key's idea, and the distractors do not compete.**
- **Evidence:**
  - Hint 2 says "Look at what Mr. Odom notices about the boy in his chair". The key is "so readers can see how Darius looked to someone else".
  - After hint 3 removes A (haircut steps), B (why Mom chose the shop) and D (Mr. Odom dislikes haircuts) have no support.
- **Fix:**
  - Hint 2: "Compare what Part 1 can tell the reader with what Part 2 can tell."
  - Replace D with a plausible misreading, for example "so readers can tell that Darius was never really nervous". Paragraph 5 contradicts it, but a hasty reader could pick it.

### SHOULD

**C-S1. Hint 2 points to the one sentence that holds the answer. Items: P5 (addon), C03, C05, C09, C14, S01 and S02.**
- P5: "Listen to what she says very quietly" leads to "I guess talking to people helps".
- C03: "Find the one sentence with the word I…" counts the I's for the child.
- C05: hint 1 ("…even when the story shows something else") plus hint 2 ("Reread the last paragraph") lead to "See? Grumpy."
- C14: "…what the coach tells the narrator to do" points at the key's content.
- S01: "Look at what Grace does and at what happens in Jordan's first game."
- S02: "Look at what the speaker says it has in the first two lines" (roots and branches, so a tree).
- **Fix:** keep the paragraph or part pointer and drop the part that does the step. For C03: "Look at each I in the box. Is it inside or outside quotation marks?"

**C-S2. SK-TC2a-C12 (`cr`): sound in shape, with three fixes.** See §6.2.

**C-S3. SK-TC2a-C09: the prompt echoes the key, and the hint 2 region has only one real target.**
- **Evidence:**
  - The prompt asks which sentence "shows that he likes his new haircut". The key is the only target containing "new haircut".
  - Hint 2 ("the end of Part 2") leaves the key and "'Maybe,' he said.", which is a weak distractor.
  - The item also has the same frame as form A T4 ("Which sentence shows that the narrator's view … changes?").
- **Fix:**
  - Prompt: "…shows that he is pleased with how he looks after all".
  - Add p4:7:2 ("'Same time next month, Darius?' I asked.") as a target. It sits in the hint 2 region, it is Mr. Odom's words, and it is not a key.
  - Keep 7:4 out, as the author did, because it would be a second key.

**C-S4. C04 and C05 are near twins.**
- Same text (p3), same component (the narrator's view against what the story shows), same context. They differ only in format and verb, which fails the two-of-four rule.
- **Fix:** move one of them to a new text, or change C05's component to the *reason* for the narrator's view (Lamar's influence), with Part B evidence.

**C-S5. SK-TC2a-C10 and SK-TC2a-S01 both have two distractors with no support.** For C10, see C-M3. For S01, B ("Grace did not want to help") and C ("lost every game") are flatly contradicted, so it is a two-option item. Replace one with a plausible misreading, for example "Jordan wants Aunt Rae to take him back to chess club."

### NOTE

- **C-N1.** C11 asks for two clues "that the speaker is a dog". A tail and paws show an animal, and a cat would fit too. "floppy ears" (3:1) and "Mud is best" are more dog-specific.
  - Either reword it to "show that the speaker is an animal", or offer floppy ears as a choice.
  - The key is still the only defensible pair among the options offered.
- **C-N2.** C03 and C13 use the same quotation-mark logic (Rico says I; Marcus says "I did it!"). They pass the distinctness rule on text and context.
- **C-N3.** S02 (the tree riddle in four lines) is easy for grade 3. Its `like` mapping to C06 (the narrator change in Part 2) is loose.
- **C-N4.** p3 reads at FK 1.6 and p4 at 2.3 (author's figures), below the plan's "about 450 to 800L". The content (an unreliable narrator, a two-narrator story) is properly grade 3. If the texts are lengthened, keep the ideas.
- **C-N5.** Engine, for the lead: on a `cr` item, Show me how shows "You can still choose it and check." That line is for choice items. Confirmed at port 8743.
- **C-N6.** No form B exists. I checked form A (T2 to T6): no passage or theme is shared.
  - C14 and S01 ("what might a reader think…") are near the T3 and T5 skill. They use new texts and a different frame, so they count as practice.
- **C-N7.** Ladders that pass: C01, C06, C07, C11, C13, C15 and S03.

## 4. 3.T.SS.2.a "Similes, metaphors and idioms"

**Official wording** (p. 30; it matches `standards-3-5.txt` line 859): "Identify and describe the use of figurative language, such as similes, metaphors, and idioms in a wide variety of texts."
- **Alignment is good.** All three types appear in every set.
- "Describe the use" is covered by the purpose items (C03, C13) as well as the meaning items.
- "Wide variety of texts" is met: a story, a journal, a coach's words, a poem, a note, an article and a class report.
- **Learn It** prepares every item type:
  - teach point 2 ("noisy is not a metaphor") prepares C14;
  - point 4 ("ask why the author chose it") prepares C03 and C13;
  - point 5 (not every like or as) prepares C04, C09 and S03.
- **Shape:**
  - Points are correct.
  - DOK: five items at DOK 3, none at DOK 1.
  - Formats: six, with four `mc`.
  - Passages p4 and p5 are new and share nothing with form A (p2 "Moving Day") or form B (p3 "A Letter from Camp").

### MUST

**S-M1. A systematic hint 2 pattern: the hint tells the child how the two things are alike, which is the "describe" step the item assesses. Items: C03, C05 (slot 2), C06, C08 and C15.**

| Item | Hint 2 (and hint 3 where it closes the gap) | Effect |
|---|---|---|
| C03 | h2 "How is Rosa feeling as she stands at the edge of the pool?"; h3 "…ask which of the other choices fits the way Rosa feels" | Only the key is about a feeling, so only the key is left |
| C05 | h2 "…think about what she hopes will happen at the next meet" | Slot 2: only "will do even better at the next meet" is about the next meet going well |
| C06 | h2 "How does it move, and how hard does it push?"; h3 "…which kind of water a sleepy cat would be like" | Gentle, so only the key is left |
| C08 | h2 "Think about what a recess yard sounds like, and what kids chasing a ball look like." | Each clause maps onto one key (noise; fast and playful) |
| C15 | h2 "Think about what a real desert looks like, how ants work, and what the garden looks like by June." | All three matches are made for the child |

- **Fix:** hint 2 should point to the words or the nearby clue sentence, and leave the comparison to the child. For example:
  - C08: "Reread stanza 2. What do the gulls do in each line?"
  - C06: "Reread stanza 1 and picture the whole scene."
  - C15: "Find each phrase in the writing, and read the sentence around it."
  - C03: "Reread paragraph 1. What else does the author tell you about Rosa there?" Then hint 3 rules out one literal choice and stops.

### SHOULD

**S-S1. Hint 2 points to the one sentence that proves Part B (or the key). Items: C02, C07, C12, C13 and S02.**
- C02: "reread what happens to Rosa just before her brother starts jumping" leads to "She had come in third place!"
- C07: "What happens to the castle right before Grandpa Joe speaks?" gives the Part B line.
- C12: "What does the author say about finding an anole on a tree?" gives Part B.
- C13: "Read the sentences that come right after the metaphor." Hint 3 then leaves A and C.
- **Fix:** keep the paragraph or stanza pointer and drop the "right before" or "right after" cue.

**S-S2. S03 copies form B TB4's distractor design one for one, and C04 and C09 drill the same trap.**
- **Evidence:**
  - TB4 asks "Which sentence from the letter uses a simile?" Its distractors are a like-means-enjoy sentence, a metaphor and an idiom.
  - S03 asks "Which sentence from Jamal's report uses a simile?" Its distractors are a like-means-enjoy sentence, a metaphor and a same-kind comparison.
  - C09 is a whole item on "I like to build a castle here".
- **Judgement:** the like-means-enjoy point is taught (teach point 5) and legitimate to practise. But three items on it, one of them in TB4's exact frame and choice design, make TB4 a rehearsal.
- **Fix:** turn S03 into a describe item (for example, what "as small as a bottle cap" tells the reader), or drop the like-means-enjoy distractor from S03.

**S-S3. S01 explains itself.** The stem says "You are all sponges! … You soak up everything I teach." The meaning is in the next sentence, so as a recovery item for P5 and C06 it is easier than either. Remove the second sentence, and let "ask question after question" carry the clue.

**S-S4. p5 "A brown anole on a tree trunk" names a different species in Georgia.**
- **Evidence:**
  - The brown anole (*Anolis sagrei*) is an introduced species "firmly established in some areas of coastal and southern Georgia" (UGA SREL, below).
  - The article means a green anole that has turned brown.
  - This sentence is C12's Part B key, so a Georgia child who knows the species could be confused.
- **Fix:** "An anole that has turned brown on a tree trunk can be very hard to spot."

### NOTE

- **S-N1.** Facts in p5 are confirmed (sources in §7):
  - green to brown with cool air or stress;
  - adhesive toe pads;
  - a pink dewlap and head-bobbing between males;
  - they watch, then lunge at prey.
  - "Sticky pads" is a fair grade 3 simplification.
- **S-N2.** C09 hint 1 ("Not every like makes a simile") all but answers slot 2. It is acceptable, because the item exists to practise that rule.
- **S-N3.** S03's writer is Jamal, the form A protagonist ("Moving Day"). The name only; no content is shared.
- **S-N4.** Ladders that pass: P5, C04, C09, C10, C11 and C14. The C10 idiom "just what the doctor ordered", next to a hurt knee, is a well-made trap.

## 5. 3.T.T.4.a "How poems are built: lines, stanzas, rhyme and repetition"

**Official wording** (p. 35; it matches `standards-3-5.txt` line 1031): "Discuss and explain techniques used to present and design poetry, including rhyme scheme."
- **Alignment is good.** Rhyme scheme (the hardest component) appears in every set: C01 and C05; C06; C13. The explain items are C02, C06, C09, C11, C12 and C15.
- **Learn It and Watch Me:**
  - Watch Me 3 (the seed that sprouts) models the changed refrain, which covers C12 and S03.
  - Teach point 5 covers stanza jobs, a new stanza for a new event (C09) and comparing poems (C10).
- **Rhyme checks (all correct):**
  - "Flip!" rhymes in pairs (AABB, AABB, AA).
  - "Double Dutch" rhymes in pairs.
  - "Spin, Spider, Spin" is ABAB in every stanza.
  - "Game Night" is xAxA.
  - In C13: library ABAB (key), soccer AABB, bus xAxA (ABCB), bakery ABBA (rows and nose rhyme).
- **Shape:**
  - Points are correct.
  - DOK: six at DOK 3. C03 and C05 behave like DOK 1 (counting; finding the odd end word) but are labelled 2. See P-S3.
  - Formats: six, with six `mc`, which is at the limit.

### MUST

**P-M1. SK-TT4a-C04: hints 2 and 3 leave only the key.**
- **Evidence:**
  - Hint 2 says "Compare the way stanza 1 ends with the way stanza 3 begins. Something happens in between." That limits the targets to stanza 2: 2:2 and 2:3.
  - Hint 3 removes 2:2 (counting to three), so only 2:3 is left.
- **Fix:**
  - Hint 2: "Find where the poem stops going the way it started."
  - Or keep hint 2 and make hint 3 rule out a target outside stanza 2, such as 3:1 (the laughing).

**P-M2. SK-TT4a-C07: hint 3 removes the only non-key line that repeats words.**
- **Evidence:**
  - Only three targets repeat words: 1:2 (slap), 2:3 (Don't stop) and 2:4 (hop).
  - Hint 3 removes "slap" and says "Check the other lines the same way", so only the two keys remain.
- **Fix:** add p6:1:1 ("The ropes go swinging, round and round."), which repeats "round" and is about the ropes. Then hint 3's removal of "slap" still leaves a real competitor.

**P-M3. SK-TT4a-C08: hint 2 states both halves of the key.** "What does the bell do to the game, and what does the speaker say about tomorrow?" maps onto "The jumping stops, and the speaker plans to play again". Part B is the "tomorrow" line.
- **Fix:** "Read stanza 3. Compare it with what was happening in stanza 2."

**P-M4. SK-TT4a-C11: hints 1 and 2 map onto the two keys.**
- Hint 1 says "Ask what the repeated line sounds like and what it tells about."
- Hint 2 says "Say … out loud … Then reread what the spider is doing."
- "Sounds like" leads to the chant key, and "what the spider is doing" leads to the busy-working key. Hint 3 then removes E.
- **Fix:**
  - Hint 1 should state the strategy only: "Repetition can add a beat and can make an idea stand out."
  - Hint 2: "Reread stanzas 1 and 2, and say the repeated line each time."

### SHOULD

**P-S1. Hint 2 points to the answer. Items: C01, C02, C09, C12, S02 and S03.**
- C01: "Say the four end words of stanza 1" solves slot 2, because "sound and round" is a stanza 1 pair. Point to stanza 2 instead.
- C02: "What would be making a noise?" together with hint 1 "Repeated words can copy a sound". "singing" survives as a competitor, so this is SHOULD and not MUST.
- C09: "What is the speaker doing in the lines before 'One, two, three'?" gives the waiting idea.
- C12: "What does the web look like now, and what comes into view?" gives done and a fly.
- S02: "Read the line right after the first 'Thump, thump, thump.'" gives the dribbling.
- S03: "Compare what the kitten does in stanza 1 with what she does in stanza 2." gives sleeping, then pouncing.
- **Fix:** as in the other lessons, point to the stanza and drop the question that answers the item.

**P-S2. SK-TT4a-C14 is the form A and form B item frame, word for word.**
- **Evidence:**
  - T4 asks "Match each sentence to the stanza it describes." (three rows, Stanza 1 to 3).
  - TB4 asks "What happens in each stanza? Match each summary to its stanza." (three rows).
  - Together P4 asks "Match each sentence to the stanza it describes."
  - C14 asks "Match each sentence to the stanza of 'Game Night' that it describes." (three rows, Stanza 1 to 3).
  - So the child meets the check's exact task twice before the check.
- **Fix:** keep "Game Night" and change the task.
  - For example, an order item: put the three stanza summaries in the poem's order and add one summary that fits no stanza.
  - Or a dropdown: "Stanza 1 sets the scene / shows the change / shows the end".

**P-S3. C03 and C05 are DOK 1 in practice.**
- C03 counts the stanzas and the lines in each. C05 finds the end word that does not rhyme.
- Relabelled, the lesson would have two DOK 1 items, which is within the cap.
- The checks (T1, T2, T5, TB1, TB2 and TB5) are all DOK 1, so this does not hurt the ramp.

### NOTE

- **P-N1.** C04's "turn" ("when things stop going as planned") is closer to plot than to a poetry technique. Teach point 5 ("how things change") supports it, and the author kept 2:4 out of the targets correctly.
- **P-N2.** C13 shares the "same rhyme pattern as" frame with 3.T.T.4.b form A T5, but the key logic differs (ABAB against xAxA). That is acceptable.
- **P-N3.** S03's `like` includes C04, which is loose. C12 is the true mirror.
- **P-N4.** C02 and S02 share the frame of Together P3, form A T3 and form B TB3 ("Why does the poet repeat…"). That frame is the standard's "explain" task, and the keys differ (sound against motion), so this is practice.
- **P-N5.** Ladders that pass: C03, C05, C06, C10, C13, C15 and S01.

## 6. The two judgements the lead asked for

### 6.1 TS-PS C05, C08 and C09: practice or rehearsal of the check?

TS-PS form A ("The Muddy Path"):
- T2: hot text, the sentence that shows the second try failed
- T4: ebsr, how the class finally solves it, and the sentence that shows the solution worked
- T5: why the author includes paragraph 4, which holds the real cause

| Item | Task | Closest check item | Same frame? | Same key logic? | Judgement |
|---|---|---|---|---|---|
| **C05** (p3, hot text) | the sentence that tells the real reason the table wobbles | T5 | No: T5 asks what a paragraph does, C05 asks the child to find a sentence | Same component | **Practice.** It is the lesson's core skill (teach point 3), in a different task |
| **C08** (p4, ebsr) | what really causes the tangles, plus the supporting sentence | T5's component in T4's format | Partly | Same component | **Practice**, but with C05 and S02 it trains "the cause is in paragraph 4" (T-S3) |
| **C09** (p4, hot text, choose two) | the sentences that show the chant solved the problem | **T4 Part B** ("Which sentence from the story shows that the solution worked?") | **Yes** | **Yes:** the result sentence in the last paragraph, after the decision | **Rehearsal** of T4 Part B. p4 even ends with p2's closing sentence, "The problem was finally solved!" |

**Overall:**
- C05 and C08 practise what the check measures, on new texts and in other frames. That is what core is for.
- The risk is the passage template (T-S3), not these two items.
- **C09 is a rehearsal.** Keep the component (the evidence that a solution worked), but change the task. For example:
  - a match that sorts p4 sentences into "the solution" and "proof it worked", with 5:1, 5:2, 6:1 and 6:2;
  - or a dropdown: "The girls' plan is told in paragraph ___; the proof that it worked is in paragraph ___."
- Also fix T-M1 and T-S3.

### 6.2 3.T.C.2.a C12 (`cr`): are the sample and criteria sound?

**The prompt:** "The speaker thinks the bath is a mistake. What do YOU think about the bath? Write two or three sentences. Tell the speaker's view, tell your own view, and use one detail from the poem to explain your view."

**Sound:**
- The task matches the standard's "distinguish them from their own".
- The `why` says "Many answers can be right."
- Criterion 2 says "I may agree or disagree", so agreeing with the speaker is allowed.
- Criterion 4 ("which view is the speaker's and which view is mine") is exactly the distinction the standard asks for.
- The sample:
  - is three sentences, as asked;
  - separates the two views;
  - uses a real detail ("You smell so sweet!", the giggling);
  - adds a second speaker detail of its own ("would rather smell like mud").
- Hint 3's sentence frame is a fair scaffold.
- Show me how labels the sample "One good answer" and adds "Other answers can also be right", so it never claims one exact answer.

**Fix three things (SHOULD, C-S2):**
1. **The prompt gives away the speaker's view.** Criterion 1 ("I told the speaker's view") can then be met by copying the prompt, so the item never asks the child to *describe* the speaker's perspective.
   - Prompt: "How does the speaker feel about the bath? What do YOU think? Write two or three sentences. Use one detail from the poem to explain each view."
   - Criterion 1: "I told the speaker's view and a detail that shows it."
2. **`how` step 4 says "One good answer is shown above."** The player renders the sample *below* the steps (`player.js` lines 300 to 304, confirmed in the browser at port 8743). Change it to "below", or to "One good answer follows."
3. **Hint 2 steers the child towards the people's side** ("Look at what the people in the poem do and say in stanzas 3 and 4"). A child who agrees with the dog needs details from stanzas 1 to 3, such as tucking the tail, hiding or kicking.
   - Hint 2: "Find one detail in any stanza that helps explain what you think."

The sample's reasoning ("they are taking good care of their dog and having fun") is a little loose against its own view ("a good idea"), but it is acceptable as a model.

## 7. Facts checked

- Bird strikes:
  - a single hawk silhouette does not work;
  - markers must be no more than about two inches apart over the whole pane;
  - reflections of trees and sky cause the strikes.
  - TS-PS p5 is accurate. Source: https://www.nycbirdalliance.org/take-action/make-nyc-bird-friendly/make-your-windows-bird-friendly
- Green anole: green to brown with mood, temperature and light; adhesive toe pads; a pink or reddish dewlap; male head-bobbing; sight hunters that dash at prey. SS2a p5 is accurate.
  - https://encyclopediaofalabama.org/article/green-anole/
  - https://gpb.org/news/2023/05/16/see-green-anole-in-your-yard-why-these-redneck-lizards-thrive-in-the-georgia-summer
- Brown anole (*Anolis sagrei*) established in coastal and southern Georgia (finding S-S4): https://srelherp.uga.edu/lizards/brown-anole
- The "out of the park" idiom (to do something very well): https://www.merriam-webster.com/dictionary/out%20of%20the%20park

No other factual claims needed checking: ants and a water moat, a loose table screw, beans and light, raccoons tipping cans, and the idioms "chin up", "green thumb", "keep your eyes peeled", "on the right track" and "just what the doctor ordered" are common knowledge used correctly.

## 8. Leakage summary

- **Passages and key facts:** none shared with form A, form B, Watch Me, mixed sets, the Practice Test or other lessons' checks. I checked with my own 5-gram and 6-gram scan, ignoring boilerplate that appears in four or more sources (`/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rev2A/ngram2.js`). The single substantive hit is the TS-PS p4 and p2 closing sentence (T-S3).
- **Frames rehearsing a check:**
  - TS-PS C09 rehearses form A T4 Part B (T-S2).
  - TS-PS C06 rehearses 3.T.T.1.b form A T2 (T-S5).
  - SS2a S03 rehearses form B TB4 (S-S2).
  - TT4a C14 rehearses form A T4 and form B TB4 (P-S2).
- **Within sets:** TS-PS C08 answers C10 (T-S4). I found no other cross-item giveaways in hints, `how` or `why`. The authors' own leak controls, listed in their logs, hold up.

## 9. Summary for the lead

| Lesson | MUST | SHOULD | NOTE | Verdict |
|---|---|---|---|---|
| TS-PS | T-M1 C09 (hint 2 leaves the keys); T-M2 C15 (hints and distractors) | T-S1 hint 2 in six items; T-S2 C09 rehearsal; T-S3 passage template; T-S4 C08, C10 and C13 overlap; T-S5 C06 frame; T-S6 P5 DOK; T-S7 S03 `like` | 7 | **CHANGES REQUIRED** |
| 3.T.C.2.a | C-M1 C04; C-M2 C08; C-M3 C10 | C-S1 hint 2 in seven items; C-S2 C12 `cr`; C-S3 C09 prompt echo; C-S4 C04 and C05 twins; C-S5 weak distractors | 7 | **CHANGES REQUIRED** |
| 3.T.SS.2.a | S-M1 C03, C05, C06, C08 and C15 (hint 2 gives the comparison) | S-S1 hint 2 in five items; S-S2 S03 against TB4; S-S3 S01 explains itself; S-S4 "brown anole" | 4 | **CHANGES REQUIRED** |
| 3.T.T.4.a | P-M1 C04; P-M2 C07; P-M3 C08; P-M4 C11 | P-S1 hint 2 in six items; P-S2 C14 copies the T4 and TB4 frame; P-S3 DOK labels | 5 | **CHANGES REQUIRED** |

**Blind solve:** 71 of 71 (100%), fully blind; the `cr` item C12 is consistent with its criteria. I would defend every key.

**Pattern for later batches.** The commonest fault here is not hint 3. It is **hint 2 answering its own question**, either "what X notices" or "think about how A is like B". Hint 2 should say *where* to look and stop there.
