import React from 'react';
import logo from './images/mainlogo.png'; 
import icon from './images/phone-icon.png';

export default function Header() {
  return (
    
    <header className="Header">
      <div className="logo-container">
        <a href=''> <img src={logo} alt="ByRoad Logistics Logo" className="logo" /></a>
        <div className="company-info">
          <a href=''>
          <h1>BYROAD LOGISTICS</h1>
          <p>Always there for you</p></a>
        </div>
      </div>
      <div className="contact-info">
        <p>CONTACT SUPPORT (TOLL-FREE):</p>
        <img className="icon" src={icon} /><a href="tel:8006364902" className="contact-number">800-636-4902</a>
      </div>
    </header>
  
  );
}





















