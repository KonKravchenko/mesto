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

  elTitle.textContent = element.name;
  elImage.src = element.link;
  elImage.alt = element.name;

  return el;
}

const renderItem = (element) => {
  const el = getTodoItemEl(element);
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

   elTitle.textContent = imageTitleInput.value;
   elTitle.alt = imageTitleInput.value;
   elImage.src = imageUrlInput.value;

     container.prepend(el);
    closePopup();

});


//Лайк

container.addEventListener('click', function (evt) {
if (evt.target.classList.contains('element__like')) {
evt.target.classList.toggle('element__like_active');
   }
  });


//Удаление карточек





//elementList.addEventListener('click', function(evt) {

 // const el = elementList.querySelector('.element');
//console.log(el);
//const deleteButton = el.querySelector('.element__trash');
//console.log(deleteButton);

//  if (evt.target.classList.contains('element__trash')) {
//    evt.target.classList.remove('element');}

 //     console.log('удалил');
 //     removeEl = deleteButton.closest('.element');
 //     removeEl.remove();
 // }
//);
