import ModelStore from "pokedex-mvvm-base/dist/Data/Store/ModelStore"

export default class ObjectStore implements ModelStore {

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