"""Generate js/data/standards.js from the reviewed alignment data and the
GaDOE Grade 3 ELA blueprint (August 2025).

Source of the element list and paraphrased wording: /home/claude/alignment/ga-grade3-ela-alignment.json
(built from Georgia's K-12 ELA Standards 3-5 with the GUM chart; wording paraphrased).
Official wording and pages (PP-004): docs/audits/work/official-gr3-standards.json and
docs/audits/work/official-gr3-gum.json, transcribed from the official 52-page PDF.
Assessed lists below are transcribed from the blueprint, page 1.
"""
import json, re, sys

SRC = "/home/claude/alignment/ga-grade3-ela-alignment.json"
import os
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "js", "data", "standards.js")

IT = {  # Interpreting Texts (reading) -- blueprint p.1
    "3.T.C.1": "ab", "3.T.C.2": "ac", "3.T.SS.1": "a", "3.T.SS.2": "a",
    "3.T.T.1": "abcd", "3.T.T.2": "abc", "3.T.T.3": "a", "3.T.T.4": "a",
    "3.T.RA.1": "ab", "3.T.RA.2": "ab", "3.L.GC.2": "a",
    "3.L.V.1": "a", "3.L.V.2": "ab", "3.L.V.3": "abcd",
}
CT = {  # Constructing Texts (writing)
    "3.T.C.1": "c", "3.T.SS.1": "bcd", "3.T.SS.2": "b", "3.T.T.1": "e",
    "3.T.T.2": "d", "3.T.T.3": "c", "3.T.T.4": "b", "3.T.RA.1": "c",
    "3.L.GC.2": "bcd", "3.L.V.1": "b", "3.L.V.2": "c", "3.L.V.3": "e",
}

def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:48]

# PP-004: official grade 3 wording and PDF page, transcribed from "Georgia's K-12 ELA Standards:
# Foundations, Language, Texts, & Practices, Grades 3-5" (52 pp., approved May 2023) and checked
# against the page images. Every record gets `official` (verbatim) and `page`. `text` stays the
# site's short paraphrase, except where the paraphrase changed the meaning of the official
# expectation: those codes (TEXT_FIX) use the verbatim official wording instead.
# See docs/audits/PP-004-OFFICIAL-STANDARDS-VERIFICATION.md.
WORK = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "docs", "audits", "work")
OFF = {r["code"]: r for r in json.load(open(os.path.join(WORK, "official-gr3-standards.json"), encoding="utf8"))}
OFFGUM = {r["siteCode"]: r for r in json.load(open(os.path.join(WORK, "official-gr3-gum.json"), encoding="utf8")) if r["siteCode"]}
TEXT_FIX = set("""
3.F.F.1.d 3.L.GC.2.a 3.L.GC.2.d 3.L.V.1.b 3.L.V.3.d 3.T.C.1.b 3.T.C.2.a 3.T.C.2.c 3.T.SS.1.a 3.T.SS.1.c
3.T.SS.2.b 3.T.T.1.d 3.T.T.1.e 3.T.T.2.b 3.T.T.2.d 3.T.T.3.a 3.T.T.3.c 3.T.T.4.b 3.T.RA.1.a
K-12.P.EICC.1.a K-12.P.EICC.1.b K-12.P.EICC.1.c K-12.P.EICC.1.d K-12.P.EICC.1.e
K-12.P.EICC.2.a K-12.P.EICC.2.b K-12.P.EICC.2.c K-12.P.EICC.3.c K-12.P.EICC.3.f
K-12.P.EICC.4.b K-12.P.EICC.4.c K-12.P.EICC.4.d K-12.P.EICC.4.e K-12.P.EICC.4.f K-12.P.EICC.4.g
K-12.P.ST.1.a K-12.P.ST.1.c K-12.P.ST.2.a K-12.P.ST.2.b K-12.P.ST.2.c
K-12.P.AC.1.a K-12.P.AC.1.b K-12.P.AC.1.c K-12.P.AC.1.d K-12.P.AC.2.a K-12.P.AC.2.b K-12.P.AC.2.c K-12.P.AC.2.d
K-12.P.AC.3.a K-12.P.AC.3.b K-12.P.AC.3.c K-12.P.AC.3.d
K-12.P.CP.1.b K-12.P.CP.1.c K-12.P.CP.1.d K-12.P.CP.2.b
3.L.GC.1:R:use-determiners-articles-possessive-and-demonstr
3.L.GC.1:C:use-conventional-capitalization-quotation-marks-
3.L.GC.1:I:use-conventional-capitalization-in-abbreviations
3.L.GC.1:I:use-capitalization-and-underlining-quotation-mar
""".split())
LVLNAME = {"M": "Master", "R": "Reinforce", "I": "Introduce", "C": "Continue"}

d = json.load(open(SRC))
out = []
for x in d["standards"]:
    code = x["code"]
    rec = {"strand": x["strand"], "group": x["group"], "text": x["short_official"],
           "plain": x.get("parent_plain", "")}
    # x["status"] (coverage by older apps) is used only to drop "not applicable" rows; it is not written out.
    m = re.match(r"3-5\.L\.GC\.1 \(GUM: (.+), ([MRIC])\)$", code)
    if m:
        name, lvl = m.group(1), m.group(2)
        rec.update(code="3.L.GC.1:" + lvl + ":" + slug(name), display="3-5.L.GC.1",
                   gum=name, level=lvl,
                   # Blueprint p.1 lists "3.L.GC.1* GUM" under Constructing Texts only.
                   tested=("writing" if lvl in "MR" else "no"),
                   testedNote=("Assessed in Constructing Texts (writing), as a GUM Master/Reinforce row" if lvl in "MR"
                               else "Not assessed (GUM Introduce/Continue row)"))
    elif x["status"] == "not applicable":
        continue
    else:
        mm = re.match(r"(3\.[TL]\.[A-Z]+\.\d)\.([a-z])$", code)
        rec["code"] = code
        rec["display"] = code
        if mm:
            base, letter = mm.group(1), mm.group(2)
            i = letter in IT.get(base, ""); c = letter in CT.get(base, "")
            rec["tested"] = "both" if (i and c) else "reading" if i else "writing" if c else "no"
        elif x["strand"] == "Foundations":
            rec["tested"] = "classroom"
        elif x["strand"] == "Practices":
            rec["tested"] = "embedded"
        else:
            rec["tested"] = "no"
    o = OFFGUM.get(rec["code"]) if rec.get("gum") else OFF.get(rec["code"])
    if o is None:
        sys.exit("no official wording for " + rec["code"])
    if rec.get("gum"):
        assert o["grade3"] == rec["level"], rec["code"]
        rec["official"] = o["skill"]
    else:
        assert o["applicable"], rec["code"]
        rec["official"] = o["wording"]
    rec["page"] = o["page"]
    if rec["code"] in TEXT_FIX:
        rec["text"] = rec["official"] + (" Grade 3 code: %s (%s)." % (rec["level"], LVLNAME[rec["level"]]) if rec.get("gum") else "")
    rec["where"] = [{"app": w["app"].split(" (")[0], "place": w["place"], "url": w.get("url", "")}
                    for w in x.get("where", [])]
    out.append(rec)

# PP-004: the element list must match the official grade 3 list exactly (both directions).
made = {r["code"] for r in out}
want = {c for c, r in OFF.items() if r["applicable"]} | set(OFFGUM)
assert made == want, ("missing", sorted(want - made), "extra", sorted(made - want))

src = ("/* GENERATED by verification/gen-standards.py -- do not edit by hand.\n"
       "   Element list: Georgia's K-12 ELA Standards (grades 3-5, GUM chart, approved May 2023).\n"
       "   official = verbatim official wording, page = page of the 52-page grades 3-5 PDF (PP-004).\n"
       "   text = short paraphrase, or the verbatim wording where a paraphrase changed the meaning.\n"
       "   'tested' follows the GaDOE Grade 3 ELA Assessment Blueprint (August 2025):\n"
       "   reading = Interpreting Texts, writing = Constructing Texts, both, no,\n"
       "   (3.L.GC.1 GUM Master/Reinforce rows = writing: the blueprint lists 3.L.GC.1 under Constructing Texts only),\n"
       "   classroom = Foundations (classroom assessment only), embedded = Practices. */\n"
       "window.PP_STANDARDS = " + json.dumps(out, indent=1, ensure_ascii=False) + ";\n")
open(OUT, "w").write(src)
from collections import Counter
print(len(out), Counter(r["tested"] for r in out))
