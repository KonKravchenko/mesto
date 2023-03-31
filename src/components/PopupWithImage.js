// Создайте класс PopupWithImage, который наследует от Popup.
// Этот класс должен перезаписывать родительский метод open.
// В методе open класса PopupWithImage нужно вставлять
//  в попап картинку с src изображения и подписью к картинке.
import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {
  open(name, link) {
    this._popup.querySelector(".popup__big-image-image").src = link;
    this._popup.querySelector(".popup__big-image-image").alt = name;
    this._popup.querySelector(".popup__big-image-title").textContent = name;
    super.open();
  }

}
