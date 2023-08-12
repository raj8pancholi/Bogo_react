import React from 'react'


// import Header and Footer
import Header1 from '../../../partials/header/Header1'
import Footer from '../../../partials/footer/Footer'




import RedeemHeader from './elements/RedeemHeader'
import MainSection from './elements/MainSection'

function Voucher_redeem() {
    return (
        <>
        {/* Header */}
        <Header1/>

                <RedeemHeader />
                <MainSection />
                
        <Footer/>

        </>
    )
}

export default Voucher_redeem
