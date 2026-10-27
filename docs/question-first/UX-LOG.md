# Question-first UX log

Worktree `/home/claude/pp-qf`, branch `feature/question-first` from `origin/content/standards-practice` at 9eba382. The lead commits. Nothing here is pushed, merged or deployed.

## Checkpoint 0 (2026-10-27) - read and planned
- Read: the assignment, README, SPEC, 01-architecture, 05-engine-implementation, skills.js, practice.js, player.js, app.js, std.js, path.js, a sample accepted lesson (T-RA 3.T.RA.1.b).
- Finding: the engine already has "Practice on my own" (`run.own`): three sets of five, hints h1-h3, `how`, similar bank, resume (`pp.practice.v1`), status derivation, storage notices. The work is therefore (1) a new entry (skill choice opens the question), (2) a redesigned answering screen with Teach Me replacing the three help buttons, (3) new assistance fields, (4) a session boundary screen, (5) test adaptation.
- Official Georgia practice resource verified on 2026-10-27 by fetching https://gaexperienceonline.com/ : GaDOE site (content "developed and published under contract with GaDOE by DRC"), purpose "learn the structure and content of the Georgia Milestones Assessments, try online testing, and practice with online tools". It states: "The guides, scoring samplers, and demonstration tests are not graded." Chrome is the only supported browser. Parts: Documentation (user guide PDF), Tutorial (video), "Test Practice, Guides and Samplers" (portal https://portal.te.drcedirect.com/GA). The site's existing link in `js/data/site.js` is `https://www.gaexperienceonline.com/` (the www form returns the same page content). Wording to use: unscored practice of the test tools and format; no Peach Prep scores transfer; no endorsement.

## Decisions
(appended below as work proceeds)

## Checkpoint 1 (2026-10-27) - reference implementation runs in the browser
Done: `js/teach.js` (new), `js/practice.js` (tm/tp/sk/tmAfter/f1, status `taught`, `entry`, `helpOf`), `js/engine/player.js` (own-mode screen: Check Answer / Teach Me / Skip or Next, Teach Me panel at `#play/<set>/try/teach`, session end screen, About this skill), `js/skills.js` (`begin`, `practiceLine`, overview CTA, grown-up help list), `js/std.js`, `js/path.js`, `js/app.js` (`#practice/<key>`, `.../teach` route, `backLabel`, Escape), `index.html`, CSS block at the end of `css/styles.css`.
Smoke-tested by script on 3.T.RA.1.b at 390x844: `#practice/3.T.RA.1.b` opens question 1; Teach Me opens, hint, steps, answer; Back to My Question returns; record shows tm/tp/h/x/sk.
Next: copy updates (routine block, parents plan, site.js), run old suites against this tree, adapt tests (TEST-CHANGES.md), write verification/qf.py and teach-coverage.js, viewports and screenshots.
Baseline suites (unmodified 9eba382) run in the scratchpad `qf/baseline/status`.
