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
