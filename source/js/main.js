import { sliderHero } from './modules/sliders/slider-hero';
import { initMenu } from './modules/menu';
import { sliderPrograms } from './modules/sliders/slider-programs';
import { tabsInit } from './modules/tabs';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initMenu();
    sliderHero();
    sliderPrograms();
    tabsInit();
  });
});
