import { validateForm } from '../form';

const aboutButton = document.querySelector('.about__button');
const modalElement = document.querySelector('.modal');
const modalCloseElement = modalElement.querySelector('.modal__close');
const modalWindowElement = modalElement.querySelector('.modal__window');
const formContentElement = modalElement.querySelector('.form__wrapper');
const formElement = modalElement.querySelector('form');
const itemsInputElement = modalElement.querySelectorAll('.form__valid');
const phoneElement = modalElement.querySelector('input[type="tel"]');


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
  validateForm(phoneElement, formContentElement, formElement, itemsInputElement);
};

export { modalInit };
