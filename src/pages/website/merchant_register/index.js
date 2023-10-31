import React from 'react'

// Import Footer and Header Component
import Footer from '../../../partials/footer/Footer'
import Headers from '../../../partials/header/Header'
import Headers1 from '../../../partials/header/Header1'
import { useParams } from 'react-router-dom';


// Import Components
import MerchantMainTopSection from './elements/MerchantMainTopSection '
import BusinessHeading from './elements/BusinessHeading'
import BusinessMap from './elements/BusinessMap'
import BusinessFormComponent from './elements/BusinessFormComponent'



// Import Css
import './style.css'
import GoogleMap from './elements/GoogleMap'

const Index=() =>{
  let { branchId } = useParams();
  return (
    <>  
       {localStorage.getItem('token') && localStorage.getItem('isLogin') ? <Headers1 /> : <Headers /> }

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
                    {/* <GoogleMap /> */}
                   <BusinessMap /> 
                </div>

                {/* Business Section */}
                <BusinessFormComponent branchId={branchId}/>

            </div>
          </div>
        </form>

        <Footer />
    </>
  )
}

export default Index;
