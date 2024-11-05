let caja = document.getElementById("caja");

let x = 100; 
let y = 100; 

document.addEventListener("keydown", move);
function move(event) {
    const distancia = 10; 
    if (event.key === "ArrowUp") {
        y -= distancia;
    } else if (event.key === "ArrowDown") {
        y += distancia;
    } else if (event.key === "ArrowLeft") {
        x -= distancia;
    } else if (event.key === "ArrowRight") {
        x += distancia;
    }
    caja.style.top = y + "px";
    caja.style.left = x + "px";

    console.log(`Posicion (${x}, ${y})`);
}
