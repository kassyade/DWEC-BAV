import React from 'react';
import '../estilos/modal.css';

// 5 el modal trabaja con sus estados,abierto y cerrado 
// 6 establecemos su comportamiento en caso de que no este abierto  
// 7 

const Modal = ({ estaAbierto, cerrarModal }) => {
  if (!estaAbierto) return null; // Si el modal no está abierto, no se renderiza.


  return (
        //Fondo del modal    
    <div className="modal-overlay" onClick={cerrarModal}>
                {/**Cuadrado del modal  */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/**La "x" con la que cerramos el modal  */}
        <button className="modal-close" onClick={cerrarModal}>
          &times;
        </button>

        {/**Contenido del modal  */}
        <h2>Hola desde el Modal</h2>
        <p>Este es un modal sencillo en React.</p>
      
      </div>
    </div>
  );
};

export default Modal;
