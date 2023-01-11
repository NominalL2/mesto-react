import '../index.css';
import Avatar from '../images/profile/avatar.jpg';



function Main(props) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__overlay" onClick={props.onEditAvatar}>
                    <img src={Avatar} className="profile__avatar" alt="аватарка" />
                    <div className="profile__avatar-edit"></div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__status">Исследователь океана</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
            </section>
        </main>
    );
}


export default Main;