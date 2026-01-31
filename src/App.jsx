import { fetchImages } from "./modules/fetchImages"
import shuffle from "./modules/shuffle";
import { useState, useEffect} from "react"
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import "./styles/cards.css"
function App(){
    const [data, setData] = useState([]);
    const [isFinished, setFetchStatus] = useState(false)
    const [score, setScore] = useState(0)
    const [clickedCards, addClickedCard] = useState([]);

    const handleScore = (newScore) => {
        setScore(newScore)
    }
    function handleShuffle(){
        setData(prev => shuffle(prev));
    }
    useEffect(() => {
        console.log(isFinished)
        let isMounted = true;
        const getImages = async () => {
            const images = await fetchImages();
            if (isMounted){
                setData(images);
                setFetchStatus(true);
            }
    }
    getImages();
    return () => {
        isMounted = false;
    } 
}, []);

    if (!isFinished){
        return (
        <>
            <ScoreBoard 
            score={score} 
            />
            <h1>STAND BY...</h1>
        </>
        )
    }
    else {


    return (
        <>
            <ScoreBoard 
                score={score}
            />
            <div className="cards">
            {data.map(value => (
                <Card 
                    key = {value.id}
                    url = {value.url}
                    id = {value.id}
                    name = {value.breeds[0].name}
                    handleShuffle={handleShuffle}
                    clickedCards={clickedCards}
                    addClickedCard={addClickedCard}
                    score={score}
                    handleScore={handleScore}
                />
            ))} 
            </div>
        </>
    )
    }
}


export default App