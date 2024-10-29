function crearElemento(tipo,contenido,padre){
let hijo = document.createElement(tipo)
hijo.innerHTML =contenido
padre.appendChild(hijo)
return hijo; 
}

function insertarLi(){
    let rand = Math.floor(Math.random() * 101)//crear un numero random de 0  a 100
    console.log(rand)
    let li = document.createElement("li")
    li.innerHTML =`Numero nuevo :${rand} ` //recuerda usar las comillas al lado de la p
    document.body.appendChild(li)
}

let bton=crearElemento("button","Insertar elemento",document.body)
bton.addEventListener( "click",insertarLi)





