import runpy, sys, subprocess, time, json
from pathlib import Path
from playwright.sync_api import BrowserType, Browser, Page
E=Path('/workspace/scratch/bd2016b2a547/audit-evidence')
server=subprocess.Popen(['node','verification/serve.js','.','8350'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
time.sleep(.4)
original_launch=BrowserType.launch
original_newpage=Browser.new_page
original_evaluate=Page.evaluate
browsers=[]
def launch(self,*args,**kwargs):
    kwargs.update(executable_path=str(E/'chromium-old'),args=json.loads((E/'browser-old-args.json').read_text()))
    return original_launch(self,*args,**kwargs)
BrowserType.launch=launch
first=True
def newpage(self,*args,**kwargs):
    global first
    if first:
        first=False
        return original_newpage(self,*args,**kwargs)
    extra=self.browser_type.launch()
    browsers.append(extra)
    return original_newpage(extra,*args,**kwargs)
Browser.new_page=newpage
def profile(frame,event,arg):
    if event=='return' and frame.f_code.co_name=='ok' and frame.f_code.co_filename=='verification/guard.py':
        print(('CHECK PASS ' if frame.f_locals['cond'] else 'CHECK FAIL ')+frame.f_locals['name'],flush=True)
sys.setprofile(profile)
sys.argv=['verification/guard.py','http://127.0.0.1:8350/']
try:
    runpy.run_path('verification/guard.py',run_name='__main__')
finally:
    server.terminate()
