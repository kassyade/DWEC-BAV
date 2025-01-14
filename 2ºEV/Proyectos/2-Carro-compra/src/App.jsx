import React, { useState } from 'react'
import MenuSuperior from './componentes/menu'
import ListaImagenes from './componentes/cuerpo'
import { Route, Routes } from 'react-router-dom';
import Pagina404 from './componentes/Pagina404';
import DetalleCarrito from './componentes/DetalleCarrito';
function App() {

  const [total, setTotal] = useState(0); // Estado para el importe total
  const [productos, setProductos] = useState([]); // Lista de productos del carrrito

  const imageUrls = [ 
    { url: "./imagenes/manzana.jpg", nombre: "Manzana", precio: 5 }, 
    { url: "./imagenes/pera.jpg", nombre: "Pera", precio: 7 }, 
    { url: "./imagenes/platano.jpg", nombre: "Platano", precio: 4 } 
  ];

  return (
    <div className="App">
     

      <header className="App-header">
        {/* Pasar el total al menú superior */}
        <MenuSuperior 
            total={total} 
            productos={productos}
                  />
      </header>
      <main>
        {/* Pasar total y setTotal a ListaImagenes */}
         {/*2 definimos las rutas*/}
      <Routes>

        {/** 3 primero definimos la página estandar donde inicia la app */}
      <Route  path='/'  element={<ListaImagenes total={total} setTotal={setTotal} productos={productos} setProductos={setProductos}  imagenes={imageUrls}   />}     ></Route>

        {/** 4 definimos la pagina de error */}
        <Route path='*' element={<Pagina404/>}   ></Route>
        {/** 5 definimos la pagina de detalles */}
        
        <Route  path='detalle' element={<DetalleCarrito productos={productos} detalles={imageUrls}  />}  ></Route>
      </Routes>
      </main>
    </div>
  );
}

export default App
