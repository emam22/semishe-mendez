import React from "react";
import './ItemListContainer.css';
import {useEffect, useState} from "react";

export const List = () => {
        return (<>
        <main className="lista">
            <h2>Aca iria la lista de productos</h2>
            {/* <Bttn/> */}
        </main>
        <Footer/>
       </>
        );
};
const Footer = () => {
    return (
        <footer className="contenedor contenido-header">
            <h1 className="logo__nombre">Semi<span className="logo__bold">SHE</span></h1>
            <h2> Emanuel Mendez Dev © 2022.</h2>        
        </footer>         
    );
};

// const Bttn = () => {
//     const [numero,setNumero] = useState(0)
//     return <>
//     <h4>{numero}</h4>
//     <button onclick={()=>{setNumero(numero+1)}}>
//     +
//     </button>

//     <button onclick={()=>{setNumero(numero-1)}}>
//     -
//     </button>
//     </>
// }
// export default Bttn;