import React, { useState } from 'react';

const Login = () => {

    const[usuario,setUsuario]=useState("");
    const[contraseña,setContraseña]=useState("");
    
    const comprobarLogin=()=>{

        console.log(usuario);
        console.log(contraseña);
        
        
        
        
        setUsuario("");
        setContraseña("");

    }



    return (
        <div>
            <h2>Inicio de sesion</h2>
            <input
            type='text'
            name='usuario'
            onChange={(e)=>setUsuario(e.target.value)}
            placeholder='Usuario'
            />

            <p>
            <input
            type='password'
            name='contraseña'
            onChange={(e)=>setContraseña(e.target.value)}
            placeholder='Contraseña'
            />
            </p>
            <button onClick={comprobarLogin}  >Inicio de sesion</button>
        </div>
    );
}

export default Login;
