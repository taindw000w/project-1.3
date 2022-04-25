const slider = document.querySelector(".swiper");
const sliderSecond = document.querySelector(".swiper-second");
const sliderThird = document.querySelector(".swiper-third");


let swiper = new Swiper(slider, {
    direction: "horizontal",
    slidesPerView: 1.5,
    loop: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      paginationClickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
    },
  });


let swiperSecond = new Swiper(sliderSecond, {
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
    320: {
      slidesPerView: 1.5,
      spaceBetween: 25,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 5,
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
    enableSwiper: {
      enabled: true,
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
    },
  });


(function () {
  const breakpoint = window.matchMedia("(min-width: 768px)");
  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (swiper !== undefined) swiper.destroy(true, true);
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    swiper = new Swiper(slider, {
      direction: "horizontal",
      slidesPerView: 1.5,
      loop: true,
      spaceBetween: 25,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        paginationClickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      },
   });
  }
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
}());


(function () {
  const breakpoint = window.matchMedia("(min-width: 768px)");
  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (swiperSecond !== undefined) swiperSecond.destroy(true, true);
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    swiperSecond = new Swiper(sliderSecond, {
      direction: "horizontal",
      slidesPerView: 1.5,
      loop: true,
      spaceBetween: 25,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination-second",
        type: "bullets",
        paginationClickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      },
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();
