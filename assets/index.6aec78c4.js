(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="ABCDEFGHIJKLMNOPQRSTUVWX",f=document.querySelector("#app");f.innerHTML=`
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
      value=${p}
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
`;const l=document.querySelector("#settings"),b=document.querySelector("#settings-button");l.style.display="none";b.onclick=()=>{l.style.display=l.style.display==="none"?"block":"none"};const h=document.querySelector("#max-amount"),y=document.querySelector("#min-amount"),o=document.querySelector("#memo-text"),i=document.querySelector("#memo-input"),g=document.querySelector("#check-button"),v=document.querySelector("#view-button"),x=document.querySelector("#reset-button"),S=()=>{const n=parseInt(y.value),c=parseInt(h.value);return Math.floor(Math.random()*(c-n+1)+n)},E=()=>{const n=S();return[...document.querySelector("#scheme").value].sort(()=>Math.random()-.5).join("").slice(0,n)};let r,u;const k=()=>{u++,u<r.length?o.textContent=r[u]:o.textContent="Done!"},q=()=>{i.value===r?(alert("Correct!"),m()):alert("Incorrect!")},C=()=>{const n=o.textContent;if((n==null?void 0:n.length)!=r.length){o.textContent=r;return}if(u>=r.length){o.textContent="Done!";return}o.textContent=r[u]},m=()=>{u=0,r=E(),o.textContent=r[u],i.value="",i.focus()};o.onselectstart=()=>!1;o.onclick=k;g.onclick=q;v.onclick=C;x.onclick=m;m();
