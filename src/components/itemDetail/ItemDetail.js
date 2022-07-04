import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';


function ItemDetail ({id, title, price, image, description, stock, setCount}) {
    const {addCart} = useContext(CartContext);
    const [addsCart, setAddsCart] = useState();
    const onAdd = () => {console.log(addsCart);
}       
    return (
        <div key={id} className="cardFlex">
            <img src={image} alt={title}/>
            <p className="price"> -  ${price}  -</p>
            <p className="description"> {description} </p>
            {
            !setAddsCart
                ?  <>                    
                    <Link onClick={() => addCart(id, title, price, image, description, stock, setCount)} to="/cart" className='add-end'>
                    <button className='add-end'>Terminar Compra</button>
                    </Link>
                    <p className='quantity'> Has elegido {setCount} unidades de semillas</p>
                    </>
                :<ItemCount className="itemCount" initial={0}  stock={stock} onClick={()=> onAdd}/>  
            }
        </div>       
        )
}
export default ItemDetail;