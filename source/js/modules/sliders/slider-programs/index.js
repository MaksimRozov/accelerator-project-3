import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

const programsSliderElement = document.querySelector('.programs__slider');

const sliderPrograms = () => {
  if (programsSliderElement) {
    // eslint-disable-next-line no-unused-vars
    const swiperPrograms = new Swiper(programsSliderElement, {
      modules: [Navigation, Pagination, Scrollbar],
      speed: 1000,
      loop: false,
      navigation: {
        nextEl: '.programs__carousel-next',
        prevEl: '.programs__carousel-prev',
        disabledClass: 'arrow-style-slider__button--disabled',
      },
      scrollbar: {
        el: '.programs__slider-scrollbar',
        draggable: true,
        dragSize: 326,
        dragClass: 'programs__drag'
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          activeIndex: 0,
          spaceBetween: 15,
        },

        768: {
          slidesPerView: 2.15,
          spaceBetween: 37,
          allowTouchMove: true
        },

        1440: {
          slidesPerView: 3,
          spaceBetween: 32,
          allowTouchMove: true
        }
      },

    });

  }
};

export { sliderPrograms };
