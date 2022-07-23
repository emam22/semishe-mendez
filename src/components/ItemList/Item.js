import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';
import { Currency } from '../Products/FormatoDivisas';
import { FaCannabis } from "react-icons/fa";

function Item ({prod}) {
    const productoPrice = () => prod.price;
    return (
        <div className="card">
             <img src={prod.URLimage} alt={prod.title}/>
             <h1>{prod.title}.</h1>
             <p className="price"><FaCannabis/>  {Currency(productoPrice())}  <FaCannabis/></p>
             <p className="describe"> {prod.describe} </p>
             <Link to={`/item/${prod.nanoId}`}><button  className="counter">Realizar Compra  <FaCannabis/></button></Link>
        </div>
        )
}
export default Item;