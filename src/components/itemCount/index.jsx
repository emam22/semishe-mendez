import './itemCount.css';
import React, {useState, useEffect} from 'react';
import '../Products/products';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }
    useEffect (() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <>
        <div className="counter">
            <button className='num' disabled={count <= 1} onClick={decrease}>-</button>
            <span className='num'>{count}</span>
            <button className='num' disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button className='add' disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
        </>
    );
}

export default ItemCount;