// components/ComponenteCentral.jsx
import React, { useState } from "react";

const ComponenteCentral = ({ servicios, setServicios, setUltimoServicio }) => {
  const [nuevoServicio, setNuevoServicio] = useState({
    nombre: "",
    descripcion: "",
    url: "",
    importe: "",
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setNuevoServicio({ ...nuevoServicio, [e.target.name]: e.target.value });
  };

  // Validar y agregar un nuevo servicio
  const handleAgregarServicio = () => {
    if (!nuevoServicio.nombre || !nuevoServicio.importe) {
      alert("El nombre y el importe son obligatorios.");
      return;
    }

    const servicio = { ...nuevoServicio, importe: parseFloat(nuevoServicio.importe) };
    setServicios([...servicios, servicio]);
    setUltimoServicio(servicio); // Actualizar el último servicio agregado
    setNuevoServicio({ nombre: "", descripcion: "", url: "", importe: "" });
  };

  return (
    <div>
      <h2>Gestión de Servicios</h2>
      <ul>
        {servicios.map((servicio, index) => (
          <li key={index}>
            {servicio.nombre} - {servicio.descripcion} - ${servicio.importe.toFixed(2)}
            {/* Opciones para eliminar o actualizar */}
          </li>
        ))}
      </ul>

      <div>
        <h3>Agregar Servicio</h3>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevoServicio.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={nuevoServicio.descripcion}
          onChange={handleChange}
        />
        <input
          type="text"
          name="url"
          placeholder="URL"
          value={nuevoServicio.url}
          onChange={handleChange}
        />
        <input
          type="number"
          name="importe"
          placeholder="Importe"
          value={nuevoServicio.importe}
          onChange={handleChange}
        />
        <button onClick={handleAgregarServicio}>Agregar</button>
      </div>
    </div>
  );
};

export default ComponenteCentral;
