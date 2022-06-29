import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';
import {Link} from 'react-router-dom';


function ItemDetail ({title, price, image, description, stock,}) {
    const [addCart, setAddCart] = useState(false);
    const onAdd = ( ) => { 
        console.log('Compraste ${} unidades.');    
        setAddCart(true);
}       

    return (
        <div className="cardFlex">
            <img src={image} alt={title}/>
            <p className="price"> -  ${price}  -</p>
            <p className="description"> {description} </p>
            
            {
                !addCart
                ? <ItemCount className="itemCount" initial={1} stock={stock} onAdd={onAdd} />
                : <Link to="/cart" className='add-end'>Terminar Compra</Link>
                
            }
            </div>       
        )
}
export default ItemDetail;