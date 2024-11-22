
let tiempo = prompt("introduce el inicio de la cuenta regresiva")
//console.log(tiempo)

function cuentaRegresiva (tiempo){
console.log(`Cuenta regresiva emepxando desde ${tiempo}`)    
let cuentaTerminada=false

let cuenta =setInterval(
    ()=>{
        ///console.log("1ntervalo")
        console.log(tiempo)
        tiempo--
        if(tiempo<0){
            console.log("cuenta terminada ")
             cuentaTerminada=true
        }

        if(cuentaTerminada==true){
            clearInterval(cuenta)
            setTimeout(
                ()=>{
                    alert("hasta otro dia !!")
                }
            ,2000)
        }

    }
,1000
)

}
cuentaRegresiva(tiempo)