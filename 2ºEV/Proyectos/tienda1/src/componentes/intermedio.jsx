import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const Intermedio =()=>{

    const[productos,setProductos]=useState([])

        useEffect(
            ()=>{
                axios
                .get('/productos.json')
                .then(
                    respuesta =>{
                        setProductos(respuesta.data)
                    }
                )
                .catch(
                    error=>{
                        console.error('Error a la hora de extraer los datos ',error)
                    }
                )
            },[]
        
        
        
        );

        const borrarProducto= (id)=>{
            const nuevosProductos =productos.filter( 
                (producto)=>producto.id !==id
            );
            setProductos(nuevosProductos);
        }

        

    return(
        <>
        <h2>Intermedio</h2>
        <ul>
          {
            productos.map(
                (producto=>(
                    <li key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <p>{producto.precio}€</p>
                        <button  onClick={()=>{borrarProducto(producto.id)}}   >Borrar</button>
                    </li>
                )

                )
            )
          }
        </ul>
        </>
    )
}
export default Intermedio;