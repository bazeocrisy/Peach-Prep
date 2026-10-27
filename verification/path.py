#!/usr/bin/env python3
"""Integration audit for learning choice/path. Serve the repo first.
Optional CHROMIUM_PATH / CHROMIUM_ARGS (JSON array) for a supplied browser.
Run: python3 verification/path.py http://127.0.0.1:8352/ [evidence-dir]
"""
import json,os,sys,csv
from pathlib import Path
from playwright.sync_api import sync_playwright
BASE=sys.argv[1] if len(sys.argv)>1 else 'http://127.0.0.1:8352/'
OUT=Path(sys.argv[2]) if len(sys.argv)>2 else None
if OUT: OUT.mkdir(parents=True,exist_ok=True)
matrix=list(csv.DictReader(open(Path(__file__).resolve().parent.parent/"docs/audits/PP-004-FINAL-COVERAGE-MATRIX.csv")))
results=[]
def check(name,good,detail=None):
    results.append({'name':name,'pass':bool(good),'detail':detail})
    print(('PASS ' if good else 'FAIL ')+name,flush=True)
def launch(p):
    kw={}
    if os.environ.get('CHROMIUM_PATH'):kw['executable_path']=os.environ['CHROMIUM_PATH']
    if os.environ.get('CHROMIUM_ARGS'):kw['args']=json.loads(os.environ['CHROMIUM_ARGS'])
    return p.chromium.launch(**kw)
def ready(q):
    q.goto(BASE);q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
def no_overflow(q):return q.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
try:
 with sync_playwright() as p:
  for w,h in [(320,640),(390,844),(768,1024),(1366,900)]:
    b=launch(p);q=b.new_page(viewport={'width':w,'height':h},has_touch=w<1000,is_mobile=w<500)
    q.route('**/fonts.g*/**',lambda r:r.abort());errors=[];q.on('pageerror',lambda e:errors.append(str(e)))
    ready(q)
    check(f'{w}: fresh visitor gets focused two-choice screen',q.locator('#screen-choose').is_visible() and q.locator('#choose-title').evaluate('(e)=>e===document.activeElement'))
    check(f'{w}: choice layout and control targets',no_overflow(q) and q.locator('#choose-path').bounding_box()['height']>=44 and q.locator('#choose-browse').bounding_box()['height']>=44)
    if OUT:q.screenshot(path=str(OUT/f'choice-{w}.png'),full_page=True)
    q.locator('#choose-path').click()
    check(f'{w}: introduction before start',q.locator('#path-intro').is_visible() and 'not proof of mastery' in q.locator('#path-intro').text_content())
    q.locator('#path-preview').click()
    check(f'{w}: preview expands and focuses first phase',q.locator('#path-phase-1').evaluate('(e)=>e.open && e.querySelector("summary")===document.activeElement'))
    q.locator('#path-start').click()
    check(f'{w}: start saves preference and focuses next lesson',q.evaluate("JSON.parse(localStorage.getItem('pp.path.v1')).mode==='path'") and q.locator('#path-next').evaluate('(e)=>e===document.activeElement'))
    check(f'{w}: all 101 activities unique',q.evaluate("(()=>{const ks=PP_PATH.entries();return ks.length===101 && new Set(ks).size===101;})()"))
    check(f'{w}: catalog and routine counts',q.evaluate("(()=>{const ks=PP_PATH.entries();return ks.filter(k=>!k.startsWith('task:')).length===99 && document.querySelectorAll('#path-phase-habits input[type=checkbox]').length===53;})()"))
    mapping=q.evaluate("({entries:PP_PATH.entries(),habits:[...document.querySelectorAll('#path-phase-habits input')].map(i=>i.dataset.pathCode)})")
    covered=all(all(k.strip() in mapping['entries'] for k in r['lesson_keys'].split(';') if k.strip()) for r in matrix if r['domain']!='Practices')
    check(f'{w}: every matrix lesson key resolves',covered)
    check(f'{w}: all 53 official practice codes mapped',set(mapping['habits'])=={r['code'] for r in matrix if r['domain']=='Practices'})
    check(f'{w}: required story-elements starting point','Story elements' in q.locator('#path-current').text_content())
    check(f'{w}: parallel activities visible from start',q.locator('.path-alongside').is_visible() and 'start this week' in q.locator('.path-alongside').text_content())
    check(f'{w}: path layout',no_overflow(q))
    if OUT:q.screenshot(path=str(OUT/f'path-{w}.png'),full_page=True)
    # question-first (docs/question-first/TEST-CHANGES.md): the first path lesson has core practice, so Start opens its first question;
    # the five-step lesson is reached with the Skill overview button and keeps the same bookmark and resume assertions.
    q.locator('#path-next').click()
    check(f'{w}: Start opens the first practice question and the path bookmark is saved',q.locator('#screen-player').is_visible() and q.evaluate("JSON.parse(localStorage.getItem('pp.path.v1')).bookmark.key==='3.T.T.1.b'"))
    q.locator('#player-back').click()
    check(f'{w}: question Back returns to path',q.locator('#screen-path').is_visible())
    q.locator('#path-overview').click();q.locator('#sk-tab-learn').click()
    check(f'{w}: lesson opens and step bookmark saved',q.locator('#screen-skill').is_visible() and q.evaluate("JSON.parse(localStorage.getItem('pp.path.v1')).bookmark.step==='learn'"))
    q.locator('#skill-back').click()
    check(f'{w}: lesson Back returns to path',q.locator('#screen-path').is_visible())
    q.reload();q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
    q.locator('#path-overview').click()
    check(f'{w}: reload resumes lesson step',q.locator('#sk-tab-learn').get_attribute('aria-selected')=='true')
    q.locator('#skill-back').click()
    before=q.evaluate("localStorage.getItem('pp.progress.v1')")
    q.locator('#path-finished-0').check()
    check(f'{w}: finished activity selects next without changing scores',q.evaluate("localStorage.getItem('pp.progress.v1')")==before and 'Story clues' in q.locator('#path-current').text_content())
    q.locator('#path-finished-0').uncheck()
    check(f'{w}: unfinished can be revisited','Story elements' in q.locator('#path-current').text_content())
    q.get_by_role('button',name='Everyday parent activities',exact=True).click()
    q.locator('.path-habit-group').first.locator('summary').click();q.locator('#path-habit-0').check()
    check(f'{w}: habit recorded separately',q.evaluate("Object.keys(JSON.parse(localStorage.getItem('pp.path.v1')).habits).length===1") and '1 of 53' in q.locator('#path-progress').text_content())
    q.locator('#screen-path [data-go=choose]').click()
    q.locator('#choose-browse').click()
    check(f'{w}: browse selection opens existing catalog',q.locator('#screen-home').is_visible() and q.locator('#skill-list [data-code]').count()>=99)
    check(f'{w}: switching preserves scores and path records',q.evaluate("localStorage.getItem('pp.progress.v1')")==before and q.evaluate("Object.keys(JSON.parse(localStorage.getItem('pp.path.v1')).habits).length===1"))
    q.reload();q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
    check(f'{w}: browse preference survives reload',q.locator('#screen-home').is_visible())
    q.locator('#screen-home [data-go=path]').click()
    check(f'{w}: return to path remembers introduction',q.locator('#path-intro').is_hidden() and q.evaluate("JSON.parse(localStorage.getItem('pp.path.v1')).mode==='path'"))
    # A keyboard user can expand a phase and operate its checkbox without a mouse.
    q.locator('#path-phase-P > summary').focus();q.keyboard.press('Enter')
    check(f'{w}: keyboard expands parallel lane',q.locator('#path-phase-P').evaluate('(e)=>e.open'))
    check(f'{w}: expanded foundations layout',no_overflow(q))
    q.locator('#path-phase-G > summary').click()
    check(f'{w}: Grade 3 introduction label honest','end-of-grade mastery is not required' in q.locator('#path-phase-G').text_content() and no_overflow(q))
    # Jump directly to writing and verify the in-app Back route.
    q.evaluate("PP_PATH.phases().find(p=>p.id==='6')")
    q.locator('#path-phase-6 > summary').click()
    q.locator('[data-path-key="task:W-TASK-01"]').evaluate('(e)=>{for(let p=e.parentElement;p;p=p.parentElement)if(p.tagName==="DETAILS")p.open=true}')
    q.locator('[data-path-key="task:W-TASK-01"]').click();q.locator('#write-back').click()
    q.wait_for_function("!document.querySelector('#screen-path').hidden")
    check(f'{w}: writing returns to path',q.locator('#screen-path').is_visible())
    # Browser Back/Forward from a path-opened lesson.
    q.locator('[data-path-key="3.T.T.1.b"]').evaluate('(e)=>{for(let p=e.parentElement;p;p=p.parentElement)if(p.tagName==="DETAILS")p.open=true}')
    q.locator('[data-path-key="3.T.T.1.b"]').click();q.go_back();q.wait_for_function("!document.querySelector('#screen-path').hidden")
    check(f'{w}: browser Back to path',q.locator('#screen-path').is_visible())
    q.go_forward();q.wait_for_function("!document.querySelector('#screen-player').hidden")   # question-first: a core lesson opens its first question
    check(f'{w}: browser Forward reopens lesson',q.locator('#screen-player').is_visible())
    q.evaluate("PP_PLAYER.start('SK:3.T.T.1.b:t','test')")
    q.evaluate("(()=>{const c=PP_PLAYER.ctx();c.resp.v=0;c.onChange();})()")
    q.once('dialog',lambda d:d.dismiss());q.evaluate("PP_PATH.choose()")
    check(f'{w}: canceled navigation keeps active test',q.locator('#screen-player').is_visible() and q.evaluate('PP_PLAYER.inProgress()'))
    q.once('dialog',lambda d:d.accept());q.evaluate("PP_PATH.choose()")
    check(f'{w}: accepted navigation leaves test safely',q.locator('#screen-choose').is_visible() and not q.evaluate('PP_PLAYER.inProgress()'))
    check(f'{w}: no page errors',not errors,errors)
    b.close()
  # Corrupted storage is recoverable; blocked storage still supports an in-session path.
  for name,init in [
    ('malformed',"localStorage.setItem('pp.path.v1','{bad')"),
    ('wrong-types',"localStorage.setItem('pp.path.v1',JSON.stringify({mode:[],bookmark:{key:'missing'},finished:[],habits:42}))"),
    ('blocked',"Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})"),
    ('quota',"Storage.prototype.setItem=function(){throw new Error('quota')}"),
    ('legacy',"localStorage.setItem('pp.progress.v1',JSON.stringify({'3.T.T.1.b':{mastered:true,best:8,max:8,tries:1}}));localStorage.setItem('pp.task.W-TASK-01',JSON.stringify({draft:'Keep my essay'}))")]:
    b=launch(p);q=b.new_page(viewport={'width':390,'height':844});q.route('**/fonts.g*/**',lambda r:r.abort());q.add_init_script(init);errors=[];q.on('pageerror',lambda e:errors.append(str(e)));ready(q)
    check(name+': startup usable',q.locator('#screen-choose').is_visible())
    q.locator('#choose-path').click();q.locator('#path-start').click()
    check(name+': path usable',q.locator('#path-next').is_visible() and no_overflow(q))
    if name in ['blocked','quota']:check(name+': persistence limitation visible','only for this visit' in q.locator('#screen-path .path-storage').text_content())
    if name=='legacy':
      check('legacy: passed score not erased or converted to route completion',q.evaluate("PP_SKILLS.status('3.T.T.1.b')==='mastered' && !JSON.parse(localStorage.getItem('pp.path.v1')).finished['3.T.T.1.b']"))
      check('legacy: essay draft preserved',q.evaluate("JSON.parse(localStorage.getItem('pp.task.W-TASK-01')).draft==='Keep my essay'"))
    check(name+': no page errors',not errors,errors);b.close()
  # End-of-path and invalid bookmark recovery are independent of test scores.
  b=launch(p);q=b.new_page(viewport={'width':390,'height':844});q.route('**/fonts.g*/**',lambda r:r.abort());ready(q)
  q.locator('#choose-path').click();q.locator('#path-start').click()
  q.evaluate("(()=>{const s=JSON.parse(localStorage.getItem('pp.path.v1'));s.finished=Object.fromEntries(PP_PATH.entries().map(k=>[k,true]));s.habits=Object.fromEntries(Object.keys(PP_HABITS).map(k=>[k,true]));localStorage.setItem('pp.path.v1',JSON.stringify(s));})()")
  q.goto(BASE);q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
  check('completed: root remembers path mode',q.locator('#screen-path').is_visible())
  check('completed: honest finish message and no next lesson',q.locator('#path-next').count()==0 and 'does not establish mastery' in q.locator('#path-current').text_content() and '101 of 101' in q.locator('#path-progress').text_content() and '53 of 53' in q.locator('#path-progress').text_content())
  q.locator('#path-finished-0').evaluate('(e)=>{for(let p=e.parentElement;p;p=p.parentElement)if(p.tagName==="DETAILS")p.open=true}')
  q.locator('#path-finished-0').uncheck()
  check('completed: unchecking restores a next lesson','Story elements' in q.locator('#path-current').text_content())
  q.evaluate("(()=>{const s=JSON.parse(localStorage.getItem('pp.path.v1'));s.bookmark={key:'no-such-lesson',step:'bogus'};localStorage.setItem('pp.path.v1',JSON.stringify(s));})()")
  q.reload();q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
  check('invalid bookmark: falls back to unfinished lesson','Story elements' in q.locator('#path-current').text_content())
  q.goto(BASE+'#no-such-page');q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
  check('invalid address: visible recovery note',q.locator('#screen-home').is_visible() and q.locator('#home-notfound').is_visible())
  b.close()
finally:
 if OUT:(OUT/'path-results.json').write_text(json.dumps(results,indent=2)+'\n')
print(f'{sum(x["pass"] for x in results)} passed, {sum(not x["pass"] for x in results)} failed',flush=True)
sys.exit(1 if any(not x['pass'] for x in results) else 0)
