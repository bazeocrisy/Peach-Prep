# PP-003 Phase D: Mastery model audit and design

- Scope: design and audit only. No code was changed.
- Code audited: branch `pp-003-audit`, based on main at 66e536b (Peach Prep 2.1.0, the live version).
- Files read in full: `js/skills.js`, `js/engine/player.js`, `js/app.js`. Also read the relevant parts of `js/engine/items.js`, `js/pp.js`, `js/parents.js`, `js/data/site.js`, `index.html`, `docs/SPEC.md` §8, and the `verification/guard.py` section 9 tests.
- Behaviour check: Playwright (Chromium) against `node verification/serve.js . 8420` on 2026-10-20. Scripts are in the session scratchpad (`pp003d/check.py`, `pp003d/check2.py`). They were not added to the repo. Results are in §1.7.
- Not checked:
  - The writing-task draft store (`pp.task.*`) beyond its effect on status.
  - The `pp.skwrite.*` drafts.
  - Mobile layouts of any proposed wording.
  - Whether a lesson's test items really differ from its practice and Learn items. SPEC §8 line 245 claims this, but it is a content question for the lesson reviewers.

---

## 1. Audit of the current logic

### 1.1 Where progress lives

- All skill progress is one JSON object in `localStorage["pp.progress.v1"]`. It is keyed by lesson key, for example `"3.T.T.1.a"`, `"TS-SEQ"` or `"3.L.GC.1:M:…"`.
  - Load and save: `js/skills.js:61-64`.
  - Every read and write is guarded by try/catch. In private mode, progress lasts only for the visit.
- The same object also holds a UI preference: `prog._ui.lastCat` (`js/skills.js:227`).
- Wipe: `resetProgress()` (`js/skills.js:85`). It is exported but nothing in the UI calls it. A grep finds no caller outside `skills.js:869`.
- Practice sets and practice-test sets outside the skill pages store **no** progress at all.
  - `practiceDone` records only when `run.set.kind === "skill"` (`player.js:314-315`).
  - `submit` records only through `afterTest` for skill sets (`player.js:369`).

### 1.2 Fields per lesson record, and exactly what sets each

| Field | Set by | Exact trigger | Evidence value |
|---|---|---|---|
| `taught` | `go()` at `skills.js:392` | The step changes **from** Learn It to any other step. This happens with the step bar or the Next button. Jumping straight from Learn It to the Test tab sets it. Nothing requires reading. | Navigation only |
| `learned` | `renderLearn` at `skills.js:522` | Every Watch Me example has been clicked through to its answer. This is clicks only. | Exposure only |
| `practiced` | `recordPractice(k, part)` at `skills.js:77` (called from `player.js:315`), and by `mark(cur,"practiced")` at `skills.js:766` and `:791` | (a) Practice Together finished. (b) **Any** skill set other than part `"y"` finished in practice mode. That includes the test set if it is opened in practice mode (see 1.5). (c) A fluency reading finished. (d) "We practiced this today" pressed on a cursive trace sheet. | Completion only. Accuracy is never stored. |
| `tried` | `recordPractice(k,"y")` at `skills.js:77` | Try It Yourself finished | Completion only |
| `tries` | `recordTest` at `skills.js:70` | Each **submitted** skill test. An abandoned test is not counted. | Count |
| `best` `{got,max}` | `recordTest` at `skills.js:71` | The highest got/max ratio so far. It keeps the old `max` if the lesson's points later change. | Score |
| `mastered` | `recordTest` at `skills.js:72-73`, `renderCheck` at `skills.js:815` | Any single submitted test with `got >= ceil(0.8 × max)`. Or, for the 4 hands-on lessons with a grown-up Check (3.F.F.1.b, 3.F.F.1.c, 3.F.H.4.a, 3.F.H.4.b), the grown-up ticking every line and pressing "Mark this skill mastered". | One unaided pass, or a grown-up's judgement |
| `checks[]` | `renderCheck` at `skills.js:802,809` | Grown-up checklist boxes | Grown-up judgement |
| `fluency[]` | `renderFluency` at `skills.js:763-765` | Each finished one-minute reading `{d, wcpm, acc, p}`. The last 12 are kept. | Real measurement, with a date |

`status(k)` (`skills.js:78-84`) derives the displayed state:
- `"mastered"` if `mastered` is set.
- Otherwise `"started"` if any of `taught`, `learned`, `practiced`, `tried` or `tries` is set.
- Otherwise `"new"`.

Two more facts:
- No field records a date, except `fluency[].d`.
- `firstTry` is worked out for every practice item (`player.js:260`) and shown on the done screen (`player.js:313,317`). It is **never stored**.

### 1.3 Answers to the specific questions

**Does merely opening a lesson mark it "started"?** No.
- `open()` (`skills.js:335-388`) writes nothing to progress.
- Verified in Playwright: after clicking the skill row, `pp.progress.v1` was `null` and `status` was `"new"`.
- But **any** step change away from Learn It sets `taught` and turns the lesson into "Started". Verified: clicking the Test tab straight away stored `{"taught":true}` and the status became `"started"`.
- A deep link such as `#skill/K/test` opens on that step without setting `taught`.

**Can practice or assisted (hinted) answers count toward mastery?** Not directly.
- `mastered` is set only from `recordTest` (test mode) or the grown-up Check.
- In test mode, Help me is hidden (`player.js:233`) and clue-word highlighting is off (`player.js:81`). Verified: neither was visible in any test sitting.
- Assisted practice does feed the "Started" state and the `practiced`/`tried` ticks. Verified: a practice run with all three hints used on every item stored `{"practiced":true}`. The done line said "0 of 3 right on your first try without help", and that number was then thrown away.
- Loophole: the test set can be run in practice mode, with hints, from a hand-typed address. See 1.5.

**Is mastery 80% of points on a fixed 5-item test?** Roughly, but not exactly.
- Test sizes across the 96 quiz lessons in the manifest: 4 to 6 items, 6 to 9 points. Most are 5 items and 6 or 7 points.
- The pass mark is `Math.ceil(max * 0.8)` (`skills.js:67`):

| Points | Pass mark | Percent needed |
|---|---|---|
| 6 | 5 | 83% |
| 7 | 6 | 86% |
| 8 | 7 | 88% |
| 9 | 8 | 89% |

  In practice that means "drop at most 1 point".
- The parent plan says "Score 80% on the test to mark it mastered" (`site.js:109`). That understates the bar slightly.
- The test card states the exact number, for example "Score 7 or more" (`skills.js:611`).

**Can it be retaken immediately with the same items?** Yes.
- The results screen has "Take the test again" (`index.html:191`, `player.js:474`). The skill page also has "Take the test again" (`skills.js:614`). There is no cooldown.
- The item set is always `L.test`, in file order (`skills.js:36`, `player.js:428`). There is no pool and no item shuffle.
- Verified: three sittings in a row on 3.T.T.1.a showed the identical 6 prompts in the identical order.
- Before the retake, the results review shows the child the answers:
  - correct items show `why`;
  - missed items show "Show me how", which ends in "The answer: …" (`player.js:381-416`).
  - Verified: the review revealed "The answer: The water park is busy and sunny."
- So a child can fail, open "See my answers", press "Take the test again", and pass from recall. Verified: 0/8, then 8/8 on an immediate retake, gave `mastered:true`.
- SPEC §8 line 245 says "The test uses different passages and sentences than Practice and Learn, so mastery is not memory". That is true across steps. It is not true across retakes of the test itself.

**Are choices shuffled?** Mostly yes.
- They are shuffled once per item per sitting. The context is rebuilt on every `start()` (`player.js:428`).
- How each item type is shuffled (`items.js`):

| Type | Line(s) | What is shuffled |
|---|---|---|
| `mc`, `ms` | 109, 138 | `ctx.order` |
| `ebsr` | 184, 192 | both parts |
| `dropdown` | 242 | options per slot |
| `order` | 403 | never left in the correct order |
| `match` | 470 | rows only |
| `hottext` with free-standing options | 331 | shuffled |
| `hottext` on passage sentences | 331 | **not** shuffled, by design: they stay in passage order |

- Verified: choice orders differed between sittings for the mc, ebsr and match items. The passage-sentence hottext item kept the same order.
- Shuffling does not stop memorising. A child who remembers "the answer is *The water park is busy and sunny*" finds it in any position.

**Is mastery ever revoked or reviewed later?** No.
- `recordTest` only ever sets `mastered = true` (`skills.js:73`). There is no code path that sets it false, apart from `resetProgress()`, which wipes everything.
- Verified: after a pass, a 0/8 retake left `mastered:true` and `best` at 8/8. The UI still said "✓ Mastered! Best score: 8 of 8."
- No dates are stored, so no review can be scheduled.
- `nextIn()` and "Up next" (`skills.js:136-139, 235-248`) skip mastered skills, so a passed skill is never brought back.

**Does any text imply a Milestones achievement level?** Not explicitly.
- No string maps a Peach Prep result to Beginning, Developing, Proficient or Distinguished. A grep of `js/` and `index.html` outside `alds.js` found none.
- Three things invite that inference:
  1. The skill page shows "Georgia's wording and what Proficient looks like", with the GaDOE Proficient ALD bullets (`skills.js:361, 373-377`). It sits on the same page as a test card that says "like the real test" and then "Mastered". A parent can easily read "Mastered" as "Proficient on this standard".
  2. "like the real test" (`skills.js:611`). A 4-6 item single-skill check on one short passage is not like the Milestones, which mixes skills across long passages.
  3. "✓ Finished. Ready for the test!" (`skills.js:565`). This is shown after Try It Yourself is merely finished, whatever the accuracy.
- Side note for the lead: the ALD label at `skills.js:374` ("GaDOE Achievement Level Descriptors") and `site.js:9` does not say DRAFT. The brief requires the October 2025 ALDs to stay labelled DRAFT. This belongs to whichever agent owns the ALDs. It is not part of this design.

### 1.4 What the parent-facing labels claim (verbatim)

**Skill list and home**
- Row tick "✓" and aria label "… Mastered." (`skills.js:191, 193`). Verified text: "E1. Story clues: dialogue, description and actions. Georgia 3.T.T.1.a. Mastered."
- Progress line: "**N of 74** skills that are on the test are mastered on this device." (`skills.js:255-256`). There is a bar under it.
- Category ring "N/M". Its aria text is "… N of M mastered." (`skills.js:221, 225`).
- "Next: …", or "All mastered!" (`skills.js:224`).
- "Every skill is mastered on this device. Amazing work!" (`skills.js:242`).
- Filter button "Not mastered" (`index.html:44`).
- Unused dead map: `STATUS = { mastered: "Mastered", started: "Started", "new": "Not started", … }` (`skills.js:103`). Nothing reads it.

**Skill page**
- Test step: "N questions, M points, no hints, like the real test. Score X or more to master this skill." (`skills.js:611`)
- "✓ Mastered! Best score: G of M." / "Best score so far: G of M. Need X to master it." (`skills.js:612-613`)
- Try step: "✓ Finished. Ready for the test!" (`skills.js:565`)
- Practice step: "✓ Finished. You can do it again any time." (`skills.js:551`)
- Grown-up Check: the button "Mark this skill mastered" and "✓ Mastered!" (`skills.js:804, 814`)

**Results**
- Pass: "You mastered this skill! It now shows a check mark on the skill list."
- Fail: "To master this skill, score X or more. Go back to Watch Me or Practice Together, then try the test again another day." (`skills.js:853-854`)
- Note that the fail text says "another day", but the button beside it allows an immediate retake.

**Parent guide** (`js/data/site.js`, rendered by `parents.js:218-230`)
- "Score 80% on the test to mark it mastered." (`site.js:109`)
- "Once several skills are mastered, try the mixed reading sets and the practice test." (`site.js:111`)
- "Progress and mastered skills are saved on this device only. If your child uses two devices, pick one for Peach Prep." (`site.js:113`)
- "Test: no hints, like the real test. Results are in points, by skill, and each missed question has Show me how." (`parents.js:227`)
- The guide nowhere explains what "mastered" measures, how small the check is, or that it can be retaken at once with the same questions.

**Spec**
- "Mastered = at least 80% of the test's points." (`docs/SPEC.md:247`)

### 1.5 Loophole: test items in practice mode

- `route()` sends `#play/<id>/<mode>` to `PP_PLAYER.start(id, mode)` for any set id, test sets included (`app.js:197`). `start()` accepts `"practice"` for any set (`player.js:426`).
- Verified: `#play/SK:3.T.T.1.a:t/practice` ran the 6 test items with Help me ("Hint 1 of 3 …").
- On finishing, it stored `practiced:true`, because `recordPractice` treats every part except `"y"` as practice (`skills.js:77`).
- The UI never links there, so a child would need a hand-typed or shared address. Still, it exposes the check items with hints and their answers.

### 1.6 Other observations

- `best` compares ratios and keeps the old `max` (`skills.js:71`). If a lesson's test is edited, the stored "Best score: 8 of 8" may not match the current test.
- `afterTest` is called with the set object, and `recordTest` uses `set.code`, which is the lesson key (`skills.js:40, 852`). That is consistent.
- Guard tests depend on the current wording and values:
  - `guard.py` 9.6 checks for "To master" and "mastered this skill".
  - 9.8 checks for "Mastered" in the aria label.
  - 9.9 and 9.13 check for `status == "mastered"`.
  - 9.13 clicks the button text "Mark this skill mastered".
  - Any wording change must update these in the same change.

### 1.7 Playwright evidence (2026-10-20, port 8420)

| Check | Result |
|---|---|
| Open 3.T.T.1.a from the skill list, then read storage | `pp.progress.v1` = `null`, status `new` |
| Click the Test tab straight away | `{"taught":true}`, status `started` |
| Test intro | "6 questions, 8 points, no hints, like the real test. Score 7 or more to master this skill." |
| Sitting 1, all wrong | 0/8, "To master this skill, score 7 or more. … try the test again another day." |
| Review after sitting 1 | "Show me how" ×3 reveals "The answer: The water park is busy and sunny." |
| Sitting 2, immediately after, all right | 8/8, "You mastered this skill!" Stored `{taught, tries:2, best:{8,8}, mastered:true}` |
| Item order across 3 sittings | Identical (same 6 prompts, same order) |
| Choice order across sittings | Different for mc, ebsr and match. Passage-sentence hottext order unchanged. |
| Help me or clue toggle visible in any test sitting | No |
| Sitting 3 after the pass, all wrong | 0/8. Status still `mastered`, `tries:3`. The card still says "✓ Mastered! Best score: 8 of 8." |
| Home line | "1 of 74 skills that are on the test are mastered on this device." |
| Practice with 3 hints on every item | Stored `{"practiced":true}`. "0 of 3 right on your first try without help" was not stored. |
| `#play/SK:3.T.T.1.a:t/practice` | Test items run in practice mode, Help me works, and `practiced:true` is stored |

---

## 2. Four evidence levels

These describe **what we have seen the child do on this device**. They are not achievement levels and are not Milestones predictions.

| Level | Definition | Minimum evidence |
|---|---|---|
| **1. Introduced** | The child has been shown the idea. | Went through Learn It and the Watch Me examples. |
| **2. Practiced** | The child has worked questions on the skill, with help allowed. | Finished Practice Together and/or Try It Yourself. Hints may have been used, so this is not independent evidence. |
| **3. Passed an initial independent check** | Once, without hints, the child scored at or above the pass mark on the skill check. | One submitted test-mode check with no hints ≥ pass mark. Or, for hands-on skills, a grown-up's check. |
| **4. Retained after later reassessment** | The child passed the skill again without hints at least a week after the first pass, and again about 3 weeks after it. | Two later independent passes, spaced in time, ideally on items not seen before. |

### Mapping the current flags

| Current flag | Maps to | Notes |
|---|---|---|
| `taught` | Introduced (weak) | It only proves the child left the Learn It step. Keep it as "Introduced" for display. Do not treat it as more. |
| `learned` | Introduced | Clicked through every worked example. |
| `practiced` | Practiced | Completion, not accuracy. It can also come from a fluency reading, a trace sheet, or (via the loophole) the test items run with hints. |
| `tried` | Practiced | Completion. It is the closest thing to unaided practice, but help unlocks after one wrong try. |
| `tries > 0` with no `mastered` | Practiced, plus "check attempted, not passed yet" | |
| `mastered` (test) | **Passed an initial independent check** | Caveat: it can be the result of an immediate retake on the same items after the answers were seen. |
| `mastered` (grown-up Check) | **Passed an initial check (grown-up judgement)** | A different kind of evidence. Show it as such. |
| (none) | Retained | Nothing records it today. |

---

## 3. Improved model (does not inflate progress)

### 3.1 Principles

1. **Only unaided test-mode answers are independent evidence.**
   - Practice and Try It never move a skill past "Practiced".
   - Test items are never served in practice mode.
2. **Re-exposure is recorded, not hidden.** Every attempt is logged with its date and its attempt number. A pass that comes after the same items' answers were shown is marked as such.
3. **Retakes draw from a pool, or at least reshuffle.**
   - The target is a pool of 2 or more forms per skill: the current `test` plus a new `review` or `test2` array.
   - Until such pools exist, retakes reshuffle choices (already done) and item order within a passage group, and the parent is told that the questions repeat.
4. **Spaced review.**
   - After the first pass, a review is suggested at 7 days. If that passes, the next is suggested 14 days later (about 3 weeks after the first pass).
   - Two spaced passes make the skill **Retained**.
   - After that, a light review is suggested every 8 weeks.
5. **Decay.**
   - Time since the last pass shows as "Review suggested". This is display only and is derived from dates.
   - A failed review sets **Needs review**. Under owner-approved rules it may take the skill out of the "retained" count. It never erases the record of the original pass.
6. **Honest wording.**
   - "Passed the skill check", not "Mastered".
   - Every count says what was counted.
   - The guide states plainly that this is not a Milestones score or level.
7. **Backward compatible.**
   - `pp.progress.v1` keeps its key and every existing field, with the same meaning.
   - Existing `mastered:true` is shown as "Passed the skill check".
   - Nothing is ever deleted or flipped to false automatically.
   - New fields are additive.
   - Records that have no date are marked as undated. A date is never invented for them.

### 3.2 Target record shape (all new fields optional)

```js
"3.T.T.1.a": {
  // existing, unchanged meaning
  taught, learned, practiced, tried, tries, best: {got,max}, mastered, checks, fluency,
  // new (phase A)
  passedAt: "2026-10-20",        // local date of the FIRST pass; never overwritten
  passTry: 2,                    // value of `tries` on the first pass
  passBy: "test" | "grownup",
  lastPassAt: "2026-10-20",      // most recent pass
  attempts: [ { d, got, max, ok, n, afterAnswers } ],   // last 20 submitted checks
  answersSeenAt: "2026-10-20T15:04",  // last time the child opened See my answers or Show me how on this check
  legacyUndated: true,           // set once if mastered existed before dates were recorded
  firstSeenPassedAt: "2026-10-21",    // when this version first saw that undated pass (not the pass date)
  pr: { p: { d, first, n }, y: { d, first, n } },  // last practice run: first-try-unaided count
  // new (phase B, only after approval)
  reviews: [ { d, got, max, ok, form } ],
  retained: true, retainedAt: "…",
  needsReview: true
}
```

### 3.3 Derived display states

These are computed when the page is drawn and never stored in phase A.

| Derived state | Rule | Parent wording |
|---|---|---|
| Not started | no fields | "Not started" |
| Introduced | `taught` or `learned` only | "Lesson started" |
| Practiced | `practiced` or `tried`, not passed | "Practiced (with help allowed)" |
| Check not passed yet | `tries > 0`, not passed | "Skill check tried, not passed yet" |
| Passed check | `mastered` | "Passed the skill check" (grown-up Check: "Passed the grown-up check") |
| Review suggested | `mastered` and (days since `lastPassAt` ‖ `passedAt` ‖ `firstSeenPassedAt`) ≥ 7, or the most recent attempt is a fail | "Passed the skill check · review suggested" |
| Retained (B) | `retained` | "Still knows it: passed again on a later review" |
| Needs review (B) | `needsReview` | "Needs review: missed on a later check" |

---

## 4. Implementation split

### (A) Safe, backward-compatible changes (no change to the meaning of stored data)

Rules for every A change:
- Keep `status()` return values (`"mastered"`, `"started"`, `"new"`) and the CSS class `is-mastered` exactly as they are. Only displayed strings change.
- `mastered`, `best` and `tries` are written exactly as today.

#### A1. Reword "mastered" to "passed the skill check" (display only)

| Location | Current | New |
|---|---|---|
| `skills.js:10` (comment) | "Mastered = at least 80% …" | "Passed = at least ceil(80%) of the check's points (stored as `mastered` for compatibility)." |
| `skills.js:103` | dead `STATUS` map | Delete it, or update it to the new labels. It is unused either way. |
| `skills.js:193` | `"Mastered."` | `"Passed the skill check."` (and `"Started."` → `"Started."`, unchanged) |
| `skills.js:224` | `"All mastered!"` | `"All skill checks passed"` |
| `skills.js:225` | `" of " + total + " mastered."` | `" of " + total + " skill checks passed."` |
| `skills.js:242` | "Every skill is mastered on this device. Amazing work!" | "Your child has passed every skill check on this device. Come back to skills over the next weeks to make sure they stick." |
| `skills.js:256` | " skills that are on the test are mastered on this device." | " skills that are on the test have a passed skill check on this device." |
| `skills.js:565` | "✓ Finished. Ready for the test!" | "✓ Finished. Next: the skill check." |
| `skills.js:611` | "…no hints, like the real test. Score X or more to master this skill." | "N questions, M points, no hints. Score X or more to pass the skill check." |
| `skills.js:612` | "✓ Mastered! Best score: …" | "✓ Passed the skill check" + (passedAt ? " on " + date : "") + ". Best score: G of M." |
| `skills.js:613` | "Need X to master it." | "Need X to pass." |
| `skills.js:804` | "Mark this skill mastered" | "Mark the grown-up check passed" |
| `skills.js:814` | "✓ Mastered!" | "✓ Passed the grown-up check" |
| `skills.js:853` | "You mastered this skill! It now shows a check mark on the skill list." | "You passed the skill check! It now shows a check mark on the skill list. Come back in about a week and try it again to see if it stuck." |
| `skills.js:854` | "To master this skill, score X or more. …" | "To pass the skill check, score X or more. Go back to Watch Me or Practice Together, then try the check again another day." |
| `index.html:44` | "Not mastered" | "Not passed yet" |
| `site.js:109` | "Score 80% on the test to mark it mastered." | "Score at least 80% of the points on the skill check to pass it. On a 6- or 7-point check that means missing no more than 1 point." |
| `site.js:111` | "Once several skills are mastered" | "Once several skill checks are passed" |
| `parents.js:227` | "Test: no hints, like the real test." | "Test: no hints. Results are in points …" |

Keep "like the real test" only on the full practice test (PT-1), where it is closer to true.

Not to be changed: the GUM level words "Master / Reinforce / Introduce / Continue" (`skills.js:98, 367`, `parents.js:60, 144`). They are Georgia's own chart labels.

#### A2. Parent explanation of what the check measures

- Add a section to `buildPlan()` in `parents.js`, after "Practice and Test modes", with the heading **"What 'Passed the skill check' means"**:

  > A skill check is 4 to 6 questions on one skill, with no hints. Passing means your child scored at least 80% of the points on their own, one time, on this device. It is a good sign, not proof the skill is secure. The check uses the same questions each time, and after a try your child can see the answers, so a quick retake can be passed from memory. The site shows when a check was passed and on which try. A Peach Prep check is not a Georgia Milestones score and does not predict an achievement level. The real test mixes skills across longer passages. Come back to a passed skill about a week later, and again a few weeks after that. If your child still gets it right, it has stuck.

- On the skill page, add one line under the ALD list at `skills.js:378`:

  > "Passing a Peach Prep skill check is not a Milestones score or achievement level."

- Update `site.js:113` to say: "Progress (lessons started, practice finished, skill checks passed, with dates) is saved on this device only. …"

#### A3. Assisted answers are never independent evidence (test mode is already unaided; close the loophole)

- Tests already show no Help me (`player.js:233`) and no clue highlighting (`player.js:81`). Verified in 1.7. **No change is needed to scoring.**
- Close 1.5. In `player.js` `start()`, after line 421, add:
  ```js
  if (set.kind === "skill" && set.part === "t") mode = "test";
  ```
- In `skills.js:77`, make `recordPractice` ignore part `"t"`:
  ```js
  if (part === "t") return;
  ```
- Neither change alters what an existing flag means. Each removes a path that should not have existed.

#### A4. New date and attempt fields (additive only)

All of these go in `skills.js`.

- **Add `today()`**, a local `YYYY-MM-DD`:
  ```js
  const d = new Date();
  d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate())
  ```
  Use local time, not `toISOString()`. The existing fluency code uses UTC, which can be off by one day in the evening in Georgia.
- **`recordTest(k, got, max)`** keeps lines 69-73 as they are, then adds:
  ```js
  const n = r.tries;
  const after = !!(r.answersSeenAt && n > 1);   // the answers to these same items were shown before
  r.attempts = (r.attempts || []).concat({ d: today(), got, max, ok: pass, n, afterAnswers: after }).slice(-20);
  if (pass) {
    if (!r.passedAt && !r.legacyUndated) { r.passedAt = today(); r.passTry = n; r.passBy = "test"; }
    r.lastPassAt = today();
  }
  ```
- **`renderCheck`** click handler (`skills.js:815`): when it sets `mastered`, also set `passedAt`/`lastPassAt` if absent, and `passBy: "grownup"`.
- **`answersSeenAt`**:
  - In `player.js` `buildReview`, when `#res-review-btn` opens the review or "Show me how" is pressed on a skill test (`run.set.kind === "skill"`), call a new `PP_SKILLS.answersSeen(run.set.code)`.
  - That function sets `rec(k).answersSeenAt = new Date().toISOString()`.
  - Export it at `skills.js:869`.
- **`recordPractice(k, part, first, n)`**: `practiceDone` (`player.js:315`) passes `first` and `n`. Store `r.pr = r.pr || {}; r.pr[part] = { d: today(), first, n }`.
  - `practiced`/`tried` are set exactly as today.
- **Legacy pass:**
  - In `load()`, or once after it, for each record with `mastered && !passedAt && !legacyUndated`, set `legacyUndated = true` and `firstSeenPassedAt = today()`, then `save()`.
  - Never set `passedAt` for these records.
  - Nothing existing is modified or removed.

#### A5. Shuffle on retake

- Choices: **already shuffled every sitting** (verified). No change.
- Item order (optional and low value): in `player.js` `start()`, when `set.kind === "skill" && set.part === "t"`, set `run.items`.
  - That is a copy of `set.items` shuffled **within runs of consecutive items with the same `passages` key**, so passages are not interleaved.
  - `renderItem`, `submit`, `ctxFor` and `inProgress` would then read `run.items` instead of `run.set.items`. There are about 8 references in `player.js`.
  - This does not prevent recall of answers. It only removes position cues. Say so in the change note.
- Passage-sentence hottext stays in passage order (correct by design).

#### A6. "Review suggested" (derived, display only)

- **Add `reviewDue(k)`:**
  - true if `prog[k].mastered`, and either:
    - (days since `lastPassAt || passedAt || firstSeenPassedAt`) ≥ 7, or
    - the last entry in `attempts` has `ok:false`.
  - No stored status changes.
- **Skill row** (`skills.js:191`): when `reviewDue`, keep the ✓ and add `make("span","sl-review","review")`. The aria label adds " Review suggested."
- **Test card** (`skills.js:612`), after the pass line:
  - "It has been N days since this check was passed. Take it again to see if it stuck."
  - Or, if the last attempt failed: "The last try did not pass. A little more practice is a good idea."
- **Up next** (`buildUpNext`): optionally offer one due review after the first not-passed skill:
  - "Review: E1 …". The first not-passed skill still comes first.
- **Home line** (`buildProgress`): add a second sentence when any are due: "N passed skills are due for a review."

#### A7. Show passes honestly to the parent

- On the test card, when `passTry > 1`, add:
  - "Passed on try N. The check uses the same questions each time."
- When the passing attempt has `afterAnswers`, add:
  - "Passed after seeing the answers on an earlier try."
- This is display only, from the A4 fields.

#### Tests to add or update (`verification/guard.py`)

**Update** (wording):
- 9.6: assert "To pass the skill check" in g1 and "passed the skill check" in g2.
- 9.8: assert "Passed the skill check" in the aria label.
- 9.13: the button text "Mark the grown-up check passed".
- 9.9 still asserts `status == "mastered"`. The internal value is unchanged.

**New:**
- 9.15 Opening a lesson from the list writes nothing. `localStorage.getItem('pp.progress.v1')` is null after the click.
- 9.16 `#play/SK:<k>:t/practice` starts in **test** mode, Help me is hidden, and finishing does not set `practiced`.
- 9.17 A first pass stores:
  - `passedAt` matching `/^\d{4}-\d{2}-\d{2}$/`;
  - `passTry === tries`;
  - `passBy === "test"`;
  - `attempts.length === tries`.
  - `mastered`, `best` and `tries` keep their old semantics.
- 9.18 Legacy fixture. Before load, set `pp.progress.v1 = {"<k>":{"taught":true,"tries":2,"best":{"got":7,"max":7},"mastered":true}}`, then reload. Expect:
  - `status === "mastered"`;
  - the original 4 fields are deep-equal to the fixture;
  - `legacyUndated === true` and `firstSeenPassedAt` is set;
  - `passedAt` is undefined;
  - the row label says "Passed the skill check".
- 9.19 Fail after pass: `mastered` stays true, the last attempt has `ok:false`, and the row shows "review".
- 9.20 Review due by date:
  - a fixture with `lastPassAt` 10 days ago shows "review";
  - one 2 days ago does not;
  - the stored record is unchanged by rendering.
- 9.21 Seeing answers: on a skill test, open See my answers, retake and pass. The passing attempt has `afterAnswers:true`.
- 9.22 Practice record: a run with all hints stores `pr.p.first === 0` and `practiced === true`.
- 9.23 No user-facing "mastered" or "mastery".
  - On home, the skill test step, the results screen and every parent tab, `document.body.innerText` does not match `/\bmaster(ed|y)?\b/i`.
  - Exclude Georgia's GUM labels by first removing "Master by the end of grade 3" and the "· Master" code chip text.
- 9.24 The parent plan tab contains "not a Georgia Milestones score".
- 9.25 (only if A5 item shuffle is done) Over 5 sittings, item order differs at least once, and items sharing a passage stay adjacent.

**Docs:** `SPEC.md:247` should read "Passed = …, stored as `mastered`".

### (B) Changes that need owner approval

These change what stored progress means, or the assessment policy.

| # | Change | Why it needs approval | Recommendation |
|---|---|---|---|
| B1 | **Item pools.** Add a second form per lesson (`review: []` or `test2: []`, 4-6 new items on new passages). Retakes and reviews alternate forms. | It is new content for about 96 lessons. Each set needs the checker and two independent reviews (manifest rule). It is also a SPEC §8 schema change. | Start with the 74 on-test lessons. Until then, label reviews "same questions" honestly. |
| B2 | **Spaced reviews make "Retained".** A pass at 7 days or more after `passedAt`, then another at 14 days or more after that, sets `retained:true, retainedAt`. | It adds a new stored status level and changes the home counts. | Show two counts: "passed the check" and "still knows it". |
| B3 | **Needs review.** A failed review stores `needsReview:true`. A later pass clears it. | This is the first stored flag that lowers the displayed standing of a passed skill. The owner must decide whether such skills still count in "N of 74". | Keep them in "passed" (that historical fact is true). Remove them from "retained". Show "needs review". Never touch `mastered`. |
| B4 | **Independence rule for retakes.** A pass on the same form within 24 hours of `answersSeenAt` does not count as an independent pass. It is shown as "Passed after seeing answers"; the stored `mastered` is not set until a later, unexposed pass. | It changes when `mastered` is set. | Recommended. Alternatively, B5. |
| B5 | **Retake cooldown or hidden answers.** Either allow a check retake only on a later day, or hide "The answer: …" in the skill-test review until the check is passed. Show me how hints 1-2 can stay. | It changes the assessment and feedback policy. Hiding answers reduces learning feedback. | Prefer B4 (record honestly) or a next-day retake over hiding feedback. |
| B6 | **Exact pass rule.** Either change the rule to match "80%" (`floor` instead of `ceil`), or keep `ceil` and say "at least 80%, rounded up". Optionally require every item type to be at least partly right. | It changes when a skill passes. | Keep `ceil`. Fix the wording in A1. |
| B7 | **Grown-up Check equivalence.** Decide whether a grown-up Check can become "Retained" and on what schedule. | Policy | Same 1-week and 3-week schedule, with re-ticking by a grown-up. |
| B8 | **Practice accuracy gates.** For example, Try It must have at least half right on the first try before "Ready for the check" is shown, or before the check unlocks. | It changes the flow and what `tried` means. | Show the count only (A4 data). Do not gate. |
| B9 | **Decay after Retained.** "Review suggested" every 8 weeks. It never changes stored state. | Mostly display, but it sets a policy the parent will rely on. | Approve with B2. |
| B10 | **A parent "progress report" view** listing the four levels per skill with dates and tries. | New surface. Privacy wording must say the data stays on the device. | Optional, after A. |
| B11 | **A reset or export UI** for `resetProgress()` and a JSON export. | It is destructive or new. It must confirm first and never run silently. | Export first. Reset only behind a confirm. |

---

## 5. Summary

- **Opening a lesson** does not mark it started. Leaving the Learn It step does, even with no reading.
- **Practice** never sets mastery, but assisted practice sets `practiced` and `tried`, and accuracy is thrown away.
- **Tests** are unaided (verified). There is one loophole: the test items can be opened in practice mode with hints by typing an address.
- **The pass rule** is `ceil(80%)` of 6-9 points on a fixed 4-6 item test. In effect that means at most one point dropped.
- **The test is always the same items in the same order** (verified across 3 sittings).
  - Choices are reshuffled each sitting, except passage-sentence hottext.
  - The results review shows the answers, and an immediate retake is offered.
  - So a fail-then-pass from recall marks the skill "Mastered" (verified 0/8 → 8/8).
- **Mastery is never revoked or reviewed.** A later 0/8 leaves "✓ Mastered! Best score: 8 of 8". No dates are stored.
- **The labels** say "Mastered", "N of 74 skills … are mastered", "All mastered!", "Amazing work!", "Ready for the test!" and "like the real test". The parent plan says "Score 80% … to mark it mastered".
  - No text names a Milestones achievement level.
  - But "Mastered" sits beside the Proficient ALD box, which invites that reading.
