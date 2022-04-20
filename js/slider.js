const mediaQuery = window.matchMedia("(min-width: 768px)");
const slider = document.querySelector(".swiper");
const sliderSecond = document.querySelector(".swiper-second");
const sliderThird = document.querySelector(".swiper-third");

const swiper = new Swiper(slider, {
  direction: "horizontal",
  slidesPerView: 1.5,
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1120: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
  },
});

const swiperSecond = new Swiper(sliderSecond, {
  direction: "horizontal",
  slidesPerView: 1.5,
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-second",
    type: "bullets",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    1120: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
  },
});

const swiperThird = new Swiper(sliderThird, {
  direction: "horizontal",
  slidesPerView: 1.5,
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination-third",
    type: "bullets",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    620: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
  },
  
});



 

 