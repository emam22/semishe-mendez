import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { validarForm } from "./validarForm";
import { Navigate } from "react-router-dom";
import { collection, Timestamp, getDocs, writeBatch, query, where, documentId, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Swal from "sweetalert";
import './Form.css';
import rick12 from "./img87.jpg";
export const Form = () => {

    const { cartItems, vaciarCarrito, totalPrice}  = useContext(CartContext);

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.title]: e.target.value            
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!validarForm(values)){return}
        const orden = {
            buyer: {...values},
            items: cartItems,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)
        const q = query(pedido, where(documentId(), 'in', cartItems.map(ped => ped.id)))

        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc)=>{
            const itemToUpdate = cartItems.find((prod)=> prod.id === doc.id)

            if(doc.data().stock >= itemToUpdate.selecionado){
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.selecionado
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if(outOfStock.length===0){
            addDoc(ordenesCollection, orden)
            .then((res)=>{
                batch.commit()
                
                Swal.fire({
                    icon: 'success',
                    title: 'Su orden ha sido registrada',
                    text: `Su numero de orden es ${res.id}`
                })
                vaciarCarrito()
            }) 
        }else{
            Swal.fire({
                icon: 'error',
                title: 'No hay stock de los siguientes productos: ',
                text: outOfStock.map(ped=> ped.title).join(', ')
            })
        }
    }

    return(
        <>
            {
            cartItems.length === 0
            ? <Navigate to="/"/>
            :
            <main class="contenedor-form">
                <h3 class="centrar-texto">Completa el formulario para realizar el pedido.</h3>
        
                <div class="contacto-bg"></div>
                <hr/>
                    <form class="formulario" onSubmit={handleSubmit}>                        
                        <div class="campo">
                        <img className="img-rick" src={rick12} alt="rick" />
                            <input
                                onChange={handleInputChange}
                                className="campo__field"
                                type="text" 
                                placeholder="Tu Nombre" 
                                value = {values.nombre}    
                            />
                            <input
                                onChange={handleInputChange}
                                className="campo__field"
                                value = {values.apellido}
                                placeholder="Tu Apellido"    
                            />
                            <input
                                onChange={handleInputChange}
                                className="campo__field"
                                type="email" 
                                placeholder="Tu E-mail" 
                                name = "email"
                                value = {values.email}
                            />
                            <button type="submit" className="send">Enviar</button>
                        </div>
                    </form>        
            </main>
            }   
         </>
    )
}