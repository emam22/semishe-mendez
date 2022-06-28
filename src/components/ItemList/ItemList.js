import React from 'react';
import Item from './Item';


function ItemList ({products}) {
    return (
        products.map(p =>
            <Item
            key={p.id}
            {...p}
            title={p.title}
            image={p.image}
            price={p.price}
            describe={p.describe}
            stock={p.stock}
            description={p.description}
            category={p.category}
            {...p}
            />
            )
    )
}
export default ItemList;