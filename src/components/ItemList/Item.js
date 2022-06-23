import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';




function Item ( {title, price, image, describe, id} ) {
    return (
        <div className="card">
             <img src={image} alt={title}/>
             <h1>{title}.</h1>
             <p className="price"> -  ${price}  -</p>
             <p className="describe"> {describe} </p>
             <Link to={`/item/${id}`}><button  className="counter">Realizar Compra</button></Link>
        </div>
        )
}
export default Item;