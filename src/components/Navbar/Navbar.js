import React from "react";
import './Navbar.css';

export const Navbar = (props) => {
    const {children} = props;

    return (<>
    <header>
        <div className="contenedor contenido-header">
            <h1 className="logo__nombre">Semi<span className="logo__bold">SHE</span></h1>
            <nav className="navegacion-principal">
                <a href="/">Nosotros</a>
                <a href="/">Semillas Auto</a>
                <a href="/">Semillas CBD</a> 
                <a className="nav-link" href="/">{children}</a>
                <h7 className="display">0</h7>               
            </nav>            
        </div>                
    </header>
        {/* <Footer/>   */}
    </>  
    );
};
// const Footer = () => {
//     return (
//         <footer className="contenedor contenido-header">
//             <h1 className="logo__nombre">Semi<span className="logo__bold">SHE</span></h1>
//             <h2> Emanuel Mendez Dev © 2022.</h2>        
//         </footer>         
//     );
// };
