import './itemCount.css';
import React from 'react';
import '../Products/products.json';
import '../itemDetail/ItemDetail';


export const ItemCount = ({ counter, setCounter, stock, onAdd}) => {


        const decrease = () => {
            setCounter(counter - 1);}
        const increase = () => {
            setCounter(counter + 1);}
    return (
        <>
        <div className="counter">
            <button className='num' disabled={counter <= 0} onClick={decrease}>-</button>
            <span className='num'>{counter}</span>
            <button className='num' disabled={counter >= stock} onClick={increase}>+</button>
            <div>
                <button className='add' disabled={stock <= 0} onClick={()=> onAdd(counter)}>Agregar al carrito</button>
            </div>
        </div>
        </>
    );
}

export default ItemCount;