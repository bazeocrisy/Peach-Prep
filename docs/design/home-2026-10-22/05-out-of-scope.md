# 05 · Out of scope: recorded, not changed

Date: 2026-10-22. Author: implementation agent. Line numbers are for the redesigned candidate in `/home/claude/pp-home` unless they are marked "baseline".

The design brief (00 §5) lists items 1 to 4 as out of scope. Items 5 to 9 were found during implementation. Each one is recorded with evidence and left unchanged, unless it says otherwise.

## From the brief

### 1. Browse mode does not save the last lesson opened
- **Evidence:** `js/skills.js:348` declares `lastCode = null`, and `:639` sets it in memory only. Nothing writes it to storage, so it is lost on reload. The IA agent confirmed this in a browser (01-ia §1.4, log `browse-open-then-root`).
- **Effect:** state D can only offer "Up next", which is computed as the first lesson without a passed check in the last category opened, plus the lessons already started. It cannot say "the lesson you had open". The copy says exactly that and never says "continue where you left off".
- **Fix needs:** a new additive field (for example `pp.path.v1.lastOpened`) and compatibility tests. The brief forbids new storage keys in this release.

### 2. "Skills" vs "lessons" naming on back buttons
- **Evidence:** "← All skills" appears at `index.html:147`, `:165`, `:179` and `:193`, at `js/app.js:26` and `:94`, and at `js/skills.js:640`. The redesigned home now says "lesson" for the thing you open: "Choose a lesson", "Find a lesson", "Browse lessons", "Lessons already started".
- **Why it was left:** renaming the back buttons touches visible text that several suites use to find screens, and every screen header. The lead decided it is out of scope.

### 3. "Routines", "activities" and "habits" wording inside the path module
- **Evidence:** in `js/path.js`:
  - `:183` "everyday routines tried with a grown-up" (inside `#path-progress`)
  - `:245` "These routines continue"
  - `:248` "Everyday parent activities"
  - `:288` "Choose a few routines"

  The page itself is called "Everyday habits".
- **Why it was left:** `path.py:63` finds the button by its exact name, "Everyday parent activities", and `path.py:65` reads `#path-progress`.

### 4. The player does not update the path bookmark
- **Evidence:** `js/path.js:59-68`. `track()` records only `#skill/...` and `#write/...`, not `#play/...`. A child who finishes a practice set inside the player leaves the bookmark on the lesson's step tab. That is why the next-step card says "Opens at: {step tab}" and promises nothing at question level.

## Found during implementation

### 5. The full `guard.py`, run directly, cannot pass on the baseline either
- **Evidence:** on an untouched copy of the baseline at 9a5b297 (served on port 8619), `python3 verification/guard.py http://localhost:8619/` exits 1. It fails with `Page.fill: Timeout 30000ms exceeded … waiting for locator("#skill-search") … element is not visible` at section 9.1. The log is in the scratchpad as `home-baseline-guard.log`.
- **Cause:** the guard predates the Learning Path, so its "home" journeys assume the site root is the lesson list. With no saved mode the root is the choice screen (`#screen-choose`), and the search box is hidden.
- **How it was handled:** the documented route, `verification/launch-ux-regression.py guard`, seeds `{mode:'browse', introduced:true}` and is how the 110-check result in `docs/audits/ux-corrections-2026-10-21/README.md` was produced. The launcher hard-codes port 8368, a browser path that does not exist in this sandbox, and an output folder inside the committed evidence. I ran a scratch copy that is identical apart from those three settings (see 04-implementation §4). No guard assertion was changed.
- **Suggestion:** give the launcher `BASE`, `ROOT` and `OUT` arguments, or have `guard.py` seed the browse fixture itself. Either way, a direct run would not need to depend on the launcher.

### 6. `launch-ux-regression.py` overwrites committed evidence
- **Evidence:** `verification/launch-ux-regression.py:19-20` sets `OUT = ROOT / "docs/audits/evidence/ux-corrections-2026-10-21"` and writes `guard-results.json` and `path-results.json` there on every run. Running it for a new candidate silently replaces the October 21 evidence for PR #4.
- **How it was handled:** it was not run in place. The evidence folder is unchanged.

### 7. "Review recommended" vs "Review suggested"
- **Evidence:** `js/skills.js:232` gives the displayed state label "Review recommended". Every other place says "Review suggested": the skill-list aria label, the skill page, the parent guide and the new legend. This was flagged in 03-copy §11.1.
- **Why it was left:** `displayState` feeds the skill page. That page is outside the home and is checked by guard section 14.

### 8. The path's per-lesson result line still mixes kinds
- **Evidence:** `js/path.js` `resultLabel()` (`:157-163`):
  - "See this lesson for its practice and check results" for started lessons
  - "A grown-up observes this skill; no automatic test score" for hands-on lessons

  This is accurate but does not use the legend's terms ("Started", "Checked by a grown-up"). It was left as it was so the path list behaves and reads the same as before.

### 9. On-device and assistive-technology acceptance
- Everything in 04-implementation was checked by Chromium viewport simulation, axe and scripted keyboard focus. Nothing was checked on a real iPhone, iPad or Android device, in Safari, with a screen reader or with native zoom, and no family has tried it. The original audit's open acceptance items are still open.
