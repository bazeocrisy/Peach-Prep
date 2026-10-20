# Peach Prep 2.1 — status

## What changed from 2.0
- **IXL-style home.** Five category cards (Reading Foundations, Reading, Writing, Vocabulary, Grammar and Mechanics), each with a progress ring and its next skill. Below the cards, every skill is listed under lettered group headings in a building order. Each line shows a skill id (like "D3"), a title and the Georgia code it targets.
- **Up next.** One button at the top that opens the first skill not yet mastered in the last category used (Reading by default).
- **Five-step skill pages:**
  1. **Learn It**: the idea, its clue words, and a question to ask.
  2. **Watch Me**: worked examples.
  3. **Practice Together**: the first half of the practice items, with Help me on.
  4. **Try It Yourself**: the second half; Help me turns on after one wrong try.
  5. **Test Your Knowledge**: a separate scored set (80% = mastered).

  Hands-on lessons (fluency, cursive writing) have four steps: Learn It, Watch Me, Practice and Check.
- **Clue words**, from the "Teaching Text Structure" guide.
  - Six text structures: Story Elements, Sequence, Cause & Effect, Problem & Solution, Compare & Contrast and Description.
  - Five new lessons cover the structures that had none (TS-SEQ, TS-CE, TS-PS, TS-CC, TS-DESC). The Story Elements lesson was upgraded.
  - A "Show clue words" button highlights them in practice passages. It is off in tests.
  - A printable Clue Word Cheat Sheet.
  - Each structure lesson's Grown-ups box has the common mix-up, strong and not-yet answers, and a 5-minute I do / We do / You do.
- **Everyday habits** has its own screen with collapsible groups.
- Screen audit fixes: contrast, keyboard access, short step tabs on phones, larger tap targets, print cleanup.

## Decisions made without asking (overnight mode)
- Group letters run across the whole site so every skill id is unique.
- Practice items are split in half: the first half for Practice Together, the second for Try It Yourself.
- Clue highlighting is off in tests. It is also off for 3.T.SS.1.a, which teaches all six structures at once (32 words would light up).
- The text-structure lessons sit at the top of Reading, because the other reading skills build on them.
- Grammar rows not on the grade 3 test sit in a last group, "Getting ahead".

## Privacy
The parent's guide refers to a specific child. Nothing personal from it is on this public site, and coaching text says "your child".

## Checks
- `node verification/check-content.js --all`: 0 failures.
- `python3 verification/readability.py`: all passages are grade 3 or below.
- `python3 verification/guard.py`: full browser test, all green before merge.
- Two independent content reviews of the new lessons, one verification of the clue upgrades plus a privacy sweep, and one screen audit at 320, 390 and 1366 px.

## Left for later (not blocking)
- The Writing card counts lessons only (10); the two essay tasks are listed but not counted.
- The grammar list repeats the code 3.L.GC.1 on every line.
