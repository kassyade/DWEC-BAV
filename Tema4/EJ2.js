function crear(tipo, contenido) {
    let hijo = document.createElement(tipo);
    hijo.innerHTML = contenido;
}
crear("li","primer elemento ")
crear("li","segundo elemento ")
let lista = createElement("ul")
lista.appendChild(li)
document.body.appendChild(lista)