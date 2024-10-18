function crear(tipo, contenido) {
    let hijo = document.createElement(tipo);
    hijo.innerHTML = contenido;
    return hijo; // Devuelve el elemento creado
}

// Crea los elementos li
let primerElemento = crear("li", "primer elemento");
let segundoElemento = crear("li", "segundo elemento");

// Crea la lista ul y agrega los elementos li
let lista = document.createElement("ul"); // Corrige createElement a document.createElement
lista.appendChild(primerElemento); // Usa las variables para agregar los elementos
lista.appendChild(segundoElemento);

// Agrega la lista al cuerpo del documento
document.body.appendChild(lista);
