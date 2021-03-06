import { createContext, useEffect, useState } from  "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [cantidadActual,setCantidadActual] = useState(0)
    const [cartForm, setCartForm] = useState([]);
    
    const isInCart = (nanoId) => {
        return cartItems.some((item) => item.nanoId === nanoId);
    }
     const totalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.seleccionado, 0);
    };
    const clearCart = () => {
        setCartForm([]);
        setCantidadActual(0);
        setCartItems([]);
    }

    const cartCheckout = (orderId) => {
        toast.success("Congratulations! Your purchase has been completed! The order id is: " + orderId, { autoClose: false, });
        clearCart();
    }
        
    const addCart = (item, seleccionado) => {
        let newCart;

        const newItem ={
            ...item,
            seleccionado,
            cartForm
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
           
     
            setCantidadActual(cantidadActual + seleccionado) 
            localStorage.setItem("cart", JSON.stringify(newCart)); 
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
                vaciarCarrito,
                totalPrice,
                cartCheckout,
                clearCart,
            }}>
                {children}
        </CartContext.Provider>
    )
}