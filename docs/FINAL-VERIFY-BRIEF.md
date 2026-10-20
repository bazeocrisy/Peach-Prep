# Final verification (round 3), Peach Prep lessons

Each lesson file has had two reviews, a fix pass, a verification, and a second fix pass. You are the final, fresh check. Read `docs/REVIEW-BRIEF.md` for the severity rules.

For each file in your assignment:

1. Find the commit where its verification was written:

   ```
   git log --diff-filter=A --format=%h -- docs/review-lessons/<FILE>-verify.md
   ```

   Then diff the lesson file from that commit:

   ```
   git diff <that commit> -- js/data/lessons/<FILE>.js
   ```
2. Read `<FILE>-verify.md` (and `-verify2.md` if it exists), then the "Round 2" and "Round 3" sections of `<FILE>-fixes.md`. Confirm that every finding is fixed.
3. **Solve every changed or new item cold**, before you read its key. Check for:
   - a wrong key;
   - two defensible answers;
   - a Practice clue that singles out the answer;
   - a Test item whose prompt, stem or choices reveal another Test item's answer (children can go back during a test);
   - quotes or sentence references that point to the wrong place;
   - false facts or false grammar rules.
4. Then do one fast full pass over the **whole Test section of every lesson in the file**, looking only for answers that one test item reveals for another.
5. Run `node verification/check-content.js --all`. Warnings of the form "clue shares … only with the key" on **Test** items are acceptable, because Test clues only appear after the test is submitted.

Write `docs/review-lessons/<FILE>-final.md` ending with `Verdict: PASS` or `Verdict: FAIL (n MUST)`. Do not edit lesson files. Reply with each verdict and any MUST in one line.
