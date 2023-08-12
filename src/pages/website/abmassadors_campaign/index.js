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
  const [selectedTab, setSelectedTab] = useState(1);

  const buttonOption = (id) => {
    setSelectedTab(id);
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
                    selectedTab === 1
                      ? 'offer-box influencer_tab aos-init aos-animate active'
                      : 'offer-box influencer_tab aos-init aos-animate'
                  }
                  data-aos="flip-up"
                  onClick={() => buttonOption(1)}
                >
                  <Link to="">
                    <h3>Give Away</h3>
                  </Link>
                </li>
                <li
                  className={
                    selectedTab === 2
                      ? 'offer-box influencer_tab aos-init aos-animate active'
                      : 'offer-box influencer_tab aos-init aos-animate'
                  }
                  data-aos="flip-down"
                  onClick={() => buttonOption(2)}
                >
                  <Link to="">
                    <h3>Exclusive Offer</h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Offer form input 1 */}
          {selectedTab === 1 && (
            <div className="offer_form_section1 tab-content" id="tab1">
              <form method="" action="" className="offer_input_box offer_input_box1">
                <GiveAway />
              </form>
            </div>
          )}

          {/* Offer form input 2 */}
          {selectedTab === 2 && (
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
