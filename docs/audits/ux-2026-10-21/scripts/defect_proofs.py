from runtime import *
from playwright.sync_api import sync_playwright
s=server();r=[]
try:
 with sync_playwright() as p:
  for name,init in [('nested-progress',"localStorage.setItem('pp.progress.v1',JSON.stringify({'3.T.T.1.b':true}))"),('blocked-writing',"Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})")]:
   b=browser(p);q=b.new_page(viewport={'width':390,'height':844});q.add_init_script(init);errors=[];q.on('pageerror',lambda e:errors.append(str(e)));ready(q)
   if name=='nested-progress':
    q.evaluate('PP_SKILLS.open("3.T.T.1.b")');q.locator('#sk-tab-learn').click();q.screenshot(path=str(OUT/'evidence/UX-002-tab-blocked.png'));r.append({'id':'UX-002','selected_tab':q.locator('#sk-steps [aria-selected=true]').inner_text(),'errors':errors})
   else:
    q.evaluate('PP_WRITING.start("W-TASK-01");PP_WRITING.select("write")');q.locator('#w-draft').fill('My essay should still be here when I return.');q.locator('#w-draft').scroll_into_view_if_needed();q.screenshot(path=str(OUT/'evidence/UX-001-before-leaving.png'));before=q.locator('#w-draft').input_value();q.evaluate('PP_PATH.choose();PP_WRITING.start("W-TASK-01");PP_WRITING.select("write")');q.locator('#w-draft').scroll_into_view_if_needed();q.screenshot(path=str(OUT/'evidence/UX-001-after-return.png'));r.append({'id':'UX-001','before':before,'after':q.locator('#w-draft').input_value(),'errors':errors})
   b.close()
finally:s.terminate();dump('evidence/defect-proofs.json',r)
