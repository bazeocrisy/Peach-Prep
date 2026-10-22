# 04 · Implementation: home and start experience

Agent: implementation, the only agent editing code. Worktree `/home/claude/pp-home`, branch `design/home-start-experience`, baseline `main` 9a5b297 ("Peach Prep 2.2.0-rc (PP-003)"). No git commands were run; the lead commits.

The work follows the binding brief (00) and uses the structure, tokens and copy from 01, 02 and 03. Where those documents differ, the brief decided. The few places where I had to interpret the brief are listed in §5.

No framework or dependency was added. No storage key was added, removed or migrated, and every render path is read-only. The three start screens keep their routes, ids and switching logic.

---

## 1. What changed, file by file

### `index.html`
- **`#screen-choose`, `#screen-path` and `#screen-home`** now share one `.home-head` header: the peach mark, "Peach Prep", the "Grade 3 ELA" label and the header actions.
  - The navy→peach gradient hero on the browse home is gone.
  - All three screens use the same `.home-wrap` container: 1160px, with 16, 24 or 32px gutters.
  - Each screen gained the class `home-screen` so the new styles stay scoped to them.
- **Choose screen (states A and B):**
  - The hero and lede from 03-copy §2.
  - An empty `#choose-welcome` slot for state B.
  - The heading "Where would you like to start?".
  - Two choice cards:
    - "Follow the Learning Path", tagged Recommended, with three preview bullets, the route SVG and `#choose-path`.
    - "Choose a lesson", with `#choose-browse`.
  - The footnote "You can switch anytime. Your progress stays." and the existing `.path-storage` status.
  - A `.home-shared` slot.
  - Both buttons are still `disabled` until boot and read "Loading lessons…" until then, which gives the disabled state a visible reason.
- **Path screen (state C):**
  - Header: "Browse lessons" (`#path-browse`, new) and "For parents" (`data-go="parents"`). Below 640px they show the short labels "Lessons" and "Parents"; below 400px the word mark is visually hidden but still read by screen readers.
  - The intro (`#path-intro`) uses 03-copy's bullets and still says "not proof of mastery".
  - The intro buttons read "Start with D1 · Story elements" (`#path-start`; the label is filled from the first path entry) and "See the whole path" (`#path-preview`).
  - The old saving `.note` was removed; the support row's "Saved on this device only" carries that information now.
  - A `.home-shared` slot was added.
- **Browse home (state D):**
  - The compact title is now "Grade 3 ELA lessons". The lede has the full step names ("…Try It Yourself and Test Your Knowledge. Hands-on lessons have four.") and no longer says "in learning order".
  - `#up-next` is now the primary `.next-panel`.
  - Below it, a single secondary `[data-go=path]` button, "Try the Learning Path", now `btn-soft`. The second primary and the home's "Switch learning mode" button were removed.
  - A `.path-storage` status was added, so blocked storage is also announced on this screen.
  - Then `#home-progress`, `#cat-cards` and a `.home-shared` slot, which holds the `#hero-*` support buttons.
  - Search uses 03-copy §8: "Find a lesson", the placeholder "Try: pronoun, D3, 3.T.T.1" and the group label "Which lessons to show".
  - `#skill-empty` is now a card with `#skill-empty-text` and a "Clear search and filters" button (`#skill-empty-clear`).

### `css/styles.css`
- **Two edits to existing rules:**
  - Deleted the `.hero .btn-primary` peach rules (white on peach is 3.00:1).
  - Removed `position:sticky` from the `min-width:640px` `.skill-tools` rule. Search now sticks only at `(min-width:640px) and (min-height:560px)`.
- **One appended block, "Home redesign 2026-10-22",** covering:
  - **Tokens** from 02 §3.
  - **Header, hero and choice cards.** The choice cards have a 6px peach top band drawn as an inset box-shadow, a 2px navy border, and actions aligned to the bottom.
  - **Route illustration.** It sits in flow at 640–1023px and absolutely positioned at 1024px and up. It is hidden at `(max-width:639px), (max-height:559px)`.
  - **Welcome-back box and next-step panel.** The panel has a 6px leaf band on the path screen and a sky band on browse. It is a two-column grid from 768px on the path screen.
  - **Started-lesson buttons and the "Other ways in" row.**
  - **Progress rows and legend.**
  - **Category cards.** One shape at every width: a 4px left band, a 56px ring with a 14px count, and a grid of 1, 3 or 5 columns.
  - **Explainer and support list.** Two columns on phones; auto-fill with descriptions from 640px.
  - **Outlined controls on the start screens** use `--edge-control` #8A7B6B. Hover uses an inset box-shadow, so nothing shifts.
  - **Focus.** A 3px `--focus` ring with a 3px offset. The existing `[tabindex="-1"]` heading exception still applies.
  - **Filters.** The pills never wrap their text. They fit on one row from 320px: under 400px the padding is 8px 7px with a 4px gap. The selected filter gets a "✓" via `content:"✓ " / ""`, so the mark adds nothing to the accessible name.
  - **Labels** in the lesson list are 14px or larger.
  - **Path list restyle only.** The current row gets `--sel-tint` and a 2px navy edge.
  - **Short-height rules** at `max-height:559px`: a 48px header, a tighter hero, the choice bullets and meta line hidden, and smaller card padding. The illustration is hidden by its own rule, and the explainer is closed by `app.js`.
  - **Print rules** for the new chrome.

### `js/app.js`
- **New `routineBlock(open)`, `supportRow(prefix)` and `buildShared()`.** `buildHome()` calls them after the lessons load, so the explainer takes its counts from the real lessons rather than hard-coded numbers. It counts the hands-on lessons, whose step lists contain "Check", and `PP.tasks`.
  - The explainer is a `<details class="routine">`. It is open on `#screen-choose` and closed on the path and browse screens. When `(max-height:559px)` matches, it starts closed everywhere.
  - Its content follows 03-copy §5:
    - the five steps, with who does each
    - "The skill check … starts fresh each time"
    - the hands-on and essay exception, using the real counts
    - "When a grown-up joins in": Practice Together, reading aloud, cursive, short writing, essays and "Say it out loud"
  - It never uses the words master, mastered or mastery.
- **The support row** has Parent guide, Georgia standards, Everyday habits, Mixed practice and practice tests, the Clue Word Cheat Sheet, and a "Saved on this device only" disclosure.
  - On `#screen-home` it uses the existing ids `hero-parents`, `hero-habits`, `hero-mixed` and `hero-clues`, plus a new `hero-standards`.
  - On the other screens the ids are `choose-link-*` and `path-link-*`.
  - The four old `el("hero-…").addEventListener` lines in `init()` were removed, because `buildShared` binds them now.
- **`landHome()`** now:
  - labels `#screen-home [data-go=path]` "Back to the Learning Path" when the path was started, and "Try the Learning Path" otherwise
  - calls `PP_PATH.notice()`, so the blocked-storage notice also appears on the browse home.

### `js/path.js`
- **New read-only helpers.**
  - `label(k)` returns the catalog id and title.
  - `firstLabels()` fills "D1 · Story elements" into `#choose-first`, `#path-first` and `#path-start` from `entries()[0]`, the same for every family.
  - `welcomeBack()` builds state B from `PP_SKILLS.startedLessons()`, which reads `pp.progress.v1` as loaded. It writes nothing; guarded storage reads are unchanged.
- **New `browseLessons()`** (header "Browse lessons" and the bottom "Browse all lessons") calls `setHash("#browse")` and `landBrowse()`. It does not change the mode.
- **`showChoice()`** sets the labels to "Start the Learning Path" or "Back to the Learning Path", and "Choose a lesson". It no longer says "Continue My Path".
- **`render()`:**
  - The next-step card `#path-current` comes first. Under it is the "Other ways in" row:
    - "See the whole path" scrolls to the new `#path-full` heading and opens the current phase.
    - `data-go="choose"` "Switch learning mode" (the selector `path.py` uses).
  - Then `#path-progress`, `.path-alongside` and the full path, both unchanged. The bottom button is now "Browse all lessons", which keeps the mode (§5).
  - The card and the row are hidden while the first-time intro shows, so the intro's Start is the only primary action.
- **Card content:**
  - **The bookmark is on this lesson:** "Opens at: {step} (step N of M)", using `PP_SKILLS.stepNames` and `stepIds`, so hands-on lessons say "Check (step 4 of 4)". It also shows a grown-up line for that step from `adultNote()`, adds "The skill check starts fresh each time." when the step is Test Your Knowledge, and the button reads "Continue the Learning Path".
  - **No bookmark on this lesson:** "The next lesson on the path that is not marked finished. It starts at Learn It." The button reads "Start this lesson".
  - **Essays:** "Opens at: 1. Read (step 1 of 4)", plus "Your saved plan and draft open with it." when a draft exists.
  - **Drift:** if the bookmark is not on the first unfinished entry, the card adds `#path-suggested`, "Suggested next on the path: {lesson}", which opens that lesson.
  - **Path complete:** the card keeps "…does not establish mastery of every standard", and its primary action is "Browse lessons".
- **New exports:** `browseLessons`, `introduced()`, `notice` and `storageOK()`. Nothing existing was removed.

### `js/skills.js`
- **New read-only helpers:**
  - `startedLessons(only)` returns lessons in catalog order with status started or passed, or only the status given.
  - `firstOpenStep(k)` returns the first step whose done mark is not set, using the same marks as the step bar.
- **New exports:** `stepIds`, `lessonKind` (`fluency`, `trace` or null), `startedLessons`, `firstOpenStep` and `entryStatus`.
- **`buildUpNext()` (state D):**
  - The eyebrow says "Up next". `#up-next-btn` keeps its "{id} · {title}" text.
  - Below it: "The first lesson without a passed check in {Category}[, the category you opened last]." If that lesson is already started, the line adds "it opens at {step}" and the button opens there.
  - Then up to three "Lessons already started" buttons, each "Opens at {first unfinished step}".
  - When every lesson is passed, it shows 03-copy R7.
- **`buildProgress()`:**
  - Separate rows: "Lessons on the test with a passed skill check: N of 74" (scored passes only, with the bar), "Lessons started, no check passed yet", and "Hands-on lessons checked by a grown-up" when any exist.
  - The review line ("One passed skill is due for a review.") and the essay line both use number words.
  - A "What the marks mean" `<details>` legend with eight terms. It keeps its open state across rebuilds triggered by search.
- **`buildCards()`:**
  - The ring's aria-label is now "{n} of {m} lessons passed or checked by a grown-up."
  - "+2 essays" became "plus two essays", and "All checks passed" became "Every lesson passed or checked".
- **`buildList()`:**
  - The match count uses number words below ten, for example "Four lessons match."
  - Empty states follow 03-copy §8 and echo the query.
  - The clear button resets the search and filter.

### `js/data/site.js`
- **Line 105**, the parent-guide plan step, was rewritten as "Choose how to start: Follow the Learning Path for a suggested order, or choose a lesson from the list. …" The home no longer lists skills "in learning order".
- **Line 107** now names "Mixed practice and practice tests", to match the renamed support link.

### `js/parents.js`
- **Counts in prose:** "4 to 6 questions" became "four to six questions", and "7 days" became "seven days". The point values ("8 of the 60 points", "2-point") stay as numerals.

### Not changed
- **Application files:**
  - `js/pp.js`, `js/writing.js`
  - `js/engine/*`, so UX-001's writing recovery, the player and the COPY-001 strings are untouched
  - `js/data/lessons/*`, so INS-001 is untouched
  - all other data files
- **UX-002:** `skills.js` `load`, `recordObject` and `rec` are unchanged.
- **Scoring and flags:** scoring, forms A and B, and `PP_FLAGS` are unchanged.
- **Storage keys:** no storage key changed.

## 2. Test selector changes

**None.** No file under `verification/` was edited. Every id and selector the suites use is still present and behaves the same:
- `#choose-title`, `#choose-path`, `#choose-browse`
- `#path-intro`, `#path-start`, `#path-preview`, `#path-phase-*`, `#path-current`, `#path-next`, `#path-progress`, `#path-finished-*`, `#path-habit-*`, `[data-path-key]`, `.path-alongside`
- `#screen-path [data-go=choose]` (now in the "Other ways in" row, still exactly one), `#screen-path .path-storage`
- `#screen-home [data-go=path]` (exactly one), `#up-next-btn`, `#home-progress` ("due for a review"), `#cat-cards .cat-card`
- `#skill-search`, `[data-filter]`, `#skill-list`, `#home-title`, `#home-notfound`, `#build-badge`
- the "Everyday parent activities" button name
- the honesty strings "not proof of mastery" and "does not establish mastery"

## 3. Test commands and results (candidate)

Server: `node verification/serve.js . 8610`, run from `/home/claude/pp-home`. Chromium is the preinstalled Playwright build (`/opt/pw-browsers/chromium-1194`). Font CDN requests are blocked, as in every suite.

Every command was run from `/home/claude/pp-home` on the final candidate source, apart from the one later CSS line noted below the table. The logs are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/final/`, and the guard logs are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/after-guardfx.log` (candidate) and `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/home-baseline-guardfx.log` (baseline).

| Command | Result |
|---|---|
| `node verification/check-content.js --all` | **PASS: 0 failures**, 6 warnings (the same six clue-overlap warnings as before) |
| `node verification/check-writing.js` | **0 failures, 0 warnings** |
| `python3 verification/readability.py` | 125 records, byte-identical to the baseline output (no passage text changed) |
| `node verification/check-instructional-copy.js` | **28 assertions passed** |
| `python3 verification/path.py http://localhost:8610/ <out>` | **148 passed, 0 failed** |
| `AXE_PATH=<scratch>/axe/package/axe.min.js python3 verification/path-a11y.py http://localhost:8610/ <out>` | **12 of 12 screen and width runs: 0 axe violations** (WCAG 2 A/AA and 2.1 AA, with color-contrast excluded as the script specifies) |
| `verification/path-contrast.js` (run inside path-a11y; it is a browser function, not a Node script) | **0 contrast failures and 0 unsupported backgrounds** in all 12 runs. Lowest ratio 5.38:1 |
| `python3 verification/path-headers.py http://localhost:8610/ <out>` | **48 passed, 0 failed** |
| `CHROMIUM_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome python3 verification/skills-recovery.py` (starts its own server on 8369) | **67 passed, 0 failed** |
| `CHROMIUM_PATH=… python3 verification/writing-recovery.py` (own server; extra run, UX-001) | **75 passed, 0 failed** |
| `launch-ux-regression.py path`, via the scratch copy (§4) | **148 passed, 0 failed** |
| `launch-ux-regression.py path-headers`, via the scratch copy | **48 passed, 0 failed** |
| **Full guard**, `launch-ux-regression.py guard` via the scratch copy against `http://localhost:8610/`, run in the background (about 35 minutes) | **110 passed, 0 failed, exit 0** |
| The same full guard on an untouched baseline copy (port 8619) | 110 passed, 0 failed, exit 0. The candidate matches the baseline |
| `python3 verification/guard.py http://localhost:8610/` run directly, with no fixture | exit 1 at 9.1 (`#skill-search` not visible). **The baseline gives the same result**; see §4 and 05 §5 |
| Scratch behaviour script `home-behaviour.py` (not committed) | **175 passed, 0 failed**. It covers: <br>• states A, B, C and D at all seven viewports: landing screen, render writes nothing (every `localStorage` key byte-identical before and after), no sideways scroll, no page errors, visible targets of at least 44px, exactly one visible primary <br>• filters on one row with single-line pills <br>• sticky search only at 640px+ wide and 560px+ tall <br>• the explainer open only on the first-visit screen and not at short heights <br>• the illustration hidden below 640 × 560 <br>• both choice actions inside the first 390px at 844×390 <br>• the next-step action inside the first 390px at 844×390 <br>• B's links open at the first unfinished step without changing mode or progress <br>• C: "Opens at" with step N of M, Continue, the drift link and its target, "starts fresh" on a test bookmark, hands-on "Check (step 4 of 4)", essay "1. Read", and the no-bookmark wording <br>• header "Browse lessons" leaves `pp.path.v1` unchanged, `#browse` survives a reload, and the root returns to the path <br>• D: Up next wording and id format, the path as a soft button, the separate progress rows and legend, the ring aria-label, no master/mastered/mastery visible (Georgia's "Grammar chart: Master" label excepted, as in guard 11.15), empty search and clear, the match count in words <br>• blocked and quota storage: the notice on all three screens with no errors <br>• keyboard order and Enter on Start |

The last CSS change, `.cc-name{min-height:2.5em}` from 640px (it lines up the category rings), was made after the suites above. It is a single layout property on the browse home. After it, the behaviour script was rerun (175 of 175) and the AFTER screenshots were retaken.

**AFTER screenshots:** 25 files in `after/`, made with the visual agent's script with only the prefix, port and folder changed, plus state B: <br>• A (`first-visit`), C (`returning-path`) and D (`returning-lessons`) at all seven viewports <br>• B (`saved-work-no-mode`) at 390×844 and 1366×768 <br>• the path intro at 390×844 and 1366×768, to match `before/` <br>The seeds are identical to `before/`, so the comparison is like for like. I looked at the shots and fixed what I saw: <br>• the brand wrapping at 390 <br>• collapsed step discs at 768 <br>• the filter row wrapping at 320 <br>• choice actions 2px below the fold at 844×390 <br>• misaligned category rings at 1366 and 1920 <br>• the heading focus ring showing after programmatic focus

## 4. Guard: how it was run

`python3 verification/guard.py http://localhost:8610/` **cannot pass on its own, on the baseline or on the candidate.** On an untouched baseline copy it stops at check 9.1 with `Page.fill: Timeout … #skill-search … element is not visible` (exit 1). Its home journeys predate the Learning Path, and with no saved mode the root is the choice screen. The 110-check result recorded on October 21 came from `verification/launch-ux-regression.py guard`, which seeds the documented `{mode:'browse', introduced:true}` fixture.

That launcher hard-codes three settings that do not work here: port 8368, a browser path that does not exist in this sandbox, and an output folder inside the committed October 21 evidence, which it would overwrite (see 05 §6). So I ran a byte-for-byte copy with only those three settings made into arguments:

- the scratchpad copy `guard-fixture.py`, at `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/guard-fixture.py`
- usage: `python3 guard-fixture.py <suite> <root> <base-url> <out-dir>`

The fixture string, the browser flags and the profile hook that collects each `ok()` call are unchanged, and guard.py's assertions are untouched. Both the baseline and the candidate were run this way, so the comparison is like for like.

## 5. Interpretations and anything not done

- **Support-row placement on the browse home.** The brief (§2 D) lists the explainer and support links after the skill list. That list is about 10,000px tall on a phone, which would bury the parent guide and mixed practice. I kept them where the existing `.home-links` row was, after the category cards and before search, with the explainer closed. Every other item in D keeps the brief's order.
- **Header label.** The brief says "For parents", so the header uses it. The support row keeps "Parent guide", the page's own name.
- **"Switch learning mode" on the browse home was removed.** D allows one secondary path button. The choice screen is still reachable from the path screen's "Switch learning mode" and at `#choose`. No test used the browse-home copy.
- **The path's bottom button** ("Choose Individual Lessons") used to switch the saved mode to browse. It is now "Browse all lessons", which matches the header and keeps the mode. Switching mode stays explicit under "Switch learning mode".
- **The next-step card is hidden during the first-time intro**, so the intro's "Start with D1 · Story elements" is the single primary action. That intro button is still `#path-start`, and it still focuses `#path-next` afterwards (`path.py`).
- **"Continue"** appears only when the bookmark is on the card's lesson. A brand-new path start reads "Start this lesson".
- **State B** lists lessons that are started or passed, read from `pp.progress.v1` only. Essay drafts (`pp.task.*`) and short writing (`pp.skwrite.*`) are not scanned, which also avoids enumerating `localStorage` keys when storage is blocked. The essay rows in the lesson list still mark drafts as started.
- **The blocked-storage notice keeps its existing text** ("…only for this visit…"), which `path.py` checks. 03-copy's proposed rewrite was not applied, and the UX-001 writing notices are untouched.
- **Not verified:** real devices, Safari, screen readers, native zoom and family use (05 §9). axe ran with `color-contrast` disabled, as `path-a11y.py` specifies, and the solid-colour contrast script ran instead. axe-core 4.10.2 was fetched with `npm pack` into the scratchpad only; it was not added to the repository.
