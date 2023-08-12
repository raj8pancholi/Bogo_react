import React from 'react';

export default function CampaignHeader() {
  return (
    <div className="campaign-header">
      <div className="container">
        <div className="inner-hero-section-short">
          <h2 data-aos="flip-up" className="aos-init aos-animate">
            Review your campaign
          </h2>
          <span data-aos="flip-down" className="aos-init aos-animate">
            This is how your campaign will appear to customers
          </span>
        </div>
      </div>
    </div>
  );
}
