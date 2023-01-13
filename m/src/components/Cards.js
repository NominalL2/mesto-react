function Cards(props) {

    const handle = () => {
        props.onOpenCard(props.card);
    }
    return (

        <div className="element">
            <img src={props.card.link} className="element__image" alt={props.card.name} onClick={handle} />
            <div className="element__group">
                <h2 className="element__name">{props.card.name}</h2>
                <button className="element__like" type="button"></button>
                <div className="element__counter">{props.card.likes.length}</div>
                <button className="element__trash" type="button"></button>
            </div>
        </div>

    )
}

export default Cards;