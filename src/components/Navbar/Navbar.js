import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

   

export const Navbar = (props) => {
    const {children} = props;

    return (<>
    <header>
        <div className="contenedor contenido-header">
                <Link to={`/`}>
                    <h1 className="logo__nombre">Semi<span className="logo__bold">SHE</span></h1>
                </Link>
            <nav className="navegacion-principal">
                <Link to={`/nosotros`}>
                    <a href="/" >Nosotros</a>
                </Link>
                
                <Link to={`/category/auto`}>
                    <a href="/" >Semillas Auto</a>
                </Link>
                <Link to={`/category/mix`}>
                    <a href="/" >Semillas MixAuto</a>
                </Link>
            <div> 
                <Link to={`/cart`}>
                    <a className="nav-link" href="/">{children}</a>
                </Link>
                    <h4 className="display">0</h4>        
               
            </div>                      
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
