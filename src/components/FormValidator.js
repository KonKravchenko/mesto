class FormValidator {
  constructor(config, formElement) {
    this.config = config;
    this.formElement = formElement;
    this.inputList = Array.from(this.formElement.querySelectorAll(this.config.inputSelector));
    this.submitButton = this.formElement.querySelector(this.config.submitButtonSelector);
  }

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError = (inputElement) => {
    this.formSection = inputElement.closest(`${this.config.formSelector}__input`);
    this.errorElement = this.formSection.querySelector(`${this.config.inputSelector}-error`);
    this.errorElement.classList.add(this.config.errorClass);
    inputElement.classList.add(this.config.inputErrorClass);
    this.errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError = (inputElement) => {
    this.formSection = inputElement.closest(`${this.config.formSelector}__input`);
    this.errorElement = this.formSection.querySelector(`${this.config.inputSelector}-error`);
    inputElement.classList.remove(this.config.inputErrorClass);
    this.errorElement.textContent = '';
    this.errorElement.classList.remove(this.config.errorClass);
  }

  _enableSubmitButton = () => {
    this.submitButton.disabled = false;
    this.submitButton.classList.remove(this.config.inactiveButtonClass);
  }

  _hasInvalidInput() {
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  resetValidation = () => {
    this.inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
    this.disableSubmitButton();
  }

  _setEventListeners = () => {


    this._toggleButtonState();

    this.inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {

        this._checkInputValidity(inputElement);
        this._toggleButtonState();

      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  disableSubmitButton() {
    this.submitButton.disabled = true;
    this.submitButton.classList.add(this.config.inactiveButtonClass);
  }
}

export default FormValidator
