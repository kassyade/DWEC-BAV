let dia,mes;
let resultado="";
while(true){
     dia =parseInt(prompt("Introduce el día"));
     mes =parseInt(prompt("Introduce el mes"));

    if(dia===14&& mes===2){
        resultado="Exacto esa es la fecha de san valentin"
        break;
    }else{
        alert("Fecha incorrecta ,intenta otra vez")
    }
    
}
document.getElementById("resultado").innerHTML = resultado;
