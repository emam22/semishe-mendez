import React from "react";
import './CartWidget.css';
import logo from './logo192.png';

export const Cart = () => {
    return (<>
      <a className="cart-widget">
        <img src={logo} alt="logo" />
        <h3 className="display">0</h3>
      </a>
      </>
    );
  };