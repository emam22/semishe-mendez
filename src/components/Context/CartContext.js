import { createContext, useState } from  "react";
import './CartContext.css';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {


    const [carrito, setCarrito] = useState(); 

    const addCart = (item) =>{
        setCarrito([item])
        console.log(item)
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
    
    return (       
        <CartContext.Provider 
            value=
            {{
                carrito, totalCantidad, removerDelCarrito, addCart, vaciarCarrito
            }}>

                {children}
        </CartContext.Provider>
    )
}




