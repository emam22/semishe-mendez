import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import productsjson from '../Products/products.json'; 
import ItemDetail from './ItemDetail.js'; 
import callProducts from '../Products/promise';
import { useParams } from 'react-router-dom';
import portal from '../Error/img24.png';


function ItemDetailContainer() {
        const [product, setProduct] = useState();
        const {id} = useParams();
         
        useEffect(() => {
            callProducts(productsjson, id)
                .then((res) => setProduct(res))
                .catch((err) => console.log(err, "Producto no encontrado"));
        }, [id]);
        console.log(id);

    return (
    <section className='container1'> 
            {
                product 
                ? <ItemDetail {...product}/> 
                : <img className="img-portalll" src={portal} alt="portall" />
            }
    </section>
        )
    }


export default ItemDetailContainer;