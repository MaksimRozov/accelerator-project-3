import { sliderHero } from './modules/sliders/slider-hero';
import { initMenu } from './modules/menu';
import { sliderPrograms } from './modules/sliders/slider-programs';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initMenu();
    sliderHero();
    sliderPrograms();
  });
});
