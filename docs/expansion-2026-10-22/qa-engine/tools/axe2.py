import os,json
from playwright.sync_api import sync_playwright
AXE="/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/axe/package/axe.min.js"
BROWSE="try{if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true}))}catch(e){}"
B="http://127.0.0.1:8801/"
S=[("std-leaf","#std/3.T.T.1.c",None),("std-parent","#std/3.T.T.1",None),("std-gum","#std/3.L.GC.1:M",None),("std-gc","#std/3.L.GC.1",None),("std-prac","#std/K-12.P.EICC.1",None),("std-habit","#std/K-12.P.EICC.1.a",None),
("confirm","","PP_PLAYER.start(PP_SKILLS.checkSetId('3.T.T.1.c'),'test');setTimeout(()=>{const n=PP_PLAYER.state().total;for(let i=0;i<n;i++)document.getElementById('q-next').click()},150)"),
("results","","PP_PLAYER.start(PP_SKILLS.checkSetId('3.T.T.1.c'),'test');setTimeout(()=>{const n=PP_PLAYER.state().total;for(let i=0;i<n;i++)document.getElementById('q-next').click();document.getElementById('confirm-submit').click();document.getElementById('res-review-btn').click()},150)"),
("set-done","","PP_PLAYER.start('SK:3.T.T.2.a:y2','try');setTimeout(()=>{for(let i=0;i<5;i++)document.getElementById('q-next').click()},150)"),
("search","","PP_APP.goHome();const i=document.getElementById('skill-search');i.value='3.T.T.1';i.dispatchEvent(new Event('input',{bubbles:true}))"),
("parents-std","","PP_PARENTS.open('standards');document.querySelectorAll('details').forEach(d=>d.open=true)")]
with sync_playwright() as p:
  b=p.chromium.launch(executable_path=os.environ["CHROMIUM_PATH"],args=["--no-sandbox","--disable-gpu"])
  for w,h in [(390,844),(1366,768)]:
    for n,hs,js in S:
      c=b.new_context(viewport={"width":w,"height":h});q=c.new_page();q.add_init_script(BROWSE);q.route("**/fonts.g*/**",lambda r:r.abort())
      q.goto(B+hs);q.wait_for_timeout(700)
      if js:q.evaluate(js);q.wait_for_timeout(600)
      q.add_script_tag(path=AXE)
      v=q.evaluate("axe.run(document,{resultTypes:['violations']}).then(r=>r.violations.map(v=>v.id+'('+v.nodes.length+')'))")
      print(w,n,v);c.close()
