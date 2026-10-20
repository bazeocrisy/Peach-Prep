# Brief for verification reviewers (Peach Prep lessons, round 2)

Two independent reviewers already checked each lesson file, and the writer then fixed it. You are a **fresh** checker. Confirm the fixes are real, and make sure the fixes did not break anything.

For each file in your assignment:

1. Read `docs/REVIEW-BRIEF.md` for the severity rules.
2. Read the two reviews (`docs/review-lessons/<FILE>-A.md` and `-B.md`) and the writer's log (`<FILE>-fixes.md`).
3. Check every MUST and SHOULD against the current file. Is it actually fixed, or does the "declined" reason hold up?
4. Find every item, passage and Teach or Learn part that changed:

   ```
   cd /home/claude/peach-prep && git diff 4e7b23e -- js/data/lessons/<FILE>.js
   ```

   (For habits: `js/data/habits.js`.) **Solve every changed or new Practice and Test item cold**, before you read its key. Look for:
   - wrong keys, or two defensible answers;
   - clue giveaways in Practice;
   - one test item's prompt revealing another test item's answer (children can go back during a test);
   - quotes that are not word for word, and sentence or paragraph references that now point to the wrong place (fixes often renumber sentences);
   - facts that are wrong.
5. Run `node verification/check-content.js --all`.

Write `docs/review-lessons/<FILE>-verify.md`, with one heading per file:

```
# Verify <FILE>
Prior findings: <n> checked, <n> confirmed fixed, <n> not fixed
New problems: MUST <n>  SHOULD <n>
## Not fixed
- [id] ...
## New problems
- [id] ... Fix: ...
## Verdict: PASS (no MUST left) / FAIL
```

Do NOT edit any lesson or site file. Reply with the verdict per file and the counts.
