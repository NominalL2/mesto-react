import '../index.css';
import Avatar from '../images/profile/avatar.jpg';
import React from 'react';
import { api } from '../utils/Api.js';
import Cards from './Cards.js';


function Main(props) {

    const [userName, setUserName] = React.useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = React.useState(Avatar);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.setProfileInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
        api.initialCards()
            .then((res) => {
                setCards(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__overlay" onClick={props.onEditAvatar}>
                    <img src={userAvatar} className="profile__avatar" alt="аватарка" />
                    <div className="profile__avatar-edit"></div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                    <p className="profile__status">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
            <Cards cards={cards} />
            </section>
        </main>
    );
}


export default Main;