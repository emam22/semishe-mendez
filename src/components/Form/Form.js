import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Navigate } from "react-router-dom";
import { collection, Timestamp, getDocs, writeBatch, query, where, documentId, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import './Form.css';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

import validator from "validator";

export const Form = () => {

    const { cartItems, totalPrice, clearCart, cartCheckout}  = useContext(CartContext);

    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyerEmailConf, setBuyerEmailConf] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validEmailConf, setValidEmailConf] = useState(false);
    const [validPhone, setValidPhone] = useState(false);

    const handleNameChange = (e) => {
        setBuyerName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setBuyerEmail(e.target.value);
    }

    const handleEmailConfChange = (e) => {
        setBuyerEmailConf(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setBuyerPhone(e.target.value);
    }

    useEffect(() => {
        setValidName(validator.isAlpha(buyerName, "es-ES", { ignore: " " }));
        setValidEmail(validator.isEmail(buyerEmail));
        setValidEmailConf(validator.equals(buyerEmail, buyerEmailConf));
        setValidPhone(validator.isNumeric(buyerPhone, "es-ES"));
    }, [buyerName, buyerEmail, buyerEmailConf, buyerPhone]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: cartItems,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const ordenesCollection = collection(db, "ordenes")
        const pedido = addDoc(ordenesCollection,orden)
        const q = query(pedido, where(documentId(), 'in', cartItems.map(ped => ped.id)))
        pedido.then((res) => {
            const pedidoId = res.id;
            cartCheckout(pedidoId);
        })

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

    }
    return(
        <>
            {
            cartItems.length === 0
            ? <Navigate to="/"/>
            :
            <>
            <h2 className="formItems">Checkout Informacion:</h2>
            <TextField className="formItems" error={buyerName !== "" && !validName} required variant="filled" label="Full Name" onChange={handleNameChange} value={buyerName} />
            <TextField className="formItems" error={buyerPhone !== "" && !validPhone} required variant="filled" label="Phone Number" onChange={handlePhoneChange} value={buyerPhone} />
            <TextField className="formItems" error={buyerEmail !== "" && !validEmail} required variant="filled" label="Email Address" onChange={handleEmailChange} value={buyerEmail} />
            <TextField className="formItems" error={buyerEmailConf !== "" && !validEmailConf} required variant="filled" label="Confirm Email Address" onChange={handleEmailConfChange} value={buyerEmailConf} />
                <div className="cartButtons">
                    <Button onClick={handleSubmit} variant="contained" disabled={(!validName || !validEmail || !validEmailConf || !validPhone)} color="success">Complete Purchase</Button>
                    <Button onClick={clearCart} variant="contained" color="error">Clear Cart</Button>
                </div>
        </>
            }   
         </>
    )
}