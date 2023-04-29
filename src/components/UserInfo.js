export default class UserInfo {
  constructor({ name, about, avatar, _id }) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._userId = _id;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.src
    }
  }

  setUserInfo({ name, about, _id }) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._userId  = _id;
     }

  getUserId() {
    return this._userId;
  }

  setUserAvatar({ avatar }) {
    this._avatar.src = avatar;
  }
}

