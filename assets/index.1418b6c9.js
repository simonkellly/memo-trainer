(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))b(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&b(d)}).observe(document,{childList:!0,subtree:!0});function y(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function b(t){if(t.ep)return;t.ep=!0;const n=y(t);fetch(t.href,n)}})();const g="ABCDEFGHIJKLMNOPQRSTUVWX",x=document.querySelector("#app");x.innerHTML=`
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
`;const f=document.querySelector("#settings"),S=document.querySelector("#settings-button"),c=document.querySelector("#max-amount"),a=document.querySelector("#min-amount"),i=document.querySelector("#scheme"),s=document.querySelector("#memo-text"),o=document.querySelector("#memo-input"),k=document.querySelector("#check-button"),E=document.querySelector("#view-button"),C=document.querySelector("#reset-button"),I=()=>{const e=parseInt(a.value),u=parseInt(c.value);return Math.floor(Math.random()*(u-e+1)+e)},q=()=>{const e=I();return[...i.value].sort(()=>Math.random()-.5).join("").slice(0,e)};let r,l;const v=()=>{l++,l<r.length?s.textContent=r[l]:s.textContent="Done!",o.focus()},p=()=>{o.value.toUpperCase()===r.toLocaleUpperCase()?(alert("Correct!"),h()):alert("Incorrect!"),o.focus()},L=()=>{const e=s.textContent;if((e==null?void 0:e.length)!=r.length){s.textContent=r;return}if(l>=r.length){s.textContent="Done!";return}s.textContent=r[l],o.focus()},h=()=>{l=0,r=q(),s.textContent=r[l],o.value="",o.focus()},M=()=>{o.value=o.value.toUpperCase().replace(/\s+/g,""),o.value===r&&p()},w=e=>e.key==="Enter"?(p(),e.preventDefault(),!1):e.key===" "?(v(),e.preventDefault(),!1):!0;o.addEventListener("keypress",w);o.onkeyup=M;s.onselectstart=()=>!1;s.onclick=v;k.onclick=p;E.onclick=L;C.onclick=h;h();f.style.display="none";S.onclick=()=>{f.style.display=f.style.display==="none"?"block":"none"};const m=e=>{if(e){i.value=localStorage.getItem("scheme")||g,a.value=localStorage.getItem("min")||"10",c.value=localStorage.getItem("max")||"11";return}localStorage.setItem("scheme",i.value),localStorage.setItem("min",a.value),localStorage.setItem("max",c.value)};i.onchange=()=>m(!1);a.onchange=()=>m(!1);c.onchange=()=>m(!1);m(!0);
