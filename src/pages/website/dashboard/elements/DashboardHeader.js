import React from 'react';

const DashboardHeader = () => (
  <div className="deshboard-header">
    <div className="container">
      <div className="deshboard-header-heading">
        <div className="campaign_card_row">
          <div className="campaign_card_text">
            <h3>Create and launch your campaign</h3>
            <span>
              <a href="/" className="play_iconBtn">
                <img src="/assets/img/play_icon.png" alt='' className="img-fluid" />
                <img src="/img/play_icon.png" alt='' className="img-fluid mr-2" />
                Watch how it works
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardHeader;
