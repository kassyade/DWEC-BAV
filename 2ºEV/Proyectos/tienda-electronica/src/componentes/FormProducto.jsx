import React from 'react';
import { useState } from 'react';

const FormProducto = ({añadirProducto}) => {

// 1 creamos las propiedades de un producto 

const[nombre,setNombre]= useState("");
const[precio,setPrecio]= useState("");
const[categoria,setCategoria]=useState("");

const categorias=["Electronica","Tecnología","Fotografía","Electrodomesticos"]    

const crearProducto=()=>{
    const producto={
        nombre,precio,categoria
    }
    //console.log("hla")
    //console.log(producto);
    //Limpiamos los campos 
    añadirProducto(producto);
    setNombre("")
    setPrecio("")
    setCategoria("")
}

    return (
        <div>
            <h2>Nuevo producto</h2>
                <p>Nombre del producto</p>
                <input
                type='text'
                value={nombre}  
                onChange={(e)=>setNombre(e.target.value)}              
                />
                <p>Precio del producto </p>
                <input
                type='number'
                value={precio}
                onChange={(e)=>setPrecio(e.target.value)}
                
                />
                <p>selecciona la categoria</p>
                <select value={categoria}  onChange={ (e)=> setCategoria(e.target.value)}   >
                    <option value={""}>selecciona una categoria</option>
                    {
                        categorias.map(
                            (categoria ,index)=>(
                                <option  key={index} value={categoria}>{categoria}</option>
                            )
                        )
                    }
                </select>
                    <p><button   type='submit' onClick={crearProducto}> crear producto</button></p>
                
                <hr />
        </div>
    );
}

export default FormProducto;
