import React from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';


function ItemDetail ({title, price, image, description, stock,}) {
    const onAdd = () => {
        console.log('Compraste ${} unidades.');
    }


    return (
        <div className="cardFlex">
             <img src={image} alt={title}/>
             <p className="price"> -  ${price}  -</p>
             <p className="description"> {description} </p>
             <ItemCount className="itemCount" initial={1} stock={stock} onAdd={onAdd} />
        </div>
       
        )
}
export default ItemDetail;