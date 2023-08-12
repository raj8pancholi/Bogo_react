import React from 'react'



// import Header and Footer
import Headers from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';



// Import Components
import DiroctoryHeader from './elements/DiroctoryHeader';
import MainSection from './elements/MainSection'



function Bogo_directory() {
  return (
    <>

    {/* Header */}
    <Headers />

    <DiroctoryHeader/>
    <MainSection/>




    {/* Footer */}
    <Footer/>

    </>
  )
}

export default Bogo_directory
