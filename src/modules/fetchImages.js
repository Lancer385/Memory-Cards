const apiKey = import.meta.env.VITE_catApiKey;
export async function fetchImages(){
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1&api_key=${apiKey}`);
    if (response.ok){
        const data = await response.json();
        console.log('PARSED DATA:', JSON.stringify(data, null, 2));         
        return data;
    }
    else {
        return false;
    }
}