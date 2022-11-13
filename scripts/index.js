const popupElement = document.querySelector('.popup');
const popupProfile = document.querySelector('#profile');
const popupImage = document.querySelector('#image');

const popupCloseButtonElProfile = popupProfile.querySelector('.popup__close');
const popupCloseButtonElImage = popupImage.querySelector('.popup__close');

//Профиль
const popupOpenButtonElementProfile = document.querySelector('.profile__edit-button');

//Картинки
const popupOpenButtonElementImage = document.querySelector('.profile__add-button');

let popupContent = document.querySelector('.form');
let popupName = popupContent.querySelector('.form__item_el_name');
let popupAbout = popupContent.querySelector('.form__item_el_about');


let valueName = popupName.getAttribute('value');
let valueAbout = popupAbout.getAttribute('value');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

const openPopupProfile = function (event) {
  popupProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
};

const openPopupImage = function (event) {
  popupImage.classList.add('popup_opened');
  imageTitleInput.value = '';
  imageUrlInput.value = '';
};

const closePopup = function () {
  popupProfile.classList.remove('popup_opened');
  popupImage.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup();
}

popupOpenButtonElementProfile.addEventListener('click', openPopupProfile);
popupOpenButtonElementImage.addEventListener('click', openPopupImage);
popupCloseButtonElProfile.addEventListener('click', closePopup);
popupCloseButtonElImage.addEventListener('click', closePopup);
popupProfile.addEventListener('click', closePopupByClickOnOverlay);
popupImage.addEventListener('click', closePopupByClickOnOverlay);

//Профиль: функция добавления данных профиля
let formElProfile = document.querySelector('#edit_profile');
let nameInput = formElProfile.querySelector('.form__item_el_name');
let aboutInput = formElProfile.querySelector('.form__item_el_about');


function formSubmitHandler(evt) {
  evt.preventDefault();
  const nameProfile = document.querySelector('.profile__name');
  const aboutProfile = document.querySelector('.profile__about');


  if (nameInput.value !== '', aboutInput.value !== '') {
    nameProfile.textContent = nameInput.value;
    aboutProfile.textContent = aboutInput.value;

    closePopup();
  }
}

formElProfile.addEventListener('submit', formSubmitHandler);





