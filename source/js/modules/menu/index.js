const menuHeader = document.querySelector('.menu__header');
const buttonBurger = menuHeader.querySelector('.menu__burger');


const onStyleMenu = () => {
  menuHeader.classList.toggle('menu__header--open');
};

const onOpenMenu = () => {
  buttonBurger.addEventListener('click', onStyleMenu);
};


export { onOpenMenu };
