import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import productsjson from '../Products/products.json'; 
import ItemDetail from './ItemDetail.js'; 
import callProducts from '../Products/promise';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
        const [product, setProduct] = useState();
        const {id} = useParams();
         
        useEffect(() => {
            callProducts(productsjson, id)
                .then((res) => setProduct(res))
                .catch((err) => console.log(err, "Producto no encontrado"));
        }, [id]);
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