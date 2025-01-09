import './App.css'
import Formulario from './componentes/Formulario'
import { useState } from 'react'


function App() {

  //1 creamos el array donde tendremos las personas
  const[personas,setPersonas]=useState([]);
  //2 creamos las caracteristicas que tendra cada una de estas personas
  const[nombre,setNombre] =useState("");
  const[apellido,setApellido]=useState("");
  const[edad,setEdad]=useState("");

const crearPersona= ()=>{
    // Validación: Comprobar que todos los campos están llenos
    if (nombre.trim() === "" || apellido.trim() === "" || edad.trim() === "") {
      alert("Por favor, completa todos los campos antes de enviar.");
      return; // Salir de la función si algún campo está vacío
    }
  const nuevaPersona={nombre,apellido,edad};
  setPersonas([...personas,nuevaPersona])
  setNombre("");
  setApellido("");
  setEdad("");
}

  return (
    <>
      <h3>Formulario simple</h3>
      <p>
        <label> Nombre </label>
        <input type="text" value={nombre}   onChange={ (e)=>setNombre(e.target.value)}  />
      </p>
      <p>
        <label> Apellido </label>
        <input type="text" value={apellido}  onChange={(e)=>setApellido(e.target.value)}  />
      </p>
      <p>
        <label> Edad </label>
        <input type="number" value={edad}  onChange={(e)=>setEdad(e.target.value)}  />
      </p>
      <button  onClick={crearPersona}  >enviar datos</button>
    
      <h3>Lista de personas</h3>
      <ul>
        {
          personas.map(
            (persona,index)=>(
              <li key={index}>
                Nombre:{persona.nombre}
                --Apellido:{persona.apellido}
                --Edad{persona.edad}
              </li>
            )
          )
        }
      </ul>
    
    
    </>
  )
}

export default App
