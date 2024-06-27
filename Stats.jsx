import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faThumbsUp, faUserTie, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Stats () {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <FontAwesomeIcon icon={faCar} className="icon" />
        <div className="number">10000+</div>
        <div className="description">VEHICLE DELIVERED</div>
      </div>
      <div className="stat-item">
        <FontAwesomeIcon icon={faThumbsUp} className="icon" />
        <div className="number">100%</div>
        <div className="description">CUSTOMERS SATISFACTION</div>
      </div>
      <div className="stat-item">
        <FontAwesomeIcon icon={faUserTie} className="icon" />
        <div className="number">15000+</div>
        <div className="description">QUALIFIED DRIVERS</div>
      </div>
      <div className="stat-item">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
        <div className="number">50</div>
        <div className="description">STATES COVERED</div>
      </div>
    </div>
  );
}


