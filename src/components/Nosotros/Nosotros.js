import React from 'react';
import './Nosotros.css';
import somos from './img32.png';
import { Link } from 'react-router-dom';

const Nosotros = () => {
    return (
        <main className='nosotros'>
            <h2>¿QUIENES SOMOS?</h2>
            <p>SemiSHE es un banco de semillas que comercializa a nivel nacional la mejor selección de semillas de marihuana, propias y de otros bancos. Desde nuestros orígenes como cultivadores, hemos investigado en la genética de las plantas hasta conseguir nuestras semillas de marihuana, apreciadas en el mundo cannabico.</p>
            <img className="img-ram" src={somos} alt="ram"/>
            <p>Respondemos ante ti de manera personalizada. Te asesoramos en tu compra y te ofrecemos recursos para el autocultivo mediante artículos en nuestro blog y documentos multimedia para comprar las mejores semillas.</p>
            <p>Ponemos a tu disposición nuestra tienda oficial  para ofrecerte un trato directo y sin intermediarios. Siempre garantizamos la seguridad en las transacciones, la privacidad en los envíos y resolvemos cualquier incidencia que pueda surgir.</p>
            <Link to={`/`}><img className='img-nos' src='https://static.wixstatic.com/media/62bae5_82e1d29072ac47a38779b8b7b036da14~mv2.png/v1/crop/x_101,y_878,w_2623,h_944/fill/w_600,h_216,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/banner%20geneticas.png' alt='nosotros'/></Link>
            <h3>SemiSHE® no se responsabiliza por la germinación ni el uso fuera de la ley de las semillas que ofrece. En ciertos países es ilegal el cultivo de cannabis, la posesión de las semillas o el traslado de las mismas. SemiSHE® coexiste en un país donde el autocultivo está permitido y la propia producción de semillas es completamente legal según se desprende explícitamente del texto de la ley elaborada para su regulación.</h3>
        </main>
    )
}


export default Nosotros;