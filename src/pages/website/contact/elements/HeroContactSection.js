import React from 'react';

// Import Components
import ContactForm from './ContactForm';


const HeroContactSection = () => {
  return (
    <div className="hero-contact-section">
      <div className="container">
        <div className="contact-box">
          <div className="row">
            <div className="col-md-6 contact-text-box">
              <div className="contact-text">
                <h1>Contact Us</h1>
                <h3>We’re always happy to help!</h3>
                <p>Fill out the form and we’ll get back to you within 48 hours.</p>
              </div>
            </div>
            <div className="col-md-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContactSection;
