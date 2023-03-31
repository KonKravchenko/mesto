
class Card {

  constructor(template, element, handleOpenPopup) {
    this._template = template;
    this._name = element.name || element.title;
    this._link = element.link || element.url;
    this._handleOpenPopup = handleOpenPopup;

    this._deleteCard = this._deleteCard.bind(this);
    this._likeCard = this._likeCard.bind(this);
  }


  _getElementFromTemplate() {
    return document.querySelector(this._template)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _addEventListeners() {
    this._deleteCardButton = this._element.querySelector('.element__trash');
    this._likeButton = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImageTitle = this._element.querySelector('.element__title');

    this._deleteCardButton.addEventListener('click', this._deleteCard);
    this._likeButton.addEventListener('click', this._likeCard);
    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link)
    })
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _likeCard() {
    this._likeButton.classList.toggle('element__like_active');
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

export default Card





