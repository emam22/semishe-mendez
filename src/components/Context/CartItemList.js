import React from 'react';
import CartItem from './CartItem';


function CartItemList ({carrito}) {
    return (
        carrito.map(p =>
            <CartItem
            key={p.id}
            {...p}
            title={p.title}
            image={p.image}
            price={p.price}
            stock={p.stock}
            category={p.category}
            {...p}
            quantity={p.quantity}
            isInCart={p.isInCart}
            />
            )
    )
}
export default CartItemList;