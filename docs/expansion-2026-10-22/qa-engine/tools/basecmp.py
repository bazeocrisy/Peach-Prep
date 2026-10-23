import sys,json,os
from playwright.sync_api import sync_playwright
AXE="/tmp/claude-0/-home-claude/e539678b-b5ce-5aba-86fc-30dcadc6e172/scratchpad/axe/package/axe.min.js"
BROWSE="try{if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true}))}catch(e){}"
with sync_playwright() as p:
  b=p.chromium.launch(executable_path=os.environ["CHROMIUM_PATH"],args=["--no-sandbox","--disable-gpu"])
  for base in sys.argv[1:]:
    for (w,h) in [(320,568),(390,844)]:
      for name,hs,js in [("try","#skill/3.T.T.2.a/try",None),("item","#skill/3.T.T.2.a/try","document.getElementById('sk-start-try').click()"),("check","","PP_PLAYER.start('SK:3.T.T.1.c:t','test')")]:
        c=b.new_context(viewport={"width":w,"height":h},is_mobile=w<500,has_touch=True);q=c.new_page();q.add_init_script(BROWSE);q.route("**/fonts.g*/**",lambda r:r.abort())
        q.goto(base+hs);q.wait_for_timeout(700)
        if js:q.evaluate(js);q.wait_for_timeout(500)
        q.add_script_tag(path=AXE)
        v=q.evaluate("axe.run(document,{resultTypes:['violations']}).then(r=>r.violations.map(v=>v.id))")
        cp=q.evaluate("[...document.querySelectorAll('.screen:not([hidden]) button')].filter(e=>e.offsetParent!==null&&(e.scrollWidth>e.clientWidth+1)).map(e=>e.id||e.textContent.trim().slice(0,30))")
        print(base,w,name,v,cp);c.close()
