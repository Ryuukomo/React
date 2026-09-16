import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function Empresas() {

    const[empresa,alteraEmpresas] = useState([])
    const[funcionarios,alteraFuncionarios] = useState([])

    async function captarEmpresas(){

        const{error, data}= await supabase.from("empresas").select()
        console.log(data)
        alteraEmpresas(data)
    }
    async function captarFuncionarios(){

        const{error, data}= await supabase.from("funcionario").select()
        console.log(data)
        alteraFuncionarios(data)
    }

    useEffect(()=>{
        captarEmpresas()
        captarFuncionarios()
    },[])
    return (  
        <div>

            <h1>Empresas</h1>
            <p>Consulta na tabela empresas e fncionarios </p>

            <table border = "true">

                <tr>
                    <td>ID</td>
                    <td>NOME</td>
                    <td>CNPJ</td>
                    <td>ENDEREÇO</td>
                </tr>
                {
                    empresa.map(i=>
                        
                        <tr>
                            <td> {i.id}</td>
                            <td> {i.nome}</td>
                            <td> {i.cnpj}</td>
                            <td> {i.endereco}</td>
                        </tr>
                    
                    )
                }
               
            </table>

            <br />            <br />            <br />            <br />            <br />            <br />
            <table border = "true">
            
                <tr>
                    <td>ID</td>
                    <td>NOME </td>
                    <td>NOME DA EMPRESA </td>
                    <td>ENDEREÇO DA EMPRESA</td>
                    <td>CARGO</td>
                    <td>CONTATO</td>

                </tr>  
                {
                    funcionarios.map(i=>
                        
                        <tr>
                            <td> {i.id}</td>
                            <td> {i.nome}</td>
                              <td> {i.nome}</td>
                            <td> {i.cnpj}</td>
                            <td> {i.endereco}</td>
                        </tr>
                    
                    )
                }  

            </table>
        </div>
            
    );
}

export default Empresas;