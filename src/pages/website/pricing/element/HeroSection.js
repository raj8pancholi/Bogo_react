import React from 'react';

const HeroSection = ({heading}) => {
  return (
    <div className="main-hero-section">
      <div className="container">
        <div className="inner-hero-section">
          <h2>{heading}</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;