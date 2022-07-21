import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import Cart from './Cart'

export const CartItemList = () => {
  const { cartItems }  = useContext(CartContext);

  return (
    <>
      <div className="ref">
          <h5 className="title"> Producto</h5>
          <h5 className="unidades"> Unidades</h5>
          <h5 className="unprice"> Precio por unidad</h5>
      </div> 
      {
          cartItems.length > 0 && cartItems.map((cart, key) => {
              return <Cart key={key} prod={cart}/>
          })
      }
    </>
  )
}
