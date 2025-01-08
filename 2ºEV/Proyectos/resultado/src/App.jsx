// App.jsx
import React, { useState } from "react";
import './App.css';
import ComponenteSuperior from "./componentes/ComponenteSuperior";
import ComponenteCentral from "./componentes/ComponenteCentral";
import ComponenteInferior from "./componentes/ComponenteInferior";


const App = () => {
  const [servicios, setServicios] = useState([]); // Estado para almacenar la lista de servicios
  const [ultimoServicio, setUltimoServicio] = useState(null); // Estado para el último servicio insertado

  return (
    <div>
      {/* Componente superior muestra el total de servicios e importe acumulado */}
      <ComponenteSuperior servicios={servicios} />

      {/* Componente central permite gestionar servicios */}
      <ComponenteCentral
        servicios={servicios}
        setServicios={setServicios}
        setUltimoServicio={setUltimoServicio}
      />

      {/* Componente inferior muestra información del último servicio agregado */}
      <ComponenteInferior ultimoServicio={ultimoServicio} />
    </div>
  );
};

export default App;
