export default class UserInfo {
  constructor({ name, about }) {
    this._name = name;
    this._about = about;
    this._inputName = document.querySelector('.form__item');
    this._inputAbout = document.querySelector('.form__item_bottom');
  }

  getUserInfo() {
    this._inputName.value = this._name.textContent;
    this._inputAbout.value = this._about.textContent;

  }

  setUserInfo() {
    this._name.textContent = this._inputName.value;
    this._about.textContent = this._inputAbout.value;
  }
}

