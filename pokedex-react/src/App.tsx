import React, { useEffect, useState,createContext } from 'react';
import logo from './logo.svg';
import './App.css';

import {PokemonListItem} from 'pokedex-mvvm-base/dist/Domain/Models/PokemonList'
import PokemonViewModel from 'pokedex-mvvm-base/dist/Presentation/PokemonList/PokemonListViewModel'
import PokemonListModel from 'pokedex-mvvm-base/dist/Presentation/PokemonList/PokemonListModel'
import ModelStore from 'pokedex-mvvm-base/dist/Data/Store/ModelStore';

const PokemonListController = ({viewModel}: {viewModel: PokemonViewModel}) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

      async function fetchData(){
        await viewModel.fetchPokemons()

        setLoading(false)
      }
      fetchData()
       
    }, []);


    const onClickNextPage = async () => {
      setLoading(true)
      await viewModel.nextPage()
      setLoading(false)
    }

    if(!!loading) return (
      <h1>LOADING</h1>
    )
    return (
      <PokemonListView
        pokemons={viewModel.getPokemons()}
        onClickNextPage={onClickNextPage}
      />
    )
}

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

class ObjectStore implements ModelStore {

  state:any = {
    pokemonList:[]
  }

  getStateProp(propName: string) {
    return this.state[`${propName}`]
  }
  updateStateProp(propName: string, newValue: any): void {
    this.state[`${propName}`] = newValue

    console.log(this.state)
  }
  
}

function App() {

  const store = new ObjectStore()
  const m = new PokemonListModel(store)
  
  const PokemonListViewModel = new PokemonViewModel(m)

  return (
    <div className="App">
       <PokemonListController
        viewModel={PokemonListViewModel}
      />
    </div>
  );
}

export default App;
