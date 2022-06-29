import React, {useEffect, useState} from 'react';

const TerminarCompra = () => {

    const [addCart, setAddCart] = useState(true);
        useEffect(() => {
            if (setAddCart) {
                console.log("holasads") 

            }else {
                console.log(addCart);
            }
            }, []);

            return (
                <button className='add'>Hola</button>
             );    
   
}
export default TerminarCompra;