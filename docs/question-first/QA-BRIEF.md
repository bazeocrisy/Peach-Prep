# QA brief: question-first experience (one page)

Branch `feature/question-first`. Static site, no build. You do not need the design reasoning: this page is the contract. Read `DESIGN.md` only if a check below is unclear. Report each item as PASS, FAIL (with steps and a screenshot) or NOT RUN (with why). Do not change code or tests; do not weaken a test to make it pass.

## Setup
`node verification/serve.js . 8350` then open `http://127.0.0.1:8350/`. Browser suites need `CHROMIUM_PATH` (and `AXE_PATH` for axe). Run on a frozen copy of the tree, not a tree others are editing. Never use a real child's name or scores in anything you create.

## Automated suites (run all, report counts)
`node verification/check-content.js --all` · `check-writing.js` · `check-instructional-copy.js` · `python3 verification/readability.py` · `path.py` · `path-a11y.py` · `path-headers.py` · `skills-recovery.py` · `writing-recovery.py` · `guard.py` · `first-visit.py` · `practice-own.py` · `review.py` · `versioning.py` · `qf.py <base> <outdir>` · `node verification/teach-leaks.js --check`. Known baseline failures (also fail on the untouched base): `path.py` 9 (content count, finish message), `versioning.py` N.1 (version record). Anything else failing is a regression.

## Manual and scripted matrix
| Area | What to check |
|---|---|
| Opening | From the skill list, Learning Path, a standard page, `#practice/<key>` and `#practice/<code>`: the first (or saved) question opens at once, no teaching screen first. A skill with no core practice opens its five-step page. A bad `#practice/x` shows recovery, not a blank page. |
| Answering | Check Answer disabled until answered; wrong gives "Not quite" with no explanation; two wrong checks lock Check Answer until Teach Me is opened; right gives the explanation. Skip for now, Next question, Previous. |
| Teach Me | Opens at `.../try/teach`; focus on its heading; one card per press; hints only inside it; the last card is labeled "The answer"; a step that names the answer says so on the button before it is pressed and marks the question answer shown; Back to My Question restores the same question, selected answer, feedback and place. Teach Me before answering, after a wrong answer, after the reveal. Escape closes it. |
| Honest help | After Teach Me or the answer, a right answer never shows "Right on the first try". A fresh question (offered only after help or a wrong try) is a separate extra; the fifteen are not recounted. |
| History | Browser Back from Teach Me returns to the question; Forward reopens; reload on `/teach` reopens it; direct `#play/<set>/try/teach` works; a check never has Teach Me. |
| Sessions | Five questions then "Set N finished" with Next five questions and a named way back; stop and reopen resumes (set, question, unchecked answer); all fifteen done shows the finished screen with the skill check. Practice never sets a pass. |
| Viewports | 320x568, 390x844, 844x390, 768x1024, 1024x768, 1366x768, 1920x1080: question, passage tab (phones), feedback, Teach Me (open, with a hint, at the answer), session end. No sideways scroll; every control at least 44px; header leaves room; long passages scroll in their own pane. View the screenshots yourself (`qf.py` writes them to `<outdir>/screens`). |
| Storage | Blocked (`localStorage` throws), full (`setItem` throws QuotaExceededError), malformed `pp.practice.v1` (bad JSON, an array, bad fields, `tm:"lots"`): the page works for the visit, shows the honest notice, valid records are kept, nothing else is cleared. |
| Old data | Seed `pp.progress.v1`, `pp.path.v1`, `pp.task.*`, `pp.skwrite.*` and a `pp.practice.v1` written before this build (no `tm`, `tp`, `sk`, `f1`): every key stays byte-identical until the child acts; old statuses mean what they meant. |
| Keyboard | Tab order on a question: answer area, Check Answer, Teach Me, Next; Enter/Space on Teach Me, a hint, a step and Back to My Question; focus lands on the Teach Me heading, then on the Teach Me button on return; return is announced ("Back at your question"). Standard-code link opens `#std/<code>`; browser Back returns. Search a code (3.T.RA.1.b, 3-5.T.T.1) and open the result with Enter. |
| Accessibility | axe (WCAG 2 A/AA with colour contrast) on the question, Teach Me and the session end at 390 and 1366; one h1; live regions; no unnamed buttons; state is never colour alone. Check with a real screen reader if you can (not yet done). |
| Content | `teach-leaks.json` lists items whose early steps name the answer (the allowlist may only shrink). Spot check ten core items across lessons: hints never state the answer; the Answer card matches the key; written items say "Other answers can also be right". |
| Public site | No child's name, score or Lexile anywhere; no "Build 5.x" label; counts below ten as words in instructional prose; GaDOE link text says not graded, nothing carries over, no endorsement. |

## Out of scope for this QA
Content correctness of lessons still awaiting independent review (see `COVERAGE-LEDGER.md`), merge strategy (`DEPENDENCIES.md`).
