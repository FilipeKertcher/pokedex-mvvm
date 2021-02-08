<script lang="ts">
    //only bc rollup screw me up
    interface ModelStore {
        getStateProp(propName: string): any;
        updateStateProp(propName: string, newValue: any): void;
    }

	import PokemonListViewModel from "pokedex-mvvm-base/dist/Presentation/PokemonList/PokemonListViewModel";
	import PokemonListModel from "pokedex-mvvm-base/dist/Presentation/PokemonList/PokemonListModel";
    import { onMount } from "svelte";

    class ObjectStore implements ModelStore {
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

    const store = new ObjectStore()
    const model = new PokemonListModel(store)
	const viewModel: PokemonListViewModel = new PokemonListViewModel(model)
    
    let loading = true    

    onMount(async () => {
        loading = true
		await viewModel.fetchPokemons()
        loading = false
	});

    async function onClickNextPage(){
        loading = true
        await viewModel.nextPage()
        loading = false
    }

</script>
<main>
    {#if loading === true}
	    <h1>LOADING</h1>
    {:else}
        <ul>
            {#each viewModel.getPokemons() as pokemon}
                <li>
                    {pokemon.name}
                    {pokemon.url}
                </li>
            {/each}
        </ul>
    {/if}

    <button on:click={onClickNextPage}> PROXIMO </button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>