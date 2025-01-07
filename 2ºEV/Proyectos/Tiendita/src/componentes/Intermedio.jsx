import React from "react"
//1 importamos el usesState para poder usarlo
import { useState } from "react";
//3 usaremos useEffect y Axios para poder extraer los datos del json que tenemos en public
import { useEffect } from "react";
import axios from "axios";
import '../estilos/Intermedio.css'

const Intermedio =()=>{
    //2creamos una constante con el array que usaremos 
    const [productos,setProductos]=useState([]);
    //tiene la forma de  constante [nombrearray,funcionSet]=useState(inicio)
    
    //4 ahora usaremos promesas y useEffect para poder tomar el archivo json 
    useEffect(
        ()=>{
            axios
                .get('/productos.json')//5 con un get tomamos los datos 
                .then(//en caso de que esté bien
                    respuesta=>{
                        setProductos(respuesta.data)//guardamos datos en la constante de productos 
                    }
                )
                .catch(
                    error=>{
                        console.error('Error al cargar los productos ',error)
                    }
                );
            },[]//para que solo se ejecute una vez 
    );


    //Funcionalidad de borrar
    const borrarProducto=(id)=>{
        const nuevosProductos = productos.filter(
            (producto)=>producto.id !== id
        );
        setProductos(nuevosProductos);
    };

    //Funcionalidad de editar 
    const editarProducto=(id)=>{
        const productoAEditar = productos.find(
            (producto)=>producto.id === id
        ) 
        
        const nuevoNombre = prompt("Introduce el nuevo nombre del producto" ,productoAEditar.nombre)
        const nuevaDescripcion = prompt("Introduce la nueva descripcion" ,productoAEditar.descripcion)
        const nuevoPrecio = prompt("Introduce el nuevo precio",productoAEditar.precio)

        if (nuevoNombre && nuevaDescripcion && nuevoPrecio) {
            const nuevosProductos = productos.map((producto) =>
              producto.id === id
                ? {
                    ...producto,
                    nombre: nuevoNombre,
                    descripcion: nuevaDescripcion,
                    precio: nuevoPrecio,
                  }
                : producto
            );
            setProductos(nuevosProductos);
          }
          

    }

    return(
    <>

        <h2>Intermedio</h2>
        <ul>
            {productos.map
                (producto=>(
                    <li key={producto.id} >
                        <h3>{producto.nombre}</h3>
                        <p>{producto.precio}€</p>
                        <button>Comprar producto</button> <p></p>
                        <button onClick={()=>editarProducto(producto.id)}>Editar articulo</button>
                        <button onClick={ ()=> borrarProducto (producto.id)} >Borrar</button>
                    </li>

                    )
                )
            }
        </ul>
    </>

    );


}

export default Intermedio;