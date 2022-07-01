import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const CartItem = ({title, price, image, count}) => {
    const quantity = count;
    const totalprice = parseFloat(price * quantity);

    const {carrito, vaciarCarrito, removerDelCarrito} = useContext(CartContext);

    return (
    <section className="order-list">
        <div className="ref">
                <h5 className="image"> </h5>
                <h5 className="title"> Producto</h5>
                <h5 className="unidades"> Unidades</h5>
                <h5 className="unprice"> Precio por unidad</h5>
                <h5 className="untotalprice"> Total a pagar</h5>
        </div>
        {
            carrito.map((product)=>(
                <div className="order-item">
                
                    <img className="image" src={image} alt={title} />
                    <p className="title">{title}.</p>
                    <p className="unidades">{quantity}</p>
                    <p className="unprice"> ${price} </p>
                    <p className="untotalprice"> ${totalprice} </p>
                    <button className="btn420" onClick={()=>{removerDelCarrito(product.id)}}>remove</button>
                </div>
            ))
        }
        <div>
            
            <button className="btn420" onClick={vaciarCarrito}>Vaciar</button>
            <button className="btn420">Finalizar</button>
        </div>

    </section>
    )
}