import '../estilos/cuerpo.css';

// Datos de imágenes
const imageUrls = [
  { url: "./imagenes/manzana.jpg", nombre: "Manzana", precio: 5 },
  { url: "./imagenes/pera.jpg", nombre: "Pera", precio: 7 },
  { url: "./imagenes/limon.jpg", nombre: "Limon", precio: 4 }

];

// Componente ListaImagenes
const Cuerpo = ({ total, setTotal, productos, setProductos }) => {

  const AnadirProducto = (nombre, precio) => {
    setTotal(total + precio); // Actualiza el total
    setProductos([...productos, nombre]); // Añade el producto al carrito
  };

  return (
    <div className="container">
      {imageUrls.map((item, index) => {
        return (
          <div className="rojo" key={index}>
            <img src={item.url} alt="imagen" />
            <h3>{item.nombre}</h3>
            <p>Precio: {item.precio} Euros</p>
            <button onClick={() => AnadirProducto(item.nombre, item.precio)}>
              Añadir al carrito
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cuerpo;
