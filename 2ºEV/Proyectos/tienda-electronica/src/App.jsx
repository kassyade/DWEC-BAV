import FormProducto from './componentes/FormProducto'
import { useState } from 'react'
import './App.css'

function App() {

  const [listaProductos,setListaProductos] = useState([]);
  console.log(listaProductos)
  const añadirProducto =(producto)=>{
    setListaProductos(a=>[...a,producto]);
  }

  return (
    <>
      <FormProducto  añadirProducto={añadirProducto} />
    </>
  )
}

export default App
