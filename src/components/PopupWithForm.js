import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitFormHandler) {
    super(popup);
    this._handleFormSubmit = submitFormHandler;
    this._inputList = this._popup.querySelectorAll(".form__item");
    this._form = this._popup.querySelector('.form');
    this._submitButton = this._form.querySelector('.form__button');
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    super.close();
    this._form.reset();
  }


  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = `Сохранение...`;
    } else {
      this._submitButton.textContent = this._submitButton.value;
    }
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    }
    );
  }
}
