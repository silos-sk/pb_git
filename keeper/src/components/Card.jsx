const Card = (props)=>{
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.url} alt={props.name} />
        </div>
    )
}

export default Card;