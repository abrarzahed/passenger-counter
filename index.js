// Count passenger app
let totalEntry = document.getElementById("totalEntry");
let savEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
inTotal = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let saved = " " + count + " - ";
  savEl.textContent += saved;
  inTotal += count;

  count = 0;
  countEl.textContent = 0;
}

function total() {
  totalEntry.textContent = inTotal;
}
