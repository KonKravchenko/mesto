//попапы
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup__profile');
const popupCard = document.querySelector('.popup__card');
const popupBigImage = document.querySelector('.popup__big-image');


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
//const formProfileTitle = formPopupProfile.querySelector('.form__title');
const formPopupCard = popupCard.querySelector('.form_card');
//const formCardTitle = formPopupCard.querySelector('.form__title');


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
  //console.log(target);
  const currentListItemEl = target.closest('.element');
  //console.log(currentListItemEl);
  currentListItemEl.remove();
};

const initDeleteCard = (elTemplate) => {
  const deleteButton = elTemplate.querySelector('.element__trash');
  deleteButton.addEventListener('click', initDeleteCardHandler);
};

//Лайк
function initLikeCardHandler (event) {
  if (event.target.classList.contains('element__like')) {
    event.target.classList.toggle('element__like_active');
  }
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
  //initLikeCard(newCard);
  return newCard;
}

//Функция добавления карточки

const formCardSubmitHandler = (event) => {
  event.preventDefault();

  //elTemplateTitle.textContent = popupFormTitleInput.value;
  //elTemplateImage.alt = popupFormTitleInput.value;
  //elTemplateImage.src = popupFormUrlInput.value;

  //const el = elTemplate.cloneNode(true);
  //deleteCard(el);
 // initOpenPopupBigImage(el);
  const newCardData = { name: popupFormTitleInput.value, link: popupFormUrlInput.value }
  renderItem(newCardData);
  //container.prepend(el);

  closePopup(popupCard);

};

popupCard.addEventListener('submit', formCardSubmitHandler);
//const addBasedCard = (element) => {
// elTemplateImage.src = element.link;
// elTemplateTitle.textContent = element.name;
// elTemplateImage.alt = element.name;
// const el = elTemplate.cloneNode(true);
//  return el;
//}
//const popupProfileOpen = popupProfile.classList.add('popup_opened');
//const popupCardOpen = popupCard.classList.add('popup_opened');
//const popupBigImageOpen = popupBigImage.classList.add('popup_opened');

//Открытие попапа
const openPopup = (event) => {
//popupProfileOpen();//= popupProfile.classList.add('popup_opened');
//popupCardOpen();// = popupCard.classList.add('popup_opened');
//popupBigImageOpen();// = popupBigImage.classList.add('popup_opened');
  //popupProfile.classList.add('popup_opened');
  //popupCard.classList.add('popup_opened');
  //popupBigImage.classList.add('popup_opened');
  event.classList.add('popup_opened');
};

//закрытие попапа
const closePopup = function (event) {
  popupProfile.classList.remove('popup_opened');
  popupCard.classList.remove('popup_opened');
  popupBigImage.classList.remove('popup_opened');
  //event.classList.remove('popup_opened');
  //popup
  formPopupProfile.reset();
  formPopupCard.reset();
};

const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup();
};
popup.addEventListener('click',closePopupByClickOnOverlay);
//Открытие большой картинки

const popupOpenBigImageHandler = (event) => {
  openPopup(popupBigImage);
  const target = event.target;
  //console.log(target);
  //popupProfile.classList.add('hidden');
 // popupCard.classList.add('hidden');
  //if (popupBigImage.classList.contains('hidden')) {
  //  popupBigImage.classList.remove('hidden');
  //};


  bigImageTitle.textContent = target.alt;
  bigImage.src = target.src;
};

const initOpenPopupBigImage = (elTemplateImage) => {
  const elImage = elTemplateImage.querySelector('.element__image')
  elImage.addEventListener('click', popupOpenBigImageHandler);
};

//попап добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', function (event) {
  openPopup(popupCard);
  //popupProfile.classList.add('hidden');
  //popupBigImage.classList.add('hidden');

  //popupCard.classList.remove('hidden');
  //if (popupCard.classList.contains('hidden')) {
    //popupCard.classList.remove('hidden');
  //};
  //if(popup.classList.contains('popup__big-image-background')) {
  //popup.classList.remove('popup__big-image-background')  };

  //formCardTitle.textContent = 'Новое место';

  //popupFormTitleInput.placeholder = 'Название';
  //popupFormTitleInput.type = 'text';
  //popupFormTitleInput.name = 'image-title';

  //popupFormUrlInput.placeholder = 'Ссылка на картинку';
  //popupFormUrlInput.type = 'Url';
  //popupFormUrlInput.name = 'image-url';


  //formCardButton.textContent = formCardButton.value = 'Создать';

});





//попап редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', function (event) {
  openPopup(popupProfile);
  //popupCard.classList.add('hidden');
  //popupBigImage.classList.add('hidden');

  //popupProfile.classList.remove('hidden');
  //if (popupProfile.classList.contains('hidden')) {
   // popupProfile.classList.remove('hidden');
  //};

  //if (popup.classList.contains('popup__big-image-background')) {
  //popup.classList.remove('popup__big-image-background')  };
  //formProfileTitle.textContent = 'Редактировать профиль';


  //popupFormNameInput.placeholder = 'Имя';
  //popupFormNameInput.type = 'text';
  //popupFormNameInput.name = 'name';

  //popupFormAboutInput.placeholder = 'О себе';
  //popupFormAboutInput.type = 'text';
  //popupFormAboutInput.name = 'about';

  //popupFormNameTitleInput.value = profileName.textContent;//Зачем это требовали в прошлой работе?
  //popupFormUrlAboutInput.value = profileAbout.textContent;//Зачем это требовали в прошлой работе?

  //formProfileButton.textContent = formProfileButton.value = 'Сохранить';


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




const initPopupCloseButtons = (event) => {
  popupCloseCardButton.addEventListener('click', closePopup);
  popupCloseProfileButton.addEventListener('click', closePopup);
  popupCloseBigImageButton.addEventListener('click', closePopup);
};

initPopupCloseButtons();

//popup.addEventListener('click', popupCloseButtons);
//popup.addEventListener('click', closePopupByClickOnOverlay);



const renderItem = (cardData) => {
  const newCard = createCard(cardData);
  container.prepend(newCard);
};
//const renderItem = (element) => {

//const el = addBasedCard(element);
//popupOpenBigImage(el);
//deleteCard(el);
//container.prepend(el);
//};

initialCards.reverse();
initialCards.forEach(renderItem);

