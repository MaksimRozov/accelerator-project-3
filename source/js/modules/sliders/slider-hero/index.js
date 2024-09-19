import Swiper from 'swiper';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const mainCarouselElement = document.querySelector('.hero__slider');

const sliderHero = () => {
  if (mainCarouselElement) {
    const blockContents = document.querySelectorAll('.card-hero__content');

    // eslint-disable-next-line no-unused-vars
    const swiperHero = new Swiper(mainCarouselElement, {

      modules: [Pagination, EffectFade],
      effect: 'fade',
      crossFade: 'true',
      slidesPerView: 1,
      watchOverflow: true,
      speed: 300,
      loop: true,
      pagination: {
        el: '.hero__pagination',
        bulletClass: 'hero__dots',
        bulletActiveClass: 'hero__dots--active',
        clickable: true,
        bulletElement: 'button type="button" tabindex="0"',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          allowTouchMove: true
        },

        768: {
          allowTouchMove: true
        },

        1440: {
          allowTouchMove: false
        }
      },


    });


    const paginationButtons = document.querySelectorAll('.hero__dots');

    paginationButtons.forEach((button, index) => {
      button.innerHTML = `<span class="visually-hidden">Переход на слайдер номер ${index + 1}</span>`;
    });
    const panelControl = document.querySelector('.hero__pagination');
    // const blockContents = document.querySelectorAll('.swiper-slide'); // Замените на ваш селектор слайдов

    const updateActiveButton = (activeIndex) => {
      paginationButtons.forEach((btn, index) => {
        btn.classList.toggle('hero__dots--active', index === activeIndex);
      });
    };

    let currentFocusButton = null;

    const setPaginationPosition = (activeIndex) => {
      // Удаляем содержимое всех контейнеров пагинации
      blockContents.forEach((content) => {
        const panelControlContainer = content.querySelector('.hero__pagination-container');
        if (panelControlContainer) {
          panelControlContainer.innerHTML = ''; // Очищаем контейнер
        }
      });

      const activeElement = blockContents[activeIndex];

      if (activeElement) {
        const panelControlContainer = activeElement.querySelector('.hero__pagination-container');

        const panelClone = panelControl.cloneNode(true);
        panelControlContainer.append(panelClone);

        // Устанавливаем обработчики событий для кнопок пагинации
        const newPaginationButtons = panelClone.querySelectorAll('.hero__dots');
        newPaginationButtons.forEach((button, index) => {
          button.onclick = () => {
            // Сохраняем текущую кнопку фокуса
            currentFocusButton = button;

            swiperHero.slideTo(index);
            updateActiveButton(index);

            // Сохраняем фокус на кнопке
            setTimeout(() => {
              if (currentFocusButton) {
                currentFocusButton.focus();
              }
            }, 100); // Используем setTimeout для обеспечения правильного порядка выполнения
          };
        });
      }
    };


    setPaginationPosition(swiperHero.activeIndex);

    // Обработчик события для изменения слайда
    swiperHero.on('slideChange', () => {
      const activeIndex = swiperHero.activeIndex;
      setPaginationPosition(activeIndex);
      updateActiveButton(activeIndex);
    });

    swiperHero.on('slideChangeTransitionEnd', () => {
      const activeIndex = swiperHero.activeIndex;
      setPaginationPosition(activeIndex);
      updateActiveButton(activeIndex);
    });
    swiperHero.on('slideChangeTransitionStart', () => {
      const activeIndex = swiperHero.activeIndex;
      setPaginationPosition(activeIndex);
      updateActiveButton(activeIndex);
    });


    // Инициализация активной кнопки при загрузке
    updateActiveButton(swiperHero.activeIndex);


  }
};

export { sliderHero };
