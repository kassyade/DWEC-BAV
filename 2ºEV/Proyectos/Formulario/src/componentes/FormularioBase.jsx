import React, { useState } from 'react';
import '../estilos/FormularioBase.css';

function FormularioBase() {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
  });

  const gestionarCambio = (evento) => {
    const { name, value } = evento.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    console.log(`Valores del formulario: ${JSON.stringify(form)}`);
  };

  return (
    <form onSubmit={enviarFormulario}>
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        type="text"
        name="nombre"
        value={form.nombre}
        onChange={gestionarCambio}
        placeholder="Escribe tu nombre"
      />

      <label htmlFor="apellido">Apellido</label>
      <input
        id="apellido"
        type="text"
        name="apellido"
        value={form.apellido}
        onChange={gestionarCambio}
        placeholder="Escribe tu apellido"
      />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioBase;
