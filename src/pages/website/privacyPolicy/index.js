import React from 'react'



// Import Conponents
import Footer from '../../../partials/footer/Footer.js'
import Header from '../../../partials/header/Header.js'

import Heading from './elements/Heading.js'


// Import Css
import './style.css'
import ReportsData from './elements/ReportsData';
import Confidentiality from './elements/Confidentiality.js'
import Limitation from './elements/Limitation.js'
import Miscellaneous from './elements/Miscellaneous.js'

export default function index() {
  return (
    <>
    {/* Header */}
    <Header/>
    {/* Heading */}
    <Heading />

    
    <div className="terms-condition-page-section">

        <div className="container">
            <div className="terms-condition-page-box">
                
                <ReportsData/>
                <Confidentiality/>
                <Limitation/>
                <Miscellaneous/>
            </div>
        </div>
    </div>

    






    {/* Footer */}
    <Footer/>
    </>
  )
}
