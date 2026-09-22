import Inicio from "./pages/Inicio";
import Contato from "./pages/Contato";
import {BrowserRouter,  Route, Routes} from "react-router-dom"

function App() {
  return ( 
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </BrowserRouter>



      
    </div>
   );
}

export default App;