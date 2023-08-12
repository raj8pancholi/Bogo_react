import React from 'react';


// import abmassadors folder css
import './abmassadors.css';


// import header and footer
import Headers from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';





// import abmassadors components
import AmbassdoresHeader from './elements/header/AmbassadorsHeader';
import VideoPlayer from './elements/BecomeSection/VideoPlayer';
import EligibilitySection from './elements/BecomeSection/EligibilitySection';
import JoinInfluencerArrow from './elements/BecomeSection/JoinInfluencerArrow';
import BrochureForm from './elements/Brochure/BrochureForm';
import MerchantSection from '../home/element/MerchantSection'


const AmbassadorsPage = () => {


  return (

    <>
       
  <Headers />
    
  {/* Header */}
  <AmbassdoresHeader />



  
  {/* Check your eligibility Start */}
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



  {/* Are You Merchant Section Start */}
  <div className="request-brochure">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="brochure-left-section">
            <div className="brouchure-text-box">
              <h4>Not ready to sign up just yet?</h4>
              <h6>Request a Brochure</h6>
              <BrochureForm />
            </div>
          </div>
        </div>
        <div className="col-md-6 brochure-right">
          <div className="brochure-right-section">
            <div className="brouchure-img-box">
              <img src="/images/Iphone.png" data-aos="fade-down" alt="" className="aos-init aos-animate img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>





  {/* Are You Merchant Section Start */}
  <MerchantSection />


  <Footer />

</>

  );
};



<script src="https://www.google.com/recaptcha/api.js"></script>



export default AmbassadorsPage;
