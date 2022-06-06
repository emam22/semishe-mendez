import React from "react";
import './CartWidget.css';
import logo from './logo192.png';

export const Cart = () => {
    return (
      <section className="cart-widget">
        <img src={logo} alt="logo" />
        <div className="display">0</div>
      </section>
    );
  };