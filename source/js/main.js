import { sliderHero } from './modules/sliders/slider-hero';
import { initMenu } from './modules/menu';
import { sliderPrograms } from './modules/sliders/slider-programs';
import { sliderNews } from './modules/sliders/slider-news';
import { tabsInit } from './modules/tabs';
import { accordionInit } from './modules/accordion';
import { sliderReviews } from './modules/sliders/slider-reviews';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initMenu();
    sliderHero();
    sliderPrograms();
    tabsInit();
    sliderNews();
    accordionInit();
    sliderReviews();
  });
});
