
import './App.css'
//1para exportar componentes usamos el import NombreCabecera from Ubicación
import ListaDePosts from './componentes/ListaDePosts';
import Cabecera from './componentes/cabecera' 
import Creador from './componentes/Creador'

//2para poder usar datos dinamicos tenemos que usar estados,para eso ponemos en el import import { useState } from 'react';

import { useState } from 'react';

function App() {
  //3 y ponemos dentro de la Appp  const [posts, setPosts] = useState([]);
  const [posts, setPosts] = useState([]);  //4"posts" es el nombre del array , el setPosts la función que nos deja usarla  e indicamos que es un useState([]) ya que inicia como un array vacio

  //5 crearemos la funcion de agregar post y crear nuevos posts 
  const agregarPosts =(contenido)=>{
    //6 para poder añadir un post tenemos que crearlo antes
      const nuevoPosts={id:Date.now(),contenido};
      setPosts(posts.concat(nuevoPosts));
  };

  //7 el agregar post en creador es la forma que tenemos de pasar instrucciones 
  return (
    <>
      <Cabecera/>
       
      <Creador agregarPost={agregarPosts} />
      <ListaDePosts posts={posts}  />
    </>
  )
}

export default App
