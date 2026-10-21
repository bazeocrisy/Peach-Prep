#!/usr/bin/env python3
"""Axe WCAG A/AA automated checks of new choice/intro/path screens.
Requires AXE_PATH to a local axe.min.js, optional CHROMIUM_PATH and CHROMIUM_ARGS.
Serve the repository first; args: BASE_URL OUTPUT_DIRECTORY.
Axe color-contrast is excluded: its canvas check exits this packaged renderer.
A separate solid-color computed-style check is used; unsupported cases are reported.
Automated checks do not replace real screen-reader testing.
"""
import os,sys,json
from pathlib import Path
from playwright.sync_api import sync_playwright
base=sys.argv[1];out=Path(sys.argv[2]);out.mkdir(parents=True,exist_ok=True)
checks=[]
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
  b.close()
(out/'a11y-results.json').write_text(json.dumps(checks,indent=2)+'\n')
sys.exit(1 if any(c['violations'] or c['solidColorContrast']['failures'] or c['solidColorContrast']['unsupported'] for c in checks) else 0)
