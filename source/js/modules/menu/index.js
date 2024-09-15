const menuHeader = document.querySelector('.menu__header');
const buttonBurger = menuHeader.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');


const onStyleMenu = () => {
  menuHeader.classList.toggle('menu__header--open');
  buttonBurger.classList.toggle('menu__burger--open');
  menuList.classList.toggle('menu__list--open');
};

const onOpenMenu = () => {
  buttonBurger.addEventListener('click', onStyleMenu);
};

document.querySelectorAll('.menu__link--dropdown').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const submenu = item.nextElementSibling; // Находим подменю
    item.classList.toggle('menu__link--open');

    // Переключаем активный класс
    submenu.classList.toggle('menu__dropdown--open');
    if (submenu.classList.contains('menu__dropdown--open')) {
      submenu.style.maxHeight = `${submenu.scrollHeight}px`;
    } else {
      submenu.style.maxHeight = '0';
    }
  });

});
export { onOpenMenu };
