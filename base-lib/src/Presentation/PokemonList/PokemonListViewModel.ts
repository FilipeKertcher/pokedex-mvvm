import RemoteListPokemons from "../../Data/Usecases/ListPokemons"
import HttpAxiosAdapter from "../../Infra/Http/AxiosAdapter"
import PokemonListModel from "./PokemonListModel"

export default class PokemonListViewModel {

    remoteListPokemons:RemoteListPokemons
    constructor(private readonly model : PokemonListModel) {
        const httpClient = new HttpAxiosAdapter()
        this.remoteListPokemons = new RemoteListPokemons(httpClient)
    }

    getPokemons() {
        return this.model.listPokemons()
    }

    async nextPage(){
        const pageURL = await this.model.getNextPage()

        this.fetchPokemons(pageURL)
        return 
    }

    async previousPage(){
        const pageURL = await this.model.getPreviousPage()

        this.fetchPokemons(pageURL)
        return 
    }

    async fetchPokemons(url?:string) {
        const pokemonAPIResponse = await this.remoteListPokemons.listPokemons({pageURL:url})
        this.model.updatePokemons(pokemonAPIResponse)
    }
}