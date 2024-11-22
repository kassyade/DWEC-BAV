class producto{

    constructor(nombre,precio,stock){//constructor para productos 
    this.nombre= nombre;
    this.precio=precio;
    this.stock=stock;
    }
};
let teclado= new producto('teclado',50,150);
let raton = new producto('raton',20,50);
let pantalla = new producto('pantalla',200,20);

/*console.log(teclado.nombre);*/
/** PARTE PARA MOSTRAR LOS DATOS */
function crearElemento(tipo,contenido,padre){
let hijo = document.createElement(tipo)
hijo.innerHTML = contenido 
padre.appendChild(hijo)
}
crearElemento("h1","Bienvenido a la tienda ",document.body)
crearElemento("h2","Productos",document.body);


