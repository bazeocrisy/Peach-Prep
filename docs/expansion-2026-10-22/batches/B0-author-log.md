# B0 author log: 3.T.T.1.c "Characters and the story's lesson"

**Role:** content author for batch B0 (the reference lesson). **Not a review.** Nothing in this log certifies the items. Reviewers A (blind solver) and B (alignment and quality) must not read this log before they finish blind solving (04-content-plan.md §8).

**File changed:** `js/data/lessons/T-T1.js`, the 3.T.T.1.c block only. Added passages `p4` to `p8` and the lesson keys `core`, `similar` and `addons`. Nothing in `practice`, `test`, `testB`, `teach`, `learn` or `clues` changed, and no existing id changed.

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
| p4 | The Fun Run | 179 | sports | C06 to C10, C14 | Helping someone in need matters more than winning a prize |
| p5 | The Frogs of Willow Creek | 171 | nature / community problem solving | C11 to C15 | One person's small start can grow into a big change |
| p6 | Biscuit's Breakfast | 109 | family / neighbours | S01 | Keeping a promise (trait item) |
| p7 | The Tricky Puzzle | 103 | school | S02 | Asking for help (motive item) |
| p8 | The Rainy Picnic | 102 | community | S03 | When a plan goes wrong, a new idea can still save the day |

Word counts satisfy both the brief (60 to 180) and 04 §4.3 rule 2 (100 to 250).

**Themes deliberately avoided** (04 §5 and a scan of every literary passage on the site): honesty (set 1 already has it, and so do The Blue Pitcher in PT-1 and the Learn It example); teamwork and listening (form A); patience and trying again (form B, 3.T.RA.2.a The Spring Song); welcoming a newcomer (Room for One More, Moving Day); sharing (Kofi's Mangoes, The Red Sled, Deja's Kite); being small or quiet but useful (The Smallest Cousin, Ravi and the Kingfisher); fear of the dark or heights (Firefly Jar, The Night the Lights Went Out, The Tallest Slide). The p4 race is a community fun run, not a school Field Day, so it does not share a setting with the 3.T.SS.1.d Field Day draft.

## 3. The fifteen

Ids are numbered by position in the fifteen: question 3 is C03. Slots 1, 2 and 5 hold reused items, so C01, C02 and C05 do not exist.

Task verbs follow 04 §4.4.

| # | Id | Set | Component (official) | Task | Format | Pts | DOK | Text | How it differs from the others |
|---|---|---|---|---|---|---|---|---|---|
| 1 | SK-TT1c-P4 (ref) | 1 | traits | identify | ms | 2 | 2 | p1 | The only "choose two traits" item; it is the near-transfer start on the Together passage |
| 2 | SK-TT1c-P5 (ref) | 1 | feelings (change) | identify the sequence | order | 1 | 2 | p1 | The only ordering item. Feelings are named; the child sequences them. C08 instead has the child infer unnamed feelings from body clues in a new text |
| 3 | SK-TT1c-C03 | 1 | actions | use evidence | hottext | 1 | 2 | p1 | The child must tell an action apart from speech, a feeling and a result. Same passage and format as Together P2, but a different component and key (P2's key is a distractor here) |
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
| 14 | SK-TT1c-C14 | 3 | traits and thoughts, two characters | compare | ms | 2 | 3 | p4 + p5 | The only cross-story compare item. Each true statement must fit both characters |
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
- **Texts:** p1, p4 and p5, plus two short new stems (C13's scene and C15's four mini-scenes).
  - Items per passage: p1 has 5 and p4 has 6 (both within the limit of seven), and p5 has 5.
- **Domains:**
  - community and family: 1 to 5
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
| SK-TT1c-S01 | Set 1: P4, P5, C03, C04, P6 | traits from actions | mc | 2 | p6 | The character chooses a promise over fun. The distractors are a reversed choice, forgetting, and a money motive with no evidence |
| SK-TT1c-S02 | Set 2: C06 to C10 | motivations + evidence | ebsr | 3 | p7 | The motive is stated as a thought; Part B separates it from setting and result sentences |
| SK-TT1c-S03 | Set 3: C11 to C15 | central message | mc | 3 | p8 | The distractors are a true event, a character's mistaken words, and an unsupported lesson |

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

1. **Refs stay in `practice`.** `practice` still has six items (the check-content limits are 4 to 7). Under 01 §2.2, Practice Together on a core lesson would become *all* of `practice`, so P4 to P6 would appear twice. The engine should leave any id that `core` references out of Together, or the lead should decide otherwise. I did not move them, because the brief says to reference them.
2. **`addons`** is a new lesson-level map: item id → `{ hints, how, misconception? }`. It should be merged onto the practice item when the lesson is registered. The merged ref items keep their existing `clue` and `why`.
3. New items carry `clue` (equal to `hints[0]`), `hints`, `how`, `why`, `std: ["3.T.T.1.c"]` and, on most items, `misconception`. No item uses `hintNarrow`, `comp` or `cr`. Components appear only in this log; `comp` is meant for leaf codes (01 §2.4), so I did not use it for sub-components.
4. C13 uses `stem` with passage p5. C14 lists two passages (`["p4","p5"]`), so the player must show both. C15's choices are short scenes of 14 to 17 words.
5. C09 is a choose-two hot-text item worth 2 points. Check that the hot-text scoring gives partial credit as SPEC §5 intends.
6. `similar[].like` includes the ref ids (P4, P5, P6), because they are core ids in this lesson.

## 7. Points reviewers should test hardest

These are listed so reviewers do not miss them. They are not resolved here.

- C14: is "does something hard to help someone or something else" defensible for Tariq, whose stated motive is that he wants to hear the frogs?
- C08: could "her cheeks burned" be read as embarrassed rather than disappointed? Only "disappointed" is offered.
- C06 hint 3, C08 hint 3 and S01 hint 3 are strong. Run the ladder audit (04 §4.5) on each.
- The P4 addon hints come almost word for word from the worked example in 04 §4.6. Hint 3 there ("one word that fits giving back what is not yours") may narrow too far.
- C09 includes the cue words "thought" and "remembered", so it is DOK 2 identification, not inference.
- p7 reads low (FK 1.3, heuristic). Check grade suitability.
