let tiempo =60

let intervalo =setInterval ( 
    ()=>{//funcion anonima 
        tiempo--
        console.log(`00:${tiempo}`)
        if(tiempo<=0){
            clearInterval(intervalo)
            console.log("tu tiempo termino ")
           // alert("tu tiempo ha terminado ")
        }
    }
    ,1000
)