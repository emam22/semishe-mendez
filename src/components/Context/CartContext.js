import { createContext, useEffect, useState } from  "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [total,setTotal] = useState(0)
    const [cantidadActual,setCantidadActual] = useState(0)
    
    const isInCart = (nanoId) => {
        return cartItems.some((item) => item.id === nanoId);
    }
    const addCart = (item,seleccionado) => {
        const newItem ={
            ...item,
            seleccionado,
        };
        if (isInCart(item.id)) {
            let product = cartItems.find((item) => item.id === newItem.id);
            product.seleccionado += newItem.seleccionado;
            let newCart = cartItems.map((item) => {
                if (item.id === newCart.id) {
                  return product;
                }
                return item;
        });        
        setCartItems(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));        
    }
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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }, [cartItems]);
    
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