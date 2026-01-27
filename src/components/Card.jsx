function Card({name, url}){
    console.log(name)
    return (
        <>
            <div className="card">
                <img 
                    src={url}
                    alt={name}
                    width='50px'
                    height='50px'
                    />
                <p>{name}</p>
            </div>
        </>
    )
}


export default Card;

