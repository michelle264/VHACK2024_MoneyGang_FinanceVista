import React from 'react';
import './cover.css'; 
import logo1 from './mascot.png';

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
                <div className="text-wrapper-2">Learn more →</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default cover;

