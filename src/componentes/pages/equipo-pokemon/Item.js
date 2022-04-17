const poke = ({data}) => {
    let { id, name, type, img} = pokemons;

    return (
        <><div>
        <img src={sprites.front_default} />
        </div><span className="number"> {id} </span>
        <h3 className="name"> {name} </h3>
        <small className="type">{type}</small>
        <button onClick={Eliminar()}>Eliminar</button>
        </>
    )
}