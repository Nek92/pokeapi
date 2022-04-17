import {TYPES} from './Accion'

export const InitPokemon = {
    CreatePokemonCard: null,
    Equipo_pokemon:[] 
}

export function Reducer (state, action) {
switch (action.type) {
    case TYPES.Eliminar:{
       
    }

    case TYPES.Agregar: {
        let newItems = state.InitPokemon.find (InitPokemon => InitPokemon.id === action.payload);
        return {
            ...state,
            Equipo_pokemon: [...state.Equipo_pokemon, newItems]
        }
    }
    default:
        return state; 
}
}

export default InitPokemon;