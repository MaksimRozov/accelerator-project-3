import Swiper from 'swiper';
import { Navigation, Grid, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';

const newsSwipers = document.querySelectorAll('.news__carousel');
const links = document.querySelectorAll('.card-second__content-link');


// Функция для инициализации Swiper
const initSliderNews = (element) => {
  const newsSwiper = element.querySelector('.news__swiper');
  let currentSlide = 1;
  const sliderNews = new Swiper(newsSwiper, {
    modules: [Navigation, Grid, Pagination],
    slidesPerView: 2,
    grid: {
      rows: 2,
      fill: 'column'
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
        allowTouchMove: true,
        slidesPerGroup: 2,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row'
        },
        spaceBetween: 30,
      },
      1440: {
        grid: {
          rows: 1,
          fill: 'column'
        },
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
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
    // Получаем общее количество слайдов
    const totalSlides = Math.ceil(sliderNews.slides.length / 2); // Количество "пар" слайдов
    pageButtonsContainer.innerHTML = ''; // Очистка предыдущих кнопок

    let startSlide = Math.max(1, currentSlide - 2);
    let endSlide = Math.min(totalSlides, currentSlide + 1);

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
      button.setAttribute('tabindex', '0');
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
  const slideElement = element.querySelectorAll('.news__carousel-item');
  slideElement.forEach((item, index) => {
    if (index % 2 === 1) {
      const elementChild = item.querySelector('.card-second');
      elementChild.classList.add('card-second--small');
    }
  });

  const setTabIndex = (activeIndex) => {
    links.forEach((link, index) => {
      link.setAttribute('tabindex', index === activeIndex ? '0' : '-1');
    });
  };


  // Устанавливаем tabindex для первого слайда по умолчанию
  setTabIndex(sliderNews.activeIndex);

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

if (window.innerWidth > 1439) {
  const cardNews = document.querySelectorAll('.card-second--news');
  cardNews.forEach((element, index) => {
    if (index === 0 || (index + 1) % 4 === 0) {
      element.classList.add('card-second--large');

    }
  });
}


export { addSliderNews };
