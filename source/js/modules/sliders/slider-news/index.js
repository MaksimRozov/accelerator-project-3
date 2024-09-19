import Swiper from 'swiper';
import { Navigation, Grid, Pagination } from 'swiper/modules';

// import 'swiper/css';
import 'swiper/css/grid';

const newsSliderElement = document.querySelector('.news__slider');

const sliderNews = () => {
  if (newsSliderElement) {
    // eslint-disable-next-line no-unused-vars
    const swiperNews = new Swiper(newsSliderElement, {
      modules: [Navigation, Grid, Pagination],
      grabCursor: false,
      watchOverflow: true,
      speed: 1000,
      loop: false,
      grid: {
        rows: 2,
        fill: 'row'
      },
      navigation: {
        nextEl: '.news__carousel-next',
        prevEl: '.news__carousel-prev',
        disabledClass: 'arrow-style-slider__button--disabled',
      },
      pagination: {
        el: '.news__pagination',
        bulletClass: 'news__dots',
        bulletActiveClass: 'news__dots--active',
        clickable: true,
        renderBullet: function (index, className) {
          return `<button class="${className}" type="button">${index + 1}</button>`;
        },
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          allowTouchMove: true,
        },
        1440: {
          slidesPerView: 'auto',
          spaceBetween: 120,
          allowTouchMove: true,
        },
      },
    });
  }
};

export { sliderNews };
