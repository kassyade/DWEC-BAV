let a = parseInt(prompt("Introduce el primer número"));
let b = parseInt(prompt("Introduce el primer número"));
let c = parseInt(prompt("Introduce el primer número"));
let result ="";
if(a>10|| b>10 || c>10){
result="Algunos de los número introducidos es mayor que 10";
}else{
    result="Ninguno de los números es mayor que 10";
}
document.getElementById("resultado").innerHTML = result;
document.getElementById("num").innerHTML = `Números introducidos: ${a}, ${b}, ${c}`;
