import React from 'react'



// import header and footer
import Headers from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';



// Imports components
import HeroContactSection from './elements/HeroContactSection';
import MerchantSection from './elements/MerchantSection';


export default function index() {
  return (
    <>
      {/* Header */}
      <Headers />

        {/* Hero Contact Section */}
        <HeroContactSection/>

        {/* Merchant section*/}
        <MerchantSection/>


      {/* Footer */}
      <Footer/>
    </>
  )
}
