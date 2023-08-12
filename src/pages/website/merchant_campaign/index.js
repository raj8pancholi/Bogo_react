import React from 'react'


// Import Css
import './style.css'


// Import Conponents Header and Footer
import Footer from '../../../partials/footer/Footer.js'
import Header1 from './../../../partials/header/Header1';


// Import Component
import TabsCompenents from './elements/TabsCompenent.js'
import CampaignHeader from './elements/CampaignHeader';


export default function index() {
  return (
    <>

        {/* Header */}
        <Header1/>

          
          {/* <TabsCompenents/> */}
          <div className="campaign-header">
            <div className="container">
                <CampaignHeader/>
            </div>
          </div>



          {/* campaingn body section */}
          <div class="campaing-body-section">
            <div class="container">
              {/* <!-- Title --> */}
              <div class="compaing-body-title">
                <h3>CREATE NEW CAMPAIGN</h3>
                <h4 class="offer-text">CHOOSE OFFER TYPE</h4>
              </div>


              {/* offer type */}
              <div className="offer-row">
                  <TabsCompenents/>
              </div>


            </div>
          </div>
            
          

        {/* Footer */}
        <Footer/>
      
    </>
  )
}
