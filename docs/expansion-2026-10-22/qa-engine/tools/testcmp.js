const path=require('path'),fs=require('fs');
function load(root){const L={};global.window={};global.PP={addLesson:l=>{L[l.key||l.code]=l}};
 for(const f of fs.readdirSync(path.join(root,'js/data/lessons')))if(f.endsWith('.js')){try{require(path.resolve(root,'js/data/lessons',f))}catch(e){console.log('ERR',root,f,e.message)}}
 return L;}
const A=load(process.argv[2]);for(const k in require.cache)delete require.cache[k];const B=load(process.argv[3]);
const pts=a=>(a||[]).reduce((s,i)=>s+(i.points||0),0);
for(const k of Object.keys(B)){const a=A[k],b=B[k];if(!a){console.log('NEW lesson',k);continue}
 for(const f of ['test','testB']){const x=JSON.stringify(a[f]||null),y=JSON.stringify(b[f]||null);
  if(x!==y){const ia=(a[f]||[]).map(i=>i.id),ib=(b[f]||[]).map(i=>i.id);
   console.log('CHANGED',k,f,'pts',pts(a[f]),'->',pts(b[f]),'n',ia.length,'->',ib.length,'ids same:',JSON.stringify(ia)===JSON.stringify(ib),'changed items:',ib.filter(id=>{const p=(a[f]||[]).find(i=>i.id===id);const q=(b[f]||[]).find(i=>i.id===id);return !p||JSON.stringify(p)!==JSON.stringify(q)}).join(','))}}}
