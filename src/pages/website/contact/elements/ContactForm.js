import React from 'react';



// Import Components
import MobileInput from './MobileInput';





const ContactForm = () => {
  return (
    <div className="contact-info">
      <form id="ADDcontact">
        <div className="col-md-12">
          <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" />
        </div>
        <div className="col-md-12">
          <input type="email" id="Email" name="email" className="form-control" placeholder="Your Email" />
        </div>

        <div className="col-12 mb-3">
          <div className="input-box">
            <MobileInput/>
          </div>
        </div>

        <div className="col-md-12">
          <textarea
            name="message"
            id="message"
            cols="33"
            rows="3S"
            placeholder="Message"
            className="form-control"
          ></textarea>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn submit-button" style={{ backgroundColor: '#1478a9', color: 'white' }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
