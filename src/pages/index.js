//Импорты Классов
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import Api from '../components/Api.js';

// Импорт файлов CSS
import './index.css';

// Вызов класса Api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'e3cda1d4-1903-40f4-b79f-2419b5c60311',
    'Content-Type': 'application/json'
  }
});

// конфиг валидации
const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'error-border',
  errorClass: 'form__item-error_visible',
};

// кнопка открытия формы редактирования Аватара
const popupOpenButtonFormEditAvatar = document.querySelector('.avatar__edit-button');//кнопка

//кнопка открытия формы редактирования Профиля
const popupOpenButtonFormEditProfile = document.querySelector('.profile__edit-button');//кнопка

//кнопка открытия формы добавления Карточки
const popupOpenButtonFormAddCard = document.querySelector('.profile__add-button');//кнопка


const popupAvatar = document.querySelector('.popup_avatar');

const popupProfile = document.querySelector('.popup_profile');

const popupCard = document.querySelector('.popup_card');

const popupBigImage = document.querySelector('.popup_big-image');

const popupConfirm = document.querySelector('.popup_confirm');

const formPopupAvatar = popupAvatar.querySelector('.form_avatar');

const formPopupProfile = popupProfile.querySelector('.form_profile');

const formPopupCard = popupCard.querySelector('.form_card');

const formPopupConfirm = popupConfirm.querySelector('.form_confirm');

const inputName = formPopupProfile.querySelector('.form__item');

const inputAbout = formPopupProfile.querySelector('.form__item_bottom');


//Данные профиля
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileAvatar = document.querySelector('.avatar__image');

api.getProfileData()
  .then((data) => {
    profileName.textContent = data.name;
    profileAbout.textContent = data.about;
    profileAvatar.src = data.avatar;
  });

function createCard(data) {
  const cardElement = new Card(
    '.item-template',
    data,
    handleOpenImagePopup,
    (id) => {
      confirmDeleteForm.open(
              uberSubmit(id),

        cardElement.deleteCard(id),

    );

}
    ,
(id) => {
  if (cardElement.isLiked()) {
    api.deleteLike(id)
      .then(res => {
        cardElement.setLikes(res.likes)
      });
  } else {
    api.addLike(id)
      .then(res => {
        cardElement.setLikes(res.likes)
      });
  }
}
  );
return cardElement.getElement();
}

function uberSubmit(id) {
  confirmDeleteForm.submitHandler(
    api.deleteCard(id)
      .then(() => { console.log(id) })
  ),
  confirmDeleteForm.close()
};
const confirmDeleteForm = new PopupWithConfirmation(popupConfirm)
confirmDeleteForm.setEventListeners();


const userCards = new Section(
  {
    data: [``],
    renderer: (item) => {
      const card = createCard(item)
      userCards.appendItem(card);
    },
  },
  '.elements__list'
);


Promise.all([
  api.getProfileData(),
  api.getInitialCards(),
])
  .then(([user, cards]) => {
    userInfo.getUserInfo(user.name, user.about);

    console.log(cards)
    userCards.renderItems(cards);
  })


// Валидация форм
const initFormValidator = (formElement) => {
  const validForm = new FormValidator(validationConfig, formElement);
  validForm.enableValidation();
  return validForm;
}

// Валидация формы добавления Аватара
const validationFormAvatar = initFormValidator(formPopupAvatar);
// Валидация формы профиля
const validationFormProfile = initFormValidator(formPopupProfile);
// Валидация формы добавления карточки
const validationFormCard = initFormValidator(formPopupCard);

const validationFormConfirm = initFormValidator(formPopupConfirm);

// Обработчик сабмита изменения Аватара
function handleAvatarFormSubmit(data) {
  console.log(data);
  api.setProfileAvatar(data)
  profileAvatar.src = data.avatar;
};

// Форма изменения Аватара
const createPopupAvatar = (item) => {
  const form = new PopupWithForm(item, handleAvatarFormSubmit);
  form.setEventListeners();
  return form;
};

const popupFormAvatar = createPopupAvatar(popupAvatar);

// Вызов класса данных профиля
const userInfo = new UserInfo({
  name: profileName,
  about: profileAbout
});

// Обработчик сабмита изменения данных профиля
function handleProfileFormSubmit(data) {
  userInfo.setUserInfo(data);
  api.setProfileData(data)
    .then((data) => { console.log(data) })
}

// Форма изменения данных профиля
const createPopupProfiles = (item) => {
  const form = new PopupWithForm(item, handleProfileFormSubmit);
  form.setEventListeners();
  return form;
}

const popupFormProfile = createPopupProfiles(popupProfile);

// Обработчик сабмита формы создания карточки
function handleCardFormSubmit(data) {
  userCards.prependItem(createCard(data));
  api.setNewCard(data)
    .then((data) => { console.log(data) });

};

// Форма создания карточки
const createPopupCards = (item) => {
  const form = new PopupWithForm(item, handleCardFormSubmit);
  form.setEventListeners();
  return form;
};

const popupFormCard = createPopupCards(popupCard);


// попап изменения аватара
popupOpenButtonFormEditAvatar.addEventListener('click', () => {
  popupFormAvatar.open();
  validationFormAvatar.resetValidation();
});

//попап редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputAbout.value = userData.about;
  popupFormProfile.open();
  validationFormProfile.resetValidation();
});

//попап добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', () => {
  popupFormCard.open();
  validationFormCard.resetValidation();
});

// Попап большой картинки
const classPopupBibImage = new PopupWithImage(popupBigImage);
classPopupBibImage.setEventListeners();

function handleOpenImagePopup(name, link) {
  classPopupBibImage.open(name, link);
};


