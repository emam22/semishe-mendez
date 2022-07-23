import React, { useContext, useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import logo from '../Navbar/logo192.png';
import { Currency } from '../Products/FormatoDivisas';

function ItemDetail ({ prod }) {
    const { addCart } = useContext(CartContext);
    const [showCount, setShowCount] = useState(true);
    const [seleccionado, setSeleccionado] = useState(1);
    const productoPrice = () => prod.price;

    const onAdd = (quantity) => {
        setShowCount(false);
        setSeleccionado(quantity);
        addCart(prod, quantity);
    }

    return ( 
        <>
            {
                seleccionado &&
                   <main key={prod.nanoId} className='container1'>
                        <div className="cardFlex">
                            <img src={prod.URLimage} alt={prod.title}/>
                                <p className="price"> - {Currency(productoPrice())} - </p>
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
                                        <img className="cart-widget" src={logo} alt="logo" />  
                                        <p>Terminar Compra</p>
                                        <img className="cart-widget" src={logo} alt="logo" />  
                                    </Link>
                            }
                        </div>                
                    </main>
            }
        </>
    )
}
export default ItemDetail;