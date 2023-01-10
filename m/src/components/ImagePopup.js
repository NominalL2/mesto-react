import '../index.css';

function ImagePopup() {
    return (
        <section className="popup" id="popup-card">
            <div className="popup__content-card">
                <img src="#" className="popup__image-card" />
                <p className="popup__caption-card"></p>
                <button className="popup__close" type="button"></button>
            </div>
        </section>
    )
}

export default ImagePopup;