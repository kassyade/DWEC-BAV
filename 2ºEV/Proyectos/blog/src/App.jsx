import React from 'react'//  1º importamos react 

//º2 importamos los componentes que vayamos a usar 

import Cabecera from './componentes/Cabecera'
import Experiencias from'./componentes/Experiencias'
import Formulario from './componentes/Formulario'
import './App.css'

function App() {

  return (
    <>
      <Cabecera/>
      <Formulario/>
      <Experiencias/>
    </>
  )
}

export default App
