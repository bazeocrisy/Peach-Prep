# Question-first design (Peach Prep)

Status: implemented for every lesson with `core` practice (34 of 99). Lessons without `core` keep today's five-step flow until their content exists. Baseline commit 9eba382. Read with `01-architecture.md` (engine) and `UX-LOG.md` (decisions, tests).

## 1. Flow
Choose a skill (list, search, Up next, Learning Path, standard page) -> the first or saved question opens -> Check Answer or Teach Me -> Back to My Question -> Next -> five questions -> session screen (next five, or stop) -> separate skill check.

## 2. Answering screen
Top bar: `← All skills` (or `← Learning path`, `← Standard <code>`, named from where the child came), `Practice`, `Home`. Then, in this order:
1. Skill title (h1) and its Georgia code(s) beneath as links to `#std/<code>`.
2. `Question 2 of 5` with `Set 1 of 3`, and a thin progress bar (its state is also given in words for screen readers).
3. Passage, sentence, image or chart (left column from 980px; a Read / Question tab pair below that). Long passages scroll in their own pane.
4. One question and its answer area.
5. Primary row: **Check Answer** and **Teach Me**. Feedback appears above them and is announced.
6. After feedback (right, or answer shown): **Next question** replaces Check Answer; before that a quiet **Skip for now**. Previous is a text-weight link.
7. Below the fold, closed: `About this skill` (Skill overview, Standard page, For grown-ups, Skill check).
No hints, status chips or counts compete with the question. Tests never show Teach Me, hints, feedback or the progress bar.

## 3. Opening a skill
`PP_SKILLS.begin(key)` chooses the set and question from `pp.practice.v1` (`at` if that set is unfinished, else the first unfinished set, first unfinished question) and starts `#play/SK:<key>:y|y2|y3/try`. New alias `#practice/<key or code>` resolves the same way and settles on the `#play` address. `#skill/<key>[/<step>]` stays the Skill overview with its five steps. When all fifteen are finished the child sees "You finished all fifteen" with Take the skill check, Look back, Back to skills. Set 1 is "Practice on my own, set 1"; sessions are 5 questions; the End screen offers **Next five** (primary), **Back to skills**, and on set 3 **Take the skill check**. Stopping is always safe: position, responses and help are saved after every action.

## 4. Existing instruction is kept
Nothing is deleted. Learn It, Watch Me and Practice Together stay on the Skill overview (reached from `About this skill`, the standard page and the Learning Path "Skill overview" button) and inside Teach Me: the lesson's big idea and the best-matching teaching point appear as the strategy; the closest Watch Me example and the full Learn It card are in a closed "More from this lesson" area at the end of Teach Me. Practice Together items still run from the overview with the Help me ladder.

## 5. Teach Me
Opens in place of the question (passage stays: beside it from 980px, on the Read tab below that). Address `#play/<set>/try/teach`, so browser Back is Back to My Question. Composition, all from existing item data (no new authoring required):
| Unit | Source |
|---|---|
| What the question asks | `prompt` plus a sentence for the format (choose one, pick two, order, match...) |
| Strategy | lesson `teach.big`, best-matching `teach.points` entry by shared words, `teach.words` that appear in the question |
| Look in the text | `hints[1]`; "paragraph N" references are highlighted in the open passage and "Show it in the text" jumps to it |
| Steps | `how[0..n-2]`, one per press |
| The answer | last `how` step, then a labeled **Answer** block from `answerText`, then `why`, then `misconception` |
A **Give me a hint** button (`hints[0..2]`, one per press, never the answer) sits at the top; hints exist only here. No answer text appears before the last unit; the answer button says that the question will be marked answer shown. Back to My Question is sticky at the top and repeated at the end. Returning restores the item, response, set and position, assistance history, and the passage scroll position (held in memory).

## 6. Honest help tracking
Per item, never decreasing, never erased by a later right answer: first-attempt result with whether help preceded it (`f1`), wrong checks (`w`), hints (`h`), Teach Me opens (`tm`) and deepest step (`tp`), answer shown (`x`), skips (`sk`), solved (`ok`). Derived status, one definition: Answer shown > Right after Teach Me > Right with hints > Right after another try > Right on the first try. Only the last is independent. An answer revealed in Teach Me can never be independent and never earns a skill-check pass: practice writes only `tried`, as before, and tests have no Teach Me. After teaching (or a reveal, hints or a retry) the child is offered **a fresh question like this** from the lesson's `similar` bank (a separate record under `s`, linked by `for`, outside the fifteen, a repeat is a new attempt kept in `past`). The original record is untouched, so nothing is counted twice. Parents see counts per status and per-question help in the Skill overview.

## 7. Standard codes
Every shown code is a link. `#std/<code>` shows plain meaning, Georgia's official wording and page, the lessons and what a grown-up watches, with a primary **Practice this skill** that opens the question (Skill overview is secondary). Parent codes, band forms (`3-5.T.T.1`), grammar-chart levels and leaf codes with several lessons get a short overview that links to each component; a leaf with one lesson goes straight to it. Search matches names, plain words, ids (D3) and any code form. No page implies coverage: component alignment stays in the coverage map.

## 8. Tests stay separate
Skill checks, reviews and Practice Tests are unchanged: fresh items, Previous/Next and numbered navigator, Mark to review, unanswered list before turning in, no hints, no teaching, no feedback until submitted. Leaving shows the existing warning. Results link to practice, not to Teach Me.

## 9. Official Georgia practice
Verified 2026-10-27: https://gaexperienceonline.com/ (GaDOE, built by its test vendor DRC). It offers a tools user guide, a video tutorial and "Test Practice, Guides and Samplers"; its text says the guides, scoring samplers and demonstration tests are not graded; Chrome is the only supported browser. Peach Prep links to it from the Parent guide (How to use, and a short card on the Skill overview), worded as practice with the test's tools and screens, not scored, nothing transfers from Peach Prep, no endorsement either way. "Peach Prep is independent and not affiliated with or endorsed by GaDOE" stays in the Parent guide and the home footer.

## 10. Storage
No new key. `pp.practice.v1` stays version 1: the new fields (`tm`, `tp`, `tmAfter`, `sk`, `f1`) are optional and additive; absent means zero or false, so old records mean what they meant. Status `taught` is derived and only applies where `tm > 0`. Read, never rewritten on load: `pp.progress.v1` (`tried`, passes, attempts), `pp.path.v1` (bookmark step `try` now means "practice"), `pp.review.v1`, writing keys. Teach Me step, panel state and scroll are session memory. Blocked, full or damaged storage keeps working for the visit with the existing notice; reload restarts the practice and says so.

New: `js/teach.js`, routes `#practice/...` and `.../try/teach`, five record fields, one derived status, the Teach Me and session screens, copy changes, `verification/qf.py`, `verification/teach-coverage.js`.
