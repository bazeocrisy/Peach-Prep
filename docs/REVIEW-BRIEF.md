# Brief for lesson reviewers (Peach Prep)

You are an independent reviewer of skill lessons for Peach Prep, a free Georgia Milestones Grade 3 ELA site that a real 8-year-old will use with a parent. You did not write these lessons. Your job is to find what is wrong before a child sees it. Be skeptical and specific. Do not rewrite for style.

## Read first
- `docs/SPEC.md`: §5 (item schema and scoring), §6 (content rules) and §8 (lessons).
- `docs/LESSON-BRIEF.md`: what writers were told.
- `js/data/standards.js`: the official `text` of each standard in your file.

## How the screen works (so you judge items fairly)
- Choices, match rows and dropdown options are shuffled.
- `clue` is Help step 1. `why` is the walk-through shown after Help step 3, or after a correct answer.
- `stem` is shown in a box above the answers.
- Paragraph numbers shown to the child skip headings, captions and `Box:` paragraphs.
- In `draft: true` passages there are no paragraph numbers; sentences carry their own (1), (2) … in the text.
- Scoring:
  - ms: 2 pts if exactly right; 1 if at least half the correct choices and at most one wrong.
  - ebsr: 1 pt for Part A alone.
  - match: all-but-one rule.
  - order: one adjacent swap earns 1.

## Severity
- **MUST** (blocks release):
  - The key is wrong.
  - More than one defensible answer (an adult reading carefully could defend a "wrong" choice).
  - No defensible answer.
  - A factual error in a passage or Teach.
  - A grammar, phonics or vocabulary claim that is false.
  - The clue gives away the answer.
  - An evidence quote that is not word-for-word in the passage.
  - A paragraph or sentence reference that points to the wrong place.
  - Content that does not teach or test the named standard.
  - Content unsuitable for an 8-year-old.
  - Anything that looks copied from a published or GaDOE source.
  - A fix-it sentence with more than one error.
  - A Learn example whose steps reach a different answer than stated.
- **SHOULD:**
  - A distractor too obviously wrong, or a key that stands out.
  - Reading level too hard.
  - A confusing prompt.
  - A teaching point that is incomplete or misleading for grade 3.
  - The test too easy or too close to practice.
  - A `why` that does not name the answer.
- **NIT:** small wording.

## Method
1. For each lesson, read Teach and Learn and check them against the official standard text. Is it accurate? Is it the right scope for grade 3?
2. **Solve every Practice and Test item yourself before looking at the key.** Write down your answer, then compare. Any mismatch, or any item where you hesitated between two choices, gets a careful look.
3. Check every quote in ebsr Part B and hottext against the passage, word for word.
4. Check facts in passages and Teach. Flag anything you are not sure is true.

## Output
Write your findings to `docs/review-lessons/<FILE>-<A or B>.md` (the name is in your assignment). Use this format:

```
# Review <FILE> (<A or B>)
Lessons reviewed: <codes>
MUST: <n>  SHOULD: <n>  NIT: <n>

## MUST
- [<item id or lesson code / section>] <what is wrong>. Fix: <a specific fix>.
## SHOULD
- ...
## NIT
- ...
```

Do NOT edit any lesson or site file. Reply with the counts and the path to your review.
