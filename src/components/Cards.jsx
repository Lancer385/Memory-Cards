import { fetchImages } from "../modules/fetchImages"
import { useState, useEffect } from "react"
import Card from "./Card";

function Cards(){
    const [data, setData] = useState([]);
    
 useEffect(() => {
    let isMounted = true;
    const getImages = async () => {
        const images = await fetchImages();
        if (isMounted){
            setData(images);
        }
    }
    getImages();
    return () => {
        isMounted = false;
    }
}, []);


    return (
        <>
            {data.map(value => (
                <Card 
                    key = {value.id}
                    url = {value.url}
                    name = {value.breeds[0].name}
                />
            ))} 
        </>
    )
}


export default Cards