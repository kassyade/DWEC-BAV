import Modal from './componentes/Modal';
import './App.css';
import React, { useState } from 'react';
import Lista from './componentes/Lista';
// 1 importamos useState
// 2 creamos la constante en la que se guardara el estado del modal (abierto o cerrado)
//Creamos la lista de tareas que tendremos
// 3 creamos el boton desde el que se cambia el estado del modal ,
// 4 usamos el modal y le pasamos la función con la que se abre y con la que se cierra

function App() {

    const[listaTareas,setListaTareas]=useState([]);
    const[modalAbierto,setModalAbierto]=useState(false);

    const abrirModal=()=>setModalAbierto(true);
    const cerrarModal=()=>setModalAbierto(false);

    

    const agregarTarea=(tarea)=>{
      setListaTareas([...listaTareas,tarea])
    }

  return (
    <>
      <h3>Tareas</h3>

      <button  onClick={abrirModal}  >Crear nueva tarea</button>
    {/**le pasamos al modal las funciones que realiza */}
    <Modal  abrirModal={modalAbierto}   cerrarModal={cerrarModal}  agregarTarea={agregarTarea}     />
    
      <Lista  tareas={listaTareas} />

    </>

  );
}

export default App;
