import { itemsInputElement, lettersOnlyRegex, digitsOnlyRegex, ErrorMassage, ErrorClass } from './variables';

const showErrorMessage = (input, errorMessage) => {
  const parent = input.parentElement;
  const errorText = parent.querySelector('.form__error-text');
  input.classList.add(ErrorClass.ERROR_INPUT);
  errorText.textContent = errorMessage;
  errorText.style.display = 'block';
};

const hideErrorMessage = (input) => {
  const parent = input.parentElement;
  const errorText = parent.querySelector('.form__error-text');
  input.classList.remove(ErrorClass.ERROR_INPUT);
  errorText.textContent = '';
  errorText.style.display = 'none';
};

const validatePhoneInput = (input) => {
  const value = input.value.trim();

  if (value === '') {
    showErrorMessage(input, ErrorMassage.FIELD_REQUIRED);
  } else if (!digitsOnlyRegex.test(value)) {
    showErrorMessage(input, ErrorMassage.FIELD_DIGITS);
  } else {
    hideErrorMessage(input);
  }
};

const validateNameInput = (input) => {
  const value = input.value.trim();

  if (value === '') {
    showErrorMessage(input, ErrorMassage.FIELD_REQUIRED);
  } else if (!lettersOnlyRegex.test(value)) {
    showErrorMessage(input, ErrorMassage.FIELD_TEXT);
  } else {
    hideErrorMessage(input);
  }
};

const validateCheckInput = (input) => {
  const formCustom = document.querySelector('.form__check-custom');

  if (!input.checked) { // Проверяем, что чекбокс не отмечен
    formCustom.classList.add('input-error');
    // showErrorMessage(input, ErrorMassage.FIELD_REQUIRED); // Предполагается, что эта функция определена
  } else {
    formCustom.classList.remove('input-error'); // Убираем ошибку, если чекбокс отмечен
    // hideErrorMessage(input); // Скрываем сообщение об ошибке
  }
};


const resetError = () => {
  itemsInputElement.forEach((input) => {
    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        hideErrorMessage(input);
        input.classList.remove(ErrorClass.ERROR_INPUT);
      }
    });
    input.addEventListener('input', () => {
      hideErrorMessage(input);
      input.classList.remove(ErrorClass.ERROR_INPUT);
    });
  });
};

export { hideErrorMessage, validatePhoneInput, validateNameInput, resetError, validateCheckInput };
