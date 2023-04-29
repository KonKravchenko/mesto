import Popup from "./Popup.js";


export default class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._form = document.querySelector('.form_confirm');
  }

  setCallback(functionDeleteCard) {
    this._handleSubmit = functionDeleteCard;
  }

  submitHandler() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit();
      console.log('changeSubmitHandler');
    });
  }
}
