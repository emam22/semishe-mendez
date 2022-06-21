import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import productsjson from '../Products/products.json'; 
import ItemDetail from './ItemDetail.js'; 
import callProducts from '../Products/promise';


function ItemDetailContainer() {
        const [product, setProduct] = useState();

        useEffect(() => {
            callProducts(productsjson, 2)
                .then((res) => setProduct(res))
                .catch((err) => console.log(err, "Producto no encontrado"));
        }, []);
        console.log(product);

    return (
    <section className='container1'> 
                {
                product? <ItemDetail {...product}/> : <span className='load'>Loading...</span> 

            }
    </section>
        )
    }


export default ItemDetailContainer;