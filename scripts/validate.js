const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElementhh = inputElement.closest('.form__input');
  const errorElement = errorElementhh.querySelector('.form__item-error');
  errorElement.classList.add('form__item-error_visible');
  inputElement.classList.add('error-border');
  errorElement.textContent = errorMessage;

};

const hideInputError = (formElement, inputElement) => {
  const errorElementhh = inputElement.closest('.form__input');
  const errorElement = errorElementhh.querySelector('.form__item-error');
  inputElement.classList.remove('error-border');
  errorElement.textContent = 'ошибка';
  errorElement.classList.remove('form__item-error_visible');
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};


const toggleButtonState = (inputList, buttonElement) => {
  const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
  if (hasInvalidInput) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add("form__button_disabled");
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove("form__button_disabled");
  }
}


const initFormSubmitValidate = (formElement) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  })

  const submitButton = formElement.querySelector('.form__button');
  const inputList = Array.from(formElement.querySelectorAll('.form__item'));
  inputList.forEach((inputElement) => {

    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButton);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });

    initFormSubmitValidate(formElement);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'error-border',
  errorClass: 'form__item-error'
});
