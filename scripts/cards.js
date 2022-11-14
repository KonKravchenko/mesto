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


//Вставка начальных карточек через Tamplate

const container = document.querySelector('.elements__list');
const itemTemplate = document.querySelector('.item-template');

const getTodoItemEl = (element) => {
  const el = itemTemplate.content.cloneNode(true).children[0];
  const elTitle = el.querySelector('.element__title');
  const elImage = el.querySelector('.element__image');
  const elPopupImage = el.querySelector('.image-popup__image');
  const elPopupImageTitle = el.querySelector('.image-popup__title');


  elTitle.textContent = element.name;
  elImage.src = element.link;
  elImage.alt = element.name;

  elPopupImage.src = element.link;
  elPopupImage.alt = element.name;
  elPopupImageTitle.textContent = element.name;


  return el;
}

//Открытие картинки
const openImageHandler = (event) => {
  const target = event.target;
  const uri = target.closest('.element');
  const cardEl = uri.querySelector('.image-popup');
  cardEl.classList.add('image-popup_opened');
}

const openImage = (el) => {
  const elImage = el.querySelector('.element__image');
  elImage.addEventListener('click', openImageHandler);
}

//Закрытие картинки
const closeImageHandler = (event) => {
  const target = event.target;
  const uri = target.closest('.element');
  const cardEl = uri.querySelector('.image-popup');
  cardEl.classList.remove('image-popup_opened');
}

const closeImage = (el) => {
  const closeButtonImage = el.querySelector('.popup__close');
  closeButtonImage.addEventListener('click', closeImageHandler);
}

//Удаление карточек

const deleteHandler = (event) => {
  const target = event.target;
  const currentListItemEl = target.closest('.element');
  currentListItemEl.remove();

}

const setEventListener = (el) => {
  const deleteButton = el.querySelector('.element__trash');
  deleteButton.addEventListener('click', deleteHandler);
}


//так жe вставка карточек

const renderItem = (element) => {
  const el = getTodoItemEl(element);
  openImage(el);
  closeImage(el);
  setEventListener(el);
  container.append(el);
}

initialCards.forEach(renderItem)


//Картинки: Функция добавления карточки

let formElImage = document.querySelector('#add_image');
let imageTitleInput = formElImage.querySelector('.form__item_el_image-title');
let imageUrlInput = formElImage.querySelector('.form__item_el_image-url');


formElImage.addEventListener('submit', (event) => {
  event.preventDefault();
  const el = itemTemplate.content.cloneNode(true).children[0];
  const elTitle = el.querySelector('.element__title');
  const elImage = el.querySelector('.element__image');
  const elPopupImage = el.querySelector('.image-popup__image');
  const elPopupImageTitle = el.querySelector('.image-popup__title');

  elTitle.textContent = imageTitleInput.value;
  elImage.alt = imageTitleInput.value;
  elImage.src = imageUrlInput.value;

  elPopupImage.src = imageUrlInput.value;
  elPopupImage.alt = imageTitleInput.value;
  elPopupImageTitle.textContent = imageTitleInput.value;

  setEventListener(el);
  openImage(el);
  closeImage(el);
  container.prepend(el);
  closePopup();

});

//Лайк

container.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('element__like')) {
    evt.target.classList.toggle('element__like_active');
  }
});

