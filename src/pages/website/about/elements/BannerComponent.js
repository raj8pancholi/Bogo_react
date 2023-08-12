import React from 'react';

const BannerComponent = () => {
  return (
    <div className="about_banner_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 about-left-box">
            <div className="about_left_section overflow-hidden">
              <p >
                The BOGO App is an online marketplace that helps business owners
                boost foot traffic through our Dynamic Campaign Management system of
                Buy One Get One offers, while helping consumers save money across
                every facet of their lifestyle.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_right_section">
              <div className="about_right_inner_section">
                <img src="/images/Iphone.png" alt=""  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
