export default interface ModelStore {
    getStateProp(propName:string) : any
    updateStateProp(propName:string,newValue:any) : void

}