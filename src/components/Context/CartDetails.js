import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import portal from '../Error/img24.png';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCartX, BsCashCoin, BsCurrencyBitcoin } from "react-icons/bs";
import { MdOutlinePayment, MdOutlineQrCode2 } from "react-icons/md";

export const CartDetails = () => {
    
    const {carrito, vaciarCarrito, borrarProducto, total} = useContext(CartContext);
    const handleClick = () => {        
        console.log('COMPRA FUE EXITOSA')
        alert('COMPRA FUE EXITOSA');
    }

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
                            <div key={item.nanoId} className="order-item">
                                    <img className="image" src={item.URLimage} alt={item.title} />
                                    <p className="title">{item.title}.</p>
                                    <p className="unidades">{item.seleccionado}</p>
                                    <p className="unprice"> ${item.price} </p>
                                    <p className="untotalprice"> ${item.price * item.seleccionado} </p>
                                    <button className="btn420" onClick={()=>{borrarProducto(item.nanoId)}}><RiDeleteBin6Line/></button>
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
            <p>Total : ${total}</p>
            <button className="btn420, send" onClick={handleClick}><MdOutlinePayment/><BsCashCoin/><BsCurrencyBitcoin/><MdOutlineQrCode2/></button>
        </section>
    </>
    )
}
