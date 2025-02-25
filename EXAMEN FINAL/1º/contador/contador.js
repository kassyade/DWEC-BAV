let x = prompt("Introduce el timepo de espera")
console.log("el contador inicia en",x)
let contador=setInterval(
    ()=>{
        console.log(x--)
        if(x<0){
            clearInterval(contador)
            setTimeout(
                ()=>{
                    console.log("contador finalizado")
                    alert("hasta la proxima")
                },2000
            )
        }
    },1000
)
