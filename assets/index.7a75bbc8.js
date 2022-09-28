(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="ABCDEFGHIJKLMNOPQRSTUVWX",f=document.querySelector("#app");f.innerHTML=`
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
`;const i=document.querySelector("#settings"),b=document.querySelector("#settings-button");i.style.display="none";b.onclick=()=>{i.style.display=i.style.display==="none"?"block":"none"};const h=document.querySelector("#max-amount"),y=document.querySelector("#min-amount"),o=document.querySelector("#memo-text"),u=document.querySelector("#memo-input"),g=document.querySelector("#check-button"),v=document.querySelector("#view-button"),x=document.querySelector("#reset-button"),S=()=>{const n=parseInt(y.value),s=parseInt(h.value);return Math.floor(Math.random()*(s-n+1)+n)},C=()=>{const n=S();return[...document.querySelector("#scheme").value].sort(()=>Math.random()-.5).join("").slice(0,n)};let r,c;const k=()=>{c++,c<r.length?o.textContent=r[c]:o.textContent="Done!",u.focus()},E=()=>{u.value.toUpperCase()===r.toLocaleUpperCase()?(alert("Correct!"),m()):alert("Incorrect!"),u.focus()},q=()=>{const n=o.textContent;if((n==null?void 0:n.length)!=r.length){o.textContent=r;return}if(c>=r.length){o.textContent="Done!";return}o.textContent=r[c],u.focus()},m=()=>{c=0,r=C(),o.textContent=r[c],u.value="",u.focus()},L=()=>{u.value=u.value.toUpperCase()};u.onkeyup=L;o.onselectstart=()=>!1;o.onclick=k;g.onclick=E;v.onclick=q;x.onclick=m;m();
