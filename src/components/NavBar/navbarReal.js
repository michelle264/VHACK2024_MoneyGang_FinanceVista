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
          <Link to="/listjobjs">
            {/* <FaBriefcase className="small-icon"/> */}
            <p className="menu-text">Jobs</p>
          </Link>
          <Link to="/UserProfile">
          <div className="small-icon3">
          {/* <img src={profileImage} alt="profile"/>    */}
          <p className="menu-text">Profile</p>
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