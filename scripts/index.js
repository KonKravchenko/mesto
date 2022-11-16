//сам попап
const popup = document.querySelector('.popup');
//контейнер формы редактирования профиля и добавления карточки
const containerFormPopupCardProfile = popup.querySelector('.popup__container');
//контейнер формы большой картинки
const containerBigImageForm = popup.querySelector('.popup__container-big-image');
//кнопка Закрытия
const popupCloseCardProfileButton = containerFormPopupCardProfile.querySelector('.popup__close');//кнопка
const popupCloseBigImageButton = containerBigImageForm.querySelector('.popup__close');//кнопка

//кнопка формы Профиль
const popupOpenButtonFormEditProfile = document.querySelector('.profile__edit-button');//кнопка
//Кнопка формы добавления Карточки
const popupOpenButtonFormAddCard = document.querySelector('.profile__add-button');//кнопка
//карточка
const itemTemplate = document.querySelector('.item-template').content;
const elTemplate = itemTemplate.querySelector('.element');
//большая картинка c заголовком
const bigImageTitle = containerBigImageForm.querySelector('.popup__big-image-title');
const bigImage = containerBigImageForm.querySelector('.popup__big-image');

const container = document.querySelector('.elements__list');
const elTemplateTitle = elTemplate.querySelector('.element__title');
const elTemplateImage = elTemplate.querySelector('.element__image');



const formPopupProfile = popup.querySelector('.form_profile');
const formProfileTitle = formPopupProfile.querySelector('.form__title');
const popupFormNameInput = formPopupProfile.querySelector('.form__item_el_name-title');
const popupFormAboutInput = formPopupProfile.querySelector('.form__item_el_url-about');
const formProfileButton = formPopupProfile.querySelector('.form__button');

const formPopupCard = popup.querySelector('.form_card');
const formCardTitle = formPopupCard.querySelector('.form__title');
const popupFormTitleInput = formPopupCard.querySelector('.form__item_el_name-title');
const popupFormUrlInput = formPopupCard.querySelector('.form__item_el_url-about');
const formCardButton = formPopupCard.querySelector('.form__button');

const formInputContainer = popup.querySelector('.form__input-container');

//Данные профиля
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');


//Удаление карточек
const deleteCardHandler = (event) => {
  const target = event.target;
  console.log(target);
  const currentListItemEl = target.closest('.element');
  console.log(currentListItemEl);
  currentListItemEl.remove();
};

const deleteCard = (elTemplate) => {
  const deleteButton = elTemplate.querySelector('.element__trash');
  deleteButton.addEventListener('click', deleteCardHandler);
}

//Вставка начальных карточек через Tamplate
const addBasedCard = (element) => {
  elTemplateImage.src = element.link;
  elTemplateTitle.textContent = element.name;
  elTemplateImage.alt = element.name;
  const el = elTemplate.cloneNode(true);
  return el;
}

//Открытие попапа
const openPopup = (event) => {
  popup.classList.add('popup_opened');
};

//Открытие большой картинки

const popupOpenBigImageHandler = (event) => {
  openPopup();
  const target = event.target;
  console.log(target);
  containerFormPopupCardProfile.classList.add('hidden');
  if (containerBigImageForm.classList.contains('hidden')) {
    containerBigImageForm.classList.remove('hidden');
  };
  popup.classList.add('popup__big-image-background');
  bigImageTitle.textContent = target.alt;
  bigImage.src = target.src;
};

const popupOpenBigImage = (elTemplateImage) => {
  const elImage = elTemplateImage.querySelector('.element__image')
  elImage.addEventListener('click', popupOpenBigImageHandler);
};

//попап добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', function (event) {
  openPopup();
  formPopupProfile.classList.add('hidden');
  formPopupCard.classList.remove('hidden');
  containerBigImageForm.classList.add('hidden')
  if (containerFormPopupCardProfile.classList.contains('hidden')) {
    containerFormPopupCardProfile.classList.remove('hidden');
  };
  if(popup.classList.contains('popup__big-image-background')) {
    popup.classList.remove('popup__big-image-background')
  };

  formCardTitle.textContent = 'Новое место';

  popupFormTitleInput.placeholder = 'Название';
  popupFormTitleInput.type = 'text';
  popupFormTitleInput.name = 'image-title';

  popupFormUrlInput.placeholder = 'Ссылка на картинку';
  popupFormUrlInput.type = 'Url';
  popupFormUrlInput.name = 'image-url';


  formCardButton.textContent = formCardButton.value = 'Создать';

});

//Функция добавления карточки

const formCardSubmitHandler = (event) => {
  event.preventDefault();

  elTemplateTitle.textContent = popupFormTitleInput.value;
  elTemplateImage.alt = popupFormTitleInput.value;
  elTemplateImage.src = popupFormUrlInput.value;

  const el = elTemplate.cloneNode(true);
  deleteCard(el);
  popupOpenBigImage(el);
  container.prepend(el);

  closePopup();

};

formPopupCard.addEventListener('submit', formCardSubmitHandler);

//попап редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', function (event) {
  openPopup();
  formPopupProfile.classList.remove('hidden');
  formPopupCard.classList.add('hidden');
  containerBigImageForm.classList.add('hidden');
  if (containerFormPopupCardProfile.classList.contains('hidden')) {
    containerFormPopupCardProfile.classList.remove('hidden');
  };

  if(popup.classList.contains('popup__big-image-background')) {
    popup.classList.remove('popup__big-image-background')
  };
  formProfileTitle.textContent = 'Редактировать профиль';


  popupFormNameInput.placeholder = 'Имя';
  popupFormNameInput.type = 'text';
  popupFormNameInput.name = 'name';

  popupFormAboutInput.placeholder = 'О себе';
  popupFormAboutInput.type = 'text';
  popupFormAboutInput.name = 'about';

  //popupFormNameTitleInput.value = profileName.textContent;//Зачем это требовали в прошлой работе?
  //popupFormUrlAboutInput.value = profileAbout.textContent;//Зачем это требовали в прошлой работе?

  formProfileButton.textContent = formProfileButton.value = 'Сохранить';

  //Профиль: функция добавления данных профиля
  function formProfileSubmitHandler(event) {
    event.preventDefault();

    if (popupFormNameInput.value !== '' && popupFormAboutInput.value !== '') {
      profileName.textContent = popupFormNameInput.value;
      profileAbout.textContent = popupFormAboutInput.value;

      closePopup();
    }
  }

  formPopupProfile.addEventListener('submit', formProfileSubmitHandler);
});

//Лайк
container.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('element__like')) {
    evt.target.classList.toggle('element__like_active');
  }
});

//закрытие попапа
const closePopup = function () {
  popup.classList.remove('popup_opened');
  formPopupProfile.reset();
  formPopupCard.reset();
};

const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup();
};

const popupCloseButtons = (event) => {
  popupCloseCardProfileButton.addEventListener('click', closePopup);
  popupCloseBigImageButton.addEventListener('click', closePopup);
};
popup.addEventListener('click', popupCloseButtons);
popup.addEventListener('click', closePopupByClickOnOverlay);



const renderItem = (element) => {

  const el = addBasedCard(element);
  popupOpenBigImage(el);
  deleteCard(el);
  container.prepend(el);
};

initialCards.reverse();
initialCards.forEach(renderItem);

