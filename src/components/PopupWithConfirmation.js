import Popup from "./Popup.js";


export default class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);

  }

  submitHandler() {
    this._form = document.querySelector('.form_confirm');
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log('changeSubmitHandler');
      this.close()
     });
  }

  setEventListeners() {
    super.setEventListeners();
    console.log('setEventListeners')
  }
}
