export interface PokemonListItem {
    name: string
    url: string
}


export interface PokemonListResponse {
    count: number
    next?:string
    previous?:string
    results:PokemonListItem[]
}