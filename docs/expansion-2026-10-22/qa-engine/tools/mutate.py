import sys,shutil,os
root,name=sys.argv[1],sys.argv[2]
M={
 "M1-hint-order":("js/engine/player.js","const hintsOf = it => (Array.isArray(it.hints) && it.hints.length ? it.hints : [it.clue])","const hintsOf = it => (Array.isArray(it.hints) && it.hints.length ? it.hints.slice().reverse() : [it.clue])"),
 "M2-reveal-counts-solved":("js/engine/player.js","if (st.solved || st.crDone) st.howAfter = true; else st.shown = true;","if (st.solved || st.crDone) st.howAfter = true; else st.solved = true;"),
 "M2b-reveal-writes-pass":("js/engine/player.js","if (st.solved || st.crDone) st.howAfter = true; else st.shown = true;","if (st.solved || st.crDone) st.howAfter = true; else st.shown = true; try{const P=JSON.parse(localStorage.getItem('pp.progress.v1')||'{}');P[run.set.code]=Object.assign(P[run.set.code]||{},{mastered:true});localStorage.setItem('pp.progress.v1',JSON.stringify(P))}catch(e){}"),
 "M3-together-includes-core":("js/skills.js","const together = C ? P.filter(it => !refs.has(it.id)) : P.slice(0, half);","const together = C ? P.slice() : P.slice(0, half);"),
 "M4-std-route-broken":("js/app.js",'if (parts[0] === "std") {','if (false) {'),
 "M5-practice-writes-pass":("js/skills.js",'if (window.PP_PRACTICE && window.PP_PRACTICE.complete(k, coreIds(k))) mark(k, "tried"); return;','if (window.PP_PRACTICE && window.PP_PRACTICE.complete(k, coreIds(k))) { mark(k, "tried"); mark(k, "mastered"); } return;'),
 "M6-legacy-try-help-unlock":("js/engine/player.js","(run.tryMode && st.wrong < 1 && st.help < 1)","(run.tryMode && st.wrong < 2 && st.help < 1)"),
 "M7-legacy-hint1-reveals":("js/engine/player.js",'if (st.help === 1) { label = "Hint 1 of 3"; text = item.clue; }','if (st.help === 1) { label = "Hint 1 of 3"; text = item.why; }'),
 "M8-own-wrong-leaks-why":("js/engine/player.js",': "Try again" + (st.hints < H.length ? ", or ask for a hint." : ".")) });',': "Try again. " + item.why) });'),
}
f,a,bb=M[name]; dst=os.path.join(root,name)
shutil.copytree(sys.argv[3],dst)
p=os.path.join(dst,f); s=open(p).read(); assert s.count(a)==1,(name,s.count(a)); open(p,'w').write(s.replace(a,bb)); print("planted",name)
