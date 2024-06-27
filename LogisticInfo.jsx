import React from 'react';
import truckImage from './images/truck.png'; // Make sure to replace this path with the correct path to your image

export default function LogisticInfo () {
  return (
    <div className="logistic-info">
      <div className="truck-image">
        <img src={truckImage} alt="Truck" />
      </div>
      
        <div className="left-section">
          <h2>GET TO KNOW</h2>
          <h1>WHO WE ARE</h1>
          <p>
            Welcome to Byroad Logistic Inc, where excellence in auto transport
            meets unparalleled customer service.
          </p>
          <p>
            At Byroad Logistic Inc, we understand that your vehicle is more than
            just a mode of transportation; it's an essential part of your life.
            Whether you're relocating across the country, purchasing a new
            vehicle from a dealership, or sending your prized possession to a
            car show, we're here to ensure a seamless and stress-free transport
            experience.
          </p>
          <button className="know-more-btn">KNOW MORE</button>
        </div>
        <div className="right-section">
          <h2>WE DO MORE THAN YOU WISH</h2>
          <ul>
            <li>
              Indulge in unparalleled convenience with our exclusive <span> DOOR TO DOOR</span> dispatching service
            </li>
            <li>
              Safely transporting <span> VINTAGE AND LUXURY</span>  cars with white-glove care
            </li>
            <li>Exquisitely transporting <span> BIKES</span>  to their destinations</li>
            <li>Urgency meets sophistication in <span> EXPEDITE</span>  delivery</li>
            <li>
             <span>  ENCLOSED </span> transport for unrivaled protection or OPEN transport for
              a seamless journey
            </li>
            
          </ul>
          <p>
              Effortlessly coordinating the elegant transport of multiple
              vehicles, ensuring each arrives in style at its destination.
            </p>
        </div>
      
    </div>
  );
};

