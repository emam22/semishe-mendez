import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../Context/CartContext";

function Cart ({cart}) {    
const { borrarProducto } = useContext(CartContext);
return (    
    <section className="order-list">       
        <div className="ref">
            <h5 className="title"> Producto</h5>
            <h5 className="unidades"> Unidades</h5>
            <h5 className="unprice"> Precio por unidad</h5>
            <h5 className="untotalprice"> Total a pagar</h5>
        </div> 
        <div key={cart.nanoId} className="order-item">
            <img className="image" src={cart.URLimage} alt={cart.title} />
            <p className="title">{cart.title}.</p>
            <p className="unidades">{cart.seleccionado}</p>
            <p className="unprice"> ${cart.price} </p>
            <p className="untotalprice"> ${cart.price * cart.seleccionado} </p>
            <button className="btn420" onClick={()=>{borrarProducto(cart.nanoId)}}><RiDeleteBin6Line/></button>
        </div>                      
    </section>
    )
}
export default Cart;