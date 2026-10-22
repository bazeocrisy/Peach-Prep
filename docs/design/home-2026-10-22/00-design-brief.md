# Peach Prep home and starting experience: design brief

**Baseline:** `main` 9a5b297 ("Peach Prep 2.2.0-rc (PP-003)").
**Branch:** `design/home-start-experience`.

This brief is the lead's decision. It combines three specialist documents:
- [01-ia.md](01-ia.md): product and information architecture
- [02-visual.md](02-visual.md): visual and responsive system, plus the screenshots in `before/`
- [03-copy.md](03-copy.md): instructional UX and copy deck

Where those documents disagree, this brief decides.

## 1. The decision: three start screens, one design
The site already chooses a start screen from what is saved:

| Saved state | Screen |
|---|---|
| No mode saved | the choice screen, `#screen-choose` |
| Learning Path mode | the path screen, `#screen-path` |
| Browse mode | the lesson list, `#screen-home` |

We keep these three screens. Their routes, element ids and switching logic stay as they are, so every direct link, Back/Forward behaviour, saved state and existing test keeps working (01-ia §3).

What changes is that all three are rebuilt on one shared layout and visual system (02-visual):
- the same header bar
- the same content width and margins
- the same type scale (body 17px, nothing under 14px)
- the same card, button and focus styles
- the same "How a lesson works" explainer and support-links row below the main content

Today they look like three different sites. After this change they read as one home that adapts to the family.

**Rejected:** a single new root screen. It would break `path.py`/`guard.py` assertions and direct links, and gain nothing a parent can see.

## 2. Hierarchy for each state

### A. First visit (no saved mode, no saved work)
1. Header (brand, "For parents").
2. Hero. One line on what Peach Prep helps with, and one supporting line (03-copy §2.1).
3. **Two choice cards, side by side from 640px, stacked on phones:**
   - **Follow the Learning Path** (tag: Recommended). A three- or four-bullet preview says it is a suggested order, not a test or placement; everyone starts at D1; any lesson can still be picked. The small route illustration appears here from 640px wide and 560px tall. Primary button: **Start the Learning Path**. It keeps the existing flow (path intro, then Start), which `path.py` checks.
   - **Choose a lesson.** One sentence for a parent targeting a skill. Secondary (outlined) button: **Choose a lesson**. It goes to the existing browse screen with search and filters.
4. "How a lesson works": the five steps, the hands-on exception, and when a grown-up joins in.
5. Support links: Parent guide · Georgia standards · Everyday habits · Mixed practice and practice tests · "Saved on this device only".

### B. Saved work but no saved mode (families from before the Learning Path)
This is the same screen as A, with one addition above the cards: a short welcome-back line naming the lessons already started. Each name links to its lesson. The line is read from `pp.progress.v1` only. This family is no longer treated as brand new.

### C. Returning, Learning Path mode
1. Header with a **Browse lessons** button. It does not change the saved mode.
2. **One primary "next step" card**, built from the bookmark (`pp.path.v1`):
   - the lesson id and title
   - "Opens at: {step} (step N of M)", using the lesson's real steps, including hands-on lessons and essay tasks
   - a one-line note on the grown-up's role for that step
   - if the step is the check: "The skill check starts fresh each time."
   - Primary button: **Continue the Learning Path**.

   If the bookmark has drifted away from the path's suggested next lesson (it moved because the family opened another lesson), the card adds a secondary link: **Suggested next on the path: {lesson}**.
3. The existing path list and progress, restyled with no change in behaviour.
4. The explainer and support links.

The path screen keeps the honesty lines that `path.py` checks ("not proof of mastery").

### D. Returning, browse mode
1. Header.
2. **One primary card: "Up next".** It is the first lesson without a passed check in the last category opened, worded exactly that way, never "continue where you left off". Below it are up to three lessons already started, each opening at its first unfinished step. The path becomes a **secondary** button: "Try the Learning Path".
3. A progress summary and its legend, with each kind of mark labelled separately (03-copy §progress legend).
4. Category cards, search and filters, and the skill list, as today but restyled. Filter buttons must not wrap to three lines.
5. The explainer and support links.

## 3. Honesty rules for wording
- "Continue" or "Opens at" appears only where the path bookmark supports it.
- Checks and practice restart at question one; say so where it matters.
- Never use "continue where you left off" in browse mode.
- Keep these separate: started, steps done, "Passed the skill check", "Checked by a grown-up", "Review suggested", and standards coverage (which describes the site, not the child).
- No mastery or placement claims anywhere.
- The ring's screen-reader label must not say "checks passed" when the count includes grown-up checks.
- Write counts below ten as words in prose.
- The hero says "Test Your Knowledge", not "Test".
- The visible step name for the check stays **Test Your Knowledge**, and the check is called "the skill check".
- Fix the parent-guide line in `site.js` (~105) that says the home lists skills in learning order. It is connected navigation and is now misleading.

## 4. Visual system
Everything is in 02-visual. The key points:
- content width 1160px
- side margins of 16, 24 or 32px
- a 4px spacing scale
- Poppins headings and Nunito body
- `--edge-control` #8A7B6B for input borders, at 3:1 or better
- a white focus ring on navy surfaces
- every target at least 44px
- one illustration: an inline SVG route ending at the peach, with no people
- no gradients or translucent backgrounds behind text on the choice and path screens (`path-a11y.py` checks this)
- short landscape screens (height under 560px): the search bar is not sticky, the explainer is collapsed, and the illustration is hidden

## 5. Out of scope, recorded but not changed
- Saving the last lesson opened in browse mode (needs a new storage key and compatibility tests).
- The wider "skills" vs "lessons" naming. Renaming "← All skills" would touch test selectors.
- "Routines", "activities" and "habits" wording inside the path module.
- Making the player update the path bookmark.

These go in `05-out-of-scope.md` with evidence.
