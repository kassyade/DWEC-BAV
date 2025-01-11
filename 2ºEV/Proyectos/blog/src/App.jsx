import React, { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario";
import Lista from "./componentes/Lista";

function App() {
  const [listaPost, setListaPost] = useState([]);

  return (
    <div className="app-container">
      <h1 className="app-titulo">Blog</h1>
      <Formulario listaPost={listaPost} setListaPost={setListaPost} />
      <Lista lista={listaPost}  />
    </div>
  );
}

export default App;
