import React from 'react'



// Import Components
import MerchantHeading from './MerchantHeading'
import MerchantNavTabs from './MerchantNavTabs ';


export default function MerchantMainTopSection () {
  return (
    <>
    <div className="merchant_main_top_section">
      <div className="container">
        <div className="row">
          <MerchantHeading />
        </div>
        <div className="row merchant_outer_inner_section">
          <div className="col-12">
            <MerchantNavTabs />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
