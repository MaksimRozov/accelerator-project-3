import { sliderHero } from './modules/sliders/slider-hero';
import { initMenu } from './modules/menu';
import 'swiper/css';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    sliderHero();
    initMenu();
  });
});
