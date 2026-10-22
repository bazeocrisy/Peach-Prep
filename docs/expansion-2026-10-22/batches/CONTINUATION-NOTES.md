# Continuation notes for later batches

- 3.T.SS.2.b (T-SS.js): the glossary defines a metaphor as "says one thing is another". Align it with 3.T.SS.2.a, so that it compares two different kinds of things, without like or as. This was found during the B1 re-review on 2026-10-22.
- **Component split (text features; digital, audio and spoken features).** This is deferred until the engine lands. Before either new lesson is written, settle two boundaries:
  - The line between the new features lesson and what stays in 3.T.C.1.b.
  - The structure half of 3.T.SS.1.a should focus on telling structures apart, because the TS-* lessons already teach each structure separately.
  
  If TC1b P6 is trimmed, it needs a new id. Source: B2-review-SC-2.md.
- **readability.py does not fail on flagged passages.** It exits 0 even when a passage is above FK 4.5, so it cannot block a batch. For now the lead checks its output by hand at every commit. Suggested fix: add a --strict exit code without changing the default output (B2-review-TS-1).
- **Lead decisions on shared texts (B2):**
  - Bike tube patching stays in 3.T.T.2.b.
  - The fire station stays in 3.T.T.2.a.
  - Garrett Morgan stays in TS-CE.
  - TS-SEQ C14, TS-DESC p3, TS-CC p5 and SK-TT2b-C05 move to other topics.
- **Parallel authoring blind spot:** each author's leak scan cannot see texts other authors are writing at the same time. Run a cross-lesson n-gram and topic scan over the whole batch before review.
