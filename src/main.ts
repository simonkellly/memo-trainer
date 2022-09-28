import './style.css'

const defaultLetterScheme = 'ABCDEFGHIJKLMNOPQRSTUVWX'

const appElem = document.querySelector<HTMLDivElement>('#app')!;
appElem.innerHTML = `
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
      value=${defaultLetterScheme}
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
`;

//#region Elements

const settingsElem = document.querySelector<HTMLDivElement>('#settings')!;
const settingsButton = document.querySelector<HTMLButtonElement>('#settings-button')!;
const maxAmountElem = document.querySelector<HTMLInputElement>('#max-amount')!;
const minAmountElem = document.querySelector<HTMLInputElement>('#min-amount')!;
const schemeElem = document.querySelector<HTMLInputElement>('#scheme')!;
const memoTextElem = document.querySelector<HTMLHeadingElement>('#memo-text')!;
const memoInputElem = document.querySelector<HTMLInputElement>('#memo-input')!;
const checkButton = document.querySelector<HTMLButtonElement>('#check-button')!;
const viewButton = document.querySelector<HTMLButtonElement>('#view-button')!;
const resetButton = document.querySelector<HTMLButtonElement>('#reset-button')!;

//#endregion

//#region Trainer

const getNumTargets = (): number => {
  const min = parseInt(minAmountElem.value);
  const max = parseInt(maxAmountElem.value);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const generateMemo = (): string => {
  const targets = getNumTargets();
  const scheme = schemeElem.value;

  const shuffled = [...scheme].sort(()=>Math.random()-.5).join('');
  return shuffled.slice(0, targets);
};

let memo: string;
let idx: number;

const reveal = () => {
  idx++;
  if (idx < memo.length) {
    memoTextElem.textContent = memo[idx];
  } else {
    memoTextElem.textContent = "Done!";
  }

  memoInputElem.focus();
}

const check = () => {
  if (memoInputElem.value.toUpperCase() === memo.toLocaleUpperCase()) {
    alert('Correct!');
    reset();
  } else {
    alert('Incorrect!');
  }

  memoInputElem.focus();
}

const view = () => {
  const ogText = memoTextElem.textContent;
  
  if (ogText?.length != memo.length) {
    memoTextElem.textContent = memo;
    return;
  }

  if (idx >= memo.length) {
    memoTextElem.textContent = "Done!";
    return;
  }

  memoTextElem.textContent = memo[idx];
  memoInputElem.focus();
}

const reset = () => {
  idx = 0;
  memo = generateMemo();
  memoTextElem.textContent = memo[idx];
  memoInputElem.value = '';
  memoInputElem.focus();
};

const fixInput = () => {
  memoInputElem.value = memoInputElem.value.toUpperCase().replace(/\s+/g, '');;
  if (memoInputElem.value === memo) {
    check();
  }
}

const handleKeypress = (e: KeyboardEvent): boolean => {
  if (e.key === 'Enter') {
    check();
    e.preventDefault();
    return false;
  }

  if (e.key === ' ') {
    reveal();
    e.preventDefault();
    return false;
  }

  return true;
}

memoInputElem.addEventListener("keypress", handleKeypress);
memoInputElem.onkeyup = fixInput;

memoTextElem.onselectstart = () => false;
memoTextElem.onclick = reveal;

checkButton.onclick = check;
viewButton.onclick = view;
resetButton.onclick = reset;

reset();

//#endregion

//#region Settings

settingsElem.style.display = "none";

settingsButton.onclick = () => {
  settingsElem.style.display = settingsElem.style.display === 'none' ? 'block' : 'none';
};

const saveSettings = (restore: boolean) => {
  if (restore) {
    schemeElem.value = localStorage.getItem('scheme') || defaultLetterScheme;
    minAmountElem.value = localStorage.getItem('min') || '10';
    maxAmountElem.value = localStorage.getItem('max') || '11';
    return;
  }

  localStorage.setItem('scheme', schemeElem.value);
  localStorage.setItem('min', minAmountElem.value);
  localStorage.setItem('max', maxAmountElem.value);
}

schemeElem.onchange = () => saveSettings(false);
minAmountElem.onchange = () => saveSettings(false);
maxAmountElem.onchange = () => saveSettings(false);

saveSettings(true);

//#endregion
