import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import customFetch from '../Products/customFetch';
import products from '../Products/products';
import ItemList from '../ItemList/ItemList';
import portal from '../Error/img24.png';
import { useParams } from 'react-router-dom';
import { useSemillas } from '../../firebase/useSemillas';

function ItemListContainer() {
        const [items, setItems] = useState([]);
        const {categoryId} = useParams();

        useEffect(() => {
            if (categoryId) {
                useSemillas( categoryId)
                    .then((res) => setItems(res))
                    .catch((err) => console.log(err, "Producto no encontrado"));
            }else {
                customFetch(1500, products)
                    .then(resultado => setItems(resultado))
            }           
        }, [categoryId]);
        
    return (
    <section className='container'> 
                {
                    items.length 
                        ? <ItemList products={items}/> 
                        : <img className="img-portall" src={portal} alt="portall" />
                }
    </section>
        )
    }


export default ItemListContainer;


