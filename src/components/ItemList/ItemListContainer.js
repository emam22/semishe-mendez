import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import customFetch from '../Products/customFetch';
import products from '../Products/products';
import ItemList from '../ItemList/ItemList';
import portal from '../Error/img24.png';
import productsjson from '../Products/products.json'; 
import callProducts from '../Products/promise';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
        const [item, setItem] = useState([]);
        const [product, setProduct] = useState();
        const {id} = useParams();
        

        useEffect(() => {
            customFetch(3000, products)
            .then(resultado => setItem(resultado))
            
            callProducts(productsjson, id)
                .then((res) => setProduct(res))
                .catch((err) => console.log(err, "Producto no encontrado"));
        }, [id]);
        console.log(id, product);
        
    return (
    <section className='container'> 
                {
                item.length? <ItemList products={item}/> : <img className="img-portall" src={portal} alt="portall" />
            }
    </section>
        )
    }


export default ItemListContainer;


