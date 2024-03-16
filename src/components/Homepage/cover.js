import React from 'react';
import './cover.css'; 
import logo1 from './mascot.png';
import { Link } from 'react-router-dom';

class cover extends React.Component {
  render() {
    return (
      
        <div className="background">
        <div className="container">
          <div className="text-container">
            <p className="text-wrapper">Empowering </p>
            <p className="text-wrapper">Your Financial Vision</p>
            <p className="text-wrapper">With FinanceVista</p>
          </div>
          <img src={logo1} alt="Big Logo" className="big-logo" />
      
        </div>
        <div className="frame">
            <div className="frame-2">
              <div className="div-wrapper">
                {/* JobDetails change to the correcct route */}
                <Link to="/about" className="text-wrapper-2">Learn more →</Link>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default cover;

