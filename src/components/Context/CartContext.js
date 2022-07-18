import { createContext, useState } from  "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(["No hay productos"]);
    const [total,setTotal] = useState(0)
    const [cantidadActual,setCantidadActual] = useState(0)
    
    const addCart = (item,seleccionado) => {
        const changedCart = [
            ...cartItems,
            {...item,seleccionado},
        ]
        setCartItems(changedCart);
        setTotal(total + item.precio * seleccionado)
        setCantidadActual(cantidadActual + seleccionado)
        console.log("Funciona")
    }

    const borrarProducto = (idProduct) => {
        setCartItems(
            cartItems.filter(item => item.id !== idProduct)
        )
    }
    const vaciarCarrito=()=>{
        setCartItems([])
    }

    const valorDelProvider = {
        cartItems,
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