// オブジェクトを作成
const hamburger = document.getElementById("js-hamburger");

// ハンバーガーメニュー
document
  // ハンバーガーメニューボタンがクリックされた時の処理
  .querySelector(".hamburger-menu-btn")
  .addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.toggle("is-active");
    hamburger.classList.toggle("active");
  });

// メニュー内のアンカータグがクリックされたときにメニューを閉じる処理
document.querySelectorAll(".hamburger-menu-item").forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    document.querySelector(".hamburger-menu").classList.remove("is-active");
    hamburger.classList.remove("active");
  });
});


