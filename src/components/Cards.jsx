import { fetchImages } from "../modules/fetchImages"
import { useState, useEffect} from "react"
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";

function Cards(){
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
        </>
    )
    }
}

function shuffle(arr){
    let newArr = [...arr]
    let curr = newArr.length;

    while (curr !== 0){
        let random = Math.floor(Math.random() * curr)
        curr = curr - 1;

        [newArr[curr], newArr[random]] = [newArr[random], newArr[curr]];
    }
    return newArr;
}
export default Cards