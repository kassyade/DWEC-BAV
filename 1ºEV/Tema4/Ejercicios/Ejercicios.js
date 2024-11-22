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

let h2a = crearElemento("h2","Primer ejercicio ")
document.body.appendChild(h2a)
 
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

let hr2 =crearElemento("hr","")
document.body.appendChild(hr2)
/**segundo ejercicio */

let h2b= crearElemento("h2","Segundo ejercicio")
document.body.appendChild(h2b)
let p2 = crearElemento("p","Haz un programa que cuando se pulse un botón “InsertarAleatorio”, añada un elemento con un número aleatorio a una lista desordenada (elemento UL).")
document.body.appendChild(p2)

/**lista ul */
let ul = crearElemento("ul","")
document.body.appendChild(ul)
let li = crearElemento("li","elemento 1")
ul.appendChild(li)

function nuevo(){
let num = Math.floor(Math.random()* 101)//numero random
let a =crearElemento("li","nuevo elemento :"+num)
ul.appendChild(a)
}
//funcionalidad del boton
let boton= crearElemento("button","click!!")
document.body.appendChild(boton)
boton.addEventListener("click", nuevo);

let hr3= crearElemento("hr","")
document.body.appendChild(hr3)

h2b= crearElemento("h2","Tercer ejercicio")
document.body.appendChild(h2b)

let p3 = crearElemento("p","Hacer un programa que permita crear checkbox de forma dinámica al pulsar el botón. ).")
document.body.appendChild(p3)
let p4 =crearElemento("p","• El número de checkbox, debe ser especificado en un campo de tipo texto(input)")
document.body.appendChild(p4)
// Crear contenedor para los checkboxes
let contenedorCheckboxes = document.createElement("div");
document.body.appendChild(contenedorCheckboxes);

// Crear el input de texto
let inputxt = document.createElement("input");
inputxt.setAttribute("type", "text");
inputxt.setAttribute("placeholder", "Texto del checkbox");
document.body.appendChild(inputxt);

// Crear el botón
let but2 = crearElemento("button", "Crear checkbox");
document.body.appendChild(but2);

let br5 = crearElemento("br", "");
document.body.appendChild(br5);

// Funcionalidad del botón
but2.addEventListener("click", function () {
    let contenido = inputxt.value;

    // Crear checkbox
    let caja = document.createElement("input");
    caja.setAttribute("type", "checkbox");
    contenedorCheckboxes.appendChild(caja); // Añadir checkbox al contenedor

    // Crear etiqueta (label)
    let label = document.createElement("label");
    label.textContent = contenido;
    contenedorCheckboxes.appendChild(label); // Añadir label al contenedor

    // Salto de línea
    contenedorCheckboxes.appendChild(document.createElement("br"));
});

let br6 = crearElemento("br", "");
document.body.appendChild(br6);

let hr4 = document.createElement("hr");
document.body.appendChild(hr4);

let h3 = crearElemento("h2", "Cuarto Ejercicio");
document.body.appendChild(h3);

let p5 =crearElemento("p","Realizar una página que visualice las aficiones del autor, un ejemplo de estructura sería:")
document.body.appendChild(p5)
//DEPORTE
let p6 =crearElemento("p","¿Deporte favorito?")
document.body.appendChild(p6)

let txt2=document.createElement("input")
txt2.setAttribute("type","text")
document.body.appendChild(txt2)

//SERIE
let p7 =crearElemento("p","¿Serie favorito?")
document.body.appendChild(p7)

let txt3=document.createElement("input")
txt2.setAttribute("type","text")
document.body.appendChild(txt3)

//PELICULA
let p8 =crearElemento("p","¿Serie favorito?")
document.body.appendChild(p8)

let txt4=document.createElement("input")
txt2.setAttribute("type","text")
document.body.appendChild(txt4)

document.body.appendChild(br6);


let btn3=crearElemento("button","Enviar aficiones")
document.body.appendChild(btn3)

//espacios 
let aficiones = crearElemento("h3","Mis aficiones...")
document.body.appendChild(aficiones)

