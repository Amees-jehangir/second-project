import React from 'react';
import './App.css';
import image1 from './images/weare2.webp';
import image2 from './images/weare3.jpg';
import image3 from './images/logictics1.png';

export default function WhoWeAre () {
    const cards = [
        {
          title: 'SAFETY STANDARDS',
          description: 'Our rigorous safety protocols and expert handling ensure your vehicle arrives unscathed, giving you confidence in our ability to protect your valuable asset.',
          image: image1,
          link: '#'
        },
        {
          title: 'GUARANTEED TIMELINESS',
          description: 'With our proven track record of punctuality and efficiency, you can trust us to deliver your vehicle on time, every time, saving you precious time and minimizing disruptions to your schedule.',
          image: image2,
          link: '#'
        },
        {
          title: 'TRANSPARENT COMMUNICATION',
          description: 'From booking to delivery, we keep you informed at every stage, providing clear communication and updates so you can rest assured knowing your vehicle is in reliable hands.',
          image: image1,
          link: '#'
        }
      ];


  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div className="card" key={index}  >
           <div style={{
             width: '90%',
             height: '90%'}}>
                <img src={card.image} alt="Image" style={{height:'100%',objectFit: 'cover' }}/>
            </div>
          <div className="card-overlay">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
