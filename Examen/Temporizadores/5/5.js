let boton = document.getElementById("idBoton")
let p = document.createElement("p")
let socios = []

function crearElemento (elemento,contenido,padre){
    let hijo = document.createElement(elemento)
    hijo.innerHTML=contenido
    padre.appendChild(hijo)
}

boton.addEventListener("click", 
    ()=>{
        let socio = prompt("introduce el nombre del nuevo socio")
        if(socio.trim() !=="" ){//trim para que quite los espacios en blanco 
            console.log(socio)
            socios.push(socio)
            console.log(`Socios :${socios}`)
            p.innerHTML=`Cantidad de socios :${socios.length}`
            document.body.appendChild(p)
            if(socios.length>=5){
                let contenedor = document.createElement("div")
                socios.forEach(
                    (nombre)=>{
                        crearElemento("p",`${nombre}`,contenedor)
                    }
                )
                document.body.appendChild(contenedor)

                let contenedor2 = document.createElement("div")
                socios.slice().reverse().forEach(
                    (nombre)=>{
                        crearElemento("p",`${nombre}`,contenedor)
                    }
                )
                document.body.appendChild(contenedor2)
            }

        }else{
            console.log("introduce un nombre")
        }
        
    }
)