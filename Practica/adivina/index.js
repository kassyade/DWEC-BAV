let min = 6;
let max = 10;
let numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;

// Math.floor(Math.random() * (max - min + 1)) + min;


let x = document.getElementById("usuario")
//console.log(numeroRandom)
let boton = document.getElementById("boton")

let texto = document.createElement("p")
let texto2= document.createElement("p")
texto2.innerHTML=`El numero random es : ${numeroRandom}`
texto.innerHTML =`El numero esta entre ${min} y ${max}`//comillas al lado de la p 
document.body.appendChild(texto)
document.body.appendChild(texto2)
function botoncito (event){
    let usuario = parseInt(x.value)

    if( usuario === numeroRandom){
        console.log("el numero es igual");
    }else{
        console.log("el numero es diferente ")
    }
    x.value=""

}

boton.addEventListener("click",botoncito)