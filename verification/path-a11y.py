#!/usr/bin/env python3
"""Axe WCAG A/AA automated checks of the choice/intro/path screens and the browse home.
Requires AXE_PATH to a local axe.min.js, optional CHROMIUM_PATH and CHROMIUM_ARGS.
Serve the repository first; args: BASE_URL OUTPUT_DIRECTORY.
Choice/intro/path: the main axe run keeps color-contrast excluded, as it always has, and
a separate solid-color computed-style check runs; unsupported cases are reported.
Since 2026-10-22 (QA-16) each of those screens also gets a separate axe color-contrast run.
Browse home (#screen-home, added 2026-10-22, QA-16): three saved states, a first browse
visit, a returning family with progress (started, passed, review due, grown-up check)
and every lesson passed, each with every <details> on the screen opened, checked with the
same axe tags plus color-contrast, and with the solid-color check.
Correction (2026-10-22): an earlier header said axe color-contrast "exits this packaged
renderer". That was not reproduced. With Playwright 1.56 and headless Chromium 141.0.7390.37
(the default build and /opt/pw-browsers/chromium-1194, no CHROMIUM_ARGS), axe-core 4.10.2
and 4.14.0 (the version in the October 21 evidence) both ran color-contrast on the choice,
path and browse screens at 320, 390, 768 and 1366 px with no crash, and the October 22
review ran it in 98 of 98 state/viewport combinations. It may have been specific to the
browser build or flags used on October 21, which were not recorded. It stays excluded from
the original main run only so that run's results stay comparable. axe can report low contrast as "incomplete" rather than a
violation (it did for the white-on-white all-passed text, QA-01), so the solid-color
check stays and incomplete color-contrast counts are recorded.
Automated checks do not replace real screen-reader testing.
"""
import os,sys,json
from pathlib import Path
from playwright.sync_api import sync_playwright
base=sys.argv[1];out=Path(sys.argv[2]);out.mkdir(parents=True,exist_ok=True)
checks=[]
ccChecks=[];homeChecks=[]
AXE_CC="""async selector=>{const r=await axe.run(document.querySelector(selector),{runOnly:{type:'rule',values:['color-contrast']}});return {violations:r.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),incomplete:r.incomplete.reduce((a,v)=>a+v.nodes.length,0),passes:r.passes.reduce((a,v)=>a+v.nodes.length,0)};}"""
HOME_STATES=['first-browse','returning-progress','all-passed']
# Test fixtures only: written to this test browser's own storage before a reload.
HOME_SEED="""state=>{const L=Object.keys(PP.lessons),d=n=>{const t=new Date(Date.now()-n*864e5);return t.getFullYear()+'-'+String(t.getMonth()+1).padStart(2,'0')+'-'+String(t.getDate()).padStart(2,'0')};
 const pass=n=>({taught:true,mastered:true,passBy:'test',tries:1,best:{got:6,max:6},passedAt:d(n),lastPassAt:d(n),attempts:[{d:d(n),got:6,max:6,ok:true,n:1}]});
 const quiz=L.filter(k=>PP.byId['SK:'+k+':t']),hands=L.filter(k=>PP.lessons[k].check&&!PP.byId['SK:'+k+':t']);let prog={};
 if(state==='all-passed')L.forEach(k=>{prog[k]=hands.includes(k)?{mastered:true,passBy:'grownup',passedAt:d(2)}:pass(2);});
 else{prog[quiz[0]]={taught:true,learned:true};prog[quiz[1]]={taught:true,learned:true,practiced:true};prog[quiz[2]]=pass(2);prog[quiz[3]]=pass(10);
  if(hands[0])prog[hands[0]]={mastered:true,passBy:'grownup',passedAt:d(3)};prog._ui={lastCat:'reading'};}
 localStorage.setItem('pp.progress.v1',JSON.stringify(prog));}"""
HOME_SEEN="""(()=>{const s=document.querySelector('#screen-home'),c=x=>s.querySelectorAll(x).length,r={current:PP_APP.current(),passed:c('#skill-list .sl-done'),started:c('#skill-list .sl-started'),review:c('#skill-list .sl-review'),allPassedText:c('#up-next .un-done'),detailsClosed:c('details:not([open])')};
 r.ok=r.current==='home'&&r.detailsClosed===0;return r;})()"""
with sync_playwright() as p:
 for w,h in [(320,640),(390,844),(768,1024),(1366,900)]:
  opts={}
  if os.environ.get('CHROMIUM_PATH'):opts['executable_path']=os.environ['CHROMIUM_PATH']
  if os.environ.get('CHROMIUM_ARGS'):opts['args']=json.loads(os.environ['CHROMIUM_ARGS'])
  b=p.chromium.launch(**opts);q=b.new_page(viewport={'width':w,'height':h})
  q.route('**/fonts.g*/**',lambda r:r.abort());q.goto(base);q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
  q.add_script_tag(path=os.environ['AXE_PATH'])
  for name,selector in [('choice','#screen-choose'),('intro','#screen-path'),('path','#screen-path')]:
   if name=='intro':q.locator('#choose-path').click()
   if name=='path':q.locator('#path-start').click()
   r=q.evaluate("""async selector=>{const r=await axe.run(document.querySelector(selector),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']},rules:{'color-contrast':{enabled:false}}});return {violations:r.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),incomplete:r.incomplete.map(v=>({id:v.id,nodes:v.nodes.length})),passes:r.passes.length};}""",selector)
   contrast=q.evaluate((Path(__file__).parent/'path-contrast.js').read_text())
   checks.append({'width':w,'screen':name,'axeExcludedRules':['color-contrast'],'solidColorContrast':contrast,**r});print(str(w)+' '+name+': '+str(len(r['violations']))+' violations',flush=True)
   if w==390 and name=='intro':q.screenshot(path=str(out/'intro-390.png'),full_page=True)
   cc=q.evaluate(AXE_CC,selector)
   ccChecks.append({'width':w,'screen':name,**cc});print(str(w)+' '+name+' axe color-contrast: '+str(len(cc['violations']))+' violations, '+str(cc['incomplete'])+' incomplete',flush=True)
  # Browse home (QA-16): three saved states, every <details> opened, axe with color-contrast plus the solid-color check
  for state in HOME_STATES:
   q.close();q=b.new_page(viewport={'width':w,'height':h})
   q.route('**/fonts.g*/**',lambda r:r.abort())
   q.add_init_script("if(!sessionStorage.getItem('pp-a11y-seeded')){sessionStorage.setItem('pp-a11y-seeded','1');localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true}));}")
   q.goto(base);q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
   if state!='first-browse':
    q.evaluate(HOME_SEED,state);q.reload();q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
   q.evaluate("document.querySelectorAll('#screen-home details').forEach(d=>d.open=true)")
   seen=q.evaluate(HOME_SEEN)
   q.add_script_tag(path=os.environ['AXE_PATH'])
   r=q.evaluate("""async()=>{const r=await axe.run(document.querySelector('#screen-home'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}});return {violations:r.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))})),incomplete:r.incomplete.map(v=>({id:v.id,nodes:v.nodes.length})),passes:r.passes.length,colorContrastRan:r.passes.concat(r.violations,r.incomplete).some(v=>v.id==='color-contrast')};}""")
   contrast=q.evaluate((Path(__file__).parent/'path-contrast.js').read_text())
   homeChecks.append({'width':w,'screen':'home','state':state,'stateRendered':seen,'axeExcludedRules':[],'solidColorContrast':contrast,**r})
   print(str(w)+' home/'+state+': '+str(len(r['violations']))+' violations, contrast failures '+str(len(contrast['failures']))+', lowest '+str(round(contrast['minimum'],2))+', state ok '+str(seen['ok']),flush=True)
   if w==390 and state=='all-passed':q.screenshot(path=str(out/'home-all-passed-390.png'),full_page=True)
  b.close()
(out/'a11y-results.json').write_text(json.dumps(checks,indent=2)+'\n')
(out/'a11y-color-contrast-results.json').write_text(json.dumps(ccChecks,indent=2)+'\n')
(out/'a11y-home-results.json').write_text(json.dumps(homeChecks,indent=2)+'\n')
def home_state_ok(c):
 s=c['stateRendered']
 if not s['ok'] or not c['colorContrastRan']:return False
 if c['state']=='first-browse':return s['passed']==0 and s['started']==0
 if c['state']=='returning-progress':return s['passed']>=2 and s['started']>=2 and s['review']>=1 and s['allPassedText']==0
 return s['allPassedText']==1 and s['started']==0
bad_home=[c for c in homeChecks if c['violations'] or c['solidColorContrast']['failures'] or c['solidColorContrast']['unsupported'] or not home_state_ok(c)]
print('main runs: '+str(len(checks))+', axe color-contrast runs: '+str(len(ccChecks))+', browse-home runs: '+str(len(homeChecks))+', browse-home runs with a problem: '+str(len(bad_home)),flush=True)
sys.exit(1 if any(c['violations'] or c['solidColorContrast']['failures'] or c['solidColorContrast']['unsupported'] for c in checks)
         or any(c['violations'] for c in ccChecks) or bad_home or len(homeChecks)!=4*len(HOME_STATES) else 0)
