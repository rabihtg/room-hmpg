const nextArrow = document.querySelector(".next-arrow-cont");
const prevArrow = document.querySelector(".prev-arrow-cont");
const header = document.querySelector(".header");
const txtConts = document.querySelectorAll(".main__txt-cont");
const txtContsArr = Array.from(txtConts);

const menuBurger = document.querySelector(".icon-burger");
const menuClose = document.querySelector(".icon-close");
const nav = document.querySelector(".nav");
const menuSahdow = document.querySelector(".menu-shadow");
const body = document.querySelector("body");

menuBurger.addEventListener("click", () => {
  nav.classList.add("on");
  menuSahdow.classList.add("on");
  body.classList.add("no-scroll");
});
menuClose.addEventListener("click", () => {
  nav.classList.remove("on");
  menuSahdow.classList.remove("on");
  body.classList.remove("no-scroll");
});

let currentSliderIndex = 0;
let numberOfSliderImgs = 3;

nextArrow.addEventListener("click", () => {
  header.classList.remove("slider-" + currentSliderIndex);

  currentSliderIndex += 1;
  currentSliderIndex %= numberOfSliderImgs;

  setText();
  header.classList.add("slider-" + currentSliderIndex);
});

prevArrow.addEventListener("click", () => {
  header.classList.remove("slider-" + currentSliderIndex);

  currentSliderIndex -= 1;
  currentSliderIndex =
    (numberOfSliderImgs + currentSliderIndex) % numberOfSliderImgs;

  setText();
  header.classList.add("slider-" + currentSliderIndex);
});

function setText() {
  txtConts.forEach((cont) => {
    cont.classList.add("hidden");
  });
  txtContsArr[currentSliderIndex].classList.remove("hidden");
}
