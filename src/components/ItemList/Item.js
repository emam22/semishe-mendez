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
             <button className="counter" >Realizar Compra</button>
        </div>
        )
}
export default Item;