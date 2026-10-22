#!/usr/bin/env python3
"""Focused geometry/recovery check for every changed short-writing component.

Runs only the new short-writing fallback/warning combinations. Does not
replace the independently passed UX regression test or original guard suite.
"""
import json
import os
import subprocess
import sys
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs/audits/ux-corrections-2026-10-21/shortwriting-layout-results.json"
EXE = os.environ.get("CHROMIUM_PATH", "/workspace/scratch/bd2016b2a547/uxa-browser/chromium")
ARGS = ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--disable-software-rasterizer",
        "--disable-seccomp-filter-sandbox", "--disable-setuid-sandbox", "--no-zygote", "--single-process",
        "--in-process-gpu", "--disable-features=FontDataService,FontationsFontBackend"]
VIEWS = [(320,568),(390,844),(844,390),(768,1024),(1024,768),(1366,768),(1920,1080)]
rows = []
errors = []
server = subprocess.Popen(["node", "verification/serve.js", ".", "8390"], cwd=ROOT,
                          stdout=subprocess.DEVNULL)
time.sleep(.5)
try:
    with sync_playwright() as p:
        for width, height in VIEWS:
            b = p.chromium.launch(executable_path=EXE, args=ARGS,
                                 env={**os.environ, "LD_LIBRARY_PATH": str(Path(EXE).parent), "FONTCONFIG_PATH": "/etc/fonts"})
            q = b.new_page(viewport={"width": width, "height": height})
            q.set_default_timeout(10000)
            q.route("**/fonts.g*/**", lambda route: route.abort())
            q.on("pageerror", lambda e: errors.append(str(e)))
            q.on("dialog", lambda d: d.accept())
            q.add_init_script("Storage.prototype.setItem=function(){throw new Error('audit quota fixture')}")
            q.goto("http://127.0.0.1:8390/")
            q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
            keys = q.evaluate("Object.keys(PP.lessons).filter(k=>PP.lessons[k].write)")
            if len(keys) != 23:
                raise AssertionError(f"Expected 23 short-writing activities; found {len(keys)}")
            for i, key in enumerate(keys):
                q.evaluate("k=>PP_SKILLS.open(k,'try')", key)
                text = "My new independent writing for " + key + "."
                q.locator(".write-card textarea").fill(text)
                checks = q.locator(".write-card input[type=checkbox]")
                count = checks.count()
                if count:
                    checks.first.check()
                warning = q.locator(".write-card [role=status]").inner_text()
                row = {"viewport": f"{width}x{height}", "lesson": key,
                       "warning": warning, "checkbox_count": count,
                       "warns_unsaved": "only for this visit" in warning and "before reloading or closing" in warning,
                       "overflow_after_input": q.evaluate("document.documentElement.scrollWidth>innerWidth+1")}
                q.locator("#sk-tab-teach").click()
                q.locator("#sk-tab-try").click()
                row["text_after_step_return"] = q.locator(".write-card textarea").input_value() == text
                row["checks_after_step_return"] = not count or q.locator(".write-card input[type=checkbox]").first.is_checked()
                other = keys[(i+1) % len(keys)]
                q.evaluate("k=>PP_SKILLS.open(k,'try')", other)
                q.evaluate("k=>PP_SKILLS.open(k,'try')", key)
                row["text_after_lesson_return"] = q.locator(".write-card textarea").input_value() == text
                row["checks_after_lesson_return"] = not count or q.locator(".write-card input[type=checkbox]").first.is_checked()
                row["warning_after_return"] = "only for this visit" in q.locator(".write-card [role=status]").inner_text()
                row["overflow_after_return"] = q.evaluate("document.documentElement.scrollWidth>innerWidth+1")
                row["pass"] = all(row[k] for k in ["warns_unsaved", "text_after_step_return", "checks_after_step_return",
                    "text_after_lesson_return", "checks_after_lesson_return", "warning_after_return"]) and not row["overflow_after_input"] and not row["overflow_after_return"]
                rows.append(row)
            print(f"{width}x{height}: {sum(r['pass'] for r in rows if r['viewport']==f'{width}x{height}')} / 23 passed", flush=True)
            b.close()
finally:
    server.terminate()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps({"method": "Chromium 131 desktop-context viewport simulation; fallback fonts; quota fixture. Not actual-device acceptance.",
        "expected_combinations": 161, "tested_combinations": len(rows), "passed": sum(r["pass"] for r in rows),
        "page_errors": errors, "results": rows}, indent=2) + "\n")

ok = len(rows) == 161 and all(r["pass"] for r in rows) and not errors
print(f"{sum(r['pass'] for r in rows)}/{len(rows)} combinations passed; {len(errors)} page errors", flush=True)
sys.exit(0 if ok else 1)
