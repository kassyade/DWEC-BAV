import React from 'react';
import '../estilos/DetalleCarritos.css';

const DetalleCarrito = ({productos ,detalles  }) => {

    

    return (
        <div>
            <h2>Detalles carrito</h2>

            <ul>
  {productos.map((producto, index) => {
    const detalle = detalles.find((x) => x.nombre === producto);
    return (
      <li key={index}>
        <div>
          <h3><b>Nombre: </b>{detalle.nombre}</h3>
          <p> <b>Precio: </b>{detalle.precio}$</p>
        </div>
        <img src={detalle.url} alt={detalle.nombre} />
      </li>
    );
  })}
</ul>



        </div>
    );
}

export default DetalleCarrito;
