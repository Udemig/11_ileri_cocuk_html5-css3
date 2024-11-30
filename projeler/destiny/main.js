// Menu buttonuna tıklayınca nav kısmını kapa aç

// 1-) İlgili elemanlara eriş
var menuBtn = document.querySelector("#menu-btn");
var nav = document.querySelector("nav");

// 2-) Buttona tıklanınca nav kısmına class ekle çıkar

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Videolara loop özelliği aktaran Js Kodu

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
        entry.target.addEventListener("ended", () => {
          entry.target.currentTime = 0;
          entry.target.play();
        });
      } else {
        entry.target.pause();
      }
    });
  });
  videos.forEach((video) => {
    observer.observe(video);
  });
});
