import Swiper from 'swiper';
import { Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const mainCarouselElement = document.querySelector('.hero__slider');
const paginationButtons = document.querySelectorAll('.hero__dots');
const panelControl = document.querySelector('.hero__pagination.root');
const links = mainCarouselElement.querySelectorAll('.hero__button');
const panelControlContainer = document.querySelectorAll('.hero__pagination-container');


const sliderHero = () => {
  if (mainCarouselElement) {

    // eslint-disable-next-line no-unused-vars
    const swiperHero = new Swiper(mainCarouselElement, {

      modules: [Pagination, EffectFade],
      slidesPerView: 1,
      watchOverflow: true,
      speed: 300,
      loop: true,
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

    // const setAttributeOnButtons = () => {
    //   const panelClonePagination = document.querySelectorAll('.clonePanelPagination');
    //   panelClonePagination.forEach((element, index) => {
    //     if (index === sliderHero.realIndex) {
    //       const button = element.querySelector('.hero__dots');
    //       button.setAttribute('tabindex', '0');
    //     }
    //   });
    // };

    const setTabIndex = (activeIndex) => {
      links.forEach((link, index) => {
        link.setAttribute('tabindex', index === activeIndex ? '0' : '-1');
      });
    };

    // Устанавливаем tabindex для первого слайда по умолчанию
    setTabIndex(swiperHero.activeIndex);
    // setAttributeOnButtons();

    paginationButtons.forEach((button, index) => {
      button.innerHTML = `<span class="visually-hidden">Переход на слайдер номер ${index + 1}</span>`;
    });

    panelControlContainer.forEach((elementCloneContainer) => {
      const clonePanel = panelControl.cloneNode(true);
      clonePanel.classList.remove('root');
      clonePanel.classList.add('clonePanelPagination');
      elementCloneContainer.append(clonePanel);

      elementCloneContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('hero__dots')) {
          const child = event.target;
          const parent = child.parentNode;
          const index = Array.prototype.indexOf.call(parent.children, child);

          // если вы не используете режим цикла, измените на slideTo()
          swiperHero.slideToLoop(index);
        }
      });

      swiperHero.on('paginationUpdate', (swiper) => {
        setTabIndex(swiper.realIndex);
        // Получаем все элементы пагинации
        const paginationElements = document.querySelectorAll('.hero__pagination.clonePanelPagination');

        paginationElements.forEach((paginationElement) => {
          // Находим все button в текущем элементе пагинации
          const buttonElement = paginationElement.querySelectorAll('.hero__dots');

          // Удаляем класс активного button у всех
          buttonElement.forEach((bullet) => {
            bullet.classList.remove('hero__dots--active');

          });

          // Добавляем класс активного button к текущему активному индексу
          if (buttonElement[swiper.realIndex]) {
            buttonElement[swiper.realIndex].classList.add('hero__dots--active');
          }

        });
      });


    });


  }
};


export { sliderHero };
