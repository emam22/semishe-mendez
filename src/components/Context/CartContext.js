import { createContext, useEffect, useState } from  "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [total,setTotal] = useState(0)
    const [itemTotal, setItemTotal] = useState(0);
    const [cantidadActual,setCantidadActual] = useState(0)
    
    const isInCart = (nanoId) => {
        return cartItems.some((item) => item.nanoId === nanoId);
    }
    

    const addCart = (item, seleccionado) => {
        console.log(item.price, seleccionado, total,itemTotal);
        let newCart;

        const newItem ={
            ...item,
            seleccionado,
        };

        if (isInCart(newItem.nanoId)) {
            let product = cartItems.find((item) => item.nanoId === newItem.nanoId);

            product.seleccionado += newItem.seleccionado;

            newCart = cartItems.map(item => {
                if (item.nanoId === newItem.nanoId) {
                  return product;
                }

                return item;
            });
            localStorage.setItem("cart", JSON.stringify(newCart)); 
            setItemTotal(item.price * seleccionado)       
            setTotal(total + itemTotal)
            setCantidadActual(cantidadActual + seleccionado)
        } else {
            if (seleccionado > 0) {
                setCartItems((prevState) => [...prevState, newItem]);
            }   
        }

    };
    

    const borrarProducto = (idProduct) => {
        setCartItems(
            cartItems.filter(item => item.nanoId !== idProduct)
        )
    }

    const vaciarCarrito = ( ) => {
        setCartItems([])
    }

    useEffect( ( ) => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }, [cartItems]);

    return (       
        <CartContext.Provider 
            value={{
                cartItems,
                borrarProducto,
                addCart,
                total,
                vaciarCarrito
            }}>
                {children}
        </CartContext.Provider>
    )
}