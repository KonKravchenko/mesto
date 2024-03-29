import Popup from "./Popup.js";


export default class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._form = this._popup.querySelector('.form');
  }

  setCallback(functionDeleteCard) {
    this._handleSubmit = functionDeleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}
