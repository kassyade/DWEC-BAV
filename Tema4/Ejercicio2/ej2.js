function crearElemento(tipo,contenido,padre){
let hijo = document.createElement(tipo)
hijo.innerHTML =contenido
padre.appendChild(hijo)
}