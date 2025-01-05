import React, { useState } from "react";
//importamos el usestate para poder usar datos dinamicos 


const Creador =({agregarPost})=>{

    const[contenido,setContenido]=useState("");
   
    const manejarEnvio = () => {
        if (contenido.trim()) { // Verifica que no esté vacío
          agregarPost(contenido); // Llama a la función del padre
          setContenido(""); // Limpia el estado después de enviar
        }
      };
    return(
        <>
            <input type="text" name={contenido}   onChange={(e)=>setContenido(e.target.value)}  placeholder="escribe algo..."                      />
            <p></p>
            <button onClick={manejarEnvio} >Nuevo post</button>
        </>
    );
};

export default Creador;
//Aqui crearemos texto y un boton