function crearElemento(tipo,contenido,padre){
let hijo = tipo;
document.createElement(hijo);
hijo.innerHTML= contenido;
padre.body.appendChild(hijo)
}