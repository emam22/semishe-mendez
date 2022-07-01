import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


function ItemDetail ({id, title, price, image, description, stock,}) {
    const {addCart, isInCart} = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    const onAdd = ( quantity ) => { 
        console.log(quantity, addCart);    
        if (counter > 0){
            isInCart({id, title, price, stock, image})
        }
}       
    return (
        <div key={id} className="cardFlex">
            <img src={image} alt={title}/>
            <p className="price"> -  ${price}  -</p>
            <p className="description"> {description} </p>
            {
                isInCart(id)
                ? <ItemCount className="itemCount" 
                counter={counter}
                setCounter={setCounter} stock={stock} onAdd={onAdd} />
                : <Link to="/cart" className='add-end'><h3>Terminar Compra</h3></Link>
                
            }
        </div>       
        )
}
export default ItemDetail;