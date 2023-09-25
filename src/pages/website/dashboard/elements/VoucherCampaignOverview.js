import React from 'react';
import {Link} from 'react-router-dom';

const VoucherCampaignOverview = () => (
  <div className="voucher_campaign_row">
    <div className="row">
      <div className="col-md-6">
        <Link to='/campaignDashboard'>
          <div className="campaign_base">
            <h1>6</h1>
            <h3>Total Campaigns</h3>
          </div>
        </Link>
      </div>
      <div className="col-md-6">
        <Link to='/campaignDashboard'>
          <div className="redeem_voucher_base">
            <h1>45</h1>
            <h3>Vouchers Redeemed</h3>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default VoucherCampaignOverview;
