import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';

function Item ({prod}) {
    return (
        <div className="card">
             <img src={prod.URLimage} alt={prod.title}/>
             <h1>{prod.title}.</h1>
             <p className="price"> -  ${prod.price}  -</p>
             <p className="describe"> {prod.describe} </p>
             <Link to={`/item/${prod.nanoId}`}><button  className="counter">Realizar Compra</button></Link>
        </div>
        )
}
export default Item;