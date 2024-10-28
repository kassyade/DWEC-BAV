function crearElemento(tipo,contenido,padre){
    let hijo = document.createElement(tipo)
    hijo.innerHTML=contenido
    padre.appendChild(hijo)
}
crearElemento("h1","Primer bloque de parrafos",document.body)
let a = document.body.createElement("h1")
a.innerHTML="hplña "
document.body.appendChild(a)