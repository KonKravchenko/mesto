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

// ---Аватар---

// попап
const popupAvatar = document.querySelector('.popup_avatar');
// форма
const formPopupAvatar = popupAvatar.querySelector('.form_avatar');
// сабмит
const submitBtnFormPopupAvatar = formPopupAvatar.querySelector('.form__button');

// ---Профиль---
const popupProfile = document.querySelector('.popup_profile');
// форма
const formPopupProfile = popupProfile.querySelector('.form_profile');
// инпуты
const inputName = formPopupProfile.querySelector('.form__item');
const inputAbout = formPopupProfile.querySelector('.form__item_bottom');
// сабмит
const submitBtnFormPopupProfile = formPopupProfile.querySelector('.form__button');

// ---Карточка---

// попап
const popupCard = document.querySelector('.popup_card');
const popupBigImage = document.querySelector('.popup_big-image');
const popupConfirm = document.querySelector('.popup_confirm');
// форма
const formPopupCard = popupCard.querySelector('.form_card');
// сабмит
const submitBtnFormPopupCard = formPopupCard.querySelector('.form__button');

// ---Данные профиля---
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileAvatar = document.querySelector('.avatar__image');


// ---Вызов класса UserInfo---
const userInfo = new UserInfo({
  name: profileName,
  about: profileAbout,
  avatar: profileAvatar
});

// ---Получение и установка данных---
Promise.all([
  api.getProfileData(),
  api.getInitialCards(),
])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user)
    // profileName.textContent = user.name,
    //   profileAbout.textContent = user.about,
    //   profileAvatar.src = user.avatar;
    userCards.renderItems(cards);
  })
// .catch((err) => {
//   console.log(`Ошибка: ${err}`)
// });

// ---Функция создания Карточки---
function createCard(data) {
  const cardElement = new Card(
    '.item-template',
    data,
    userInfo.getUserId(),
    handleOpenImagePopup,
    (id) => {
      confirmDeleteForm.open();
      confirmDeleteForm.setCallback(() => {
        api.deleteCard(id)
          .then(() => {
            cardElement.deleteCard()
            confirmDeleteForm.close()
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`)
          })
      })
    }
    ,
    (id) => {
      if (cardElement.isLiked()) {
        api.deleteLike(id)
          .then(data => {
            cardElement.removeLike();
            cardElement.setLikes(data.likes)

            console.log('удалить', data.likes.length)
          })
          .catch((err) => { console.log(`Ошибка: ${err}`) });

      } else {
        api.addLike(id)
          .then(data => {
            cardElement.putLike();
            cardElement.setLikes(data.likes)

            console.log('лайкнуть', data.likes.length)
          })
          .catch((err) => { console.log(`Ошибка: ${err}`) });
      }

    }
  )

  return cardElement.getElement();
}

// ---Вызов класса формы подтверждения удаления Карточки---
const confirmDeleteForm = new PopupWithConfirmation(popupConfirm);
confirmDeleteForm.setEventListeners();

// ---Вызов класса Section---
const userCards = new Section(
  {
    renderer: (item) => {
      const card = createCard(item)
      userCards.appendItem(card);
    },
  },
  '.elements__list'
);


// ---Валидация форм---
const initFormValidator = (formElement) => {
  const validForm = new FormValidator(validationConfig, formElement);
  validForm.enableValidation();
  return validForm;
};

// Валидация формы добавления Аватара
const validationFormAvatar = initFormValidator(formPopupAvatar);
// Валидация формы профиля
const validationFormProfile = initFormValidator(formPopupProfile);
// Валидация формы добавления карточки
const validationFormCard = initFormValidator(formPopupCard);

// Форма изменения Аватара
const popupFormAvatar = new PopupWithForm(popupAvatar, handleAvatarFormSubmit);
popupFormAvatar.setEventListeners();

// Форма изменения данных Профиля
const popupFormProfile = new PopupWithForm(popupProfile, handleProfileFormSubmit);
popupFormProfile.setEventListeners();

// Форма создания Карточки
const popupFormCard = new PopupWithForm(popupCard, handleCardFormSubmit);
popupFormCard.setEventListeners();

// Попап большой картинки
const imagePopup = new PopupWithImage(popupBigImage);
imagePopup.setEventListeners();


// обработчик открытия попапа с большой картинкой
function handleOpenImagePopup(name, link) {
  imagePopup.open(name, link);
};

// Обработчик сабмита изменения Аватара
function handleAvatarFormSubmit(data) {
  popupFormAvatar.renderLoading(true);
  api.setProfileAvatar(data)
    .then((data) => {
      userInfo.setUserAvatar(data);
      popupFormAvatar.close()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      popupFormAvatar.renderLoading(false);
    });
};

// Обработчик сабмита изменения данных профиля
function handleProfileFormSubmit(data) {
  popupFormProfile.renderLoading(true);
  api.setProfileData(data)
    .then((data) => {
      console.log(data),
        userInfo.setUserInfo(data);
      popupFormProfile.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      popupFormProfile.renderLoading(false);
    });
};

// Обработчик сабмита формы создания карточки
function handleCardFormSubmit(data) {
  popupFormCard.renderLoading(true);
  api.setNewCard(data)
    .then((data) => {
      userCards.prependItem(createCard(data));
      console.log(data)
      popupFormCard.close()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
      popupFormCard.renderLoading(false);
    });
};


// открытие попапа изменения аватара
popupOpenButtonFormEditAvatar.addEventListener('click', () => {
  popupFormAvatar.open();
  validationFormAvatar.resetValidation();
});

// открытие попапа редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputAbout.value = userData.about;
  popupFormProfile.open();
  validationFormProfile.resetValidation();
});

// открытие попапа добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', () => {
  popupFormCard.open();
  validationFormCard.resetValidation();
});
