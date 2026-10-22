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
  - Header: "Browse lessons" (`#path-browse`, new) and "For parents" (`data-go="parents"`). Below 640px they show the short labels "Lessons" and "Parents"; below 400px the word mark was visually hidden (superseded by QA-09: it now stays visible and the header tightens instead).
  - The intro (`#path-intro`) uses 03-copy's bullets and still says "not proof of mastery".
  - The intro buttons read "Start with D1 · Story elements" (`#path-start`; the label is filled from the first path entry) and "See the whole path" (`#path-preview`).
  - The old saving `.note` was removed; the support row's "Saved on this device only" carries that information now.
  - A `.home-shared` slot was added.
- **Browse home (state D):**
  - The compact title is now "Grade 3 ELA lessons". The lede has the full step names ("…Try It Yourself and Test Your Knowledge. Hands-on lessons have four.") and no longer says "in learning order".
  - `#up-next` is now the primary `.next-panel`.
  - Below it, a single secondary `[data-go=path]` button, "Try the Learning Path", now `btn-soft`. The second primary and the home's "Switch learning mode" button were removed.
  - A `.path-storage` status was added, so blocked storage is also announced on this screen.
  - Then `#home-progress`, `#cat-cards` and a `.home-shared` slot, which holds the `#hero-*` support buttons. (Superseded by QA-03: the shared slot now comes after the lesson list.)
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
  - **Essays:** "Opens at: 1. Read (step 1 of 4)" (superseded by QA-07: now "(tab 1 of 5)", counted from the real tabs), plus "Your saved plan and draft open with it." when a draft exists.
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

- **Support-row placement on the browse home (reversed after QA-03).** The brief (§2 D) lists the explainer and support links after the skill list. That list is about 10,000px tall on a phone, which would bury the parent guide and mixed practice. I kept them where the existing `.home-links` row was, after the category cards and before search, with the explainer closed. Every other item in D keeps the brief's order.
- **Header label.** The brief says "For parents", so the header uses it. The support row keeps "Parent guide", the page's own name.
- **"Switch learning mode" on the browse home was removed.** D allows one secondary path button. The choice screen is still reachable from the path screen's "Switch learning mode" and at `#choose`. No test used the browse-home copy.
- **The path's bottom button** ("Choose Individual Lessons") used to switch the saved mode to browse. It is now "Browse all lessons", which matches the header and keeps the mode. Switching mode stays explicit under "Switch learning mode".
- **The next-step card is hidden during the first-time intro**, so the intro's "Start with D1 · Story elements" is the single primary action. That intro button is still `#path-start`, and it still focuses `#path-next` afterwards (`path.py`).
- **"Continue"** appears only when the bookmark is on the card's lesson. A brand-new path start reads "Start this lesson".
- **State B** lists lessons that are started or passed, read from `pp.progress.v1` only. Essay drafts (`pp.task.*`) and short writing (`pp.skwrite.*`) are not scanned, which also avoids enumerating `localStorage` keys when storage is blocked. The essay rows in the lesson list still mark drafts as started.
- **The blocked-storage notice keeps its existing text** ("…only for this visit…"), which `path.py` checks. 03-copy's proposed rewrite was not applied, and the UX-001 writing notices are untouched.
- **Not verified:** real devices, Safari, screen readers, native zoom and family use (05 §9). axe ran with `color-contrast` disabled, as `path-a11y.py` specifies, and the solid-colour contrast script ran instead. axe-core 4.10.2 was fetched with `npm pack` into the scratchpad only; it was not added to the repository.

---

## 6. After QA (06-independent-review.md, candidate cd18ef4)

The rules were the same as before:
- no test file edited, so no selector changed and no assertion weakened
- no storage key added, changed or migrated, and every render still writes nothing
- no git commands

### What I did, finding by finding

| Finding | What I did |
|---|---|
| **QA-01 MUST** (`.un-done` white on white) | **Fixed.** The legacy rules were deleted, and `.next-panel .un-done` now uses `--text` in the redesign block. I checked every leftover hero-era style and deleted the unused ones: `.hero`, `.hero-inner`, `.hero-title` (including its 640px rule), `.hero-sub`, `.hero-actions`, the `.hero-compact …` rules, `.un-label` (#E7EEF8), `.un-done` (#fff), both `.hero .un-btn` rules and the unused `.btn-ghost` (white text). The base `.brand` colour changed from #fff to `--navy-deep`. The only `color:#fff` rules left are on navy, green or plum fills. The all-passed card also gets one action, a soft "Mixed practice and practice tests" button (no primary, as before). Verified at all seven viewports: the text is visible and dark, and the existing `path-contrast.js` function, run on `#screen-home` with every `<details>` open, reports 0 failures (scratch script). |
| **QA-02** (blocked-storage notice too low; "Your progress stays" contradicts it) | **Fixed.** On `#screen-choose` the `.path-storage` notice now sits above the welcome-back box and the choice cards. The footnote (`#choice-foot`) is hidden by `storageNotice()` whenever saving is unavailable. On `#screen-home` the notice sits above the Up next card. The element and text are unchanged, and the path screen still has exactly one `#screen-path .path-storage` (path.py). |
| **QA-03** (search far down the browse home) | **Fixed, in the brief's order:** Up next card (and the started lessons), then the progress summary, then the category cards, then search with filters and the list, and then the explainer and support links at the bottom. A row under Up next keeps "Try the Learning Path" plus two small links: "How a lesson works" (`#home-how`, which opens and focuses the bottom explainer) and "Parent guide" (`#home-help`). The progress counts sit side by side from 640px. At short heights the browse lede is hidden and the category cards drop the "Next:" line, which brings them to one or two compact rows. Search top, in px, with my seed (QA's seed differed): 320×568 **1596** (QA measured 2365, baseline 1360); 390×844 **1462** (2126, baseline 1245); 844×390 **800** (1678, baseline 745); 1366×768 **901** (1420, baseline 729). |
| **QA-04** (legend marks do not match the list; "Step done" looks like "Passed") | **Fixed.** One `markEl()` builder in `skills.js` makes every list mark, and the legend uses the same elements and classes. The list marks are now: <br>• passed: a green pill "✓ passed" (`.sl-done.sl-pill`) <br>• grown-up: a plum pill "✓ grown-up" <br>• review: the outlined "review" pill, unchanged <br>• started: a half-filled plum disc plus the word "Started", replacing the lone "◐" glyph <br>"Step done" in the legend is drawn as the step bar's own done badge (`.step-n`, a green disc with a white ✓), so it differs in shape and word from the "✓ passed" pill. The legend also shows a real category ring and the leaf checkbox tick. Each mark carries a word, not colour alone. The row aria-labels are unchanged (guard 9.8 and 11.11). |
| **QA-05** (empty space in "Choose a lesson") | **Fixed.** From 640px the cards no longer stretch: the browse card is as tall as its content, and the path card stays the taller, primary card. The browse card gained a static preview, "Lessons are grouped in five categories:", with five non-interactive chips filled from `PP_CATALOG` (no new behaviour). The gap under its button is now at most 30px at 768, 1024, 1366 and 1920. |
| **QA-06** (welcome-back links can start a check) | **Fixed.** In-progress lessons are listed first, then lessons with saved short writing, then essay drafts, then passed lessons. A passed lesson opens on its skill page at Learn It, never at its check. The aria-label still says where it opens. |
| QA-07 (essay "step 1 of 4" vs five tabs) | **Fixed** with the real tab count: "Opens at: 1. Read (tab 1 of 5)". The label and count are read from the essay screen's own tab list. |
| QA-08 (drift link before the primary) | **Fixed.** "Suggested next on the path" now comes after `#path-next` in DOM and tab order. It spans the card under the button at 600 weight and 15px. |
| QA-09 (word mark hidden below 400px on the path screen) | **Fixed.** "Peach Prep" stays visible on every screen. Below 400px the two-button header tightens instead (smaller mark, 16px brand, tighter button padding). Checked at 320, 360 and 390: the word mark is visible with no overflow. |
| QA-10 (`aside` inside `main`) | **Fixed.** `.path-alongside` is now a `<section aria-labelledby="path-alongside-title">`. The class is unchanged (path.py). |
| QA-11 (sticky search partly covers Shift+Tab-focused rows) | **Fixed.** `scroll-padding-top:96px` applies only while the browse home is showing and search is sticky (`(min-width:640px) and (min-height:560px)`, via `html:has(#screen-home:not([hidden]))`). Other screens are unaffected. |
| QA-12 (state B misses writing-only families) | **Fixed.** The welcome-back line also counts essay drafts (through the existing guarded `entryStatus`) and short writing, read with a guarded `getItem("pp.skwrite.<lesson>")` for each known lesson. Storage is never enumerated, so blocked storage still renders state A with no error. |
| QA-13 (primary below the first screen at 320×568, in B, and in C4 at 320) | **Not changed.** At 320×568 the honesty bullets (not a test or placement, everyone starts at D1, any lesson stays open) are the brief's required content; removing them to lift the button about 260px would trade honesty for position. In B, the welcome-back box is the point of the state. At 844×390, which the brief names, the A and C primaries are in the first screen (checked). |
| QA-14 (label-in-name, experimental rule) | **Not changed.** Every name begins with the visible text, so voice commands work. The aria-label pattern predates the redesign and is asserted by guard 9.8 and 11.11; changing it would touch test-checked labels. |
| QA-15 (small items) | Hyphen wrap **fixed** ("grown-up" is kept on one line in the progress row and the legend). The others are **not changed**: the search label is visually hidden (it predates the redesign, and the placeholder plus the "Choose a lesson" text describe it); the ✓ glyph in the step disc and the build badge are glyph and label exceptions; and the `#main` reload behaviour is in `route()`, which predates this work. All three are recorded here, and the `#main` and search-label items belong in 05. |
| QA-16 (tooling) | **Not changed in the repository,** because editing `verification/` was out of my brief. As a scratch check, I ran `path-contrast.js` on `#screen-home` (all seven viewports, the D3 state, every `<details>` open) inside `home-behaviour.py`: 0 failures. Recommendation for the lead: add `#screen-home`, including D3, to `path-a11y.py`, and correct its header's claim that axe `color-contrast` crashes the browser. |

Other fixes found while re-shooting:
- At 320px the wider word marks made the catalog's `1fr` group column overflow by 18px. The grid columns are now `minmax(0,1fr)`, and a row's marks may wrap under its title.
- At 844×390 the compact category names broke mid-word. Those cards now use wider columns and never break inside a word.

### New test counts (post-QA candidate, port 8610)

| Command | Result |
|---|---|
| `node verification/check-content.js --all` | PASS: 0 failures, the same 6 warnings |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `python3 verification/readability.py` | byte-identical to the baseline (125 records) |
| `node verification/check-instructional-copy.js` | 28 passed |
| `python3 verification/path.py http://localhost:8610/ <out>` | **148 passed, 0 failed** |
| `path-a11y.py` with `path-contrast.js` | **12 of 12 runs: 0 violations, 0 contrast failures, 0 unsupported**; lowest ratio 5.38:1 |
| `python3 verification/path-headers.py …` | **48 passed** |
| `skills-recovery.py` | **67 passed, 0 failed** |
| `writing-recovery.py` | **75 passed, 0 failed** |
| launcher copy: `path` / `path-headers` | **148 / 48 passed** |
| scratch `home-behaviour.py`, extended with 39 checks for QA-01 to QA-12 | **214 passed, 0 failed** |
| **Full guard via the fixture launcher copy** (`guard-fixture.py guard /home/claude/pp-home http://localhost:8610/ <out>`, background, about 35 minutes) | **110 passed, 0 failed, exit 0** |

The logs are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/final-qa/`.

**AFTER screenshots** were retaken for every state, with the same seeds: 25 files, as in §3. Five QA shots were added:
- `after-qa01-all-passed-390x844.png` and `-1366x768.png`
- `after-qa02-storage-blocked-390x844.png` and `-1366x768.png`
- `after-qa04-legend-and-list-390x844.png`

---

## 7. After QA-16..19 (final re-review of 595ef01)

The rules were the same as before: no storage key added, changed or migrated, every render still writes nothing, and no git commands. This round edits `verification/`, as QA-16 asked. Coverage was only added. No existing check was removed or loosened (see QA-16 for the one change to `path-contrast.js`).

Server: `node verification/serve.js . 8640`. Scratch scripts and logs are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/qa1619/`.

### What I did, finding by finding

| Finding | What I did | Evidence |
|---|---|---|
| **QA-17** (each legend term read twice) | **Fixed.** `js/skills.js` `buildProgress()` sets `aria-hidden="true"` on each legend's `.lg-mark` wrapper. The mark stays visible. The `<dt>` is now read as the term alone, and its `<dd>` meaning follows it. The list rows are unchanged: they still build their marks with the same `markEl()`. | In Chromium's own accessibility tree (CDP `Accessibility.getFullAXTree`, plus Playwright `aria_snapshot()`), the seven terms read exactly "Started", "Step done", "Passed the skill check", "Checked by a grown-up", "Review suggested", "Category ring", "Activities finished", each followed by its definition, at 390×844 and 1366×768. Negative control: with `aria-hidden` removed in the page, the same snapshot reads "Started Started", "✓ Step done", "✓ passed Passed the skill check". |
| **QA-18** (category chips look tappable) | **Made plainly non-interactive.** This is the simpler and more honest option: the card's button already opens the list, and adding a second way in, which must not change the saved mode, would add behaviour for little gain. The five categories are still a `<ul>` under "Lessons are grouped in five categories:", but now as a line of plain body text: no fill, coloured edge, radius or padding, regular weight, the default cursor, and nothing focusable. A middle dot separates them visually (`content:"·" / ""`, so screen readers do not hear it). Only `css/styles.css` changed. | At 390 and 1366: five `<li>`, computed background transparent, border 0, radius 0, padding 0, weight 400, cursor `auto`, none focusable. The aria snapshot has five list items and no "·". A click on a category changes nothing (same screen, every storage key byte-identical). Screenshots: `after/after-first-visit-*.png` (all seven viewports) and `after/after-saved-work-no-mode-*.png`. |
| **QA-19** (passed mark lost its tooltip) | **Restored, with the date.** The row's accessible name and the mark's `title` now say "Passed the skill check on October 1, 2026" (or "Checked by a grown-up on …"). The date is the stored `passedAt`, formatted by the existing `niceDate()`. With no `passedAt`, for example an undated 2.1 pass (`legacyUndated`), the text is the plain label and no date is invented. The title is extra; the information is in the button's `aria-label`, which is what assistive technology reads. | Rows with a dated pass: aria-label "…Passed the skill check on October 1, 2026." and the same `title`. Rows with a legacy undated pass end "…Passed the skill check." No page errors with a malformed (string) record. **Guard 9.8** checks that "Passed the skill check" is in the label, and **11.9** and **11.11** check "Checked by a grown-up" and the absence of "Passed the skill check". Those substrings are unchanged, and 14.4 and 14.5 ("Retained" absent) are unaffected because no month name contains it. All of these pass in the full guard below. |
| **QA-16** (tooling) | **Done in `verification/`.** See the next section. | |

Scratch check `qa1619/check.py`: **22 passed, 0 failed** (QA-17, QA-18 and QA-19 at 390×844 and 1366×768).

### QA-16: `path-a11y.py` and `path-contrast.js`

**The crash claim.** The header said axe `color-contrast` "exits this packaged renderer". I tested this, and it was not reproduced. I used Playwright 1.56 with headless Chromium 141.0.7390.37: the default build, and `/opt/pw-browsers/chromium-1194` with no `CHROMIUM_ARGS`. With both axe-core 4.10.2 and 4.14.0 (4.14.0 is the version named in the October 21 evidence README), `color-contrast` ran on the choice, path and browse screens at 320, 390, 768 and 1366 px. Nothing crashed, and each run took under 2.5 s. The October 21 failure may have depended on a browser build or flags that were not recorded. The header now says this, and it also says why the computed-style check is kept: axe reported QA-01 only as "incomplete".

**Added to `path-a11y.py`.** The original loop is untouched: choice, intro and path at 320×640, 390×844, 768×1024 and 1366×900, with the same axe tags, `color-contrast` still excluded from that main run, and the same `path-contrast.js` check and failure rule. The script now also runs:
- **An axe `color-contrast`-only run on each of those 12 screen/width runs.** Results go to `a11y-color-contrast-results.json`, and any violation fails the script.
- **The browse home (`#screen-home`) at the same four viewports, in three saved states, with every `<details>` on the screen opened:**
  - `first-browse`: browse mode, no progress
  - `returning-progress`: two started lessons, one recent pass, one pass ten days old (review due) and a grown-up check
  - `all-passed`: every lesson passed or grown-up checked, the QA-01 state

  Each run uses axe with the same WCAG tags, color-contrast included, plus `path-contrast.js`. The script also asserts that the state really rendered, by counting list marks and the all-passed message, so the coverage cannot pass vacuously. Results go to `a11y-home-results.json`, and the screenshot to `home-all-passed-390.png`. A violation, contrast failure, unsupported item, mis-rendered state or missing run fails the script.

**One change to `path-contrast.js`, which adds measurements.** Before, any background image anywhere among the ancestors made the text "unsupported". On the browse home that hit only the six category-ring counts ("3/24"). Each count sits on an opaque white disc (`.cc-ring-n`, `#fff`) in front of the ring's conic gradient. The function now ignores images that lie behind the nearest opaque solid background, because they cannot show through it. Images at or in front of that layer are still unsupported, and opacity below 1 on any ancestor still is. On choice, intro and path the results are identical to before: 0 unsupported, lowest ratio 5.38:1.

**Negative control.** In the all-passed state at 390×844, injecting the QA-01 regression (`.next-panel .un-done{color:#fff}`) makes `path-contrast.js` report one failure at 1:1.

**Run** (`AXE_PATH=<scratch>/axe/package/axe.min.js python3 verification/path-a11y.py http://localhost:8640/ <out>`), exit 0:

| Part | Runs | Result |
|---|---|---|
| Main axe run (choice, intro, path) | 12 | 0 violations. Computed contrast: 0 failures, 0 unsupported, lowest 5.38:1 |
| axe `color-contrast` only (same 12) | 12 | 0 violations, 0 incomplete |
| Browse home, three states × four viewports | 12 | 0 axe violations (color-contrast included). Computed contrast: 7,080 text nodes, 0 failures, 0 unsupported, lowest 4.64:1. All three states rendered as seeded. axe `color-contrast` "incomplete" in each run: `.step-n` and `.lg-box`, both glyph-only legend marks (white ✓ on #17703F, 6.13:1, per 06) |

### Test counts (port 8640)

| Command | Result |
|---|---|
| `node verification/check-content.js --all` | PASS: 0 failures, the same 6 warnings |
| `node verification/check-writing.js` | 0 failures, 0 warnings |
| `node verification/check-instructional-copy.js` | 28 passed |
| `python3 verification/readability.py` | identical to the previous candidate run (125 records) |
| `python3 verification/path.py http://localhost:8640/ <out>` | **148 passed, 0 failed** |
| `path-a11y.py` (extended) | **36 runs (12 + 12 + 12): 0 violations, 0 contrast failures, 0 unsupported, exit 0** |
| `python3 verification/path-headers.py http://localhost:8640/ <out>` | **48 passed, 0 failed** |
| `CHROMIUM_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome python3 verification/skills-recovery.py` | **67 passed, 0 failed** |
| `CHROMIUM_PATH=… python3 verification/writing-recovery.py` | **75 passed, 0 failed** |
| scratch `home-behaviour.py` (the 214 checks from §6, pointed at 8640) | **214 passed, 0 failed** |
| scratch `qa1619/check.py` (QA-17 to QA-19) | **22 passed, 0 failed** |
| **Full guard** via the fixture launcher copy (`guard-fixture.py guard /home/claude/pp-home http://localhost:8640/ <scratch>/qa1619/guard`) | **110 passed, 0 failed, exit 0** (including 9.8, 11.9 and 11.11) |

**AFTER screenshots retaken** (same seeds and script as §3, port 8640): `after-first-visit-*` at all seven viewports and `after-saved-work-no-mode-390x844` and `-1366x768`. These are the screens with the category line. The other AFTER files are unchanged. QA-17 and QA-19 change nothing visible; the title tooltip shows only on hover.

**Not verified:** real screen readers (VoiceOver, TalkBack, NVDA), Safari and Firefox. The accessible names were checked in Chromium's accessibility tree only.
