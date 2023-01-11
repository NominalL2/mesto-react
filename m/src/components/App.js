import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import React from 'react';

function App() {

  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => { setisEditAvatarPopupOpen(true); }
  const handleEditProfileClick = () => { setisEditProfilePopupOpen(true); }
  const handleAddPlaceClick = () => { setisAddPlacePopupOpen(true); }

  const closeAllPopups = () => {
    setisAddPlacePopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisEditAvatarPopupOpen(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" buttonName="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input id="name-input" type="text" name="name" className="popup__input popup__input_name" minLength="2"
            maxLength="40" required />
          <span className="name-input-error popup__name-input-error"></span>
          <input id="status-input" type="text" name="status" className="popup__input popup__input_status" minLength="2"
            maxLength="200" required />
          <span className="status-input-error popup__status-input-error"></span>
        </PopupWithForm>
        <PopupWithForm name="add" title="Новое место" buttonName="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input id="card-name-input" type="text" name="card-name" placeholder="Название" defaultValue=""
            className="popup__input popup__input_card-name" minLength="2" maxLength="30" required />
          <span className="card-name-input-error popup__card-name-input-error"></span>
          <input id="card-src-input" type="url" name="card-src" placeholder="Ссылка на картинку" defaultValue=""
            className="popup__input popup__input_card-src" required />
          <span className="card-src-input-error popup__card-src-input-error"></span>
        </PopupWithForm>
        <PopupWithForm name="del" title="Вы уверены?" buttonName="Да">
        </PopupWithForm>
        <PopupWithForm name="avatar-add" title="Обновить аватар" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input id="avatar-src-input" type="url" name="avatar-src" placeholder="Ссылка на картинку" defaultValue=""
            className="popup__input popup__input_avatar-src" required />
          <span className="avatar-src-input-error popup__avatar-src-input-error"></span>
        </PopupWithForm>
        <ImagePopup />
      </div>
      <template id="element">
        <div className="element">
          <img src="#" className="element__image" alt="#" />
          <div className="element__group">
            <h2 className="element__name"></h2>
            <button className="element__like" type="button"></button>
            <div className="element__counter">0</div>
            <button className="element__trash" type="button"></button>
          </div>
        </div>
      </template>
    </>
  );
}

export default App;
