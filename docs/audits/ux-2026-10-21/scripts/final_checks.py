from runtime import *
from playwright.sync_api import sync_playwright
r=[];s=server()
try:
 with sync_playwright() as p:
  for w,h in [(320,568),(390,844),(768,1024)]:
   b=browser(p);q=b.new_page(viewport={'width':w,'height':h},is_mobile=True,has_touch=True,device_scale_factor=2);q.route('**/fonts.g*/**',lambda r:r.abort());ready(q)
   q.locator('#choose-path').tap();q.locator('#path-start').tap();q.locator('#path-next').tap();q.locator('#sk-tab-practice').tap();q.locator('#sk-start-practice').tap()
   if q.locator('#tab-question').is_visible():q.locator('#tab-question').tap()
   q.locator('#q-body .choice').first.tap();r.append({'viewport':f'{w}x{h}','method':'Chromium mobile emulation + touch events; generic UA','choice_pressed':q.locator('#q-body .choice[aria-pressed=true]').count()==1,'overflow':q.evaluate('document.documentElement.scrollWidth>innerWidth+1')});b.close()
  # Canceling and accepting leave prompt, reload response limitation, A/B switching.
  b=browser(p);q=b.new_page(viewport={'width':390,'height':844});q.route('**/fonts.g*/**',lambda r:r.abort());ready(q)
  q.evaluate('PP_PLAYER.start("SK:3.T.T.1.b:t","test");let c=PP_PLAYER.ctx();c.resp.v=0;c.onChange()');q.once('dialog',lambda d:d.dismiss());q.evaluate('PP_PATH.choose()');r.append({'state':'cancel-leave','screen':q.evaluate('PP_APP.current()'),'inProgress':q.evaluate('PP_PLAYER.inProgress()')});q.once('dialog',lambda d:d.accept());q.evaluate('PP_PATH.choose()');r.append({'state':'accept-leave','screen':q.evaluate('PP_APP.current()'),'inProgress':q.evaluate('PP_PLAYER.inProgress()')})
  q.evaluate('PP_PLAYER.start("SK:3.T.T.1.b:t","test");let c=PP_PLAYER.ctx();c.resp.v=0;c.onChange()');q.once('dialog',lambda d:d.accept());q.reload();q.wait_for_function("document.querySelector('#build-badge').textContent.length>0");r.append({'state':'interrupted-test-reload','response':q.evaluate('PP_PLAYER.ctx().resp'),'screen':q.evaluate('PP_APP.current()')})
  q.evaluate('PP_PLAYER.abandon();PP_PLAYER.start("SK:3.L.V.3.a:tB","test")');r.append({'state':'direct-form-B','set':q.evaluate('PP_PLAYER.state().setId'),'response':q.evaluate('PP_PLAYER.ctx().resp'),'help_hidden':q.locator('#q-help').is_hidden()})
  # Parent model guard cancel/accept; reset cancel/accept. User data is fixture only.
  q.evaluate('PP_PLAYER.abandon();PP_WRITING.start("W-TASK-01");PP_WRITING.select("score")');model=q.locator('details.model:not(.examples) summary');q.once('dialog',lambda d:d.dismiss());model.click();r.append({'state':'model-cancel','opened':model.evaluate('(e)=>e.parentElement.open')});q.once('dialog',lambda d:d.accept());model.click();r.append({'state':'model-accept','opened':model.evaluate('(e)=>e.parentElement.open')})
  q.evaluate('PP_WRITING.select("write")');q.locator('#w-draft').fill('Keep this on cancel');q.evaluate('PP_WRITING.select("score")');q.once('dialog',lambda d:d.dismiss());q.get_by_role('button',name='Start this task over',exact=True).click();r.append({'state':'reset-cancel','draft':q.evaluate('PP_WRITING.state().data.draft')});q.once('dialog',lambda d:d.accept());q.get_by_role('button',name='Start this task over',exact=True).click();r.append({'state':'reset-accept','draft':q.evaluate('PP_WRITING.state().data.draft')});b.close()
finally:s.terminate();dump('evidence/final-checks.json',r)
print(json.dumps(r,indent=2))
