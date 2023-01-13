import '../index.css';
import Avatar from '../images/profile/avatar.jpg';
import { useState, useEffect } from 'react';
import { api } from '../utils/Api.js';
import Card from './Card.js';


function Main(props) {

    const [userName, setUserName] = useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = useState(Avatar);

    const [cards, setCards] = useState([]);

    useEffect(() => {
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
                {cards.map((card) => (<Card card={card} onOpenCard={props.onOpenCard} key={card._id} />))}

            </section>
        </main>
    );
}


export default Main;