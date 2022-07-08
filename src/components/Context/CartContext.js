import { createContext, useState } from  "react";
import './CartContext.css';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [cantidadActual,setCantidadActual] = useState(0)

    const addCart = (item,cantidad) => {
        setCarrito([...carrito,{...item,cantidad}])
        setTotal(total + item.precio * cantidad)
        setCantidadActual(cantidadActual + cantidad)
        console.log("Funciona")
    }

    const borrarProducto = id => {
        console.log("Borrando desde el provider",id)
        console.log(id)
        setCarrito(
            carrito.filter(item => item.id !== id)
        )
    }

    const vaciarCarrito=()=>{
        setCarrito([])
    }

    const valorDelProvider = {
        carrito ,
        borrarProducto,
        addCart,
        total,
        vaciarCarrito
    }

    return (       
        <CartContext.Provider 
            value={{valorDelProvider}}>

                {children}
        </CartContext.Provider>
    )
}


