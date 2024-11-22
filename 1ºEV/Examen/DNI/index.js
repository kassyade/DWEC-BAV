let input = document.getElementById("idNumero");
let boton = document.getElementById("idBoton");

function x() {
    let numero = input.value; // Obtener el valor actual del input
    console.log(numero);
    let resultado = (numero%23)
    console.log(resultado)
    let a = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    console.log(`La letra seía ${a[resultado]}`)

    input.value =""
}

boton.addEventListener("click", x);
