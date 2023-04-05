export default class Card {
  constructor(templateSelector, cardData, handleOpenImagePopup) {
    this._templateSelector = templateSelector;
    this._name = cardData.name;
    this._link = cardData.link;
    this._handleImageClick = handleOpenImagePopup;

    this._handleDeleteCard = this._handleDeleteCard.bind(this);
    this._handleLikeCard = this._handleLikeCard.bind(this);
  }


  _getElementFromTemplate() {
    return document.querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _addEventListeners() {
    this._buttonDeleteCard = this._element.querySelector('.element__trash');
    this._buttonLikeCard = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImageTitle = this._element.querySelector('.element__title');

    this._buttonDeleteCard.addEventListener('click', this._handleDeleteCard);
    this._buttonLikeCard.addEventListener('click', this._handleLikeCard);
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick(this._name, this._link)
    })
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeCard() {
    this._buttonLikeCard.classList.toggle('element__like_active');
  }

  getElement() {
    this._element = this._getElementFromTemplate();
    this._addEventListeners();

    this._cardImageTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;

    return this._element;
  }

}







