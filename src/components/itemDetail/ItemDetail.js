import React, { useEffect, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../itemCount';


function ItemDetail ({title, price, image, description, stock,}) {
    const onAdd = ( ) => { 
        console.log('Compraste ${} unidades.');    
        this.setAddCart(( ) => {
            console.log('assa');
    }, 1500)
}

function TerminarCompra( ) {
    const [addCart, setAddCart] = useState();
        useEffect(() => {console.log(addCart)}, []);
        return (
        <>
            <button className='add'>Terminar Compra</button>
        </>
        )
}          

    return (
        <div className="cardFlex">
            <img src={image} alt={title}/>
            <p className="price"> -  ${price}  -</p>
            <p className="description"> {description} </p>
            
            {
                stock>=1
                ? <ItemCount className="itemCount" initial={1} stock={stock} onAdd={onAdd} />
                : <TerminarCompra/>
                
            }
            </div>
       
        )
}
export default ItemDetail;