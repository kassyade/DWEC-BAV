
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Login from './componentes/Login'

function App() {

  const[usuarios,setUsuarios]=useState([]);

  useEffect(
    ()=>{
      axios.get('./data/usuarios.json')
      .then(
        (respuesta)=>{
          setUsuarios(respuesta.data.usuarios)
        }
      )
      .catch(
        (e)=>{
          console.log("no se pudieron cargar los datos",e)
        }
      )



    },[]
  )

  console.log("datos cargados",usuarios)




  return (
    <>
      <Login/>
    </>
  )
}

export default App
