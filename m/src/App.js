import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <div className="header__logo"></div>
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__overlay">
              <img src="./images/profile/avatar.jpg" className="profile__avatar" alt="аватарка" />
              <div className="profile__avatar-edit"></div>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button class="profile__edit-button" type="button"></button>
              <p className="profile__status">Исследователь океана</p>
            </div>
            <button className="profile__add-button" type="button"></button>
          </section>
          <section className="elements">
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copy">&copy; 2020 Mesto Russia</p>
        </footer>
        <section className="popup" id="popup__profile">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form" name="profile-popup" novalidate>
              <input id="name-input" type="text" name="name" className="popup__input popup__input_name" minlength="2"
                maxlength="40" required />
              <span class="name-input-error popup__name-input-error"></span>
              <input id="status-input" type="text" name="status" className="popup__input popup__input_status" minlength="2"
                maxlength="200" required />
              <span className="status-input-error popup__status-input-error"></span>
              <button type="submit" name="save" class="popup__submit-button">Сохранить</button>
            </form>
          </div>
        </section>
        <section className="popup" id="popup__add">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form" name="add-card-popup">
              <input id="card-name-input" type="text" name="card-name" placeholder="Название" value=""
                className="popup__input popup__input_card-name" minlength="2" maxlength="30" required />
              <span className="card-name-input-error popup__card-name-input-error"></span>
              <input id="card-src-input" type="url" name="card-src" placeholder="Ссылка на картинку" value=""
                className="popup__input popup__input_card-src" required />
              <span className="card-src-input-error popup__card-src-input-error"></span>
              <button type="submit" name="add" className="popup__submit-button">Создать</button>
            </form>
          </div>
        </section>
        <section className="popup" id="popup__del">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form" name="popup">
              <button type="submit" name="add" class="popup__submit-button">Да</button>
            </form>
          </div>
        </section>
        <section className="popup" id="popup-card">
          <div className="popup__content-card">
            <img src="#" className="popup__image-card" />
            <p className="popup__caption-card"></p>
            <button className="popup__close" type="button"></button>
          </div>
        </section>
        <section className="popup" id="popup__avatar-add">
          <div className="popup__container">
            <button className="popup__close" type="button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form" name="avatar-popup">
              <input id="avatar-src-input" type="url" name="avatar-src" placeholder="Ссылка на картинку" value=""
                className="popup__input popup__input_avatar-src" required />
              <span className="avatar-src-input-error popup__avatar-src-input-error"></span>
              <button type="submit" name="add" class="popup__submit-button">Сохранить</button>
            </form>
          </div>
        </section>
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
