import React from 'react';
import './HeroSection.css';
import hero from '../../assets/hero.png'

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="sushi-image">
          <img src={hero} alt="Sushi" />
        </div>
      </div>
      <div className="hero-right">
        <h1>Feel the taste of Japanese foods</h1>
        <p>Feel the taste of most popular Japanese foods from anywhere and anytime.</p>
        <div className="hero-buttons">
          <button className="order-button">Order Now</button>
          <button className="how-to-order-button">
            <i className="fas fa-play"></i> How to Order
          </button>
        </div>
        <div className="hero-info">
          <span>24K+</span> Happy Customer
        </div>
        <div className="hero-testimonial">
          “This is the best Japanese food delivery service that ever exists”
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
