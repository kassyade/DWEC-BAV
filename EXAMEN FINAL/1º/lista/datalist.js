let productos = [];
fetch('./productos.json')
.then((response)=> response.json())
.then(
    (data)=>{
    productos=data
    console.log(productos)
    agregarProductosAlDatalist(); // Llamamos a la función una vez que tenemos los datos

    }
)


function agregarProductosAlDatalist() {
    let productosLista = document.getElementById("productos");

    productos.forEach((producto) => {
        crearElemento(productosLista, "option", producto.producto);
    });
}




function crearElemento(padre, tipo, contenido){
    let elemento = document.createElement(tipo)
    elemento.innerHTML = contenido
    padre.appendChild(elemento)
    return elemento
}



let input = document.getElementById("productoInput")
console.log(input)