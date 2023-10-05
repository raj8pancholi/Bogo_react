import React, { useState } from 'react';

// Import Css
import './style.css';

// Import Components Header and Footer
import Footer from '../../../partials/footer/Footer.js';
import Header1 from './../../../partials/header/Header1';

// Import Component
import TabsComponents from './elements/TabsCompenent'; // Correct the import name here
import CampaignHeader from './elements/CampaignHeader';

export default function Index() { // Renamed to start with an uppercase letter
  const [inputText, setInputText] = useState('');

  const handleTextChange = (newText) => {
    setInputText(newText);
  };

  return (
    <>
      {/* Header */}
      <Header1 />

      <div className="campaign-header">
        <div className="container">
          <CampaignHeader text={inputText} />
        </div>
      </div>

      {/* campaign body section */}
      <div className="campaign-body-section">
        <div className="container">
          {/* Title */}
          <div className="compaing-body-title">
            <h3>CREATE NEW CAMPAIGN</h3>
            <h4 className="offer-text">CHOOSE OFFER TYPE</h4>
          </div>

          {/* offer type */}
          <div className="offer-row">
            <TabsComponents onTextChange={handleTextChange} /> {/* Correct the component name here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
