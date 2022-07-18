import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from "../Context/CartContext";

function Cart ({prod}) {    
const { borrarProducto } = useContext(CartContext);
return (    
    <section className="order-list">       
        <div className="ref">
            <h5 className="title"> Producto</h5>
            <h5 className="unidades"> Unidades</h5>
            <h5 className="unprice"> Precio por unidad</h5>
            <h5 className="untotalprice"> Total a pagar</h5>
        </div> 
        <div key={prod.nanoId} className="order-item">
            <img className="image" src={prod.URLimage} alt={prod.title} />
            <p className="title">{prod.title}.</p>
            <p className="unidades">{prod.seleccionado}</p>
            <p className="unprice"> ${prod.price} </p>
            <p className="untotalprice"> ${prod.price * prod.seleccionado} </p>
            <button className="btn420" onClick={()=>{borrarProducto(prod.nanoId)}}><RiDeleteBin6Line/></button>
        </div>                      
    </section>
    )
}
export default Cart;