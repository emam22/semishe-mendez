import { createContext, useEffect, useState } from  "react";
import './CartContext.css';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(()=> {
        try {
            const productsEnLocalStorage = localStorage.getItem('cartProducts')
            return productsEnLocalStorage ? JSON.parse(productsEnLocalStorage) :[]; 
        } catch (error) {
            return [];
        }
    }); 

    useEffect(()=> {   
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
    }, [cartItems]);

    const addCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );
        if (inCart) {
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === product.id){
                        return {...inCart, stock:inCart.stock + 1};
                    } else return productInCart;
                })
            )
        } else {
            setCartItems([...cartItems, {...product}])
        }
    }

    const removerDelCarrito = (idProduct) => {
        setCartItems(
            cartItems.filter(item => item.id !== idProduct)
        )
    }

     const vaciarCarrito=()=>{
        setCartItems([])
    }

    return (       
        <CartContext.Provider 
            value={{cartItems, removerDelCarrito, addCart, vaciarCarrito, }}>

                {children}
        </CartContext.Provider>
    )
}


