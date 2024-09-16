const menuHeader = document.querySelector('.menu__header');
const buttonBurger = menuHeader.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');
const bodyElement = document.body;


const openMenu = () => {
  menuHeader.classList.add('menu__header--open');
  buttonBurger.classList.add('menu__burger--open');
  menuList.classList.add('menu__list--open');
  bodyElement.classList.add('page__body--lock');
  bodyElement.classList.add('page__body--overlay');
};

const closeMenu = () => {
  menuHeader.classList.remove('menu__header--open');
  buttonBurger.classList.remove('menu__burger--open');
  menuList.classList.remove('menu__list--open');
  bodyElement.classList.remove('page__body--lock');
  bodyElement.classList.remove('page__body--overlay');
  document.querySelectorAll('.menu__dropdown').forEach((submenu) => {
    submenu.style.maxHeight = '0';
    submenu.classList.remove('menu__dropdown--open');
  });
  document.querySelectorAll('.menu__link--open').forEach((element) => {
    element.classList.remove('menu__link--open');
  });
};

const onToggleMenu = () => {
  if (!menuHeader.classList.contains('menu__header--open')) {
    openMenu();
  } else {
    closeMenu();
  }
};


const initMenu = () => {
  buttonBurger.addEventListener('click', onToggleMenu);
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


document.addEventListener('click', (event) => {
  const isClickInsideMenu = event.target.closest('.menu');
  if (!isClickInsideMenu) {
    closeMenu();
  }
});


export { initMenu };
