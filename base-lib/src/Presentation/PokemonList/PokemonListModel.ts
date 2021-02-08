import { PokemonListItem, PokemonListResponse } from "../../Domain/Models/PokemonList";
import ModelStore from "../../Data/Store/ModelStore";

class PokemonListModel {
    
    constructor(private readonly store:ModelStore){}  

    updatePokemons({next,previous,results}:PokemonListResponse) : void {
        this.store.updateStateProp("pokemonList",results)
        this.store.updateStateProp("nextPage",next)
        this.store.updateStateProp("previousPage",previous)
    }
    
    listPokemons() : PokemonListItem[] {
        return this.store.getStateProp("pokemonList")
    }

    getPreviousPage() : string {
        return this.store.getStateProp("previousPage")
    }

    getNextPage() : string {
        return this.store.getStateProp("nextPage")
    }
    
    getPokemonItemBySlug({slug}:{slug:string}) : PokemonListItem {
        const list : PokemonListItem[] = this.store.getStateProp("pokemonList")
        return list.filter(pokemon => pokemon.name === slug)[0]
    }

}

export default PokemonListModel