// Создайте класс PopupWithForm
// Создайте класс PopupWithForm, который наследует от Popup.
// Этот класс:
// Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
// Содержит приватный метод _getInputValues,
//  который собирает данные всех полей формы.
// Перезаписывает родительский метод setEventListeners.
//  Метод setEventListeners класса PopupWithForm должен
//  не только добавлять обработчик клика иконке закрытия,
//   но и добавлять обработчик сабмита формы.
// Перезаписывает родительский метод close, так как
// при закрытии попапа форма должна ещё и сбрасываться.
// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
constructor(popup, submitFormHandler){
super(popup);
this._submitFormHandler = submitFormHandler;
}

_getInputValues(){

  this._formValues = {
  };
  this._inputList = this._popup.querySelectorAll(".form__item");

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
    this._submitFormHandler(this._getInputValues());
    this.close();
    this._form.reset();
}
    );
}



// //попап добавления карточки
// popupOpenButtonFormAddCard.addEventListener('click', () => {
//   openPopup(popupCard);
//   formPopupCard.reset();
//   validationFormCard.resetValidation();
// });

// //попап редактирования профиля
// popupOpenButtonFormEditProfile.addEventListener('click', () => {
//   popupFormNameInput.value = profileName.textContent;
//   popupFormAboutInput.value = profileAbout.textContent;
//   openPopup(popupProfile);
//   validationFormProfile.resetValidation();
// });

// //функция добавления данных профиля
// const formProfileSubmitHandler = (event) => {
//   event.preventDefault();
//   profileName.textContent = popupFormNameInput.value;
//   profileAbout.textContent = popupFormAboutInput.value;
//   closePopup(popupProfile);
// };

// popupProfile.addEventListener('submit', formProfileSubmitHandler);
}
