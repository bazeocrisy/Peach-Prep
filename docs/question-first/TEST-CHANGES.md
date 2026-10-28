# Test changes for question-first

Rule followed: a test is changed only where the old screen it drives no longer exists (the mandatory teaching steps, the three help buttons, the "Try it yourself" tag, the lesson page as the landing page of a skill). The behaviour each test protects is kept and re-asserted on the new screen. No scoring, persistence, accessibility or no-overflow assertion was removed, weakened or disabled. Where a test needed a lesson without core practice, it now picks one at run time.

## Elements and labels that moved
| Old | New |
|---|---|
| `#q-hint` (Give me a hint), `#q-how` / `#q-how-steps` (Show me how) | inside Teach Me: `#q-teach` opens it; `#teach-hint`, `#teach-next` (to the Answer card), `#teach-hints`, `#teach-cards [data-unit=answer]`; `#teach-back` returns |
| "Check my answer" | "Check Answer" |
| mode tag "Try it yourself" on own sets | "Practice" (legacy lessons keep "Try it yourself") |
| "Set 1 of 3" absent | `#q-points` reads "Set 1 of 3" (and "Set 1 of 3 · Not scored" for written items) |
| Right with hints (via #q-hint) | hints now live only in Teach Me, so the status is "Right after Teach Me" (`taught`) |
| skill row / Learning Path "Start" / standard "Start the lesson" landed on the skill page | they land on the first or saved practice question; the five-step page is "Skill overview" |

## verification/practice-own.py
- Helpers `teach`, `hint`, `reveal`, `back_q` added; every old click on `#q-hint` / `#q-how` goes through them.
- A.5: Together has no Teach Me (new assertion), and no hint/how elements.
- B (rewritten, same intent, 17 checks): B.1 new control labels, 44px targets kept; B.3 two wrong checks lock Check Answer until Teach Me is opened, focus moves to Teach Me; B.3b (new) Teach Me address, heading focus, first two cards, `tm = 1`; B.4 three hints in order inside Teach Me, never the answer, button says No more hints; B.5 the reveal is the Answer card, labeled, warned beforehand, records `x` with `w`, `h`, `tm` kept, key outlined on return; B.6 a right answer after the reveal stays Answer shown, log sequence unchanged except Teach Me events; B.7-B.11 progress untouched, similar question separate record and not counted twice, `f1` (new); B.12-B.16 five statuses in words (the hint case reads Right after Teach Me), session end, finished-set screen, Look back, picker.
- C: hints on question 2 are opened and re-read inside Teach Me; resume assertions unchanged. C.3 tag is "Practice".
- D.1: points label "Set 1 of 3 · Not scored" (still asserts the writing is not scored). D.3 and D.4: the written item's sample and criteria are checked on Teach Me's Answer card (no "choose" wording, "Other answers can also be right"), then Compare still shows the checklist above the feedback and the item stays Answer shown.
- E.1: storage tests use Teach Me for the hint; status "Right after Teach Me". E.2, F.1 (byte-identical other keys, now after Teach Me and reveal), F.2 unchanged. F.3: legacy lesson also has no Teach Me.
- G.5: the single lesson button reads "Start practice". H.1: the standard page button opens the question; its back button reads "← Standard 3.T.T.1.c"; Back/Forward assertions unchanged. I.1: the check shows no Teach Me (replaces "no hint, no Show me how").
- J.1: the seven-viewport check now also opens Teach Me with two hints and the answer; same no-overflow and 44px rules.
- N (similar question): each item gets one wrong try first, because a fresh question is offered only after help or a wrong try (design decision); counts use `retry`.

## verification/guard.py
- 3.3b (own-mode hints for every own set): hints are taken inside Teach Me; the assertions (each authored hint in order, nothing ruled out or outlined, answer not revealed, last hint disables the button) are unchanged; Teach Me must not open on its own after a wrong check.
- 8.1 (no sideways scroll, three phone widths): Teach Me with three hints and the answer is measured open as well as the question.
- 9.5a/9.5b core journey: Teach Me replaces the hint and Show me how buttons; nothing shown or outlined on its own.
- 11.1: opening a core lesson from the list lands on the player, not the skill page; still asserts that no progress is written.
- 14.0: the last own set (y3) is the one that leads to the check. 14.3: the journey finishes sets y, y2 and y3 before "Take the skill check".
- 16.3 (tag whole at 320-390): the "Try it yourself" tag is checked on a lesson without core; 3.T.C.1.b:y is expected to read "Practice". Still fails if any tag is cut.

## verification/review.py
- 221: the list of controls that must be hidden in a test is `q-help`, `q-teach`, `q-check` (was `q-hint`, `q-how`).

## verification/path.py
- Start on the Learning Path opens the first practice question (new assertion: the bookmark is saved). The step-bookmark and resume assertions run through the new "Skill overview" button on the next card. Browser Forward reopens the lesson's question screen.
- Nine failures that exist on the unmodified baseline (content count 101, a finish message) are unchanged and are not caused by this work.

## verification/path-headers.py
- Own-mode tag expectation "Practice" for the `:y` set of 3.T.C.1.b; the not-cut and no-overflow assertions are unchanged. This test found a real defect (the tag was squeezed at 320px), fixed in `css/styles.css`.

## verification/first-visit.py, skills-recovery.py, writing-recovery.py, path-a11y.py, readability.py, check-content.js, check-writing.js, check-instructional-copy.js, versioning.py
No change. (versioning.py has one failure on the unmodified baseline too.)

## New
- `verification/qf.py`: question-first states (see its docstring). `verification/teach-coverage.js`: roll-out work list.

## Answer-leak change (2026-10-27)
- practice-own.py B.5: P4's early step names the key, so the "marked answer shown" warning is read on the button before that press (any press), not only before the last. B.6: consecutive `how` log events (the early leaking step and the final answer) count as one. Assertions about x, w, h, tm and the outline are unchanged.
- qf.py: Q2c (new) checks every own-set item's drawn cards against `verification/teach-leaks.json`, and the two behaviours (no leak: nothing marked before the answer press; leak: warned, then marked shown).
