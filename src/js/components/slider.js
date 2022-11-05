import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

const swiper = new Swiper(".specialists__content", {
  slidesPerView: 2,
  spaceBetween: 10,
  grabCursor: true,

  navigation: {
    nextEl: ".specialists__slider-btn--next",
    prevEl: ".specialists__slider-btn--prev",
  },
});
