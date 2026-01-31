const apiKey = import.meta.env.VITE_catApiKey;
export async function fetchImages(){
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?size=thumb&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&limit=10&api_key=${apiKey}`);
    if (response.ok){
        const data = await response.json();
        return data;
    }
    else {
        return false;
    }
}