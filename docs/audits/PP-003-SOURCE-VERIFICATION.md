# PP-003 Source Verification: official GaDOE sources vs. what Peach Prep says

- **Audit date:** 2026-10-20. Every "checked" date below is 2026-10-20.
- **Scope:** Peach Prep v2.1.0 (main at 66e536b), the live build. Files read: `js/data/site.js`, `js/data/standards.js`, `js/data/alds.js`, `js/data/catalog.js`, `js/parents.js`, `js/engine/items.js` (item types only), `index.html`, `README.md`, `docs/SPEC.md`, `verification/gen-standards.py`.
- **Method:** I compared the owner's uploaded GaDOE PDFs (text pulled with `pdftotext -layout`; page 1 of the blueprint also checked as an image) against the site. I then tried to confirm each source on an official GaDOE domain using WebSearch and WebFetch.

## How much could be checked online (read this first)

Most official GaDOE documents could **not** be opened from this environment. That limits what this audit can call "verified current".

| Host | What happened | Effect |
|---|---|---|
| `lor2.gadoe.org` (where GaDOE now hosts the Milestones PDFs, and where all five PDF links in `site.js` point) | WebFetch refused every URL with **ROBOTS_DISALLOWED**. Per the brief, I did not try to get around it. | None of the five PDF links could be checked. No online copy of the blueprint, ALDs, rubric, checklist or sampler could be read. |
| `gadoe.org` (new site) and `inspire.gadoe.org` | The pages load their content with JavaScript, so the fetch returned only page titles and metadata. | GaDOE's document listings could not be read. |
| `www.georgiastandards.org` | **302 redirect** to `https://gadoe.org/georgiastandards-sunset/` ("GeorgiaStandards.org Sunset"). The old standards PDF URLs no longer serve the documents. | The official standards text could not be retrieved. |
| `case.georgiastandards.org` (CASE API), `cms.gadoe.org` (WordPress API) | The permission request timed out. I did not retry. | Not used. |
| `curl` from the sandbox | The egress proxy blocks all GaDOE hosts (403 CONNECT). | This is a limit of this environment, not a problem with the site. |
| `www.gaexperienceonline.com` | **Fetched successfully.** | Live. |
| `georgiainsights.gadoe.org`, `community.gadoe.org` (event pages), one `inspire.gadoe.org` PDF | **Fetched successfully.** | Used for supporting evidence (cited below). |

So the owner's uploaded PDFs are the main evidence for what each document says. Where a source is marked UNVERIFIED, the reason is that its official copy could not be opened. It does not mean I found anything wrong with it.

---

## 1. Summary table

| # | Source (official name) | Date printed on owner's copy | Effective year | Official URL | Grade | Checked | Status | Applies to 2026-27? |
|---|---|---|---|---|---|---|---|---|
| a | *Georgia Milestones Assessment System, English Language Arts Grade 3, Assessment Blueprint* | August 2025 (PDF built 2025-08-01 from "GM_ELA_Blueprint_Grade 3_7.31.2025") | Not printed; first used for 2025-26 (the first year of the revised ELA standards) | https://lor2.gadoe.org/gadoe/file/4feebd77-4a21-4788-a3ba-b6f50a71c876/1/GM_Gr3_ELA_Blueprint.pdf | 3 | 2026-10-20 | **UNVERIFIED**. Robots-blocked. Search engines index this exact URL with the title "Georgia Milestones Assessment System English Language Arts Grade 3". The Grade 4 and Grade 8 blueprints are in the same folder. No newer Grade 3 ELA blueprint turned up in any search. | Probably. Nothing newer was found, but GaDOE's listing could not be read. |
| b | *DRAFT Achievement Level Descriptors, Grade 3 English Language Arts* | October 2025, marked **DRAFT** | Printed: "EFFECTIVE 2025-2026 SCHOOL YEAR" | https://lor2.gadoe.org/gadoe/file/0398b5b8-bcad-46a5-af4c-643df515341c/1/GM_ALDs_Gr3_ELA.pdf | 3 | 2026-10-20 | **UNVERIFIED**. Robots-blocked. The document itself says the draft ALDs "are subject to revisions during the standard setting process that occurs after the first administration of a new assessment." GaDOE Insights says "2025-2026 ELA results will be available in late fall 2026 following standard setting." A final version may appear soon. None was found. | **Uncertain.** The copy is printed for 2025-26 only and is still a draft. Keep the DRAFT label. |
| c | *Georgia Milestones Assessment System, Grade 3, Writer's Checklist* | "Copyright © 2026" (PDF created 2026-06-16) | Not printed; the 2026 date suggests 2026-27 | https://lor2.gadoe.org/gadoe/file/ba53bbce-40da-44a3-92ed-a8da5dfd28be/1/GM_Checklist_Gr3.pdf | 3 | 2026-10-20 | **UNVERIFIED**. Robots-blocked. This is the newest version known. | Probably yes |
| d | *Georgia Milestones Assessment System, Grade 3, Eight-Point, Three-Trait Writing Rubric* (Trait 1 Purpose and Organization 0-3; Trait 2 Evidence and Elaboration 0-3; Trait 3 Language Usage and Conventions 0-2) | August 2026 (PDF created 2026-07-29) | Not printed; August 2026 points to 2026-27 | https://lor2.gadoe.org/gadoe/file/ba53bbce-40da-44a3-92ed-a8da5dfd28be/1/GM_Rubric_Gr3.pdf | 3 | 2026-10-20 | **VERIFIED CURRENT (by corroboration).** The PDF link is robots-blocked. However, a GaDOE event page (https://login.community.gadoe.org/events/grades-3-5-examining-expectations-for-student-writing-trait-1, recorded August 3, 2026) describes "the new three-trait rubric for Grades 3 and 5" on "the NEW Georgia Milestones English Language Arts assessment." Nothing newer than August 2026 was found. | Yes |
| e | *Georgia's K-12 English Language Arts (ELA) Standards* (grades 3-5, with the K-12 Grammar, Usage & Mechanics (GUM) chart) | Not obtained | Implemented 2025-26 | No working official URL found. The old `georgiastandards.org/.../ELA-Grade-3-Standards.pdf` now redirects to the "GeorgiaStandards.org Sunset" page. `inspire.gadoe.org` needs JavaScript. | 3-5 | 2026-10-20 | **UNVERIFIED (text).** The standards are confirmed in force. A GaDOE launch deck (https://inspire.gadoe.org/user-files/081eccef-0df6-40f4-bbe5-15c6e30fcfc3.pdf, dated August 12, 2024) gives a 2025-26 implementation year. GaDOE Insights cites "the implementation of revised ELA content standards" for 2025-26 results. The 2023 adoption year was not confirmed on an official page. | Yes. Nothing has superseded them. |
| f | *Online Study and Assessment Guides* (infographic) and **Experience Online** (gaexperienceonline.com) | Infographic: no printed date (PDF created 2026-07-20) | Not printed | https://www.gaexperienceonline.com/ (live). The infographic's own URL is unknown. Search found only an older 2023-2024 version on the retired gadoe.org path. | All grades, including 3 | 2026-10-20 | **Experience Online: VERIFIED CURRENT.** The page loads and offers "Test Practice, Guides and Samplers ... available daily 24/7", with online study guides, assessment guides, scoring samplers and demo tests for ELA, with a © 2026 GaDOE footer. **Infographic: UNVERIFIED** (no official copy found). The Grade 3 guide pages inside the portal need JavaScript and were not read. | Yes (portal) |
| g | Milestones EOG Assessment Guide and test administration facts for Grade 3 ELA | Item counts come from the blueprint (a). No assessment guide or examiner's manual was obtained. | n/a | Not found on an official domain | 3 | 2026-10-20 | **Item counts: UNVERIFIED online**, but they match the owner's blueprint exactly. **Number of sections and time limits: UNVERIFIED.** No official source could be opened. The owner's infographic mentions "Section I" text sets plus "Sections 2 & 3", which suggests three sections, but it gives no times. No 2026-27 change notice was found. | Unknown |

Out of scope: `40111bb3-GM_ALDs_Gr3_Math.txt` (Grade 3 **Math** ALDs) is in the upload folder. It was not reviewed.

---

## 2. Details by source

### (a) Assessment Blueprint, August 2025
What the owner's copy says (pages 1-2; page 1 checked as a page image):
- Total **60 points**. **Interpreting Texts 34**, **Constructing Texts 26**.
- Design table:
  - 28 one-point SR/TE items (28 points)
  - 12 two-point TE items (24 points)
  - 1 eight-point extended writing task (8 points)
  - 8 field-test items (0 points)
  - **Total 49 items.** Footnote 4: "Of the 49 items, 41 contribute to the student's ELA score."
- By part:
  - Interpreting Texts: 20 + 7 + 0 + 6 FT = 33 items, 34 points.
  - Constructing Texts: 8 + 5 + 1 + 2 FT = 16 items, 26 points.
- DOK table:
  - Level 1: 3-6 points (5-10%)
  - Level 2: 24-36 points (40-60%)
  - Level 3: 12-21 points (20-35%)
  - Level 4: 8 points (13%)
- Points by claim, as merged cells on page 1:
  - **Interpreting:** Context + Structure & Style = 6; Techniques = 16; Research & Analysis = 6; Grammar + Vocabulary = 6.
  - **Constructing:** Context + Structure & Style = 6; **Techniques + Research & Analysis = 8** (one merged cell); Grammar + Vocabulary = 12.
- **3.L.GC.1\* GUM appears only in the Constructing Texts column.** The Interpreting column for Grammar Conventions lists only 3.L.GC.2 (a).
- Footnotes:
  - 3.L.GC.1 skills come "from the Master and Reinforce levels in the GUM chart."
  - Foundations is "appropriate for classroom assessment only."
  - Practices are embedded in other items.
  - Lexile and Reading Status come from Interpreting Texts items.

**Source anomaly:** the Vocabulary row, Constructing column, prints **"5.L.V.3 (e)"** on a Grade 3 blueprint. This is almost certainly a GaDOE typo for 3.L.V.3 (e).
- How the site handles it: `docs/SPEC.md` §2 records it ("The blueprint prints this last one as '5.L.V.3 (e)', which reads as a typo"). `site.js` `claims` and `standards.js` silently use 3.L.V.3 (e) (tested = writing). That is a reasonable reading. However, the parent-facing table gives no note, so a parent comparing it with the PDF will see a mismatch. (Low; see the fix list.)

**Second source anomaly (ALDs):** the ALD document prints the grammar standard as **"3.LG.GC.1"**. `js/data/alds.js` line 251 already records it as a typo and stores it as 3.L.GC.1. That is handled correctly.

### (b) ALDs, October 2025, DRAFT
- The owner's copy is headed "DRAFT Achievement Level Descriptors" and "EFFECTIVE 2025-2026 SCHOOL YEAR". It was developed in July 2023 and is "subject to revisions during the standard setting process."
- GaDOE Insights (https://georgiainsights.gadoe.org/dashboards/georgia-milestones/, checked 2026-10-20) says 2025-26 ELA results come "in late fall 2026 following standard setting." Final ALDs could follow. None was found.
- Site handling:
  - `alds.js` keeps "Draft" in its `source` string, but **that string is never shown on any page**.
  - The user-facing source list in `site.js` reads "Achievement Level Descriptors, Grade 3 English Language Arts, October 2025 (effective 2025-26)", with **no DRAFT**.
  - The skill pages ("What Proficient work looks like (GaDOE Achievement Level Descriptors…)") and the parent guide also omit DRAFT.
  - See fix #2.

### (c) Writer's Checklist, 2026
- I compared all 11 checklist lines in `site.js` with the owner's copy. **They match word for word**, and so does the heading "In my well-written text, I made sure to:".
- The site's two claims are both supported by the document's own wording:
  - "Students see this exact checklist during the test" ("provided to students during testing in both the online testing platform and the printed test booklet").
  - "GaDOE allows it to be printed for practice during the school year".

### (d) Writing rubric, August 2026
- Three traits, 3 + 3 + 2 = 8 points. This matches `site.js` and `docs/SPEC.md`.
- The plain-English summaries in `site.js` `rubric` are faithful, including the "very brief responses … may not be sufficient" note. Exceptions are listed in the fix list (#5, #11).
- The Trait 3 footnote says: "Spelling expectations are outlined in the K-5 Foundations Domain as part of the Phonics Big Idea." It also points to 3.L.GC.2.b/c and the GUM chart. This matters for fix #6.

### (e) K-12 ELA Standards and GUM chart
- I could **not** obtain the official standards text from any official domain (see the access table). So `scratchpad/gadoe/standards-official-gr3.txt` was **not** created, and the line-by-line wording diff was **not** done.
- Partial checks I *could* make against official documents in hand:
  - **Standard-level names (15 assessed standards):** every group name in `standards.js` matches the standard titles printed in the official ALDs. Examples: "3.T.C.2: Authors & Speakers", "3.L.V.3: Meaning & Purpose". The only differences are capitalization and abbreviation.
  - **Practices (11):** all 11 practice names in `standards.js` match blueprint page 3 exactly (EICC.1-4, ST.1-2, AC.1-3, CP.1-2).
  - **Expectation letters vs. the blueprint:** every lettered expectation the blueprint lists exists in `standards.js`, with the correct reading/writing flag. The one exception is 3.L.GC.1 (fix #1).
  - **Gaps in the letter sequences:** 3.T.C.2.b/d, 3.T.SS.2.c, 3.T.T.3.b/d, 3.T.RA.2.c, 3.L.GC.2.e and 3.L.V.2.d are missing. `verification/gen-standards.py` drops them on purpose. The internal alignment file (`/home/claude/alignment/ga-grade3-ela-alignment.json`) marks each as "Not applicable in grade 3 (this progression begins in grade 5/6/9)". None of them appear on the blueprint. This is consistent, but **not verified** against the official text.
  - **GUM grade 3 rows (M/R) vs. the official ALDs:** the ALD's 3.L.GC.1 bullets list 13 skills under Beginning/Developing and 8 under Proficient. These map one-to-one onto 13 of the site's **R** rows and all 8 of its **M** rows, with matching wording.
    - Small difference: the ALD says "possessive determiners", and the site says "possessive … adjectives".
    - The site has **4 more R rows** that the ALDs do not mention:
      - "Use nouns and verbs to form complete thoughts in speech"
      - "Form and use singular and plural nouns in speech"
      - "Use interrogatives to ask questions in speech"
      - "Capitalize the first word of a sentence and the pronoun 'I'"
    - These may be real GUM rows that the ALDs left out because they are speech-only or earlier-grade skills. They are **unverified**.
    - The **I** and **C** rows (4 C, 10 I) cannot be checked at all without the GUM chart.
  - **GUM level meanings:** the site's glosses "R: Reinforce (learned earlier)" and "C: Continue (not yet mastered)" could not be checked against the chart's key.

### (f) Study/Assessment Guides and Experience Online
- The owner's infographic gives the path: Experience Online → "Test Practice" → "Online Tools Training" → Study Guide (students and parents) or Assessment Guide (educators) → pick the assessment → ELA → grade → tile.
  - It says Grades 3, 5, 8 and Lit & Comp II "each have an Extended Writing Task".
  - It says the Assessment Guide (not the Study Guide) holds the writing rubrics, and both hold the Writer's Checklists.
- The site's plan step reads "Test Practice → Study Guide → ELA → Grade 3". It leaves out the "Online Tools Training" button and the "select the applicable assessment" step. The live homepage now labels the entry "Test Practice, Guides and Samplers". (Low, fix #13.)
- The tool list (highlighter, cross-off, line guide) matches the infographic's "Standard Tools".

### (g) Test administration
- The item and point facts the site uses are all on the blueprint. They match it exactly (see section 3).
- The site makes **no** claims about time limits or number of sessions. Good: those could not be verified.
- Note: `/home/claude/alignment/ga-grade3-ela-alignment.json` (outside the live site) says "Section 1: read 2-3 sources, answer 3-4 questions, write an opinion essay … Sections 2-3 …". **I found no official source for this.** It must not be copied into the site as fact.

---

## 3. Site claims vs. the blueprint

| Claim (where) | Blueprint says | Result |
|---|---|---|
| 60 points (`site.js` design, `parents.js`, SPEC, README) | 60 | ✅ |
| 34 Interpreting / 26 Constructing (`site.js` sections, `catalog.js`, README, SPEC) | 34 / 26 | ✅ |
| 49 items, 41 scored, 8 field test (`site.js`, `parents.js`, SPEC) | 49; "41 contribute"; 8 FT | ✅ |
| Design rows 28/28, 12/24, 1/8, 8/0; IT 20/20, 7/14, 0/0, 6 FT = 33/34; CT 8/8, 5/10, 1/8, 2 FT = 16/26 | Same | ✅ every cell |
| DOK points and percentages | Same numbers | ✅ numbers. ⚠ The labels "recall", "use a skill or concept", "reason and explain with evidence" and "(the writing task)" are the site's own words (fix #9). |
| 8-point writing task, opinion essay from sources | 8-point Extended Writing Task. The rubric and checklist confirm opinion from sources. | ✅ |
| TE variant list (`site.js` teTypes) | Same 8 variants, which apply to TE items in general (footnote 1) | ✅ list. ⚠ `parents.js` presents them as types of "the 2-point questions" and says "Peach Prep practices each of these" (fix #7). |
| Claims table, expectation codes (`site.js` claims, SPEC §2) | See page 1 | ❌ **3.L.GC.1 is listed under Interpreting Texts. The blueprint lists it under Constructing only** (fix #1). Everything else matches. |
| `claimPoints`: "8 for Techniques" (Constructing); SPEC: Research & Analysis Constructing "(inside the writing task)" | 8 is one merged cell for **Techniques + Research & Analysis** | ❌ (fix #3) |
| Foundations is classroom only; only GUM Master/Reinforce rows are tested; Practices are embedded | Same | ✅. ⚠ The phrase "spelling … assessed in the classroom only" needs a caveat (fix #6). |
| ALDs (October 2025) | DRAFT | ❌ DRAFT is not shown to users (fix #2) |
| Lexile/Reading Status from Interpreting Texts (SPEC only) | Footnote 5 | ✅ |
| "Every Grade 3 ELA standard" (`index.html` meta, parent tab heading) | n/a | ⚠ Unverified: the official element list could not be obtained (see 2(e)) |

---

## 4. Wording check (standards text)

**I could not do it.** No official copy of the Grade 3 standards text was reachable:
- `georgiastandards.org` has been retired (it redirects to GaDOE's "Sunset" page).
- The `inspire.gadoe.org` collection needs JavaScript.
- `lor2.gadoe.org` is robots-blocked.
- The CASE API permission timed out.

No `standards-official-gr3.txt` was saved. I did not use district or vendor copies (Cobb, Fulton, IXL and others), because they are not official domains.

What is known:
- `standards.js` says its `text` field is "wording paraphrased" (header comment; `gen-standards.py` reads `short_official`). So it is **not** expected to match the official text word for word. Yet the parent guide prints it after the label **"Standard:"** (fix #4).
- For the partial checks that were possible (standard names, Practices, blueprint letters, GUM M/R rows against the ALDs), see section 2(e).

---

## 5. External GaDOE link check (2026-10-20)

| Where | Link | Result |
|---|---|---|
| `site.js` sources.blueprint | https://lor2.gadoe.org/gadoe/file/4feebd77-4a21-4788-a3ba-b6f50a71c876/1/GM_Gr3_ELA_Blueprint.pdf | **Not checkable**: robots-disallowed. Search engines index it under the correct title. |
| `site.js` sources.alds | https://lor2.gadoe.org/gadoe/file/0398b5b8-bcad-46a5-af4c-643df515341c/1/GM_ALDs_Gr3_ELA.pdf | **Not checkable**: robots-disallowed |
| `site.js` sources.rubric | https://lor2.gadoe.org/gadoe/file/ba53bbce-40da-44a3-92ed-a8da5dfd28be/1/GM_Rubric_Gr3.pdf | **Not checkable**: robots-disallowed |
| `site.js` sources.checklist | https://lor2.gadoe.org/gadoe/file/ba53bbce-40da-44a3-92ed-a8da5dfd28be/1/GM_Checklist_Gr3.pdf | **Not checkable**: robots-disallowed. It shares a folder ID with the rubric. That is normal: lor2 IDs are folders, as the Gr3, Gr4 and Gr8 blueprints all sit under `4feebd77…`. |
| `site.js` sources.sampler | https://lor2.gadoe.org/gadoe/file/d0d5b8f7-63d6-4a7f-8e5f-68df45b837d1/1/GM_Online_Scoring_Sampler_Infographic.pdf | **Not checkable**: robots-disallowed |
| `site.js` sources.experience | https://www.gaexperienceonline.com/ | **Live** (loads; content as expected) |
| `docs/SPEC.md` | none (it names documents but has no URLs) | n/a |
| `js/data/standards.js` | none to GaDOE (only bazeocrisy.github.io tool links, not in scope) | n/a |

`site.js` says "URLs confirmed working by the owner on 2026-10-20." This audit could neither confirm nor contradict that for the five lor2 links. The owner should click each one by hand.

---

## 6. Discrepancies the site must fix

| # | Severity | What is wrong | Where | Fix |
|---|---|---|---|---|
| 1 | **High** | 3.L.GC.1 (GUM) is shown as tested in **both** parts. The blueprint lists it **only under Constructing Texts**; Interpreting lists only 3.L.GC.2 (a). All 26 M/R GUM rows carry `tested: "both"`, so the badge reads "Reading and Writing". | `verification/gen-standards.py` (hard-codes `"both"` for M/R), `js/data/standards.js`, `site.js` claims (Grammar Conventions `it`), `docs/SPEC.md` §2 Interpreting list | Make M/R rows `tested: "writing"` (regenerate `standards.js`). Remove 3.L.GC.1 from the Interpreting cell in `site.js` and SPEC. |
| 2 | **High** | The ALDs are a **DRAFT**, effective **2025-26**, and may change after standard setting (late fall 2026). No user-facing page says "DRAFT". | `site.js` sources.alds title; `parents.js` and `skills.js` ALD headings | Title: "DRAFT Achievement Level Descriptors, Grade 3 ELA (October 2025, effective 2025-26)". Add "(GaDOE draft)" to the "What Proficient work looks like" headings. Add a note that GaDOE may revise them after standard setting. |
| 3 | **Medium** | The Constructing-points split says "8 for Techniques". On the blueprint, the 8 is one merged cell for **Techniques and Research & Analysis**. SPEC says Research & Analysis Constructing is "(inside the writing task)", which no source states. | `site.js` claimPoints; `docs/SPEC.md` §2 table | Change to "about 8 for Techniques with Research & Analysis". In SPEC, merge the two rows as 8. |
| 4 | **Medium** | The parent guide shows the paraphrased standards text after the label "Standard:". This implies it is the official wording, but the file says it is paraphrased and it was not checked against the official text. | `js/parents.js` (`"Standard: " + s.text`) | Relabel as "In brief:" or "Standard (paraphrased):". Alternatively, verify the text against the official document once it can be obtained. |
| 5 | **Medium** | "The test provides reasons; the writer develops them" is stated as fact. The rubric is mixed: Trait 2 says "elaborating on the provided reasons", but its bullets say the student "Provides reasons". The checklist says "provide reasons that support my opinion". | `site.js` rubric (Evidence and Elaboration, bullet 1) | Soften to: "The prompt may give reasons; either way, the writer must support each reason with information from the sources." |
| 6 | **Medium** | "Foundations (phonics, **spelling**, fluency, handwriting) is assessed in the classroom only" is true for test items. But the rubric's Trait 3 says spelling expectations come from the Foundations phonics standards, and the checklist tells students to correct spelling. So spelling can affect the essay's conventions score. | `js/parents.js` "What is not on the test"; `catalog.js` Foundations line ("not on the Milestones") | Add: "Spelling still counts in the essay's Language Usage and Conventions trait." |
| 7 | **Medium** | "Peach Prep practices each of these" (all 8 TE variants). The engine has 7 types (mc, ms, ebsr, dropdown, hottext, order, match), with **no drag-and-drop** and no general multiple-part beyond EBSR. The sentence also ties the variants to the 2-point items only, but the blueprint's footnote applies to all TE items. | `js/parents.js` buildTest | Say "Peach Prep practices most of these (all but drag-and-drop)" and "technology-enhanced questions (1- and 2-point) include…". |
| 8 | **Medium** | SPEC §1 heading says "Sources (all official, all current)". The ALDs are a 2025-26 draft, and none of the sources could be confirmed online today. | `docs/SPEC.md` §1 | Change to "Sources (official; currency as of the dates shown)" and mark the ALDs as DRAFT, 2025-26. |
| 9 | **Low** | DOK labels add wording the blueprint does not have ("recall", "use a skill or concept", "reason and explain with evidence", and "Level 4 … (the writing task)"). Equating DOK 4 with the writing task is a fair inference (8 points each) but is not stated. | `site.js` design.dok; SPEC DOK table | Mark these as our gloss, e.g. "Level 4 (likely the writing task)". |
| 10 | **Low** | The blueprint's "5.L.V.3 (e)" typo is not mentioned to parents. The table silently shows 3.L.V.3 (e). | `site.js` claims (Vocabulary `ct`) / `parents.js` | Add a footnote: "The blueprint prints this as 5.L.V.3 (e), which appears to be a typo." |
| 11 | **Low** | The condition-code note lists 5 reasons. The rubric lists 7 (it leaves out Non-English/Foreign Language and Offensive). It also says "no score", but the rubric places condition codes in the 0 column. | `site.js` rubricNote | List all seven, or say "for example". "Scores 0" is closer to the rubric. |
| 12 | **Low** | "URLs confirmed working by the owner on 2026-10-20" could not be independently confirmed. The lor2 host blocks automated checks. | `site.js` comment | The owner should click-test the five lor2 links before release. Keep the comment dated. |
| 13 | **Low** | The Experience Online path leaves out the "Online Tools Training" and "select the assessment" steps. The live site now labels the entry "Test Practice, Guides and Samplers". | `site.js` plan, step 5 | "Test Practice, Guides and Samplers → Online Tools Training → Study Guide → Grade 3 ELA". |
| 14 | **Low** | "It has two parts: Interpreting Texts … and Constructing Texts". These are reporting domains, not test sessions. The infographic refers to Section I and Sections 2 & 3. A parent could read "two parts" as two sittings. | `js/parents.js` buildTest | "It is scored in two parts (domains)…". |

No **Critical** issues were found. Every number the site prints matches the owner's blueprint.

---

## 7. Unverified items

1. **Whether any of the five lor2 links is live.** WebFetch was robots-blocked, and curl was blocked by the sandbox proxy.
2. **Whether a newer (2026-27) Grade 3 ELA blueprint, checklist or rubric exists.** GaDOE's listing pages render with JavaScript and could not be read. Searches found nothing newer than blueprint August 2025, checklist 2026 and rubric August 2026.
3. **Final (non-draft) ALDs.** Standard setting for the new ELA test is scheduled for "late fall 2026" (GaDOE Insights). Re-check in December 2026.
4. **Official Grade 3 standards text and the GUM chart.** Not obtained, so there was no wording diff. Also unverified:
   - the 2023 adoption year
   - the "not applicable in grade 3" status of 3.T.C.2.b/d, 3.T.SS.2.c, 3.T.T.3.b/d, 3.T.RA.2.c, 3.L.GC.2.e and 3.L.V.2.d
   - whether the Foundations list (F.P.4, F.F.1, F.H.3, F.H.4) is complete for grade 3
   - the 4 extra GUM R rows not echoed in the ALDs
   - all 14 GUM I/C rows
   - the meaning of the M/R/I/C level codes
5. **Number of test sections and time limits for Grade 3 ELA, and any 2026-27 administration change.** No official assessment guide or examiner's manual was reachable. The site makes no such claims; keep it that way.
6. **The Online Study and Assessment Guides infographic.** No official online copy was found; only the owner's upload (created July 2026, undated) was available.
7. **Grade 3 study guide content inside Experience Online.** The portal needs JavaScript.

### Evidence URLs used (all checked 2026-10-20)
- https://www.gaexperienceonline.com/ (live)
- https://georgiainsights.gadoe.org/dashboards/georgia-milestones/ (standard setting, late fall 2026; revised ELA standards)
- https://login.community.gadoe.org/events/grades-3-5-examining-expectations-for-student-writing-trait-1 (new three-trait rubric for grades 3 and 5, recorded August 3, 2026)
- https://inspire.gadoe.org/user-files/081eccef-0df6-40f4-bbe5-15c6e30fcfc3.pdf (K-12 ELA Standards launch deck, August 12, 2024; implementation 2025-26)
- https://www.georgiastandards.org/Georgia-Standards/Frameworks/ELA-Grade-3-Standards.pdf (302 redirect to https://gadoe.org/georgiastandards-sunset/)
- The five lor2.gadoe.org URLs in section 5 (robots-disallowed)
