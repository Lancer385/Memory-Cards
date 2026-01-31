function Card({name,
               url, 
               id, 
               clickedCards,
               addClickedCard,
               handleShuffle, 
               score, handleScore
            }){
    function handleScoring(){
        if (!clickedCards.includes(id)){
            addClickedCard([...clickedCards, id])
            score = score + 1
            handleScore(score)
        }
        else {
            addClickedCard([])
            handleScore(0)
        }
        handleShuffle();
    }
    return (
        <>
            <button className="card" onClick={handleScoring}>
                <img 
                    src={url}
                    alt={name}
                    />
                <p>{name}</p>
            </button>
        </>
    )
}


export default Card;

