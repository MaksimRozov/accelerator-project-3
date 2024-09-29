// import Swiper from 'swiper';
// import { Navigation, Grid, Pagination } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/grid';

// const pageButtonsContainer = document.querySelector('.news__buttons');
// const prevButton = document.querySelector('.news__carousel-prev');
// const nextButton = document.querySelector('.news__carousel-next');
// const newsSwiper = document.querySelectorAll('.news__swiper');

// let currentSlide = 1; // Текущий слайд

// newsSwiper
// // Функция для инициализации Swiper
// const initSliderNews = (element) => {
//   // Инициализация Swiper
//   const sliderNews = new Swiper(element, {
//     modules: [Navigation, Grid, Pagination],
//     slidesPerView: 2,
//     grid: {
//       rows: 2,
//     },
//     navigation: {
//       nextEl: '.news__carousel-next',
//       prevEl: '.news__carousel-prev',
//       disabledClass: 'arrow-style-slider__button--disabled',
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 15,
//       },
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 30,
//         allowTouchMove: true,
//       },
//       1440: {
//         slidesPerView: 3,
//         spaceBetween: 120,
//         allowTouchMove: true,
//       },
//     },
//     on: {
//       slideChange: function () {
//         currentSlide = this.activeIndex + 1; // Обновляем текущий слайд
//         renderPagination(); // Обновляем пагинацию при смене слайда
//       },
//     },
//   });

//   // Функция для рендеринга кнопок пагинации
//   function renderPagination() {

//     const totalSlides = sliderNews.slides.length; // Получаем общее количество слайдов
//     pageButtonsContainer.innerHTML = ''; // Очистка предыдущих кнопок

//     let startSlide = Math.max(1, currentSlide - 1);
//     let endSlide = Math.min(totalSlides, currentSlide + 2);

//     // Убедимся, что у нас всегда 4 кнопки
//     if (endSlide - startSlide < 3) {
//       if (startSlide === 1) {
//         endSlide = Math.min(4, totalSlides);
//       } else if (endSlide === totalSlides) {
//         startSlide = Math.max(1, totalSlides - 3);
//       }
//     }

//     // Создание кнопок для страниц
//     for (let i = startSlide; i <= endSlide; i++) {
//       const button = document.createElement('button');
//       button.setAttribute('type', 'button');
//       button.classList.add('news__button-pagination');
//       button.textContent = i;
//       button.className = (i === currentSlide) ? 'news__button-pagination news__button-pagination--active' : 'news__button-pagination';
//       button.onclick = () => {
//         sliderNews.slideTo(i - 1); // Переход к выбранному слайду
//         currentSlide = i; // Обновляем текущий слайд
//         renderPagination(); // Обновляем пагинацию
//       };

//       pageButtonsContainer.appendChild(button);
//     }

//     // Активация/деактивация кнопок "Назад" и "Вперед"
//     prevButton.disabled = currentSlide === 1;
//     nextButton.disabled = currentSlide === totalSlides;
//   }

//   // Обработчики событий для кнопок "Назад" и "Вперед"
//   prevButton.onclick = () => {
//     if (currentSlide > 1) {
//       sliderNews.slidePrev();
//     }
//   };

//   nextButton.onclick = () => {
//     if (currentSlide < sliderNews.slides.length) {
//       sliderNews.slideNext();
//     }
//   };

//   // Инициализация пагинации сразу после создания слайдера

//   renderPagination();
// };
// // Экспортируем функцию инициализации

// // newsSwiper.forEach((element) => {
// //   initSliderNews(element);
// // });

// export { initSliderNews };


import Swiper from 'swiper';
import { Navigation, Grid, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';

const newsSwipers = document.querySelectorAll('.news__carousel');

// Функция для инициализации Swiper
const initSliderNews = (element) => {
  const newsSwiper = element.querySelector('.news__swiper');
  let currentSlide = 1; // Текущий слайд для этого слайдера

  // Инициализация Swiper
  const sliderNews = new Swiper(newsSwiper, {
    modules: [Navigation, Grid, Pagination],
    slidesPerView: 2,
    grid: {
      rows: 2,
    },
    navigation: {
      nextEl: element.querySelector('.news__carousel-next'),
      prevEl: element.querySelector('.news__carousel-prev'),
      disabledClass: 'arrow-style-slider__button--disabled',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        allowTouchMove: true,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 120,
        allowTouchMove: true,
      },
    },
    on: {
      slideChange: function () {
        currentSlide = this.activeIndex + 1; // Обновляем текущий слайд
        renderPagination(); // Обновляем пагинацию при смене слайда
      },
    },
  });

  // Функция для рендеринга кнопок пагинации
  function renderPagination() {
    const pageButtonsContainer = element.querySelector('.news__buttons');
    const totalSlides = Math.ceil(sliderNews.slides.length / 2); // Количество "пар" слайдов
    // Получаем общее количество слайдов
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
      button.setAttribute('type', 'button');
      button.classList.add('news__button-pagination');
      button.textContent = i;
      button.className = (i === currentSlide) ? 'news__button-pagination news__button-pagination--active' : 'news__button-pagination';

      button.onclick = () => {
        sliderNews.slideTo(i - 1); // Переход к выбранному слайду
        currentSlide = i; // Обновляем текущий слайд
        renderPagination(); // Обновляем пагинацию
      };

      pageButtonsContainer.appendChild(button);
    }

    // Активация/деактивация кнопок "Назад" и "Вперед"
    const prevButton = element.querySelector('.news__carousel-prev');
    const nextButton = element.querySelector('.news__carousel-next');

    if (prevButton) {
      prevButton.disabled = currentSlide === 1;
    }
    if (nextButton) {
      nextButton.disabled = currentSlide === totalSlides;
    }
  }

  // Обработчики событий для кнопок "Назад" и "Вперед"
  const carouselPrevButton = element.querySelector('.news__carousel-prev');
  const carouselNextButton = element.querySelector('.news__carousel-next');

  if (carouselPrevButton) {
    carouselPrevButton.onclick = () => {
      if (currentSlide > 1) {
        sliderNews.slidePrev();
      }
    };
  }

  if (carouselNextButton) {
    carouselNextButton.onclick = () => {
      if (currentSlide < sliderNews.slides.length) {
        sliderNews.slideNext();
      }
    };
  }

  // Инициализация пагинации сразу после создания слайдера
  renderPagination();
};

// Инициализация всех слайдеров на странице
const addSliderNews = () => {
  if (newsSwipers) {
    newsSwipers.forEach((element) => {
      initSliderNews(element);
    });
  }
};


export { addSliderNews };
