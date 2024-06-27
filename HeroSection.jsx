import React from 'react';
import carImage from './images/carImage.webp'; 

export default function HeroSection() {
  return (
    <div className="HeroSection" style={{ backgroundImage: `url(${carImage})` }}>
      {/* {/* <div className="overlay"> */}
        <div className="hero-content"> 
          <h1>A Reliable Way to Ship Your Car</h1>
          <p>We Shape the Future of Auto Transport</p>
          <a href="#quote" className="hero-button">Get Free Quote</a>
        </div>
       </div>
    // </div>
  );
}
