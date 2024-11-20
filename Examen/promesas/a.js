fetch("products.json")
.then(
    (response)=>{
        return response.json()
    }
)
.then(
    (data)=>{
        let datos = []
         datos = data.productos
        console.log(datos)
        let idUl = document.getElementById("idUl")
        datos.forEach(
            (producto) => {
                let li = document.createElement("li")
                li.innerHTML=`Producto: ${producto.Nombre} // Precio:${producto.Precio}`
                idUl.appendChild(li)
            }
        )
    }
)
.catch(
    (error)=>{
        console.log(error.message)
    }
)