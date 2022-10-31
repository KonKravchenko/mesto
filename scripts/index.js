
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

let popupContent = document.querySelector('.form');
let popupName = popupContent.querySelector('.form__item_el_name');
let popupAbout = popupContent.querySelector('.form__item_el_about');

let valueName = popupName.getAttribute('value');
let valueAbout = popupAbout.getAttribute('value');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

const openPopup = function (event) {
  popupElement.classList.add('popup_opened');
  valueName = popupName.setAttribute('value', profileName.textContent);
  valueAbout = popupAbout.setAttribute('value', profileAbout.textContent);
}

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);




popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);


let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__item_el_name');
let aboutInput = formElement.querySelector('.form__item_el_about');
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

formElement.addEventListener('submit', formSubmitHandler);

