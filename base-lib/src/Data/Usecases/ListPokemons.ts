import { PokemonListResponse } from "../../Domain/Models/PokemonList"
import ListPokemons from "../../Domain/Usecases/ListPokemons"
import { HttpGetClient, HttpResponse } from "../Http/Httpclient"

export default class RemoteListPokemons implements ListPokemons {

    constructor(private readonly httpClient: HttpGetClient){}

    async listPokemons(props: { offset?: number | undefined; pageURL?: string; }): Promise<PokemonListResponse> {
        try {
            let response 

            if(!!props.pageURL) response = await this.httpClient.get({url:props.pageURL})
            else response = await this.httpClient.get({url:'https://pokeapi.co/api/v2/pokemon',query:{offset:props.offset}})
             
            return response.responseBody as PokemonListResponse

        }catch(e){
            const {statusCode,responseBody}: HttpResponse = e
            throw {
                statusCode,
                responseBody
            }
        }
    }

}