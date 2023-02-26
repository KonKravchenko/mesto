import Cards from './Cards.js';
import FormValidator from './FormValidator.js';


//Начальные карточки

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  selectorElementsContainer: '.elements',
  selectorElementsList: '.elements__list',
  selectorItemTemplate: '.item-template',

  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'error-border',
  errorClass: 'form__item-error_visible',
};

// Добавление начальных карточек
const elementList = document.querySelector(config.selectorElementsList);

for (const item of initialCards) {
  const initCards = new Cards(config.selectorItemTemplate, item);
  const element = initCards.getElement();
  elementList.append(element);
}

const popupCard = document.querySelector('.popup_card');
const formPopupCard = popupCard.querySelector('.form_card');
const validatorCard = new FormValidator(config, formPopupCard);
validatorCard.enableValidation(config, formPopupCard);


const popupProfile = document.querySelector('.popup_profile');
const formPopupProfile = popupProfile.querySelector('.form_profile');
const validatorProfile = new FormValidator(config, formPopupProfile);
validatorProfile.enableValidation(config, formPopupProfile);


const buttonSabmitCard = formPopupCard.querySelector(config.submitButtonSelector);
const buttonSabmitProfile = formPopupProfile.querySelector(config.submitButtonSelector);

const resetInputItemError = () => {
  const formItemErrorList = Array.from(document.querySelectorAll('.form__item-error'));
  formItemErrorList.forEach((event) => {
    event.classList.remove(config.errorClass);
  });
};

const resetInputItem = () => {
  const formItemList = Array.from(document.querySelectorAll('.form__item'));
  formItemList.forEach((event) => {
    event.classList.remove(config.inputErrorClass);
  });
};


//закрытие попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
  validatorCard.disableSubmitButton(buttonSabmitCard, config);
  validatorProfile.disableSubmitButton(buttonSabmitProfile, config);
  resetInputItemError();
  resetInputItem();
};

const newCard = [{
  name: '',
  link: ''
}];


const addCardToList = (event) => {
  event.preventDefault();

  for (const item of newCard) {

    const addNewCard = new Cards(config.selectorItemTemplate, item);
    const element = addNewCard.getNewElement();
    elementList.prepend(element);
    closePopup(popupCard);
  }
};

popupCard.addEventListener('submit', addCardToList);

const popupBigImage = document.querySelector('.popup_big-image');


//контейнеры
const containerFormPopupProfile = popupProfile.querySelector('.popup__container');
const containerFormPopupCard = popupCard.querySelector('.popup__container');
const containerBigImage = popupBigImage.querySelector('.popup__big-image-container');


//кнопка Закрытия
const popupCloseProfileButton = containerFormPopupProfile.querySelector('.popup__close');//кнопка
const popupCloseCardButton = containerFormPopupCard.querySelector('.popup__close');//кнопка
const popupCloseBigImageButton = containerBigImage.querySelector('.popup__close');//кнопка


//кнопка открытия формы редактирования Профиля
const popupOpenButtonFormEditProfile = document.querySelector('.profile__edit-button');//кнопка
//кнопка открытия формы добавления Карточки
const popupOpenButtonFormAddCard = document.querySelector('.profile__add-button');//кнопка


//поля ввода данных Профидя
const popupFormNameInput = popupProfile.querySelector('.form__item');
const popupFormAboutInput = popupProfile.querySelector('.form__item_bottom');




//Данные профиля
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

//закрытие попапа через Esc
const closePopupByEsc = (event) => {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened')
    return closePopup(openedPopup);
  }
}


const initPopupCloseButtons = (event) => {
  popupCloseCardButton.addEventListener('click', () => closePopup(popupCard));
  popupCloseProfileButton.addEventListener('click', () => closePopup(popupProfile));;
  popupCloseBigImageButton.addEventListener('click', () => closePopup(popupBigImage));
};

initPopupCloseButtons();


//Закрытыие через overlay
const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup(event.currentTarget);
};

popupProfile.addEventListener('click', closePopupByClickOnOverlay);
popupCard.addEventListener('click', closePopupByClickOnOverlay);
popupBigImage.addEventListener('click', closePopupByClickOnOverlay);


//Открытие попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

//попап добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', () => {
  openPopup(popupCard);
  formPopupCard.reset();
});

//функция добавления данных профиля
const formProfileSubmitHandler = (event) => {
  event.preventDefault();
  profileName.textContent = popupFormNameInput.value;
  profileAbout.textContent = popupFormAboutInput.value;
  closePopup(popupProfile);
};

popupProfile.addEventListener('submit', formProfileSubmitHandler);


//попап редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', () => {
  popupFormNameInput.value = profileName.textContent;
  popupFormAboutInput.value = profileAbout.textContent;
  openPopup(popupProfile);
});



export { config }
