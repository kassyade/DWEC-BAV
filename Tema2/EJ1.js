let nombre = prompt("Introduce tu nombre");
let apellido = prompt("Ahora tu apellido");
//parseInt es la forma de indicar que los valores introducidos será tipo int 
let a = parseInt(prompt("Introduce el primer valor numérico"));
let b = parseInt(prompt("Introduce el segundo valor numérico"));
let c = parseInt(prompt("Introduce el tercer valor numérico"));
let nombreCompleto = `${nombre} ${apellido}`;//no usamos nombre+apellido

let suma = a + b + c;
let mult = a * b * c;
let div = a/c;
//creo el texto que se mostrara en el html
let resultado = "Nombre completo: " + nombreCompleto + "<br>" +
                "Valores: Valor 1: " + a + ", Valor 2: " + b + ", Valor 3: " + c + "<br>" +
                "Suma de valores: " + suma + "<br>" +
                "Multiplicación: " + mult + "<br>" +
                "División entre Valor 1 y Valor 3: " + div + "<br>";
//enviamos el resultado al html
document.getElementById("resultado").innerHTML = resultado;
