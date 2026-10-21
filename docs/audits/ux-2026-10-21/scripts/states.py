"""State/transition audit. Response fixtures test UI/scoring plumbing, not blind solves."""
from runtime import *
from playwright.sync_api import sync_playwright
import ast
METRIC=next(ast.literal_eval(n.value) for n in ast.parse((OUT/'scripts/screens.py').read_text()).body if isinstance(n,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='METRIC' for t in n.targets))
FILL="""right=>{const c=PP_PLAYER.ctx(),it=c.item;const ix=cs=>cs.map((x,i)=>x.correct?i:-1).filter(i=>i>=0);let r;
switch(it.type){case 'mc':r={v:right?ix(it.choices)[0]:it.choices.findIndex(x=>!x.correct)};break;
case 'ms':r={v:right?ix(it.choices):it.choices.map((x,i)=>i).filter(i=>!it.choices[i].correct).concat(ix(it.choices)).slice(0,it.pick||ix(it.choices).length)};break;
case 'ebsr':r={a:right?ix(it.partA.choices)[0]:it.partA.choices.findIndex(x=>!x.correct),b:ix(it.partB.choices)};break;
case 'dropdown':r={v:it.slots.map(s=>right?s.answer:(s.answer+1)%s.options.length)};break;
case 'hottext':{const targets=it.options?it.options.map((_,i)=>'opt:'+i):it.targets;const answers=it.options?it.answer.map(i=>'opt:'+i):it.answer;r={v:right?answers:targets.filter(x=>!answers.includes(x)).concat(answers).slice(0,answers.length)};break;}
case 'order':r={v:it.steps.map((_,i)=>i)};if(!right)r.v.reverse();break;
case 'match':r={v:it.rows.map(s=>right?s.answer:(s.answer+1)%it.cols.length)};break;}
Object.assign(c.resp,r);c.onChange();return {type:it.type,score:PP_ITEMS[it.type].score(it,c.resp),resp:c.resp};}"""
checks=[];states=[];errors=[]
def check(name,passed,detail=None):checks.append({'name':name,'pass':bool(passed),'detail':detail})
s=server()
try:
 with sync_playwright() as p:
  for w,h in [(320,568),(1366,768),(844,390)]:
   b=browser(p);q=b.new_page(viewport={'width':w,'height':h});q.route('**/fonts.g*/**',lambda r:r.abort());q.on('dialog',lambda d:d.accept());q.on('pageerror',lambda e:errors.append({'viewport':[w,h],'error':str(e)}));ready(q)
   def snap(key,shot=False):
    r=q.evaluate(METRIC);r.update(state=key,viewport=f'{w}x{h}');states.append(r)
    if shot:q.screenshot(path=str(OUT/f'evidence/state-{key.replace(":","-")}-{w}.png'),full_page=True)
   # Question UI branches for every format, including mobile question pane.
   reps=q.evaluate("""()=>{const r={};for(const s of PP.sets.filter(s=>s.kind!=='skill'||s.part==='p'))for(let i=0;i<s.items.length;i++)if(!r[s.items[i].type])r[s.items[i].type]={set:s.id,pos:i};return r}""")
   for typ,rep in reps.items():
    q.evaluate('(id)=>PP_PLAYER.start(id,"practice")',rep['set'])
    for n in range(rep['pos']):q.locator('#q-next').evaluate('(e)=>e.click()')
    if q.locator('#tab-question').is_visible():q.locator('#tab-question').click()
    check(f'{w} {typ}: representative correct item',q.evaluate('PP_PLAYER.ctx().item.type')==typ)
    snap(typ+':unanswered');check(f'{w} {typ}: check disabled unanswered',q.locator('#q-check').is_disabled())
    r=q.evaluate(FILL,False);q.locator('#q-check').click();snap(typ+':incorrect',typ in ['match','ebsr'] and w==320);check(f'{w} {typ}: wrong feedback',q.locator('#q-feedback').is_visible(),r)
    for level in range(1,4):
     if q.locator('#q-help').is_visible() and not q.locator('#q-help').is_disabled():q.locator('#q-help').click()
     snap(typ+':hint-'+str(level))
    q.evaluate(FILL,True);q.locator('#q-check').click();snap(typ+':correct',typ=='hottext' and w==320)
    check(f'{w} {typ}: correct unlocks next',q.locator('#q-next').is_visible())
    q.locator('#q-next').click()
    if q.locator('#stage-work').is_visible():check(f'{w} {typ}: next clears feedback/hints',q.locator('#q-feedback').is_hidden() and q.locator('#q-help-steps').inner_text()=='')
   # Real keyboard interaction with choice, roving lesson tabs, select, order, match.
   q.evaluate('PP_PLAYER.start("SK:3.T.T.1.b:p","practice")');
   if q.locator('#tab-question').is_visible():q.locator('#tab-question').click()
   choice=q.locator('#q-body .choice').first;choice.focus();q.keyboard.press('Space');check(f'{w}: keyboard choice selects',choice.get_attribute('aria-pressed')=='true')
   q.evaluate('PP_PLAYER.abandon();PP_SKILLS.open("3.T.T.1.b")');q.locator('#sk-tab-teach').focus();q.keyboard.press('ArrowRight');check(f'{w}: keyboard lesson tab selects/focuses',q.locator('#sk-tab-learn').get_attribute('aria-selected')=='true' and q.locator('#sk-tab-learn').evaluate('(e)=>e===document.activeElement'))
   # Render/open does not pass/finish anything. Step completion is a separate engagement marker.
   q.evaluate('localStorage.clear()');ready(q)
   q.locator('#choose-path').click();q.locator('#path-start').click();before=q.evaluate("localStorage.getItem('pp.progress.v1')")
   q.locator('#path-finished-0').check();check(f'{w}: path checklist never scores',q.evaluate("localStorage.getItem('pp.progress.v1')")==before)
   q.evaluate('PP_SKILLS.open("3.T.T.1.b","test")');check(f'{w}: opening check does not award pass',q.evaluate('PP_SKILLS.status("3.T.T.1.b")')=='new')
   # All test states with skip, previous, submit, review/explanation, reload finished.
   q.evaluate('PP_PLAYER.start("SK:3.T.T.1.b:t","test")');
   if q.locator('#tab-question').is_visible():q.locator('#tab-question').click()
   q.locator('#q-next').click();snap('test-skipped');q.locator('#q-prev').click();check(f'{w}: skipped response remains blank',q.evaluate('PP_PLAYER.ctx().resp.v===null'))
   q.evaluate(FILL,True);saved=q.evaluate('JSON.stringify(PP_PLAYER.ctx().resp)');q.locator('#q-next').click();q.locator('#q-prev').click();check(f'{w}: previous retains own response',q.evaluate('JSON.stringify(PP_PLAYER.ctx().resp)')==saved)
   while q.locator('#stage-work').is_visible():q.locator('#q-next').click()
   snap('test-confirm',w==320);q.locator('#confirm-submit').click();snap('test-submitted');q.locator('#res-review-btn').click();snap('test-review',w==320)
   exp=q.locator('#res-review button').all()
   if exp:exp[0].click();snap('test-review-explanation')
   before=q.evaluate("localStorage.getItem('pp.progress.v1')");q.reload();q.wait_for_function("document.querySelector('#build-badge').textContent.length>0");snap('test-completed-reopened');check(f'{w}: reopening does not duplicate attempt',q.evaluate("localStorage.getItem('pp.progress.v1')")==before)
   q.locator('#again-start').click();check(f'{w}: repeat attempt clean',q.evaluate('PP_PLAYER.state().pos===0 && PP_PLAYER.state().help.every(x=>!x)') and q.locator('#q-feedback').is_hidden())
   # Draft/task isolation and modes.
   q.evaluate('PP_PLAYER.abandon();PP_WRITING.start("W-TASK-01");PP_WRITING.select("write")');q.locator('#w-draft').fill('My saved essay.\n\nA second paragraph.');q.evaluate('PP_WRITING.start("W-TASK-02");PP_WRITING.select("write")');check(f'{w}: task draft isolation',q.locator('#w-draft').input_value()=='')
   q.evaluate('PP_PATH.choose()');q.locator('#choose-browse').click();q.evaluate('PP_WRITING.start("W-TASK-01");PP_WRITING.select("write")');check(f'{w}: mode change preserves draft',q.locator('#w-draft').input_value().startswith('My saved essay.'));snap('writing-filled',w in [320,844])
   q.reload();q.wait_for_function("document.querySelector('#build-badge').textContent.length>0");q.evaluate('PP_WRITING.select("write")');check(f'{w}: draft survives reload',q.locator('#w-draft').input_value().startswith('My saved essay.'))
   # Invalid address and path completion fixture, then re-open route.
   q.goto(BASE+'#invalid-route');q.wait_for_function("document.querySelector('#build-badge').textContent.length>0");snap('invalid-address');check(f'{w}: invalid address recovers',q.locator('#home-notfound').is_visible())
   q.evaluate("()=>{const d=JSON.parse(localStorage.getItem('pp.path.v1'));d.mode='path';d.finished=Object.fromEntries(PP_PATH.entries().map(k=>[k,true]));localStorage.setItem('pp.path.v1',JSON.stringify(d));}");ready(q);snap('path-complete',w==320);check(f'{w}: completed path honest',q.locator('#path-next').count()==0 and 'does not establish mastery' in q.locator('#path-current').inner_text())
   b.close();dump('evidence/state-ledger.json',states);dump('evidence/transition-checks.json',checks);dump('evidence/state-errors.json',errors);print(f'{w}: {len(checks)} checks, {sum(not c["pass"] for c in checks)} failed',flush=True)
  # Damaged and unavailable storage fixture coverage.
  storage=[]
  for name,init in [('malformed',"localStorage.setItem('pp.progress.v1','{bad');localStorage.setItem('pp.path.v1','{bad');localStorage.setItem('pp.task.W-TASK-01','{bad')"),('nested-primitive',"localStorage.setItem('pp.progress.v1',JSON.stringify({'3.T.T.1.b':true}))"),('blocked',"Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})"),('quota',"Storage.prototype.setItem=function(){throw new Error('quota')}"),('wrong-task-types',"localStorage.setItem('pp.task.W-TASK-01',JSON.stringify({plan:null,draft:42,checks:'bad',scores:[]}))")]:
   b=browser(p);q=b.new_page(viewport={'width':390,'height':844});q.add_init_script(init);er=[];q.on('pageerror',lambda e:er.append(str(e)));ready(q)
   result={'fixture':name,'startup':q.locator('#screen-choose').is_visible()}
   try:
    q.evaluate('PP_SKILLS.open("3.T.T.1.b")');q.locator('#sk-tab-learn').click();result['lesson_usable']=q.locator('#sk-tab-learn').get_attribute('aria-selected')=='true'
    q.evaluate('PP_WRITING.start("W-TASK-01");PP_WRITING.select("write")');q.locator('#w-draft').fill('Keep this draft');result['storage_notice']=q.locator('#screen-write').inner_text();q.evaluate('PP_PATH.choose();PP_WRITING.start("W-TASK-01");PP_WRITING.select("write")');result['draft_after_return']=q.locator('#w-draft').input_value()
   except Exception as e:result['exception']=str(e)
   result['pageerrors']=er;storage.append(result)
   if name in ['blocked','nested-primitive']:q.screenshot(path=str(OUT/f'evidence/storage-{name}.png'),full_page=True)
   b.close()
  dump('evidence/storage.json',storage)
finally:s.terminate()
