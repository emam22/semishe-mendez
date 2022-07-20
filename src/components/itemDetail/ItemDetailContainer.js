import React, { useEffect, useState } from 'react';
import portal from '../Error/img24.png';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig.js';
import { useParams } from 'react-router-dom';
import './ItemDetail.css';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {    
    const [dataSemis, setDataSemis] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const { nanoId } = useParams()

    useEffect(() => {
        const semisheCollection = collection(db, "Semillas")
        const miFiltro = query(semisheCollection,where("nanoId","==",(nanoId)))
        const getData = getDocs(miFiltro)     
        getData
            .then(respuesta => setDataSemis(respuesta.docs.map(doc=>doc.data())))   
            .catch((error) => setError("Error al obtener los productos"))
            .finally(() => setLoading(false))
    }, [nanoId])

    if (loading) return <img className="img-portall" src={portal} alt={error} />

    return ( 
        <>
            <section className='container1'>
                <ItemDetail prod={dataSemis[0]}/>           
            </section>
        </>
    )
}

export default ItemDetailContainer;