import os,json,subprocess,time
from pathlib import Path
ROOT=Path(__file__).resolve().parents[4]
OUT=ROOT/'docs/audits/ux-2026-10-21'
ARGS=['--no-sandbox','--disable-dev-shm-usage','--disable-gpu','--disable-software-rasterizer','--disable-seccomp-filter-sandbox','--disable-setuid-sandbox','--no-zygote','--single-process','--in-process-gpu','--disable-features=FontDataService,FontationsFontBackend']
BROWSER=os.environ.get('CHROMIUM_PATH','/workspace/scratch/bd2016b2a547/uxa-browser/chromium')
def browser(p):
 return p.chromium.launch(executable_path=BROWSER,args=ARGS,env={**os.environ,'LD_LIBRARY_PATH':str(Path(BROWSER).parent),'FONTCONFIG_PATH':'/etc/fonts'})
def server():
 s=subprocess.Popen(['node','verification/serve.js','.', '8364'],cwd=ROOT,stdout=subprocess.DEVNULL);time.sleep(.5);return s
BASE='http://127.0.0.1:8364/'
def ready(q,hash=''):
 q.goto(BASE+hash);q.wait_for_function("document.querySelector('#build-badge').textContent.length>0")
def dump(name,data):
 (OUT/name).write_text(json.dumps(data,indent=2,ensure_ascii=False)+'\n')
if __name__=='__main__':
 from playwright.sync_api import sync_playwright
 s=server()
 try:
  with sync_playwright() as p:
   b=browser(p);q=b.new_page();ready(q);print(q.title());print(q.evaluate('({lessons:Object.keys(PP.lessons).length,sets:PP.sets.length,types:Object.keys(PP_TYPES)})'));b.close()
 finally:s.terminate()
