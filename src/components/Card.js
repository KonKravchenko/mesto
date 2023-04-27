export default class Card {
  constructor(templateSelector, data, userId, handleOpenImagePopup, handleDeleteClick, handleLikeClick) {

    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
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
    const userLikedCard = this._likes.find(user => user._id === this._userId)

    return userLikedCard
  }

  ownerId

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  setLikes() {
    this._numberLike.textContent = this._likes.length;
    }

  _addEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleImageClick(this._name, this._link)
    });

    this._buttonDeleteCard.addEventListener('click', () => {
      this._handleDeleteClick(this._id);
      console.log('здесь', this._id)
    });

    this._buttonLikeCard.addEventListener('click', () => {
      this._handleLikeClick(this._id)
      this._buttonLikeCard.classList.toggle('element__like_active');
    });
  }

  _check() {
    if (this._userId === this._ownerId) {
      console.log(true)
      this._buttonDeleteCard.classList.remove('hidden');
    } else {
      console.log('не совпадает')
    }
  }


  getElement() {

    this._element = this._getElementFromTemplate();
    this._buttonDeleteCard = this._element.querySelector('.element__trash');
    this._buttonLikeCard = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImageTitle = this._element.querySelector('.element__title');
    this._numberLike = this._element.querySelector('.number__like');

    this._check()//
    this.setLikes();
    this._addEventListeners();
    // const ownerId = this._ownerId
    console.log('getElement Card userId', this._userId)
    console.log('getElement card OwnerId', this._ownerId)


    // console.log(this._userId)

    this._cardImageTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;

    // Должна производится проверка равенства id текущего
    // пользователя и создателя карточки. Это нужно для того,
    // чтобы убрать кнопку удаления, если текущий пользователь
    // не является владельцем, так как только владелец может
    // удалить карточку. То есть, если id пользователя не равен
    // id владельца необходимо спрятать кнопку удаления

    return this._element;
  }

}







