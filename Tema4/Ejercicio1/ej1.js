function crearElemento(tipo,contenido,padre){
    let hijo = document.createElement(tipo)
    hijo.innerHTML=contenido
    padre.appendChild(hijo)
}
crearElemento("h1","Primer bloque de parrafos",document.body)
crearElemento("p","Este es el primer parrafo ",document.body)
crearElemento("p","Este es el segundo parrafo ",document.body)
crearElemento("p","Este es el tercero parrafo ",document.body)
crearElemento("h1","Segundo bloque de parrafos",document.body)
crearElemento("p","Este es el primer parrafo ",document.body)
crearElemento("p","Este es el segundo parrafo ",document.body)
crearElemento("p","Este es el tercero parrafo ",document.body)