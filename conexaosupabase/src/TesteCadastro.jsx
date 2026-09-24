import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import "./Empresas.css"

function TesteCadastro() {

   
    const [user, alteraUser] = useState([])
    const [exibeUser, alteraExibeUser] = useState(false)
    
    const [exibeCadastro, alteraExibeCadastro] = useState(false)

    const[name,alteraName] = useState("")
    const[idade,alteraIdade] = useState(0)
    const[endereco,alteraEndereco] = useState("")
  

    async function inserirUser(){
        const obj= {
            name:name,
            idade:idade,
            endereco:endereco
        }

         const { error } = await supabase.from("users").insert(obj)

         if (error == null && name.trim().length > 3 && idade.trim()> 18 && endereco.trim().length > 3){


            alteraExibeCadastro(false)
            alert("Funcionário cadastrado")

         }else {

            alert("Erro ao cadastrar funcionário. Entre em contato com o suporte técnico")
            console.log(error)
         }


         
      
    }
    
    async function captarUser() {

        const { error, data } = await supabase.from("users").select()

        // console.log(data)
        alteraUser(data)
    }
  

    useEffect(() => {

        captarUser()
    }, [])
    return (


        <div>


            {
                exibeCadastro == true ?
                    <div>
                       
                        <div className="modal">
                            <h2>Novo User</h2>
                            <input onChange={ e => alteraName(e.target.value)} placeholder="Nome" />
                            <input onChange={ e => alteraIdade(e.target.value)} placeholder="idade" />
                            <input onChange={ e => alteraEndereco(e.target.value)} placeholder="Endereco" />

                            <button onClick={inserirUser}>Salvar</button>
                            
                            <button onClick={()=> alteraExibeCadastro(false)}>Já tenho uma conta</button> 


                        </div>
                    </div>
                :
                    <></>
            }

            {
                exibeUser == false ?

                    <div>

                        <h2>Funcionários</h2>


                        <button onClick={()=> alteraExibeCadastro(true)}>Adicionar Novo</button>

                        <table border="true">

                            <tr>
                                <td>ID</td>
                                <td>NOME </td>
                                <td>IDADE </td>
                                <td>ENDERECO </td>
                           

                            </tr>


                            {

                                user.map(i =>

                                    <tr>
                                        <td> {i.id}</td>
                                        <td> {i.name}</td>
                                        <td> {i.idade}</td>
                                        <td> {i.endereco}</td>
                                    </tr>

                                )
                            }

                        </table>
                    </div>

                    :

                    <h1>Cadastre -se imediatamente!</h1>
            }

        </div>

    );
}

export default TesteCadastro;