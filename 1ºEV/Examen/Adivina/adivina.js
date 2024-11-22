let input = document.getElementById("idUsuario")
let boton = document.getElementById("idBoton")
let numero = Math.floor(Math.random()*10)
let intentos =0
function x (){
    let usuario = input.value  
    console.log(usuario)  
    input.value=""
    console.log(`El numero es ${numero}`)
    if(usuario== numero){
        console.log("acertaste")
        numero = Math.floor(Math.random()*10)
        intentos=0
        console.log("------------------------------------------")

    }else{
        console.log("intenta de nuevo")
        intentos++
        console.log(`Vas por el intento : ${intentos}`)
        console.log("------------------------------------------")
    }

}

boton.addEventListener("click",x)