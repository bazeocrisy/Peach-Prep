#!/usr/bin/env python3
"""Regression checks for in-session writing recovery. Fixture storage only.

Run from the repository root; optional CHROMIUM_PATH / CHROMIUM_ARGS follow
the existing browser harness convention. This script starts its own server.
"""
import json
import os
import subprocess
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
PORT = int(os.environ.get("PP_WRITING_TEST_PORT", "8388"))
BASE = f"http://127.0.0.1:{PORT}/"
results = []


def check(name, passed, detail=None):
    results.append({"name": name, "pass": bool(passed), "detail": detail})
    print(("PASS " if passed else "FAIL ") + name, flush=True)


def start(q, task="W-TASK-01", tab="write"):
    q.evaluate("([id,tab])=>{PP_WRITING.start(id);PP_WRITING.select(tab)}", [task, tab])


fixtures = {
    "normal": "",
    "blocked-getter": """window.auditStorage = localStorage; window.auditBlocked = true;
      Object.defineProperty(window,'localStorage',{get(){
        if(window.auditBlocked) throw new Error('blocked'); return window.auditStorage;
      }});""",
    "quota": """window.auditBlocked = true; window.auditSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem=function(k,v){if(window.auditBlocked)throw new Error('quota');
        return window.auditSetItem.call(this,k,v)};""",
    "stale-disk": """localStorage.setItem('pp.task.W-TASK-01',JSON.stringify({draft:'Old disk essay',plan:{opinion:'Old opinion'},checks:[],scores:{}}));
      window.auditBlocked = true; window.auditSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem=function(k,v){if(window.auditBlocked)throw new Error('quota');
        return window.auditSetItem.call(this,k,v)};""",
    "read-error": """window.auditBlocked = true; window.auditGetItem = Storage.prototype.getItem;
      Storage.prototype.getItem=function(k){if(window.auditBlocked)throw new Error('read blocked');
        return window.auditGetItem.call(this,k)};
      window.auditSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem=function(k,v){if(window.auditBlocked)throw new Error('write blocked');
        return window.auditSetItem.call(this,k,v)};""",
    "damaged-json": "localStorage.setItem('pp.task.W-TASK-01','{bad')",
}

server = subprocess.Popen(["node", "verification/serve.js", ".", str(PORT)], cwd=ROOT, stdout=subprocess.DEVNULL)
try:
    time.sleep(.4)
    with sync_playwright() as p:
        for name, init in fixtures.items():
            opts = {}
            if os.environ.get("CHROMIUM_PATH"):
                opts["executable_path"] = os.environ["CHROMIUM_PATH"]
            if os.environ.get("CHROMIUM_ARGS"):
                opts["args"] = json.loads(os.environ["CHROMIUM_ARGS"])
            b = p.chromium.launch(**opts)
            q = b.new_page(viewport={"width": 390, "height": 844})
            q.route("**/fonts.g*/**", lambda route: route.abort())
            if init:
                q.add_init_script(init)
            errors = []
            q.on("pageerror", lambda e: errors.append(str(e)))
            q.goto(BASE)
            q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
            start(q)
            notice = q.locator("#w-storage-note")
            if name == "damaged-json":
                check(name + ": distinguish damaged JSON", "could not be read correctly" in notice.inner_text())
            if name in ["blocked-getter", "read-error"]:
                check(name + ": read failure disclosed", "Saving is unavailable" in notice.inner_text())

            q.locator("#w-draft").fill("My current essay.\n\nA second paragraph.")
            q.evaluate("PP_WRITING.select('plan')")
            q.locator("#pl-opinion").fill("My current opinion")
            q.locator("#pl-ev0").fill("My source evidence")
            q.evaluate("PP_WRITING.select('check')")
            q.locator("#w-check input[type=checkbox]").first.check()
            q.evaluate("PP_WRITING.select('score')")
            q.locator('input[name="sc-purpose"][value="2"]').check()
            before = q.evaluate("JSON.stringify(PP_WRITING.state().data)")
            unavailable = name in ["blocked-getter", "quota", "stale-disk", "read-error"]
            if unavailable:
                check(name + ": honest unsaved notice", "only for this visit" in notice.inner_text() and "copy your plan and essay" in notice.inner_text())
                check(name + ": unsaved work has unload protection", q.evaluate("()=>{const e=new Event('beforeunload',{cancelable:true});window.dispatchEvent(e);return e.defaultPrevented}"))
            else:
                check(name + ": successful-save notice", "Your changes are saved" in notice.inner_text())

            start(q, "W-TASK-02")
            check(name + ": second task starts independently", q.locator("#w-draft").input_value() == "")
            q.locator("#w-draft").fill("Other task essay")
            q.evaluate("PP_PATH.choose()")
            q.locator("#choose-browse").click()
            start(q)
            check(name + ": all fields survive mode/task return", q.evaluate("JSON.stringify(PP_WRITING.state().data)") == before)
            check(name + ": current essay never reverts to disk", q.locator("#w-draft").input_value().startswith("My current essay."))

            if unavailable:
                q.evaluate("window.auditBlocked=false")
                start(q)
                check(name + ": saving recovery clears failure notice", "Your changes are saved" in notice.inner_text())
                check(name + ": recovered storage gets latest fields", q.evaluate("localStorage.getItem('pp.task.W-TASK-01')") == before)
                check(name + ": other unsaved task still protected", q.evaluate("()=>{const e=new Event('beforeunload',{cancelable:true});window.dispatchEvent(e);return e.defaultPrevented}"))
                start(q, "W-TASK-02")
                start(q)
                check(name + ": saving all tasks removes unload warning", q.evaluate("()=>{const e=new Event('beforeunload',{cancelable:true});window.dispatchEvent(e);return !e.defaultPrevented}"))
            # A working-storage reload is an independent control for each fixture.
            # Disable the initialization fixture before reloading this page.
            if name == "normal":
                q.reload()
                q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
                q.evaluate("PP_WRITING.select('write')")
                check(name + ": all fields survive reload", q.evaluate("JSON.stringify(PP_WRITING.state().data)") == before)
                q.evaluate("localStorage.setItem('pp.task.W-TASK-01',JSON.stringify({draft:'Updated disk essay'}))")
                start(q)
                check(name + ": clean cache sees valid disk update", q.locator("#w-draft").input_value() == "Updated disk essay")
                q.evaluate("localStorage.removeItem('pp.task.W-TASK-01')")
                start(q)
                check(name + ": clean cache sees explicit disk clear", q.locator("#w-draft").input_value() == "")
                q.evaluate("v=>localStorage.setItem('pp.task.W-TASK-01',v)", before)
                start(q)
                q.evaluate("()=>{window.auditGetItem=Storage.prototype.getItem;Storage.prototype.getItem=function(){throw new Error('temporarily unavailable')}}")
                start(q)
                check(name + ": read failure preserves clean cached work", q.evaluate("JSON.stringify(PP_WRITING.state().data)") == before)
                q.evaluate("()=>{Storage.prototype.getItem=window.auditGetItem}")

            q.evaluate("PP_WRITING.select('score')")
            q.once("dialog", lambda d: d.dismiss())
            q.get_by_role("button", name="Start this task over", exact=True).click()
            check(name + ": canceled reset preserves all fields", q.evaluate("JSON.stringify(PP_WRITING.state().data)") == before)
            q.once("dialog", lambda d: d.accept())
            q.get_by_role("button", name="Start this task over", exact=True).click()
            start(q)
            check(name + ": confirmed reset clears cached task", q.evaluate("JSON.stringify(PP_WRITING.state().data)") == '{"plan":{},"draft":"","checks":[],"scores":{}}')
            start(q, "W-TASK-02")
            check(name + ": resetting one task preserves other task", q.locator("#w-draft").input_value() == "Other task essay")
            check(name + ": no page errors", not errors, errors)
            b.close()
finally:
    server.terminate()

print(json.dumps({"passed": sum(r["pass"] for r in results), "failed": sum(not r["pass"] for r in results), "results": results}, indent=2))
raise SystemExit(1 if any(not r["pass"] for r in results) else 0)
