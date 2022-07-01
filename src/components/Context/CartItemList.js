import React from 'react';
import CartItem from './CartItem';


function CartItemList ({products}) {
    return (
        products.map((p) =>
            <CartItem
            {...p}
            />
            )
    )
}
export default CartItemList;