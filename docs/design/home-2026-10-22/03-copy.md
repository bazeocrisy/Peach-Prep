# 03 · Copy deck: redesigned home

Instructional UX and copy agent. Baseline: `main` at 9a5b297, "Peach Prep 2.2.0-rc (PP-003)". This file gives exact strings for the implementation agent. Line references are to the baseline worktree `/home/claude/pp-home`.

Conventions in this deck:
- `{x}` is a value filled in by code. `{id}` is the catalog ID from `PP_SKILLS.skillId(k)` (for example D3). `{short}` is the lesson title cut at the first colon, as `buildCards` already does (`js/skills.js:419`). `{step}` is the step name from `PP_SKILLS.stepNames(k)`, so hands-on lessons say "Practice" and "Check".
- "Parent" strings are written for an adult. "Child" strings may be read by an eight-year-old: short words, one idea per sentence.
- Existing terms are kept exactly: Learning Path, Learn It, Watch Me, Practice Together, Try It Yourself, Test Your Knowledge, skill check, Help me, Show me how, Passed the skill check, Checked by a grown-up, Review suggested.

---

## 1. What the code actually saves (this decides the returning copy)

| What | Where | Saved? | Evidence |
|---|---|---|---|
| Learning mode (path or browse) | `pp.path.v1` `.mode` | Yes | `js/path.js:15`, `:93`, `:98` |
| Path introduced | `pp.path.v1` `.introduced` | Yes | `js/path.js:16`, `:105` |
| Path bookmark: lesson key **and step tab** | `pp.path.v1` `.bookmark = {key, step}` | Yes, but **only while mode is "path"** | `js/path.js:59-68` (`track` returns early unless mode is path) |
| "Activities finished" ticks (parent checkbox) | `pp.path.v1` `.finished` | Yes | `js/path.js:108-119` |
| Everyday habit "Tried together" ticks | `pp.path.v1` `.habits` | Yes | `js/path.js:113` |
| Next path lesson | computed: bookmark if not ticked finished, else first lesson not ticked finished | Computed from ticks, **not** from check results | `js/path.js:50-54` |
| Last lesson opened in browse mode | `lastCode` | **No**, memory only, lost on reload | `js/skills.js:326`, `:547` |
| Last category card tapped | `pp.progress.v1` `._ui.lastCat` | Yes | `js/skills.js:422` |
| Browse "Up next" | computed: first lesson without a pass in the last category tapped (default Reading) | Computed | `js/skills.js:438-451`, `:315-318` |
| Step done marks (taught, learned, practiced, tried) and passes | `pp.progress.v1` | Yes | `js/skills.js:92`, `:181-204`, `:604`, `:626` |
| Position inside a practice set or check | nothing | **No**. The player stores nothing; leaving a check warns "Your answers will not be saved." | `js/engine/player.js` (no storage calls), `js/app.js:75` |
| Essay draft, plan, checklist, parent scores | `pp.task.<id>` | Yes | `js/writing.js:30`, `:79`; `js/skills.js:308` |

Consequences for copy:
1. "Pick up with … ({step})" is honest **only** in path mode with a bookmark on a lesson not ticked finished. It reopens the step tab, not a question.
2. In browse mode nothing records the last lesson. The panel must say "next lesson without a passed check", never "pick up" or "continue".
3. The path's "next" is driven by the parent's "Activities finished" ticks. Copy must not imply the site decided the child is ready.
4. A bookmark on Test Your Knowledge or Check must say the check starts fresh.
5. Never use "Continue where you left off". Do not use "Continue My Path" (`js/path.js:83`) without naming the lesson.

---

## 2. Hero

| Slot | String | Rationale |
|---|---|---|
| Brand | `Peach Prep` | Unchanged. Drop "· Grade 3 ELA" from the brand line (`index.html:21`) because the hero now says it. |
| H1 | `Help your third grader with Georgia's Grade 3 ELA skills` | Says who it is for (parent of a third grader), what (Grade 3 ELA) and where (Georgia) in ten words. Replaces "How would you like to learn?" (`index.html:22`), which asks a question before saying what the site is, and "Georgia Milestones · Grade 3 ELA" (`index.html:77`), which is a label, not a promise. |
| Supporting line | `Short reading, writing and grammar lessons to do together. Free, with no login.` | "Together" sets the parent's role from the first screen. "Free, with no login" answers the two common first-visit worries. It does not mention the Milestones score; the test is covered in the Parent guide. |

Do not put the five step names in the hero. The current hero sub (`index.html:78`) spends 22 words on them; they move to the routine explainer (section 5).

---

## 3. The two choices (first visit)

Section heading: `Where would you like to start?`
Rationale: a concrete question with two answers below it. Shorter than "Choose a suggested route or pick a skill. You can switch anytime." (`index.html:23`), whose reassurance moves into the cards.

### Card 1: Learning Path

| Slot | String | Rationale |
|---|---|---|
| Tag | `Recommended` | One word. It recommends a way of using the site, not a lesson for this child. Replaces "A little guidance" (`index.html:26`). |
| Title | `Follow the Learning Path` | Existing term (`index.html:27`). |
| Description | `A suggested order of lessons, from stories and sentences to research and essays.` | "Suggested order" is the key honesty phrase. Names the start and the end so a parent sees the arc. Replaces `index.html:28`, which ends "See what to work on next", which can read like a recommendation made for this child. |
| Button | `Start the Learning Path` | Verb plus object. Distinct from the card title so it does not read as a repeated heading. Replaces "Follow the Learning Path" on the button (`index.html:29`). |

Learning Path preview: a disclosure under the card, or the intro on `#path`. Heading: `How the Learning Path works`

1. `Lessons come in a suggested order. It is not a test, and it does not place your child.`
2. `The path starts with D1 · Story elements. You can skip ahead or go back anytime.`
3. `Each lesson has a few short steps. One lesson can take more than one sitting.`
4. `Tick "Activities finished" when you are done, and the path moves on. You can still choose any lesson.`

Rationale: four bullets of 14 to 18 words, against five bullets and 82 words now (`index.html:54-58`). Bullet 1 states the no-placement rule in plain words. Bullet 2 names the real first lesson (the first path entry is `3.T.T.1.b`, catalog ID D1, from `js/data/path.js` phase 1), so the starting point is seen as fixed, not chosen for the child. If the implementer cannot fetch the ID at render time, use `The path starts with story elements.` Bullet 4 explains what moves the path forward (the parent's tick, `js/path.js:50-54`) and keeps free choice. The reading-aloud and handwriting note (`index.html:56`) moves to "When a grown-up joins in" (section 5).

Path intro buttons (`index.html:61-62`):
- Primary: `Start with D1 · Story elements` (fallback `Start the first lesson`). This replaces "Start My Path", and the label says what will open.
- Secondary: `See the whole path`. This replaces "View the Full Path"; sentence case matches the other buttons.

### Card 2: Choose a lesson

| Slot | String | Rationale |
|---|---|---|
| Tag | none | One tag only, so "Recommended" stays meaningful. |
| Title | `Choose a lesson` | Requested label. Sentence case. Replaces "Choose Individual Lessons" (`index.html:33`, `:35`; `js/path.js:216`). |
| Description | `Pick one skill your child needs or is learning at school.` | Names the two reasons a parent browses. "Every lesson stays available" moves to the card footnote below, where it covers both cards. |
| Button | `Choose a lesson` | Same as the title, on purpose: it is the action itself, and it opens browsing with search and filters (`#browse`). |

Footnote under both cards: `You can switch anytime. Your progress stays.`
Rationale: covers "switching does not erase work" (assignment section 9) in seven words. This is true: `browse()` and `open()` only change `.mode` (`js/path.js:91-103`).

Storage line under the footnote: `Saved on this device only` as a link to the explanation in section 7.

---

## 4. Returning panel

Show it when `pp.path.v1` has `introduced: true` or a `mode`, or `pp.progress.v1` has any lesson record. Pick the first case that applies, from top to bottom. The panel replaces the two-choice cards above the fold. A small `Choose a lesson` / `Learning Path` link keeps the other mode reachable without onboarding again.

### R1. Path mode, bookmark on a lesson not ticked finished, step is Learn It, Watch Me, Practice Together, Practice or Try It Yourself
- Eyebrow: `Next on your Learning Path`
- Title: `{id} · {short}`, for example `D3 · Cause and effect`
- Line: `Pick up with: {step}`, for example `Pick up with: Watch Me`
- Small print, shown only when step is Practice Together, Practice or Try It Yourself: `Practice questions start again from the first one.`
- Primary button: `Open {step}`, for example `Open Watch Me`
- Secondary: `See the whole path` · `Choose a lesson`

Rationale: the bookmark stores lesson **and** step tab (`js/path.js:66`, `:73`), so naming the step is supported. The player saves no question position, so the small print stops a parent expecting question 4 of 6.

### R2. Path mode, bookmark step is Test Your Knowledge or Check
- Eyebrow: `Next on your Learning Path`
- Title: `{id} · {short}`
- Line (scored check): `Pick up with: Test Your Knowledge. The skill check starts fresh each time.`
- Line (hands-on Check): `Pick up with: Check. A grown-up does this step with your child.`
- Primary: `Open Test Your Knowledge` / `Open Check`
- Secondary: as in R1

Rationale: an unfinished check is never resumed (`js/app.js:75`, `js/engine/player.js`). Saying "starts fresh" up front is better than surprising the child.

### R3. Path mode, no bookmark, or the bookmarked lesson is ticked finished
- Eyebrow: `Next on your Learning Path`
- Title: `{id} · {short}`
- Line: `The next lesson on the path that is not marked finished.`
- Primary: `Start this lesson`
- Secondary: as in R1

Rationale: `current()` falls back to the first lesson that is not ticked (`js/path.js:53`). The line names that rule, so nobody reads it as the site's judgement.

### R4. Path bookmark is an essay task (`task:…`)
- Eyebrow: `Next on your Learning Path`
- Title: `Essay: {task title}`
- Line, when `pp.task.<id>` has a draft: `Your draft is saved on this device.` When there is no draft: `Read two sources, plan, then write.`
- Primary: `Open the essay`

Rationale: drafts, plans and scores are saved (`js/writing.js:79`); a task has no step tabs.

### R5. Browse mode (or path not started) with progress
- Eyebrow: `Next lesson without a passed check in {category}`
- Title: `{id} · {short}`, for example `D1 · Story elements`
- Primary: `Open {id}`
- Secondary: `Follow the Learning Path` (or `Back to the Learning Path` if `introduced` is true) · `Choose a different lesson`

Rationale: browse mode saves only the last category tapped, not the last lesson (`js/skills.js:422`, `:438-451`). So this is a suggestion computed from the passes, not a resume point. Replaces "Up next in {category}" (`js/skills.js:446`), which is fine but does not say why that lesson is next.

### R6. Path: every lesson ticked "Activities finished"
- Eyebrow: `Learning Path: every lesson marked finished`
- Title: `Keep reading, writing and revisiting skills`
- Line: `Marked finished means you worked through the lessons. It is not a score. Lessons marked "Review suggested" are a good place to start again.`
- Primary: `Choose a lesson` · Secondary: `Mixed practice and practice tests`

Rationale: replaces `js/path.js:140`, `:146-147`. It keeps the no-mastery message, uses shorter sentences and adds a concrete next step.

### R7. Browse: every lesson has a pass or a grown-up check (replaces `js/skills.js:445`)
`Every lesson has a passed skill check or a grown-up check on this device. Come back to a few each week to keep them fresh.`
Rationale: the current text "Your child has passed every check" also counts grown-up checks as passes (`status()` returns "mastered" for both). The new wording names both kinds and makes no claim that the skills will stick.

Never use: "Continue where you left off", "Resume your test", "Continue My Path" without a lesson name, or "Begin / Continue Lesson" (`js/path.js:144`), whose slash leaves the parent guessing which one will happen.

---

## 5. Learning routine explainer

Heading: `How each lesson works`
Lead (parent): `Most lessons have five short steps. Do them in order, at your child's pace.`

| Step (existing name) | Line (child-readable) |
|---|---|
| Learn It | `Read a short lesson about the skill together.` |
| Watch Me | `See the skill done step by step in examples.` |
| Practice Together | `Answer questions side by side. Help me gives hints.` |
| Try It Yourself | `Your child answers alone. Help me opens after one wrong try.` |
| Test Your Knowledge | `A short skill check with no hints. Get 80% of the points to pass.` |

Rationale: one line each, under 13 words. Each line says who does the step. The Help me rules match `js/data/site.js:106` ("Help me is on" / "turns on after one wrong try"). "80% of the points" matches `passMark` (`js/skills.js:93`); percentages stay as numerals.

Hands-on note: `Some lessons are different. Hands-on lessons, like reading aloud and cursive, have Learn It, Watch Me, Practice and a grown-up Check. A few lessons skip Try It Yourself.`
Rationale: matches `stepsFor` (`js/skills.js:532-540`). It prints "Practice" and "Check" for hands-on lessons, and Try It Yourself only when the practice set is long enough to split (`js/skills.js:33-36`).

Sub-heading: `When a grown-up joins in`
- `Reading aloud: listen to your child read, then tick the Check.`
- `Cursive: watch your child write the letters, then tick the Check.`
- `Essays: read the essay and score it in the "For parents" tab.`
- `"Say it out loud" cards: talk through the answers together. These ticks are practice only and do not change the skill check.`

Rationale: these are the four places where the site needs an adult. "For parents" is the real tab name (`index.html:289`). The "Say it out loud" wording follows `js/skills.js:814-815` and `:835`.

---

## 6. Progress legend

Heading: `What the marks mean`

| Mark (as shown) | String | Rationale and source |
|---|---|---|
| ◐ | `Started: your child has begun this lesson. No check passed yet.` | `status()` returns "started" once Learn It is left or any practice or check is tried (`js/skills.js:261`, `:604`). Opening a lesson alone does not set it, so do not say "opened". |
| ✓ on a lesson step | `Step done: your child finished that step, such as Watch Me or a practice set.` | Step bar ticks (`js/skills.js:626`, `:634`). This is the "practiced" signal; the home list does not separate Learning from Practicing. |
| ✓ | `Passed the skill check: scored at least 80% on this site's short check, once, on this device. A good sign, not mastery and not a Milestones score.` | Matches `js/parents.js:240`, `:242` and `js/skills.js:591`. |
| ✓ grown-up | `Checked by a grown-up: a grown-up watched a hands-on skill and ticked the Check. It is not a scored check.` | `js/skills.js:374`, `:1229-1251`; kept separate as in `js/parents.js:244`. |
| review | `Review suggested: it has been a week since the check was passed, or the last try did not pass.` | `reviewDue` (`js/skills.js:245-256`). "A week" replaces "7 days" in prose. |
| Ring, for example 3/24 | `Lessons in this group with a passed skill check or a grown-up check.` | `catStats` counts every "mastered" status, which includes grown-up checks (`js/skills.js:319-324`). Essays are counted outside the ring. |
| Activities finished (path) | `Activities finished: a tick you add to mark your place. It does not change any score.` | `js/path.js:1`, `:108-119`. |
| Standards coverage | `Coverage describes this site: which Georgia standards have a lesson here. It does not describe what your child knows.` | Keeps site coverage apart from child progress (assignment section 9). |

Retained: no legend line while `PP_FLAGS.retained` is off, which is the default (`js/skills.js:127`). If the flag is on, add: `Retained: passed again on the other form of the check, at least a week later.` That matches `maybeRetain` (`js/skills.js:168-180`).

Footer of the legend: `All marks are saved on this device only.`

---

## 7. Support links

| Label | One-line description | Target |
|---|---|---|
| `Parent guide` | `The test, the essay, and how to use this site.` | `#parents` |
| `Georgia standards` | `What each Grade 3 ELA standard asks, in plain words.` | `#parents/standards` |
| `Everyday habits` | `Reading and writing habits to try at home.` | `#habits` |
| `Mixed practice and practice tests` | `Passages that mix skills, like the real test.` | `#mixed` |
| `Clue Word Cheat Sheet` | `Clue words for each kind of text. Printable.` | `#clues` |
| `Saved on this device only` | expands to the text below | in-page |

"Saved on this device only" text:
`Progress is kept in this browser on this device. There is no account. Clearing browser data erases it, and other devices will not see it. If two children share this device, their progress is mixed together.`
Rationale: this replaces "Shared use is not separate child tracking" (`index.html:38`) with the consequence a parent cares about. It merges `index.html:38`, `:66` and `:111`.

When storage is blocked (replaces `js/path.js:29` on the home only; keep the UX-001 writing notices unchanged):
`Saving is off in this browser. Today's work will be lost when this page closes. Write down the lesson you are on.`

Rename the "Practice tests and mixed practice" button (`index.html:88`) to `Mixed practice and practice tests`, so it matches the brief and the order on the Mixed page.

---

## 8. Browse: search, filters, empty states

| Slot | String | Rationale |
|---|---|---|
| Search label (visible or sr) | `Find a lesson` | "Lesson" is the thing you open. Replaces "Find a skill" (`index.html:95`). |
| Placeholder | `Try: pronoun, D3, 3.T.T.1` | Shorter. It shows the three kinds of search (word, catalog ID, Georgia code) like `index.html:96` does, and uses an ID that exists. |
| Filter group label | `Which lessons to show` | Matches the new noun. |
| Filters | `All` · `On the test` · `Not passed yet` | Unchanged (`index.html:98-100`). |
| Empty search | `No lessons match "{q}". Try a shorter word, a lesson number like D3, or a Georgia code.` | Echoes the query and gives three concrete fixes. Replaces `index.html:105`. |
| Empty filter: Not passed yet | `Every lesson here has a passed skill check or a grown-up check on this device. Choose All to see them.` | The "todo" filter hides every "mastered" status (`js/skills.js:346`), and that includes grown-up checks. |
| Empty filter plus search | `No lessons match "{q}" with this filter. Choose All, or try another word.` | Tells the parent which control to change. |
| Match count (unchanged logic, `js/skills.js:401`) | `{n} lessons and {m} essay tasks match.` with counts below ten as words (`one lesson matches`, `three lessons match`) | Rule from section 9 of the assignment. The current code prints numerals ("3 skills match"). |

---

## 9. Reading burden

Measured with Playwright at 390×844 on the baseline (port 8603). Words are visible text nodes whose top is above 844px, including buttons.

| Screen | Above the fold | Whole screen |
|---|---|---|
| First visit, `#choose` (current) | 100 | 100 |
| Browse home, `#browse` (current) | 95 | 1,521 |
| Returning path, `#path` with bookmark (current) | 96 | 6,442 |
| Path intro, `#path` first time (current) | 111 | 6,536 |

The current 100 first-visit words do not say what the site teaches, how a lesson works or what the marks mean. About 25 of them are a storage disclaimer.

Proposed first-visit above-the-fold (hero, both choices, footnote and storage link): **82 words**, counted from the strings above:
- Brand 2, H1 10, supporting line 13, section heading 6 = 31
- Card 1: tag 1, title 4, description 13, button 4 = 22
- Card 2: title 3, description 11, button 3 = 17
- Footnote 7, storage link 5 = 12 (if these fall below 844px, the count is 70)

The prose a parent actually reads (H1, supporting line, heading, both descriptions, footnote) is 60 words: about 16 seconds at roughly 220 words a minute. Titles and buttons are scanned, not read, so the whole fold is about 20 to 22 seconds. Below the fold or behind a disclosure: preview bullets (65 words), routine explainer (75 words with the step names), legend.

Proposed returning panel (R1, Watch Me): eyebrow 5, title 4, line 5, three buttons 10 = **24 words**, against 96 now. On a practice step the small print adds 8.

---

## 10. String checks

| Check | Result |
|---|---|
| Counts below ten as words | Done: "five short steps", "one wrong try", "a few short steps", "a week" (not "7 days"), "two children", "two sources". Numerals stay only in IDs (D1, D3), codes (3.T.T.1), 80%, ring tallies (3/24) and `{n}` where n is ten or more. |
| No mastery claim | "Passed the skill check" is defined as one pass on this site's short check, "not mastery and not a Milestones score". "Marked finished" is described as "not a score". R7 drops "make sure they stick". |
| No placement claim | "Recommended" applies to the route, not to a lesson. "Suggested order", "It is not a test, and it does not place your child", and "The path starts with D1" (the same for every family). R3 and R5 say how the next lesson is picked. |
| Grade-3-friendly where a child may read | Step lines, buttons and empty states use short sentences and common words; the longest step line is 13 words, with one idea per sentence. Parent-only strings (legend, storage, coverage) are addressed to "you" and "your child". |
| Existing terms | Learn It, Watch Me, Practice Together, Try It Yourself, Test Your Knowledge, Practice and Check (hands-on), skill check, Help me, Passed the skill check, Checked by a grown-up, Review suggested, Activities finished, "For parents", "Say it out loud": all used exactly as in code. |

---

## 11. Copy inconsistencies found in connected code (record only; for the lead)

These are outside the strings above. Fix them only if the lead adds them to scope.

1. `js/skills.js:232` gives the label "Review recommended", but `:245`, `:381` and `:952` say "Review suggested". Use "Review suggested" everywhere.
2. `js/skills.js:420`: the ring's aria-label says "{n} of {m} checks passed", but the count includes grown-up checks. Proposed: `{n} of {m} lessons passed or checked by a grown-up.`
3. `index.html:78` shortens step five to "Test". The step name is "Test Your Knowledge".
4. "Skills" and "lessons" are used for the same thing: "← All skills" (`index.html:119`, `:137`, `:151`, `:165`; `js/app.js:26`, `:94`; `js/skills.js:548`), "Find a skill", "No skills match", "Choose Individual Lessons". Recommend "lesson" for the thing opened and "skill" for what is learned. A rename of the back buttons to "← All lessons" touches test selectors, so the lead should decide.
5. `js/path.js:134`, `:153`, `:195`, `:196` call the same items "everyday routines", "routines", "everyday activities" and "Everyday parent activities" (`:156`), while the page is "Everyday habits" (`index.html:156`). Use "everyday habits".
6. `js/path.js:143`: "Your place in the lesson is bookmarked." is true only at the step-tab level. Use R1's "Pick up with: {step}" instead.
7. Numerals for counts below ten in prose, outside the home: `js/parents.js:240` "4 to 6 questions" (use "four to six questions"); `js/parents.js:243` "7 days" (use "seven days" or "a week"); `js/skills.js:418` "+2 essays" on the cards (use `plus two essays`). Points ("6- or 7-point check", `js/data/site.js:106`) may stay as numerals.
8. `js/data/site.js:105`: "The home page lists the skills in learning order" no longer describes the home once the Learning Path is the recommended order. Proposed: `Follow the Learning Path for a suggested order, or choose a lesson from the list. Use the On the test filter to see the skills the Milestones checks.`
9. The browse mode stores no last lesson (`lastCode` is memory only). If the lead wants "Pick up with" in browse mode too, it needs a new additive key; the copy here does not assume one.
