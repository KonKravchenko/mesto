import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitFormHandler) {
    super(popup);
    this._handleFormSubmit = submitFormHandler;
    this._inputList = this._popup.querySelectorAll(".form__item");
  }

  _getInputValues() {

    this._formValues = {
    };

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;

  }

  setEventListeners() {
    super.setEventListeners();
    this._form = this._popup.querySelector('.form');
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
      this._form.reset();
    }
    );
  }
}
