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

    const updateActiveButton = (activeIndex) => {

      const paginationButtons = document.querySelectorAll('.hero__dots');


      // Удаляем класс активной кнопки у всех кнопок
      paginationButtons.forEach((btn) => btn.classList.remove('hero__dots--active'));

      // Добавляем класс активной кнопке
      paginationButtons[activeIndex].classList.add('hero__dots--active');
    };


    const setPaginationPosition = (activeIndex) => {
      const panelControl = document.querySelector('.hero__pagination');
      const activeElement = blockContents[activeIndex]; // Получаем активный элемент

      // Убеждаемся, что активный элемент существует
      if (activeElement) {
        const panelControlContainer = activeElement.querySelector('.hero__pagination-container');

        // Очищаем контейнер перед добавлением нового содержимого
        panelControlContainer.innerHTML = '';

        // Клонируем и добавляем элемент только в активный контейнер
        const panelClone = panelControl.cloneNode(true);
        panelControlContainer.append(panelClone);

        // Добавление обработчиков событий для кнопок пагинации
        const paginationButtons = panelControlContainer.querySelectorAll('.hero__dots');

        paginationButtons.forEach((button, index) => {
          button.addEventListener('click', () => {
            swiperHero.slideTo(index); // Переход на соответствующий слайд

            updateActiveButton(activeIndex);

          });
        });
      }
    };

    // Устанавливаем начальную позицию
    setPaginationPosition(swiperHero.activeIndex);

    // Обработчик события для изменения слайда
    swiperHero.on('slideChangeTransitionEnd', () => {
      setPaginationPosition(swiperHero.activeIndex);
      updateActiveButton(swiperHero.activeIndex);

    });

    // Обработчик события для клика на пагинацию
    swiperHero.on('paginationClick', () => {
      setPaginationPosition(swiperHero.activeIndex);
      updateActiveButton(swiperHero.activeIndex);

    });

    // Обработчик события для клика на пагинацию
    swiperHero.on('slideChange', () => {
      setPaginationPosition(swiperHero.activeIndex);
      updateActiveButton(swiperHero.activeIndex);

    });

    // swiperHero.on('activeIndexChange', () => {
    //   setPaginationPosition(swiperHero.activeIndex);
    //   updateActiveButton(swiperHero.activeIndex);
    // });


  }
};

export { sliderHero };
