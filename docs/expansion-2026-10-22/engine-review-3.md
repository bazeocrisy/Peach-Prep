# Engine review 3: check versioning, review ledger, `--release` (phase 4)

Independent review. I did not write the engine. Scope: `verification/check-content.js` (versioning, ledger, `--release`,
`--record-versions`, `--record-review`), `verification/versioning.py`, `verification/assessment-versions.json`,
`docs/expansion-2026-10-22/review-ledger.json`, `05-engine-implementation.md` section 10 and 10.8, the `js/skills.js` and
`js/review.js` runtime side of `rev`/`seenRev`, and the `path.py`, `guard.py` section 14 and `review.py` R.5 edits.

Method. Frozen copy of the repository at HEAD `0bd0564` (working tree clean) in
`/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/frozen`. All mutations ran on throwaway copies
made from that snapshot (scripts below). No engine or lesson file was edited, no git write, the one server (pid 23401) was killed by pid.
`git log`/`git diff` were used read-only to compare the test edits with their earlier text.

Scripts (all in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/rv3/`):
`mat.js` (material-hash matrix over every item type), `e2e.py` (mutations of 3.T.T.1.c through the real CLI), `e2e2.py`
(ledger, record and corrupt-file cases), `rel.py` (does `--release` pass everything it should), `br.py` (browser edge cases),
`qdiff.js` (which live forms were reworded since the record).

## Verdict

ACCEPT WITH CONDITIONS. The machinery does what section 10 says on the paths it tests, the suites are green, and the test edits
did not weaken assertions in a way that hides a regression today. But the answer to question 1 is **no**: a material change to a
check without a new `testRev` does not always fail. The "material hash" covers only fields named `correct/answer/answers/pick/points/type/id`,
so every change of an answer key that is expressed through *text* or *position* rather than a flag escapes (details F-1). The ledger
is an honest-process record, not a control: it can be forged with one command and cannot show that a reviewer saw the content that is
hashed (F-5, F-6). Six MUSTs, none of them touching saved child data.

## 0. Gates in the frozen copy

| Suite | Result |
|---|---|
| check-content `--all` | exit 0, PASS 0 failures, 72 warnings (101 lessons, 59 core, 885 core items, 885 similar) |
| check-content (manifest) | exit 0 |
| check-content `--all --release` | exit 1, 4 failures, all expected: 36 lessons with a check and no core or exception; `testRev` 2 not recorded for 3.L.V.2.a:A/B; review inputs changed; 190 parts with no ledger record |
| check-writing | exit 0 |
| readability | exit 0 |
| copy (check-instructional-copy) | exit 0 |
| versioning.py | 40 passed, 0 failed |
| review.py | 28 passed, 0 failed |
| practice-own.py | 73 passed, 0 failed |
| path.py | 148 passed, 0 failed |
| path-headers.py | 48 passed, 0 failed |
| first-visit.py | 124 passed, 0 failed |
| skills-recovery | 67 passed, 0 failed |
| writing-recovery | 75 passed, 0 failed |
| path-a11y (axe 4.10.2) | 12 + 12 + 12 runs, 0 violations, 0 contrast failures |
| guard.py | NOT CONFIRMED by me, see section 7 |

`--release` fails only where it should once everything is recorded: `rel.py` records versions and a ledger entry for all 59 core
lessons in a scratch copy; `--release` then fails on exactly one line, `core (release)` (the 36 legacy lessons). Default mode passes.

## 1. Material change without a new testRev (question 1)

### 1.1 What always fails (checked through the real CLI, `--release` = FAIL, default = warn, `--record-versions` refuses)
Reordering items (M1), moving a `correct` flag (M2), changing `points` (M4), adding or removing an item, changing `type`, `pick`, and
a row's or slot's `answer` index. Totals are covered through `points` plus the `.len` of every array. Reproduction:
`python3 rv3/e2e.py` (cases M1, M2, M4), and `node rv3/mat.js` for the per-type matrix.

### 1.2 What does NOT fail (material by any reasonable definition, reported as "wording only" or not at all)
`node rv3/mat.js` prints MISSED for each of these; `e2e.py` confirms them through the CLI (`--record-versions` records them with exit 0).

| Edit (same ids, same points) | Why it is material | Result |
|---|---|---|
| mc/ms: swap or replace the text of the correct choice, flags stay (M3, M6b) | the key is now a different answer | warn "wording only" (and "question text itself ... changed on <id>") |
| ebsr: swap texts of the Part A key and a distractor (M8), or of Part B | same | warn "wording only", **not named** (`questionOf` ignores `partA`/`partB`) |
| match: reverse `cols` while `rows[].answer` indexes stay (M7) | every answer inverts | warn "wording only", not named |
| dropdown: reorder `slots[].options` or replace the correct option text | key moves | warn "wording only", not named |
| hottext (options form): reorder `options` | key moves | warn "wording only", not named |
| order: reorder `steps` | **the step order is the key** | warn "wording only", not named |
| item `passages` changed to another passage of the same count (M10) | different story, same question | warn "wording only" |
| **the passage text itself** edited (M9) | questions about a changed text | **no warning at all**, in either mode, and the ledger does not notice either |

Cause: `KEYFIELD` (check-content.js:706) keeps only flag/index fields, so a key stored as "the text at index i" is invisible, and
`sha(L.test)` / `sha(L.core)` (lines 733-751) hash the items but never `L.passages`, although every core, similar and check item
depends on its passage (and hottext targets are `p.sentence` references into it).

### 1.3 Reworded question, same id/points/key (the author's question)
`e2e.py` M6: replacing the prompt wholesale gives two `warn` lines in both modes and nothing else for a lesson with no ledger entry.
For a lesson that has a ledger entry the release run also fails, but on `ledger ... changed since the independent review`, which a
re-record clears without any statement about `testRev`.

Two facts make the warning weaker than the doc implies:
1. `--record-versions` refreshes `hash` and `q` in one step (E11 in `e2e2.py`: after the command the reword is gone from every later
   run). The runbook in 10.8 runs it as step 2, right after "read the `versions:` lines". The decision is never recorded.
2. The committed record has no `q` yet (`grep -c '"q"' verification/assessment-versions.json` is 0), so today the warning cannot name any item.
   Measured against the record's commit (`7c69e78`) with `qdiff.js` (`node rv3/qdiff.js rv3/old frozen`), ten forms differ from the record. Seven of
   them had question text reworded under an unchanged rev and only warn: 3.L.GC.2.b:B (TB5), 3.L.GC.1:M apostrophes:A (T1, T3), irregular-plural:B (TB3),
   commas:A (T4), 3.L.V.2.b:A (T2), TF-FEAT:A (T2, T4), TF-DIG:A (T1, T2, T4, T5); irregular-plural:A changed without a question edit; 3.L.V.2.a:A/B (T4) is
   correctly material and already has `testRev` 2. The 10.8 table lists only some of them (the three
   3.L.GC.1:M forms are missing from it).

**Recommendation (question 1).** Yes, it should fail in `--release` for lessons with core, but not as an unconditional failure,
because corrections must stay possible. Make it a recorded decision:
- `--record-versions` refuses (exit 1, like it does for `mat`) when a form's `q` changed against the record, the `testRev` did not change, and no
  acknowledgement is given. Acknowledge with `--record-versions --accept-reword <itemId[,itemId]> --by "<name>"`; the record stores
  `ack: { <itemId>: { by, date, q } }`.
- `--release` fails when the current `q` of an item differs from the recorded `q` (no refresh happened) **or** when it was refreshed
  without an `ack` for a lesson with core. Default mode keeps the warning.
- Fix the hash first (F-1): without it the "reworded" set misses ebsr, match, dropdown, hottext and order entirely.
This costs nothing for clue/why/hint edits (not in `q`), keeps typo fixes possible (one ack), and puts a name and a date on the
"correction, not a different question" call.

## 2. Findings

### MUST

**M-1. The material hash misses key changes expressed as text or position (F-1 above).** Fix `materialOf` to resolve answers to their texts
and to include the text of everything a child answers from: for mc/ms/ebsr the text of each correct choice (keep the flag position as
well); for match `cols` and the text of the target column for each row; for dropdown `slots[i].options[answer]`; for hottext
`options[answer]` or the answer sentences; for order the `steps` sequence; and the item's `passages` ids. Extend `questionOf` to the same
question-bearing fields (`partA/partB` prompt and choices, `rows`, `cols`, `slots`, `options`, `steps`, `targets`), dropping only
`clue/why/hints/how/misconception/dok/std`. Add a case per type to `versioning.py` (the matrix in `mat.js` is a ready list).
Repro: `cd frozen && node ../rv3/mat.js | grep MISSED`.

**M-2. Passages are in no hash.** Neither `sha(L.test)`, `sha(coreResolved(L))` nor `sha(L.similar)` includes the passages the items point at, so a
passage edit passes `versions` and `ledger` in both modes (M9: `--release` shows no `versions`/`ledger` line after the passage text of
a reviewed lesson was changed). Hash the referenced passages (by id, resolved from `L.passages`) into the form `hash` and into the
ledger hashes of core, similar and the checks. Repro: `python3 rv3/e2e.py` (case M9, and the last block).

**M-3. A corrupt or truncated record file silently defeats the guards.** `--record-versions` reads the old record with `readJson(...) || {}`
(line ~760), so an unreadable or `{"forms":{}}` file means "no previous version": a material change with the same `testRev` is recorded
with exit 0 (E2b, E2c in `e2e2.py`). `--record-review` does `readJson(LEDGER_FILE) || { v: 1, lessons: {} }` (line 787): a truncated ledger
is replaced by a ledger holding only the new entry, and the earlier records are lost with exit 0 (E4b). Both must refuse when the file
exists but does not parse or lacks `forms`/`lessons` of the right type, and write atomically (temp file plus rename).

**M-4. The author/reviewer independence check is trivially bypassed, and `--authors` is optional.** Exact string match only: `al author` vs `Al Author`
(E5a) and `A. Author` vs `Al Author` (E5b) are accepted; with `--authors` omitted the entry is written with `authors: []` and passes validation
in every mode (E5c, E5c2). Require a non-empty `--authors`, normalize names (trim, case-fold, collapse spaces) before comparing, and make the
checker treat `authors: []` as invalid in `--release`. Note also that the review documents name roles ("independent content reviewer 2"), not
people; the check can only be as strong as the strings the lead types, so say that in 10.2 and in the ledger `note`.

**M-5. `--record-review` can attest content the reviewer never saw, and nothing in the record proves otherwise.** The hash is of the content at
the moment the command runs. 10.8 plans to run 22 commands at the end, against review files that were written on different dates, for lessons that
changed after those reviews (10.5 itself documents SK-TC1c-T2). The review file need only *exist* (E5d: `--record README.md` is accepted; E5e: a
path outside the repository is accepted; E5f/E5g: `--date 2026-13-45` and `2099-01-01` are accepted). As built, the ledger certifies "the lead typed a
reviewer name against today's hash". To make it mean what 01-architecture rule 11 says ("proves the reviewed content is the shipped content"):
(a) add `--print-hashes <key>` (the 12-character prefix of each part's hash) and have reviewers put the lines in the review file at review time;
(b) `--record-review` requires the review file to contain the lesson key, every reviewer name and the current hash prefix of each part it records, and stores `basis: "hash-in-review"`;
(c) for the 20-odd existing review files that predate (a), allow `--lead-attest "<reason>"`, stored as `basis: "lead-attestation"`, and have `--release` print how many entries rest on each basis;
(d) validate `--date` as a real date not in the future, and require `--record` to be inside `docs/` (the usage text already says so, the code does not).

**M-6. `rev` can go backwards or be reused.** `--record-versions` accepts any change of `rev`, including a lower or previously used value
(E1b: testRev "2" with one material change, then back to "1" with another: recorded, `--release` clean; E1c: "2", "3", "2"). Attempts are labelled by
rev string, so a reused rev makes an attempt on version 2a read as version 2b. Keep a `history` array of revs per form in the record and refuse
(or require `--allow-rev-reuse`) a rev that was used before; or require numeric strings and strictly increasing.

### SHOULD

**S-0. A crash instead of a message on a wrongly shaped record.** `{"forms": null}` and `{"lessons": null}` pass the `typeof ... !== "object"`
test (`typeof null` is "object") and then throw an uncaught `TypeError` with a Node stack trace (E3a, E3b), in default mode as well. The exit
code is 1 so nothing slips through, but the message is useless in the middle of a release. Validate with `Array.isArray`/`=== null`; the same
validation is what M-3 needs.

**S-1. Review result signature ignores keys, wording, passages and `testRev`.** `js/review.js:66` hashes `id:type:points`. A key change to a check
that feeds a review (M2, M3) leaves stored review results unmarked ("The questions have changed since." is not shown). 10.8 says
`--record-versions` "raises the reviews' rev"; that number (`inputs.rev`) is read by nothing in `js/` (grep), so the sentence describes a record, not
an effect. Include the source lessons' `testRev` (cheap: the item can carry it) in `setRev`, and say in the doc that `inputs.rev` is informational.
`Number(oi.rev) + 1` turns a non-numeric rev into `NaN` (E13).

**S-2. Wording-only and removed forms leave no trace.** Besides the reword point in 1.3, `--record-versions` rebuilds `forms` from the current
content, so a removed form disappears from the record and a later re-added form starts again at rev "1" (E12). Keep tombstones
(`{ removed: <date>, lastRev }`) and require a higher rev on re-add.

**S-3. `--part` is not validated.** `--part bogus` prints "recorded ... (bogus)", writes an empty `lessons[key] = {}` and exits 0 (E5h). Accept only
`core|similar|test|all` and exit 1 otherwise. Stale `test.B` entries for a form that no longer exists are never reported (only lesson-level orphans are).

**S-4. Concurrent writers.** Both record commands do read-modify-write with `writeFileSync` and no lock. Six parallel `--record-review` runs all
survived in my test (E7), so I cannot show the loss, but the window is real and M-3's atomic write fixes both.

**S-5. The committed version record is behind and has no `q`.** Run `--record-versions` once the content settles (section 10.8 step 2) and re-run
this review's `qdiff.js` first, so the reword decisions are made before the refresh launders them. The "wording only" table in 10.8 is already
out of date (8 forms warn now, the table names 4 plus 3.L.V.2.b).

**S-6. Docs drift.** 05 section 10.1/10.3 say 37 versioning checks; 10.9 and the run say 40. 10.2 says 55 lessons with no core and 10.8 says 44; the
live count is 36. 10.1's "Release mode therefore fails today on 190 parts and 55 lessons" is stale. 12 core lessons are not accepted
(3.F.H.3.a, 3.F.P.4.a/b/c and eight 3.L.GC.1:M) so `--release` will keep failing on their ledger until they are reviewed; say so in step 4.

**S-7. Test edits (section 14, R.5, path.py), see section 4.** Add a floor and one extra fixture each.

### NOTE

N-1. `bestStale` (`js/skills.js:215`) picks the *first* attempt with the same score. A child who matched 5 of 7 on version 1 and again on version 2
sees "(on an earlier version of this check)" (br.py T1). Defensible (the best was set then), but "the first attempt with that score on the
current version" would avoid a misleading label. An old record with no `attempts` log gets no label at all after a bump.
N-2. The pass note "the check uses the same questions each time" (`js/skills.js:1282`) is untrue after a rev bump; add "on the same version".
N-3. Pre-existing, not phase 4: `renderTest` throws on a `null` entry in `attempts` (`js/skills.js:1281`, `att.find(a => a.ok ...)`): the whole skill
screen fails to render (br.py T2 "null entry"). The same `find` appears since 2026-10-20 (`cb099dd`). One-line guard.
N-4. A `testRev` that is too long gives both the shape FAIL and a "record differs" line; harmless.
N-5. `today()` is local time, the ledger date is a string; fine.
N-6. `readJson` swallows every error including permission errors; a single message naming the parse error would help.

## 3. Saved-data semantics (question 2): they hold

Reasoning from `js/skills.js` and `js/review.js`, then `versioning.py` (40/40) and my own browser cases (`br.py`).
- Nothing clears storage: `grep -n "removeItem\|clear()"` finds only `pp.path.storage-check` (js/path.js:25).
- `pp.progress.v1`: `recordTest` adds `rev` to the new attempt only; no existing field changes meaning; `mastered`, `passedAt`, `passTry`,
  `bestMax` are untouched by a rev bump (B.4, B.5: the progress record is byte-identical after rendering the label). `seenRev` is additive and
  only ever makes `afterAnswers` false for a newer version, never true. `attRev`/`revText` treat anything that is not a string of 1-12 chars as "1"
  (br.py T2: numeric, object and 50-character revs, and a `seenRev` array, render without error and write nothing).
- Malformed runtime `testRev` values ("2", 2, null, array, `{A: 2}`, `{A: {}}`) all read as "1" (br.py T3), matching check-content's `revOf`; check-content
  rejects the malformed shapes first (E9).
- `pp.practice.v1` is keyed by `core.rev`/item signature and is not touched by `testRev`; raising `core.rev` and rendering the lesson leaves the
  stored value byte-identical (br.py T6, and practice-own 73/73).
- `pp.review.v1`: a result with no `rev` or a corrupt `rev` shows its score and nothing else (versioning B.11); `cleanAttempt` accepts only `[a-z0-9]{1,12}`.
- Rollback: an older engine ignores `rev` and `seenRev`.
Gaps are only the notes N-1 to N-3 and S-1.

## 4. Test edits: did they weaken anything (question on path.py / guard.py / review.py)?

Compared with `git diff 9e713b5~1 9e713b5` (path.py, guard.py) and `git diff 9e713b5 HEAD` (review.py). None is a loosening that hides a defect today; three
lose protection and should get a small addition.

- **path.py.** The hard-coded 101 / 99 / 53 became values read from the page (`Object.keys(PP.lessons).length`, `PP.tasks`, the matrix `Practices` rows).
  The new check is still strong in one direction (every lesson and task on the path exactly once: entries are unique, non-task entries equal
  the lesson count, and `entries()` only returns keys that exist in `PP.lessons`). It lost the other: `entries()` filters by `valid(k)` (`js/path.js:48`),
  so if a lesson file fails to load, `PP.lessons` shrinks together with the path and the test still passes (the old fixed 101 failed there). The
  remaining guard is "every matrix lesson key resolves". SHOULD add a floor: `lessons >= number of distinct lesson keys in the matrix` (or `>= len(glob("js/data/lessons/*.js"))` lessons), and for the 53 practice codes keep the matrix as the source (it is).
  The "completed" test now compares `PP_PATH.entries().length` with itself in the message; acceptable because the earlier check pins that count.
- **guard.py section 14.** Point totals and the Try step are read from the page; if 3.L.GC.2.b stops having two equal forms the first lesson that
  does is used. 14.0 still asserts forms A and B, equal totals, and the chain (Try -> Test), now with `y3` for a core lesson. Meaning kept. Loss: every
  lesson that has a form B now has core (the `lessons.js` listing shows 13 of 13), so the legacy Practice -> Try -> Test chain with two forms is no longer exercised
  by section 14 anywhere; this is a NOTE unless a legacy lesson with form B is ever added (the section would then pick GC.2.b and still not cover it). The silent
  fixture substitution should print which lesson it chose.
- **review.py R.5.** `"Not available yet" in text` became `("Not available yet" in text) == PP_REVIEW.areas().some(a => !a.covered.length)`. The
  predicate comes from the code under test, and the text is rendered from `!A.parts.length` (`js/review.js:303`), a different list from `covered`. Today all four areas are
  covered, so the branch where the text must appear is not exercised by any test. SHOULD: derive the expectation from `PP_ACCEPTED` and the lessons' areas, or
  add one run that hides the accepted list (`PP_ACCEPTED=[]`, rebuild) and expects four "Not available yet" sections.
- **versioning.py.** Records are rebuilt inside the scratch copy instead of copying the committed ones (a fair change), new cases N.3b/N.3c/N.22 added,
  none removed. It does not test any MISSED class from section 1.2, which is why M-1 and M-2 stayed green.

## 5. `--record-review` and `--release` behaviour (question 3)

- Refuses: reviewer equal to an author (exact string), no reviewer, a review file that does not exist, bad date format, a lesson key with no
  reviewable content, use without `--all`. Verified (versioning N.11 to N.13, `e2e2.py` E5j: a mixed list is refused).
- Accepts and should not: M-4 and M-5 (case/initial variants, no `--authors`, any existing file, impossible or future dates), S-3.
- Forgery: there is no secret and no signature. Anyone who can run the command can write any reviewer name; anyone who can edit the JSON can
  change `reviewers`, `authors` and `date` after the fact (E5i: a hand-edited name is accepted as valid), and `authors` given as a string instead of an array skips
  the author check (line 853). Git history is the only audit trail. Acceptable if the ledger is described as a process record; say so.
- `--release` fails only where documented: verified with `rel.py` (all recorded, one remaining failure, the no-core rule), by N.22 (legacy lessons are not
  asked for ledger entries but are checked when they have one), and by the E8 cases: missing ledger or version file is `warn` by default and `FAIL` in release;
  a deleted review file makes the entry invalid in every mode. `edit` (wording only) stays `warn` in release, as the lead decided.
- Doc/behaviour mismatch: 10.8 step 4 says release "will still fail ... on the 44 legacy lessons" (36 now) and it ignores the 12 unaccepted core lessons.

## 6. Edge cases (question 5), summary

| Case | Result | Ref |
|---|---|---|
| ledger/versions missing | warn default, FAIL release, no crash | E8a, E8b |
| ledger/versions unparseable | warn default, FAIL release; **record commands overwrite or bypass** | E2, E4, M-3 |
| `forms: null`, `lessons: null` | uncaught TypeError | E3a, E3b, S-0 |
| `forms: []`, ledger `[]` | handled ("no version record", "unreadable") | E3c, E3d |
| review file deleted after record | invalid entry, FAIL in every mode | E8c |
| testRev `{A: 2}`, `" "`, 13 chars | FAIL in every mode | E9 |
| testRev raised, record not refreshed | `stale` line, FAIL in release | E10a |
| rev lowered or reused | recorded without complaint | E1b, E1c, M-6 |
| form removed, then re-added | silently dropped, re-added as new at "1" | E12, S-2 |
| `inputs.rev` non-numeric | `NaN` | E13, S-1 |
| parallel `--record-review` | no loss seen; race unguarded | E7, S-4 |
| `--part bogus` | "recorded", empty entry written | E5h, S-3 |

## 7. guard.py

I could not get a result. Run 1 (in the sequence, port 8831) and run 3 (alone, port 8832) were each stopped by my own `timeout` (1500 s and 3000 s, exit 124)
with an empty log, because guard.py prints nothing until it ends; run 2 crashed on its first page load because my server process had died when the
session environment changed (restarted afterwards). A fourth run was stopped by me after about 25 minutes with 56 s of CPU used and an empty log (it looked stalled, not busy), so guard.py is UNCONFIRMED here. 05 section 10.9 records 120 passed, 0 failed for this suite, and the
only guard.py change since the last reviewed state is section 14, which I read line by line (section 4 above); I have no evidence of a failure but
the number is the author's, not mine. Suggest guard.py print a line per section so a long run can be watched.

Server pids started by this review and killed by pid at the end: 23401 (gone with the session), 1001 (port 8832), the 8369 helper (killed).
