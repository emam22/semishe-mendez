import { useEffect, useState } from "react"
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore"; 


export const useSemillas = () => {
    const [dataSemi, setDataSemi] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("getData");
        getData();
    }, [])

    const getData = async() => {
        try {
            setLoading(true);
            const datos = await getDocs(collection(db, "Semillas"));
            const datosDB = datos.docs.map((doc) => doc.data());
            setDataSemi(datosDB)
        }catch(error) {
            console.log(error);
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }       

    return (
        dataSemi,
        error,
        loading
    )
}