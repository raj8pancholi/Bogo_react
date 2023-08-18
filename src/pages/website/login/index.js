import React from 'react'


// Import Footer and Header Component
import Footer from '../../../partials/footer/Footer'
import Headers from '../../../partials/header/Header'

import LoginSection from './elements/LoginSection'

export default function index() {
  return (
    <div>
        <Headers />
       <LoginSection />
       <Footer/>
    </div>
  )
}
