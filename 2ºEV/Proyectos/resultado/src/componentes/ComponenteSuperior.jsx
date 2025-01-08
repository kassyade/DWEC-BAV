// components/ComponenteSuperior.jsx
import React from "react";

const ComponenteSuperior = ({ servicios }) => {
  // Calcular el total de servicios y el importe acumulado
  const totalServicios = servicios.length;
  const totalImporte = servicios.reduce((acumulado, servicio) => acumulado + servicio.importe, 0);

  return (
    <div>
      <h2>Resumen</h2>
      <p>Total de Servicios: {totalServicios}</p>
      <p>Importe Total: ${totalImporte}</p>
    </div>
  );
};

export default ComponenteSuperior;
