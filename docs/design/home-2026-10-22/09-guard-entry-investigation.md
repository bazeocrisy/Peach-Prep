# 09 · Why plain `guard.py` stops at check 9.1

Independent investigation, 2026-10-22. Read-only for the repository. Nothing in `verification/` or the app was changed. Logs and the two small helper scripts are in `/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/guardinv/`.

## Verdict

**This is a test-entry assumption. It is not an application regression.**

`guard.py` was written before the Learning Path existed. It expects a fresh visitor to land on the browse home (`#screen-home`, with a visible `#skill-search`). Since commit 9c762a8 ("Add optional parent learning path…", merged as PR #3), a visitor with no `pp.path.v1` key gets the first-visit choice screen (`#screen-choose`) by design. `js/app.js` sends a visitor with no saved mode to `PP_PATH.showChoice()`; the line is `if (!browse && !window.PP_PATH.mode()) { window.PP_PATH.showChoice(); return; }`. The search box is in the DOM but hidden, so Playwright waits 30 s and throws.

The report is true for both builds. The redesign did not cause it, and it adds nothing to it.

## What was tested

| Build | Commit | Served on | Note |
|---|---|---|---|
| main | 9a5b297 | 8631 | scratch worktree |
| candidate | **1aa61c5** | 8632 | scratch worktree. Its app and `verification/` code are identical to 595ef01 (`git diff --quiet 595ef01 1aa61c5 -- js css index.html verification assets` exits with 0). |
| before the Learning Path | 799b393 | 8633 | scratch worktree. This is the parent of 9c762a8, the last commit before path code. `guard.py` has the same 110 checks there. |

All three worktrees were temporary and have been removed. All three servers were stopped by PID. The candidate was not served from `/home/claude/pp-home`.

## 1. Plain run with fresh storage

Command: `python3 verification/guard.py http://localhost:<port>/`, unmodified. Every run used a new Playwright browser, so storage started empty.

| Build | Result | Exit code |
|---|---|---|
| main 9a5b297 | Uncaught `playwright TimeoutError: Page.fill: Timeout 30000ms exceeded` at `guard.py` line 241, `pg.fill("#skill-search", "pronoun")`. The locator resolved to the input, then failed with "element is not visible" about 60 times. | **1** |
| candidate 1aa61c5 | Same exception, same line. The input resolved (new placeholder "Try: pronoun, D3, 3.T.T.1") and was "not visible". | **1** |
| pre-path 799b393 | `110 passed, 0 failed`, including `PASS 9.1 search narrows the list to matching skills` | **0** |

Detail: the failure is in the setup line just before `ok("9.1 …")`, so check 9.1 is never recorded. `guard.py` prints all its results only at the end. When it crashes it prints only the traceback: the results of sections 1 to 8 are lost, and the exit code 1 comes from Python's uncaught exception, not from guard's own failure count. Logs: `plain-main.log`, `plain-cand.log`, `plain-pre.log`. (`plain-pre-attempt1-timeout900.log` is a first attempt that my own 900 s wrapper killed while three runs shared the CPU. It is not a result.)

**How guard starts.** It opens one page (1366×900), blocks font requests, calls `goto(BASE)` and waits 600 ms. It does **not** seed storage. Its later pages (lines 528 and 1033) do not seed it either. Section 9 starts with `localStorage.clear(); goto(BASE)`, which on main and the candidate makes the choice screen come back. Guard assumes the browse home at this point.

**Entry probe.** `probe_entry.py` copies guard's startup and its section 9 re-entry. Results are in `probe.log`:

| Build | Fresh startup | After `localStorage.clear()` + `goto` | `#skill-search` visible |
|---|---|---|---|
| main | `screen-choose` | `screen-choose` | no |
| candidate | `screen-choose` | `screen-choose` | no |
| pre-path | `screen-home` (no `PP_PATH`) | `screen-home` | yes |
| main, seeded | `screen-home` | `screen-home` (the init script seeds again) | yes |
| candidate, seeded | `screen-home` | `screen-home` | yes |

Section 1 does not fail plainly, because its checks count DOM nodes (`#skill-list .skill-line` and similar). Those nodes exist even while `#screen-home` is hidden. The first check that needs a *visible* browse home is the `fill` in section 9.

## 2. When the assumption broke

- 799b393, the commit just before the Learning Path code, passes plainly: 110 of 110, exit code 0.
- 9c762a8 brought in `js/path.js` and the routing rule above. It did not change `guard.py` (`git diff --stat 9c762a8^ 9c762a8 -- verification/guard.py` is empty). It added `path.py`, `path-a11y.py`, `path-headers.py` and `path-contrast.js` instead.
- The project already recorded this when the path was added. `docs/audits/LEARNING-PATH-IMPLEMENTATION-REVIEW.md` (line 54, at 9c762a8) says the legacy suite ran with an adapter that supplies "a stored individual-lessons choice for the legacy suite. New-visitor/path behavior is covered separately by the focused suite."
- 4a1e036 (PR #4) made this a script: `verification/launch-ux-regression.py`. Its docstring says: "guard uses the documented browse preference fixture because its original home journey predates mode choice."
- I did not run 3770cc9 (pp-003-audit) or 66e536b (the first parent of the PR #3 merge). Both are older than 799b393 and contain no path code, so 799b393 is the tighter bound.

So the plain command has failed on every commit since 9c762a8. That is by design, and it was documented at the time.

## 3. The seeded run passes on both builds

`launch-ux-regression.py` patches `Browser.new_page`. On every new page it adds this init script:

```js
try { if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true})); } catch(e) {}
```

An init script runs before the app on every document load. So the seed comes back after each of guard's `localStorage.clear(); goto(...)` resets, and it never overwrites a value a check has set itself. The script also swaps in a packaged Chromium at `/workspace/scratch/…/uxa-browser/chromium`, runs its own server on port 8368 and writes `guard-results.json` into `docs/audits/evidence/`. I am not allowed to write there, so `seeded_guard.py` (in the scratchpad) applies **only the same init script** to the unmodified `guard.py`. It uses the default Playwright Chromium and the servers above.

| Build | Result | Exit code | Time |
|---|---|---|---|
| main 9a5b297 | `110 passed, 0 failed`; `PASS 9.1` | **0** | 1387 s |
| candidate 1aa61c5 | `110 passed, 0 failed`; `PASS 9.1` | **0** | 1394 s |

The candidate and main have identical check names. The pre-path run has the same 110 names. The only difference is the wording of 13.4, which PR #4 updated ("4 of 5 … 6-point" became "5 of 6 … 7-point"). No assertion was skipped or weakened. (`seeded-*-attempt1-killed1500.log` are runs my own 1500 s wrapper killed. They are not results.)

For context, `path.py` also passed unmodified on both builds with fresh storage: **148 passed, 0 failed, exit code 0** (`path-main.log`, `path-cand.log`).

## 4. Recommended minimal fix (not implemented)

1. **Seed browse mode inside `guard.py` itself**, so the plain command works again and every assertion stays the same. Add a small helper near the top:
   ```python
   BROWSE_SEED = "try { if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true})); } catch(e) {}"
   def newpage(b, **kw):
       q = b.new_page(**kw); q.add_init_script(BROWSE_SEED); return q
   ```
   Then use it at all three `b.new_page(...)` calls (lines 40, 528 and 1033). The change must cover all three. If only the first page were seeded, the phone sweep and the section 16 pages would run in a different mode from the one the passing fixture runs. I did not test that variant. The script is identical to the fixture that has now passed 110 of 110 on main and the candidate. Add one line to the docstring saying that guard tests browse mode on purpose and that first-visit behaviour lives in its own suite. After that, `launch-ux-regression.py guard` still works: its seed only fills a missing key, and guard will already have set it.
2. **Optional hardening**, in the same spirit: wrap guard's body so that an uncaught exception still prints the results gathered so far before exiting with 1. Today a crash hides how far the run got.
3. **Add a separate first-visit suite** (for example `verification/first-visit.py`) that never seeds storage and covers the gaps in section 5. Do not move this into `guard.py`; guard should stay in browse mode.

## 5. First-visit behaviours with no automated coverage today

What exists today: `path.py` asserts that a fresh visitor sees `#screen-choose` with the title focused; that the controls are at least 44 px tall with no overflow; the intro, preview and Start flow; and that the malformed, wrong-types, blocked, quota and legacy fixtures reach a usable choice screen and path. It runs at 320, 390, 768 and 1366 widths. `path-a11y.py` runs axe on the choice screen, but only if `AXE_PATH` is supplied, so it is not part of any default run. The items below are **not asserted anywhere**: not in `path.py`, `path-a11y.py`, `path-headers.py`, `guard.py`, `launch-ux-regression.py`, `ux-release-review.py`, `writing-recovery.py` or `skills-recovery.py`.

**Missing on both main and the candidate**

1. **"Choose a lesson" taken straight from the first visit.** Clicking `#choose-browse` from a truly fresh state should land on `#screen-home` with a visible list and search, save `pp.path.v1` as `{mode:'browse'}` with `introduced` still false, and land on the browse home again after a reload. `path.py` clicks `#choose-browse` only after the path has been started (`introduced:true`). `writing-recovery.py` clicks it in passing and asserts neither where it lands nor what it saves.
2. **No write before a choice.** A fresh load and a reload before choosing write no `pp.path.v1` (or any other key), and the reload shows the choice screen again.
3. **Loading state.** `#choose-path` and `#choose-browse` start disabled with "Loading lessons…" and become enabled once the sets have loaded.
4. **Deep links with fresh storage.** `#skill/<code>`, `#parents`, `#mixed`, `#path`, `#choose` and an unknown hash, each opened without `pp.path.v1`. Guard's deep-link checks run only in browse mode once seeded. `path.py` checks `#no-such-page` only after a mode is saved.
5. **Choice screen at the other brief viewports.** 844×390 (phone, landscape), 1024×768 and 1920×1080 are not covered. `path.py` uses only 320, 390, 768 and 1366.
6. **Blocked or quota storage on the choice screen itself.** `path.py` asserts the "only for this visit" notice on the *path* screen only, not the `.path-storage` notice on `#screen-choose`.
7. **Keyboard order on the choice screen.** Tab order from the focused title to the two choices, and Enter or Space on each, are not covered. Only the focused title and the button sizes are asserted.

**Missing on the candidate only (behaviour new in the redesign)**

8. **Welcome-back panel (`#choose-welcome`, state B: saved work but no mode).** None of it is asserted. That includes:
   - it is hidden for a truly fresh visitor and shown for the legacy fixture;
   - the count wording ("one lesson", number words below ten, "one essay", "lessons and essays");
   - the order: in progress, then saved short writing (`pp.skwrite.*`), then essays, then passed;
   - at most three links, then "and … more in the lesson list.";
   - an in-progress lesson opens at its first open step, while a passed lesson opens at Teach, never at the check;
   - an essay link opens the saved draft;
   - the aria-label text;
   - the panel writes nothing to storage;
   - malformed `pp.progress.v1` still renders it without errors.

   `path.py`'s legacy case checks only that the choice screen is visible and the data is preserved.
9. **Choice-screen copy and state:**
   - the button labels "Start the Learning Path" and "Choose a lesson";
   - "Back to the Learning Path" once `introduced` is true;
   - `#choose-first` shows the first path lesson ("D1 · Story elements");
   - five category chips in `#choice-chips`;
   - `#choice-foot` ("Your progress stays") is hidden when storage is unavailable;
   - the shared routine block (`[data-shared=choose]`) is present.
10. **First open of the path before Start.** The next-step card (`#path-current`) and the "See the whole path / Switch learning mode" row are hidden while `introduced` is false, so the intro's Start button is the only start action. `path.py` checks that the intro is visible, but not that these are hidden.

(Not first-visit, but also uncovered, next to these: the new header **Browse lessons** button (`#path-browse`) and the `#browse` route, which should open the list without changing the saved path mode.)
