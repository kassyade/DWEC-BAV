import React from "react";


const Lista = ({tareas})=>{

return(
  <>
  <h2>lista de tareas</h2>
  <ul>
    {
      tareas.map(
        (tarea,index)=>(
          <li key={index}>
            <p>{tarea.titulo}</p>
            <p>{tarea.descripcion}</p>
          </li>
        )
      )
    }
  </ul>
  </>
)


}

export default Lista;