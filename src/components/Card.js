export default class Card {
  constructor(templateSelector, data, userId, handleOpenImagePopup, handleDeleteClick, handleLikeClick) {

    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;

    this._templateSelector = templateSelector;
    this._handleImageClick = handleOpenImagePopup;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }


  _getElementFromTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  isLiked() {
    return this._likes.find(user => user._id === this._userId)
  }

  _checkLike() {
    if (this.isLiked()) {
      this.putLike();
    } else {
      this.removeLike();
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  setLikes = (data) => {

    this._numberLike.textContent = data.length;
    this._likes = data;
  }

  _addEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick(this._name, this._link)
    });

    this._buttonDeleteCard.addEventListener('click', () => {
      this._handleDeleteClick(this._id);
    });

    this._buttonLikeCard.addEventListener('click', () => {
      this._handleLikeClick(this._id);
    });
  }

  putLike() {
    this._buttonLikeCard.classList.add('element__like_active');
  }

  removeLike() {
    this._buttonLikeCard.classList.remove('element__like_active');
  }

  _checkDeleteButtonVisibility() {
    if (this._userId === this._ownerId) {
      this._buttonDeleteCard.classList.remove('hidden');
    }
  }


  getElement() {
    this._element = this._getElementFromTemplate();
    this._buttonDeleteCard = this._element.querySelector('.element__trash');
    this._buttonLikeCard = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImageTitle = this._element.querySelector('.element__title');
    this._numberLike = this._element.querySelector('.element__like-number');


    this._checkDeleteButtonVisibility();
    this._checkLike();
    this.setLikes(this._likes);

    this._addEventListeners();

    this._cardImageTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;


    return this._element;
  }

}







