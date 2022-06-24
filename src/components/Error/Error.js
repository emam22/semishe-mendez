import React from "react";
import './Error.css';
import rick from './img23.jpg';
import portal from './img24.png';
import { Link } from 'react-router-dom';

export const Error = () => { 
    return(
    <header>
    <section className="error">
    <img className="img-rick" src={rick} alt="rick" />
    <h6>Upps! algo paso mal. </h6>
    <h8>Regresa nuevamente por el portal.</h8>
    <Link to={`/`}><img className="img-portal" src={portal} alt="portal" /></Link>
    </section>
    </header>
    );
};

