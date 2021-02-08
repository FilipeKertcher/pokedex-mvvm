import { HttpGetClient, HttpResponse } from "../../Data/Http/Httpclient";
import RemoteListPokemons from "../../Data/Usecases/ListPokemons";
import { PokemonListResponse } from "../../Domain/Models/PokemonList";
import ListPokemons from "../../Domain/Usecases/ListPokemons";
import { makeHttpResponse, makePokemonList } from "../Helpers";
import { HttpClientSpy } from "../Http/Httpclient";

const makeSut : () => {sut:RemoteListPokemons,httpClient:HttpClientSpy} = () => {
    
    const httpClient = new HttpClientSpy()
    const sut = new RemoteListPokemons(httpClient)

    return {
        sut,
        httpClient
    }
}

describe('RemoteListPokemons', () => {

    it('should use the offset parameter correctly',() => {
        const {sut,httpClient} = makeSut()

        sut.listPokemons({offset:20})

        expect(httpClient?.query?.offset).toBe(20)
    })

    it('should use the next parameter correctly',() => {
        const {sut,httpClient} = makeSut()

        sut.listPokemons({pageURL:"https://youtube.com"})

        expect(httpClient?.url).toBe("https://youtube.com")
    })

    it('should return a pokemon list',async () => {
        const {sut,httpClient} = makeSut()

        httpClient.successResponse = makeHttpResponse({status:200,body:makePokemonList()})

        const res = await sut.listPokemons({pageURL:"https://youtube.com"})

        expect(res.results.length).toBe(1)
    })
    
    it('should return a pokemon list',async (done) => {
        const {sut,httpClient} = makeSut()

        httpClient.errorResponse = makeHttpResponse({status:500,body:{}})

        sut.listPokemons({pageURL:"https://youtube.com"})
        .catch(err => {
            expect(err.statusCode).toBe(500)
            done()
        })
    })
})
