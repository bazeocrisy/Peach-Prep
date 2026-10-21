# Peach Prep: instructional UX audit for parents supporting Grade 3 ELA

Date: 2026-10-21. Audit type: read-only application inspection, browser simulation, source reconciliation, and reuse of unchanged independent content reviews. No application code was changed, no correction implemented, and no merge or deployment was performed.

See the [evidence index and reproduction guide](EVIDENCE.md) for raw logs, screenshots and scripts.

## 1. Executive readiness assessment

**Suitable for a guided family review; corrections and acceptance checks remain. This is not an unconditional release or accessibility sign-off.** The Learning Path gives a reasonable common starting point, keeps lessons available without gates, and separates route completion from check results. Ordinary layouts were stable in the tested Chromium viewports. Two reproducible storage failures should be corrected before recommending dependable interrupted-session use. One explanation needs correction, and instructional number wording remains inconsistent.

The audit inventory and bounded test runs are delivered. **Full acceptance remains open:** actual-device testing, assistive-technology use, browser-native zoom, unsupported contrast backgrounds, and observed parent/child use are unverified. No finding here establishes learning effectiveness, independent mastery, official certification, or a Milestones prediction.

### Baseline and deployment

| Evidence | Pinned result |
|---|---|
| Current `main` | `5e977364d5d205d827c4fd097ac3048d07bc8da2` |
| Main tree | `58218d408fb03987a11c99b29a6cf825061e1251` |
| Application label | `Peach Prep 2.2.0-rc (PP-003)` |
| Previously reviewed feature head | `9c762a8bcb0a0da6177fc736da815d513e9395ba`; application paths match current main exactly |
| Live deployment fingerprint | All **83/83** tracked `index.html`, JavaScript, CSS and asset files fetched from GitHub Pages match main byte for byte; zero fetch errors |
| Open application PR | [#4, spelling out lesson question counts](https://github.com/bazeocrisy/Peach-Prep/pull/4), head `4f9418e4e0759a055b109f576cb1788e82fcf574`; open, not part of tested main |
| Previous PR #3 | Merged into the pinned main before this audit; historical reports describing it as unmerged/draft are superseded |
| Repository default branch | Fresh checkout selected `develop`, an older 2.1.0 source. Testing explicitly switched to current main; default checkout is not evidence of the live version |
| Audit branch | `audit/instructional-ux-2026-10-21` |

Asset equality supports using this source mirror for application behavior. It does not establish a unique deployment commit from a manifest label alone, nor test every live caching/network/browser behavior. Fresh interaction tests used the pinned local mirror, not a production browser session. External Google Font requests were blocked, so screenshots use available system fallback fonts; live font-loading and its layout effects require acceptance. GPU rendering was disabled in the packaged browser. `evidence/live-assets.json` records hashes and response headers. No “Build 5.1/5.2” labels are used.

### Evidence reused and its limits

Read/reconciled PP-003, PP-004, the final integration review, Learning Path implementation review, and parent sequence map. [Reused evidence](reused-evidence.csv) records 67 report hashes. PP-003 is historical; later PP-004 coverage classifications supersede its earlier partial counts. The parent map's suggested sequence is implemented; its old unmerged-candidate language is historical.

The existing source reconciliation and content reviews remain applicable to unchanged lesson/assessment data: **147 component-coverage rows**, including 94 lesson-backed expectation/GUM rows and 53 embedded Practices. The 99 lessons include five additional text-structure applications; two writing tasks make 101 catalog activities. There are 69 assessed expectation/GUM rows, 74 on-test lessons, 13 alternate forms, and 1,223 engine items. These are different denominators, not conflicting standards counts.

Reused evidence includes the prior 110-assertion integration run on its documented source and later Learning Path checks on the matching feature source. This audit does not relabel them as one new final-source full-suite run, repeat all standards-document extraction, or newly cold-solve every question. The supplied ALDs were DRAFT October 2025. No new claim that they are the latest GaDOE issue is made. Official rubric calibration and learning outcomes remain outside the reused evidence.

## 2. Screen/state coverage inventory

[Screen/state coverage CSV](screen-state-coverage.csv) has **9,747 geometry observations**, not 9,747 independent usability judgments. [Question coverage](question-coverage.csv) accounts for every registered item. The evidence archive contains raw ledgers, logs, source inventory and scripts. A geometry pass checks horizontal extent and identifies candidate small controls; it cannot prove that every word is legible or every interaction is accessible.

| Screen or state family | Actual inventory | Fresh coverage and boundaries |
|---|---|---|
| First visit | Two learning-mode choices, initial focus, path introduction, preview, Start, browse | All seven viewports; touch journeys on three emulated sizes |
| Learning Path | Next lesson, expanded phases/groups, P/G parallel lanes, 53 routine checkboxes, completion, reopening/unchecking | Default/expanded across seven; completed fixture at phone/desktop/short landscape; route checkboxes cannot score a pass |
| Individual browsing | 101 entries, category navigation, search results/empty, All/On test/Not passed filters, existing progress | Seven-size search/filter geometry; legacy/return behavior reused and fresh mode/draft tests; not every possible search string |
| Lesson steps | 95 lessons with five steps; four hands-on lessons with Learn It/Watch Me/Practice/Check | Every actual step of all 99 lessons at all seven sizes; expanded lesson panels at baseline phone/desktop |
| Watch Me reveals | 238 models, sequential steps and final answers | Every reveal at 320 and 1366; selected long examples at 844×390. 1,474 reveal observations; no active control/answer entirely offscreen |
| Player | 1,223 items: mc 499, dropdown 226, hottext 157, match 140, ms 109, ebsr 65, order 27 | Every item rendered in passage/default and question-pane contexts at baseline phone/desktop; item identity verified in supplemental run |
| Practice/try feedback | Blank, wrong, retry, three hints, walk-through, correct, locked, next; try initially hides help | Fresh representative per format at phone/desktop/short landscape; prior all-item score/hint checks reused. Not every response permutation newly exercised |
| Test | Unanswered/skipped, Previous, blank confirmation, submitted results, review/explanation, clean retry, completed-history reopening, direct form B | Fresh baseline phone/desktop/short landscape; leave cancel/accept and interruption tests; scoring keys supplied as fixtures where recorded |
| Oral/short writing | Three speaking components, 23 short-writing components; checkboxes, text and parent guidance | Every containing screen rendered; representative filled/checklist states exercised; adult performance itself not observed |
| Fluency/handwriting | Two fluency and two trace lessons; ready/reading/error/self-correction/time-up/result/observations/retry/too-short; adult Check | All four practice screens baseline; representative timer flow and explicit grown-up check at three sizes. Timer uses simulated clock; actual handwriting/reading not tested |
| Extended writing | Both tasks; sources, plan, draft, checklist, parent scoring, expanded scoring/model/examples, guarded reveal/reset | Both tasks/all tabs across seven; expanded examples and long inputs baseline; model/reset cancel/accept fresh; scoring is adult judgment |
| Parent guide | Test, standards, essay, plan; official/ALD disclosures; domain/test-only/search filters | Four tabs expanded/collapsed seven sizes; standards filters/search fresh baseline; existing 147-row wording review reused |
| Tools | Mixed hub, four sections, Clue Sheet, Everyday habits and expansions | All seven-size geometry; print dialog/output and linked external tools not freshly accepted |
| Recovery | Returning mode/bookmark, invalid hash, completed path, malformed/wrong-type/blocked/quota storage | Fresh fixtures with explicit logs; recovery defects below; not exhaustive arbitrary storage mutations |

**Method warning:** bulk item geometry traversal activates hidden Next controls through DOM calls to reach each item without resubmitting scores. It is expressly not evidence that an unaided child can skip practice, nor evidence of real answering. The focused state tests use the actual Check/Help/Next controls with response fixtures; keyboard/touch checks are identified separately. Source keys are not blind solves.

### Coverage ledger status

- Fresh: the rows and branches named above and in the CSV/JSON logs.
- Reused: unchanged key/content reviews, standards mapping, broad previous engine tests including scoring permutations, and documented historical print observations.
- Unverified: real devices, real screen-reader speech, physical-distance readability, child comprehension/transfer, native zoom, print acceptance, unsupported contrast cases, and the full cross-product of every item × every hint/response × every viewport.
- Potentially distinct component variants (for example multi-slot dropdowns, passage versus standalone hottext, larger matching grids, partial-credit permutations) are included in all-item baseline rendering and prior engine evidence. Their every interaction permutation was not freshly repeated. No “all combinations passed” claim is made.

## 3. Device-state results matrix

All seven rows below are **Chromium 131.0.6778.0, Playwright 1.49.1, headless desktop-context CSS viewport simulation**. They are not iPhone/iPad/Safari/Android acceptance.

| CSS viewport | Core screen/lesson observations | Normal horizontal overflow/page errors | Additional state coverage |
|---|---:|---|---|
| 320×568 small phone | 2,242 | 0 / 0 | All items in both panes, expanded panels, response branches, storage, long writing, text-resize stress |
| 390×844 typical phone | 528 | 0 / 0 | Generic mobile emulation/taps, persistence/recovery, leave/model/reset dialogs |
| 844×390 landscape phone | 528 | 0 / 0 | Wrong/hint/correct/test results, filled writing, fluency, sequential models, short-height scrolling |
| 768×1024 portrait tablet | 528 | 0 / 0 | Generic mobile emulation/taps; expanded long content |
| 1024×768 landscape tablet | 528 | 0 / 0 | Actual two-column layouts, writing tabs and expanded content |
| 1366×768 laptop | 2,242 | 0 / 0 | All items, expanded panels/models, response branches, nested-scroll keyboard test, long writing |
| 1920×1080 large desktop | 528 | 0 / 0 | Full lesson-step inventory and core screens |

Supplemental observation totals are separate from this table. Three fresh generic Chromium mobile/touch contexts (320,390,768) passed the selected start-to-answer journey without overflow. No Apple/Android device user agent, browser engine or physical keyboard was thereby tested.

At narrow widths the player separates passage and question into tabs; parents must help children return to the passage for evidence. At wide widths writing retains a nested scrolling source column. Long unbroken writing stayed within its input. Normal layout geometry found no sideways page scroll, including expanded panels. Full-page screenshots do not prove absence of vertical obstruction at every scroll position; focused model and short-height tests add evidence, not exhaustive scrolling proof.

### Reflow and text scaling

320 CSS px demonstrates narrow reflow equivalent in layout width to a 1280-wide viewport at 400% zoom. This is **not a native browser zoom test**. A separate stress experiment doubled every element's computed font size. It produced horizontal overflow on the four tested 320-wide screen families (catalog, lesson, writing, parent standards); desktop stress cases did not overflow. This artificial override is more invasive than browser text settings and is recorded as a **verification concern, not a confirmed WCAG zoom failure**. Acceptance must exercise native 200%/400% zoom and browser text enlargement, checking wrapping, sticky bars and input usability. See supplemental ledger entries `text-resize-200pct:*`.

## 4. Instructional-objective matrix

[The 99-row objective matrix](instructional-objectives.csv) connects each exact lesson key and Georgia expectation to its teaching, model questions, guided/independent prompts, checks, adult role, and inherited depth concerns. The existing 147-row coverage matrix remains the source for embedded Practices and GUM classification; it is not replaced by a 99-lesson denominator.

| Lesson family | Teaching/model → practice/check alignment | What a parent still needs to establish |
|---|---|---|
| Stories, context, perspective | Names story features and models inference from dialogue/actions; questions ask evidence, message, comparison and perspective | Child explains from a fresh story; adult-read success does not establish independent reading |
| Informational texts, structure and features | Models main idea/details, sequence/cause, visual/web/text features and synthesis; practice includes diagrams and paired information | Child uses actual features and transfers across unfamiliar texts; avoid coaching to clue words alone |
| Opinion and poetry | Models reasons, response to disagreement, poetic devices and construction; selected-response checks assess recognition/application to supplied texts | Child orally justifies an interpretation and produces their own reasoned or creative text |
| Research/evidence | Models useful/credible sources, notes and source support, followed by constrained item choices and self-selected research routine | Adult observes source selection, paraphrase and independent synthesis; a scored choice alone is insufficient |
| Grammar/GUM | Explicit rules and worked corrections, practice decisions in sentences/drafts, scored M/R and unscored I/C instruction | Child applies conventions in their own writing/speech. Do not remove I/C because it is not assessed |
| Vocabulary | Word parts, context, reference sources and relationships; choice, matching and dropdown application | Fresh word/context use and explanation; surface matches can inflate performance (PT-1-13 note) |
| Phonics/word study | Sound/syllable/morphology models and recognition/spelling-choice checks, plus oral and paper dictation | Adult hears decoding and checks handwritten encoding; automatic scores cannot hear or inspect production |
| Fluency | Repeated/first-reading routines, marking misses/self-corrections, optional expression/retell observations | Adult runs the reading and judges expression/understanding; home speed estimate is not placement or a school benchmark |
| Handwriting | Trace/practice demonstrations and adult check | Paper formation, legibility and fluency observed by adult; checking a box is an observation record |
| Extended writing | Two-source opinion prompt → plan → draft → checklist → parent trait scoring and examples | Independent evidence/elaboration and scoring judgment; examples are Peach Prep judgments, not official trained-scorer anchors |
| Everyday Practices | 53 parent routines embedded alongside the path | Sustained observed discussion, habits and application; route ticking is not a test |

Practice depth should follow the demand. Recognition items are useful for a rule; they are insufficient proof of fluent oral reading, handwriting or independent composition. Existing routines address those demands, but a family must actually perform them. No fixed question quota is recommended. [32 carried content notes](carried-content-notes.csv) preserve the prior matrix's non-blocking breadth/subcomponent concerns rather than silently declaring them fixed.

Directions generally provide a clear next action, the worked models reveal reasoning in manageable steps, and Try withholds help until an initial wrong attempt. Inheritance matters: a check pass means at least 80% of its points rounded up, not full standards mastery, retention, or broad transfer. Most checks have one form; only 13 have an alternative. A repeat pass on familiar material is weaker evidence than independent new-text application.

## 5. Severity-ranked defect register

Severity: P1 = preventable loss of substantial learner work; P2 = broken recovery or instruction that can mislead; P3 = copy/polish without blocked core task. There is no observed P0 outage. Each defect below is reproducible on the pinned source. Recommendations are not implemented.

### UX-001 — P1 functional: writing silently loses work when storage fails

- **Screen/state:** W-TASK-01 Draft; blocked localStorage or quota failure; leave task and return. Short lesson-writing uses a similar persistence pattern and belongs in regression scope, but the fresh data-loss reproduction is the extended task.
- **Test environment:** Chromium, 390×844 storage fixtures; ordinary draft preservation also passed at 320,1366,844 with working storage.
- **Reproduce:** install either the blocked getter or failing `Storage.prototype.setItem` fixture from `scripts/states.py`; open task 01, choose Write, enter “Keep this draft”; leave to mode selection; reopen task 01 and Write.
- **Expected:** keep unsaved work in this session, clearly show saving is unavailable, and offer copying the draft before a destructive transition.
- **Actual/impact:** draft becomes empty on reopening during the same visit, with no task-level storage-failure notice. A child can lose an essay, not just a bookmark.
- **Evidence:** `storage.json` entries blocked/quota, with `draft_after_return: ""`; `UX-001-before-leaving.png` / `UX-001-after-return.png`. Working-storage control preserves text across mode/task switches and reload.
- **Cause:** confirmed save exception is swallowed and `start()` reloads task data from unavailable storage. Hypothesis to validate during correction: other task data and previously saved older content can exhibit the same loss/reversion pattern.
- **Affected/regression:** `js/writing.js` load/save/start; plans, draft, checklist, scores, task isolation, reset, mode switching; inspect `js/skills.js` short-writing storage too.
- **Correction/acceptance:** retain per-task in-session fallback data, surface failure/success accurately, and protect unsaved writing. Both blocked and quota fixtures must preserve all task fields through leave/return; ordinary reload/task isolation/reset must still work. Do not promise persistence across browser close when storage is unavailable.

### UX-002 — P2 functional: a malformed nested progress record blocks lesson navigation

- **Screen/state:** Story elements `3.T.T.1.b`, Learn It → Watch Me, with a truthy primitive stored for that lesson.
- **Test environment:** Chromium, 390×844; log plus screenshot.
- **Reproduce:** set `pp.progress.v1` to `{"3.T.T.1.b":true}`, load the app, open Story elements, click Watch Me.
- **Expected:** discard/recover the invalid lesson record and allow the tab change while preserving valid records elsewhere.
- **Actual/impact:** tab remains on Learn It; page error `Cannot create property 'taught' on boolean 'true'`. A damaged browser record can prevent study progression.
- **Evidence:** `storage.json` nested-primitive (`lesson_usable:false`, matching pageerror); `UX-002-tab-blocked.png`.
- **Cause:** confirmed outer-object validation accepts the map, but `rec(k)` trusts a truthy nested primitive; writing `taught` fails. Other malformed nested shapes are hypotheses until exercised.
- **Affected/regression:** `js/skills.js` progress load/rec/mark and migration; existing scores, dates, adult observations, alternate-form history and retention flags.
- **Correction/acceptance:** normalize lesson records before use. Boolean/string/number/null/array fixtures must recover without page errors; valid neighboring scores/drafts remain unchanged; opening a screen must never invent a pass, date or Retained status.

### INS-001 — P2 instructional: graph explanation claims more than the data establish

- **Screen/state:** Vocabulary `3.L.V.3.a`, form B, item `SK-V3a-TB1`, review/explanation.
- **Test environment:** current source inventory and prior independent review; the item rendered at 320×568 and 1366×768. Explanation was inspected in source, not newly blind-solved.
- **Reproduce:** take/direct-open form B, submit, review the dwindled item explanation (or inspect its `why` string).
- **Expected:** explain the decrease in buckets picked, eight to four; make no inference about fruit remaining on trees.
- **Actual/impact:** says there were fewer pecans “left to pick.” The graph counts harvested buckets, so it cannot establish that claim. The key “became fewer” is correct; the explanation models an unsupported inference.
- **Evidence:** `source-inventory.json`, set `SK:3.L.V.3.a:tB`, item TB1; PP-004 final integration review's remaining feedback note.
- **Cause hypothesis:** wording left from an earlier stem revision; revision history is not required to confirm the current mismatch.
- **Affected/regression:** `js/data/lessons/L-V3.js`, TB1 explanation; graph alt/caption/stem/key and A/B score parity.
- **Correction/acceptance:** explain that fewer buckets were picked after week three. All words in feedback must follow from visible values; keep the correct key and points; inspect both forms and all hint/review presentations.

### COPY-001 — P3 copy: counts below ten remain digits in instructional prose

- **Screen/state:** Try It Yourself launch, practice completion and blank-test confirmation.
- **Test environment:** source plus fresh Try screen baseline screenshots and test confirmation/completion fixture coverage.
- **Reproduce:** open Story elements → Try It Yourself; read “3 new questions on your own”; submit a partly blank short check to view “You left … question(s)”; finish short practice for the dynamic completion sentence.
- **Expected:** spell out counts below ten in prose; retain standard codes, scores, percentages, question navigation and appropriate numbered steps.
- **Actual/impact:** generated prose interpolates digits. This breaks the agreed house style and makes copy inconsistent; it does not change scoring.
- **Evidence:** `extras.json` copy-try text, `copy-try-320.png`; `js/skills.js` renderTry, `js/engine/player.js` finish/practiceDone strings.
- **Cause:** confirmed direct numeric interpolation. PR #4 proposes a correction for Try's introductory count only; it is not part of main and does not resolve every dynamic prose location.
- **Affected/regression:** lesson launch and player prose; singular/plural, zero through nine, ten or more; preserve numerical scores/codes/navigation.
- **Correction/acceptance:** apply the house style consistently to instructional counts, including dynamic empty/partial completion cases. Independently review PR #4's scope; no merge is implied by this report.

## 6. Transition and saved-state findings

**132/132 focused assertions passed**, apart from the separately investigated storage failures. These assertions are not all tests in this audit; geometry, model, touch and storage evidence use separate logs.

Fresh evidence shows response/feedback reset on activity changes; Previous restores the response belonging to that test item; submitted-history reopening does not duplicate an attempt; repeat attempts begin cleanly; direct B starts with no response/hint. Accepting leave abandons the test; cancel retains it. Mode switching and task switching preserve drafts when storage works, with distinct task data.

Path activity ticks do not write scores. Adult checklist ticks alone do not pass a check. Explicit grown-up confirmation records `passBy:"grownup"` and displays “Checked by a grown-up,” with no machine score; speak/write checklists do not create a scored pass. Retained remains OFF. The historical storage field name `mastered` is not a user-facing demonstration of mastery.

Opening the skill/check did not award progress. Changing away from Learn It can mark its engagement step taught; finishing model reveals can mark learned. Those are completion markers, not a scored pass. Parents should not interpret them as independent application.

Interrupted unanswered test responses are not a saved resume capability: reload restarted with a blank response. The browser's before-unload prompt and in-app leave warning protect the current attempt, but exact test continuation is an intentional limitation. Completed scores, path preference/bookmark and drafts are different saved objects. Shared browser use is not separate child tracking. No accounts, backend or personalized placement defect is raised.

## 7. Cognitive load, accessibility and shared-screen review

### Cognitive load and parent clarity

The two start choices and explanatory path introduction are appropriate. The first story-elements lesson is a suggested common route, not placement. Parallel read-aloud/phonics, handwriting and everyday habits begin alongside the route. A parent can use Learn It/Watch Me together, allow an independent attempt, observe production, then decide whether to revisit; the route need not be completed in one session.

On a phone, the essay prompt and reasons remain above every tab. At 320 this creates substantial vertical travel before drafting. A two-part evidence question can require several screens of reading and controls; it works with scrolling but has a higher memory burden. These are **usability improvements**, not proven learning failures. Consider an optional collapsible prompt or return-to-source aid after family observation. Preserve access to directions and evidence.

Do not add questions solely to hit a number. First decide whether the task needs transfer to a new text, an explanation, oral application or original writing. Keep adult-only scoring models guarded so they do not become answer cues. Existing model cancel/accept and task reset cancel/accept behaved correctly.

### Accessibility results and qualification

- **44 axe snapshots** across baseline phone/desktop, covering primary screens, writing tabs and all seven item formats. Four `scrollable-region-focusable` flags concern the same desktop `#w-sources` panel; one additional dropdown snapshot requires manual review for a nested scrolling region.
- The source-panel flag was manually investigated with real keyboard events in Chromium 131: Tab focused it despite `tabIndex:-1`, and Page Down moved its scroll position from 0 to about 648 px. It is **not a reproduced keyboard failure in this browser**. Portability to engines without native focusable scrollers remains open. An explicit focus target/name is a reasonable improvement, with regression testing rather than a blanket claim of compliance.
- Axe's canvas-based `color-contrast` rule was disabled because this packaged renderer is unstable with that check. A separate computed solid-color text checker found no failures; minimum tested eligible contrast about 4.64:1. It excludes disabled buttons, images, and translucent/gradient backgrounds. Twenty catalog text occurrences across two snapshots were unsupported. Figure contrast uses prior evidence, not a fresh universal color audit.
- Raw controls under24px are candidates, not automatically WCAG failures: many checkboxes/radios have larger clickable labels and spacing. The automated size list does not test exception geometry or every combined label target. Fresh mobile taps succeeded on the selected journey. Retain physical motor/touch acceptance, particularly dense fluency words and score radios.
- Real keyboard evidence includes choice activation, lesson tab ArrowRight selection/focus, model reveals, dialogs, history and source scrolling. Previous keyboard/ARIA checks are reused for unchanged item controls. No real screen-reader session was performed; DOM labels/live regions do not prove speech order or understandable announcements.
- Prior text-box identification, button-disclosure markers, progress-bar completion, search focus outline, larger fluency number target and parent-scoring disclosure fixes are present in current source. Do not reopen old MUST findings merely because historical reports retain them. Residual small figure/shared-screen and print notes remain candidates for family/device acceptance.

### Shared-screen readability

Screenshots support a close parent-and-child session: large ordinary instructional text, dark text, clear primary actions, progressive explanations. Narrow teaching figures and dense scoring tables need closer inspection; phone layouts often support one reader at a time better than simultaneous reference. This is screenshot/source judgment only. **No actual classroom-distance or beside-the-child readability measurement was performed.** Test at the family's real viewing distance, ambient light and device brightness before making a shared-screen-readability claim.

## 8. Prioritized correction plan and regression mapping

This is a proposal for a future owner-approved correction branch. It does not assume a release number or authorize implementation.

| Priority | Work | Acceptance and regression mapping |
|---|---|---|
| First | UX-001: protect unsaved writing and disclose failed persistence | Blocked getter/quota; all task fields through tab/task/mode leave/return; reload semantics honest; ordinary persistence, task isolation, model/reset unaffected; short-writing components inspected |
| Next | UX-002: validate nested progress records | Malformed primitive/object/array fixtures; retain valid scores/dates and neighboring lessons; no invented pass/Retained; full path/check/adult record regression |
| Next | INS-001: correct graph reasoning | Stem/key/explanation/graph/alt agree, both check forms still score and rotate as intended; review and hint presentations checked |
| Then | COPY-001: consistent instructional counts | Review PR #4 and remaining player sentences; zero/one/two/nine/ten cases, singular/plural; numerical scores/codes/percentages/navigation unchanged |
| Acceptance gate | Native zoom and cross-engine accessibility | Verify overflow under browser-native zoom/text enlargement, source scrolling/labels, dropdown incomplete flag, gradient contrast, focus and screen-reader announcements |
| Can wait | Prompt compaction, source-reference aids, refined narrow teaching figures, explicit scroll-region focus portability | Validate with a parent/child before increasing complexity; preserve evidence access, keyboard use, print and writing state |

When corrections are later implemented, rerun the implicated focused fixtures, all seven core widths/heights around changed layouts, content/score checks for changed items, and representative ordinary/hands-on/writing regression journeys. Broaden to the original guard suite when progress/player logic changes. Pin the corrected SHA; this report does not certify later code.

## 9. Explicit untested areas and actual-device acceptance checklist

These are open acceptance items, not passed results:

- [ ] Real small phone and typical phone, portrait/landscape; on-screen keyboard while planning/drafting; viewport resize when address/keyboard bars appear; tap precision and scroll/focus after feedback.
- [ ] Physical portrait/landscape tablet and laptop; real keyboard Tab/Shift+Tab, arrows, Enter/Space, source-panel scrolling, visible focus, dialogs and browser history.
- [ ] Safari/WebKit, Firefox and an Android browser; no engine-equivalence assumption from Chromium simulation.
- [ ] Native 200% and 400% browser zoom, browser text enlargement, long content, sticky bars, inputs and two-column transitions. Artificial text stress overflow must be resolved or explained through real tests.
- [ ] VoiceOver/TalkBack/NVDA or comparable actual assistive technology: tab names/selection, question/evidence order, hottext/matching/order, hints and live feedback, scores, model guards, writing fields and source regions.
- [ ] Supported/unsupported contrast cases, forced colors, reduced motion, figure/alt equivalence in current target devices; candidate target spacing including label hit areas.
- [ ] Actual print/PDF output, pagination, browser print dialog, external official-resource/tool links and live-network/cache failure behavior; prior print notes remain historical.
- [ ] A parent and child start without coaching: choose a mode, explain the path, find the next lesson, distinguish “finished” from “passed” and from independent application, leave/reopen writing, and use feedback to choose a next action.
- [ ] Observe fresh-text transfer, oral reading, spelling/handwriting, independent writing and parent scoring. Assess frustration, fatigue and prompt reading burden; no diagnostic placement or learning-efficacy claim.
- [ ] Physical beside-the-child/shared-screen viewing at real distance and lighting. No classroom-distance certification from screenshots.

Every meaningful family is inventoried; test status is explicit. The audit must not be described as fully accepted while these checks or the documented defects remain open.

### Final disposition

**Requires correction:** writing data-loss recovery, malformed progress recovery, unsupported pecan inference, and agreed instructional count wording. **Can wait:** family-validated prompt/navigation/readability refinements and optional explicit keyboard-scroll portability improvements. **Requires people or physical devices:** independent learning/production and parent scoring, screen-reader speech, native zoom/cross-engine behavior, on-screen keyboards, motor accessibility and shared viewing distance. Deferred accounts, backend storage and personalized placement remain outside scope.
