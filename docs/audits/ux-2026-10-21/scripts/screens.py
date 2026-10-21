"""Read-only application audit. Mutates only isolated browser fixture storage.
Every row records rendered state, not a claim of manual visual/interaction review.
"""
from runtime import *
from playwright.sync_api import sync_playwright
VIEWS=[(320,568),(390,844),(844,390),(768,1024),(1024,768),(1366,768),(1920,1080)]
METRIC="""() => {const root=document.querySelector('.screen:not([hidden])');const shown=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden';return {screen:root.id,scrollWidth:document.documentElement.scrollWidth,width:innerWidth,height:innerHeight,overflow:document.documentElement.scrollWidth>innerWidth+1,offside:[...root.querySelectorAll('*')].filter(shown).filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.left< -1||r.right>innerWidth+1)}).slice(0,12).map(e=>({tag:e.tagName,id:e.id,cls:e.className,text:e.textContent.slice(0,90)})),smallTargets:[...root.querySelectorAll('button,input,select,summary,a')].filter(shown).filter(e=>!e.disabled).map(e=>{const r=e.getBoundingClientRect();return {id:e.id,tag:e.tagName,text:(e.textContent||e.getAttribute('aria-label')||'').slice(0,65),width:r.width,height:r.height}}).filter(r=>r.width<24||r.height<24)}}"""
rows=[];errors=[];a11y=[]
s=server()
try:
 with sync_playwright() as p:
  for w,h in VIEWS:
   b=browser(p);q=b.new_page(viewport={'width':w,'height':h});q.route('**/fonts.g*/**',lambda r:r.abort());q.on('pageerror',lambda e:errors.append({'viewport':[w,h],'error':str(e)}));q.on('dialog',lambda d:d.accept());ready(q)
   def snap(key,shot=False):
    r=q.evaluate(METRIC);r.update(state=key,viewport=f'{w}x{h}',method='Chromium desktop-context CSS viewport; DOM geometry');rows.append(r)
    if shot:q.screenshot(path=str(OUT/f'evidence/{key.replace(":","-").replace("/","-")}-{w}.png'),full_page=True)
   snap('choose',w in [320,1366])
   q.locator('#choose-path').click();snap('path-intro',w==390)
   q.locator('#path-preview').click();snap('path-preview')
   q.locator('#path-start').click();snap('path-next')
   q.evaluate("document.querySelectorAll('#screen-path details').forEach(e=>e.open=true)");snap('path-all-expanded',w in [320,844,1366])
   q.locator('#screen-path [data-go=choose]').click();q.locator('#choose-browse').click();snap('catalog',w in [320,1366])
   q.locator('#skill-search').fill('pronoun');snap('catalog-search-results')
   q.locator('#skill-search').fill('zzzz-no-results');snap('catalog-search-empty')
   q.locator('#skill-search').fill('');
   for f in ['test','todo','all']:
    q.locator('[data-filter='+f+']').click();snap('catalog-filter-'+f)
   if w==320:
    inventory=q.evaluate("""() => ({lessons:Object.entries(PP.lessons).map(([key,L])=>({key,title:L.title,codes:L.codes||[L.code],steps:PP_SKILLS.stepNames(key),teach:L.teach,model:L.learn,adult:L.parent,activity:L.activity,write:L.write,speak:L.speak,practice:(L.practice||[]).map(x=>({id:x.id,type:x.type,prompt:x.prompt,points:x.points})),test:(L.test||[]).map(x=>({id:x.id,type:x.type,prompt:x.prompt,points:x.points})),testB:(L.testB||[]).map(x=>({id:x.id,type:x.type,prompt:x.prompt,points:x.points}))})),sets:PP.sets.map(S=>({id:S.id,section:S.section,kind:S.kind,part:S.part,items:S.items.map(x=>({id:x.id,type:x.type,prompt:x.prompt,why:x.why,points:x.points})),passages:S.passages.map(x=>({id:x.id,title:x.title}))})),tasks:PP.tasks,sections:PP_SITE.sections,types:Object.keys(PP_ITEMS),standards:PP_STANDARDS})""")
    dump('evidence/source-inventory.json',inventory)
   else:inventory=json.loads((OUT/'evidence/source-inventory.json').read_text())
   for L in inventory['lessons']:
    q.evaluate('(k)=>PP_SKILLS.open(k)',L['key']);steps=q.locator('#sk-steps button').evaluate_all('(es)=>es.map(e=>e.dataset.step)')
    for step in steps:
     q.locator('#sk-tab-'+step).evaluate('(e)=>e.click()');snap('lesson:'+L['key']+':'+step)
     if w in [320,1366]:
      q.evaluate("document.querySelectorAll('#screen-skill details').forEach(e=>e.open=true)");snap('lesson-expanded:'+L['key']+':'+step)
   q.evaluate('PP_APP.openMixed()');snap('mixed')
   for sec in inventory['sections']:
    q.evaluate('(k)=>PP_APP.openSection(k)',sec['key']);snap('section:'+sec['key'])
   q.evaluate('PP_APP.openClues()');snap('clues',w==320)
   q.evaluate('PP_APP.openHabits()');snap('habits')
   q.evaluate("document.querySelectorAll('#screen-habits details').forEach(e=>e.open=true)");snap('habits-expanded')
   for tab in ['test','standards','essay','plan']:
    q.evaluate('(t)=>PP_PARENTS.open(t)',tab);snap('parents:'+tab)
    q.evaluate("document.querySelectorAll('#screen-parents details').forEach(e=>e.open=true)");snap('parents-expanded:'+tab,w==320 and tab=='standards')
   for task in inventory['tasks']:
    q.evaluate('(id)=>PP_WRITING.start(id)',task['id'])
    for tab in ['sources','plan','write','check','score']:
     q.evaluate('(t)=>PP_WRITING.select(t)',tab);snap('writing:'+task['id']+':'+tab,w in [320,844] and task['id']=='W-TASK-01' and tab=='write')
   # Every registered item, both baseline sizes. States are rendered through the real player.
   # Next DOM activation skips unsolved practice solely for geometry coverage; not functional evidence.
   if w in [320,1366]:
    for S in inventory['sets']:
     q.evaluate('(id)=>PP_PLAYER.start(id,"test")',S['id'])
     for i,it in enumerate(S['items']):
      snap('item:'+S['id']+':'+it['id'])
      q.locator('#q-next').evaluate('(e)=>e.click()')
   # Axe on full screens, one representative of every format, and writing tabs at baseline sizes.
   if w in [320,1366]:
    q.add_script_tag(path=os.environ.get('AXE_PATH','/workspace/scratch/bd2016b2a547/uxa-runtime/node_modules/axe-core/axe.min.js'))
    actions=[('choose','PP_PATH.showChoice()'),('path','PP_PATH.open()'),('catalog','PP_APP.landBrowse()'),('mixed','PP_APP.openMixed()'),('clues','PP_APP.openClues()'),('habits','PP_APP.openHabits()')]
    actions += [('parents-'+t,'PP_PARENTS.open('+json.dumps(t)+')') for t in ['test','standards','essay','plan']]
    actions += [('writing-'+t,'PP_WRITING.start("W-TASK-01");PP_WRITING.select('+json.dumps(t)+')') for t in ['sources','plan','write','check','score']]
    seen=set()
    for S in inventory['sets']:
     for i,it in enumerate(S['items']):
      if it['type'] not in seen:
       seen.add(it['type']);actions.append(('format-'+it['type'],'PP_PLAYER.start('+json.dumps(S['id'])+',"test");'+''.join('document.getElementById("q-next").click();' for n in range(i))))
    for name,action in actions:
     q.evaluate('()=>{'+action+'}');r=q.evaluate("""async()=>{const r=await axe.run(document.querySelector('.screen:not([hidden])'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']},rules:{'color-contrast':{enabled:false}}});return {violations:r.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,html:n.html,summary:n.failureSummary}))})),incomplete:r.incomplete.map(v=>({id:v.id,nodes:v.nodes.length})),passes:r.passes.length}}""")
     contrast=q.evaluate((ROOT/'verification/path-contrast.js').read_text());a11y.append({'state':name,'viewport':f'{w}x{h}','excluded':['color-contrast'],**r,'solidColorContrast':contrast})
   print(f'{w}x{h}: ledger rows {len(rows)}, errors {len(errors)}',flush=True);b.close();dump('evidence/coverage-ledger.json',rows);dump('evidence/accessibility.json',a11y);dump('evidence/page-errors.json',errors)
finally:s.terminate()
