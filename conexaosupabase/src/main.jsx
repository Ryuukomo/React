import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Empresas from './Empresas.jsx'
import TesteCadastro from './TesteCadastro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Empresas /> */}

    <TesteCadastro/>
  </StrictMode>,
)
