import React from "react";
import { useState } from "react";
import '../estilos/modal.css'

//le pasamos al modal las acciones que realiza 
const Modal=({abrirModal,cerrarModal,agregarTarea})=>{

if(!abrirModal){
    return null;//solo renderiza si esta abierto
}

//creamos las propiedades de una tarea
const[titulo,setTitulo]=useState("");
const[descripcion,setDescripcion]=useState("")



const nuevaTarea=()=>{
    if (titulo.trim() === "" || descripcion.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
      }
    const tarea={
        titulo,descripcion
    }
    //le pasamos la tarea al componente padre
    agregarTarea(tarea)
    setTitulo(""); // Limpiar el título
    setDescripcion(""); // Limpiar la descripción
    cerrarModal(); // Cerrar el modal

}

return (
    <div className="modal-overlay" onClick={cerrarModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={cerrarModal}>
          &times;
        </button>
        <h2>Nueva Tarea</h2>
        <p>
          Título:{" "}
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </p>
        <p>
          Descripción:{" "}
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </p>
        <button onClick={nuevaTarea}>Crear</button>
      </div>
    </div>
  );


}
export default Modal;