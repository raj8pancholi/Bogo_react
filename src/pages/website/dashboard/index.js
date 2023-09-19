import React from 'react';


import DashboardHeader from './elements/DashboardHeader';
import VoucherCampaignOverview from './elements/VoucherCampaignOverview';
import BogoAmbassador from './elements/BogoAmbassador';
import GrowOnlineSection from './elements/GrowOnlineSection';
import Footer from '../../../partials/footer/Footer';
import Header1 from './../../../partials/header/Header1';

const DashboardPage = () => (
  <>
  
    {/* Header */}
    <Header1/>

    <DashboardHeader />
    <div className="dashboard_body_section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="BranchSelector">
              <select className="form-select" aria-label="Default select example">
                  <option selected="">Select Branch</option>
                  <option value={1}>Marina</option>
                  <option value={2}>Dubai</option>
                  <option value={3}>Marina</option>
                  <option value={4}>Dubai</option>
              </select>
            </div>
          </div>
          <div className="heading_overview">
            <h2>Voucher Campaign Overview</h2>
          </div>
        </div>
        <VoucherCampaignOverview />
        <BogoAmbassador />
        <GrowOnlineSection />
      </div>
    </div>



    {/*  Footer*/}
    <Footer/>
  </>
);

export default DashboardPage;
