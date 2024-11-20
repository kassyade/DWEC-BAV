let horaSistema = new Date()
let dia = horaSistema.getDate()
let mes = horaSistema.getMonth()
let año = horaSistema.getFullYear()
let h = horaSistema.getHours()
let mim = horaSistema.getMinutes()

console.log(horaSistema)
const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

function crearElemento(tipo,contenido,padre){
    let hijo = document.createElement(tipo)
    hijo.innerHTML=contenido
    padre.appendChild(hijo)
    console.log(mes)

}
crearElemento("p",`Hoy es el dia ${dia} de ${meses[mes] } de ${año}`,document.body)