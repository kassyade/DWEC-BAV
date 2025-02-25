let cuadrado = document.getElementById("cuadrado");

// Asegurarnos de que el div tenga el foco
cuadrado.focus();

cuadrado.addEventListener("keydown", (event) => {
    let distancia = 20;

    // Convertir el valor de 'top' y 'left' a número o usar 0 como valor predeterminado
    let top = parseInt(cuadrado.style.top) || 0;
    let left = parseInt(cuadrado.style.left) || 0;

    // Mover el cuadrado según la tecla presionada
    if (event.key === "ArrowUp") {
        console.log("arriba");
        cuadrado.style.top = (top - distancia) + "px"; // Subir el cuadrado
    } else if (event.key === "ArrowDown") {
        console.log("abajo");
        cuadrado.style.top = (top + distancia) + "px"; // Bajar el cuadrado
    } else if (event.key === "ArrowLeft") {
        console.log("izquierda");
        cuadrado.style.left = (left - distancia) + "px"; // Mover a la izquierda
    } else if (event.key === "ArrowRight") {
        console.log("derecha");
        cuadrado.style.left = (left + distancia) + "px"; // Mover a la derecha
    }
});
