import Popup from "./Popup.js";


export default class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
 this._form = document.querySelector('.form_confirm');
  }

  setCallback(submitCb) {
    this._handleSubmit = submitCb;
  }

  submitHandler() {

    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit();
      console.log('changeSubmitHandler');
      // this.close()
     });
  }

  // setEventListeners() {
  //   super.setEventListeners();
  //   console.log('setEventListeners')
  // }
}
