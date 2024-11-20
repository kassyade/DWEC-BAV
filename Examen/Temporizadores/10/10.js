let boton = document.getElementById("idBoton")
let input = document.getElementById("idNumero")

const prefijos = [
{lugar :"Granada",numero:"958"},
{lugar :"Almeria",numero:"957"},
{lugar :"Jaen",numero:"956"},
{lugar :"Cordoba",numero:"955"}
]

boton.addEventListener("click",
    ()=>{
        let encontrado = false
        let numero = input.value.slice(0,3)
        console.log(numero)
        prefijos.forEach(
            (usuario)=>{
                if(usuario.numero==numero){
                    console.log(`el usuario es de :${usuario.lugar}`)
                    encontrado=true
                }

            }
        )

        if(!encontrado){
            console.log("usuario no encontrado")
        }

        input.value=""
    }
)