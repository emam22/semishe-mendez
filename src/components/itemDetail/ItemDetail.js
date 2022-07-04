import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


function ItemDetail ({id, title, price, image, description, stock, count, productInCart}) {
    const { addCart, inCart } = useContext(CartContext);
    
    const getStock = (count) => {
        const quantity = count;
        addCart({id, title, price, image, description, stock, quantity})
    }

    return (
        <div key={id} className="cardFlex">
            <img src={image} alt={title}/>
            <p className="price"> -  ${price}  -</p>
            <p className="description"> {description} </p>
            {
            inCart === productInCart
                ? <ItemCount className="itemCount" initial={0} stock={stock} getStock={getStock} onClick={() => addCart({id, title, price, image, description, stock, count})}/>    
                :<>                    
                <Link to="/cart" className='add-end'>
                <button className='add-end'>Terminar Compra</button>
                </Link>
                <p className='quantity'> Has elegido {count} unidades de semillas</p>
            </>
            }
        </div>       
        )
}
export default ItemDetail;