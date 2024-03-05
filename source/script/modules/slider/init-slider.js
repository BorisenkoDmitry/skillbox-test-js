import "swiper/css";
import Swiper from "swiper";
const options = {
  loop: true,
  wrapperClass: "products__list",
  slideClass: "products__item",
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 10,
  updateOnWindowResize: true,
  observer: true,
  navigation: {
    nextEl: ".products__nav-button--next",
    prevEl: ".products__nav-button--prev",
  }, // не работает, какие я классы только не передавал.
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
    1341: {
      slidesPerView: 3,
    },
  },
};
const Init = (options) => {
  const swiper = new Swiper(".products__swiper", options);
  // не разобрался почему переданные классы не подхватывает
  // написал свои обработчики
  document
    .querySelector(".products__nav-button--prev")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });
  document
    .querySelector(".products__nav-button--next")
    .addEventListener("click", function () {
      swiper.slideNext();
    });
  return swiper;
};
export const SliderInit = () => {
  let swiper = Swiper;
  let init = false;
  const resizeObserver = new ResizeObserver((entries, observer) => {
    for (let entry of entries) {
      const size = entry.contentBoxSize[0].inlineSize;
      if (size < 768) {
        swiper.destroy(true, true);
        init = false;
      } else {
        if (!init) {
          init = true;
          swiper = Init(options);
        }
      }
    }
  });
  resizeObserver.observe(document.body);
};
