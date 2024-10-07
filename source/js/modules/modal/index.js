const aboutButton = document.querySelector('.about__button');
const modalElement = document.querySelector('.modal');
const modalCloseElement = modalElement.querySelector('.modal__close');
const modalWindowElement = modalElement.querySelector('.modal__window');


const onCloseModal = () => {
  modalElement.classList.remove('modal--open');
};

const onOpenModal = (event) => {
  event.preventDefault();
  modalElement.classList.add('modal--open');

};

modalElement.addEventListener('click', (event) => {
  const isClickInsideMenu = event.target.closest('.form--modal');
  if (!isClickInsideMenu) {
    onCloseModal();
  }
});


const modalInit = () => {
  if (!aboutButton || !modalElement || !modalCloseElement || !modalWindowElement) {
    return;
  }
  aboutButton.addEventListener('click', onOpenModal);
  modalCloseElement.addEventListener('click', onCloseModal);
};

export { modalInit };
