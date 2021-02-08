import { HttpResponse } from "../../Data/Http/Httpclient"
import { PokemonListResponse } from "../../Domain/Models/PokemonList"

export const makeHttpResponse : ({status,body}:{status:number,body:{[key:string]:any}}) => HttpResponse = ({status,body}) => {
    return {
        statusCode:status,
        responseBody:body
    }
}

export const makePokemonList: () => PokemonListResponse = () => {
    return {
        count: 1,
        next:"",
        results:[
            {
                name:"Pikachu",
                url:"https://pikachu"
            }
        ]
    }
}