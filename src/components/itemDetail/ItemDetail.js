import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


function ItemDetail ({id, title, price, image, description, stock,}) {
    const {addCart} = useContext(CartContext);
    const [addsCart, setAddsCart] = useState();
    const [counter, setCounter] = useState(0);
    const onAdd = ( carrito, quantity ) => {   console.log(carrito, quantity);
            addCart({id, title, price, stock, image, quantity})
            setAddsCart({id,quantity})
           
        
}       
    return (
        <div key={id} className="cardFlex">
            <img src={image} alt={title}/>
            <p className="price"> -  ${price}  -</p>
            <p className="description"> {description} </p>
            {
                !addsCart
                ? <ItemCount className="itemCount" 
                counter={counter}
                setCounter={setCounter} 
                initial={0}  stock={stock} onAdd={onAdd} />
                : <Link to="/cart" className='add-end'><h3>Terminar Compra</h3></Link>
                
            }
        </div>       
        )
}
export default ItemDetail;