import React from 'react'
import Footer from '../../../partials/footer/Footer.js'
import Header from '../../../partials/header/Header.js'

import TermsAndConditionsPage from './elements/TermsAndConditionsPage.js'

// Import Css
import './style.css'

export default function index() {
  return (
    
    <>
        {/* Header */}
        <Header/>

       <TermsAndConditionsPage />


       {/* Footer */}
       <Footer/>
    </>
  )
}
