// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarLoginRegister.css';
import icon from './icon.png';

const NavigationBar = () => {
  return (
    <nav className="navbarOwn">
      <div className="left-section2">
        <div className="icon">
          <img src={icon} alt="icon" />
        </div>
        <strong className="financeVistaTitle">FinanceVista</strong>
      </div>

    </nav>
  );
};

export default NavigationBar;
