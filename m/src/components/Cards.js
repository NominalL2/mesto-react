function Cards(props) {
    return (
        props.cards.map((card, i) => (
            <div className="element" key={i}>
                <img src={card.link} className="element__image" alt={card.name} />
                <div className="element__group">
                    <h2 className="element__name">{card.name}</h2>
                    <button className="element__like" type="button"></button>
                    <div className="element__counter">{card.likes.lenght}</div>
                    <button className="element__trash" type="button"></button>
                </div>
            </div>
        ))
    )
}

export default Cards;