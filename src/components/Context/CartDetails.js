import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import portal from '../Error/img24.png';
import { Link } from 'react-router-dom';

export const CartDetails = ({id, price, count}) => {
    
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
            cartItems
                ?   cartItems.map(item => (
                        <>
                            <div key={item.id} className="order-item">
                                    <img className="image" src={item.image} alt={item.title} />
                                    <p className="title">{item.title}.</p>
                                    <p className="unidades">{item.count}</p>
                                    <p className="unprice"> ${item.price} </p>
                                    <p className="untotalprice"> ${totalprice} </p>
                                    <button className="btn420" onClick={()=>{removerDelCarrito(item.id)}}>remove</button>
                            </div>
                            <div className="finished">            
                                <button className="btn420" onClick={vaciarCarrito}>Vaciar</button>
                                <button className="btn420, send">Finalizar</button>
                            </div>
                        </>
                    ))
                :   <>
                        <h5>No ha selecionado ningun producto</h5>
                        <Link to={`/`}><img className="img-portal" src={portal} alt="portal" /></Link>
                    </>
        }
    </section>
    )
}
