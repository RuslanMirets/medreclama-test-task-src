import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

const swiper = new Swiper(".specialists__content", {
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 10,

  navigation: {
    nextEl: ".specialists__slider-btn--next",
    prevEl: ".specialists__slider-btn--prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
