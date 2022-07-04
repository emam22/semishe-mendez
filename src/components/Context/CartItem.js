import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const CartItem = ({id, title, price, image, count}) => {
    
    const {cartItems, vaciarCarrito, removerDelCarrito} = useContext(CartContext);
    const totalprice = parseFloat(price * count);  
    

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
        !cartItems
        ?<><div key={id} className="order-item">
                
                    <img className="image" src={image} alt={title} />
                    <p className="title">{title}.</p>
                    <p className="unidades">{count}</p>
                    <p className="unprice"> ${price} </p>
                    <p className="untotalprice"> ${totalprice} </p>
                    <button className="btn420" onClick={()=>{removerDelCarrito(cartItems.id)}}>remove</button>
        </div>
        <div className="finished">            
            <button className="btn420" onClick={vaciarCarrito}>Vaciar</button>
            <button className="btn420, send">Finalizar</button>
        </div></>
        : <h5>No ha selecionado ningun producto</h5>
        }
    </section>
    )
}