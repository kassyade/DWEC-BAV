import '../estilos/cuerpo.css';
// Componente ListaImagenes
const ListaImagenes = ({ total, setTotal , productos, setProductos ,imagenes}) => {
  

  const AnadirProducto = (nombre, precio) => {    
    setTotal(total + precio); // Actualiza el total
    //añade el producto en el array de productos seleccionados 
    setProductos([...productos, nombre]);
    //console.log(productos)
   
  };

  return (
    <div className="container">
      {imagenes.map((item, index) => (
        <div key={index}>
          <img src={item.url} alt="imagen" />
          <h3>{item.nombre}</h3>
          <p>Precio: {item.precio} Euros</p>
          <button onClick={() => AnadirProducto(item.nombre, item.precio)}>
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaImagenes;
