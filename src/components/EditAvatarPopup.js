import PopupWithForm from "./PopupWithForm.js";
import { useState } from "react";

function EditAvatarPopup(props) {
    const [avatarLink, setAvatarLink] = useState('');

    function handleChangeAvatar(e) {
        setAvatarLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUpdateAvatar ({
            avatar: avatarLink,
        });
    }
    return (
        <PopupWithForm name="avatar-add" title="Обновить аватар" buttonName="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input onChange={handleChangeAvatar} id="avatar-src-input" type="url" name="avatar-src" placeholder="Ссылка на картинку" defaultValue=""
                className="popup__input popup__input_avatar-src" required />
            <span className="avatar-src-input-error popup__avatar-src-input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;