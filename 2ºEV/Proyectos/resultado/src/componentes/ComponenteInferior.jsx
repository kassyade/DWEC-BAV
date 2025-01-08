// components/ComponenteInferior.jsx
import React from "react";

const ComponenteInferior = ({ ultimoServicio }) => {
  if (!ultimoServicio) {
    return <p>No se ha agregado ningún servicio aún.</p>;
  }

  return (
    <div>
      <h2>Último Servicio Agregado</h2>
      <p>Nombre: {ultimoServicio.nombre}</p>
      <p>Descripción: {ultimoServicio.descripcion}</p>
      <p>URL: {ultimoServicio.url}</p>
      <p>Importe: ${ultimoServicio.importe.toFixed(2)}</p>
    </div>
  );
};

export default ComponenteInferior;
