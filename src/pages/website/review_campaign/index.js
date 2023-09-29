import React from 'react';
import { Link } from 'react-router-dom';


// Import Components
import Header1 from '../../../partials/header/Header1';
import Footer from '../../../partials/footer/Footer';


import CampaignHeader from './elements/CampaignHeader';
import VoucherInfo from './elements/VoucherInfo';
// import SwitchBox from './elements/SwitchBox';
import ValidityBox from './elements/ValidityBox';

export default function ReviewCampaign() {
  return (

    <>
        {/* Header */}
        <Header1 />

        {/* Campaign Header */}
        <CampaignHeader />



        <div className="campaing-body-section">
        <div className="container">
            <div className="review_compaign_row">
            <div className="review_campaign_box">
                <div className="base_img">
                    <VoucherInfo />
                    {/* <SwitchBox /> */}
                    <ValidityBox />
                    <div className='row'>
                        <div className='col-12'>
                            <div className='backToEdit'>
                                <i className="fa-solid fa-angle-left"></i>
                                <Link to='/merchant_campaign'>Back to Edit</Link>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="termsCondition">
                <h4>By creating a campaign, you agree to BOGO’s Terms and Conditions and Privacy Policy.</h4>
                </div>

                <div className="row">
                <div className="col-12">
                    <Link to="/dashboard" type="submit" className="fullsubmitbtn">
                    Publish Campaign
                    </Link>
                </div>
                <div className="col-12">
                    <div className="savedraftbtn_row">
                    <span className="saveDraftbtn">Save Draft</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>



        {/* Footer */}
        <Footer/>
    </>
    
  );
}
