import { sliderHero } from './modules/sliders/slider-hero';
import { onOpenMenu } from './modules/menu';
import 'swiper/css';


window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    sliderHero();
    onOpenMenu();
  });
});
