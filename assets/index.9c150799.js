(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))y(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&y(m)}).observe(document,{childList:!0,subtree:!0});function g(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function y(t){if(t.ep)return;t.ep=!0;const n=g(t);fetch(t.href,n)}})();const v="ABCDEFGHIJKLMNOPQRSTUVWX",x=document.querySelector("#app");x.innerHTML=`
  <h2>Memo Trainer</h2>
  <div id="trainer">
    <h1 id="memo-text">QAJSHFJQKWJE</h1>

    <input 
      type="text" 
      id="memo-input" 
      name="memo-input" 
      placeholder="Enter the memo"
      size="30"
      style="text-transform: uppercase"
    >
    <button type="button" id="check-button">Check</button>
    <br>
    <button type="button" id="reset-button">Reset</button>
    <button type="button" id="view-button">View Memo</button>
  </div>
  <br>
  <button type="button" id="settings-button">Toggle Settings</button>
  <div id="settings">
    <p>Click the memo or press space to reveal the next target</p>
    <label for="phone">Enter your letter scheme:</label> 
    <br>
    <input 
      type="text" 
      id="scheme" 
      name="scheme" 
      value=${v}
      size="40"
    >
    <br>
    <label for="phone">Enter amount of targets to reveal</label> 
    <br>
    <input 
      type="number" 
      id="chunk-size" 
      name="chunk-size" 
      value="2"
      size="10"
    >
    <br>
    <label for="phone">Enter minimum number of targets</label> 
    <br>
    <input 
      type="number" 
      id="min-amount" 
      name="min-amount" 
      value="8"
      size="10"
    >
    <br>
    <label for="phone">Enter maximum number of targets</label> 
    <br>
    <input 
      type="number" 
      id="max-amount" 
      name="max-amount" 
      value="12"
      size="10"
    >
  </div>
`;const d=document.querySelector("#settings"),k=document.querySelector("#settings-button"),E=document.querySelector("#chunk-size"),u=document.querySelector("#max-amount"),c=document.querySelector("#min-amount"),a=document.querySelector("#scheme"),l=document.querySelector("#memo-text"),r=document.querySelector("#memo-input"),I=document.querySelector("#check-button"),q=document.querySelector("#view-button"),C=document.querySelector("#reset-button"),L=()=>{const e=parseInt(c.value),o=parseInt(u.value);return Math.floor(Math.random()*(o-e+1)+e)},M=()=>{const e=L();return[...a.value].sort(()=>Math.random()-.5).join("").slice(0,e)};let s,p;const f=()=>{const e=parseInt(E.value),o=p*e;o<s.length?l.textContent=s.substring(o).substring(0,2):l.textContent="Done!",r.focus()},S=()=>{p++,f()},h=()=>{r.value.toUpperCase()===s.toLocaleUpperCase()?(alert("Correct!"),b()):alert("Incorrect!"),r.focus()},z=()=>{const e=l.textContent;if((e==null?void 0:e.length)!=s.length){l.textContent=s;return}f()},b=()=>{p=0,s=M(),f(),r.value=""},w=()=>{r.value=r.value.toUpperCase().replace(/\s+/g,""),r.value===s&&h()},A=e=>e.key==="Enter"?(h(),e.preventDefault(),!1):e.key===" "?(S(),e.preventDefault(),!1):!0;r.addEventListener("keypress",A);r.onchange=w;l.onselectstart=()=>!1;l.onclick=S;I.onclick=h;q.onclick=z;C.onclick=b;b();d.style.display="none";k.onclick=()=>{d.style.display=d.style.display==="none"?"block":"none"};const i=e=>{if(e){a.value=localStorage.getItem("scheme")||v,c.value=localStorage.getItem("min")||"10",u.value=localStorage.getItem("max")||"11";return}localStorage.setItem("scheme",a.value),localStorage.setItem("min",c.value),localStorage.setItem("max",u.value)};a.onchange=()=>i(!1);c.onchange=()=>i(!1);u.onchange=()=>i(!1);i(!0);
