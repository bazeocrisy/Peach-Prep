from runtime import *
from playwright.sync_api import sync_playwright
r=[];s=server()
try:
 with sync_playwright() as p:
  for w,h in [(320,568),(1366,768),(844,390)]:
   b=browser(p);q=b.new_page(viewport={'width':w,'height':h});q.route('**/fonts.g*/**',lambda r:r.abort());q.on('dialog',lambda d:d.accept());ready(q)
   def log(name,detail):r.append({'viewport':f'{w}x{h}','state':name,**detail})
   # All sequential model reveals, baseline phone/desktop; no scoring from merely opening.
   keys=q.evaluate('Object.keys(PP.lessons)') if w!=844 else ['3.T.C.2.c','3.L.V.3.a']
   for key in keys:
    q.evaluate('(k)=>PP_SKILLS.open(k,"learn")',key)
    cards=q.locator('.learn-card').count()
    for i in range(cards):
     button=q.locator('.learn-card').nth(i).locator('.learn-next');n=0
     while button.is_visible():
      button.click();n+=1
      info=q.evaluate("()=>{const e=document.activeElement,r=e.getBoundingClientRect();return {focused:e.className,top:r.top,bottom:r.bottom,viewport:innerHeight,offscreen:r.bottom<0||r.top>innerHeight}}")
      log('model:'+key+':'+str(i)+':'+str(n),info)
   # Adult check distinction and oral/writing variants.
   K=q.evaluate('Object.keys(PP.lessons).find(k=>PP.lessons[k].check&&!PP.byId["SK:"+k+":t"])');q.evaluate('(k)=>PP_SKILLS.open(k,"test")',K)
   for cb in q.locator('#sk-panel input[type=checkbox]').all():cb.check()
   log('adult-ticks-only',q.evaluate('(k)=>({key:k,status:PP_SKILLS.status(k),progress:JSON.parse(localStorage.getItem("pp.progress.v1"))[k]})',K))
   q.locator('#sk-grownup-check').click();log('adult-observed-completed',q.evaluate('(k)=>({key:k,label:PP_SKILLS.passLabel(k),progress:JSON.parse(localStorage.getItem("pp.progress.v1"))[k],flags:PP_FLAGS})',K))
   for kind in ['speak','write']:
    key=q.evaluate('(kind)=>Object.keys(PP.lessons).find(k=>PP.lessons[k][kind]&&PP.byId["SK:"+k+":y"])',kind)
    if key:
     q.evaluate('(k)=>PP_SKILLS.open(k,"try")',key)
     for cb in q.locator('#sk-panel input[type=checkbox]').all():cb.check()
     if q.locator('#sk-panel textarea').count():q.locator('#sk-panel textarea').fill('An independent sentence for audit.')
     log('adult-'+kind,q.evaluate('(k)=>({key:k,status:PP_SKILLS.status(k),progress:JSON.parse(localStorage.getItem("pp.progress.v1"))[k]})',key))
   # Fluency timer including natural minute expiry under simulated clock.
   q.clock.install();key=q.evaluate('Object.keys(PP.lessons).find(k=>PP.lessons[k].activity&&PP.lessons[k].activity.kind==="fluency")');q.evaluate('(k)=>PP_SKILLS.open(k,"practice")',key)
   q.get_by_role('button',name='Start the minute',exact=True).click();q.locator('.flu-w').nth(3).click();q.locator('.flu-w').nth(3).click();q.clock.fast_forward(60000);log('fluency-time-up',{'prompt':q.locator('.flu-prompt').inner_text(),'focus':q.evaluate('document.activeElement.className')});q.locator('.flu-w').nth(39).click();log('fluency-result',{'result':q.locator('.flu-result').inner_text(),'observationInputs':q.locator('.flu-obs input,.flu-obs select').count()})
   q.screenshot(path=str(OUT/f'evidence/fluency-result-{w}.png'),full_page=True)
   for e in q.locator('.flu-obs select').all():e.select_option(index=1)
   q.get_by_role('button',name='Read again',exact=True).click();q.get_by_role('button',name='Start the minute',exact=True).click();q.get_by_role('button',name='Stop early',exact=True).click();q.locator('.flu-w').nth(4).click();log('fluency-too-short',{'text':q.locator('.flu-out').inner_text()})
   # Keyboard cannot enter desktop nested source scroll region.
   q.evaluate('PP_WRITING.start("W-TASK-01")');q.locator('#wtab-sources').focus();before=q.locator('#w-sources').evaluate('(e)=>({height:e.clientHeight,scrollHeight:e.scrollHeight,top:e.scrollTop,tabIndex:e.tabIndex})');q.keyboard.press('Tab');q.keyboard.press('PageDown');q.wait_for_timeout(150);after=q.locator('#w-sources').evaluate('(e)=>({top:e.scrollTop,focused:document.activeElement.id})');log('writing-source-keyboard',{'before':before,'after':after});q.screenshot(path=str(OUT/f'evidence/writing-source-keyboard-{w}.png'),full_page=True)
   # Try mode deliberately withholds hints until wrong attempt.
   q.evaluate('PP_PLAYER.start("SK:3.T.T.1.b:y","try")');log('try-initial',{'helpHidden':q.locator('#q-help').is_hidden(),'mode':q.locator('#player-mode').inner_text()})
   # Back/Forward on clean path lesson, and initial direct address recovery.
   q.evaluate('PP_PATH.open();PP_SKILLS.open("3.T.T.1.b")');q.go_back();q.wait_for_timeout(100);log('history-back',{'screen':q.evaluate('PP_APP.current()')});q.go_forward();q.wait_for_timeout(100);log('history-forward',{'screen':q.evaluate('PP_APP.current()')})
   dump('evidence/branch-states.json',r);print(w,len(r),flush=True);b.close()
finally:s.terminate()
