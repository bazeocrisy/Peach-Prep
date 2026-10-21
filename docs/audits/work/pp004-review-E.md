# PP-004 independent regression review, Agent E

- Date: 2026-10-21. Read-only reviewer. No repo code or content edited, no fixes made.
- Worktree: /home/claude/pp-fix (branch `pp-003-fixes`), served with `node verification/serve.js . 8507`.
- **Commit tested: `e6ce7b3e477cc95f298f57ff0baa626d2b5de558`** (HEAD from `git rev-parse HEAD` at start; working tree clean).
  - While the guard was running, the lead committed `ac385b9` and `ae2fe1a`. `git diff --stat e6ce7b3 ae2fe1a` touches only docs/audits/PP-004-CONTENT-CORRECTIONS.md, PP-004-FINAL-COVERAGE-MATRIX.csv and work/pp004-review-A2.md. No site code or content changed, so the results below hold for `ae2fe1a` too.
- Production baseline: `main` at 66e536b, checked out read-only as a detached `git worktree` at scratchpad/revE4/main66. Playwright served it by request interception, so it needed no second port. The worktree was removed afterwards.
- Logs and scripts: /tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/revE4/ (`*.log`, `scripts/*.py`).

## Verdict

**PASS for function, with 3 low-severity findings (F1 to F3, section 4).**
- All four gates pass. The full guard gave 110 passed, 0 failed.
- Every PP-004 behaviour I was asked to reproduce works as claimed: form rotation, Retained behind the flag, the loophole closed, historical progress preserved against main, review only for dated passes, dashboard counts, the speaking card, text boxes and navigation at 4 widths.
- 14 of 14 fix-log claims I spot-checked are true in the code.
- The failures are: the parent guide omits the official wording and page on its 41 GUM rows, contrary to PP-004-CONTENT-CORRECTIONS.md (F1); one stale parent-guide sentence (F2); and a stale mastery document (F3).

## 1. Gates (exact tails)

`node verification/check-content.js --all` (exit 0):
```
Checked 15 sets (147 items), 2 tasks and 99 lessons (1076 items) [all files]
  warn  PT-1 PT-1-14: Part A: clue shares “bright” only with the key
  warn  lesson 3.L.V.3.b test SK-V3b-T1: slot 0: clue shares “blew” only with the key
  warn  lesson 3.L.V.3.b test SK-V3b-T1: slot 1: clue shares “blue” only with the key
  warn  lesson 3.T.T.1.a test SK-TT1a-T5: choices: clue shares “priya” only with the key
  warn  lesson 3.T.T.1.d practice SK-TT1d-P1: choices: clue shares “something” only with the key
  warn  lesson 3.T.T.1.e test SK-TT1e-T5: choices: clue shares “back” only with the key
PASS (0 failures, 6 warnings)
```
These are the same 6 warnings that reviewfix4 lists as pre-existing.

`python3 verification/readability.py` (exit 0, 125 rows). It prints no summary line. The highest FK is 4.5 and the last rows are:
```
3.T.SS.1.a   p1  words= 148  FK~ 3.3
3.T.SS.1.a   p2  words= 164  FK~ 2.2
```

`node verification/check-writing.js` (exit 0):
```
Revising items: 16, points: 22, two-point items: 6 (38%)
Types: {"mc":9,"dropdown":3,"hottext":1,"ms":2,"order":1}
DOK points: {"1":0,"2":20,"3":2}

0 failures, 0 warnings
```

`python3 verification/guard.py http://localhost:8507/` (full run):
```
PASS  16.2 U-1: on SK-TC1b-T2 ("How does the text box add to the article?") the accessibility tree has one visible note named "Text box" that starts "Text box: A monarch"
PASS  16.3 U-2: the mode tag (Practice, Try it yourself, Skill check, Test, Writing task) is whole, not clipped, at 320/360/375/390
PASS  7.1 no page errors
PASS  8.1 no sideways scroll at 320/375/390 on any screen
110 passed, 0 failed
EXIT=0
```

## 2. Independent reproductions (my own Playwright scripts; not the guard)

Totals: forms.py 28/28, misc.py 30/34 (3 failures were in my script and 1 is a real finding, see F1), history.py all equal, nav.py 124/124, nav2.py 16/16, extra.py 8/8, formsall (13 form-B lessons) all checked.

How I scored passes: a failed check was turned in blank through the real player. For a pass, I wrapped `PP_ITEMS[type].score` in the page so that it returns full points, then turned the check in through the real Next / Turn in buttons. So `submit -> afterTest -> recordTest` ran unmodified. Dates were seeded in `pp.progress.v1` before the page loaded.

### 2.1 Official wording with page
- **Skill pages:** PASS. I opened all 99 lessons (103 code rows) and all 53 habit pages. `#sk-official` shows `"<code> (Georgia's official wording, standards p. N): “<official>”"` for every code. None says "(paraphrased)".
- **Wording against the PDF:** PASS. I re-extracted the 52-page PDF myself with `pdftotext` (no `-layout`). All 147 `official` strings occur verbatim (whitespace normalized) on the page given in `page`. The 3 apparent misses are extraction artifacts: 3.T.C.1.a is split by a column, and 3.T.RA.1.a/b print "selfselected" for the line-broken "self-selected". By form-feed count they are on pp. 26 and 37, as recorded.
- **Parent guide, "Every standard":** PASS for the 106 non-GUM rows (official wording plus "standards p. N"). **FAIL for the 41 GUM rows**: see F1.

### 2.2 Form B rotation and Retained (3.T.T.1.a; results identical in forms.py)
- Fresh record: the card says "The next check is form A", the button opens `#play/SK:3.T.T.1.a:t/test` and the title is "· Skill check (form A)". PASS.
- After a turned-in attempt, `attempts[-1].form == "A"`. "Take the skill check again" opens `:tB` in test mode (no Help me), and that attempt records `form: "B"`. The next check is then A again. PASS.
- The check also starts the next form from Try It Yourself, from "Take the skill check" (`done-test`) and from the "already turned in" screen at 320, 390, 768 and 1366. PASS.
- `#play/SK:k:tB/practice` and `/try`, and the same for `:t`, are forced to `/test`: tag "Skill check", no Help me or Check. They record an attempt with the right form and never set `practiced` or `tried`. Calling `PP_SKILLS.recordPractice(k,'t'|'tB')` directly writes nothing. PASS (loophole closed).
- Flag off, with a valid B pass 10 days after an A pass: no `retainedAt` or `retainedForm` is written, `PP_FLAGS.retained === false` and the page shows no "Retained" text. PASS.
- `?dev=retained` (and `localStorage pp.dev=retained`) turns the flag on. A `_flags` key or other field inside the progress JSON cannot turn it on, and `PP_FLAGS` is frozen. PASS.
- With the flag on:
  - A pass on the same form (A after an earlier A pass): not awarded. PASS.
  - B pass 6 days after the A pass: not awarded. PASS.
  - B pass exactly 7 days after: awarded (`retainedAt` today, `retainedForm: "B"`), with the skill-page line and the list chip. PASS.
  - B pass after form B's answers had been seen: not awarded, and the attempt is `afterAnswers: true`. PASS.
  - A 2.1 undated pass followed by a B pass today: not awarded. PASS.
  - Rings and the home count are identical with the flag on and off. PASS.

### 2.3 Historical progress against main 66e536b (history.py)
I seeded the same `pp.progress.v1` into main and into this branch, then compared:
- `PP_SKILLS.status()` for all 99 lessons;
- all 5 rings (text and `--p`);
- the home bar (count and width);
- the list marks.

| Seed | Status diffs | Rings | Home bar | Stored fields changed |
|---|---|---|---|---|
| v2.1-era (mastered/tries/best only, a grown-up pass with no passBy, `answersSeenAt`, `_ui`) | 0 | identical (1/10, 1/24, 0/10, 1/10, 1/45) | 3 of 74, 4%, identical | none; added only `legacyUndated` and `firstSeenPassedAt` |
| PP-003-era (dated attempts without `form`, passTry/passBy/bestMax, legacyUndated with a later failed dated try, grown-up pass) | 0 | identical (1/10, 4/24, 0/10, 0/10, 0/45) | 4 of 74, 5%, identical | none, nothing added |

- Main left both seeds byte-identical.
- The only display differences are the documented additions: the "review" chips and line, the "essay tasks not counted" sentence, "(on an older version of this check)" and the form notes.
- A v2.1 record that has `tries` sends the next check to form B, as documented.

### 2.4 Review only for dated passes
Seeded and checked with `reviewDue()`, the list chip and the home line:
- dated pass 8 days old: review. PASS.
- dated pass 6 days old: none. PASS.
- undated 2.1 pass, 40 days: none. PASS.
- grown-up pass, 30 days: none. PASS.
- old grown-up pass with no passBy: none. PASS.
- lastPassAt 2 days ago (first pass 30 days ago): none. PASS.
- Home line: "1 passed skill is due for a review." PASS.

The one review on an undated pass is the documented case where the last dated try did not pass (PP-004-MASTERY-RECOMMENDATIONS table, `reviewDue`). It shows "The last try did not pass", not a day count.

### 2.5 Dashboard counts
- Every ring `done/total` equals the mastered and lesson rows in that section of the list.
- `--p` is `round(100*done/total)`.
- The home bar equals an independent count of mastered on-test lessons (4 of 74, 5%).
- Writing shows "· +2 essays", and its aria-label says "Plus 2 essay tasks, scored by a grown-up". No other card shows essays.
- Filters: All = 99 + 2 essays. On the test = 74 + 2, with the text "74 skills and 2 essay tasks match.". To do = 93 (99 minus 6 mastered, no essays). PASS.

### 2.6 Speaking card (3.L.GC.1 R interrogatives)
- Rendering the card writes nothing.
- Ticks write only `speakChecks: {ticks:[bool…], d: today}`. No other key in the record or the store changes.
- With every tick on, status stays "started" and `mastered` is unset. Ticks come back after a reload. PASS.

### 2.7 Text boxes
- Passage text boxes (SK:3.T.C.1.b:p) are `<aside role="note" aria-label="Text box">` with a hidden "Text box:" prefix.
- The Chromium accessibility tree, read over CDP, exposes `note "Text box"`. PASS.
- My first check used `page.accessibility.snapshot()`, which returned no note. That was a script problem; CDP is authoritative.

### 2.8 Navigation at 320, 390, 768 and 1366 (3.T.T.1.a, irregular plurals, 3.F.F.1.b hands-on)
- Each Next lands with the step heading 8–16 px below the sticky step bar, inside the viewport, with focus on `#sk-panel`.
- Reload on `#skill/<k>/<step>` and `#play/...` keeps the page.
- One browser Back from a skill goes Home. The player Back goes to the matching step, and one more Back goes Home.
- A reload after turning in form B shows "You already turned in this skill check" and records nothing.
- `#nope`, `#skill/NOT-A-CODE` and `#play/SK:x:t/test` show Home with `#home-notfound` focused, and the address is dropped.
- No horizontal scroll, no page errors. PASS.

## 3. Spot-check of fix-log claims against the code (14 checked, 14 true)
| # | Log / ID | Claim | Result |
|---|---|---|---|
| 1 | reviewfix4 B3 | SK-V2a-TB5 stem "When the volcano began to erupt, hot melted rock poured down its sides." | true |
| 2 | reviewfix4 C8 | SK-GUM4-5-T5 choice "This is the store when we buy bread." | true |
| 3 | reviewfix4 C9 | "a parent may dive at them" (3.T.RA.1.c p4); "father" gone | true |
| 4 | reviewfix4 C7 | SK-RA2b-T5 Part B has 5 choices incl. the calf sentence; passage "Some elephants live to be 60…"; "Many elephants" gone | true |
| 5 | reviewfix4 B5 | SK-GUM3-2-TB3 "Mom baked three {0} of bread…", options loafs/loaves/loaf, key loaves | true |
| 6 | setfix F6 | W-REV-02-7 and SK-GUM4-5-T5 DOK 2 | true |
| 7 | reviewfix4 C10 | SK-TT3c-P6 uses a buddy bench | true |
| 8 | reviewfix4 B6 | "A balloon has three main parts, plus a few smaller ones." (3.L.V.3.a p3) | true |
| 9 | rc3fix RC3-10 | SK-GC2d-T3 DOK 2; whole 3.L.GC.2.d check DOK 2 | true |
| 10 | gapfix | SK-RA1b-T5 and SK-GC2a-T2 DOK 2 | true |
| 11 | lessonfix Ltexts-3 / LL-1 | 3.T.SS.1.b p2 "(8) On Wednesdays, kids can join a building-block club."; SK-GUM2-4-T3 key "Yikes, there is a snake…", splice gone | true |
| 12 | reviewfix4 B2 / C4 | TT2a-TB2 new Part A key; TC2c-P7 "Nothing in the letter says her family is moving." | true |
| 13 | setfix F3 | R-OPN-01-2 clue "Look at the first sentence of paragraphs 2, 3 and 4." | true |
| 14 | dfix U-2 / U-5 | `.bar-tag{overflow:visible;white-space:normal}`; `.evidence-key > summary` min-height 44px; `.flu-obs input[type=number]` min-height 44px | true |

Claims about who reviewed what, and the blind-solve agreement figures, cannot be verified from code and were not checked.

## 4. Failures and inaccuracies

### F1 (functional, Low–Medium). The parent guide does not show the official wording or page for the 41 GUM rows
- **Claim:** PP-004-CONTENT-CORRECTIONS.md line 24: "The skill page and parent guide now show the official wording with its page."
- **Code:** js/parents.js:146–147. For `s.gum` rows the body shows only "Grade 3 level: …" plus `testedNote`, and the `else if (s.official)` branch is never reached. The summary shows `s.gum`, an unlabelled short label. In 18 of 41 rows that label is not the official wording.
  - Example: the guide shows "Use nouns and verbs to form complete thoughts in speech". The official wording on p. 15 is "Use nouns and verbs to share complete thoughts when speaking."
  - The skill page for the same row does show the official wording with p. 15.
  - pp004-standards.md:129 says "GUM rows keep their level line", so the omission was partly known. The summary document overstates it.
- **Steps to reproduce:**
  1. Go to `http://localhost:8507/#parents/standards`.
  2. Expand "Grammar chart (R) Use nouns and verbs to form complete thoughts in speech".
  3. There is no "Georgia's official wording (standards p. 15)" line. The same happens on all 41 "Grammar chart (…)" rows.

### F2 (copy, Low). The parent guide says the check always uses the same questions
- js/parents.js:240 ("How to use" tab): "The check uses the same questions each time, and after a try your child can see the answers…"
- 13 lessons now have a form B, and the site alternates them. The skill page itself says so correctly (js/skills.js:885, 892).
- **Steps to reproduce:** `#parents/plan`, section "What 'Passed the skill check' means", second paragraph.

### F3 (documentation, Low). PP-004-MASTERY-RECOMMENDATIONS.md is stale
- Lines 12, 197 and 244 say form B exists only for 3.L.GC.2.b as an unreviewed fixture. 13 lessons now have one.
- Line 82 says the set titles read "… · Test (form A)". The code and SPEC §8b say "… · Skill check (form A)".
- PP-004-UX-ACCESSIBILITY.md lines 192 and 230–234 also quote "Test (form A)". That may be accurate as a record of the moment before the U-6.7 rename.

No other failures. Everything in section 2 passed as written.

## 5. Not checked
- Content quality and keys of the form B items (other reviewers' scope). I only confirmed that forms A and B share no item ids, that shared prompts are generic two-part stems on different passages, that point totals are equal, and that no form B passage is used by form A or practice.
- Screen readers other than the Chromium accessibility tree.
- Real devices; I used Chromium emulation only.
