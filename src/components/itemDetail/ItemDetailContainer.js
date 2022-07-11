import React, { useContext, useEffect, useState } from 'react';
import portal from '../Error/img24.png';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig.js';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartContext.js';
import ItemCount from '../itemCount/index.jsx';
import './ItemDetail.css';


function ItemDetailContainer() {

    const [dataSemis, setDataSemis] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const { addCart, carrito } = useContext(CartContext);
    const { nanoId } = useParams()
    const [seleccionado, setSeleccionado] = useState(false);

    useEffect(() => {

        const semisheCollection = collection(db, "Semillas")
        const miFiltro = query(semisheCollection,where("nanoId","==",(nanoId)))
        const getData = getDocs(miFiltro)     
        getData
            .then(respuesta => setDataSemis(respuesta.docs.map(doc=>doc.data())))   
            .catch((error) => setError("Error al obtener los productos"))
            .finally(() => setLoading(false))
    }, [nanoId])

    const onAdd = (unidadSeleccionada) => {
        if (unidadSeleccionada !== undefined) {
          setSeleccionado()
        }
        console.log(unidadSeleccionada)
      }
    
    const handleEnd = (e) => {      
            e.preventDefault()
            addCart(dataSemis,seleccionado)
            
            
            console.log("Click del Link/Boton")
    }

if (loading) {  return<img className="img-portall" src={portal} alt={error} />
} else{
    return ( 
    <>
        {           
        dataSemis.map((item) => (  
            <section key={item.nanoId} className='container1'>
                <div className="cardFlex">
                    <img src={item.URLimage} alt={item.title}/>
                    <p className="price"> -  ${item.price}  -</p>
                    <p className="description"> {item.description} </p>
                    <ItemCount className="itemCount" initial={1} stock={item.stock} onAdd={onAdd} onClick={() => handleEnd({addCart, dataSemis, seleccionado})}/> 
                    {
                    !seleccionado
                        ? <><Link to="/cart" className='add-end' >
                                <button className='add-end'>Terminar Compra</button>
                        </Link></>   
                        : null 
                    }
                </div>                
            </section>
            ))
        }
    </>
    )
}
}      


export default ItemDetailContainer;