import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import portal from '../Error/img24.png';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCartX, BsCashCoin, BsCurrencyBitcoin } from "react-icons/bs";
import { MdOutlinePayment, MdOutlineQrCode2 } from "react-icons/md";

export const CartDetails = () => {
    
    const {carrito, vaciarCarrito, borrarProducto, total} = useContext(CartContext);
       

    return (
    <>
        <section className="order-list">       
            <div className="ref">
                    <h5 className="title"> Producto</h5>
                    <h5 className="unidades"> Unidades</h5>
                    <h5 className="unprice"> Precio por unidad</h5>
                    <h5 className="untotalprice"> Total a pagar</h5>
            </div>     
            {
                carrito
                    ?   carrito.map(item => (
                            <div key={item.id} className="order-item">
                                    <img className="image" src={item.image} alt={item.title} />
                                    <p className="title">{item.title}.</p>
                                    <p className="unidades">{item.quantity}</p>
                                    <p className="unprice"> ${item.price} </p>
                                    <p className="untotalprice"> ${total} </p>
                                    <button className="btn420" onClick={()=>{borrarProducto(item.id)}}><RiDeleteBin6Line/></button>
                            </div>
                        ))      
                    :   <>
                            <h7>No ha selecionado ningun producto</h7>
                            <Link to={`/`}><img className="img-portal" src={portal} alt="portal" /></Link>
                        </>
            }
                                
        </section>
        <section className="finished">            
            <button className="empty" onClick={vaciarCarrito}><BsCartX/></button>
            <button className="btn420, send"><MdOutlinePayment/><BsCashCoin/><BsCurrencyBitcoin/><MdOutlineQrCode2/></button>
        </section>
    </>
    )
}
