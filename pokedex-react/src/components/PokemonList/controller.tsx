import PokemonListViewModel from "pokedex-mvvm-base/dist/Presentation/PokemonList/PokemonListViewModel";
import React, { useEffect, useState } from "react";
import PokemonListView from "./view";

const PokemonListController = ({listViewModel}: {listViewModel: PokemonListViewModel}) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchData(){
        await listViewModel.fetchPokemons()
        setLoading(false)
      }
      fetchData()      
    }, []);


    const onClickNextPage = async () => {
      setLoading(true)
      await listViewModel.nextPage()
      setLoading(false)
    }

    if(!!loading) return (
      <h1>LOADING</h1>
    )
    return (
      <PokemonListView
        pokemons={listViewModel.getPokemons()}
        onClickNextPage={onClickNextPage}
      />
    )
}

export default PokemonListController