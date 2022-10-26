
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const openPopup = function (event) {
  popupElement.classList.add('popup_opened');
}
const closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);

//
//
//
//
//

// Находим форму в DOM
let formElement = document.querySelector('.popup__content');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__name');// Воспользуйтесь инструментом .querySelector()
let aboutInput = formElement.querySelector('.popup__about');// Воспользуйтесь инструментом .querySelector()
const submitButton = formElement.querySelector('.popup__save');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();// Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameProfile = document.querySelector('.profile__name');
    const aboutProfile = document.querySelector('.profile__about');

    // Выберите элементы, куда должны быть вставлены значения полей

    if (nameInput.value !=='') {
      nameProfile.textContent = nameInput.value;
      aboutProfile.textContent = aboutInput.value;
    } else {
      closePopup();
    }

    //if (jobInput.value !=='') {
      //aboutProfile.textContent = jobInput.value;
    //} else {
      //closePopup();
    //}

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
