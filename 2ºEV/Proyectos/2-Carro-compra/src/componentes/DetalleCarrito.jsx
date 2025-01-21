import React from 'react';
import '../estilos/DetalleCarritos.css';

const DetalleCarrito = ({ productos, detalles, precioTotal, productosCantidad }) => {

    // Función para contar cuántas veces se repite un producto
    const cantidadItem = (nombre) => {
        return productos.filter((producto) => producto === nombre).length;
    };

    // Crear un Map para almacenar productos únicos con sus cantidades
    const productosFinales = new Map();

    productos.forEach((producto) => {
        productosFinales.set(producto, cantidadItem(producto));
    });

    const totalCantidad = Array.from(productosFinales.values()).reduce((total, cantidad) => total + cantidad, 0);

    return (
        <div>
            <h2>Detalles carrito</h2>

            <ul>
                {Array.from(productosFinales.entries()).map(([nombre, cantidad]) => (
                    <li key={nombre}>
                        <b>Nombre:</b> {nombre} - <b>Cantidad:</b> {cantidad}
                    </li>
                ))}
            </ul>

            <div className="resumen-carrito">
                <p className="cantidad-productos">
                    <b>Cantidad de productos:</b> {totalCantidad}
                </p>
                <p className="precio-total">
                    <b>Precio total:</b> {precioTotal}$
                </p>
            </div>
        </div>
    );
}

export default DetalleCarrito;
