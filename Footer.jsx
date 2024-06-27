import React from 'react';

export default function Footer () {
  return (
    <footer className="footer">
      <div className="footer-section newsletter">
        <h3>NEWSLETTER SUBSCRIPTION</h3>
        <p>Get our Daily email newsletter with Special Services, Updates, Offers and more</p>
        <div className="newsletter-form">
          <input type="email" placeholder="EMAIL ADDRESS" />
          <button type="button">SUBSCRIBE</button>
        </div>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-dribbble"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <div className="footer-section mission-vision">
        <h3>MISSION AND VISION</h3>
        <p><strong>Mission:</strong> Redefining auto transport with reliability, efficiency, and care.</p>
        <p><strong>Vision:</strong> To be the premier choice, setting the industry standard for excellence in auto transport solutions.</p>
      </div>
      <div className="footer-section contact-info-footer">
        <h3>CONTACT INFO</h3>
        <p><i className="fas fa-map-marker-alt"></i> Canada Office: 30 New Delhi Drive 106, Markham, ON, L3S 0B5</p>
        <p><i className="fas fa-map-marker-alt"></i> US Office: 9170 Trinity Dr, Lake in the hills, IL 60156</p>
        <p><i className="fas fa-phone-alt"></i> Customer Support: 800-636-4902</p>
        <p><i className="fas fa-envelope"></i> support@byroadlogistics.com</p>
      </div>
      <div className="footer-bottom">
        <p>TERM & CONDITIONS | PRIVACY STATEMENT</p>
        <p>COPYRIGHTS © 2024 BYROAD LOGISTICS INC. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

