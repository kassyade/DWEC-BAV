/*function titH(){
    
    let hora = new Date();
    let horaActual = hora.toLocaleDateString();
    document.title = `Hora actual ${horaActual}`

}*/

function iniciarTituloHora() {
    return setInterval(function() {
        const ahora = new Date();
        const horaActual = ahora.toLocaleTimeString();  // Obtener la hora actual en formato local
        document.title = "Hora actual: " + horaActual;  // Actualizar el título del documento
    }, 1000);
}