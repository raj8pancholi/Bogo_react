import React, { useEffect } from 'react';


import DashboardHeader from './elements/DashboardHeader';
import VoucherCampaignOverview from './elements/VoucherCampaignOverview';
import BogoAmbassador from './elements/BogoAmbassador';
import GrowOnlineSection from './elements/GrowOnlineSection';
import Footer from '../../../partials/footer/Footer';
import Header1 from './../../../partials/header/Header1';
import { GET_ALL_BUSINESS_DETAILS } from '../../../redux/slices/merchantAuthSlice';
import { useDispatch, useSelector } from 'react-redux';

const DashboardPage = () => {

  const allBusinessData = useSelector((state) => state.merchantAuth.allBusinessData);
  
  const dispatch = useDispatch();

 
  useEffect(() => {
      dispatch(GET_ALL_BUSINESS_DETAILS()); 

  }, [dispatch]);

  return<>
  
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
                  {allBusinessData?.map(item=> <option  key={item.id} value={item.id}>{item.bName}</option>)}    
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
};

export default DashboardPage;
