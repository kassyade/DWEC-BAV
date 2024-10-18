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