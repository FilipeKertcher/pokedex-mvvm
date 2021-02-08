import Pokemon from "../Models/Pokemon";

interface SearchPokemon {
    searchPokemon({slug}:{slug:string}): Promise<Pokemon>
}


export default SearchPokemon