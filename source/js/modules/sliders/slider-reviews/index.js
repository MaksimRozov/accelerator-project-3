import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

const reviewsSliderElement = document.querySelector('.reviews__slider');

const sliderReviews = () => {
  if (reviewsSliderElement) {
    // eslint-disable-next-line no-unused-vars
    const swiperPrograms = new Swiper(reviewsSliderElement, {
      modules: [Navigation, Scrollbar],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      loop: false,
      navigation: {
        nextEl: '.reviews__carousel-next',
        prevEl: '.reviews__carousel-prev',
        disabledClass: 'arrow-style-slider__button--disabled',
      },
      scrollbar: {
        el: '.reviews__slider-scrollbar',
        draggable: true,
        dragClass: 'reviews__drag-element',
        dragSize: 326,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          activeIndex: 0,
          spaceBetween: 15,
        },

        768: {
          slidesPerView: 1.28,
          spaceBetween: 32,
          allowTouchMove: true
        },

        1440: {
          slidesPerView: 2,
          spaceBetween: 32,
          allowTouchMove: true
        }
      },

    });

  }
};

export { sliderReviews };
