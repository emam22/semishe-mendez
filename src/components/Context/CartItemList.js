import React from 'react';
import CartItem from './CartItem';


function CartItemList ({products}) {
    return (
        products.map((p) =>
            <CartItem
            key={p.id}
            title={p.title}
            image={p.image}
            price={p.price}
            stock={p.stock}
            category={p.category}
            quantity={p.quantity}
            isInCart={p.isInCart}
            id={p.id}
            />
            )
    )
}
export default CartItemList;