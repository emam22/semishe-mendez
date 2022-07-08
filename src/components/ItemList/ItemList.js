import React from 'react';
import { useSemillas } from '../../firebase/useSemillas';
import Item from './Item';


function ItemList () {
    const { dataSemi } = useSemillas();
    return (
    <>
        {
        dataSemi.map(item => (
            <Item
            {...item}
            />
        ))
        }
    </>
    )
}
export default ItemList;