function crearElemento(tipo,contenido,padre){
let hijo =document.createElement(tipo)
hijo.innerHTML= contenido
padre.appendChild(hijo)
}
crearElemento("p","Numero de checkbox:",document.body)

let input = document.createElement("input")//el input del texto
document.body.appendChild(input)

let boton = document.createElement("button")
boton.innerHTML="Crear checkbox"
document.body.appendChild(boton);
boton.addEventListener("click",crearCheckbox)

function crearCheckbox(){
let a = document.createElement("input")//input para el checkbox
a.type="checkbox"
document.body.appendChild(a)

let b = document.createElement("label")//label para el texto del checkbox
b.innerHTML = input.value 
document.body.appendChild(b)

crearElemento("br","",document.body)

}
