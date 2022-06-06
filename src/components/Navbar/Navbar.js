import React from "react";
import './Navbar.css';

export const MiSegComponente = (props) => {
    const {children} = props;

    return ( <body>
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
    <Main/>
    </body>
    );
};

const Main = () => {
    return (
    <main className="lista">
        <h2>Aca iria la lista de productos</h2>
    </main>)
}

