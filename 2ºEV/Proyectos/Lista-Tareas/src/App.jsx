import Modal from './componentes/Modal';
import './App.css';
import React, { useState } from 'react';

// 1 importamos useState
// 2 creamos la constante en la que se guardara el estado del modal (abierto o cerrado)
// 3 creamos el boton desde el que se cambia el estado del modal ,
// 4 usamos el modal y le pasamos la función con la que se abre y con la que se cierra

function App() {
  const [estaAbierto, setEstaAbierto] = useState(false);

  return (
    <>
      <h1>Modal Sencillo</h1>
      <button onClick={() => setEstaAbierto(true)}>Abrir Modal</button>

      {/* Invocamos el Modal */}
      <Modal estaAbierto={estaAbierto} cerrarModal={() => setEstaAbierto(false)} />
      

      
    </>
  );
}

export default App;
