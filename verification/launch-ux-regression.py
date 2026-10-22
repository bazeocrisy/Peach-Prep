"""Run existing suites with the packaged audit browser; assertions are unchanged.

Usage: python verification/launch-ux-regression.py guard|path|path-headers
CHROMIUM_PATH overrides the packaged executable. guard uses the documented
browse preference fixture because its original home journey predates mode choice.
First-visit choice remains covered by the separate path suite.
"""
import json
import os
from pathlib import Path
import runpy
import subprocess
import sys
import time

from playwright.sync_api import Browser, BrowserType

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs/audits/evidence/ux-corrections-2026-10-21"
OUT.mkdir(parents=True, exist_ok=True)
suite = sys.argv[1]
if suite not in {"guard", "path", "path-headers"}:
    raise SystemExit("Unknown suite")
exe = os.environ.get("CHROMIUM_PATH", "/workspace/scratch/bd2016b2a547/uxa-browser/chromium")
args = ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu",
        "--disable-software-rasterizer", "--disable-seccomp-filter-sandbox",
        "--disable-setuid-sandbox", "--no-zygote", "--single-process",
        "--in-process-gpu", "--disable-features=FontDataService,FontationsFontBackend"]
original_launch = BrowserType.launch
original_newpage = Browser.new_page
first = True
extra_browsers = []


def launch(self, *pos, **kw):
    kw.update(executable_path=exe, args=args,
              env={**os.environ, "LD_LIBRARY_PATH": str(Path(exe).parent), "FONTCONFIG_PATH": "/etc/fonts"})
    return original_launch(self, *pos, **kw)


def newpage(self, *pos, **kw):
    global first
    owner = self
    if not first:
        owner = self.browser_type.launch()
        extra_browsers.append(owner)
    first = False
    page = original_newpage(owner, *pos, **kw)
    if suite == "guard":
        # Init scripts also run on history's about:blank document, which has no
        # storage origin. The fixture must not create its own page error there.
        page.add_init_script("try { if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true})); } catch(e) { /* no storage origin, e.g. about:blank */ }")
    return page


BrowserType.launch = launch
Browser.new_page = newpage
results = []


def profile(frame, event, arg):
    if event == "return" and frame.f_code.co_name == "ok" and frame.f_code.co_filename.endswith("verification/guard.py"):
        row = {"name": frame.f_locals["name"], "pass": bool(frame.f_locals["cond"]), "detail": str(frame.f_locals.get("detail", ""))[:500]}
        results.append(row)
        print(("CHECK PASS " if row["pass"] else "CHECK FAIL ") + row["name"], flush=True)
        if not row["pass"]:
            print("DETAIL " + row["detail"], flush=True)
        (OUT / "guard-results.json").write_text(json.dumps(results, indent=2) + "\n")


server = subprocess.Popen(["node", "verification/serve.js", ".", "8368"], cwd=ROOT,
                          stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(.4)
sys.setprofile(profile)
sys.argv = ["verification/" + suite + ".py", "http://127.0.0.1:8368/"]
if suite != "guard":
    sys.argv.append(str(OUT))
try:
    os.chdir(ROOT)
    runpy.run_path(sys.argv[0], run_name="__main__")
finally:
    sys.setprofile(None)
    server.terminate()
    if suite == "guard":
        (OUT / "guard-results.json").write_text(json.dumps(results, indent=2) + "\n")
