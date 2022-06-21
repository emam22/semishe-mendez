import React from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';





function ItemDetail ({title, price, image, description, stock,}) {
    // return (<h1>Lista</h1>)
    const onAdd = () => {
        console.log('Compraste ${} unidades.');
    }


    return (
        <div className="cardFlex">
             <img src={image} alt={title}/>
             {/* <h1>{title}.</h1> */}
             <p className="price"> -  ${price}  -</p>
             <p className="description"> {description} </p>
             <ItemCount className="itemCount" initial={1} stock={stock} onAdd={onAdd} />
        </div>
        )
}
export default ItemDetail;