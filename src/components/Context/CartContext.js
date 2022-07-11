import { createContext, useEffect, useState } from  "react";
import './CartContext.css';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito,setCarrito] = useState([]); 
    const [total,setTotal] = useState(0)
    const [cantidadActual,setCantidadActual] = useState(0);

    useEffect(()=> {   
        localStorage.setItem('cartProducts', JSON.stringify(carrito));
        }, [carrito]);
    

    const addCart = (item,seleccionado) => {
        setCarrito([...carrito,{...item,seleccionado}])
        setTotal(total + item.precio * seleccionado)
        setCantidadActual(cantidadActual + seleccionado)
        console.log("Funciona")

        const inCart = carrito.find(
                (productInCart) => productInCart.id === item.nanoId
            );
            if (inCart) {
                setCarrito(
                    carrito.map((productInCart) => {
                        if(productInCart.id === item.nanoId){
                            return {...inCart, stock:inCart.stock + 1};
                        } else return productInCart;
                    })
                )
            } else {
                setCarrito([...carrito, {...item}])
            }}

    const borrarProducto = idCart => {
        setCarrito(
            carrito.filter(item => item.id !== idCart)
        )
    }

    const vaciarCarrito=()=>{
        setCarrito([])
    }

    const valorDelProvider = {
        carrito,
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



