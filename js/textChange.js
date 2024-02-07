// テキスト切り替え

const txts = document.getElementsByClassName("text");
let txtIndex = -1;

function changeTxt() {
  txtIndex++;

  let currentNum = txtIndex % txts.length;
  let nextNum = (txtIndex + 1) % txts.length;
  let current = txts[currentNum];
  let next = txts[nextNum];

  setTimeout(function () {
    current.classList.remove("is-active");
  }, 1800);
  setTimeout(function () {
    current.style.display = "none";
    next.style.display = "block";
  }, 4000);

  setTimeout(function () {
    next.classList.add("is-active");
  }, 4300);
}

function showNextTxt() {
  setInterval(changeTxt, 6000);
}

changeTxt();
document.addEventListener("DOMContentLoaded", showNextTxt, false);
