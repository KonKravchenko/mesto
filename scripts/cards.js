class Cards {
  constructor(template, element) {
    this._template = template;
    this._name = element.name;
    this._link = element.link;

    this._deleteCard = this._deleteCard.bind(this);
    this._likeCard = this._likeCard.bind(this);
    this._openPopupBigImage = this._openPopupBigImage.bind(this);
  }

  _getElementFromTemplate() {
    return document.querySelector(this._template)
      .content
      .children[0]
      .cloneNode(true);
  }

  _addEventListeners() {
    this._element.querySelector('.element__trash').addEventListener('click', this._deleteCard);
    this._element.querySelector('.element__like').addEventListener('click', this._likeCard);
    this._element.querySelector('.element__image').addEventListener('click', this._openPopupBigImage);
  }

  _openPopupBigImage() {
    const popupBigImage = document.querySelector('.popup_big-image');

    popupBigImage.classList.add('popup_opened');

    popupBigImage.querySelector('.popup__big-image-image').src = this._link;
    popupBigImage.querySelector('.popup__big-image-image').alt = this._name;
    popupBigImage.querySelector('.popup__big-image-title').textContent = this._name;
  }

  _deleteCard() {
    this._element.remove();
  }

  _likeCard() {
    const likeCard = this._element.querySelector('.element__group');
    const likeButton = likeCard.querySelector('.element__like');
    likeButton.classList.toggle('element__like_active');
  }

  getElement() {
    this._element = this._getElementFromTemplate();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__image').src = this._link;



    this._addEventListeners();


    return this._element;
  }

  getNewElement() {

    const popupCard = document.querySelector('.popup_card');
    const popupFormTitleInput = popupCard.querySelector('.form__item');
    const popupFormUrlInput = popupCard.querySelector('.form__item_bottom');

    this._element = this._getElementFromTemplate();

    this._element.querySelector('.element__title').textContent = popupFormTitleInput.value;
    this._element.querySelector('.element__image').alt = popupFormTitleInput.value;
    this._element.querySelector('.element__image').src = popupFormUrlInput.value;



    this._addEventListeners();


    return this._element;
  }

}

export default Cards


// //Функция добавления карточки
// const formCardSubmitHandler = (event) => {
//   event.preventDefault();
//   const newCardData = { name: popupFormTitleInput.value, link: popupFormUrlInput.value }
//   renderItem(newCardData);
//   closePopup(popupCard);
// };

// popupCard.addEventListener('submit', formCardSubmitHandler);

// //рендер
// const renderItem = (cardData) => {
//   const newCard = createCard(cardData);
//   container.prepend(newCard);
// };

// initialCards.reverse().forEach(renderItem);


