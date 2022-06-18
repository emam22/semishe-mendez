import React from "react";
import './Item.css';




function Item ({title, price, image, describe,}) {
    // return (<h1>Lista</h1>)

    return (
        <div className="card">
             <img src={image} alt={title}/>
             <h1>{title}.</h1>
             <p className="price"> -  ${price}  -</p>
             <p className="describe"> {describe} </p>
             <h3 className="counter">Realizar Compra</h3>
        </div>
        )
}
export default Item;