# Home and starting-experience redesign (2026-10-22)

**Status: ready for owner review. Not merged and not deployed.** Production (`main`) is unchanged.

- **Branch:** `design/home-start-experience`
- **Candidate:** `595ef01`
- **Baseline:** `main` 9a5b297 ("Peach Prep 2.2.0-rc (PP-003)")

## What changed for a parent
- **First visit:** a clear headline says what Peach Prep is, then two choices. **Follow the Learning Path** is tagged recommended and says plainly that it is not a test or placement. **Choose a lesson** opens browse and search. The page loses the oversized banner and the competing buttons.
- **Returning to the Learning Path:** one card names the lesson and exactly where it reopens, e.g. "Opens at: Practice Together (step 3 of 5)". It adds what the grown-up does for that step, and "starts fresh" when the step is a check. "Continue" appears only where the saved bookmark supports it.
- **Returning to browse:** one "Up next" card, the lessons already started, and progress marks that each say what they mean ("passed", "grown-up", "review", "Started"). Category cards, search and the list follow.
- **Families with saved work but no chosen mode** (from before the Learning Path) get a welcome-back line instead of the brand-new-visitor screen.
- **All three screens:**
  - share one header, width, type scale (body 17px, nothing under 14px), card style and focus ring, with targets of at least 44px
  - share "How a lesson works": the five steps, the hands-on exceptions, and when a grown-up joins in
  - share a support row: Parent guide, Georgia standards, Everyday habits, Mixed practice, and "Saved on this device only"
- **When saving is blocked,** the notice comes first.

Nothing a family has saved is changed or migrated. Every route, lesson ID, score, form and flag is preserved.

## Documents in this folder

| File | Contents |
|---|---|
| `00-design-brief.md` | The final hierarchy and decisions |
| `01-ia.md` | Product and information architecture: current journeys, what is saved, routes, tests |
| `02-visual.md` | Visual and responsive system, with contrast ratios |
| `03-copy.md` | Copy deck and reading-burden measurements |
| `04-implementation.md` | Changes by file, the "After QA" fixes, and the implementer's test runs |
| `05-out-of-scope.md` | Issues found but deliberately not changed |
| `06-independent-review.md` | Independent QA findings QA-01 to QA-19 and how each was handled, plus the final re-review |
| `07-coverage-ledger.csv` | Screen, state and viewport coverage, with gaps |
| `08-test-results.md` | Test results tied to `595ef01` |
| `before/` | The site before the redesign, at all seven viewports |
| `after/` | The redesigned site, at all seven viewports |
| `qa/` | The reviewer's own evidence |

## Open items (none blocking)
- **QA-16:** extend `path-a11y.py`'s contrast run to the browse home, including the all-passed state. The reviewer ran this check ad hoc: 0 failures.
- **QA-17:** a screen reader hears each legend term twice.
- **QA-18:** the category chips in the "Choose a lesson" card look tappable but are not.
- **QA-19:** the passed mark lost its hover tooltip.
- **QA-03:** search on the browse home sits somewhat lower than on `main`, because the Up next card and progress summary now come first.
- `05-out-of-scope.md` lists the rest. Highlights:
  - "Review recommended" vs "Review suggested"
  - "skills" vs "lessons" naming
  - the guard launcher overwriting committed evidence
  - browse mode not saving the last lesson opened

## Still to check by hand before merging
- A real phone and tablet: iPhone Safari and an Android browser. Check the real fonts, tap targets and the landscape phone layout.
- A screen reader pass on the three start screens: VoiceOver or TalkBack.
- One parent and child session: a first visit, choosing the path, one lesson step, then a return visit.

## How to preview without touching production
GitHub Pages serves only `main`, so there is no safe hosted preview. To preview locally:

```
git fetch origin design/home-start-experience
git checkout design/home-start-experience
node verification/serve.js . 8080   # then open http://localhost:8080/
```
