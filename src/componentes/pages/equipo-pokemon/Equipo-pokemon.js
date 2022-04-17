import {useReducer} from 'react';
import {Reducer, InitPokemon} from './Reducer'


const Equipopokemon = () => {
    const {state, dispatch} = useReducer (Reducer, InitPokemon)
const {InitPokemon, Equipo_pokemon} = state;
}

const Eliminar = () => {
    
}

export default Equipopokemon;