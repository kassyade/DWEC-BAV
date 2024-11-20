const autores2 = [
    new Set([ "Juan Rulfo",  "Pedro Páramo",  "2014" ]),
    new Set([ "Juan Rulfo",  "El Llano en Llamas",  "2013" ]),
    new Set([ "Rosa Montero",  "Cuentos verdaderos",  "2024" ]),
    new Set([ "Pablo Neruda",  "Veinte poemas de amor y una canción desesperada",  "2013" ]),
    new Set([ "Almudena Grandes",  "La madre de Frankenstein",  "2020" ]),
    new Set([ "Miguel de Cervantes Saavedra",  "Don Quijote de la Mancha",  "1605" ]),
    new Set([ "Jorge Luis Borges",  "Ficciones",  "2014" ]),
    new Set([ "Rosa Chacel",  "Memorias de Leticia Valle",  "1945" ]),
    new Set([ "Pablo Neruda",  "Antología poética",  "2014" ]),
    new Set([ "Rosa Chacel",  "Saturnal",  "1972" ]),
    new Set([ "Carmen Laforet",  "La Isla de los Demonios",  "1952" ]),
    new Set([ "Jorge Luis Borges",  "El sur",  "1953" ]),
    new Set([ "Pablo Neruda",  "Confieso que he vivido",  "2010" ])
];


const autoresUnicos = new Set()

autores2.forEach(
    (set)=>{
        const iterador = set.values()
        const autores= iterador.next().value
        autoresUnicos.add(autores)

    }
)
console.log(autoresUnicos)

let select = document.getElementById("idAutores")

autoresUnicos.forEach(
    (autor)=>{
        let option = document.createElement("option")
        option.innerHTML=autor
        select.appendChild(option)
    }
)