export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
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
      return this.close();
    }
  }

  closePopupByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
      return
    }
    this.close(event.currentTarget);
  }

  setEventListeners() {
    this._popup
      .querySelector('.popup__close')
      .addEventListener("click", this.close.bind(this));
    this._popup.addEventListener('mousedown', this.closePopupByClickOnOverlay);
  }
}
