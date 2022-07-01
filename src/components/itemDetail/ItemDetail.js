import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';
import {Link} from 'react-router-dom';
function ItemDetail ({id, title, price, image, description, stock,}) {
    const {addCart, isInCart} = useContext;
    const [counter, setCounter] = useState(false);
    const onAdd = ( quantity ) => { 
        console.log(quantity, isInCart);    
        if (counter > 0){
            addCart({id, title, price, stock, image})
        }
}       
    return (
        <div key={id} className="cardFlex">
            <img src={image} alt={title}/>
            <p className="price"> -  ${price}  -</p>
            <p className="description"> {description} </p>
            {
                !isInCart
                ? <ItemCount className="itemCount" 
                counter={counter}
                setCounter={setCounter} stock={stock} onAdd={onAdd} />
                : <Link to="/cart" className='add-end'><h3>Terminar Compra</h3></Link>
                
            }
        </div>       
        )
}
export default ItemDetail;