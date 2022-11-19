//попапы
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup__profile');
const popupCard = document.querySelector('.popup__card');
const popupBigImage = document.querySelector('.popup__big-image');


//контейнеры
const containerFormPopupProfile = popupProfile.querySelector('.popup__container');//containerFormPopupCardProfile
const containerFormPopupCard = popupCard.querySelector('.popup__container')
const containerBigImage = popupBigImage.querySelector('.popup__big-image-container');//containerBigImageForm


//кнопка Закрытия
const popupCloseProfileButton = containerFormPopupProfile.querySelector('.popup__close');//кнопка
const popupCloseCardButton = containerFormPopupCard.querySelector('.popup__close');//кнопка
const popupCloseBigImageButton = containerBigImage.querySelector('.popup__close');//кнопка


//кнопка открытия формы редактирования Профиля
const popupOpenButtonFormEditProfile = document.querySelector('.profile__edit-button');//кнопка
//кнопка открытия формы добавления Карточки
const popupOpenButtonFormAddCard = document.querySelector('.profile__add-button');//кнопка

//карточка
const itemTemplate = document.querySelector('.item-template').content;
const elTemplate = itemTemplate.querySelector('.element');

//большая картинка c заголовком
const bigImageTitle = containerBigImage.querySelector('.popup__big-image-title');
const bigImage = containerBigImage.querySelector('.popup__big-image-image');


//сама Карточка
const container = document.querySelector('.elements__list');
const elTemplateTitle = elTemplate.querySelector('.element__title');
const elTemplateImage = elTemplate.querySelector('.element__image');


//поля ввода данных Профидя
const popupFormNameInput = popupProfile.querySelector('.form__item_el_name');
const popupFormAboutInput = popupProfile.querySelector('.form__item_el_about');

//поля ввода данных Карточки
const popupFormTitleInput = popupCard.querySelector('.form__item_el_title');
const popupFormUrlInput = popupCard.querySelector('.form__item_el_url');
const formPopupProfile = popupProfile.querySelector('.form_profile');
const formPopupCard = popupCard.querySelector('.form_card');


const formProfileButton = popupProfile.querySelector('.form__button');//кнопка Сохранить
const formCardButton = popupCard.querySelector('.form__button');//кнопка Создать

const formInputProfileContainer = popupProfile.querySelector('.form__input-container');
const formInputCardContainer = popupCard.querySelector('.form__input-container');

//Данные профиля
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');


//Удаление карточек
const deleteCardHandler = (event) => {
  const target = event.target;
  const currentListItemEl = target.closest('.element');
  currentListItemEl.remove();
};

const initDeleteCard = (elTemplate) => {
  const deleteButton = elTemplate.querySelector('.element__trash');
  deleteButton.addEventListener('click', deleteCardHandler);
};


//Лайк
const likeCardHandler = (event) => {
  event.target.classList.toggle('element__like_active');
};

const initLikeCard = (elTemplate) => {
  const likeButton = elTemplate.querySelector('.element__like');
  likeButton.addEventListener('click', likeCardHandler);
};


//Вставка начальных карточек через Tamplate
const createCard = (cardData) => {
  elTemplateImage.src = cardData.link;
  elTemplateTitle.textContent = cardData.name;
  elTemplateImage.alt = cardData.name;
  const newCard = elTemplate.cloneNode(true);
  initOpenPopupBigImage(newCard);
  initDeleteCard(newCard);
  initLikeCard(newCard);
  return newCard;
}


//закрытие попапа
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

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


//Функция добавления карточки
const formCardSubmitHandler = (event) => {
  event.preventDefault();
  const newCardData = { name: popupFormTitleInput.value, link: popupFormUrlInput.value }
  renderItem(newCardData);
  closePopup(popupCard);
};

popupCard.addEventListener('submit', formCardSubmitHandler);


//Открытие попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};


//Открытие большой картинки
const popupOpenBigImageHandler = (event) => {
  openPopup(popupBigImage);
  const target = event.target;
  bigImageTitle.textContent = target.alt;
  bigImageTitle.alt = target.alt
  bigImage.src = target.src;
};

const initOpenPopupBigImage = (elTemplateImage) => {
  const elImage = elTemplateImage.querySelector('.element__image')
  elImage.addEventListener('click', popupOpenBigImageHandler);
};


//попап добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', () => {
  openPopup(popupCard);
  formPopupCard.reset();
});


//функция добавления данных профиля
formProfileSubmitHandler = (event) => {
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


//рендер
const renderItem = (cardData) => {
  const newCard = createCard(cardData);
  container.prepend(newCard);
};

initialCards.reverse().forEach(renderItem);
