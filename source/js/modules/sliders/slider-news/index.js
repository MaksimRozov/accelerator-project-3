import Swiper from 'swiper';
import { Navigation, Grid, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
// // let currentSlide = 1; // Текущий слайд

// // const newsSliderElement = document.querySelector('.news__slider');

// // const pageButtonsContainer = document.getElementById('page-buttons');
// // const prevButton = document.querySelector('.news__carousel-prev');
// // const nextButton = document.querySelector('.news__carousel-next');

// // const sliderNews = () => {
// //   if (newsSliderElement) {
// //     // eslint-disable-next-line no-unused-vars
// //     const swiperNews = new Swiper(newsSliderElement, {
// //       modules: [Navigation, Grid, Pagination],
// //       // grabCursor: false,
// //       // watchOverflow: true,
// //       speed: 1000,
// //       loop: false,
// //       slidesPerView: 2,
// //       grid: {
// //         rows: 2,
// //       },
// //       loopAddBlankSlides: true,
// //       navigation: {
// //         nextEl: '.news__carousel-next',
// //         prevEl: '.news__carousel-prev',
// //         disabledClass: 'arrow-style-slider__button--disabled',

// //       },
// //       pagination: {
// //         el: '.news__pagination',
// //         bulletClass: 'news__dot swiper-pagination-bullet',
// //         bulletActiveClass: 'news__dots--active',
// //         clickable: true,
// //         renderBullet: function (index, className) {
// //           return `<button class="${className}" type="button">${index + 1}</button>`;
// //         },
// //         dynamicBullets: true,
// //         dynamicMainBullets: 4,
// //       },
// //       on: {
// //         slideChange: function () {
// //           currentSlide = this.activeIndex + 1; // Обновляем текущий слайд
// //           renderPagination();
// //         },
// //       },
// //       breakpoints: {
// //         320: {
// //           slidesPerView: 1,
// //           spaceBetween: 15,
// //         },
// //         768: {
// //           slidesPerView: 2,
// //           // spaceBetween: 30,
// //           allowTouchMove: true,
// //         },
// //         1440: {
// //           slidesPerView: 3,
// //           spaceBetween: 120,
// //           allowTouchMove: true,
// //         },
// //       },
// //       // Функция для рендеринга кнопок пагинации
// //       const renderPagination = () => {
// //         const totalSlides = swiperNews.slides.length; // Получаем общее количество слайдов
// //         pageButtonsContainer.innerHTML = ''; // Очистка предыдущих кнопок

// //         let startSlide = Math.max(1, currentSlide - 1);
// //         let endSlide = Math.min(totalSlides, currentSlide + 2);

// //         // Убедимся, что у нас всегда 4 кнопки
// //         if (endSlide - startSlide < 3) {
// //           if (startSlide === 1) {
// //             endSlide = Math.min(4, totalSlides);
// //           } else if (endSlide === totalSlides) {
// //             startSlide = Math.max(1, totalSlides - 3);
// //           }
// //         }

// //         // Создание кнопок для страниц
// //         for (let i = startSlide; i <= endSlide; i++) {
// //           const button = document.createElement('button');
// //           button.textContent = i;
// //           button.className = (i === currentSlide) ? 'active' : '';
// //           button.onclick = () => {
// //             swiperNews.slideTo(i - 1); // Переход к выбранному слайду
// //             currentSlide = i; // Обновляем текущий слайд
// //             renderPagination();
// //           };
// //           pageButtonsContainer.appendChild(button);
// //         }

// //         // Активация/деактивация кнопок "Назад" и "Вперед"
// //         prevButton.disabled = currentSlide === 1;
// //         nextButton.disabled = currentSlide === totalSlides;
// //       };


// //     });


// //   }


// // };

// let currentSlide = 1; // Текущий слайд

// const pageButtonsContainer = document.getElementById('page-buttons');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
// const swiper = null;
// // Инициализация Swiper
// const sliderNews = () => {
//   const swiper = new Swiper('.swiper-container', {
//     modules: [Navigation, Grid, Pagination],
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     on: {
//       slideChange: function () {
//         currentSlide = this.activeIndex + 1; // Обновляем текущий слайд
//         renderPagination();
//       },
//     },
//   });

// };

// // Функция для рендеринга кнопок пагинации
// function renderPagination() {
//   const totalSlides = swiper.slides.length; // Получаем общее количество слайдов
//   pageButtonsContainer.innerHTML = ''; // Очистка предыдущих кнопок

//   let startSlide = Math.max(1, currentSlide - 1);
//   let endSlide = Math.min(totalSlides, currentSlide + 2);

//   // Убедимся, что у нас всегда 4 кнопки
//   if (endSlide - startSlide < 3) {
//     if (startSlide === 1) {
//       endSlide = Math.min(4, totalSlides);
//     } else if (endSlide === totalSlides) {
//       startSlide = Math.max(1, totalSlides - 3);
//     }
//   }

//   // Создание кнопок для страниц
//   for (let i = startSlide; i <= endSlide; i++) {
//     const button = document.createElement('button');
//     button.textContent = i;
//     button.className = (i === currentSlide) ? 'active' : '';
//     button.onclick = () => {
//       swiper.slideTo(i - 1); // Переход к выбранному слайду
//       currentSlide = i; // Обновляем текущий слайд
//       renderPagination();
//     };
//     pageButtonsContainer.appendChild(button);
//   }

//   // Активация/деактивация кнопок "Назад" и "Вперед"
//   prevButton.disabled = currentSlide === 1;
//   nextButton.disabled = currentSlide === totalSlides;
// }

// // Обработчики событий для кнопок "Назад" и "Вперед"
// // prevButton.onclick = () => {
// //   if (currentSlide > 1) {
// //     swiper.slidePrev();
// //   }
// // };

// // nextButton.onclick = () => {
// //   if (currentSlide < swiper.slides.length) {
// //     swiper.slideNext();
// //   }
// // };

// // Инициализация пагинации
// // renderPagination();


// export { sliderNews };


// // Инициализация Swiper
// // const swiper = new Swiper('.swiper-container', {
// //   modules: [Navigation, Grid, Pagination],
// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //     prevEl: '.swiper-button-prev',
// //   },
// //   on: {
// //     slideChange: function () {
// //       currentSlide = this.activeIndex + 1; // Обновляем текущий слайд
// //       renderPagination();
// //     },
// //   },
// // });


// // Инициализация пагинации
// // export { renderPagination };


let currentSlide = 1; // Текущий слайд

const pageButtonsContainer = document.getElementById('page-buttons');
const prevButton = document.querySelector('.news__carousel-prev');
const nextButton = document.querySelector('.news__carousel-next');

// Инициализация Swiper

// eslint-disable-next-line no-unused-vars
const sliderNews = new Swiper('.swiper-container', {
  modules: [Navigation, Grid, Pagination],
  navigation: {
    nextEl: '.news__carousel-next',
    prevEl: '.news__carousel-prev',
    disabledClass: 'arrow-style-slider__button--disabled',
  },
  on: {
    slideChange: function () {
      currentSlide = this.activeIndex + 1; // Обновляем текущий слайд
      renderPagination();
    },
  },
});

// Функция для рендеринга кнопок пагинации
function renderPagination() {
  const totalSlides = sliderNews.slides.length; // Получаем общее количество слайдов
  pageButtonsContainer.innerHTML = ''; // Очистка предыдущих кнопок

  let startSlide = Math.max(1, currentSlide - 1);
  let endSlide = Math.min(totalSlides, currentSlide + 2);

  // Убедимся, что у нас всегда 4 кнопки
  if (endSlide - startSlide < 3) {
    if (startSlide === 1) {
      endSlide = Math.min(4, totalSlides);
    } else if (endSlide === totalSlides) {
      startSlide = Math.max(1, totalSlides - 3);
    }
  }

  // Создание кнопок для страниц
  for (let i = startSlide; i <= endSlide; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.className = (i === currentSlide) ? 'active' : '';
    button.onclick = () => {
      sliderNews.slideTo(i - 1); // Переход к выбранному слайду
      currentSlide = i; // Обновляем текущий слайд
      renderPagination();
    };
    pageButtonsContainer.appendChild(button);
  }

  // Активация/деактивация кнопок "Назад" и "Вперед"
  prevButton.disabled = currentSlide === 1;
  nextButton.disabled = currentSlide === totalSlides;
}

// Обработчики событий для кнопок "Назад" и "Вперед"
prevButton.onclick = () => {
  if (currentSlide > 1) {
    sliderNews.slidePrev();
  }
};

nextButton.onclick = () => {
  if (currentSlide < sliderNews.slides.length) {
    sliderNews.slideNext();
  }
};

// Инициализация пагинации
renderPagination();

export { sliderNews };
