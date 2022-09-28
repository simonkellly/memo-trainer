(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))b(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&b(d)}).observe(document,{childList:!0,subtree:!0});function h(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function b(e){if(e.ep)return;e.ep=!0;const n=h(e);fetch(e.href,n)}})();const g="ABCDEFGHIJKLMNOPQRSTUVWX",v=document.querySelector("#app");v.innerHTML=`
  <h2>Memo Trainer</h2>
  <p>Click the memo to reveal the next target</p>
  <div id="trainer">
    <h1 id="memo-text">QAJSHFJQKWJE</h1>

    <input 
      type="text" 
      id="memo-input" 
      name="memo-input" 
      placeholder="Enter the memo"
      size="30"
    >
    <button type="button" id="check-button">Check</button>
    <br>
    <button type="button" id="reset-button">Reset</button>
    <button type="button" id="view-button">View Memo</button>
  </div>
  <br>
  <button type="button" id="settings-button">Toggle Settings</button>
  <div id="settings">
    <label for="phone">Enter your letter scheme:</label> 
    <br>
    <input 
      type="text" 
      id="scheme" 
      name="scheme" 
      value=${g}
      size="40"
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
`;const p=document.querySelector("#settings"),S=document.querySelector("#settings-button"),u=document.querySelector("#max-amount"),m=document.querySelector("#min-amount"),a=document.querySelector("#scheme"),o=document.querySelector("#memo-text"),l=document.querySelector("#memo-input"),x=document.querySelector("#check-button"),E=document.querySelector("#view-button"),k=document.querySelector("#reset-button"),C=()=>{const t=parseInt(m.value),s=parseInt(u.value);return Math.floor(Math.random()*(s-t+1)+t)},I=()=>{const t=C();return[...a.value].sort(()=>Math.random()-.5).join("").slice(0,t)};let r,c;const q=()=>{c++,c<r.length?o.textContent=r[c]:o.textContent="Done!",l.focus()},y=()=>{l.value.toUpperCase()===r.toLocaleUpperCase()?(alert("Correct!"),f()):alert("Incorrect!"),l.focus()},L=()=>{const t=o.textContent;if((t==null?void 0:t.length)!=r.length){o.textContent=r;return}if(c>=r.length){o.textContent="Done!";return}o.textContent=r[c],l.focus()},f=()=>{c=0,r=I(),o.textContent=r[c],l.value="",l.focus()},M=t=>{t.key==="Enter"&&y(),l.value=l.value.toUpperCase()};l.onkeyup=M;o.onselectstart=()=>!1;o.onclick=q;x.onclick=y;E.onclick=L;k.onclick=f;f();p.style.display="none";S.onclick=()=>{p.style.display=p.style.display==="none"?"block":"none"};const i=t=>{if(t){a.value=localStorage.getItem("scheme")||g,m.value=localStorage.getItem("min")||"10",u.value=localStorage.getItem("max")||"11";return}localStorage.setItem("scheme",a.value),localStorage.setItem("min",m.value),localStorage.setItem("max",u.value)};a.onchange=()=>i(!1);m.onchange=()=>i(!1);u.onchange=()=>i(!1);i(!0);
