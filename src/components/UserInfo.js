
export default class UserInfo {
  constructor({name, about}){
    this._name = name;
    this._about = about;
  }

  getUserInfo(){

this._name = document.querySelector('.profile__name');
this._about = document.querySelector('.profile__about');

document.querySelector('.form__item').value = this._name.textContent;
document.querySelector('.form__item_bottom').value = this._about.textContent;

  }

  setUserInfo(){


document.querySelector('.profile__name').textContent = this._name;
document.querySelector('.profile__about').textContent = this._about;


  }
}

