import React from 'react';
import './App.css';

import PokemonListViewModel from 'pokedex-mvvm-base/dist/Presentation/PokemonList/PokemonListViewModel'
import PokemonListModel from 'pokedex-mvvm-base/dist/Presentation/PokemonList/PokemonListModel'
import PokemonListController from './components/PokemonList/controller';
import ObjectStore from './store/ObjectStore';

function App() {

  const store = new ObjectStore()
  const m = new PokemonListModel(store)
  const listViewModel = new PokemonListViewModel(m)

  return (
    <div className="App">
       <PokemonListController
        listViewModel={listViewModel}
      />
    </div>
  );
}

export default App;
