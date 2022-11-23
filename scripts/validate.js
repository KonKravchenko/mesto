const objects = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'error-border',
  errorClass: 'form__item-error_visible',
};

const showInputError = (formElement, inputElement, errorMessage, objects) => {
  const formSection = inputElement.closest(`${objects.formSelector}__input`);
  const errorElement = formSection.querySelector(`${objects.inputSelector}-error`);
  errorElement.classList.add(objects.errorClass);
  inputElement.classList.add(objects.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, objects) => {
  const formSection = inputElement.closest(`${objects.formSelector}__input`);
  const errorElement = formSection.querySelector(`${objects.inputSelector}-error`);
  inputElement.classList.remove(objects.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(objects.errorClass);
};

const checkInputValidity = (formElement, inputElement, objects) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, objects);
  } else {
    hideInputError(formElement, inputElement, objects);
  }
};

const disableSubmitButton = (buttonElement, objects) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(objects.inactiveButtonClass);
}
const enableSubmitButton = (buttonElement, objects) => {
  buttonElement.removeAttribute("disabled");
  buttonElement.classList.remove(objects.inactiveButtonClass);
}

const closeEnableSubmitButton = (buttonElement, objects) => {
  if (closePopup) {
    disableSubmitButton(buttonElement, objects);
  }
}

const toggleButtonState = (inputList, buttonElement, objects) => {
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
  if (hasInvalidInput) {
    disableSubmitButton(buttonElement, objects);
  } else {
    enableSubmitButton(buttonElement, objects);
  }
}

const setFormEventListeners = (formElement, objects) => {

  const submitButton = formElement.querySelector(objects.submitButtonSelector);
  formElement.addEventListener('submit', (event) => {
    disableSubmitButton(submitButton, objects);
  })

  const inputList = Array.from(formElement.querySelectorAll(objects.inputSelector));
  inputList.forEach((inputElement) => {

    inputElement.addEventListener('input', function () {

      checkInputValidity(formElement, inputElement, objects);
      toggleButtonState(inputList, submitButton, objects);

    });
  });
};

const enableValidation = (objects) => {
  const formList = Array.from(document.querySelectorAll(objects.formSelector));
  formList.forEach((formElement) => {
    setFormEventListeners(formElement, objects);
  });
};

enableValidation(objects)
