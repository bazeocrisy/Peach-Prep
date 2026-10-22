# B0 author log: 3.T.T.1.c "Characters and the story's lesson"

**Role:** content author for batch B0 (the reference lesson). **Not a review.** Nothing in this log certifies the items. Reviewers A (blind solver) and B (alignment and quality) must not read this log before they finish blind solving (04-content-plan.md §8).

**File changed:** `js/data/lessons/T-T1.js`, the 3.T.T.1.c block only. Added passages `p4` to `p9` and the lesson keys `core`, `similar` and `addons`. After review, `teach.points` and `learn` were also revised (see §8). Nothing in `practice`, `test`, `testB` or `clues` changed, and no existing id changed.

**Sections 1 to 7 describe the state after the review fixes. §8 lists every change made after review.**

**Official wording** (Georgia K-12 ELA Standards, grades 3-5, p. 32; `js/data/standards.js`): "Describe characters' traits, motivations, actions, thoughts, and feelings and explain their connection to the central message, lesson, or moral of the story."

Note for the lead: the B0 brief summarised one component as "actions → sequence of events". The Georgia wording does not mention a sequence of events (that phrase belongs to the Common Core standard RL.3.3). Here actions are taught as the Georgia text frames them: what a character does, what it shows, and how it leads to the outcome and the message (C03, C04, C11 and C13). C11 still covers "what happens because of an action".

## 1. Structure and gates

| Check | Result |
|---|---|
| `core.rev` | "1" |
| Sets | Three sets of five, 15 items, 23 points |
| Similar bank | 3 items (S01 to S03), every core id is in some `like` |
| `node verification/check-content.js --all` | PASS, 0 failures, 6 warnings (the same six as before B0; none are in 3.T.T.1.c) |
| `python3 verification/readability.py` | 0 passages above grade 4.5. New passages: p4 FK 2.6, p5 1.9, p6 1.8, p7 1.3, p8 2.7 (current p1 3.2, p2 2.0, p3 3.6) |
| `check-instructional-copy.js`, `check-writing.js` | Pass (they do not read the new keys yet) |
| Scratch validator (scratchpad `b0/inject.js`, injected into a copy of check-content) | 0 failures. It runs every `checkItem` rule on each new core and similar item, and runs the clue rules (answer leak, position words, giveaway on h1 and h2) on each hint. It also checks the 3×5 structure, ids, refs, addons, `like` coverage, hot-text answers quoted in hints, and that no check passage is used |
| Six-word n-gram scan of the new passages and items against every other set, task and lesson on the site, plus this lesson's Learn It, Watch Me, Together, form A and form B | No content matches. All hits were shared directions ("This question has two parts…") or set 1 quoting its own passage p1 |
| Smoke test, port 8711 | `#skill/3.T.T.1.c/try` and `#play/SK:3.T.T.1.c:y/try` load with no page errors. The current engine ignores the new keys |

## 2. Passages added

All are original, set in ordinary places, and never used by `test` or `testB`. Children's names are ordinary first names; no real people or brands.

| Id | Title | Words | Domain | Used by | Central message (not stated in the text) |
|---|---|---|---|---|---|
| p4 | The Fun Run | 179 (paragraph 6 revised after review) | sports | C06 to C10, C14 | Helping someone in need matters more than winning a prize |
| p5 | The Frogs of Willow Creek | 171 | nature / community problem solving | C11 to C15 | One person's small start can grow into a big change |
| p6 | Biscuit's Breakfast | 109 | family / neighbours | S01 | Keeping a promise (trait item) |
| p7 | The Tricky Puzzle | 103 | school | S02 | Asking for help (motive item) |
| p8 | The Rainy Picnic | 106 | community | S03 | When a plan goes wrong, a new idea can still save the day |
| p9 | The Last Seat | 146 | community (city bus) | C03 | Kindness to someone who needs it (added after review; C03 tests action vs speech or thought) |

Word counts satisfy both the brief (60 to 180) and 04 §4.3 rule 2 (100 to 250).

**Themes deliberately avoided** (04 §5 and a scan of every literary passage on the site): honesty (set 1 already has it, and so do The Blue Pitcher in PT-1 and the Learn It example); teamwork and listening (form A); patience and trying again (form B, 3.T.RA.2.a The Spring Song); welcoming a newcomer (Room for One More, Moving Day); sharing (Kofi's Mangoes, The Red Sled, Deja's Kite); being small or quiet but useful (The Smallest Cousin, Ravi and the Kingfisher); fear of the dark or heights (Firefly Jar, The Night the Lights Went Out, The Tallest Slide). The p4 race is a community fun run, not a school Field Day, so it does not share a setting with the 3.T.SS.1.d Field Day draft.

## 3. The fifteen

Ids are numbered by position in the fifteen: question 3 is C03. Slots 1, 2 and 5 hold reused items, so C01, C02 and C05 do not exist.

Task verbs follow 04 §4.4.

| # | Id | Set | Component (official) | Task | Format | Pts | DOK | Text | How it differs from the others |
|---|---|---|---|---|---|---|---|---|---|
| 1 | SK-TT1c-P4 (ref) | 1 | traits | identify | ms | 2 | 2 | p1 | The only "choose two traits" item; it is the near-transfer start on the Together passage |
| 2 | SK-TT1c-P5 (ref) | 1 | feelings (change) | identify the sequence | order | 1 | 2 | p1 | The only ordering item. Feelings are named; the child sequences them. C08 instead has the child infer unnamed feelings from body clues in a new text |
| 3 | SK-TT1c-C03 | 1 | actions | use evidence | hottext | 1 | 2 | p9 | The child must tell an action that proves a choice apart from speech, a thought, earlier actions that point the other way, and another character's action. The only set 1 item on a different text |
| 4 | SK-TT1c-C04 | 1 | actions → central message (a secondary character's words) | explain (author's purpose) | mc | 1 | 3 | p1 | The only item about why the author gives a minor character a line, and how that line points to the lesson |
| 5 | SK-TT1c-P6 (ref) | 1 | central message + evidence | use evidence | ebsr | 2 | 3 | p1 | Message plus a supporting sentence, on the set 1 text |
| 6 | SK-TT1c-C06 | 2 | traits (from one repeated action) | explain / infer | mc | 1 | 2 | p4 | Infers a trait from one quoted habit, linked to a goal. Unlike P4, the trait word is not given in the choices; the choices are reasons |
| 7 | SK-TT1c-C07 | 2 | motivations | use evidence | ebsr | 2 | 3 | p4 | The only motive item, with evidence. The distractors are contradicted by the text (too tired, told by an adult, can still win) |
| 8 | SK-TT1c-C08 | 2 | feelings across the story | identify (infer) | match | 2 | 2 | p4 | Four moments are matched to four unnamed feelings. Includes "unsure what to do", a mixed feeling, which P5 does not have |
| 9 | SK-TT1c-C09 | 2 | thoughts | identify (choose two) | hottext | 2 | 2 | p4 | The only thoughts item. The child separates a thought and a memory from a body urge, an observation and events |
| 10 | SK-TT1c-C10 | 2 | central message | explain (lesson or event) | mc | 1 | 3 | p4 | Two distractors are true events and one is a lesson-shaped claim the ending contradicts. It tests "lesson, not summary" |
| 11 | SK-TT1c-C11 | 3 | actions → what happens | explain (cause and result) | ms | 2 | 2 | p5 | The only cause-and-result item for actions. Every distractor is a true event that happens before the action |
| 12 | SK-TT1c-C12 | 3 | traits + motivations | construct | dropdown | 2 | 2 | p5 | The only build-a-sentence item. The trait slot's distractor "discouraged" is the feeling of one moment (the lesson's mix-up) |
| 13 | SK-TT1c-C13 | 3 | traits → action in a new scene | transfer (predict) | mc | 1 | 3 | p5 + new stem (school) | A fresh classroom scene. The child predicts behaviour from a trait; one distractor matches the character's passing thought, not his actions |
| 14 | SK-TT1c-C14 | 3 | traits and thoughts, two characters (also 3.T.T.1.d) | compare | ms | 2 | 3 | p4 + p5 | The only cross-story compare item. Each true statement must fit both characters; two distractors are true of only one |
| 15 | SK-TT1c-C15 | 3 | central message | transfer (same lesson, new situation) | mc | 1 | 3 | p5 + four new mini-scenes | Lesson transfer. Two distractors match the story only by topic (cleaning, frogs); one shows the opposite (waiting) |

### Tallies against 04 §4.4 and §6

- **Components** (each must appear at least twice; the hardest in every set):
  - traits: 1, 6, 12, 13, 14
  - motivations: 7, 12 (Together P1 is a third)
  - actions: 3, 4, 11, 13
  - thoughts: 9, 14 (Together P3 is a third)
  - feelings: 2, 8
  - central message: 4, 5, 10, 15, one or more in every set
  - Set 1 touches four components, set 2 five and set 3 five.
- **Formats:** 7 in all (mc 5, ms 3, ebsr 2, hottext 2, order 1, match 1, dropdown 1).
  - mc is used five times; the limit is six.
  - Technology-enhanced formats: 10 items.
- **DOK:** DOK 1 on 0 items, DOK 2 on 8, DOK 3 on 7.
- **Task verbs:**
  - identify: 1, 2, 8, 9 (four; the limit is five)
  - explain: 4, 6, 10, 11
  - evidence: 3, 5, 7
  - construct: 12
  - compare: 14
  - transfer: 13, 15
  - Edit is not applicable: this is a reading lesson, and the §4.4 edit minimum is for writing and GUM lessons.
- **Texts:** p1, p9, p4 and p5, plus two short new stems (C13's scene and C15's four mini-scenes).
  - Items per passage: p1 has 4, p9 has 1, p4 has 6 (all within the limit of seven), and p5 has 5. With Together, the child now reads p1 seven times, not eight.
- **Domains:**
  - community and family: 1, 2, 4 and 5; community (bus): 3
  - sports: 6 to 10
  - nature and community problem solving: 11 and 12
  - school: 13
  - sports with nature: 14
  - mixed everyday: 15
  - That is four or more domains, and none covers more than six items.

## 4. Similar bank

Each extra question has its own new text, so none of them shares a passage with core or the checks.

| Id | Set mirrored (`like`) | Component | Format | DOK | Text | Notes |
|---|---|---|---|---|---|---|
| SK-TT1c-S01 | P4, C06 | traits from actions | mc | 2 | p6 | The character chooses a promise over fun. The distractors are a reversed choice, forgetting, and a money motive with no evidence |
| SK-TT1c-S02 | C07, C12 | motivations + evidence | ebsr | 2 | p7 | The motive is stated as a thought; Part B separates it from setting and result sentences |
| SK-TT1c-S03 | C10, P6 | central message | mc | 3 | p8 | The distractors are a true event, a character's mistaken words, and an unsupported lesson |

## 5. Reuse decisions

| Item | Decision | Reason |
|---|---|---|
| SK-TT1c-P4, P5, P6 (current Try) | **Reused by `{ ref }`** as questions 1, 2 and 5; hints and how are in `addons` | Marked reusable in 03-practice-inventory.csv. PP-004 rated the lesson STRONG with no open findings. No collision with a new item: P4 is the only "choose two traits" item, P5 the only ordering item, and P6 the only set 1 message item |
| SK-TT1c-P1, P2, P3 (Together) | **Kept in Together**; three hints and how added in `addons` | They stay guided practice (04 §5). Not counted in the fifteen |
| P2 addon | Rewritten while authoring | My first hint 3 and Show me how for P2 described the walking-back sentence as "an action", which would have pre-taught the key to C03. Both now rule out a different sentence (the surprised eyes in paragraph 3), and the misconception line no longer points at the later action |
| Sketch item "motivation, explain why she hesitates" (set 1) | **Not written** | Together P1 (motive for keeping the money) and P3 (her paragraph 5 thoughts about Mr. Okafor) already practise this on p1, so the core item would repeat a key fact already shown in Together. Motive is covered by C07 and C12 on new texts instead |
| Sketch item "thought that leads to the choice (hot text)" (set 1) | **Not written** | Together P2 is a hot-text item on the same paragraph, and P3 names paragraph 5 thoughts. Replaced with C03 (an action hot text, a different component) and C04. Thoughts are covered on a new text by C09 |
| Sketch "compare set 2 and set 3 characters" | Written as C14, with both passages attached | Each set stays self-contained, because the item carries p4 and p5 |

## 6. Notes for the lead and the engine

1. **Refs stay in `practice`.** Decided by the lead after review: the engine leaves out of Practice Together any practice item that `core` references, so Together shows P1 to P3. `{ ref }` is kept.
2. **`addons`** is a new lesson-level map: item id → `{ hints, how, misconception? }`. It should be merged onto the practice item when the lesson is registered. The merged ref items keep their existing `clue` and `why`.
3. New items carry `clue` (equal to `hints[0]`), `hints`, `how`, `why`, `std: ["3.T.T.1.c"]` and, on most items, `misconception`. No item uses `hintNarrow`, `comp` or `cr`. Components appear only in this log; `comp` is meant for leaf codes (01 §2.4), so I did not use it for sub-components.
4. C13 uses `stem` with passage p5. C14 lists two passages (`["p4","p5"]`), so the player must show both. C15's choices are short scenes of 14 to 17 words.
5. C09 is a choose-two hot-text item worth 2 points. Check that the hot-text scoring gives partial credit as SPEC §5 intends.
6. `similar[].like` lists only the core items each extra question really practises, and includes ref ids where they fit (P4, P6). Nine core items have no extra question: P5, C03, C04, C08, C09, C11, C13, C14 and C15. On those, "Try a similar question" is hidden (01 §2.2.1). This conflicts with 01 §2.6 rule 9 ("every core item is covered"); the lead kept the bank at three, so that rule must become a warning or wait for more similar items.
7. C08's prompt now says "Use each feeling once." The engine does not enforce it: `T.match` lets a row pick any column. The scoring already treats the item as one-to-one for partial credit.

## 7. Points reviewers should test hardest

These are listed so reviewers do not miss them. They are not resolved here.

- C14: is "does something hard to help someone or something else" defensible for Tariq, whose stated motive is that he wants to hear the frogs?
- C08: could "her cheeks burned" be read as embarrassed rather than disappointed? Only "disappointed" is offered.
- C06 hint 3, C08 hint 3 and S01 hint 3 are strong. Run the ladder audit (04 §4.5) on each.
- The P4 addon hints come almost word for word from the worked example in 04 §4.6. Hint 3 there ("one word that fits giving back what is not yours") may narrow too far.
- C09 includes the cue words "thought" and "remembered", so it is DOK 2 identification, not inference.
- p7 reads low (FK 1.3, heuristic). Check grade suitability.

## 8. Fixes after review

**Sources:** B0-review-1.md (R1) and B0-review-2.md (R2), and the lead's message of 2026-10-22. Every MUST and SHOULD was addressed. NOTEs were applied where they were cheap and safe (R1 NOTE-2 and NOTE-3, R2 N-2 and N-6). §7 above lists the risks I flagged before review; the reviewers have now judged them.

### 8.1 Changes that need a blind re-solve

These change a key, a passage, a choice, a target, a row or a prompt. Reviewers should re-solve them blind.

| Item or text | What changed | Finding |
|---|---|---|
| **p9 "The Last Seat" (new, 146 words, FK 3.0)** | A new community passage for set 1 | Lead: set 1 had eight passes over one story. R1 MUST-4: set 1 hints gave away C03 |
| **SK-TT1c-C03** | **Rewritten on p9** with the same id, component, format and points. The new prompt asks for "something Malik does, not something he says or thinks". The targets are an earlier action, an opposite action, a thought, the key, speech, and another character's action. The key is "Malik stood up and waved her toward his seat." | R1 MUST-4, R2 M-1. The old p1 version partitioned its targets by paragraph, and P4's hints pointed at its key. The id is unchanged because rev "1" has never been released or recorded |
| **p4, paragraph 6, sentence 2** | "her cheeks burned" became "her shoulders sank" | Lead and R2 S-3: in form A, T2, red cheeks mean *embarrassed* |
| **SK-TT1c-C08** | The prompt adds "Use each feeling once." Row 2 is now "when she sees Eli sitting in the dirt" (it was "…hears Eli fall and slows down"). The fourth feeling is now "proud" (it was "happy") | R2 S-4: columns could be reused, and "happy" also fit the start. R1 SHOULD-3: "slows down" is not in the text |
| **SK-TT1c-C09** | The prompt is now "…show what is going on in Kendra's mind…", so it no longer echoes "thinks or remembers". Target p4:3:4 ("His lip was shaking.", something she sees) was added. The keys are unchanged | R2 M-3, R1 MUST-2 |
| **SK-TT1c-C06** | Two weak distractors were replaced: "She wants to get stronger for soccer season." and "She runs whenever she feels bored at home." | R2 S-5 |
| **SK-TT1c-C10** | The distractor "If you practice every evening, you will win the race." became "It is better to finish first than to finish together." | R1 NOTE-3: it clashed with form B's practice lesson |
| **SK-TT1c-C11** | Option lengths are evened out. The keys are now 8 and 9 words and the distractors 8 to 9 words. The meaning of every option is unchanged | Lead and R2 S-7 |
| **SK-TT1c-C14** | `std` is now `["3.T.T.1.c", "3.T.T.1.d"]`. Two distractors that were false for both characters were replaced with sentences true of only one: "Each one practices every single evening to get ready." (Kendra only) and "Each one is joined by neighbors who come to help." (Tariq only). "Each one works with a whole team from the very start." is false for both. The "prize" option was removed | R1 SHOULD-2, R2 S-8 |
| **p8, paragraph 3** | "who kept the key" became "who kept the key to the community center" | R2 N-6. No answer depends on it |
| **SK-TT1c-S02** | DOK changed from 3 to 2. The key is unchanged | R2 N-2 |

### 8.2 Hint, how and why changes only (ladder audit and same-set leakage)

| Item | Change | Finding |
|---|---|---|
| C04 | Hint 2 no longer says "what Marisol did instead". Hint 3 rules out only "upset", then asks a neutral question about "not many people". The how and why no longer say "lesson about honesty" or "honest choice", which had pre-taught P6's key | R1 MUST-1 |
| C06 | Hint 3 no longer echoes "something she wants" or the claim about meeting Eli. It now says "Eli does not appear in the story until race day" and points to the sentence before the laps. The how and why are corrected the same way | R1 MUST-1, R2 S-5 |
| C07 | Hint 1 says "turn back", not "stop". Hint 2 says "What happens to Eli, and what do you notice about him?" without echoing "sees". Hint 3 rules out only "too tired", and for Part B says only "must match your Part A answer". The how and why no longer call any paragraph 4 sentence a thought, and "right before" is corrected to "just before she decides what to do" | R1 MUST-1 and MUST-3, R2 M-2 and S-6, R1 SHOULD-3 |
| C08 | Hint 3 and the how no longer mention her memory; they now say part of her wants to keep running while Eli is hurt. The how and why base "disappointed" on the ribbon she wanted for two years, and a misconception line was added: "read a body clue with what just happened" | R1 MUST-3, R2 S-3 |
| C09 | Hint 1 no longer lists the cue words. Hint 2 points to "between Eli's fall and the moment Kendra jogs back" without counting sentences, which leaves four targets. Hint 3 rules out the thud, an event | R1 MUST-2, R2 M-3 |
| C11 | Hint 2 is now "Find Tariq's action. Then ask what other people do after they see it." It no longer sorts the options by paragraph | Lead, R1 SHOULD-1, R2 S-7 |
| C12 | Hint 3 no longer says "go the other way", which pointed at *determined* | R1 SHOULD-1 |
| C14 | Hint 3 now rules out the Kendra-only practice sentence | follows the C14 rewrite |
| C15 | Hint 3 no longer asks "does the person start alone"; it ends with "Say the story's lesson aloud, then test the two situations that are left" | R1 MUST-1 |
| S01 | Hint 3 no longer says "what he told Mrs. Brooks he would do"; it asks why he made his cousins wait | R1 MUST-1 |
| S02 | Hint 3 no longer says "what he is afraid of"; it rules out "finished", then gives a neutral Part B line | R1 MUST-1 |
| S03 | Hint 3 no longer says "he was wrong", which echoed the key's "goes wrong" | caught by my extended giveaway check |
| P1 addon | Hint 2 is now "What does Marisol say the money would let her do?" Hint 3 rules out only the gift, with its reason, and stops | R2 S-10 |
| P4 addon | The hints are about her thoughts (paragraph 5) and her choice by the end, with no definitions of the keys and no pointer to the action in paragraph 6. The how is rewritten the same way | R1 MUST-1 and MUST-4, R2 S-9 |
| P6 addon | The Part B part of hint 3 now rules out only the "how the mistake happened" sentences, which leaves two | R1 SHOULD-1 |
| Similar `like` | S01 is now P4 and C06; S02 is C07 and C12; S03 is C10 and P6. See §6, note 6 | Lead, R1 SHOULD-4 |

### 8.3 Teaching (Learn It and Watch Me)

- **`teach.points`** still has five points, now rewritten:
  1. trait vs feeling: "A feeling can change from moment to moment, but a trait shows up again and again in what a character does";
  2. action vs words vs thoughts, plus reading a feeling clue from what just happened;
  3. motive, plus "What happened because of that choice?";
  4. other characters' words tell you about the main character's choice;
  5. the lesson works for anyone, and with it you can predict, compare two characters, and spot the same lesson in a new situation (old points 4 and 5 merged).
- **`learn` (Watch Me)** still has three examples:
  1. Rosa now adds a moment of fear, to model *feeling vs trait*, and asks for a *prediction* (a lost puppy).
  2. **New: Tasha at recess** replaces the Jamal motive example. It models *speech vs thought vs action*, *motive*, *cause and result*, and *why the author includes a minor character's words*. I dropped Jamal because extending his practice story would rehearse form B's practice lesson. Motive is still modelled, in the Tasha example's second step.
  3. Lena and Kwame now add *comparing two characters* and *the same lesson in a new situation*, tested by lesson rather than topic.
- **Plan:** in 04-content-plan.md §4.6, the worked example's hints and how were replaced with the fixed P4 ladder, and a short note now explains why the old hint 3 failed.

### 8.4 Gates after the fixes

- `node verification/check-content.js --all`: PASS, 0 failures, 6 warnings (the same six as before B0; none are in this lesson).
- `python3 verification/readability.py`: 0 passages above grade 4.5. The scores are p4 2.7, p5 1.9, p6 1.8, p7 1.3, p8 3.2 and p9 3.0.
- `check-instructional-copy.js` and `check-writing.js` pass.
- **Scratch validator (`b0/inject.js`).** It now runs the clue rules, including giveaway, on all three hints of every core and similar item, not only on hints 1 and 2. Result: 0 failures and 0 warnings in 3.T.T.1.c. It reports the core ids that have no similar item, as listed in §6, note 6.
- **Six-word n-gram scan** of the new and revised text, including the new teach and Watch Me text, against every other set, task and lesson and this lesson's form A and form B: only generic phrases match ("why does the author include the", "an action is something a character…").
- **Port 8711:** Teach, Watch Me and Practice Together render with no page errors.

### 8.5 For the re-review

- **Blind re-solve:** C03, C06, C08, C09, C10, C11 and C14. Also check passages p4 (paragraph 6) and p9.
- **Ladder audit and same-set leakage check:** every item in §8.2.
- **Teaching check:** the new teach points and the three Watch Me examples.
- I have not reviewed any of this myself.
