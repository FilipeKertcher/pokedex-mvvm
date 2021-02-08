import { PokemonListItem } from "pokedex-mvvm-base/dist/Domain/Models/PokemonList"
import React from "react";

const PokemonListView = ({pokemons,onClickNextPage}:{pokemons:PokemonListItem[],onClickNextPage:() => void}) => (
  <div>
    {
      pokemons.map(p => (
        <div>
            {
              p.name
            }

            {
              p.url
            }
         </div>    
      ))
    }

    <button onClick={onClickNextPage}>
           PROXIMO
         </button>


  </div>
)

export default PokemonListView