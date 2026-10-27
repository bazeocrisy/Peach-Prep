#!/usr/bin/env python3
"""Check existing/new-mode activity headers at narrow widths after label fix.
Serve first; args BASE_URL OUTPUT_DIRECTORY. Optional CHROMIUM_PATH/CHROMIUM_ARGS.
"""
import os,sys,json
from pathlib import Path
from playwright.sync_api import sync_playwright
base=sys.argv[1];out=Path(sys.argv[2]);results=[]
TAG="""(()=>{const t=[...document.querySelectorAll('.bar-tag')].find(x=>x.offsetParent);if(!t)return null;const s=t.querySelector('span'),r=s.getBoundingClientRect(),p=t.getBoundingClientRect();return {text:s.textContent,cut:s.scrollWidth>s.clientWidth+1||t.scrollWidth>t.clientWidth+1||r.right>p.right+1||r.left<p.left-1||r.width<1};})()"""
# question-first: 3.T.C.1.b has core practice, so its :y set is Practice on my own and its tag reads Practice (see docs/question-first/TEST-CHANGES.md)
EXPECT={'Try it yourself':'Practice'}
with sync_playwright() as p:
 for mode in ['browse','path']:
  for w in [320,360,375,390]:
   opts={}
   if os.environ.get('CHROMIUM_PATH'):opts['executable_path']=os.environ['CHROMIUM_PATH']
   if os.environ.get('CHROMIUM_ARGS'):opts['args']=json.loads(os.environ['CHROMIUM_ARGS'])
   b=p.chromium.launch(**opts);q=b.new_page(viewport={'width':w,'height':740},is_mobile=True,has_touch=True)
   q.route('**/fonts.g*/**',lambda r:r.abort())
   q.add_init_script("localStorage.setItem('pp.path.v1',JSON.stringify({mode:"+json.dumps(mode)+",introduced:true}))")
   q.goto(base);q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
   cases=[('Practice',"PP_PLAYER.start('SK:3.T.C.1.b:p','practice')"),('Try it yourself',"PP_PLAYER.start('SK:3.T.C.1.b:y','try')"),('Skill check',"PP_PLAYER.start('SK:3.T.C.1.b:t','test')"),('Test',"PP_PLAYER.start(PP.sets.find(s=>s.section!=='skill').id,'test')"),('Writing task',"PP_WRITING.start(PP.tasks[0].id)"),('Lesson',"PP_SKILLS.open('3.T.T.1.b')")]
   for label,action in cases:
    q.evaluate(action);q.wait_for_timeout(40)
    tag=None if label=='Lesson' else q.evaluate(TAG)
    good=(label=='Lesson' or bool(tag and tag['text']==EXPECT.get(label,label) and not tag['cut'])) and q.evaluate('document.documentElement.scrollWidth<=innerWidth+1')
    results.append({'mode':mode,'width':w,'screen':label,'pass':good,'tag':tag})
    print(('PASS ' if good else 'FAIL ')+mode+' '+str(w)+' '+label,flush=True)
    if mode=='path' and w==320 and label=='Try it yourself':q.screenshot(path=str(out/'activity-header-320.png'))
    q.evaluate('PP_PLAYER.abandon()')
   b.close()
(out/'header-results.json').write_text(json.dumps(results,indent=2)+'\n')
print(str(sum(r['pass'] for r in results))+' passed, '+str(sum(not r['pass'] for r in results))+' failed',flush=True)
sys.exit(1 if any(not r['pass'] for r in results) else 0)
