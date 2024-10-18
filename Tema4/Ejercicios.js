//constructor 
function crearElemento(tipo,contenido){
let hijo = document.createElement(tipo)
hijo.innerHTML = contenido
return hijo
}
let h1 = crearElemento("h1", "Ejercicios Tema 4");//creamos elemento
h1.classList.add("centroNegrita"); // le damos un estilo que esta en nuesto hmtl
document.body.appendChild(h1);//lo posicionamos 

let hr1 = crearElemento("hr","")
document.body.appendChild(hr1)

let h2 = crearElemento("h2","Primer ejercicio ")
document.body.appendChild(h2)
 
let p1 = crearElemento("p","Utilizando funciones del dom crear la siguiente página, utilizando como referencia la información almacenada en el siguiente set:")
document.body.appendChild(p1)
/**primer ejercicio  */

let h31a = crearElemento("h3","Primer bloque de parrafos ")
document.body.appendChild(h31a)

let p1a = crearElemento("p","primer parrafo")
document.body.appendChild(p1a)
let p1b = crearElemento("p","primer parrafo")
document.body.appendChild(p1b)
let p1c = crearElemento("p","primer parrafo")
document.body.appendChild(p1c)

let h31a1 = crearElemento("h3","Segundo bloque de parrafos ")
document.body.appendChild(h31a1)

let p1a2 = crearElemento("p","primer parrafo")
document.body.appendChild(p1a2)
let p1b3 = crearElemento("p","primer parrafo")
document.body.appendChild(p1b3)
let p1c4 = crearElemento("p","primer parrafo")
document.body.appendChild(p1c4)