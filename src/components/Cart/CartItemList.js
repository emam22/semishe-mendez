import React from 'react'
import Cart from './Cart'

export const CartItemList = ({cartItems}) => {
  return (
  <>
    {
    cartItems.map((cart) => {
        return <Cart key={cart.nanoId} prod={cart}/>
    })
    }
</>
  )
}
