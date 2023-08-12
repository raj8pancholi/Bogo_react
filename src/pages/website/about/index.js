import React from 'react';

// import { Link } from 'react-router-dom';


// import header and footer
import Headers from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';


// import about page component and css
import Banner from './elements/BannerComponent'
import Merchant from './elements/merchantComponent'

const index = () => {
  return (
    <>

      <Headers />

      {/* About Banner Section */}
        <Banner />

      {/* Merchant Main Section */}
        <Merchant />


      <Footer/>
        
    </>
  );
};

export default index;
