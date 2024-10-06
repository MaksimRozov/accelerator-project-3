const formContentElement = document.querySelector('.form__wrapper');
const formElement = formContentElement.querySelector('form');
const itemsInputElement = formElement.querySelectorAll('input');
const phoneElement = formElement.querySelector('input[type="tel"]');

const lettersOnlyRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
const digitsOnlyRegex = /[+][7][\d ()-]/gu;


const ErrorMassage = {
  FIELD_REQUIRED: 'Поле обязательно для заполнения',
  FIELD_TEXT: 'Поле может содержать только буквы и пробелы',
  FIELD_DIGITS: 'Поле должно содержать только цифры'
};

const ErrorClass = {
  ERROR_INPUT: 'input-error'
};

export { itemsInputElement, lettersOnlyRegex, digitsOnlyRegex, ErrorMassage, ErrorClass, formElement, formContentElement, phoneElement };
