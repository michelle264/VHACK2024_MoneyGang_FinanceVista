import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import './navbarReal.css';
import icon from './icon.png';


const NavigationBar=() =>{
    return(
        <nav className="navbar">
        <div className="left-section2">
          <div className="icon">
            <img src={icon} alt="icon" />
          </div>
          <div className='link'>
          <Link to="/about" style={{ textDecoration: 'none' , color:'black'}}>
          <strong className="financialtitle">FinanceVista</strong>
          </Link>
          </div>

        </div>
        <div className='topContainer'>
        <div className="menu">
          <Link to="/about">
            {/* <FaBriefcase className="small-icon"/> */}
            <p className="menu-text">About FinanceVista</p>
          </Link>
          
          <div className='line'></div>
          <Link to="/course">
          <div className="small-icon3">
          {/* <img src={profileImage} alt="profile"/>    */}
          <p className="menu-text">Courses</p>
            </div>
          </Link>

          <div className='line'></div>
          <Link to="/market">
          <div className="small-icon4">
          {/* <img src={profileImage} alt="profile"/>    */}
          <p className="market-text">Market Data</p>
            </div>
          </Link>
          </div>
          </div>

          <Link to="/" className="logout-link">
          <VscAccount className="profile-icon" style={{ fontSize: '24px', marginTop: '5px', marginRight:'10px' }}/> 
            <i className="small-icon">&#128274;</i>
            <p className="menu-text2">Logout</p>
        </Link>

        
      </nav>
    );
  };
  
  export default NavigationBar;