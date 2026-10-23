# 06b · Independent engine re-review (phase 2)

**Reviewer role:** independent re-reviewer. I did not build any of this. I ran no `git` command and edited no app or lesson file. The only file I wrote in the worktree is this one. All planted breakages ran in scratch copies.

**Candidate tested.** A byte copy of the worktree (all non-doc files, `find . -type f -not -path './docs/*' | md5sum` identical to the live worktree at copy time, 2026-10-23). It includes lesson edits made after the builder's `snap3`: it has **24 core lessons, 360 core items and 228 similar items** (the builder reported 17, 255 and 51). The 17 ACCEPTED lessons in `js/data/accepted.js` match the 17 ACCEPTED rows of `batches/STATUS.md` exactly (I compared them myself). Seven more lessons have core but are not accepted.

**Servers and browser.** `node verification/serve.js . <port>` on my own ports (9301 and others). Playwright Chromium 1194 at `/opt/pw-browsers`. Chromium only, simulated viewports, no real devices, no screen reader.

---

## Verdict

**ACCEPT WITH CONDITIONS.** Every earlier finding I was asked to re-test is genuinely fixed, and the new review layer is honest and safe. I found no merge-blocking defect in the engine. There are no MUST items for merge. There is one MUST for the completion claim (the carried-over similar-question gap), and four SHOULD items to fix before families are pointed at the reviews:

1. **A review reveals check answers but never marks them as seen**, so a later lesson-check pass looks clean (RR-01).
2. **The "Try a similar question" gap is still open** on 107 of the 255 core items of the accepted lessons (RR-02, was ENG-07).
3. Two accessibility and layout defects in new UI (RR-03, RR-04).
4. Document 05 contradicts itself (RR-05).

---

## 1. Suite results (my runs, my server, the copy above)

| Suite | Result |
|---|---|
| `check-content.js --all` | PASS, **0 failures, 20 warnings** (99 lessons, 24 core lessons, 360 core items, 228 similar) |
| `check-content.js` (manifest) | PASS, 0 failures, 20 warnings |
| `check-writing.js` | 0 failures, 0 warnings |
| `check-instructional-copy.js` | 28 assertions passed |
| `readability.py` | report only, exit 0 |
| `path.py` | **148 passed, 0 failed** |
| `path-headers.py` | **48 passed, 0 failed** |
| `path-a11y.py` (axe 4.10.2, `AXE_PATH` set) | 12 + 12 + 12 runs, **0 violations, 0 contrast failures**, lowest contrast 4.64:1 |
| `skills-recovery.py` | **67 passed, 0 failed** |
| `writing-recovery.py` | **75 passed, 0 failed** |
| `first-visit.py` | **124 passed, 0 failed** |
| `practice-own.py` | **73 passed, 0 failed** |
| `review.py` | **21 passed, 0 failed** with `AXE_PATH` set. Without it, R.16 fails by design (see RR-09): 20 passed, 1 failed |
| `guard.py` (plain, no fixture launcher) | **Not obtained as one uninterrupted run.** Two full plain runs each reached **119 passed, 0 failed** and then lost the harness server (RR-13) just before §8. I then ran §8 alone (a copy of `guard.py` with only the prelude and §8, against a server that survives bad URLs): **8.1 passed**. Together that is 120 passed, 0 failed, the same count the builder reported, but it is stitched from two runs. A third full run with the tolerant server was interrupted before it finished, so I do not claim a single clean 120/120 run |

These match the builder's table (§8.4) apart from check-content's warning count, which fell from 25 to 20 as content landed.

---

## 2. Earlier findings: verified one by one

| ID | Claim | What I did | Result |
|---|---|---|---|
| **ENG-01** | Branch lacks the home baseline | I cannot read git. `verification/first-visit.py` is now present and passes 124/124; plain `guard.py` starts, runs and reports | **Fixed in effect.** I could not verify the merge itself |
| **ENG-02** | No storage write on load | Wrapped `Storage.setItem/removeItem/clear` and loaded `/`, `#std/…` (leaf, parent, GUM), `#review`, `#coverage`, `#play/…`, `#parents`, with a reload each. Planted mutant M2 (probe write on load) | **Fixed.** The only writes are path.js's own `pp.path.storage-check` set and remove. `grep` finds no second probe key. **M2 is caught: first-visit 1.4, 2.1, 2.2, 4.9 and 8.7a fail** |
| **ENG-03** | Guard §3 checks every own item, and the leak mutant fails | The guard now loops every set including own sets, with 3.1, 3.2, 3.3b and 3.4. Planted **M1** (wrong answer prints `why`), **M1b** (wrong answer prints the answer text) and **M13** (one item, SK-TT2b-C07, accepts any answer) | **Fixed.** M1: 3.2 FAIL, names SK-SS1a-P5, P6, P7, C04, C05. M1b: 3.2 FAIL. M13: caught, but only as a Playwright timeout traceback, not a named FAIL (see RR-06) |
| **ENG-04** | 9.5 to 9.10 cannot vanish | Read the code. The legacy journey now has an `else` that records nine FAILs when no lesson without core is left, and there is a "-core" journey. Planted **M14** (Help me needs two wrong tries) | **Fixed.** M14: `FAIL 9.5b in Try It Yourself, Help me unlocks after one wrong try` |
| **ENG-06** | Changed-question signature | Saved an answer to SK-TT1c-C03 (one hint, right). Opened it in two scratch copies. In one I changed the prompt, in the other only the clue text. Planted **M3** (stale detection off) | **Fixed.** Prompt changed: notice "One question changed, so it starts fresh. Your earlier answers to the other questions are kept.", status "Not finished", the raw value is untouched until the child acts, then the old facts move to `prev` (h 1, ok true). Clue-only change: no notice, answer kept (the signature leaves hints and explanations out, by design). M3 is caught, again as a crash in M.1 |
| **ENG-10** | 44px targets | Measured every visible `a.sl-code`, `a.sk-chip`, `a.std-link` on home, `#path`, std leaf, parent, GUM, review and coverage at 390 and 1366 | **Fixed for height.** All at least 44px (107 links on home, 147 on the coverage map). Planted **M5** (28px): practice-own M.3 FAIL. **Side effects:** see RR-03 and RR-07 |
| **ENG-11** | Accessible names on grammar-chart links | Listed link names and targets on `#std/3.L.GC.1`, `:M`, `:R`. Planted **M6** (aria-label removed) | **Fixed.** No two links share a name and point at different targets (86 links, 45 names; the repeats point to the same page). M6: M.4 FAIL |
| **ENG-08** | Together decision documented | Read `01-architecture.md` line 281 and `05` §7. practice-own A.5 and the guard still test the ladder | **Documented and consistent with the code.** Together keeps the three-step ladder. The authored Together `addons` are merged but unused (NOTE) |

---

## 3. Similar-item reuse (area 2)

Tested on the real lesson 3.T.T.1.a, core item SK-TT1a-C06, which has two similar items (S01, S07):

- Five requests, with a reload before the fourth: **S01, S07, S01, S07, S01.** Unused first (S01, then S07), then least recently used. Each reuse started blank, with the status line hidden.
- Each offering of S01 moved the earlier attempt into `past` (S01 has 2, S07 has 1). The core record's fields did not change.
- **Legacy shapes.** I seeded a pre-phase-2 record by hand (no `t`, no `sig`, no `past`): core C06 with `w:2, h:1, x:true, ok:true`, S01 dated 2026-10-22, S07 dated 2026-10-20, and a `pp.progress.v1` entry. The button offered S07, the older date, which is correct.
  - Merely opening the similar question wrote nothing.
  - After answering: S07's earlier attempt sits in `past[0]`, with every original key and value intact. The only addition is `howAfter:false`, a default that `cleanRec` has added since phase 1.
  - The core record is identical, S01 is identical apart from that default, and `pp.progress.v1` and every other key are byte-identical.
- Planted **M4** (most recently used instead of least): practice-own N.2 FAIL. **M4b** (ignore "unused first") is an equivalent mutant, because an unused item has time 0 and so wins the least-recently-used comparison anyway. It is not a test gap.
- The builder's fixtures N.1 and N.2 use one similar item shared by many core items. In real content (for example 3.T.T.1.c) one similar item lists several core items in `like`. It is then re-offered on the next core item, and its `for` field is overwritten (RR-10).

---

## 4. Standard reviews, the cumulative review and the coverage map (area 3)

**Built only from accepted lessons.** Across all 9 review sets (50 items), every item comes from an ACCEPTED lesson, is a real `test` or `testB` item with content identical to the lesson's, is never `cr`, has its passages present, and is tagged with its component. The seven core-but-not-accepted lessons (3.T.C.1.a, 3.T.C.2.c, 3.T.T.3.a and the four RA lessons) contribute **zero** items. Review sets are in `PP.byId` but not in `PP.sets`. Planted **M8** (add 3.T.T.3.a to `accepted.js`): check-content FAILS "in js/data/accepted.js but not ACCEPTED in STATUS.md". **M12** (allow `cr` items) is an equivalent mutant today, because check-content already forbids `cr` in checks.

**Honest about gaps.** I computed ground truth independently from the raw sets: 147 standards, 90 with a lesson that has a scored check, **12 in a standard review, 12 in the cumulative review**. The coverage map says exactly that. The hub says "Covers seven of the eight tested codes" (stories and poems) and "five of the 11" (information). Writing and language say "Not available yet". A pending parent such as 3.T.RA.1 says "There is no review for this standard yet". A habit parent says it is an everyday habit. No page claims full coverage. Planted **M11** (the "Not covered yet" column hides gaps): review.py R.6 FAIL.

**Never awards a lesson pass; new key.**
- A perfect review of RV-3.T.T.1 wrote only `pp.review.v1`. `pp.progress.v1` was byte-identical and the lesson stayed "started". Planted **M7** (the review also writes `mastered`): R.9 FAIL.
- `#play/RV-3.T.T.1/practice`, `/try` and `/test` all run as a test, with no hint, how, similar or help controls.
- The store keeps the last 20 attempts.

**Storage behaviour** (my own fixtures, plus review.py R.13 and R.14):
- Corrupt value (string, array, bad JSON): "Saved review results could not be read, so none are shown. Nothing else was changed." The raw value stays untouched until a review is submitted.
- `__proto__` keys are dropped. An attempt with `got` greater than `max` is dropped silently. A hostile `d` such as `<img … onerror>` is shown as text ("Last taken <img src=x: 3 of 5 points"), with no script execution and no page error.
- Blocked storage: notice "Saving is unavailable. A review result is shown when you finish, but it is not kept after this page closes." The review ran and showed its score.
- Full storage (only `pp.review.*` throws): no notice before submit, which is unavoidable, and the results page then says the same unavailable line.
- Planted **M10** (no `try` around `JSON.parse`): review.py fails and the run crashes. **M9** (`build()` writes on open): R.9 FAILs, but **R.4 "opening writes nothing" passes** (RR-08), and first-visit would catch it.

---

## 5. Viewports and axe (area 4)

I ran 18 screens at all seven sizes (126 combinations) and measured page overflow in both axes plus any visible element past the right edge. Axe 4.10.2 ran at every one with the tags wcag2a, wcag2aa, wcag21a, wcag21aa and wcag22aa.

Screens: home, review hub, coverage map (every group open), std leaf, std parent, grammar chart top and one level, habit parent, `3-5.` band address, parents, Learning Path (all open), picker, own question with two hints and Show me how open, similar question, end of set, review question, review confirm list, review results.

- **No horizontal page scroll anywhere** (126 of 126).
- Only two findings, both in RR-03 and RR-04. Axe reported **no other violation** on any screen.
- One of my own flows (similar question) failed at four sizes because my script did not click the narrow-screen question tab. I fixed the script and re-ran it: 4 of 4 clean.

---

## 6. Planted breakages (area 6): 16 planted, 14 effective, all 14 caught (11 by a named assertion, 3 as crashes)

| # | Breakage | Result |
|---|---|---|
| M1 | own-mode wrong answer prints `why` | **caught**: guard 3.2 |
| M1b | own-mode wrong answer prints the answer text | **caught**: guard 3.2 |
| M2 | storage write on load | **caught**: first-visit, 5 FAILs |
| M3 | changed-question detection off | caught (crash inside practice-own M.1, reported as `Z.crash`) |
| M4 | similar item chosen most recently used | **caught**: practice-own N.2 |
| M5 | code links 28px | **caught**: practice-own M.3 |
| M6 | grammar-chart link name removed | **caught**: practice-own M.4 |
| M7 | review also writes a pass | **caught**: review R.9 |
| M8 | non-accepted lesson in `accepted.js` | **caught**: check-content |
| M9 | review store written on open | caught by R.9; **not by R.4** (RR-08) |
| M10 | review store parse unguarded | caught: crash, 12 passed, 1 failed |
| M11 | coverage map hides gaps | **caught**: review R.6 |
| M13 | one item accepts any answer | caught by crash only, not a named FAIL (RR-06) |
| M14 | legacy Help me needs two wrong tries | **caught**: guard 9.5b |
| M4b, M12 | equivalent mutants (no behaviour change today) | not counted |

M1, M1b, M13 and M14 were run on trimmed copies of `guard.py` that stop after §3 or §9. The assertion code is identical to the full file.

---

## 7. Findings

### RR-01 · SHOULD · A review reveals check answers but never marks them as seen
**Evidence.** RV-3.T.T.1 contains SK-TT1c-T1, T2 and T3, which are form A of 3.T.T.1.c's skill check. I took the review, opened "See my answers" and then took the lesson check, which the site picks as form A. The check **passed on the first try** with `afterAnswers:false`, and nothing says the answers were seen. `PP_SKILLS.answersSeen` is called only for `kind === "skill"` (`player.js` around 1115), and `recordTest` flags `afterAnswers` only when `n > 1`. The same applies to every review and cumulative question, which are all check items.

**Why it matters.** The page warns that a child may have seen some review questions in a check. The reverse direction, review first and check later, is not covered. A later pass can rest on answers the child was shown, and the site no longer says so. Retained is behind a flag that is off, so nothing is awarded wrongly today, but the pass itself is weakened.

**Fix.** Do one of these:
- when "See my answers" or the result review shows a source lesson's items, call `answersSeen(src, form)` for each source lesson and form, and drop the `n > 1` condition in `recordTest` for that case;
- draw review items from the form that is not next up, so the next check is a different form;
- or say on a later pass that its questions appeared in a review.

### RR-02 · MUST (for any "complete" claim) · "Try a similar question" is still missing on 107 of 255 core items
This is the carried-over ENG-07. It is not a regression: it improved from 159 of 255 (62%) to 107 of 255 (42%) for the 17 accepted lessons. The 11 lessons below have no similar item for between 8 and 11 of their 15 core items (check-content warnings). The lessons are 3.T.C.1.b, 3.T.C.2.a, 3.T.SS.1.a, 3.T.SS.2.a, 3.T.T.1.c, 3.T.T.1.d, 3.T.T.4.a, TS-CE, TS-PS, TS-CC and TS-DESC. The owner's §8 requires the control on each applicable question. The warning-only rule and the missing `--release` gate mean nothing stops this from shipping.

### RR-03 · SHOULD · New code links fail WCAG 2.2 target-size in the parents' claims table
The 44px fix made some links tall enough, but with negative margins they overlap each other. Axe `target-size` (WCAG 2.2 AA) flags `td[data-label="Reading part (codes)"]` and the "Writing part (codes)" links on **Parents, claims tab**, at all seven viewports: 1 at 390, 3 at 320, 4 at 1366, up to 12 at 768. The message is "partially obscured (smallest space is 48.1px by 22.8px)". The practice-own M.3 check measures height only, so it cannot see this. Give the code links in that table a separate line or a gap, or drop the negative margin there.

### RR-04 · SHOULD · The check navigator clips its own buttons with no cue
At 1024x768, 1366x768 and 1920x1080 the navigator is a one-row scroller (`overflow-x:auto`, `nowrap`). A 12-question review shows buttons 1 to 8 and half of 9, with 10 to 12 hidden and no scroll cue. At 1366 the scroller is 469px wide against 598px of content. The page does not scroll sideways, so no suite fails. A 24-question practice test is worse. Let the navigator wrap, or show a visible scroll cue.

### RR-05 · SHOULD · Document 05 contradicts itself and is stale
- The opening paragraph still says phase 4 (reviews, the cumulative review, `pp.review.v1`) "was not in this brief and is not built". §8.3 says it is built.
- Counts are stale: "17 core lessons, 255 core items, 51 similar", "67 checks", "25 warnings".
- `review.py` and `path-a11y.py` need `AXE_PATH`, and `CHROMIUM_PATH` is needed in this environment. State the run commands.

### RR-06 · NOTE · A defect in one item crashes the guard instead of naming the item
With M13 (one item always right), guard §3 reached that item, the Check button then hid, the hint click timed out, and the run ended in a traceback with "13 passed, 0 failed" at the top. The crash hook prints no failing assertion. Wrap the per-item block in `try/except` and append the set and item id to a failure list. practice-own has the same pattern (M3 was also caught only as `Z.crash`).

### RR-07 · NOTE · The 44px boxes overlap their neighbours
On home, each of 107 code-link boxes overlaps its row button's box by 8px (negative margin). Hit-testing at the link centre returns the link on all 107, so taps work. The overlap is only an edge-tap ambiguity.

### RR-08 · NOTE · review.py R.4 has a blind spot
R.4 ("opening writes nothing") takes its baseline after the first page load, so a write during first load is invisible to it (M9 passed R.4). first-visit.py does catch it. Take R.4's baseline from an empty store.

### RR-09 · NOTE · Axe-dependent suites fail hard without `AXE_PATH`
`review.py` R.16 FAILs ("AXE_PATH is not set to a local axe.min.js") and `path-a11y.py` needs it. That is honest, but it should be in the run instructions.

### RR-10 · NOTE · Small data points
- A similar item shared by several core items is re-offered on the next one, and its `for` field is overwritten with the latest core item.
- After 20 review attempts, `n` stays at 21 for every later attempt (it is `length + 1` after trimming).
- A review result with an invalid stored date shows that text, cut to 10 characters, as "Last taken …".
- A stored attempt with `got > max` is dropped with no notice.
- Hub wording: "Covers zero of the 10 tested codes in this area. The rest are not in the review yet." reads oddly when nothing is covered.
- `whyNot()` tells a writing lesson with no scored check (3.T.T.1.e) that its practice is "still being written or reviewed". That is not the reason.

### RR-11 · NOTE · What "accepted" covers
STATUS.md defines ACCEPTED as blind-solved core and similar items. A B0 review file says it read `test` and `testB` "only to check for leakage and consistency". Reviews draw on those check items, which earlier releases reviewed, but this phase's acceptance did not blind-solve them. The lead chose this knowingly. If a review is to be described as independently verified, add a blind solve of the 50 review items.

### RR-12 · NOTE · Parts of ENG-09 are still unbuilt
Not built: the review ledger and hash rule, `testRev` and `attempts[].rev`, and the `--release` switch (69 lessons with a check and no core are still only a warning). The guard's legacy journey will now fail by design once every lesson has core, which is intended.

### RR-13 · NOTE · Harness
The harness server `verification/serve.js` calls `decodeURIComponent` on the request path with no `try`. A single malformed percent-encoded request kills it silently (I reproduced it with `curl /%E0%A4%A`). My first two plain-guard runs lost the server just before §8, after 119 passes. I did not find which request triggers it (a bad path is not obvious in `guard.py`, which uses hash addresses). That makes this a harness weakness, not a product defect I can show, but it makes the plain guard unreliable on `serve.js`. Add a `try/catch` that answers 400.

---

## 8. Reproduce
Scripts are in `scratchpad/rr2/tools/` (probes `p_*.py`, `mut.py`, `runmut.sh`, trimmed guards `guard_s123.py`, `guard_s9.py`, `guard_s8.py`). Logs are in `scratchpad/rr2/logs/`, mutant copies in `scratchpad/rr2/mut/`, and the tested copy in `scratchpad/rr2/base/`.
