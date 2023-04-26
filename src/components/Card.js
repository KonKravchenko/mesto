export default class Card {
  constructor(templateSelector, data, handleOpenImagePopup, handleDeleteClick, handleLikeClick) {

    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

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
    const userLikedCard = this._likes.find(user => user._id === this._userId)

    return userLikedCard
  }

  deleteCard() {
    this._element.remove(this._id);
    this._element = null;
  }

  setLikes() {
    this._buttonLikeCard.classList.toggle('element__like_active');
    console.log('работаю   setLikes', this._id)

  }

  _addEventListeners() {
    this._buttonDeleteCard = this._element.querySelector('.element__trash');
    this._buttonLikeCard = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImageTitle = this._element.querySelector('.element__title');
    this._numberLike = this._element.querySelector('.number__like');
    this._numberLike.textContent = this._likes.length;


    this._cardImage.addEventListener('click', () => {
      this._handleImageClick(this._name, this._link)
    });

    this._buttonDeleteCard.addEventListener('click', ()=> {
       this._handleDeleteClick (this._id);
      console.log('здесь', this._id)
    });

    this._buttonLikeCard.addEventListener('click', () => {
      this._handleLikeClick(this._id);

    });

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







