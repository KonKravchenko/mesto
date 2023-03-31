import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import Popup from './components/Popup.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js';

import './pages/index.css'; // добавьте импорт главного файла стилей
const faviconSvg = new URL('./images/favicon.svg', import.meta.url);
const faviconPng = new URL('./images/favicon.png', import.meta.url);

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
//поля ввода данных Профидя
const popupFormNameInput = popupProfile.querySelector('.form__item');
const popupFormAboutInput = popupProfile.querySelector('.form__item_bottom');


//Данные профиля
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');


const openPopupBibImage = new PopupWithImage(popupBigImage);
openPopupBibImage.setEventListeners();

function handleOpenPopup(name, link) {
  openPopupBibImage.setEventListeners();
  openPopupBibImage.open(name, link);
};

const createCard = (item) => {
  const newCard = new Card(
    '.item-template',
    item,
    handleOpenPopup);
  const element = newCard.getElement();
  return element;
}

// Добавление начальных карточек
const createInitCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const cards = createCard(item)

    createInitCard.addArrayItems(cards);
  }
},
  '.elements__list');

createInitCard.renderItems();


// Валидация форм
const validatorForm = (formElement) => {
  const validForm = new FormValidator(config, formElement);
  validForm.enableValidation();
  return validForm;
}

const validationFormProfile = validatorForm(formPopupProfile);

const validationFormCard = validatorForm(formPopupCard);



function submitFormCard(data) {
  console.log(data);
  const addNewCard = new Section({
    items: [data],
    renderer: (item) => {
      const cards = createCard(item)

      addNewCard.addItem(cards);
    }
  },
    '.elements__list');

  addNewCard.renderItems();
}

const popupCards = (item) => {
  const form = new PopupWithForm(item, submitFormCard);
  form.setEventListeners();
  return form;
}

const popupProfiles = (item) => {
  const form = new PopupWithForm(item, submitFormProfile);
  form.setEventListeners();
  return form;
}

const popupFormCard = popupCards(popupCard);
const popupFormProfile = popupProfiles(popupProfile);

//попап добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', () => {
  popupFormCard.open();
  validationFormCard.resetValidation();
});




//попап редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', () => {
  const userInfo = new UserInfo({
    profileName,
    profileAbout
  });
  userInfo.getUserInfo();
  popupFormProfile.open();
  validationFormProfile.resetValidation();
});



function submitFormProfile(data) {
  const userInfo = new UserInfo(data);
  userInfo.setUserInfo();
}
