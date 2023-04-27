/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(options) {
    _classCallCheck(this, Api);
    this.url = options.url;
    this.headers = options.headers;
  }
  _createClass(Api, [{
    key: "_checkResponse",
    value: function _checkResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject("".concat(res.status, " ").concat(res.statusText));
      }
    }
  }, {
    key: "getProfileData",
    value: function getProfileData() {
      return fetch("".concat(this.url, "/users/me"), {
        headers: this.headers
      }).then(this._checkResponse);
    }
  }, {
    key: "setProfileData",
    value: function setProfileData(data) {
      return fetch("".concat(this.url, "/users/me"), {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(data)
      }).then(this._checkResponse);
    }
  }, {
    key: "setProfileAvatar",
    value: function setProfileAvatar(avatar) {
      return fetch("".concat(this.url, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify(avatar)
      }).then(this._checkResponse);
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch("".concat(this.url, "/cards"), {
        headers: this.headers
      }).then(this._checkResponse);
    }
  }, {
    key: "setNewCard",
    value: function setNewCard(name, link) {
      return fetch("".concat(this.url, "/cards"), {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(name, link)
      }).then(this._checkResponse);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      return fetch("".concat(this.url, "/cards/").concat(id), {
        method: 'DELETE',
        headers: this.headers
      }).then(this._checkResponse);
    }
  }, {
    key: "getLike",
    value: function getLike() {
      return fetch("".concat(this.url, "/cards/").concat(id, "/likes"), {
        headers: this.headers
      }).then(this._checkResponse);
    }
  }, {
    key: "addLike",
    value: function addLike(id) {
      return fetch("".concat(this.url, "/cards/").concat(id, "/likes"), {
        method: 'PUT',
        headers: this.headers
      }).then(this._checkResponse);
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(id) {
      return fetch("".concat(this.url, "/cards/").concat(id, "/likes"), {
        method: 'DELETE',
        headers: this.headers
      }).then(this._checkResponse);
    }
  }]);
  return Api;
}(); //   Токен: e3cda1d4-1903-40f4-b79f-2419b5c60311
// Идентификатор группы: cohort-64


/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(templateSelector, data, userId, handleOpenImagePopup, handleDeleteClick, handleLikeClick) {
    _classCallCheck(this, Card);
    _defineProperty(this, "ownerId", void 0);
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
  _createClass(Card, [{
    key: "_getElementFromTemplate",
    value: function _getElementFromTemplate() {
      return document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      var _this = this;
      var userLikedCard = this._likes.find(function (user) {
        return user._id === _this._userId;
      });
      return userLikedCard;
    }
  }, {
    key: "deleteCard",
    value: function deleteCard() {
      this._element.remove();
      this._element = null;
    }
  }, {
    key: "setLikes",
    value: function setLikes() {
      this._numberLike.textContent = this._likes.length;
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this2 = this;
      this._cardImage.addEventListener('click', function () {
        _this2._handleImageClick(_this2._name, _this2._link);
      });
      this._buttonDeleteCard.addEventListener('click', function () {
        _this2._handleDeleteClick(_this2._id);
        console.log('здесь', _this2._id);
      });
      this._buttonLikeCard.addEventListener('click', function () {
        _this2._handleLikeClick(_this2._id);
        _this2._buttonLikeCard.classList.toggle('element__like_active');
      });
    }
  }, {
    key: "_check",
    value: function _check() {
      if (this._userId === this._ownerId) {
        console.log(true);
        this._buttonDeleteCard.classList.remove('hidden');
      } else {
        console.log('не совпадает');
      }
    }
  }, {
    key: "getElement",
    value: function getElement() {
      this._element = this._getElementFromTemplate();
      this._buttonDeleteCard = this._element.querySelector('.element__trash');
      this._buttonLikeCard = this._element.querySelector('.element__like');
      this._cardImage = this._element.querySelector('.element__image');
      this._cardImageTitle = this._element.querySelector('.element__title');
      this._numberLike = this._element.querySelector('.number__like');
      this._check(); //
      this.setLikes();
      this._addEventListeners();
      // const ownerId = this._ownerId
      console.log('getElement Card userId', this._userId);
      console.log('getElement card OwnerId', this._ownerId);

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
  }]);
  return Card;
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    var _this = this;
    _classCallCheck(this, FormValidator);
    _defineProperty(this, "_checkInputValidity", function (inputElement) {
      if (!inputElement.validity.valid) {
        _this._showInputError(inputElement);
      } else {
        _this._hideInputError(inputElement);
      }
    });
    _defineProperty(this, "_showInputError", function (inputElement) {
      _this.formSection = inputElement.closest("".concat(_this.config.formSelector, "__input"));
      _this.errorElement = _this.formSection.querySelector("".concat(_this.config.inputSelector, "-error"));
      _this.errorElement.classList.add(_this.config.errorClass);
      inputElement.classList.add(_this.config.inputErrorClass);
      _this.errorElement.textContent = inputElement.validationMessage;
    });
    _defineProperty(this, "_hideInputError", function (inputElement) {
      _this.formSection = inputElement.closest("".concat(_this.config.formSelector, "__input"));
      _this.errorElement = _this.formSection.querySelector("".concat(_this.config.inputSelector, "-error"));
      inputElement.classList.remove(_this.config.inputErrorClass);
      _this.errorElement.textContent = '';
      _this.errorElement.classList.remove(_this.config.errorClass);
    });
    _defineProperty(this, "enableSubmitButton", function () {
      _this.submitButton.disabled = false;
      _this.submitButton.classList.remove(_this.config.inactiveButtonClass);
    });
    _defineProperty(this, "_toggleButtonState", function () {
      if (_this._hasInvalidInput()) {
        _this.disableSubmitButton();
      } else {
        _this.enableSubmitButton();
      }
    });
    _defineProperty(this, "resetValidation", function () {
      _this.inputList.forEach(function (inputElement) {
        _this._hideInputError(inputElement);
      });
      _this.disableSubmitButton();
    });
    _defineProperty(this, "_setEventListeners", function () {
      _this._toggleButtonState();
      _this.inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this._checkInputValidity(inputElement);
          _this._toggleButtonState();
        });
      });
    });
    this.config = config;
    this.formElement = formElement;
    this.inputList = Array.from(this.formElement.querySelectorAll(this.config.inputSelector));
    this.submitButton = this.formElement.querySelector(this.config.submitButtonSelector);
  }
  _createClass(FormValidator, [{
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this.inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }, {
    key: "disableSubmitButton",
    value: function disableSubmitButton() {
      this.submitButton.disabled = true;
      this.submitButton.classList.add(this.config.inactiveButtonClass);
    }
  }]);
  return FormValidator;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popup) {
    var _this = this;
    _classCallCheck(this, Popup);
    _defineProperty(this, "_handleEscClose", function (event) {
      if (event.key === "Escape") {
        _this.close();
      }
    });
    _defineProperty(this, "closePopupByClickOnOverlay", function (event) {
      if (event.target !== event.currentTarget) {
        return;
      }
      _this.close();
    });
    this._popup = popup;
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._popup.querySelector('.popup__close').addEventListener("click", this.close.bind(this));
      this._popup.addEventListener('mousedown', this.closePopupByClickOnOverlay);
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithConfirmation.js":
/*!*************************************************!*\
  !*** ./src/components/PopupWithConfirmation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithConfirmation)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithConfirmation = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirmation, _Popup);
  var _super = _createSuper(PopupWithConfirmation);
  function PopupWithConfirmation(popup) {
    var _this;
    _classCallCheck(this, PopupWithConfirmation);
    _this = _super.call(this, popup);
    _this._form = document.querySelector('.form_confirm');
    return _this;
  }
  _createClass(PopupWithConfirmation, [{
    key: "setCallback",
    value: function setCallback(submitCb) {
      this._handleSubmit = submitCb;
    }
  }, {
    key: "submitHandler",
    value: function submitHandler() {
      var _this2 = this;
      this._form.addEventListener("submit", function (event) {
        event.preventDefault();
        _this2._handleSubmit();
        console.log('changeSubmitHandler');
        // this.close()
      });
    }

    // setEventListeners() {
    //   super.setEventListeners();
    //   console.log('setEventListeners')
    // }
  }]);
  return PopupWithConfirmation;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popup, submitFormHandler) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popup);
    _this._handleFormSubmit = submitFormHandler;
    _this._inputList = _this._popup.querySelectorAll(".form__item");
    _this._form = _this._popup.querySelector('.form');
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._formValues = {};
      this._inputList.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });
      return this._formValues;
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener("submit", function (event) {
        event.preventDefault();
        _this3._handleFormSubmit(_this3._getInputValues());
      });
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popup) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popup);
    _this._bigImage = _this._popup.querySelector(".popup__big-image-image");
    _this._bigImageTitle = _this._popup.querySelector(".popup__big-image-title");
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
      this._bigImage.src = link;
      this._bigImage.alt = name;
      this._bigImageTitle.textContent = name;
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var data = _ref.data,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "appendItem",
    value: function appendItem(element) {
      this._container.append(element);
    }
  }, {
    key: "prependItem",
    value: function prependItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;
      items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var name = _ref.name,
      about = _ref.about,
      avatar = _ref.avatar,
      _id = _ref._id;
    _classCallCheck(this, UserInfo);
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._userId = _id;
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        about: this._about.textContent,
        avatar: this._avatar.link
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about,
        _id = _ref2._id;
      this._name = name;
      this._about = about;
      this._userId = _id;
    }
  }, {
    key: "getUserId",
    value: function getUserId() {
      return this._userId;
    }
  }, {
    key: "setUserAvatar",
    value: function setUserAvatar(_ref3) {
      var avatar = _ref3.avatar;
      this._avatar.link = avatar;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithConfirmation.js */ "./src/components/PopupWithConfirmation.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
//Импорты Классов










// Импорт файлов CSS


// Вызов класса Api
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  url: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'e3cda1d4-1903-40f4-b79f-2419b5c60311',
    'Content-Type': 'application/json'
  }
});

// конфиг валидации
var validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'error-border',
  errorClass: 'form__item-error_visible'
};

// кнопка открытия формы редактирования Аватара
var popupOpenButtonFormEditAvatar = document.querySelector('.avatar__edit-button'); //кнопка

//кнопка открытия формы редактирования Профиля
var popupOpenButtonFormEditProfile = document.querySelector('.profile__edit-button'); //кнопка

//кнопка открытия формы добавления Карточки
var popupOpenButtonFormAddCard = document.querySelector('.profile__add-button'); //кнопка

var popupAvatar = document.querySelector('.popup_avatar');
var popupProfile = document.querySelector('.popup_profile');
var popupCard = document.querySelector('.popup_card');
var popupBigImage = document.querySelector('.popup_big-image');
var popupConfirm = document.querySelector('.popup_confirm');
var formPopupAvatar = popupAvatar.querySelector('.form_avatar');
var formPopupProfile = popupProfile.querySelector('.form_profile');
var formPopupCard = popupCard.querySelector('.form_card');
var formPopupConfirm = popupConfirm.querySelector('.form_confirm');
var inputName = formPopupProfile.querySelector('.form__item');
var inputAbout = formPopupProfile.querySelector('.form__item_bottom');

//Данные профиля
var profileName = document.querySelector('.profile__name');
var profileAbout = document.querySelector('.profile__about');
var profileAvatar = document.querySelector('.avatar__image');
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  name: profileName,
  about: profileAbout,
  avatar: profileAvatar
});
Promise.all([api.getProfileData(), api.getInitialCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    user = _ref2[0],
    cards = _ref2[1];
  userInfo.getUserInfo(userInfo.setUserInfo(user), profileName.textContent = user.name, profileAbout.textContent = user.about, profileAvatar.src = user.avatar);
  userCards.renderItems(cards);
});
function createCard(data) {
  var cardElement = new _components_Card_js__WEBPACK_IMPORTED_MODULE_0__["default"]('.item-template', data, userInfo.getUserId(), handleOpenImagePopup, function (id) {
    handleDeleteCard;
  }, function (id) {
    if (cardElement.isLiked()) {
      api.deleteLike(id).then(function (res) {
        cardElement.setLikes(res.likes);
      }).catch(function (err) {
        return console.log(err);
      });
    } else {
      api.addLike(id).then(function (res) {
        cardElement.setLikes(res.likes);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }
  // () => { userInfo.getUserId() }
  );

  return cardElement.getElement();
}
// const userInfo = new UserInfo({})

var confirmDeleteForm = new _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_7__["default"](popupConfirm);
confirmDeleteForm.setEventListeners();
var handleDeleteCard = function handleDeleteCard() {
  // Здесь вызываем метод Api, а также располагаем
  // блоки then и catch. В then удаляется карточка из
  // разметки и закрывается попап
  api.deleteCard().then(function () {
    return cardElement.deleteCard();
  }, confirmDeleteForm.close()).catch(err = console.log(err));
};
confirmDeleteForm.setCallback(handleDeleteCard);
var userCards = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  renderer: function renderer(item) {
    var card = createCard(item);
    userCards.appendItem(card);
  }
}, '.elements__list');

// Валидация форм
var initFormValidator = function initFormValidator(formElement) {
  var validForm = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_1__["default"](validationConfig, formElement);
  validForm.enableValidation();
  return validForm;
};

// Валидация формы добавления Аватара
var validationFormAvatar = initFormValidator(formPopupAvatar);
// Валидация формы профиля
var validationFormProfile = initFormValidator(formPopupProfile);
// Валидация формы добавления карточки
var validationFormCard = initFormValidator(formPopupCard);

// const validationFormConfirm = initFormValidator(formPopupConfirm);

// Обработчик сабмита изменения Аватара
function handleAvatarFormSubmit(data) {
  console.log(data);
  api.setProfileAvatar(data).then(function (data) {
    userInfo.setUserAvatar(data);
    popupFormAvatar.close();
  });
}
;

// Форма изменения Аватара
var createPopupAvatar = function createPopupAvatar(item) {
  var form = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](item, handleAvatarFormSubmit);
  form.setEventListeners();
  return form;
};
var popupFormAvatar = createPopupAvatar(popupAvatar);

// Вызов класса данных профиля

// Обработчик сабмита изменения данных профиля
function handleProfileFormSubmit(data) {
  api.setProfileData(data).then(function (data) {
    console.log(data), userInfo.setUserInfo(data);
    popupFormProfile.close();
  });
}

// Форма изменения данных профиля
var createPopupProfiles = function createPopupProfiles(item) {
  var form = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](item, handleProfileFormSubmit);
  form.setEventListeners();
  return form;
};
var popupFormProfile = createPopupProfiles(popupProfile);

// Обработчик сабмита формы создания карточки
function handleCardFormSubmit(data) {
  api.setNewCard(data).then(function (data) {
    userCards.prependItem(createCard(data));
    console.log(data);
    popupFormCard.close();
  });
}
;

// Форма создания карточки
var createPopupCards = function createPopupCards(item) {
  var form = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"](item, handleCardFormSubmit);
  form.setEventListeners();
  return form;
};
var popupFormCard = createPopupCards(popupCard);

// попап изменения аватара
popupOpenButtonFormEditAvatar.addEventListener('click', function () {
  popupFormAvatar.open();
  validationFormAvatar.resetValidation();
});

//попап редактирования профиля
popupOpenButtonFormEditProfile.addEventListener('click', function () {
  var userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputAbout.value = userData.about;
  popupFormProfile.open();
  validationFormProfile.resetValidation();
});

//попап добавления карточки
popupOpenButtonFormAddCard.addEventListener('click', function () {
  popupFormCard.open();
  validationFormCard.resetValidation();
});

// Попап большой картинки
var classPopupBibImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"](popupBigImage);
classPopupBibImage.setEventListeners();
function handleOpenImagePopup(name, link) {
  classPopupBibImage.open(name, link);
}
;
})();

/******/ })()
;
//# sourceMappingURL=main.js.map