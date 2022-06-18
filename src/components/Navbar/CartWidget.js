import React from "react";
import './CartWidget.css';
import logo from './logo192.png';

export const Cart = () => {
    return (<>
      <a href="/" className="cart-widget">
        <img src={logo} alt="logo" />
       </a>
      </>
    );
  };