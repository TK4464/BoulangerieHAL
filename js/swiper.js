const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 4000, //追加（スライドスピード）
  effect: "fade", //追加（フェードエフェクトを適用する）
  autoplay: {
    delay: 2000,
  },
});
