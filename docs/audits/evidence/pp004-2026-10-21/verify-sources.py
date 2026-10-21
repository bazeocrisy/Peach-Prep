"""Reproduce the normalized wording/page comparison; requires Node and pdftotext.

Usage: python3 verify-sources.py REPOSITORY_ROOT OFFICIAL_PDF_DIRECTORY
The GUM chart's actual Grade 3 cells still require the visual check described
in the report. gum_counts below counts site metadata, not a new chart reading.
"""
import collections
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys

repo, sources = map(lambda x: Path(x).resolve(), sys.argv[1:3])
pdf = sources / 'Stamdards.pdf'
pages = subprocess.check_output(['pdftotext', '-raw', str(pdf), '-'], text=True).split('\f')
script = "global.window=global;require(process.argv[1]);process.stdout.write(JSON.stringify(PP_STANDARDS));"
rows = json.loads(subprocess.check_output(['node', '-e', script, str(repo/'js/data/standards.js')], text=True))
normalize = lambda s: re.sub(r'[^a-zA-Z0-9]', '', s).lower()
misses = [{'code': r['code'], 'page': r['page']} for r in rows
          if normalize(r['official']) not in normalize(pages[r['page']-1])]
pdf_codes = set(re.findall(r'\b3\.(?:F|L|T)\.[A-Z]+\.\d+\.[a-z]', '\f'.join(pages)))
site_codes = {r['code'] for r in rows if r['code'].startswith('3.') and not r.get('gum')}
excluded = sorted(pdf_codes-site_codes)
expected = sorted(['3.L.GC.2.e', '3.L.V.2.d', '3.T.C.2.b', '3.T.C.2.d',
                   '3.T.RA.2.c', '3.T.SS.2.c', '3.T.T.3.b', '3.T.T.3.d'])
result = {
    'records': len(rows), 'wording_matches': len(rows)-len(misses), 'misses': misses,
    'pdf_lettered_grade3_codes': len(pdf_codes), 'site_lettered_grade3_codes': len(site_codes),
    'excluded_placeholders': excluded, 'extra_grade3_codes': sorted(site_codes-pdf_codes),
    'gum_counts': dict(collections.Counter(r['level'] for r in rows if r.get('gum'))),
    'source_sha256': {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(sources.glob('*.pdf'))}
}
print(json.dumps(result, indent=2))
sys.exit(1 if misses or site_codes-pdf_codes or excluded != expected else 0)
