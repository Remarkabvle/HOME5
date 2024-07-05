import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header container">
      <div className="logo"><p>SUSHIMAN</p></div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#menu">MENU</a></li>
          <li className="nav-item"><a href="#foods">FOODS</a></li>
          <li className="nav-item"><a href="#services">SERVICES</a></li>
          <li className="nav-item"><a href="#about-us">ABOUT US</a></li>
        </ul>
      </nav>
      <div className="search">
        <i className="fas fa-search"></i>
      </div>
    </header>
  );
};

export default Header;
