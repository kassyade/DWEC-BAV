
let boton = document.getElementById("idBoton")
let usuarios=[]
boton.addEventListener("click",
    ()=>{
        let cantidad = parseInt(prompt("numero de socios"))
        for(let i =1 ;i<=cantidad;i++ ){
            
        let nombre =prompt("Introduce tu nombre de socio")
        console.log(`Usuario: ${nombre}`);
        let correo =prompt("Introduce el correo de socio")
        console.log(`Correo de socios : ${correo}`)
        while(correo.indexOf("@")<=0){
            console.log("correo incorrecto vuelve a introducirlo")
            correo =prompt("Introduce el correo de socio")

        }
        let usuario = [{nombre: `${nombre}`, correo:`${correo}`}]
        console.log(usuario)
        //console.log("correo correcto")
        usuarios.push(usuario)

        }

        console.log(usuarios)
    }
)