from runtime import *
from playwright.sync_api import sync_playwright
import ast
METRIC=next(ast.literal_eval(n.value) for n in ast.parse((OUT/'scripts/screens.py').read_text()).body if isinstance(n,ast.Assign) and any(isinstance(t,ast.Name) and t.id=='METRIC' for t in n.targets))
rows=[];s=server()
try:
 with sync_playwright() as p:
  for w,h in [(320,568),(1366,768)]:
   b=browser(p);q=b.new_page(viewport={'width':w,'height':h});q.route('**/fonts.g*/**',lambda r:r.abort());q.on('dialog',lambda d:d.accept());ready(q)
   def snap(key,shot=False):
    r=q.evaluate(METRIC);r.update(state=key,viewport=f'{w}x{h}');rows.append(r)
    if shot:q.screenshot(path=str(OUT/f'evidence/supplement-{key.replace(":","-").replace("/","-")}-{w}.png'),full_page=True)
   sets=q.evaluate('PP.sets.map(s=>({id:s.id,items:s.items.map(i=>({id:i.id,type:i.type}))}))')
   for S in sets:
    q.evaluate('(id)=>PP_PLAYER.start(id,"test")',S['id'])
    if q.locator('#tab-question').is_visible():q.locator('#tab-question').click()
    for it in S['items']:
     actual=q.evaluate('({id:PP_PLAYER.ctx().item.id,type:PP_PLAYER.ctx().item.type})');snap('question-pane:'+S['id']+':'+it['id']);rows[-1]['expected']=it;rows[-1]['actual']=actual
     q.locator('#q-next').evaluate('(e)=>e.click()')
   # Expanded writing scoring examples, long input, adult and fluency variants.
   for task in ['W-TASK-01','W-TASK-02']:
    q.evaluate('(id)=>{PP_WRITING.start(id);PP_WRITING.select("score");document.querySelectorAll("#screen-write details").forEach(e=>e.open=true)}',task);snap('writing-expanded:'+task,w==320 and task=='W-TASK-01')
    q.evaluate('PP_WRITING.select("write")');q.locator('#w-draft').fill(('LongWordWithoutBreak'*12+'\n\n')*6);snap('writing-long-token:'+task)
   lessons=q.evaluate('Object.entries(PP.lessons).filter(([k,L])=>L.activity).map(([k,L])=>({key:k,kind:L.activity.kind}))')
   for L in lessons:
    q.evaluate('(k)=>PP_SKILLS.open(k,"practice")',L['key']);snap('hands-on:'+L['key'],w==320)
   # Text resize stress: exact computed font sizes doubled, not real browser zoom.
   for name,act in [('catalog','PP_APP.landBrowse()'),('lesson','PP_SKILLS.open("3.T.T.1.b")'),('writing','PP_WRITING.start("W-TASK-01");PP_WRITING.select("write")'),('parents','PP_PARENTS.open("standards")')]:
    q.evaluate('()=>{'+act+'}');q.evaluate("()=>{const root=document.querySelector('.screen:not([hidden])');const sizes=[...root.querySelectorAll('*')].map(e=>[e,parseFloat(getComputedStyle(e).fontSize)]);sizes.forEach(([e,s])=>e.style.fontSize=(s*2)+'px')}");snap('text-resize-200pct:'+name,w==320 and name=='lesson');q.reload();q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
   b.close();dump('evidence/supplement-ledger.json',rows);print(w,len(rows),flush=True)
finally:s.terminate()
