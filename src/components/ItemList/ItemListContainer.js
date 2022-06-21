import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import customFetch from '../Products/customFetch';
import products from '../Products/products';
import ItemList from '../ItemList/ItemList';


function ItemListContainer() {
        const [item, setItem] = useState([]);

        useEffect(() => {
            customFetch(3000, products)
            .then(resultado => setItem(resultado))
        }, [])
        
    return (
    <section className='container'> 
                {
                item.length? <ItemList products={item}/> : <span className='load'>Loading...</span> 
            }
    </section>
        )
    }


export default ItemListContainer;


