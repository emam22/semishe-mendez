import React from "react";
import './Item.css';
import ItemCount from '../itemCount';




function Item ({title, price, image, describe, stock,}) {
    // return (<h1>Lista</h1>)
    const onAdd = (quantity) => {
        console.log('Compraste ${quantity} unidades.');
    }

    return (
        <div className="card">
             <img src={image} alt={title}/>
             <h1>{title}.</h1>
             <p className="price"> -  ${price}  -</p>
             <p className="describe"> {describe} </p>
             <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </div>
        )
}
export default Item;