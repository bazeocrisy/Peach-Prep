"""Read-only comparison of deployed application bytes with the frozen manifest.

Canonical URLs are used; this does not bypass browser caches or claim a unique
deployment commit. An expected commit is metadata, not a value read from Pages.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
from pathlib import Path
import sys
from urllib.request import Request, urlopen

parser = argparse.ArgumentParser()
parser.add_argument("--base", default="https://bazeocrisy.github.io/Peach-Prep/")
parser.add_argument("--manifest", default="docs/audits/ux-corrections-2026-10-21/application-fingerprint.json")
parser.add_argument("--output", default="docs/audits/ux-corrections-2026-10-21/deployed-assets.json")
parser.add_argument("--expected-commit")
parser.add_argument("--paths", nargs="*")
args = parser.parse_args()
manifest = json.loads(Path(args.manifest).read_text())
assets = [row for row in manifest["assets"] if not args.paths or row["path"] in args.paths]
if not assets:
    raise SystemExit("No manifest paths selected")


def fetch(row):
    try:
        request = Request(args.base.rstrip("/") + "/" + row["path"], headers={"Cache-Control": "no-cache"})
        with urlopen(request, timeout=45) as response:
            sha = hashlib.sha256(response.read()).hexdigest()
            return {"path": row["path"], "status": response.status, "sha256": sha,
                    "matches": sha == row["sha256"], "date": response.headers.get("Date"),
                    "last_modified": response.headers.get("Last-Modified")}
    except Exception as error:
        return {"path": row["path"], "matches": False, "error": str(error)}


with ThreadPoolExecutor(max_workers=6) as pool:
    rows = list(pool.map(fetch, assets))
report = {"base": args.base, "expected_commit": args.expected_commit,
          "method": "canonical URL byte-hash comparison with no-cache request header",
          "assets": rows}
Path(args.output).write_text(json.dumps(report, indent=2) + "\n")
matched = sum(row["matches"] for row in rows)
print(f"{matched}/{len(rows)} deployed assets match the frozen application.")
for row in rows:
    if not row["matches"]:
        print(row["path"] + ": " + row.get("error", "different bytes"))
sys.exit(0 if matched == len(rows) else 1)
