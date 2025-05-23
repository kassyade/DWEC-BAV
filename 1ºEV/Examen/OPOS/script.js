const autores =[
    {"Autor": "Carmen Laforet", "Titulo": "Nada", "Fecha": "1945"},
    {"Autor": "Juan Rulfo", "Titulo": "Pedro Páramo", "Fecha": "2014"},
    {"Autor": "Juan Rulfo", "Titulo": "El Llano en Llamas", "Fecha": "2013"},
    {"Autor": "Rosa Montero", "Titulo": "Cuentos verdaderos", "Fecha": "2024"},
    {"Autor": "Pablo Neruda", "Titulo": "Veinte poemas de amor y una canción desesperada", "Fecha": "2013"},
    {"Autor": "Almudena Grandes", "Titulo": "La madre de Frankenstein", "Fecha": "2020"},
    {"Autor": "Miguel de Cervantes Saavedra", "Titulo": "Don Quijote de la Mancha", "Fecha": "1605"},
    {"Autor": "Jorge Luis Borges", "Titulo": "Ficciones", "Fecha": "2014"},
    {"Autor": "Rosa Chacel", "Titulo": "Memorias de Leticia Valle", "Fecha": "1945"},
    {"Autor": "Pablo Neruda", "Titulo": "Antología poética", "Fecha": "2014"},
    {"Autor": "Rosa Chacel", "Titulo": "Saturnal", "Fecha": "1972"},
    {"Autor": "Carmen Laforet", "Titulo": "La Isla de los Demonios", "Fecha": "1952"},
    {"Autor": "Jorge Luis Borges", "Titulo": "El sur", "Fecha": "1953"},
    {"Autor": "Pablo Neruda", "Titulo": "Confieso que he vivido", "Fecha": "2010"}
]

const autoresUnicos = new Set()

autores.forEach(
    (autor)=>{
        autoresUnicos.add(autor.Autor)

    }
)

let select = document.getElementById("idAutores")

autoresUnicos.forEach(
    (nombre)=>{
        let hijo = document.createElement("option")
        hijo.value=nombre
        hijo.innerHTML=nombre
        select.appendChild(hijo)
    }
)
let tabla = document.querySelector("table")
tabla.setAttribute("border","1")
function mostrarTitulos(autor, titulo, fecha) {
    let fila = document.createElement("tr"); // Crear una fila para la tabla
    fila.innerHTML = `
        <td>${titulo}</td>
        <td>${fecha}</td>
    `;
    tabla.appendChild(fila); // Añadir la fila a la tabla
}

select.addEventListener("change",
    ()=>{
        let autorSeleccionado = select.value
        console.log(autorSeleccionado)
        tabla.innerHTML=`        <tr>
            <th>Titulo</th>
            <th>Fecha</th>
        </tr>` 
        autores.forEach(
            (autor)=>{
                if(autorSeleccionado==autor.Autor){
                    mostrarTitulos(autor.Autor,autor.Titulo,autor.Fecha)
                }
            }
        )


    }
)