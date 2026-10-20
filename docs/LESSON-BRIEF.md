# Brief for lesson writers (Peach Prep skill lessons)

Peach Prep is a free Georgia Milestones Grade 3 ELA practice site for parents and children. Its home page lists every Georgia ELA standard. Tapping one opens a skill page with four steps: **Teach → Learn → Practice → Test**. You are writing those lessons. A real 8-year-old will use them with a parent, so accuracy matters more than speed.

## Read first
1. `docs/SPEC.md`: §5 (item schema and scoring), §6 (content rules) and §8 (lesson schema). These are binding.
2. `js/data/lessons/T-T1.js`: the gold example lesson (3.T.T.1.b). Match its quality, tone and length.
3. `js/data/standards.js`: the official wording (`text`) and the plain wording (`plain`) of your standards. Teach exactly what the standard asks for, at grade 3. No more and no less.
4. Look at one or two files in `js/data/sets/` to see how real items are written. **Do not reuse their passages, sentences or questions.**

## What a lesson must do
- **Teach.** Write a big idea a child can say back. Add 3–5 short teaching points. Add key words if helpful, one clear example with a note on what to notice, and one test tip about how this skill shows up on the Milestones.
- **Learn.** Give 2–3 worked examples. Each one is a short text, a question, then 2–4 thinking steps that model *how* to get the answer, then the answer. The steps teach a strategy the child can reuse; they do not just restate the answer.
- **Practice.** Write 4–7 items, Milestones-style. The child gets the Help me ladder: the `clue` is the hint, and the `why` is the walk-through.
- **Test.** Write 4–6 items worth at least 5 points, with at least one 2-point item. Use **different** passages and sentences than Practice and Learn, at the same difficulty.
- **Parent note.** One or two sentences on how a grown-up can practice this at home with everyday things.
- **Write activity** (`write`). Required for writing standards (`tested: "writing"`). Optional otherwise. Use a short prompt and a checklist of 3–5 "I …" lines.

## Item quality (reviewers will reject items that break these)
- **Exactly one defensible answer.** Every wrong choice is clearly wrong to an adult who reads carefully, and tempting to a child who reads carelessly. Keep distractors similar in length and style to the key. The checker flags a key that is much longer than the others.
- **The `clue` never gives away the answer.** The `why` names the right answer and explains it.
- **Choices are shuffled on screen,** so never say "the first choice" or "choice B".
- **Evidence (`ebsr` Part B, `hottext`) quotes real sentences from the passage, word for word.**
- **`ebsr`:** a top-level `prompt` such as "This question has two parts. Answer Part A, then Part B.". Do not start the Part A or Part B prompts with "Part A:" or "Part B:"; the screen adds those labels.
- **Paragraph references** use the numbers the child sees. Headings, captions and `Box:` paragraphs are not numbered.
- **Mix the formats** the way the real test does: mc, ms, ebsr, dropdown, hottext, order and match. Do not make every item mc.
- **DOK** 1–3, honestly assigned.

## Content quality
- **Grade 3 reading level.** Passages are 100–300 words, and short sentences are fine. Run `python3 verification/readability.py js/data/lessons/<FILE>.js`. Aim for a heuristic FK of 4.5 or below.
- **Original only.** Never copy GaDOE items, test passages or published books. Write fresh stories, articles, poems and student drafts.
- **Facts must be true.** In informational passages, use well-established facts you are certain of. Avoid exact numbers unless you are sure. When in doubt, leave it out. Reviewers will check facts.
- **Grammar:**
  - Teach the grammar terms the way Georgia's grade 3 chart uses them.
  - Fix-it items contain exactly one error.
  - No participle after a being verb in grammar items. For example, avoid "was running" when asking for the action verb.
  - American English.
- **Settings and names:**
  - Varied, age-appropriate topics; Georgia settings are welcome.
  - No brand names.
  - No real living private people.
  - Use a range of names from different backgrounds.
- **Kid voice.** Speak to the child as "you". Keep it warm and plain, with no jargon in Teach unless you define it.

## Mechanics
- Write one file: `js/data/lessons/<FILE>.js` (the file name is in your assignment). It holds one `PP.addLesson({...})` per standard in your assignment, in code order. Start the file with a one-line comment naming the group.
- **Item ids:** `SK-<TAG>-P1…` for practice and `SK-<TAG>-T1…` for test. TAG is given in your assignment, one per standard. Ids must be unique across the site.
- **Passage ids** inside a lesson: p1, p2, … Each item lists its `passages`.
- When finished, run `node verification/check-content.js --all`. Fix **every** failure and every warning that points at your file. (Warnings in other files are not yours.)
- **Do not edit any other file.** Do not edit the manifest, the engine or other lessons. Do not commit; the lead will.
- **Final reply:** list the codes you wrote, the item counts, any standard where you made a judgment call about scope, and anything a reviewer should double-check (facts, tricky items).
