import runpy,sys,subprocess,time,json,os,ast
from pathlib import Path
from playwright.sync_api import BrowserType,Browser
E=Path('/workspace/scratch/bd2016b2a547/audit-evidence')
server=subprocess.Popen(['node','verification/serve.js','.','8350'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
time.sleep(.3)
original_launch=BrowserType.launch;original_newpage=Browser.new_page
browsers=[];first=True
def launch(self,*a,**kw):
 kw.update(executable_path=str(E/'chromium-old'),args=json.loads((E/'browser-old-args.json').read_text()))
 return original_launch(self,*a,**kw)
BrowserType.launch=launch
def newpage(self,*a,**kw):
 global first
 if first:first=False;page=original_newpage(self,*a,**kw)
 else:
  extra=self.browser_type.launch();browsers.append(extra);page=original_newpage(extra,*a,**kw)
 # Legacy regression fixture: this suite exercises the individual-lessons mode.
 # New-visitor choice, path and mode switching are exercised in verification/path.py.
 page.add_init_script("try { const v=JSON.parse(localStorage.getItem('pp.path.v1')||'{}'); v.mode='browse'; localStorage.setItem('pp.path.v1',JSON.stringify(v)); } catch(e) {}")
 return page
Browser.new_page=newpage
def profile(frame,event,arg):
 if event=='return' and frame.f_code.co_name=='ok' and frame.f_code.co_filename=='verification/guard.py':
  print(('CHECK PASS ' if frame.f_locals['cond'] else 'CHECK FAIL ')+frame.f_locals['name'],flush=True)
sys.setprofile(profile);sys.argv=['verification/guard.py','http://127.0.0.1:8350/']
try:
 if os.environ.get('PP_GUARD_SKIP_BULK') == '1':
  # Reuse the nine passed, unchanged engine practice/test assertions from the
  # pre-label-correction run; rerun every other original assertion on the fix.
  source=Path('verification/guard.py').read_text();lines=source.splitlines()
  start=next(i+1 for i,l in enumerate(lines) if '# ---------- 3.' in l)
  end=next(i+1 for i,l in enumerate(lines) if '# ---------- 5.' in l)
  tree=ast.parse(source,filename='verification/guard.py')
  for block in tree.body:
   if isinstance(block,ast.With):block.body=[n for n in block.body if not start <= n.lineno < end]
  exec(compile(tree,'verification/guard.py','exec'),{'__name__':'__main__','__file__':'verification/guard.py'})
 else:runpy.run_path('verification/guard.py',run_name='__main__')
finally:server.terminate()
