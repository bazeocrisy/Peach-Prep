# Verify L-GUM5
Prior findings: 24 checked, 24 confirmed fixed, 0 not fixed
New problems: MUST 0  SHOULD 2

Method: I read reviews A and B and the fixes log, and checked every MUST, SHOULD and NIT against the current file. One NIT was declined: B's GUM5-4 scope note, where pronoun agreement is left out of an Introduce row. B asked for no change there, so the reason holds, and I count it as resolved. I solved every changed or new Practice and Test item cold from `git diff 4e7b23e` before reading its key. That covers GUM5-1 P3, P4, T1, T3, T4 and T5; GUM5-2 T2; GUM5-3 P2, P5, T2 and T5; GUM5-4 T5; GUM5-5 P5, T2 and the new T4 and T5; and GUM5-7 P1, T1 and T4. Every key matches my answer, and each item has only one defensible answer. The hottext indexes are still correct after the line rewrites (GUM5-1 P3 = [2], T3 = [3]). The array `stem` in SK-GUM5-5-T5 is supported (`js/engine/player.js` line 123). The GUM5-5 test is still 7 points. The GUM5-6 items never mark a missing comma after a short phrase as wrong, so they agree with the new "usually" wording. No GUM5-7 title capitalizes at or for in the middle. `node verification/check-content.js --all` gives PASS (0 failures, 0 warnings).

## Not fixed
(none)

## New problems
- [SK-GUM5-1-T5 vs GUM5-1 Teach point 2] SHOULD. Teach now says short forms of days, months and streets go "in addresses, dates and schedules, not in ordinary sentences." The keyed correct sentence "We mailed the letter to 14 Pine St." is an ordinary sentence with a street short form in it, and the distractor "Our new address is 9 Maple rd." is the same kind of sentence. A child who applies Teach literally could reject the key. The item is still answerable, because the other three choices have clear errors, so this is not a MUST. Fix: either make the key a line on its own ("Address: 14 Pine St."), or widen Teach point 2: "...in addresses (even inside a sentence), dates and schedules..."
- [SK-GUM5-2-T2] SHOULD. The new script format labels speakers with a colon ("Mom: ... Leah: ..."), and one slot option is "Leah:". In this format, "Leah:" looks exactly like a correct speaker label, so the distractor now confuses a child instead of testing a comma rule. Fix: replace the "Leah:" option with "Leah." or "Leah;". Or drop the labels and put the speaker information only in the prompt.

## NIT
- [SK-GUM5-5-T4 slot 1] "unless" is never taught (point 1 lists because, when, after, before, until, if, although). Fix: use "before" or "because" instead.
- [SK-GUM5-5-T4 clue] "Is the second idea about time?" points to the only time word among the options (after). This is a test clue, shown only after submission, so the impact is small. Fix: "Read the sentence with each word in each blank. Which words make the ideas fit together?"

## Verdict: PASS (no MUST left)
