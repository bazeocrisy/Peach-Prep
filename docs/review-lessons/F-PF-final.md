# Final verify F-PF (round 3)
Diff checked: `git diff bd9ab92 -- js/data/lessons/F-PF.js` (21 changed lines, all clue, why or prompt text; no keys, choices, passages or refs changed).
MUST: 0  SHOULD: 0  NIT: 1

## Prior findings (F-PF-verify.md, fixes Round 2)
- SK-FF1a-P2 (MUST): fixed. The clue no longer has a letter test; it names the strategy only and does not single out said.
- SK-FP4a-P7 (MUST): fixed. The clue no longer mentions ea.
- SK-FP4a-T6 (SHOULD): fixed as specified (no longer names face/dance).
- SK-FF1a-T1, P6, T5 (NITs): all fixed as specified. The T5 prompt and clue no longer match P7.
- Self-audit clue rewrites (4b-P7, 4b-T6, 4c-P2, P3, T2, T3, T5, 1a-P1, T2, T3, T4, 1d-P2, T2, T5): each is now strategy only. None names or describes a single choice.
- There is no Round 3 section in F-PF-fixes.md.

## Changed items solved cold
4a-P7 bread, 4a-T6 fence, 4b-P7 candle, 4b-T6 pebble, 4c-P2 making, 4c-P3 stopped, 4c-T2 hopped/napping, 4c-T3 tried, 4c-T5 refill, 1a-P1 because, 1a-P2 said, 1a-P6 saw, 1a-T1 again, 1a-T2 does, 1a-T3 busy/build, 1a-T4 Where, 1a-T5 "Please turn of the lamp.", 1d-P2 pan, 1d-T2 hose, 1d-T5 fish. Every key matches. Each has one defensible answer. 1a-T5's new prompt ("In which sentence is one word wrong?") still has exactly one sentence with a wrong word; the other three are correct. The P6 why's added claim is true. No Practice clue singles out its key. No quotes or references changed, and the p1/p2 refs are unchanged.

## Cross-item pass (all five Test sections)
- 4a T1-T6, 4b T1-T6, 4c T1-T5, 1a T1-T5 and 1d T1-T5 were checked. No Test prompt, stem or choice gives away another Test item's answer. 4b-T3's "ple in apple" and "ba in bacon" only show the rules that T4 and T6 test; they do not show those items' answers. 1d-T3 offers "coat" as a choice, but T4's answer turns on goat, so it gives nothing away.

## Checker
`node verification/check-content.js --all`: PASS, 0 failures and 9 warnings. None of the warnings are in F-PF.js.

## NIT
- [SK-FP4a-T6] The new clue ("how the s sound is spelled ... and what keeps a c soft") still steers to fence: it implies a c with an e after it. This is acceptable, because Test clues show only after submission. Optional: drop "and what keeps a c soft".

Verdict: PASS
