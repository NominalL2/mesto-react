import '../index.css';
import Avatar from '../images/profile/avatar.jpg';



function Main() {
    function handleEditProfileClick() {
        const profile = document.querySelector('#popup__profile');
        profile.classList.add('popup_opened');
        console.log(profile)
      }

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__overlay">
                    <img src={Avatar} className="profile__avatar" alt="аватарка" />
                    <div className="profile__avatar-edit"></div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                    <p className="profile__status">Исследователь океана</p>
                </div>
                <button className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
            </section>
        </main>
    );
}


export default Main;