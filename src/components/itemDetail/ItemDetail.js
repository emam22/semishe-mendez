import React, { useContext, useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

function ItemDetail ({ prod }) {
    const { addCart } = useContext(CartContext);
    const [showCount, setShowCount] = useState(true);
    const [seleccionado, setSeleccionado] = useState(1);

    const onAdd = (quantity) => {
        // console.log(quantity)
        setShowCount(false);
        setSeleccionado(quantity);
        addCart(prod, quantity);
        console.log(seleccionado);
        //console.log(addCart, "Click del Link/Boton")
    } 
    
    return ( 
        <>
            {
                prod &&
                   <section key={prod.nanoId} className='container1'>
                        <div className="cardFlex">
                            <img src={prod.URLimage} alt={prod.title}/>
                                <p className="price"> -  ${prod.price}  -</p>
                                <p className="description"> {prod.description} </p>
                                <ItemCount 
                                    className="itemCount" 
                                    initial={1} 
                                    stock={prod.stock}
                                    onAdd={onAdd}                 
                                />
                            {
                                !showCount && 
                                    <Link to="/cart" className='add-end' >
                                        <button className='add-end'>Terminar Compra</button>
                                    </Link>
                            }
                        </div>                
                    </section>
            }
        </>
    )
}
export default ItemDetail;