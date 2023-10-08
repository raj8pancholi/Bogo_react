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
 
  const [buy ,setBuy] = useState('')
  const [get ,setGet] = useState('')

  return (
    <>
      {/* Header */}
      <Header1 />

      <div className="campaign-header">
        <div className="container">
        <div className="voucher_preview_row">
                    <div className="voucher_preview_box">
                        <div className="voucher_preview_row">
                            <div className="voucher_preview_box_btn_box">
                                <button className="btn btn-outline-primary voucher_preview_btn">
                                    Voucher Preview
                                </button>
                            </div>
                        </div>
                        <div className="voucher_preview_row">
                            <div className="row">
                                <div className="col-3">
                                    <img src="/images/voucher_img.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-4">
                                    <div className="buy-box">
                                        <span>BUY</span>
                                        <h3>{buy}</h3>
                                    </div>
                                    <div className="get-box">
                                        <span>GET</span>
                                        <h3>{get}</h3>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="buy-box">
                                        <span>VALIDITY</span>
                                        <h3>S M T W T F S</h3>
                                    </div>
                                    <div className="get-box">
                                        <span>Est. Savings</span>
                                        <h3>AED 250</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>
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
            <TabsComponents  setBuy={setBuy} buy={buy}  setGet={setGet} get={get}/> {/* Correct the component name here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
