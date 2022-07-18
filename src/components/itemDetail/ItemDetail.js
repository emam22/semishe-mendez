import React, { useContext, useState} from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount/ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

function ItemDetail ({ prod }) {
    const { addCart, cartItems } = useContext(CartContext);
    const [seleccionado, setSeleccionado] = useState();

    const onAdd = (unidadSeleccionada) => {
        if (unidadSeleccionada !== undefined) {
            setSeleccionado(unidadSeleccionada)
        }
        console.log(unidadSeleccionada)
    }    
    const handleEnd = () => {                        
        addCart(...prod, seleccionado,cartItems)
        console.log(addCart, "Click del Link/Boton")
    }
        console.log(cartItems)

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
                                    onClick={()=> {handleEnd(...prod,seleccionado,cartItems)}}                                    
                                /> 
                            {
                                seleccionado && 
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