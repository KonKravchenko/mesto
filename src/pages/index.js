import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

import './index.css';

//Начальные карточки

//Утилитарные константы должны быть выделены в отдельный файл utils/constants.js
//Такого нет в задании и в чек листе
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

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'error-border',
  errorClass: 'form__item-error_visible',
};


const popupCard = document.querySelector('.popup_card');

const popupBigImage = document.querySelector('.popup_big-image');

const formPopupCard = popupCard.querySelector('.form_card');

//кнопка открытия формы добавления Карточки
const popupOpenButtonFormAddCard = document.querySelector('.profile__add-button');//кнопка

// //кнопка открытия формы редактирования Профиля
const popupOpenButtonFormEditProfile = document.querySelector('.profile__edit-button');//кнопка

const popupProfile = document.querySelector('.popup_profile');
const formPopupProfile = popupProfile.querySelector('.form_profile');


//Данные профиля
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');


const classPopupBibImage = new PopupWithImage(popupBigImage);
classPopupBibImage.setEventListeners();

function handleOpenImagePopup(name, link) {
  classPopupBibImage.open(name, link);
};

const createCard = (cardData) => {
  const newCard = new Card(
    '.item-template',
    cardData,
    handleOpenImagePopup);
  const element = newCard.getElement();
  return element;
}

// Добавление начальных карточек
const cardsSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item)
    cardsSection.appendItem(card);
  }
},
  '.elements__list');

cardsSection.renderItems();

// Валидация форм
const initFormValidator = (formElement) => {
  const validForm = new FormValidator(validationConfig, formElement);
  validForm.enableValidation();
  return validForm;
}

const validationFormProfile = initFormValidator(formPopupProfile);

const validationFormCard = initFormValidator(formPopupCard);


function handleCardFormSubmit(data) {
  cardsSection.prependItem(createCard(data));
}

const createPopupCards = (item) => {
  const form = new PopupWithForm(item, handleCardFormSubmit);
  form.setEventListeners();
  return form;
}

function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data);
}

const createPopupProfiles = (item) => {
  const form = new PopupWithForm(item, handleProfileFormSubmit);
  form.setEventListeners();
  return form;
}

const popupFormCard = createPopupCards(popupCard);
const popupFormProfile = createPopupProfiles(popupProfile);

//попап добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', () => {
  popupFormCard.open();
  validationFormCard.resetValidation();
});

const userInfo = new UserInfo({
  name: profileName,
  about: profileAbout
});

const inputName = formPopupProfile.querySelector('.form__item');
const inputAbout = formPopupProfile.querySelector('.form__item_bottom');

const userData = userInfo.getUserInfo();

//попап редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', () => {
  inputName.value = userData.name;
  inputAbout.value = userData.about;
  popupFormProfile.open();
  validationFormProfile.resetValidation();
});


