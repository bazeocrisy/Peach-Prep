import os
from playwright.sync_api import sync_playwright
BROWSE="try{if(!localStorage.getItem('pp.path.v1'))localStorage.setItem('pp.path.v1',JSON.stringify({mode:'browse',introduced:true}))}catch(e){}"
with sync_playwright() as p:
  b=p.chromium.launch(executable_path=os.environ["CHROMIUM_PATH"],args=["--no-sandbox","--disable-gpu"])
  for w,h in [(320,568),(1366,768)]:
    for name,hs,js in [("home","",None),("skill","#skill/3.T.T.1.c",None),("path","",None),("parents","","PP_PARENTS.open('standards');document.querySelectorAll('details').forEach(d=>d.open=true)"),("std-parent","#std/3.T.T.1",None)]:
      c=b.new_context(viewport={"width":w,"height":h},is_mobile=w<500,has_touch=True);q=c.new_page()
      if name!="path": q.add_init_script(BROWSE)
      else: q.add_init_script("try{localStorage.setItem('pp.path.v1',JSON.stringify({mode:'path',introduced:true}))}catch(e){}")
      q.route("**/fonts.g*/**",lambda r:r.abort()); q.goto("http://127.0.0.1:8801/"+hs); q.wait_for_timeout(800)
      if js: q.evaluate(js); q.wait_for_timeout(300)
      r=q.evaluate("""(()=>{const L=[...document.querySelectorAll('.screen:not([hidden]) a.std-link')].filter(a=>a.offsetParent!==null);
        const hs=L.map(a=>a.getBoundingClientRect()).filter(r=>r.width);const cls={};L.forEach(a=>{const r=a.getBoundingClientRect();const k=a.className+'|'+getComputedStyle(a).display;cls[k]=cls[k]||[];cls[k].push(Math.round(r.height))});
        const o={};for(const k in cls){o[k]=[cls[k].length,Math.min(...cls[k]),Math.max(...cls[k])]}return o})()""")
      print(w,name,r); c.close()
