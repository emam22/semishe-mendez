import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import portal from '../Error/img24.png';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsCartX, BsCashCoin, BsCurrencyBitcoin } from "react-icons/bs";
import { MdOutlinePayment, MdOutlineQrCode2 } from "react-icons/md";
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

export const CartDetails = (...dataSemis) => {
    
    const {carrito, vaciarCarrito, borrarProducto, total} = useContext(CartContext);
    const handleClick = () => { 
        const orden = {
            buyer : {
                nombre : "Berlin",
                telefono : "4545454545",
                email : "berlin@gmail.com"
            },
            items : carrito,
            date : serverTimestamp(),
            total : total            
        }    
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)

        pedido
        .then(res=>{
            console.log(res.id)
        })
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
                    ?   carrito.map(cart => (
                            <div key={cart.nanoId} className="order-item">
                                    <img className="image" src={cart.URLimage} alt={cart.title} />
                                    <p className="title">{cart.title}.</p>
                                    <p className="unidades">{cart.seleccionado}</p>
                                    <p className="unprice"> ${cart.price} </p>
                                    <p className="untotalprice"> ${cart.price * cart.seleccionado} </p>
                                    <button className="btn420" onClick={()=>{borrarProducto(cart.nanoId)}}><RiDeleteBin6Line/></button>
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
