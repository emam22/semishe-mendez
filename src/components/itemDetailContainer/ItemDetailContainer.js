import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import customFetch from '../Products/customFetch';
import products from '../Products/products';
import ItemDetail from './ItemDetail.js'; 


function ItemDetailContainer() {
        const [item, setItem] = useState([]);

        useEffect(() => {
            customFetch(3000, products)
            .then(resultado => setItem(resultado))
        }, [])
        
    return (
    
        <main className='container'> 
                {
                item?.length <= 0 ? <span className='load'>Loading...</span> : <ItemDetail products={ItemDetail}/>
            }
                </main>
        )
    }


export default ItemDetailContainer;