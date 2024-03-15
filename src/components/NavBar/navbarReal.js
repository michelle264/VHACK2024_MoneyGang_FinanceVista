import React from 'react';
import { Link } from 'react-router-dom';
import './navbarReal';
import icon from './icon.png';

const NavigationBar=() =>{
    return(
        <nav className="navbar">
        <div className="left-section2">
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <strong className="financialtitle">FinanceVista</strong>

        </div>
        <div className="menu">
          <Link to="/about">
            {/* <FaBriefcase className="small-icon"/> */}
            <p className="menu-text">About FinanceVista</p>
          </Link>
          <Link to="/course">
          <div className="small-icon3">
          {/* <img src={profileImage} alt="profile"/>    */}
          <p className="menu-text">Courses</p>
            </div>
          </Link>

          <Link to="/market">
          <div className="small-icon4">
          {/* <img src={profileImage} alt="profile"/>    */}
          <p className="market-text">Market Data</p>
            </div>
          </Link>


          <Link to="/">
            <i className="small-icon">&#128274;</i>
            <p className="menu-text">Logout</p>
          </Link>
        </div>
      </nav>
    );
  };
  
  export default NavigationBar;