let boton = document.getElementById("idBoton")
let borrar = document.getElementById("idBorrar")

let input = document.getElementById("idInput")
let ul = document.getElementById("idUl")
boton.addEventListener("click",
()=>{
    let elemento = input.value
    nuevoLi(elemento)
 
    input.value=""
}
)

function nuevoLi(contenido){
let hijo = document.createElement("li")
hijo.innerHTML=contenido
hijo.addEventListener("click",()=>{
    ul.removeChild(hijo)
})
ul.appendChild(hijo)

}

borrar.addEventListener("click",
    ()=>{
        ul.innerHTML=""
    }
)