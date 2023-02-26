import { config } from './index.js';

class FormValidator {

  constructor(config, formElement) {
    this.config = config;
    this.formElement = formElement;
  }

  _checkInputValidity(formElement, inputElement, config) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      this._hideInputError(formElement, inputElement, config);
    }
  }

  _showInputError = (formElement, inputElement, errorMessage, config) => {
    const formSection = inputElement.closest(`${config.formSelector}__input`);
    const errorElement = formSection.querySelector(`${config.inputSelector}-error`);
    errorElement.classList.add(config.errorClass);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError = (formElement, inputElement, config) => {
    const formSection = inputElement.closest(`${config.formSelector}__input`);
    const errorElement = formSection.querySelector(`${config.inputSelector}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass);

  }

  _enableSubmitButton = (buttonElement, config) => {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(config.inactiveButtonClass);

  }

  disableSubmitButton = (buttonElement, config) => {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add(config.inactiveButtonClass);
  }


  _toggleButtonState = (inputList, buttonElement, config) => {
    const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);
    if (hasInvalidInput) {
      this.disableSubmitButton(buttonElement, config);
    } else {
      this._enableSubmitButton(buttonElement, config);
    }

  }

  _setEventListeners = (formElement, config) => {

    const submitButton = formElement.querySelector(config.submitButtonSelector);
    formElement.addEventListener('submit', (event) => {
      this.disableSubmitButton(submitButton, config);
    })



    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', (evt) => {

        this._checkInputValidity(formElement, inputElement, config);
        this._toggleButtonState(inputList, submitButton, config);

      });
    });
  }

  enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement, config);
    });

  }
}

export default FormValidator
