# Learning choice and parent ELA path — implementation review

Date: 2026-10-21. Candidate branch: `pp-003-fixes`, draft PR #3. Baseline: `799b393ff61fab871020238800a3a803f5b15b2d`.

Status: **READY FOR OWNER REVIEW WITH DOCUMENTED LIMITATIONS.** Feature, header and selected legacy regression audits passed. No merge or deployment performed.

## What families now see

A new visitor chooses **Follow the Learning Path** or **Choose Individual Lessons**. The path introduces its purpose and explains the five lesson steps, adult participation, flexible pacing, and the difference between finishing an activity and demonstrating mastery. Families can preview the route, then start.

The path shows one next lesson, a bookmark to its lesson step, and expandable phases/groups. It starts with **Story elements: characters, setting, problem and solution (`3.T.T.1.b`)**. After the story primer it progresses through stories/sentences, information/vocabulary, text structure/paragraphs, viewpoints/word choices, poetry/creating texts, and research/extended writing. Reading foundations, handwriting, Introduce/Continue grammar, and everyday practices are concurrent lanes, visible from the beginning.

Returning visitors land in their chosen mode. “Switch learning mode” stays available, and the existing catalog has a path entry point. Switching preserves lesson progress, existing scores, drafts, and the separate path checklist. Opening a lesson from the path updates its bookmark; returning to the path offers that activity/step again until activities are marked finished. Browser Back/Forward and the writing task's Back button return through the expected route.

## Coverage and progression rules

- All **101 catalog activities** occur exactly once: 99 existing lessons and two writing tasks.
- All **94 lesson-backed matrix entries** resolve to existing path lessons. Five extra text-structure lessons revisit expectations rather than adding official codes.
- All **53 Practices** have their existing adult activity cards and a separate “Tried together” checklist. This accounts for all **147 audited matrix entries**.
- The story-elements primer was moved ahead of its original catalog group for the path. The catalog's original individual-lesson order remains available. The rest of the text-structure group is in phase 3.
- “Activities finished” is an explicit activity record, not an automatic pass or mastery claim. It is reversible. The next activity is the unfinished bookmarked activity, otherwise the first unfinished route activity. Parents can open any phase/lesson; nothing is locked.
- Existing check labels/results remain separate. A saved check pass is not silently converted to path completion. Hands-on activities explicitly require adult observation. All-finished text directs families to continue reading, writing, and reviewing; it does not certify all standards mastered.
- The former grammar heading “Getting ahead” was changed to “Introduce and keep practicing.” These are Grade 3 Introduce/Continue rows, even though they are not on Grade 3 Milestones and end-of-grade mastery is not required.

The route is a suggested product sequence, not a state-prescribed order, placement assessment, reading-level diagnosis or validated intervention. Parent-led work remains essential; the app cannot verify all oral reading, discussion, handwriting, collaboration or writing performance automatically.

## Storage and scope

A new, separate `pp.path.v1` localStorage record holds the preferred mode, introduction acknowledgment, lesson/step bookmark, activities marked finished and parent routines tried. Malformed data is treated as recoverable empty/default state; unknown bookmarks fall back to an unfinished lesson. If storage is blocked or full, the feature still works for the visit and visibly explains the saving limitation.

The existing `pp.progress.v1` lesson schema, writing draft records, assessment items, engine scoring and Retained feature default were not changed. Retained remains disabled by default. No backend, login, placement test, new assessment bank, cross-device saving, or separate child profiles were added. The initial lesson screen/step is bookmarked; unfinished test responses are not saved as resumable attempts. Existing writing drafts persist using the existing writing mechanism; exact writing-tab resume was not added.

Mode/path state is private to the current browser/device. Clearing browser data can erase it; shared browser use is not separate child tracking. The UI states these limits. Existing old progress is preserved but is not automatically claimed as completing this new path. Families may mark previously worked-through activities finished themselves.

## Validation

| Check | Result |
|---|---|
| Focused `verification/path.py` | **148 passed, 0 failed**, exit 0 |
| Screen sizes | 320×640, 390×844, 768×1024, 1366×900 |
| Catalog and matrix reconciliation | 101 unique activities; all 94 lesson-backed rows and all 53 Practices mapped |
| Axe-core checks on choice, intro and path | 12 screen/width snapshots; 0 reported violations and 0 incomplete checks for enabled rules |
| Separate computed-style text contrast | No failures/unsupported backgrounds in the 12 snapshots; minimum approximately 5.38:1 |
| JavaScript syntax and patch whitespace | PASS |
| Content gate | PASS: 0 failures, six pre-existing clue-overlap warnings |
| Writing gate | PASS: 0 failures, 0 warnings |
| Selected original browser regression after header correction | **101 passed, 0 failed**, exit 0; nine previously passed bulk assertions reused |
| Header correction follow-up | **48 passed, 0 failed**, both modes at 320/360/375/390px |

The 148 focused assertions cover first-time/returning choices, introduction and preview, every catalog/matrix mapping, lesson-step reload resume, navigation/keyboard expansion, writing return, mode switching without score loss, unfinished-test confirmation, invalid/malformed/quota-blocked storage, legacy scores and drafts, honest completion, reopening a completed activity and invalid-address recovery. Automated scores did not change when checklist entries were toggled.

Axe's canvas-based color-contrast rule exited the packaged Chromium renderer. That rule was explicitly excluded from axe and replaced with a computed-style solid-color contrast scan, which reports unsupported backgrounds rather than guessing. This is limited automated accessibility evidence, not a WCAG certification. Native screen-reader speech and real Safari/iOS/Android behavior remain unverified. The standard font CDN was blocked in the test environment; screenshots use fallback fonts.

The original `verification/guard.py` assertions are unchanged. A regression run passed 108 assertions and caught one narrow-header failure before the final screen sweep. Restoring the short Home label inside player/writing headers fixed that issue; the new dedicated header audit passed all 48 cases. The final selected legacy run reuses the nine bulk engine/practice/test assertions already passed before this label-only correction and reruns the other 101 original assertions, including the previously failing header assertion and full phone sweep. It must not be described as a single 110-pass run on the final source. Its environment adapter supplies packaged Chromium 131, fresh browsers for later pages and a stored individual-lessons choice for the legacy suite. New-visitor/path behavior is covered separately by the focused suite. The final tested hashes of the seven changed runtime files are recorded in the evidence directory. The regression-source hashes are in `regression-sha256.json`. After the functional regression, the singular group-count label was polished from “1 activities” to “1 activity”; `count-wording-polish.patch` records that copy-only change. The focused feature audit and new-screen accessibility audit were then rerun on the final source identified by `application-sha256.json`.

## Evidence and earlier findings

See `docs/audits/evidence/path-2026-10-21/` for screenshots, focused results, accessibility results, application hashes, runtime metadata, gate logs and the legacy-run adapter. See `docs/planning/PARENT-STARTING-POINT-AND-ELA-PATH.md` for the complete route and code mapping.

The prior `PP-004-FINAL-INTEGRATION-REVIEW.md` remains the official-source/content audit at its stated frozen application commit. This supplement evaluates the new navigation and path feature; it does not claim a new cold solve of all assessment items or a new official-PDF review. Earlier minor content notes (including the pecan explanation and PT-1-13 surface-word match), shortened PT-1 scope, draft ALD/rubric limits, and real-device/learning-effectiveness limits remain documented there. None was silently reclassified as fixed by this feature.

This feature was implemented and audited by the same Codex session; no separate human reviewer or new subagent review is claimed. Existing independent content reviews were reused. Owner approval is still required before merge or deployment.
