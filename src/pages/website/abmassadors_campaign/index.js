import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Import Header and Footer
import Header1 from '../../../partials/header/Header1';
import Footer from '../../../partials/footer/Footer';


// import Css
import './style.css';



// Import components
import AbmassadorsHeading from './elements/AbmassadorsHeading';
import GiveAway from './elements/GiveAway';
import ExclusiveOffer from './elements/ExclusiveOffer';






// tabs
const AmbassadorsCampaignPage = () => {
  const [campaignType, setcampaignType] = useState();
  const [offer, setoffer] = useState();
  const [estimationSaving, setestimationSaving] = useState();
  const [cashIncentive, setcashIncentive] = useState();
  const [allowedGuest, setallowedGuest] = useState();
  const [requirement, setrequirement] = useState();
  const [prefferedPlatforms, setprefferedPlatforms] = useState();
  const [photo, setphoto] = useState();
  const [video, setvideo] = useState();
  const [untilDate, setuntilDate] = useState();
  const [endDate, setendDate] = useState();
  const [hashtags, sethashtags] = useState();
  const [promoCode, setpromoCode] = useState();
  const [audienceSize, setaudienceSize] = useState();

  const buttonOption = (id) => {
    setcampaignType(id);
  };

  return (
    <>
      <Header1 />
      <AbmassadorsHeading />

      <div className="campaing-body-section">
        <div className="container">


        {/* <!-- Title --> */}
        <div className="compaing-body-title">
          <h3>CHOOSE CAMPAIGN TYPE</h3>
          <h4 className="offer-text">CHOOSE OFFER TYPE</h4>

        </div>



          {/* Tab section */}
          <div className="influencers_section">
            <div className="tabs-row">
              <ul id="tabs-nav">
                <li
                  className={
                    campaignType === 1
                      ? 'offer-box influencer_tab aos-init aos-animate active'
                      : 'offer-box influencer_tab aos-init aos-animate'
                  }
                  data-aos="flip-up"
                  onClick={() => setcampaignType(1)}
                >
                  <Link to="">
                    <h3>Give Away</h3>
                  </Link>
                </li>
                <li
                  className={
                    campaignType === 2
                      ? 'offer-box influencer_tab aos-init aos-animate active'
                      : 'offer-box influencer_tab aos-init aos-animate'
                  }
                  data-aos="flip-down"
                  onClick={() => setcampaignType(2)}
                >
                  <Link to="">
                    <h3>Exclusive Offer</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Offer form input 1 */}
          {campaignType === 1 && (
            <div className="offer_form_section1 tab-content" id="tab1">
              <form method="" action="" className="offer_input_box offer_input_box1">
                <GiveAway />
              </form>
            </div>
          )}

          {/* Offer form input 2 */}
          {campaignType === 2 && (
            <div className="offer_form_section1 tab-content" id="tab2">
              <form method="" action="" className="offer_input_box offer_input_box1">
                <ExclusiveOffer/>
              </form>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AmbassadorsCampaignPage;
