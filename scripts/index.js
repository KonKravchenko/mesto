//попапы
const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup__card');
const popupBigImage = document.querySelector('.popup_big-image');


//контейнеры
const containerFormPopupProfile = popupProfile.querySelector('.popup__container');//containerFormPopupCardProfile
const containerFormPopupCard = popupCard.querySelector('.popup__container')
const containerBigImage = popupBigImage.querySelector('.popup__big-image_container');//containerBigImageForm


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
const bigImageTitle = containerBigImage.querySelector('.popup__big-image_title');
const bigImage = containerBigImage.querySelector('.popup__big-image_image');


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
const initDeleteCardHandler = (event) => {
  const target = event.target;
  const currentListItemEl = target.closest('.element');
  currentListItemEl.remove();
};

const initDeleteCard = (elTemplate) => {
  const deleteButton = elTemplate.querySelector('.element__trash');
  deleteButton.addEventListener('click', initDeleteCardHandler);
};

//Лайк
const initLikeCardHandler = (event) => {
  if (event.target.classList.contains('element__like')) {
    event.target.classList.toggle('element__like_active');
  };
};

const initLikeCard = container.addEventListener('click', initLikeCardHandler);



//Вставка начальных карточек через Tamplate
const createCard = (cardData) => {
  elTemplateImage.src = cardData.link;
  elTemplateTitle.textContent = cardData.name;
  elTemplateImage.alt = cardData.name;
  const newCard = elTemplate.cloneNode(true);
  initOpenPopupBigImage(newCard);
  initDeleteCard(newCard);
  //initLikeCard(newCard);// - не выходит
  return newCard;
}

//закрытие попапа
const closePopup = (event) => {
  popupProfile.classList.remove('popup_opened');
  popupCard.classList.remove('popup_opened');
  popupBigImage.classList.remove('popup_opened');
  formPopupProfile.reset();
  formPopupCard.reset();
};

const initPopupCloseButtons = (event) => {
  popupCloseCardButton.addEventListener('click', closePopup);
  popupCloseProfileButton.addEventListener('click', closePopup);
  popupCloseBigImageButton.addEventListener('click', closePopup);
};

initPopupCloseButtons();


//Закрытыие через overlay
const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup();
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
const openPopup = (event) => {
  event.classList.add('popup_opened');
};


//Открытие большой картинки

const popupOpenBigImageHandler = (event) => {
  openPopup(popupBigImage);
  const target = event.target;
  bigImageTitle.textContent = target.alt;
  bigImage.src = target.src;
};

const initOpenPopupBigImage = (elTemplateImage) => {
  const elImage = elTemplateImage.querySelector('.element__image')
  elImage.addEventListener('click', popupOpenBigImageHandler);
};


//попап добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', (event) => {
  openPopup(popupCard);
});


//попап редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', (event) => {
  openPopup(popupProfile);

  //функция добавления данных профиля
  formProfileSubmitHandler = (event) => {
    event.preventDefault();

    if (popupFormNameInput.value !== '' && popupFormAboutInput.value !== '') {
      profileName.textContent = popupFormNameInput.value;
      profileAbout.textContent = popupFormAboutInput.value;

      closePopup(popupProfile);
    }
  }

  popupProfile.addEventListener('submit', formProfileSubmitHandler);
});


//рендер
const renderItem = (cardData) => {
  const newCard = createCard(cardData);
  container.prepend(newCard);
};

initialCards.reverse();
initialCards.forEach(renderItem);

