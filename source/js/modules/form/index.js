import { validatePhoneInput, validateNameInput, resetError, validateCheckInput, validateMessageInput, validateSelectInput } from './utils';
import { formContentElement, formElement, itemsInputElement, ErrorClass, phoneElement } from './variables';
import { initPhoneInput } from './format-phone';

const validateForm = (phone, wrapper, form, inputs) => {
  initPhoneInput(phone);
  if (wrapper) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      inputs.forEach((input) => {
        if (input.type === 'text') {
          validateNameInput(input);
        } else if (input.type === 'tel') {
          validatePhoneInput(input);
        } else if (input.name === 'message') {
          validateMessageInput(input);
        } else if (input.name === 'city') {
          validateSelectInput(input);
        } else if (input.type === 'checkbox') {
          validateCheckInput(input);
        }
      });

      const validCheck = formElement.querySelector('.form__check-custom').classList.contains(ErrorClass.ERROR_INPUT);

      const isValid = Array.from(inputs).every(
        (input) => !input.classList.contains(ErrorClass.ERROR_INPUT),
      );
      if (isValid && !validCheck) {
        form.submit();
      }
    });

    resetError();
  }
};

const initFormMain = () => {
  validateForm(phoneElement, formContentElement, formElement, itemsInputElement);
};

export { initFormMain, validateForm };
