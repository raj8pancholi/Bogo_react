import React from 'react';
import { Link } from 'react-router-dom';

const MerchantComponent = () => {
  return (
    <div className="merchant_main_section about_merchant_sectiton">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h5>
              We are proud to be based in Dubai Internet City, as a member of the
              <img
                src="/images/in5-logo-small 1.png"
                alt=""
                srcSet=""
                className="img-fluid"
              />
              Incubator.
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-5">
            <div className="merchant_inner_section">
              <img
                src="/images/Onboarding.png"
                alt=""
                className="img-fluid"
                // className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-7">
            <div className="about_inner_section">
              <div className="row">
                <div className="col-md-6">
                  <div className="about_outer_section">
                    <h4>For merchants</h4>
                    <p>
                      Increase foot traffic and sustainably grow your profitability
                      with The BOGO App’s Dynamic Campaign Management system
                    </p>
                    <Link to="/business">
                      BOGO For Business
                      <img
                        src="/arrow_forward_24px.png"
                        alt=""
                        className="img-fluid pl-2"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about_outer_section">
                    <h4>For Influencers</h4>
                    <p>
                      Create engaging and high-quality content for BOGO Merchants,
                      to help them increase their online following and reach new
                      audience
                    </p>
                    <Link to="/brand_ambassadors">
                      BOGO Brand Ambassadors
                      <img
                        src="/images/arrow_forward_24px.png"
                        alt=""
                        className="img-fluid pl-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantComponent;
