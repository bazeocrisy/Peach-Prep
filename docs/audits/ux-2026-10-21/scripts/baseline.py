from runtime import *
import urllib.request,hashlib,concurrent.futures
paths=subprocess.check_output(['git','ls-files','index.html','css','js','assets','fonts'],cwd=ROOT,text=True).splitlines()
def fetch(path):
 try:
  with urllib.request.urlopen('https://bazeocrisy.github.io/Peach-Prep/'+path,timeout=45) as r:
   raw=r.read();local=(ROOT/path).read_bytes();return {'path':path,'status':r.status,'sha256':hashlib.sha256(raw).hexdigest(),'matches_main':raw==local,'last_modified':r.headers.get('Last-Modified'),'date':r.headers.get('Date')}
 except Exception as e:return {'path':path,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:r=list(pool.map(fetch,paths))
dump('evidence/live-assets.json',{'main':'5e977364d5d205d827c4fd097ac3048d07bc8da2','application_version':'Peach Prep 2.2.0-rc (PP-003)','assets':r})
print('live assets:',len(r),'matched',sum(x.get('matches_main',False) for x in r),'errors',sum('error'in x for x in r))
