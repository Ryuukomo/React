import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Formulario from './Formulario.jsx'
import Perfil_de_usuario from './Perfil_de_usuario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Perfil_de_usuario />
    <Formulario />
    {/* <App /> */}
  </StrictMode>,
)
