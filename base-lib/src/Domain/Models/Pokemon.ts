
interface PokemonAbility {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean,
    slot: number
}

interface PokemonForm {
    name: string
    url: string     
}

interface PokemonMove {
    move: {
        name:string
        url:string
    }
}

interface PokemonStat  {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string
    }
}

interface PokemonType {
    slot: 1,
    type: {
      name: string
      url: string
    }
}

export default interface Pokemon {
    abilities: PokemonAbility[]
    base_experience: number
    forms: PokemonForm[]
    height: number
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: PokemonMove[]
    name: string
    order: number
    species: {
      name: string,
      url: string
    },
    sprites: {
      back_default: string,
      back_female: string,
      back_shiny: string
      back_shiny_female: string
      front_default: string
      front_female: string
      front_shiny: string
      front_shiny_female: string
    },
    stats: PokemonStat[],
    types: PokemonType[],
    weight: number
}