//only bc rollup screw me up
interface ModelStore {
    getStateProp(propName: string): any;
    updateStateProp(propName: string, newValue: any): void;
}

export default class ObjectStore implements ModelStore {
        state:any = {
            pokemonList:[]
        }

        getStateProp(propName: string) {
            return this.state[`${propName}`]
        }

        updateStateProp(propName: string, newValue: any): void {
            this.state[`${propName}`] = newValue
        }
    }   