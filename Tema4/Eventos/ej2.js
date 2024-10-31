
/*document.addEventListener("click",clickRaton)

function clickRaton(event){
    if(event.button === 0){//click izquierdo
        console.log("Boton presionado ",event.button)
        let x = document.body.ul.getElementById("x") 
        
        console.log("Coordenadas en la pantalla:", `X: ${event.screenX}, Y: ${event.screenY}`);

    }


}*/

// Obtener el elemento body
let cuerpoPagina = document.body;

// Obtener los elementos donde se mostrarán las coordenadas
let posX = document.getElementById("x");
let posY = document.getElementById("y");

// Agregar el evento 'mousemove' para capturar las coordenadas
cuerpoPagina.addEventListener("mousemove", coordenadas);

function coordenadas(evento) {
    // Obtener las coordenadas X e Y del ratón
    let x = evento.clientX; // Posición en la ventana
    let y = evento.clientY; // Posición en la ventana

    // Actualizar el contenido de los elementos <li>
    posX.textContent = `Posición X: ${x}`;
    posY.textContent = `Posición Y: ${y}`;
}
