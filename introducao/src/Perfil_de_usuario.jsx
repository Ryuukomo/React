import { useState } from "react"

function Perfil() {

    let [exibirPerfil, alteraExibicaoPerfil] = useState(false)
    let [exibirAlterarSenha, alteraExibicaoSenha] = useState(false)
    let [senhaDigitada, alteraSenhaDigitada] = useState()
    let [senhaNova, alteraSenhaNova] = useState()

    

    let usuario = {
        nome: "RAIG",
        email: "raig@gmail.com",
        senha: "090819"

    }

    function confereSenha(){

        if(usuario.senha == senhaDigitada){
            
            usuario.senha = senhaNova 
            alert("Senha Alterada")
            return
        }

     alert("senha invalida")
        
    }

    return (

        <div>

            <h1>Perfil de Usuário</h1>
            <p>Veja aqui suas informações</p>
            {
                exibirPerfil == false ?

                    <button onClick={() => alteraExibicaoPerfil(!exibirPerfil)}>exibirPerfil</button>

                :
                    <div>
                         <button onClick={() => alteraExibicaoPerfil(!exibirPerfil)}>ocultar</button>

                        <p>Nome: {usuario.nome} </p>
                        <p>Email: {usuario.email}</p>
                        <button onClick={() => alteraExibicaoSenha(!exibirAlterarSenha)}>Alterar senha</button>
                    </div>

            }
          

            {

                exibirAlterarSenha == true ?
                    <div>
                        <p>Digite a senha original: </p>
                        <input onChange={e => alteraSenhaDigitada(e.target.value)} required />

                        <br />
                        <p>Digite sua nova senha: </p>
                        <input onChange={e => alteraSenhaNova(e.target.value)} required />
                        <button onClick={()=> confereSenha()}>Alterar</button>
                    </div>

                    :
                    
                    <p></p>
            }


        </div>

    )
}

export default Perfil