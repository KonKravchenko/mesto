import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._bigImage = this._popup.querySelector(".popup__big-image-image");
    this._bigImageTitle = this._popup.querySelector(".popup__big-image-title");
  }
  open(name, link) {
    super.open();
    this._bigImage.src = link;
    this._bigImage.alt = name;
    this._bigImageTitle.textContent = name;
  }
}
