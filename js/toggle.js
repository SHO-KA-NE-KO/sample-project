const btn1to20 = document.getElementById("btn-about1-20");
const btn21to40 = document.getElementById("btn-about21-40");
const btn41to60 = document.getElementById("btn-about41-60");
const block1to20 = document.getElementById("about1-20");
const block21to40 = document.getElementById("about21-40");
const block41to60 = document.getElementById("about41-60");

// ボタン1: about1-20 を表示/非表示
btn1to20.addEventListener("click", () => {
  block1to20.classList.toggle("hidden");
});

// ボタン2: about21-40 を表示/非表示
btn21to40.addEventListener("click", () => {
  block21to40.classList.toggle("hidden");
});

// ボタン2: about41-40 を表示/非表示
btn41to60.addEventListener("click", () => {
  block41to60.classList.toggle("hidden");
});