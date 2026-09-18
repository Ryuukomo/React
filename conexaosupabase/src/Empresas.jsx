import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import "./Empresas.css"

function Empresas() {

    const [empresa, alteraEmpresas] = useState([])
    const [funcionarios, alteraFuncionarios] = useState([])
    const [exibeFuncionarios, alteraExibeFuncionarios] = useState(false)
    const [exibeEmpresas, alteraExibeEmpresas] = useState(true)
    const [exibeModal, alteraExibeModal] = useState(false)

    const[nome,alteraNome] = useState("")
    const[id_empresa,alteraIdEmpresa] = useState(1)
    const[contato,alteraContato] = useState("")
    const[cargo,alteraCargo] = useState(1)

    async function inserirFuncionario(){
        const obj= {
            nome:nome,
            id_empresa: parseInt(id_empresa),
            contato: contato,
            cargo: parseFloat(cargo)
        }

         const { error } = await supabase.from("funcionario").insert(obj)

         if (error == null){
            alteraExibeModal(false)
            buscaUsuariosPorEmpresa(id_empresa)
            alert("Funcionário cadastrado")

         }else {

            alert("Erro ao cadastrar funcionário. Entre em contato com o suporte técnico")
            console.log(error)
         }


         
      
    }
    async function captarEmpresas() {

        const { error, data } = await supabase.from("empresas").select()
        // console.log(data)
        alteraEmpresas(data)
    }
    async function captarFuncionarios() {

        const { error, data } = await supabase.from("funcionario").select(
            `*,
            
            empresas ( nome, endereco )`)

        // console.log(data)
        alteraFuncionarios(data)
    }
    async function buscaUsuariosPorEmpresa(id_empresa) {
        const { error, data } = await supabase.from("funcionario").select("*,empresas(*)").eq("id_empresa", id_empresa)

        // console.log(data)
        alteraIdEmpresa(id_empresa)
        alteraFuncionarios(data)
      

    }

    async function alteraVisualizacao(id_empresa) {

        if (exibeEmpresas == true) {
            alteraExibeEmpresas(false)
            alteraExibeFuncionarios(true)
        }
        else {
            alteraExibeEmpresas(true)
            alteraExibeFuncionarios(false)

        }

    }

    useEffect(() => {
        captarEmpresas()
        captarFuncionarios()
    }, [])
    return (


        <div>


            {
                exibeModal == true ?
                    <div>
                        <div onClick={()=> alteraExibeModal(false)} className="fundoPreto"></div>
                        <div className="modal">
                            <h2>Novo Funcionarios</h2>
                            <input onChange={ e => alteraNome(e.target.value)} placeholder="Nome" />
                            <input onChange={ e => alteraContato(e.target.value)} placeholder="Contato" />
                            <br />
                            <select onChange={ e => alteraCargo(e.target.value)}>

                                <option value="1"> Funcionario</option>
                                <option value="0">Admin</option>
                                
                               
                            </select>
                            <br />
                            <button onClick={inserirFuncionario}>Salvar</button>


                        </div>
                    </div>
                :
                    <></>
            }



            {
                exibeEmpresas == true ?
                    <div>
                        <h1>Empresas</h1>
                        <p>Consulta na tabela empresas e fncionarios </p>

                        <table border="true">

                            <tr>
                                <td>ID</td>
                                <td>NOME</td>
                                <td>CNPJ</td>
                                <td>ENDEREÇO</td>
                                <td>AÇÕES</td>
                            </tr>
                            {
                                empresa.map(i =>

                                    <tr>
                                        <td> {i.id}</td>
                                        <td> {i.nome}</td>
                                        <td> {i.cnpj}</td>
                                        <td> {i.endereco}</td>
                                        <td><button onClick={() => {buscaUsuariosPorEmpresa(i.id); alteraVisualizacao()}}>Ver funcionários</button></td>
                                    </tr>

                                )
                            }

                        </table>

                        <br />            <br />            <br />            <br />            <br />            <br />


                    </div>

                    :
                    <></>
            }

            {
                exibeFuncionarios == true ?

                    <div>

                        <h2>Funcionários</h2>

                        <button onClick={() => {alteraVisualizacao();  alteraIdEmpresa("")} }>Voltar</button>
                        <button onClick={()=> alteraExibeModal(true)}>Adicionar Novo</button>

                        <table border="true">

                            <tr>
                                <td>ID</td>
                                <td>NOME DA EMPRESA </td>
                                <td>NOME </td>
                                <td>ENDERECO </td>
                                <td>CARGO</td>
                                <td>CONTATO</td>

                            </tr>


                            {

                                funcionarios.map(i =>

                                    <tr>
                                        <td> {i.id}</td>
                                        <td> {i.empresas.nome}</td>
                                        <td> {i.nome}</td>
                                        <td> {i.empresas.endereco}</td>
                                        <td> {i.cargo == 0 ? "Admin" : "funcionario"}</td>
                                        <td> {i.contato}</td>
                                    </tr>

                                )
                            }

                        </table>
                    </div>

                    :
                    <></>
            }

        </div>

    );
}

export default Empresas;