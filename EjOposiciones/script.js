autores=[// con un array
    [ "Carmen Laforet", "Nada",  "1945"],
    [ "Juan Rulfo", "Pedro Páramo",  "2014"],
    [ "Juan Rulfo", "El Llano en Llamas",  "2013"],
    [ "Rosa Montero", "Cuentos verdaderos",  "2024"],
    [ "Pablo Neruda", "Veinte poemas de amor y una canción desesperada",  "2013"],
    [ "Almudena Grandes", "La madre de Frankenstein",  "2020"],
    [ "Miguel de Cervantes Saavedra", "Don Quijote de la Mancha",  "1605"],
    [ "Jorge Luis Borges", "Ficciones",  "2014"],
    [ "Rosa Chacel", "Memorias de Leticia Valle",  "1945"],
    [ "Pablo Neruda", "Antología poética",  "2014"],
    [ "Rosa Chacel", "Saturnal",  "1972"],
    [ "Carmen Laforet", "La Isla de los Demonios",  "1952"],
    [ "Jorge Luis Borges", "El sur",  "1953"],
    [ "Pablo Neruda", "Confieso que he vivido",  "2010"]
]

let seleccion = document.getElementById("idAutores")
/*
let opcion = document.createElement("option")
opcion.value="hola"//el valor que tiene
opcion.textContent="hola"//lo que vera el usuario
seleccion.appendChild(opcion)*/

function opciones (nombre,valor){
let opcion = document.createElement("option")
opcion.value=valor 
opcion.textContent= nombre 
seleccion.appendChild(opcion)
}

let autoresUnicos = []//como se repiten los autores creamos un array sin repetidos

autores.forEach(//recorremos el arrayautorees
    (autor)=>{//autor como cada elemento del array 
        if (!autoresUnicos.includes(autor[0])){//autor[0] se refiere al nombre del autor 
            autoresUnicos.push(autor[0])//incluimos el valor en el array de autoresUnicos
        }

    }
)


autoresUnicos.forEach(//pobemos los autores dentro del select
    (autor)=>{opciones(autor,autor)
    }
)
let tabla = document-getElementById("idTabla").querySelector("tbody")

seleccion.addEventListener("change",()=>{
    const autorSeleccionado = seleccion.value

    tabla.innerHTML =""//vaciamos la tabla 
    autores.forEach(
        (autor)
    )


}


)