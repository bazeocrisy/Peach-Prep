from runtime import *
from playwright.sync_api import sync_playwright
r=[];s=server()
try:
 with sync_playwright() as p:
  for w,h in [(320,568),(1366,768)]:
   b=browser(p);q=b.new_page(viewport={'width':w,'height':h});q.route('**/fonts.g*/**',lambda r:r.abort());ready(q);q.evaluate('PP_PARENTS.open("standards")')
   for dom in ['Texts','Language','Foundations','Practices','all']:
    q.get_by_label('Domain',exact=True).select_option(dom);r.append({'viewport':[w,h],'state':'standards-filter-'+dom,'count':q.locator('#std-count').inner_text(),'overflow':q.evaluate('document.documentElement.scrollWidth>innerWidth+1')})
   q.get_by_label('Search standards',exact=True).fill('no-result-zzzz');r.append({'viewport':[w,h],'state':'standards-search-empty','count':q.locator('#std-count').inner_text()});q.get_by_label('Search standards',exact=True).fill('');q.locator('#ptab-standards input[type=checkbox]').check();r.append({'viewport':[w,h],'state':'standards-tested-only','count':q.locator('#std-count').inner_text()})
   q.evaluate('PP_SKILLS.open("3.T.T.1.b","try")');r.append({'viewport':[w,h],'state':'copy-try','text':q.locator('#sk-panel').inner_text()});q.screenshot(path=str(OUT/f'evidence/copy-try-{w}.png'))
   q.evaluate('PP_APP.landBrowse()');q.locator('#skill-search').focus();r.append({'viewport':[w,h],'state':'search-focus','style':q.locator('#skill-search').evaluate('(e)=>({outline:getComputedStyle(e).outline,boxShadow:getComputedStyle(e).boxShadow})')});b.close()
finally:s.terminate();dump('evidence/extras.json',r)
