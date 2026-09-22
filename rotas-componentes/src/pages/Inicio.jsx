import { useState } from "react";
import MenuSuperior from "../components/MenuSuperior";
import Produto from "../components/Produto";
import Rodape from "../components/Rodape";

function Inicio() {

  const BRANCO = "#ffffff"

  const[deck,alteraDeck] = useState({
    display:"flex",
    backgroundColor:BRANCO,
    gap:20,
    flexDirection:"row"                                                                                                                                                                                                                    

  })
  return ( 

    <div>

      <MenuSuperior />

      <h1>Rotas e Componentes</h1>

      <p>Rotas: permite criar páginas e navegação no site </p>
      <p>Componentes: pequenas partes de layouts reutilizáveis </p>

      <div style={deck}>

         <Produto nome="geleia" descricao="para fazer geleia" comprar="R$ 21" />
          <Produto /> 
          <Produto />
      </div>
     

      <Rodape />

    </div>
   );
}

export default Inicio;