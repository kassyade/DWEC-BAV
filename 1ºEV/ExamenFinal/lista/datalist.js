fetch("productos.json")
.then(
    (response)=>{
        response.json()
        console.log("Documento Json cargado correctamente")
    }
)
.then(
    (data)=>{
        
        let datos =    [
            {
                "producto": "Manzana",
                "descripcion": "Fruta fresca y crujiente",
                "precio": 0.50
            },
            {
                "producto": "Pan",
                "descripcion": "Pan integral horneado",
                "precio": 1.20
            },
            {
                "producto": "Leche",
                "descripcion": "Leche de vaca pasteurizada",
                "precio": 0.80
            },
            {
                "producto": "Arroz",
                "descripcion": "Arroz blanco de grano largo",
                "precio": 1.00
            },
            {
                "producto": "Azúcar",
                "descripcion": "Azúcar refinado blanco",
                "precio": 0.70
            },
            {
                "producto": "Aceite de oliva",
                "descripcion": "Aceite de oliva virgen extra",
                "precio": 4.50
            },
            {
                "producto": "Café",
                "descripcion": "Café molido natural",
                "precio": 3.20
            },
            {
                "producto": "Té verde",
                "descripcion": "Hojas de té verde orgánico",
                "precio": 2.50
            },
            {
                "producto": "Huevos",
                "descripcion": "Docena de huevos frescos",
                "precio": 2.10
            },
            {
                "producto": "Queso",
                "descripcion": "Queso manchego curado",
                "precio": 6.00
            },
            {
                "producto": "Yogur",
                "descripcion": "Pack de 4 yogures naturales",
                "precio": 2.40
            },
            {
                "producto": "Plátano",
                "descripcion": "Plátanos de Canarias",
                "precio": 1.30
            },
            {
                "producto": "Tomate",
                "descripcion": "Tomates maduros para ensalada",
                "precio": 2.00
            },
            {
                "producto": "Zanahoria",
                "descripcion": "Zanahorias frescas por kilo",
                "precio": 1.10
            },
            {
                "producto": "Pollo",
                "descripcion": "Pechuga de pollo fresca",
                "precio": 5.50
            }
          ]

          //campos
          let datalist =document.getElementById("productos")

          datos.forEach(
            (elemento)=>{
                let hijo =document.createElement("option")
                hijo.value=elemento.producto
                hijo.innerHTML=elemento.producto
                datalist.appendChild(hijo)
            }
          )

          let boton = document.getElementById("idBoton")
          let input = document.getElementById("productoInput")
          let ul = document.getElementById("productoList")
          let datosEnLista = []

          let p1 = document.getElementById("idElementos")
          let elementos =document.createElement("p")

          let p2 = document.createElement("p")
          

          let precioTotal

          let txtImporte = document.getElementById("idImporte")
          let importe=document.createElement("p")
          
          boton.addEventListener("click",
            ()=>{

                //console.log("boton pulsado ")
                let productoSeleccionado = input.value
                console.log(productoSeleccionado)
                input.value=""

                datos.forEach(
                    (elemento)=>{
                        if(productoSeleccionado==elemento.producto){
                            crearLi(elemento.producto,elemento.precio)
                            datosEnLista.push(productoSeleccionado)
                            precioTotal=+parseFloat(elemento.precio)
                        }
                    }
                )
                
                //resuen
                
              
                    elementos.innerHTML=""
                    elementos.innerHTML=datosEnLista.length
                    p1.appendChild(elementos)

                    importe.innerHTML=precioTotal
                    txtImporte.appendChild(importe)

            }
          )


          function crearLi(contenido,precio){
            let hijo = document.createElement("li")
            hijo.innerHTML=` <center>${contenido}- ${precio}$</center>`
            ul.appendChild(hijo)

            hijo.addEventListener("dblclick",
                ()=>{
           
                    ul.removeChild(hijo)
                    datosEnLista.pop(hijo)
                    datosEnLista.length-1
                    elementos.innerHTML=""
                    elementos.innerHTML=datosEnLista.length
                    p1.appendChild(elementos)

                }
            )
          }


    }
)
.catch(
    (error)=>{
        console.log(error.message)
        console.log("Eror al cargar los produtos del Json")
    }
)