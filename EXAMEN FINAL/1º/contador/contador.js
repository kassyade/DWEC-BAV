let x = prompt("introduce el inicio del contador")
console.log("la cuenta inicia",x)
let id = setInterval(
    ()=>{
        console.log(x--)
        if(x<0){
            clearInterval(id)
            console.log("cuenta terminada")
            setTimeout(
                ()=>{
                    alert("la cuenta termino gil ")
                },2000
            )
        }
    },1000
)