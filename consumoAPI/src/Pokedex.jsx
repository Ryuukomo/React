import { useState } from "react"


function Pokedex() {

    const [pokemon, setPokemon] = useState(null)
    const [pesquisa, alteraPesquisa] = useState("")


    async function buscarNome(nome) {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome)
        const data = await response.json()

        setPokemon(data)

    }



    return (
        <div>
            <h1>Pokédex</h1>
            <p>Consulte um pokémon</p>

            <input onChange={e => alteraPesquisa(e.target.value)} placeholder="Digite o Pokémon" />
            <button onClick={() => buscarNome(pesquisa)}>🔎Pesquisar</button>

            <hr />



            {
                pokemon == null ?
                    <p> vazio</p>
                :
                    <div>
                        <h2>Nome: {pokemon.name} </h2>
                        <p>Tipo: {pokemon.types?.map(i => i.type?.name + " / ")} </p>  {/* "/" serve para separar tipo  */}
                        <img width="100px" src={pokemon.sprites?.front_shiny} />
                    </div>

            }

           
        </div>
    );
}

export default Pokedex;