import React from 'react';
import logisticsImage1 from './images/logictics1.png'; // Update with the correct image path
import logisticsImage2 from './images/logistics2.png'; // Update with the correct image path

export default function ServicesInfo () {
  return (
    <div className="services-info">
      
      <div className="services-content">
        {/* <div className="services-column"> */}
        <div>
        <div className="header">
        <h2>ENJOY THE</h2>
        <h1>SERVICES WE PROVIDE</h1>
        <p>
          Cruise worry-free with our expert auto transport, where your vehicle's journey is our passion.
        </p>
      </div>
        </div>
          <div className="service-card">
            <img  src={logisticsImage2} alt="Service 1" />
          </div>
          <div className="service-card">
            <h2>EFFICIENCY</h2>
            <p>
              Swift delivery, streamlined logistics, and responsive customer support, ensuring your vehicle reaches its
            </p>
            <a href="#">READ MORE ...</a>
          </div>
        {/* </div> */}
        {/* <div className="services-column"> */}
          <div className="service-card">
            <h2>RELIABILITY</h2>
            <p>
              Key traits include transparent pricing, secure handling, insurance coverage, and effective communication throughout the process.
            </p>
            <a href="#">READ MORE ...</a>
          </div>
          <div className="service-card">
            <img src={logisticsImage2} alt="Service 2" />
          </div>
        {/* </div> */}
        {/* <div className="services-column"> */}
          <div className="header" >
            <p>
              Discover the heartfelt commitment in our exceptional auto transport services, where efficiency and reliability converge to assure you a seamless journey for your vehicle, making us your ultimate choice for transportation needs.
            </p>
            <button className="quote-button">GET FREE QUOTE</button>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

