import json, subprocess, time
from pathlib import Path
from playwright.sync_api import sync_playwright

E = Path('/workspace/scratch/bd2016b2a547/audit-evidence')
BASE = 'http://127.0.0.1:8351/'
server = subprocess.Popen(['node','verification/serve.js','.','8351'], stdout=subprocess.DEVNULL)
time.sleep(.4)
results = []
def check(name, good, detail=None):
    results.append({'name': name, 'pass': bool(good), 'detail': detail})
    print(('PASS ' if good else 'FAIL ') + name, flush=True)

try:
  with sync_playwright() as p:
    for w,h in [(320,640),(390,844),(768,1024),(1366,900)]:
      b=p.chromium.launch(executable_path=str(E/'chromium-old'), args=json.loads((E/'browser-old-args.json').read_text()))
      print('BROWSER '+b.version,flush=True)
      q=b.new_page(viewport={'width':w,'height':h},has_touch=w<1000,is_mobile=w<500)
      q.route('**/fonts.g*/**',lambda r:r.abort())
      errors=[]
      q.on('pageerror',lambda e:errors.append(str(e)))
      q.on('dialog',lambda d:d.accept())
      q.goto(BASE)
      q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
      q.evaluate("PP_PARENTS.open('standards')")
      official=q.evaluate("""(()=>{const ds=[...document.querySelectorAll('#std-list details.std')];
        return {n:ds.length, missing:PP_STANDARDS.filter(s=>!ds.some(d=>d.textContent.includes(s.official)&&d.textContent.includes('standards p. '+s.page))).map(s=>s.code)};})()""")
      check(f'{w}: parent guide official wording and pages',official['n']==147 and not official['missing'],official)
      q.evaluate("PP_PARENTS.open('plan')")
      text=q.locator('#screen-parents').text_content()
      check(f'{w}: alternate forms explained', 'Most skill checks use the same questions' in text and 'switches forms between tries' in text)
      for key in ['3.T.C.1.b','3.T.C.2.c','3.T.RA.1.b','3.L.GC.2.a']:
        for step in ['teach','learn','practice','try','test']:
          q.evaluate('([k,s])=>PP_SKILLS.open(k,s)',[key,step])
          check(f'{w}: {key} {step} layout',q.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
        if key=='3.T.C.1.b':q.screenshot(path=str(E/f'gap-check-{w}.png'),full_page=True)
      q.evaluate("PP_SKILLS.open('3.T.T.4.a','test'); PP_PLAYER.start('SK:3.T.T.4.a:tB','test')")
      q.evaluate("PP_PLAYER.abandon()")
      for tid in ['W-TASK-01','W-TASK-02']:
        q.evaluate('(id)=>PP_WRITING.start(id)',tid)
        q.evaluate("PP_WRITING.select('score')")
        check(f'{w}: {tid} parent score guidance',q.locator('.score-steps').count()==3 and q.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
      q.screenshot(path=str(E/f'writing-score-{w}.png'),full_page=True)
      check(f'{w}: no page errors',not errors,errors)
      b.close()
finally:
  server.terminate()
  (E/'focused-browser-results.json').write_text(json.dumps(results,indent=2))
print(f'{sum(x["pass"] for x in results)} passed, {sum(not x["pass"] for x in results)} failed')
