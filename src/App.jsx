import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import RepoList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState(' ')

  return (
    <>
      <input type="text" onBlur={(evento) => setNomeUsuario(evento.target.value)} />
      

      {nomeUsuario. length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <RepoList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
      
    </>
  )
}

export default App
