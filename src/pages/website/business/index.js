import React from 'react';
import BogoServiceSection from './element/BogoServiceSection';
import BusinessBannerSection from './element/BusinessBannerSection';
import VideoPlayer from './../abmassadors/elements/BecomeSection/VideoPlayer';
import EligibilitySection from './../abmassadors/elements/BecomeSection/EligibilitySection';
import JoinInfluencerArrow from './../abmassadors/elements/BecomeSection/JoinInfluencerArrow';
import BrochureForm from '../abmassadors/elements/Brochure/BrochureForm';



// import header and footer
import Headers from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';

const BusinessPage = () => {
  return (
    <>
      <Headers />


      {/* Business Banner Section */}
      <BusinessBannerSection/>

      {/* Become Main Section */}
      <div className="container-fluid become_main_section">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="bacome_left_section">
              {/* <img src="/website/images/influencer 2.png" alt="" /> */}
              <div className="page">
                <div className="video" data-video-id="CoL8Gtvxfl0">
                  <div className>

                    <VideoPlayer />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
              <EligibilitySection />
              <JoinInfluencerArrow />
          </div>
        </div>
      </div>

      {/* Bogo Service Section */}
      <BogoServiceSection/>

      {/* Request Brochure Section */}
      
      <div className="request-brochure">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="brochure-left-section">
                <div className="brouchure-text-box">
                  <h4>Not ready to sign up just yet?</h4>
                  <h6>Request a Brochure</h6>
                  <BrochureForm/>
                </div>
              </div>
            </div>
            <div className="col-md-6 brochure-right">
              <div className="brochure-right-section">
                <div className="brouchure-img-box">
                  <img
                    src="/images/Iphone.png"
                    alt=""
                    data-aos="fade-down"
                    className="aos-init aos-animate img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer/> 
    </>
  );
};

export default BusinessPage;
