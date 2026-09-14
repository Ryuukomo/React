import { useState } from "react";

function App() {
  
  const [cliques, AlteraCliques] = useState(0);
  const [nome, AlteraNome] = useState("aguardando....");
  // let cliques = 0 // UseState


 
  return (

    <div>

      <h1>Olá {2+2} mundo!</h1>
      <p>Estou aprendendo {console.log("Olá Raig")} react</p>
      <p>Meu nome é {nome}</p>
      <button onClick={ ()=>AlteraNome("gustavo")}>Clique aqui</button>
      <hr/>

      <p>vc clicou {cliques} vezes</p>
      
      <button onClick={ ()=>AlteraCliques(cliques + 1)}>Clique aqui</button>
      


    </div>
   
  )
}

export default App
