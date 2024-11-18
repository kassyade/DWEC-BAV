let select =document.getElementById("idJugador")
let boton = document.getElementById("idBoton")
let numero = Math.floor(Math.random()*3)

function x(){
    let usuario = select.value
    console.log(`Usuario: ${usuario}`)
    const valores=["piedra","papel","tijeras"];
    let maquina = valores[numero]
    console.log(`Máquina : ${maquina}`)
    if(usuario===maquina){
        console.log(" empataste")
        numero = Math.floor(Math.random()*3)

    }else
    if(usuario==="piedra" && maquina==="tijeras" ||usuario==="papel" && maquina==="piedra" ||usuario==="tijeras" && maquina==="papel"  ){
        console.log("ganaste")
        numero = Math.floor(Math.random()*3)
    }else{
        console.log("perdiste")
        numero = Math.floor(Math.random()*3)

    }
}
boton.addEventListener("click",x)