// Header.js
import React from 'react';
import './shared.styles.css';
import logo from './image.png';
import cart from './cart.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="E-Commerce Logo" />
          </a>
        </div>

        {/* Navigation */}
    

        {/* Shopping Cart */}
        <div className="cart">
          <a href="/cart">
            <img src={cart} alt="Cart Icon" />
            <span>0</span> {/* Cart item count */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
