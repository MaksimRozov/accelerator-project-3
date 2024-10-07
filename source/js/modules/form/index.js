import { validatePhoneInput, validateNameInput, resetError, validateCheckInput, validateMessageInput } from './utils';
import { formContentElement, formElement, itemsInputElement, ErrorClass, phoneElement } from './variables';
import { initPhoneInput } from './format-phone';

const validateForm = () => {
  initPhoneInput(phoneElement);
  if (formContentElement) {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();

      itemsInputElement.forEach((input) => {
        if (input.name === 'name') {
          validateNameInput(input);
        } else if (input.name === 'phone') {
          validatePhoneInput(input);
        } else if (input.name === 'message') {
          validateMessageInput(input);
        } else if (input.type === 'checkbox') {
          validateCheckInput(input);
        }
      });

      const isValid = Array.from(itemsInputElement).every(
        (input) => !input.classList.contains(ErrorClass.ERROR_INPUT),
      );
      if (isValid) {
        formElement.submit();
      }
    });

    resetError();
  }
};

export { validateForm };
