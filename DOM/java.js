let lista = document.getElementById("lista")
let boton = document.getElementById("boton")
let input = document.getElementById("input")


function crearElemento(padre,tipo,contenido){
let x = document.createElement(tipo)
x.innerHTML=contenido
padre.appendChild(x)
return x 
}


boton.addEventListener("click",
    ()=>{
        let producto = input.value
        crearElemento(lista,"li",producto)
        input.value=""
    }
)
