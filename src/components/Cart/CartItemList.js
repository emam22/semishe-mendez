import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import Cart from './Cart'

export const CartItemList = () => {
  const { cartItems }  = useContext(CartContext);

  return (
    <>
      {
          cartItems.length > 0 && cartItems.map((cart, key) => {
              return <Cart key={key} prod={cart}/>
          })
      }
    </>
  )
}
