import React from 'react';

export default function NavBar() {
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

  return (
  
    <nav className="navbar">
    <button className="menu-btn" onClick={toggleMenu}>☰</button>
    <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Our Services</a>
        <a href="#blog">Blog</a>
        <a href="#terms">Terms</a>
        <a href="#privacy">Privacy</a>
        <a href="#contact">Contact Us</a>
    </div>
    <a href="#quote" className="quote-btn">Get Free Quote</a>
</nav>
  );
}
