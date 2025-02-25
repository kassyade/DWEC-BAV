let select = document.getElementById("selectAutores")
let autores =[]
let tbody = document.getElementById("tbody")

fetch('./autores.json')
.then(
    (response)=>response.json())
.then(
    (a)=>{
        autores=a;
        autores.forEach((x) => {
            //console.log(x)
            crearElemento(select,"option",x.Autor)
        });        

    }
)
.catch(
    (e)=>console.log("error",e)
)



select.addEventListener("change",
    ()=>{
        //console.log(select.
        tbody.innerHTML=""

        autores.forEach(
            (a)=>{
                if(a.Autor===select.value){
                    let tr = document.createElement("tr")

                    crearElemento(tr,"td",a.Titulo)
                    crearElemento(tr,"td",a.Fecha)

                    tbody.appendChild(tr)
                }

            }
        )
         
    }
)







function crearElemento (padre,tipo,contenido){
let x = document.createElement(tipo)
x.innerHTML=contenido
padre.appendChild(x)
return x ;
}