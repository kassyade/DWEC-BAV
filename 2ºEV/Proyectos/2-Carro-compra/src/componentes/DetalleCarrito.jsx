import React from 'react';

const DetalleCarrito = ({productos ,detalles  }) => {

    

    return (
        <div>
            <h2>Detalles carrito</h2>

            <ul>
                {
                    productos.map(
                        (producto,index)=>{
                            
                            const detalle =detalles.find(  (x)=>x.nombre===producto   )


                            return(
                                <li key={index}>
                                    {detalle.nombre}
                                    {detalle.precio}
                                    <img src={detalle.url}  />
                                </li>
                            )
                        }


                    )
 
                           
                }
            </ul>


        </div>
    );
}

export default DetalleCarrito;
