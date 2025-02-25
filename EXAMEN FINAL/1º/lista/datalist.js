let productos=[]
let dataList=document.getElementById("productos")
let input = document.getElementById("productoInput")
let lista = document.getElementById("productoList")
fetch('./productos.json')
.then(
    (response)=>response.json()

)
.then(
    (a)=>{
        productos=a;
       // console.log(productos)
       
        productos.forEach(
            (producto)=>{
                crearElemento(dataList,"option",producto.producto)
              }
)

    }
)



document.body.addEventListener(
    "keydown",(event)=>{
            if(event.key==="Enter"){
                //console.log("enter")
                let productoIntroducido=input.value
                //console.log(productoIntroducido)
                crearElemento(lista,"li",productoIntroducido)
                input.value=""


            }
    }
)




function crearElemento(padre,tipo,contenido){
let x= document.createElement(tipo)
x.innerHTML=contenido
padre.appendChild(x)

return x

}



