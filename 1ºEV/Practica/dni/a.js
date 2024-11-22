let usuario = document.getElementById("numero")
let valor = parseInt(usuario.value)
let boton = document.getElementById("boton")
console.log(valor)
function botoncito(){
    resto = usuario%23
    console.log(resto)
    
}
boton.addEventListener("click",botoncito)