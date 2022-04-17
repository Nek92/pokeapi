import "./App.css";
import { useState, useEffect } from 'react';
import { TYPES } from '../equipo-pokemon/Accion' ;
const pokemons_numbers = 150;

function Pokedex() {
  const [list, setList] = useState([])


  const FetchPokemons = async () => {
    const gottaFetchenAll = []
    for (let i = 1; i <= pokemons_numbers; i++) {
      gottaFetchenAll.push(await getPokemon(i))
    }

    await setList(gottaFetchenAll)
  }

  const getPokemon = async (id) => {
    const url = "https://pokeapi.co/api/v2/pokemon/" + id.toString()
    const res = await fetch(url)
    return (await res.json())
  }


  useEffect(() => {
    FetchPokemons()
  }, [])

  useEffect(async () => {
  }, [list])

const Agregar = (id) => {}

  const CreatePokemonCard = (pokemon) => {
    const { name, types, sprites, id } = pokemon
    const type = types[0].type.name
    return (  
      <div className="pokemon grow">
        <div className="img_container">
          <img src={sprites.front_default} alt={name}></img>
        </div>
        <div className="info"></div>
        <span className="number">{id}</span>
        <h3 className="name">{name}</h3>
        <small className="type">{type}</small>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>PokeNek</h1>
      <div id="poke_container" className="poke_container"> </div>
      {
        list.map(pokemon => CreatePokemonCard(pokemon))
      }
    </div>
  );
}
export default Pokedex;