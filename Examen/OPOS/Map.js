const autores = [
    new Map([
        ["autor", "Juan Rulfo"],
        ["titulo", "Pedro Páramo"],
        ["año", "2014"]
    ]),
    new Map([
        ["autor", "Juan Rulfo"],
        ["titulo", "El Llano en Llamas"],
        ["año", "2013"]
    ]),
    new Map([
        ["autor", "Rosa Montero"],
        ["titulo", "Cuentos verdaderos"],
        ["año", "2024"]
    ]),
    new Map([
        ["autor", "Pablo Neruda"],
        ["titulo", "Veinte poemas de amor y una canción desesperada"],
        ["año", "2013"]
    ]),
    new Map([
        ["autor", "Almudena Grandes"],
        ["titulo", "La madre de Frankenstein"],
        ["año", "2020"]
    ]),
    new Map([
        ["autor", "Miguel de Cervantes Saavedra"],
        ["titulo", "Don Quijote de la Mancha"],
        ["año", "1605"]
    ]),
    new Map([
        ["autor", "Jorge Luis Borges"],
        ["titulo", "Ficciones"],
        ["año", "2014"]
    ]),
    new Map([
        ["autor", "Rosa Chacel"],
        ["titulo", "Memorias de Leticia Valle"],
        ["año", "1945"]
    ]),
    new Map([
        ["autor", "Pablo Neruda"],
        ["titulo", "Antología poética"],
        ["año", "2014"]
    ]),
    new Map([
        ["autor", "Rosa Chacel"],
        ["titulo", "Saturnal"],
        ["año", "1972"]
    ]),
    new Map([
        ["autor", "Carmen Laforet"],
        ["titulo", "La Isla de los Demonios"],
        ["año", "1952"]
    ]),
    new Map([
        ["autor", "Jorge Luis Borges"],
        ["titulo", "El sur"],
        ["año", "1953"]
    ]),
    new Map([
        ["autor", "Pablo Neruda"],
        ["titulo", "Confieso que he vivido"],
        ["año", "2010"]
    ])
];

const autoresUnicos = new Set()

autores.forEach(
    (autor)=>{
        autoresUnicos.add(autor.get("autor"))
    }
)
//console.log(autoresUnicos)

let select = document.getElementById("idAutores")
autoresUnicos.forEach(
    (autor)=>{
        let option = document.createElement("option")
        option.value=autor
        option.innerHTML=autor
        select.appendChild(option)
    }
)

let tabla = document.querySelector("table")

function datos (titulos,fecha){
    //let fila =`<tr><td>${titulos}</td><td>${fecha}</td></tr>`
    let fila = document.createElement("tr")
    let t = document.createElement("td")
    t.innerHTML = titulos
    fila.appendChild(t)
    let f = document.createElement("td")
    f.innerHTML=fecha
    fila.appendChild(f)
    tabla.appendChild(fila)

}
tabla.setAttribute("border","1")
select.addEventListener("change",
    ()=>{
        tabla.innerHTML=" <tr><th>Titulo</th><th>Fecha</th></tr>"
        let autorSeleccionado = select.value
        //console.log(autorSeleccionado)
        autores.forEach(
            (autor)=>{
                //console.log(autor.get("autor"))
                if(autorSeleccionado==autor.get("autor")){
                    console.log(autor.get("titulo"))
                    console.log(autor.get("año"))
                    datos(autor.get("titulo"),autor.get("año"))
                }
            }
        )
    }
)