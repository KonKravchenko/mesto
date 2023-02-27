import Card from './Card.js';
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
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'error-border',
  errorClass: 'form__item-error_visible',
};
const popupCard = document.querySelector('.popup_card');

const cardsContainer = document.querySelector('.elements__list');


// Добавление начальных карточек
const createCard = (cardData) => {

  const newCard = new Card('.item-template', cardData, handleOpenPopup);
  const element = newCard.getElement();
  return element;
}
const popupFormTitleInput = popupCard.querySelector('.form__item');
const popupFormUrlInput = popupCard.querySelector('.form__item_bottom');

//Функция добавления карточки
const formCardSubmitHandler = (event) => {
  event.preventDefault();
  const newCardData = {
    name: popupFormTitleInput.value,
    link: popupFormUrlInput.value
  }
  renderItem(newCardData);

  closePopup(popupCard);
};

popupCard.addEventListener('submit', formCardSubmitHandler);

//рендер
const renderItem = (cardData) => {
  const newCard = createCard(cardData);
  cardsContainer.prepend(newCard);
};

initialCards.reverse().forEach(renderItem);

const formPopupCard = popupCard.querySelector('.form_card');




const popupProfile = document.querySelector('.popup_profile');
const formPopupProfile = popupProfile.querySelector('.form_profile');

// Валидация форм
const validatorForm = (formElement) => {
  const validForm = new FormValidator(config, formElement);
  validForm.enableValidation();

  return validForm;
}

const validationFormProfile = validatorForm(formPopupProfile);
const validationFormCard = validatorForm(formPopupCard);

// очистка форм
const resetValidator = (formElement) => {
  const popupFormValid = new FormValidator(config, formElement);
  popupFormValid.resetValidation();
  return popupFormValid;
}


// Попап большой картинки
const popupBigImage = document.querySelector('.popup_big-image');
const bigImage = popupBigImage.querySelector('.popup__big-image-image');
const bigImageTitle = popupBigImage.querySelector('.popup__big-image-title');

// Открытие попапа большой картинки
function handleOpenPopup(name, link) {
  bigImage.src = link;
  bigImage.alt = name;
  bigImageTitle.textContent = name;
  openPopup(popupBigImage);
}

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


//закрытие попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

//закрытие попапа через Esc
const closePopupByEsc = (event) => {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened')
    return closePopup(openedPopup);
  }
}

// Закрытие попапа по кнопке
const initPopupCloseButtons = (event) => {
  popupCloseCardButton.addEventListener('click', () => closePopup(popupCard));
  popupCloseProfileButton.addEventListener('click', () => closePopup(popupProfile));;
  popupCloseBigImageButton.addEventListener('click', () => closePopup(popupBigImage));
};

initPopupCloseButtons();


//Закрытыие попапа через overlay
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
  resetValidator(popupCard);
  formPopupCard.reset();
});

//попап редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', () => {
  popupFormNameInput.value = profileName.textContent;
  popupFormAboutInput.value = profileAbout.textContent;
  openPopup(popupProfile);
  resetValidator(popupProfile);
});

//функция добавления данных профиля
const formProfileSubmitHandler = (event) => {
  event.preventDefault();
  profileName.textContent = popupFormNameInput.value;
  profileAbout.textContent = popupFormAboutInput.value;
  closePopup(popupProfile);
};

popupProfile.addEventListener('submit', formProfileSubmitHandler);





