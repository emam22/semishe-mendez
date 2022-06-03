import React from "react";
import './Navbar.css';

export const MiSegComponente = () => {

    return <header className="header">
        <div className="contenedor contenido-header">
            <h1 className="logo__nombre no-margin centrar-texto">Semi<span className="logo__bold">SHE</span></h1>
            <nav className="navegacion-principal">
                <a href="/">Nosotros</a>
                <a href="/">Semillas</a>
                <a href="/">Contacto</a>
            </nav>
        </div>
    </header>;
};


