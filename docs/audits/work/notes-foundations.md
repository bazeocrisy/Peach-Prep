# PP-003 notes: Foundations and Practices slice

Scope: the 10 grade 3 Foundations expectations (3.F.*, classroom only) and the 53 K-12 Practices expectations (tested = "embedded") in `js/data/standards.js`. That makes 63 rows in `matrix-foundations.csv`. The brief's estimate of 55 Practices was wrong: standards.js has 53 (EICC.1 a-f, EICC.2 a-e, EICC.3 a-g, EICC.4 a-h, ST.1 a-c, ST.2 a-c, AC.1-3 a-d, CP.1 a-d, CP.2 a-e). The Everyday habits page lists the same 53.

Method:
- I loaded the live manifest lessons in Node and counted the items. A lesson's practice items split into Together (the first ceil(n/2) when n >= 4) and Try (the rest).
- I read every teach point, worked example and item for the 10 Foundations lessons and solved all 64 scored items myself.
- I read all 53 PP_HABITS entries.
- I ran the site with `node verification/serve.js . 8444` and drove it with Python Playwright. Screenshots are in the scratchpad (`fnd/`), not in the repo.

Blueprint (scratchpad/gadoe/7bf55d31-GM_Gr3_ELA_Blueprint.txt):
- p.1: "Foundations ... appropriate for classroom assessment only."
- p.1 and p.3: Practices are "embedded within items aligned to the ELA content standards but are not reported as a separate reporting category."

The site's `tested` flags ("classroom" and "embedded") agree with the blueprint for every row. The ALDs (DRAFT, Oct 2025) have no Foundations or Practices descriptors, so proficient_ald is "n/a" in every row.

Totals: 53 NOT APPLICABLE TO MILESTONES – VERIFIED COMPLETE, 10 NOT APPLICABLE TO MILESTONES – PARTIAL. No row is MISSING or INCORRECT. Severity: 8 Medium, 55 Low. There are no High or Critical findings: nothing in this slice is assessed on the Milestones, and I found no wrong answer keys.

## The fluency timer (js/skills.js:670-772, data in js/data/lessons/F-FH.js)

What I ran on port 8444:
- 3.F.F.1.b, passage 1. Started the minute, tapped 2 words as errors, then tapped a third word twice (mark, then undo, which is how the site handles a self-correction). Advanced the clock about 45 s, pressed Stop early and tapped word 80 as the last word read.
  - Result: "100 words correct per minute · 97% accuracy (2 missed of 80)".
  - The arithmetic is correct: (80-2)*60/47 ≈ 99.6. Accuracy is floored, so it never rounds up into a better band.
  - The reading was saved to `pp.progress.v1["3.F.F.1.b"].fluency` as `{d, wcpm, acc, p}`. The site keeps the last 12 readings and shows the last 5.
- 3.F.F.1.c. Practiced mode loads passage 5 (dialogue) and adds a note that practiced readings run faster and should not be compared with norms. A 20-second reading was correctly refused as "too short to measure".
- The norms (83 / 97 / 112 WCPM for fall / winter / spring) match the Hasbrouck & Tindal 2017 grade 3 50th percentile. I checked them on https://www.readingrockets.org/article/fluency-norms-chart-2017-update on 2026-10-20. "Close to typical" within 10 WCPM is consistent with H&T's guidance that 10 or more below the 50th percentile signals a need for fluency work.

Findings on the three things the brief asked about:

1. **It is not described as a home practice tool or as "not a formal assessment".** Nothing on the timer, the lesson or the Parents page says so. The result compares a single reading of a home-made, uncalibrated passage with national norms and says "Right on track or better!" (skills.js:759-760). H&T say the screening comparison should use the average of two unpracticed, standardized passages, and that a screening score does not diagnose anything. My rough Flesch-Kincaid estimates for passages 1-4 range from grade 2.3 to 4.1, so WCPM is not comparable from one passage to the next. The 3.F.F.1.b parent tip also invites parents to compare a library-book page with the national numbers. (Severity Medium.)
   - Fix: add one line near the timer: "A home practice tool, not a test or screener; your child's teacher uses calibrated passages." Reword the verdict to say that it comes from one reading.

2. **What a grown-up can record:**
   - **Expression, phrasing and pauses:** these are in the 3.F.F.1.c grown-up Check list as yes/no boxes. The timer itself records nothing about prosody, and nothing about prosody is saved with a reading.
   - **Self-correction:** the instructions say a word "fixed right away counts as correct", and the tap-to-undo lets the grown-up comply. Self-corrections are not counted or saved. One line in the 3.F.F.1.b Check covers it.
   - **Comprehension:** there is a "Told in their own words what each passage was mostly about" line in the 3.F.F.1.b Check. There is no retell prompt after a timed reading and no comprehension line in 3.F.F.1.c.
   - Fix: after each reading, offer an optional 1-4 expression/phrasing rating, a "fixed it" tap state (counted as correct and saved as self-corrections), and a "retold it: yes / partly / not yet" choice. Save all of these with that reading.

3. **Adult-observed results are not kept separate from machine-scored ones.**
   - The grown-up "Mark this skill mastered" button (renderCheck, skills.js:815) sets `r.mastered = true`, the same flag a passed 80% test sets (recordTest, skills.js:73).
   - On the home page, the Foundations category ring then counted it like any other mastered skill. After I checked the 3.F.F.1.b boxes it showed "1/10". The skill list uses the same check mark, and "Up next" skips the skill.
   - The headline line "N of 74 skills that are on the test are mastered" correctly excludes Foundations, so Milestones readiness is not inflated.
   - Timer readings sit in a separate `fluency` array, but a reading also sets the shared `practiced` step flag.
   - (Severity Medium, recorded on 3.F.F.1.b.)
   - Fix: store the grown-up check as `r.observed` with a date, show it as "Checked by a grown-up", and keep `mastered` for scored tests only.

## PARTIAL rows

- **3.F.P.4.a / 4.b / 4.c (phonics, Medium).**
  - Decoding is taught well and every answer key is correct.
  - Encoding (spelling) is tested only by recognition: pick the correct spelling from a dropdown or multiple choice. The child never produces a spelling.
  - Oral decoding is never heard; the "say it out loud" advice in the clues is unobserved.
  - 4.a covers ea, ow, c and g, and mentions ough only. 4.c covers re- and un- and -ed, -ing and -ly only. It does not cover dis-, pre-, mis-, -ful, -less, -er/-est or -s/-es.
  - 3.L.V.2.c ("Building new words with prefixes and suffixes") may overlap, but it belongs to another agent's slice and I did not audit it.
- **3.F.F.1.a (sight words, Medium).**
  - The standard is about reading high-frequency words with automaticity, in isolation and in context.
  - 5 of 7 practice items and 3 of 5 test items ask which spelling is correct. That is encoding, a different skill.
  - Automaticity appears only in the off-site flash-card tip. Regularly spelled sight words are mentioned but have no items.
- **3.F.F.1.c (prosody, Medium).**
  - Phrasing, expression, pauses and intonation are taught and covered by the grown-up Check.
  - "To aid comprehension" is not addressed anywhere in this lesson.
  - "A wide range of texts" is thin: the lesson points to two dialogue passages only.
- **3.F.F.1.d (self-correction, Medium).**
  - The items are a sound proxy: spot the miscue in a transcript of another reader, then choose the fix. All 10 keys are correct.
  - The child's own self-correction while reading is never observed or recorded on the site, and silent reading is not addressed.
- **3.F.H.4.b (cursive spacing, Medium).**
  - The lesson says to leave a space "about as wide as a lowercase o".
  - In Chromium, a space in the Playwrite trace font measures 10.1 px against 19.7 px for "o", and `.cursive` / `.trace-row` set no word-spacing (styles.css:463, 480).
  - In screenshots of the example "We like to play outside." and of the tracing sheet, "We read a book." reads almost as one word. The model the child traces contradicts the rule.
  - Fix: add `word-spacing: .35em` to both classes, then re-screenshot.
- **Practices EICC.1.b, EICC.1.c, EICC.3.g (Low).**
  - EICC.1.b: the habit never prompts the child to talk about techniques or modes.
  - EICC.1.c: the child only lists writing topics and never writes.
  - EICC.3.g: the habit omits academic vocabulary. The on-site lessons 3.L.V.1.a, 3.L.V.2.a and 3.L.V.3.a appear by title to cover it, but none of them is linked to this code and I did not audit them.

## VERIFIED COMPLETE rows: the basis

- **Foundations 3.F.F.1.b, 3.F.H.3.a, 3.F.H.4.a.**
  - Every component has a real activity: timed read-aloud with grown-up error marking, cursive-reading items in a genuine joined US school cursive font (Playwrite US Trad, bundled locally under the OFL), and a printable tracing sheet with a grown-up check.
  - I did not test the printed output of the tracing sheet (`window.print`).
- **The 50 complete Practices.** Every habit card gives two concrete activities that a parent and child actually do (sort books, family book chat with rules and star/wish feedback, follow a recipe, sticky-note predictions, fold-paper plan, 4-box comic, family presentation with questions, reciting a poem). I matched each one against every component of the official wording (see the components column). So these are authentic applications, not only descriptions. They are all off-site and unrecorded: there is no check-off, no item and no lesson tagged with any K-12.P code. I rated them complete for a home-prep site where Practices are embedded and not reported separately. If the lead wants on-site evidence as the bar, all 50 would drop to PARTIAL.
- **CP.2.e** names Dr. King's "I Have a Dream" but does not reproduce it. That is correct, because the speech is under copyright.

## Cross-cutting issues (in evidence and recommended_correction on the affected rows)

1. **The Parents page contradicts the site.**
   - Every standard tab, js/parents.js:183-184: for every Practice and for 3.F.F.1.a, 1.c, 1.d, H.3.a, H.4.a and H.4.b, it shows "Not practiced on Peach Prep." directly under the link to the lesson or habit page. I confirmed this in Playwright for 3.F.F.1.c, 3.F.H.4.a, EICC.1.a and CP.2.e.
   - Cause: the fallback fires when fewer than 2 list items exist, and standards.js `where` is empty for those codes.
   - The same link reads "Learn It, Watch Me, Practice, Try It, Test" for hands-on lessons that actually have Learn / Watch / Practice / Check. (Low.)
2. **Stale data in standards.js.** It still carries `status: "not yet"` and empty `where` for Foundations codes that now have lessons. The file is generated by verification/gen-standards.py, and `status` is not displayed anywhere I found. (Low.)
3. **An unsupported claim on every habit page.** "Good readers and writers use it inside every skill on this site" (skills.js:631). No item or lesson is tagged with a Practices code, and some habits (CP.1 collaboration, CP.2.e recitation) clearly are not used inside the site's skills. Suggested wording: "Many skills on this site use this habit; the ideas below practise it at home." (Low.)
4. **Font fallback.** If the bundled woff2 fails to load, cursive stems fall back to the generic `cursive` family, which is often Comic Sans-like and not school cursive. Screen readers read cursive stems as plain text, which gives the answer away for those users. (Low.)

## Not checked

- I did not run the gates (check-content, readability, guard), because the brief assigns them to the lead.
- I did not audit the external Word Workshop, Study Scoop or Sentence Sense links listed in standards.js `where`.
- I did not test the tracing sheet's print output.
- I did not audit the related Texts/Language lessons named "by title" in the Practices rows.
- I did not diff the official wording against the PDF; another agent does that. Note that the standards.js header says the wording is "paraphrased".
- During Playwright runs the console showed blocked Google Fonts requests (ERR_TUNNEL_CONNECTION_FAILED). That is a sandbox network limit, not a site bug.
