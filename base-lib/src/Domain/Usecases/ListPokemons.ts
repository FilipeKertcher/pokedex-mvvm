
import {PokemonListResponse} from '../Models/PokemonList'

interface ListPokemons {
    listPokemons(props:{offset?:number, pageURL?:string}):Promise<PokemonListResponse>
}

export default ListPokemons