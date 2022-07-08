import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.js';
import portal from '../Error/img24.png';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig.js';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {
    const [dataSemis, setDataSemis] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        
        if(!id) {
        const semisheCollection = collection(db, "Semillas")
        const getData = getDocs(semisheCollection)

        getData
            .then(respuesta => setDataSemis(respuesta.docs.map(doc=>doc.data())))
            .catch(error => setError("Error al obtener los productos"))
            .finally(() => setLoading(false))
        
        }else{
        const semisheCollection = collection(db, "Semillas")
        const miFiltro = query(semisheCollection,where("id","==",(id)))
        const getData = getDocs(miFiltro)
     
        getData
            .then(respuesta => setDataSemis(respuesta.docs.map(doc=>doc.data())))   
            .catch(error => setError("Error al obtener los productos"))
            .finally(() => {console.log(error);setLoading(false)})
        }

    }, [id])

    return (
    <section className='container1'> 
            {
                dataSemis
                ? <ItemDetail {...doc}/> 
                : <img className="img-portall" src={portal} alt={loading} />
            }
    </section>
        )
    }


export default ItemDetailContainer;