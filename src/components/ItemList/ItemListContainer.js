import  {React, useEffect, useState } from 'react';
import portal from '../Error/img24.png';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import ItemList from './ItemList';

function ItemListContainer() {
    const [dataSemis, setDataSemis] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const {categoryId } = useParams();

    useEffect(() => {
        
        
        if(!categoryId) {
            const semisheCollection = collection(db, "Semillas")
            const getData = getDocs(semisheCollection)

            getData
                .then(respuesta => setDataSemis(respuesta.docs.map(doc=>doc.data())))
                .catch(e => setError("Error"))
                .finally(() => setLoading(false))
            
        }else{
            const semisheCollection = collection(db, "Semillas")
            const miFiltro = query(semisheCollection,where("category","==",(categoryId)))
            const getData = getDocs(miFiltro)
            
            getData
                .then(respuesta => setDataSemis(respuesta.docs.map(doc=>doc.data())) )   
                .catch(error => setError( "Error al obtener los productos"))
                .finally(() => setLoading(false))
        }
    }, [categoryId])
    return (
    <section className='container'> 
                {
                    loading
                    ? <img className="img-portall" src={portal} alt={error} />
                    : <ItemList dataSemis={dataSemis}/> 
                }
    </section>
        )
    }


export default ItemListContainer;


