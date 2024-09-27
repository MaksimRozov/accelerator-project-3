import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

const programsSliderElement = document.querySelector('.programs__slider');

const sliderPrograms = () => {
  if (programsSliderElement) {
    // eslint-disable-next-line no-unused-vars
    const swiperPrograms = new Swiper(programsSliderElement, {
      modules: [Navigation, Pagination],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      loop: false,
      navigation: {
        nextEl: '.programs__carousel-next',
        prevEl: '.programs__carousel-prev',
        disabledClass: 'arrow-style-slider__button--disabled',
      },
      pagination: {
        el: '.programs__slider-pagination',
        type: 'progressbar',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          activeIndex: 0,
          spaceBetween: 15,
        },

        768: {
          slidesPerView: 2.15,
          spaceBetween: 30,
          allowTouchMove: true
        },

        1440: {
          slidesPerView: 'auto',
          spaceBetween: 120,
          allowTouchMove: true
        }
      },

    });

  }
};

export { sliderPrograms };
