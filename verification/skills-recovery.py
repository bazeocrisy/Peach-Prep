#!/usr/bin/env python3
"""Focused progress/short-writing recovery regression; browser fixture data only.

Run with Playwright available. CHROMIUM_PATH optionally supplies an executable.
"""
import json
import os
import subprocess
import time
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
BASE = 'http://127.0.0.1:8369/'
ARGS = ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu', '--disable-software-rasterizer', '--disable-seccomp-filter-sandbox', '--disable-setuid-sandbox', '--no-zygote', '--single-process', '--in-process-gpu', '--disable-features=FontDataService,FontationsFontBackend']
checks = []


def check(name, good):
    checks.append({'name': name, 'pass': bool(good)})
    if not good:
        raise AssertionError(name)


def launch(p):
    opts = {'args': ARGS}
    if os.environ.get('CHROMIUM_PATH'):
        opts['executable_path'] = os.environ['CHROMIUM_PATH']
        opts['env'] = {**os.environ, 'LD_LIBRARY_PATH': str(Path(opts['executable_path']).parent), 'FONTCONFIG_PATH': '/etc/fonts'}
    return p.chromium.launch(**opts)


def ready(q):
    q.goto(BASE)
    q.wait_for_function("document.querySelector('#build-badge').textContent.length > 0")


server = subprocess.Popen(['node', 'verification/serve.js', '.', '8369'], cwd=ROOT, stdout=subprocess.DEVNULL)
time.sleep(.3)
try:
    with sync_playwright() as p:
        neighbor = {'mastered': True, 'passedAt': '2026-10-20', 'passBy': 'test', 'passForm': 'A', 'best': {'got': 6, 'max': 6}, 'bestMax': 6, 'tries': 1, 'attempts': [{'d': '2026-10-20', 'got': 6, 'max': 6, 'ok': True, 'n': 1, 'afterAnswers': False, 'form': 'A'}]}
        for broken in [True, False, 'bad', 42, None, [], [1, 2]]:
            b = launch(p)
            q = b.new_page(viewport={'width': 390, 'height': 844})
            fixture = json.dumps({'3.T.T.1.b': broken, '3.L.V.3.a': neighbor, '_ui': {'lastCat': 'writing'}})
            q.add_init_script('localStorage.setItem("pp.progress.v1", ' + json.dumps(fixture) + ')')
            errors = []
            q.on('pageerror', lambda e: errors.append(str(e)))
            ready(q)
            q.evaluate('PP_SKILLS.open("3.T.T.1.b")')
            check(f'{broken!r}: opening never passes', q.evaluate('PP_SKILLS.status("3.T.T.1.b")') == 'new')
            q.locator('#sk-tab-learn').click()
            check(f'{broken!r}: Watch Me opens', q.locator('#sk-tab-learn').get_attribute('aria-selected') == 'true')
            stored = q.evaluate('JSON.parse(localStorage.getItem("pp.progress.v1"))')
            check(f'{broken!r}: neighbor untouched', stored['3.L.V.3.a'] == neighbor)
            check(f'{broken!r}: category retained', stored['_ui'] == {'lastCat': 'writing'})
            check(f'{broken!r}: no invented pass or Retained', not stored['3.T.T.1.b'].get('mastered') and 'retainedAt' not in stored['3.T.T.1.b'])
            check(f'{broken!r}: no errors', not errors)
            b.close()

        for name, init in [
            ('blocked', 'Object.defineProperty(window,"localStorage",{get(){throw new Error("blocked")}})'),
            ('quota', 'window.__realSet=Storage.prototype.setItem;Storage.prototype.setItem=function(){throw new Error("quota")}'),
            ('normal', ''),
            ('malformed-writing', ''),
        ]:
            b = launch(p)
            q = b.new_page(viewport={'width': 320, 'height': 568})
            if init:
                q.add_init_script(init)
            ready(q)
            keys = q.evaluate('Object.keys(PP.lessons).filter(k=>PP.lessons[k].write && PP.byId["SK:"+k+":y"]).slice(0,2)')
            first, second = keys
            if name == 'malformed-writing':
                q.evaluate('(k)=>localStorage.setItem("pp.skwrite."+k,"{bad")', first)
            q.evaluate('(k)=>PP_SKILLS.open(k,"try")', first)
            check(name + ': no unload warning before changes', not q.evaluate('()=>{const e=new Event("beforeunload",{cancelable:true});dispatchEvent(e);return e.defaultPrevented}'))
            q.locator('#sk-panel textarea').fill('A newer sentence that should survive.')
            q.locator('#sk-panel .write-checklist input').first.check()
            if name in ['blocked', 'quota']:
                check(name + ': accurate notice', 'Browser saving is unavailable' in q.locator('#sk-panel').inner_text())
                check(name + ': unload protects unsaved writing', q.evaluate('()=>{const e=new Event("beforeunload",{cancelable:true});dispatchEvent(e);return e.defaultPrevented}'))
            else:
                check(name + ': no false unavailable warning', 'Browser saving is unavailable' not in q.locator('#sk-panel').inner_text())
            q.evaluate('(k)=>PP_SKILLS.open(k,"try")', second)
            check(name + ': other lesson isolated', q.locator('#sk-panel textarea').input_value() == '')
            q.locator('#sk-panel textarea').fill('Another lesson has different writing.')
            q.evaluate('PP_PATH.choose();PP_APP.landBrowse()')
            q.evaluate('(k)=>PP_SKILLS.open(k,"try")', first)
            check(name + ': text retained through mode/lesson change', q.locator('#sk-panel textarea').input_value() == 'A newer sentence that should survive.')
            check(name + ': checklist retained', q.locator('#sk-panel .write-checklist input').first.is_checked())
            if name == 'quota':
                q.evaluate('()=>{Storage.prototype.setItem=window.__realSet}')
                q.locator('#sk-panel textarea').fill('Saving works again.')
                check(name + ': notice recovers after successful save', 'Browser saving is unavailable' not in q.locator('#sk-panel').inner_text())
            if name == 'normal':
                q.reload()
                q.wait_for_function("document.querySelector('#build-badge').textContent.length > 0")
                check(name + ': reload preserved text', q.locator('#sk-panel textarea').input_value() == 'A newer sentence that should survive.')
                q.evaluate('(k)=>localStorage.removeItem("pp.skwrite."+k)', first)
                q.evaluate('(k)=>PP_SKILLS.open(k,"teach")', first)
                q.evaluate('(k)=>PP_SKILLS.open(k,"try")', first)
                check(name + ': externally cleared saved writing stays cleared', q.locator('#sk-panel textarea').input_value() == '')
            b.close()
finally:
    server.terminate()

print(json.dumps({'checks': checks, 'passed': sum(r['pass'] for r in checks), 'failed': sum(not r['pass'] for r in checks)}, indent=2))
