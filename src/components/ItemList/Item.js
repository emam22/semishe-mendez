import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';
import { useSemillas } from '../../firebase/useSemillas';




function Item ( ) {
    const { dataSemi } = useSemillas();

    return (
    <>
        {
            dataSemi.map(item => (
                <div className="card">
                    <img src={item.image} alt={item.title}/>
                    <h1>{item.title}.</h1>
                    <p className="price"> -  ${item.price}  -</p>
                    <p className="describe"> {item.describe} </p>
                    <Link to={`/item/${item.id}`}><button  className="counter">Realizar Compra</button></Link>
                </div> 
        ))
        }
    </>
    )
}
export default Item;