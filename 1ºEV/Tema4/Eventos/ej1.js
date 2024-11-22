
//Forma1
function funcionUno(){
    console("boton1")
    let color= "#7c6e6e"
    document.body.style.backgroundColor = color

}

//Forma2

//llamamos al objeto por la id
document.getElementById("boton2").onclick=funcionDos;//y le damos el evento oncick llamando a la funcion 
function funcionDos(){
    console.log("boton2")
    let color="#7fffd4"
    document.body.style.backgroundColor= color
}

//Forma3
//le damos el elemento a una variable
let boton3 = document.getElementById("boton3")
//le damos la funcion con addEventlistener
boton3.addEventListener("click",funcionTres)

function funcionTres(){
    console.log("boton3")
    let color="#64bb72"
    document.body.style.backgroundColor= color
}

//ahora hacemos lo mismo para que cuando pulsemos en cualquier pate de la pantalla se ponga la pantalla en blanco 
let cuerpo = document.getElementById("idCuerpo")
cuerpo.addEventListener("click",funcionCuerpo)

function funcionCuerpo(event){
    if(event.target.tagName !=="INPUT"){
    console.log("cuerpo ")
    cuerpo.style.backgroundColor= "#ff0000"
    }
}
