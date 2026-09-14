import { useEffect, useState } from "react";

function App() {

    const [users,setUsers]= useState([])
    const [pesquisa,alteraPesquisa]= useState("")
   
    async function buscarTodos(){

        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()

        console.log(data)
        setUsers(data.users)

    }

    async function buscarNome(nome){

        const response = await fetch("https://dummyjson.com/users/search?q="+nome)
        const data = await response.json()

        console.log(data)
        setUsers(data.users)
        
        


    }
   
    function mostrarInfo(usuario){

        alert("Tel:" + usuario.phone + "\nEmail: " + usuario.email +
             "\nCEP: " + usuario.address.country + " - " + usuario.address.state + " --> " + usuario.address.city)



            

    }

    useEffect(()=> {
        buscarTodos()
    },[])
    return (
        <div>

            <h1>Consumo de API</h1>
            <p>Buscando dados de API </p>
            
            <input onChange={e=>alteraPesquisa(e.target.value)} placeholder="digite um nome"/>
            <button onClick={()=>buscarNome(pesquisa)}>Pesquisa🔎</button>
            <ol>
                {
                    users.length == 0 ? 
                   <p>Lista vazia</p>
                    :
                        users.map(
                            i => <li> <img width="100px" src={`https://api.dicebear.com/10.x/initials/svg?seed=`+i.firstName}/> {i.gender == "male"? "O senhor" : "A senhora"} {i.firstName} tem {i.age} anos. <button onClick={() => mostrarInfo(i)}>Ver Info</button></li>// item  
                        )
                }
                
            </ol>

        </div>
    );
}

export default App;