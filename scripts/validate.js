const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'error-border',
  errorClass: 'form__item-error_visible',
};

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  const formSection = inputElement.closest(`${validationConfig.formSelector}__input`);
  const errorElement = formSection.querySelector(`${validationConfig.inputSelector}-error`);
  errorElement.classList.add(validationConfig.errorClass);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, validationConfig) => {
  const formSection = inputElement.closest(`${validationConfig.formSelector}__input`);
  const errorElement = formSection.querySelector(`${validationConfig.inputSelector}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(validationConfig.errorClass);
};

const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideInputError(formElement, inputElement, validationConfig);
  }
};

const disableSubmitButton = (buttonElement, validationConfig) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
}
const enableSubmitButton = (buttonElement, validationConfig) => {
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove(validationConfig.inactiveButtonClass);
}

const closeEnableSubmitButton = (buttonElement, validationConfig) => {
  if (closePopup) {
    disableSubmitButton(buttonElement, validationConfig);
  }
}

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
  if (hasInvalidInput) {
    disableSubmitButton(buttonElement, validationConfig);
  } else {
    enableSubmitButton(buttonElement, validationConfig);
  }
}

const setFormEventListeners = (formElement, validationConfig) => {

  const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
  formElement.addEventListener('submit', (event) => {
    disableSubmitButton(submitButton, validationConfig);
  })

  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((inputElement) => {

    inputElement.addEventListener('input', function () {

      checkInputValidity(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, submitButton, validationConfig);

    });
  });
};

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((formElement) => {
    setFormEventListeners(formElement, validationConfig);
  });
};

enableValidation(validationConfig)
