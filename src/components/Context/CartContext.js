import { createContext, useState } from  "react";
import './CartContext.css';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(); 

    const addCart = (products) =>{
        setCarrito([...carrito, products])
        console.log(carrito)
    }
    const vaciarCarrito=()=>{
        setCarrito([])
    }
    const removerDelCarrito=(id)=>{
        setCarrito(carrito.filter(p => p.id !== id))
    }
    const totalCantidad = () => {
        return carrito.reduce((acc, p)=>acc + p.counter, 0)
    }
    const isInCart = (id) => {
        return carrito.some ((prod) => prod.id === id)}
    
    return (       
        <CartContext.Provider 
            value=
            {{
                carrito, isInCart, totalCantidad, removerDelCarrito, addCart, vaciarCarrito
            }}>

                {children}
        </CartContext.Provider>
    )
}




