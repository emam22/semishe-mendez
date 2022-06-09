import React from "react";
import './ItemListContainer.css';
import './button.js';

export const List = () => {
        return (<>
        <main className="lista">
            <h2>Aca iria la lista de productos</h2>
            <Bttn/>
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