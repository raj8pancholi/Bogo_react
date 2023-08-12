import React from 'react'

// Import Footer and Header Component
import Footer from '../../../partials/footer/Footer'
import Headers from '../../../partials/header/Header'


// Import Components
import MerchantMainTopSection from './elements/MerchantMainTopSection '
import BusinessHeading from './elements/BusinessHeading'
import BusinessMap from './elements/BusinessMap'
import BusinessFormComponent from './elements/BusinessFormComponent'



// Import Css
import './style.css'

export default function index() {
  return (
    <>  
        <Headers />

        <form id="ADDbusiness"> 
          <MerchantMainTopSection />


          <div className="Business_Information_section">
            <div className="container">
                <div className='row'>
                  <div className='col-12'>
                    <BusinessHeading />
                  </div>
                </div>

                {/* map */}
                <div className='row'>
                    <BusinessMap />
                </div>

                {/* Business Section */}
                <BusinessFormComponent />

            </div>
          </div>
        </form>

        <Footer />
    </>
  )
}
