titulo = document.getElementById("idTitulo")



let intervalo = setInterval(
    ()=>{
        let horaSistema=new Date();
        let h =horaSistema.getHours();
        let min =horaSistema.getMinutes();
        let seg =horaSistema.getSeconds(); 

        let hora =`${h}:${min}:${seg}`
        console.log(horaSistema)
        titulo.innerHTML=(hora)
    }
    ,1000
)

let boton = document.getElementById("idBoton")
boton.addEventListener("click",()=>{
    clearInterval(intervalo)
}

)