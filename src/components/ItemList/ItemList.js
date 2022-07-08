import React from 'react';
import Item from './Item';


function ItemList ({dataSemis}) {
    return (
    <>
        {
        dataSemis.map((prod) => {
            return <Item key={prod.title} prod={prod}/>
        })
        }
    </>
    )
}
export default ItemList;