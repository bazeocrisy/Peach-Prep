# 02 · Visual and responsive design: Peach Prep home

Agent: visual and responsive design (read-only for code). Baseline: `main` at 9a5b297, "Peach Prep 2.2.0-rc (PP-003)".
Scope: the visual system and responsive composition for the redesigned home and its first-use and returning states. The IA and copy agents own the final hierarchy and wording. Where this file uses example copy, treat it as placeholder text that fits the space.

---

## 0. BEFORE evidence

Captured with Chromium (Playwright) against `node verification/serve.js . 8602`. Google Fonts requests were blocked in this sandbox, so text renders in locally available fallbacks. Layout, spacing and sizes are faithful. Font shapes may differ a little from production.

Folder: `docs/design/home-2026-10-22/before/` (23 PNGs, each 25–157 KB). Phone viewports are full-page shots capped at 3200 px. Tablet and desktop viewports are viewport shots.

| State | What loads | Seed |
|---|---|---|
| `first-visit` | `#screen-choose` (the current first screen) | empty storage |
| `path-intro` (390×844, 1366×768 only) | `#screen-path` with `#path-intro` after "Follow the Learning Path" | empty storage |
| `returning-path` | `#screen-path` (mode `path`) | `pp.path.v1` = `{mode:"path", introduced:true, bookmark:{key:"3.T.T.1.c", step:"practice"}, finished:{3.T.T.1.b, 3.T.T.1.a}, habits: two codes}`. `pp.progress.v1` = two passes (one 9 days old, so it shows "review"), one lesson practising, one learning, `_ui.lastCat:"reading"` |
| `returning-lessons` | `#screen-home` (mode `browse`) | same `pp.progress.v1`, `pp.path.v1` = `{mode:"browse"}` |

Files: `before-<state>-<WxH>.png` for the seven viewports, giving three states × 7 = 21 shots plus 2 path-intro shots. The capture script is at `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/before_shots.py` (scratch only, not committed).

---

## 1. Current visual hierarchy: problems with evidence

Measured values come from `getComputedStyle` and `getBoundingClientRect` on the current build.

### 1.1 Three different "homes" with three different visual languages
- **First visit** (`before-first-visit-*`) is a plain page. It has a peach-ink text brand, no brand mark, two equal white cards and nothing else: no description of what the app teaches, no routine and no parent help. At 1366×768 the content ends at y≈470, so 40% of the screen is empty. The button labels repeat the card titles word for word ("Follow the Learning Path" appears twice in each card).
- **Path** (`before-returning-path-1366x768`) has no brand at all. Two floating pill buttons sit at the screen edges. The bar is 1080 px wide and the content is 980 px wide, so "Switch learning mode" starts at x=160 while the title starts at x=209. That is a visible 49 px misalignment.
- **Browse home** (`before-returning-lessons-*`) is a full-bleed navy→peach gradient banner with white text, which looks like a different product.

### 1.2 Competing primary actions
- On the browse home, the **peach-filled** "D2 · Sequence…" (up next) and the **navy-filled** "Follow the Learning Path" sit 50 px apart. Both are filled pills of the same size, so nothing says which one matters (`before-returning-lessons-1366x768`).
- On path-intro, **"Start My Path"** (navy) and **"Begin / Continue Lesson"** (navy) are both visible on the first screen at 390 px (`before-path-intro-390x844`, y≈920 and y≈1550). The second one says "Continue" before anything has started.
- "Switch learning mode" is a vague label, and it is styled as the equal of "Follow the Learning Path".

### 1.3 The banner pushes content down; short heights are worst
| Viewport | Hero height | % of viewport | First skill row starts at |
|---|---|---|---|
| 320×568 | 397 px | **70%** | 1521 px |
| 390×844 | 348 px | 41% | 1384 px |
| 844×390 | 267 px | **68%** | 845 px (2.2 screens down) |
| 1366×768 | 267 px | 35% | 829 px |

At 844×390 the sticky `.skill-tools` bar is **96 px tall (25% of the viewport)** and stays on screen while the list scrolls.

### 1.4 Filter buttons wrap to three lines
`.seg button` heights: **80 px at 320, 844 and 1366** and 58 px at 390. "On the test" and "Not passed yet" wrap inside pills. The cause is `.skill-search{width:100%}` inside a flex row, with `.seg button{flex:1}` and no `white-space:nowrap`, so the search box squeezes the segment to its minimum content width (visible in `before-returning-lessons-1366x768` at y≈715–768).

### 1.5 Labels below 14 px
| Element | Size | Where |
|---|---|---|
| `.cc-ring-n` (category ring "2/24") | **11.5 px** | category cards |
| `.sl-test` ("On test") | **11.2 px** | every tested skill row |
| `.sl-review` ("review") | **11.5 px** | passed rows |
| `.sl-done.by-grownup` | 12 px | grown-up passes |
| `.sl-code` (standard codes) | 12.5 px | every skill row |
| `.cc-next` ("Next: A1 …") | 13.1 px | category cards |
| `.srow-tag`, `.std-badge` | 12 px | lists, parent guide |

A parent reading beside a child at arm's length on a phone cannot use 11 px labels.

### 1.6 Density and scroll
- Phone browse home: hero, two mode buttons, five category cards (388 px), four link pills, a progress paragraph of four sentences, search, filters, then the full catalogue. That makes the first skill 1.6 screens down at 390×844.
- The progress card is a single 4-sentence paragraph ("2 of 74 skills… The 2 essay tasks… 1 passed skill is due…"). It mixes three different facts with no visual separation.
- Path-intro on a phone is about 4.2 screens of text (bullets, a storage note, counts, the next-lesson card, an alongside panel and seven collapsed phases) before "Choose Individual Lessons" appears at the very bottom.

### 1.7 Contrast and boundaries (computed below in §4)
- The **focus ring is invisible on the navy hero**: `--sky` #1B4FA8 on #123A6B is **1.48:1**. The up-next button lives in the hero.
- The **search input and filter button borders** (`--line` #E6DCD0) are **1.35:1** on white and 1.27:1 on the page. That fails 3:1 for the boundary of a text input (WCAG 1.4.11).
- `.hero .btn-primary` (white on `--peach` #E8743B) is **3.00:1**, which fails for 16 px text. It is not rendered on the current home but it is still a live rule.
- `.st-none` #8C7F70 on white is 3.90:1, which fails for body-size text.

### 1.8 Small inconsistencies
- Card radii are 16, 12 and 10 px and side padding is 12, 14, 16 or 24 px on the same screen.
- The category cards use a 6 px top border on desktop and a 6 px left border on phones, so the same component changes shape.
- On the first screen the choice buttons are `disabled` until sets load, and nothing tells the parent why.
- The "started" marker is a lone `◐` glyph, which is easy to miss and is announced only through aria-label.

---

## 2. Visual direction

**Calm paper, navy ink, one peach accent.** The page background stays warm (`--page`). Navy carries every primary action and all headings. Peach becomes an accent for small things only: the brand mark, a 4 px rule, eyebrow text in `--peach-deep`, and the route illustration. It is never a button fill with white text. The full-bleed gradient banner goes. The brand moves into a light 56 px header, and the hero becomes a short text block on the page background.

**One primary button per view.** On the first visit that is "Start the Learning Path". On a return it is the single next-step action. Every other action is a soft (outlined) button or a text link.

Fonts stay as they are: **Poppins** for headings, buttons and labels, and **Nunito** for body text. `index.html` already loads Poppins 500–800 and Nunito 400–800. The brief mentions Inter, but the site does not use Inter, and adding a third family would cost a request for no gain. Keep the current fonts.

---

## 3. Tokens

Add these to `:root`. Keep every existing token: other screens use them.

```css
:root{
  /* new: layout */
  --maxw: 72.5rem;            /* 1160px content width */
  --gutter: 16px;             /* 24px >=640, 32px >=1024 (see §5) */
  /* new: spacing scale (4px base) */
  --s1:4px; --s2:8px; --s3:12px; --s4:16px; --s5:24px; --s6:32px; --s7:48px; --s8:64px;
  /* new: type scale */
  --fs-hero: clamp(1.625rem, 1.15rem + 1.9vw, 2.25rem);   /* 26 → 36px */
  --fs-section: clamp(1.25rem, 1.1rem + .6vw, 1.5rem);     /* 20 → 24px */
  --fs-card: clamp(1.1875rem, 1.1rem + .35vw, 1.375rem);   /* 19 → 22px */
  --fs-body: 1.0625rem;       /* 17px, unchanged */
  --fs-small: .9375rem;       /* 15px: secondary text */
  --fs-label: .875rem;        /* 14px: the floor, for codes, tags, eyebrows */
  /* new: colour roles */
  --edge-control:#8A7B6B;     /* input and outlined-button boundary: 4.10:1 on card, 3.84:1 on page */
  --peach-ink:#8F3E14;        /* peach text on peach-tint, if needed: 6.46:1 */
  --focus:#1B4FA8;            /* = --sky */
  --focus-on-dark:#FFFFFF;
  --sel-tint:#E4ECF8;         /* selected or current row background, navy text 9.58:1 */
  --radius-lg:20px;           /* choice cards and next-step panel only */
}
@media (min-width:640px){ :root{ --gutter:24px; } }
@media (min-width:1024px){ :root{ --gutter:32px; } }
```

**Radius rule:** use `--radius-lg` 20 px for the two choice cards and the next-step panel, `--radius` 16 px for all other cards, `--radius-sm` 10 px for rows and inputs inside cards, and `--pill` for buttons. Remove the 12 and 14 px ad-hoc radii on the home only.

---

## 4. Contrast (computed, WCAG 2.x relative luminance)

| Pair | Ratio | Use | Verdict |
|---|---|---|---|
| `--text` #16304F on card #FFF | 13.38 | body | pass |
| `--text` on `--page` #FBF7F2 | 12.54 | body | pass |
| `--navy-deep` #0D2B50 on card | 14.20 | headings | pass |
| `--navy` #123A6B on page | 10.68 | headings, links | pass |
| `--muted` #51678A on card / page | 5.74 / 5.38 | secondary text | pass |
| `--muted` on `--peach-tint` / `--sky-tint` / `--line-soft` | 5.07 / 5.15 / 4.81 | notes inside tinted panels | pass |
| White on `--navy` | 11.39 | primary button | pass |
| White on `--navy-deep` | 14.20 | primary hover | pass |
| `--peach-deep` #A0471A on card / page / peach-tint | 6.16 / 5.77 / 5.43 | eyebrows, codes | pass |
| `--navy` on `--peach-tint` / `--sky-tint` / `--leaf-tint` | 10.05 / 10.22 / 10.08 | text in tinted panels | pass |
| `--navy` on `--sel-tint` #E4ECF8 | 9.58 | current row | pass |
| `--right` #17703F on card | 6.13 | "Passed" label | pass |
| White on `--right` | 6.13 | ✓ disc | pass |
| `--right` on `--right-tint` | 5.51 | completed row | pass |
| `--leaf` #2F7A4F on card / leaf-tint | 5.23 / 4.63 | habits | pass |
| `--sky` #1B4FA8 on card / sky-tint | 7.69 / 6.90 | links, "On test" tag | pass |
| `--plum` #6A4CD0 on card / plum-tint | 5.90 / 5.18 | "Practising" status | pass |
| Grammar teal #0E7C86 on card | 4.95 | category colour as text | pass |
| `--muted` on `--line-soft` | 4.81 | expanded summary note | pass |
| Disabled text, proposed #6E6253 on #ECE6DE | 4.79 | disabled button | pass (exempt anyway) |
| **Focus ring** `--sky` vs page / card | 7.21 / 7.69 | 3 px ring | pass (≥3) |
| **Focus ring** `--sky` vs `--navy` | **1.48** | ring on a dark surface | **fail: use white (11.39)** |
| **`--line` #E6DCD0 vs card / page** | **1.35 / 1.27** | input and outlined-button edge | **fail: use `--edge-control`** |
| `--edge-control` #8A7B6B vs card / page / line-soft | 4.10 / 3.84 / 3.43 | input and outlined-button edge | pass (≥3) |
| `--leaf` fill vs `--line-soft` track | 4.38 | progress bar | pass (≥3) |
| `--navy` fill vs `--line-soft` track | 9.55 | progress bar | pass |
| `--peach` #E8743B vs card / page | 3.00 / 2.82 | **decoration only** (rules, illustration) | do not use as text or as the only state signal |
| **White on `--peach`** | **3.00** | current `.hero .btn-primary` | **fail for text: delete the rule** |
| `--peach-edge`, `--leaf-edge` vs card | 1.47 / 1.46 | decorative card edges | decoration only; a state must also change something else |

Rule: card borders may stay `--line` because they are decorative, and the card is identified by its heading and its button. **Inputs, outlined buttons and segment buttons** must use `--edge-control` (1 px), or 2 px `--navy` when selected.

---

## 5. Type scale

| Role | Font | Size | Weight | Line height | Notes |
|---|---|---|---|---|---|
| Hero title (h1) | Poppins | `--fs-hero` 1.625→2.25rem (26→36 px) | 800 | 1.15 | max 22ch per line |
| Hero lede | Nunito | 1.125rem (18 px); 1.1875rem ≥1024 | 600 | 1.5 | max 56ch, `--text`, not muted |
| Section title (h2) | Poppins | `--fs-section` 1.25→1.5rem | 700 | 1.25 | 4 px left rule `--peach` on home sections only |
| Choice card title (h2/h3) | Poppins | 1.375rem; 1.5rem ≥1024 | 700 | 1.2 | |
| Card title (category, next step) | Poppins | `--fs-card` 1.1875→1.375rem | 700 | 1.25 | |
| Body | Nunito | 1.0625rem (17 px) | 400/600 | 1.55 | never smaller in cards |
| Secondary text | Nunito | `--fs-small` 0.9375rem (15 px) | 600 | 1.45 | `--muted` |
| Labels, eyebrows, tags, codes | Poppins | `--fs-label` 0.875rem (14 px) | 700 | 1.3 | **floor: nothing on the home goes below 14 px**; sentence case, no uppercase tracking |
| Buttons | Poppins | 1rem (16 px); 1.0625rem for the primary in a choice card | 700 | 1.2 | `white-space:normal`, `text-align:center` |
| Step numbers (routine strip) | Poppins | 0.875rem in a 28 px disc | 800 | 1 | |

Changes to existing classes on the home: `.cc-ring-n` 0.875rem with a 56 px ring and a 44 px inner disc; `.cc-next` 0.9375rem; `.sl-code` 0.875rem; `.sl-test`, `.sl-review` and `.sl-done.by-grownup` 0.875rem with 2 px 10 px padding; `.hl-btn` 1rem.

---

## 6. Layout grid and spacing per breakpoint

Container: `.home-wrap{max-width:var(--maxw);margin:0 auto;padding:0 var(--gutter);}`. **The header bar uses the same container**, which fixes the 49 px misalignment on the path screen as well (apply `max-width:var(--maxw)` and `padding:0 var(--gutter)` to `.bar` and `.path-wrap`).

Vertical rhythm: `--s6` (32 px) between home sections on phones, `--s7` (48 px) at ≥1024. Inside a card, use `--s3` (12 px) between related lines and `--s4` (16 px) before an action row. Card padding is `--s5` (24 px) at ≥640 and 20 px below.

| Breakpoint | Columns | Composition |
|---|---|---|
| **< 640** (320, 390) | 1 | header 56 px → hero text → [first visit: choice cards stacked, path first] or [return: next-step panel, then a two-button "other ways" row] → routine strip (wrapping list) → support links (2-column grid of 48 px buttons) → progress summary → category cards (1 column, rows) → search and filters → catalogue |
| **640–1023** (768, 1024 portrait-like) | 2 | choice cards 2 columns, equal; next-step panel full width with its action on the right at ≥768; routine strip 1 row of five at ≥768 (wraps below); support links 4 in a row (wrap); category cards 3+2 grid (`repeat(3,1fr)`), not 5 tiny columns |
| **≥ 1024** (1024×768, 1366, 1920) | 12-column grid, 24 px gap | hero text cols 1–7, illustration cols 9–12 (first visit only); choice cards `grid-template-columns:1.15fr 1fr` (path card visibly larger); routine strip cols 1–8 beside the support list cols 9–12; category cards `repeat(5,1fr)`; catalogue 3 columns (existing) |
| **1920×1080** | same, capped at 1160 px and centred | no stretching beyond `--maxw` |
| **Short landscape: `(max-height:500px) and (orientation:landscape)`** (844×390) | 2 | header 48 px, not sticky; hero lede hidden after the first sentence (`.hero-lede-more{display:none}`); illustration hidden; choice cards side by side with 16 px padding; routine strip collapsed into a `<details>` closed by default; **`.skill-tools` not sticky** (`position:static`); no element over 50% of the height. Target: both choice actions or the next-step action visible in the first 390 px. |

Long labels: every button has `white-space:normal; overflow-wrap:anywhere; text-align:center` and a min-height (not a fixed height). The category-card name has `hyphens:auto` and `overflow-wrap:anywhere`.

---

## 7. Components

Selectors are suggestions. The implementer may rename them, but should keep IDs used by tests (`#choose-path`, `#choose-browse`, `#path-start`, `#path-preview`, `#up-next`, `#up-next-btn`, `#cat-cards`, `#skill-search`, `.seg`, `#skill-list`, `#home-progress`, `#hero-mixed`, `#hero-clues`, `#hero-habits`, `#hero-parents`).

### 7.1 Header (`.home-head`)
- Height 56 px (48 px at short landscape). Background `--page`, 1 px bottom border `--line`.
- Left: brand mark (existing `.brand-mark` at 28 px) + "Peach Prep" in Poppins 800, 1.125rem `--navy-deep`, + "Grade 3 ELA" in Poppins 600, 0.875rem `--muted` (hidden < 360 px).
- Right: one soft text button, "Parent guide" (44 px tall, Poppins 700, 1rem, `--navy`, no border, underline on hover).
- Not sticky on the home.

### 7.2 Hero text (`.home-hero`)
- No background fill. Padding `--s5` 0 `--s4` on phones and `--s7` 0 `--s5` at ≥1024.
- h1 (`--fs-hero`), then a lede of one or two sentences (what the app helps a child learn, for a grown-up and child together), then on first visit a single line in `--fs-small` `--muted`: "Free. No login. Saved only in this browser."
- Returning visit: the h1 shrinks to `--fs-section` size and becomes a welcome line ("Welcome back"). The lede is hidden so the next-step panel rises.

### 7.3 Two-choice cards (first visit)
Both are `<article>`s with an h2 and **one** button each. Do not repeat the title as the button label.

| | Follow the Learning Path (primary) | Choose a Lesson (secondary) |
|---|---|---|
| Container | `--card`, 2 px border `--navy`, `--radius-lg`, `--shadow`, and a 6 px top band `--peach` (decorative) | `--card`, 1 px border `--line`, `--radius-lg`, `--shadow` |
| Eyebrow | "Recommended" in Poppins 700 14 px `--peach-deep`, preceded by a 8 px `--peach` dot | "Your choice" in the same style, `--muted` |
| Title | "Follow the Learning Path" | "Choose a Lesson" |
| Body | One sentence: a suggested route, not a test. Then a **3-row preview list**: an ordered list of three phase names (from `PP_PATH_PHASES[0..2].title`) with 24 px numbered discs (`--sel-tint` fill, `--navy` text), then "+ three more" in `--muted` | One sentence: pick a skill your child needs or what school is covering. Then a single line, "Search · Filter by 'On the test' · Five categories", in `--fs-small` |
| Action | `.btn-primary` full width < 640 px, auto width ≥ 640: "Start the Learning Path" (keeps `#choose-path`) | `.btn-soft` with a `--edge-control` border: "Browse lessons" (keeps `#choose-browse`) |
| Secondary link | text link "Preview the full path" → `#path` preview (44 px target) | none |
| Illustration | route SVG, top right, ≥ 640 px wide and ≥ 560 px tall only (§9) | none |
| Equal discoverability | same height in a row (`align-items:stretch`), same title size, action row aligned to the bottom (`margin-top:auto`) | |

Loading state: while `disabled`, the button shows "Loading lessons…" with `aria-busy="true"` on the card, using the disabled style (§8).

### 7.4 Returning-visit next-step panel (`.next-panel`)
One panel. It is the only primary action on the page.
- Container: `--card`, 2 px border `--navy`, `--radius-lg`, padding `--s5`, with a 6 px left band in `--leaf` for path mode or `--sky` for lessons mode (decorative; the eyebrow also names the mode).
- Layout: < 768 px stacked. ≥ 768 px a two-column grid `1fr auto`, with text left and the action right and vertically centred.
- Content, top to bottom:
  1. Eyebrow (14 px Poppins 700 `--peach-deep`): "Learning Path · Phase 1 of 6" **or** "Lessons".
  2. Title (`--fs-card`): the lesson title.
  3. Status line (`--fs-small`), only where saved state supports it. Path: `bookmark.step` maps to a step name, e.g. "Bookmarked at Practice Together". Lessons: `displayState` label, e.g. "Practising" or "Not started". Never "continue where you left off", and never imply that answers are restored.
  4. A path-only thin progress bar: 8 px tall, `--line-soft` track, `--navy` fill, `--radius` pill, with a text label beside it: "2 of 101 activities marked finished".
- Action: `.btn-primary`, min-height 52 px, "Open this lesson" (wording is the copy agent's call).
- Under the panel, an **"Other ways in" row** with two `.btn-soft` buttons, 48 px tall, side by side (stacked < 360 px): "Browse lessons" / "View the full path" (path mode) or "Follow the Learning Path" / "Find a skill" (lessons mode). These are never filled.

### 7.5 Routine strip (`.routine`)
- A heading at h2 level but card-title size: "How each lesson works".
- An `<ol>` of five items, laid out as `display:flex; flex-wrap:wrap; gap:8px 4px`. Each item is a 28 px numbered disc (`--navy` fill, white Poppins 800 14 px) followed by the step name (Poppins 700 15 px `--navy-deep`). Between items there is a 16 px chevron `›` in `--muted`, marked `aria-hidden`.
  - On phones it wraps to two or three lines of about 30 px each, roughly 110 px total. At ≥ 768 px it fits on one line.
- Under the list, an **exceptions note** as `<p>` in `--fs-small` with a 3 px left rule `--plum`: hands-on lessons (reading fluency, cursive) end in a grown-up Check instead of a test. Some lessons have no Try It Yourself step. Essays are scored by a grown-up with the scoring guide. The wording belongs to the copy agent. The visual job is one short paragraph, at most three lines at 390 px.
- A "When a grown-up joins in" line: four inline tags (14 px, `--sel-tint` fill, `--navy` text, pill, 32 px tall, not interactive): Listen · Watch · Check handwriting · Score writing.
- Not a carousel and no animation. At short landscape it is wrapped in `<details>` with the summary "How each lesson works" (48 px).

### 7.6 Support links row (`.support`)
- Five items: Parent guide · Standards · Everyday habits · Mixed practice and tests · Saving on this device. The last is an in-page `<details>` explaining local saving, not a page.
- Phone: a 2-column grid of buttons, 48 px tall, `.btn-soft` style with a left-aligned 20 px line icon (the existing ICON set) and Poppins 700 15 px. Tablet: wrapping row. Desktop: a vertical list in cols 9–12 beside the routine strip, each row 48 px with a bottom 1 px `--line`.
- Visual weight must stay below the next-step panel and the choice cards: no fill and no shadow.

### 7.7 Progress summary (`.progress-sum`, replaces the single paragraph in `#home-progress`)
Shown only when any progress exists. It is a `--card` with three **separate labelled rows**, so the distinctions stay visible:

| Row | Label (14 px Poppins 700 `--muted`) | Value (Poppins 800 1.25rem `--navy-deep`) | Extra |
|---|---|---|---|
| Skill checks passed | "Skill checks passed (on the test)" | "2 of 74" | 8 px bar, `--leaf` fill on `--line-soft` (4.38:1) |
| Review suggested | "Passed a while ago: review suggested" | "1" | none; row hidden when 0 |
| Learning Path (path mode only) | "Path activities marked finished" | "2 of 101" | footnote: "a bookmark, not a score" |
| Essays | "Essays: scored by a grown-up" | "Not counted above" | none |

Rows are a 2-column grid (label/value), each row min 44 px tall with a 1 px `--line-soft` divider. No rings for these totals.

### 7.8 Category cards (`#cat-cards`)
- One shape at all widths: a card with a **4 px left band** `var(--c)`, so the shape no longer changes between phone and desktop. Radius 16, padding 16, min-height 96 px at ≥ 640 px.
- Grid: 1 column < 640, 3 columns at 640–1023, 5 columns ≥ 1024.
- Content: name (Poppins 700 1.0625rem `--navy-deep`), a 56 px ring with a 14 px count "2/24", and the next line (15 px `--muted`, clamped to 2 lines with `-webkit-line-clamp:2`).
- Hover: border `var(--c)`, shadow raised (`0 2px 4px` + `0 10px 24px`, both at 0.10). No transform.

### 7.9 Search, filters and skill list
- `.skill-tools`: `display:flex; flex-wrap:wrap; gap:8px`. Search `flex:1 1 280px; width:auto`, 48 px tall, 1 px `--edge-control` border. `.seg{flex:0 1 auto; flex-wrap:wrap}`, buttons `flex:1 0 auto; white-space:nowrap; min-height:44px; padding:8px 16px; font-size:.9375rem`.
  - Result: one row at ≥ 640 px. At 320 px the segment wraps to two rows of 44 px, never 80 px pills.
- Sticky only at `(min-width:640px) and (min-height:600px)`, with a 1 px bottom `--line` when stuck.
- Skill rows: keep the existing `.skill-line` structure. Raise labels to 14 px. Replace `◐` with a 22 px plum-outlined disc that contains a half fill and the visible word "Started" (14 px) at ≥ 640 px. At < 640 px use the disc only, with the word carried by the existing aria-label.
- Empty result (`#skill-empty`): a card with a `--muted` 15 px message and a `.btn-soft` "Clear search and filters" (48 px).

---

## 8. States

Apply these to every interactive element on the home: buttons, choice cards' buttons, category cards, skill rows, segment buttons, support links, and details summaries.

| State | Treatment (colour is never the only signal) |
|---|---|
| **Default** | as specified per component; outlined controls have a 1 px `--edge-control` border |
| **Hover** (`@media (hover:hover)` only) | primary: `--navy-deep` fill. Soft: border becomes 2 px `--navy` (inset using box-shadow `inset 0 0 0 1px var(--navy)`, so there is no layout shift). Rows: `--sel-tint` background and title underline. Cursor pointer. |
| **Focus-visible** | `outline:3px solid var(--focus); outline-offset:3px;` on light surfaces (7.21–7.69:1). On any navy surface use `outline-color:var(--focus-on-dark)` (11.39:1). Never removed by `:focus{outline:none}` except the existing `[tabindex="-1"]` headings. Pill controls keep their `border-radius` on the outline. |
| **Active** | `transform:translateY(1px)`, which is removed under reduced motion |
| **Selected** (segment filters, `aria-pressed="true"`) | `--navy` fill, white text, **plus a leading "✓ "** (`::before`) so the state also reads in grayscale |
| **Current** (path row = next lesson, `aria-current="step"`) | `--sel-tint` background, 4 px left `--navy` band, and the visible tag "Next" (14 px, navy pill, white text) |
| **Expanded** (`details[open]`, phase groups, short-height routine) | summary shows the "▾" marker (existing pattern) and the `--line-soft` background on the summary, with a 1 px divider under it. Collapsed uses "▸". |
| **Completed / passed** | row gets `--right-tint` background and a 24 px `--right` disc with a white ✓, plus the word "Passed" or "Checked by a grown-up" (14 px `--right`). A path "Activities finished" checkbox uses `accent-color:var(--leaf)`, 22 px, and the row text gains a "Finished" tag. Completion never uses a strike-through. |
| **Review suggested** | 14 px plum-outlined pill with the word "Review", unchanged meaning |
| **Disabled** | `#ECE6DE` fill, `#6E6253` text (4.79:1), `cursor:not-allowed`, no hover, plus a visible reason next to it (e.g. "Loading lessons…") |
| **Storage unavailable** | the existing `.path-storage` notice, restyled: `--try-tint` fill, 4 px left `--try` band, 15 px text, placed directly under the next-step or choice area (not at the bottom) |

---

## 9. Touch targets

- Every interactive element is at least **44×44 px**. Primary actions are 52 px tall. Choice-card and support buttons are 48 px.
- Inline text links on the home (for example "Preview the full path") are `display:inline-flex; min-height:44px; align-items:center`.
- Adjacent targets have at least 8 px between them.
- The routine strip's grown-up tags are not interactive, so they are exempt. Give them no hover and no pointer cursor, so they do not look tappable.

---

## 10. Illustration: one small inline SVG, a "route" motif

**What it is:** a winding dashed route with two waypoints that ends at a peach. It shows that the Learning Path is a suggested route toward a goal. It draws no people, so it does not need to depict a child. **Where it goes:** only in the "Follow the Learning Path" choice card on a first visit, top-right of the card, beside the eyebrow and title.

```html
<svg class="route-art" viewBox="0 0 160 72" width="160" height="72" aria-hidden="true" focusable="false">
  <!-- route -->
  <path d="M10 58 C 42 58, 40 18, 78 18 S 112 56, 134 44"
        fill="none" stroke="#123A6B" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 9"/>
  <!-- start -->
  <circle cx="10" cy="58" r="6" fill="#2F7A4F"/>
  <!-- waypoint -->
  <circle cx="78" cy="18" r="6" fill="#FFFFFF" stroke="#123A6B" stroke-width="3"/>
  <!-- goal: the Peach Prep peach (same shapes as the favicon) -->
  <circle cx="146" cy="44" r="12" fill="#E8743B"/>
  <path d="M146 32c1.5-5 6-7.5 11-6.5-1 4.5-5 8-11 6.5z" fill="#3E8E5A"/>
</svg>
```

- CSS: `.route-art{float:right; margin:0 0 8px 12px; width:160px; height:auto;}`.
- **Hidden** with `@media (max-width:639px), (max-height:559px){ .route-art{display:none;} }`, so it never displaces content on phones or short screens. Between 640 and 899 px it shrinks to `width:120px`.
- It is not used on returning views or the catalogue. There is no other imagery: no hero picture and no decorative blobs.
- If a later iteration needs people (for example on the Parent guide), use flat line art of a grown-up and a Black child reading together, in `--navy` strokes with `--peach-tint` fills. That is out of scope for this home.

---

## 11. Motion

- No carousels, no autoplay and no auto-advancing content.
- Transitions are limited to `background-color, border-color, box-shadow` at 150 ms. The existing `@media (prefers-reduced-motion:reduce)` rule already disables transitions; also remove the `:active` translate there.
- Category-card scrolling already honours reduced motion (`behavior:"auto"`). Keep it.

---

## 12. ASCII wireframes

Legend: `[■ … ]` primary (navy filled) · `[ … ]` soft/outlined · `( … )` text link · `▸/▾` details · `─` divider. Heights in px are approximate. Copy is placeholder for the copy agent.

### 12.1 390×844: first visit
```
┌──────────────────────────────────────┐ 0
│ ● Peach Prep  Grade 3 ELA  (Parent guide)│ 56 header
├──────────────────────────────────────┤
│ Help your third grader                │
│ learn Georgia ELA skills              │ h1 26px
│ Short lessons you do together: read-  │
│ ing, writing, words and grammar.      │ lede 18px
│ Free · No login · Saved in this browser│ 15px muted
│                                       │ ~250
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │ ← peach top band
│ ┃ • Recommended                      ┃ │
│ ┃ Follow the Learning Path           ┃ │ 22px
│ ┃ A suggested order, not a test.     ┃ │
│ ┃ ① Stories and sentences            ┃ │
│ ┃ ② Information and new words        ┃ │
│ ┃ ③ Text structure and paragraphs    ┃ │
│ ┃   + three more                     ┃ │
│ ┃ [■   Start the Learning Path     ] ┃ │ 52, full width
│ ┃ (Preview the full path)            ┃ │ 44
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │ ~640
│ ┌───────────────────────────────────┐ │
│ │ Your choice                        │ │
│ │ Choose a Lesson                    │ │
│ │ Pick a skill your child needs.     │ │
│ │ [       Browse lessons           ] │ │ 48  ← visible at fold edge
│ └───────────────────────────────────┘ │ ~844 (fold)
│ How each lesson works                 │
│ ①Learn It › ②Watch Me › ③Practice     │
│ Together › ④Try It Yourself › ⑤Test   │
│ ┃ Hands-on lessons end with a grown-up │
│ ┃ check; essays are scored by you.     │
│ Grown-up: Listen · Watch · Handwriting · Score │
│ [Parent guide ] [Standards      ]     │ 2-col 48px
│ [Everyday habits] [Mixed practice]    │
│ ▸ Saving on this device               │
│ ─ footer ─                            │
└──────────────────────────────────────┘
```
On a first visit the catalogue is not on this screen. "Browse lessons" opens it. (IA agent: confirm whether `#choose` and `#browse` stay separate screens or the catalogue follows below.)

### 12.2 390×844: returning, path started
```
┌──────────────────────────────────────┐
│ ● Peach Prep  Grade 3 ELA  (Parent guide)│ 56
├──────────────────────────────────────┤
│ Welcome back                          │ 22px
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │ ← leaf left band
│ ┃ Learning Path · Phase 1 of 6       ┃ │
│ ┃ Characters and the story's lesson  ┃ │ 20px
│ ┃ Bookmarked at Practice Together    ┃ │ 15px
│ ┃ ▓▓░░░░░░░░░░  2 of 101 finished    ┃ │
│ ┃ [■      Open this lesson         ] ┃ │ 52
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │ ~330
│ [ View the full path ][ Browse lessons]│ 48
│                                       │
│ ┌ Progress on this device ───────────┐│
│ │ Skill checks passed      2 of 74 ▓░││
│ │ Review suggested               1   ││
│ │ Path activities finished  2 of 101 ││
│ │ Essays            scored by you    ││
│ └────────────────────────────────────┘│ ~620
│ ▸ How each lesson works               │ collapsed for returning visitors
│ [Parent guide ] [Standards      ]     │
│ [Everyday habits] [Mixed practice]    │ ~800
│ ▸ Saving on this device               │ (fold)
└──────────────────────────────────────┘
```

### 12.3 390×844: returning, lessons only (no path)
```
┌──────────────────────────────────────┐
│ ● Peach Prep  Grade 3 ELA  (Parent guide)│ 56
├──────────────────────────────────────┤
│ Welcome back                          │
│ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │ ← sky left band
│ ┃ Lessons · Reading                  ┃ │
│ ┃ D2 · Sequence: first, next, last   ┃ │
│ ┃ Next lesson without a passed check ┃ │ (only what state supports)
│ ┃ [■      Open this lesson         ] ┃ │
│ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │ ~290
│ [Follow the Learning Path][Find a skill]│ 48 soft
│ ┌ Progress on this device ───────────┐│
│ │ Skill checks passed      2 of 74   ││
│ │ Review suggested               1   ││
│ │ Essays            scored by you    ││
│ └────────────────────────────────────┘│ ~520
│ ┃Reading Foundations   (0/10) ›      │ category rows, 72px each
│ ┃Reading               (2/24) ›      │
│ ┃Writing               (0/10) ›      │
│ ┃Vocabulary            (0/10) ›      │
│ ┃Grammar and Mechanics (0/45) ›      │ ~880 (fold)
│ [ Find a skill: pronoun, B3 …     ]   │
│ [✓ All][On the test][Not passed yet]  │ one row at 390, 44px
│ Reading Foundations …  (catalogue)    │
│ ▸ How each lesson works · support links│ after catalogue intro? → IA agent
└──────────────────────────────────────┘
```

### 12.4 1366×768: first visit
```
┌────────────────────────────────────────────────────────────────────────────┐
│      ● Peach Prep  Grade 3 ELA                               (Parent guide) │ 56
├────────────────────────────────────────────────────────────────────────────┤
│      Help your third grader learn Georgia ELA skills                        │ h1 36px, cols 1–8
│      Short lessons you do together: reading, writing, words and grammar.    │
│      Free · No login · Saved only in this browser                           │ ~200
│      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ ┌──────────────────────────────┐ │
│      ┃ • Recommended            ~~•~~~🍑   ┃ │ Your choice                  │ │ 1.15fr | 1fr
│      ┃ Follow the Learning Path            ┃ │ Choose a Lesson              │ │
│      ┃ A suggested order, not a test.      ┃ │ Pick a skill your child needs│ │
│      ┃ ① Stories and sentences             ┃ │ or match what school covers. │ │
│      ┃ ② Information and new words         ┃ │ Search · On the test filter  │ │
│      ┃ ③ Text structure and paragraphs     ┃ │ · Five categories            │ │
│      ┃   + three more                      ┃ │                              │ │
│      ┃ [■ Start the Learning Path ] (Preview)┃ │ [ Browse lessons ]          │ │ actions bottom-aligned
│      ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ └──────────────────────────────┘ │ ~560
│      How each lesson works                         │ Parent help             │ │ cols 1–8 | 9–12
│      ①Learn It › ②Watch Me › ③Practice Together ›  │ Parent guide          › │ │
│      ④Try It Yourself › ⑤Test Your Knowledge       │ Standards             › │ │
│      ┃ Hands-on lessons end with a grown-up check… │ Everyday habits       › │ │ ~768 (fold)
│      Grown-up: Listen · Watch · Handwriting · Score│ Mixed practice, tests › │ │
│                                                    │ ▸ Saving on this device │ │
└────────────────────────────────────────────────────────────────────────────┘
```

### 12.5 1366×768: returning, path started
```
┌────────────────────────────────────────────────────────────────────────────┐
│      ● Peach Prep  Grade 3 ELA                               (Parent guide) │ 56
├────────────────────────────────────────────────────────────────────────────┤
│      Welcome back                                                           │ 24px
│      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│      ┃ Learning Path · Phase 1 of 6                                        ┃ │ 1fr | auto
│      ┃ Characters and the story's lesson               [■ Open this lesson ]┃ │
│      ┃ Bookmarked at Practice Together                                     ┃ │
│      ┃ ▓▓░░░░░░░░░░░░░░░░░  2 of 101 activities marked finished           ┃ │
│      ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │ ~300
│      [ View the full path ]  [ Browse lessons ]                             │ 48
│      ┌ Progress on this device ──────────────────┐ │ Parent help             │ │ cols 1–8 | 9–12
│      │ Skill checks passed (on the test)  2 of 74│ │ Parent guide          › │ │
│      │ Review suggested                       1  │ │ Standards             › │ │
│      │ Path activities finished         2 of 101 │ │ Everyday habits       › │ │
│      │ Essays                  scored by a grown-up│ │ Mixed practice, tests ›│ │
│      └───────────────────────────────────────────┘ │ ▸ Saving on this device │ │ ~640
│      ▸ How each lesson works                                                │ ~700
└────────────────────────────────────────────────────────────────────────────┘
```

### 12.6 1366×768: returning, lessons only
```
┌────────────────────────────────────────────────────────────────────────────┐
│      ● Peach Prep  Grade 3 ELA                               (Parent guide) │ 56
├────────────────────────────────────────────────────────────────────────────┤
│      Welcome back                                                           │
│      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│      ┃ Lessons · Reading                                                   ┃ │
│      ┃ D2 · Sequence: first, next, last                [■ Open this lesson ]┃ │
│      ┃ Next lesson in Reading without a passed check                       ┃ │
│      ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │ ~260
│      [ Follow the Learning Path ]  [ Parent guide ]   Progress: 2 of 74 checks passed · 1 review │ one line summary
│      ┌──────────┐┌──────────┐┌──────────┐┌──────────┐┌──────────┐           │
│      ┃Reading   ┃│Reading   ┃│Writing   ┃│Vocabulary┃│Grammar & ┃           │ 5 cards, 4px left band
│      ┃Foundations│ (2/24)   ││ (0/10)   ││ (0/10)   ││Mechanics │           │
│      ┃ (0/10)   ┃│Next: D2… ││Next: J1… ││Next: N1… ││ (0/45)   │           │
│      └──────────┘└──────────┘└──────────┘└──────────┘└──────────┘           │ ~470
│      [ Find a skill: pronoun, B3, 3.T.T.1           ] [✓ All][On the test][Not passed yet] │ 48, one row
│      ┃ Reading Foundations                                                  │
│      A. Phonics and word parts   B. Reading words smoothly   C. Cursive     │ 3-col catalogue
│      A1 Letters that can …       B1 Sight words …            C1 …           │ ~768 (fold)
└────────────────────────────────────────────────────────────────────────────┘
```
At 1366 the full progress card (§7.7) moves below the catalogue intro or into an expandable "Progress details". The one-line summary keeps it visible without pushing the catalogue below the fold. (IA agent decides.)

### 12.7 Short landscape 844×390 (applies to all three states)
- Header 48 px, then an h1 at 22 px with one lede line.
- First visit: the two choice cards sit side by side at ≈ 390 px each with 16 px padding and the preview list hidden (`.path-preview{display:none}` at max-height 500). Both action buttons sit at y ≤ 360.
- Returning: the next-step panel uses the 1fr | auto layout, so the action sits at y ≈ 170.
- Routine collapsed, no illustration, search not sticky.

---

## 13. Implementation checklist (visual)

1. Add the tokens from §3. Delete the `.hero .btn-primary` peach rule. Stop using the gradient `.hero` on `#screen-home`, or restyle it to the light header in §7.1. Keep the `#home-title` id and `tabindex`.
2. Align `.bar`, `.path-wrap`, `.wrap` and the home container to `--maxw` and `--gutter`.
3. Raise every label on the home to 14 px or more (§5 list).
4. Fix `.skill-tools`: search `flex:1 1 280px; width:auto`, and `.seg button{white-space:nowrap}`. Make it sticky only at `min-height:600px`.
5. Give inputs, outlined buttons and segments a `--edge-control` border. Use the white focus ring on navy surfaces.
6. Build the components in §7 with the states in §8. Verify 44 px targets with a script, not by eye.
7. Add the route SVG (§10) with its hide rules.
8. Re-shoot the AFTER set with the same script and seed (`before_shots.py`, changing only the output prefix) for a like-for-like comparison.

## 14. Notes for other agents

- **IA / copy:** "Continue where you left off" is supported only for path mode. `pp.path.v1.bookmark` stores `{key, step}` and is set on navigation in path mode, so "Bookmarked at <step>" is truthful. In lessons mode the only saved signals are `pp.progress.v1` step flags and `_ui.lastCat`. `buildUpNext` picks the *first lesson without a pass* in the last category opened, which is not necessarily the last lesson opened. Label it that way.
- **QA:** the current build already fails 3:1 for input boundaries (1.35:1) and for focus on the navy hero (1.48:1). The redesign should be tested against those pairs.
- **Fonts:** the site uses Poppins and Nunito, not Inter.
