let inputD = document.getElementById("idDeporte")
let inputS = document.getElementById("idSerie")
let inputP = document.getElementById("idPelicula")
let boton = document.getElementById("idBoton")

//divs
let divDeporte = document.getElementById("idDivDeporte")
let divSerie = document.getElementById("idDivSerie")
let divPelicula=document.getElementById("idDivPelicula")
//p
let pDeporte=document.getElementById("idPDeporte")
let pSerie=document.getElementById("idPSerie")
let pPelicula=document.getElementById("idPPelicula")


boton.addEventListener("click",
    ()=>{



        let deporte = inputD.value
        let serie = inputS.value
        let pelicula=inputP.value
        if(deporte && serie && pelicula){
            console.log(deporte)
            console.log(serie)
            console.log(pelicula)
            divDeporte.innerHTML=deporte
            divSerie.innerHTML=serie
            divPelicula.innerHTML=pelicula
            pDeporte.classList="azul"
            divDeporte.classList="verde"
        }else{
            console.log("introduce todos los datos")
        }


    }
)


