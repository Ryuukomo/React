import { useState } from "react"


function Pokedex() {

    const [pokemon, setPokemon] = useState({})
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




            <h2>Nome: {pokemon.name} </h2>
            <p>Tipo: {pokemon.types[0]?.type?.name} </p>
            <img width={"100px"} src={pokemon.sprites?.front_shiny} />


            {/* <h2>Nome: {pokemon.name} </h2>
             <p>Tipo: {pokemon.types?.map(i=> i.type.name + " )} </p>
             <img width={"100px"} src={pokemon.sprites?.front_shiny}/> */}







        </div>
    );
}

export default Pokedex;