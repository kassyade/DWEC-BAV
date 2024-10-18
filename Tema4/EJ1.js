/*let tit1 =document.createElement("p");//creas una etiqueta
tit1.innerHTML= "Primer bloque de parrafo ";//le das un valor 
document.body.appendChild(tit1)//lo posicionas dentro del body 

let h2 = document.createElement("h2");
h2.innerHTML="este es un titulo en h2";
document.body.appendChild(h2)
*/


function crearElemento(tipo, contenido) {//con esta funcion creamos elementos del tipo que sea 
    let hijo = document.createElement(tipo);
    hijo.innerHTML = contenido; 
    document.body.appendChild(hijo);
}

crearElemento("h2","Primer bloque de párrafo")
crearElemento("p","este es el primer párrafo")
crearElemento("p","este es el segundo párrafo")
crearElemento("p","este es el tercer párrafo")
crearElemento("h2","Segundo bloque de párrafo")
crearElemento("p","este es el primer párrafo")
crearElemento("p","este es el segundo párrafo")
crearElemento("p","este es el tercer párrafo")

//tabla 
let tabla = document.createElement("table")
let tr = document.createElement("tr")
let td = document.createElement("td")
td.innerHTML ="aqui esta el inicio de una tabla"
tr.appendChild(td)
tabla.appendChild(tr)
document.body.appendChild(tabla)
tabla.setAttribute("border","1")