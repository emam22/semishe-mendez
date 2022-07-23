import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../Context/CartContext";
import { Currency } from '../Products/FormatoDivisas';
import { Link } from 'react-router-dom';


function Cart ({prod}) {    
    const { borrarProducto } = useContext(CartContext);
    const productoPrice = () => prod.price;
    return (
        <div key={prod.nanoId} className="order-item">
            <Link to={`/item/${prod.nanoId}`}><div className="cart-container">
                <img className="image" src={prod.URLimage} alt={prod.title} />
                <p className="title">{prod.title}.</p>           
                <p className="unidades">{prod.seleccionado} uds.</p>
                <p className="unprice"> {Currency(productoPrice())} </p> 
            </div></Link>
            <button className="btn420" onClick={() => { borrarProducto(prod.nanoId)}}><RiDeleteBin6Line/></button>
        </div>
    )
}
export default Cart;