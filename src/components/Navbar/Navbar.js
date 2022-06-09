import React from "react";
import './Navbar.css';

export const Semi = (props) => {
    const {children} = props;

    return (
    <header className="header">
        <div className="contenedor contenido-header">
            <h1 className="logo__nombre">Semi<span className="logo__bold">SHE</span></h1>
            <nav className="navegacion-principal">
                <a href="/">Nosotros</a>
                <a href="/">Semillas</a>
                <a href="/">Contacto</a> {children}               
            </nav>            
        </div>                
    </header>    
    );
};

