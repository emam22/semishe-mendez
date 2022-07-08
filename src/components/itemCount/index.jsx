import './itemCount.css';
import React, { useState, } from 'react';



export const ItemCount = ({ initial, onAdd, ...prod}) => {
    const [count, setCount] = useState(initial);
        const decrease = () => {
            setCount(count - 1);}
        const increase = () => {
            setCount(count + 1);}
    const handleConfirm = () => {
        onAdd(count)
    }
    
    return (
        <>
        <div className="counter">
            <button className='num' disabled={count <= initial} onClick={decrease}>-</button>
            <span className='num'>{count}</span>
            <button className='num' disabled={count >= prod.stock} onClick={increase}>+</button>
            <div>
                <button className='add' disabled={prod.stock <= 0} onClick={handleConfirm}>Agregar al carrito</button>
            </div>
        </div>
        </>
    );
}

export default ItemCount;