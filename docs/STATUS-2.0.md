# Peach Prep 2.0.0: status

Branch: `skills`. Not merged. The owner reviews it and merges it to `main`.

## What changed from 1.0
- **Home page:** it now lists every Georgia Grade 3 ELA standard, 147 in all, under its GaDOE heading.
  - Every standard is one tappable row.
  - You can search, and filter by "On the test" or "Not mastered".
  - A progress bar shows how many of the 69 skills that are on the test have been mastered.
- **Skill pages** (`#skill/<code>`) have four steps:
  - **Teach:** the big idea, key points, key words, an example and a test tip.
  - **Learn:** 2–3 worked examples, revealed one step at a time.
  - **Practice:** the regular player with Help me. Writing standards add a "Your turn to write" box with a checklist.
  - **Test:** no hints. 80% of the points marks the skill mastered.
- **Progress:** saved on the device only (localStorage, guarded). Nothing leaves the device.
- **94 lessons and 923 questions:**
  - all 69 standards that are on the test;
  - all 15 grammar-chart rows that are introduced or continued (not tested);
  - all 10 Foundations standards.
- **Hands-on Foundations:**
  - A one-minute read-aloud timer with 6 passages. A grown-up taps missed words. It reports words correct per minute and accuracy, compared with Hasbrouck & Tindal (2017), grade 3, 50th percentile: 83 fall, 97 winter, 112 spring. Readings of practiced passages are not compared with the norms.
  - A US school cursive font (Playwrite US Trad, SIL OFL, self-hosted in `fonts/`).
  - Printable tracing sheets.
  - Grown-up check-off lists.
- **Everyday habit pages:** 53 Georgia K-12 Practices, each with what it looks like, things to try at home, and a question to ask.
- **Mixed practice:** the earlier reading sets, writing tasks and Practice Test 1 moved to "Practice tests and mixed practice" (`#mixed`).
- **Parent guide:** every standard links to its skill page, and "How to use" was rewritten. Skill pages show GaDOE's Proficient ALD bullets.

## Quality process
1. Writing: 15 writers, each working to `docs/LESSON-BRIEF.md` and SPEC §8.
2. First review: two independent reviewers per file. A solved every item cold; B checked teaching, facts and alignment.
3. Writers fixed every MUST and SHOULD.
4. Second review: fresh verification of every file, then a second fix pass.
5. Final check: a fresh reviewer on every file, with an extra pass for tests where one item gives away another's answer. Three files needed a third fix round.
6. All review notes and fix logs are in `docs/review-lessons/`.
7. Screen audit at 320, 390 and 1366 px (`docs/audit-skills.md`). Its MUST and all 9 SHOULDs were fixed.

## Automated gates
- **`verification/check-content.js`:** 0 failures. It also covers lessons, multiple-choice items needing exactly 4 choices, and a check for clues that give away the answer.
  - 9 warnings remain. 8 are clues on Test items, which appear only after the test is turned in. 1 was reviewed and judged not a giveaway.
- **`verification/readability.py`:** no passage above the FK 4.5 heuristic.
- **`verification/guard.py`:** browser harness, every item in practice and test, the skill journey, the fluency timer, check-offs, the cursive font, and no sideways scroll at 320, 375 and 390. See the run log in the PR.

## Known limits
- Progress is per device and per browser.
- Images and graphs are not used, because the site shows no pictures. The image part of 3.L.V.3.a and 3.T.C.1.b is taught in words.
- The fluency timer depends on the grown-up's taps, so it is a home check, not a formal assessment.
- Lexile figures are estimates.
- The mixed-practice sets from 1.0 are unchanged. Practice Test 2 is still to come.
