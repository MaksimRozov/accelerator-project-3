import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const reviewsSliderElement = document.querySelector('.reviews__slider');

const sliderReviews = () => {
  if (reviewsSliderElement) {
    // eslint-disable-next-line no-unused-vars
    const swiperPrograms = new Swiper(reviewsSliderElement, {
      modules: [Navigation, Pagination],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      loop: false,
      navigation: {
        nextEl: '.reviews__carousel-next',
        prevEl: '.reviews__carousel-prev',
        disabledClass: 'arrow-style-slider__button--disabled',
      },
      pagination: {
        el: '.reviews__pagination',
        type: 'progressbar',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          activeIndex: 0,
          spaceBetween: 15,
        },

        768: {
          slidesPerView: 1.28,
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

export { sliderReviews };
