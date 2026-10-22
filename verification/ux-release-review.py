#!/usr/bin/env python3
"""Independent focused release review of the UX correction branch.

Run with Playwright importable and CHROMIUM_PATH optionally configured.
Uses isolated browser fixtures; does not modify application data or code.
Desktop Chromium viewport simulation, not actual-device acceptance.
"""
import json
import os
import subprocess
import sys
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs/audits/ux-corrections-2026-10-21"
OUT.mkdir(parents=True, exist_ok=True)
BASE = "http://127.0.0.1:8389/"
EXE = os.environ.get("CHROMIUM_PATH", "/workspace/scratch/bd2016b2a547/uxa-browser/chromium")
ARGS = ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--disable-software-rasterizer",
        "--disable-seccomp-filter-sandbox", "--disable-setuid-sandbox", "--no-zygote", "--single-process",
        "--in-process-gpu", "--disable-features=FontDataService,FontationsFontBackend"]
results = []
page_errors = []


def check(name, condition, detail=None):
    results.append({"name": name, "pass": bool(condition), "detail": detail})
    print(("PASS " if condition else "FAIL ") + name, flush=True)


def context(p, init="", width=390, height=844):
    b = p.chromium.launch(executable_path=EXE, args=ARGS,
                          env={**os.environ, "LD_LIBRARY_PATH": str(Path(EXE).parent), "FONTCONFIG_PATH": "/etc/fonts"})
    q = b.new_page(viewport={"width": width, "height": height})
    q.set_default_timeout(10000)
    q.route("**/fonts.g*/**", lambda route: route.abort())
    q.on("pageerror", lambda e: page_errors.append(str(e)))
    q.on("dialog", lambda d: d.accept())
    if init:
        q.add_init_script(init)
    q.goto(BASE)
    q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
    return b, q


def task(q, task_id="W-TASK-01", tab="write"):
    q.evaluate("([id,tab])=>{PP_WRITING.start(id);PP_WRITING.select(tab)}", [task_id, tab])


def fill_task(q):
    task(q, tab="plan")
    q.locator("#pl-opinion").fill("My opinion for independent review")
    q.locator("#pl-ev0").fill("Evidence from the first source")
    q.locator("#pl-end").fill("My concluding statement")
    q.evaluate("PP_WRITING.select('write')")
    q.locator("#w-draft").fill("My newest essay.\n\nIt must survive reopening.")
    q.evaluate("PP_WRITING.select('check')")
    q.locator("#w-check input[type=checkbox]").first.check()
    q.evaluate("PP_WRITING.select('score')")
    q.locator("#w-score input[name=sc-purpose][value='2']").check()


def task_state(q):
    return q.evaluate("JSON.parse(JSON.stringify(PP_WRITING.state().data))")


def short(q, key):
    q.evaluate("k=>PP_SKILLS.open(k,'try')", key)


CORRECT = """()=>{const c=PP_PLAYER.ctx(),it=c.item,r=c.resp;
 const ix=cs=>cs.map((x,i)=>x.correct?i:-1).filter(i=>i>=0);
 if(it.type==='mc')r.v=ix(it.choices)[0];
 if(it.type==='ms')r.v=ix(it.choices);
 if(it.type==='ebsr'){r.a=ix(it.partA.choices)[0];r.b=ix(it.partB.choices);}
 if(it.type==='dropdown')r.v=it.slots.map(s=>s.answer);
 if(it.type==='hottext')r.v=it.options?it.answer.map(i=>'opt:'+i):it.answer.slice();
 if(it.type==='order')r.v=it.steps.map((s,i)=>i);
 if(it.type==='match')r.v=it.rows.map(x=>x.answer);
 c.onChange();}"""


server = subprocess.Popen(["node", "verification/serve.js", ".", "8389"], cwd=ROOT,
                          stdout=subprocess.DEVNULL)
time.sleep(.5)
try:
    with sync_playwright() as p:
        fixtures = [
            ("blocked", "Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})"),
            ("read-throws", "Storage.prototype.getItem=function(){throw new Error('blocked read')};"),
            ("quota", "Storage.prototype.setItem=function(){throw new Error('quota')};"),
            ("stale-quota", "localStorage.setItem('pp.task.W-TASK-01',JSON.stringify({draft:'Old persisted essay'}));Storage.prototype.setItem=function(){throw new Error('quota')};"),
        ]
        for name, init in fixtures:
            b, q = context(p, init)
            fill_task(q)
            before = task_state(q)
            notice = q.locator("#w-storage-note").inner_text()
            # Read can fail while a write succeeds: the success state must be truthful.
            if name != "read-throws":
                check(name + ": accurate unsaved notice", "only for this visit" in notice and "copy" in notice.lower(), notice)
            else:
                check(name + ": successful write clears failed-read notice", "saved" in notice and "unavailable" not in notice, notice)
            task(q, "W-TASK-02")
            check(name + ": separate task is empty", task_state(q)["draft"] == "")
            q.locator("#w-draft").fill("Task two separate essay")
            q.evaluate("PP_PATH.choose();PP_PATH.browse()")
            task(q)
            check(name + ": newest plan/draft/checks/scores survive reopen", task_state(q) == before, task_state(q))
            task(q, "W-TASK-02")
            check(name + ": second task preserves its own draft", task_state(q)["draft"] == "Task two separate essay")
            task(q, tab="score")
            q.get_by_role("button", name="Start this task over", exact=True).click()
            check(name + ": explicit reset clears task one", task_state(q) == {"plan": {}, "draft": "", "checks": [], "scores": {}}, task_state(q))
            task(q, "W-TASK-02")
            check(name + ": reset does not clear neighboring task", task_state(q)["draft"] == "Task two separate essay")
            b.close()

        # Recovery from a failed write to successful storage, including stale persisted data.
        init = "window.realSetItem=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw new Error('quota')}"
        b, q = context(p, init)
        fill_task(q)
        before = task_state(q)
        q.evaluate("Storage.prototype.setItem=window.realSetItem;PP_PATH.choose()")
        task(q)
        check("storage restored: latest in-memory task persists", q.evaluate("JSON.parse(localStorage.getItem('pp.task.W-TASK-01'))") == before)
        check("storage restored: warning clears after successful write", "unavailable" not in q.locator("#w-storage-note").inner_text())
        q.reload()
        q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
        task(q)
        check("working storage: all fields survive reload", task_state(q) == before)
        b.close()

        # A previously successful save must not be erased when reads fail later.
        b, q = context(p)
        fill_task(q)
        before = task_state(q)
        short_key = q.evaluate("Object.keys(PP.lessons).find(k=>PP.lessons[k].write&&PP.byId['SK:'+k+':y'])")
        short(q, short_key)
        q.locator("#sk-panel textarea").fill("Saved before read failure")
        q.evaluate("()=>{Storage.prototype.getItem=function(){throw new Error('new read failure')}}")
        task(q, "W-TASK-02")
        task(q)
        check("later read failure: clean extended cache retained", task_state(q) == before)
        short(q, short_key)
        check("later read failure: clean short writing cache retained", q.locator("#sk-panel textarea").input_value() == "Saved before read failure")
        check("later read failure: saved data is not falsely represented as future persistence", "only for this visit" in q.locator(".write-card [role=status]").inner_text())
        b.close()

        # Per-lesson writing (not just the extended essay).
        for name, init in fixtures:
            b, q = context(p, init)
            keys = q.evaluate("Object.keys(PP.lessons).filter(k=>PP.lessons[k].write&&PP.byId['SK:'+k+':y'])")
            key, other = keys[:2]
            short(q, key)
            q.locator("#sk-panel textarea").fill("Newest short writing")
            q.locator(".write-card input[type=checkbox]").first.check()
            short(q, other)
            q.locator("#sk-panel textarea").fill("Different lesson writing")
            short(q, key)
            check(name + ": short writing survives lesson return", q.locator("#sk-panel textarea").input_value() == "Newest short writing")
            check(name + ": short writing checkbox preserved", q.locator(".write-card input[type=checkbox]").first.is_checked())
            if name != "read-throws":
                check(name + ": short writing warns about browser close", "only for this visit" in q.locator(".write-card [role=status]").inner_text())
            short(q, other)
            check(name + ": short writing lesson isolation", q.locator("#sk-panel textarea").input_value() == "Different lesson writing")
            b.close()

        # Corrupt one nested lesson record while keeping a scored neighbor intact.
        neighbor = {"mastered": True, "best": 8, "bestMax": 8, "tries": 2, "passedAt": "2026-10-01",
                    "attempts": [{"n": 1, "d": "2026-10-01", "got": 8, "max": 8, "ok": True, "form": "A"}]}
        for bad in [True, "wrong", 42, None, []]:
            fixture = {"3.T.T.1.b": bad, "3.T.T.1.a": neighbor}
            b, q = context(p, "localStorage.setItem('pp.progress.v1'," + json.dumps(json.dumps(fixture)) + ")")
            q.evaluate("PP_SKILLS.open('3.T.T.1.b')")
            q.locator("#sk-tab-learn").click()
            check("malformed " + repr(bad) + ": tab usable", q.locator("#sk-tab-learn").get_attribute("aria-selected") == "true")
            stored = q.evaluate("JSON.parse(localStorage.getItem('pp.progress.v1'))")
            check("malformed " + repr(bad) + ": valid neighboring record unchanged", stored["3.T.T.1.a"] == neighbor, stored["3.T.T.1.a"])
            check("malformed " + repr(bad) + ": engagement never invents scored pass", not stored["3.T.T.1.b"].get("mastered") and not stored["3.T.T.1.b"].get("retainedAt"))
            b.close()

        b, q = context(p)
        q.evaluate("PP_PATH.open()")
        before = q.evaluate("localStorage.getItem('pp.progress.v1')")
        q.locator("#path-finished-0").check()
        check("path checklist does not write scored progress", q.evaluate("localStorage.getItem('pp.progress.v1')") == before)
        q.evaluate("PP_SKILLS.open('3.F.F.1.b','test')")
        for cb in q.locator("#sk-panel input[type=checkbox]").all():
            cb.check()
        check("adult ticks alone do not score a pass", q.evaluate("PP_SKILLS.status('3.F.F.1.b')") == "new")
        check("retained stays off", q.evaluate("PP_FLAGS.retained") is False)
        q.evaluate("PP_PLAYER.start('SK:3.T.T.1.b:p','test')")
        check("practice URL loophole stays closed", q.evaluate("PP_PLAYER.state().mode") == "practice")

        # Two scored attempts rotate A then B; rendering does not create an attempt.
        key = "3.L.V.3.a"
        check("new check starts A", q.evaluate("k=>PP_SKILLS.nextForm(k)", key) == "A")
        for expected in ["A", "B"]:
            sid = q.evaluate("k=>PP_SKILLS.checkSetId(k)", key)
            q.evaluate("id=>PP_PLAYER.start(id,'test')", sid)
            if q.locator("#tab-question").is_visible():
                q.locator("#tab-question").click()
            check("form " + expected + ": clean response at start", q.evaluate("PP_PLAYER.ctx().resp.v===null"))
            while not q.locator("#stage-work").evaluate("e=>e.hidden"):
                q.evaluate(CORRECT)
                q.locator("#q-next").evaluate("e=>e.click()")
            q.locator("#confirm-submit").click()
            check("form " + expected + ": successful scored attempt", "Passed" in q.locator("#res-guidance").inner_text())
        check("form B then rotates to A", q.evaluate("k=>PP_SKILLS.nextForm(k)", key) == "A")
        check("correct graph explanation compares picked values", q.evaluate("PP.byId['SK:3.L.V.3.a:tB'].items.find(i=>i.id==='SK-V3a-TB1').why").find("left to pick") < 0)
        check("count boundaries", q.evaluate("[0,1,2,9,10].map(PP.countWord)") == ["zero", "one", "two", "nine", "10"])
        b.close()

        # New notices and normal long writing at the full requested viewport matrix.
        for width, height in [(320,568),(390,844),(844,390),(768,1024),(1024,768),(1366,768),(1920,1080)]:
            b, q = context(p, fixtures[0][1], width, height)
            fill_task(q)
            check(str(width) + "x" + str(height) + ": writing notice/layout no sideways overflow", q.evaluate("document.documentElement.scrollWidth<=innerWidth+1"))
            check(str(width) + "x" + str(height) + ": warning exposed as status", q.locator("#w-storage-note").get_attribute("role") == "status")
            b.close()
        check("no uncaught page errors", not page_errors, page_errors)
finally:
    server.terminate()
    (OUT / "independent-review-results.json").write_text(json.dumps({"results": results, "page_errors": page_errors,
        "environment": "Chromium 131 desktop-context simulation; not actual-device acceptance"}, indent=2) + "\n")

failed = sum(not r["pass"] for r in results)
print(f"{len(results)-failed} passed; {failed} failed", flush=True)
sys.exit(1 if failed else 0)
