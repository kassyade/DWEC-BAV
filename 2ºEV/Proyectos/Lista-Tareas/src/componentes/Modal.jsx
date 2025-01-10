import React from 'react';
import '../estilos/modal.css';
import { useState } from 'react';
// 5 el modal trabaja con sus estados,abierto y cerrado 
// 6 establecemos su comportamiento en caso de que no este abierto  


const Modal = ({ estaAbierto, cerrarModal }) => {
  if (!estaAbierto) return null; // Si el modal no está abierto, no se renderiza.
  const [listaTareas,setListaTareas]=useState([]);
    //Carateristicas de cada tarea
    const [titulo,setTitulo]=useState("");
    const[descripcion,setDescripcion]=useState("");


  const nuevaTarea=()=>{
      //console.log("nueva tarea")
    //validacion de campo vacío 
    if(titulo.trim()==="" || descripcion.trim()==""){
      alert("completa los espacios libre");
      return;
    }

    //creamos una nueva tarea con titulo y descripcion   
    const tarea ={
      titulo,descripcion
    };

    console.log(tarea)
    
    //añadimos la nueva tarea a la lista 
    setListaTareas([...listaTareas,tarea]);

    //limpiamos los campos una vez ya guardamos los datos 
    setTitulo("");
    setDescripcion("");

    
    //cerramos el modal una vez fue creado
    cerrarModal(true)

  }

  



  return (
        //Fondo del modal    
        <>
    <div className="modal-overlay" onClick={cerrarModal}>
                {/**Cuadrado del modal  */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/**La "x" con la que cerramos el modal  */}
        <button className="modal-close" onClick={cerrarModal}>
          &times;
        </button>

        {/**Contenido del modal  */}
        <h2>Nueva tarea</h2>
        <p>Titulo <input type="text" value={titulo}   onChange={ (e)=>setTitulo(e.target.value)  } />  </p>
        <p>Descripcion <input type="text"  value={descripcion}   onChange={(e)=>setDescripcion(e.target.value)}  />  </p>
        <button  onClick={nuevaTarea}  >Crear</button>
      


      </div>
    </div>


    {/**  Le pasamos la lista a otro componente  */}
    <Lista  tareas={listaTareas} />

    </>
  );
};

export default Modal;
