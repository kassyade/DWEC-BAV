import React from "react";
import "../estilos/lista.css";

const Lista = ({ lista }) => {

  return (
    <div className="lista-container">
      <h2 className="lista-titulo">Posts</h2>
      <ul className="lista-posts">
        {lista.map((post, index) => (
          <li key={index} className="post-item">
            <h3 className="post-titulo">{post.titulo}</h3>
            <p className="post-contenido">{post.contenido}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
