let jugador;
let maquina ;

maquina = Math.floor(Math.random()*3)+1;//siempre mayúscuula la m 
//let variable =Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
if(maquina===1){
    maquina="piedra"
}else if(maquina===2){
    maquina="papel"
}else if(maquina===3){//=== es como equals en java
    maquina="tijeras"
}

jugador = parseInt(prompt("Introduce tu decision "))
if(jugador===1 || jugador===2 || jugador===3){
    if(jugador===1){
        jugador="piedra"
    }else if(jugador===2){
        jugador="papel"
    }else if(jugador===3){//=== es como equals en java
        jugador="tijeras"
    }
    console.log(`La máquina seleccionó ${maquina} y tú ${jugador}`)
}else{
    alert("introduciste un valor fuera de lo pedido")
}

if(maquina===jugador){
    console.log("Empataste con la ,máquina !!")
}else if(
    jugador==="piedra"&& maquina==="tijeras"||
    jugador==="papel"&& maquina==="piedra"||
    jugador==="tijeras"&& maquina==="papel"
){
    w();
}else{
    l();
}


function w(){
console.log("ganaste !!")
}
function l (){
    console.log("perdiste :(")
}