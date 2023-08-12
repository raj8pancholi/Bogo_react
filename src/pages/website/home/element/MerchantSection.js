import React from 'react';
import { Link } from 'react-router-dom';

const MerchantSection = () => {
  return (
    <div className="merchant_main_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="merchant_inner_section home-merchant-inncer-sec">
              <img src="/images/Onboarding.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="merchant_inner_section merchent_right_text">
              <h1>Are you a merchant?</h1>
              <p>
                Increase foot traffic and sustainably grow your profitability with
                The BOGO App’s Dynamic Campaign Management system
              </p>
              <div className="arrow-box">
                <Link to="/business">
                  BOGO For Business
                  <i className="fa fa-arrow-right pl-2" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSection;
