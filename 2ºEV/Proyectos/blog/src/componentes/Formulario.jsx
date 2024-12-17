import React from "react";
import '../estilos/Formulario.css'

const Formulario =()=>{
     return(
        <>
        <form action="" method="post">
            <label >Tema:</label>
            <input type="text"  name="tema" id="contenido"/>
            <p>
                <label >Contenido:</label>
                <input type="text" name="contenido" id="contenido" /></p>
            <button type="">Añadir al blog</button>
        </form>



        </>
     );
};

export default Formulario;