function crearElemento(tipo,contenido,padre){
let hijo =document.createElement(tipo)
hijo.innerHTML= contenido
padre.appendChild(hijo)
}
crearElemento("p","Numero de checkbox:",document.body)
let input=crearElemento("input","text",document.body)

function crearCheck(){
   
let a = document.createElement(checkbox)
document.body.appendChild(a)
let b = document.createElement("label ")
b=
}

let boton = crearElemento("button","click",document.body)
boton.addEventListener("click",crearCheck(input.value))



