import React, { useState } from "react";
import "../estilos/formulario.css";

const Formulario = ({ listaPost, setListaPost }) => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const nuevoPost = () => {

    if(titulo.trim()==="" && contenido.trim()===""){
        alert("rellena los campos gil")
    }

    const post = { titulo, contenido };
    setListaPost([...listaPost, post]);
    setTitulo("");
    setContenido("");
  };

  return (
    <div className="formulario-container">
      <h2 className="formulario-titulo">Nuevo post</h2>
      <div className="formulario-campo">
        <label>Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Escribe el título..."
        />
      </div>
      <div className="formulario-campo">
        <label>Contenido</label>
        <input
          type="text"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          placeholder="Escribe el contenido..."
        />
      </div>
      <button onClick={nuevoPost} className="formulario-boton">
        Añadir post
      </button>
    </div>
  );
};

export default Formulario;
