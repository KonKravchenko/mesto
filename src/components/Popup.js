export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }


  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  }

  closePopupByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
      return
    }
    this.close();
  }

  setEventListeners() {
    this._popup
      .querySelector('.popup__close')
      .addEventListener("click", this.close.bind(this));
    this._popup.addEventListener('mousedown', this.closePopupByClickOnOverlay);
  }
}
