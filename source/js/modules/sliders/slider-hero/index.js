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
      crossFade: 'false',
      slidesPerView: 1,
      watchOverflow: true,
      speed: 500,
      loop: true,
      // allowTouchMove: false,
      pagination: {
        el: '.hero__pagination',
        bulletClass: 'hero__dots',
        bulletActiveClass: 'hero__dots--active',
        clickable: true,
        bulletElement: 'button type="button"',
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
    const panelControl = document.querySelector('.hero__pagination');
    // const blockContents = document.querySelectorAll('.swiper-slide'); // Замените на ваш селектор слайдов

    const updateActiveButton = (activeIndex) => {
      paginationButtons.forEach((btn, index) => {
        btn.classList.toggle('hero__dots--active', index === activeIndex);
      });
    };

    const setPaginationPosition = (activeIndex) => {
      const activeElement = blockContents[activeIndex];

      if (activeElement) {
        const panelControlContainer = activeElement.querySelector('.hero__pagination-container');
        panelControlContainer.innerHTML = ''; // Очищаем контейнер

        const panelClone = panelControl.cloneNode(true);
        panelControlContainer.append(panelClone);

        // Устанавливаем обработчики событий для кнопок пагинации
        const newPaginationButtons = panelClone.querySelectorAll('.hero__dots');
        newPaginationButtons.forEach((button, index) => {
          button.onclick = () => {
            swiperHero.slideTo(index);
            updateActiveButton(index);
          };
        });
      }
    };

    // Устанавливаем начальную позицию
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

    // Инициализация активной кнопки при загрузке
    updateActiveButton(swiperHero.activeIndex);


  }
};

export { sliderHero };
