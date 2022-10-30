
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

let popupContent = document.querySelector('.popup__content');
let popupName = popupContent.querySelector('.popup__name');
let popupAbout = popupContent.querySelector('.popup__about');

let placeholderName = popupName.getAttribute('placeholder');
let placeholderAbout = popupAbout.getAttribute('placeholder');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

const openPopup = function (event) {
  popupElement.classList.add('popup_opened');
  placeholderName = popupName.setAttribute('placeholder', profileName.textContent);
 placeholderAbout = popupAbout.setAttribute('placeholder', profileAbout.textContent);
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


let formElement = document.querySelector('.popup__content');
let nameInput = formElement.querySelector('.popup__name');
let aboutInput = formElement.querySelector('.popup__about');
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

